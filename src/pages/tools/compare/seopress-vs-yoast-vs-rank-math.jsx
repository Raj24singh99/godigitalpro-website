import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Settings2,
  Crown,
  ArrowLeft,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "seopress vs yoast vs rank math";
const canonical = buildCanonical("/tools/compare/seopress-vs-yoast-vs-rank-math");

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
  "rank math": {
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/rankmath.com",
  },
};

const contenders = [
  {
    key: "seopress",
    name: "SEOPress",
    blurb: "Lightweight SEO plugin with schema, redirects, and white-labeling.",
    url: "https://www.seopress.org",
  },
  {
    key: "yoast",
    name: "Yoast SEO",
    blurb: "Popular plugin with readability checks and a large training ecosystem.",
    url: "https://yoast.com",
  },
  {
    key: "rank math",
    name: "Rank Math",
    blurb: "Feature-rich plugin with a strong free tier and AI helpers.",
    url: "https://rankmath.com",
  },
];

const comparisonRows = [
  {
    label: "Performance & bloat",
    seopress: "Lightweight UI, minimal overhead.",
    yoast: "Heavier UI; stable and familiar.",
    "rank math": "Module-based; stays lean if you disable unused features.",
  },
  {
    label: "Pricing",
    seopress: "Free + ~ $49/yr unlimited sites.",
    yoast: "Free + paid per site/add-ons.",
    "rank math": "Generous free tier; Pro from ~ $59/yr, Business/Agency for more sites.",
  },
  {
    label: "Schema",
    seopress: "Strong templates + custom schema builder.",
    yoast: "Good schema defaults; some types via add-ons.",
    "rank math": "Rich schema options, including AI Schema on higher tiers.",
  },
  {
    label: "Redirects/404",
    seopress: "Built-in in Pro with 404 monitor.",
    yoast: "Redirects in Premium add-on.",
    "rank math": "Redirects and 404 monitor available on free/Pro.",
  },
  {
    label: "White-labeling",
    seopress: "Yes (Pro).",
    yoast: "No.",
    "rank math": "No.",
  },
  {
    label: "WooCommerce SEO",
    seopress: "Included in Pro (product schema + breadcrumbs).",
    yoast: "Separate WooCommerce SEO add-on.",
    "rank math": "Included in Pro/Business tiers with product schema.",
  },
];

