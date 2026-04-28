import React from "react";
import { Sparkles, Gauge, Layers, Zap, Crown, ArrowLeft, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "vultr vs digitalocean vs siteground";
const canonical = buildCanonical("/tools/compare/vultr-vs-digitalocean-vs-siteground");

const brandMeta = {
  vultr: {
    gradient: "from-blue-500 via-indigo-500 to-slate-700",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/vultr.com",
  },
  digitalocean: {
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    badge: "bg-cyan-100 text-cyan-900",
    logo: "https://logo.clearbit.com/digitalocean.com",
  },
  siteground: {
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  {
    key: "vultr",
    name: "Vultr",
    blurb: "Global SSD/NVMe cloud with bare metal, high-frequency compute, and managed K8s.",
    url: "https://www.vultr.com",
  },
  {
    key: "digitalocean",
    name: "DigitalOcean",
    blurb: "Developer-loved cloud with managed apps, databases, and simple networking.",
    url: "https://www.digitalocean.com",
  },
  {
    key: "siteground",
    name: "SiteGround",
    blurb: "Managed WordPress and WooCommerce hosting on top of Google Cloud.",
    url: "https://www.siteground.com",
  },
];

const comparisonRows = [
  {
    label: "Focus",
    vultr: "Raw cloud infrastructure (compute, storage, networking)",
    digitalocean: "Developer cloud + managed apps and databases",
    siteground: "Managed WordPress and WooCommerce hosting",
  },
  {
    label: "Ease of use",
    vultr: "Manual server setup or IaC (Terraform/Ansible)",
    digitalocean: "Friendly dashboard, App Platform, one-click images",
    siteground: "Panel-style UX with staging, backups, and tools built in",
  },
  {
    label: "Performance",
    vultr: "NVMe high-frequency compute and bare metal options",
    digitalocean: "Droplets with predictable shared performance",
    siteground: "Google Cloud-backed stack tuned for WordPress",
  },
  {
    label: "Managed services",
    vultr: "Managed K8s and DB in selected regions; mostly IaaS",
    digitalocean: "App Platform, managed DBs, Spaces, Functions",
    siteground: "Fully managed WordPress, email, security, and backups",
  },
  {
    label: "Best for",
    vultr: "Developers needing low-level control and many regions",
    digitalocean: "SaaS, APIs, and startup apps that want simplicity",
    siteground: "Agencies and SMBs running WordPress or WooCommerce",
  },
];

const scoreboard = [
  { label: "Developer control", scores: { vultr: 9.2, digitalocean: 8.7, siteground: 6.0 } },
  { label: "Managed experience", scores: { vultr: 7.0, digitalocean: 8.5, siteground: 9.4 } },
  { label: "Global reach", scores: { vultr: 9.3, digitalocean: 8.5, siteground: 7.5 } },
  { label: "Value", scores: { vultr: 8.8, digitalocean: 9.0, siteground: 8.3 } },
  { label: "WordPress friendliness", scores: { vultr: 6.5, digitalocean: 7.8, siteground: 9.5 } },
];

const avg = (key) =>
  (scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  vultr: avg("vultr"),
  digitalocean: avg("digitalocean"),
  siteground: avg("siteground"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerLabelMap = {
  vultr: "Vultr",
  digitalocean: "DigitalOcean",
  siteground: "SiteGround",
};

const overallWinnerLabel = winnerLabelMap[overallWinnerKey] || overallWinnerKey;

const pricingTable = [
  {
    plan: "Vultr High Frequency 1GB",
    monthly: "$6",
    annual: "Pay as you go",
    notes: "1 vCPU / 1 GB NVMe; ideal for small apps or entry projects.",
  },
  {
    plan: "DigitalOcean Basic Droplet",
    monthly: "$6",
    annual: "Hourly billing",
    notes: "1 vCPU / 1 GB; good default for APIs, prototypes, and small apps.",
  },
  {
    plan: "SiteGround GrowBig",
    monthly: "$24.99",
    annual: "$14.99 promo",
    notes: "Managed WordPress with staging, caching, and daily backups.",
  },
];

const faqs = [
  {
    q: `Which should I choose in ${YEAR}?`,
    a: "Pick Vultr for raw compute and region choice, DigitalOcean for a balanced developer experience with managed services, and SiteGround when you want hands-off managed WordPress.",
  },
  {
    q: "Do Vultr or DigitalOcean include management?",
    a: "Both are primarily self-managed IaaS. You are responsible for patches, security hardening, and backups unless you add extra services. Choose SiteGround or a managed panel (e.g. Cloudways) if you prefer managed hosting.",
  },
  {
    q: "Can SiteGround replace Vultr or DigitalOcean?",
    a: "Only if your workloads are mainly WordPress or WooCommerce. For custom apps, APIs, or microservices, Vultr or DigitalOcean give you more flexibility and control.",
  },
  {
    q: "What about scaling globally?",
    a: "Vultr generally has the broadest region footprint, followed by DigitalOcean. SiteGround focuses more on a handful of well-optimised data centres for website workloads.",
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
  infrastructure: [
    "Vultr: Strong focus on raw compute, bare metal, and NVMe-based instances with many regions.",
    "DigitalOcean: Simple Droplet model, load balancers, VPC, and straightforward scaling options.",
    "SiteGround: Opinionated stack tuned for PHP/WordPress running on top of Google Cloud.",
  ],
  managed: [
    "Vultr: Some managed K8s/DB options, but you still own most of the management.",
    "DigitalOcean: App Platform, managed databases, and Spaces reduce DevOps overhead for many apps.",
    "SiteGround: Handles updates, backups, caching, and security for WordPress sites automatically.",
  ],
  ops: [
    "Vultr: Best if you are comfortable with Linux, firewalls, and server hardening.",
    "DigitalOcean: Great docs and community tutorials help small teams manage infrastructure.",
    "SiteGround: Designed for non-ops teams—agencies and SMBs can live inside the panel.",
  ],
};

const prosCons = {
  vultr: {
    pros: ["Many regions and PoPs", "Bare metal and high-frequency NVMe compute", "Predictable, transparent pricing"],
    cons: ["Limited higher-level PaaS offerings", "Support tiers and SLA can cost extra", "More DevOps work versus fully managed hosts"],
  },
  digitalocean: {
    pros: ["Managed DBs and App Platform reduce ops work", "Excellent docs and community resources", "Simple, predictable pricing for startups"],
    cons: ["Fewer regions than some hyperscalers/Vultr", "No bare metal offerings", "Big-scale or enterprise features are limited versus hyperscalers"],
  },
  siteground: {
    pros: ["Managed WordPress stack with strong support", "Built-in caching, staging, and backups", "Great fit for agencies hosting many client sites"],
    cons: ["Higher price per site versus raw cloud", "Less low-level control for custom stacks", "Focused mainly on PHP/WordPress workloads"],
  },
};

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase();
  const key =
    lowered.includes("vultr") || lowered === "vultr"
      ? "vultr"
      : lowered.includes("digital")
      ? "digitalocean"
      : lowered.includes("site")
      ? "siteground"
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
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function VultrVsDigitalOceanVsSiteGroundPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Vultr vs DigitalOcean vs SiteGround – Comparison (${YEAR})`}
        description="Compare Vultr, DigitalOcean, and SiteGround for control, managed experience, global reach, pricing, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, cloud hosting comparison, vultr vs digitalocean, digitalocean vs siteground`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Cloud hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Vultr vs DigitalOcean vs SiteGround ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Need infrastructure for your SaaS, APIs, or WordPress clients? This breakdown shows where{" "}
          <strong>Vultr</strong>, <strong>DigitalOcean</strong>, and <strong>SiteGround</strong> each
          win so you can pick the right hosting strategy.
        </p>

        {/* Quick verdict row */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-blue-50/90 p-6 ring-1 ring-blue-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-800">
              <Sparkles className="h-5 w-5" /> Quick Verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Vultr</strong> for raw performance, bare metal, and lots of regions.
              Choose <strong>DigitalOcean</strong> for the best blend of control and managed
              services. Choose <strong>SiteGround</strong> when you want premium, hands-off managed
              WordPress hosting for clients or brands.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-blue-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Cloud className="h-5 w-5 text-blue-700" /> Managed pick
            </div>
            <p className="text-sm text-slate-700">
              <strong>SiteGround</strong> cuts out server management with built-in caching, staging,
              security, and backups for WordPress and WooCommerce sites.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">{card.blurb}</p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-blue-700" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Vultr</th>
                  <th className="px-4 py-3">DigitalOcean</th>
                  <th className="px-4 py-3">SiteGround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.vultr}</td>
                    <td className="px-4 py-3 text-slate-700">{row.digitalocean}</td>
                    <td className="px-4 py-3 text-slate-700">{row.siteground}</td>
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
                  <th className="px-4 py-3">Vultr</th>
                  <th className="px-4 py-3">DigitalOcean</th>
                  <th className="px-4 py-3">SiteGround</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { vultr, digitalocean, siteground } = row.scores;
                  const winnerValue = Math.max(vultr, digitalocean, siteground);
                  const winner =
                    winnerValue === vultr
                      ? "Vultr"
                      : winnerValue === digitalocean
                      ? "DigitalOcean"
                      : "SiteGround";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Vultr" ? "font-semibold text-blue-800" : "text-slate-700"
                        }`}
                      >
                        {vultr}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "DigitalOcean"
                            ? "font-semibold text-cyan-800"
                            : "text-slate-700"
                        }`}
                      >
                        {digitalocean}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SiteGround"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {siteground}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-blue-800">{averages.vultr}</td>
                  <td className="px-4 py-3 font-semibold text-cyan-800">
                    {averages.digitalocean}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.siteground}
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
            <Zap className="h-6 w-6 text-blue-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-blue-700" /> Infrastructure & performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.infrastructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Cloud className="h-5 w-5 text-cyan-700" /> Managed services
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.managed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Gauge className="h-5 w-5 text-emerald-700" /> Operations & team fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ops.map((item) => (
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
                  <th className="px-4 py-3">Annual / billing</th>
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
            Pricing changes regularly and may vary by region, usage, and promo. Always double-check
            current plans, bandwidth limits, and overage policies on each provider&apos;s pricing
            page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Vultr:</strong> Feels like a <strong>raw cloud console</strong>. Great if you
              are comfortable with Linux, networking, and IaC. Not ideal if you want a control panel
              for non-technical users.
            </li>
            <li>
              <strong>DigitalOcean:</strong> UX is tuned for{" "}
              <strong>small engineering teams and solo developers</strong>. Great documentation and
              community resources smooth out the learning curve.
            </li>
            <li>
              <strong>SiteGround:</strong> Feels like a{" "}
              <strong>managed WordPress panel</strong>. Ideal for agencies, marketers, and SMB
              owners who would rather not touch the server layer at all.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS / APIs / microservices:</strong> DigitalOcean often wins thanks to
              Droplets, managed DBs, and App Platform with sensible defaults.
            </li>
            <li>
              <strong>Latency-sensitive apps or many regions:</strong> Vultr wins with its broad
              region footprint and high-frequency compute / bare metal options.
            </li>
            <li>
              <strong>Agencies hosting WordPress clients:</strong> SiteGround wins with staging,
              backups, and strong WordPress support baked in.
            </li>
            <li>
              <strong>Hybrid setups:</strong> A common pattern is running{" "}
              <strong>apps and APIs on Vultr or DigitalOcean</strong> while keeping{" "}
              <strong>marketing sites and blogs on SiteGround</strong> for convenience.
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
              <h3 className="text-lg font-semibold">Vultr</h3>
              <p className="text-sm text-slate-700">
                Best when you need <strong>raw control, many regions, and high-frequency compute</strong>{" "}
                without hyperscaler complexity.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Infrastructure-savvy teams, latency-sensitive apps, and custom stacks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">DigitalOcean</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>startups and small teams</strong> that want a friendly developer
                cloud with managed DBs and app hosting.
              </p>
              <p className="mt-2 text-sm font-semibold text-cyan-700">
                Ideal for: SaaS, APIs, prototypes, and early-stage products.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SiteGround</h3>
              <p className="text-sm text-slate-700">
                Best for <strong>WordPress-first businesses</strong> that value support, staging, and
                managed performance over low-level control.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, bloggers, and SMBs running WordPress or WooCommerce.
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-blue-700 ring-1 ring-blue-100 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
