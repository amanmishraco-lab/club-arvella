/* =========================================
   CLUB ARVELLA - SUPABASE
========================================= */

const SUPABASE_URL = "https://vnuvidqgfdufhkvivfki.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_ZE4do_lwZXvbsvtsD9bpfA_U1_LvuSL";

const supabase = window.supabase
  ? window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    )
  : null;


/* =========================================
   INDIA DESTINATIONS
========================================= */

const india = [

  [
    "Rajasthan",
    "Jaipur",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    "The Pink City combines royal palaces, historic forts, colourful bazaars and Rajasthan's legendary hospitality into an unforgettable cultural journey."
  ],

  [
    "Rajasthan",
    "Udaipur",
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80",
    "Known for shimmering lakes and romantic palaces, Udaipur offers a refined blend of heritage, luxury hotels and timeless Rajput architecture."
  ],

  [
    "Kerala",
    "Munnar",
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    "Rolling tea gardens, cool mountain air and mist-covered landscapes make Munnar one of India's most peaceful premium escapes."
  ],

  [
    "Goa",
    "North Goa",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "A lively blend of beaches, nightlife, heritage and coastal dining, North Goa is ideal for travellers seeking energy and relaxation."
  ],

  [
    "Uttar Pradesh",
    "Agra",
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "Agra offers one of the world's most iconic monuments alongside Mughal heritage, remarkable architecture and unforgettable cultural experiences."
  ],

  [
    "Uttarakhand",
    "Rishikesh",
    "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80",
    "Set beside the Ganges and Himalayan foothills, Rishikesh brings together spirituality, wellness, adventure and spectacular natural scenery."
  ],

  [
    "Jammu & Kashmir",
    "Srinagar",
    "https://images.unsplash.com/photo-1566837497312-7be7830ae06e?auto=format&fit=crop&w=1200&q=80",
    "Srinagar is celebrated for serene lakes, houseboats, Mughal gardens and dramatic Himalayan surroundings that define a classic Kashmir escape."
  ],

  [
    "Tamil Nadu",
    "Ooty",
    "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80",
    "Cool weather, green hills and colonial charm make Ooty a timeless hill-station holiday destination for families and couples."
  ],

  [
    "West Bengal",
    "Darjeeling",
    "https://images.unsplash.com/photo-1544631347-7d9d63c70b7d?auto=format&fit=crop&w=1200&q=80",
    "Tea estates, mountain views and a distinctive Himalayan atmosphere make Darjeeling one of India's most memorable scenic escapes."
  ]

];


/* =========================================
   WORLD DESTINATIONS
========================================= */

const world = [

  [
    "Paris",
    "France",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "Paris is a timeless celebration of art, fashion, cuisine and architecture, offering iconic landmarks and elegant experiences at every turn."
  ],

  [
    "Dubai",
    "United Arab Emirates",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "Dubai combines extraordinary modern architecture, luxury shopping, desert adventures and world-class hospitality."
  ],

  [
    "London",
    "United Kingdom",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "London blends royal heritage, global culture, theatre, museums and contemporary energy."
  ],

  [
    "New York City",
    "USA",
    "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
    "New York City delivers iconic skylines, Broadway, museums and an unmatched energy."
  ],

  [
    "Tokyo",
    "Japan",
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    "Tokyo is a fascinating meeting point of ancient traditions, futuristic technology and exceptional food."
  ],

  [
    "Rome",
    "Italy",
    "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
    "Rome invites travellers to walk through centuries of history while enjoying remarkable art and architecture."
  ],

  [
    "Singapore",
    "Singapore",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    "Singapore offers futuristic attractions, lush gardens, exceptional dining and a polished multicultural atmosphere."
  ],

  [
    "Bangkok",
    "Thailand",
    "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80",
    "Bangkok combines magnificent temples, luxury hotels, vibrant markets and celebrated cuisine."
  ],

  [
    "Bali",
    "Indonesia",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    "Bali offers tropical beauty, spiritual traditions, luxury villas and unforgettable wellness experiences."
  ],

  [
    "Sydney",
    "Australia",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "Sydney brings together famous harbour views, beautiful beaches and world-class experiences."
  ],

  [
    "Barcelona",
    "Spain",
    "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
    "Barcelona offers extraordinary architecture, Mediterranean beaches and a vibrant cultural atmosphere."
  ],

  [
    "Istanbul",
    "Turkey",
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    "Istanbul connects Europe and Asia through magnificent architecture, historic markets and cultural heritage."
  ]

];


