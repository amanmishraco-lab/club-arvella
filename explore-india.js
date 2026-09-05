/* =========================================================
   CLUB ARVELLA — EXPLORE INDIA
   30 INDIAN DESTINATIONS
   Fixed destination → fixed image mapping
========================================================= */

const INDIA_DESTINATIONS = [

  {
    slug: "kashmir",
    name: "Kashmir",
    region: "north",
    styles: ["nature", "luxury", "adventure"],
    seasons: ["summer", "winter"],
    tagline: "Valleys, lakes & Himalayan beauty",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "ladakh",
    name: "Ladakh",
    region: "north",
    styles: ["adventure", "nature"],
    seasons: ["summer"],
    tagline: "High passes & unforgettable landscapes",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "north",
    styles: ["nature", "adventure", "luxury"],
    seasons: ["summer", "winter"],
    tagline: "Mountains, forests & charming hill towns",
    image: "https://images.unsplash.com/photo-1623059508824-0e4e3a2f3a7d?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    region: "north",
    styles: ["nature", "adventure", "culture"],
    seasons: ["summer", "winter"],
    tagline: "Himalayas, rivers & spiritual escapes",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "rajasthan",
    name: "Rajasthan",
    region: "west",
    styles: ["heritage", "luxury", "culture"],
    seasons: ["winter"],
    tagline: "Palaces, forts & royal experiences",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "goa",
    name: "Goa",
    region: "west",
    styles: ["beach", "luxury"],
    seasons: ["winter", "year-round"],
    tagline: "Beaches, sunsets & relaxed luxury",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "gujarat",
    name: "Gujarat",
    region: "west",
    styles: ["culture", "heritage", "nature"],
    seasons: ["winter"],
    tagline: "Heritage, wildlife & vibrant culture",
    image: "https://images.unsplash.com/photo-1600100397608-f010f4b7d4c7?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "maharashtra",
    name: "Maharashtra",
    region: "west",
    styles: ["city", "heritage", "nature"],
    seasons: ["winter", "monsoon"],
    tagline: "Mumbai, forts & dramatic landscapes",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "kerala",
    name: "Kerala",
    region: "south",
    styles: ["nature", "luxury", "beach"],
    seasons: ["winter", "monsoon"],
    tagline: "Backwaters, beaches & tropical serenity",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    region: "south",
    styles: ["heritage", "culture", "beach"],
    seasons: ["winter", "year-round"],
    tagline: "Temples, traditions & coastal beauty",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "karnataka",
    name: "Karnataka",
    region: "south",
    styles: ["heritage", "nature", "adventure"],
    seasons: ["winter", "monsoon"],
    tagline: "Ancient ruins, coffee hills & coast",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    region: "south",
    styles: ["heritage", "culture", "nature"],
    seasons: ["winter"],
    tagline: "Temples, coastline & cultural heritage",
    image: "https://images.unsplash.com/photo-1621429408206-1d4c9f0d8b1e?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "telangana",
    name: "Telangana",
    region: "south",
    styles: ["heritage", "culture", "city"],
    seasons: ["winter", "year-round"],
    tagline: "Royal heritage & vibrant Hyderabad",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "andaman-islands",
    name: "Andaman Islands",
    region: "islands",
    styles: ["beach", "adventure", "luxury"],
    seasons: ["winter"],
    tagline: "Turquoise waters & tropical escapes",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "lakshadweep",
    name: "Lakshadweep",
    region: "islands",
    styles: ["beach", "luxury", "nature"],
    seasons: ["winter"],
    tagline: "Coral islands & crystal-clear seas",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "sikkim",
    name: "Sikkim",
    region: "north-east",
    styles: ["nature", "adventure", "culture"],
    seasons: ["summer", "winter"],
    tagline: "Mountain monasteries & Himalayan views",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "meghalaya",
    name: "Meghalaya",
    region: "north-east",
    styles: ["nature", "adventure"],
    seasons: ["summer", "monsoon"],
    tagline: "Waterfalls, caves & living root bridges",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "assam",
    name: "Assam",
    region: "north-east",
    styles: ["nature", "culture"],
    seasons: ["winter"],
    tagline: "Tea gardens & extraordinary wildlife",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    region: "north-east",
    styles: ["nature", "adventure", "culture"],
    seasons: ["summer", "winter"],
    tagline: "Untouched Himalayan wilderness",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "nagaland",
    name: "Nagaland",
    region: "north-east",
    styles: ["culture", "nature", "adventure"],
    seasons: ["winter"],
    tagline: "Tribal traditions & mountain landscapes",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "tripura",
    name: "Tripura",
    region: "north-east",
    styles: ["heritage", "culture", "nature"],
    seasons: ["winter"],
    tagline: "Palaces, forests & ancient heritage",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "central",
    styles: ["heritage", "nature", "adventure"],
    seasons: ["winter"],
    tagline: "Wildlife, temples & timeless heritage",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    region: "central",
    styles: ["nature", "adventure", "culture"],
    seasons: ["winter"],
    tagline: "Waterfalls, forests & tribal culture",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "north",
    styles: ["heritage", "culture"],
    seasons: ["winter"],
    tagline: "Taj Mahal, Varanasi & sacred India",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "west-bengal",
    name: "West Bengal",
    region: "east",
    styles: ["culture", "heritage", "nature"],
    seasons: ["winter"],
    tagline: "Kolkata, Darjeeling & Sundarbans",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "odisha",
    name: "Odisha",
    region: "east",
    styles: ["heritage", "culture", "beach"],
    seasons: ["winter"],
    tagline: "Temples, beaches & ancient traditions",
    image: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "bihar",
    name: "Bihar",
    region: "east",
    styles: ["heritage", "culture"],
    seasons: ["winter"],
    tagline: "Buddhist heritage & ancient India",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "delhi",
    name: "Delhi",
    region: "north",
    styles: ["city", "heritage", "culture"],
    seasons: ["winter"],
    tagline: "India's historic and modern capital",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "punjab",
    name: "Punjab",
    region: "north",
    styles: ["heritage", "culture", "food"],
    seasons: ["winter"],
    tagline: "Golden temples, history & vibrant culture",
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=1000&q=82"
  },

  {
    slug: "pondicherry",
    name: "Pondicherry",
    region: "south",
    styles: ["beach", "culture", "luxury"],
    seasons: ["winter", "year-round"],
    tagline: "French charm, beaches & slow living",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=82"
  }

];


/* =========================================================
   RENDER
========================================================= */

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const styleFilter = document.getElementById("styleFilter");
const seasonFilter = document.getElementById("seasonFilter");
const resetBtn = document.getElementById("resetBtn");
const emptyState = document.getElementById("emptyState");


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
    INDIA_DESTINATIONS.filter(item => {

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
          href="destination.html?region=india&place=${item.slug}"
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
   EVENTS
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
