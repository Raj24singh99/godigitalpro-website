import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Sisense";
const slug = "sisense";
const category = "Analytics & BI";
const shortPitch =
  "Sisense is a BI and embedded analytics platform that lets teams model data, build dashboards, and embed interactive insights into products and portals.";
const pricingSummary =
  "Pricing is custom and depends on data volume, embedding needs, seats, and support. Expect higher costs for large deployments and customer-facing use cases.";
const officialUrl = "https://www.sisense.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/sisense.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Tableau AI", slug: "tableau-ai" },
  { name: "Power BI AI", slug: "powerbi-ai" },
  { name: "Looker", slug: "looker" },
  { name: "Metabase AI", slug: "metabase-ai" },
  { name: "Sisense AI", slug: "sisense-ai" },
];

const faqs = [
  {
    q: "What is Sisense?",
    a: "Sisense is a BI and embedded analytics platform for building dashboards, modeling data, and embedding insights into internal tools or customer products.",
  },
  {
    q: "Who is it for?",
    a: "Data, product, and operations teams that need governed analytics with the option to embed charts and self-serve experiences into apps and portals.",
  },
  {
    q: "Does Sisense support embedding?",
    a: "Yes. Embedding is a core use case, allowing dashboards and widgets to be placed in web apps with security controls.",
  },
  {
    q: "How is pricing structured?",
    a: "Custom pricing varies by data volume, embedding scope, seats, and support. Customer-facing deployments typically cost more.",
  },
  {
    q: "What data sources are supported?",
    a: "Major databases, warehouses, and cloud data platforms are supported; caching/elasticubes can accelerate queries.",
  },
  {
    q: "Does Sisense include AI features?",
    a: "Sisense AI adds NLQ and generated insights. Core Sisense focuses on modeling, dashboards, and embedding.",
  },
  {
    q: "Is governance available?",
    a: "Yes. Row-level security, role-based access, and modeling controls keep data governed for internal and embedded users.",
  },
  {
    q: "Is onboarding required?",
    a: "Onboarding is recommended to set up models, security, and embedding frameworks correctly.",
  },
];

function SisenseToolPage() {
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
        "Sisense provides governed BI and embedded analytics. It’s strong for teams that want to productize dashboards and analytics within apps or portals.",
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
      title: "Data modeling",
      body: "Model datasets with semantic layers and security to power dashboards and embeds.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Dashboards & widgets",
      body: "Build interactive dashboards with filters, drilldowns, and custom visualizations.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Embedded analytics",
      body: "Embed dashboards and widgets into web apps and portals with row-level security.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance & security",
      body: "Access controls, RLS, and auditing help secure data for internal and external users.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Scalability",
      body: "Caching/elasticubes and live connections support varying performance needs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Extensible APIs",
      body: "Use APIs and SDKs to extend, customize, and automate Sisense experiences.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Sisense review: pricing, features, pros & cons, and alternatives so you can decide if its embedded analytics fits your BI strategy."
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
                  {toolName} blends governed BI with embedded analytics so teams can deliver dashboards to internal and external users.
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
              {toolName} is a BI platform focused on embedded analytics. It lets teams model data, build dashboards, and embed them in web apps with security and customization.
            </p>
            <p className="mt-3 text-slate-700">
              It’s suited to companies turning analytics into a product or portal experience. Expect a modeling layer, caching options, and developer tooling for embeds.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside your warehouse and identity provider; add Sisense AI if you want natural language querying on top.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that need governed dashboards internally and embedded analytics for customers or partners.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams embedding analytics into customer apps or portals.",
                "Data teams modeling datasets with row-level security for many audiences.",
                "Ops leaders needing governed dashboards across departments.",
                "Customer success teams sharing usage analytics with clients.",
                "Partners/marketplaces needing controlled data access for external users.",
                "Companies wanting a white-label analytics experience instead of building from scratch.",
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
              {toolName} focuses on governed data modeling, interactive dashboards, and embedding with security and extensibility.
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
                  {toolName} uses custom pricing based on deployment scale, embedding needs, seats, and support. Customer-facing analytics and high data volumes typically carry higher costs and contracts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Scope your embedding use case and audience first; request pricing tied to actual user counts and data volumes.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Internal BI</td>
                    <td className="px-4 py-3">Departmental dashboards</td>
                    <td className="px-4 py-3">Modeling, dashboards, governance</td>
                    <td className="px-4 py-3">Good starting point for internal use</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Embedded</td>
                    <td className="px-4 py-3">Customer-facing analytics</td>
                    <td className="px-4 py-3">Embedding, white-label options, RLS</td>
                    <td className="px-4 py-3">Price scales with external users</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large-scale or multi-app</td>
                    <td className="px-4 py-3">Custom contracts, support, performance tuning</td>
                    <td className="px-4 py-3">Often combined with Sisense AI</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for implementation: data modeling, identity integration, and embed development. Budget for Sisense AI if you want NLQ and generated insights layered on top.
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
                  <li>Strong for embedded analytics and white-label experiences.</li>
                  <li>Governed modeling, RLS, and security controls.</li>
                  <li>APIs and SDKs for customization and automation.</li>
                  <li>Caching/elasticubes for performance on curated datasets.</li>
                  <li>Option to add Sisense AI for NLQ and narratives.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Custom pricing; costs can rise for external users.</li>
                  <li>Requires upfront modeling and governance work.</li>
                  <li>May be heavier than simple departmental BI needs.</li>
                  <li>Performance tuning needed for complex, live queries.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BI and embedding platforms to match your stack, governance needs, and external user scale.
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
            <p className="text-slate-700">See how {toolName} compares to other BI and embedding platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/tableau-ai">
                  View Tableau AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau excels at visualization and broad analyst adoption; {toolName} focuses on embedding and governed delivery. Choose Tableau for analyst-driven dashboards, {toolName} for productized analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Power BI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/powerbi-ai">
                  View Power BI AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Power BI fits Microsoft-first stacks and offers attractive pricing for internal users; {toolName} is strong when embedding and white-labeling are priorities. Pick based on stack alignment and external-user needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if embedded analytics is strategic, you need strong governance, and you want to deliver dashboards to customers or partners.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure you scope data models, performance needs, and identity integration. Consider Sisense AI if NLQ is important for your users.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A robust choice for embedded, governed analytics—best for teams that will invest in modeling and implementation.
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
              Choose {toolName} if you need embedded, governed analytics and are prepared to invest in modeling and implementation for internal and external users.
            </p>
            <p>
              Consider Tableau or Power BI if you prioritize analyst-led dashboards within existing ecosystems. {toolName} shines for productized analytics and white-label needs.
            </p>
            <p>{toolName} delivers flexible embedding and governance; add Sisense AI later for NLQ and narratives if needed.</p>
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

export default SisenseToolPage;
