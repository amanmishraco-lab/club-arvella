# Club Arvella Website

## Files
- `index.html` — homepage
- `about.html` — about page
- `india.html` — India destinations
- `world.html` — world destinations
- `packages.html` — packages
- `contact.html` — enquiry page
- `style.css` — all styling
- `script.js` — search and interactions
- `assets/club-arvella-logo.png` — your uploaded logo

## Before publishing
1. Replace the placeholder WhatsApp number in every page/footer link.
2. Add your business phone number and email.
3. Replace "Contact for Price" with real package prices if desired.

## GitHub upload
Upload all extracted files directly into the root of your `club-arvella` repository.

## Cloudflare Pages static deployment
For this plain static website:
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `/`

If Cloudflare asks for a directory that cannot be `/`, use the repository root configuration available in its setup UI.

## Next recommended upgrade
Connect the contact form to Supabase for real enquiry storage and add the complete India + Top 50 World destinations database.
