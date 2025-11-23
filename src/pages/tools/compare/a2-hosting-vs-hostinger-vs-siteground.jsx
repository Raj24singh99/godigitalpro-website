import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/a2-hosting-vs-hostinger-vs-siteground");
const primaryKeyword = "a2 hosting vs hostinger vs siteground";

const brandMeta = {
  a2: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/a2hosting.com",
  },
  hostinger: {
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/hostinger.com",
  },
  siteground: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  { key: "a2", name: "A2 Hosting", blurb: "Turbo-speed shared/VPS with developer control.", url: "https://www.a2hosting.com/" },
  { key: "hostinger", name: "Hostinger", blurb: "Lowest promos with LiteSpeed and a clean panel.", url: "https://www.hostinger.com/" },
  { key: "siteground", name: "SiteGround", blurb: "Managed WordPress feel on Google Cloud with great support.", url: "https://www.siteground.com/" },
];

const comparisonRows = [
  { label: "Best for", a2: "Speed + dev-friendly shared/VPS", hostinger: "Budget-friendly speed", siteground: "Managed WordPress experience" },
  { label: "Performance focus", a2: "Turbo + NVMe + LiteSpeed", hostinger: "LiteSpeed + caching", siteground: "Google Cloud + SG Optimizer" },
  { label: "Developer tools", a2: "SSH, Git, staging, PHP control", hostinger: "SSH, Git on higher tiers", siteground: "SSH, staging, managed features" },
  { label: "Support & migrations", a2: "Responsive, free migrations on many plans", hostinger: "Good support, DIY migrations", siteground: "Strong support, managed migrations" },
  { label: "Pricing feel", a2: "Mid-priced; promo vs renewals", hostinger: "Lowest promos, good value", siteground: "Higher pricing, managed focus" },
];

const scoreboard = [
  { label: "Speed/value", a2: 9.0, hostinger: 9.1, siteground: 8.7 },
  { label: "Developer friendliness", a2: 9.2, hostinger: 8.6, siteground: 8.8 },
  { label: "Managed experience", a2: 8.5, hostinger: 8.2, siteground: 9.2 },
  { label: "Support quality", a2: 9.0, hostinger: 8.5, siteground: 9.1 },
  { label: "Scaling options", a2: 9.0, hostinger: 8.7, siteground: 8.8 },
];

const avg = (tool) => (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { a2: avg("a2"), hostinger: avg("hostinger"), siteground: avg("siteground") };
const overallWinner =
  Math.max(averages.a2, averages.hostinger, averages.siteground) === parseFloat(averages.hostinger)
    ? "Hostinger"
    : Math.max(averages.a2, averages.siteground) === parseFloat(averages.a2)
      ? "A2 Hosting"
      : "SiteGround";

const pricingTable = [
  { plan: "A2 Hosting Turbo (shared)", monthly: "From ~$11/mo promo", annual: "Lower on annual", limits: "NVMe, LiteSpeed, staging", notes: "Fast shared hosting; renewals increase." },
  { plan: "A2 Managed VPS", monthly: "From ~$40/mo", annual: "Lower on annual", limits: "Managed updates, root optional", notes: "Good step up when shared limits hit." },
  { plan: "Hostinger Premium/Business", monthly: "From ~$3–$5/mo promo", annual: "Lower on multi-year", limits: "LiteSpeed, email, backups (Business)", notes: "Cheapest entry; watch renewals." },
  { plan: "SiteGround GrowBig/GoGeek", monthly: "From ~$10–$15/mo promo", annual: "Lower on annual", limits: "Staging, caching, priority support (GoGeek)", notes: "Managed-like experience on Google Cloud." },
];

const featureBullets = {
  performance: [
    "A2: Turbo NVMe + LiteSpeed/SWIFT stacks deliver strong shared/VPS speed.",
    "Hostinger: LiteSpeed + built-in caching; great value per dollar.",
    "SiteGround: Google Cloud infrastructure with SG Optimizer and server-level caching.",
  ],
  management: [
    "A2: cPanel with developer toggles (SSH, Git, PHP versions) and staging.",
    "Hostinger: Custom hPanel with a cleaner UI; SSH/Git on higher tiers.",
    "SiteGround: Managed WordPress feel, hands-on support, and guided migrations.",
  ],
  pricing: [
    "A2: Mid-range promos; renewals jump. Easy upgrade path to managed VPS.",
    "Hostinger: Lowest promos; best budget pick. Renewal increases—plan multi-year.",
    "SiteGround: Higher pricing but includes support, migrations, and managed touches.",
  ],
};

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "Hostinger wins on budget value, A2 wins on speed + dev tools, SiteGround wins on managed WordPress support." },
  { q: "When should I choose A2 Hosting?", a: "Pick A2 for Turbo performance, developer tools, and easy upgrades to VPS/dedicated." },
  { q: "When should I choose Hostinger?", a: "Choose Hostinger for the lowest promo pricing with solid performance and a clean control panel." },
  { q: "When should I choose SiteGround?", a: "Choose SiteGround if you want a managed WordPress feel, strong support, and Google Cloud infrastructure." },
  { q: "Which is easiest for beginners?", a: "Hostinger is the simplest panel; SiteGround has more guidance; A2 is familiar cPanel if you know it." },
  { q: "Which is best for WooCommerce?", a: "SiteGround for managed support and caching; A2 for speed on budget; Hostinger if price matters most." },
  { q: "Do they include email?", a: "Hostinger and SiteGround include email; A2 includes email on shared/VPS. Consider external email for deliverability." },
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

