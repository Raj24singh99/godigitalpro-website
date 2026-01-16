import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
  ClipboardList,
  Workflow,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "surveymonkey vs typeform vs jotform";
const canonical = buildCanonical("/tools/compare/surveymonkey-vs-typeform-vs-jotform");

const brandMeta = {
  surveymonkey: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/surveymonkey.com",
  },
  typeform: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "/assets/tool-logos/typeform.svg",
  },
  jotform: {
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/jotform.com",
  },
};

const contenders = [
  {
    key: "surveymonkey",
    name: "SurveyMonkey",
    blurb: "Enterprise-ready surveys with quotas, benchmarks, and governance.",
    url: "https://www.surveymonkey.com",
    slug: "surveymonkey",
  },
  {
    key: "typeform",
    name: "Typeform",
    blurb: "Designed, conversational forms that boost completion rate for marketing teams.",
    url: "https://www.typeform.com",
    slug: "typeform",
  },
  {
    key: "jotform",
    name: "Jotform",
    blurb: "Form builder with deep widgets, payments, and automations for business ops.",
    url: "https://www.jotform.com",
    slug: "jotform",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    surveymonkey: "Research, NPS/CSAT with quotas and governance",
    typeform: "Branded lead capture and UX-friendly forms",
    jotform: "Payments, approvals, and ops-heavy intake forms",
  },
  {
    label: "Design & UX",
    surveymonkey: "Classic survey layouts, functional and familiar",
    typeform: "Polished, one-question-at-a-time conversational flow",
    jotform: "Flexible layouts with widgets, PDFs, and custom branding",
  },
  {
    label: "Logic & quotas",
    surveymonkey: "Advanced logic, quotas, randomization, and panels",
    typeform: "Smooth branching, hidden fields, and URL parameters",
    jotform: "Logic, calculators, approvals, and complex workflows",
  },
  {
    label: "Analytics & reporting",
    surveymonkey: "Dashboards, benchmarks, filters, and Audience access",
    typeform: "Dashboards, response exports, and CRM syncs",
    jotform: "Submissions inbox, PDFs, exports to BI/spreadsheets",
  },
  {
    label: "Payments & integrations",
    surveymonkey: "Limited payments; strong exports and integrations",
    typeform: "Good marketing stack integrations; light payments",
    jotform: "Deep payment gateways, signatures, and document workflows",
  },
  {
    label: "Compliance & governance",
    surveymonkey: "Enterprise features (SSO, DLP, governance add-ons)",
    typeform: "Solid security; governance for mid-market/enterprise tiers",
    jotform: "HIPAA options, approvals, and strong admin controls",
  },
  {
    label: "Pricing feel",
    surveymonkey: "Priced for research/governance-heavy teams",
    typeform: "Mid-tier pricing with response-based caps",
    jotform: "Affordable tiers with generous features and limits",
  },
  {
    label: "Best for",
    surveymonkey: "Research, ops, and enterprise survey programs",
    typeform: "Marketing, product signups, and lead gen flows",
    jotform: "Operations, finance, HR, and internal request flows",
  },
];

