import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "pabbly vs zapier vs make";
const canonical = buildCanonical("/tools/compare/pabbly-vs-zapier-vs-make");

const brandMeta = {
  pabbly: {
    gradient: "from-emerald-500 via-teal-500 to-sky-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/pabbly.com",
  },
  zapier: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/zapier.com",
  },
  make: {
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/make.com",
  },
};

const contenders = [
  {
    key: "pabbly",
    name: "Pabbly Connect",
    blurb: "Budget-friendly automations with generous task buckets and unlimited workflows on most plans.",
    url: "https://www.pabbly.com/connect",
  },
  {
    key: "zapier",
    name: "Zapier",
    blurb: "The largest app library and polished UX for no-code automation teams.",
    url: "https://zapier.com",
  },
  {
    key: "make",
    name: "Make",
    blurb: "Visual, branch-heavy automations with advanced routing and data handling.",
    url: "https://www.make.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    pabbly: "Affordable automations and predictable task buckets.",
    zapier: "Fast connection to almost any SaaS in your stack.",
    make: "Complex, visual workflows with branches and iterators.",
  },
  {
    label: "Pricing approach",
    pabbly: "Bundled tasks and workflows; designed for predictability.",
    zapier: "Per-task pricing; can get expensive at high volumes.",
    make: "Operation-based limits; good value for dense scenarios.",
  },
  {
    label: "Integrations",
    pabbly: "Hundreds of apps plus webhooks and API modules.",
    zapier: "Thousands of native apps and niche connectors.",
    make: "Extensive library plus powerful HTTP and data modules.",
  },
  {
    label: "Logic depth",
    pabbly: "Routers, delays, filters, basic scheduling.",
    zapier: "Paths, filters, formatters, code steps.",
    make: "Visual routers, iterators, aggregators, data transformers.",
  },
  {
    label: "Learning curve",
    pabbly: "Beginner-friendly for agencies and SMBs.",
    zapier: "Beginner-friendly; strong templates and recipes.",
    make: "Steeper curve; better for technically-minded builders.",
  },
];

