import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "paddle vs gumroad vs lemon squeezy";
const canonical = buildCanonical(
  "/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy"
);

const brandMeta = {
  paddle: {
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/paddle.com",
  },
  gumroad: {
    gradient: "from-emerald-500 via-teal-500 to-emerald-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/gumroad.com",
  },
  "lemon squeezy": {
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/lemonsqueezy.com",
  },
};

const contenders = [
  {
    key: "paddle",
    name: "Paddle",
    blurb:
      "Merchant of record for SaaS; handles billing, global tax, chargebacks, and invoicing at scale.",
    url: "https://www.paddle.com",
  },
  {
    key: "gumroad",
    name: "Gumroad",
    blurb:
      "Creator-first storefront for selling digital downloads, courses, and memberships quickly.",
    url: "https://gumroad.com",
  },
  {
    key: "lemon squeezy",
    name: "Lemon Squeezy",
    blurb:
      "Merchant of record for digital products and SaaS-style subscriptions with modern checkout and embeds.",
    url: "https://www.lemonsqueezy.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    paddle: "SaaS billing + compliance offload and B2B/B2C subscriptions.",
    gumroad: "Creators selling digital products, courses, and memberships fast.",
    "lemon squeezy":
      "Digital goods and SaaS lite with MoR tax handling and simple licensing.",
  },
  {
    label: "Tax & compliance",
    paddle: "Merchant of record; handles global tax, chargebacks, compliance.",
    gumroad:
      "Handles tax collection/remittance for many regions; lighter SaaS focus.",
    "lemon squeezy":
      "Merchant of record; handles VAT/sales tax on global digital sales.",
  },
  {
    label: "Billing depth",
    paddle:
      "Subscriptions, trials, upgrades/downgrades, proration, invoicing, B2B support.",
    gumroad:
      "Basic subscriptions/memberships and one-off purchases; simple checkout.",
    "lemon squeezy":
      "Subscriptions, coupons, basic licensing, and simple SaaS use cases.",
  },
  {
    label: "APIs & custom flows",
    paddle:
      "Robust APIs, webhooks, and integrations aimed at product-led SaaS teams.",
    gumroad: "Limited API; focuses on hosted storefronts and simple embeds.",
    "lemon squeezy":
      "Developer-friendly APIs, webhooks, and embeds—lighter than Paddle but stronger than Gumroad.",
  },
  {
    label: "Pricing feel",
    paddle:
      "Revenue-share; includes tax/compliance and chargeback handling in the cut.",
    gumroad: "Platform fee plus payment processor fee; familiar to creators.",
    "lemon squeezy":
      "Platform percentage fee as MoR; simple pricing for digital products.",
  },
];

