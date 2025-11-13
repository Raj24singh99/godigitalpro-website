// src/pages/blog/Blogs.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { allPosts } from "../../utils/blog";
import { blogOrgJsonLd, buildCanonical } from "../../utils/seo";
import { BLOG_TAXONOMY } from "../../data/blogTaxonomy";
import { getLucideIcon } from "../../utils/icons";
import { gradientByIndex } from "../../utils/gradients";
import performanceCover from "../../assets/blogcovers/performance-80-20.svg";
import analyticsCover from "../../assets/blogcovers/analytics-ga4-capi.svg";
import croCover from "../../assets/blogcovers/cro-landing-page.svg";
import agencyCover from "../../assets/blogcovers/agency-ops-sla.svg";
import caseStudyCover from "../../assets/blogcovers/case-study-template.svg";
import socialCover from "../../assets/blogcovers/social-reels-blueprint.svg";
import seoCover from "../../assets/blogcovers/seo-technical-foundations.svg";
import webDevCover from "../../assets/blogcovers/webdev-nextjs-cwv.svg";

const HERO_BADGES = [
  {
    icon: "Sparkles",
    title: "Playbooks refreshed weekly",
    body: "Captures shifts in privacy, AI, media efficiency so your roadmap stays sharp.",
  },
  {
    icon: "Layers",
    title: "Strategy → execution ready",
    body: "Articles link briefs, templates, calculators, and governance checklists.",
  },
  {
    icon: "Globe",
    title: "Grounded in India growth",
    body: "Benchmarks, compliance notes, and regional nuance for SaaS, D2C, marketplaces, and more.",
  },
];

const LATEST_POST_LIMIT = 12;

const BLOG_COVER_MAP = {
  "performance-marketing-account-structure": {
    src: performanceCover,
    alt: "Magenta 80/20 performance marketing focus chart illustration",
  },
  "ga4-setup-sgtm-capi": {
    src: analyticsCover,
    alt: "Midnight telemetry board showing GA4, server GTM, and Conversions API flow",
  },
  "cro-for-d2c-conversion-rate-optimization": {
    src: croCover,
    alt: "Landing page mock with CTA buttons and CRO heatmap overlays",
  },
  "agency-operating-system-slas": {
    src: agencyCover,
    alt: "Agency SLA dashboard with pods, capacity gauges, and trends",
  },
  "marketing-case-study-template-brief-impact": {
    src: caseStudyCover,
    alt: "Case study storyboard with sticky notes for brief, barrier, and impact",
  },
  "social-media-blueprint-reels-strategy": {
    src: socialCover,
    alt: "Vertical reels storyboard with hook, story, CTA tiles",
  },
  "technical-seo-foundations": {
    src: seoCover,
    alt: "Green technical SEO rings labeled crawl, render, index, serve",
  },
  "nextjs-cwv-security-hardening": {
    src: webDevCover,
    alt: "Next.js Core Web Vitals dashboard with uptime gauges",
  },
};

const FALLBACK_COVERS = [
  {
    src: performanceCover,
    alt: "Gradient growth dashboard with stacked uplift bars",
  },
  {
    src: analyticsCover,
    alt: "Signal resilience diagram for analytics pipelines",
  },
  {
    src: seoCover,
    alt: "Technical SEO systems illustration with concentric rings",
  },
];

function slugToTitle(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
}

function getCover(post, idx) {
  const fallback = BLOG_COVER_MAP[post.slug] || FALLBACK_COVERS[idx % FALLBACK_COVERS.length];
  return {
    src: post.cover || fallback.src,
    alt: post.coverAlt || fallback.alt || post.title,
  };
}

