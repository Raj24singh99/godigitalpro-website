import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "yoast seo vs seopress vs rank math";
const canonical = buildCanonical("/tools/compare/yoast-seo-vs-seopress-vs-rank-math");

const brandMeta = {
  yoast: {
    gradient: "from-purple-600 via-pink-500 to-amber-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/yoast.com",
  },
  seopress: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/seopress.org",
  },
  rankmath: {
    gradient: "from-indigo-600 via-blue-600 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/rankmath.com",
  },
};

const contenders = [
  {
    key: "yoast",
    name: "Yoast SEO",
    blurb: "Editor-friendly SEO with content analysis, schema defaults, and training ecosystem.",
    url: "https://yoast.com/wordpress/plugins/seo/",
    slug: "yoast-seo",
  },
  {
    key: "seopress",
    name: "SEOPress",
    blurb: "White-label WordPress SEO with powerful API control and modular features.",
    url: "https://www.seopress.org/",
    slug: "seopress",
  },
  {
    key: "rankmath",
    name: "Rank Math",
    blurb: "Automation-first SEO plugin with schema builder, analytics, and generous free tier.",
    url: "https://rankmath.com/",
    slug: "rank-math",
  },
];

const comparisonRows = [
  {
    label: "Primary users",
    yoast: "Content teams and marketers who want clear editorial guidance.",
    seopress: "Developers and agencies needing white-label and API control.",
    rankmath: "Automation-focused marketers and WooCommerce-heavy sites.",
  },
  {
    label: "Free tier",
    yoast: "Solid basics, limited focus keyphrases, fewer advanced features.",
    seopress: "Very capable, includes redirects, sitemaps, schemas, and more.",
    rankmath: "One of the richest free tiers with schema, redirects, and AI hooks.",
  },
  {
    label: "Pricing model",
    yoast: "Around $99/year per site + add-ons for news, video, local, Woo.",
    seopress: "From ~$49/year for unlimited sites (single license).",
    rankmath: "From ~$69/year for unlimited personal sites; higher for agencies.",
  },
  {
    label: "Schema control",
    yoast: "Opinionated schema graph with blocks for FAQ, HowTo, etc.",
    seopress: "Custom schemas, JSON-LD editor, and REST API for automation.",
    rankmath: "Visual schema builder with templates and per-post overrides.",
  },
  {
    label: "Content optimization",
    yoast: "In-depth readability + SEO analysis with clear traffic-light feedback.",
    seopress: "Lean content checks with less opinionated guidance.",
    rankmath: "Deep checks across multiple keywords with automation suggestions.",
  },
  {
    label: "Integrations",
    yoast: "Semrush, Wincher, Zapier, WooCommerce, and news/local/video add-ons.",
    seopress: "GA/GA4, Matomo, Google News, REST hooks, and Breadcrumb APIs.",
    rankmath: "Analytics module, Content AI, WooCommerce, Easy Digital Downloads.",
  },
  {
    label: "Best for",
    yoast: "Teams that want safe defaults, training, and non-technical workflows.",
    seopress: "Agencies managing many client sites with unified configuration.",
    rankmath: "Teams that want automation, AI assistance, and built-in analytics.",
  },
];

const scoreboard = [
  { label: "Editorial coaching & readability", yoast: 9.6, seopress: 7.8, rankmath: 8.4 },
  { label: "Developer/API control", yoast: 7.2, seopress: 9.4, rankmath: 8.3 },
  { label: "Pricing value (per site)", yoast: 7.0, seopress: 9.3, rankmath: 9.0 },
  { label: "Automation & schema flexibility", yoast: 8.3, seopress: 8.9, rankmath: 9.5 },
  { label: "Agency & multi-site readiness", yoast: 7.9, seopress: 9.5, rankmath: 8.7 },
];

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  yoast: avg("yoast"),
  seopress: avg("seopress"),
  rankmath: avg("rankmath"),
};

const overallWinner =
  Math.max(parseFloat(averages.yoast), parseFloat(averages.seopress), parseFloat(averages.rankmath)) ===
  parseFloat(averages.yoast)
    ? "Yoast SEO"
    : Math.max(parseFloat(averages.seopress), parseFloat(averages.rankmath)) === parseFloat(averages.seopress)
    ? "SEOPress"
    : "Rank Math";

