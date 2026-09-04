(() => {
  const API = "https://en.wikipedia.org/api/rest_v1/page/summary/";
  const cache = new Map();

  const aliases = {
    "Ooty, India": ["Ooty", "Udhagamandalam"],
    "Kodagu": ["Kodagu", "Coorg"],
    "Bangalore": ["Bangalore", "Bengaluru"],
    "Puducherry": ["Puducherry", "Pondicherry"],
    "Andaman and Nicobar Islands": ["Andaman and Nicobar Islands", "Andaman Islands"],
    "Mysore": ["Mysore", "Mysuru"],
    "Beach": ["Beach", "Tourism in India"],
    "Nature": ["Nature", "India"],
    "Mountains": ["Himalayas", "Himalayan mountain range"],
    "Tourism in India": ["Tourism in India", "India"]
  };

  async function fetchTitle(title) {
    const key = String(title || "").trim();
    if (!key) return null;
    if (cache.has(key)) return cache.get(key);

    const candidates = aliases[key] || [key];
    for (const candidate of candidates) {
      try {
        const response = await fetch(API + encodeURIComponent(candidate.replace(/ /g, "_")), {
          headers: { "Accept": "application/json" }
        });
        if (!response.ok) continue;
        const json = await response.json();
        const url = json?.originalimage?.source || json?.thumbnail?.source || null;
        if (url) {
          cache.set(key, url);
          return url;
        }
      } catch (_) {}
    }
    cache.set(key, null);
    return null;
  }

  async function loadImage(img) {
    if (!img || img.dataset.imageRequested === "1") return;
    img.dataset.imageRequested = "1";
    const title = img.dataset.wiki || img.alt;
    const url = await fetchTitle(title);
    if (!url) return;

    const preload = new Image();
    preload.decoding = "async";
    preload.onload = () => {
      img.src = url;
      img.classList.add("image-loaded");
      img.removeAttribute("data-image-requested");
    };
    preload.onerror = () => {
      // Keep the premium placeholder instead of a broken-image icon.
      img.classList.remove("image-loaded");
    };
    preload.src = url;
  }

  function loadAll(root = document) {
    root.querySelectorAll("img[data-wiki]").forEach(loadImage);
  }

  window.ClubArvellaImages = { get: fetchTitle, loadImage, loadAll };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => loadAll());
  } else {
    loadAll();
  }
})();
