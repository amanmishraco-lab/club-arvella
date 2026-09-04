document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const slug = (params.get("place") || "").toLowerCase();

  const data = window.CLUB_ARVELLA_DESTINATIONS?.[slug];

  if (!data) {
    console.error("Destination not found:", slug);
    return;
  }


  /* =========================================
     PAGE TEXT
  ========================================= */

  document.title = `${data.name} | Club Arvella`;

  const destinationName = document.getElementById("destinationName");
  const destinationTagline = document.getElementById("destinationTagline");
  const detailsHeading = document.getElementById("detailsHeading");
  const destinationDescription =
    document.getElementById("destinationDescription");

  if (destinationName) {
    destinationName.textContent = data.name;
  }

  if (destinationTagline) {
    destinationTagline.textContent = data.tagline;
  }

  if (detailsHeading) {
    detailsHeading.textContent = `Discover ${data.name} in Style.`;
  }

  if (destinationDescription) {
    destinationDescription.textContent =
      `${data.name} is curated for travellers who want a balanced mix of iconic experiences, local character and comfortable pacing.`;
  }


  /* =========================================
     DESTINATION INFORMATION
  ========================================= */

  const bestTime = document.getElementById("bestTime");
  const duration = document.getElementById("duration");
  const travelStyle = document.getElementById("travelStyle");
  const bestFor = document.getElementById("bestFor");

  if (bestTime) {
    bestTime.textContent = data.bestTime;
  }

  if (duration) {
    duration.textContent = data.duration;
  }

  if (travelStyle) {
    travelStyle.textContent = data.style;
  }

  if (bestFor) {
    bestFor.textContent = data.bestFor;
  }


  /* =========================================
     CTA
  ========================================= */

  const ctaTitle = document.getElementById("ctaTitle");

  if (ctaTitle) {
    ctaTitle.textContent =
      `Ready To Explore ${data.name}?`;
  }


  /* =========================================
     HERO IMAGE
     Direct image from destination-data.js
  ========================================= */

  const hero = document.getElementById("destinationHero");

  if (hero && data.heroImage) {

    hero.style.backgroundImage =
      `linear-gradient(
        90deg,
        rgba(7, 26, 43, 0.88),
        rgba(7, 26, 43, 0.55)
      ),
      url("${data.heroImage}")`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";

  }


  /* =========================================
     TOP 3 PLACES
     Direct image from destination-data.js
  ========================================= */

  const topPlaces = document.getElementById("topPlaces");

  if (!topPlaces || !data.places) return;


  topPlaces.innerHTML = data.places
    .map((place, index) => {

      /*
        Current destination-data.js structure:

        place[0] = Place Name
        place[1] = Description
        place[2] = Best Time
        place[3] = Time To Explore
        place[4] = Keywords
        place[5] = Image URL
      */

      const imageUrl = place[5];

      return `

        <article class="place-card">

          <div class="place-image">

            <img
              src="${imageUrl}"
              alt="${place[0]} in ${data.name}"
              loading="eager"
              decoding="async"
              onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
            >

          </div>


          <div class="place-card-content">

            <span class="place-number">
              ${String(index + 1).padStart(2, "0")}
            </span>


            <h3>${place[0]}</h3>


            <p>${place[1]}</p>


            <div class="place-meta">

              <div>

                <span>BEST TIME</span>

                <b>${place[2]}</b>

              </div>


              <div>

                <span>TIME TO EXPLORE</span>

                <b>${place[3]}</b>

              </div>

            </div>

          </div>

        </article>

      `;

    })
    .join("");

});
