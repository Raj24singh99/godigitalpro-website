import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  BarChart2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "typeform vs surveymonkey vs tally";
const canonical = buildCanonical(
  "/tools/compare/typeform-vs-surveymonkey-vs-tally"
);

const brandMeta = {
  typeform: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/typeform.com",
  },
  surveymonkey: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/surveymonkey.com",
  },
  tally: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/tally.so",
  },
};

const contenders = [
  {
    key: "typeform",
    name: "Typeform",
    blurb:
      "Conversational, on-brand forms that improve completion rates for surveys and lead capture.",
    url: "https://www.typeform.com",
  },
  {
    key: "surveymonkey",
    name: "SurveyMonkey",
    blurb:
      "Enterprise survey suite with research panels, quotas, and governance controls.",
    url: "https://www.surveymonkey.com",
  },
  {
    key: "tally",
    name: "Tally",
    blurb:
      "Notion-like form builder with a generous free tier, fast setup, and simple logic.",
    url: "https://www.tally.so",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    typeform: "Branded lead capture, NPS, and customer research.",
    surveymonkey: "Enterprise research, compliance, and advanced analysis.",
    tally: "Startup-friendly forms, freebies, and quick launches.",
  },
  {
    label: "Logic & personalization",
    typeform: "Smooth conditional jumps with hidden fields.",
    surveymonkey: "Advanced logic, quotas, randomization, and targeting.",
    tally: "Solid branching and calculators with a simple UI.",
  },
  {
    label: "Design & UX",
    typeform: "Polished, single-question flow for higher engagement.",
    surveymonkey: "Classic survey layouts; functional over flashy.",
    tally: "Clean Notion-like blocks; brandable with CSS/embeds.",
  },
  {
    label: "Analytics & reporting",
    typeform: "Dashboards + CRM sync for follow-up automations.",
    surveymonkey: "Deep analysis, benchmarks, and team governance.",
    tally: "Lightweight reporting with exports and webhooks.",
  },
  {
    label: "Pricing",
    typeform: "Freemium; paid tiers based on responses and logic.",
    surveymonkey: "Priced for research teams; strong enterprise plans.",
    tally:
      "Generous free tier; low-cost Pro that removes branding and adds features.",
  },
];

const scoreboard = [
  {
    label: "Design & experience",
    scores: { typeform: 9.5, surveymonkey: 7.8, tally: 8.8 },
  },
  {
    label: "Logic & control",
    scores: { typeform: 8.5, surveymonkey: 9.4, tally: 8.3 },
  },
  {
    label: "Analysis & reporting",
    scores: { typeform: 8.7, surveymonkey: 9.3, tally: 7.9 },
  },
  {
    label: "Integrations",
    scores: { typeform: 9.0, surveymonkey: 8.5, tally: 8.4 },
  },
  {
    label: "Value for money",
    scores: { typeform: 8.2, surveymonkey: 7.6, tally: 9.2 },
  },
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
  surveymonkey: avg("surveymonkey"),
  tally: avg("tally"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Typeform Plus",
    monthly: "From ~$29/mo",
    annual: "Lower on annual billing",
    limits: "Logic, hidden fields, brand kits, embeds",
    notes: "Great for marketers needing polished lead capture and surveys.",
  },
  {
    plan: "SurveyMonkey Advantage",
    monthly: "From ~$34/mo",
    annual: "Annual discounts",
    limits: "Quotas, benchmarks, advanced analytics",
    notes: "Best for research teams and compliance-heavy organizations.",
  },
  {
    plan: "Tally Pro",
    monthly: "From ~$29/mo",
    annual: "Lower on annual",
    limits: "Removes branding, payments, advanced logic",
    notes: "Strong value with a huge free tier for startups and creators.",
  },
];

