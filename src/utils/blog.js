import { BLOG_TAXONOMY } from "../data/blogTaxonomy";

// Vite-powered file glob: auto-import every post file in /src/content/posts/**.jsx
// Each post must export: `meta` (object) and default React component as content.
const modules = import.meta.glob("/src/content/posts/**/*.jsx", { eager: true });

const TAXONOMY_BY_SLUG = new Map(BLOG_TAXONOMY.map((cat) => [cat.slug, cat]));
const LEGACY_SLUG_LOOKUP = new Map();
BLOG_TAXONOMY.forEach((cat) => {
  (cat.legacySlugs || []).forEach((legacy) => {
    LEGACY_SLUG_LOOKUP.set(legacy, cat.slug);
  });
});

function titleCaseFromSlug(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
}

function normalizeMeta(meta = {}) {
  const canonical = resolveCategorySlug(meta.category) ?? meta.category;
  const catDef = canonical ? TAXONOMY_BY_SLUG.get(canonical) : null;
  const subDef =
    canonical && meta.subCategory
      ? catDef?.subcategories?.find((sub) => sub.slug === meta.subCategory) ?? null
      : null;

  const legacyFromCategory =
    canonical && canonical !== meta.category && meta.category ? [meta.category] : [];
  const dedupedLegacy = Array.from(
    new Set([...(meta.legacyCategories || []), ...legacyFromCategory].filter(Boolean))
  );

  return {
    ...meta,
    category: canonical,
    categoryLabel: catDef?.name || meta.categoryLabel || titleCaseFromSlug(canonical),
    subCategory: meta.subCategory || null,
    subCategoryLabel: subDef?.name || meta.subCategoryLabel || null,
    legacyCategories: dedupedLegacy,
  };
}

/** shape:
 * meta = {
 *   title, slug, excerpt, date, updated, category, tags:[], cover,
 *   canonical?, readingTime?, author:{ name, url }, draft?:boolean,
 *   subCategory?, legacyCategories?:[]
 * }
 */
export const allPosts = Object.values(modules)
  .map((m) => {
    const Comp = m.default;
    const meta = normalizeMeta(m.meta || {});
    return { ...meta, Component: Comp };
  })
  .filter((p) => !p.draft) // hide drafts by default
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function resolveCategorySlug(slug) {
  if (!slug) return undefined;
  if (TAXONOMY_BY_SLUG.has(slug)) return slug;
  return LEGACY_SLUG_LOOKUP.get(slug);
}

export function getCategoryDefinition(slugOrAlias) {
  const canonical = resolveCategorySlug(slugOrAlias) ?? slugOrAlias;
  return canonical ? TAXONOMY_BY_SLUG.get(canonical) ?? null : null;
}

export function getSubCategoryDefinition(categorySlug, subSlug) {
  if (!categorySlug || !subSlug) return null;
  const category = getCategoryDefinition(categorySlug);
  return category?.subcategories?.find((sub) => sub.slug === subSlug) ?? null;
}

export function getCategories() {
  const fromTaxonomy = BLOG_TAXONOMY.map((cat) => cat.slug);
  const fromPosts = allPosts.map((p) => p.category).filter(Boolean);
  return Array.from(new Set([...fromTaxonomy, ...fromPosts])).sort();
}

export function getPostsByCategory(cat) {
  const canonical = resolveCategorySlug(cat) ?? cat;
  return allPosts.filter(
    (p) =>
      p.category === canonical ||
      (p.legacyCategories && (p.legacyCategories.includes(cat) || p.legacyCategories.includes(canonical)))
  );
}

export function getPostsBySubCategory(categorySlug, subCategorySlug) {
  const canonicalCategory = resolveCategorySlug(categorySlug) ?? categorySlug;
  if (!canonicalCategory || !subCategorySlug) return [];
  return allPosts.filter(
    (post) =>
      post.category === canonicalCategory &&
      post.subCategory === subCategorySlug
  );
}

export function findPost(category, slug) {
  const targetSlug = slug ?? category;
  const targetCategory = slug ? category : undefined;
  if (!targetSlug) return undefined;
  const canonical = resolveCategorySlug(targetCategory) ?? targetCategory;
  const primaryMatch = canonical
    ? allPosts.find(
        (p) =>
          p.slug === targetSlug &&
          (p.category === canonical ||
            (p.legacyCategories || []).some((legacy) => legacy === canonical))
      )
    : null;
  return primaryMatch || allPosts.find((p) => p.slug === targetSlug);
}
