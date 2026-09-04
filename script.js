const SUPABASE_URL = "https://vnuvidqgfdufhkvivfki.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZE4do_lwZXvbsvtsD9bpfA_U1_LvuSL";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
const india = [
["Rajasthan","Jaipur","https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80","The Pink City combines royal palaces, historic forts, colourful bazaars and Rajasthan's legendary hospitality into an unforgettable cultural journey."],
["Rajasthan","Udaipur","https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80","Known for shimmering lakes and romantic palaces, Udaipur offers a refined blend of heritage, luxury hotels and timeless Rajput architecture."],
["Kerala","Munnar","https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80","Rolling tea gardens, cool mountain air and mist-covered landscapes make Munnar one of India's most peaceful premium escapes."],
["Goa","North Goa","https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80","A lively blend of beaches, nightlife, heritage and coastal dining, North Goa is ideal for travellers seeking energy and relaxation."],
["Uttar Pradesh","Agra","https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80","Agra offers one of the world's most iconic monuments alongside Mughal heritage, remarkable architecture and unforgettable cultural experiences."],
["Uttarakhand","Rishikesh","https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&w=1200&q=80","Set beside the Ganges and Himalayan foothills, Rishikesh brings together spirituality, wellness, adventure and spectacular natural scenery."],
["Jammu & Kashmir","Srinagar","https://images.unsplash.com/photo-1566837497312-7be7830ae06e?auto=format&fit=crop&w=1200&q=80","Srinagar is celebrated for serene lakes, houseboats, Mughal gardens and dramatic Himalayan surroundings that define a classic Kashmir escape."],
["Tamil Nadu","Ooty","https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=1200&q=80","Cool weather, green hills and colonial charm make Ooty a timeless hill-station holiday destination for families and couples."],
["West Bengal","Darjeeling","https://images.unsplash.com/photo-1544631347-7d9d63c70b7d?auto=format&fit=crop&w=1200&q=80","Tea estates, mountain views and a distinctive Himalayan atmosphere make Darjeeling one of India's most memorable scenic escapes."]
];

const world = [
["Paris","France","https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80","Paris is a timeless celebration of art, fashion, cuisine and architecture, offering iconic landmarks and elegant experiences at every turn."],
["Dubai","United Arab Emirates","https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80","Dubai combines extraordinary modern architecture, luxury shopping, desert adventures and world-class hospitality in one unforgettable destination."],
["London","United Kingdom","https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80","London blends royal heritage, global culture, theatre, museums and contemporary energy into one of the world's most exciting cities."],
["New York City","USA","https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80","New York City delivers iconic skylines, Broadway, museums, diverse neighbourhoods and an unmatched energy for every kind of traveller."],
["Tokyo","Japan","https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80","Tokyo is a fascinating meeting point of ancient traditions, futuristic technology, exceptional food and endlessly vibrant city life."],
["Rome","Italy","https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80","Rome invites travellers to walk through centuries of history while enjoying remarkable art, architecture and one of Europe's greatest food cultures."],
["Singapore","Singapore","https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80","Singapore offers futuristic attractions, lush gardens, exceptional dining and a polished multicultural atmosphere in a compact global city."],
["Bangkok","Thailand","https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80","Bangkok combines magnificent temples, luxury hotels, vibrant markets and celebrated cuisine with an exciting round-the-clock atmosphere."],
["Bali","Indonesia","https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80","Bali offers tropical beauty, spiritual traditions, luxury villas, beaches and unforgettable wellness experiences for couples and families."],
["Sydney","Australia","https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80","Sydney brings together famous harbour views, beautiful beaches, iconic architecture and a relaxed lifestyle with world-class experiences."],
["Barcelona","Spain","https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80","Barcelona offers extraordinary architecture, Mediterranean beaches, creative cuisine and a vibrant cultural atmosphere unlike anywhere else."],
["Istanbul","Turkey","https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80","Istanbul connects Europe and Asia through magnificent mosques, historic markets, Bosphorus views and a deeply layered cultural heritage."]
];