const faqs = [
  {
    q: `Is Typeform better than SurveyMonkey or Tally in ${YEAR}?`,
    a: "Typeform excels at branded experiences and completion rates. SurveyMonkey leads for research depth, quotas, and governance. Tally is the value pick with a generous free tier and quick setup.",
  },
  {
    q: "Which is best for enterprise research?",
    a: "SurveyMonkey. It offers benchmarks, quotas, research panels, compliance controls, and enterprise governance that research-heavy or regulated teams need.",
  },
  {
    q: "Which is most affordable?",
    a: "Tally has the most generous free plan and a low-cost Pro tier. Typeform has a useful free tier for light usage, while SurveyMonkey is priced more for professional research teams.",
  },
  {
    q: "Which integrates best with marketing stacks?",
    a: "Typeform integrates tightly with CRMs, marketing automation tools, and analytics. SurveyMonkey offers robust exports and enterprise connectors. Tally covers popular zaps, webhooks, and modern SaaS tools.",
  },
  {
    q: "Which is easiest for non-technical teams?",
    a: "Tally and Typeform both feel very friendly for non-technical marketers and founders. SurveyMonkey is still approachable, but its research-focused options can feel heavier for simple campaigns.",
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
      "Highest polish and conversational UX",
      "Good lead routing and hidden fields",
      "Strong embeds, brand kits, and CRM integrations",
      "Great for NPS, CSAT, and marketing funnels",
    ],
    cons: [
      "Response caps on lower tiers",
      "Single-question flow not ideal for long audits",
      "Payments are add-ons via Stripe/PayPal",
      "Can feel pricey at high volume",
    ],
  },
  surveymonkey: {
    pros: [
      "Enterprise analytics and industry benchmarks",
      "Research panels, quotas, and advanced targeting",
      "Governance, compliance, and collaboration controls",
      "Strong fit for research and insights teams",
    ],
    cons: [
      "UI is more utilitarian and less brand-first",
      "Priced higher for solo creators and small teams",
      "Branding is less flexible than Typeform or Tally",
      "Can be overkill for simple feedback forms",
    ],
  },
  tally: {
    pros: [
      "Generous free plan with unlimited forms and responses",
      "Fast to build in a Notion-like editor",
      "Affordable Pro removes branding and adds payments/logic",
      "Great value for startups, creators, and side projects",
    ],
    cons: [
      "Smaller native integration set vs legacy players",
      "Reporting is lighter; relies on exports and tools like Notion",
      "Advanced brand controls may need CSS tweaks",
      "Fewer enterprise-focused governance features",
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

export default function TypeformVsSurveyMonkeyVsTallyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Typeform vs SurveyMonkey vs Tally – Which to pick? (${YEAR})`}
        description="In-depth comparison of Typeform, SurveyMonkey, and Tally for surveys, feedback, and lead capture. See how they compare on UX, logic, analytics, integrations, and pricing for marketers and research teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, survey tools, form builders, online surveys, customer feedback`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Survey & form tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Typeform vs SurveyMonkey vs Tally – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Typeform leads on design and completion rate. SurveyMonkey leads for
          enterprise-grade research, quotas, and analytics. Tally is the fast,
          affordable pick with a generous free tier. Here’s how they stack up on
          logic, UX, analytics, integrations, and price so you can choose the
          right fit for your team.
        </p>

        {/* Hero verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Typeform</strong> for on-brand lead capture and
              customer research with high completion rates. Choose{" "}
              <strong>SurveyMonkey</strong> when analytics depth, quotas,
              panels, and governance matter. Choose <strong>Tally</strong> for
              the best free plan, fast launches, and simple yet powerful forms.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <BarChart2 className="h-5 w-5 text-emerald-700" /> Best for
              enterprise research
            </div>
            <p className="text-sm text-slate-700">
              SurveyMonkey offers quotas, benchmarks, research panels, and
              governance for research teams and compliance-heavy organizations.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> Best free tier
            </div>
            <p className="text-sm text-slate-700">
              Tally’s free plan covers unlimited forms and responses with light
              branding, making it ideal for startups, creators, and side
              projects.
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
            Use this table to see how Typeform, SurveyMonkey, and Tally differ
            across UX, logic, analytics, and pricing at a glance.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">SurveyMonkey</th>
                  <th className="px-4 py-3">Tally</th>
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
                      {row.surveymonkey}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.tally}</td>
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
            Scores are directional and based on common marketing, research, and
            startup use cases. Your ideal pick may change depending on volume,
            compliance needs, and how deep your reporting requirements are.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">SurveyMonkey</th>
                  <th className="px-4 py-3">Tally</th>
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
                          winnerKey === "surveymonkey"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.surveymonkey}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "tally"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.tally}
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
                    {averages.surveymonkey}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.tally}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pros & cons cards */}
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
            Pricing can change frequently, but this table gives you a directional
            view of how the main plans compare. Always confirm current limits,
            overages, and enterprise options on each vendor’s pricing page.
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

        {/* Shared summary pros/cons section */}
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