const scoreboard = [
  { label: "Performance", scores: { seopress: 9.0, yoast: 8.2, "rank math": 8.3 } },
  { label: "Value for money", scores: { seopress: 9.4, yoast: 7.8, "rank math": 8.8 } },
  { label: "Features", scores: { seopress: 8.7, yoast: 8.5, "rank math": 9.0 } },
  { label: "Ease for beginners", scores: { seopress: 8.4, yoast: 9.2, "rank math": 8.6 } },
  { label: "Agency friendliness", scores: { seopress: 9.5, yoast: 7.5, "rank math": 8.2 } },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  seopress: avg("seopress"),
  yoast: avg("yoast"),
  "rank math": avg("rank math"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyName = (key) => {
  if (key === "seopress") return "SEOPress";
  if (key === "yoast") return "Yoast";
  if (key === "rank math") return "Rank Math";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const pricingTable = [
  {
    plan: "SEOPress Free / Pro",
    monthly: "Free / ~ $49/yr",
    annual: "Single Pro annual license",
    limits: "Unlimited sites on Pro, schema, redirects, analytics integrations.",
    notes: "Best licensing model for agencies and multi-site owners.",
  },
  {
    plan: "Yoast SEO Free / Premium",
    monthly: "Free / from ~ $99/yr per site",
    annual: "Per-site annual licenses; separate addons for Woo/local/news",
    limits: "Per-site; extra cost for WooCommerce and local/news SEO.",
    notes: "Great if you run a handful of flagship sites and value training.",
  },
  {
    plan: "Rank Math Free / Pro / Business",
    monthly: "Free / from ~ $59/yr (Pro)",
    annual: "Higher tiers for more sites and features",
    limits: "Pro for a limited number of sites; Business/Agency for more domains.",
    notes: "Very strong free tier; paid plans unlock AI and more automation.",
  },
];

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick SEOPress for lightweight performance, unlimited-site pricing, and white-label. Pick Yoast if you want the most tutorials, content training, and a familiar UI for editors. Pick Rank Math if you want a rich free tier, AI features, and module-based control.",
  },
  {
    q: "Which is best for agencies?",
    a: "SEOPress wins with unlimited sites and white-label, making it ideal for agency stacks. Rank Math Business/Agency can work if you like its AI and modules. Yoast becomes expensive at scale due to per-site licensing.",
  },
  {
    q: "Which is fastest?",
    a: "SEOPress is generally the lightest. Rank Math can also stay lean if you disable unnecessary modules. Yoast is heavier in the admin but very mature and stable.",
  },
  {
    q: "Is Rank Math safe to use if I switch from Yoast or SEOPress?",
    a: "Yes, but you should use the built-in import tools and test on staging first. Always verify titles, meta, schema, and redirects before switching across multiple sites.",
  },
  {
    q: "Do any of these plugins replace technical SEO work?",
    a: "No. They help automate meta, schema, sitemaps, and some checks, but you still need solid hosting, performance, and content fundamentals outside the plugin.",
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
      "Unlimited-site Pro license is ideal for agencies and freelancers.",
      "Lightweight footprint with fewer upsell banners in the admin.",
      "Built-in redirects, 404 logs, and schema builder in Pro.",
      "White-label options so you can show your own branding to clients.",
    ],
    cons: [
      "UI feels more technical and less hand-holding for beginners.",
      "Smaller content/training ecosystem compared with Yoast.",
      "Advanced setups may require manual configuration and testing.",
    ],
  },
  yoast: {
    pros: [
      "Very mature ecosystem with strong documentation and courses.",
      "Content/readability analysis that non-SEOs can follow easily.",
      "Good defaults for most blogs, editorial sites, and simple stores.",
      "Large community and compatibility testing across themes/plugins.",
    ],
    cons: [
      "Per-site pricing can add up quickly for agencies.",
      "More admin notices and upsell prompts than leaner plugins.",
      "Some schema and redirects require separate paid add-ons.",
    ],
  },
  "rank math": {
    pros: [
      "Extremely generous free tier with many pro-level features.",
      "Module-based approach lets you enable only what you need.",
      "AI helpers (content/keywords/schema) on higher plans.",
      "Good WooCommerce and local SEO support on Pro/Business.",
    ],
    cons: [
      "More features/modules can add complexity if you enable everything.",
      "Faster product pace means you should test major updates on staging.",
      "No white-label; multi-site licensing still has limits.",
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

export default function SEOPressVsYoastVsRankMathPage() {
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
        title={`SEOPress vs Yoast vs Rank Math – Which WordPress SEO plugin wins? (${YEAR})`}
        description="Deep comparison of SEOPress, Yoast, and Rank Math on performance, pricing, schema, redirects, WooCommerce SEO, and agency features."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress seo plugins comparison, seopress vs rank math, yoast vs rank math`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress SEO plugins
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          SEOPress vs Yoast vs Rank Math ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          SEOPress, Yoast, and Rank Math all handle core WordPress SEO: titles, meta,
          sitemaps, and schema. The real differences are in performance, licensing,
          AI features, and agency-friendliness. This breakdown looks at speed,
          pricing, automation, and which plugin fits which type of site.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>SEOPress</strong> if you want lightweight performance,
              unlimited-site pricing, and white-label options. Choose{" "}
              <strong>Yoast</strong> if you want the most tutorials, training, and a
              familiar UI for content teams. Choose <strong>Rank Math</strong> if you
              want a powerful free tier, module-based features, and AI helpers.
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
                  <strong>SEOPress</strong> for agencies and lean, no-noise setups.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 text-purple-600" />
                <span>
                  <strong>Yoast</strong> for teams that rely on readability checks and
                  training content.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Rank Math</strong> for module-based control and AI-driven
                  features, plus a strong free tier.
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
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200 transition-shadow hover:shadow-md"
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
                  <th className="px-4 py-3">Rank Math</th>
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
                    <td className="px-4 py-3 text-slate-700">{row["rank math"]}</td>
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
                  <th className="px-4 py-3">Rank Math</th>
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
                        row.scores.seopress >= row.scores["rank math"]
                          ? "font-semibold text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.seopress}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores.yoast >= row.scores.seopress &&
                        row.scores.yoast >= row.scores["rank math"]
                          ? "font-semibold text-purple-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores.yoast}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        row.scores["rank math"] >= row.scores.seopress &&
                        row.scores["rank math"] >= row.scores.yoast
                          ? "font-semibold text-sky-700"
                          : "text-slate-700"
                      }`}
                    >
                      {row.scores["rank math"]}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {rowWinnerPretty(row)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-emerald-50 via-purple-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.seopress}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.yoast}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages["rank math"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {prettyName(overallWinnerKey)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Card-style scoreboard */}
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
                <Score label="Rank Math" value={row.scores["rank math"]} />
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
                <strong>SEOPress:</strong> Clean, less noisy interface aimed at users who are
                comfortable with checkboxes and options. Fewer upsells, more focus.
              </li>
              <li>
                <strong>Yoast:</strong> Guided onboarding, traffic-light scores, and readability
                checks that writers understand quickly.
              </li>
              <li>
                <strong>Rank Math:</strong> Setup wizard plus a module dashboard where you toggle
                features on/off for each site’s needs.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Schema, content, and automation</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>SEOPress:</strong> Flexible schema builder and templates for posts, pages,
                and custom post types; good for technical SEOs.
              </li>
              <li>
                <strong>Yoast:</strong> Strong defaults for posts/pages and decent schema for most
                editorial sites; extra schema types via add-ons.
              </li>
              <li>
                <strong>Rank Math:</strong> Rich schema library plus AI helpers and bulk-editing
                style features on higher tiers.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Ecommerce, local SEO, and extras</h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              <li>
                <strong>SEOPress:</strong> WooCommerce SEO and product schema included in Pro; good
                balance of features and performance.
              </li>
              <li>
                <strong>Yoast:</strong> WooCommerce, local, and news SEO shipped as separate
                premium add-ons; strong if you invest in the full suite.
              </li>
              <li>
                <strong>Rank Math:</strong> WooCommerce, local SEO, and more in Pro/Business; strong
                option for stores and local businesses.
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
            For agencies and multi-site owners, <strong>SEOPress Pro</strong> offers the most
            scalable licensing. For a handful of flagship sites where training and brand
            recognition matter, <strong>Yoast Premium</strong> is still compelling. If you want
            to start free and layer in AI later, <strong>Rank Math</strong> is attractive.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>SEOPress:</strong> Best for marketers and developers who are comfortable
              configuring options and prefer a quiet, low-UI-noise plugin.
            </li>
            <li>
              <strong>Yoast:</strong> Best for editorial teams and writers; readability and traffic
              lights make SEO feel approachable.
            </li>
            <li>
              <strong>Rank Math:</strong> Balanced between power and guidance; the module switches
              and wizards help you avoid over-configuring.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Multi-site agencies & freelancers:</strong> SEOPress wins with unlimited-site
              licensing and white-label.
            </li>
            <li>
              <strong>Editorial blogs & content teams:</strong> Yoast wins thanks to readability
              guidance and extensive training content.
            </li>
            <li>
              <strong>Stores and local businesses:</strong> Rank Math or SEOPress work well; Rank
              Math leans into free + AI, SEOPress into performance and control.
            </li>
            <li>
              <strong>Technical SEOs wanting control:</strong> SEOPress and Rank Math both shine;
              choose based on your preference for minimal vs feature-rich UI.
            </li>
          </ul>
        </section>

        {/* Pros & Cons shared section */}
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
                Best when you manage many sites and want a quiet, performant plugin with
                white-label and predictable pricing.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, freelancers, WordPress professionals.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Yoast SEO</h3>
              <p className="text-sm text-slate-700">
                Best when you need strong training, content guidance, and a UI that writers have
                likely seen before.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Editorial teams, in-house marketers, content-led brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Rank Math</h3>
              <p className="text-sm text-slate-700">
                Best when you want a powerful free tier, modular features, and AI-driven helpers
                without buying multiple add-ons up front.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Growth-focused sites, small businesses, and SEOs experimenting with AI.
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
