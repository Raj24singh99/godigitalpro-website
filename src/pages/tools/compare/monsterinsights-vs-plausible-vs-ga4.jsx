import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Shield,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "monsterinsights vs plausible vs ga4";
const canonical = buildCanonical(
  "/tools/compare/monsterinsights-vs-plausible-vs-ga4"
);

const brandMeta = {
  monsterinsights: {
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/monsterinsights.com",
  },
  plausible: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/plausible.io",
  },
  ga4: {
    gradient: "from-indigo-500 via-blue-500 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/analytics.google.com",
  },
};

const contenders = [
  {
    key: "monsterinsights",
    name: "MonsterInsights",
    blurb: "WordPress GA4 connector with dashboards and ecommerce.",
    url: "/tools/monsterinsights",
  },
  {
    key: "plausible",
    name: "Plausible",
    blurb: "Cookieless, privacy-first analytics with simple reports.",
    url: "/tools/plausible",
  },
  {
    key: "ga4",
    name: "GA4 (native)",
    blurb: "Full-featured Google Analytics interface and explorations.",
    url: "https://analytics.google.com/",
  },
];

const comparisonRows = [
  {
    label: "Setup",
    monsterinsights: "Wizard-based GA4 setup inside WordPress; no code.",
    plausible: "Drop-in lightweight script; quick domain settings.",
    ga4: "Manual property and stream setup in GA interface.",
  },
  {
    label: "Privacy & compliance",
    monsterinsights:
      "Uses GA4 scripts; consent banners and anonymisation supported.",
    plausible: "Cookieless, privacy-first; GDPR-friendly defaults.",
    ga4: "Requires configuration for consent, retention, and IP masking.",
  },
  {
    label: "Ecommerce & events",
    monsterinsights:
      "Enhanced ecommerce + auto events for common WP plugins.",
    plausible:
      "Custom events/goals; ecommerce via API or backend integration.",
    ga4: "Full event-based model; powerful but requires manual setup.",
  },
  {
    label: "Performance",
    monsterinsights: "GA4 script + light plugin overhead in WordPress.",
    plausible: "Very lightweight script; <1KB and minimal impact.",
    ga4: "Heavier script load; depends on tags and configuration.",
  },
  {
    label: "Reporting UX",
    monsterinsights:
      "Opinionated reports inside WP for non-analysts (marketing, owners).",
    plausible:
      "Clean, high-level dashboard; easy for founders and marketers.",
    ga4: "Deep, flexible reports and explorations for analysts.",
  },
  {
    label: "Best for",
    monsterinsights:
      "WP users wanting GA4 ease + ecommerce/events surfaced in wp-admin.",
    plausible:
      "Teams wanting simple, privacy-first analytics with clear top-line KPIs.",
    ga4: "Analysts needing maximum control, explorations, and integrations.",
  },
];