/* =========================================
   DESTINATION CARD
========================================= */

function card(item) {

  const [region, name, img, desc] = item;

  return `
    <article class="destination-card">

      <img
        src="${img}"
        alt="${name}"
        loading="lazy"
      >

      <div class="destination-overlay">

        <span>${region}</span>

        <h3>${name}</h3>

        <p>${desc}</p>

        <a
          class="btn btn-outline"
          href="contact.html"
        >
          PLAN THIS TRIP
        </a>

      </div>

    </article>
  `;
}


/* =========================================
   RENDER DESTINATIONS
========================================= */

function renderData(target, data, searchId) {

  const element = document.getElementById(target);

  if (!element) return;

  function draw(query = "") {

    const search = query.toLowerCase();

    const filteredData = data.filter(item => {

      return (
        item[0].toLowerCase().includes(search) ||
        item[1].toLowerCase().includes(search)
      );

    });

    if (filteredData.length === 0) {

      element.innerHTML = `
        <p class="no-results">
          No destination found.
        </p>
      `;

      return;
    }

    element.innerHTML = filteredData
      .map(item => card(item))
      .join("");

  }

  draw();

  const input = document.getElementById(searchId);

  if (input) {

    input.addEventListener("input", event => {

      draw(event.target.value);

    });

  }

}


renderData("indiaGrid", india, "indiaSearch");

renderData("worldGrid", world, "worldSearch");


/* =========================================
   SUPABASE FORM SUBMISSION
========================================= */

document
  .querySelectorAll(".demo-form")
  .forEach(form => {

    form.addEventListener("submit", async event => {

      event.preventDefault();

      const msg =
        form.querySelector(".form-message");

      if (!supabase) {

        if (msg) {
          msg.textContent =
            "Supabase connection is not available.";
        }

        return;
      }

      const getValue = name => {

        const field =
          form.querySelector(`[name="${name}"]`);

        return field ? field.value.trim() : "";

      };


      const name = getValue("name");
      const email = getValue("email");
      const phone = getValue("phone");
      const destination = getValue("destination");
      const travelDate = getValue("travelDate");
      const travellers = getValue("travellers");
      const message = getValue("message");


      const { error } = await supabase
        .from("Inquiries")
        .insert([
          {
            Name: name,
            "E-mail": email,
            Phone: phone,
            Destination: destination,
            "Travel Date": travelDate,
            Travellers: travellers,
            Message: message
          }
        ]);


      if (error) {

        console.error(error);

        if (msg) {
          msg.textContent =
            "Something went wrong. Please try again.";
        }

      } else {

        if (msg) {
          msg.textContent =
            "Thank you! Your enquiry has been received.";
        }

        form.reset();

      }

    });

  });


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuButton.textContent =
      navLinks.classList.contains("open")
        ? "CLOSE"
        : "MENU";

  });

}


/* =========================================
   LOAD MORE DESTINATIONS
========================================= */

const loadMoreButton =
  document.getElementById("loadMoreDestinations");

const moreDestinations =
  document.getElementById("moreDestinations");


if (loadMoreButton && moreDestinations) {

  loadMoreButton.addEventListener("click", () => {

    moreDestinations.classList.toggle("show");

    if (
      moreDestinations.classList.contains("show")
    ) {

      loadMoreButton.textContent =
        "SHOW LESS";

    } else {

      loadMoreButton.textContent =
        "LOAD MORE DESTINATIONS";

    }

  });

}


/* =========================================
   ANIMATED COUNTERS
========================================= */

