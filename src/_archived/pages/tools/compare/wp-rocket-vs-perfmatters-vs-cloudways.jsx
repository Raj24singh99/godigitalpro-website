import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ArrowLeft,
  Workflow,
  Plug,
  BarChart3,
  Zap,
  Shield,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "wp rocket vs perfmatters vs cloudways";
const canonical = buildCanonical(
  "/tools/compare/wp-rocket-vs-perfmatters-vs-cloudways"
);

const brandMeta = {
  "wp rocket": {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/wp-rocket.me",
  },
  perfmatters: {
    gradient: "from-sky-500 via-indigo-500 to-purple-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/perfmatters.io",
  },
  cloudways: {
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
};

const contenders = [
  {
    key: "wp rocket",
    name: "WP Rocket",
    blurb:
      "All-in-one caching and front-end optimisation plugin for WordPress.",
    url: "https://wp-rocket.me/",
  },
  {
    key: "perfmatters",
    name: "Perfmatters",
    blurb:
      "Lightweight performance toolkit with script manager and granular toggles.",
    url: "https://perfmatters.io/",
  },
  {
    key: "cloudways",
    name: "Cloudways",
    blurb:
      "Managed cloud hosting with server-level caching (Varnish, Redis, Breeze).",
    url: "https://www.cloudways.com/",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    rocket: "Caching + page optimisation at plugin level",
    perfmatters: "Script control, bloat removal, and fine-grained toggles",
    cloudways: "Managed hosting and server-level caching/performance",
  },
  {
    label: "Best for",
    rocket: "Most WordPress sites wanting fast, safe performance gains",
    perfmatters:
      "Power users and agencies stacking it with host or plugin caching",
    cloudways:
      "Teams needing a high-performance hosting stack with more control",
  },
  {
    label: "Pricing model",
    rocket: "Annual license per site/bundle tiers",
    perfmatters: "Annual license with personal/business/unlimited tiers",
    cloudways: "Monthly hosting cost by server size and provider",
  },
  {
    label: "Key strength",
    rocket:
      "One-click presets for caching, file optimisation, lazy load, and CDN",
    perfmatters:
      "Disable unused scripts, emojis, embeds, Google Maps, and more per URL",
    cloudways:
      "High-performance servers, Breeze plugin, and built-in object caching",
  },
  {
    label: "Stacking strategy",
    rocket: "Works on almost any host; often main caching layer",
    perfmatters:
      "Frequently paired with WP Rocket or host caching for maximal control",
    cloudways:
      "Acts as infra layer; combine with WP Rocket + Perfmatters for full stack",
  },
  {
    label: "Core Web Vitals impact",
    rocket: "Biggest impact on LCP, FCP, and TTFB on weaker hosts",
    perfmatters:
      "Excellent at improving CLS and JS execution by cutting bloat and deferring",
    cloudways:
      "Massive TTFB and throughput gains when migrating from low-end shared hosting",
  },
];

const scoreboard = [
  {
    label: "Ease of setup",
    scores: { rocket: 9.6, perfmatters: 8.8, cloudways: 7.5 },
  },
  {
    label: "Feature depth",
    scores: { rocket: 9.0, perfmatters: 8.7, cloudways: 9.3 },
  },
  {
    label: "Value for agencies",
    scores: { rocket: 8.7, perfmatters: 9.1, cloudways: 8.4 },
  },
  {
    label: "Core Web Vitals impact",
    scores: { rocket: 9.2, perfmatters: 9.0, cloudways: 8.9 },
  },
  {
    label: "Stack flexibility",
    scores: { rocket: 9.1, perfmatters: 9.4, cloudways: 8.1 },
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
  rocket: avg("rocket"),
  perfmatters: avg("perfmatters"),
  cloudways: avg("cloudways"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerMap = {
  rocket: "WP Rocket",
  perfmatters: "Perfmatters",
  cloudways: "Cloudways",
};

const pricingTable = [
  {
    plan: "WP Rocket (Single / Plus / Infinite)",
    monthly: "Billed annually (effective from a few $/mo)",
    annual: "Tiered by number of sites",
    limits: "Site count; feature set same across tiers",
    notes:
      "Best value if you manage multiple sites; pricing pays off quickly via time saved.",
  },
  {
    plan: "Perfmatters (Personal / Business / Unlimited)",
    monthly: "Billed annually (low effective cost)",
    annual: "Tiered by number of sites",
    limits: "Site count; all performance features included",
    notes:
      "Excellent value for agencies needing granular script control on many sites.",
  },
  {
    plan: "Cloudways Managed Cloud (DO starter)",
    monthly: "From around ~$12–15/mo for small servers",
    annual: "Pay-as-you-go monthly billing",
    limits: "Server resources (RAM/CPU/storage/bandwidth)",
    notes:
      "Cost scales linearly with resources; ideal when you want to tune infra to your needs.",
  },
];

const featureBullets = {
  caching: [
    "WP Rocket: Page caching, browser caching, database cleanup, preload, and advanced cache rules in a single plugin.",
    "Perfmatters: Does not try to be a full caching plugin; instead complements existing caching with bloat reduction.",
    "Cloudways: Provides server-level caching via Varnish, Redis, and Breeze plugin on top of tuned PHP and web server stack.",
  ],
  frontend: [
    "WP Rocket: File optimisation, delay/defer JS, CSS optimisation, lazy-loading, critical CSS, and CDN integration.",
    "Perfmatters: Script manager per URL, DNS prefetch/preconnect, local Google Analytics hosting, disable emojis/embeds.",
    "Cloudways: Relies more on your chosen plugins/themes; less granular front-end toggles out of the box.",
  ],
  workflow: [
    "WP Rocket: Simple UI and presets; suited to marketers and non-devs with safe defaults.",
    "Perfmatters: Ideal for technical users or agencies who understand which scripts can be disabled safely.",
    "Cloudways: Best fit for teams comfortable managing servers and coordinating plugin choices at the app level.",
  ],
};

const prosCons = {
  "wp rocket": {
    pros: [
      "Very easy to configure with safe presets for most WordPress sites",
      "Covers caching, optimisation, and several Core Web Vitals levers in one plugin",
      "Works across a wide range of hosts with strong documentation and support",
    ],
    cons: [
      "Annual license cost per site or bundle, versus free host-level caching",
      "Can overlap with host caching if not configured carefully",
      "Advanced options still require understanding to avoid conflicts",
    ],
  },
  perfmatters: {
    pros: [
      "Granular script manager to disable bloat on a per-URL or global basis",
      "Great complement to any caching solution (including host-level caching)",
      "Helps tame heavy page builders, theme features, and third-party scripts",
    ],
    cons: [
      "Best results require understanding what each script does",
      "Not a full caching solution on its own",
      "Misconfiguration can break specific pages if changes are not tested",
    ],
  },
  cloudways: {
    pros: [
      "Big jump in TTFB and throughput when moving from low-end shared hosting",
      "Managed cloud layer with easy scaling, staging, and backups",
      "Supports stacking with WP Rocket and Perfmatters for maximal performance",
    ],
    cons: [
      "More complex than typical shared hosts for non-technical users",
      "You still need to choose and configure caching/optimisation plugins well",
      "Costs can grow if servers are over-provisioned or poorly tuned",
    ],
  },
};

const faqs = [
  {
    q: `Do I need both WP Rocket and Perfmatters in ${YEAR}?`,
    a: "Many performance-focused sites run both: WP Rocket handles caching and file optimisation while Perfmatters disables unused scripts, emojis, embeds, and third-party bloat. Together they provide deeper control and more reliable Core Web Vitals wins.",
  },
  {
    q: "If I host on Cloudways, should I still use WP Rocket?",
    a: "Yes, in most cases. Cloudways handles server-level caching and infra performance, while WP Rocket adds front-end optimisation, delay JS, lazy load, database cleanup, and CDN integration that the host does not cover.",
  },
  {
    q: "Which delivers the biggest speed boost?",
    a: "Cloudways tends to deliver the largest jump when you migrate from a low-end shared host. WP Rocket gives the biggest plugin-based gains on an existing host. Perfmatters shines when your site is bloated with unnecessary scripts and heavy themes.",
  },
  {
    q: "How should agencies stack them?",
    a: "A common agency stack is: host on Cloudways (or similar), install WP Rocket as the primary caching/optimisation plugin, and layer Perfmatters for script management and extra CWV tuning. This trio consistently passes Core Web Vitals with the right configuration.",
  },
  {
    q: "Can WP Rocket or Perfmatters replace good hosting?",
    a: "No. Caching plugins cannot fully compensate for overloaded or low-quality hosting. You still need a solid host (like Cloudways or a strong managed provider), then use WP Rocket and Perfmatters to squeeze maximum performance from the stack.",
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

const LogoBadge = ({ name, metaKey }) => {
  const meta =
    brandMeta[metaKey] || {
      gradient: "from-slate-500 to-slate-700",
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

export default function WPRocketVsPerfmattersVsCloudwaysPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WP Rocket vs Perfmatters vs Cloudways (${YEAR}) – WordPress performance stack compared`}
        description="See whether WP Rocket, Perfmatters, or Cloudways should power your WordPress performance stack. Compare pricing, features, and how they work together for Core Web Vitals."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress performance comparison, wp rocket vs perfmatters, perfmatters vs cloudways`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress performance stack
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WP Rocket vs Perfmatters vs Cloudways ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          WP Rocket handles caching and front-end optimisation, Perfmatters offers
          granular script control, and Cloudways delivers managed hosting with
          server-level caching. Use this comparison to decide which combination
          delivers the biggest Core Web Vitals boost for your WordPress stack.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
                <LogoBadge name={card.name} metaKey={card.key} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + stack guidance */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>WP Rocket</strong> is the easiest performance win for most
              WordPress sites. <strong>Perfmatters</strong> is the perfect
              companion when you need fine-grained script and bloat control.{" "}
              <strong>Cloudways</strong> upgrades your infrastructure layer. For
              serious performance, many stacks successfully run all three.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Scoreboard winner:{" "}
              {winnerMap[overallWinner]}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> Recommended stack
            </div>
            <p className="text-sm text-slate-700">
              For most modern sites: host on{" "}
              <strong>Cloudways (or similar)</strong>, install{" "}
              <strong>WP Rocket</strong> for caching and front-end optimisation,
              and add <strong>Perfmatters</strong> where you need tighter script
              control and bloat removal.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When to pick just one
            </div>
            <p className="text-sm text-slate-700">
              Locked into shared hosting? Start with <strong>WP Rocket</strong>.
              Already have solid caching? Add <strong>Perfmatters</strong> for
              extra CWV gains. Upgrading from a weak host? Move to{" "}
              <strong>Cloudways</strong> first, then layer plugins as needed.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WP Rocket</th>
                  <th className="px-4 py-3">Perfmatters</th>
                  <th className="px-4 py-3">Cloudways</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.rocket}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.perfmatters}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.cloudways}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">WP Rocket</th>
                  <th className="px-4 py-3">Perfmatters</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const top = Object.entries(row.scores).sort(
                    (a, b) => b[1] - a[1]
                  );
                  const winnerKey = top[0][0];
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.rocket}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.perfmatters}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.cloudways}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">
                        {winnerMap[winnerKey]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.rocket}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.perfmatters}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.cloudways}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-800">
                    {winnerMap[overallWinner]}
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
              <Zap className="h-5 w-5 text-amber-600" /> Caching & server layer
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.caching.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Front-end & bloat
              control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.frontend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-slate-700" /> Workflow & ownership
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
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
                  <th className="px-4 py-3">Product / Plan</th>
                  <th className="px-4 py-3">Monthly (effective)</th>
                  <th className="px-4 py-3">Annual billing</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing shifts frequently and depends on promos, server sizes, and
            site counts. Always confirm current pricing on each vendor&apos;s
            site before standardising your stack.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WP Rocket:</strong> Designed for non-technical site owners
              and marketers. Most of the value comes from enabling a few toggles
              and following their documented best practices.
            </li>
            <li>
              <strong>Perfmatters:</strong> Slightly more technical; best if you
              understand what each script and feature does. Ideal in agency
              hands where you can templatise which toggles to apply per stack.
            </li>
            <li>
              <strong>Cloudways:</strong> Requires more infrastructure comfort.
              You manage servers, scaling, and app-level choices, but the UI is
              friendlier than raw cloud providers (AWS/GCP).
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Blogs and content sites on shared hosting:</strong>{" "}
              <span className="font-semibold">WP Rocket</span> alone often
              delivers a noticeable speed jump and simpler CWV compliance.
            </li>
            <li>
              <strong>Heavy builder sites (Elementor, Divi, WPBakery):</strong>{" "}
              <span className="font-semibold">Perfmatters</span> excels at
              disabling unused scripts and features, especially when paired with
              WP Rocket or host caching.
            </li>
            <li>
              <strong>High-traffic or ecommerce on weak hosting:</strong> Move
              to <span className="font-semibold">Cloudways</span> first to fix
              infrastructure, then add WP Rocket and optionally Perfmatters to
              refine front-end performance.
            </li>
            <li>
              <strong>Agencies managing many sites:</strong> Standardise on a
              combination of <span className="font-semibold">Cloudways</span>{" "}
              (or similar) + <span className="font-semibold">WP Rocket</span> +
              <span className="font-semibold"> Perfmatters</span> and document
              your default configuration as part of onboarding.
            </li>
          </ul>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">WP Rocket</h3>
              <p className="text-sm text-slate-700">
                Best when you want fast, safe wins on almost any host without
                learning every nuance of performance tuning.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Bloggers, SMB owners, and marketers who manage their
                own WordPress sites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Perfmatters</h3>
              <p className="text-sm text-slate-700">
                Best when you need to surgically disable scripts and features to
                fix CLS, JS bloat, and layout shifts across complex sites.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Agencies, technical freelancers, and advanced site
                owners who want deep control.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Cloudways</h3>
              <p className="text-sm text-slate-700">
                Best when your primary bottleneck is poor hosting, not just
                caching, and you want more power without managing raw cloud
                infra.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Growing sites, ecommerce, and agencies ready to own
                their hosting strategy.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
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
