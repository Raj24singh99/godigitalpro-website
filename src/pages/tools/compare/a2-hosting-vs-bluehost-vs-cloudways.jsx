import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Shield, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/a2-hosting-vs-bluehost-vs-cloudways");
const primaryKeyword = "a2 hosting vs bluehost vs cloudways";

const brandMeta = {
  a2: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/a2hosting.com",
  },
  bluehost: {
    gradient: "from-blue-500 via-sky-500 to-slate-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/bluehost.com",
  },
  cloudways: {
    gradient: "from-slate-700 via-slate-600 to-indigo-500",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
};

const contenders = [
  { key: "a2", name: "A2 Hosting", blurb: "Turbo-speed shared/VPS with developer controls.", url: "https://www.a2hosting.com/" },
  { key: "bluehost", name: "Bluehost", blurb: "Beginner-friendly WordPress with aggressive promos.", url: "https://www.bluehost.com/" },
  { key: "cloudways", name: "Cloudways", blurb: "Managed cloud panel on AWS/DO/Vultr with pay-as-you-go.", url: "https://www.cloudways.com/" },
];

const comparisonRows = [
  { label: "Best for", a2: "Speed + dev tools on shared/VPS", bluehost: "Beginner-friendly WordPress", cloudways: "Managed cloud flexibility" },
  { label: "Performance focus", a2: "Turbo + NVMe + caching", bluehost: "Standard shared/VPS performance", cloudways: "Choice of cloud (AWS, DO, Vultr) + caching" },
  { label: "Management style", a2: "cPanel + managed WP features", bluehost: "cPanel + guided WP setup", cloudways: "Managed panel over cloud servers" },
  { label: "Developer tools", a2: "SSH, Git, staging, PHP control", bluehost: "SSH, staging on higher tiers", cloudways: "SSH/SFTP, staging, backups on managed cloud" },
  { label: "Pricing feel", a2: "Mid-priced; promo vs renewals", bluehost: "Budget-friendly promos", cloudways: "Pay-as-you-go cloud pricing" },
];

const scoreboard = [
  { label: "Speed/value", a2: 9.0, bluehost: 8.4, cloudways: 9.1 },
  { label: "Ease for beginners", a2: 8.6, bluehost: 9.2, cloudways: 8.3 },
  { label: "Developer friendliness", a2: 9.2, bluehost: 8.3, cloudways: 9.0 },
  { label: "Scalability", a2: 9.0, bluehost: 8.4, cloudways: 9.3 },
  { label: "Support quality", a2: 9.0, bluehost: 8.5, cloudways: 8.8 },
];

