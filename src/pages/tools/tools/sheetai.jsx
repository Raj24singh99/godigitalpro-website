import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SheetAI";
const slug = "sheetai";
const category = "AI for Spreadsheets";
const shortPitch =
  "SheetAI brings AI prompts and functions into spreadsheets so teams can transform, summarize, classify, and generate data inside Google Sheets.";
const pricingSummary =
  "Usage-based and tiered plans. Entry tiers cover light prompts; higher tiers unlock larger usage limits, collaboration, and priority support.";
const officialUrl = "https://www.sheetai.app";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sheetai.app",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Airtable AI", slug: "airtable-ai" },
  { name: "Rows AI", slug: "rows-ai" },
  { name: "Coda AI", slug: "coda" },
  { name: "Notion AI", slug: "notion-ai" },
  { name: "Zapier AI Actions", slug: "zapier-ai-actions" },
];

const faqs = [
  {
    q: "What is SheetAI?",
    a: "SheetAI is a Google Sheets add-on that lets you use AI prompts and functions to generate, summarize, or transform data directly in cells.",
  },
  {
    q: "Who is it for?",
    a: "Operations, marketing, and analytics teams that want AI inside Sheets without exporting data to separate apps.",
  },
  {
    q: "Does SheetAI work with Google Sheets?",
    a: "Yes. It runs as an add-on and uses custom functions and sidebars to run prompts in Sheets.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered plans with usage limits. Higher tiers include more requests, collaboration, and faster support.",
  },
  {
    q: "What use cases are common?",
    a: "Data cleanup, deduping, summarization, writing snippets, enrichment prompts, and quick classifications inside Sheets.",
  },
  {
    q: "Does SheetAI store my data?",
    a: "Check the vendor policy. Data passes through the add-on to AI models; avoid sending sensitive data without review.",
  },
  {
    q: "Can I automate workflows?",
    a: "Yes. Use formulas, batch prompts, and Apps Script/webhooks to trigger automations with AI outputs.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Verify AI outputs for accuracy before using them in reporting or sending to customers.",
  },
];

function SheetAIToolPage() {
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
        "SheetAI embeds AI prompts and formulas inside Google Sheets. It is useful for teams that want AI-assisted cleanup, enrichment, and content generation in spreadsheet workflows.",
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
      title: "AI functions in cells",
      body: "Use custom functions to summarize, classify, translate, or generate text without leaving Sheets.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Prompt sidebar",
      body: "Run prompts against selected ranges for quick cleanups, rewrites, or insights on rows.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Data cleanup & enrichment",
      body: "Fix casing, dedupe entries, enrich descriptions, and standardize categories in bulk.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Guardrails",
      body: "Set prompt templates and review outputs to maintain consistency and reduce hallucinations.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Google Workspace native",
      body: "Works within Google Sheets with no extra UI. Keep data in the same spreadsheets you already use.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Automation ready",
      body: "Combine with Apps Script, webhooks, or Zapier to trigger updates and sync outputs to CRMs and docs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SheetAI review: pricing, features, pros & cons, and alternatives so you can decide if in-sheet AI fits your data workflows."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} keeps AI inside Sheets so teams can clean, enrich, and create data without leaving their existing workflows.
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
              {toolName} is a Sheets add-on that adds AI-powered functions and prompts. It lets teams summarize, rewrite, translate, and classify data within their existing spreadsheets.
            </p>
            <p className="mt-3 text-slate-700">
              It’s designed for teams that already rely on Sheets and want AI help without exporting data. Expect to create prompt templates and QA outputs before sharing.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside Apps Script, webhooks, and analytics tools to move cleaned data into CRMs, dashboards, or automations.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for spreadsheet-heavy teams that need AI help with data preparation and quick content generation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ops teams cleaning and deduping data in Sheets before syncs.",
                "Marketers creating copy variations, ad lines, or summaries in bulk.",
                "Analysts standardizing categories or tagging rows with AI classification.",
                "Founders and SMBs who live in Google Sheets and want AI without new tools.",
                "Support and success teams summarizing tickets or notes into structured fields.",
                "Automation builders chaining Apps Script, SheetAI, and Zapier steps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} brings AI prompts into cell formulas and sidebars, making it easy to transform data where you already work.
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
                  {toolName} pricing is usage-based with tiers for different request volumes. Costs rise with prompts and team usage. Test on a lower tier, then scale as you automate more flows.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a light tier to validate output quality and formulas; upgrade when you automate recurring prompts.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Free</td>
                    <td className="px-4 py-3">Testing and small batches</td>
                    <td className="px-4 py-3">Core functions, low usage caps</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams using AI regularly</td>
                    <td className="px-4 py-3">Higher limits, collaboration, priority runtime</td>
                    <td className="px-4 py-3">Watch monthly request usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Automation-heavy teams</td>
                    <td className="px-4 py-3">Largest limits, support, API/automation focus</td>
                    <td className="px-4 py-3">Budget for monitoring outputs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Include time for prompt templates, QA, and data governance. Avoid sending sensitive data without review; monitor cost vs. impact as usage grows.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI lives inside Google Sheets—no context switching.</li>
                  <li>Custom functions and prompts for cleanup, summaries, and generation.</li>
                  <li>Works with existing Sheet data and workflows.</li>
                  <li>Automation-friendly via Apps Script and webhooks.</li>
                  <li>Usage tiers let teams start small and scale.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs need QA; risk of hallucinations or inconsistent formatting.</li>
                  <li>Usage costs can climb with heavy prompting.</li>
                  <li>Limited to Google Sheets environment.</li>
                  <li>Governance needed to avoid sensitive data exposure.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other spreadsheet and doc AI tools to match your data stack, governance, and automation needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other spreadsheet-focused AI platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Airtable AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/airtable-ai">
                  View Airtable AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Airtable AI sits inside a database-style workspace; {toolName} keeps AI in Sheets. Choose Airtable for relational workflows, {toolName} for Google Sheets-native teams.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/notion-ai">
                  View Notion AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion AI excels for docs and wikis; {toolName} is optimized for spreadsheet data. Use Notion AI for narrative content and {toolName} for structured data cleanup in Sheets.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your team lives in Google Sheets and needs AI-powered cleanups, summaries, and generation without adopting a new data tool.
            </p>
            <p className="mt-3 text-slate-700">
              Establish prompt templates, governance, and review steps. Monitor usage and costs, and avoid sending sensitive data through prompts.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid in-sheet AI helper for teams that want to speed up data prep and light content tasks while staying in Google Sheets.
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
              Choose {toolName} if your workflows are spreadsheet-first and you want AI-driven cleanup and generation without leaving Google Sheets.
            </p>
            <p>
              Consider Airtable AI for database-style apps or Notion AI for docs. Use {toolName} when Sheets is your operating system and you need faster data prep.
            </p>
            <p>{toolName} keeps AI close to your data, speeding up repetitive spreadsheet work while requiring review for accuracy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SheetAIToolPage;
