import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hubstaff";
const slug = "hubstaff";
const category = "Time Tracking & Workforce";
const shortPitch =
  "Hubstaff is a time tracking and workforce management platform with time logs, screenshots, GPS tracking, scheduling, and payroll integrations.";
const pricingSummary =
  "Tiered pricing per user; higher tiers add screenshots, activity, GPS/geofencing, scheduling, and advanced reporting. Integrations and payroll add-ons may incur costs.";
const officialUrl = "https://hubstaff.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hubstaff.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Time Doctor", slug: "time-doctor" },
  { name: "Toggl Track", slug: "toggl" },
  { name: "Clockify", slug: "clockify" },
  { name: "Harvest", slug: "harvest" },
  { name: "Rippling", slug: "rippling" },
];

const faqs = [
  {
    q: "What is Hubstaff?",
    a: "Hubstaff is a time tracking and workforce management tool with timesheets, screenshots, GPS tracking, scheduling, and reporting.",
  },
  {
    q: "Who is it for?",
    a: "Remote, hybrid, and field teams that need time tracking, location verification, and productivity reporting.",
  },
  {
    q: "Does Hubstaff take screenshots?",
    a: "Yes. Screenshots and activity metrics are available on higher tiers; configure privacy settings to align with policy and local law.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-user tiers with features unlocked at higher levels (screenshots, GPS, scheduling, payroll). Add-ons and integrations may add cost.",
  },
  {
    q: "Is GPS tracking included?",
    a: "GPS and geofencing are available on field-focused tiers; employees must consent and use mobile apps.",
  },
  {
    q: "Does it integrate with payroll?",
    a: "Yes. Exports and payroll integrations exist; check availability and fees by region/provider.",
  },
  {
    q: "Can I manage projects and budgets?",
    a: "Yes. Project budgets, cost tracking, and time limits are available for managers.",
  },
  {
    q: "What about privacy compliance?",
    a: "Use features in line with labor laws and company policy. Communicate clearly with employees about monitoring settings.",
  },
];

function HubstaffToolPage() {
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
        "Hubstaff offers time tracking, screenshots, GPS, scheduling, and payroll integrations. It suits teams needing visibility into time and location, with careful attention to privacy and compliance.",
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
      title: "Time tracking",
      body: "Track time with desktop/mobile apps and detailed timesheets.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Screenshots & activity",
      body: "Optional screenshots and activity metrics for visibility (configurable).",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "GPS & geofencing",
      body: "Location tracking for field teams to verify routes and site presence.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Scheduling",
      body: "Shift planning, attendance, and alerts for missed or late shifts.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Projects & budgets",
      body: "Allocate time and budgets to projects; monitor costs and limits.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & payroll",
      body: "Connect to payroll, invoicing, and PM tools; export data for payouts.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hubstaff review: pricing, features, pros & cons, and alternatives so you can choose the right time tracking and workforce tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-700" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} provides time tracking, location verification, and reporting—use it with clear policies to keep teams informed and compliant.
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
              {toolName} is a time tracking and workforce platform with timesheets, screenshots, GPS tracking, scheduling, budgets, and reporting. It helps managers monitor time and activity across remote and field teams.
            </p>
            <p className="mt-3 text-slate-700">It integrates with payroll and invoicing tools to streamline payouts and billing.</p>
            <p className="mt-3 text-slate-700">Use it when you need visibility into time/location; ensure transparent communication about monitoring features.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Ideal for distributed teams, agencies, and field crews needing tracked time and location.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Remote teams tracking billable/non-billable hours.",
                "Field teams needing GPS/geofencing for site verification.",
                "Agencies monitoring project budgets and time costs.",
                "Managers requiring scheduling and attendance alerts.",
                "Teams wanting optional screenshots/activity with policy consent.",
                "Companies syncing time to payroll or invoicing tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on tracked time, location, scheduling, and reporting.</p>
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
                  Pricing is per user by tier. Higher tiers unlock screenshots/activity, GPS/geofencing, scheduling, and advanced reporting. Payroll/invoicing integrations may carry additional fees.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the tier that includes the monitoring level you need; enable screenshots/GPS only where policy and law allow.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Basic</td>
                    <td className="px-4 py-3">Core time tracking</td>
                    <td className="px-4 py-3">Timesheets, limited reporting, basic permissions</td>
                    <td className="px-4 py-3">Good for light oversight</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams needing monitoring</td>
                    <td className="px-4 py-3">Screenshots/activity, more reporting, budgets</td>
                    <td className="px-4 py-3">Add if visibility is required</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Field/Enterprise</td>
                    <td className="px-4 py-3">Field teams / larger orgs</td>
                    <td className="px-4 py-3">GPS/geofencing, scheduling, advanced controls, SSO</td>
                    <td className="px-4 py-3">Ensure compliance and change management</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for consent and privacy notices; align with local labor laws and consult legal if using monitoring features.
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
                  <li>Comprehensive time tracking with mobile/desktop apps.</li>
                  <li>Optional screenshots and activity for visibility.</li>
                  <li>GPS/geofencing for field verification.</li>
                  <li>Scheduling, budgets, and project tracking.</li>
                  <li>Integrations with payroll, invoicing, and PM tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Monitoring features can raise privacy concerns; use carefully.</li>
                  <li>Higher tiers needed for GPS, screenshots, and advanced reporting.</li>
                  <li>Change management required for employee buy-in.</li>
                  <li>Integration depth varies by payroll/provider.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other time and workforce tools.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other time tracking platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Time Doctor</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/time-doctor">
                  View Time Doctor
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Time Doctor focuses on productivity monitoring; {toolName} combines monitoring with scheduling and GPS. Choose Time Doctor for deeper activity analytics, {toolName} for a mix of field and remote tracking.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Toggl Track</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/toggl">
                  View Toggl Track
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Toggl Track is lightweight without monitoring; {toolName} adds screenshots/GPS and scheduling. Pick Toggl for simple time logging, {toolName} for oversight across remote/field teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need time tracking with optional monitoring and GPS for remote or field teams, and you can implement it with transparent policies.
            </p>
            <p className="mt-3 text-slate-700">If you prefer lightweight tracking without monitoring, consider Toggl or Harvest; for bundled HR/payroll, look at Gusto or Rippling.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A robust time and workforce tool when paired with clear communication, compliance checks, and integration to payroll/invoicing.
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
            <p>Choose {toolName} if you need time tracking with optional monitoring, GPS, and scheduling for remote/field teams.</p>
            <p>Pick Toggl/Harvest for lightweight tracking, or Time Doctor if you need deeper productivity monitoring. For bundled HR/payroll, consider Rippling or Gusto.</p>
            <p>{toolName} works best when paired with clear policies, employee consent, and integrations to payroll or invoicing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default HubstaffToolPage;
