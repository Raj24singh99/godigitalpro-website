import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  BookOpen,
  ArrowLeft,
  Workflow,
  Plug,
  BarChart3,
  Shield,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "yoast seo vs rank math vs all in one seo";
const canonical = buildCanonical(
  "/tools/compare/yoast-seo-vs-rank-math-vs-all-in-one-seo"
);

const brandMeta = {
  "yoast seo": {
    gradient: "from-purple-600 via-pink-500 to-amber-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/yoast.com",
  },
  "rank math": {
    gradient: "from-indigo-600 via-blue-600 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/rankmath.com",
  },
  "all in one seo": {
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/aioseo.com",
  },
};

const contenders = [
  {
    key: "yoast seo",
    name: "Yoast SEO",
    blurb: "Editorial guardrails, schema automation, and training.",
    slug: "yoast-seo",
    url: "https://yoast.com/wordpress/plugins/seo/",
  },
  {
    key: "rank math",
    name: "Rank Math",
    blurb: "Automation-first WordPress SEO with a generous free tier.",
    slug: "rank-math",
    url: "https://rankmath.com/",
  },
  {
    key: "all in one seo",
    name: "All in One SEO",
    blurb: "Lightweight SEO toolkit with a smart setup wizard.",
    slug: "all-in-one-seo",
    url: "https://aioseo.com/",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    yoast: "Editorial assistant + schema defaults.",
    rankmath: "Automation & unlimited keywords.",
    aioseo: "Ease-of-use with smart setup.",
  },
  {
    label: "Free tier strength",
    yoast: "Covers basics but 1 focus keyphrase.",
    rankmath: "Includes redirects & schema builder.",
    aioseo: "Good essentials plus TruSEO score.",
  },
  {
    label: "Schema customization",
    yoast: "Templates + FAQ/HowTo blocks.",
    rankmath: "Advanced schema builder & custom fields.",
    aioseo: "Smart schema + AI title/description help.",
  },
  {
    label: "Pricing model",
    yoast: "$99/site/year Premium + add-ons.",
    rankmath: "From $69/year for unlimited personal sites (Pro).",
    aioseo: "From $124/year covering multiple sites.",
  },
  {
    label: "Best suited for",
    yoast: "Multi-author blogs needing training.",
    rankmath: "Power users wanting automation & API access.",
    aioseo: "Agencies needing simple onboarding.",
  },
];

