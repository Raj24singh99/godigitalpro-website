import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical } from "../../utils/seo";
import { getCategoryDefinition, getSubCategoryDefinition, getPostsBySubCategory } from "../../utils/blog";
import { getLucideIcon } from "../../utils/icons";
import { gradientByKey } from "../../utils/gradients";

const SUBCATEGORY_POST_LIMIT = 12;

export default function BlogSubCategory() {
  const { category: categoryParam, subCategory: subCategoryParam } = useParams();
  const categoryDefinition = getCategoryDefinition(categoryParam);

  if (!categoryDefinition) {
    return <Navigate to="/blog" replace />;
  }

  const canonicalCategory = categoryDefinition.slug;
  const subCategoryDefinition = getSubCategoryDefinition(canonicalCategory, subCategoryParam);

  if (!subCategoryDefinition) {
    return <Navigate to={`/blog/${canonicalCategory}`} replace />;
  }

  const posts = getPostsBySubCategory(canonicalCategory, subCategoryDefinition.slug);
  const postsToShow = posts.slice(0, SUBCATEGORY_POST_LIMIT);
  const canonical = buildCanonical(`/blog/${canonicalCategory}/sub/${subCategoryDefinition.slug}`);
  const SubIcon = getLucideIcon(subCategoryDefinition.icon || categoryDefinition.icon);
  const subGradient = gradientByKey(subCategoryDefinition.slug);
  const description = `${subCategoryDefinition.description} Fresh plays curated from the ${categoryDefinition.name} pillar.`;

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`${subCategoryDefinition.name} — ${categoryDefinition.name} | GoDigitalPro Blog`}
        description={description}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Blog", url: buildCanonical("/blog") },
          { name: categoryDefinition.name, url: buildCanonical(`/blog/${canonicalCategory}`) },
          { name: subCategoryDefinition.name, url: canonical },
        ]}
      />

      <header className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Link to="/blog" className="hover:text-slate-800">Blog</Link>
          <span>/</span>
          <Link to={`/blog/${canonicalCategory}`} className="hover:text-slate-800">
            {categoryDefinition.name}
          </Link>
          <span>/</span>
          <span className="text-slate-900">{subCategoryDefinition.name}</span>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <span className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${subGradient} text-white`}>
            <SubIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Sub-category</p>
            <h1 className="mt-1 text-3xl font-black leading-tight">{subCategoryDefinition.name}</h1>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-[15px] text-slate-700">{subCategoryDefinition.description}</p>
      </header>

      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Latest plays in this sub-category</h2>
            <p className="text-sm text-slate-600">
              Showing up to {SUBCATEGORY_POST_LIMIT} articles mapped to {subCategoryDefinition.name}.
            </p>
          </div>
          <Link
            to={`/blog/${canonicalCategory}`}
            className="hidden whitespace-nowrap text-sm font-semibold text-amber-600 hover:text-amber-700 md:inline-flex"
          >
            Back to {categoryDefinition.name} →
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
                    <span>{categoryDefinition.name}</span>
                    <span>·</span>
                    <span className="tracking-normal text-slate-700">{subCategoryDefinition.name}</span>
                    <span>·</span>
                    <span>{new Date(post.updated || post.date).toLocaleDateString()}</span>
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

        {!postsToShow.length && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-8 text-center text-sm text-slate-500">
            We are drafting the first posts for this sub-category. Join the waitlist to get notified when we publish.
          </div>
        )}
      </section>

      {categoryDefinition.subcategories.filter((sub) => sub.slug !== subCategoryDefinition.slug).length > 0 && (
        <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/70 p-5">
            <p className="text-sm font-semibold text-slate-900">Browse other sub-categories in {categoryDefinition.name}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categoryDefinition.subcategories
                .filter((sub) => sub.slug !== subCategoryDefinition.slug)
                .map((sub) => (
                  <Link
                    key={sub.slug}
                    to={`/blog/${canonicalCategory}/sub/${sub.slug}`}
                    className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-300 hover:text-slate-900"
                  >
                    {sub.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
