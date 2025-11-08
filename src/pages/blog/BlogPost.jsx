import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { findPost } from "../../utils/blog";
import { articleJsonLd, breadcrumbsJsonLd, buildOgImageFallback } from "../../utils/seo";

export default function BlogPost() {
  const { category, slug } = useParams();
  const post = findPost(category, slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-2"><Link to="/blog" className="underline">Back to blog</Link></p>
      </main>
    );
  }

  const url = `https://www.godigitalpro.in/blog/${post.category}/${post.slug}`;
  const title = `${post.title} | GoDigitalPro`;
  const desc = post.excerpt || "Expert article by GoDigitalPro.";
  const ogImg = post.cover || buildOgImageFallback(post.title);

  const BreadcrumbsLD = breadcrumbsJsonLd([
    { name: "Home", url: "https://www.godigitalpro.in" },
    { name: "Blog", url: "https://www.godigitalpro.in/blog" },
    { name: post.category, url: `https://www.godigitalpro.in/blog/${post.category}` },
    { name: post.title, url }
  ]);

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta name="keywords" content={(post.tags || []).join(", ")} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:modified_time" content={post.updated || post.date} />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd(post))}</script>
        <script type="application/ld+json">{JSON.stringify(BreadcrumbsLD)}</script>
      </Helmet>

      <article className="mx-auto max-w-3xl px-6 md:px-10 py-10">
        <header>
          <p className="text-xs uppercase tracking-widest text-amber-600">{post.category.replace("-", " ")}</p>
          <h1 className="mt-1 text-3xl font-extrabold">{post.title}</h1>
          <p className="mt-2 text-sm text-slate-500">
            {post.author?.name ? <>By <a className="underline" href={post.author.url || "#"}>{post.author.name}</a> · </> : null}
            {new Date(post.date).toLocaleDateString()}
            {post.updated && <> · Updated {new Date(post.updated).toLocaleDateString()}</>}
            {post.readingTime && <> · {post.readingTime}</>}
          </p>
          {post.cover && <img src={post.cover} alt={post.title} className="mt-5 rounded-2xl border border-slate-100" loading="eager" />}
        </header>

        {/* the actual content component exported by the post file */}
        <div className="prose prose-slate mt-6 max-w-none">
          <post.Component />
        </div>

        {/* EEAT footer: sources/author/company */}
        <footer className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
          <div className="font-semibold">About GoDigitalPro</div>
          <p className="mt-1 text-slate-700">
            GoDigitalPro is a digital marketing agency focused on performance, SEO, CRO, analytics, and web development.
            Articles are written by practitioners and reviewed for accuracy. For queries, write to <a className="underline" href="mailto:raj@godigitalpro.in">raj@godigitalpro.in</a>.
          </p>
        </footer>
      </article>
    </main>
  );
}
