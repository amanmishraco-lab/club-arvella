CLUB ARVELLA — 60 DESTINATION SYSTEM
======================================

Files:
- india.html              30 Indian destinations + search/filter
- world.html              30 international destinations + search/filter
- destination.html        Reusable detail page (opens from either grid)
- destination-data.js     All 60 destinations, descriptions and 3 highlights each
- destination.js          Detail page renderer + 6-day suggested itinerary
- arvella-images.js       Wikimedia Commons image engine with persistent no-repeat assignment
- explore.js              Grid search/filter + lazy loading
- explore.css             Explore page styling
- destination-detail.css  Detail page styling

IMAGE RULES
-----------
1. Images are NOT hard-coded to generic/random placeholders.
2. Each slot has its own search query.
3. Wikimedia Commons results are filtered for usable landscape images.
4. The browser stores each selected Wikimedia page ID and will not assign that photo to another slot.
5. The mapping is stored in localStorage, so returning to the site keeps the same selected image.
6. Images lazy-load near the viewport; detail heroes load first.
7. Image requests are throttled by browser caching and only the visible/near-visible images are requested.
8. The existing homepage floating image animation can keep using the same image engine. Give each <img data-arvella-image> a unique data-image-key to make every visible slot unique.

IMPORTANT
---------
The first time a user visits the site, the browser must fetch images from Wikimedia Commons. This means the website needs internet access. If a Wikimedia result cannot be found, that slot is left as a clean placeholder instead of silently reusing a wrong photo.

INSTALL
-------
Upload these files to the repository root:
india.html
world.html
destination.html
destination-data.js
destination.js
arvella-images.js
explore.js
explore.css
destination-detail.css

Keep:
assets/club-arvella-logo.png
index.html
packages.html
about.html
contact.html
style.css
(and other existing assets).

HOMEPAGE
--------
Your existing homepage can link directly to:
destination.html?region=india&place=kashmir
destination.html?region=world&place=dubai

If you want all existing homepage destination cards to use the new detail page, change their href to the corresponding destination.html URL.

WHY THIS APPROACH
-----------------
A separate HTML file for every destination would be heavy and difficult to maintain. This setup uses one detail template and one data file for all 60 destinations. It is much lighter for mobile and easier to expand later.
