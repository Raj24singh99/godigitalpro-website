const fs = require("node:fs");
const path = require("node:path");
const Prerenderer = require("@prerenderer/prerenderer");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.resolve(ROOT, process.env.PRERENDER_DIST_DIR || "dist");
const SITEMAP_PATH = path.join(ROOT, "public", "sitemap.xml");
const SITE_URL = (process.env.SITE_URL || "https://godigitalpro.in").replace(/\/+$/, "");

const FALLBACK_ROUTES = [
  "/",
  "/about_us",
  "/onboarding",
  "/privacy-policy",
  "/blog",
  "/services/website-development",
  "/services/social-media-marketing",
  "/services/brand-building",
  "/services/paid-marketing",
  "/services/video-ad-production",
  "/services/seo-content",
  "/industries/edtech",
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

function readRoutes() {
  const requestedRoutes = (process.env.PRERENDER_ROUTES || "")
    .split(",")
    .map((route) => route.trim())
    .filter(Boolean);

  if (requestedRoutes.length) {
    return requestedRoutes;
  }

  const routes = readRoutesFromSitemap();
  const maxRoutes = Number.parseInt(process.env.PRERENDER_MAX_ROUTES || "", 10);

  if (Number.isFinite(maxRoutes) && maxRoutes > 0) {
    return routes.slice(0, maxRoutes);
  }

  return routes;
}

function resolveOutputPath(route) {
  if (!route || route === "/") {
    return path.join(DIST_DIR, "index.html");
  }

  const normalized = route.replace(/^\/+/, "").replace(/\/+$/, "");

  if (path.extname(normalized)) {
    return path.join(DIST_DIR, normalized);
  }

  return path.join(DIST_DIR, normalized, "index.html");
}

function sanitizeRenderedHtml(html) {
  return html
    .replace(/<script async="" src="https:\/\/www\.googletagmanager\.com\/gtm\.js[^"]*"><\/script>/g, "")
    .replace(/<script async="" src="https:\/\/cdn\.sender\.net\/accounts_resources\/universal\.js"><\/script>/g, "");
}

async function run() {
  const routes = readRoutes();
  if (!routes.length) {
    console.log("[prerender] No routes found, skipping.");
    return;
  }
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`[prerender] Missing dist directory at ${DIST_DIR}. Run vite build first.`);
  }

  const prerenderer = new Prerenderer({
    staticDir: DIST_DIR,
    routes,
    postProcess(renderedRoute) {
      const outputPath = resolveOutputPath(renderedRoute.route || renderedRoute.originalRoute);
      const sanitizedHtml = sanitizeRenderedHtml(renderedRoute.html);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, sanitizedHtml, "utf8");
      renderedRoute.html = sanitizedHtml;
      return renderedRoute;
    },
    renderer: new PuppeteerRenderer({
      headless: true,
      maxConcurrentRoutes: 1,
      timeout: 120000,
      renderAfterTime: 3000,
      skipThirdPartyRequests: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    }),
  });

  await prerenderer.initialize();
  for (const route of routes) {
    console.log(`[prerender] Rendering ${route}`);
    await prerenderer.renderRoutes([route]);
  }
  await prerenderer.destroy();

  console.log(`[prerender] Rendered ${routes.length} routes.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