const pricingTable = [
  {
    plan: "Yoast SEO Premium",
    monthly: "Approx. ~$8–10/mo (billed yearly)",
    annual: "Around $99/year per site",
    limits: "License tied to individual sites; add-ons priced separately",
    notes: "Best when you want strong editorial guidance and official training.",
  },
  {
    plan: "SEOPress Pro",
    monthly: "Approx. ~$4–5/mo (billed yearly)",
    annual: "From ~$49/year for unlimited sites",
    limits: "Single license covers unlimited installs; white-label included",
    notes: "Ideal for agencies and freelancers managing many client sites.",
  },
  {
    plan: "Rank Math Pro",
    monthly: "Approx. ~$6–8/mo (billed yearly)",
    annual: "From ~$69/year for unlimited personal sites",
    limits: "Higher tiers add more client sites, advanced modules, and support",
    notes: "Great if you want schema builder, analytics, and automation in one.",
  },
];

const featureBullets = {
  foundations: [
    "Yoast SEO: Strong on-page analysis for SEO and readability with clear traffic-light scoring, internal linking suggestions, and cornerstone content tools.",
    "SEOPress: Comprehensive core SEO toolkit—titles, metas, sitemaps, breadcrumbs, schemas—without locking you into opinionated content scoring.",
    "Rank Math: Multi-keyword optimization, granular control per post, and deep WooCommerce/EDD support for product SEO.",
  ],
  automation: [
    "Yoast SEO: Template-driven title/meta patterns and schema graph that keep large editorial teams consistent.",
    "SEOPress: REST API + custom schemas enable scripted setups, CI pipelines, and automated multi-site configuration.",
    "Rank Math: Automation-focused with Content AI, auto-detecting schemas, redirection rules, and 404 monitoring baked in.",
  ],
  multiSite: [
    "Yoast SEO: Common in large publishers; works well with multisite but licensing per site can add up.",
    "SEOPress: Designed with agencies in mind—white-label mode, unlimited sites, and import/export of settings.",
    "Rank Math: Attractive for power users managing portfolios of sites needing analytics + automation from one plugin.",
  ],
};

const prosCons = {
  yoast: {
    pros: [
      "Best-in-class editorial guidance and readability analysis",
      "Huge education ecosystem (courses, docs, community)",
      "Opinionated schema graph that is safe for most publishers",
    ],
    cons: [
      "Per-site pricing gets expensive at agency scale",
      "Content analysis can feel rigid or noisy to advanced SEOs",
      "Advanced features (news, video, local) live in separate add-ons",
    ],
  },
  seopress: {
    pros: [
      "Unlimited sites on a single affordable license",
      "White-label mode perfect for agencies and freelancers",
      "Powerful schema and REST API for automated setups",
    ],
    cons: [
      "Fewer out-of-the-box training/education resources than Yoast",
      "Interface can feel more technical for non-marketers",
      "Smaller ecosystem of third-party tutorials and templates",
    ],
  },
  rankmath: {
    pros: [
      "Very generous free tier with advanced features",
      "Schema builder, analytics, and Content AI in one plugin",
      "Strong WooCommerce and product SEO capabilities",
    ],
    cons: [
      "Density of toggles and settings can overwhelm beginners",
      "Analytics module overlaps with GA/GA4 for some teams",
      "Support SLAs and features vary meaningfully by plan tier",
    ],
  },
};

