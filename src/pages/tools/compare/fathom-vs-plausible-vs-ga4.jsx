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
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/fathom-vs-plausible-vs-ga4");
const primaryKeyword = "fathom vs plausible vs ga4";

const brandMeta = {
  fathom: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/usefathom.com",
  },
  plausible: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/plausible.io",
  },
  ga4: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/analytics.google.com",
  },
};

const contenders = [
  {
    key: "fathom",
    name: "Fathom",
    blurb: "Privacy-first, simple, cookieless analytics.",
    url: "https://usefathom.com/",
  },
  {
    key: "plausible",
    name: "Plausible",
    blurb: "Lightweight privacy analytics with clean dashboards.",
    url: "https://plausible.io/",
  },
  {
    key: "ga4",
    name: "GA4",
    blurb: "Deep event analytics, attribution, and Ads integrations.",
    url: "https://analytics.google.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    fathom: "Simple, privacy-first analytics for content and marketing sites",
    plausible: "Lean analytics for startups, SaaS, and privacy-focused brands",
    ga4: "Complex funnels, Ads attribution, and event-heavy products",
  },
  {
    label: "Privacy & compliance",
    fathom: "GDPR-friendly, cookieless by default, EU isolation options",
    plausible: "GDPR-friendly, cookieless by default, self-host option",
    ga4: "Requires consent / cookieless setup; US data flows unless configured",
  },
  {
    label: "Ease of setup/use",
    fathom: "Single script, minimal UI, easy for non-analysts",
    plausible: "Single script, intuitive reports and goals/events",
    ga4: "Powerful but complex; events, parameters, and reports need modeling",
  },
  {
    label: "Reporting depth",
    fathom: "Lean reports—traffic, pages, goals—fast to interpret",
    plausible: "Clean dashboards with events/goals and campaign tracking",
    ga4: "Deep event reports, funnels, attribution, custom dimensions",
  },
  {
    label: "Performance / script weight",
    fathom: "Very light script; negligible impact on page speed",
    plausible: "Lightweight script; minimal performance impact",
    ga4: "Heavier script; tunable but adds more overhead",
  },
  {
    label: "Attribution & Ads integrations",
    fathom: "Basic UTM visibility; no native Ads integrations",
    plausible: "Good UTM/event tracking; limited Ads integrations",
    ga4: "Native Google Ads/BigQuery connectors; strongest attribution depth",
  },
  {
    label: "Pricing feel",
    fathom: "Pageview-based tiers; strong value for lean teams",
    plausible: "Pageview-based tiers; very affordable and transparent",
    ga4: "Core free; GA4 360 and BigQuery usage add cost at scale",
  },
];

const scoreboard = [
  { label: "Privacy & compliance", fathom: 9.6, plausible: 9.4, ga4: 7.0 },
  { label: "Ease of setup/use", fathom: 9.2, plausible: 9.0, ga4: 6.5 },
  { label: "Reporting depth", fathom: 7.8, plausible: 7.6, ga4: 9.5 },
  { label: "Performance / speed impact", fathom: 9.5, plausible: 9.3, ga4: 8.0 },
  { label: "Attribution & Ads integrations", fathom: 7.0, plausible: 6.8, ga4: 9.4 },
];

const pricingTable = [
  {
    plan: "Fathom (typical mid-tier plans)",
    monthly: "From roughly ~$14/month upward",
    annual: "Annual options bring per-month cost down",
    limits: "Pageview-based tiers, simple overages",
    notes: "Includes cookieless tracking, EU isolation, and privacy-first defaults.",
  },
  {
    plan: "Plausible (mid-range tiers)",
    monthly: "From roughly ~$9/month",
    annual: "Cheaper on annual billing",
    limits: "Pageview-based tiers; self-host option available",
    notes: "Lean dashboards, privacy-first design, strong value for startups.",
  },
  {
    plan: "GA4 (standard)",
    monthly: "Free (core GA4)",
    annual: "—",
    limits: "Sampling at high volumes; BigQuery export and GA4 360 add cost",
    notes: "Best for deep event and Ads attribution; heavier setup and governance.",
  },
];

