import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Clockify";
const slug = "clockify";
const category = "Time Tracking";
const shortPitch = "Clockify is a time tracking and timesheet platform for teams to log work, track billable hours, and report on productivity.";
const pricingSummary =
  "Free tier for core tracking; paid plans add invoicing, approvals, advanced reports, and admin controls. Pricing scales by user with monthly and annual options.";
const officialUrl = "https://clockify.me";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clockify.me",
  gradient: "from-blue-500 via-indigo-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Toggl Track", slug: "toggl" },
  { name: "Harvest", slug: "harvest" },
  { name: "Time Doctor", slug: "time-doctor" },
  { name: "Everhour", slug: "everhour" },
  { name: "nTask", slug: "ntask" },
];

const faqs = [
  {
    q: "What is Clockify?",
    a: "Clockify is a time tracking platform with timers, timesheets, and reporting to track billable and non-billable work across projects.",
  },
  {
    q: "Who is it for?",
    a: "Agencies, service teams, and companies that need timesheets, billing, and productivity reporting for hourly or project work.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan covers unlimited users with core tracking. Paid plans add approvals, invoicing, budgets, and more admin controls.",
  },
  {
    q: "Does it handle approvals?",
    a: "Yes. Paid tiers add timesheet approvals, locking, and audit controls to keep records consistent.",
  },
  {
    q: "Can I invoice clients from Clockify?",
    a: "Paid plans support invoicing based on tracked time and billable rates. You can export reports for accounting tools.",
  },
  {
    q: "Does Clockify integrate with other apps?",
    a: "Yes. Integrations cover project tools, calendars, and browsers, plus browser extensions for fast tracking.",
  },
  {
    q: "Are there mobile and desktop apps?",
    a: "Clockify offers web, mobile, and desktop apps along with browser extensions for quick timers.",
  },
  {
    q: "How do permissions work?",
    a: "Admins can control workspaces, manage rates, lock timesheets, and enforce approvals on paid plans.",
  },
];

function ClockifyToolPage() {
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
        "Clockify provides time tracking, timesheets, and reporting with a generous free tier. It’s well-suited for teams that need billing and approvals without heavy implementation.",
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
      title: "Timers & timesheets",
      body: "Track time with live timers or fill weekly timesheets for projects and tasks.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Projects & budgets",
      body: "Set billable rates, track budgets, and monitor project costs by client or task.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Reporting",
      body: "Generate reports by user, project, client, or tag to understand utilization and billing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Approvals & locks",
      body: "Lock timesheets and set approvals on paid tiers to keep records clean.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect with project tools and use browser extensions for quick-start timers.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Invoicing & exports",
      body: "Invoice from tracked time or export data to accounting and payroll tools.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Clockify review: pricing, features, pros & cons, and alternatives so you can decide if it fits your time tracking needs."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} helps teams track time, manage billable hours, and report on work with minimal setup and a generous free plan.
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
              {toolName} is a time tracking and timesheet platform. Teams can start timers, log hours, and allocate time to projects for billing, payroll, and productivity insights.
            </p>
            <p className="mt-3 text-slate-700">It works across web, mobile, and desktop, making it easy for distributed teams to capture time consistently.</p>
            <p className="mt-3 text-slate-700">Use reports and approvals to maintain compliance, accurate billing, and reliable utilization metrics.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for service teams and companies that need reliable time tracking for billing and accountability.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies billing clients by the hour or project.",
                "Consulting and professional services teams needing approvals.",
                "Product teams tracking time for cost allocation.",
                "Remote teams needing simple timers across devices.",
                "Managers looking for utilization and budget reports.",
                "Finance teams exporting time data to payroll and invoicing tools.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on simple tracking, clear reporting, and billing readiness.</p>
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
                  {toolName} offers a free plan with core tracking and unlimited users. Paid plans add invoicing, approvals, admin controls, reminders, and advanced reports with per-user pricing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade when you need approvals, rate management, or native invoicing.</p>
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
                    <td className="px-4 py-3">Small teams/startups</td>
                    <td className="px-4 py-3">Unlimited users, basic tracking</td>
                    <td className="px-4 py-3">Great starter option</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard/Pro</td>
                    <td className="px-4 py-3">Teams needing controls</td>
                    <td className="px-4 py-3">Approvals, reminders, timesheet locking</td>
                    <td className="px-4 py-3">Best for billing accuracy</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large organizations</td>
                    <td className="px-4 py-3">SSO, advanced admin, dedicated support</td>
                    <td className="px-4 py-3">Choose if compliance is key</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Ensure teams log time consistently and audit regularly; reporting accuracy depends on good inputs.</p>
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
                  <li>Generous free plan with unlimited users.</li>
                  <li>Simple timers and timesheets across devices.</li>
                  <li>Approvals and locks for control on paid plans.</li>
                  <li>Reports for billing, payroll, and utilization.</li>
                  <li>Integrations and browser extensions ease adoption.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Accuracy depends on user adoption and discipline.</li>
                  <li>Advanced features require paid tiers.</li>
                  <li>Not a full project management suite on its own.</li>
                  <li>Reports may need exports to BI tools for deep analysis.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other time trackers to find the right mix of reporting, approvals, and integrations.
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
            <p className="text-slate-700">See how {toolName} compares with other time tracking platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Toggl Track</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/toggl">
                  View Toggl Track
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Toggl is known for its UX and reporting; {toolName} offers a strong free tier and approvals on paid plans. Choose based on budget and control needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Harvest</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/harvest">
                  View Harvest
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Harvest includes built-in invoicing and expenses; {toolName} focuses on broad access and approvals. Pick Harvest for deeper billing features, {toolName} for adoption and pricing flexibility.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need easy time tracking with solid reporting and approvals, especially if you value a free plan to onboard everyone.
            </p>
            <p className="mt-3 text-slate-700">
              It pays off when teams log time consistently and managers use budgets and approvals to keep data clean. Export or connect to accounting for a full billing stack.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A reliable, low-friction time tracker for teams of all sizes—upgrade when you need governance and invoicing baked in.
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
              Choose {toolName} if you want straightforward time tracking with generous free access and upgrades for approvals and invoicing.
            </p>
            <p>
              Consider Toggl or Harvest if you prefer their UX or billing depth; use {toolName} for wide adoption and controls at a lower cost.
            </p>
            <p>{toolName} keeps teams accountable on time and budgets—ensure consistent logging habits for accurate data.</p>
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

export default ClockifyToolPage;
