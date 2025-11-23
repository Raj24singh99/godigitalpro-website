import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Settings2,
  Crown,
  ArrowLeft,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "seopress vs yoast vs all in one seo";
const canonical = buildCanonical(
  "/tools/compare/seopress-vs-yoast-vs-all-in-one-seo"
);

const brandMeta = {
  seopress: {
    gradient: "from-emerald-500 via-teal-500 to-blue-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/seopress.org",
  },
  yoast: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/yoast.com",
  },
  "all in one seo": {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/aioseop.com",
  },
};

const contenders = [
  {
    key: "seopress",
    name: "SEOPress",
    blurb: "Lightweight SEO plugin with schema, redirects, and white-label.",
    url: "https://www.seopress.org",
  },
  {
    key: "yoast",
    name: "Yoast SEO",
    blurb: "Mature plugin with readability guidance, training, and ecosystem.",
    url: "https://yoast.com",
  },
  {
    key: "all in one seo",
    name: "All in One SEO",
    blurb: "Feature-rich SEO plugin with local, news, and WooCommerce addons.",
    url: "https://aioseo.com",
  },
];

const comparisonRows = [
  {
    label: "Pricing/licensing",
    seopress: "Free + ~ $49/yr unlimited sites.",
    yoast: "Free + paid per site/add-ons.",
    "all in one seo": "Free + tiers per site; addons for local/news.",
  },
  {
    label: "Schema & rich results",
    seopress: "Schema templates + custom builder.",
    yoast: "Strong defaults; some types via addons.",
    "all in one seo": "Extensive schema options + addons.",
  },
  {
    label: "Performance",
    seopress: "Lightweight footprint; fewer UI nags.",
    yoast: "Heavier but stable and battle-tested.",
    "all in one seo": "Feature-rich; can trim modules as needed.",
  },
  {
    label: "Redirects/404",
    seopress: "Built-in in Pro (404 log + redirects).",
    yoast: "Premium add-on for redirects.",
    "all in one seo": "Included on paid tiers.",
  },
  {
    label: "Agency features",
    seopress: "White-label + unlimited sites; agency-friendly.",
    yoast: "No white-label; per-site pricing.",
    "all in one seo": "No white-label; per-site pricing.",
  },
];

