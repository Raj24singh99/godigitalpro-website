import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { BLOG_TAXONOMY } from "../src/data/blogTaxonomy.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src", "content", "posts");

const today = new Date().toISOString().split("T")[0];

function ensureDir(dir) {
  return fs.mkdir(dir, { recursive: true });
}

async function hasPostFiles(dir) {
  try {
    const entries = await fs.readdir(dir);
    return entries.some((entry) => entry.endsWith(".jsx"));
  } catch (err) {
    if (err.code === "ENOENT") return false;
    throw err;
  }
}

function buildTemplate({ category, subCategory }) {
  const slug = `${subCategory.slug}-playbook`;
  const title = `${subCategory.name} Playbook`;
  const description = `Starter guide for ${subCategory.name.toLowerCase()} inside the ${category.name} pillar.`;

  return `/* Auto-generated placeholder post for ${category.name} → ${subCategory.name}.
   Replace this with real research/content when ready.
*/
import React from "react";

export const meta = {
  title: "${title}",
  seoTitle: "${title} | ${category.name}",
  metaDescription: "${description}",
  slug: "${slug}",
  date: "${today}",
  updated: "${today}",
  category: "${category.slug}",
  subCategory: "${subCategory.slug}",
  tags: ["${category.name}", "${subCategory.name}", "digital marketing"],
  draft: false,
};

export default function ${toComponentName(subCategory.slug)}() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>${title}</h1>
      <p>
        This placeholder outlines how we approach ${subCategory.name.toLowerCase()} when building
        a full-funnel digital marketing plan. Replace this copy with your detailed POV,
        frameworks, and examples to help us win the SERP.
      </p>
      <h2>Why this matters</h2>
      <p>
        ${subCategory.name} ties directly to the ${category.name} pillar. Strong fundamentals here
        help us rank for high-intent digital marketing agency keywords while supporting channel-specific research.
      </p>
      <h2>Next steps for the content team</h2>
      <ul>
        <li>Interview SMEs and stitch real data points into this outline.</li>
        <li>Add frameworks, checklists, and calls-to-action mapped to ${subCategory.name.toLowerCase()}.</li>
        <li>Link to relevant services, case studies, and other blog posts once published.</li>
      </ul>
    </article>
  );
}
`;
}

function toComponentName(slug) {
  return slug
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

async function main() {
  let created = 0;
  for (const category of BLOG_TAXONOMY) {
    const categoryDir = path.join(POSTS_DIR, category.slug);
    await ensureDir(categoryDir);
    for (const sub of category.subcategories || []) {
      const subDir = path.join(categoryDir, sub.slug);
      await ensureDir(subDir);
      const hasPost = await hasPostFiles(subDir);
      if (hasPost) continue;
      const filename = path.join(subDir, `${sub.slug}-playbook.jsx`);
      const template = buildTemplate({ category, subCategory: sub });
      await fs.writeFile(filename, template, "utf8");
      created += 1;
      console.log("Created placeholder:", path.relative(ROOT, filename));
    }
  }
  if (!created) {
    console.log("All sub-categories already have at least one post. No placeholders created.");
  } else {
    console.log(`\n✅ Created ${created} placeholder post(s). Remember to replace them with real content soon.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
