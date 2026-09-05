
(() => {
  const data = window.CLUB_ARVELLA_DESTINATIONS || {};
  const params = new URLSearchParams(location.search);
  const region = params.get("region") || "india";
  const slug = params.get("place") || "";
  const list = data[region] || [];
  const d = list.find(x => x.slug === slug) || list[0];
  const root = document.getElementById("destinationDetail");

  if (!d) {
    root.innerHTML = `<main class="detail-main"><h1>Destination not found</h1><a class="back-link" href="india.html">RETURN</a></main>`;
    return;
  }

  document.title = `${d.name} | Club Arvella`;
  const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
  const home = region === "world" ? "world.html" : "india.html";
  const nextQuery = d.places.map(p => `${p.name}, ${d.name}, ${d.country}`).join(" | ");

  const days = [
    `Arrive in ${d.name}; private transfer, premium check-in and a relaxed first evening.`,
    `Explore the signature sights and experiences around ${d.places[0].name}.`,
    `Continue to ${d.places[1].name}; keep the afternoon flexible for a curated experience.`,
    `Discover ${d.places[2].name} and enjoy the destination at an unhurried pace.`,
    `Leisure day for local food, shopping, wellness or an optional experience.`,
    `Final scenic morning, relaxed check-out and departure.`,
  ];

  root.innerHTML = `
    <section class="detail-hero">
      <img data-arvella-image data-image-eager data-image-key="${region}:${d.slug}:hero" data-image-query="${esc(d.heroQuery)}" data-image-width="1600" alt="${esc(d.name)}" width="1600" height="1000">
      <div class="detail-hero-content">
        <div class="ca-eyebrow">${esc(region.toUpperCase())} • CLUB ARVELLA JOURNEY</div>
        <h1>${esc(d.name)}</h1>
        <p class="detail-tagline">${esc(d.tagline)}. ${esc(d.description)}</p>
        <div class="detail-meta">
          <span class="detail-pill">BEST TIME · ${esc(d.bestTime)}</span>
          <span class="detail-pill">IDEAL · ${esc(d.duration)}</span>
          <span class="detail-pill">${esc(d.country)}</span>
        </div>
      </div>
    </section>

    <main class="detail-main">
      <a class="back-link" href="${home}">← BACK TO ${region === "world" ? "WORLD" : "INDIA"}</a>
      <section class="detail-intro">
        <div>
          <div class="detail-eyebrow">WHY GO</div>
          <h2>A journey designed around the character of ${esc(d.name)}.</h2>
          <p>${esc(d.description)} ${esc(d.tagline)} Whether you want a relaxed break, a family holiday, a romantic escape or a culture-led itinerary, this route gives Club Arvella a strong starting point for a personalised plan.</p>
        </div>
        <aside class="detail-facts">
          <div class="fact"><b>BEST TIME</b><span>${esc(d.bestTime)}</span></div>
          <div class="fact"><b>IDEAL DURATION</b><span>${esc(d.duration)}</span></div>
          <div class="fact"><b>TRAVEL STYLE</b><span>Premium, personalised & flexible</span></div>
          <div class="fact"><b>PLAN WITH US</b><span>Hotels, transfers, experiences & itinerary support</span></div>
        </aside>
      </section>

      <section class="detail-section">
        <div class="detail-section-head">
          <div class="detail-eyebrow">CURATED HIGHLIGHTS</div>
          <h2>Top 3 places to experience.</h2>
          <p>Three signature stops to anchor your first Club Arvella journey through ${esc(d.name)}.</p>
        </div>
        <div class="place-grid">
          ${d.places.map((p,i)=>`
            <article class="place-card">
              <img data-arvella-image data-image-key="${region}:${d.slug}:place:${i+1}" data-image-query="${esc(p.imageQuery)}" data-image-width="1100" alt="${esc(p.name)}" width="1100" height="750" loading="lazy" decoding="async">
              <div class="place-copy">
                <div class="place-number">0${i+1} • HIGHLIGHT</div>
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.description)}</p>
              </div>
            </article>`).join("")}
        </div>
      </section>

      <section class="detail-section">
        <div class="detail-section-head">
          <div class="detail-eyebrow">SUGGESTED ITINERARY</div>
          <h2>A relaxed 6-day flow.</h2>
          <p>This is a planning framework. Club Arvella can adjust nights, hotels, experiences and pace around your membership or holiday requirement.</p>
        </div>
        <div class="itinerary">
          ${days.map((x,i)=>`<div class="day"><b>DAY ${i+1}</b><span>${esc(x)}</span></div>`).join("")}
        </div>
      </section>

      <section class="detail-cta">
        <div><h2>Make ${esc(d.name)} yours.</h2><p>Tell us your dates, travellers and preferred style. We’ll shape the journey around you.</p></div>
        <a class="detail-btn" href="contact.html?destination=${encodeURIComponent(d.name)}">PLAN THIS TRIP →</a>
      </section>
    </main>
  `;
  if (window.ArvellaImages) window.ArvellaImages.observe(root);
})();
