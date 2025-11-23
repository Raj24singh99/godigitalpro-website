import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
  Workflow,
  Plug,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "wp engine vs cloudways vs siteground";
const canonical = buildCanonical(
  "/tools/compare/wp-engine-vs-cloudways-vs-siteground"
);

const brandMeta = {
  "wp engine": {
    gradient: "from-slate-900 via-sky-900 to-emerald-700",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/wpengine.com",
  },
  cloudways: {
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
  siteground: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/siteground.com",
  },
};

const contenders = [
  {
    key: "wp engine",
    name: "WP Engine",
    blurb:
      "Premium managed WordPress platform with EverCache, Cloudflare Enterprise, and Atlas for headless.",
    url: "https://wpengine.com/",
  },
  {
    key: "cloudways",
    name: "Cloudways",
    blurb:
      "Managed cloud hosting on DO/AWS/GCP with flexible server sizing and custom stack control.",
    url: "https://www.cloudways.com/",
  },
  {
    key: "siteground",
    name: "SiteGround",
    blurb:
      "Affordable managed WordPress on Google Cloud with SG Optimizer and strong support.",
    url: "https://www.siteground.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    wpengine: "Agencies & enterprises needing white-glove managed hosting",
    cloudways: "Power users and agencies wanting custom cloud servers",
    siteground: "SMBs and bloggers needing affordable managed hosting",
  },
  {
    label: "Architecture",
    wpengine: "EverCache + Cloudflare Enterprise on AWS/GCP",
    cloudways: "Managed stack on DO/AWS/GCP/Vultr/Linode with Nginx/Apache + caching",
    siteground: "Google Cloud + SG Optimizer + built-in CDN options",
  },
  {
    label: "Performance tuning",
    wpengine:
      "Platform-level caching, CDN, and optimized PHP stack; opinionated but fast for WordPress",
    cloudways:
      "You tune servers, PHP workers, caching, and scaling; more knobs for power users",
    siteground:
      "SG Optimizer handles caching and performance; WP Rocket/Perfmatters add extra polish",
  },
  {
    label: "Pricing model",
    wpengine: "Plan-based by visits, storage, and installs; premium positioning",
    cloudways:
      "Pay-as-you-go by server size and provider; easy to scale up/down resources",
    siteground:
      "Promotional first term; renewals higher but still affordable for small sites",
  },
  {
    label: "Support model",
    wpengine: "24/7 WordPress experts, launch engineers, and enterprise support options",
    cloudways: "24/7 chat; advanced add-on support tiers for higher-touch needs",
    siteground: "24/7 chat/phone tickets with strong WordPress knowledge base",
  },
  {
    label: "Migrations",
    wpengine: "Automated migration plugin + concierge for larger sites",
    cloudways: "Free migration on some plans + plugin/manual options",
    siteground: "Migration plugin and assisted migration on selected tiers",
  },
  {
    label: "Compliance & security",
    wpengine:
      "Enterprise-grade security, managed updates, backups, and compliance tooling",
    cloudways:
      "Firewall, backups, and patching at platform level; deeper hardening is your call",
    siteground:
      "Managed security, backups, and isolation suitable for SMB and prosumer sites",
  },
];