function card(item, type){
 const [region,name,img,desc]=item;
 return `<article class="destination-card"><img src="${img}" alt="${name}" loading="lazy"><div class="content"><span class="meta">${region}</span><h3>${name}</h3><p>${desc}</p><ul><li><b>Best time:</b> October – March</li><li><b>Highlights:</b> Culture, landmarks & experiences</li><li><b>Ideal trip:</b> 3–6 days</li></ul><a class="btn btn-outline" href="contact.html">Plan This Trip</a></div></article>`;
}
function renderData(target,data,searchId){
 const el=document.getElementById(target); if(!el)return;
 const draw=(q="")=>el.innerHTML=data.filter(x=>x[0].toLowerCase().includes(q.toLowerCase())||x[1].toLowerCase().includes(q.toLowerCase())).map(x=>card(x,target)).join("")||"<p>No destination found.</p>";
 draw();
 const input=document.getElementById(searchId); if(input)input.addEventListener("input",e=>draw(e.target.value));
}
renderData("indiaGrid",india,"indiaSearch");
renderData("worldGrid",world,"worldSearch");

document.querySelectorAll(".demo-form").forEach(form => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const msg = form.querySelector(".form-message");

    const name = form.querySelector('[name="name"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const destination = form.querySelector('[name="destination"]').value;
    const travelDate = form.querySelector('[name="travelDate"]').value;
    const travellers = form.querySelector('[name="travellers"]').value;
    const message = form.querySelector('[name="message"]').value;

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
      msg.textContent = "Something went wrong. Please try again.";
    } else {
      msg.textContent = "Thank you! Your enquiry has been received.";
      form.reset();
    }
  });
});
/* =====================================================
   CLUB ARVELLA - PREMIUM WEBSITE FUNCTIONALITY
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
      menuButton.textContent = "CLOSE";
    } else {
      menuButton.textContent = "MENU";
    }

  });

}


/* =====================================================
   LOAD MORE DESTINATIONS
===================================================== */

const loadMoreButton = document.getElementById("loadMoreDestinations");
const moreDestinations = document.getElementById("moreDestinations");

if (loadMoreButton && moreDestinations) {

  loadMoreButton.addEventListener("click", () => {

    moreDestinations.classList.toggle("show");

    if (moreDestinations.classList.contains("show")) {

      loadMoreButton.textContent = "SHOW LESS";

      moreDestinations.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else {

      loadMoreButton.textContent = "LOAD MORE DESTINATIONS";

    }

  });

}


/* =====================================================
   ANIMATED COUNTERS
===================================================== */

function animateCounter(element) {

  const targetText = element.dataset.target;

  if (!targetText) return;

  const target = parseInt(targetText.replace(/\D/g, ""));

  if (!target) return;

  const suffix = targetText.replace(/[0-9]/g, "");

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

    element.textContent = current.toLocaleString() + suffix;

  }, 20);

}


