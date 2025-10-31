# GoDigitalPro – Fixed Dev Setup

Changes applied:
- **Created** `src/main.jsx` and wired React Router + HelmetProvider + index.css
- `index.html` already pointed to `/src/main.jsx` (now exists) → fixes Vite 404
- No business logic or page content changed
- Tailwind setup kept intact

## Run locally
```bash
npm i
npm run dev
# open the URL Vite prints (e.g., http://localhost:5173)
```

## Build
```bash
npm run build
npm run preview
```
