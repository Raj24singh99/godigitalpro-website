import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ClicData";
const slug = "clicdata";
const category = "Business Intelligence & Dashboards";
const shortPitch =
  "ClicData is a cloud BI platform that connects to multiple data sources, automates refreshes, and delivers interactive dashboards for business teams.";
const pricingSummary =
  "Pricing scales by data refresh frequency, users, and connections. Higher tiers add more data connectors, storage, automation, and security controls; trials are available for testing.";
const officialUrl = "https://www.clicdata.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clicdata.com",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.2)]",
};

const alternatives = [
  { name: "Tableau", slug: "tableau-ai" },
  { name: "Power BI", slug: "powerbi-ai" },
  { name: "Looker Studio", slug: "looker" },
  { name: "Metabase", slug: "metabase-ai" },
  { name: "Domo", slug: "domo" },
];

const faqs = [
  {
    q: "What is ClicData?",
    a: "ClicData is a cloud-based BI and dashboard platform that connects to spreadsheets, databases, and SaaS tools to build interactive reports with automated refreshes.",
  },
  {
    q: "Who is it for?",
    a: "Business teams that need self-serve dashboards without heavy IT lift, including marketing, sales, finance, and operations teams.",
  },
  {
    q: "What data sources connect to ClicData?",
    a: "ClicData supports databases, spreadsheets, and many SaaS connectors. Exact availability depends on your plan.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans vary by data refresh frequency, number of users, connectors, and storage. Higher tiers add automation, security, and support.",
  },
  {
    q: "Does it handle data modeling?",
    a: "Yes. You can prep data, blend sources, and schedule transformations before visualizing in dashboards.",
  },
  {
    q: "Can I share dashboards externally?",
    a: "Yes. You can publish dashboards securely to stakeholders with permissions and scheduling.",
  },
  {
    q: "Is there a free plan?",
    a: "Trials are available; long-term free tiers are limited. Expect to upgrade for ongoing use and higher refresh limits.",
  },
  {
    q: "Do I need developers to use it?",
    a: "No. Many features are no-code, though SQL knowledge helps for complex models or custom queries.",
  },
];

function ClicDataToolPage() {
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
        "ClicData centralizes data prep, refresh scheduling, and dashboard delivery for business teams that want faster reporting without heavy IT dependencies.",
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
      title: "Data connectors",
      body: "Connect databases, spreadsheets, and SaaS apps; blend data to power unified dashboards.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Scheduled refresh",
      body: "Automate data imports and transformations with adjustable refresh frequencies.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Data prep & modeling",
      body: "Clean, join, and transform data inside ClicData before visualizing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Interactive dashboards",
      body: "Build shareable dashboards with filters and user-level permissions.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance",
      body: "Role-based access, sharing controls, and audit features help keep data secure.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Embed & share",
      body: "Embed dashboards or schedule email reports for internal and client stakeholders.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ClicData review: pricing, features, pros & cons, and alternatives so you can decide if it fits your BI and dashboard needs."
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
                  {toolName} helps business teams connect data, automate refreshes, and publish dashboards with secure sharing options.
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
              {toolName} is a BI and dashboard platform. It connects to your data sources, lets you clean and blend data, then build interactive dashboards for teams and clients.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a self-serve analytics layer: analysts configure connectors and models; business users view, filter, and subscribe to dashboards.
            </p>
            <p className="mt-3 text-slate-700">Pair with your warehouse or live SaaS sources to keep metrics current and consistent.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want dashboards without building a full BI stack from scratch.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams monitoring campaign and funnel performance.",
                "Sales and CS leaders tracking pipeline, renewals, and revenue health.",
                "Finance teams consolidating financial KPIs across tools.",
                "Operations teams blending logistics, inventory, and support data.",
                "Agencies sharing client dashboards with scheduled updates.",
                "Teams that prefer a no-code interface for most reporting needs.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on data connectivity, automation, and shareable dashboards.</p>
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
                  {toolName} plans scale by refresh frequency, connectors, and user count. Entry tiers support limited reports; higher tiers add automation, governance, and priority support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the lowest tier that includes your key connectors; upgrade when you need more refreshes or user seats.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Small teams testing dashboards</td>
                    <td className="px-4 py-3">Core connectors, limited refresh, few users</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Growing reporting needs</td>
                    <td className="px-4 py-3">More refreshes, more storage, collaboration</td>
                    <td className="px-4 py-3">Fits ongoing usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large teams & clients</td>
                    <td className="px-4 py-3">Highest refresh, security, onboarding</td>
                    <td className="px-4 py-3">Best for scale and governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for data cleaning effort and stakeholder training; dashboards still need owner maintenance.</p>
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
                  <li>Good mix of connectors with scheduled refreshes.</li>
                  <li>No-code dashboards with sharing controls.</li>
                  <li>Data prep tools reduce dependency on external ETL.</li>
                  <li>Useful for agencies delivering client reporting.</li>
                  <li>Faster to start than building a full BI stack.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Refresh limits and connectors vary by tier.</li>
                  <li>Complex models may still require SQL expertise.</li>
                  <li>Not a full data warehouse or advanced analytics stack.</li>
                  <li>Costs rise with more users and automation needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BI platforms to match your data sources, governance needs, and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other BI platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/tableau-ai">
                  View Tableau
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau offers deeper analytics and enterprise ecosystem; {toolName} emphasizes speed to dashboard with built-in data prep. Choose based on modeling depth and admin needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Power BI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/powerbi-ai">
                  View Power BI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Power BI integrates tightly with Microsoft stack; {toolName} is vendor-neutral with simpler onboarding. Pick based on your ecosystem and admin preferences.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast, shareable dashboards with automated refreshes and light data prep, without standing up a full BI stack.
            </p>
            <p className="mt-3 text-slate-700">
              It fits best when teams agree on data owners and keep connectors maintained; complex analytics may still require a warehouse and advanced tools.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical choice for small to midsize teams and agencies that want governed dashboards quickly; plan for data stewardship and periodic QA.
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
              Choose {toolName} if you want to centralize connectors, automate refreshes, and publish dashboards without heavy BI engineering.
            </p>
            <p>
              Consider Tableau or Power BI for deeper analysis; use {toolName} when you want speed, simplicity, and client-friendly sharing options.
            </p>
            <p>{toolName} helps teams stay on top of KPIs with less manual reporting work—consistent data ownership remains essential.</p>
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

export default ClicDataToolPage;
