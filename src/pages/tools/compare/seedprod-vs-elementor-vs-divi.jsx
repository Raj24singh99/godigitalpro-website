import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  MonitorSmartphone,
  Palette,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "seedprod vs elementor vs divi";
const canonical = buildCanonical("/tools/compare/seedprod-vs-elementor-vs-divi");

const brandMeta = {
  seedprod: {
    gradient: "from-orange-500 via-amber-500 to-rose-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/seedprod.com",
  },
  elementor: {
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
    badge: "bg-pink-100 text-pink-900",
    logo: "https://logo.clearbit.com/elementor.com",
  },
  divi: {
    gradient: "from-indigo-500 via-violet-500 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/elegantthemes.com",
  },
};

const contenders = [
  {
    key: "seedprod",
    name: "SeedProd",
    blurb: "Lightweight WordPress landing page and theme builder focused on speed and campaigns.",
    url: "https://www.seedprod.com",
    slug: "seedprod",
  },
  {
    key: "elementor",
    name: "Elementor",
    blurb: "Feature-rich WordPress builder with huge widget ecosystem and visual effects.",
    url: "https://elementor.com",
    slug: "elementor",
  },
  {
    key: "divi",
    name: "Divi",
    blurb: "Flexible builder/theme with powerful global design controls and layout library.",
    url: "https://www.elegantthemes.com/gallery/divi/",
    slug: "divi",
  },
];

const comparisonRows = [
  {
    label: "Performance",
    seedprod: "Lightweight output with a focus on fast landing pages and funnels.",
    elementor: "Heavier by default; benefits from strong caching/CDN and performance tuning.",
    divi: "Historically heavy; improved with recent performance updates and tuning options.",
  },
  {
    label: "Templates & library",
    seedprod: "Landing pages, theme parts, and WooCommerce templates tailored to campaigns.",
    elementor:
      "Thousands of templates, widgets, and kits plus a large third-party marketplace ecosystem.",
    divi:
      "Huge layout library, theme packs, and global design presets for consistent branding.",
  },
  {
    label: "Ecommerce (WooCommerce)",
    seedprod: "WooCommerce blocks and templates on higher tiers; ideal for funnels and offers.",
    elementor: "Robust Woo widgets, product archive/single templates, and marketing elements.",
    divi: "Strong Woo modules and theme builder support for full-shop layouts and styling.",
  },
  {
    label: "Animations & effects",
    seedprod: "Basic transitions and sections; conversion-first rather than flashy.",
    elementor:
      "Advanced motion effects, popups, Lottie, sticky elements, and dynamic content options.",
    divi: "Rich effects, hover states, gradients, and module styling for visual-heavy sites.",
  },
  {
    label: "Learning curve",
    seedprod: "Very approachable for marketers; fewer options, easier to master.",
    elementor:
      "Intuitive drag-and-drop but a lot of depth; power users can go very deep in settings.",
    divi:
      "Different UI paradigm; powerful once learned but can feel opinionated for new users.",
  },
  {
    label: "Pricing",
    seedprod: "From roughly ~$39.50/yr; higher tiers unlock theme and Woo features.",
    elementor: "From around ~$59/yr for a single site; higher plans for more sites and Pro widgets.",
    divi:
      "Yearly and lifetime licenses that cover multiple sites; strong value for agencies.",
  },
  {
    label: "Best fit",
    seedprod:
      "Marketers needing speed, funnels, and campaign pages on WordPress without bloat.",
    elementor:
      "Design-heavy marketing sites that need deep widget coverage and advanced visuals.",
    divi:
      "Agencies/designers who want global design control, many sites, and a lifetime option.",
  },
];