const faqs = [
  {
    q: `Yoast vs SEOPress vs Rank Math: which should I choose in ${YEAR}?`,
    a: "Yoast is the safest pick for content teams needing training and editorial guardrails. SEOPress is the best fit for developers and agencies that want white-label, API control, and unlimited sites. Rank Math is ideal if you want automation, schema builder, and built-in analytics at aggressive pricing.",
  },
  {
    q: "Is SEOPress really unlimited sites?",
    a: "Yes. SEOPress Pro licenses typically cover unlimited sites under a single license, which makes it especially attractive for agencies or freelancers who manage many WordPress installs.",
  },
  {
    q: "Which plugin is best for WooCommerce stores?",
    a: "Rank Math tends to be the favourite for WooCommerce because of its product-focused features, analytics modules, and automation. Yoast has a WooCommerce add-on that is very reliable. SEOPress is strong if your developer team wants to control every field and schema.",
  },
  {
    q: "Which plugin is fastest and lightest?",
    a: "SEOPress and Rank Math are both modular, letting you disable features you do not use. Yoast has improved performance but can still feel heavier on large editorial setups because of its metabox assets and analysis scripts.",
  },
  {
    q: "Can I migrate between Yoast, SEOPress, and Rank Math?",
    a: "Yes. All three plugins provide import/export tools for titles, metas, redirects, and some schema data. Always test migration flows on a staging environment and recrawl important templates afterward.",
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
  const key = lowered.includes("yoast")
    ? "yoast"
    : lowered.includes("seopress")
    ? "seopress"
    : lowered.includes("rank")
    ? "rankmath"
    : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-500 to-slate-700",
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
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function YoastVsSeopressVsRankMathPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Yoast SEO vs SEOPress vs Rank Math (${YEAR}) – WordPress SEO plugin comparison`}
        description="Compare Yoast, SEOPress, and Rank Math for WordPress SEO: pricing, schema, automation, content analysis, and which plugin fits your stack best."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress seo plugins, seo plugin comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          WordPress SEO plugins
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Yoast SEO vs SEOPress vs Rank Math ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Yoast SEO is the classic editor-friendly plugin with safe defaults and strong training.
          SEOPress is a developer and agency favourite with white-label controls and an unlimited
          site license. Rank Math leans into automation, AI assistance, schema builder, and built-in
          analytics. Here is how they compare when you are choosing your long-term WordPress SEO
          stack.
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
                <Sparkles className="h-5 w-5 text-white/80" />
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
              Choose <strong>Yoast SEO</strong> if your main priority is giving editors and content
              teams clear guidance with safe defaults. Pick <strong>SEOPress</strong> if you are an
              agency or developer managing many sites and want white-label control plus an unlimited
              license. Go with <strong>Rank Math</strong> if you want automation, schema builder, and
              built-in analytics in one plugin.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-purple-600" /> Overall scoreboard winner:{" "}
              {overallWinner}
              <span className="text-xs text-slate-600">
                {" "}
                (avg:{" "}
                {overallWinner === "Yoast SEO"
                  ? averages.yoast
                  : overallWinner === "SEOPress"
                  ? averages.seopress
                  : averages.rankmath}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Your real winner depends on team structure: content-heavy brands lean Yoast, agency
              multi-site stacks lean SEOPress, and automation-first marketers often standardise on
              Rank Math.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Yoast SEO</th>
                  <th className="px-4 py-3">SEOPress</th>
                  <th className="px-4 py-3">Rank Math</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.yoast}</td>
                    <td className="px-4 py-3 text-slate-700">{row.seopress}</td>
                    <td className="px-4 py-3 text-slate-700">{row.rankmath}</td>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Yoast SEO</th>
                  <th className="px-4 py-3">SEOPress</th>
                  <th className="px-4 py-3">Rank Math</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(row.yoast, row.seopress, row.rankmath);
                  const winner =
                    winnerValue === row.yoast
                      ? "Yoast SEO"
                      : winnerValue === row.seopress
                      ? "SEOPress"
                      : "Rank Math";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Yoast SEO"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.yoast}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SEOPress"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.seopress}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Rank Math"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.rankmath}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-emerald-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">{averages.yoast}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.seopress}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.rankmath}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-purple-600" /> SEO foundations & on-page guidance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.foundations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Automation, schema & integrations
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-600" /> Multi-site, clients & governance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.multiSite.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
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
            Pricing changes frequently and may vary with promotions, currency, and site limits. Always
            confirm the latest details on each vendor’s pricing page before making a long-term
            decision.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Yoast SEO:</strong> Feels like a natural extension of the WordPress editor with
              clear content analysis blocks, making it easy for writers and editors to adopt quickly.
            </li>
            <li>
              <strong>SEOPress:</strong> More configuration-driven and less opinionated, ideal for
              teams comfortable adjusting technical SEO settings and schemas directly.
            </li>
            <li>
              <strong>Rank Math:</strong> Very feature-rich dashboard with many toggles; powerful
              once configured but can intimidate beginners without a clear setup plan.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Newsrooms and content-heavy publishers:</strong> Yoast SEO wins with strong
              editorial workflows, clear training materials, and safe defaults for large writing
              teams.
            </li>
            <li>
              <strong>Agencies running many client sites:</strong> SEOPress wins with unlimited site
              licensing, white-label mode, and import/export of settings across projects.
            </li>
            <li>
              <strong>Ecommerce and growth-focused marketers:</strong> Rank Math wins with schema
              builder, analytics, and automation around WooCommerce and product templates.
            </li>
            <li>
              <strong>Developer-led stacks with CI/automation:</strong> SEOPress and Rank Math both
              work well; SEOPress scores for REST/API control, while Rank Math scores for
              automation-first features.
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
                Best when you need predictable, editor-friendly workflows and want to ensure every
                writer follows the same SEO and readability standards.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Content teams, publishers, marketing-led organisations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SEOPress</h3>
              <p className="text-sm text-slate-700">
                Best when you manage many sites and want a white-label, API-friendly plugin that you
                can standardise across an entire client portfolio.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, freelancers, technical SEOs, multisite setups.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Rank Math</h3>
              <p className="text-sm text-slate-700">
                Best when you value automation, AI-driven suggestions, and an all-in-one view that
                combines SEO controls with analytics dashboards.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Growth marketers, WooCommerce stores, automation-first teams.
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
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
