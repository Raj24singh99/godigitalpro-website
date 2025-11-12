/* @refresh reload */
// src/content/posts/seo/technical-seo-foundations.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title:
    "Technical SEO Foundations: 16 High-Impact Fixes for Faster Rankings & Scalable Organic Growth",
  seoTitle:
    "Technical SEO Foundations: 16 Must-Do Fixes for Speed, Crawl, Indexing & CWV",
  metaDescription:
    "A practical, step-by-step technical SEO playbook: crawl budget, sitemaps, robots, canonicalization, CWV, render, i18n, structured data, pagination, migrations, and monitoring—built for React/Next/Vite sites.",
  slug: "technical-seo-foundations",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "seo",
  tags: [
    "technical seo",
    "core web vitals",
    "crawl budget",
    "indexing",
    "schema",
    "sitemaps",
    "canonical",
    "pagination",
    "react seo",
  ],
  cover: "/blogimages/seo-technical-foundations.png",
  readingTime: "12 min read",
  author: {
    name: "Raj Singh",
    url: "https://www.linkedin.com/in/raj24singh99/",
  },
  draft: false,
};

/* ========= TOC (H2 with optional H3 children) ========= */
const TOC = [
  { id: "intro", label: "Introduction: Technical SEO = Compounding Leverage" },
  {
    id: "crawl",
    label: "Crawl Budget, Robots & Sitemaps",
    children: [
      { id: "robots", label: "Robots.txt & Disallow Hygiene" },
      { id: "sitemaps", label: "XML Sitemaps: Clean & Split" },
    ],
  },
  {
    id: "canonicalization",
    label: "Canonicalization & Duplicates",
    children: [
      { id: "params", label: "Parameters & Facets" },
      { id: "hreflang", label: "Internationalization (hreflang)" },
    ],
  },
  {
    id: "render",
    label: "Rendering, JS SEO & Indexing",
    children: [
      { id: "ssr", label: "SSR/SSG/ISR for React/Next/Vite" },
      { id: "blocked", label: "Blocked Assets, 404s & Soft-404s" },
    ],
  },
  {
    id: "cwv",
    label: "Core Web Vitals & Performance",
    children: [
      { id: "images", label: "Images, Fonts & Third-Parties" },
      { id: "cls", label: "CLS, LCP, INP Quick Wins" },
    ],
  },
  {
    id: "schema",
    label: "Structured Data & Rich Results",
    children: [
      { id: "article", label: "Article/BlogPosting" },
      { id: "breadcrumbs", label: "Breadcrumbs & FAQ" },
    ],
  },
  { id: "pagination", label: "Pagination, Canonicals & Noindex Rules" },
  { id: "migrations", label: "Site Migrations Without Losing SEO" },
  { id: "monitoring", label: "Monitoring, Alerting & SEO QA" },
  { id: "faqs", label: "FAQ: Top 6 Technical SEO Questions" },
  { id: "conclusion", label: "Conclusion & Next Steps" },
];

