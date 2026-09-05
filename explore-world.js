const destinations = [
  {
    "name": "Dubai",
    "tags": "Luxury • Shopping • Modern",
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=82",
    "region": "middle-east",
    "styles": [
      "luxury",
      "city"
    ],
    "season": "winter",
    "slug": "dubai"
  },
  {
    "name": "Maldives",
    "tags": "Islands • Beaches • Luxury",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "luxury",
      "beach"
    ],
    "season": "winter",
    "slug": "maldives"
  },
  {
    "name": "Singapore",
    "tags": "Modern • Family • Culture",
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "city",
      "culture"
    ],
    "season": "year-round",
    "slug": "singapore"
  },
  {
    "name": "Thailand",
    "tags": "Beaches • Islands • Adventure",
    "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "beach",
      "adventure"
    ],
    "season": "winter",
    "slug": "thailand"
  },
  {
    "name": "Bali",
    "tags": "Culture • Beaches • Wellness",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "beach",
      "wellness"
    ],
    "season": "summer",
    "slug": "bali"
  },
  {
    "name": "Malaysia",
    "tags": "City Life • Nature • Food",
    "image": "https://images.unsplash.com/photo-1596422846543-75c293f2f4a5?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "city",
      "nature"
    ],
    "season": "year-round",
    "slug": "malaysia"
  },
  {
    "name": "Mauritius",
    "tags": "Beaches • Luxury • Nature",
    "image": "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1000&q=82",
    "region": "africa",
    "styles": [
      "luxury",
      "beach"
    ],
    "season": "winter",
    "slug": "mauritius"
  },
  {
    "name": "Switzerland",
    "tags": "Mountains • Scenery • Romance",
    "image": "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "nature",
      "romance"
    ],
    "season": "summer",
    "slug": "switzerland"
  },
  {
    "name": "France",
    "tags": "Art • Culture • Romance",
    "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "city"
    ],
    "season": "summer",
    "slug": "france"
  },
  {
    "name": "Italy",
    "tags": "History • Food • Coastline",
    "image": "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "beach"
    ],
    "season": "summer",
    "slug": "italy"
  },
  {
    "name": "Greece",
    "tags": "Islands • Culture • Scenic",
    "image": "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "beach",
      "culture"
    ],
    "season": "summer",
    "slug": "greece"
  },
  {
    "name": "Spain",
    "tags": "Architecture • Food • Culture",
    "image": "https://images.unsplash.com/photo-1509840841025-9088ba78a4cc?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "city"
    ],
    "season": "summer",
    "slug": "spain"
  },
  {
    "name": "United Kingdom",
    "tags": "Heritage • Culture • City Life",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "city"
    ],
    "season": "summer",
    "slug": "united-kingdom"
  },
  {
    "name": "Turkey",
    "tags": "History • Culture • Landscapes",
    "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "adventure"
    ],
    "season": "summer",
    "slug": "turkey"
  },
  {
    "name": "Austria",
    "tags": "Mountains • Lakes • Culture",
    "image": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "nature",
      "culture"
    ],
    "season": "summer",
    "slug": "austria"
  },
  {
    "name": "Germany",
    "tags": "History • Culture • Scenery",
    "image": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "nature"
    ],
    "season": "summer",
    "slug": "germany"
  },
  {
    "name": "Netherlands",
    "tags": "Tulips • Countryside • Culture",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "culture",
      "nature"
    ],
    "season": "summer",
    "slug": "netherlands"
  },
  {
    "name": "Australia",
    "tags": "Beaches • Wildlife • Adventure",
    "image": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9dc?auto=format&fit=crop&w=1000&q=82",
    "region": "oceania",
    "styles": [
      "beach",
      "adventure"
    ],
    "season": "summer",
    "slug": "australia"
  },
  {
    "name": "New Zealand",
    "tags": "Epic Landscapes • Adventure",
    "image": "https://images.unsplash.com/photo-1507699622108-4be3e2b4f9c0?auto=format&fit=crop&w=1000&q=82",
    "region": "oceania",
    "styles": [
      "nature",
      "adventure"
    ],
    "season": "summer",
    "slug": "new-zealand"
  },
  {
    "name": "Japan",
    "tags": "Tradition • Design • Future Cities",
    "image": "https://images.unsplash.com/photo-1493976040374-85c0c3c5c3e1?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "culture",
      "city"
    ],
    "season": "spring",
    "slug": "japan"
  },
  {
    "name": "South Korea",
    "tags": "K-Culture • Palaces • Modern Seoul",
    "image": "https://images.unsplash.com/photo-1538485399081-7c897f2f5b8e?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "culture",
      "city"
    ],
    "season": "spring",
    "slug": "south-korea"
  },
  {
    "name": "Vietnam",
    "tags": "Heritage • Street Food • Scenic Coasts",
    "image": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "culture",
      "beach"
    ],
    "season": "winter",
    "slug": "vietnam"
  },
  {
    "name": "Indonesia",
    "tags": "Volcanoes • Islands • Culture",
    "image": "https://images.unsplash.com/photo-1539367628448-4bc5d9e1f3b8?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "adventure",
      "nature"
    ],
    "season": "summer",
    "slug": "indonesia"
  },
  {
    "name": "Sri Lanka",
    "tags": "Tea Country • Wildlife • Tropical Coast",
    "image": "https://images.unsplash.com/photo-1588596085918-1a4b5f9b7c6d?auto=format&fit=crop&w=1000&q=82",
    "region": "asia",
    "styles": [
      "beach",
      "nature"
    ],
    "season": "winter",
    "slug": "sri-lanka"
  },
  {
    "name": "Seychelles",
    "tags": "Granite Islands • Ocean Serenity",
    "image": "https://images.unsplash.com/photo-1539650116574-75c0c6d6f4a1?auto=format&fit=crop&w=1000&q=82",
    "region": "africa",
    "styles": [
      "luxury",
      "beach"
    ],
    "season": "winter",
    "slug": "seychelles"
  },
  {
    "name": "South Africa",
    "tags": "Safari • Coast • City Style",
    "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=82",
    "region": "africa",
    "styles": [
      "adventure",
      "nature"
    ],
    "season": "winter",
    "slug": "south-africa"
  },
  {
    "name": "Egypt",
    "tags": "Ancient Wonders • Nile Journeys",
    "image": "https://images.unsplash.com/photo-1568322445389-fd3b1a9f4c8e?auto=format&fit=crop&w=1000&q=82",
    "region": "africa",
    "styles": [
      "culture",
      "adventure"
    ],
    "season": "winter",
    "slug": "egypt"
  },
  {
    "name": "USA",
    "tags": "Iconic Cities • National Parks • Road Trips",
    "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1000&q=82",
    "region": "americas",
    "styles": [
      "city",
      "adventure"
    ],
    "season": "summer",
    "slug": "usa"
  },
  {
    "name": "Canada",
    "tags": "Alpine Landscapes • Lakes • Wildlife",
    "image": "https://images.unsplash.com/photo-1503614472-8c93d56c1e6f?auto=format&fit=crop&w=1000&q=82",
    "region": "americas",
    "styles": [
      "nature",
      "adventure"
    ],
    "season": "summer",
    "slug": "canada"
  },
  {
    "name": "Norway",
    "tags": "Fjords • Northern Lights • Adventure",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=82",
    "region": "europe",
    "styles": [
      "nature",
      "adventure"
    ],
    "season": "summer",
    "slug": "norway"
  }
];

