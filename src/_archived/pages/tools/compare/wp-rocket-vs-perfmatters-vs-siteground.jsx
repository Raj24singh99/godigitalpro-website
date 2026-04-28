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
const primaryKeyword = "wp rocket vs perfmatters vs siteground optimizer";
const canonical = buildCanonical(
  "/tools/compare/wp-rocket-vs-perfmatters-vs-siteground"
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
  siteground: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  {
    key: "wp rocket",
    name: "WP Rocket",
    blurb: "Premium WordPress caching and page optimisation plugin.",
    url: "https://wp-rocket.me/",
  },
  {
    key: "perfmatters",
    name: "Perfmatters",
    blurb:
      "Lightweight performance toolkit with script manager, CDN rewrites, and bloat control.",
    url: "https://perfmatters.io/",
  },
  {
    key: "siteground",
    name: "SiteGround Optimizer",
    blurb:
      "SiteGround’s free caching and optimisation plugin tightly integrated with its hosting.",
    url: "https://www.siteground.com/",
  },
];

const comparisonRows = [
  {
    label: "Works on any host",
    rocket: "Yes, host-agnostic plugin",
    perfmatters: "Yes, host-agnostic plugin",
    siteground: "No, only on SiteGround hosting",
  },
  {
    label: "Caching features",
    rocket: "Full-page cache, preloading, mobile cache, browser caching",
    perfmatters: "No page cache; complements existing caching",
    siteground: "Dynamic cache, file-based cache, Memcached via host stack",
  },
  {
    label: "Additional optimisations",
    rocket:
      "Delay JS, CSS/JS optimisation, lazy load, DB cleanup, CDN integration",
    perfmatters:
      "Script manager, CDN rewrite, heartbeat control, disable emojis/embeds",
    siteground:
      "Image compression, media lazy load, browser-specific caching, QUIC/HTTP/3",
  },
  {
    label: "Pricing",
    rocket: "From ~$59/year (billed annually)",
    perfmatters: "From ~$24.95/year (billed annually)",
    siteground: "Included with SiteGround hosting",
  },
  {
    label: "When to choose",
    rocket: "Need plug-and-play performance on almost any host",
    perfmatters:
      "Need granular control stacked with host or plugin-based caching",
    siteground: "Already on SiteGround and want native, integrated tools",
  },
];

