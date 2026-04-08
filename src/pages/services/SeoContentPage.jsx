// src/pages/services/SeoContentPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  Search,
  FileText,
  Link2,
  ServerCog,
  BarChart3,
  Network,
  Globe2,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating topics in hero (only the colored part changes) */
const WORDS = [
  { text: "Program Pages", color: "text-indigo-600" },
  { text: "High-Intent Course Keywords", color: "text-emerald-600" },
  { text: "Student Question Content", color: "text-rose-600" },
  { text: "Authority Building", color: "text-amber-600" },
  { text: "AI Search Visibility", color: "text-fuchsia-600" },
  { text: "Schema & Technical SEO", color: "text-sky-600" },
];

const SEO_FAQ = [
  { question: "How long does SEO take for EdTech?", answer: "Technical fixes and on-page updates can help early, but compounding gains usually come from sustained publishing, stronger proof, and authority over several months." },
  { question: "Do you write the content?", answer: "Yes. We create briefs and write program pages, blogs, comparison pages, FAQs, and answer-first content mapped to search intent." },
  { question: "Will you fix technical issues?", answer: "Yes. We audit and implement fixes for indexation, crawlability, performance, schema, canonicals, and route-level metadata." },
  { question: "Can SEO support new campuses or course launches?", answer: "Yes. We can build launch pages, location intent content, and supporting authority assets around new programs or geographies." },
  { question: "How do you report progress?", answer: "Shared dashboards across rankings, indexed pages, traffic, qualified leads, assisted conversions, and the actions planned next." },
];

export default function SeoContentPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro delivers SEO and content systems for EdTech brands: technical fixes, program and category pages, topic clusters, authority building, and AI-search-ready content tied to qualified demand and applications.",
    []
  );

  // ---- SEO constants ----
  const path = "/services/seo-content";
  const pageUrl = buildCanonical(path);

  const title = "SEO & Content for EdTech | Technical SEO, Authority & AI Search";
  const desc =
    "SEO and content systems for EdTech: technical fixes, program and category pages, authority-building content, digital PR, and AI-search optimization tied to demand and applications.";
  const keywords =
    "edtech seo agency, education seo, program page seo, ai search optimization, technical seo for education websites, education content marketing, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "SEO & Content for EdTech",
            description: desc,
            url: pageUrl,
          }),
          faqJsonLd(SEO_FAQ),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "SEO & Content", url: pageUrl },
        ]}
      />

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
            SEO and content for EdTech that compounds discoverability, trust, and demand.
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
                title: "Search architecture",
                desc: "Clear information architecture, indexable routes, and stronger internal linking around programs and buying journeys.",
                icon: Network,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Topic clusters",
                desc: "Research-led clusters built around course queries, student questions, comparisons, and intent depth.",
                icon: BookOpen,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Content writing",
                desc: "Program pages, blogs, FAQs, and proof-led content written to answer real buying questions.",
                icon: FileText,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Authority building",
                desc: "Digital PR, citations, expert-led assets, and trust signals that strengthen category authority.",
                icon: Link2,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Technical fixes",
                desc: "CWV, crawlability, indexation, redirects, canonicals, schema, and metadata that search engines can understand.",
                icon: ServerCog,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Measurement",
                desc: "GA4 and Search Console workflows tied to qualified visits, lead signals, and the next execution priorities.",
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
          <h2 className="text-2xl md:text-3xl font-semibold">The three layers of EdTech SEO</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* On-Page */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-emerald-500/90 p-2 text-white">
                  <Search className="size-5" />
                </span>
                <h3 className="font-semibold">Intent & content</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Program, city, and comparison pages that match how students search.",
                  "Answer-first sections with proof, outcomes, and clear next steps.",
                  "Internal links that connect category learning to conversion pages.",
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
                <h3 className="font-semibold">Authority & proof</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Editorial mentions, partnerships, and citations that reinforce brand credibility.",
                  "Topical backlinks and unlinked mentions around program categories.",
                  "E-E-A-T signals, author context, and proof-rich source content.",
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
                <h3 className="font-semibold">Technical & AI visibility</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Core Web Vitals, mobile UX, and image optimization.",
                  "Sitemaps, robots, canonicals, redirects, and clean route rendering.",
                  "Schema and entity clarity for classic search and AI-driven answer surfaces.",
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
            <h2 className="text-2xl md:text-3xl font-semibold">AI search visibility</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1 bg-slate-100 text-slate-700 border border-black/10">
              AI Overviews · Bing · Answer engines
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
                  "Answer-first sections built around real student and parent questions.",
                  "Entity-rich content and schema that clarify your category, programs, and proof.",
                  "FAQ and explainer structures that are easy for search systems to extract.",
                  "Freshness cycles that keep high-intent pages current and defensible.",
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
                  "Category, comparison, and eligibility queries where users want fast clarity.",
                  "Research-heavy journeys where proof, fees, outcomes, and process matter.",
                  "Complex course-selection and admissions queries with many sub-questions.",
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
              Want stronger organic demand from the right EdTech searches?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit technical health, search intent coverage, content depth, and authority, then map the fastest path to better visibility.
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
            {SEO_FAQ.map(({ question, answer }) => (
              <details key={question} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{question}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

/* =========================
   Process Stepper Component
   ========================= */
function ProcessStepper() {
  const steps = [
    { label: "Research", desc: "Category intent, competitors, and baseline visibility." },
    { label: "Audit", desc: "Technical health, content gaps, and authority signals." },
    { label: "Map", desc: "Clusters, briefs, and high-intent page priorities." },
    { label: "Build", desc: "Implement fixes and publish core pages and hubs." },
    { label: "Strengthen", desc: "Mentions, links, updates, and proof assets." },
    { label: "Measure", desc: "Traffic, qualified demand, and next actions." },
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
