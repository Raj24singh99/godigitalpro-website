import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "voluum vs redtrack vs hyros";
const canonical = buildCanonical("/tools/compare/voluum-vs-redtrack-vs-hyros");

const brandMeta = {
  voluum: {
    gradient: "from-purple-500 via-blue-500 to-indigo-600",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/voluum.com",
  },
  redtrack: {
    gradient: "from-rose-500 via-red-500 to-orange-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/redtrack.io",
  },
  hyros: {
    gradient: "from-emerald-500 via-teal-500 to-lime-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/hyros.com",
  },
};

const contenders = [
  {
    key: "voluum",
    name: "Voluum",
    blurb: "Performance marketing tracker with automation, AI routing, and agency tooling.",
    url: "https://voluum.com",
  },
  {
    key: "redtrack",
    name: "RedTrack",
    blurb: "Budget-friendly tracker with automation, cost sync, and ecommerce integrations.",
    url: "https://redtrack.io",
  },
  {
    key: "hyros",
    name: "Hyros",
    blurb: "Ad attribution platform built for funnels, paid social, calls, and CRM deals.",
    url: "https://hyros.com",
  },
];

const comparisonRows = [
  {
    label: "Primary focus",
    voluum: "Affiliate and media buying performance tracking",
    redtrack: "Affiliates and ecommerce performance tracking",
    hyros: "High-ticket funnels, sales teams, and call-center attribution",
  },
  {
    label: "Attribution model",
    voluum: "Click + postback tracking across offers and traffic sources",
    redtrack: "Click + server-side tracking with cost sync",
    hyros: "First-party tracking that ties ad clicks to calls, emails, and CRM deals",
  },
  {
    label: "Automation",
    voluum: "Rules-based optimisation and AI traffic distribution",
    redtrack: "Automation rules, cost sync, and performance alerts",
    hyros: "Campaign syncing, pixel deduplication, and event normalisation",
  },
  {
    label: "Integrations",
    voluum: "Hundreds of ad networks and offer templates + API",
    redtrack: "Major ad networks plus Shopify, WooCommerce, and custom APIs",
    hyros: "Meta, Google, TikTok, CRMs, call tracking, and sales tools",
  },
  {
    label: "Best for",
    voluum: "Agencies, large affiliate teams, and networks",
    redtrack: "Scrappy media buyers and ecommerce brands needing automation",
    hyros: "Brands combining ads, calls, and CRM deals into one revenue view",
  },
];