const scoreboard = [
  { label: "Data quality & quotas", scores: { surveymonkey: 9.4, typeform: 8.4, jotform: 8.6 } },
  { label: "Design & UX", scores: { surveymonkey: 7.8, typeform: 9.6, jotform: 8.5 } },
  { label: "Payments & ops", scores: { surveymonkey: 7.5, typeform: 7.8, jotform: 9.2 } },
  { label: "Reporting & exports", scores: { surveymonkey: 9.0, typeform: 8.3, jotform: 8.7 } },
  { label: "Value for money", scores: { surveymonkey: 7.8, typeform: 8.0, jotform: 8.9 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  surveymonkey: avg("surveymonkey"),
  typeform: avg("typeform"),
  jotform: avg("jotform"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const keyToName = {
  surveymonkey: "SurveyMonkey",
  typeform: "Typeform",
  jotform: "Jotform",
};

const overallWinnerName = keyToName[overallWinnerKey];

const pricingTable = [
  {
    plan: "SurveyMonkey Advantage / Standard tiers",
    monthly: "From around ~$34/user/mo",
    annual: "Lower effective rate on annual",
    limits: "Logic, quotas, exports; governance and advanced features on higher tiers",
    notes: "Best when you need data quality, benchmarks, and enterprise governance.",
  },
  {
    plan: "Typeform Plus / Business",
    monthly: "From around ~$29–$59/mo",
    annual: "Discounts when billed annually",
    limits: "Logic, hidden fields, brand kits, response caps per plan",
    notes: "Great for branded lead capture, marketing campaigns, and signup flows.",
  },
  {
    plan: "Jotform Bronze / Silver / Gold",
    monthly: "From around ~$34+/mo",
    annual: "Lower on annual billing",
    limits: "Form, submission, and storage caps; payments and widgets per tier",
    notes: "Strong value for ops-heavy forms, approvals, and internal workflows.",
  },
];

const featureBullets = {
  logicAndData: [
    "SurveyMonkey: Strongest for research logic with quotas, randomization, and Audience panel access.",
    "Typeform: Intuitive branching and hidden fields that make marketing funnels and lead routing easier.",
    "Jotform: Conditional logic, calculators, and approvals that support complex internal processes.",
  ],
  designAndUX: [
    "SurveyMonkey: Familiar survey layouts that work well for respondents used to traditional surveys.",
    "Typeform: Conversational, one-question-at-a-time experiences that typically improve completion rates.",
    "Jotform: Highly customizable layouts with widgets, embedded PDFs, and branding options.",
  ],
  paymentsAndWorkflows: [
    "SurveyMonkey: Focused more on surveys and feedback; payments are not the core use case.",
    "Typeform: Good enough for light payment collection in marketing and simple order forms.",
    "Jotform: Deep payment gateway support, signatures, and approvals for intake, orders, and requests.",
  ],
};

const prosCons = {
  surveymonkey: {
    pros: [
      "Best-in-class for research rigor, quotas, and benchmarking across large respondent bases",
      "Enterprise-ready governance with SSO, admin controls, and compliance options",
      "Strong templates for NPS, CSAT, HR, and ops surveys",
    ],
    cons: [
      "Interface feels more utilitarian than Typeform for public-facing forms",
      "Pricing scales up quickly when you add advanced features and multiple users",
      "Less focused on payments and complex internal document workflows versus Jotform",
    ],
  },
  typeform: {
    pros: [
      "Premium, conversational UX that often improves completion rate in marketing and product flows",
      "Hidden fields and integrations make it easy to pass lead data into CRMs and ESPs",
      "Great templates for quizzes, lead magnets, onboarding, and product research",
    ],
    cons: [
      "Response-based caps can become expensive on high-volume campaigns",
      "Less suited to heavy internal operations, approvals, or document-style workflows",
      "Logic is strong but quotas and research governance are lighter than SurveyMonkey",
    ],
  },
  jotform: {
    pros: [
      "Rich widget library, payment gateways, and signatures for ops-heavy use cases",
      "Approvals, routing, and PDF generation make it ideal for internal and back-office teams",
      "Generous feature set across tiers with good value for money",
    ],
    cons: [
      "UX is powerful but can feel more complex than Typeform for simple public forms",
      "Reporting is solid but less benchmark/research-focused than SurveyMonkey",
      "Overkill if you only need a few simple marketing forms or single survey",
    ],
  },
};

const faqs = [
  {
    q: `Is SurveyMonkey better than Typeform or Jotform in ${YEAR}?`,
    a: "SurveyMonkey wins when you care most about research rigor, quotas, and benchmarks. Typeform wins for branded, conversational forms that convert visitors to leads. Jotform wins for payments, complex widgets, and business workflows.",
  },
  {
    q: "Which is best for enterprise teams?",
    a: "SurveyMonkey is usually the safest enterprise bet thanks to governance, SSO, admin controls, and benchmarking. Jotform is strong for internal processes, while Typeform is excellent for public-facing lead capture at scale.",
  },
  {
    q: "Which is best for payments and approvals?",
    a: "Jotform is the clear winner. Its widget library, payment gateways, and approvals make it ideal for intake, orders, requests, and internal approval workflows.",
  },
  {
    q: "Which is best for branded lead capture?",
    a: "Typeform delivers the most polished, conversational front-end experience, making it ideal for lead gen, quizzes, and product signups where user experience and brand are critical.",
  },
  {
    q: "Which is best on a tight budget?",
    a: "For simple marketing forms, Typeform’s lower tiers can work well. For operational workflows where you’d otherwise buy multiple tools, Jotform often provides the best overall value.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase().replace(/\s+/g, "");
  const key =
    lowered.includes("surveymonkey") || lowered.includes("survey")
      ? "surveymonkey"
      : lowered.includes("typeform")
      ? "typeform"
      : lowered.includes("jotform")
      ? "jotform"
      : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function SurveyMonkeyVsTypeformVsJotformPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`SurveyMonkey vs Typeform vs Jotform (${YEAR}) – Survey & form builder comparison`}
        description="Compare SurveyMonkey, Typeform, and Jotform on research rigor, UX, payments, workflows, pricing, and the right form stack for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, survey tools, form builders, online forms comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Form & survey tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          SurveyMonkey vs Typeform vs Jotform ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          SurveyMonkey is built for research rigor and governance. Typeform wins on branded,
          conversational forms that convert visitors into leads. Jotform is the most flexible option
          for payments, approvals, and operations-heavy workflows. Here is a structured breakdown to
          help you choose the right form and survey stack.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>SurveyMonkey</strong> if you need research-grade surveys with quotas,
              benchmarks, and governance. Pick <strong>Typeform</strong> for the most engaging,
              branded front-end experience to drive completions. Go with <strong>Jotform</strong> if
              payments, widgets, approvals, and internal workflows are your priority.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no single “best” tool. Pick based on whether you prioritise research rigor,
              public-facing UX and brand, or deep internal workflows and payment collection.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">SurveyMonkey</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.surveymonkey}</td>
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">SurveyMonkey</th>
                  <th className="px-4 py-3">Typeform</th>
                  <th className="px-4 py-3">Jotform</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { surveymonkey, typeform, jotform } = row.scores;
                  const winnerValue = Math.max(surveymonkey, typeform, jotform);
                  const winner =
                    winnerValue === surveymonkey
                      ? "SurveyMonkey"
                      : winnerValue === typeform
                      ? "Typeform"
                      : "Jotform";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SurveyMonkey"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {surveymonkey}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Typeform"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {typeform}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Jotform"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {jotform}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-amber-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.surveymonkey}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.typeform}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.jotform}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ClipboardList className="h-5 w-5 text-emerald-600" /> Survey logic & data quality
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.logicAndData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-500" /> Design, UX & completion rate
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.designAndUX.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-indigo-600" /> Payments, approvals & workflows
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.paymentsAndWorkflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-slate-600" /> Compliance & governance
            </h3>
            <p className="text-slate-700">
              <strong>SurveyMonkey</strong> typically leads here with enterprise governance, SSO, and
              compliance add-ons. <strong>Typeform</strong> and <strong>Jotform</strong> both offer
              strong security and admin controls on higher tiers, with Jotform often the pick for
              HIPAA-sensitive workflows and approvals.
            </p>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
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
          <p className="text-sm text-slate-600">
            Pricing changes frequently and depends on seats, response caps, and promos. Always
            confirm current limits directly on each vendor’s pricing page before committing, and
            factor in how many teams will be building forms or surveys.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SurveyMonkey:</strong> Feels like a research and ops tool first. Non-technical
              stakeholders can send surveys quickly, but it is more utilitarian than design-led for
              public-facing forms.
            </li>
            <li>
              <strong>Typeform:</strong> Very polished UX tuned for respondents. Marketing and product
              teams can design on-brand forms that feel like a conversation rather than a survey.
            </li>
            <li>
              <strong>Jotform:</strong> Extremely capable, but the breadth of widgets, approvals, and
              PDF automation can be overwhelming. Best when you have recurring internal processes to
              encode into forms.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Customer research and feedback programs:</strong> SurveyMonkey wins with
              quotas, benchmarks, and Audience access for panel recruitment.
            </li>
            <li>
              <strong>Marketing campaigns, quizzes, and lead magnets:</strong> Typeform wins with
              conversational UX, hidden fields, and marketing stack integrations.
            </li>
            <li>
              <strong>Internal requests, approvals, and payment-backed workflows:</strong> Jotform
              wins with approvals, payments, signatures, and PDF generation.
            </li>
            <li>
              <strong>Agencies managing many clients:</strong> Often a mix: Typeform for front-end
              campaigns, Jotform or SurveyMonkey for deeper operations and research needs.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SurveyMonkey</h3>
              <p className="text-sm text-slate-700">
                Best when you need consistent, research-grade data with quotas, benchmarks, and
                governance across teams.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: CX/Research teams, HR/People ops, large organisations running many
                surveys.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Typeform</h3>
              <p className="text-sm text-slate-700">
                Best for branded, conversational experiences where completion rate and perception of
                your brand really matter.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Marketing teams, SaaS onboarding flows, product signups, quizzes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Jotform</h3>
              <p className="text-sm text-slate-700">
                Best for intake, approvals, payments, and document-heavy workflows with multiple
                stakeholders.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Operations, finance, legal, HR, and service teams that need structured
                workflows.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