const avg = (tool) => (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { a2: avg("a2"), bluehost: avg("bluehost"), cloudways: avg("cloudways") };
const overallWinner =
  Math.max(averages.a2, averages.bluehost, averages.cloudways) === parseFloat(averages.cloudways)
    ? "Cloudways"
    : Math.max(averages.a2, averages.bluehost) === parseFloat(averages.a2)
      ? "A2 Hosting"
      : "Bluehost";

const pricingTable = [
  { plan: "A2 Hosting Turbo (shared)", monthly: "From ~$11/mo promo", annual: "Lower on annual", limits: "NVMe, LiteSpeed, staging", notes: "Great speed for shared hosting; watch renewals." },
  { plan: "A2 Managed VPS", monthly: "From ~$40/mo", annual: "Lower on annual", limits: "Managed updates, root access optional", notes: "Good when you outgrow shared but want control." },
  { plan: "Bluehost Choice Plus", monthly: "From ~$6–$8/mo promo", annual: "Lower on annual", limits: "Unlimited sites, backups on higher tiers", notes: "Easiest WordPress start; renewals jump." },
  { plan: "Cloudways (DO/Vultr/AWS)", monthly: "From ~$11–$36/mo", annual: "Pay-as-you-go", limits: "RAM/CPU and bandwidth vary by cloud", notes: "Managed panel with staging/backups on your picked cloud." },
];

const featureBullets = {
  performance: [
    "A2: Turbo servers with NVMe, LiteSpeed caching, and optimized stacks across shared/VPS.",
    "Bluehost: Solid shared performance; best for basic WordPress sites with caching plugins.",
    "Cloudways: Performance depends on chosen cloud provider; built-in cache/stack tuned for PHP apps.",
  ],
  management: [
    "A2: cPanel plus managed WordPress tooling; SSH/Git and PHP version control baked in.",
    "Bluehost: Guided WordPress onboarding, marketplace add-ons, and bundled email.",
    "Cloudways: Custom panel abstracts DO/Vultr/AWS; staging, backups, and server tweaks without raw DevOps.",
  ],
  pricing: [
    "A2: Promo-friendly but renewals increase; clear upgrade path from shared to managed VPS.",
    "Bluehost: Lowest promos; renewal jumps—budget-conscious for first term.",
    "Cloudways: Pay-as-you-go per provider; scale up/down servers with predictable cloud rates.",
  ],
};

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "Cloudways wins for managed cloud scalability. A2 wins for shared/VPS speed + dev tools. Bluehost wins for beginner-friendly WordPress and pricing promos." },
  { q: "When should I choose A2 Hosting?", a: "Choose A2 if you want fast shared hosting with developer control and clear upgrade paths to VPS/dedicated." },
  { q: "When should I choose Bluehost?", a: "Choose Bluehost if you want the simplest WordPress onboarding with low promo pricing." },
  { q: "When should I choose Cloudways?", a: "Choose Cloudways if you prefer managed cloud servers (AWS/DO/Vultr) with staging, backups, and pay-as-you-go pricing." },
  { q: "Which has the easiest UI?", a: "Bluehost is simplest for beginners. A2 is familiar cPanel. Cloudways has a custom panel that’s easy once you learn server sizing." },
  { q: "Who wins for agencies?", a: "Cloudways for multi-site scaling and staging. A2 for budget-stretching shared/VPS per client. Bluehost only if you want the lowest startup cost." },
  { q: "Do they include email?", a: "Bluehost includes email. A2 offers it on shared/VPS. Cloudways does not—use third-party email like Google Workspace." },
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
    pros: ["Turbo servers with NVMe and LiteSpeed", "SSH, Git, and staging even on smaller plans", "Clear upgrade path to managed VPS"],
    cons: ["Renewals jump after promos", "cPanel UI can feel dated", "Email deliverability may need tweaking"],
  },
  bluehost: {
    pros: ["Easiest WordPress onboarding for beginners", "Low promo pricing with free domain", "Marketplace for simple add-ons"],
    cons: ["Renewal pricing is higher", "Performance is basic vs tuned hosts", "Staging and backups locked to higher tiers"],
  },
  cloudways: {
    pros: ["Managed panel over top clouds", "Staging/backups and team controls included", "Scale resources without migrations"],
    cons: ["No bundled email", "Pay-as-you-go can surprise without monitoring", "Less hand-holding than shared-only hosts"],
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

export default function A2HostingVsBluehostVsCloudwaysPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`A2 Hosting vs Bluehost vs Cloudways (${YEAR}) – Hosting comparison`}
        description="Compare A2 Hosting, Bluehost, and Cloudways on speed, management, developer tools, pricing, UX, and best fit."
        canonical={canonical}
        keywords={`${primaryKeyword}, a2 hosting review, bluehost review, cloudways review, hosting comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Web hosting</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">A2 Hosting vs Bluehost vs Cloudways ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          A2 focuses on speed and dev tools, Bluehost on beginner-friendly WordPress, and Cloudways on managed cloud flexibility. We compared performance, management, pricing, UX, and real workflows to help you pick the
          right stack.
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
              Choose <strong>A2 Hosting</strong> for the fastest shared/VPS with developer control, <strong>Bluehost</strong> for the simplest WordPress launch with low promos, and <strong>Cloudways</strong> for managed
              cloud scaling on DigitalOcean/Vultr/AWS without deep DevOps.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {overallWinner === "Cloudways" ? averages.cloudways : overallWinner === "A2 Hosting" ? averages.a2 : averages.bluehost}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">Pick by control vs simplicity: A2/Cloudways for control, Bluehost for first-time launches.</p>
          </div>
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">A2 Hosting</th>
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">Cloudways</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.a2}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bluehost}</td>
                    <td className="px-4 py-3 text-slate-700">{row.cloudways}</td>
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
                  <th className="px-4 py-3">Bluehost</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.a2 === row.bluehost && row.bluehost === row.cloudways
                      ? "Tie"
                      : Math.max(row.a2, row.bluehost, row.cloudways) === row.a2
                        ? "A2 Hosting"
                        : Math.max(row.bluehost, row.cloudways) === row.cloudways
                          ? "Cloudways"
                          : "Bluehost";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "A2 Hosting" ? "font-semibold text-emerald-700" : "text-slate-700"}`}>{row.a2}</td>
                      <td className={`px-4 py-3 ${winner === "Bluehost" ? "font-semibold text-sky-700" : "text-slate-700"}`}>{row.bluehost}</td>
                      <td className={`px-4 py-3 ${winner === "Cloudways" ? "font-semibold text-indigo-700" : "text-slate-700"}`}>{row.cloudways}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.a2}</td>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.bluehost}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.cloudways}</td>
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
          <p className="text-slate-700">Watch renewal rates on A2/Bluehost. Cloudways billing follows your selected cloud provider and retained backups.</p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Bluehost:</strong> Easiest onboarding, guided WordPress installs, bundled email—best for first sites.
            </li>
            <li>
              <strong>A2 Hosting:</strong> Familiar cPanel with developer toggles (PHP versions, SSH, Git). Quick start if you know cPanel.
            </li>
            <li>
              <strong>Cloudways:</strong> Clean custom panel; small learning curve on cloud sizing/backups, then smooth for staging and team access.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Fast shared hosting for blogs/SMB:</strong> A2 wins with Turbo stacks and easy staging.
            </li>
            <li>
              <strong>First WordPress site on a tight budget:</strong> Bluehost wins with guided setup and promos.
            </li>
            <li>
              <strong>Agencies managing multiple sites:</strong> Cloudways wins with staging, team roles, and scalable droplets/instances.
            </li>
            <li>
              <strong>Performance-critical WooCommerce:</strong> Cloudways or A2 VPS—pick Cloudways for ease, A2 for lower cost with tuning.
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
              <p className="text-sm text-slate-700">Best when you want cPanel control, Turbo speed, and an affordable upgrade path to VPS.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Promo-friendly; watch renewals</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Bluehost</h3>
              <p className="text-sm text-slate-700">Best for absolute beginners launching WordPress with the least friction and lowest intro pricing.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Lowest promos; higher renewals</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Cloudways</h3>
              <p className="text-sm text-slate-700">Best for managed cloud scaling, staging, and team roles without deep DevOps work.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Pay-as-you-go by chosen cloud</p>
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
