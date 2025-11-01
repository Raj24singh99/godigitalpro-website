import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  FileText,
  Link2,
  ServerCog,
  BarChart3,
  Network,   // used for "Site Structure" (Sitemap-like)
  Globe2,    // used in GEO section
  BookOpen,  // used for Topic Clusters
  Sparkles,  // used for GEO optimization
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating topics in hero (only the colored part changes) */
const WORDS = [
  { text: "Technical SEO", color: "text-indigo-600" },
  { text: "Keyword Research", color: "text-emerald-600" },
  { text: "Blog Writing", color: "text-rose-600" },
  { text: "Link Building", color: "text-amber-600" },
  { text: "Entity / Schema SEO", color: "text-fuchsia-600" },
  { text: "Local SEO", color: "text-sky-600" },
];

export default function SeoContentPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro delivers full-stack SEO: technical audits and fixes, on-page structure, topic clusters, content creation, authority building, and measurement with GA4 & Search Console. We also optimize for AI-driven results with entity/schema and answer-first content.",
    []
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ---------- HERO ---------- */}
      <Section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(240,252,228,.45), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            SEO & Content that compounds organic growth.
          </h1>

          {/* Animated line — only colored text changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We drive </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>
                {WORDS[idx].text}
              </span>
            </div>
          </div>

          <p className="sr-only">{seoIntro}</p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Get Free SEO Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Site Structure",
                desc: "Logical IA, indexable routes, and clean internal links.",
                icon: Network,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Topic Clusters",
                desc: "Research, briefs, and pillar-cluster mapping for depth.",
                icon: BookOpen,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Content Writing",
                desc: "Clear, helpful, answer-first blogs and pages.",
                icon: FileText,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Authority Building",
                desc: "Digital PR, mentions, and quality links that stick.",
                icon: Link2,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Technical Fixes",
                desc: "CWV, crawl budget, redirects, canonicals, schema.",
                icon: ServerCog,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Measurement",
                desc: "GA4 + GSC workflows for insights and next actions.",
                icon: BarChart3,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                style={{ minHeight: 210 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}>
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- THE THREE PILLARS ---------- */}
      <Section id="pillars" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">The three parts of SEO</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {/* On-Page */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-xl bg-emerald-500/90 p-2 text-white">
                <Search className="size-5" />
              </span>
              <h3 className="font-semibold">On-Page SEO</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Titles, meta, headers, and readable HTML.",
                "Answer-first sections and clear CTAs.",
                "Internal links that pass context and equity.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-emerald-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Off-Page */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-xl bg-amber-500/90 p-2 text-white">
                <Link2 className="size-5" />
              </span>
              <h3 className="font-semibold">Off-Page SEO</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Digital PR and editorial mentions.",
                "Topical backlinks and unlinked brand mentions.",
                "E-E-A-T signals and author profiles.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-amber-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Technical */}
          <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-xl bg-indigo-500/90 p-2 text-white">
                <ServerCog className="size-5" />
              </span>
              <h3 className="font-semibold">Technical SEO</h3>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "Core Web Vitals and image optimization.",
                "Sitemaps, robots, canonicals, and redirects.",
                "Schema (FAQ, HowTo, Product, Article, Local).",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-indigo-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        </Container>
      </Section>

      {/* ---------- GENERATIVE SEARCH OPTIMIZATION (AI) ---------- */}
      <Section id="ai-seo" className="bg-white">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Generative Search Optimization (GEO)</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1 bg-slate-100 text-slate-700 border border-black/10">
              AI Overviews · Bing · Other AI surfaces
            </span>
          </div>

          {/* 2-column explainer */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-fuchsia-500/90 p-2 text-white">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="font-semibold">How we optimize</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Answer-first summaries with citations and sources.",
                  "Entity-rich content and schema to clarify context.",
                  "FAQ/HowTo schemas for task-oriented queries.",
                  "Freshness cadence: keep high-intent pages updated.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-fuchsia-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-sky-500/90 p-2 text-white">
                  <Globe2 className="size-5" />
                </span>
                <h3 className="font-semibold">Where it helps</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Query spaces with AI summary boxes (navigational + informational).",
                  "Local and comparison queries needing quick clarity.",
                  "Complex ‘how-to’ and product choice content.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-sky-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      {/* ---------- PROCESS ---------- */}
      <ProcessStepper />

      {/* ---------- CTA ---------- */}
      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Want compounding organic traffic?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit technical health, content, and authority—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free SEO Audit
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </Container>
        <Container className="mt-6">
          <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {[
              { q: "How long does SEO take?", a: "Early gains often show in 4–8 weeks; durable growth compounds over months as content and links build." },
              { q: "Do you write content?", a: "Yes. We create briefs and write pages/blogs with clear structure, schema, and internal links." },
              { q: "Will you fix technical issues?", a: "Yes. We audit, prioritize, and implement fixes for speed, crawling, indexing, and structured data." },
              { q: "Do you support Local SEO?", a: "Yes. GMB optimization, NAP consistency, local pages, and review strategy." },
              { q: "How do you report progress?", a: "Shared dashboards with keywords, pages, impressions, clicks, traffic, and next steps." },
            ].map((f) => (
              <details key={f.q} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* JSON-LD for SEO crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO & Content",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Search Engine Optimization",
            areaServed: "Global",
            description:
              "Technical, on-page, and off-page SEO with content strategy, topic clusters, schema, link earning, and measurement. Includes generative search optimization practices.",
            offers: { "@type": "Offer", category: "Service" },
          }),
        }}
      />
    </main>
  );
}

/* =========================
   Process Stepper Component
   ========================= */
function ProcessStepper() {
  const steps = [
    { label: "Discover", desc: "Goals, competitors, and current baseline." },
    { label: "Audit", desc: "Technical health, content depth, and authority." },
    { label: "Plan", desc: "Topic clusters, briefs, and fix roadmap." },
    { label: "Build", desc: "Implement fixes; publish pages and hubs." },
    { label: "Promote", desc: "Digital PR, mentions, and link earning." },
    { label: "Measure", desc: "GSC/GA4 tracking, insights, and iteration." },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % steps.length), 1500);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <Section id="process">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">Our process</h2>

        {/* MOBILE: vertical circular timeline */}
        <div className="relative mt-8 md:hidden">
          <div aria-hidden className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.label} className="relative pl-16">
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                >
                  <span className="text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="mt-1 text-xs text-slate-700">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* DESKTOP: horizontal circular stepper */}
        <div className="relative mt-10 hidden md:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#6366f1,#10b981,#38bdf8,#6366f1)",
              backgroundSize: "200% 100%",
              animation: "lineFlow 6s linear infinite",
            }}
          />
          <ol className="relative z-10 grid grid-cols-6">
            {steps.map((s, i) => (
              <li key={s.label} className="flex flex-col items-center gap-3 px-2 text-center">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                  aria-current={i === active ? "step" : undefined}
                >
                  <span className="text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-2">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-slate-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
