
/*
  Club Arvella image engine
  - Uses Wikimedia Commons search instead of generic image/random endpoints.
  - Each image slot gets a permanent browser-side mapping.
  - Used Wikimedia page IDs are persisted, so a photo is not assigned twice.
  - Requests are throttled and lazy-loaded for mobile.
*/
(() => {
  const STORE = "club_arvella_images_v3";
  const MAX_USED = 1200;
  const state = (() => {
    try { return JSON.parse(localStorage.getItem(STORE)) || {map:{}, used:[]}; }
    catch { return {map:{}, used:[]}; }
  })();
  state.map ||= {};
  state.used ||= [];
  const used = new Set(state.used);
  const pending = new Map();

  function save() {
    state.used = [...used].slice(-MAX_USED);
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch {}
  }

  function normalizePageId(v) { return String(v); }

  async function searchCommons(query, width) {
    const url = "https://commons.wikimedia.org/w/api.php?" + new URLSearchParams({
      action:"query", generator:"search", gsrsearch: query,
      gsrnamespace:"6", gsrlimit:"18",
      prop:"imageinfo", iiprop:"url|size|mime",
      iiurlwidth:String(width), format:"json", origin:"*"
    });
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const res = await fetch(url, {signal:controller.signal, cache:"force-cache"});
      if (!res.ok) throw new Error("image api");
      const json = await res.json();
      return Object.values(json?.query?.pages || {});
    } finally { clearTimeout(timer); }
  }

  function isUsable(p) {
    const info = p?.imageinfo?.[0];
    if (!info?.thumburl || !info?.url) return false;
    if ((info.mime || "").toLowerCase().includes("svg")) return false;
    if ((info.width || 0) < 700 || (info.height || 0) < 400) return false;
    const title = String(p.title || "").toLowerCase();
    if (/\\b(logo|map|flag|diagram|poster|icon|coat of arms)\\b/.test(title)) return false;
    return !used.has(normalizePageId(p.pageid));
  }

  async function resolve(key, query, width=1200) {
    if (state.map[key]) return state.map[key];
    if (pending.has(key)) return pending.get(key);
    const job = (async () => {
      const queries = [
        query,
        query.replace(/,\s*landmark travel/i,""),
        query.replace(/scenic travel landscape/i,"tourism"),
      ];
      for (const q of queries) {
        try {
          const pages = await searchCommons(q, width);
          for (const p of pages) {
            if (!isUsable(p)) continue;
            const info = p.imageinfo[0];
            const value = {pageid:normalizePageId(p.pageid), src:info.thumburl, original:info.url, title:p.title};
            used.add(value.pageid);
            state.map[key] = value;
            save();
            return value;
          }
        } catch {}
      }
      return null;
    })();
    pending.set(key, job);
    try { return await job; } finally { pending.delete(key); }
  }

  function setImage(img, value) {
    if (!value) {
      img.classList.add("image-unavailable");
      return;
    }
    img.src = value.src;
    img.dataset.imagePageid = value.pageid;
    img.classList.add("image-ready");
  }

  async function load(img) {
    if (!img || img.dataset.imageState === "loading" || img.dataset.imageState === "done") return;
    img.dataset.imageState = "loading";
    const key = img.dataset.imageKey || `dom:${[...document.querySelectorAll("[data-arvella-image]")].indexOf(img)}`;
    const query = img.dataset.imageQuery || img.alt || "travel destination";
    const width = Math.min(1600, Math.max(900, Number(img.dataset.imageWidth || 1200)));
    const value = await resolve(key, query, width);
    setImage(img, value);
    img.dataset.imageState = "done";
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        load(entry.target);
      }
    });
  }, {rootMargin:"700px 0px"});

  function observe(root=document) {
    root.querySelectorAll?.("[data-arvella-image]").forEach(img => observer.observe(img));
  }

  window.ArvellaImages = {load, observe};

  document.addEventListener("DOMContentLoaded", () => {
    observe(document);
    // Hero/detail images can opt into eager loading.
    document.querySelectorAll("[data-image-eager]").forEach(load);
  });
})();
