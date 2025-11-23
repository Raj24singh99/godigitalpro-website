import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Workflow,
  PlugZap,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "zapier vs make vs pabbly";
const canonical = buildCanonical("/tools/compare/zapier-vs-make-vs-pabbly");

const brandMeta = {
  zapier: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/zapier.com",
  },
  make: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/make.com",
  },
  pabbly: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/pabbly.com",
  },
};

const contenders = [
  {
    key: "zapier",
    name: "Zapier",
    blurb:
      "Fastest to ship simple automations with the widest connector library.",
    url: "https://zapier.com/",
  },
  {
    key: "make",
    name: "Make",
    blurb:
      "Visual builder for complex branching, routers, iterators, and array handling.",
    url: "https://www.make.com/",
  },
  {
    key: "pabbly",
    name: "Pabbly Connect",
    blurb: "Affordable automations plus native forms/subscriptions.",
    url: "https://www.pabbly.com/connect/",
  },
];

const comparisonRows = [
  {
    label: "Ease of use / speed-to-ship",
    zapier: "Clean UI and templates; fastest to publish zaps.",
    make: "Slightly steeper curve with modules/routers.",
    pabbly: "Straightforward for basics; UI steadily improving.",
  },
  {
    label: "Complex workflows",
    zapier: "Routers and loop helpers but lighter than Make.",
    make: "Best for routers, iterations, array mapping, and webhooks.",
    pabbly: "Covers basics; complex branching is limited.",
  },
  {
    label: "Connectors & ecosystem",
    zapier: "Largest app library with fast new integrations.",
    make: "Strong coverage; some niche apps missing vs Zapier.",
    pabbly: "Narrower catalog but covers common SaaS.",
  },
  {
    label: "Price vs task volume",
    zapier: "Pricier at volume; best UX for fast launches.",
    make: "Efficient pricing for large scenarios/operations.",
    pabbly: "Lowest cost for high task counts in many cases.",
  },
  {
    label: "Native billing/subscriptions",
    zapier: "Requires Stripe/checkout tools for billing.",
    make: "No native billing features.",
    pabbly: "Built-in subscriptions/forms save extra tools.",
  },
];