const scoreboard = [
  {
    label: "Editorial guidance",
    scores: { yoast: 9.5, rankmath: 8.4, aioseo: 8.0 },
  },
  {
    label: "Automation & advanced schema",
    scores: { yoast: 8.2, rankmath: 9.3, aioseo: 8.4 },
  },
  {
    label: "Value for multi-site",
    scores: { yoast: 7.2, rankmath: 9.0, aioseo: 8.6 },
  },
  {
    label: "Ease of onboarding",
    scores: { yoast: 8.8, rankmath: 7.9, aioseo: 9.1 },
  },
  {
    label: "Support & documentation",
    scores: { yoast: 9.2, rankmath: 8.5, aioseo: 8.4 },
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
  yoast: avg("yoast"),
  rankmath: avg("rankmath"),
  aioseo: avg("aioseo"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerNameMap = {
  yoast: "Yoast SEO",
  rankmath: "Rank Math",
  aioseo: "All in One SEO",
};

const pricingTable = [
  {
    plan: "Yoast SEO Premium",
    monthly: "≈$8.25/mo (annual)",
    annual: "$99/site/year",
    limits: "Redirect manager, internal linking suggestions, 1 site",
    notes: "Add-ons (Local, WooCommerce, Video, News) sold separately.",
  },
  {
    plan: "Rank Math Pro",
    monthly: "≈$5.75/mo",
    annual: "$69/year (unlimited personal sites)",
    limits: "Schema builder, keyword tracker, WooCommerce SEO",
    notes: "Business/Agency tiers add more keywords, users, and client sites.",
  },
  {
    plan: "All in One SEO Pro",
    monthly: "≈$10.3/mo",
    annual: "$124/year (up to 10 sites)",
    limits: "Smart schema, TruSEO score, Local maps, sitemaps",
    notes: "Elite tier unlocks unlimited sites and priority support.",
  },
];

const faqs = [
  {
    q: `Which WordPress SEO plugin is best in ${YEAR}?`,
    a: "Yoast wins for editorial guardrails and training. Rank Math wins for automation and generous pricing. All in One SEO wins for ease of onboarding and agencies needing smart defaults and bulk rollout.",
  },
  {
    q: "Do I need to uninstall other SEO plugins before switching?",
    a: "Yes. You should only run one SEO plugin at a time to avoid duplicate schema, meta tags, and canonical conflicts. Each plugin includes import tools to migrate titles, metas, and some settings from the others.",
  },
  {
    q: "Which plugin is best for WooCommerce?",
    a: "Rank Math Pro and Yoast (with the WooCommerce add-on) both handle rich product schema and breadcrumbs. Choose Rank Math for lower cost and more automation; choose Yoast if content quality and editorial guidance are your main priorities.",
  },
  {
    q: "Can I white-label any of these plugins?",
    a: "Rank Math Business/Agency and some All in One SEO Agency-style plans support white-label branding for client dashboards. Yoast does not support white-labeling.",
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
  yoast: {
    pros: [
      "Best-in-class content guidance and readability checks",
      "Strong documentation and training ecosystem",
      "Robust schema defaults without needing deep configuration",
    ],
    cons: [
      "Per-site pricing can get expensive for large networks",
      "Custom schema and advanced automation trail Rank Math",
    ],
  },
  rankmath: {
    pros: [
      "Unlimited keywords in analysis and generous free tier",
      "Schema builder, automation, and powerful conditional logic",
      "Very affordable for many sites and agencies",
    ],
    cons: [
      "UI can feel busy for beginners",
      "Support and features tiered heavily by plan level",
    ],
  },
  aioseo: {
    pros: [
      "Great onboarding wizard and TruSEO scoring",
      "Flexible access control and roles for agencies",
      "AI-assisted title/meta suggestions and local SEO modules",
    ],
    cons: [
      "Fewer advanced schema builder options than Rank Math",
      "Interface and ecosystem less mature than Yoast’s training stack",
    ],
  },
};

const featureBullets = {
  editorial: [
    "Yoast: Page-level traffic lights, readability checks, internal linking suggestions, and educational content inside the editor.",
    "Rank Math: Multiple focus keywords, content AI suggestions on higher tiers, and basic readability hints.",
    "All in One SEO: TruSEO score, on-page checklist, and OpenAI-assisted title/description suggestions.",
  ],
  schema: [
    "Yoast: Battle-tested schema graph out of the box with FAQ/HowTo blocks and strong defaults for most blogs.",
    "Rank Math: Visual schema builder, custom templates per post type, and support for complex use cases like local + WooCommerce.",
    "All in One SEO: Smart schema profiles with support for local SEO, WooCommerce, and integrations with maps and breadcrumbs.",
  ],
  multisite: [
    "Yoast: Best where editorial rules matter most; per-site licensing may limit multi-site adoption.",
    "Rank Math: Excellent value for multi-site portfolios thanks to unlimited personal sites on Pro.",
    "All in One SEO: Pro/Elite licenses are tuned for agencies needing to onboard many client sites quickly.",
  ],
};

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
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

export default function YoastVsRankMathVsAIOSEOPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Yoast SEO vs Rank Math vs All in One SEO (${YEAR})`}
        description="Compare Yoast, Rank Math, and All in One SEO on pricing, schema, automation, onboarding, and support to pick the best WordPress SEO plugin."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress seo plugin comparison, yoast alternative, rank math alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress SEO plugins
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Yoast SEO vs Rank Math vs All in One SEO ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Yoast SEO prioritises editorial coaching, Rank Math focuses on
          automation and unlimited keywords, and All in One SEO delivers a
          lightweight experience for agencies. Use this breakdown to decide
          which plugin belongs on your WordPress stack.
        </p>

        {/* Quick verdict + helper cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Yoast:</strong> safest bet for content teams and
              multi-author blogs that need training and consistent on-page
              implementation. <strong>Rank Math:</strong> best automation and
              value for power users and technical SEOs.{" "}
              <strong>All in One SEO:</strong> smoothest onboarding with a
              flexible license mix for agencies managing many sites.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Overall scoreboard
              winner: {winnerNameMap[overallWinner]}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> When Yoast wins
            </div>
            <p className="text-sm text-slate-700">
              Pick Yoast if editorial training, content briefs, and robust
              defaults matter more than deep automation. It is ideal when
              writers live in the editor all day.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When Rank Math/AIOSEO
              win
            </div>
            <p className="text-sm text-slate-700">
              Choose <strong>Rank Math</strong> when you want automation,
              advanced schema, and aggressive pricing. Choose{" "}
              <strong>All in One SEO</strong> when you prioritise easy rollout
              and simple client training across many WordPress installs.
            </p>
          </div>
        </div>

        {/* Top cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                <LogoBadge name={card.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
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
                  <th className="px-4 py-3">Yoast SEO</th>
                  <th className="px-4 py-3">Rank Math</th>
                  <th className="px-4 py-3">All in One SEO</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.yoast}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.rankmath}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.aioseo}</td>
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
                  <th className="px-4 py-3">Yoast SEO</th>
                  <th className="px-4 py-3">Rank Math</th>
                  <th className="px-4 py-3">All in One SEO</th>
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
                        {row.scores.yoast}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.rankmath}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.aioseo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">
                        {winnerNameMap[winnerKey]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.yoast}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.rankmath}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.aioseo}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-800">
                    {winnerNameMap[overallWinner]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-emerald-700" /> SEO philosophy &
            feature focus
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-purple-600" /> Editorial workflow
              & content guidance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.editorial.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-sky-600" /> Schema, technical SEO &
              automation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.schema.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-700" /> Multi-site & agency
              fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.multisite.map((item) => (
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
            Pricing, site limits, and features change frequently. Always confirm
            the latest details on each vendor&apos;s pricing page before locking
            in your long-term SEO stack.
          </p>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Newsrooms and multi-author blogs:</strong>{" "}
              <span className="font-semibold">Yoast</span> wins with its
              readability checks, editor training, and predictable schema
              defaults.
            </li>
            <li>
              <strong>Technical SEOs and niche site builders:</strong>{" "}
              <span className="font-semibold">Rank Math</span> wins with schema
              builder, conditional rules, and value for many sites.
            </li>
            <li>
              <strong>Agencies onboarding lots of clients fast:</strong>{" "}
              <span className="font-semibold">All in One SEO</span> wins with
              its setup wizard, TruSEO scoring, and multi-site friendly plans.
            </li>
            <li>
              <strong>WooCommerce-heavy stores:</strong> Rank Math Pro or Yoast
              + WooCommerce add-on both work well—pick the one that matches your
              budget and editorial culture.
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
              <h3 className="text-lg font-semibold">Yoast SEO</h3>
              <p className="text-sm text-slate-700">
                Best for content-heavy sites where editors and writers need
                clear guidance and a proven SEO playbook baked into the
                WordPress editor.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Blogs, media sites, in-house content teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Rank Math</h3>
              <p className="text-sm text-slate-700">
                Best for power users who want automation, deep schema control,
                and strong value across many personal or client sites.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Niche site builders, technical SEOs, advanced
                WooCommerce stores.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">All in One SEO</h3>
              <p className="text-sm text-slate-700">
                Best for agencies and implementers who need a clean wizard,
                simple controls, and client-friendly reporting without
                overwhelming them.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: WordPress agencies, freelancers managing many small
                business sites.
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