const prosCons = {
  a2: {
    pros: ["Turbo NVMe + LiteSpeed for strong shared speed", "SSH, Git, staging, PHP control", "Easy upgrade path to managed VPS"],
    cons: ["Renewals jump vs promos", "cPanel UI feels dated", "Email deliverability may need tuning"],
  },
  hostinger: {
    pros: ["Lowest promos with good performance", "Clean hPanel UI", "LiteSpeed + caching included"],
    cons: ["Renewals rise after promos", "SSH/Git only on higher tiers", "Support is more self-serve vs SiteGround"],
  },
  siteground: {
    pros: ["Managed WordPress feel and support", "Google Cloud infra + SG Optimizer", "Staging, backups, and security baked in"],
    cons: ["Pricier than A2/Hostinger", "Usage caps can trigger overages", "Best value on annual terms"],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("a2") ? "a2" : name.toLowerCase();
  const meta = brandMeta[key] || { gradient: "from-slate-400 to-slate-600", badge: "bg-slate-100 text-slate-900" };
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
        {meta.logo ? <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" /> : <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function A2HostingVsHostingerVsSitegroundPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`A2 Hosting vs Hostinger vs SiteGround (${YEAR}) – Hosting comparison`}
        description="Compare A2 Hosting, Hostinger, and SiteGround on speed, support, developer tools, pricing, UX, and best use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, a2 hosting review, hostinger review, siteground review, hosting comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Web hosting</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">A2 Hosting vs Hostinger vs SiteGround ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          A2 Hosting focuses on speed and dev tools, Hostinger wins on price-to-performance, and SiteGround offers a managed WordPress feel. Here’s how they stack up across performance, management, pricing, UX, and
          workflows.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <div
              key={item.key}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"} p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Server className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Hostinger</strong> for the lowest cost with solid speed, <strong>A2 Hosting</strong> for Turbo performance and developer controls, and <strong>SiteGround</strong> for a managed WordPress feel
              with strong support on Google Cloud.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {overallWinner === "Hostinger" ? averages.hostinger : overallWinner === "A2 Hosting" ? averages.a2 : averages.siteground}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">Pick by budget vs managed support: Hostinger for price, A2 for control, SiteGround for white-glove help.</p>
          </div>
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">A2 Hosting</th>
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">SiteGround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.a2}</td>
                    <td className="px-4 py-3 text-slate-700">{row.hostinger}</td>
                    <td className="px-4 py-3 text-slate-700">{row.siteground}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">A2 Hosting</th>
                  <th className="px-4 py-3">Hostinger</th>
                  <th className="px-4 py-3">SiteGround</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.a2 === row.hostinger && row.hostinger === row.siteground
                      ? "Tie"
                      : Math.max(row.a2, row.hostinger, row.siteground) === row.a2
                        ? "A2 Hosting"
                        : Math.max(row.hostinger, row.siteground) === row.hostinger
                          ? "Hostinger"
                          : "SiteGround";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "A2 Hosting" ? "font-semibold text-emerald-700" : "text-slate-700"}`}>{row.a2}</td>
                      <td className={`px-4 py-3 ${winner === "Hostinger" ? "font-semibold text-indigo-700" : "text-slate-700"}`}>{row.hostinger}</td>
                      <td className={`px-4 py-3 ${winner === "SiteGround" ? "font-semibold text-amber-700" : "text-slate-700"}`}>{row.siteground}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.a2}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.hostinger}</td>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.siteground}</td>
                  <td className="px-4 py-3 font-bold text-emerald-800 capitalize">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Performance & stack</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Management & developer experience</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.management.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Pricing model & limits</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pricing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.plan}</th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700">Plan multi-year for best Hostinger/SiteGround promos; watch renewal jumps. A2/Hostinger include email; SiteGround’s support is strongest.</p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Hostinger:</strong> Cleanest custom panel; easiest for newcomers.
            </li>
            <li>
              <strong>SiteGround:</strong> Managed WordPress feel with strong support that guides you.
            </li>
            <li>
              <strong>A2 Hosting:</strong> Familiar cPanel with advanced toggles; best if you know cPanel/SSH.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Lowest-cost WordPress/blog:</strong> Hostinger wins with promos and LiteSpeed.
            </li>
            <li>
              <strong>Developer-led sites needing control:</strong> A2 wins with SSH, Git, staging, and PHP control.
            </li>
            <li>
              <strong>Managed WordPress with support:</strong> SiteGround wins for migrations, support, and SG Optimizer.
            </li>
            <li>
              <strong>WooCommerce performance on budget:</strong> A2 or Hostinger; pick SiteGround for support if budget allows.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">A2 Hosting</h3>
              <p className="text-sm text-slate-700">Best for developers wanting cPanel control, Turbo speed, and upgrade paths to VPS.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Mid-range promos; higher renewals</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Hostinger</h3>
              <p className="text-sm text-slate-700">Best for first-time site owners needing speed on the lowest budget.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Lowest promos; plan multi-year</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SiteGround</h3>
              <p className="text-sm text-slate-700">Best for managed WordPress support, guided migrations, and stable Google Cloud performance.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Higher, but managed value</p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link to="/tools" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50">
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
