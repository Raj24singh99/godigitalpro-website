import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Keyword Insights";
const slug = "keywordinsights-ai";
const category = "SEO & Keyword Research";
const shortPitch = "Keyword Insights clusters keywords by intent, builds briefs, and helps teams plan content around SERP topics and search intent.";
const pricingSummary =
  "Credit-based pricing with monthly plans. Higher tiers add more credits, user seats, and exports; costs scale with research volume.";
const officialUrl = "https://keywordinsights.ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/keywordinsights.ai",
  gradient: "from-sky-500 via-indigo-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "LowFruits", slug: "lowfruits" },
  { name: "Keyword Chef", slug: "keyword-chef" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SEMrush", slug: "semrush" },
  { name: "Surfer SEO", slug: "surfer-seo" },
];

const faqs = [
  {
    q: "What is Keyword Insights?",
    a: "Keyword Insights is a research and clustering tool that groups keywords by intent and SERP similarity, helping teams plan content efficiently.",
  },
  {
    q: "Who is Keyword Insights best for?",
    a: "SEO and content teams that want to cluster keywords, avoid cannibalization, and generate briefs faster.",
  },
  {
    q: "Does it do keyword clustering?",
    a: "Yes. It clusters keywords based on SERP overlap and intent, suggesting how many pieces of content to create.",
  },
  {
    q: "How does pricing work?",
    a: "Credit-based monthly plans. Higher tiers add more credits, users, and exports; usage drives cost.",
  },
  {
    q: "Can it build content briefs?",
    a: "Yes. Brief features provide outlines, intent notes, and questions to cover.",
  },
  {
    q: "Does it integrate with other SEO tools?",
    a: "Exports can be used in CMS, project management, and on-page tools like Surfer or Clearscope.",
  },
  {
    q: "Are search volumes included?",
    a: "Search volumes are provided; always validate with your analytics and additional tools.",
  },
  {
    q: "Do I still need manual review?",
    a: "Yes. Review clusters, intent, and SERPs before finalizing briefs and publishing.",
  },
];

function KeywordInsightsToolPage() {
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
        "Keyword Insights clusters keywords by intent and SERP similarity, helping teams avoid cannibalization and build stronger content briefs.",
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
      title: "Keyword clustering",
      body: "Group keywords by SERP overlap to decide if they belong in one page or multiple.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-sky-500" />,
      title: "Intent detection",
      body: "Identify search intent to guide content type and angle.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Content briefs",
      body: "Generate briefs with outlines, headings, and questions to cover.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Cannibalization checks",
      body: "Spot overlapping topics to avoid multiple pages targeting the same intent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-600" />,
      title: "Exports & sharing",
      body: "Export clusters and briefs to spreadsheets, PM tools, and CMS workflows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Credit-based plans",
      body: "Monthly credits scale with research volume; add seats on higher tiers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Keyword Insights review: pricing, features, pros & cons, and alternatives so you can pick the right keyword clustering and briefing tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} helps teams cluster keywords by intent, reduce cannibalization, and create concise briefs before writing.
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
              {toolName} groups keywords by SERP similarity and intent to help you decide how many pieces of content to create. It also generates briefs to speed up writing.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to avoid cannibalization, prioritize topics, and give writers clear outlines that match search intent.
            </p>
            <p className="mt-3 text-slate-700">
              Export clusters into planning docs and pair with on-page tools for optimization and scoring.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO and content teams managing topic selection, intent alignment, and content briefs at scale.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO teams clustering keywords to avoid cannibalization.",
                "Content managers creating briefs for writers and editors.",
                "Agencies producing topic maps for clients.",
                "Teams needing intent signals to pick content types.",
                "Writers wanting structured outlines before drafting.",
                "Organizations pairing clustering with on-page scoring tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on clustering, intent detection, and brief generation with credit-based pricing that scales with research needs.
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
                  {toolName} uses credit-based monthly plans. Credits are consumed by keyword clustering, SERP checks, and brief generation; more usage means higher plans.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a mid-tier to get enough credits for clustering and briefs; monitor consumption and upgrade if research volume grows.</p>
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
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Limited credits, single user</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">SEO/content teams</td>
                    <td className="px-4 py-3">More credits, clustering, briefs</td>
                    <td className="px-4 py-3">Balance of features and cost</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Agency</td>
                    <td className="px-4 py-3">Higher volume teams</td>
                    <td className="px-4 py-3">Highest credits, more seats, exports</td>
                    <td className="px-4 py-3">Plan for reporting and QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track credit usage and validate clusters manually. Pair with on-page tools for optimization and performance tracking.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong clustering and intent detection.</li>
                  <li>Brief generation speeds up writing prep.</li>
                  <li>Helps avoid cannibalization and duplicate topics.</li>
                  <li>Exports for collaboration and planning.</li>
                  <li>Credit-based plans to control spend.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires manual review to confirm intent and SERPs.</li>
                  <li>Credit usage can add up on large projects.</li>
                  <li>Not a full SEO suite (no link index/site audits).</li>
                  <li>Outputs still need human editing and scoring.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other keyword tools to match your clustering needs, budgets, and workflow preferences.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other keyword and clustering tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs LowFruits</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/lowfruits">
                  View LowFruits
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                LowFruits emphasizes weak-domain signals; {toolName} emphasizes clustering and briefs. Choose based on whether you need SERP weakness indicators or workflow-ready topic clusters.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/ahrefs">
                  View Ahrefs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs is a full SEO suite with link data and site audits; {toolName} specializes in clustering and briefs. Many teams pair {toolName} with Ahrefs for research plus execution.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need clustering, intent detection, and briefs to organize content plans and avoid cannibalization.
            </p>
            <p className="mt-3 text-slate-700">
              Track credit use and validate clusters. Pair with on-page optimization and analytics to measure performance after publishing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong clustering and briefing tool for SEO/content teams, best when combined with manual SERP review and on-page optimization.
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
              Choose {toolName} if you want clustering, intent detection, and ready-to-use briefs that reduce duplicate topics and speed up writing.
            </p>
            <p>
              Consider LowFruits for weak-domain signals or Ahrefs for a full SEO suite; keep {toolName} for clustering and brief workflows.
            </p>
            <p>{toolName} accelerates research-to-brief workflows—manual SERP checks and optimization still matter.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KeywordInsightsToolPage;