function animateCounter(element) {

  const targetText =
    element.dataset.target;

  if (!targetText) return;

  const target =
    parseInt(
      targetText.replace(/\D/g, ""),
      10
    );

  if (!target) return;

  const suffix =
    targetText.replace(/[0-9]/g, "");

  let current = 0;

  const increment = Math.max(
    1,
    Math.ceil(target / 100)
  );


  const interval = setInterval(() => {

    current += increment;

    if (current >= target) {

      current = target;

      clearInterval(interval);

    }

    element.textContent =
      current.toLocaleString() + suffix;

  }, 20);

}


const counterObserver =
  new IntersectionObserver(

    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const counters =
            entry.target.querySelectorAll(
              "[data-target]"
            );

          counters.forEach(counter => {

            if (!counter.dataset.animated) {

              counter.dataset.animated =
                "true";

              animateCounter(counter);

            }

          });

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.3
    }

  );


document
  .querySelectorAll(".stats-section")
  .forEach(section => {

    counterObserver.observe(section);

  });


/* =========================================
   CARD REVEAL ANIMATION
========================================= */

const revealElements =
  document.querySelectorAll(
    ".destination-card, .card, .feature"
  );


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(35px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  revealObserver.observe(element);

});


/* =========================================
   HERO SEARCH
========================================= */

const heroSearchForm =
  document.querySelector(
    ".premium-search-form"
  );


if (heroSearchForm) {

  heroSearchForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const input =
        this.querySelector("input");

      const destination =
        input
          ? input.value.trim()
          : "";


      if (destination) {

        window.location.href =
          "india.html?search=" +
          encodeURIComponent(destination);

      } else {

        window.location.href =
          "india.html";

      }

    }
  );

}


/* =========================================
   INDIA SEARCH FROM URL
========================================= */

const urlParams =
  new URLSearchParams(
    window.location.search
  );

const searchQuery =
  urlParams.get("search");


if (searchQuery) {

  const indiaSearch =
    document.getElementById(
      "indiaSearch"
    );


  if (indiaSearch) {

    indiaSearch.value =
      searchQuery;

    indiaSearch.dispatchEvent(
      new Event("input")
    );

  }

}


/* =========================================
   FLOATING IMAGE PAUSE ON HOVER
========================================= */

document
  .querySelectorAll(".floating-track")
  .forEach(track => {

    track.addEventListener(
      "mouseenter",
      () => {

        track.style.animationPlayState =
          "paused";

      }
    );


    track.addEventListener(
      "mouseleave",
      () => {

        track.style.animationPlayState =
          "running";

      }
    );

  });


/* =========================================
   INDIA DESTINATION DETAILS DATA
========================================= */

