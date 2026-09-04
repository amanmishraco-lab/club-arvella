document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("place") || "").toLowerCase();
  const data = window.CLUB_ARVELLA_DESTINATIONS?.[slug];

  if (!data) return;

  document.title = `${data.name} | Club Arvella`;
  document.getElementById("destinationName").textContent = data.name;
  document.getElementById("destinationTagline").textContent = data.tagline;
  document.getElementById("detailsHeading").textContent = `Discover ${data.name} in Style.`;
  document.getElementById("destinationDescription").textContent =
    `${data.name} is curated for travellers who want a balanced mix of iconic experiences, local character and comfortable pacing.`;

  document.getElementById("bestTime").textContent = data.bestTime;
  document.getElementById("duration").textContent = data.duration;
  document.getElementById("travelStyle").textContent = data.style;
  document.getElementById("bestFor").textContent = data.bestFor;
  document.getElementById("ctaTitle").textContent = `Ready To Explore ${data.name}?`;

  const hero = document.getElementById("destinationHero");
  hero.style.setProperty("--destination-hero", `url("${data.heroImage}")`);

  const topPlaces = document.getElementById("topPlaces");
  topPlaces.innerHTML = data.places.map((place, index) => `
    <article class="place-card">
      <img src="${place[5]}" alt="${place[0]} in ${data.name}" loading="lazy">
      <div class="place-card-content">
        <span class="place-number">0${index + 1}</span>
        <h3>${place[0]}</h3>
        <p>${place[1]}</p>
        <div class="place-meta">
          <div><span>BEST TIME</span><b>${place[2]}</b></div>
          <div><span>TIME TO EXPLORE</span><b>${place[3]}</b></div>
        </div>
      </div>
    </article>
  `).join("");
});