const scoreboard = [
  {
    label: "WordPress ease",
    monsterinsights: 9.3,
    plausible: 8.2,
    ga4: 6.8,
  },
  {
    label: "Privacy",
    monsterinsights: 7.6,
    plausible: 9.5,
    ga4: 7.0,
  },
  {
    label: "Ecommerce & events",
    monsterinsights: 9.0,
    plausible: 7.8,
    ga4: 9.3,
  },
  {
    label: "Performance",
    monsterinsights: 8.3,
    plausible: 9.6,
    ga4: 7.2,
  },
  {
    label: "Reporting depth",
    monsterinsights: 8.5,
    plausible: 7.9,
    ga4: 9.5,
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  monsterinsights: avg("monsterinsights"),
  plausible: avg("plausible"),
  ga4: avg("ga4"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "MonsterInsights Plus / Pro",
    tool: "MonsterInsights",
    billing: "Annual, per-site tiers",
    limits: "Features and sites gated by plan (ecommerce, forms, dimensions).",
    notes:
      "Great value if you rely on GA4 plus WooCommerce/EDD and want reports in WordPress.",
  },
  {
    plan: "Plausible site plans",
    tool: "Plausible",
    billing: "Monthly or annual; traffic-based tiers",
    limits: "Pageviews per month; all features included across tiers.",
    notes:
      "Simple pricing for sites that want privacy-first analytics without add-ons.",
  },
  {
    plan: "GA4 (native)",
    tool: "GA4",
    billing: "Free core; BigQuery and add-ons can add cost",
    limits: "Sampling/quotas at scale; BigQuery export costs on usage.",
    notes:
      "Best when you already use Google stack and can manage tagging and data volumes.",
  },
];

const featureBullets = {
  integration: [
    "MonsterInsights: Deep WordPress integration for GA4, WooCommerce, forms, membership plugins, and more.",
    "Plausible: Simple JS snippet, official WP plugin, and integrations via API/webhooks.",
    "GA4: Powerful integrations via GTM, gtag, and native connectors across Google ecosystem.",
  ],
  privacy: [
    "MonsterInsights: Relies on GA4, but adds consent banners and anonymisation tools on WordPress.",
    "Plausible: Built for privacy-first tracking; cookieless and no personal data by default.",
    "GA4: Can be configured for GDPR/CPRA, but needs careful consent and data retention setup.",
  ],
  reporting: [
    "MonsterInsights: Opinionated, simplified dashboards for non-technical stakeholders inside wp-admin.",
    "Plausible: High-level, easy-to-read reports focused on content, traffic, and goals.",
    "GA4: Deep reporting, explorations, funnels, and attribution for analysts and larger teams.",
  ],
};

const prosCons = {
  monsterinsights: {
    pros: [
      "Fastest way for WordPress users to get GA4 running with ecommerce and events.",
      "Non-technical marketers and owners can view reports directly in WordPress.",
      "Strong integrations with popular WP plugins and themes.",
    ],
    cons: [
      "Still relies on GA4 and Google’s data policies.",
      "Not a standalone analytics platform outside WordPress.",
      "Advanced GA analysis still requires logging into the GA4 interface.",
    ],
  },
  plausible: {
    pros: [
      "Cookieless, lightweight tracking that is privacy-first by design.",
      "Simple, clean dashboard that busy founders and marketers can understand immediately.",
      "Straightforward pricing with all features included across tiers.",
    ],
    cons: [
      "Less depth than GA4 for explorations and attribution.",
      "Ecommerce and event tracking are simpler and can require API work.",
      "Not ideal if you need multi-touch attribution or very granular analysis.",
    ],
  },
  ga4: {
    pros: [
      "Most powerful event-based analytics in this group with explorations and attribution.",
      "Deep integration with Google Ads, Search Console, and BigQuery.",
      "Highly configurable for complex funnels, audiences, and cross-platform tracking.",
    ],
    cons: [
      "UI is complex for non-analysts and has a learning curve.",
      "Requires careful setup for consent, privacy, and meaningful events.",
      "Without a front-end like MonsterInsights, stakeholders may rarely check it.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Plausible wins for privacy-first simplicity and performance. MonsterInsights wins for GA4 ease inside WordPress with ecommerce/events. GA4 native wins for the deepest analysis and custom reporting.",
  },
  {
    q: "Best for privacy?",
    a: "Plausible is the best choice if privacy and cookieless tracking are top priorities. GA4 can be configured for compliance but needs careful setup; MonsterInsights still uses GA scripts but adds consent and anonymisation options.",
  },
  {
    q: "Best for WordPress ecommerce?",
    a: "MonsterInsights is usually the best fit, thanks to enhanced ecommerce, auto events, and tight integration with WooCommerce/EDD and other plugins.",
  },
  {
    q: "Best for advanced analysis?",
    a: "GA4 native wins—its full interface, explorations, funnels, and integrations with BigQuery and Google Ads make it the most powerful analytics option.",
  },
  {
    q: "Can I use them together?",
    a: "Yes. A common stack is GA4 (native) for deep analysis, MonsterInsights for easy WordPress dashboards, and Plausible as a privacy-first, lightweight top-line view.",
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
    : lowered.includes("plausible")
    ? "plausible"
    : lowered.includes("ga4")
    ? "ga4"
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

export default function MonsterInsightsVsPlausibleVsGA4Page() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`MonsterInsights vs Plausible vs GA4 – WordPress analytics choice (${YEAR})`}
        description="Compare MonsterInsights, Plausible, and GA4 native on privacy, ecommerce/events, performance, and ease-of-use for WordPress and marketing teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, analytics comparison, wordpress ga4 vs plausible`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Analytics
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          MonsterInsights vs Plausible vs GA4 ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>MonsterInsights</strong> keeps GA4 easy inside WordPress.{" "}
          <strong>Plausible</strong> is privacy-first and lightweight.{" "}
          <strong>GA4 native</strong> offers the deepest analysis and integrations,
          but requires more setup and analytics skills. Here is how they compare so
          you can pick the right stack.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>MonsterInsights</strong> for GA4 dashboards and
              ecommerce/event tracking inside WordPress. Choose{" "}
              <strong>Plausible</strong> for privacy-first, cookieless analytics with
              minimal scripts. Choose <strong>GA4 native</strong> if you need the full
              power of Google Analytics and have the resources to configure it
              properly.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinner === "ga4"
                ? "GA4"
                : overallWinner.charAt(0).toUpperCase() +
                  overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-emerald-700">
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
                  <strong>MonsterInsights</strong> for GA4 + ecommerce and events
                  surfaced in WordPress.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 text-orange-600" />
                <span>
                  <strong>Plausible</strong> for simple, privacy-first, cookieless
                  tracking.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>GA4 native</strong> for advanced analysis and custom
                  reporting.
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
                <a
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:text-emerald-600"
                  href={tool.url}
                  target={tool.url.startsWith("http") ? "_blank" : undefined}
                  rel={tool.url.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  Visit page
                </a>
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
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">GA4 (native)</th>
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
                    <td className="px-4 py-3">{row.plausible}</td>
                    <td className="px-4 py-3">{row.ga4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
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
                  <th className="px-4 py-3">Plausible</th>
                  <th className="px-4 py-3">GA4 (native)</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const mi = row.monsterinsights;
                  const pl = row.plausible;
                  const ga = row.ga4;
                  const maxVal = Math.max(mi, pl, ga);
                  const winner =
                    mi === pl && pl === ga
                      ? "Tie"
                      : maxVal === mi
                      ? "MonsterInsights"
                      : maxVal === pl
                      ? "Plausible"
                      : "GA4";

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
                          winner === "Plausible"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {pl}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "GA4"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {ga}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-orange-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.monsterinsights}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.plausible}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.ga4}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner === "ga4"
                      ? "GA4"
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
            Pricing, quotas, and feature gates change frequently. Always confirm
            current details, data-processing terms, and overage handling on each
            vendor&apos;s pricing and legal pages before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>MonsterInsights:</strong> Feels like a native WordPress
              experience. Site owners and marketers can view GA4 metrics in wp-admin
              without touching the GA interface.
            </li>
            <li>
              <strong>Plausible:</strong> Very clean, minimal UI focused on traffic,
              content, and goals. Almost no onboarding needed for non-technical
              users.
            </li>
            <li>
              <strong>GA4 native:</strong> Powerful but complex; best when you have
              someone comfortable with analytics tooling, tagging, and data models.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>WordPress ecommerce sites:</strong> MonsterInsights wins with
              enhanced ecommerce, auto events, and GA4 wiring in WP.
            </li>
            <li>
              <strong>Privacy-focused blogs, SaaS, and publishers:</strong>{" "}
              Plausible wins with cookieless tracking and fast scripts.
            </li>
            <li>
              <strong>Data-driven marketing and growth teams:</strong> GA4 wins for
              explorations, funnels, audiences, and integration with Google Ads and
              BigQuery.
            </li>
            <li>
              <strong>Teams wanting layered analytics:</strong> Use GA4 as the core
              analytics engine, MonsterInsights for WordPress reporting, and
              Plausible as a privacy-first top-line view for stakeholders.
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
                WordPress, including enhanced ecommerce, events, and simple
                dashboards.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: WP site owners, marketers, and ecommerce teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Plausible</h3>
              <p className="text-sm text-slate-700">
                Best when privacy, fast pages, and simple storytelling around
                traffic and content are more important than deep analysis.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Creators, small SaaS, agencies managing many sites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">GA4 (native)</h3>
              <p className="text-sm text-slate-700">
                Best when you need deep event-based analytics, complex funnels, and
                close integration with Google Ads and BigQuery.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Growth teams, larger marketing orgs, and data analysts.
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
