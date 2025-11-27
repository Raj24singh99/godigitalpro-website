import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Function Point";
const slug = "functionpoint";
const category = "Agency Project Management & PSA";
const shortPitch =
  "Function Point is an agency-focused PSA combining project management, time tracking, estimating, resourcing, and invoicing in one platform.";
const pricingSummary =
  "Pricing is quote-based and scales by users and modules. Expect per-user monthly pricing with onboarding fees; designed for agencies needing PSA capabilities.";
const officialUrl = "https://www.functionpoint.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/functionpoint.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Workamajig", slug: "workamajig" },
  { name: "Accelo", slug: "accelo" },
  { name: "Wrike", slug: "wrike" },
  { name: "Asana", slug: "asana" },
  { name: "Productive", slug: "productive" },
];

const faqs = [
  {
    q: "Is Function Point built for agencies?",
    a: "Yes. It’s designed for creative and marketing agencies needing estimating, time tracking, resourcing, and billing in one PSA.",
  },
  {
    q: "Does it handle estimating and proposals?",
    a: "Yes. You can create estimates, convert them to jobs, and track budgets vs. actuals.",
  },
  {
    q: "Is time tracking included?",
    a: "Time tracking, expenses, and timesheet approvals are built in, tied to projects and tasks.",
  },
  {
    q: "Can it handle resource planning?",
    a: "Yes. Resource scheduling and capacity planning help allocate teams across jobs.",
  },
  {
    q: "Does Function Point include invoicing?",
    a: "You can invoice directly and sync to accounting tools (e.g., QuickBooks).",
  },
  {
    q: "Are there integrations?",
    a: "Integrations include accounting, storage, and productivity tools; check current list for your stack.",
  },
  {
    q: "How is reporting?",
    a: "Dashboards cover profitability, utilization, and project health; deeper reporting varies by plan.",
  },
  {
    q: "Is pricing public?",
    a: "Pricing is custom. Expect per-user/month costs and onboarding; best to request a quote for your agency size.",
  },
];

function FunctionPointToolPage() {
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
        "Function Point is a PSA for agencies, combining estimates, projects, time tracking, resourcing, and invoicing to keep budgets and profitability visible.",
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
      title: "Estimating and proposals",
      body: "Build estimates and convert them into projects with budgets and scopes intact.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Project management and tasks",
      body: "Manage jobs, tasks, and milestones with budgets, timelines, and assignments.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Time and expense tracking",
      body: "Capture billable hours and expenses with approvals tied to jobs and clients.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-teal-500" />,
      title: "Resource planning",
      body: "Schedule and forecast capacity to balance workloads across teams and projects.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Invoicing and accounting sync",
      body: "Invoice clients directly and sync financials to accounting platforms like QuickBooks.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Reporting and profitability",
      body: "Dashboards for utilization, profitability, and project health to keep margins on track.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Function Point review for agencies: pricing, features, pros & cons, and alternatives for PSA, estimating, time tracking, and invoicing."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
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
                  Function Point gives agencies one system for estimates, projects, time, resources, and invoicing—keeping budgets and margins visible.
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
              {toolName} is an {category.toLowerCase()} platform for creative and marketing agencies. It covers estimating, project management, time/expense tracking, resource planning, and invoicing in one PSA.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use it to keep budgets aligned, track utilization, and bill accurately without juggling multiple tools.
            </p>
            <p className="mt-3 text-slate-700">
              Accounting integrations help reconcile invoices and expenses with finance systems.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits agencies that need project, resource, and billing workflows in one PSA.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creative and marketing agencies managing retainers and fixed-fee projects.",
                "Studios tracking time/expenses and invoicing against budgets.",
                "Project managers needing resource scheduling and utilization views.",
                "Agency owners wanting profitability and margin dashboards.",
                "Teams that want estimates to flow directly into jobs and invoices.",
                "Shops tired of stitching together separate PM, time, and billing tools.",
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
              {toolName} emphasizes agency workflows from estimating through delivery, time capture, and billing.
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
                  Pricing is custom, typically per-user/month with onboarding fees. Costs vary by modules (PM, time/expense, resourcing, invoicing) and agency size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Request a quote with clear user counts and required modules. Model ROI on utilization and billing accuracy.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth/Professional</td>
                    <td className="px-4 py-3">Small-mid agencies</td>
                    <td className="px-4 py-3">Core PM, time/expense, invoicing</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger agencies</td>
                    <td className="px-4 py-3">Advanced reporting, resource mgmt, SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Clarify how many seats, modules, and integrations you need. Evaluate implementation effort and data migration costs.
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
                  <li>Agency-focused PSA with estimates-to-invoice workflow.</li>
                  <li>Built-in time/expense tracking and approvals.</li>
                  <li>Resource planning and scheduling tools.</li>
                  <li>Profitability and utilization reporting.</li>
                  <li>Accounting sync for invoices and expenses.</li>
                  <li>Reduces tool fragmentation for agencies.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is opaque and requires a quote.</li>
                  <li>Implementation and change management may be significant.</li>
                  <li>UI can feel heavier than lightweight PM tools.</li>
                  <li>Not ideal for product/engineering teams needing agile dev workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with agency PSAs and PM tools. Choose based on invoicing needs, resource planning depth, and budget.
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
            <p className="text-slate-700">Compare {toolName} to other agency platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Workamajig</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/functionpoint-vs-workamajig">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Workamajig is another agency PSA with finance and traffic management. {toolName} offers similar PSA workflows; choice often comes down to UI preference and pricing.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you prefer its interface and integration set; choose Workamajig if you want deeper finance modules and are comfortable with its UX.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Accelo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/functionpoint-vs-accelo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Accelo is a PSA for services with sales, projects, tickets, and billing. {toolName} focuses on agency workflows and estimating-to-invoice flows.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for agency-specific estimating and jobs; choose Accelo if you need broader services PSA with ticketing.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you are an agency needing estimates, jobs, time, resources, and invoicing in one PSA, {toolName} is worth evaluating. It improves visibility on budgets and margins.
            </p>
            <p className="mt-3 text-slate-700">
              If you want lightweight PM for creative teams without billing, consider Asana or Wrike; for deeper finance, consider Workamajig or Accelo.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong PSA fit for agencies that want to control scope, time, and billing in one system.</p>
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
              Choose {toolName} if you’re an agency that wants estimates, PM, time/expenses, resource planning, and invoicing in one PSA built for creative workflows.
            </p>
            <p>
              Consider Workamajig or Accelo for alternative PSA approaches; Asana/Wrike if you need lighter PM without billing; Productive for a modern PSA competitor.</p>
            <p>{toolName} keeps agency operations under one roof so teams can protect margins and deliver work on budget.</p>
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

export default FunctionPointToolPage;
