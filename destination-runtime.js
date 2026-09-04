document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("place") || "").toLowerCase();
  const data = window.CLUB_ARVELLA_DESTINATIONS?.[slug];
  if (!data) return;

  const wikiTitles = {
    kashmir: "Kashmir", goa: "Goa", manali: "Manali", rajasthan: "Rajasthan",
    kerala: "Kerala", ladakh: "Ladakh", andaman: "Andaman and Nicobar Islands",
    mumbai: "Mumbai", agra: "Agra", jaipur: "Jaipur", udaipur: "Udaipur",
    delhi: "Delhi", varanasi: "Varanasi", rishikesh: "Rishikesh", shimla: "Shimla",
    darjeeling: "Darjeeling", ooty: "Ooty, India", coorg: "Kodagu", mysore: "Mysore",
    amritsar: "Amritsar", nainital: "Nainital", mussoorie: "Mussoorie", meghalaya: "Meghalaya",
    sikkim: "Sikkim", pondicherry: "Puducherry", mahabaleshwar: "Mahabaleshwar",
    kodaikanal: "Kodaikanal", hampi: "Hampi", hyderabad: "Hyderabad", bengaluru: "Bangalore"
  };

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
  const heroTitle = wikiTitles[slug] || data.name;
  if (window.ClubArvellaImages) {
    window.ClubArvellaImages.get(heroTitle).then(url => {
      if (url) hero.style.setProperty("--destination-hero", `url("${url}")`);
    });
  }

  const topPlaces = document.getElementById("topPlaces");
  topPlaces.innerHTML = data.places.map((place, index) => `
    <article class="place-card">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
           data-wiki="${place[0]} ${data.name} India"
           data-destination-image="1"
           alt="${place[0]} in ${data.name}"
           loading="lazy" decoding="async">
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

  // Run after the three place cards have been inserted.
  if (window.ClubArvellaImages) window.ClubArvellaImages.loadAll(topPlaces);
});
