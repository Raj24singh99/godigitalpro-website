import React, { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { getPostsByCategory, getCategoryDefinition } from "../../utils/blog";
import { getLucideIcon } from "../../utils/icons";
import { gradientByKey } from "../../utils/gradients";

const CATEGORY_POST_LIMIT = 12;

function fallbackTitle(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

export default function BlogCategory() {
  const { category: categoryParam } = useParams();
  const categoryDefinition = getCategoryDefinition(categoryParam);
  const canonicalSlug = categoryDefinition?.slug || categoryParam;
  const posts = getPostsByCategory(canonicalSlug);

  if (categoryDefinition && categoryParam !== canonicalSlug) {
    return <Navigate to={`/blog/${canonicalSlug}`} replace />;
  }

  const categoryTitle = categoryDefinition?.name || fallbackTitle(canonicalSlug);
  const canonical = buildCanonical(`/blog/${canonicalSlug}`);
  const description = categoryDefinition
    ? `${categoryDefinition.description} Explore ${categoryDefinition.subcategories.length} sub-categories plus the latest plays from GoDigitalPro.`
    : `Expert articles on ${categoryTitle} by GoDigitalPro: practical guides, checklists, and playbooks for growth.`;
  const CategoryIcon = getLucideIcon(categoryDefinition?.icon);
  const categoryGradient = gradientByKey(canonicalSlug);
  const postsToShow = posts.slice(0, CATEGORY_POST_LIMIT);

  const postsBySubCategory = useMemo(() => {
    const map = new Map();
    posts.forEach((post) => {
      const key = post.subCategory || "general";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(post);
    });
    return map;
  }, [posts]);

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`${categoryTitle} — Blog | GoDigitalPro`}
        description={description}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Blog", url: buildCanonical("/blog") },
          { name: categoryTitle, url: canonical },
        ]}
      />

      <header className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="flex items-center gap-4">
          <span className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${categoryGradient} text-white`}>
            <CategoryIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Blog Category</p>
            <h1 className="mt-1 text-3xl font-black leading-tight">{categoryTitle}</h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[15px] text-slate-700">{categoryDefinition?.description || description}</p>
        {categoryDefinition?.pillarIdea && (
          <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            {categoryDefinition.pillarIdea}
          </p>
        )}
      </header>

      {/* Sub-category overview */}
      {categoryDefinition?.subcategories?.length ? (
        <section className="mx-auto max-w-6xl px-6 md:px-10 pb-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Sub-categories inside {categoryTitle}</h2>
              <p className="text-sm text-slate-600">
                Click through to view the sub-category hub, icon, short description, and recency-based posts.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden whitespace-nowrap text-sm font-semibold text-amber-600 hover:text-amber-700 md:inline-flex"
            >
              Back to all pillars →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {categoryDefinition.subcategories.map((sub, idx) => {
              const relatedPosts = postsBySubCategory.get(sub.slug) || [];
              const Icon = getLucideIcon(sub.icon);
              const gradient = gradientByKey(sub.slug || `${idx}`);
              return (
                <Link
                  to={`/blog/${canonicalSlug}/sub/${sub.slug}`}
                  key={sub.slug}
                  className={`group block rounded-[26px] bg-gradient-to-br ${gradient} p-[1px] transition hover:-translate-y-0.5 hover:shadow-lg`}
                >
                  <div className="flex h-full flex-col rounded-[24px] bg-white p-5">
                    <div className="flex items-start gap-3">
                      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">Sub-category</p>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{sub.name}</h3>
                        <p className="mt-2 text-sm text-slate-600">{sub.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span>
                        {relatedPosts.length
                          ? `${relatedPosts.length} post${relatedPosts.length > 1 ? "s" : ""} live`
                          : "Publishing soon"}
                      </span>
                      <span className="font-semibold text-amber-600">Open sub-category →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Latest plays in {categoryTitle}</h2>
            <p className="text-sm text-slate-600">
              Deep dives, checklists, and templates authored by GoDigitalPro strategists. Showing up to {CATEGORY_POST_LIMIT} recency-ranked posts.
            </p>
          </div>
          <Link
            to="/onboarding"
            className="hidden whitespace-nowrap rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black md:inline-flex"
          >
            Build a plan
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {postsToShow.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link to={`/blog/${post.category}/${post.slug}`} className="flex h-full flex-col">
                {post.cover && (
                  <div className="relative aspect-[16/9] w-full bg-slate-100">
                    <img
                      src={post.cover}
                      alt={post.coverAlt || post.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex h-full flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    {post.subCategoryLabel && (
                      <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-slate-700 tracking-normal">
                        {post.subCategoryLabel}
                      </span>
                    )}
                    <span>{new Date(post.updated || post.date).toLocaleDateString()}</span>
                    <span>·</span>
                    <span>{post.readingTime || "5 min read"}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
                  )}

                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-amber-600">
                    Read the play →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {!posts.length && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500">
            Posts for this pillar are being drafted. Join the waitlist to get notified when we publish.
          </div>
        )}
      </section>
    </main>
  );
}
