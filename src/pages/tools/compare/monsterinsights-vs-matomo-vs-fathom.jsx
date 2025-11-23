import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ShieldCheck,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "monsterinsights vs matomo vs fathom";
const canonical = buildCanonical(
  "/tools/compare/monsterinsights-vs-matomo-vs-fathom"
);

const brandMeta = {
  monsterinsights: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/monsterinsights.com",
  },
  matomo: {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/matomo.org",
  },
  "fathom analytics": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/usefathom.com",
  },
};

const contenders = [
  {
    key: "monsterinsights",
    name: "MonsterInsights",
    blurb:
      "WordPress GA4 connector with dashboards, enhanced ecommerce, and event tracking.",
    url: "/tools/monsterinsights",
  },
  {
    key: "matomo",
    name: "Matomo",
    blurb: "Privacy-focused analytics you can self-host or run in the cloud.",
    url: "/tools/matomo",
  },
  {
    key: "fathom analytics",
    name: "Fathom",
    blurb: "Lightweight, cookieless, privacy-first analytics with simple reports.",
    url: "/tools/fathom-analytics",
  },
];

const comparisonRows = [
  {
    label: "Setup",
    monsterinsights: "Wizard-based GA4 setup inside WordPress.",
    matomo: "Self-hosted or cloud; more configuration; GA alternative.",
    fathom: "Fast script install and dashboard; minimal setup.",
  },
  {
    label: "Privacy & data ownership",
    monsterinsights: "Relies on GA4; consent tools and anonymisation options.",
    matomo: "Complete data ownership; no third-party sharing by design.",
    fathom: "Cookieless, IP anonymisation, and privacy-first defaults.",
  },
  {
    label: "Ecommerce & events",
    monsterinsights:
      "Enhanced ecommerce for WooCommerce/EDD/MemberPress; auto events.",
    matomo:
      "Ecommerce and event tracking with configuration; strong reporting.",
    fathom: "Simple goals/events; focused rather than exhaustive.",
  },
  {
    label: "Performance",
    monsterinsights: "GA4 script + light plugin overhead.",
    matomo: "Depends on hosting and setup; generally heavier than Fathom.",
    fathom: "Very lightweight, performance-friendly script.",
  },
  {
    label: "Reporting UX",
    monsterinsights: "WP dashboards with GA4 reports in non-analyst language.",
    matomo: "Full analytics suite with many reports and segments.",
    fathom: "Clean, high-level reports with essentials only.",
  },
  {
    label: "Best for",
    monsterinsights:
      "WordPress sites wanting GA4 + ecommerce/events without leaving WP.",
    matomo:
      "Teams needing privacy, ownership, and deeper reporting as a GA alternative.",
    fathom:
      "Sites that want simple, privacy-first metrics and minimal overhead.",
  },
];