/* ========= Hooks ========= */
function useActiveH2() {
  const h2Ids = useMemo(() => TOC.map((s) => s.id), []);
  const [active, setActive] = useState(h2Ids[0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    h2Ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [h2Ids]);

  return active;
}

/* ========= Component ========= */
export default function Post() {
  const activeH2 = useActiveH2();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What matters most for technical SEO on modern JS sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Indexable HTML (SSR/SSG/ISR), fast CWV (LCP, INP, CLS), clean canonicals, useful sitemaps, robots hygiene, schema, and monitoring. Those drive the bulk of impact.",
        },
      },
      {
        "@type": "Question",
        name: "Should I block faceted URLs with robots.txt or noindex?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Prefer noindex for thin/duplicate facets that must remain crawlable for links. Use robots Disallow only for truly useless crawl paths.",
        },
      },
      {
        "@type": "Question",
        name: "Is rel=prev/next still supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Google ignores prev/next signals. Use strong canonicals, logical internal links, and consider noindex for deep pages with no demand.",
        },
      },
      {
        "@type": "Question",
        name: "How do I fix CLS quickly?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Always reserve space for images/iframes, load fonts with swap, avoid layout-snapping banners, and hydrate components without shifting.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a separate m-dot site?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Use responsive design on a single canonical hostname. m-dot introduces duplication and canonical complexity.",
        },
      },
      {
        "@type": "Question",
        name: "How risky are domain migrations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "They’re safe with prep: 1:1 301 map, verified properties, updated sitemaps, Search Console change-of-address, and post-launch log/coverage monitoring.",
        },
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{meta.seoTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <link
          rel="canonical"
          href={`https://www.godigitalpro.in/blog/${meta.category}/${meta.slug}`}
        />
        <meta property="og:title" content={meta.seoTitle} />
        <meta property="og:description" content={meta.metaDescription} />
        <meta property="og:image" content={meta.cover} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={meta.author.name} />
        <meta property="article:section" content={meta.category} />
        <meta property="article:published_time" content={meta.date} />
        <meta property="article:modified_time" content={meta.updated} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
          GoDigitalPro Blog / SEO
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          {meta.title}
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl">{meta.metaDescription}</p>
        <div className="mt-3 text-xs text-slate-500">
          {meta.date} · {meta.readingTime} · By{" "}
          <a
            href={meta.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {meta.author.name}
          </a>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-10 py-12">
        {/* TOC */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <p className="text-sm font-semibold mb-3 text-slate-700">
              On this page
            </p>
            <ul className="space-y-2 text-[14px]">
              {TOC.map((h2) => {
                const isActive = activeH2 === h2.id;
                return (
                  <li key={h2.id}>
                    <a
                      href={`#${h2.id}`}
                      className={`block transition-colors ${
                        isActive
                          ? "text-amber-600 font-medium"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {h2.label}
                    </a>
                    {isActive && h2.children?.length ? (
                      <ul className="mt-1 ml-3 border-l pl-3 space-y-1">
                        {h2.children.map((h3) => (
                          <li key={h3.id}>
                            <a
                              href={`#${h3.id}`}
                              className="block text-[13px] text-slate-500 hover:text-slate-800"
                            >
                              {h3.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="blog-article md:w-3/4 lg:w-4/5">
          <img
            src={meta.cover}
            alt={meta.title}
            className="rounded-xl w-full mb-8 shadow-sm"
            loading="lazy"
          />

          {/* INTRO */}
          <h2 id="intro" className="scroll-mt-28">
            Introduction: Technical SEO = Compounding Leverage
          </h2>
          <p>
            Technical SEO makes every content and link dollar work harder. When
            crawlers read fast, HTML is indexable, and pages are quick and
            stable, rankings rise and stay. This playbook focuses on the 20% of
            fixes that unlock 80% of growth for React/Next/Vite stacks.
          </p>

          {/* CRAWL */}
          <h2 id="crawl" className="scroll-mt-28">
            Crawl Budget, Robots &amp; Sitemaps
          </h2>
          <p>
            Focus crawl on valuable URLs; keep dead ends and infinite spaces out
            of the queue.
          </p>

          <h3 id="robots" className="scroll-mt-28">
            Robots.txt &amp; Disallow Hygiene
          </h3>
          <ul>
            <li>
              Disallow true noise: <code>/cart</code>, <code>/checkout</code>,{" "}
              <code>/search</code>, <code>/?*sort=</code>, session IDs.
            </li>
            <li>
              Do <em>not</em> Disallow URLs that need to be crawled to respect{" "}
              <code>noindex</code> or discover canonicals.
            </li>
          </ul>

          <h3 id="sitemaps" className="scroll-mt-28">
            XML Sitemaps: Clean &amp; Split
          </h3>
          <ul>
            <li>Only indexable 200-OK pages. No 3xx/4xx/5xx or noindex.</li>
            <li>Split per type: pages, blog, products. Keep each &lt;50k URLs.</li>
            <li>Update on publish; ping Search Console automatically.</li>
          </ul>

          {/* CANONICAL */}
          <h2 id="canonicalization" className="scroll-mt-28">
            Canonicalization &amp; Duplicates
          </h2>
          <p>
            Choose one canonical URL per content unit and reinforce it through
            links, sitemaps, and headers.
          </p>

          <h3 id="params" className="scroll-mt-28">
            Parameters &amp; Facets
          </h3>
          <ul>
            <li>Consolidate sort/filter params with canonical to base.</li>
            <li>
              Use <code>noindex, follow</code> on thin, duplicate facets you must
              keep crawlable.
            </li>
          </ul>

          <h3 id="hreflang" className="scroll-mt-28">
            Internationalization (hreflang)
          </h3>
          <ul>
            <li>
              Implement bidirectional hreflang with self-references; include
              <code> x-default</code>.
            </li>
            <li>Match language/region to actual page variants and URLs.</li>
          </ul>

          {/* RENDER */}
          <h2 id="render" className="scroll-mt-28">
            Rendering, JS SEO &amp; Indexing
          </h2>
          <p>
            Make sure bots receive meaningful HTML fast. Avoid “empty shell +
            JS” when crawl budget is tight.
          </p>

          <h3 id="ssr" className="scroll-mt-28">
            SSR/SSG/ISR for React/Next/Vite
          </h3>
          <ul>
            <li>
              Prefer SSR/SSG/ISR for key templates (home, category, product,
              posts). Hydrate progressively.
            </li>
            <li>
              Ship semantic HTML: headings, lists, nav/aside/main, and unique
              titles/meta on every route.
            </li>
          </ul>

          <h3 id="blocked" className="scroll-mt-28">
            Blocked Assets, 404s &amp; Soft-404s
          </h3>
          <ul>
            <li>Unblock CSS/JS needed to render primary content.</li>
            <li>Return true 404 for gone pages; avoid blanket 200s.</li>
          </ul>

          {/* CWV */}
          <h2 id="cwv" className="scroll-mt-28">
            Core Web Vitals &amp; Performance
          </h2>
          <p>Real-user (field) data wins. Optimize for LCP, INP, and CLS.</p>

          <h3 id="images" className="scroll-mt-28">
            Images, Fonts &amp; Third-Parties
          </h3>
          <ul>
            <li>Serve responsive images; lazy-load below the fold.</li>
            <li>
              Preload hero image, critical fonts; use <code>font-display: swap</code>.
            </li>
            <li>Defer or remove non-essential tags and widgets.</li>
          </ul>

          <h3 id="cls" className="scroll-mt-28">
            CLS, LCP, INP Quick Wins
          </h3>
          <ul>
            <li>Reserve dimensions for media/ads/embeds.</li>
            <li>Avoid DOM shifts on hydration; keep header heights fixed.</li>
            <li>Minimize long tasks; split bundles and use code-splitting.</li>
          </ul>

          {/* SCHEMA */}
          <h2 id="schema" className="scroll-mt-28">
            Structured Data &amp; Rich Results
          </h2>

          <h3 id="article" className="scroll-mt-28">
            Article/BlogPosting
          </h3>
          <ul>
            <li>
              Add <code>BlogPosting</code> with headline, datePublished,
              dateModified, author, image, and publisher logo.
            </li>
            <li>Match visible content; keep dates consistent.</li>
          </ul>

          <h3 id="breadcrumbs" className="scroll-mt-28">
            Breadcrumbs &amp; FAQ
          </h3>
          <ul>
            <li>JSON-LD breadcrumbs aligned with on-page trail.</li>
            <li>Use FAQ schema only for visible, user-helpful Q&amp;A.</li>
          </ul>

          {/* PAGINATION */}
          <h2 id="pagination" className="scroll-mt-28">
            Pagination, Canonicals &amp; Noindex Rules
          </h2>
          <ul>
            <li>
              Canonical paginated pages to themselves; link to page 1 clearly.
            </li>
            <li>
              Consider <code>noindex, follow</code> for deep pages with no demand.
            </li>
          </ul>

          {/* MIGRATIONS */}
          <h2 id="migrations" className="scroll-mt-28">
            Site Migrations Without Losing SEO
          </h2>
          <ul>
            <li>Audit URLs; build a 1:1 301 map; test in staging.</li>
            <li>Update sitemaps, canonicals, hreflang, and internal links.</li>
            <li>
              Use Search Console change-of-address; monitor logs & coverage for
              6–8 weeks.
            </li>
          </ul>

          {/* MONITORING */}
          <h2 id="monitoring" className="scroll-mt-28">
            Monitoring, Alerting &amp; SEO QA
          </h2>
          <ul>
            <li>Weekly: coverage, CWV, crawl stats, orphan pages.</li>
            <li>
              Guardrails: robots, meta robots, canonical drift, 4xx/5xx spikes.
            </li>
          </ul>

          {/* FAQ */}
          <h2 id="faqs" className="scroll-mt-28">
            FAQ: Top 6 Technical SEO Questions
          </h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Most impactful wins?</strong> SSR/SSG/ISR, CWV, clean
              canonicals, robots/sitemaps hygiene, schema, and monitoring.
            </li>
            <li>
              <strong>Block parameter URLs?</strong> Prefer{" "}
              <code>noindex, follow</code>; Disallow only useless crawls.
            </li>
            <li>
              <strong>Paginated blogs?</strong> Self-canonical, link to page 1,
              and consider noindex for very deep pages.
            </li>
            <li>
              <strong>JS heavy pages?</strong> Ensure meaningful HTML is served
              to bots; hydrate progressively.
            </li>
            <li>
              <strong>Which schema first?</strong> BlogPosting, BreadcrumbList,
              Product/Offer where relevant; keep it truthful.
            </li>
            <li>
              <strong>How to watch regressions?</strong> Automate checks for
              robots/canonicals, lighthouse budgets, and 404/500 alerts.
            </li>
          </ol>

          {/* CONCLUSION */}
          <h2 id="conclusion" className="scroll-mt-28">
            Conclusion &amp; Next Steps
          </h2>
          <p>
            Technical SEO is a system: fast HTML, clean signals, and continuous
            QA. Nail crawl/indexation, CWV, canonicals, and schema; then keep
            shipping content with confidence. That’s how you build durable,
            compounding organic growth.
          </p>
          <p>
            Want us to audit and prioritize your fixes?{" "}
            <a
              href="https://www.godigitalpro.in/onboarding"
              className="text-amber-600 underline"
            >
              Book a free strategy call
            </a>
            .
          </p>
        </article>
      </section>
    </main>
  );
}