const destinationData = {

  kashmir: {
    region: "JAMMU & KASHMIR • INDIA",
    name: "Kashmir",

    tagline:
      "Paradise on Earth, where mountains, lakes and timeless beauty come together.",

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=85",

    description:
      "Kashmir offers breathtaking Himalayan landscapes, peaceful lakes, beautiful valleys and unforgettable experiences.",

    bestTime: "March – October",
    duration: "5 – 7 Days",
    travelStyle: "Nature & Luxury",
    bestFor: "Couples & Families"
  },


  goa: {
    region: "GOA • INDIA",
    name: "Goa",

    tagline:
      "Golden beaches, unforgettable sunsets and vibrant coastal experiences.",

    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85",

    description:
      "Goa brings together beautiful beaches, Portuguese heritage, luxury resorts and vibrant nightlife.",

    bestTime: "November – February",
    duration: "4 – 6 Days",
    travelStyle: "Beach & Lifestyle",
    bestFor: "Couples, Friends & Families"
  },


  manali: {
    region: "HIMACHAL PRADESH • INDIA",
    name: "Manali",

    tagline:
      "Mountains, adventure and unforgettable Himalayan journeys.",

    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",

    description:
      "Manali offers snow-covered landscapes, adventure activities and beautiful Himalayan views.",

    bestTime: "October – June",
    duration: "4 – 6 Days",
    travelStyle: "Adventure & Nature",
    bestFor: "Couples, Friends & Families"
  },


  rajasthan: {
    region: "RAJASTHAN • INDIA",
    name: "Rajasthan",

    tagline:
      "Royal palaces, golden deserts and timeless Indian heritage.",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",

    description:
      "Rajasthan offers magnificent forts, royal palaces and unforgettable heritage experiences.",

    bestTime: "October – March",
    duration: "7 – 10 Days",
    travelStyle: "Heritage & Luxury",
    bestFor: "Couples, Families & Culture Lovers"
  },


  kerala: {
    region: "KERALA • INDIA",
    name: "Kerala",

    tagline:
      "Backwaters, beaches, tea gardens and peaceful luxury escapes.",

    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1800&q=85",

    description:
      "Kerala combines tropical beaches, peaceful backwaters and misty hill stations.",

    bestTime: "September – March",
    duration: "6 – 8 Days",
    travelStyle: "Wellness & Nature",
    bestFor: "Couples & Families"
  },


  ladakh: {
    region: "LADAKH • INDIA",
    name: "Ladakh",

    tagline:
      "High mountain passes, dramatic landscapes and unforgettable adventures.",

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",

    description:
      "Ladakh offers dramatic Himalayan landscapes, monasteries and extraordinary adventure experiences.",

    bestTime: "May – September",
    duration: "6 – 8 Days",
    travelStyle: "Adventure & Nature",
    bestFor: "Adventure Lovers & Couples"
  },


  andaman: {
    region: "ANDAMAN & NICOBAR • INDIA",
    name: "Andaman",

    tagline:
      "Turquoise waters, tropical islands and unforgettable beach escapes.",

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",

    description:
      "Andaman offers beautiful beaches, crystal-clear waters and relaxing island experiences.",

    bestTime: "October – May",
    duration: "5 – 7 Days",
    travelStyle: "Beach & Island Luxury",
    bestFor: "Couples & Families"
  },


  mumbai: {
    region: "MAHARASHTRA • INDIA",
    name: "Mumbai",

    tagline:
      "India's city of dreams, where heritage, luxury and energy meet.",

    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1800&q=85",

    description:
      "Mumbai combines iconic landmarks, luxury hotels and unmatched urban energy.",

    bestTime: "November – February",
    duration: "3 – 5 Days",
    travelStyle: "City & Lifestyle",
    bestFor: "Friends, Couples & Families"
  },


  agra: {
    region: "UTTAR PRADESH • INDIA",
    name: "Agra",

    tagline:
      "Timeless Mughal architecture and one of the world's greatest monuments.",

    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=85",

    description:
      "Agra is known worldwide for Mughal architecture and the unforgettable beauty of the Taj Mahal.",

    bestTime: "October – March",
    duration: "2 – 3 Days",
    travelStyle: "Heritage & Culture",
    bestFor: "Couples, Families & History Lovers"
  },


  jaipur: {
    region: "RAJASTHAN • INDIA",
    name: "Jaipur",

    tagline:
      "Royal forts, pink streets and the timeless charm of Rajasthan.",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=85",

    description:
      "Jaipur offers royal palaces, magnificent forts and colourful heritage experiences.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Heritage & Culture",
    bestFor: "Couples & Families"
  },


  udaipur: {
    region: "RAJASTHAN • INDIA",
    name: "Udaipur",

    tagline:
      "Romantic lakes, royal palaces and timeless luxury.",

    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1800&q=85",

    description:
      "Udaipur is known for shimmering lakes, royal palaces and romantic luxury experiences.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Luxury & Romance",
    bestFor: "Couples & Families"
  },


  delhi: {
    region: "DELHI • INDIA",
    name: "Delhi",

    tagline:
      "A journey through ancient history, culture and modern India.",

    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1800&q=85",

    description:
      "Delhi brings together historic monuments, vibrant markets and the energy of India's capital.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Culture & City",
    bestFor: "Families, Couples & History Lovers"
  },


  varanasi: {
    region: "UTTAR PRADESH • INDIA",
    name: "Varanasi",

    tagline:
      "Ancient spirituality, sacred ghats and timeless Indian culture.",

    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1800&q=85",

    description:
      "Varanasi offers sacred ghats, spiritual experiences and unforgettable cultural traditions.",

    bestTime: "October – March",
    duration: "2 – 4 Days",
    travelStyle: "Spiritual & Cultural",
    bestFor: "Culture & Spiritual Travellers"
  }

};
