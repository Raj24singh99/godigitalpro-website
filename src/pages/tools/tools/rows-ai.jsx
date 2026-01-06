import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Table2, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Rows AI";
const slug = "rows-ai";
const category = "AI Spreadsheets & Data";
const shortPitch = "Rows AI is a spreadsheet with built-in AI functions, data connectors, and sharing to turn data into charts, reports, and automations.";
const pricingSummary = "Free and paid plans; higher tiers add more AI credits, connectors, rows, and collaboration limits. Usage-based AI credits apply.";
const officialUrl = "https://rows.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rows.com",
  gradient: "from-indigo-500 via-blue-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Airtable", slug: "airtable" },
  { name: "Notion AI", slug: "notion-ai" },
  { name: "Google Sheets", slug: "google-sheets" },
  { name: "Causal", slug: "causal" },
  { name: "Grist", slug: "grist" },
];

const faqs = [
  { q: "What is Rows AI?", a: "Rows AI is a spreadsheet platform with built-in AI functions, data connectors, and sharing for interactive reports and automations." },
  { q: "Who is it for?", a: "Growth, ops, and data-savvy teams that want spreadsheets with AI assistance and easier sharing." },
  { q: "Does it integrate with APIs?", a: "Yes. Connectors and APIs pull data from services like HubSpot, Google Analytics, and more." },
  { q: "How is pricing structured?", a: "Free and paid tiers with limits on AI credits, connectors, rows, and collaboration. AI usage consumes credits." },
  { q: "Can it publish dashboards?", a: "Yes. Share interactive tables and charts via live links or embeds." },
  { q: "Does it replace BI tools?", a: "No. It's a lightweight spreadsheet/automation layer; heavy BI still needs dedicated tools." },
  { q: "Is data secure?", a: "Review security docs and set access controls; avoid sensitive data without proper policies." },
  { q: "Is human review needed?", a: "Yes. Validate AI outputs and calculations before sharing decisions." },
];

function RowsAiToolPage() {
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
        "Rows AI combines spreadsheets with AI functions, connectors, and sharing for quick dashboards and automations. Good for growth and ops teams that live in spreadsheets.",
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
      icon: <Table2 className="h-5 w-5 text-indigo-500" />,
      title: "AI functions in sheets",
      body: "Use AI for text, summaries, and transformations directly in cells.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-500" />,
      title: "Data connectors",
      body: "Pull data from apps and APIs like HubSpot, GA, and CSVs with built-in connectors.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Automations",
      body: "Schedule refreshes and automations to keep reports up to date.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
      title: "Charts & sharing",
      body: "Create charts and share interactive links or embeds with stakeholders.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Templates",
      body: "Start from templates for reporting, lead lists, and ops dashboards.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-indigo-600" />,
      title: "Collaboration",
      body: "Work with teams via permissions, comments, and shared workspaces.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Rows AI review: pricing, features, pros & cons, and alternatives to evaluate it for AI-powered spreadsheets and dashboards."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  {toolName} blends spreadsheets, AI functions, and connectors so teams can build lightweight dashboards and automations quickly.
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
              {toolName} is a spreadsheet platform with AI built in. It connects to data sources, lets you use AI in cells, and share interactive reports with stakeholders via links or embeds.
            </p>
            <p className="mt-3 text-slate-700">Use it for quick dashboards and automations; validate AI outputs and calculations before sharing widely.</p>
            <p className="mt-3 text-slate-700">Pair with BI tools for complex modeling and governance.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for growth, ops, and teams comfortable in spreadsheets who want AI assistance and connectors.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Growth teams building quick performance dashboards.",
                "Ops teams automating lead lists and reports from APIs.",
                "Marketers creating shareable campaign scorecards.",
                "Founders needing lightweight financial or KPI sheets.",
                "Analysts prototyping before handing off to BI.",
                "Teams collaborating on data with live sharing links.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI functions, connectors, automation, sharing, templates, and collaboration.</p>
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
                  Free and paid tiers with limits on AI credits, connectors, rows, and collaboration. AI usage consumes credits; higher tiers unlock more capacity and features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test connectors and AI quality; upgrade when you hit credit or sharing limits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Basic sheets, limited AI credits/connectors</td>
                    <td className="px-4 py-3">Good for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active teams</td>
                    <td className="px-4 py-3">More credits, connectors, sharing</td>
                    <td className="px-4 py-3">Fits most growth/ops teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger collaboration</td>
                    <td className="px-4 py-3">Higher limits, governance, support</td>
                    <td className="px-4 py-3">Choose for bigger data and teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Track AI credit usage; set access controls for shared sheets and embeds.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI functions directly in spreadsheets.</li>
                  <li>Built-in connectors and automations.</li>
                  <li>Easy sharing/embeds for stakeholders.</li>
                  <li>Templates speed up common reporting.</li>
                  <li>Familiar spreadsheet interface.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI and connector usage tied to credit limits.</li>
                  <li>Not a replacement for full BI or data governance.</li>
                  <li>Complex models may be better in dedicated tools.</li>
                  <li>Need to validate AI outputs to avoid errors.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI spreadsheets and data tools to fit your workflow.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other spreadsheet and data tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Airtable</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/airtable">
                  View Airtable
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Airtable is a database-first tool with automations; {toolName} keeps a spreadsheet feel with built-in AI and sharing. Choose based on whether you prefer database-style structure or sheet-first workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Google Sheets + add-ons</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/google-sheets">
                  View Google Sheets
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Sheets plus add-ons can mimic some features; {toolName} bundles AI and connectors natively with sharing. Pick based on whether bundled features or an open add-on ecosystem fits better.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want spreadsheets with native AI, connectors, and easy sharing for lightweight dashboards and automations.
            </p>
            <p className="mt-3 text-slate-700">Validate AI results and credit usage; use dedicated BI for heavy analytics.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid AI spreadsheet choice; best when teams want speed and sharing without full BI overhead.</p>
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
            <p>Choose {toolName} if you want AI-powered spreadsheets with connectors and sharing for quick dashboards.</p>
            <p>Consider Airtable or Sheets add-ons for different data models; use {toolName} when you want bundled AI and connectors with a sheet-first feel.</p>
            <p>{toolName} speeds up reporting—keep QA on AI outputs and data sources.</p>
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

export default RowsAiToolPage;