const featureBullets = {
  privacy: [
    "Fathom: Cookieless by default, minimal data collection, and options for EU-based hosting for stricter compliance.",
    "Plausible: Privacy-first, cookieless tracking with a strong stance on not using personal data; can be self-hosted.",
    "GA4: Can be configured to be more privacy-conscious, but requires consent banners, IP controls, and governance work.",
  ],
  reporting: [
    "Fathom: Focuses on the essentials—pageviews, referrers, goals—so teams can act quickly without analysis paralysis.",
    "Plausible: Adds flexible events, goals, and campaign tracking while keeping dashboards clean and readable.",
    "GA4: Offers custom events, funnels, explorations, audiences, and attribution modeling for advanced analytics teams.",
  ],
  implementation: [
    "Fathom: One lightweight script, minimal configuration, and shareable dashboards; ideal when you want to “set and forget.”",
    "Plausible: Simple script install, with easy event/goal setup via UI or custom events for more advanced tracking.",
    "GA4: Requires planning measurement strategy, events, parameters, and potentially GTM or dev support to get right.",
  ],
};

const faqs = [
  {
    q: `Is Fathom or Plausible better than GA4 in ${YEAR}?`,
    a: "For privacy-first, simple reporting, Fathom and Plausible are easier, lighter, and faster to understand than GA4. GA4 is still the best choice if you need deep event analytics, advanced funnels, and tight Ads/BigQuery integration.",
  },
  {
    q: "Which is best for privacy-first sites?",
    a: "Fathom and Plausible are both excellent for privacy-first sites. They are cookieless by default, GDPR-friendly, and avoid the data hoarding model of legacy analytics tools.",
  },
  {
    q: "Do Fathom/Plausible replace GA4 entirely?",
    a: "They can if your needs are simple—traffic, content performance, and a few key goals. Many teams keep GA4 just for Ads/attribution and run Fathom or Plausible in parallel for a fast, privacy-friendly view.",
  },
  {
    q: "Which is easiest for non-analysts?",
    a: "Fathom and Plausible are far easier for non-analysts because the dashboards are lean and opinionated. GA4 has a steeper learning curve and is better suited to teams with analytics or growth specialists.",
  },
  {
    q: "Which works best with Google Ads?",
    a: "GA4 is the clear winner if you rely heavily on Google Ads, as it plugs directly into the Google Marketing Platform and attribution workflows.",
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
  fathom: {
    pros: [
      "Cookieless, privacy-first analytics by default",
      "Very light script with minimal impact on performance",
      "Simple goals and dashboards that teams actually read",
    ],
    cons: [
      "Limited deep event and cohort analysis vs GA4",
      "No native Google Ads or BigQuery connectors",
      "Fewer advanced segmentation options",
    ],
  },
  plausible: {
    pros: [
      "Privacy-friendly with clean, modern UI",
      "Goals and events are straightforward to configure",
      "Self-hosting option for strict compliance or control",
    ],
    cons: [
      "Attribution and funnel depth are lighter than GA4",
      "Fewer native integrations than the Google ecosystem",
      "Less granular user-level analysis out of the box",
    ],
  },
  ga4: {
    pros: [
      "Deep event-based measurement model and funnels",
      "Native attribution, Ads, and BigQuery connectors",
      "Highly customizable reports and exploration tools",
    ],
    cons: [
      "Steep learning curve and complex setup",
      "Heavier script and potential performance impact",
      "Privacy compliance requires extra configuration and governance",
    ],
  },
};

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  fathom: avg("fathom"),
  plausible: avg("plausible"),
  ga4: avg("ga4"),
};

const overallWinner = (() => {
  const tools = ["fathom", "plausible", "ga4"];
  const values = tools.map((t) => parseFloat(averages[t]));
  const max = Math.max(...values);
  if (max === parseFloat(averages.fathom)) return "Fathom";
  if (max === parseFloat(averages.plausible)) return "Plausible";
  return "GA4";
})();

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("fathom")
    ? "fathom"
    : name.toLowerCase().includes("plausible")
    ? "plausible"
    : name.toLowerCase().includes("ga4")
    ? "ga4"
    : name.toLowerCase();

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

