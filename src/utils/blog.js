// Vite-powered file glob: auto-import every post file in /src/content/posts/**.jsx
// Each post must export: `meta` (object) and default React component as content.

const modules = import.meta.glob('/src/content/posts/**/*.jsx', { eager: true });

/** shape:
 * meta = {
 *   title, slug, excerpt, date, updated, category, tags:[], cover,
 *   canonical?, readingTime?, author:{ name, url }, draft?:boolean
 * }
 */

export const allPosts = Object.values(modules)
  .map((m) => {
    const Comp = m.default;
    const meta = m.meta || {};
    return { ...meta, Component: Comp };
  })
  .filter(p => !p.draft) // hide drafts by default
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getCategories() {
  const set = new Set(allPosts.map(p => p.category));
  return Array.from(set).sort();
}

export function getPostsByCategory(cat) {
  return allPosts.filter(p => p.category === cat);
}

export function findPost(category, slug) {
  return allPosts.find(p => p.category === category && p.slug === slug);
}
