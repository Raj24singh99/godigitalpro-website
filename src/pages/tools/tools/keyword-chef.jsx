import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Keyword Chef";
const slug = "keyword-chef";
const category = "SEO & Keyword Research";
const shortPitch = "Keyword Chef is a keyword research tool focused on finding low-competition long-tail keywords with SERP previews and intent filters.";
const pricingSummary =
  "Credit-based pricing. Pay for batches of keyword credits; no ongoing subscription required. Costs scale with the number of keywords pulled.";
const officialUrl = "https://keywordchef.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/keywordchef.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "LowFruits", slug: "lowfruits" },
  { name: "Keyword Insights", slug: "keyword-insights" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SEMrush", slug: "semrush" },
  { name: "Mangools (KWFinder)", slug: "mangools" },
];

const faqs = [
  {
    q: "What is Keyword Chef?",
    a: "Keyword Chef is a keyword research tool that surfaces long-tail opportunities with SERP previews and intent filters.",
  },
  {
    q: "Who is Keyword Chef best for?",
    a: "Niche site builders, bloggers, and SEO teams looking for low-competition long-tail keywords.",
  },
  {
    q: "Does it show SERP results?",
    a: "Yes. SERP previews help assess difficulty and intent before targeting a keyword.",
  },
  {
    q: "How does pricing work?",
    a: "Credit-based. Buy credits for keyword pulls; there’s no subscription requirement.",
  },
  {
    q: "Can it filter for informational intent?",
    a: "Yes. Filters help focus on informational or other intent types depending on your content goals.",
  },
  {
    q: "Are search volumes included?",
    a: "Search volumes are provided; use SERP checks and your own validation before committing to content.",
  },
  {
    q: "Does it integrate with SEO tools?",
    a: "Exports can be used in spreadsheets or paired with content planning and SERP scoring tools.",
  },
  {
    q: "Do I still need SEO scoring?",
    a: "Yes. Use on-page tools and competition analysis to validate difficulty and optimize content.",
  },
];

function KeywordChefToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "Keyword Chef specializes in finding long-tail, low-competition keywords with SERP previews to help content teams prioritize topics.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Long-tail discovery",
      body: "Find low-competition long-tail keywords with SERP previews for quick evaluation.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Intent filters",
      body: "Filter for informational and other intent types to match content goals.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "SERP snapshots",
      body: "View SERP examples to gauge competitiveness before writing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Quality signals",
      body: "Signals like forums and weak sites help flag easier opportunities.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Credit-based",
      body: "Pay for credits as needed; no ongoing subscription required.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports",
      body: "Export lists for planning, prioritization, and collaboration in other SEO tools.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Keyword Chef review: pricing, features, pros & cons, and alternatives so you can choose the right long-tail keyword research tool."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  {toolName} surfaces low-competition, intent-aligned keywords so you can prioritize topics with better odds of ranking.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a keyword research tool for uncovering long-tail opportunities. It highlights SERP results and intent signals so you can judge difficulty quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to find informational queries, questions, and underserved topics that fit niche sites, blogs, or content programs.
            </p>
            <p className="mt-3 text-slate-700">
              Exports and credit-based pricing make it flexible for teams who want to pull batches without monthly subscriptions.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEOs and content teams seeking low-competition keywords and willing to validate SERP intent manually.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Niche site builders hunting underserved topics.",
                "Content teams prioritizing informational queries.",
                "Marketers needing credit-based, flexible keyword pulls.",
                "SEO workflows that validate SERPs before writing.",
                "Agencies building briefs for long-tail content.",
                "Teams pairing keyword discovery with on-page optimization tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} focuses on long-tail keyword discovery, SERP previews, and intent filters with credit-based pricing.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} uses credit-based pricing with pay-as-you-go batches. No subscription is required; costs depend on how many keywords you pull.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a small credit pack to test SERP quality and intent filters; buy larger packs if the data meets your standards.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Pack</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter credits</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Small batch of keyword pulls</td>
                    <td className="px-4 py-3">Good for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard credits</td>
                    <td className="px-4 py-3">Content teams</td>
                    <td className="px-4 py-3">Larger pulls with intent filters</td>
                    <td className="px-4 py-3">Align with monthly publishing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">High-volume credits</td>
                    <td className="px-4 py-3">Agencies/scale</td>
                    <td className="px-4 py-3">Bulk pulls and exports</td>
                    <td className="px-4 py-3">Plan storage and QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Validate SERP difficulty manually and pair with on-page optimization tools. Keep a QA step before committing content resources.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credit-based pricing with no subscription required.</li>
                  <li>Focus on low-competition long-tail keywords.</li>
                  <li>SERP previews to judge difficulty quickly.</li>
                  <li>Intent filters for informational queries.</li>
                  <li>Useful exports for planning and briefs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Manual SERP validation still required.</li>
                  <li>Not a full suite like Ahrefs/SEMrush.</li>
                  <li>Search volume estimates need cross-checking.</li>
                  <li>Intent classification can require human review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other keyword tools to match your research depth, pricing preference, and SERP validation workflow.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how {toolName} compares with other keyword research platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LowFruits</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/lowfruits">
                  View LowFruits
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Both target low-competition keywords. LowFruits leans on domain strength signals; {toolName} emphasizes SERP previews and credit-based pricing. Choose based on data preference and workflow.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/ahrefs">
                  View Ahrefs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs is a full SEO suite with link data and site audits. {toolName} specializes in long-tail discovery with credits. Use {toolName} for quick research and Ahrefs for deeper analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want flexible, credit-based long-tail research and are prepared to validate SERPs manually before writing.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with on-page optimization and link analysis tools to confirm difficulty and prioritize topics with the best odds of ranking.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A handy, lightweight keyword discovery tool for niche and content teams—best when combined with manual SERP review.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>
              Choose {toolName} if you need credit-based long-tail discovery with quick SERP previews and plan to validate difficulty manually.
            </p>
            <p>
              Consider LowFruits for alternative signals or Ahrefs for a full SEO suite; keep {toolName} for affordable, focused research bursts.
            </p>
            <p>{toolName} saves time finding approachable topics—just maintain your own QA and optimization workflow.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default KeywordChefToolPage;
