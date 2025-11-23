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
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "plausible vs fathom vs matomo";
const canonical = buildCanonical(
  "/tools/compare/plausible-vs-fathom-vs-matomo"
);

const brandMeta = {
  plausible: {
    gradient: "from-indigo-500 via-blue-500 to-emerald-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/plausible.io",
  },
  fathom: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/usefathom.com",
  },
  matomo: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/matomo.org",
  },
};

const contenders = [
  {
    key: "plausible",
    name: "Plausible",
    blurb: "Lightweight, privacy-first web analytics with clean dashboards.",
    url: "https://plausible.io/",
    slug: "plausible",
  },
  {
    key: "fathom",
    name: "Fathom",
    blurb: "Cookieless analytics with simple reports and strong privacy positioning.",
    url: "https://usefathom.com/",
    slug: "fathom-analytics",
  },
  {
    key: "matomo",
    name: "Matomo",
    blurb: "Feature-rich analytics with self-hosting and deep enterprise controls.",
    url: "https://matomo.org/",
    slug: "matomo",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    plausible: "Simple, privacy-first analytics for marketing & product teams",
    fathom: "Cookieless traffic analytics with lean reporting",
    matomo:
      "Full-featured analytics suite with advanced reporting and add-ons",
  },
  {
    label: "Privacy posture",
    plausible: "Cookieless by default, EU hosting, GDPR-friendly positioning",
    fathom: "Cookieless, EU isolation options, strong GDPR-first messaging",
    matomo:
      "Can be fully self-hosted/on-prem; cookies and retention configurable",
  },
  {
    label: "Ease of setup",
    plausible: "Tiny script, quick goals/events, minimal configuration",
    fathom: "Simple single script, easy to roll out across sites",
    matomo: "More setup (especially self-hosted), many menus and options",
  },
  {
    label: "Reporting depth",
    plausible: "Traffic, sources, events, campaigns, simple funnel-style views",
    fathom: "Top pages, referrers, campaigns; intentionally lean insights",
    matomo:
      "Funnels, cohorts, user IDs, attribution, and more via plugins/modules",
  },
  {
    label: "Performance impact",
    plausible: "Very lightweight script focused on page speed",
    fathom: "Very light script and fast dashboard experience",
    matomo:
      "Heavier script; can be optimised with tagging strategy and hosting setup",
  },
  {
    label: "Self-host / control",
    plausible: "Self-hosting possible; popular as a managed EU SaaS",
    fathom: "Primarily SaaS; strong privacy but less DIY control than Matomo",
    matomo:
      "Designed for on-prem/self-host scenarios with strict data residency",
  },
  {
    label: "Best for",
    plausible:
      "Teams wanting simple, privacy-first metrics instead of GA complexity",
    fathom:
      "Marketers who want lean dashboards and a strong cookieless story",
    matomo:
      "Organizations needing GA-style depth under strict compliance rules",
  },
];

