import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  PenTool,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "tally vs typeform vs jotform";
const canonical = buildCanonical("/tools/compare/tally-vs-typeform-vs-jotform");

const brandMeta = {
  tally: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/tally.so",
  },
  typeform: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "/assets/tool-logos/typeform.svg",
  },
  jotform: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/jotform.com",
  },
};

const contenders = [
  {
    key: "tally",
    name: "Tally",
    blurb: "Notion-like editor with a very generous free tier for modern forms.",
    url: "https://www.tally.so",
  },
  {
    key: "typeform",
    name: "Typeform",
    blurb: "Conversational, on-brand forms that feel like a dialogue, not a survey.",
    url: "https://www.typeform.com",
  },
  {
    key: "jotform",
    name: "Jotform",
    blurb: "Power-user form builder with widgets, approvals, and detailed workflows.",
    url: "https://www.jotform.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    tally: "Startups/creators wanting fast, low-cost forms.",
    typeform: "Brand-first lead gen and surveys.",
    jotform: "Ops-heavy teams needing widgets/approvals.",
  },
  {
    label: "Logic & personalization",
    tally: "Solid branching, hidden fields, and calculators.",
    typeform: "Smooth conversational logic and hidden fields.",
    jotform: "Deep logic, calculations, approvals, and routing.",
  },
  {
    label: "Design & UX",
    tally: "Notion-like blocks with simple branding and embeds.",
    typeform: "Polished, single-question flow with strong brand feel.",
    jotform: "Traditional multi-field forms with many widgets and layouts.",
  },
  {
    label: "Payments",
    tally: "Payments on paid plans; simple, Stripe-focused setup.",
    typeform: "Stripe/PayPal add-ons for paid surveys/booking.",
    jotform: "Rich payment widgets, invoices, and order forms.",
  },
  {
    label: "Pricing feel",
    tally: "Most generous free tier; low-cost Pro.",
    typeform: "Freemium; response-based pricing.",
    jotform: "Priced by submissions/storage; higher for advanced.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { tally: 9.4, typeform: 9.0, jotform: 8.4 } },
  { label: "Design & UX", scores: { tally: 8.8, typeform: 9.5, jotform: 8.0 } },
  { label: "Logic depth", scores: { tally: 8.4, typeform: 8.5, jotform: 9.4 } },
  {
    label: "Payments & widgets",
    scores: { tally: 8.5, typeform: 8.1, jotform: 9.3 },
  },
  { label: "Value", scores: { tally: 9.5, typeform: 8.2, jotform: 8.1 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  tally: avg("tally"),
  typeform: avg("typeform"),
  jotform: avg("jotform"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Tally Pro",
    monthly: "From ~US$29/mo",
    annual: "Lower on annual",
    limits: "Removes branding, adds payments and advanced logic",
    notes: "Best value if you want low-cost forms with payments and better automation.",
  },
  {
    plan: "Typeform Plus",
    monthly: "From ~US$29/mo",
    annual: "Lower on annual",
    limits: "Responses, logic, hidden fields, brand kits",
    notes: "Great for branded lead capture, NPS, and surveys embedded on landing pages.",
  },
  {
    plan: "Jotform Bronze/Silver",
    monthly: "From ~US$39/mo",
    annual: "Lower on annual",
    limits: "Higher submissions, widgets, storage, approvals",
    notes: "Best for operations-heavy workflows, approvals, and payment-heavy flows.",
  },
];

const faqs = [
  {
    q: `Is Tally better than Typeform or Jotform in ${YEAR}?`,
    a: "Tally wins for speed, simplicity, and the best free plan. Typeform wins for branded, conversational forms that improve completion rates. Jotform wins for widgets, approvals, and admin-heavy workflows.",
  },
  {
    q: "Which is best for brand-forward lead gen?",
    a: "Typeform. Its one-question flow, polished animations, and brand kits make it ideal for high-intent lead capture, product quizzes, and research forms on marketing pages.",
  },
  {
    q: "Which is best for complex workflows?",
    a: "Jotform. It offers deep logic, calculations, approvals, and specialized widgets for HR, finance, medical, education, and operations use-cases.",
  },
  {
    q: "Which is most affordable?",
    a: "Tally. The free plan is generous with unlimited forms and responses for many use-cases, and Pro is low-cost compared to Typeform and Jotform at scale.",
  },
  {
    q: "Which is easiest for a small startup?",
    a: "Start with Tally for quick forms that just work. Add Typeform when you need premium branded experiences, or Jotform when operations workflows become more complex.",
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
  tally: {
    pros: [
      "Most generous free plan for unlimited forms",
      "Very fast to build Notion-like forms and quizzes",
      "Good branching, hidden fields, and calculations",
      "Affordable Pro with payments and advanced features",
      "Great for startups and creators testing ideas quickly",
    ],
    cons: [
      "Reporting and dashboards are relatively light",
      "Brand controls are simpler than Typeform",
      "Deeper integrations often rely on Zapier/Make",
    ],
  },
  typeform: {
    pros: [
      "Best branded and conversational experience",
      "One-question flow keeps respondents engaged",
      "Strong logic, hidden fields, and piping",
      "Great embeds, CRM routing, and marketing use-cases",
    ],
    cons: [
      "Response caps on lower tiers can be limiting",
      "Single-question flow not ideal for long audits or admin forms",
      "Payments and some integrations via add-ons and higher plans",
    ],
  },
  jotform: {
    pros: [
      "Rich widgets, approvals, and conditional logic",
      "Payments, invoices, and order forms are first-class",
      "Great for operations, HR, finance, and education",
      "Good PDF and document generation workflows",
    ],
    cons: [
      "UI can feel busy for simple marketing forms",
      "Pricing climbs with submissions, storage, and users",
      "Branding polish takes more setup versus Typeform",
    ],
  },
};

const featureBullets = {
  questionTypes: [
    "Tally: Covers the essentials—text, choice, rating, file upload, and more—inside a Notion-like editor. Great for feedback, waitlists, quizzes, and lightweight onboarding.",
    "Typeform: Strong focus on survey and quiz patterns, with question types that feel conversational for respondents.",
    "Jotform: Largest widget library, including signatures, PDF uploads, appointment scheduling, HIPAA-focused fields (on specific plans), and more.",
  ],
  designBranding: [
    "Tally: Clean, minimal forms that look native to modern SaaS and Notion-style brands. Custom CSS is possible with embeds in your own site.",
    "Typeform: The strongest visual experience out of the box, with brand kits, fonts, and backgrounds tailored for marketing and product teams.",
    "Jotform: Highly configurable layouts with themes and widgets, but can look more like a traditional form if not carefully styled.",
  ],
  logicWorkflows: [
    "Tally: Good conditional logic, calculators, and redirect flows—enough for most startup funnels and feedback loops.",
    "Typeform: Smooth logic for personalized questions, outcome-based quizzes, and routing to different thank-you screens.",
    "Jotform: Deepest overall—multi-step approvals, complex calculations, routing, and status tracking for internal processes.",
  ],
  integrations: [
    "Tally: Native integrations with popular tools plus webhooks; often extended via Zapier, Make, or native Notion-style workflows.",
    "Typeform: Strong marketing stack integrations (HubSpot, Salesforce, Slack, Google Sheets, email platforms) focused on leads and research.",
    "Jotform: Integrations skew towards operations: CRMs, payment gateways, cloud storage, and specialized line-of-business tools.",
  ],
  dataCompliance: [
    "Tally: Good for general marketing and product feedback; for strict compliance or healthcare, you will want to confirm data requirements.",
    "Typeform: Popular for global brands; supports good data controls and privacy options, especially for survey use-cases.",
    "Jotform: Strong positioning around approvals and regulated workflows; higher plans focus on compliance-heavy teams.",
  ],
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

export default function TallyVsTypeformVsJotformPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Tally vs Typeform vs Jotform – Which to pick? (${YEAR})`}
        description="Deep comparison of Tally, Typeform, and Jotform on design, logic, payments, integrations, pricing, and best fit for marketers, startups, and operations teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, form builders, survey tools, typeform alternative, jotform alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Form builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Tally vs Typeform vs Jotform – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Tally is the fastest and most affordable option for many creators and startups. Typeform
          is the polished, brand-first choice for marketing and research. Jotform is the
          operations-grade workhorse with deep widgets, approvals, and payments. This breakdown
          shows how they compare on UX, logic, payments, integrations, and pricing so you can pick
          the right form stack for your funnel and internal processes.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Tally</strong> for speed, simplicity, and the best free plan. Choose{" "}
              <strong>Typeform</strong> for brand-forward lead capture, quizzes, and surveys.
              Choose <strong>Jotform</strong> when you need approvals, document-style workflows,
              and payment-heavy forms.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-indigo-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <PenTool className="h-5 w-5 text-amber-700" /> Best for branded UX
            </div>
            <p className="text-sm text-slate-700">
              Typeform’s conversational, one-question flow keeps respondents engaged and lifts
              completion rates for brand-sensitive lead gen and surveys.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best for complex workflows
            </div>
            <p className="text-sm text-slate-700">
              Jotform’s widgets, approvals, and calculations handle operational forms, HR/finance
              intake, and multi-step approvals better than the others.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-indigo-700" /> Best free option
            </div>
            <p className="text-sm text-slate-700">
              Tally’s free tier covers many startup and creator use-cases before you ever need to
              upgrade, making it ideal for early-stage testing.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
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
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Tally</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.tally}</td>
                    <td className="px-4 py-3 text-slate-700">{row.typeform}</td>
                    <td className="px-4 py-3 text-slate-700">{row.jotform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Tally</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
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
                          winnerKey === "tally"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.tally}
                      </td>
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
                    </tr>
                  );
                })}
                <tr className="bg-indigo-50/70">
                  <th className="bg-indigo-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.tally}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.typeform}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.jotform}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison sections */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Tally, Typeform, and Jotform behave in real funnels
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Question types & templates</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.questionTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Design, branding & UX</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.designBranding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Logic, workflows & approvals</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.logicWorkflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Integrations & automation</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.integrations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Data, privacy & compliance</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.dataCompliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pros & cons cards */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pros & cons at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
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
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-indigo-600" />
            Pricing snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            Pricing and feature limits evolve frequently. In practice,{" "}
            <strong>Tally</strong> tends to stay cheapest for most small teams.{" "}
            <strong>Typeform</strong> becomes a brand/experience investment, and{" "}
            <strong>Jotform</strong> becomes a workflow/operations investment. Model costs based
            on expected responses, submissions, and seats—not just headline monthly pricing.
          </p>
        </section>

        {/* Shared ProsConsSection component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Tally:</strong> Feels like typing in Notion. Most people can build a form in a
              few minutes without reading docs. Perfect for founders, PMs, and marketers who want
              frictionless setup.
            </li>
            <li>
              <strong>Typeform:</strong> The builder is intuitive once you understand logic and
              flows. Marketers and research teams typically become comfortable within a day of
              usage.
            </li>
            <li>
              <strong>Jotform:</strong> Most powerful but also the densest. Ops, HR, and admin
              teams get the most value; simple marketing forms may feel overkill if you do not need
              the workflows.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Waitlists, feedback, and simple funnels:</strong>{" "}
              <span className="font-semibold">Tally</span> wins—fast to set up, embeds nicely in
              modern sites, and the free plan is usually enough.
            </li>
            <li>
              <strong>Brand-forward lead capture & quizzes:</strong>{" "}
              <span className="font-semibold">Typeform</span> wins—its UX feels premium and can
              meaningfully improve completion rates on paid traffic.
            </li>
            <li>
              <strong>Internal approvals, HR/finance forms, and intake:</strong>{" "}
              <span className="font-semibold">Jotform</span> wins—approvals, PDFs, and widgets map
              well to existing admin processes.
            </li>
            <li>
              <strong>Paid surveys, bookings, and order forms:</strong>{" "}
              <span className="font-semibold">Jotform</span> is strongest when payments, invoices,
              and integrations are central; <span className="font-semibold">Typeform</span> works
              well when the experience matters more than workflow complexity.
            </li>
            <li>
              <strong>Bootstrapped SaaS or agency landing pages:</strong>{" "}
              <span className="font-semibold">Tally</span> or{" "}
              <span className="font-semibold">Typeform</span> depending on budget and brand needs—
              start with Tally, upgrade to Typeform when the conversion gains justify it.
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Tally:</strong> Ideal default for startups, creators, and agencies that want
              fast, capable forms without worrying about per-response pricing from day one. Use it
              for feedback, waitlists, simple onboarding, and lightweight product research.
            </li>
            <li>
              <strong>Typeform:</strong> Best when your form is part of the brand experience and
              you care about completion rates on paid or warm traffic. Use it for lead gen, product
              marketing surveys, quizzes, and customer research that sits close to your funnel.
            </li>
            <li>
              <strong>Jotform:</strong> The right choice when forms are essentially internal
              applications—approvals, payments, intake, and structured workflows. Use it when ops,
              HR, or finance are the main stakeholders rather than growth marketing.
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-indigo-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">+</span>
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
