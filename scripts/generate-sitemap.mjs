import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_TAXONOMY } from "../src/data/blogTaxonomy.js";
import { TOOLS, COMPARISONS, TAGS } from "../src/data/tools.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "src", "content", "posts");
const PUBLIC_DIR = path.join(ROOT, "public");
const SITE_URL = (process.env.SITE_URL || "https://www.godigitalpro.in").replace(/\/+$/, "");
const TODAY_ISO = new Date().toISOString();

const STATIC_ROUTES = [
  "/",
  "/onboarding",
  "/thank-you",
  "/about_us",
  "/about",
  "/privacy-policy",
  "/blog",
  "/blogs",
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
];

const TOOL_STATIC_ROUTES = ["/tools"];

function normalizePath(route) {
  if (!route.startsWith("/")) return `/${route}`;
  return route;
}

function isoDate(value) {
  if (!value) return TODAY_ISO;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return TODAY_ISO;
  return date.toISOString();
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else if (entry.isFile() && fullPath.endsWith(".jsx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function extractField(content, field) {
  const regex = new RegExp(`${field}\\s*:\\s*"([^"]+)"`, "i");
  const match = content.match(regex);
  return match ? match[1] : null;
}

async function collectPostMeta() {
  const files = await walk(CONTENT_DIR);
  const posts = [];
  for (const file of files) {
    const src = await fs.readFile(file, "utf8");
    const slug = extractField(src, "slug");
    const category = extractField(src, "category");
    if (!slug || !category) continue;
    const subCategory = extractField(src, "subCategory");
    const date = extractField(src, "date");
    const updated = extractField(src, "updated");
    posts.push({
      slug,
      category,
      subCategory,
      date,
      updated,
    });
  }
  return posts;
}

async function generate() {
  const urls = new Map();
  const categoryLastMod = new Map();
  const subCategoryLastMod = new Map();

  const addUrl = (route, lastmod) => {
    if (!route) return;
    const normalized = normalizePath(route);
    const existing = urls.get(normalized);
    const normalizedDate = isoDate(lastmod);
    if (!existing || normalizedDate > existing.lastmod) {
      urls.set(normalized, { lastmod: normalizedDate });
    }
  };

  STATIC_ROUTES.forEach((route) => addUrl(route, TODAY_ISO));
  TOOL_STATIC_ROUTES.forEach((route) => addUrl(route, TODAY_ISO));
  TOOLS.forEach((tool) => addUrl(`/tools/${tool.slug}`, TODAY_ISO));
  TAGS.forEach((tag) => addUrl(`/tools/tag/${encodeURIComponent(tag)}`, TODAY_ISO));
  COMPARISONS.forEach((comp) => addUrl(`/tools/compare/${comp.slug}`, TODAY_ISO));

  const posts = await collectPostMeta();

  posts.forEach((post) => {
    const lastmod = isoDate(post.updated || post.date);
    addUrl(`/blog/${post.category}/${post.slug}`, lastmod);

    const currentCat = categoryLastMod.get(post.category);
    if (!currentCat || lastmod > currentCat) {
      categoryLastMod.set(post.category, lastmod);
    }

    if (post.subCategory) {
      const key = `${post.category}::${post.subCategory}`;
      const currentSub = subCategoryLastMod.get(key);
      if (!currentSub || lastmod > currentSub) {
        subCategoryLastMod.set(key, lastmod);
      }
    }
  });

  BLOG_TAXONOMY.forEach((category) => {
    const catPath = `/blog/${category.slug}`;
    addUrl(catPath, categoryLastMod.get(category.slug) || TODAY_ISO);

    category.subcategories?.forEach((sub) => {
      const key = `${category.slug}::${sub.slug}`;
      const subPath = `/blog/${category.slug}/sub/${sub.slug}`;
      addUrl(subPath, subCategoryLastMod.get(key) || categoryLastMod.get(category.slug) || TODAY_ISO);
    });
  });

  const urlsXml = [...urls.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([route, { lastmod }]) => {
      const loc = `${SITE_URL}${route}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        "    <priority>0.7</priority>",
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlsXml,
    "</urlset>",
    "",
  ].join("\n");

  await fs.mkdir(PUBLIC_DIR, { recursive: true });
  const sitemapPath = path.join(PUBLIC_DIR, "sitemap.xml");
  await fs.writeFile(sitemapPath, sitemap, "utf8");
  console.log(`Sitemap generated with ${urls.size} URLs at ${sitemapPath}`);
}

generate().catch((err) => {
  console.error("Failed to generate sitemap:", err);
  process.exit(1);
});