const scoreboard = [
  { label: "Value for agencies", scores: { seopress: 9.4, yoast: 7.5, "all in one seo": 7.8 } },
  { label: "Feature depth", scores: { seopress: 8.6, yoast: 8.7, "all in one seo": 9.0 } },
  { label: "Performance", scores: { seopress: 9.0, yoast: 8.1, "all in one seo": 8.2 } },
  { label: "Ease for beginners", scores: { seopress: 8.3, yoast: 9.1, "all in one seo": 8.6 } },
  {
    label: "Ecommerce/local options",
    scores: { seopress: 8.5, yoast: 8.7, "all in one seo": 9.2 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  seopress: avg("seopress"),
  yoast: avg("yoast"),
  "all in one seo": avg("all in one seo"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyName = (key) => {
  if (key === "seopress") return "SEOPress";
  if (key === "yoast") return "Yoast";
  if (key === "all in one seo") return "All in One SEO";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const pricingTable = [
  {
    plan: "SEOPress Free / Pro",
    monthly: "Free / ~ $49/yr",
    annual: "Pro: single annual price",
    limits: "Unlimited sites on Pro, core SEO + schema + redirects.",
    notes: "Best licensing for agencies and multi-site owners.",
  },
  {
    plan: "Yoast SEO Free / Premium",
    monthly: "Free / from ~ $99/yr per site",
    annual: "Per-site annual licenses; addons extra",
    limits: "Per-site; extra cost for Woo, local, news.",
    notes: "Great if you only manage a few key sites and want training.",
  },
  {
    plan: "All in One SEO Free / Pro",
    monthly: "Free / from ~ $124/yr single site (approx.)",
    annual: "Higher tiers for more sites/features",
    limits: "Per-site; tiered based on features and site count.",
    notes: "Strong when you want local/news/woo baked into one stack.",
  },
];

const faqs = [
  {
    q: `Which plugin wins in ${YEAR}?`,
    a: "SEOPress wins for lightweight performance and unlimited sites. Yoast wins for training, documentation, and familiarity. All in One SEO wins when you want built-in local, news, and WooCommerce packs and do not mind per-site pricing.",
  },
  {
    q: "Which is best for agencies?",
    a: "SEOPress is the clear pick because of unlimited licensing and white-label options. Yoast and All in One SEO are fine if you manage a small number of high-value sites and rely on their specific addons.",
  },
  {
    q: "Which is best for ecommerce?",
    a: "All in One SEO and SEOPress both cover WooCommerce schema; your choice should come down to UI preference, add-on costs, and whether you need other local/news packs on the same stack.",
  },
  {
    q: "Can I switch between plugins later?",
    a: "Yes, but you should plan migrations carefully. Most plugins offer import tools for titles, meta descriptions, and schema. Always test on staging before switching across a portfolio of sites.",
  },
  {
    q: "Will any of these plugins replace technical SEO work?",
    a: "No. They help with metadata, schema, sitemaps, and some automation, but you still need solid technical foundations (speed, crawlability, content quality) outside of the plugin.",
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
  seopress: {
    pros: [
      "Unlimited-site Pro license is highly agency-friendly.",
      "Lightweight, less nagging UI and fewer upsell banners.",
      "Built-in redirects, 404 logs, and schema builder in Pro.",
      "White-label options so clients see your brand, not the plugin.",
    ],
    cons: [
      "Interface feels more utilitarian and less guided for beginners.",
      "Smaller content/training ecosystem than Yoast.",
      "Some advanced features still require manual configuration.",
    ],
  },
  yoast: {
    pros: [
      "Very mature ecosystem with tutorials, courses, and documentation.",
      "Readability and content analysis that non-SEOs understand easily.",
      "Strong defaults for most standard WordPress blogs and sites.",
      "Large community and compatibility testing across themes/plugins.",
    ],
    cons: [
      "Per-site pricing becomes expensive at scale.",
      "More admin notices and upsells than leaner plugins like SEOPress.",
      "Some schema and redirects require additional paid addons.",
    ],
  },
  "all in one seo": {
    pros: [
      "Rich feature set with local, news, and WooCommerce SEO extensions.",
      "Detailed schema controls for complex content types.",
      "UI is structured with modules you can toggle on/off.",
      "Good fit when you want one plugin to cover multiple SEO verticals.",
    ],
    cons: [
      "Per-site licensing can get costly for agencies.",
      "More features/modules can mean a heavier footprint if not tuned.",
      "Complexity may be overkill for small, simple blogs.",
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
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
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

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);

export default function SEOPressVsYoastVsAllInOneSEOPage() {
  const overallAvg = averages[overallWinnerKey];

  const rowWinnerPretty = (row) => {
    const entries = Object.entries(row.scores);
    const maxVal = Math.max(...entries.map(([_, v]) => v));
    const winners = entries
      .filter(([_, v]) => v === maxVal)
      .map(([k]) => prettyName(k));
    return winners.length > 1 ? winners.join(" / ") : winners[0];
  };

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`SEOPress vs Yoast vs All in One SEO – WordPress SEO plugin showdown (${YEAR})`}
        description="Compare SEOPress, Yoast, and All in One SEO on pricing, performance, schema, redirects, and agency features to pick the right WordPress SEO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress seo plugins, seopress vs yoast, seopress vs aioseo`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress SEO plugins
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          SEOPress vs Yoast vs All in One SEO ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          All three cover core WordPress SEO: titles, meta, sitemaps, and schema.{" "}
          <strong>SEOPress</strong> stays lean with unlimited sites and white-labeling.{" "}
          <strong>Yoast</strong> is the veteran with readability guidance and a huge
          training ecosystem. <strong>All in One SEO</strong> packs in local, news, and
          WooCommerce modules. Here is how they compare for agencies, ecommerce, and
          multi-site setups.
        </p>

        {/* Quick verdict + best-for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>SEOPress</strong> for lightweight performance, unlimited-site
              pricing, and white-label. Choose <strong>Yoast</strong> if you want
              guided onboarding, readability checks, and a familiar UI for editors.
              Choose <strong>All in One SEO</strong> if you need strong local/news/woo
              coverage and are comfortable with per-site licensing.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {prettyName(overallWinnerKey)}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Settings2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>
                  <strong>SEOPress</strong> for agencies, multi-site owners, and lean setups.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-purple-600" />
                <span>
                  <strong>Yoast</strong> for content teams that rely on readability and
                  training.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>All in One SEO</strong> for sites that need local, news, and
                  WooCommerce features in one plugin.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  Visit site →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">SEOPress</th>
                  <th className="px-4 py-3">Yoast</th>
                  <th className="px-4 py-3">All in One SEO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.seopress}</td>
                    <td className="px-4 py-3 text-slate-700">{row.yoast}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["all in one seo"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">SEOPress</th>
                  <th className="px-4 py-3">Yoast</th>
                  <th className="px-4 py-3">All in One SEO</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.seopress >= row.scores.yoast &&
                        row.scores.seopress >= row.scores["all in one seo"]
                          ? "font-semibold text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.seopress}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.yoast >= row.scores.seopress &&
                        row.scores.yoast >= row.scores["all in one seo"]
                          ? "font-semibold text-purple-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.yoast}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores["all in one seo"] >= row.scores.seopress &&
                        row.scores["all in one seo"] >= row.scores.yoast
                          ? "font-semibold text-amber-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores["all in one seo"]}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {rowWinnerPretty(row)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-emerald-50 via-purple-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.seopress}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.yoast}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["all in one seo"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {prettyName(overallWinnerKey)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Card-style scoreboard (quick glance) */}
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {scoreboard.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                <Score label="SEOPress" value={row.scores.seopress} />
                <Score label="Yoast" value={row.scores.yoast} />
                <Score label="All in One SEO" value={row.scores["all in one seo"]} />
              </div>
            </div>
          ))}
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Setup, UX, and control</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>SEOPress:</strong> Clean settings panels with a more technical feel. Ideal
                if you are comfortable configuring options and want minimal clutter.
              </li>
              <li>
                <strong>Yoast:</strong> Wizard-led setup, traffic-light indicators, and
                readability scores that non-SEOs understand quickly.
              </li>
              <li>
                <strong>All in One SEO:</strong> Module-based UI where you can toggle features on
                and off; helpful to keep things focused on each site’s needs.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Schema, content, and automation</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>SEOPress:</strong> Flexible schema builder and templates; good balance of
                automation and control for custom post types.
              </li>
              <li>
                <strong>Yoast:</strong> Strong defaults for posts/pages, plus structured data
                blocks and some specialized schema via addons.
              </li>
              <li>
                <strong>All in One SEO:</strong> Very broad schema coverage, especially when you
                activate local, news, and ecommerce modules.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Ecommerce, local SEO, and extras</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>SEOPress:</strong> WooCommerce support plus analytics and redirects in Pro
                make it a strong all-rounder for store SEO.
              </li>
              <li>
                <strong>Yoast:</strong> WooCommerce, local, and news SEO are available as separate
                the paid addons; excellent if you buy into the full ecosystem.
              </li>
              <li>
                <strong>All in One SEO:</strong> Local SEO, news sitemaps, and WooCommerce support
                are core focuses for the Pro tiers.
              </li>
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
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
          <p className="text-sm text-slate-700">
            For most agencies, <strong>SEOPress Pro</strong> is the best licensing model. For a
            single flagship site, <strong>Yoast Premium</strong> or{" "}
            <strong>All in One SEO Pro</strong> may be worth it if you want their specific
            addons and training.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>SEOPress:</strong> Better suited to marketers/developers who know what they
              want to configure and value a quiet, low-noise admin experience.
            </li>
            <li>
              <strong>Yoast:</strong> Best when editors and writers log into WordPress daily and
              need simple signals (red/amber/green) and readability hints.
            </li>
            <li>
              <strong>All in One SEO:</strong> Feels like a control panel—powerful but busier. Great
              if you are comfortable toggling modules and tweaking site-level options.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Multi-site agencies & freelancers:</strong> SEOPress wins with
              unlimited-site licensing and white-label.
            </li>
            <li>
              <strong>Editorial blogs & content teams:</strong> Yoast wins with readability checks,
              content scores, and training.
            </li>
            <li>
              <strong>Local businesses and news/ecommerce sites:</strong> All in One SEO wins if you
              activate local, news, and WooCommerce modules together.
            </li>
            <li>
              <strong>Technical SEOs wanting control:</strong> SEOPress or All in One SEO work well;
              pick based on which UI you prefer and how many sites you manage.
            </li>
          </ul>
        </section>

        {/* Pros & Cons via shared component */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SEOPress</h3>
              <p className="text-sm text-slate-700">
                Best when you manage many sites and want a quiet, performant SEO plugin that you can
                brand as your own.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, WordPress professionals, multi-site owners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Yoast SEO</h3>
              <p className="text-sm text-slate-700">
                Best for teams who value readability guidance and a familiar interface for content
                authors.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Editorial teams, in-house marketers, training-heavy environments.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">All in One SEO</h3>
              <p className="text-sm text-slate-700">
                Best for sites that need robust local, news, and WooCommerce SEO in a single plugin,
                and do not mind per-site plans.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Local businesses, news/ecommerce sites, complex single brands.
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
        <div className="mt-10 flex items-center gap-3">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