const scoreboard = [
  { label: "App coverage", scores: { pabbly: 8.0, zapier: 9.8, make: 8.8 } },
  { label: "Value for money", scores: { pabbly: 9.5, zapier: 7.6, make: 8.4 } },
  { label: "Logic power", scores: { pabbly: 8.3, zapier: 8.6, make: 9.4 } },
  { label: "Ease of use", scores: { pabbly: 8.4, zapier: 9.1, make: 7.8 } },
  { label: "Agency fit", scores: { pabbly: 9.0, zapier: 8.5, make: 8.7 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  pabbly: avg("pabbly"),
  zapier: avg("zapier"),
  make: avg("make"),
};

const winnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const formatToolName = (key) => {
  if (key === "pabbly") return "Pabbly";
  if (key === "zapier") return "Zapier";
  if (key === "make") return "Make";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const overallWinner = formatToolName(winnerKey);

const pricingTable = [
  {
    plan: "Pabbly Connect",
    monthly: "Typically lower effective cost per task vs peers",
    model: "Task-based bundles with many workflows allowed",
    bestFor: "Agencies and SMBs that care about predictable automation spend",
    notes:
      "Attractive when you run many small automations or connect multiple clients and need to avoid runaway task bills.",
  },
  {
    plan: "Zapier",
    monthly: "From lower tiers up to enterprise pricing",
    model: "Per-task quotas; higher tiers unlock more apps and features",
    bestFor: "Stacks that rely on long-tail SaaS where app coverage matters more than raw price",
    notes:
      "Ideal when speed of integration and app coverage is more important than tight cost optimization.",
  },
  {
    plan: "Make",
    monthly: "Competitive operation-based plans",
    model: "Operations per month with scenario and data limits",
    bestFor: "Teams running complex, multi-step workflows and dense data flows",
    notes:
      "Good when you can pack a lot of value into each scenario and benefit from visual branching.",
  },
];

const featureBullets = {
  stack: [
    "Pabbly: Often used by agencies connecting forms, CRMs, and email tools with predictable billing.",
    "Zapier: Acts as the “default glue” for SaaS tools, especially when you need an obscure integration.",
    "Make: Favoured where workflows start to look like flowcharts with multiple branches and data loops.",
  ],
  governance: [
    "Pabbly: Simpler dashboards; good enough for most SMB and agency use cases.",
    "Zapier: Mature team features, folders, and access controls at higher tiers.",
    "Make: Scenario-centric view with logs and execution history, useful for technical operators.",
  ],
  complexity: [
    "Pabbly: Best for straightforward, linear or lightly branched workflows.",
    "Zapier: Handles medium-complex logic via Paths and code steps without feeling overwhelming.",
    "Make: Designed for complex routing, mapping, and data reshaping across many services.",
  ],
};

const prosCons = {
  pabbly: {
    pros: [
      "Very competitive pricing compared to many global automation platforms",
      "Unlimited workflows on most plans, useful for multi-client agencies",
      "Supports common marketing, CRM, and payment tools plus webhooks",
    ],
    cons: [
      "Smaller app catalog than Zapier, so niche tools may be missing",
      "Interface and UX feel more utilitarian than Zapier’s polish",
      "Advanced data handling is more limited versus Make’s toolkit",
    ],
  },
  zapier: {
    pros: [
      "Largest app coverage, including many niche and long-tail SaaS",
      "Very approachable UI with templates and prebuilt “Zaps”",
      "Strong ecosystem, documentation, and community examples",
    ],
    cons: [
      "Per-task pricing can become expensive at higher volumes",
      "Complex Zaps can be harder to visualize than Make’s canvas",
      "Enterprise-grade features live on higher-priced plans",
    ],
  },
  make: {
    pros: [
      "Highly visual scenario builder that suits complex branching",
      "Iterators, aggregators, and powerful data mapping tools",
      "Good value when building dense, multi-step workflows",
    ],
    cons: [
      "Steeper learning curve for non-technical users",
      "Interface can feel overwhelming for very simple use cases",
      "App coverage is strong but still behind Zapier in some niches",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Pabbly if predictable pricing and agency-friendly task bundles matter most, Zapier if you need the widest app coverage and quick setup, and Make if you want a visual canvas for complex branching and data-heavy workflows.",
  },
  {
    q: "Is Pabbly cheaper than Zapier?",
    a: "In many scenarios, yes. Pabbly’s bundled task quotas and generous workflow limits often work out cheaper at scale than Zapier’s per-task pricing, especially when you support multiple clients.",
  },
  {
    q: "When do teams pick Make?",
    a: "Teams pick Make when they need routers, iterators, aggregators, and detailed data mapping on a visual canvas—and are comfortable with a steeper learning curve.",
  },
  {
    q: "Who should stick with Zapier?",
    a: "You should stick with Zapier if integration coverage and reliability are more important than pure cost, or when your stack includes niche tools that only Zapier supports well.",
  },
  {
    q: "Can I mix these tools in one stack?",
    a: "Yes. Some teams use Pabbly for high-volume, cost-sensitive automations, Zapier for niche apps, and Make for the most complex, branching workflows where the visual builder pays off.",
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
  const meta =
    brandMeta[name.toLowerCase().split(" ")[0]] || {
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

export default function PabblyVsZapierVsMakePage() {
  const overallAvg = averages[winnerKey];

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Pabbly vs Zapier vs Make – automation comparison (${YEAR})`}
        description="Compare Pabbly Connect, Zapier, and Make across pricing, integrations, logic depth, and agency fit to pick the right automation platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, automation comparison, pabbly vs zapier, zapier vs make`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Automation platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Pabbly vs Zapier vs Make ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Zapier leads on app coverage, Make on visual branching and advanced
          data handling, and Pabbly on predictable pricing for agencies and
          SMBs. Here is how to choose the right fit for your automation stack.
        </p>

        {/* Contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-sm`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + top pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Pabbly</strong> when predictable, budget-friendly
              automation is the priority. Choose <strong>Zapier</strong> when
              you need the widest app catalog and the easiest starting
              experience. Choose <strong>Make</strong> when your workflows are
              complex, branch-heavy, and data-rich.
            </p>
            <p className="text-sm text-slate-700">
              Many agencies standardize on Pabbly or Make for cost and
              flexibility, keeping Zapier in the stack for niche apps that only
              it supports.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Overall scoreboard winner
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {overallWinner}
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Average score: {overallAvg}/10
            </p>
            <p className="mt-2 text-sm text-slate-700">
              The winner will vary by context: Pabbly for value, Zapier for app
              coverage, Make for advanced logic. Use the scores as a directional
              guide, not an absolute rule.
            </p>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>Pabbly:</strong> agencies and SMBs that want predictable
                costs across many workflows and clients.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-orange-600" />
              <span>
                <strong>Zapier:</strong> fast integrations when you need to
                connect almost any SaaS quickly without technical help.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-purple-600" />
              <span>
                <strong>Make:</strong> teams comfortable with visual canvases,
                routers, and complex data flows.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Layers className="h-6 w-6 text-emerald-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Pabbly</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">Make</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/60"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.pabbly}</td>
                    <td className="px-4 py-3">{row.zapier}</td>
                    <td className="px-4 py-3">{row.make}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard with per-dimension winner */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <BarChart3 className="h-6 w-6 text-orange-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Pabbly</th>
                  <th className="px-4 py-3">Zapier</th>
                  <th className="px-4 py-3">Make</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { pabbly, zapier, make } = row.scores;
                  const maxScore = Math.max(pabbly, zapier, make);
                  const winner =
                    maxScore === pabbly
                      ? "Pabbly"
                      : maxScore === zapier
                      ? "Zapier"
                      : "Make";

                  return (
                    <tr
                      key={row.label}
                      className="align-top odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Pabbly"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {pabbly}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Zapier"
                            ? "font-semibold text-orange-800"
                            : "text-slate-800"
                        }`}
                      >
                        {zapier}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Make"
                            ? "font-semibold text-purple-800"
                            : "text-slate-800"
                        }`}
                      >
                        {make}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-orange-50 to-purple-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.pabbly}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.zapier}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.make}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature & use-case comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Feature and use-case comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Where each platform fits in your stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Governance, teams, and operations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Workflow complexity and scale
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.complexity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Cost positioning</th>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3">{row.monthly}</td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="px-4 py-3">{row.bestFor}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing changes frequently and depends on tasks/operations, team
            features, and add-ons. Always confirm current plans on each
            provider’s website before committing.
          </p>
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Predictable agency automation
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Pabbly.</strong> Task bundles and unlimited
                workflows on many plans make it attractive for agencies running
                many client automations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                App coverage and “it just connects”
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Zapier.</strong> If you have a long tail of
                tools, Zapier is still the safest bet for finding a native
                connector quickly.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Complex branching and data flows
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Make.</strong> Routers, iterators, and
                aggregators in a visual canvas make it ideal for sophisticated
                automation diagrams.
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            FAQs: Pabbly vs Zapier vs Make
          </h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to="/tools/pabbly"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-800 hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Pabbly review
          </Link>
        </div>
      </div>
    </main>
  );
}
