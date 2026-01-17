# GoDigitalPro

Marketing website + content hub + lightweight app shell for GoDigitalPro, built with React + Vite and deployed as a static SPA.

## At a glance
- **Public marketing site**: landing, services, industries, locations, digital products.
- **Content hubs**: Learn, Tools, Blog.
- **App area**: auth + dashboard routes for internal tools.
- **Backend services**: Supabase for auth/data, optional Firebase Hosting for deployment.

## Tech stack
- **Frontend**: React 18, Vite, React Router, Tailwind CSS, Framer Motion.
- **SEO**: `react-helmet-async`, prerender step + sitemap generation.
- **Data/Auth**: Supabase client.
- **Hosting**: Firebase Hosting (static `dist/` output).

## Architecture overview
- **Single-page app** with client-side routing.
- **Public vs app** routes: public pages render header/footer; `/dashboard` routes are protected.
- **Content-driven sections** (Tools, Blog) generated from `src/data` and `src/content`.
- **Static prerender** for better SEO on public pages.

## Directory map
```
/
├── docs/                     # Internal product docs
├── public/                   # Static assets (sitemap.xml, robots.txt, icons)
├── scripts/                  # Build-time generators (sitemap, tool pages, prerender)
├── src/
│   ├── assets/               # Images, logos, blog covers
│   ├── components/           # Shared UI and layout components
│   ├── config/               # Site metadata + Supabase client
│   ├── content/              # Blog content source
│   ├── context/              # Auth provider + shared React contexts
│   ├── data/                 # Catalogs and taxonomies (tools, learn, blog)
│   ├── pages/                # Route-level pages
│   ├── utils/                # Helpers/utilities
│   ├── App.jsx               # Route map + layout switching
│   └── main.jsx              # App bootstrap (providers + router)
├── supabase/                 # Supabase functions + migrations
├── firebase.json             # Firebase Hosting config
├── vite.config.js            # Vite build config
└── README_REPAIR_NOTES.md    # Setup fixes and notes
```

## Product areas and where to edit
### Marketing site
- **Routes**: `src/App.jsx`
- **Pages**: `src/pages/` (services, industries, locations, landing)
- **Shared UI**: `src/components/`

### Learn hub
- **Catalog**: `src/data/learnCatalog.js`
- **Pages**: `src/pages/learn/`

### Tools hub
- **Data source**: `src/data/tools.js`
- **Generated routes**: `src/pages/tools/generatedRoutes.jsx`
- **Generator**: `scripts/generate-tool-pages.mjs`

### Blog
- **Posts**: `src/content/posts/` (see `src/content/posts/README.md`)
- **Taxonomy**: `src/data/blogTaxonomy.js`
- **Pages**: `src/pages/blog/`

### App / Dashboard
- **Auth + session**: `src/context/AuthProvider.jsx`
- **Protected routes**: `src/components/ProtectedRoute`
- **Pages**: `src/pages/app/`

## Routing model
- **Public**: `"/"` and all marketing/content pages.
- **App**: `"/dashboard"` and app tools, wrapped in `ProtectedRoute`.
- **Behavior**: Header/Footer are hidden on app routes.

## Build, preview, and generation
```bash
npm run dev        # Vite dev server
npm run build      # Vite build + prerender
npm run preview    # Preview the production build
npm run sitemap    # Regenerate sitemap.xml
npm run seed:blog  # Create placeholder blog posts
```

## Environment variables
Create a `.env` file (or configure via hosting) with:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Deployment
- **Output**: `dist/`
- **Hosting**: Firebase Hosting via `firebase.json`
- **SPA fallback**: all routes rewrite to `index.html`

## How to add a new page
1. Create the page in `src/pages/...`
2. Add a route in `src/App.jsx`
3. (Optional) Add nav entry in `src/components/Header`

## How to add a tool
1. Add tool metadata to `src/data/tools.js`
2. Run `node scripts/generate-tool-pages.mjs`
3. Verify route appears under `/tools/{slug}`

## How to add a blog post
1. Create a new post file under `src/content/posts/{category}/{subcategory}/`
2. Ensure `meta.category` and `meta.subCategory` match folder slugs
3. Run `npm run sitemap` before deployment