const grid = document.getElementById('destinationGrid');
const searchInput = document.getElementById('searchInput');
const regionFilter = document.getElementById('regionFilter');
const styleFilter = document.getElementById('styleFilter');
const seasonFilter = document.getElementById('seasonFilter');
const resetBtn = document.getElementById('resetBtn');
const emptyState = document.getElementById('emptyState');

const usedImageUrls = new Set();
const loadedImageUrls = new Set();

function normalise(value) {
  return value.toLowerCase().trim();
}

function matches(item) {
  const query = normalise(searchInput.value);
  const region = regionFilter.value;
  const style = styleFilter.value;
  const season = seasonFilter.value;

  const textMatch = !query ||
    normalise(item.name).includes(query) ||
    normalise(item.tags).includes(query);

  const regionMatch = region === 'all' || item.region === region;
  const styleMatch = style === 'all' || item.styles.includes(style);
  const seasonMatch = season === 'all' || item.season === season;

  return textMatch && regionMatch && styleMatch && seasonMatch;
}

function render() {
  grid.innerHTML = '';
  usedImageUrls.clear();

  const visible = destinations.filter(matches);
  emptyState.hidden = visible.length !== 0;

  visible.forEach((item, index) => {
    // Every card has an explicit image URL from the data object.
    // No image API, random search, or generic fallback is used.
    if (usedImageUrls.has(item.image)) {
      console.error('Duplicate image blocked:', item.name);
      return;
    }
    usedImageUrls.add(item.image);

    const card = document.createElement('article');
    card.className = 'destination-card';
    card.innerHTML = `
      <div class="card-image-wrap">
        <img class="card-image"
             src="${item.image}"
             alt="${item.name} travel destination"
             loading="${index < 6 ? 'eager' : 'lazy'}"
             decoding="async">
        <span class="number">${String(destinations.indexOf(item)+1).padStart(2,'0')}</span>
      </div>
      <div class="card-body">
        <h2>${item.name}</h2>
        <div class="tags">${item.tags.replaceAll(' • ',' &nbsp;•&nbsp; ')}</div>
        <a class="explore-link"
           href="destination.html?region=world&place=${item.slug}">
          EXPLORE <span>→</span>
        </a>
      </div>`;
    grid.appendChild(card);

    const image = card.querySelector('img');
    image.addEventListener('load', () => loadedImageUrls.add(item.image), {once:true});
    image.addEventListener('error', () => {
      // Never substitute another destination's photo.
      image.remove();
      card.classList.add('image-unavailable');
    }, {once:true});
  });
}

[searchInput, regionFilter, styleFilter, seasonFilter].forEach(control => {
  control.addEventListener('input', render);
  control.addEventListener('change', render);
});

resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  regionFilter.value = 'all';
  styleFilter.value = 'all';
  seasonFilter.value = 'all';
  render();
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('mobile-open');
});

render();