const scoreboard = [
  {
    label: "Performance & reliability",
    scores: { wpengine: 9.4, cloudways: 9.2, siteground: 8.5 },
  },
  {
    label: "Ease of use",
    scores: { wpengine: 9.2, cloudways: 7.8, siteground: 8.8 },
  },
  {
    label: "Customization & control",
    scores: { wpengine: 8.0, cloudways: 9.5, siteground: 7.5 },
  },
  {
    label: "Value for money",
    scores: { wpengine: 7.8, cloudways: 9.0, siteground: 8.7 },
  },
  {
    label: "Support quality",
    scores: { wpengine: 9.5, cloudways: 8.6, siteground: 8.2 },
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
  wpengine: avg("wpengine"),
  cloudways: avg("cloudways"),
  siteground: avg("siteground"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerMap = {
  wpengine: "WP Engine",
  cloudways: "Cloudways",
  siteground: "SiteGround",
};

const pricingTable = [
  {
    plan: "WP Engine Managed WordPress (entry tiers)",
    monthly: "From around ~$30/mo (with annual discounts)",
    annual: "Discounted when billed annually",
    limits:
      "Visits, storage, bandwidth, and install counts per plan; overages for high traffic.",
    notes: "Premium pricing but includes performance stack, backups, and strong support.",
  },
  {
    plan: "Cloudways Managed Cloud (DO starter)",
    monthly: "From around ~$12–15/mo (DigitalOcean small server)",
    annual: "Pay-as-you-go, billed monthly",
    limits:
      "Server RAM/CPU, storage, and bandwidth; you scale vertically or horizontally.",
    notes:
      "Excellent value if you are comfortable picking server sizes and tuning resources.",
  },
  {
    plan: "SiteGround Managed WordPress (GrowBig/GoGeek)",
    monthly: "Promo from ~$5–10/mo; renews higher (~$15+/mo)",
    annual: "Lower first-year pricing; higher renewals afterwards",
    limits:
      "Visits, storage, and feature caps per plan; suitable for small to mid-sized sites.",
    notes:
      "Strong entry-level value; watch renewal pricing and resource ceilings as you grow.",
  },
];

const featureBullets = {
  performance: [
    "WP Engine: Opinionated stack with EverCache, Cloudflare Enterprise, and tuned PHP for consistent performance under load.",
    "Cloudways: Performance depends on the cloud provider and server size you choose; fine-grained control via caching and PHP workers.",
    "SiteGround: SG Optimizer plugin plus Google Cloud infra gives solid performance for most SMB and content sites.",
  ],
  management: [
    "WP Engine: Polished portal with dev/stage/prod environments, backups, and staging workflows out of the box.",
    "Cloudways: Server and app-level panels with control over services, cron jobs, and scaling; more levers for technical teams.",
    "SiteGround: Simple cPanel-style tools with WordPress-specific helpers and integrated caching/CDN toggles.",
  ],
  developer: [
    "WP Engine: Git deployment, SSH, Composer support, and Atlas for headless; ideal for agency workflows.",
    "Cloudways: SSH, WP-CLI, staging, and freedom to run multiple apps per server for savvy teams.",
    "SiteGround: WP-CLI, staging (on higher plans), and decent tooling for freelancers and small agencies.",
  ],
};

const prosCons = {
  "wp engine": {
    pros: [
      "Premium managed WordPress stack tuned for performance and security",
      "Dev/stage/prod workflows with backups and easy rollbacks",
      "Enterprise-grade support, security, and compliance features",
    ],
    cons: [
      "Higher pricing than typical shared or entry-level managed hosts",
      "Less server-level control versus Cloudways",
      "Visit-based limits can push you into higher tiers as traffic grows",
    ],
  },
  cloudways: {
    pros: [
      "High degree of control over server size, provider, and stack",
      "Pay-as-you-go pricing that scales with actual resources",
      "Great option for agencies managing many sites on a few larger servers",
    ],
    cons: [
      "More complex for non-technical users; requires infra understanding",
      "You are responsible for choosing and tuning servers correctly",
      "Compliance and enterprise features are less turnkey than WP Engine",
    ],
  },
  siteground: {
    pros: [
      "Very approachable for SMBs and solo creators",
      "Strong support and SG Optimizer for WordPress performance",
      "Good bridge between budget shared hosting and premium managed hosts",
    ],
    cons: [
      "Promotional pricing hides higher renewals",
      "Resource ceilings can be hit quickly on busy sites",
      "Less advanced than WP Engine/Cloudways for large or mission-critical projects",
    ],
  },
};

const faqs = [
  {
    q: `Which host should I pick in ${YEAR}?`,
    a: "Choose WP Engine if you want premium, opinionated managed hosting and enterprise-grade support. Pick Cloudways if you want flexible cloud servers, direct control, and strong value. Choose SiteGround if you need affordable, reliable managed WordPress for small to mid-sized sites.",
  },
  {
    q: "Is WP Engine faster than Cloudways?",
    a: "Both can be extremely fast. WP Engine bakes performance into the platform with EverCache and Cloudflare Enterprise. Cloudways speed depends on your chosen provider, server size, and how well you tune caching and PHP workers.",
  },
  {
    q: "Can I migrate between them easily?",
    a: "Yes. All three offer migration plugins and assisted migrations. Many teams start on SiteGround or Cloudways and later move to WP Engine for compliance and white-glove support, or move from WP Engine to Cloudways to optimise cost at scale.",
  },
  {
    q: "Do I still need plugins like WP Rocket or Perfmatters?",
    a: "On Cloudways and SiteGround, performance plugins like WP Rocket/Perfmatters often deliver significant gains. On WP Engine, platform caching is strong already, but front-end optimisation plugins can still help with CSS/JS, fonts, and image optimisations.",
  },
  {
    q: "Which is best for agencies?",
    a: "Agencies that want predictable, premium support and client-facing reassurance often choose WP Engine. Agencies with strong DevOps skills and cost optimisation focus frequently use Cloudways to run many sites on tuned servers. SiteGround works well for smaller agency bundles and entry-level retainers.",
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

const LogoBadge = ({ name, metaKey }) => {
  const meta =
    brandMeta[metaKey] || {
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

export default function WPEngineVsCloudwaysVsSitegroundPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`WP Engine vs Cloudways vs SiteGround (${YEAR}) – Managed WordPress hosting compared`}
        description="Compare WP Engine, Cloudways, and SiteGround for performance, pricing, control, and the right managed WordPress hosting stack for your site."
        canonical={canonical}
        keywords={`${primaryKeyword}, wordpress hosting comparison, managed wordpress hosting`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Managed WordPress hosting
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          WP Engine vs Cloudways vs SiteGround ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          WP Engine delivers premium, opinionated managed hosting. Cloudways gives you flexible,
          pay-as-you-go cloud servers. SiteGround offers approachable managed WordPress on a budget.
          Use this comparison to align your hosting choice with your performance targets, workflows,
          and cost constraints.
        </p>

        {/* Top cards: contenders */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
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
                <LogoBadge name={card.name} metaKey={card.key} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + stack guidance */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>WP Engine</strong> when uptime, compliance, and premium support matter
              more than raw cost. Pick <strong>Cloudways</strong> if you want to tune servers,
              optimise spend, and are comfortable with more levers. Go with{" "}
              <strong>SiteGround</strong> when you need reliable managed WordPress at a friendly
              price for blogs, SMB sites, and early-stage products.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Scoreboard winner:{" "}
              {winnerMap[overallWinner]}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> Recommended stack
            </div>
            <p className="text-sm text-slate-700">
              For serious ecommerce or content brands, WP Engine + a front-end optimiser (e.g. WP
              Rocket/Perfmatters) gives a premium experience. If you are cost-sensitive but
              technical, Cloudways delivers similar performance with more control.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When to switch
            </div>
            <p className="text-sm text-slate-700">
              Outgrowing SiteGround or basic shared hosting? Move to WP Engine for compliance-level
              support, or to Cloudways if you want more control and a lower bill at higher scale.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">WP Engine</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">SiteGround</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.wpengine}</td>
                    <td className="px-4 py-3 text-slate-700">{row.cloudways}</td>
                    <td className="px-4 py-3 text-slate-700">{row.siteground}</td>
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
                  <th className="px-4 py-3">WP Engine</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">SiteGround</th>
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
                        {row.scores.wpengine}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.cloudways}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.siteground}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">
                        {winnerMap[winnerKey]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.wpengine}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.cloudways}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.siteground}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-800">
                    {winnerMap[overallWinner]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Performance & caching
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.performance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Management & workflows
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.management.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-slate-700" /> Developer experience
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.developer.map((item) => (
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
                  <th className="px-4 py-3">Annual / billing</th>
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
            Pricing changes frequently and varies by region, traffic, and promos. Always confirm
            the latest plan details and limits on each vendor&apos;s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>WP Engine:</strong> Feels like a premium, opinionated control panel built
              specifically for WordPress. Most marketing and content teams can work day-to-day
              without touching server config.
            </li>
            <li>
              <strong>Cloudways:</strong> Adds an extra layer of power. Ideal if you understand
              servers and want to optimise resources; may feel overwhelming for pure marketers.
            </li>
            <li>
              <strong>SiteGround:</strong> Familiar to anyone used to shared/managed hosting with
              WordPress tooling. Easy for freelancers and SMB owners to grasp.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Enterprise sites and serious ecommerce:</strong> WP Engine wins with
              compliance, support SLAs, and battle-tested performance at scale.
            </li>
            <li>
              <strong>Agencies managing many sites:</strong> Cloudways wins when you want to pack
              multiple client sites onto carefully tuned servers while controlling margin.
            </li>
            <li>
              <strong>Blogs, portfolios, and SMB sites:</strong> SiteGround wins as a friendly,
              well-supported managed host that is easy to recommend and migrate from if you outgrow
              it.
            </li>
            <li>
              <strong>Headless WordPress:</strong> WP Engine (Atlas) and Cloudways are strongest;
              pick based on whether you prefer a fully managed platform or more infra control.
            </li>
          </ul>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">WP Engine</h3>
              <p className="text-sm text-slate-700">
                Best when you want a premium managed WordPress platform with strong SLAs, solid
                tooling, and minimal infrastructure headaches.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Larger brands, high-revenue sites, and agencies servicing demanding
                clients.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Cloudways</h3>
              <p className="text-sm text-slate-700">
                Best when you want control over servers and resource allocation while still having a
                managed layer on top of the big clouds.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Technical founders, performance-focused agencies, and teams optimising
                cost vs. power.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">SiteGround</h3>
              <p className="text-sm text-slate-700">
                Best when you need a trustworthy managed host that is easy to use, reasonably
                priced, and good enough for most early-stage and SMB projects.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Bloggers, SMB owners, and freelancers looking for a safe default choice.
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
