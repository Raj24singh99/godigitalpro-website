// src/pages/blog/Blogs.jsx
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { allPosts, getCategories } from "../../utils/blog";
import { blogOrgJsonLd, breadcrumbsJsonLd } from "../../utils/seo";

// Always-visible categories (even if 0 posts yet)
const DEFAULT_CATEGORIES = [
  "performance",
  "seo",
  "social",
  "cro",
  "analytics",
  "web-dev",
  "case-studies",
  "agency",
];

// Soft color tokens for category chips (cycles if more)
const CHIP_COLORS = [
  { bg: "bg-amber-50",   ring: "ring-amber-200",   text: "text-amber-800",   hover: "hover:bg-amber-100" },
  { bg: "bg-sky-50",     ring: "ring-sky-200",     text: "text-sky-800",     hover: "hover:bg-sky-100" },
  { bg: "bg-emerald-50", ring: "ring-emerald-200", text: "text-emerald-800", hover: "hover:bg-emerald-100" },
  { bg: "bg-rose-50",    ring: "ring-rose-200",    text: "text-rose-800",    hover: "hover:bg-rose-100" },
  { bg: "bg-violet-50",  ring: "ring-violet-200",  text: "text-violet-800",  hover: "hover:bg-violet-100" },
  { bg: "bg-indigo-50",  ring: "ring-indigo-200",  text: "text-indigo-800",  hover: "hover:bg-indigo-100" },
  { bg: "bg-teal-50",    ring: "ring-teal-200",    text: "text-teal-800",    hover: "hover:bg-teal-100" },
  { bg: "bg-fuchsia-50", ring: "ring-fuchsia-200", text: "text-fuchsia-800", hover: "hover:bg-fuchsia-100" },
];

function pretty(name) {
  // "case-studies" -> "Case Studies"
  return name.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function Blogs() {
  const title = "GoDigitalPro Blog — Digital Marketing, SEO, Web & Analytics";
  const desc =
    "Actionable playbooks from GoDigitalPro: performance marketing, SEO, CRO, analytics, web development, case studies, and governance. Built for EEAT and AI-overview readiness.";

  // Merge defaults with discovered categories (keeps alphabetical)
  const categories = useMemo(() => {
    const discovered = getCategories();
    return Array.from(new Set([...DEFAULT_CATEGORIES, ...discovered])).sort((a, b) =>
      a.localeCompare(b)
    );
  }, []);

  // JSON-LD: ItemList for the grid (helps AI Overviews)
  const itemListJsonLd = useMemo(() => {
    const items = allPosts.slice(0, 12).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.godigitalpro.in/blog/${p.category}/${p.slug}`,
      name: p.title,
    }));
    return { "@context": "https://schema.org", "@type": "ItemList", itemListElement: items };
  }, []);

  return (
    <main className="relative bg-white text-slate-900">
      {/* soft top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,240,200,.25), rgba(255,255,255,0))",
        }}
      />

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://www.godigitalpro.in/blog" />
        <meta
          name="keywords"
          content="digital marketing blog, performance marketing, SEO, CRO, GA4, CAPI, web development, GoDigitalPro"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://www.godigitalpro.in/blog" />
        <meta property="og:image" content="https://www.godigitalpro.in/public/og-default.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(blogOrgJsonLd())}</script>
        <script type="application/ld+json">
          {JSON.stringify(
            breadcrumbsJsonLd([
              { name: "Home", url: "https://www.godigitalpro.in" },
              { name: "Blog", url: "https://www.godigitalpro.in/blog" },
            ])
          )}
        </script>
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-10 md:pt-12 pb-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold tracking-widest text-amber-600 uppercase">
              GoDigitalPro Blog
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight">Insights &amp; Playbooks</h1>
            <p className="mt-2 max-w-prose text-[15px] text-slate-700">
              Performance, SEO, CRO, analytics, web dev, and agency governance — no fluff, just
              what moves growth.
            </p>
          </div>
          <Link
            to="/onboarding"
            className="hidden md:inline-flex items-center rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Get a Free Growth Plan
          </Link>
        </div>
      </section>

      {/* Category chips (no counts) */}
      <section className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/blog"
            className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-1.5 text-xs font-semibold shadow-sm hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label="All posts"
          >
            All
          </Link>

          {categories.map((c, idx) => {
            const token = CHIP_COLORS[idx % CHIP_COLORS.length];
            return (
              <Link
                key={c}
                to={`/blog/${c}`}
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm ring-1 ${token.bg} ${token.text} ${token.ring} ${token.hover} focus:outline-none focus-visible:ring-2`}
                aria-label={`${pretty(c)} category`}
              >
                {pretty(c)}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allPosts.slice(0, 12).map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link
                to={`/blog/${p.category}/${p.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  {p.cover ? (
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-slate-400 text-xs">
                      Cover coming soon
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    {pretty(p.category)}
                  </span>

                  <h2 className="mt-3 text-lg font-semibold leading-snug text-slate-900 group-hover:text-slate-950">
                    {p.title}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm text-slate-600">{p.excerpt}</p>

                  <p className="mt-3 text-xs text-slate-400">
                    {new Date(p.updated || p.date).toLocaleDateString()} · {p.readingTime || "5 min read"}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom CTA (mobile) */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/onboarding"
            className="inline-flex items-center rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Get a Free Growth Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