const scoreboard = [
  {
    label: "Privacy & compliance",
    plausible: 9.4,
    fathom: 9.6,
    matomo: 9.2,
  },
  {
    label: "Ease of use",
    plausible: 9.0,
    fathom: 9.1,
    matomo: 7.2,
  },
  {
    label: "Reporting depth",
    plausible: 7.6,
    fathom: 7.4,
    matomo: 9.1,
  },
  {
    label: "Performance / speed impact",
    plausible: 9.3,
    fathom: 9.5,
    matomo: 7.8,
  },
  {
    label: "Self-host / control",
    plausible: 8.6,
    fathom: 8.4,
    matomo: 9.7,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  plausible: avg("plausible"),
  fathom: avg("fathom"),
  matomo: avg("matomo"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.plausible),
    parseFloat(averages.fathom),
    parseFloat(averages.matomo)
  ) === parseFloat(averages.plausible)
    ? "Plausible"
    : Math.max(
        parseFloat(averages.fathom),
        parseFloat(averages.matomo)
      ) === parseFloat(averages.fathom)
    ? "Fathom"
    : "Matomo";

const pricingTable = [
  {
    plan: "Plausible (SaaS tiers)",
    monthly: "From around ~$9–$19/mo",
    annual: "Discounted when billed annually",
    limits: "Event/pageview-based pricing with thresholds per tier",
    notes:
      "Strong value for small to mid sites wanting privacy-first, simple analytics.",
  },
  {
    plan: "Fathom (SaaS tiers)",
    monthly: "From around ~$15–$20/mo",
    annual: "Lower effective rate on annual",
    limits: "Pageview/session caps per month across properties",
    notes:
      "Good fit when you care about lean dashboards and a strong cookieless narrative.",
  },
  {
    plan: "Matomo (Cloud & self-host)",
    monthly: "Cloud from around ~$19–$35/mo",
    annual: "Discounts on annual; self-host licence options for add-ons",
    limits:
      "Traffic-based caps on cloud; infra + plugin licences if self-hosting",
    notes:
      "Best when you need enterprise reporting and are ready to manage more complexity.",
  },
];

const featureBullets = {
  analytics: [
    "Plausible: Opinionated, privacy-first dashboards with traffic, sources, events, and simple campaign attribution.",
    "Fathom: Lean analytics that emphasise pageviews, referrers, campaigns, and uptime with minimal clutter.",
    "Matomo: Full analytics suite with funnels, goals, ecommerce reports, custom dimensions, and more via plugins.",
  ],
  hosting: [
    "Plausible: Popular as a managed EU SaaS; self-hosting is possible for teams with devops capacity.",
    "Fathom: Primarily a managed SaaS with region options and strong compliance posture.",
    "Matomo: Built for self-host/on-prem, with a cloud option if you prefer not to manage servers.",
  ],
  governance: [
    "Plausible: Simple roles and site-level access; less granular than a full enterprise stack.",
    "Fathom: Straightforward account-level controls, good enough for most SMB/studio setups.",
    "Matomo: More enterprise-style configuration with sites, roles, plugins, and fine-grained tracking settings.",
  ],
};

const prosCons = {
  plausible: {
    pros: [
      "Cookieless, privacy-first analytics that are easy to explain to legal and clients.",
      "Very lightweight script and simple UI, so teams actually check reports.",
      "Straightforward goals and event tracking for marketing and content teams.",
    ],
    cons: [
      "Less suited for very deep product analytics, user-level funnels, or complex attribution.",
      "Fewer plugins and add-ons versus more mature, enterprise options.",
      "Limited if you want multi-property, multi-tenant setups with very granular permissions.",
    ],
  },
  fathom: {
    pros: [
      "Simple, fast dashboards with a strong focus on privacy and EU isolation.",
      "Cookieless by design, which simplifies consent banner conversations.",
      "Good fit when marketing just needs high-level traffic and campaign sanity checks.",
    ],
    cons: [
      "Reporting remains intentionally lean—less depth than Matomo for advanced teams.",
      "Smaller ecosystem and fewer integrations than larger analytics platforms.",
      "Not ideal if you want detailed funnels, cohorts, or heatmaps under one roof.",
    ],
  },
  matomo: {
    pros: [
      "Can be fully self-hosted or on-prem for strict data residency and ownership.",
      "Rich feature set: funnels, custom dimensions, heatmaps, A/B tests (with plugins).",
      "Strong option for replacing GA-style depth while keeping control in-house.",
    ],
    cons: [
      "Heavier to set up and maintain, especially in self-hosted environments.",
      "UI and navigation can feel complex for non-analyst users coming from GA/Plausible.",
      "Requires more ongoing maintenance (updates, scaling, security) when self-hosted.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Plausible and Fathom are best when you want simple, privacy-first dashboards that stay out of the way. Matomo wins when you need enterprise-style depth, lots of plugins, and the option to run fully on-prem.",
  },
  {
    q: "Do Plausible or Fathom replace Matomo?",
    a: "They can if your needs are mostly traffic, content, and campaign insights. If you require advanced funnels, user IDs, attribution modelling, or heatmaps in one stack, Matomo is usually the stronger choice.",
  },
  {
    q: "Which is fastest to deploy?",
    a: "Plausible and Fathom are fastest to deploy: small scripts, simple interfaces, and minimal configuration. Matomo typically takes longer, especially if you self-host and enable multiple plugins.",
  },
  {
    q: "Can these replace Google Analytics for basic reporting?",
    a: "Yes. For many sites, Plausible or Fathom comfortably replace GA for traffic, sources, goals, and top content. Matomo is closer to a full GA alternative when you rely on advanced reporting and want to keep data in-house.",
  },
  {
    q: "Which is best for strict EU or on-prem compliance?",
    a: "For managed SaaS with EU hosting, Plausible and Fathom both work well. For the strongest control and on-prem deployments, Matomo self-hosted lets you store data entirely on your own infrastructure.",
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
  const lowered = name.toLowerCase();
  const key = lowered.includes("plausible")
    ? "plausible"
    : lowered.includes("fathom")
    ? "fathom"
    : lowered.includes("matomo")
    ? "matomo"
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

export default function PlausibleVsFathomVsMatomoPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Plausible vs Fathom vs Matomo (${YEAR}) – Privacy-first analytics comparison`}
        description="Compare Plausible, Fathom, and Matomo on privacy posture, performance, reporting depth, and self-hosting so you can pick the right privacy-friendly analytics stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, privacy analytics comparison, google analytics alternative, cookieless analytics`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Privacy-first analytics
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Plausible vs Fathom vs Matomo ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Plausible and Fathom give you lightweight, cookieless analytics with
          clear dashboards. Matomo adds deep reporting and full self-host/on-prem
          control. Here is how they compare for privacy, performance, and
          reporting so you can choose the right Google Analytics alternative.
        </p>

        {/* Top contender cards (similar to Lucky Orange / Hotjar / Crazy Egg page) */}
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
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Plausible</strong> if you want simple, clear
              dashboards and privacy-first analytics that marketing and product
              teams will actually use. Pick <strong>Fathom</strong> if you like
              similarly lean reporting with a strong cookieless story. Go with{" "}
              <strong>Matomo</strong> when you need deep reports, plugins, and
              full control over hosting and data residency.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Plausible"
                  ? averages.plausible
                  : overallWinner === "Fathom"
                  ? averages.fathom
                  : averages.matomo}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Your choice should track your priorities: simplicity and speed,
              compliance messaging, or maximum control and reporting depth.
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
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">Fathom</th>
                  <th className="px-4 py-3">Matomo</th>
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.plausible}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.fathom}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.matomo}
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
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">Fathom</th>
                  <th className="px-4 py-3">Matomo</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.plausible,
                    row.fathom,
                    row.matomo
                  );
                  const winner =
                    winnerValue === row.plausible
                      ? "Plausible"
                      : winnerValue === row.fathom
                      ? "Fathom"
                      : "Matomo";
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
                          winner === "Plausible"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.plausible}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Fathom"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.fathom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Matomo"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.matomo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.plausible}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.fathom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.matomo}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Analytics & insights
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.analytics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Hosting & data
              residency
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-amber-600" /> Governance & control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
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
          <p className="text-sm text-slate-600">
            Pricing changes frequently and depends on traffic, event caps, and
            promos. Always confirm current limits directly on each vendor’s
            pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Plausible:</strong> Feels like a modern, minimal analytics
              dashboard. Most non-analysts can find core reports without
              training.
            </li>
            <li>
              <strong>Fathom:</strong> Even leaner than Plausible, intentionally
              focused on a few key reports so busy founders/marketers get quick
              answers.
            </li>
            <li>
              <strong>Matomo:</strong> Much closer to classic GA. Powerful but
              with more menus, settings, and concepts for teams to learn.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>
                SaaS / product teams needing simple privacy-first reporting:
              </strong>{" "}
              Plausible wins with clear dashboards and easy event tracking.
            </li>
            <li>
              <strong>
                Agencies and marketers selling into privacy-sensitive regions:
              </strong>{" "}
              Fathom wins with cookieless analytics and strong GDPR narrative.
            </li>
            <li>
              <strong>
                Enterprises and organisations with strict data residency:
              </strong>{" "}
              Matomo wins with on-prem/self-host options and rich plugin
              ecosystem.
            </li>
            <li>
              <strong>Teams mixing stacks:</strong> A common pattern is running
              Plausible or Fathom for everyday reporting and only deploying
              Matomo or another heavy suite when you need deep investigation.
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
              <h3 className="text-lg font-semibold">Plausible</h3>
              <p className="text-sm text-slate-700">
                Best when you need simple, privacy-first analytics that teams
                actually check, without the clutter of classic GA.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: SaaS, content sites, and agencies that want fast,
                clean reporting.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Fathom</h3>
              <p className="text-sm text-slate-700">
                Best when you care about cookieless analytics and a strong
                compliance story, with lean dashboards that busy leaders love.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Privacy-focused brands, consultants, and small teams
                that want quick traffic sanity checks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Matomo</h3>
              <p className="text-sm text-slate-700">
                Best for deep analytics, plugins, and full control over where
                data lives and how it is processed.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Enterprises, public-sector teams, and organisations
                with strict compliance and reporting needs.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: Plausible vs Fathom vs Matomo
          </h2>
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