const scoreboard = [
  {
    label: "Compatibility",
    scores: { rocket: 9.5, perfmatters: 9.2, siteground: 6.5 },
  },
  {
    label: "Caching power",
    scores: { rocket: 9.2, perfmatters: 6.0, siteground: 8.8 },
  },
  {
    label: "Optimisation extras",
    scores: { rocket: 9.0, perfmatters: 8.9, siteground: 8.2 },
  },
  {
    label: "Value for money",
    scores: { rocket: 8.4, perfmatters: 9.0, siteground: 9.3 },
  },
  {
    label: "Ease of use",
    scores: { rocket: 9.4, perfmatters: 8.7, siteground: 8.5 },
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
  siteground: avg("siteground"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerMap = {
  rocket: "WP Rocket",
  perfmatters: "Perfmatters",
  siteground: "SiteGround Optimizer",
};

const pricingTable = [
  {
    plan: "WP Rocket (Single / Plus / Infinite)",
    monthly: "Effective from a few $/mo (billed annually)",
    annual: "From ~$59/year, tiered by number of sites",
    limits: "Site count; all features available on all tiers",
    notes:
      "Great when you manage multiple sites and want a consistent caching setup.",
  },
  {
    plan: "Perfmatters (Personal / Business / Unlimited)",
    monthly: "Very low effective monthly cost",
    annual: "From ~$24.95/year, tiered by number of sites",
    limits: "Site count; full feature set across all tiers",
    notes:
      "High-value add-on for agencies and power users focused on CWV and script control.",
  },
  {
    plan: "SiteGround Optimizer",
    monthly: "Included with SiteGround plans (from promo pricing up)",
    annual: "Part of SiteGround hosting bill",
    limits: "Only works on SiteGround; features tied to plan and infra",
    notes:
      "Excellent value if you’re already on SiteGround; you pay for hosting, not the plugin.",
  },
];

const featureBullets = {
  caching: [
    "WP Rocket: Page caching, preload, mobile cache, browser caching, and cache preloading to speed up first visits.",
    "Perfmatters: Does not add its own page cache; designed to sit alongside WP Rocket, SiteGround Optimizer, or host caching.",
    "SiteGround Optimizer: Integrates directly with SiteGround’s dynamic cache, Memcached, and NGINX-level rules.",
  ],
  frontend: [
    "WP Rocket: Delay/defer JS, optimise CSS/JS, lazy load images/iframes, remove unused CSS (with care), and integrate CDNs.",
    "Perfmatters: Script Manager to disable JS/CSS per post type or URL, DNS prefetch/preconnect, local Analytics hosting, heartbeat control, and removing emojis/embeds.",
    "SiteGround Optimizer: Image compression, WebP generation, lazy load, frontend minification, and basic file combination in sync with SiteGround’s infra.",
  ],
  workflow: [
    "WP Rocket: Friendly interface and presets that non-technical users can understand with documentation and safe defaults.",
    "Perfmatters: Best suited to people who understand what each script does; ideal to templatise in an agency playbook.",
    "SiteGround Optimizer: Simple toggles that integrate into SiteGround’s Site Tools UI; feels like part of the host rather than a separate plugin.",
  ],
};

const prosCons = {
  "wp rocket": {
    pros: [
      "Host-agnostic: works across almost all major WordPress hosts",
      "All-in-one caching and optimisation, ideal for non-technical users",
      "Strong impact on Core Web Vitals when configured with best practices",
    ],
    cons: [
      "Paid annual license; can feel costly for single small sites",
      "Overlap with host-level caching if not configured correctly",
      "Advanced options still require testing to avoid conflicts with some themes/builders",
    ],
  },
  perfmatters: {
    pros: [
      "Granular script manager for per-page and global bloat reduction",
      "Stacks perfectly with WP Rocket or SiteGround Optimizer for deeper control",
      "Excellent value, especially for agencies and multi-site owners",
    ],
    cons: [
      "Not a full caching plugin; needs a caching layer underneath",
      "Misconfigurations can break specific pages if scripts are disabled blindly",
      "Interface is simple but assumes some understanding of WordPress internals",
    ],
  },
  siteground: {
    pros: [
      "Free, integrated plugin for SiteGround customers",
      "Deep integration with server-level caching and SiteGround infrastructure",
      "Solid all-round optimisation baseline without extra licenses",
    ],
    cons: [
      "Locked to SiteGround; you lose it when you migrate hosts",
      "Less granular than a combined WP Rocket + Perfmatters stack",
      "Relies on SiteGround’s infra quality and plan limits",
    ],
  },
};

const faqs = [
  {
    q: `Is WP Rocket still needed if I host on SiteGround in ${YEAR}?`,
    a: "SiteGround Optimizer gives you strong baseline caching and optimisation, but WP Rocket still adds advanced delay JS, database cleanup, critical CSS options, and more granular preload configuration that can further improve Core Web Vitals on demanding sites.",
  },
  {
    q: "Can I use Perfmatters with SiteGround Optimizer?",
    a: "Yes. Many SiteGround customers run both: Optimizer handles caching and integration with the host, while Perfmatters disables unused scripts, controls heartbeat, and manages additional bloat. Just avoid overlapping minification if you enable it in multiple places.",
  },
  {
    q: "What’s the cheapest performance stack?",
    a: "For SiteGround customers, SiteGround Optimizer (free) plus Perfmatters (low annual cost) gives you strong caching plus script control. If you are not on SiteGround, a single WP Rocket license is often the simplest, cost-effective starting point.",
  },
  {
    q: "Do I stack WP Rocket and Perfmatters?",
    a: "Yes, and that’s common. WP Rocket takes care of caching and file optimisation, while Perfmatters focuses on removing bloat and controlling scripts. Together they deliver agency-level performance on most hosts when configured correctly.",
  },
  {
    q: "What happens if I leave SiteGround?",
    a: "When you migrate away from SiteGround, you lose SiteGround Optimizer. Plan to replace its caching with WP Rocket or another host-agnostic solution, and keep Perfmatters in place if you still want granular script and bloat control.",
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

export default function WPRocketVsPerfmattersVsSitegroundPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WP Rocket vs Perfmatters vs SiteGround Optimizer (${YEAR}) – WordPress speed tools compared`}
        description="Compare WP Rocket, Perfmatters, and SiteGround Optimizer to see which WordPress performance stack fits your hosting, budget, and Core Web Vitals targets."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress caching comparison, wp rocket vs perfmatters, siteground optimizer`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress speed tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WP Rocket vs Perfmatters vs SiteGround Optimizer ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Hosting on SiteGround and wondering whether WP Rocket or Perfmatters is
          still worth it? This breakdown shows how each tool contributes to
          caching, bloat removal, and Core Web Vitals, so you can design the
          right performance stack for your WordPress sites.
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

        {/* Quick verdict + combos */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>SiteGround Optimizer</strong> is a strong baseline for
              anyone already on SiteGround. <strong>WP Rocket</strong> is the
              easiest, host-agnostic caching and optimisation upgrade.{" "}
              <strong>Perfmatters</strong> gives you agency-level script and
              bloat control. Stack them based on where you host and how much
              fine-grained control you need.
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
              <Workflow className="h-5 w-5 text-indigo-700" /> Recommended
              combos
            </div>
            <p className="text-sm text-slate-700">
              On <strong>SiteGround</strong>: start with SiteGround Optimizer +
              add <strong>Perfmatters</strong> for script control. On other
              hosts: <strong>WP Rocket</strong> as primary caching +{" "}
              <strong>Perfmatters</strong> for advanced bloat removal.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When to switch
            </div>
            <p className="text-sm text-slate-700">
              If you plan to move away from SiteGround, remember that you lose
              Optimizer. Standardise on <strong>WP Rocket</strong> and{" "}
              <strong>Perfmatters</strong> if you want a stack that survives host
              migrations.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WP Rocket</th>
                  <th className="px-4 py-3">Perfmatters</th>
                  <th className="px-4 py-3">SiteGround Optimizer</th>
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
                      {row.siteground}
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
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">WP Rocket</th>
                  <th className="px-4 py-3">Perfmatters</th>
                  <th className="px-4 py-3">SiteGround Optimizer</th>
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
                        {row.scores.siteground}
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
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.siteground}
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
              <Shield className="h-5 w-5 text-indigo-600" /> Front-end &
              bloat control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.frontend.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-slate-700" /> Workflow &
              ownership
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
                  <th className="px-4 py-3">Annual / billing</th>
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
            Pricing and features change over time and by promo. Always confirm
            up-to-date pricing and limits on each vendor&apos;s official site
            before standardising your performance stack.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WP Rocket:</strong> Very friendly for non-technical users;
              most gains come from enabling a handful of checkboxes following
              their documentation.
            </li>
            <li>
              <strong>Perfmatters:</strong> Slightly more technical; best for
              people who understand which scripts are safe to disable and want
              fine-grained CWV tuning.
            </li>
            <li>
              <strong>SiteGround Optimizer:</strong> Integrated into SiteGround’s
              Site Tools with a simple interface; ideal for users who want a
              “host-native” experience rather than juggling extra plugins.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>New blogs and small sites on SiteGround:</strong>{" "}
              SiteGround Optimizer alone is often enough for fast, clean
              performance, especially with lightweight themes.
            </li>
            <li>
              <strong>Heavier sites on SiteGround (builders, WooCommerce):</strong>{" "}
              Add <span className="font-semibold">Perfmatters</span> to reduce
              script bloat and improve Core Web Vitals beyond what Optimizer can
              do alone.
            </li>
            <li>
              <strong>Sites on non-SiteGround hosts:</strong>{" "}
              <span className="font-semibold">WP Rocket</span> is the default
              choice for a one-plugin performance uplift; layer{" "}
              <span className="font-semibold">Perfmatters</span> when you need
              deeper control.
            </li>
            <li>
              <strong>Agencies managing many client sites:</strong> Standardise
              on a combination of WP Rocket + Perfmatters so you can deliver a
              repeatable performance playbook regardless of the client’s host
              (with SiteGround Optimizer as a bonus when clients are on
              SiteGround).
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
                Best when you want a single plugin that delivers big, safe gains
                on almost any host without deep performance expertise.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Bloggers, SMB owners, and marketing teams managing
                their own WordPress sites.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Perfmatters</h3>
              <p className="text-sm text-slate-700">
                Best for cutting JS/CSS bloat, taming heavy builders, and
                squeezing every Core Web Vitals gain out of an already-cached
                site.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Agencies, technical freelancers, and site owners who
                want surgical control.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SiteGround Optimizer</h3>
              <p className="text-sm text-slate-700">
                Best as a free, integrated baseline for SiteGround customers who
                want a well-optimised stack without extra licensing.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: SiteGround-hosted blogs, SMB sites, and early-stage
                projects wanting native optimisation.
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
