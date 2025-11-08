// src/pages/blog/BlogPost.jsx
import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/*
  Eagerly load all post modules under /src/content/posts.
  Each post exports:
    - default: React component
    - meta: metadata object (title, slug, category, cover, dates, etc.)
*/
const modules = import.meta.glob("/src/content/posts/**/*.jsx", { eager: true });

const allPosts = Object.values(modules)
  .map((mod) => {
    const Component = mod && mod.default ? mod.default : null;
    const meta = mod && mod.meta ? mod.meta : null;
    return Component && meta ? { Component, meta } : null;
  })
  .filter(Boolean);

export default function BlogPost() {
  const { category, slug } = useParams();

  const match = useMemo(() => {
    // Prefer exact category + slug match, otherwise fall back to slug-only
    const exact =
      allPosts.find(
        (p) =>
          p.meta?.slug === slug &&
          (p.meta?.category || "").toLowerCase() === (category || "").toLowerCase()
      ) || null;

    if (exact) return exact;
    return allPosts.find((p) => p.meta?.slug === slug) || null;
  }, [category, slug]);

  if (!match) {
    // If the post isn't found, let the router send user home
    return <Navigate to="/blogs" replace />;
  }

  const { Component: Post, meta } = match;

  const canonical = `https://www.godigitalpro.in/blog/${meta.category}/${meta.slug}`;

  return (
    <main className="bg-white text-slate-900">
      {/* Basic SEO for the post page. The post content handles its own internal structure. */}
      <Helmet>
        <title>{meta.title} | GoDigitalPro Blog</title>
        <meta name="description" content={meta.excerpt} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.excerpt} />
        <meta property="og:image" content={meta.cover} />
        <meta property="article:author" content={meta.author?.name || "GoDigitalPro"} />
        <meta property="article:section" content={meta.category} />
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:modified_time" content={meta.updated || meta.date} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: meta.title,
            description: meta.excerpt,
            image: [meta.cover],
            author: {
              "@type": "Person",
              name: meta.author?.name || "GoDigitalPro",
              url: meta.author?.url || "https://www.godigitalpro.in/",
            },
            publisher: {
              "@type": "Organization",
              name: "GoDigitalPro",
              logo: {
                "@type": "ImageObject",
                url: "https://www.godigitalpro.in/apple-touch-icon.png",
              },
            },
            url: canonical,
            datePublished: meta.date,
            dateModified: meta.updated || meta.date,
          })}
        </script>
      </Helmet>

      {/* 
        Keep BlogPost minimal:
        - No extra H1 or repeated headers here
        - No TOC (each post decides its own)
        - Just render the post component in a nice container
      */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <article className="blog-article">
          <Post />
        </article>
      </div>
    </main>
  );
}