const counterObserver = new IntersectionObserver(

  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const counters =
          entry.target.querySelectorAll("[data-target]");

        counters.forEach(counter => {

          if (!counter.dataset.animated) {

            counter.dataset.animated = "true";

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


document.querySelectorAll(".stats-section").forEach(section => {

  counterObserver.observe(section);

});


/* =====================================================
   SMOOTH CARD REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
  ".destination-card, .card, .feature"
);


const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform = "translateY(35px)";

  element.style.transition =
    "opacity .7s ease, transform .7s ease";

  revealObserver.observe(element);

});


/* =====================================================
   HERO SEARCH
===================================================== */

const heroSearchForm =
  document.querySelector(".premium-search-form");


if (heroSearchForm) {

  heroSearchForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const destination =
      this.querySelector("input").value.trim();

    if (destination) {

      window.location.href =
        "india.html?search=" +
        encodeURIComponent(destination);

    } else {

      window.location.href = "india.html";

    }

  });

}


/* =====================================================
   INDIA SEARCH FROM URL
===================================================== */

const urlParams = new URLSearchParams(
  window.location.search
);

const searchQuery =
  urlParams.get("search");


if (searchQuery) {

  const indiaSearch =
    document.getElementById("indiaSearch");

  if (indiaSearch) {

    indiaSearch.value = searchQuery;

    indiaSearch.dispatchEvent(
      new Event("input")
    );

  }

}


/* =====================================================
   FLOATING IMAGE PAUSE ON HOVER
===================================================== */

document
  .querySelectorAll(".floating-track")
  .forEach(track => {

    track.addEventListener("mouseenter", () => {

      track.style.animationPlayState = "paused";

    });

    track.addEventListener("mouseleave", () => {

      track.style.animationPlayState = "running";

    });

  });
/* =========================================
   CLUB ARVELLA - INDIA DESTINATION SYSTEM
========================================= */

const destinationData = {

  kashmir: {
    region: "JAMMU & KASHMIR • INDIA",
    name: "Kashmir",
    tagline: "Paradise on Earth, where mountains, lakes and timeless beauty come together.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1800&q=85",

    description:
      "Kashmir offers breathtaking Himalayan landscapes, peaceful lakes, beautiful valleys and unforgettable experiences. From luxurious houseboats to snow-covered mountains, every journey here feels extraordinary.",

    bestTime: "March – October",
    duration: "5 – 7 Days",
    travelStyle: "Nature & Luxury",
    bestFor: "Couples & Families",

    topPlaces: [
      {
        name: "Srinagar",
        description: "Experience Dal Lake, Mughal gardens and iconic houseboats."
      },
      {
        name: "Gulmarg",
        description: "Discover snow adventures, scenic gondola rides and mountain beauty."
      },
      {
        name: "Pahalgam",
        description: "Enjoy peaceful valleys, rivers and spectacular Himalayan scenery."
      }
    ],

    routes: [
      {
        title: "By Air",
        text: "Fly to Srinagar Airport, followed by a convenient city transfer."
      },
      {
        title: "By Road",
        text: "Travel through scenic Himalayan highways from Jammu."
      },
      {
        title: "Best Route",
        text: "Srinagar → Gulmarg → Pahalgam → Srinagar"
      }
    ],

    stays: [
      "Luxury Houseboats on Dal Lake",
      "Premium Hotels in Srinagar",
      "Mountain Resorts in Gulmarg"
    ],

    nearby: [
      "Sonamarg",
      "Yusmarg",
      "Doodhpathri"
    ]
  },


  goa: {
    region: "GOA • INDIA",
    name: "Goa",
    tagline: "Golden beaches, unforgettable sunsets and vibrant coastal experiences.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=85",

    description:
      "Goa brings together beautiful beaches, Portuguese heritage, luxury resorts, vibrant nightlife and unforgettable coastal dining experiences.",

    bestTime: "November – February",
    duration: "4 – 6 Days",
    travelStyle: "Beach & Lifestyle",
    bestFor: "Couples, Friends & Families",

    topPlaces: [
      {
        name: "North Goa",
        description: "Experience famous beaches, nightlife and vibrant beach clubs."
      },
      {
        name: "South Goa",
        description: "Relax at peaceful beaches and luxury coastal resorts."
      },
      {
        name: "Old Goa",
        description: "Explore Portuguese heritage and historic architecture."
      }
    ],

    routes: [
      {
        title: "By Air",
        text: "Fly to Manohar International Airport or Goa International Airport."
      },
      {
        title: "By Train",
        text: "Major railway stations include Madgaon and Thivim."
      },
      {
        title: "Best Route",
        text: "North Goa → Panjim → Old Goa → South Goa"
      }
    ],

    stays: [
      "Luxury Beach Resorts",
      "Premium Villas in North Goa",
      "Boutique Stays in South Goa"
    ],

    nearby: [
      "Dudhsagar Falls",
      "Gokarna",
      "Amboli"
    ]
  },


  manali: {
    region: "HIMACHAL PRADESH • INDIA",
    name: "Manali",
    tagline: "Mountains, adventure and unforgettable Himalayan journeys.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",

    description:
      "Manali is one of India's most loved mountain destinations, offering snow-covered landscapes, adventure activities, peaceful valleys and beautiful Himalayan views.",

    bestTime: "October – June",
    duration: "4 – 6 Days",
    travelStyle: "Adventure & Nature",
    bestFor: "Couples, Friends & Families",

    topPlaces: [
      {
        name: "Solang Valley",
        description: "Adventure sports, snow experiences and spectacular mountain scenery."
      },
      {
        name: "Old Manali",
        description: "Cafes, local culture and a relaxed mountain atmosphere."
      },
      {
        name: "Atal Tunnel",
        description: "A scenic journey through one of India's most remarkable mountain routes."
      }
    ],

    routes: [
      {
        title: "By Air",
        text: "Fly to Bhuntar Airport followed by a road journey to Manali."
      },
      {
        title: "By Road",
        text: "Travel from Delhi or Chandigarh through scenic Himalayan highways."
      },
      {
        title: "Best Route",
        text: "Delhi → Chandigarh → Kullu → Manali"
      }
    ],

    stays: [
      "Luxury Resorts in Manali",
      "Boutique Hotels in Old Manali",
      "Mountain View Cottages"
    ],

    nearby: [
      "Kasol",
      "Kullu",
      "Sissu"
    ]
  },


  rajasthan: {
    region: "RAJASTHAN • INDIA",
    name: "Rajasthan",
    tagline: "Royal palaces, golden deserts and timeless Indian heritage.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",

    description:
      "Rajasthan offers magnificent forts, royal palaces, colourful cities, desert experiences and some of India's most iconic luxury heritage stays.",

    bestTime: "October – March",
    duration: "7 – 10 Days",
    travelStyle: "Heritage & Luxury",
    bestFor: "Couples, Families & Culture Lovers",

    topPlaces: [
      {
        name: "Jaipur",
        description: "Explore royal palaces, forts and colourful markets."
      },
      {
        name: "Udaipur",
        description: "Experience romantic lakes and magnificent palace architecture."
      },
      {
        name: "Jaisalmer",
        description: "Discover golden desert landscapes and unforgettable desert camps."
      }
    ],

    routes: [
      {
        title: "By Air",
        text: "Jaipur International Airport offers convenient access."
      },
      {
        title: "By Train",
        text: "Major cities are connected through India's railway network."
      },
      {
        title: "Best Route",
        text: "Jaipur → Jodhpur → Udaipur → Jaisalmer"
      }
    ],

    stays: [
      "Luxury Heritage Hotels",
      "Palace Hotels",
      "Premium Desert Camps"
    ],

    nearby: [
      "Ajmer",
      "Pushkar",
      "Ranthambore"
    ]
  },


  kerala: {
    region: "KERALA • INDIA",
    name: "Kerala",
    tagline: "Backwaters, beaches, tea gardens and peaceful luxury escapes.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1800&q=85",

    description:
      "Kerala combines tropical beaches, peaceful backwaters, misty hill stations and world-famous wellness experiences into one unforgettable journey.",

    bestTime: "September – March",
    duration: "6 – 8 Days",
    travelStyle: "Wellness & Nature",
    bestFor: "Couples & Families",

    topPlaces: [
      {
        name: "Munnar",
        description: "Tea gardens, mountains and cool scenic landscapes."
      },
      {
        name: "Alleppey",
        description: "Luxury houseboat experiences through Kerala's famous backwaters."
      },
      {
        name: "Kochi",
        description: "Heritage, culture and beautiful coastal experiences."
      }
    ],

    routes: [
      {
        title: "By Air",
        text: "Fly to Kochi, Trivandrum or Calicut airports."
      },
      {
        title: "By Train",
        text: "Kerala has excellent railway connectivity."
      },
      {
        title: "Best Route",
        text: "Kochi → Munnar → Thekkady → Alleppey"
      }
    ],

    stays: [
      "Luxury Backwater Resorts",
      "Premium Houseboats",
      "Tea Estate Resorts"
    ],

    nearby: [
      "Thekkady",
      "Varkala",
      "Kumarakom"
    ]
  },

};
  ladakh: {
    region: "LADAKH • INDIA",
    name: "Ladakh",
    tagline: "High mountain passes, dramatic landscapes and unforgettable adventures.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
    description: "Ladakh offers dramatic Himalayan landscapes, high-altitude roads, monasteries and extraordinary adventure experiences.",

    bestTime: "May – September",
    duration: "6 – 8 Days",
    travelStyle: "Adventure & Nature",
    bestFor: "Adventure Lovers & Couples",

    topPlaces: [
      { name: "Leh", description: "Explore monasteries, local culture and dramatic mountain views." },
      { name: "Nubra Valley", description: "Discover sand dunes, mountain roads and unique landscapes." },
      { name: "Pangong Lake", description: "Experience one of Ladakh's most iconic high-altitude lakes." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Kushok Bakula Rimpochee Airport in Leh." },
      { title: "By Road", text: "Travel through the Manali–Leh or Srinagar–Leh highway when open." },
      { title: "Best Route", text: "Leh → Nubra Valley → Pangong Lake → Leh" }
    ],

    stays: [
      "Luxury Hotels in Leh",
      "Premium Camps in Nubra",
      "Lakeside Camps near Pangong"
    ],

    nearby: [
      "Khardung La",
      "Tso Moriri",
      "Sham Valley"
    ]
  },


  andaman: {
    region: "ANDAMAN & NICOBAR • INDIA",
    name: "Andaman",
    tagline: "Turquoise waters, tropical islands and unforgettable beach escapes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    description: "Andaman offers beautiful beaches, crystal-clear waters, island adventures and relaxing tropical experiences.",

    bestTime: "October – May",
    duration: "5 – 7 Days",
    travelStyle: "Beach & Island Luxury",
    bestFor: "Couples & Families",

    topPlaces: [
      { name: "Port Blair", description: "Explore the gateway to the Andaman Islands and historic attractions." },
      { name: "Havelock Island", description: "Enjoy famous beaches, diving and premium island stays." },
      { name: "Neil Island", description: "Discover peaceful beaches and scenic tropical landscapes." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Veer Savarkar International Airport in Port Blair." },
      { title: "By Sea", text: "Passenger ships connect Port Blair with selected mainland ports." },
      { title: "Best Route", text: "Port Blair → Havelock → Neil Island → Port Blair" }
    ],

    stays: [
      "Luxury Beach Resorts",
      "Premium Island Villas",
      "Boutique Beach Hotels"
    ],

    nearby: [
      "Radhanagar Beach",
      "Cellular Jail",
      "Bharatpur Beach"
    ]
  },


  mumbai: {
    region: "MAHARASHTRA • INDIA",
    name: "Mumbai",
    tagline: "India's city of dreams, where heritage, luxury and energy meet.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=1800&q=85",
    description: "Mumbai combines iconic landmarks, coastal views, historic architecture, luxury hotels, food and an unmatched urban energy.",

    bestTime: "November – February",
    duration: "3 – 5 Days",
    travelStyle: "City & Lifestyle",
    bestFor: "Friends, Couples & Families",

    topPlaces: [
      { name: "Gateway of India", description: "One of Mumbai's most iconic waterfront landmarks." },
      { name: "Marine Drive", description: "Enjoy the famous Queen's Necklace and Arabian Sea views." },
      { name: "Colaba", description: "Explore heritage streets, cafes and lively shopping areas." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Chhatrapati Shivaji Maharaj International Airport." },
      { title: "By Train", text: "Mumbai is connected to major cities through multiple railway terminals." },
      { title: "Best Route", text: "Gateway of India → Colaba → Marine Drive → Bandra" }
    ],

    stays: [
      "Luxury Hotels in South Mumbai",
      "Premium Stays in Bandra",
      "Business Hotels near BKC"
    ],

    nearby: [
      "Lonavala",
      "Alibaug",
      "Matheran"
    ]
  },


  agra: {
    region: "UTTAR PRADESH • INDIA",
    name: "Agra",
    tagline: "Timeless Mughal architecture and one of the world's greatest monuments.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1800&q=85",
    description: "Agra is a historic destination known worldwide for Mughal architecture, rich heritage and the unforgettable beauty of the Taj Mahal.",

    bestTime: "October – March",
    duration: "2 – 3 Days",
    travelStyle: "Heritage & Culture",
    bestFor: "Couples, Families & History Lovers",

    topPlaces: [
      { name: "Taj Mahal", description: "Experience India's most iconic monument and timeless architectural masterpiece." },
      { name: "Agra Fort", description: "Explore the impressive Mughal fort and its historic royal spaces." },
      { name: "Fatehpur Sikri", description: "Discover the remarkable historic city near Agra." }
    ],

    routes: [
      { title: "By Air", text: "The nearest major international airport is in Delhi." },
      { title: "By Train", text: "Agra has excellent railway connectivity from major Indian cities." },
      { title: "Best Route", text: "Delhi → Agra → Fatehpur Sikri → Jaipur" }
    ],

    stays: [
      "Luxury Hotels near Taj Mahal",
      "Premium Heritage Hotels",
      "Comfortable City Hotels"
    ],

    nearby: [
      "Mathura",
      "Vrindavan",
      "Bharatpur"
    ]
  },


  jaipur: {
    region: "RAJASTHAN • INDIA",
    name: "Jaipur",
    tagline: "Royal forts, pink streets and the timeless charm of Rajasthan.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1800&q=85",
    description: "Jaipur offers royal palaces, magnificent forts, colourful bazaars and unforgettable heritage experiences.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Heritage & Culture",
    bestFor: "Couples & Families",

    topPlaces: [
      { name: "Amber Fort", description: "Explore one of Rajasthan's most spectacular hilltop forts." },
      { name: "City Palace", description: "Discover royal architecture and Jaipur's rich history." },
      { name: "Hawa Mahal", description: "See Jaipur's iconic Palace of Winds." }
    ],

    routes: [
      { title: "By Air", text: "Fly directly to Jaipur International Airport." },
      { title: "By Train", text: "Jaipur is well connected to major Indian railway routes." },
      { title: "Best Route", text: "Delhi → Jaipur → Ajmer → Udaipur" }
    ],

    stays: [
      "Luxury Palace Hotels",
      "Heritage Hotels",
      "Premium City Resorts"
    ],

    nearby: [
      "Ajmer",
      "Pushkar",
      "Ranthambore"
    ]
  },


  udaipur: {
    region: "RAJASTHAN • INDIA",
    name: "Udaipur",
    tagline: "Romantic lakes, royal palaces and timeless luxury.",
    image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1800&q=85",
    description: "Udaipur is known for its shimmering lakes, royal palaces, beautiful architecture and romantic atmosphere.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Luxury & Romance",
    bestFor: "Couples & Families",

    topPlaces: [
      { name: "City Palace", description: "Explore magnificent royal architecture overlooking Lake Pichola." },
      { name: "Lake Pichola", description: "Enjoy scenic boat rides surrounded by palaces and hills." },
      { name: "Sajjangarh Palace", description: "Experience panoramic views from the famous Monsoon Palace." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Maharana Pratap Airport." },
      { title: "By Train", text: "Udaipur is connected with major Indian cities by rail." },
      { title: "Best Route", text: "Jaipur → Ajmer → Udaipur → Mount Abu" }
    ],

    stays: [
      "Luxury Lake Hotels",
      "Heritage Palace Hotels",
      "Boutique City Stays"
    ],

    nearby: [
      "Kumbhalgarh",
      "Mount Abu",
      "Chittorgarh"
    ]
  },


  delhi: {
    region: "DELHI • INDIA",
    name: "Delhi",
    tagline: "A journey through ancient history, culture and modern India.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1800&q=85",
    description: "Delhi brings together historic monuments, vibrant markets, exceptional food and the energy of India's capital.",

    bestTime: "October – March",
    duration: "3 – 4 Days",
    travelStyle: "Culture & City",
    bestFor: "Families, Couples & History Lovers",

    topPlaces: [
      { name: "India Gate", description: "Visit one of the capital's most iconic landmarks." },
      { name: "Qutub Minar", description: "Explore a remarkable UNESCO-listed historic complex." },
      { name: "Red Fort", description: "Discover one of India's most important Mughal monuments." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Indira Gandhi International Airport." },
      { title: "By Train", text: "Delhi is connected nationwide through major railway stations." },
      { title: "Best Route", text: "Old Delhi → Central Delhi → New Delhi → South Delhi" }
    ],

    stays: [
      "Luxury Hotels in Central Delhi",
      "Premium Hotels in Aerocity",
      "Boutique Stays in South Delhi"
    ],

    nearby: [
      "Agra",
      "Jaipur",
      "Neemrana"
    ]
  },


  varanasi: {
    region: "UTTAR PRADESH • INDIA",
    name: "Varanasi",
    tagline: "Ancient spirituality, sacred ghats and timeless Indian culture.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1800&q=85",
    description: "Varanasi is one of the world's oldest living cities, offering spiritual experiences, sacred ghats and unforgettable cultural traditions.",

    bestTime: "October – March",
    duration: "2 – 4 Days",
    travelStyle: "Spiritual & Cultural",
    bestFor: "Culture & Spiritual Travellers",

    topPlaces: [
      { name: "Dashashwamedh Ghat", description: "Experience the famous evening Ganga Aarti." },
      { name: "Kashi Vishwanath Area", description: "Explore the spiritual heart of the ancient city." },
      { name: "Assi Ghat", description: "Enjoy peaceful riverside views and local culture." }
    ],

    routes: [
      { title: "By Air", text: "Fly to Lal Bahadur Shastri International Airport." },
      { title: "By Train", text: "Varanasi has strong rail connectivity." },
      { title: "Best Route", text: "Varanasi → Sarnath → Prayagraj" }
    ],

    stays: [
      "Heritage Hotels",
      "Premium Riverside Stays",
      "Boutique Hotels near the Ghats"
    ],

    nearby: [
      "Sarnath",
      "Prayagraj",
      "Ayodhya"
    ]
  }
