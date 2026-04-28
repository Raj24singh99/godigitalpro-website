import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Time Doctor";
const slug = "time-doctor";
const category = "Time tracking";
const shortPitch = "Time Doctor tracks time, activity, and productivity for remote teams with screenshots, alerts, and reporting.";
const pricingSummary =
  "Seat-based plans. Higher tiers add screenshots, productivity scores, advanced reporting, payroll, and integrations; pricing scales with team size.";
const officialUrl = "https://www.timedoctor.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/timedoctor.com",
  gradient: "from-sky-500 via-indigo-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Toggl", slug: "toggl" },
  { name: "Harvest", slug: "harvest" },
  { name: "Clockify", slug: "clockify" },
  { name: "Hubstaff", slug: "hubstaff" },
  { name: "RescueTime", slug: "rescuetime" },
];

const faqs = [
  {
    q: "What is Time Doctor?",
    a: "Time Doctor is a time tracking and productivity tool for remote teams, offering activity monitoring, screenshots, and reporting.",
  },
  {
    q: "Who is it for?",
    a: "Distributed teams, agencies, and operations leaders who need visibility into time usage, client billing, and productivity trends.",
  },
  {
    q: "Does it take screenshots?",
    a: "Yes, on eligible plans. Screenshots and activity metrics can be enabled with privacy controls depending on policy.",
  },
  {
    q: "How is pricing structured?",
    a: "Seat-based plans with feature differences. Higher tiers add screenshots, deeper reporting, payroll, and integrations.",
  },
  {
    q: "Is it good for billing?",
    a: "It can support billing and payroll with time logs; always validate data accuracy and client requirements.",
  },
  {
    q: "What about privacy?",
    a: "Configure policies transparently; obtain consent where required and disable monitoring features when inappropriate.",
  },
  {
    q: "Does it integrate?",
    a: "Yes. Integrations with PM, CRM, and payroll tools exist; check your stack for coverage.",
  },
  {
    q: "Does it work offline?",
    a: "Offline tracking is supported with sync later; confirm behavior and permissions in your environment.",
  },
];

function TimeDoctorToolPage() {
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
        "Time Doctor provides time tracking, activity monitoring, and reporting for remote teams. Useful for accountability and billing, but requires clear policies and trust practices.",
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
      title: "Time & activity tracking",
      body: "Track time spent per task/client with activity metrics and optional screenshots.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Productivity alerts",
      body: "Idle and distraction alerts to keep teams focused within agreed policies.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Reporting & dashboards",
      body: "Project, client, and team reports for utilization and billing insights.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Privacy controls",
      body: "Configure screenshots and monitoring by policy; ensure transparency and consent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Offline support",
      body: "Track time offline with sync later so field or travel work is captured.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & payroll",
      body: "Connect to PM, calendars, and payroll tools; export logs for invoicing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Time Doctor review: pricing, features, pros & cons, and alternatives so you can assess time tracking and monitoring for remote teams."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  {toolName} tracks time and activity—use it for accountability and billing, with transparent policies and privacy safeguards.
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
              {toolName} is a time tracking and productivity platform for remote and hybrid teams. It records time by task/client, can capture screenshots and activity metrics, and provides reports for billing and utilization.
            </p>
            <p className="mt-3 text-slate-700">
              Use it with clear policies and consent. Decide which monitoring features are appropriate, and ensure data is accurate before billing clients or paying payroll.
            </p>
            <p className="mt-3 text-slate-700">Integrate with your PM and payroll tools so time data flows into invoicing and analysis.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for distributed teams that need visibility into time, activity, and billing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies billing clients by hours/tasks.",
                "Ops teams monitoring utilization across remote staff.",
                "Managers needing distraction alerts within policy.",
                "Finance teams syncing time to payroll and invoicing.",
                "Teams wanting offline time capture for field work.",
                "Organizations requiring optional screenshots for QA/compliance.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on time tracking, activity monitoring, alerts, reporting, privacy controls, and integrations.
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
                  {toolName} uses seat-based pricing with feature differences. Higher tiers add screenshots, advanced reporting, productivity scores, payroll, and integrations. Costs scale with team size and required controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose the first tier that includes the monitoring/reporting you need; avoid over-buying screenshots if they’re not necessary for policy or clients.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Simple tracking</td>
                    <td className="px-4 py-3">Time tracking, basic reports</td>
                    <td className="px-4 py-3">Good for light oversight</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Teams needing monitoring</td>
                    <td className="px-4 py-3">Screenshots, activity, alerts</td>
                    <td className="px-4 py-3">Popular for remote teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Advanced reporting/payroll</td>
                    <td className="px-4 py-3">Custom reporting, payroll, integrations</td>
                    <td className="px-4 py-3">Use if you need deeper analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Align pricing with policy: only enable monitoring features you truly need. Communicate transparently with teams and clients, and validate data before billing.
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
                  <li>Comprehensive time tracking with monitoring options.</li>
                  <li>Productivity alerts and distraction control.</li>
                  <li>Reporting for clients, teams, and utilization.</li>
                  <li>Offline tracking for field or travel work.</li>
                  <li>Integrations for payroll and PM tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Monitoring features can be intrusive without clear policy.</li>
                  <li>Seat costs accumulate for large teams.</li>
                  <li>Setup and change management are required for adoption.</li>
                  <li>Data accuracy depends on user habits and configuration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other time tracking tools to match your monitoring needs, budget, and culture fit.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares to other time tracking options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Toggl</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/toggl">
                  View Toggl
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Toggl is lighter and focuses on time logging; {toolName} adds monitoring and screenshots. Choose based on how much oversight and compliance you need.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hubstaff</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hubstaff">
                  View Hubstaff
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hubstaff offers GPS and job sites; {toolName} focuses on desktop time/productivity. Pick based on whether field tracking or desktop monitoring matters more.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need time tracking plus monitoring for remote teams and can implement it with clear policies, consent, and data checks.
            </p>
            <p className="mt-3 text-slate-700">
              If your culture favors lightweight tracking, consider tools without screenshots. Always validate data before billing or payroll.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Powerful for visibility and billing—best when paired with transparent communication and careful configuration.
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
              Choose {toolName} if you need time tracking with monitoring for remote teams and can manage policy, privacy, and data accuracy.
            </p>
            <p>
              Consider Toggl for lightweight tracking or Hubstaff for GPS/job sites; use {toolName} when you require monitoring and detailed reporting.
            </p>
            <p>{toolName} can improve accountability and billing—implement with transparency to keep trust and compliance.</p>
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

export default TimeDoctorToolPage;