const scoreboard = [
  { label: "Speed/performance", seedprod: 9.1, elementor: 7.8, divi: 7.9 },
  { label: "Design flexibility", seedprod: 8.2, elementor: 9.4, divi: 9.2 },
  { label: "Ecommerce readiness", seedprod: 8.7, elementor: 9.1, divi: 9.0 },
  { label: "Ease to launch pages", seedprod: 9.0, elementor: 8.4, divi: 8.2 },
  { label: "Value for agencies", seedprod: 8.8, elementor: 8.3, divi: 8.9 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  seedprod: avg("seedprod"),
  elementor: avg("elementor"),
  divi: avg("divi"),
};

const overallWinner =
  Math.max(averages.seedprod, averages.elementor, averages.divi) ===
  parseFloat(averages.seedprod)
    ? "SeedProd"
    : Math.max(averages.elementor, averages.divi) === parseFloat(averages.elementor)
    ? "Elementor"
    : "Divi";

const pricingTable = [
  {
    plan: "SeedProd Pro",
    monthly: "Advertised as annual pricing (starting low for single site)",
    annual: "Entry tier for landing pages; higher tiers add theme & WooCommerce builders",
    limits: "Site count depending on tier; features gated by plan level",
    notes: "Great if you mainly need fast campaigns, coming soon pages, and funnels.",
  },
  {
    plan: "Elementor Pro",
    monthly: "Effectively billed yearly per site tier",
    annual: "Starts with 1-site Pro, scales to agency-level site counts",
    limits: "Number of Pro-enabled sites and access to advanced widgets/theme builder",
    notes: "Best if you want deep widget coverage, form integrations, and motion effects.",
  },
  {
    plan: "Divi (Elegant Themes)",
    monthly: "Effectively yearly or one-time lifetime",
    annual: "Annual license or single lifetime payment for unlimited sites",
    limits: "Use on many sites with access to Extra theme and other Elegant Themes products",
    notes: "Compelling if you manage dozens of client sites long-term.",
  },
];

const featureBullets = {
  performance: [
    "SeedProd: Designed for speed with lean output; excellent for landing pages, opt-ins, and sales funnels.",
    "Elementor: Needs good hosting and caching; can still be fast with optimisation and selective widget use.",
    "Divi: Has improved performance features; still benefits from strong hosting/CDN and careful module choices.",
  ],
  design: [
    "SeedProd: Block-based builder with modern sections and landing-page specific patterns.",
    "Elementor: Extremely granular control over spacing, motion, and dynamic content; huge widget library.",
    "Divi: Visual builder with powerful global presets, theme builder, and fine-grained styling options.",
  ],
  workflow: [
    "SeedProd: Ideal for marketers building campaigns without needing a designer or developer.",
    "Elementor: Good balance of marketer-friendly UI and designer-level control; works well with add-ons.",
    "Divi: Strong for agencies that want a repeatable design system across many sites.",
  ],
};

const prosCons = {
  seedprod: {
    pros: [
      "Lightweight output with fast landing-page performance out of the box",
      "Simple UI that marketers and non-developers can learn quickly",
      "Built-in coming soon, maintenance, and landing-page modes for campaigns",
    ],
    cons: [
      "Less design depth and widget variety than Elementor and Divi",
      "WooCommerce features live on higher tiers",
      "Not ideal if you want highly complex, animated page designs",
    ],
  },
  elementor: {
    pros: [
      "Massive widget ecosystem and third-party add-ons",
      "Advanced motion effects, popups, and dynamic content options",
      "Strong community, tutorials, and prebuilt templates/kits",
    ],
    cons: [
      "Can feel heavy without performance optimisation",
      "More complex UI for non-technical users when exploring advanced features",
      "Pro licensing is per site, which can add up for large agencies",
    ],
  },
  divi: {
    pros: [
      "Lifetime license with unlimited sites is attractive for agencies",
      "Powerful theme builder and global design presets for consistent branding",
      "Huge library of layouts and packs for rapid deployment",
    ],
    cons: [
      "UI feels different from native WordPress editors and can take time to learn",
      "Performance still requires good hosting, caching, and careful design choices",
      "Lock-in effect: switching away from Divi can require cleanup work",
    ],
  },
};

const faqs = [
  {
    q: `Which is best overall in ${YEAR}?`,
    a: "SeedProd wins for speed-first landing pages and simple funnels. Elementor wins for pure design flexibility and widget depth. Divi wins for long-term agency value thanks to its lifetime and multi-site licensing.",
  },
  {
    q: "Which builder is fastest?",
    a: "SeedProd typically ships the lightest pages because it is focused on landing pages and campaigns. Elementor and Divi can perform well too, but they require more attention to hosting, caching, and design choices.",
  },
  {
    q: "Which is best for agencies?",
    a: "Divi is attractive for agencies thanks to its unlimited-site and lifetime pricing. SeedProd is great if you focus on fast lead-gen funnels. Elementor works well for agencies that sell highly visual, effect-heavy sites and can absorb per-site licensing.",
  },
  {
    q: "Which should I use for WooCommerce?",
    a: "SeedProd is strong for high-conversion product landing pages and funnels. Elementor and Divi both offer more comprehensive WooCommerce styling options for full-shop builds.",
  },
  {
    q: "Is it easy to switch between these builders?",
    a: "Moving between builders is possible but messy: shortcodes, widgets, and layout markup differ. If you plan to switch often, limit builder use to key landing pages instead of your entire site.",
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
  const key = lowered.includes("seed")
    ? "seedprod"
    : lowered.includes("elemen")
    ? "elementor"
    : lowered.includes("divi")
    ? "divi"
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
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function SeedProdVsElementorVsDiviPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`SeedProd vs Elementor vs Divi (${YEAR}) – WordPress builder comparison`}
        description="Compare SeedProd, Elementor, and Divi on performance, design flexibility, WooCommerce, pricing, and which WordPress builder is best for your projects or agency."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress builder comparison, seedprod vs elementor, seedprod vs divi, elementor vs divi`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
          WordPress builders
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          SeedProd vs Elementor vs Divi ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          SeedProd is speed-first for campaigns and funnels, Elementor and Divi bring huge widget
          ecosystems and design effects. Here is how to choose the right builder for your WordPress
          projects or agency.
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
          <div className="rounded-3xl border border-orange-100 bg-orange-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-orange-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>SeedProd</strong> if you care most about speed, simple funnels, and
              launching campaigns fast. Choose <strong>Elementor</strong> if you want maximum widget
              depth, motion effects, and third-party add-ons. Choose <strong>Divi</strong> if you are
              an agency or designer who wants strong global styling and long-term multi-site/lifetime
              value.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-orange-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "SeedProd"
                  ? averages.seedprod
                  : overallWinner === "Elementor"
                  ? averages.elementor
                  : averages.divi}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Your best choice depends on whether you optimise for speed, visual depth, or
              long-horizon licensing for many sites.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-orange-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">SeedProd</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">Divi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.seedprod}</td>
                    <td className="px-4 py-3 text-slate-700">{row.elementor}</td>
                    <td className="px-4 py-3 text-slate-700">{row.divi}</td>
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
                  <th className="px-4 py-3">SeedProd</th>
                  <th className="px-4 py-3">Elementor</th>
                  <th className="px-4 py-3">Divi</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { seedprod, elementor, divi } = row;
                  const winnerValue = Math.max(seedprod, elementor, divi);
                  const winner =
                    winnerValue === seedprod
                      ? "SeedProd"
                      : winnerValue === elementor
                      ? "Elementor"
                      : "Divi";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SeedProd"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {seedprod}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Elementor"
                            ? "font-semibold text-pink-700"
                            : "text-slate-700"
                        }`}
                      >
                        {elementor}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Divi"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {divi}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-orange-50 via-pink-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.seedprod}
                  </td>
                  <td className="px-4 py-3 font-semibold text-pink-800">
                    {averages.elementor}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.divi}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-orange-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <MonitorSmartphone className="h-5 w-5 text-orange-600" /> Performance & page speed
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Palette className="h-5 w-5 text-pink-600" /> Design flexibility & visual control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.design.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Rocket className="h-5 w-5 text-indigo-600" /> Workflow & day-to-day building
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / lifetime</th>
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
            Pricing changes frequently and may vary by region, campaigns, and bundles. Always confirm
            current pricing and site limits directly on each vendor’s pricing page before you commit.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SeedProd:</strong> Feels very focused on marketers—choose a template, tweak
              copy and images, launch. Less to learn, fewer distractions.
            </li>
            <li>
              <strong>Elementor:</strong> Friendly for beginners but deep enough for designers.
              Expect to spend time exploring widgets, effects, and theme builder to get full value.
            </li>
            <li>
              <strong>Divi:</strong> Unique visual builder experience. Once learned, it is efficient
              for building packs and systems across many sites, but the initial learning curve is
              steeper.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>High-converting funnels and campaign pages:</strong> SeedProd wins thanks to
              lightweight output, coming soon/maintenance modes, and simple funnel flows.
            </li>
            <li>
              <strong>Visually rich marketing sites and landing pages:</strong> Elementor wins with
              its widget ecosystem, motion effects, and add-ons.
            </li>
            <li>
              <strong>Agencies managing many client sites over years:</strong> Divi wins with its
              lifetime/unlimited model and strong theme builder for design systems.
            </li>
            <li>
              <strong>Hybrid stacks (multiple builders):</strong> Many agencies use SeedProd for
              performance-critical funnels, Elementor or Divi for main site templates, and keep the
              native block editor for simple content pages.
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
              <h3 className="text-lg font-semibold">SeedProd</h3>
              <p className="text-sm text-slate-700">
                Best when you want to spin up fast, focused landing pages, opt-ins, and funnels
                without slowing down your WordPress stack.
              </p>
              <p className="mt-2 text-sm font-semibold text-orange-700">
                Ideal for: Performance-sensitive campaigns, lead gen, and simple WooCommerce funnels.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Elementor</h3>
              <p className="text-sm text-slate-700">
                Best when you want stunning visual layouts, advanced effects, and a huge widget/add-on
                ecosystem.
              </p>
              <p className="mt-2 text-sm font-semibold text-pink-700">
                Ideal for: Marketing sites, SaaS homepages, and brands that prioritise visual impact.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Divi</h3>
              <p className="text-sm text-slate-700">
                Best when you run many WordPress sites and want a single design system and license to
                rule them all.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Web design agencies, freelancers, and studios building lots of client
                sites over time.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-orange-700 ring-1 ring-orange-100 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
