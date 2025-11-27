import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Everhour";
const slug = "everhour";
const category = "Time Tracking & Resource Management";
const shortPitch =
  "Everhour gives product and agency teams lightweight time tracking, budgeting, and resource planning that fits inside tools like Asana, Trello, and ClickUp.";
const pricingSummary =
  "Plans start around $8.50/user/month billed annually; higher tiers add invoicing, approvals, and more advanced reporting for larger teams.";
const officialUrl = "https://everhour.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/everhour.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Harvest", slug: "harvest" },
  { name: "Toggl Track", slug: "toggl" },
  { name: "Clockify", slug: "clockify" },
  { name: "Hubstaff", slug: "hubstaff" },
  { name: "Wrike", slug: "wrike" },
];

const faqs = [
  {
    q: "Is Everhour good for agencies?",
    a: "Yes. Agencies use it to track time, bill clients, and monitor budgets while integrating with project tools like Asana or Trello.",
  },
  {
    q: "Does Everhour integrate with project management tools?",
    a: "It embeds timers and budgets inside Asana, Trello, ClickUp, Jira, Monday, and others, so teams track time where they work.",
  },
  {
    q: "Can I track budgets and costs?",
    a: "Yes. You can set project budgets, hourly rates, and see burn-down reports to keep projects profitable.",
  },
  {
    q: "Does Everhour handle invoicing?",
    a: "Paid tiers include invoicing and expense tracking. You can export to accounting tools if you prefer external billing.",
  },
  {
    q: "Is there approvals or lock features?",
    a: "Timesheet approvals and locking are available on higher tiers to keep records accurate.",
  },
  {
    q: "How granular is reporting?",
    a: "You get dashboards and exports by client, project, user, or task, plus budget and overtime visibility.",
  },
  {
    q: "Does Everhour support PTO and time off?",
    a: "You can track time off and availability, helpful for capacity planning.",
  },
  {
    q: "Is mobile supported?",
    a: "Yes. Everhour has mobile apps and browser extensions for quick time capture.",
  },
];

function EverhourToolPage() {
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
        "Everhour is a flexible time tracking and budgeting tool with deep project-management integrations. It helps teams capture time, track budgets, and invoice without heavy admin.",
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
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Embedded time tracking",
      body: "Track time directly inside Asana, Trello, ClickUp, Jira, and more—no context switching.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-teal-500" />,
      title: "Budgets and billable rates",
      body: "Set budgets, billable/non-billable rates, and track burn to keep projects profitable.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "Resource planning",
      body: "See availability, PTO, and planned hours to forecast workload and capacity.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-500" />,
      title: "Invoicing and expenses",
      body: "Generate invoices from tracked time and expenses or export data to your billing tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Approvals and locks",
      body: "Timesheet approvals and locking prevent late edits and keep records audit-ready.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Reports and dashboards",
      body: "Analyze hours, utilization, and costs by client, project, or team to spot trends quickly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Everhour review for agencies and product teams: pricing, features, pros & cons, and alternatives for time tracking and budgeting."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  Everhour fits into the tools you already use, keeping time tracking, budgets, and invoicing close to the work.
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
              {toolName} is a {category.toLowerCase()} platform for teams that want simple time tracking, budgets, and invoicing inside their project tools.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies, product teams, and services orgs use it to keep budgets on track, measure utilization, and bill accurately without heavy admin.
            </p>
            <p className="mt-3 text-slate-700">
              The integrations-first approach means fewer tabs and more consistent time capture across the team.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams who need accurate time and budget tracking without a heavy ERP.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies billing clients hourly or by project.",
                "Product teams tracking time for capitalized work or internal budgeting.",
                "Consultancies needing approvals and audit-ready timesheets.",
                "Studios that want embedded timers in Asana/Trello/ClickUp.",
                "Teams watching utilization and capacity for hiring plans.",
                "Organizations invoicing regularly and exporting to accounting tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              {toolName} emphasizes embedded tracking, accurate budgets, and easy billing so teams can focus on delivery.
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
                  Pricing starts near $8.50/user/month (annual) and scales with team size and features like approvals and invoicing. Trials are available.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the core plan to validate fit; upgrade if you need approvals, invoicing, or more advanced reporting.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">Small teams needing time + budgets</td>
                    <td className="px-4 py-3">Standard reports, integrations</td>
                    <td className="px-4 py-3">~$8.50/user/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Agencies and services orgs</td>
                    <td className="px-4 py-3">Approvals, invoicing, deeper reporting</td>
                    <td className="px-4 py-3">Higher; billed monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams needing security/compliance</td>
                    <td className="px-4 py-3">Custom onboarding, SLA, advanced controls</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider integration needs, approval workflows, and invoicing volume. Annual billing lowers seat cost; watch for user counts as teams grow.
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
                  <li>Deep integrations with popular project tools.</li>
                  <li>Simple budgeting and billable tracking.</li>
                  <li>Approvals and locks keep data clean.</li>
                  <li>Invoicing and expense tracking built in.</li>
                  <li>Good reporting for utilization and costs.</li>
                  <li>Easy for teams to adopt with extensions and mobile.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a full PSA—limited compared to enterprise ERPs.</li>
                  <li>Advanced approvals/invoicing gated to higher tiers.</li>
                  <li>Reporting may be light for complex financial scenarios.</li>
                  <li>Seat-based pricing can add up for large orgs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with time tracking and lightweight PSA tools. Choose based on integration depth, billing needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">Compare {toolName} to other time tracking and budgeting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Harvest</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/everhour-vs-harvest">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Harvest is great for time and invoicing with strong reports. {toolName} leans into embedded tracking inside project tools and lighter UX.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for deep Asana/Trello/ClickUp integration; choose Harvest if you want a standalone tracker with mature invoicing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Toggl Track</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/everhour-vs-toggl">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Toggl Track is simple and flexible with wide adoption. {toolName} focuses more on project budgets, resource planning, and embedded timers.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if budgets and PM integrations matter; choose Toggl for lightweight time tracking and portability.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want time tracking, budgets, and invoicing inside your project tools, {toolName} is worth it. It reduces context switching and improves adoption.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a full PSA or detailed financials, consider Harvest, Wrike, or ERP-grade tools. For ultra-light tracking, Toggl or Clockify may suffice.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for agencies and product teams wanting accurate time and budget tracking without heavy overhead.
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
              Choose {toolName} if you want embedded time tracking, budgets, and invoicing that work inside your project tools. It keeps data consistent and easy to adopt.
            </p>
            <p>
              Consider Harvest or Toggl if you want standalone trackers; Hubstaff or Wrike if you need deeper workforce management or PSA capabilities.
            </p>
            <p>{toolName} pairs time capture with budget and invoice visibility, helping teams stay profitable without heavy systems.</p>
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
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
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

export default EverhourToolPage;
