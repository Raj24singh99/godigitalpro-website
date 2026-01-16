// src/pages/blog/BlogPost.jsx
import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { articleJsonLd, buildCanonical } from "../../utils/seo";
import { allPosts, findPost, getCategoryDefinition } from "../../utils/blog";

export default function BlogPost() {
  const { category, slug } = useParams();

  const post = useMemo(() => findPost(category, slug), [category, slug]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const sameCategory = allPosts.filter(
      (item) => item.category === post.category && item.slug !== post.slug
    );
    if (!sameCategory.length) return [];
    const sameSub = post.subCategory
      ? sameCategory.filter((item) => item.subCategory === post.subCategory)
      : [];
    const rest = sameCategory.filter((item) => item.subCategory !== post.subCategory);
    return [...sameSub, ...rest].slice(0, 4);
  }, [post]);

  if (!post) {
    const categoryMatch = getCategoryDefinition(slug || category);
    if (categoryMatch) {
      return <Navigate to={`/blog/category/${categoryMatch.slug}`} replace />;
    }
    return <Navigate to="/blog" replace />;
  }

  if (category) {
    return <Navigate to={`/blog/${post.slug}`} replace />;
  }

  const canonical = buildCanonical(`/blog/${post.slug}`);
  const breadcrumbs = [
    { name: "Home", url: buildCanonical("/") },
    { name: "Blog", url: buildCanonical("/blog") },
    {
      name: post.categoryLabel || post.category,
      url: buildCanonical(`/blog/category/${post.category}`),
    },
  ];

  if (post.subCategory && post.subCategoryLabel) {
    breadcrumbs.push({
      name: post.subCategoryLabel,
      url: buildCanonical(`/blog/category/${post.category}/sub/${post.subCategory}`),
    });
  }

  breadcrumbs.push({ name: post.title, url: canonical });
  const PostComponent = post.Component;
  const schemaBlocks = [articleJsonLd(post), ...(post.schema || [])].filter(Boolean);
  const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`${post.title} | GoDigitalPro Blog`}
        description={post.excerpt || post.metaDescription}
        canonical={canonical}
        image={post.cover}
        imageAlt={post.coverAlt || post.title}
        type="article"
        publishedTime={post.date}
        modifiedTime={post.updated || post.date}
        authorName={post.author?.name || "GoDigitalPro"}
        schema={schemaBlocks}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Link to="/blog" className="hover:text-slate-800">
            Blog
          </Link>
          <span>/</span>
          <Link to={`/blog/category/${post.category}`} className="hover:text-slate-800">
            {post.categoryLabel || post.category}
          </Link>
          {post.subCategory && post.subCategoryLabel && (
            <>
              <span>/</span>
              <Link
                to={`/blog/category/${post.category}/sub/${post.subCategory}`}
                className="rounded-full bg-slate-100 px-3 py-1 text-[11px] capitalize tracking-normal text-slate-700 hover:bg-slate-200"
              >
                {post.subCategoryLabel}
              </Link>
            </>
          )}
        </div>

        <article className="blog-article">
          <PostComponent />
        </article>

        {relatedPosts.length ? (
          <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              More posts in {post.categoryLabel || "this category"}
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Recent and relevant articles to continue exploring this topic.
            </p>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl transition hover:-translate-y-0.5"
                >
                  {item.cover ? (
                    <div className="aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100">
                      <img
                        src={item.cover}
                        alt={item.coverAlt || item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    <span>{item.subCategoryLabel || item.categoryLabel || "Blog"}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{item.readingTime || "5 min read"}</span>
                  </div>
                  <p className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-700">
                    {item.excerpt || item.metaDescription || "Read the full article."}
                  </p>
                  <span className="text-xs text-slate-500">{formatDate(item.date)}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
