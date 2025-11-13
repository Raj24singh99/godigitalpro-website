// src/pages/blog/BlogPost.jsx
import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { articleJsonLd, buildCanonical } from "../../utils/seo";
import { findPost } from "../../utils/blog";

export default function BlogPost() {
  const { category, slug } = useParams();

  const post = useMemo(() => findPost(category, slug), [category, slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  if (post.category && category !== post.category) {
    return <Navigate to={`/blog/${post.category}/${post.slug}`} replace />;
  }

  const canonical = buildCanonical(`/blog/${post.category}/${post.slug}`);
  const breadcrumbs = [
    { name: "Home", url: buildCanonical("/") },
    { name: "Blog", url: buildCanonical("/blog") },
    {
      name: post.categoryLabel || post.category,
      url: buildCanonical(`/blog/${post.category}`),
    },
  ];

  if (post.subCategory && post.subCategoryLabel) {
    breadcrumbs.push({
      name: post.subCategoryLabel,
      url: buildCanonical(`/blog/${post.category}/sub/${post.subCategory}`),
    });
  }

  breadcrumbs.push({ name: post.title, url: canonical });
  const PostComponent = post.Component;

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
        schema={[articleJsonLd(post)]}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          <Link to="/blog" className="hover:text-slate-800">
            Blog
          </Link>
          <span>/</span>
          <Link to={`/blog/${post.category}`} className="hover:text-slate-800">
            {post.categoryLabel || post.category}
          </Link>
          {post.subCategory && post.subCategoryLabel && (
            <>
              <span>/</span>
              <Link
                to={`/blog/${post.category}/sub/${post.subCategory}`}
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
      </div>
    </main>
  );
}
