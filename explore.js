
(() => {
  const data = window.CLUB_ARVELLA_DESTINATIONS || {};
  const pageRegion = document.body.dataset.region || "india";
  const destinations = data[pageRegion] || [];
  const requestedPlace = new URLSearchParams(location.search).get("place");
  if (requestedPlace) {
    const match = destinations.find(x => x.slug === requestedPlace);
    if (match) {
      location.replace(`destination.html?region=${encodeURIComponent(pageRegion)}&place=${encodeURIComponent(match.slug)}`);
      return;
    }
  }
  const grid = document.getElementById("destinationGrid");
  const search = document.getElementById("destinationSearch");
  const count = document.getElementById("destinationCount");
  const filters = document.getElementById("destinationFilters");
  const menu = document.getElementById("caMenu");
  const links = document.getElementById("caLinks");

  const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

  function card(d, i) {
    const key = `${pageRegion}:${d.slug}:card`;
    return `<a class="ca-card" href="destination.html?region=${encodeURIComponent(pageRegion)}&place=${encodeURIComponent(d.slug)}" data-search="${esc((d.name+' '+d.tagline+' '+d.country).toLowerCase())}">
      <img data-arvella-image data-image-key="${key}" data-image-query="${esc(d.heroQuery)}" alt="${esc(d.name)}" width="900" height="650" loading="lazy" decoding="async">
      <div class="ca-card-copy">
        <div class="ca-card-num">${String(i+1).padStart(2,'0')} • ${esc(pageRegion.toUpperCase())}</div>
        <h2>${esc(d.name)}</h2>
        <p>${esc(d.tagline)}</p>
        <span class="ca-card-link">VIEW JOURNEY →</span>
      </div>
    </a>`;
  }

  function render() {
    const q = (search?.value || "").trim().toLowerCase();
    const active = filters?.querySelector(".active")?.dataset.filter || "all";
    const list = destinations.filter(d => {
      const hay = `${d.name} ${d.tagline} ${d.country}`.toLowerCase();
      const qok = !q || hay.includes(q);
      let fok = true;
      if (active === "mountains") fok = /mountain|himalaya|alpine|hill|high|fjord|lake|valley|arctic|snow/i.test(hay);
      if (active === "beach") fok = /beach|island|coast|ocean|lagoon|tropical|sea/i.test(hay);
      if (active === "culture") fok = /heritage|culture|temple|city|royal|history|art|sacred|tradition/i.test(hay);
      if (active === "luxury") fok = /luxury|elegance|sophistication|resort|royal/i.test(hay);
      return qok && fok;
    });
    grid.innerHTML = list.length ? list.map((d) => card(d, destinations.indexOf(d))).join("") :
      `<div class="ca-empty"><strong>No destinations found.</strong><br>Try another search or filter.</div>`;
    count.textContent = `${list.length} destination${list.length === 1 ? "" : "s"} available`;
    if (window.ArvellaImages) window.ArvellaImages.observe(grid);
  }

  filters?.addEventListener("click", e => {
    const b = e.target.closest(".ca-filter");
    if (!b) return;
    filters.querySelectorAll(".ca-filter").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    render();
  });
  search?.addEventListener("input", render);
  menu?.addEventListener("click", () => links?.classList.toggle("mobile-open"));
  render();
})();