export default function Blogs() {
  const canonical = buildCanonical("/blog");
  const latestPosts = useMemo(() => allPosts.slice(0, LATEST_POST_LIMIT), [allPosts]);

  const itemListJsonLd = useMemo(() => {
    return latestPosts.map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.godigitalpro.in/blog/${post.category}/${post.slug}`,
      name: post.title,
    }));
  }, [latestPosts]);

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title="GoDigitalPro Blog — Digital Marketing Strategy, SEO, PPC, Social, Analytics"
        description="A Bengaluru-built digital marketing blog structured for EEAT + AI overviews: 13 strategic pillars, 70+ sub-categories, templates, and playbooks spanning SEO, PPC, CRO, analytics, content, email, e-commerce, brand, and agency ops."
        canonical={canonical}
        keywords="digital marketing blog, SEO blog, PPC blog, CRO, web analytics, India marketing strategy"
        schema={[blogOrgJsonLd(), { "@context": "https://schema.org", "@type": "ItemList", itemListElement: itemListJsonLd }]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-12 md:py-16">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-10 text-white shadow-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">GoDigitalPro Blog OS</p>
          <div className="mt-4 flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="flex-1">
              <h1 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Modern marketing intelligence for teams that need strategy and execution clarity fast.
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-white/80">
                Every story clicks into a pillar—strategy, SEO, paid media, social, content, lifecycle, CRO, analytics, commerce, emerging tech, industry playbooks, and agency ops—so you can go from reading to doing without opening twenty tabs.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/onboarding"
                  className="inline-flex items-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-100"
                >
                  Get a growth plan
                </Link>
              </div>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {HERO_BADGES.map((badge) => {
                const Icon = getLucideIcon(badge.icon);
                return (
                  <div
                    key={badge.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-white">{badge.title}</p>
                    <p className="mt-1 text-xs text-white/80">{badge.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-6xl px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Explore the taxonomy</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Categories at a glance</h2>
            <p className="text-sm text-slate-600">
              Tap any category tile to open the sub-categories → sub-category pages house the focused playbooks.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Structure: Blog hub → Category grid → Sub-category detail → Post.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_TAXONOMY.map((pillar, idx) => {
            const Icon = getLucideIcon(pillar.icon);
            const gradient = gradientByIndex(idx);
            return (
              <Link
                to={`/blog/${pillar.slug}`}
                key={pillar.slug}
                className={`group block rounded-[28px] bg-gradient-to-br ${gradient} p-[1px] transition hover:-translate-y-0.5 hover:shadow-xl`}
              >
                <div className="flex h-full flex-col rounded-[26px] bg-white/95 p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-sm`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900">{pillar.name}</h3>
                      <p className="mt-1 text-sm text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{pillar.subcategories.length} sub-categories</span>
                    <span className="font-semibold text-amber-600 group-hover:text-amber-700">View category →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest posts */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12 md:pb-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Research, templates & case studies</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Latest published plays</h2>
            <p className="text-sm text-slate-600">
              Hand-picked articles across SEO, CRO, analytics, content, social, and agency ops. Showing the latest {LATEST_POST_LIMIT} posts mapped to their sub-categories.
            </p>
          </div>
          <Link
            to="/onboarding"
            className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Audit my growth mix
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, idx) => {
            const cover = getCover(post, idx);
            return (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <Link to={`/blog/${post.category}/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[16/9] w-full bg-slate-100">
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                    />
                  </div>
                  <div className="flex h-full flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                      <span>{BLOG_TAXONOMY.find((pillar) => pillar.slug === post.category)?.name || slugToTitle(post.category)}</span>
                      {post.subCategoryLabel && (
                        <>
                          <span>•</span>
                          <span className="tracking-normal text-slate-700">{post.subCategoryLabel}</span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-slate-950">
                      {post.title}
                    </h3>
                    {post.excerpt && <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>}
                    <p className="mt-3 text-xs text-slate-400">
                      {new Date(post.updated || post.date).toLocaleDateString()} · {post.readingTime || "5 min read"}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Need a content calendar?</span>
          <span>
            Week 1: SEO pillar → Week 2-4: technical, link-building, local SEO clusters → Week 5: PPC pillar, and so on.
          </span>
        </div>
      </section>
    </main>
  );
}
