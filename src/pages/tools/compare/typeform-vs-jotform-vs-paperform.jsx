import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "typeform vs jotform vs paperform";
const canonical = buildCanonical(
  "/tools/compare/typeform-vs-jotform-vs-paperform"
);

const brandMeta = {
  typeform: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/typeform.com",
  },
  jotform: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/jotform.com",
  },
  paperform: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/paperform.co",
  },
};

const contenders = [
  {
    key: "typeform",
    name: "Typeform",
    blurb:
      "Conversational form builder focused on UX, brand polish, and higher completion rates.",
    url: "https://www.typeform.com",
  },
  {
    key: "jotform",
    name: "Jotform",
    blurb:
      "Power-user online forms with widgets, tables, approvals, and HIPAA-ready options.",
    url: "https://www.jotform.com",
  },
  {
    key: "paperform",
    name: "Paperform",
    blurb:
      "Landing page-style forms with inline logic, payments, bookings, and embeds.",
    url: "https://www.paperform.co",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    typeform: "Brand-first, conversational surveys and lead capture.",
    jotform: "Operations-heavy teams needing widgets/approvals.",
    paperform: "Marketers wanting page-like forms with commerce.",
  },
  {
    label: "Conditional logic",
    typeform: "Inline conversational jumps with friendly pacing.",
    jotform: "Extensive logic, calculations, and approvals.",
    paperform: "Great branching plus calculations inside long-form pages.",
  },
  {
    label: "Design flexibility",
    typeform:
      "Polished templates, video/media blocks, and single-question flow.",
    jotform:
      "Traditional multi-question layout with many widgets and layout options.",
    paperform:
      "Full-page styling with sections, imagery, and product/booking blocks.",
  },
  {
    label: "Payments & commerce",
    typeform: "Stripe/PayPal add-ons for paid surveys and bookings.",
    jotform:
      "Rich payment widgets, invoicing, order forms, and donation forms.",
    paperform:
      "Built-in products, subscriptions, coupons, and service payments.",
  },
  {
    label: "Embeds & integrations",
    typeform:
      "Strong embeds plus integrations with CRMs and marketing automation.",
    jotform:
      "Huge widget library, admin workflows, and native integrations + Zapier.",
    paperform:
      "Embeds, Zapier, webhooks; works well as intake + payment microsites.",
  },
  {
    label: "Analytics & reporting",
    typeform: "Clean basic analytics; relies on integrations for deeper BI.",
    jotform:
      "Advanced reports, Jotform Tables, and dashboards for submissions.",
    paperform:
      "Response summaries; relies on exports/integrations for deep analytics.",
  },
];