const scoreboard = [
  { label: "Ease of use / speed-to-ship", scores: { zapier: 9.4, make: 8.2, pabbly: 8.0 } },
  { label: "Complex workflows", scores: { zapier: 8.0, make: 9.5, pabbly: 7.8 } },
  { label: "Connectors & ecosystem", scores: { zapier: 9.7, make: 8.8, pabbly: 7.5 } },
  { label: "Price vs task volume", scores: { zapier: 7.6, make: 8.6, pabbly: 9.0 } },
  { label: "Native billing/subscriptions", scores: { zapier: 0, make: 0, pabbly: 9.2 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  zapier: avg("zapier"),
  make: avg("make"),
  pabbly: avg("pabbly"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  zapier: "Zapier",
  make: "Make",
  pabbly: "Pabbly Connect",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey];

const pricingTable = [
  {
    plan: "Zapier Professional",
    monthly: "From ~$73/mo",
    annual: "~$61/mo billed annually",
    limits: "Higher task limits, paths, webhooks, priority support",
    notes: "Best when you want speed and broad connectors, less focus on raw cost.",
  },
  {
    plan: "Make Core/Pro",
    monthly: "From ~$16–$30/mo",
    annual: "Lower effective rate on annual",
    limits: "Scenario operations with routers, iterators, advanced mapping",
    notes: "Great value when you run complex, heavy workflows frequently.",
  },
  {
    plan: "Pabbly Connect",
    monthly: "From ~$25/mo",
    annual: "Aggressive lifetime/annual offers",
    limits: "Operations + native forms/subscriptions",
    notes: "Cheapest at scale, particularly with lifetime deals and bundled tools.",
  },
];

const featureBullets = {
  automation: [
    "Zapier: Point-and-click builder with steps, paths, and loop helpers; ideal for quickly automating standard business flows.",
    "Make: Scenario-based visual canvas with routers, iterators, aggregators, and powerful JSON/object handling.",
    "Pabbly: Straightforward flow builder oriented to common SMB use-cases like lead capture, billing, and notifications.",
  ],
  pricing: [
    "Zapier: Task-based billing that rewards careful design; can become expensive for very chatty automations.",
    "Make: Operation-based pricing with generous quotas on mid-tier plans; strong value for engineering-heavy teams.",
    "Pabbly: Low per-task costs and lifetime-style offers make it attractive for agencies and high-volume SMBs.",
  ],
  ecosystem: [
    "Zapier: Largest connector catalog, with many niche SaaS tools supported early.",
    "Make: Solid library with a strong focus on webhooks and APIs; great for technical workflows.",
    "Pabbly: Smaller library, but covers major CRM, email, and payment platforms popular with SMBs.",
  ],
};

const faqs = [
  {
    q: `Is Zapier better than Make or Pabbly in ${YEAR}?`,
    a: "Zapier wins for fastest time-to-ship and the widest connector library. Make wins for complex branching, arrays, and webhook-heavy scenarios. Pabbly Connect wins on affordability and native subscriptions/forms for SMBs and agencies.",
  },
  {
    q: "Which is best for complex workflows?",
    a: "Make. Its routers, iterators, and data mapping are the strongest when you are orchestrating complex workflows across APIs, arrays, and nested data structures.",
  },
  {
    q: "Which is cheapest for high task volume?",
    a: "Pabbly Connect is often the lowest cost at scale, especially when you secure lifetime or aggressive annual deals. Make is also efficient for heavy usage where operations can be tuned.",
  },
  {
    q: "Do any include billing or subscriptions natively?",
    a: "Pabbly Connect includes subscriptions and forms as part of its broader suite. Zapier and Make typically rely on third-party billing tools like Stripe, Paddle, or native checkout platforms.",
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

const prosCons = {
  zapier: {
    pros: [
      "Fastest to launch simple automations",
      "Largest connector catalog and ecosystem",
      "Plenty of recipes/templates and AI-powered suggestions",
    ],
    cons: [
      "Pricier at scale compared with Make/Pabbly",
      "Router/loop tools are lighter than Make for complex logic",
      "Task-based billing can increase quickly without governance",
    ],
  },
  make: {
    pros: [
      "Best for routers, iterations, and complex data mapping",
      "Great fit for webhook-heavy and API-first flows",
      "Strong value for complex, engineering-led scenarios",
    ],
    cons: [
      "Slightly steeper learning curve for non-technical users",
      "Visual canvas can feel busy in very large scenarios",
      "Some niche apps missing vs Zapier’s catalog",
    ],
  },
  pabbly: {
    pros: [
      "Lowest cost for high task volume in many cases",
      "Native subscriptions and forms reduce extra tooling",
      "Solid option for SMBs and agencies standardising common flows",
    ],
    cons: [
      "Smaller app catalog than Zapier/Make",
      "Interface is less polished and opinionated",
      "Advanced branching and data handling are more limited",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key = lowered.includes("zapier")
    ? "zapier"
    : lowered.includes("make")
    ? "make"
    : lowered.includes("pabbly")
    ? "pabbly"
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

export default function ZapierVsMakeVsPabblyPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Zapier vs Make vs Pabbly – Automation Comparison (${YEAR})`}
        description="Compare Zapier, Make, and Pabbly Connect on automation speed, complex workflows, connectors, pricing, and which tool fits your automation strategy."
        canonical={canonical}
        keywords={`${primaryKeyword}, automation tools, workflow automation, no-code automation`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Automation platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Zapier vs Make vs Pabbly – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Zapier ships the fastest with the widest connector library. Make is
          the strongest choice for complex branching, routers, and webhook-heavy
          flows. Pabbly Connect is the budget-friendly pick with native
          subscriptions and forms. Here is how they stack up across speed,
          connectors, pricing, and long-term flexibility.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
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
              Choose <strong>Zapier</strong> if you want the quickest
              time-to-ship and the broadest connector coverage. Choose{" "}
              <strong>Make</strong> when your team needs routers, iterators, and
              complex API/data handling. Choose{" "}
              <strong>Pabbly Connect</strong> if you want the most affordable
              way to run large volumes of automations with subscriptions/forms
              built in.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard
              winner: {overallWinnerLabel}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              In practice, many teams use{" "}
              <strong>Zapier or Make for orchestration</strong> and{" "}
              <strong>Pabbly or native tools for billing/forms</strong>. The
              “winner” is often a combo: Zapier for breadth, Make for depth, and
              Pabbly for low-cost coverage and billing.
            </p>
          </div>
        </div>

        {/* Context helper cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Zap className="h-5 w-5 text-amber-600" /> Best for breadth
            </div>
            <p className="text-sm text-slate-700">
              Zapier is ideal when you work with many SaaS tools and want
              reliable connectors and templates to move fast.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> Best for
              complexity
            </div>
            <p className="text-sm text-slate-700">
              Make excels at complex logic: routers, iterators, aggregators,
              and JSON transformations for engineering teams.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <PlugZap className="h-5 w-5 text-emerald-700" /> Best for budget
            </div>
            <p className="text-sm text-slate-700">
              Pabbly Connect is often the cheapest at scale, especially with
              lifetime plans and bundled subscriptions/forms.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">Make</th>
                  <th className="px-4 py-3">Pabbly Connect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.zapier}</td>
                    <td className="px-4 py-3 text-slate-700">{row.make}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pabbly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-purple-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">Make</th>
                  <th className="px-4 py-3">Pabbly Connect</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { zapier, make, pabbly } = row.scores;
                  const maxScore = Math.max(zapier, make, pabbly);
                  const winner =
                    maxScore === zapier
                      ? "Zapier"
                      : maxScore === make
                      ? "Make"
                      : "Pabbly Connect";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zapier"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {zapier}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Make"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {make}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Pabbly Connect"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {pabbly}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-indigo-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.zapier}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.make}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.pabbly}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
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
              <Zap className="h-5 w-5 text-amber-600" /> Automation builders &
              workflows
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Pricing models &
              volume strategy
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pricing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-sky-600" /> Ecosystem & coverage
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
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
            Pricing changes frequently and depends on operations, tasks, and
            occasional lifetime deals. Always confirm current limits on each
            vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Zapier:</strong> Very approachable for non-technical teams
              with clear triggers/actions. Governance (naming, folders, error
              handling) becomes more important as usage grows.
            </li>
            <li>
              <strong>Make:</strong> Feels like a visual IDE for automation.
              Power users love the control, but non-technical users may need
              guidance and templates to get started confidently.
            </li>
            <li>
              <strong>Pabbly Connect:</strong> UI is simpler and less polished,
              but familiar to SMBs that also use Pabbly for billing, email, and
              forms. Great once you settle into a few repeatable patterns.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Product-led SaaS connecting many tools:</strong> Zapier or
              Make for orchestrating events between product analytics, billing,
              CRM, and support—Zapier for speed and coverage, Make for deep
              logic.
            </li>
            <li>
              <strong>Agencies managing many SMB clients:</strong> Pabbly
              Connect wins on cost, especially with lifetime deals. Zapier or
              Make layer in when a client needs specific connectors or complex
              flows.
            </li>
            <li>
              <strong>Ecommerce and DTC brands:</strong> Make works well for
              data-heavy, multi-step flows; Pabbly is appealing for merchants
              who want integrated subscriptions and forms without extra tools.
            </li>
            <li>
              <strong>Ops-heavy or data-engineering teams:</strong> Make tends
              to win due to advanced routers, iterators, and API tooling, often
              paired with Zapier or Pabbly for simpler departmental automations.
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
              <h3 className="text-lg font-semibold">Zapier</h3>
              <p className="text-sm text-slate-700">
                Best when you need quick wins, many connectors, and automation
                that non-technical teams can maintain.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Marketing/sales ops, founders, and teams building a
                lot of standard SaaS-to-SaaS flows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Make</h3>
              <p className="text-sm text-slate-700">
                Best when your workflows involve heavy API calls, nested data,
                or complex routing that needs fine-grained control.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: RevOps, data/automation engineers, technical
                agencies, and product-led companies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Pabbly Connect</h3>
              <p className="text-sm text-slate-700">
                Best when cost is critical and you want automation, billing, and
                forms bundled under one vendor.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: SMBs, solopreneurs, and agencies standardising
                high-volume but not highly complex flows.
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
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>
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
