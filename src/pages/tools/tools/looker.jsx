import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Looker (Google Cloud)";
const slug = "looker";
const category = "Analytics & BI";
const shortPitch = "Looker is an enterprise BI platform that models data centrally and delivers governed dashboards, embeds, and data experiences.";
const pricingSummary =
  "Custom/enterprise pricing based on users, workloads, and hosting. Costs depend on scale, governance needs, and support; expect sales scoping.";
const officialUrl = "https://cloud.google.com/looker";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/looker.com",
  gradient: "from-indigo-500 via-blue-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Tableau", slug: "tableau" },
  { name: "Power BI", slug: "power-bi" },
  { name: "Mode", slug: "mode" },
  { name: "Metabase", slug: "metabase" },
  { name: "Sigma Computing", slug: "sigma-computing" },
];

const faqs = [
  {
    q: "What is Looker?",
    a: "Looker is a BI platform that uses LookML to centrally model metrics and deliver governed dashboards, embeds, and data apps.",
  },
  {
    q: "Who is Looker best for?",
    a: "Data teams needing a governed semantic layer, consistent metrics, and enterprise-grade embeds and permissions.",
  },
  {
    q: "Does it require SQL/LookML?",
    a: "Yes. Data modeling in LookML is required to define metrics and joins; analysts/engineers typically own this.",
  },
  {
    q: "How is Looker priced?",
    a: "Custom/enterprise pricing based on users, workloads, and hosting. Expect a sales process and negotiation.",
  },
  {
    q: "Can I embed dashboards?",
    a: "Yes. Embedding and data apps are common; permissions and row-level security are supported.",
  },
  {
    q: "Does it integrate with BigQuery?",
    a: "Yes. Looker runs on modern warehouses (BigQuery, Snowflake, etc.) and leaves data in-place.",
  },
  {
    q: "Is governance supported?",
    a: "LookML models, row-level security, and permissions enforce consistent metrics and access controls.",
  },
  {
    q: "Do I still need engineers?",
    a: "Yes. Modeling, performance tuning, and governance require data engineering/analytics resources.",
  },
];

function LookerPage() {
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
        "Looker provides a governed semantic layer and BI experience with LookML modeling, dashboards, embeds, and data apps for enterprise analytics.",
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
      title: "LookML semantic layer",
      body: "Define metrics and joins centrally to keep dashboards consistent across teams.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "Dashboards & explorable reports",
      body: "Governed dashboards with drill-downs, scheduling, and alerts.",
    },
    {
      icon: <Folder className="h-5 w-5 text-blue-500" />,
      title: "Embeds & data apps",
      body: "Embed Looker visualizations and build data apps with row-level security.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance & security",
      body: "Permissions, row-level security, and version-controlled models for reliable metrics.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Warehouse-native",
      body: "Runs on warehouses like BigQuery, Snowflake, Redshift—data stays in-place.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Scheduling & alerts",
      body: "Deliver scheduled reports and alerts to keep stakeholders informed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Looker (Google Cloud) review: pricing, features, pros & cons, and alternatives so you can choose the right enterprise BI platform."
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
                  {toolName} gives enterprises a governed semantic layer, dashboards, and embeds—ideal when consistent metrics and security are critical.
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
              {toolName} is a BI platform that centralizes metric definitions in LookML, providing governed dashboards, embeds, and data apps on top of your data warehouse.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to enforce consistent KPIs, secure row-level access, and deliver data to stakeholders via dashboards, schedules, or embedded experiences.
            </p>
            <p className="mt-3 text-slate-700">
              Requires data modeling and engineering support to maintain LookML, performance, and governance over time.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for enterprises needing governed BI, consistent metrics, and embedded analytics with strong permissions.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Data teams standardizing metrics across departments.",
                "Enterprises needing row-level security and governed access.",
                "Product teams embedding analytics into apps/portals.",
                "Organizations running on modern warehouses (BigQuery, Snowflake, etc.).",
                "Ops leaders needing scheduled reports and alerts.",
                "Teams with analytics engineering resources for LookML upkeep.",
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
              {toolName} centers on a governed semantic layer, dashboards, embeds, and warehouse-native execution with strong security controls.
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
                  {toolName} uses custom enterprise pricing. Costs depend on users, usage, hosting, and support. Expect a sales process to scope needs and negotiate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Define user roles, embed needs, and warehouse choice before engaging sales. Budget for analytics engineering and governance.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise license</td>
                    <td className="px-4 py-3">Governed BI at scale</td>
                    <td className="px-4 py-3">LookML, dashboards, embeds, security</td>
                    <td className="px-4 py-3">Custom pricing; negotiate terms</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Hosted on GCP</td>
                    <td className="px-4 py-3">GCP-centric teams</td>
                    <td className="px-4 py-3">Managed hosting and support</td>
                    <td className="px-4 py-3">Align with infra/security requirements</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Embedded analytics</td>
                    <td className="px-4 py-3">Product teams</td>
                    <td className="px-4 py-3">Embeds, row-level security, APIs</td>
                    <td className="px-4 py-3">Scope MAUs and embed needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in warehouse costs, data team time for LookML, and governance overhead. Ensure you have resources for model maintenance and performance tuning.
            </p>
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
                  <li>Governed semantic layer via LookML.</li>
                  <li>Strong embeds and data apps with security.</li>
                  <li>Warehouse-native—data stays in your warehouse.</li>
                  <li>Scheduling, alerts, and drill-downs for stakeholders.</li>
                  <li>Enterprise-grade permissions and version control.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires LookML and data engineering investment.</li>
                  <li>Pricing is custom and can be premium.</li>
                  <li>Model maintenance and performance tuning are ongoing.</li>
                  <li>Not as quick to self-serve as lighter BI tools without modeling.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BI platforms to match your governance, embedding, and self-serve needs.
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
            <p className="text-slate-700">See how {toolName} compares with other enterprise BI options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/tableau">
                  View Tableau
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau excels at visual exploration and ease for analysts; {toolName} emphasizes governed metrics and embeds. Choose based on governance needs vs. ad-hoc visual analysis.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Power BI</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/power-bi">
                  View Power BI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Power BI is cost-effective and Microsoft-centric; {toolName} offers LookML modeling and strong embeds. Pick based on stack alignment and governance requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a governed semantic layer, secure embeds, and enterprise BI on top of your warehouse—and have resources for LookML and maintenance.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for enterprise licensing, data team time, and warehouse costs. Align stakeholders on metric definitions to maximize value.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading choice for governed, embedded BI—best for teams that prioritize consistent metrics and have analytics engineering capacity.
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
              Choose {toolName} if you need governed metrics, embeds, and secure BI on your warehouse and you have analytics engineering resources to maintain LookML.
            </p>
            <p>
              Consider Tableau or Power BI for ad-hoc visual analysis or Microsoft-centric stacks; keep {toolName} for semantic layer governance and embedded analytics.
            </p>
            <p>{toolName} delivers consistent, secure analytics—success depends on strong modeling, governance, and performance tuning.</p>
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

export default LookerPage;
