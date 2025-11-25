import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HiBob (bob)";
const slug = "hibob";
const category = "HRIS & People Ops";
const shortPitch =
  "HiBob (bob) is an HRIS for modern teams, covering core HR, onboarding, performance, time, workflows, and engagement analytics.";
const pricingSummary = "Quote-based per-employee pricing; modules and integrations can add cost. Targeted at scaling SMB/mid-market teams.";
const officialUrl = "https://www.hibob.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hibob.com",
  gradient: "from-rose-500 via-orange-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(244,63,94,0.24)]",
};

const alternatives = [
  { name: "BambooHR", slug: "bamboohr" },
  { name: "Rippling", slug: "rippling" },
  { name: "Gusto", slug: "gusto" },
  { name: "Justworks", slug: "justworks" },
  { name: "Deel", slug: "deel" },
];

const faqs = [
  {
    q: "What is HiBob?",
    a: "HiBob (bob) is an HRIS that manages employee records, onboarding, performance, time, workflows, and engagement insights for growing companies.",
  },
  {
    q: "Who is it for?",
    a: "Scaling SMB and mid-market companies that need modern HR workflows, engagement tools, and integrations with payroll/IT systems.",
  },
  {
    q: "Does it include payroll?",
    a: "HiBob integrates with payroll providers; it is not a payroll system itself in most regions. Check supported payroll partners.",
  },
  {
    q: "How is pricing structured?",
    a: "Quote-based per-employee pricing. Modules, integrations, and implementation can affect cost.",
  },
  {
    q: "Does it handle performance reviews?",
    a: "Yes. It includes reviews, goals, and feedback cycles to support performance management.",
  },
  {
    q: "Is there time and attendance?",
    a: "Yes. Time tracking, leave, and attendance features are included, with region-specific policies.",
  },
  {
    q: "Does it support onboarding?",
    a: "Yes. Onboarding checklists, document collection, and workflows are built-in.",
  },
  {
    q: "Is it global?",
    a: "HiBob supports multi-country teams but relies on payroll/EOR partners for local compliance. Verify coverage for your locations.",
  },
];

function HibobToolPage() {
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
        "HiBob (bob) is a modern HRIS with onboarding, performance, time, workflows, and engagement analytics. It suits scaling teams that want a people-centric system with integrations to payroll/IT.",
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
      title: "Core HRIS",
      body: "Employee records, org charts, documents, and self-serve profiles.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Onboarding & workflows",
      body: "Checklists, e-sign, and automations to bring new hires onboard smoothly.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Performance & goals",
      body: "Reviews, feedback, and goal tracking to support people managers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Time & attendance",
      body: "Time tracking, leave management, and approvals with policies by location.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Engagement & analytics",
      body: "Surveys, insights, and dashboards to monitor engagement and retention signals.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect to payroll, IT, and identity tools to sync people data across systems.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="HiBob (bob) review: pricing, features, pros & cons, and alternatives so you can choose the right HRIS for your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-100 blur-3xl" />
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
                  {toolName} gives people teams a modern HRIS with workflows, performance, and engagement insights—pair it with payroll/IT tools for a complete stack.
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
              {toolName} is an HR information system focused on people experiences. It covers core HR data, onboarding, workflows, performance, time, and engagement analytics for scaling companies.
            </p>
            <p className="mt-3 text-slate-700">
              It integrates with payroll and IT systems rather than replacing them outright. Expect to connect it to your payroll/EOR partners and identity tools.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize employee data, automate HR processes, and give managers visibility into team health.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Ideal for mid-sized and scaling teams wanting a modern HRIS with engagement features.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "People teams replacing spreadsheets or legacy HRIS.",
                "Companies needing onboarding workflows and e-sign.",
                "Managers who want performance cycles and goals in one place.",
                "Global teams syncing data to payroll/EOR partners.",
                "Organizations tracking time/leave across multiple locations.",
                "Leaders wanting engagement and retention insights.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on core HR, workflows, performance, and engagement.</p>
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
                  Pricing is quote-based per employee. Costs vary by modules, integrations, and implementation support. Expect higher pricing than payroll-focused SMB tools, with more people ops depth.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Get a tailored quote; map required modules and integrations. Pilot with a smaller group before full rollout.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Base/HRIS</td>
                    <td className="px-4 py-3">Core HR needs</td>
                    <td className="px-4 py-3">Employee records, workflows, onboarding</td>
                    <td className="px-4 py-3">Scope integrations early</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling teams</td>
                    <td className="px-4 py-3">Performance, time/leave, engagement</td>
                    <td className="px-4 py-3">Likely fit for mid-market</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Global orgs</td>
                    <td className="px-4 py-3">Advanced analytics, security, SLAs</td>
                    <td className="px-4 py-3">Plan for change management</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for implementation services and time to integrate with payroll/IT. Validate regional compliance with your payroll/EOR partners.
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
                  <li>Modern UI with people-centric workflows.</li>
                  <li>Performance, engagement, and time/leave in one HRIS.</li>
                  <li>Automations reduce manual HR tasks.</li>
                  <li>Integrates with payroll and IT/identity tools.</li>
                  <li>Analytics give visibility to HR and managers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quote-based pricing; can be higher than payroll-first SMB tools.</li>
                  <li>Requires integration with payroll/EOR for payments and tax compliance.</li>
                  <li>Change management needed for managers and employees.</li>
                  <li>Global compliance depends on partner coverage.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other HRIS and people platforms.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other HR platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs BambooHR</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/bamboohr">
                  View BambooHR
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                BambooHR is popular with SMBs for simplicity; {toolName} offers more engagement and performance features. Choose BambooHR for lighter needs, {toolName} for richer people ops workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rippling</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/rippling">
                  View Rippling
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rippling bundles HR, IT, and payroll; {toolName} is HR-first and integrates with payroll partners. Choose Rippling for a unified IT/payroll stack, {toolName} if you prefer HR depth with chosen payroll providers.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a modern HRIS with engagement, performance, and automation and you are comfortable integrating payroll separately.
            </p>
            <p className="mt-3 text-slate-700">If you want bundled payroll/IT, compare Rippling or Gusto; for PEO co-employment, look at Justworks or Deel.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong people-ops platform for scaling teams—plan integrations and change management to get full value.
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
            <p>Choose {toolName} if you want a people-focused HRIS with workflows, performance, and engagement analytics and are fine integrating payroll/EOR.</p>
            <p>Pick Rippling for unified HR+IT+payroll, or BambooHR/Gusto if you need simpler SMB-first options.</p>
            <p>{toolName} excels when supported by clear processes, adoption training, and tight integrations with payroll and identity systems.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default HibobToolPage;
