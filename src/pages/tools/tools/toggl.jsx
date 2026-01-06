import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Toggl";
const slug = "toggl";
const category = "Time tracking";
const shortPitch = "Toggl is a lightweight time tracker with projects, clients, and reports, built to make logging time fast across devices.";
const pricingSummary =
  "Free and paid tiers. Upgrades add billable rates, team management, reports, timesheets, and integrations; pricing scales by seats.";
const officialUrl = "https://toggl.com/track";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/toggl.com",
  gradient: "from-purple-500 via-pink-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.24)]",
};

const alternatives = [
  { name: "Time Doctor", slug: "time-doctor" },
  { name: "Harvest", slug: "harvest" },
  { name: "Clockify", slug: "clockify" },
  { name: "Hubstaff", slug: "hubstaff" },
  { name: "RescueTime", slug: "rescuetime" },
];

const faqs = [
  {
    q: "What is Toggl?",
    a: "Toggl is a time tracking tool for individuals and teams, offering project/client tagging, billable rates, and reporting.",
  },
  {
    q: "Who is it for?",
    a: "Freelancers, agencies, and teams that want quick time logging without intrusive monitoring.",
  },
  {
    q: "Does it have monitoring?",
    a: "Toggl focuses on logging and reporting; it does not emphasize screenshots or heavy monitoring like some alternatives.",
  },
  {
    q: "How is pricing structured?",
    a: "Free for basics; paid tiers add billable rates, project/team management, timesheets, and deeper reporting.",
  },
  {
    q: "Is it good for billing?",
    a: "Yes. Billable rates and reports help with invoicing; verify exports match client requirements.",
  },
  {
    q: "Does it integrate?",
    a: "Integrates with PM and productivity tools plus calendar imports; check coverage for your stack.",
  },
  {
    q: "Are mobile apps available?",
    a: "Yes. Web, desktop, and mobile apps keep time in sync across devices.",
  },
  {
    q: "Can it track offline?",
    a: "Offline tracking is supported with later sync; confirm behavior for your workflows.",
  },
];

function TogglToolPage() {
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
        "Toggl is a lightweight time tracker focused on fast logging and clear reports. Ideal for teams that want billing-friendly time data without heavy monitoring.",
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
      title: "Fast time logging",
      body: "Start/stop timers with project and client tags across devices.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Billable rates",
      body: "Set billable rates per project/client to streamline invoicing.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Reports & timesheets",
      body: "Generate reports for clients and internal reviews; export for billing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Lightweight approach",
      body: "No heavy monitoring; focuses on trust-based tracking.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cross-platform",
      body: "Web, desktop, mobile, and extensions keep time synced.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect to PM tools, calendars, and automation; calendar imports reduce missed time.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Toggl review: pricing, features, pros & cons, and alternatives so you can choose the right time tracker for your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} keeps time tracking simple and fast—use it for billing and productivity insights without heavy monitoring overhead.
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
              {toolName} is a time tracking platform focused on easy logging, project/client organization, and reporting. It avoids heavy monitoring and emphasizes trust and speed.
            </p>
            <p className="mt-3 text-slate-700">
              Ideal for teams that want time data for billing and productivity without screenshots. If you need monitoring or GPS, consider other tools.
            </p>
            <p className="mt-3 text-slate-700">Set up projects, tags, and rates early so reports stay clean and invoice-ready.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that value quick, low-friction time tracking and billing-friendly reports.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies billing by project/client hours.",
                "Freelancers needing simple, accurate time logs.",
                "Teams wanting trust-based tracking without screenshots.",
                "Managers needing visibility into project time and rates.",
                "Teams syncing time to PM tools and calendars.",
                "Organizations needing offline support for travel/field work.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
              {toolName} focuses on fast logging, billable rates, reporting, trust-based tracking, cross-platform apps, and integrations.
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
                  {toolName} has free and paid tiers. Paid plans add billable rates, team management, timesheets, and deeper reporting. Seat-based pricing; pick features that match your billing and compliance needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test; upgrade when you need billable rates, team permissions, and stronger reports for invoicing.</p>
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
                    <td className="px-4 py-3">Individuals/light use</td>
                    <td className="px-4 py-3">Core timers, projects/clients</td>
                    <td className="px-4 py-3">Great for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Billable rates, reports, team management</td>
                    <td className="px-4 py-3">Good default tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Timesheets, approvals, deeper reporting</td>
                    <td className="px-4 py-3">Use if you need controls/compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Define projects/tags early to keep data clean. If you require monitoring/screenshots, consider other tools; Toggl is best for lightweight, trust-based tracking.
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
                  <li>Fast, low-friction time tracking.</li>
                  <li>Billable rates and clean reporting.</li>
                  <li>Cross-platform apps and extensions.</li>
                  <li>Calendar imports reduce missed time.</li>
                  <li>Trust-based tracking without heavy monitoring.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No screenshots or deep monitoring (pro for some teams).</li>
                  <li>Limited advanced project management features.</li>
                  <li>Seat costs can add up at scale.</li>
                  <li>Approvals/workflow controls lighter than enterprise tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other time tracking tools to match your monitoring needs, billing flows, and culture fit.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other trackers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Time Doctor</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/time-doctor">
                  View Time Doctor
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Time Doctor includes monitoring and screenshots; {toolName} keeps tracking lightweight. Choose based on how much oversight you need.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Harvest</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/harvest">
                  View Harvest
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Harvest offers invoicing and expenses; {toolName} focuses on time and reports. Pick Harvest for built-in invoices, {toolName} for speed and simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want fast, trust-based time tracking with billable rates and clear reports, without intrusive monitoring.
            </p>
            <p className="mt-3 text-slate-700">
              If you need screenshots, GPS, or deep approvals, evaluate more robust tools. Set naming/rate conventions early to keep data clean.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Excellent for lightweight, billing-friendly tracking—best with clear project/tag setup.
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
              Choose {toolName} if you want fast, low-friction time tracking for billing and productivity without heavy monitoring.
            </p>
            <p>
              Consider Time Doctor for monitoring or Harvest for built-in invoicing; use {toolName} when simplicity and speed are your priorities.
            </p>
            <p>{toolName} makes time capture easy—set clear project/tag conventions to keep reports reliable.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TogglToolPage;
