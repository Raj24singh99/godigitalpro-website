/* @refresh reload */
// src/content/posts/casestudies/case-study-template-from-brief-to-impact.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ========= META ========= */
export const meta = {
  title: "Case Study Template: From Brief → Bottleneck → Intervention → Impact",
  seoTitle: "Case Study Template: Structure, Metrics, and Proof That Win Deals",
  metaDescription:
    "A battle-tested case study template with sections for baseline, bottleneck, intervention, and quantified impact—plus how to collect proof, charts, and quotes.",
  slug: "case-study-template-from-brief-to-impact",
  date: "2025-11-08",
  updated: "2025-11-08",
  category: "casestudies",
  tags: ["case study", "proof", "b2b marketing", "before-after", "roi"],
  cover: "/blogimages/case-study-template.png",
  readingTime: "9 min read",
  author: { name: "Raj Singh", url: "https://www.linkedin.com/in/raj24singh99/" },
  draft: false,
};

/* ========= TOC ========= */
const TOC = [
  { id: "intro", label: "Introduction: Case Studies That Sell" },
  { id: "structure", label: "Structure & Flow" },
  { id: "baseline", label: "Baseline & Bottleneck" },
  { id: "intervention", label: "Intervention (What We Did)" },
  { id: "evidence", label: "Evidence: Metrics, Charts, Quotes" },
  { id: "visuals", label: "Visuals: Before/After" },
  { id: "cta", label: "CTA & Repurposing" },
  { id: "faqs", label: "FAQ: Proof & Permissions" },
  { id: "conclusion", label: "Conclusion & Next Steps" },
];

/* ========= Hooks ========= */
function useActiveH2() {
  const ids = useMemo(() => TOC.map((s) => s.id), []);
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
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
        name: "What if the client won’t allow revenue numbers?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Use relative lifts (e.g., +42% revenue) or surrogate metrics approved by legal (SQLs, AOV, conversion rate).",
        },
      },
      {
        "@type": "Question",
        name: "How long should a case study be?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "1–2 pages web version, 3–5 slides sales deck version. Add a deep appendix only if requested.",
        },
      },
      {
        "@type": "Question",
        name: "What proof is most persuasive?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Before/after dashboards, signed quotes with job titles, and clear baselines with time windows.",
        },
      },
    ],
  };

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{meta.seoTitle}</title>
        <meta name="description" content={meta.metaDescription} />
        <link rel="canonical" href={`https://www.godigitalpro.in/blog/${meta.category}/${meta.slug}`} />
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
          GoDigitalPro Blog / Case Studies
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{meta.title}</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">{meta.metaDescription}</p>
        <div className="mt-3 text-xs text-slate-500">
          {meta.date} · {meta.readingTime} · By{" "}
          <a href={meta.author.url} target="_blank" rel="noopener noreferrer" className="underline">
            {meta.author.name}
          </a>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-6 md:px-10 py-12">
        {/* TOC */}
        <aside className="hidden md:block md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <p className="text-sm font-semibold mb-3 text-slate-700">On this page</p>
            <ul className="space-y-2 text-[14px]">
              {TOC.map((h2) => {
                const isActive = activeH2 === h2.id;
                return (
                  <li key={h2.id}>
                    <a
                      href={`#${h2.id}`}
                      className={`block transition-colors ${isActive ? "text-amber-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}
                    >
                      {h2.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <article className="blog-article md:w-3/4 lg:w-4/5">
          <img src={meta.cover} alt={meta.title} className="rounded-xl w-full mb-8 shadow-sm" loading="lazy" />

          <h2 id="intro" className="scroll-mt-28">Introduction: Case Studies That Sell</h2>
          <p>Buyers want evidence, not adjectives. Use this template to prove causality and business impact—fast.</p>

          <h2 id="structure" className="scroll-mt-28">Structure &amp; Flow</h2>
          <ul>
            <li><strong>Brief:</strong> who, market, targets.</li>
            <li><strong>Baseline:</strong> last 60–90 days metrics, constraints.</li>
            <li><strong>Bottleneck:</strong> the specific choke point.</li>
            <li><strong>Intervention:</strong> what we changed and why.</li>
            <li><strong>Impact:</strong> quantified lift with time window.</li>
            <li><strong>Proof:</strong> charts, quotes, links.</li>
          </ul>

          <h2 id="baseline" className="scroll-mt-28">Baseline &amp; Bottleneck</h2>
          <p>Capture the starting line with screenshots and exportable metrics; isolate the true constraint (tracking gaps, creative fatigue, landing speed, etc.).</p>

          <h2 id="intervention" className="scroll-mt-28">Intervention (What We Did)</h2>
          <ul>
            <li>Actions grouped by theme (Tracking, Media, Creative, CRO).</li>
            <li>Why this solved the bottleneck (hypothesis & mechanism).</li>
            <li>Timeline with owner initials.</li>
          </ul>

          <h2 id="evidence" className="scroll-mt-28">Evidence: Metrics, Charts, Quotes</h2>
          <ul>
            <li>Before/after charts with identical windows.</li>
            <li>Signed client quote with name, title, company.</li>
            <li>Link to live Looker/GA4 view (anonymized if needed).</li>
          </ul>

          <h2 id="visuals" className="scroll-mt-28">Visuals: Before/After</h2>
          <p>Side-by-side creatives and landing page speed results; annotate the key differences.</p>

          <h2 id="cta" className="scroll-mt-28">CTA &amp; Repurposing</h2>
          <ul>
            <li>End with “Want similar results?” CTA to discovery call.</li>
            <li>Repurpose into 1-pager PDF, LinkedIn carousel, 60-sec reel.</li>
          </ul>

          <h2 id="faqs" className="scroll-mt-28">FAQ: Proof &amp; Permissions</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong>Permissions?</strong> Use a short release; offer anonymization if required.</li>
            <li><strong>No quotes?</strong> Use email confirmations as paraphrased quotes + “with permission”.</li>
            <li><strong>Attribution?</strong> Include time windows and control for seasonality where possible.</li>
          </ol>

          <h2 id="conclusion" className="scroll-mt-28">Conclusion &amp; Next Steps</h2>
          <p>Follow this structure and your case studies will win trust quickly—because they read like proofs, not promos.</p>
          <p>
            Want us to turn your results into sales-ready case studies?{" "}
            <a href="https://www.godigitalpro.in/onboarding" className="text-amber-600 underline">Book a free strategy call</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
