/* =========================================================
   CLUB ARVELLA — EXPLORE WORLD
   30 INTERNATIONAL DESTINATIONS
========================================================= */

const WORLD_DESTINATIONS = [

  {
    slug: "dubai",
    name: "Dubai",
    region: "middle-east",
    styles: ["luxury", "city"],
    seasons: ["winter", "year-round"],
    tagline: "Iconic luxury, desert adventures & skyline",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "maldives",
    name: "Maldives",
    region: "asia",
    styles: ["beach", "luxury"],
    seasons: ["winter", "year-round"],
    tagline: "Private islands & turquoise waters",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "singapore",
    name: "Singapore",
    region: "asia",
    styles: ["city", "luxury", "culture"],
    seasons: ["year-round"],
    tagline: "Futuristic city life & culinary experiences",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "thailand",
    name: "Thailand",
    region: "asia",
    styles: ["beach", "culture", "adventure"],
    seasons: ["winter", "year-round"],
    tagline: "Islands, temples & tropical escapes",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "bali",
    name: "Bali",
    region: "asia",
    styles: ["beach", "nature", "luxury"],
    seasons: ["summer", "year-round"],
    tagline: "Rice terraces, temples & island luxury",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "malaysia",
    name: "Malaysia",
    region: "asia",
    styles: ["city", "culture", "nature"],
    seasons: ["year-round"],
    tagline: "Modern cities, islands & rainforests",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "mauritius",
    name: "Mauritius",
    region: "africa",
    styles: ["beach", "luxury", "nature"],
    seasons: ["summer", "winter"],
    tagline: "Indian Ocean beaches & island luxury",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "switzerland",
    name: "Switzerland",
    region: "europe",
    styles: ["nature", "luxury", "adventure"],
    seasons: ["summer", "winter"],
    tagline: "Alpine villages, lakes & scenic railways",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "france",
    name: "France",
    region: "europe",
    styles: ["luxury", "culture", "city"],
    seasons: ["summer", "winter"],
    tagline: "Paris, Riviera & timeless elegance",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "italy",
    name: "Italy",
    region: "europe",
    styles: ["culture", "heritage", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Art, cuisine, coastlines & ancient cities",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "greece",
    name: "Greece",
    region: "europe",
    styles: ["beach", "culture", "luxury"],
    seasons: ["summer"],
    tagline: "Whitewashed islands & Mediterranean beauty",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "spain",
    name: "Spain",
    region: "europe",
    styles: ["beach", "culture", "city"],
    seasons: ["summer", "year-round"],
    tagline: "Architecture, beaches & vibrant culture",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "united-kingdom",
    name: "United Kingdom",
    region: "europe",
    styles: ["culture", "heritage", "city"],
    seasons: ["summer", "year-round"],
    tagline: "Royal heritage, countryside & iconic cities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "turkey",
    name: "Turkey",
    region: "europe",
    styles: ["culture", "heritage", "adventure"],
    seasons: ["summer", "winter"],
    tagline: "Ancient wonders & spectacular landscapes",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "austria",
    name: "Austria",
    region: "europe",
    styles: ["culture", "nature", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Alpine scenery, music & imperial heritage",
    image: "https://images.unsplash.com/photo-1524396309943-e03f5249f002?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "germany",
    name: "Germany",
    region: "europe",
    styles: ["heritage", "culture", "city"],
    seasons: ["summer", "winter"],
    tagline: "Castles, cities & rich European heritage",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "netherlands",
    name: "Netherlands",
    region: "europe",
    styles: ["culture", "city", "nature"],
    seasons: ["summer"],
    tagline: "Canals, cycling & Dutch countryside",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "australia",
    name: "Australia",
    region: "oceania",
    styles: ["nature", "beach", "city"],
    seasons: ["summer", "winter"],
    tagline: "Iconic cities, reefs & wild landscapes",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d8?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "oceania",
    styles: ["nature", "adventure", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Dramatic mountains, lakes & adventure",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "japan",
    name: "Japan",
    region: "asia",
    styles: ["culture", "city", "nature"],
    seasons: ["spring", "winter"],
    tagline: "Ancient traditions & futuristic cities",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "south-korea",
    name: "South Korea",
    region: "asia",
    styles: ["city", "culture", "nature"],
    seasons: ["spring", "winter"],
    tagline: "Seoul energy, palaces & mountain escapes",
    image: "https://images.unsplash.com/photo-1538485399081-7c897f1f7e0c?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "vietnam",
    name: "Vietnam",
    region: "asia",
    styles: ["culture", "nature", "adventure"],
    seasons: ["winter", "year-round"],
    tagline: "Ha Long Bay, heritage & local flavours",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "indonesia",
    name: "Indonesia",
    region: "asia",
    styles: ["beach", "nature", "adventure"],
    seasons: ["summer", "year-round"],
    tagline: "Volcanoes, islands & tropical adventures",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    region: "asia",
    styles: ["beach", "culture", "nature"],
    seasons: ["winter", "year-round"],
    tagline: "Tea country, temples & tropical coast",
    image: "https://images.unsplash.com/photo-1588598198321-9735fd524d0b?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "seychelles",
    name: "Seychelles",
    region: "africa",
    styles: ["beach", "luxury", "nature"],
    seasons: ["year-round"],
    tagline: "Granite islands & pristine beaches",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "south-africa",
    name: "South Africa",
    region: "africa",
    styles: ["nature", "adventure", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Safari, wine country & dramatic coastlines",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "egypt",
    name: "Egypt",
    region: "africa",
    styles: ["heritage", "culture", "adventure"],
    seasons: ["winter"],
    tagline: "Pyramids, Nile cruises & ancient wonders",
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "usa",
    name: "USA",
    region: "americas",
    styles: ["city", "nature", "adventure"],
    seasons: ["summer", "winter"],
    tagline: "Iconic cities, national parks & endless variety",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "canada",
    name: "Canada",
    region: "americas",
    styles: ["nature", "adventure", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Rockies, lakes & spectacular wilderness",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "norway",
    name: "Norway",
    region: "europe",
    styles: ["nature", "adventure", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Fjords, northern lights & Arctic beauty",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=82"
  }

];


/* =========================================================
   ELEMENTS
========================================================= */

const grid =
  document.getElementById("destinationGrid");

const searchInput =
  document.getElementById("searchInput");

const regionFilter =
  document.getElementById("regionFilter");

const styleFilter =
  document.getElementById("styleFilter");

const seasonFilter =
  document.getElementById("seasonFilter");

const resetBtn =
  document.getElementById("resetBtn");

const emptyState =
  document.getElementById("emptyState");


/* =========================================================
   RENDER DESTINATIONS
========================================================= */

function renderDestinations() {

  const search =
    searchInput.value
      .trim()
      .toLowerCase();

  const region =
    regionFilter.value;

  const style =
    styleFilter.value;

  const season =
    seasonFilter.value;


  const filtered =
    WORLD_DESTINATIONS.filter(item => {

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.tagline.toLowerCase().includes(search);


      const matchesRegion =
        region === "all" ||
        item.region === region;


      const matchesStyle =
        style === "all" ||
        item.styles.includes(style);


      const matchesSeason =
        season === "all" ||
        item.seasons.includes(season);


      return (
        matchesSearch &&
        matchesRegion &&
        matchesStyle &&
        matchesSeason
      );

    });


  grid.innerHTML = "";


  emptyState.hidden =
    filtered.length !== 0;


  filtered.forEach((item, index) => {

    const card =
      document.createElement("article");

    card.className =
      "destination-card";


    card.innerHTML = `

      <div class="destination-image-wrap">

        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          decoding="async"
        >

        <span class="destination-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

      </div>


      <div class="destination-info">

        <h2>
          ${item.name}
        </h2>

        <p>
          ${item.tagline}
        </p>


        <a
          class="explore-link"
          href="destination.html?region=world&place=${item.slug}"
        >
          EXPLORE
          <span>→</span>
        </a>

      </div>

    `;


    grid.appendChild(card);

  });

}


/* =========================================================
   FILTER EVENTS
========================================================= */

searchInput.addEventListener(
  "input",
  renderDestinations
);

regionFilter.addEventListener(
  "change",
  renderDestinations
);

styleFilter.addEventListener(
  "change",
  renderDestinations
);

seasonFilter.addEventListener(
  "change",
  renderDestinations
);


/* =========================================================
   RESET
========================================================= */

resetBtn.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    regionFilter.value = "all";

    styleFilter.value = "all";

    seasonFilter.value = "all";

    renderDestinations();

  }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


if (menuBtn && navLinks) {

  menuBtn.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "mobile-open"
      );


      menuBtn.textContent =
        navLinks.classList.contains(
          "mobile-open"
        )
          ? "CLOSE"
          : "MENU";

    }
  );

}


/* =========================================================
   START
========================================================= */

renderDestinations();
