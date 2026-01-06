import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Snowplow";
const slug = "snowplow";
const category = "Data Collection & Analytics";
const shortPitch =
  "Snowplow is an open-source event collection platform that lets data teams capture, model, and deliver granular behavioral data to warehouses and downstream tools.";
const pricingSummary =
  "Open-source core with paid cloud/managed options. Pricing for managed offerings depends on event volume, SLAs, and features; costs scale with data throughput.";
const officialUrl = "https://www.snowplow.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/snowplow.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Segment", slug: "segment" },
  { name: "RudderStack", slug: "rudderstack" },
  { name: "mParticle", slug: "mparticle" },
  { name: "Freshpaint", slug: "freshpaint" },
  { name: "Heap", slug: "heap" },
];

const faqs = [
  {
    q: "What is Snowplow?",
    a: "Snowplow is an open-source event tracking platform for collecting granular behavioral data and sending it to your warehouse and tools.",
  },
  {
    q: "Who is it for?",
    a: "Data and analytics teams that want full control over event schemas, destinations, and infrastructure, with or without managed hosting.",
  },
  {
    q: "How is pricing structured?",
    a: "The core is open source; managed/cloud offerings are priced by event volume, features, and SLAs.",
  },
  {
    q: "Does Snowplow replace analytics tools?",
    a: "It is a collection and delivery platform. Use BI or product analytics tools for visualization and exploration.",
  },
  {
    q: "What warehouses are supported?",
    a: "Snowflake, BigQuery, Redshift, Databricks, and more depending on setup.",
  },
  {
    q: "Is it real time?",
    a: "Real-time pipelines are supported; latency depends on infrastructure and configuration.",
  },
  {
    q: "Is governance available?",
    a: "Yes. Schemas, validation, and event versioning help maintain data quality; permissions depend on your infra/IDP setup.",
  },
  {
    q: "Is engineering needed?",
    a: "Yes. Implementation, event design, and pipeline maintenance require technical teams unless you choose managed options.",
  },
];

function SnowplowToolPage() {
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
        "Snowplow is an open-source event collection platform with managed options. It gives data teams control over schemas, pipelines, and destinations for warehouse-first analytics.",
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
      title: "Event-level control",
      body: "Define schemas, validate events, and version payloads to keep data quality high.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Warehouse-first",
      body: "Deliver raw and modeled events to Snowflake, BigQuery, Redshift, and more.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Real-time pipelines",
      body: "Stream events with low latency to power real-time use cases and destinations.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance",
      body: "Schema validation, PII handling patterns, and versioning help maintain compliance and trust.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Managed or self-hosted",
      body: "Run open source yourself or choose managed Snowplow for SLAs and support.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & modeling",
      body: "Send data to warehouses and downstream tools; use dbt/SQL for modeling and activation.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Snowplow review: pricing, features, pros & cons, and alternatives so you can decide if warehouse-first event collection fits your data stack."
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
                  {toolName} gives data teams warehouse-first event collection with governance and real-time options—best when paired with solid modeling and QA.
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
              {toolName} is an event collection platform with an open-source core. It lets teams define schemas, capture granular behavioral data, and deliver it to warehouses and downstream tools.
            </p>
            <p className="mt-3 text-slate-700">
              Teams choose it for control: validation, governance, and flexibility in modeling. Managed options reduce operational overhead if you don’t want to run pipelines yourself.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with dbt or SQL modeling and BI/product analytics for reporting and activation.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for data teams that want warehouse-first tracking with control over schemas and pipelines.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Data teams building governed event pipelines to the warehouse.",
                "Product analytics teams needing granular events for modeling.",
                "Companies replacing black-box analytics with controlled pipelines.",
                "Teams with engineering resources to implement tracking and QA.",
                "Orgs needing real-time streams for activation and alerting.",
                "Teams wanting open-source flexibility or managed SLAs for scale.",
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
              {toolName} emphasizes schema control, governance, and flexible delivery to warehouses and downstream destinations.
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
                  The open-source core is free; managed Snowplow pricing depends on event volume, SLA, and features. Costs scale with throughput and support level—factor infra/ops costs if self-hosting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a pilot on managed or self-hosted; measure event quality and infra overhead before scaling.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Option</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Open source</td>
                    <td className="px-4 py-3">Teams with infra capacity</td>
                    <td className="px-4 py-3">Full control, DIY hosting</td>
                    <td className="px-4 py-3">Consider ops and monitoring costs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed/Cloud</td>
                    <td className="px-4 py-3">Faster time-to-value</td>
                    <td className="px-4 py-3">Hosted pipelines, SLAs, support</td>
                    <td className="px-4 py-3">Priced by events and service level</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-scale and compliance</td>
                    <td className="px-4 py-3">Advanced features, security, support</td>
                    <td className="px-4 py-3">Custom contracts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for data modeling, QA, and monitoring. Align event design with stakeholders to avoid schema sprawl and maintain data quality.
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
                  <li>Granular, schema-controlled event data.</li>
                  <li>Warehouse-first delivery to major platforms.</li>
                  <li>Real-time pipelines for streaming use cases.</li>
                  <li>Open-source flexibility with managed options.</li>
                  <li>Governance via validation and versioning.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires engineering and data resources to implement well.</li>
                  <li>Self-hosting adds infra and monitoring overhead.</li>
                  <li>Visualization is external—needs BI/product analytics.</li>
                  <li>Schema design and QA are mandatory to prevent data drift.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other data collection and CDP/analytics tools to match your control, hosting, and speed-to-value needs.
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
            <p className="text-slate-700">See how {toolName} stacks against other event collection platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Segment</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/segment">
                  View Segment
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Segment emphasizes ease and managed pipelines; {toolName} offers deeper schema control and open-source flexibility. Choose Segment for speed, {toolName} for control and warehouse-first focus.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RudderStack</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/rudderstack">
                  View RudderStack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                RudderStack is an open-source CDP with managed options; {toolName} is focused on event collection and governance. Decide based on CDP needs vs. dedicated event pipelines and schema validation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need controlled, warehouse-first event data and have the engineering/data resources to implement or prefer a managed pipeline with governance.
            </p>
            <p className="mt-3 text-slate-700">
              Invest in schema design, QA, and monitoring. Pair with dbt/SQL for modeling and BI/product analytics for insights and activation.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading choice for teams prioritizing event data quality and control—best when supported by strong data engineering practices.
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
              Choose {toolName} if you want governed, warehouse-first event collection and can support implementation (or opt for managed hosting).
            </p>
            <p>
              Consider Segment for ease or RudderStack for CDP-style routing; {toolName} excels when schema control, validation, and open-source flexibility are priorities.
            </p>
            <p>{toolName} unlocks high-quality behavioral data when paired with strong modeling, QA, and monitoring.</p>
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

export default SnowplowToolPage;