const scoreboard = [
  { label: "WordPress ease", monsterinsights: 9.2, matomo: 7.8, fathom: 8.0 },
  { label: "Privacy control", monsterinsights: 7.6, matomo: 9.4, fathom: 9.5 },
  {
    label: "Ecommerce & events",
    monsterinsights: 9.0,
    matomo: 8.8,
    fathom: 7.5,
  },
  {
    label: "Performance footprint",
    monsterinsights: 8.3,
    matomo: 7.8,
    fathom: 9.6,
  },
  {
    label: "Reporting depth",
    monsterinsights: 8.5,
    matomo: 9.2,
    fathom: 8.0,
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  monsterinsights: avg("monsterinsights"),
  matomo: avg("matomo"),
  fathom: avg("fathom"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "MonsterInsights Plus / Pro",
    tool: "MonsterInsights",
    billing: "Annual, per-site tiers",
    limits: "Feature gates by plan (ecommerce, forms, dimensions, etc.)",
    notes:
      "High value if you rely on GA4, WooCommerce, and WP-native dashboards for stakeholders.",
  },
  {
    plan: "Matomo Cloud / On-Prem",
    tool: "Matomo",
    billing: "Cloud: monthly; On-prem: hosting + optional support",
    limits: "Hits/traffic-based pricing in cloud; infra-bound on self-host",
    notes:
      "Best if you want a full GA alternative with strong privacy and can invest in setup.",
  },
  {
    plan: "Fathom Analytics",
    tool: "Fathom",
    billing: "Monthly or yearly; traffic-based tiers",
    limits: "Pageview-based tiers with all features included",
    notes:
      "Great for simple sites, SaaS, and publishers who want fast, privacy-first analytics.",
  },
];

const featureBullets = {
  integration: [
    "MonsterInsights: Deep WordPress integration with GA4, WooCommerce, forms, and membership plugins.",
    "Matomo: Tag manager, APIs, and integrations with popular CMS and ecommerce platforms.",
    "Fathom: Simple script embed, WordPress plugins, and easy multi-site support.",
  ],
  privacy: [
    "MonsterInsights: Uses GA4, so you inherit Google’s data model; consent banners and anonymisation help with compliance.",
    "Matomo: Designed for data ownership; self-hosting helps keep analytics inside your stack.",
    "Fathom: Cookieless by default with strong privacy messaging and simple compliance story.",
  ],
  reporting: [
    "MonsterInsights: Opinionated, simplified GA reports inside WordPress for non-analysts.",
    "Matomo: Rich reports, segmentation, funnels, and goal tracking for analysts and marketers.",
    "Fathom: One clean dashboard covering traffic, content, and goals without analysis overload.",
  ],
};

const prosCons = {
  monsterinsights: {
    pros: [
      "Fastest path to GA4 tracking from inside WordPress, including ecommerce/events.",
      "Non-technical users can read key metrics without logging into GA directly.",
      "Tight integrations with popular WP plugins and themes.",
    ],
    cons: [
      "You still rely on Google Analytics and its data policies.",
      "Not a standalone analytics platform outside of WordPress.",
      "Advanced GA analysis still requires logging into GA itself.",
    ],
  },
  matomo: {
    pros: [
      "Full ownership and control over your analytics data, especially when self-hosted.",
      "Rich reporting, segmentation, and goal tracking as a true GA alternative.",
      "Can help with stricter privacy/compliance requirements in some jurisdictions.",
    ],
    cons: [
      "Requires more setup and maintenance than hosted GA/Fathom.",
      "Self-hosting means you are responsible for performance and scaling.",
      "UI can feel heavier for very simple, high-level reporting needs.",
    ],
  },
  "fathom analytics": {
    pros: [
      "Extremely lightweight, fast-loading script with minimal performance impact.",
      "Cookieless, privacy-first analytics with clear messaging for visitors.",
      "Very simple, clean dashboard that busy founders and marketers actually check.",
    ],
    cons: [
      "Less depth than Matomo for advanced segmentation and reporting.",
      "Ecommerce and event tracking are simpler than MonsterInsights/Matomo.",
      "Not ideal if you need deep multi-channel or attribution analysis.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Fathom wins for privacy-first, lightweight analytics. Matomo wins for data ownership and deep reporting. MonsterInsights wins for the easiest GA4 setup on WordPress with enhanced ecommerce and events.",
  },
  {
    q: "Best for privacy and ownership?",
    a: "Matomo is best if you want full data ownership with self-hosted or private cloud options. Fathom is also privacy-first but fully hosted as a service.",
  },
  {
    q: "Best for WordPress ecommerce tracking?",
    a: "MonsterInsights is usually the best pick thanks to enhanced ecommerce integrations for WooCommerce, EDD, MemberPress, and more.",
  },
  {
    q: "Lowest performance impact?",
    a: "Fathom has the smallest footprint with a very lightweight script and cookieless tracking by default.",
  },
  {
    q: "Which is easiest for non-technical stakeholders?",
    a: "MonsterInsights and Fathom are the easiest. MonsterInsights surfaces GA4 metrics inside WordPress, while Fathom provides a single, simple dashboard.",
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
  const key = lowered.includes("monster")
    ? "monsterinsights"
    : lowered.includes("matomo")
    ? "matomo"
    : lowered.includes("fathom")
    ? "fathom analytics"
    : lowered;

  const meta =
    brandMeta[key] || {
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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function MonsterInsightsVsMatomoVsFathomPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`MonsterInsights vs Matomo vs Fathom – WordPress analytics compared (${YEAR})`}
        description="Compare MonsterInsights, Matomo, and Fathom on privacy, ecommerce/events, performance, and ease-of-use for WordPress and beyond."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress analytics comparison, ga4 vs matomo vs fathom`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Analytics
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          MonsterInsights vs Matomo vs Fathom ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>MonsterInsights</strong> makes GA4 tracking easy inside WordPress.{" "}
          <strong>Matomo</strong> offers full analytics ownership with strong privacy
          controls. <strong>Fathom</strong> is lightweight, cookieless, and simple.
          Here is how they compare across setup, privacy, ecommerce, performance, and
          reporting.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>MonsterInsights</strong> if you want GA4 set up in
              WordPress with ecommerce/events quickly. Choose <strong>Matomo</strong>{" "}
              when you need owned, privacy-centric analytics as a GA replacement.
              Choose <strong>Fathom</strong> when you want the simplest,
              privacy-first tracking with minimal performance impact.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner === "fathom"
                ? "Fathom"
                : overallWinner.charAt(0).toUpperCase() +
                  overallWinner.slice(1)}
              <span className="text-xs font-medium text-emerald-700">
                {" "}
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>
                  <strong>MonsterInsights:</strong> WordPress sites needing GA4 +
                  enhanced ecommerce without custom code.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>Matomo:</strong> Teams that prioritise privacy, data
                  ownership, and a full analytics suite.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Fathom:</strong> Simple sites, SaaS, and content projects
                  wanting fast, privacy-first analytics.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <div
                key={tool.key}
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <Link
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                  to={tool.url}
                >
                  Visit page
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">MonsterInsights</th>
                  <th className="px-4 py-3">Matomo</th>
                  <th className="px-4 py-3">Fathom</th>
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
                    <td className="px-4 py-3">{row.monsterinsights}</td>
                    <td className="px-4 py-3">{row.matomo}</td>
                    <td className="px-4 py-3">{row.fathom}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">MonsterInsights</th>
                  <th className="px-4 py-3">Matomo</th>
                  <th className="px-4 py-3">Fathom</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const mi = row.monsterinsights;
                  const ma = row.matomo;
                  const fa = row.fathom;
                  const maxVal = Math.max(mi, ma, fa);
                  const winner =
                    mi === ma && ma === fa
                      ? "Tie"
                      : maxVal === mi
                      ? "MonsterInsights"
                      : maxVal === ma
                      ? "Matomo"
                      : "Fathom";

                  return (
                    <tr
                      key={row.label}
                      className="align-middle odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "MonsterInsights"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {mi}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Matomo"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {ma}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Fathom"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {fa}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.monsterinsights}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.matomo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.fathom}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner === "fathom"
                      ? "Fathom"
                      : overallWinner.charAt(0).toUpperCase() +
                        overallWinner.slice(1)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Integration & ecosystem</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.integration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Privacy & compliance</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Reporting experience</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.reporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Billing</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.tool}</td>
                    <td className="px-4 py-3 text-slate-700">{row.billing}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing, traffic limits, and feature gates change frequently. Always confirm
            current details and data-processing terms on each vendor&apos;s pricing and
            legal pages before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>MonsterInsights:</strong> Feels like a WordPress-native
              experience. Non-technical site owners can see high-level GA4 metrics
              without leaving wp-admin.
            </li>
            <li>
              <strong>Matomo:</strong> Feels like a full analytics suite similar to GA.
              Analysts will enjoy the flexibility, but casual users may need guidance.
            </li>
            <li>
              <strong>Fathom:</strong> Very simple. Most people understand the dashboard
              at a glance, which increases the odds they will actually check it.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>WordPress ecommerce stores:</strong> MonsterInsights wins with
              enhanced ecommerce reports and plug-and-play GA4 setup.
            </li>
            <li>
              <strong>Privacy-driven organisations and public sector:</strong> Matomo
              wins thanks to self-hosting options and strong compliance story.
            </li>
            <li>
              <strong>Founders, creators, and simple SaaS sites:</strong> Fathom wins
              with its fast script and high-level insights that do not overwhelm.
            </li>
            <li>
              <strong>Teams migrating away from GA:</strong> Matomo is the closest
              drop-in replacement; Fathom works well if you mainly need top-line KPIs
              rather than deep analysis.
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
              <h3 className="text-lg font-semibold">MonsterInsights</h3>
              <p className="text-sm text-slate-700">
                Best when you already plan to use GA4 and want everything wired into
                WordPress, including ecommerce and events, with minimal engineering
                effort.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Site owners, marketers, and ecommerce teams on WordPress.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Matomo</h3>
              <p className="text-sm text-slate-700">
                Best when privacy, on-prem options, and deep analytics reports are
                non-negotiable, and you can invest in setup/maintenance.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Enterprises, public sector, privacy-focused orgs, and data
                teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Fathom</h3>
              <p className="text-sm text-slate-700">
                Best when you want fast, privacy-first analytics and clear metrics with
                almost no ongoing admin.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Small businesses, creators, SaaS, and content-heavy sites.
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
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