const scoreboard = [
  { label: "Affiliate tracking depth", scores: { voluum: 9.5, redtrack: 8.8, hyros: 7.0 } },
  { label: "Omnichannel attribution", scores: { voluum: 7.2, redtrack: 7.8, hyros: 9.4 } },
  { label: "Automation", scores: { voluum: 9.2, redtrack: 8.5, hyros: 7.6 } },
  { label: "Value", scores: { voluum: 7.3, redtrack: 8.9, hyros: 7.5 } },
  { label: "Ease of use", scores: { voluum: 7.8, redtrack: 8.2, hyros: 7.9 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(
    1
  );

const averages = {
  voluum: avg("voluum"),
  redtrack: avg("redtrack"),
  hyros: avg("hyros"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  voluum: "Voluum",
  redtrack: "RedTrack",
  hyros: "Hyros",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Voluum Profit",
    monthly: "$299",
    annual: "Annual billing",
    notes: "Automation, 3M events, multiple tracking domains, and agency features.",
  },
  {
    plan: "RedTrack Advanced",
    monthly: "$149",
    annual: "$124/mo",
    notes: "Automation, up to 10M events, cost sync, and ecommerce integrations.",
  },
  {
    plan: "Hyros Growth",
    monthly: "~$399+",
    annual: "Annual contract",
    notes: "Custom pricing based on ad spend and usage; tailored for scaled brands.",
  },
];

const faqs = [
  {
    q: `Who should choose Hyros over Voluum or RedTrack in ${YEAR}?`,
    a: "Brands running paid social, email, and phone-based sales—especially high-ticket funnels with call centers or sales teams. Hyros shines when you need to tie ads to calls, emails, and CRM deals.",
  },
  {
    q: "Does Hyros work for affiliates?",
    a: "It can, but it is optimised for brand-side attribution across ads, calls, and CRMs. Most affiliates gain more efficiency with Voluum or RedTrack, which are purpose-built for affiliate workflows.",
  },
  {
    q: "Is RedTrack a cheaper Voluum alternative?",
    a: "Yes. RedTrack covers most key automation, routing, and cost-sync features at a lower price point. It is a strong fit for lean teams that do not need the full enterprise stack Voluum offers.",
  },
  {
    q: "Can I use Hyros with Voluum or RedTrack?",
    a: "Some agencies do. Hyros is used to align ads, calls, and CRM revenue, while Voluum or RedTrack track affiliate offers and performance campaigns in parallel.",
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

const featureBullets = {
  automation: [
    "Voluum: Enterprise-grade rules and AI routing to pause, redirect, or scale traffic by performance.",
    "RedTrack: Practical automation for everyday buyers—rules, cost sync, and alerts without bloat.",
    "Hyros: Focused on syncing events back to ad platforms and deduplicating conversions across pixels.",
  ],
  attribution: [
    "Voluum: Click and postback-based attribution for offers, landers, and multi-step funnels.",
    "RedTrack: Click and server-side tracking combined with cost data for ROAS visibility.",
    "Hyros: First-party attribution that tracks users across ads, emails, calls, and CRM stages.",
  ],
  operations: [
    "Voluum: Workspaces, user permissions, and SLAs on higher tiers for serious agencies.",
    "RedTrack: Collaborative plans with APIs and ecommerce integrations for growing teams.",
    "Hyros: Built around brand marketing and sales ops alignment rather than pure affiliate ops.",
  ],
};

const prosCons = {
  voluum: {
    pros: [
      "Market-leading automation and AI routing for high-volume buyers",
      "Agency-ready features including workspaces and advanced permissions",
      "Fast, detailed reporting across offers, landers, and traffic sources",
    ],
    cons: [
      "Highest price point of the three",
      "Complex UI and learning curve for new teams",
      "Overkill for small, low-volume setups",
    ],
  },
  redtrack: {
    pros: [
      "More affordable while still offering robust automation and cost sync",
      "Good ecommerce integrations (Shopify, WooCommerce) and major ad networks",
      "Balanced feature set for mid-market affiliates, media buyers, and brands",
    ],
    cons: [
      "Interface is less polished than some enterprise tools",
      "Support and onboarding depth depend on your plan",
      "Fewer AI-style routing features than Voluum",
    ],
  },
  hyros: {
    pros: [
      "First-party tracking that connects ads to calls, emails, and CRM stages",
      "Strong integrations for Meta, Google, TikTok, and popular CRMs",
      "Designed for high-ticket funnels and sales teams, not just clicks",
    ],
    cons: [
      "Significantly more expensive, with custom pricing and contracts",
      "Overkill for pure affiliate setups without sales teams",
      "Implementation requires close collaboration with dev/ops and sales",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered.includes("voluum") || lowered === "voluum"
      ? "voluum"
      : lowered.includes("redtrack")
      ? "redtrack"
      : lowered.includes("hyros")
      ? "hyros"
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

export default function VoluumVsRedTrackVsHyrosPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Voluum vs RedTrack vs Hyros – Comparison (${YEAR})`}
        description="Compare Voluum, RedTrack, and Hyros for affiliate tracking, automation, omnichannel attribution, pricing, and the right fit for your campaigns."
        canonical={canonical}
        keywords={`${primaryKeyword}, performance tracking comparison, affiliate tracking, hyros alternative`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
          Attribution platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Voluum vs RedTrack vs Hyros ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Need a tracking stack for affiliate offers, ecommerce, or high-ticket funnels? This
          comparison breaks down <strong>Voluum</strong>, <strong>RedTrack</strong>, and{" "}
          <strong>Hyros</strong> so you can align tracking with your acquisition and sales model.
        </p>

        {/* Quick verdict row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-purple-50/90 p-6 ring-1 ring-purple-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-purple-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Voluum</strong> for advanced automation and agency workflows. Choose{" "}
              <strong>RedTrack</strong> if you want a leaner, more affordable tracker with automation
              and cost sync. Choose <strong>Hyros</strong> when your priority is omnichannel
              attribution across ads, calls, emails, and CRM deals—not just clicks.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-purple-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Smartphone className="h-5 w-5 text-purple-700" /> Omnichannel pick
            </div>
            <p className="text-sm text-slate-700">
              <strong>Hyros</strong> is built for brands that track{" "}
              <strong>calls, emails, funnel steps, and CRM deals</strong> alongside paid social and
              search.
            </p>
          </div>
        </div>

        {/* Top contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
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
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Voluum</th>
                  <th className="px-4 py-3">RedTrack</th>
                  <th className="px-4 py-3">Hyros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.voluum}</td>
                    <td className="px-4 py-3 text-slate-700">{row.redtrack}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hyros}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Voluum</th>
                  <th className="px-4 py-3">RedTrack</th>
                  <th className="px-4 py-3">Hyros</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { voluum, redtrack, hyros } = row.scores;
                  const winnerValue = Math.max(voluum, redtrack, hyros);
                  const winner =
                    winnerValue === voluum
                      ? "Voluum"
                      : winnerValue === redtrack
                      ? "RedTrack"
                      : "Hyros";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Voluum" ? "font-semibold text-purple-800" : "text-slate-700"
                        }`}
                      >
                        {voluum}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "RedTrack"
                            ? "font-semibold text-rose-800"
                            : "text-slate-700"
                        }`}
                      >
                        {redtrack}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Hyros" ? "font-semibold text-emerald-800" : "text-slate-700"
                        }`}
                      >
                        {hyros}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-purple-50 via-rose-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.voluum}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.redtrack}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.hyros}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Zap className="h-6 w-6 text-purple-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Sparkles className="h-5 w-5 text-purple-700" /> Automation & optimisation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-indigo-700" /> Attribution model
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.attribution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-emerald-700" /> Operations & team fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.operations.map((item) => (
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
                  <th className="px-4 py-3">Annual</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for all three tools changes frequently and may depend on traffic, events, and
            contract terms. Always confirm current tiers, overages, and SLAs directly on each
            vendor’s site before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Voluum:</strong> Feels like an{" "}
              <strong>enterprise performance dashboard</strong>. Powerful, but requires dedicated
              setup and process—best when you treat tracking as core infrastructure.
            </li>
            <li>
              <strong>RedTrack:</strong> Feels like a{" "}
              <strong>performance marketer&apos;s control panel</strong>. Easier to onboard and
              configure for smaller teams while still supporting automation.
            </li>
            <li>
              <strong>Hyros:</strong> Feels like a{" "}
              <strong>revenue attribution layer</strong> for your ads and CRM. Onboarding is heavier,
              but the output is a single truth for ad-driven revenue and calls.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Large affiliates and agencies:</strong> Voluum wins with automation, AI
              routing, and agency-ready features that justify its premium pricing.
            </li>
            <li>
              <strong>Growing ecommerce and performance teams:</strong> RedTrack wins with ecommerce
              integrations, automation, and cost sync at a more accessible price.
            </li>
            <li>
              <strong>High-ticket brands with sales teams and call centers:</strong> Hyros wins by
              tying ad clicks to calls, emails, and CRM revenue in one attribution model.
            </li>
            <li>
              <strong>Hybrid setups with brands and affiliates:</strong> A common pattern is{" "}
              <strong>Hyros for brand attribution</strong> plus{" "}
              <strong>Voluum or RedTrack for affiliate offers</strong> when both models coexist.
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
              <h3 className="text-lg font-semibold">Voluum</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>maximum automation and routing</strong> across many
                offers, landers, and traffic sources with agency-style governance.
              </p>
              <p className="mt-2 text-sm font-semibold text-purple-700">
                Ideal for: Agencies, large affiliates, and networks where tracking is mission
                critical.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">RedTrack</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>mid-market teams</strong> that want solid automation, cost sync, and
                ecommerce support without Voluum&apos;s enterprise cost.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Ecommerce brands, media buyers, and small agencies scaling spend.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hyros</h3>
              <p className="text-sm text-slate-700">
                Best when your core problem is <strong>multi-touch revenue attribution</strong> across
                ads, calls, emails, and CRM—not just click tracking.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: High-ticket brands, info products with sales teams, and call-based
                funnels.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-purple-700 ring-1 ring-purple-100 hover:bg-purple-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