const scoreboard = [
  {
    label: "Compliance offload",
    scores: { paddle: 9.5, gumroad: 7.5, "lemon squeezy": 9.0 },
  },
  {
    label: "SaaS readiness",
    scores: { paddle: 9.2, gumroad: 6.8, "lemon squeezy": 7.8 },
  },
  {
    label: "Speed to launch",
    scores: { paddle: 8.8, gumroad: 9.4, "lemon squeezy": 9.2 },
  },
  {
    label: "Customization/APIs",
    scores: { paddle: 9.0, gumroad: 6.5, "lemon squeezy": 8.0 },
  },
  {
    label: "Value for indie creators",
    scores: { paddle: 8.0, gumroad: 9.1, "lemon squeezy": 8.6 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  paddle: avg("paddle"),
  gumroad: avg("gumroad"),
  "lemon squeezy": avg("lemon squeezy"),
};

const winnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const formatBrandName = (key) => {
  if (key === "lemon squeezy") return "Lemon Squeezy";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const overallWinner = formatBrandName(winnerKey);

const pricingTable = [
  {
    platform: "Paddle",
    positioning: "MoR for SaaS with revenue-share pricing.",
    model:
      "Takes a percentage of processed revenue and includes tax/compliance handling.",
    bestFor:
      "SaaS businesses that want to outsource billing infrastructure and tax risk.",
    notes:
      "Pricing is tied to your revenue; can be compelling if you value compliance offload more than marginal cost savings.",
  },
  {
    platform: "Gumroad",
    positioning: "Creator-first pricing for digital products.",
    model:
      "Platform fee plus payment processing; simple to understand for individuals.",
    bestFor:
      "Indie creators who prioritize low setup overhead over deep SaaS tooling.",
    notes:
      "Very transparent fee structure; you still retain more control over your own brand and marketing stack.",
  },
  {
    platform: "Lemon Squeezy",
    positioning: "MoR pricing for digital products and SaaS-style subscriptions.",
    model:
      "Platform percentage on transactions; MoR handles VAT and compliance.",
    bestFor:
      "Software creators and studios who want MoR benefits without a heavy enterprise setup.",
    notes:
      "Often attractive for smaller software shops and plugin/theme businesses needing licensing and tax handling.",
  },
];

const featureBullets = {
  stack: [
    "Paddle: Sits deep in your SaaS stack with webhooks and product-led billing flows.",
    "Gumroad: Acts as the storefront layer sitting alongside your existing site or social audience.",
    "Lemon Squeezy: Often used as a lightweight billing backend for apps, plugins, and digital licenses.",
  ],
  ownership: [
    "Paddle: Strong focus on compliance and tax, with Paddle as merchant of record.",
    "Gumroad: You own your audience; Gumroad runs checkout and distribution.",
    "Lemon Squeezy: MoR for tax plus a modern, brandable checkout experience.",
  ],
  complexity: [
    "Paddle: Best when you have multiple plans, trials, and B2B invoicing needs.",
    "Gumroad: Best when you just need a link or embed to sell a file or membership.",
    "Lemon Squeezy: Sits between them—more structured than Gumroad, lighter than Paddle.",
  ],
};

const prosCons = {
  paddle: {
    pros: [
      "Full merchant-of-record model with global tax and compliance handled",
      "Rich subscription tooling including trials, upgrades, downgrades, and invoicing",
      "Strong API and webhook support for SaaS products and PLG funnels",
    ],
    cons: [
      "Revenue-share pricing can feel expensive for high-volume or low-margin products",
      "More setup and integration work than simple creator storefronts",
      "Best fit is SaaS; can be overkill for simple one-off digital products",
    ],
  },
  gumroad: {
    pros: [
      "Extremely fast to launch; ideal for individual creators and small teams",
      "Hosted storefronts, product pages, and memberships built-in",
      "Simple pricing model that is easy for creators to understand",
    ],
    cons: [
      "Less suited for complex SaaS billing or B2B invoicing scenarios",
      "API and customization depth are limited compared to Paddle or Lemon Squeezy",
      "Branding and checkout experience are more constrained than fully custom flows",
    ],
  },
  "lemon squeezy": {
    pros: [
      "Merchant-of-record model with VAT/sales tax handled for digital goods",
      "Modern checkout, embeds, and licensing tooling for software and plugins",
      "Developer-friendly, with APIs and webhooks suitable for indie SaaS and apps",
    ],
    cons: [
      "Not as deeply enterprise/SaaS-focused as Paddle in some areas",
      "Less of a “storefront” than Gumroad; better for integrated billing",
      "Revenue-share / platform fee still needs to be assessed versus DIY + Stripe",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick Paddle if you are running a SaaS product and want to offload tax, invoicing, and subscription complexity. Pick Gumroad if you are a creator selling digital downloads, courses, or memberships and want the fastest setup. Pick Lemon Squeezy if you sell digital products or lightweight SaaS and want MoR tax handling with modern checkout and licensing.",
  },
  {
    q: "Do Paddle and Lemon Squeezy both handle tax?",
    a: "Yes. Both Paddle and Lemon Squeezy operate as merchants of record: they calculate, collect, and remit taxes on qualifying transactions. Gumroad also helps with tax, but Paddle and Lemon Squeezy are more focused on MoR coverage for software and global SaaS.",
  },
  {
    q: "Which is fastest to launch?",
    a: "Gumroad and Lemon Squeezy are fastest to launch for most creators and small teams. Paddle is still quick compared to building billing in-house, but it is designed for deeper SaaS integration and typically involves more configuration.",
  },
  {
    q: "When does Paddle make more sense than just using Stripe directly?",
    a: "Paddle makes more sense when you sell globally, want to avoid managing complex tax rules, and value MoR protection on chargebacks and compliance. If you would otherwise spend time and legal budget on tax and invoicing, Paddle can be more efficient than pure DIY with Stripe.",
  },
  {
    q: "Can I migrate between these platforms later?",
    a: "Yes, but expect effort. You can move future customers to a new platform via new checkout links, but migrating existing subscriptions and historical tax/compliance data is more involved. For SaaS, plan your migration strategy carefully.",
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
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] ||
    brandMeta[name] || {
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
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function PaddleVsGumroadVsLemonSqueezyPage() {
  const overallAvg = averages[winnerKey];

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Paddle vs Gumroad vs Lemon Squeezy – which billing option fits? (${YEAR})`}
        description="Compare Paddle, Gumroad, and Lemon Squeezy for MoR coverage, SaaS billing depth, creator friendliness, and pricing to pick the right billing platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, paddle alternative, gumroad alternative, lemon squeezy vs paddle`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Payments & billing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Paddle vs Gumroad vs Lemon Squeezy ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Paddle is SaaS-focused with full merchant-of-record billing, Gumroad
          is the simplest creator storefront, and Lemon Squeezy sits between
          them as a modern MoR for digital goods and lightweight SaaS. Here is
          how they compare on tax, billing depth, and pricing.
        </p>

        {/* Contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-sm`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + Top pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Paddle</strong> if you are building a SaaS product
              and want subscriptions, invoicing, and global tax off your plate.
              Choose <strong>Gumroad</strong> if you are a creator who needs a
              simple place to sell digital products fast. Choose{" "}
              <strong>Lemon Squeezy</strong> if you want a modern MoR for
              software, plugins, or digital goods with licensing and
              subscriptions.
            </p>
            <p className="text-sm text-slate-700">
              For many software creators, Lemon Squeezy offers a middle ground:
              MoR coverage with simpler setup than full-blown SaaS billing
              stacks.
            </p>
          </div>
          <div className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Overall scoreboard winner
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {overallWinner}
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Average score: {overallAvg}/10
            </p>
            <p className="mt-2 text-sm text-slate-700">
              The “winner” depends heavily on your use case: SaaS, indie
              creator, or digital goods. Use the scores as a directional guide
              and match them to your actual billing model and risk tolerance.
            </p>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Paddle:</strong> B2B and B2C SaaS products that need
                subscriptions, invoicing, and global compliance handled.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>Gumroad:</strong> individual creators selling digital
                downloads, courses, and memberships without heavy dev work.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-amber-600" />
              <span>
                <strong>Lemon Squeezy:</strong> software creators and studios
                selling apps, plugins, or digital goods with MoR tax handled.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Layers className="h-6 w-6 text-indigo-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Paddle</th>
                  <th className="px-4 py-3">Gumroad</th>
                  <th className="px-4 py-3">Lemon Squeezy</th>
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
                    <td className="px-4 py-3">{row.paddle}</td>
                    <td className="px-4 py-3">{row.gumroad}</td>
                    <td className="px-4 py-3">{row["lemon squeezy"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <BarChart3 className="h-6 w-6 text-amber-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Paddle</th>
                  <th className="px-4 py-3">Gumroad</th>
                  <th className="px-4 py-3">Lemon Squeezy</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { paddle, gumroad, "lemon squeezy": lemonScore } =
                    row.scores;
                  const maxScore = Math.max(paddle, gumroad, lemonScore);
                  const winner =
                    maxScore === paddle
                      ? "Paddle"
                      : maxScore === gumroad
                      ? "Gumroad"
                      : "Lemon Squeezy";

                  return (
                    <tr
                      key={row.label}
                      className="align-top odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Paddle"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-800"
                        }`}
                      >
                        {paddle}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Gumroad"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-800"
                        }`}
                      >
                        {gumroad}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Lemon Squeezy"
                            ? "font-semibold text-amber-800"
                            : "text-slate-800"
                        }`}
                      >
                        {lemonScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.paddle}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.gumroad}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["lemon squeezy"]}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature & use-case comparison */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Feature and use-case comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Where each platform fits in your stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ownership, MoR, and compliance
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Complexity of billing and products
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.complexity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Positioning</th>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.platform}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.platform}
                    </th>
                    <td className="px-4 py-3">{row.positioning}</td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="px-4 py-3">{row.bestFor}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing structures, fees, and thresholds change frequently. Always
            confirm the latest details on each provider’s site and model your
            expected volume before deciding.
          </p>
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                SaaS with real subscription complexity
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Paddle.</strong> Ideal if you have multiple
                plans, trials, invoicing, and global customer bases, and want
                someone else to handle tax and chargebacks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Fastest creator launch
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Gumroad.</strong> Set up a product, share a
                link, and start selling digital downloads or memberships in
                minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Software, plugins, and licenses
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Lemon Squeezy.</strong> Combines MoR tax
                handling with licensing and subscription tools suitable for
                digital software businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            FAQs: Paddle vs Gumroad vs Lemon Squeezy
          </h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-8">
          <Link
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-800 hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
