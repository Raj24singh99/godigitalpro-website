import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Funnel.io";
const slug = "funnel-io";
const category = "Marketing Data Pipeline";
const shortPitch =
  "Funnel.io connects marketing platforms, transforms data, and pushes clean metrics to warehouses, BI tools, and dashboards without heavy engineering.";
const pricingSummary =
  "Pricing is quote-based and scales by data sources, destinations, and rows processed. Expect mid-market pricing; trials/demos available to size needs.";
const officialUrl = "https://funnel.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/funnel.io",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Supermetrics", slug: "supermetrics" },
  { name: "Fivetran", slug: "fivetran" },
  { name: "Airbyte", slug: "airbyte" },
  { name: "Improvado", slug: "improvado" },
  { name: "Windsor.ai", slug: "windsor-ai" },
];

const faqs = [
  {
    q: "What does Funnel.io do?",
    a: "It aggregates marketing data from many platforms, normalizes fields, and sends it to warehouses, BI tools, or dashboards without building custom ETL.",
  },
  {
    q: "Which sources are supported?",
    a: "Hundreds of connectors for ad platforms, analytics, ecommerce, and more. Check the source catalog for specifics.",
  },
  {
    q: "Can I push to my data warehouse?",
    a: "Yes. Destinations include BigQuery, Snowflake, Redshift, Azure, plus Google Sheets, Looker Studio, and APIs.",
  },
  {
    q: "Do I need engineering resources?",
    a: "Minimal. Funnel.io handles connectors and schema mapping; data teams may still govern models and destinations.",
  },
  {
    q: "How is pricing structured?",
    a: "Quote-based, typically driven by sources, destinations, and data volume. Mid-market and enterprise oriented.",
  },
  {
    q: "Is there data transformation?",
    a: "Yes. You can map and harmonize fields, create calculated metrics, and standardize naming before export.",
  },
  {
    q: "Does it support APIs for custom use?",
    a: "Yes. API access lets you pull or push data programmatically.",
  },
  {
    q: "Is there monitoring and alerts?",
    a: "Yes. Data freshness, connector status, and error alerts are included to keep pipelines healthy.",
  },
];

function FunnelIOToolPage() {
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
        "Funnel.io is a marketing data pipeline that centralizes spend and performance data, harmonizes metrics, and sends them to warehouses and dashboards without custom ETL.",
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
      icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
      title: "Extensive marketing connectors",
      body: "Pull data from major ad, analytics, and ecommerce platforms without custom scripts.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Normalization and mapping",
      body: "Harmonize fields, create calculated metrics, and standardize naming across sources.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Warehouse and BI destinations",
      body: "Send data to BigQuery, Snowflake, Redshift, Sheets, Looker Studio, and more.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance and monitoring",
      body: "Data freshness checks, alerts, and access controls keep pipelines reliable.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-teal-500" />,
      title: "API access",
      body: "Programmatic pull/push for custom workflows and data products.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Dashboards and templates",
      body: "Prebuilt dashboards and templates help teams get quick visibility on spend and performance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Funnel.io review for marketing and data teams: pricing, features, pros & cons, and alternatives for marketing data pipelines and reporting."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  Funnel.io unifies marketing data and pushes standardized metrics into your warehouse and dashboards, reducing manual reporting work.
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
              {toolName} is a {category.toLowerCase()} platform that ingests marketing data, normalizes metrics, and exports to warehouses and BI tools. It’s built for marketing and data teams that want consistent reporting without custom ETL.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use it to centralize spend and performance, reduce manual spreadsheet work, and keep dashboards accurate.
            </p>
            <p className="mt-3 text-slate-700">
              Monitoring and alerts help maintain data freshness and catch connector issues early.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits marketing and data teams that need reliable, centralized marketing data.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers consolidating ad platform data.",
                "Data teams feeding marketing data into warehouses and BI.",
                "Agencies building client dashboards with consistent schemas.",
                "Ops teams reducing manual CSV pulls and spreadsheet merges.",
                "Organizations needing governance and monitoring on marketing data flows.",
                "Teams wanting API access to integrate marketing data into apps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
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
              {toolName} emphasizes connectors, data harmonization, and reliable exports so marketing data is trustworthy and ready for analysis.
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
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify_between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Pricing is custom, driven by number of sources, destinations, and data volume/rows. Expect mid-market pricing with trials/demos to size needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Request a quote with your source list, destinations, and expected monthly rows. Compare to Supermetrics/Improvado for fit.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Small/medium teams centralizing marketing data</td>
                    <td className="px-4 py-3">Source/destination and row limits</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger orgs and agencies</td>
                    <td className="px-4 py-3">Higher limits, SLA, advanced governance</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model costs with your source count, destinations, and expected row volume. Compare setup effort vs. engineering a custom pipeline.
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
                  <li>Wide connector library for marketing platforms.</li>
                  <li>Field mapping and metric harmonization built in.</li>
                  <li>Pushes to warehouses, Sheets, and BI tools easily.</li>
                  <li>Monitoring and alerts improve reliability.</li>
                  <li>Reduces manual reporting and spreadsheet merges.</li>
                  <li>API for custom integrations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is opaque and mid-market; may be high for small teams.</li>
                  <li>Transformations are marketing-focused, less general than full ETL tools.</li>
                  <li>Data volume caps can require plan upgrades.</li>
                  <li>Less flexible than building a custom pipeline if you need bespoke logic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with marketing connectors and ETL tools. Choose based on budget, data volume, and how much transformation you need.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other marketing data pipelines.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supermetrics</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/funnel-io-vs-supermetrics">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supermetrics is strong for Sheets/Looker Studio connectors. {toolName} emphasizes data warehousing, normalization, and monitoring for centralized reporting.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for warehouse-first pipelines; choose Supermetrics for lighter reporting directly in Sheets/Looker Studio.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Fivetran</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/funnel-io-vs-fivetran">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Fivetran is a general ETL with broad sources. {toolName} is marketing-focused with built-in metric harmonization and templates.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for marketing-specific transformations; choose Fivetran if you need broader enterprise ETL across many domains.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need reliable marketing data pipelines with harmonized metrics and easy exports to your warehouse/BI, {toolName} is worth it—especially for teams without heavy engineering support.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is tight or you need general ETL across many domains, compare Supermetrics, Airbyte, or Fivetran to ensure best fit and cost.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong choice for marketing and data teams wanting trustworthy, centralized performance data with minimal custom ETL.</p>
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
              Choose {toolName} if you want marketing data centralized, normalized, and pushed to your warehouse and dashboards with minimal engineering lift.
            </p>
            <p>
              Consider Supermetrics for lighter reporting, or Fivetran/Airbyte if you need broader ETL scope; Improvado if you want similar marketing focus with different pricing and features.</p>
            <p>{toolName} reduces manual reporting work and keeps marketing metrics consistent across teams.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
        className="flex w/full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FunnelIOToolPage;
