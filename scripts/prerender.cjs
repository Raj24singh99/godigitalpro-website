const fs = require("node:fs");
const path = require("node:path");
const Prerenderer = require("@prerenderer/prerenderer");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(ROOT, "dist");
const SITEMAP_PATH = path.join(ROOT, "public", "sitemap.xml");
const SITE_URL = (process.env.SITE_URL || "https://www.godigitalpro.in").replace(/\/+$/, "");

const FALLBACK_ROUTES = [
  "/",
  "/about_us",
  "/privacy-policy",
  "/blog",
  "/services/website-development",
  "/services/social-media-marketing",
  "/services/brand-building",
  "/services/paid-marketing",
  "/services/marketplaces",
  "/services/seo-content",
  "/industries/d2c-ecommerce",
  "/industries/saas-startups",
  "/industries/healthcare",
  "/industries/local-services",
  "/industries/edtech",
  "/industries/b2b-services",
  "/tools",
];

function readRoutesFromSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) return FALLBACK_ROUTES;
  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  const routes = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml))) {
    const loc = match[1];
    if (!loc) continue;
    try {
      const url = new URL(loc);
      if (url.origin !== SITE_URL) continue;
      routes.push(url.pathname || "/");
    } catch {
      if (loc.startsWith(SITE_URL)) {
        routes.push(loc.slice(SITE_URL.length) || "/");
      }
    }
  }
  const unique = [...new Set(routes.filter(Boolean))];
  return unique.length ? unique : FALLBACK_ROUTES;
}

async function run() {
  const routes = readRoutesFromSitemap();
  if (!routes.length) {
    console.log("[prerender] No routes found, skipping.");
    return;
  }
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`[prerender] Missing dist directory at ${DIST_DIR}. Run vite build first.`);
  }

  const prerenderer = new Prerenderer({
    staticDir: DIST_DIR,
    outputDir: DIST_DIR,
    routes,
    renderer: new PuppeteerRenderer({
      headless: true,
      renderAfterTime: 1500,
    }),
  });

  await prerenderer.initialize();
  await prerenderer.renderRoutes(routes);
  await prerenderer.destroy();

  console.log(`[prerender] Rendered ${routes.length} routes.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