export default function FathomVsPlausibleVsGA4Page() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Fathom vs Plausible vs GA4 (${YEAR}) – Analytics comparison`}
        description="Compare Fathom, Plausible, and GA4 on privacy, ease of use, reporting depth, performance, pricing, and Ads integrations so you can choose the right analytics stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, privacy analytics, ga4 alternatives, cookieless analytics, marketing analytics tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Analytics tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Fathom vs Plausible vs GA4 ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Fathom and Plausible focus on privacy-first, lightweight analytics that are easy for
          marketers and founders to read. GA4 is the event-analytics heavyweight with deep funnels,
          attribution, and tight Google Ads/BigQuery integrations. Below is a structured breakdown
          so you can pick the right analytics mix for your stack.
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
                <Activity className="h-5 w-5 text-white/80" />
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
              Choose <strong>Fathom</strong> or <strong>Plausible</strong> if you want
              privacy-first, cookieless analytics with simple dashboards your team will actually
              check. Go with <strong>GA4</strong> if you need deep event data, funnels, and tight
              Google Ads and BigQuery integrations. Many teams pair GA4 (for ads/attribution) with
              Fathom or Plausible (for a clean, privacy-first view).
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Fathom"
                  ? averages.fathom
                  : overallWinner === "Plausible"
                  ? averages.plausible
                  : averages.ga4}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” analytics stack depends on whether your priority is{" "}
              <strong>privacy & simplicity</strong> (Fathom/Plausible) or{" "}
              <strong>deep event and Ads performance</strong> (GA4).
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
                  <th className="px-4 py-3">Fathom</th>
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">GA4</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.fathom}</td>
                    <td className="px-4 py-3 text-slate-700">{row.plausible}</td>
                    <td className="px-4 py-3 text-slate-700">{row.ga4}</td>
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
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Fathom</th>
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">GA4</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const maxScore = Math.max(row.fathom, row.plausible, row.ga4);
                  const winner =
                    row.fathom === row.plausible && row.plausible === row.ga4
                      ? "Tie"
                      : maxScore === row.fathom
                      ? "Fathom"
                      : maxScore === row.plausible
                      ? "Plausible"
                      : "GA4";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Fathom" ? "font-semibold text-emerald-700" : "text-slate-700"
                        }`}
                      >
                        {row.fathom}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Plausible"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.plausible}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "GA4" ? "font-semibold text-amber-700" : "text-slate-700"
                        }`}
                      >
                        {row.ga4}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.fathom}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.plausible}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.ga4}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
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
              <Shield className="h-5 w-5 text-emerald-600" /> Privacy & compliance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Reporting & insights
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.reporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Activity className="h-5 w-5 text-amber-600" /> Implementation & performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
            Pricing for Fathom, Plausible, and GA4 (including GA4 360 and BigQuery costs) changes
            frequently and depends on traffic volume, storage, and promos. Always confirm current
            pricing and limits on their official pricing pages before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Fathom:</strong> Feels like a focused dashboard for marketers and founders.
              Very little setup, and the key answers (traffic, top content, goals) are front-and-center.
            </li>
            <li>
              <strong>Plausible:</strong> Clean, modern UI that stays out of the way. Easy to use
              for teams that want more flexibility than Fathom without GA4-level complexity.
            </li>
            <li>
              <strong>GA4:</strong> Powerful but busy. Best when you have someone who can think in
              events, parameters, and funnels, and is comfortable building reports.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Content sites, blogs, and marketing sites:</strong> Fathom or Plausible win
              with fast, privacy-first tracking and dashboards anyone can read.
            </li>
            <li>
              <strong>Bootstrapped SaaS and startups:</strong> Plausible is a strong all-rounder:
              privacy-first, affordable, and flexible enough for events and goals.
            </li>
            <li>
              <strong>Performance marketing, multi-channel attribution, and Ads:</strong> GA4 wins
              thanks to its deep Google Ads and BigQuery integrations.
            </li>
            <li>
              <strong>Teams worried about compliance and user trust:</strong> Fathom and Plausible
              win with cookieless analytics and a minimal data footprint.
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
              <h3 className="text-lg font-semibold">Fathom</h3>
              <p className="text-sm text-slate-700">
                Best when you want a privacy-first, ultra-simple analytics layer that does not slow
                your site down or overwhelm stakeholders.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Blogs, marketing sites, privacy-led brands, and non-technical teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Plausible</h3>
              <p className="text-sm text-slate-700">
                Best for teams needing a bit more flexibility—events, goals, and campaigns—without
                jumping into full GA4 complexity.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: SaaS, startups, agencies, and product teams that still care about
                privacy.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">GA4</h3>
              <p className="text-sm text-slate-700">
                Best for deep event analytics, complex funnels, and serious performance marketing
                where you live inside the Google Ads ecosystem.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Performance marketers, larger product orgs, and data teams.
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
            <ArrowLeft className="h-4 w-4" /> Back to Tools hub
          </Link>
        </div>
      </div>
    </main>
  );
}