const scoreboard = [
  { label: "Design & UX polish", scores: { typeform: 9.5, jotform: 8.0, paperform: 8.7 } },
  { label: "Logic depth", scores: { typeform: 8.4, jotform: 9.4, paperform: 8.6 } },
  { label: "Payments & commerce", scores: { typeform: 8.0, jotform: 9.1, paperform: 9.0 } },
  { label: "Integrations", scores: { typeform: 9.0, jotform: 9.2, paperform: 8.5 } },
  { label: "Team workflows", scores: { typeform: 8.2, jotform: 9.0, paperform: 8.4 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  typeform: avg("typeform"),
  jotform: avg("jotform"),
  paperform: avg("paperform"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Typeform Plus",
    monthly: "From ~$29/mo",
    annual: "Lower on annual billing",
    limits: "Responses with logic, hidden fields, and embeds",
    notes: "Best when completion rate and on-brand UX matter most.",
  },
  {
    plan: "Jotform Bronze/Silver",
    monthly: "From ~$39/mo",
    annual: "Cheaper annually",
    limits: "Higher submission limits, approvals, HIPAA on higher tiers",
    notes: "Great for ops-heavy teams needing admin workflows.",
  },
  {
    plan: "Paperform Essentials",
    monthly: "From ~$29/mo",
    annual: "Lower on annual",
    limits: "Page-style forms with payments and calculations",
    notes: "Ideal for branded service intake and payment links.",
  },
];

const faqs = [
  {
    q: `Is Typeform better than Jotform or Paperform in ${YEAR}?`,
    a: "Typeform wins on brand polish and conversational UX. Jotform wins on admin-heavy workflows and widgets. Paperform wins when you want form plus landing page plus payments in one.",
  },
  {
    q: "Which is best for payments and productized services?",
    a: "Paperform and Jotform have the richest payment widgets for selling products and services. Typeform handles payments via Stripe/PayPal add-ons and works well for paid surveys or bookings.",
  },
  {
    q: "Which has the most advanced logic?",
    a: "Jotform offers the deepest conditional logic, calculations, approvals, and HIPAA options. Paperform and Typeform both cover branching, scoring, and personalized follow-ups for most marketing and ops use cases.",
  },
  {
    q: "Which should marketers pick for lead gen?",
    a: "Choose Typeform for higher completion rates and branded UX. Choose Paperform when you also need a lightweight landing page or sales page. Choose Jotform if you need admin workflows, tables, or industry-specific widgets.",
  },
  {
    q: "Which is easiest for non-technical teams?",
    a: "Typeform and Paperform feel friendlier for marketers and creatives. Jotform is still no-code, but its power-user interface can feel busier for simple campaigns.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const prosCons = {
  typeform: {
    pros: [
      "Conversational UX lifts completion rates",
      "On-brand themes, media blocks, and embeds",
      "Strong CRM and marketing automation integrations",
      "Great for NPS, CSAT, and lead gen funnels",
    ],
    cons: [
      "Response limits on lower tiers",
      "Single-question flow not ideal for long audits",
      "Advanced payments need add-ons",
      "Can feel pricey at scale compared to alternatives",
    ],
  },
  jotform: {
    pros: [
      "Deep widget and template library",
      "Approvals, Jotform Tables, and HIPAA options",
      "Great for ops/legal-heavy workflows and internal forms",
      "Robust payment and PDF generation features",
    ],
    cons: [
      "UI can feel busier for simple forms",
      "Branding polish takes more setup time",
      "Pricing climbs with submissions and storage",
      "Overkill for small campaigns needing just a few forms",
    ],
  },
  paperform: {
    pros: [
      "Form + landing page in one",
      "Built-in products, subscriptions, and coupons",
      "Easy styling, calculations, and conditional sections",
      "Great for service businesses and productized offers",
    ],
    cons: [
      "Smaller widget ecosystem vs Jotform",
      "Page-style forms can get long if unchecked",
      "Collaboration and enterprise features are lighter",
      "Relies more on integrations for advanced analytics",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img
            src={meta.logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function TypeformVsJotformVsPaperformPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Typeform vs Jotform vs Paperform – Which online form builder is best? (${YEAR})`}
        description="In-depth comparison of Typeform, Jotform, and Paperform for marketers, agencies, and operations teams. Compare design, logic, payments, integrations, and pricing."
        canonical={canonical}
        keywords={`${primaryKeyword}, online form builders, surveys, lead capture, quiz builder, payment forms`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Form builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Typeform vs Jotform vs Paperform – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Typeform is the best pick when you want conversational, on-brand
          forms that convert. Jotform is strongest for operations-heavy teams
          needing approvals, widgets, and compliance. Paperform blends form +
          landing page + payments for productized services, client intake, and
          simple checkouts.
        </p>

        {/* Hero verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Typeform</strong> if your priority is brand
              experience, completion rates, and modern conversational flows.
              Choose <strong>Jotform</strong> if you need deep logic, approvals,
              and admin-heavy workflows. Choose <strong>Paperform</strong> if
              you want forms that look and behave like mini landing pages with
              built-in payments.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Palette className="h-5 w-5 text-amber-700" /> Best for brand
              experience
            </div>
            <p className="text-sm text-slate-700">
              Typeform’s one-question flow, typography, and media blocks keep
              respondents engaged and reduce form abandonment for lead gen and
              surveys.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best for complex
              routing
            </div>
            <p className="text-sm text-slate-700">
              Jotform offers deep logic, approvals, tables, and widgets for
              teams with compliance, internal processes, or back-office needs.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-x-auto rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md md:overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
              <a
                href={card.url}
                target="_blank"
                rel="noreferrer"
                className="relative mt-3 inline-flex text-xs font-semibold text-white/90 underline underline-offset-2"
              >
                Visit {card.name}
              </a>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-Side
            Comparison
          </h2>
          <p className="text-sm text-slate-700">
            Use this table to quickly understand how Typeform, Jotform, and
            Paperform differ across design, logic, payments, and workflows.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
                  <th className="px-4 py-3">Paperform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.typeform}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.jotform}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.paperform}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and based on typical marketing, ops, and
            service-business use cases. Your stack, volume, and industry may
            shift the ideal choice.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
                  <th className="px-4 py-3">Paperform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const winnerKey = entries.sort((a, b) => b[1] - a[1])[0][0];
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/40"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "typeform"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.typeform}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "jotform"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.jotform}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "paperform"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.paperform}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-amber-50/70">
                  <th className="bg-amber-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.typeform}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.jotform}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.paperform}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & Cons cards */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(prosCons).map(([key, value]) => (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <LogoBadge
                  name={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-emerald-700">Pros</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-rose-700">Cons</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                  {value.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* Pricing snapshot */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-amber-600" /> Pricing
            snapshot
          </h2>
          <p className="text-sm text-slate-700">
            Pricing changes fairly often, but this gives you a directional sense
            of how the main plans compare. Always double-check current limits
            and overage policies on the vendor websites.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shared Pros/Cons component (global summary) */}
        <ProsConsSection contenders={contenders} prosCons={prosCons} />

        {/* FAQs */}
        <section className="mt-10 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-amber-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-sky-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
