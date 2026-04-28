import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MarketMuse";
const slug = "marketmuse";
const category = "Content Intelligence & SEO";
const shortPitch = "MarketMuse uses AI to analyze topics, gaps, and SERP coverage so teams can plan and optimize content with briefs and scoring.";
const pricingSummary = "Plans scale by users, queries, and briefs. Higher tiers add more credits, team seats, and advanced content planning features.";
const officialUrl = "https://www.marketmuse.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/marketmuse.com",
  gradient: "from-indigo-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Clearscope", slug: "clearscope" },
  { name: "Frase", slug: "frase-io" },
  { name: "NeuronWriter", slug: "neuronwriter" },
  { name: "GrowthBar", slug: "growthbar" },
];

const faqs = [
  { q: "What does MarketMuse do?", a: "MarketMuse analyzes topics and SERPs to generate briefs, identify gaps, and score content for coverage depth." },
  { q: "Who should use it?", a: "Content strategists, writers, and SEO teams who want structured briefs and prioritization for articles." },
  { q: "Does it replace writers?", a: "No. It guides coverage but still needs human writers and editors for expertise and accuracy." },
  { q: "How does pricing work?", a: "Pricing is credit-based for queries and briefs, with limits tied to plan tiers and seats." },
  { q: "Can it integrate with docs?", a: "You can export briefs and collaborate with writers in your chosen doc tools." },
  { q: "Does it handle keyword research?", a: "It focuses on topic modeling and coverage; use keyword tools alongside for volume and intent validation." },
  { q: "Is fact-checking automated?", a: "No. Human fact-checking and SME review remain required before publishing." },
  { q: "Does it include content scoring?", a: "Yes. Drafts can be scored against target coverage to guide edits." },
];

function MarketMuseToolPage() {
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
        "MarketMuse provides AI-driven topic modeling, gap analysis, and content briefs. It is best for teams planning content roadmaps and improving depth on existing pages.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Topic modeling", body: "Analyze SERPs to surface related subtopics and coverage gaps for each query." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Content briefs", body: "Generate outlines with suggested headings, questions, and subtopics to cover." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Content scoring", body: "Score drafts based on coverage depth and compare against competitors." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Inventory and prioritization", body: "Audit existing content, identify gaps, and prioritize updates that can move the needle." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Workflow integrations", body: "Export briefs to docs and collaborate with writers and editors across tools." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Competitive analysis", body: "See competitor coverage to decide what to include, improve, or differentiate." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="MarketMuse review: pricing, features, pros & cons, and alternatives so you can see if its content intelligence fits your workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} highlights content gaps, builds briefs, and scores drafts so teams can prioritize topics with the best upside and coverage depth.
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
              {toolName} is a content intelligence platform that analyzes topics, competition, and SERPs to generate briefs and optimization suggestions. It helps writers and strategists identify gaps, prioritize pages, and improve topical authority.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to speed up research and briefing, then add subject-matter expertise and fact-checking to ensure quality before publishing.
            </p>
            <p className="mt-3 text-slate-700">Pair it with analytics to validate impact and with on-page tools for final tuning.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for SEO and content teams planning roadmaps and optimizing existing articles.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content strategists prioritizing topics and clusters.",
                "Writers needing briefs with suggested headings and coverage.",
                "SEO teams improving existing pages for topical depth.",
                "Agencies building content plans for clients.",
                "Editors who want scoring to guide revisions.",
                "Teams pairing AI briefs with human subject-matter expertise.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
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
              {toolName} focuses on topic modeling, briefs, and scoring to guide content depth and prioritization.
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
                  {toolName} uses credit-based plans. Higher tiers add more queries, briefs, and seats. Pick a plan that matches your brief volume and team size, and monitor credit usage on large sites.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a mid-tier for enough queries; upgrade when multiple teams need seats or you run out of brief credits.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Small teams and testing</td>
                    <td className="px-4 py-3">Limited queries and briefs, core scoring</td>
                    <td className="px-4 py-3">Good for initial roadmap validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing content teams</td>
                    <td className="px-4 py-3">More queries, briefs, and collaboration features</td>
                    <td className="px-4 py-3">Covers most ongoing programs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium/Enterprise</td>
                    <td className="px-4 py-3">Agencies or large publishers</td>
                    <td className="px-4 py-3">Highest limits, account support, advanced workflows</td>
                    <td className="px-4 py-3">Best when multiple brands are involved</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track credit usage on large sites and pair MarketMuse with analytics to see if topics and updates move KPIs. Budget for editorial and SME time to ensure quality.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong topic modeling and gap analysis.</li>
                  <li>Briefs speed up writer onboarding and alignment.</li>
                  <li>Content scoring guides revisions and coverage depth.</li>
                  <li>Helps prioritize pages with the best upside.</li>
                  <li>Useful for cluster planning and topical authority.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Credits can be consumed quickly on large sites.</li>
                  <li>Does not replace manual research or expert review.</li>
                  <li>Interface can feel heavy for casual users.</li>
                  <li>Data should be paired with analytics and on-page testing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other content optimization tools to match planning depth, editor UX, and pricing.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with similar content platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfer</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/surfer-seo">
                  View Surfer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfer emphasizes on-page scoring and content editor experiences; {toolName} leans into topic modeling and inventory prioritization. Choose {toolName} for planning depth, Surfer for lighter content editors and scoring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Clearscope</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/clearscope">
                  View Clearscope
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Clearscope is known for clean content editors and keyword suggestions; {toolName} offers broader inventory and planning features. Pick {toolName} if you need planning plus briefs, Clearscope for streamlined editing and keyword guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you plan roadmaps and need AI-assisted briefs and scoring to speed up production and prioritize opportunities.
            </p>
            <p className="mt-3 text-slate-700">
              Combine it with analytics, human expertise, and on-page testing to ensure accuracy and impact. Monitor credit usage on large sites.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Powerful for planning and optimizing content depth; still needs human expertise and fact-checking.
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
            <p>Use {toolName} to prioritize topics, generate briefs, and score drafts for coverage depth and competitiveness.</p>
            <p>
              Upgrade as your team needs more briefs, seats, or reporting; keep human expertise and analytics in the loop for the best outcomes.
            </p>
            <p>{toolName} accelerates research and planning—human editing and fact-checking ensure quality and accuracy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MarketMuseToolPage;
