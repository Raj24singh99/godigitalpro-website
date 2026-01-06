import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tableau AI";
const slug = "tableau-ai";
const category = "Analytics & BI";
const shortPitch = "Tableau AI adds natural language queries, explainability, and automated insights on top of Tableau dashboards and data prep.";
const pricingSummary =
  "Pricing aligns with Tableau Cloud/Server tiers. AI features layer onto existing licenses; enterprise pricing varies by seats and deployment.";
const officialUrl = "https://www.tableau.com/products/tableau-ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tableau.com",
  gradient: "from-blue-500 via-sky-500 to-amber-400",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Looker", slug: "looker" },
  { name: "Power BI AI", slug: "powerbi-ai" },
  { name: "Metabase AI", slug: "metabase-ai" },
  { name: "Sisense AI", slug: "sisense-ai" },
  { name: "Domo", slug: "domo" },
];

const faqs = [
  {
    q: "What is Tableau AI?",
    a: "Tableau AI is a set of AI-assisted features (natural language, explain data, automated insights) built into Tableau for faster analysis and dashboard adoption.",
  },
  {
    q: "Who is it for?",
    a: "Analysts and business teams already using Tableau who want guided insights, natural language prompts, and faster exploration without heavy SQL.",
  },
  {
    q: "Does Tableau AI replace analysts?",
    a: "No. It speeds up exploration and explanations, but modeling, governance, and metric definitions still need humans.",
  },
  {
    q: "How is pricing structured?",
    a: "AI features are tied to Tableau Cloud/Server licensing. Enterprise pricing varies by seat type, deployment, and contracts.",
  },
  {
    q: "Can I use natural language to query data?",
    a: "Yes. Users can ask questions in plain language and get visual answers, subject to data model quality and permissions.",
  },
  {
    q: "What about data governance?",
    a: "Governance follows Tableau permissions and data sources. Quality depends on your models, joins, and metric definitions.",
  },
  {
    q: "Is on-prem supported?",
    a: "Tableau Server customers can access AI capabilities depending on version and licensing. Check release notes for availability.",
  },
  {
    q: "Does it integrate with Salesforce?",
    a: "Yes. Tableau integrates with Salesforce clouds; Einstein and Tableau features can be combined depending on licensing.",
  },
];

function TableauAIToolPage() {
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
        "Tableau AI adds natural language and automated insights to Tableau. It accelerates analysis for business users but still relies on clean models, governance, and analyst oversight.",
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
      title: "Natural language queries",
      body: "Ask questions in plain English and get visual answers based on your governed data models.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Explain data",
      body: "Automated explanations highlight drivers and outliers in existing dashboards.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Prep + modeling",
      body: "Works with Tableau Prep and published data sources; quality depends on your joins and metrics.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance aware",
      body: "Respects permissions and row-level security to keep AI answers aligned with access controls.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud + Server",
      body: "Available across Tableau Cloud and supported Server versions with the right licenses.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Salesforce ecosystem",
      body: "Combine Tableau visuals with Salesforce data and Einstein capabilities where licensed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tableau AI review: pricing, features, pros & cons, and alternatives so you know if the AI assist layer fits your analytics stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} helps teams ask questions in natural language and surface drivers in dashboards—still verify logic, joins, and metrics before sharing.
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
              {toolName} is Tableau's AI layer for faster analysis. It lets users query data in natural language, auto-explain chart patterns, and surface insights without writing SQL.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as an assist layer: quality depends on your governed data sources, joins, and definitions. Analysts should review insights before broad distribution.
            </p>
            <p className="mt-3 text-slate-700">Ensure data governance, permissions, and metric definitions are solid so AI answers stay reliable.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams already on Tableau that want self-serve exploration without losing governance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Business users who want guided answers without SQL.",
                "Analysts needing quick pattern detection and explanations.",
                "Leaders consuming dashboards and asking follow-up questions live.",
                "Data teams standardizing metrics but enabling self-serve insights.",
                "Ops teams monitoring KPIs and anomalies with explainability.",
                "Organizations invested in Salesforce data wanting tight alignment.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
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
              {toolName} focuses on natural language exploration, explainable insights, and governed access within Tableau.
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
                  {toolName} pricing aligns with Tableau Cloud/Server licensing. AI capabilities layer onto Creator/Explorer/Viewer seats; enterprise rates depend on contracts and deployment.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pilot on a subset of seats tied to governed data sources; expand after validating answers and adoption.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Seat</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Modeling + dashboards</td>
                    <td className="px-4 py-3">Full authoring, data prep, AI assist</td>
                    <td className="px-4 py-3">Needed for data sources</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Explorer</td>
                    <td className="px-4 py-3">Team analysis</td>
                    <td className="px-4 py-3">Ask data, explain data, limited authoring</td>
                    <td className="px-4 py-3">Good for managers/analysts</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Viewer</td>
                    <td className="px-4 py-3">Consumption</td>
                    <td className="px-4 py-3">View dashboards, guided insights</td>
                    <td className="px-4 py-3">Lower cost for broad reach</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for data modeling and governance. Validate AI answers on critical dashboards before rolling out to execs or broad teams.
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
                  <li>Natural language for governed data.</li>
                  <li>Explain data for quick drivers/outliers.</li>
                  <li>Fits existing Tableau deployments.</li>
                  <li>Respects permissions and security.</li>
                  <li>Good for executive and manager adoption.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality depends on data modeling and governance.</li>
                  <li>Enterprise licensing can be pricey at scale.</li>
                  <li>Not a replacement for semantic layer/metric design.</li>
                  <li>On-prem feature availability may lag Cloud.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BI tools that offer AI-assisted analysis to find the right governance and cost fit.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                    <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other AI-assisted BI platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Power BI AI</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/powerbi-ai">
                  View Power BI AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Power BI AI ties closely to Microsoft stack and Fabric; {toolName} integrates with Salesforce and Tableau ecosystem. Choose based on your cloud and existing BI footprint.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Looker</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/looker">
                  View Looker
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Looker leans on a semantic layer with governed metrics; {toolName} adds AI to visual exploration. Pick Looker for strong metric modeling, {toolName} for visual-first teams on Tableau.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your org already uses Tableau and you want faster, governed self-serve insights with natural language and explainability.
            </p>
            <p className="mt-3 text-slate-700">
              Invest in clean data sources and metric definitions first. Pilot on a few dashboards to measure accuracy and adoption before scaling.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong AI assist for Tableau customers; value depends on data quality and governance readiness.
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
              Choose {toolName} if you are a Tableau shop wanting AI-assisted exploration with governance intact and can invest in solid data models.
            </p>
            <p>
              Consider Power BI AI if you are on Microsoft Fabric or Looker for semantic-layer-first teams; use {toolName} to speed up Tableau adoption and insight discovery.
            </p>
            <p>{toolName} boosts self-serve analytics—keep analysts in the loop to validate logic and communicate metric definitions.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TableauAIToolPage;
