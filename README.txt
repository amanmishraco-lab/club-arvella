CLUB ARVELLA - EXPLORE INDIA

This package mirrors the Explore World design exactly:
- Same navigation height
- Same hero height
- Same typography
- Same filter bar dimensions
- Same 6-column desktop / 4-column / 3-column / 2-column responsive grid
- Same card image height, card spacing, typography and CTA

Files:
india.html
explore.css
explore-india.js

Upload all three files to the same folder as your existing website files.

The India cards contain explicit image URLs paired directly with each destination object.
There is no random image API and no generic fallback image.
The renderer blocks duplicate image URLs from appearing twice in the visible grid.

Destination links use:
destination.html?region=india&place=SLUG

If your hosting rewrites /destination to destination.html, you can change the href in explore-india.js to:
destination?region=india&place=SLUG
