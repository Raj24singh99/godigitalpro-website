import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Domo";
const slug = "domo";
const category = "Business Intelligence";
const shortPitch =
  "Domo connects data sources, dashboards, alerts, and workflows so business teams can act on insights without waiting on IT.";
const pricingSummary =
  "Pricing is quote-based; Small/Professional packages are available and scale by users, data volume, and governance features. Expect higher pricing than lightweight BI tools.";
const officialUrl = "https://www.domo.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/domo.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Tableau", slug: "tableau" },
  { name: "Power BI", slug: "power-bi" },
  { name: "Looker", slug: "looker" },
  { name: "Mode", slug: "mode" },
  { name: "Metabase", slug: "metabase" },
];

const faqs = [
  {
    q: "Is Domo good for non-technical teams?",
    a: "Yes. Business users can interact with dashboards, alerts, and apps without writing SQL, while data teams manage models and governance.",
  },
  {
    q: "What data sources connect to Domo?",
    a: "Hundreds of connectors exist, including databases, warehouses, marketing and sales tools, spreadsheets, and cloud storage.",
  },
  {
    q: "Does Domo support custom apps?",
    a: "Yes. Domo Apps let you build workflows and writeback on top of dashboards using low-code tooling or custom code.",
  },
  {
    q: "How does Domo handle governance?",
    a: "Row-level security, roles, and certified datasets help keep data consistent. Higher tiers add auditability and advanced admin controls.",
  },
  {
    q: "Is there real-time or streaming data?",
    a: "Domo supports near real-time updates through connectors and Stream processing, depending on the source and plan.",
  },
  {
    q: "Can Domo embed dashboards?",
    a: "Yes. You can embed dashboards externally or inside your product with access controls and SSO options.",
  },
  {
    q: "Does Domo have AI features?",
    a: "AI/ML-assisted insights, forecasting, and smart alerts are available; you can also integrate notebooks and Python/R for custom models.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is custom and factors in users, data volume, connectors, and governance. Trials exist; expect enterprise-level pricing.",
  },
];

function DomoToolPage() {
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
        "Domo is an enterprise-grade BI and data app platform that combines dashboards, governance, and low-code workflows so teams can act on insights quickly.",
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
      icon: <BookOpen className="h-5 w-5 text-sky-500" />,
      title: "Unified data platform",
      body: "Connectors, ETL, governance, and certified datasets keep teams aligned on trusted metrics.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Dashboards and alerts",
      body: "Interactive dashboards with real-time alerts and subscriptions help teams act on changes quickly.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Apps and writeback",
      body: "Build custom apps and workflows on top of data to push actions back into business systems.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Embeds and sharing",
      body: "Embed dashboards for customers or partners with SSO and granular access controls.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and compliance",
      body: "Row-level security, roles, and audit logs support enterprise requirements.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "AI-assisted insights",
      body: "Forecasting, anomaly detection, and generated summaries surface the signals that matter.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Domo review for BI and operations teams: pricing, features, pros & cons, and alternatives to unify data and dashboards."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Domo blends BI, apps, and governance so business users get insights and act quickly with trusted data.
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
              {toolName} is a {category.toLowerCase()} platform that brings data integration, modeling, dashboards, and apps into one cloud product. It aims to reduce friction between data teams and business users.
            </p>
            <p className="mt-3 text-slate-700">
              Operations, revenue, and finance teams use it to centralize metrics, automate alerts, and push actions back into systems.
            </p>
            <p className="mt-3 text-slate-700">
              Embeds and Domo Apps let you deliver insights to customers or partners, expanding BI beyond internal teams.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need governed, shareable dashboards and want to build on top of their data.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "RevOps teams standardizing metrics across sales and marketing.",
                "Finance teams building executive dashboards and forecasts.",
                "Support leaders tracking SLAs, ticket deflection, and CSAT.",
                "Product teams sharing usage metrics and feature adoption.",
                "Data teams enabling self-serve insights with row-level security.",
                "Embedded analytics for partners or customers who need shared data.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
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
              {toolName} emphasizes governed data, approachable dashboards, and extensibility so teams can operationalize insights.
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
                  Domo prices by users, data volume, and governance needs. Entry packages exist, but most deployments are quoted—plan for enterprise-level pricing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a trial to gauge fit; negotiate Professional/Enterprise if you need strict governance or embedding.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Teams standardizing dashboards</td>
                    <td className="px-4 py-3">User-based, connector and data limits apply</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs needing governance</td>
                    <td className="px-4 py-3">Advanced security, higher volumes, SLA</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Embedded</td>
                    <td className="px-4 py-3">Customer-facing analytics</td>
                    <td className="px-4 py-3">Embedding rights, SSO, API quotas</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in who needs to create vs. view dashboards, whether you embed externally, and required compliance. Enterprise tiers add admin controls and SLAs.
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
                  <li>All-in-one cloud BI with strong governance.</li>
                  <li>Wide connector library and solid data prep tooling.</li>
                  <li>Apps, writeback, and alerts help close the loop.</li>
                  <li>Embeds make it viable for customer-facing analytics.</li>
                  <li>Non-technical users can explore without SQL.</li>
                  <li>AI-assisted insights and forecasting options.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is opaque and skews enterprise.</li>
                  <li>Data modeling approach can feel proprietary vs. dbt-first stacks.</li>
                  <li>Not as flexible for deep analysts as pure SQL notebooks.</li>
                  <li>Embedding and advanced governance may require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with enterprise BI and modern analytics tools. Choose based on modeling approach, pricing, and how much you need embedded analytics.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">Compare {toolName} to other analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/domo-vs-tableau">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau excels at rich visual analysis with a desktop lineage. Domo is fully cloud with governance, apps, and embedded use cases.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for governed cloud BI and apps; choose Tableau if deep visual exploration is your priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Power BI</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/domo-vs-power-bi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Power BI offers strong value, especially for Microsoft-first stacks. Domo emphasizes ease for business teams and broad embedding options.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for a unified cloud experience; choose Power BI if you are standardized on Azure/Office and want lower entry pricing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need governed, shareable dashboards with built-in apps and embeds, {toolName} is worth evaluating. It can reduce BI sprawl and help teams act faster.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is tight or you prefer open modeling (dbt + Looker/Mode), compare pricing and flexibility. Lightweight teams may find Domo more than they need.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for mid-market and enterprise teams that want cloud BI with governance and embedded options.
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
              Choose {toolName} if you need a unified cloud BI platform with governance, alerts, and embedded analytics. It’s ideal for RevOps, finance, and operations teams that need trusted dashboards.
            </p>
            <p>
              Consider Tableau or Power BI if you want lower entry pricing or deep analyst features. Mode or Metabase work well for SQL-first teams.
            </p>
            <p>{toolName} integrates with major data sources and supports apps that push actions back into business systems.</p>
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
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
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

export default DomoToolPage;
