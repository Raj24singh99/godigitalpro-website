import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  Globe2,
  Shield,
  Server,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "cloudways vs digitalocean vs vultr";
const canonical = buildCanonical("/tools/compare/cloudways-vs-digitalocean-vs-vultr");

const brandMeta = {
  cloudways: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/cloudways.com",
  },
  digitalocean: {
    gradient: "from-indigo-500 via-blue-500 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/digitalocean.com",
  },
  vultr: {
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/vultr.com",
  },
};

const contenders = [
  {
    key: "cloudways",
    name: "Cloudways",
    blurb: "Managed stack with staging/backups; fastest to launch WordPress/PHP apps.",
    url: "https://www.cloudways.com/",
  },
  {
    key: "digitalocean",
    name: "DigitalOcean",
    blurb: "Straightforward cloud for builders with droplets, managed DBs, and app platform.",
    url: "https://www.digitalocean.com/",
  },
  {
    key: "vultr",
    name: "Vultr",
    blurb: "Great raw price/performance, flexible plans, and extensive global regions.",
    url: "https://www.vultr.com/",
  },
];

const comparisonRows = [
  {
    label: "Ease of setup",
    cloudways: "Managed panel, tuned stack, staging/backups out of the box—live in minutes with almost no DevOps.",
    digitalocean: "Simple droplets and Marketplace images; some server setup and security hardening required.",
    vultr: "Straightforward instance creation but more DIY for stack configuration, security, and monitoring.",
  },
  {
    label: "Performance / price",
    cloudways: "Good performance with caching/CDN options; management fee sits on top of infra costs.",
    digitalocean: "Solid performance for the price; managed DBs and apps add convenience without big overhead.",
    vultr: "Often the best raw price/performance mix with high-frequency plans and flexible sizing.",
  },
  {
    label: "Managed features",
    cloudways: "Backups, staging, monitoring, firewall, and server tweaks built-in; choice of underlying cloud.",
    digitalocean: "Managed DBs, backups, load balancers, and App Platform available as add-ons; otherwise DIY.",
    vultr: "Backups and snapshots available; most management is DIY or via third-party tools and panels.",
  },
  {
    label: "Regions & flexibility",
    cloudways: "Can deploy on DO/Vultr/AWS/GCP through one panel; easier to switch underlying providers when needed.",
    digitalocean: "Covers key US/EU/Asia regions with simple vertical/horizontal scaling and reserved IPs.",
    vultr: "Broad region coverage including niche locations; flexible plan types and IPv6 support across data centers.",
  },
  {
    label: "Best for WordPress/LAMP speed",
    cloudways: "Optimized PHP/WP stack with staging/backups, object cache, and CDN integration lowers launch time drastically.",
    digitalocean: "Quick via 1-click WP and LAMP images; you handle caching layers, CDN, and backup strategies.",
    vultr: "Fast hardware; DIY tuning for caching/security/CDN to match or exceed managed performance.",
  },
  {
    label: "DevOps effort required",
    cloudways: "Lowest DevOps overhead—most ops handled in the panel; good for lean teams and agencies.",
    digitalocean: "Medium DevOps effort; scripts/automation can reduce toil but you still own the stack.",
    vultr: "Highest DevOps effort of the three; great for people comfortable with Linux and infrastructure.",
  },
];

const scoreboard = [
  { label: "Ease of setup", scores: { cloudways: 9.4, digitalocean: 8.4, vultr: 8.2 } },
  { label: "Performance / price", scores: { cloudways: 8.6, digitalocean: 8.8, vultr: 9.0 } },
  { label: "Managed features", scores: { cloudways: 9.2, digitalocean: 7.2, vultr: 7.0 } },
  { label: "Regions & flexibility", scores: { cloudways: 8.8, digitalocean: 8.6, vultr: 9.0 } },
  { label: "WP/LAMP speed to launch", scores: { cloudways: 9.3, digitalocean: 8.4, vultr: 8.5 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  cloudways: avg("cloudways"),
  digitalocean: avg("digitalocean"),
  vultr: avg("vultr"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Cloudways (Standard DO/Vultr/Linode)",
    monthly: "From ~US$14+/mo",
    annual: "Billed monthly (usage-based infra + fee)",
    limits: "Managed stack on DigitalOcean/Vultr/Linode with panel, backups, and staging.",
    notes:
      "You pay both the underlying provider cost and Cloudways platform fee; great value if you factor saved DevOps time.",
  },
  {
    plan: "DigitalOcean Droplet (Basic)",
    monthly: "From US$5/mo",
    annual: "Discounts via committed usage or credits",
    limits: "1 vCPU / 1 GB RAM base droplet; storage and bandwidth vary by plan.",
    notes:
      "DIY server config; add managed DBs, backups, load balancers, and Spaces if you want a more managed feel.",
  },
  {
    plan: "Vultr Cloud Compute",
    monthly: "From ~US$2.50/mo",
    annual: "Billed monthly/hourly (usage-based)",
    limits: "Entry-level 1 vCPU / 512 MB RAM, with options for NVMe and high-frequency CPUs.",
    notes:
      "Great for test/staging boxes or cost-sensitive workloads; you handle full stack setup and hardening.",
  },
];

const featureBullets = {
  stack: [
    "Cloudways: Opinionated but flexible PHP stack with Nginx/Apache, caching layers, and one-click staging for WordPress and other PHP apps.",
    "DigitalOcean: Bring-your-own stack via droplets or App Platform; Marketplace images accelerate LAMP/LEMP/Node setups.",
    "Vultr: Full control to pick your distro and stack; ideal for experienced DevOps who want to refine every layer.",
  ],
  management: [
    "Cloudways: Central panel for multiple servers, staged environments, backups, firewall tweaks, and monitoring dashboards.",
    "DigitalOcean: Clear project model and resource grouping; monitoring and alerts are available but not as opinionated.",
    "Vultr: Clean UI for instances and networking; more reliance on scripts and external tools for advanced management.",
  ],
  security: [
    "Cloudways: Handles much of the baseline hardening and patches at the platform level; you still manage app security.",
    "DigitalOcean: You manage OS patches, firewalls (Cloud Firewalls), and SSH key-based access; managed DBs reduce exposure.",
    "Vultr: Similar to bare cloud—full responsibility for OS hardening, firewall rules, and intrusion monitoring.",
  ],
  pricing: [
    "Cloudways: Adds a management fee to infra cost—more expensive than raw cloud but cheaper than many fully managed hosts.",
    "DigitalOcean: Transparent per-droplet pricing and predictable managed add-ons; easy to explain to finance teams.",
    "Vultr: Aggressive entry-level pricing and flexible plan types, great when you are cost-sensitive or running many small nodes.",
  ],
};

const useCases = [
  {
    title: "Agencies managing many WordPress client sites",
    winner: "Cloudways",
    reasoning:
      "Staging, backups, and a managed panel dramatically reduce ops overhead. You can standardize your stack across DO/Vultr and keep client work consistent.",
  },
  {
    title: "Developers building SaaS/side projects",
    winner: "DigitalOcean",
    reasoning:
      "The combination of droplets, managed DBs, and App Platform offers a balanced middle ground between control and convenience.",
  },
  {
    title: "Cost-sensitive projects and geo-distributed apps",
    winner: "Vultr",
    reasoning:
      "Smaller entry-level instances, plus many global regions, make it easy to deploy close to your users at lower cost.",
  },
  {
    title: "Teams without in-house DevOps",
    winner: "Cloudways",
    reasoning:
      "By offloading much of the day-to-day server management to Cloudways, marketing and product teams can ship faster.",
  },
  {
    title: "Builders who like to tinker and tune",
    winner: "DigitalOcean or Vultr",
    reasoning:
      "If you enjoy writing Ansible/Terraform, tweaking Nginx configs, and designing network topologies, raw DO or Vultr will feel natural.",
  },
];

const faqs = [
  {
    q: `Is Cloudways better than DigitalOcean or Vultr in ${YEAR}?`,
    a: "Cloudways wins on speed-to-launch and managed features like backups and staging. DigitalOcean and Vultr win on raw price/performance and deep control. The “best” choice depends on whether you value convenience or low-level control more.",
  },
  {
    q: "Which is best for beginners with limited DevOps experience?",
    a: "Cloudways. Its managed panel, tuned stack, and built-in backups/staging mean you can run serious workloads without being a Linux expert.",
  },
  {
    q: "Which is cheapest for small projects?",
    a: "Vultr usually has the lowest starting price, with DigitalOcean close behind. Cloudways adds a management fee, so it is more expensive but also more hands-off.",
  },
  {
    q: "Which is best for WordPress?",
    a: "Cloudways is the fastest path to a tuned WordPress stack, especially for agencies and freelancers. DigitalOcean and Vultr are excellent if you are comfortable configuring caching, security, and CDN yourself.",
  },
  {
    q: "Does Cloudways replace DigitalOcean/Vultr?",
    a: "Cloudways sits on top of providers like DigitalOcean and Vultr. You are effectively renting infrastructure from them plus management from Cloudways in a single package.",
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
  cloudways: {
    pros: [
      "Managed panel with backups, staging, and monitoring out of the box.",
      "Optimized PHP/WordPress stack tuned for performance and reliability.",
      "Choice of underlying clouds (DigitalOcean, Vultr, AWS, GCP, etc.) from one interface.",
      "Ideal for agencies and teams who want to minimize DevOps overhead.",
    ],
    cons: [
      "Adds a management fee on top of underlying infrastructure costs.",
      "Less low-level control than raw cloud; limited or no root access in many scenarios.",
      "Advanced DevOps/custom networking patterns are harder to implement than on pure IaaS.",
    ],
  },
  digitalocean: {
    pros: [
      "Simple pricing and UI, easy for developers to understand quickly.",
      "Managed databases, object storage (Spaces), and App Platform available.",
      "Marketplace images speed setup for common stacks like WordPress and LAMP/LEMP.",
      "Good documentation and strong community tutorials.",
    ],
    cons: [
      "Backups, snapshots, and some managed features cost extra.",
      "You maintain OS updates, security hardening, and advanced monitoring yourself.",
      "Not as many micro-regions or niche locations as some competitors.",
    ],
  },
  vultr: {
    pros: [
      "Great raw price/performance, especially at entry and mid tiers.",
      "Wide region coverage including some niche locations other clouds skip.",
      "Diverse plan types: standard, high-frequency, bare metal, and more.",
      "Good fit for staging environments, edge nodes, and cost-sensitive workloads.",
    ],
    cons: [
      "More DIY; fewer managed services compared to Cloudways or even DigitalOcean.",
      "Backups and advanced monitoring cost extra or require third-party tooling.",
      "Less polished documentation and ecosystem than some larger clouds.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("cloudways")
    ? "cloudways"
    : name.toLowerCase().includes("digital")
    ? "digitalocean"
    : name.toLowerCase().includes("vultr")
    ? "vultr"
    : name.toLowerCase();
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

const getRowWinnerKey = (row) => {
  const entries = Object.entries(row.scores || {});
  if (!entries.length) return null;
  return entries.sort((a, b) => Number(b[1]) - Number(a[1]))[0][0];
};

export default function CloudwaysVsDigitalOceanVsVultrPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Cloudways vs DigitalOcean vs Vultr – Honest Cloud Hosting Comparison (${YEAR})`}
        description="Hands-on comparison of Cloudways, DigitalOcean, and Vultr for setup speed, raw performance, managed features, regions, pricing, and the best option for WordPress/LAMP stacks."
        canonical={canonical}
        keywords={`${primaryKeyword}, cloud hosting comparison, wordpress hosting, managed hosting, cloudways review, digitalocean review, vultr review`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Cloud hosting & managed stacks
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Cloudways vs DigitalOcean vs Vultr – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          We deployed WordPress and LAMP stacks across <strong>Cloudways</strong>,{" "}
          <strong>DigitalOcean</strong>, and <strong>Vultr</strong>. Cloudways is the
          managed layer that gets you to a tuned stack with staging and backups in
          minutes. DigitalOcean is a developer-friendly cloud with clean pricing and
          managed DBs. Vultr leans into price/performance and region variety. This
          guide breaks down setup, performance, features, and real-world use-cases so
          you can pick the right hosting model for your team.
        </p>

        {/* Quick verdict & category highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Cloudways</strong> if you want a managed panel, staging,
              and backups without hiring a DevOps engineer. Choose{" "}
              <strong>DigitalOcean</strong> if you prefer straightforward droplets,
              managed DBs, and App Platform with clear pricing. Choose{" "}
              <strong>Vultr</strong> when raw price/performance and flexible regions
              matter most and you are comfortable tuning your own stack.
            </p>
            <p className="text-sm text-slate-700">
              In practice, many teams run flagship sites on Cloudways, core apps on
              DigitalOcean, and experimental or edge workloads on Vultr. There is no
              single winner—only the best fit for your risk, budget, and DevOps
              appetite.
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {overallWinnerKey.charAt(0).toUpperCase() + overallWinnerKey.slice(1)}
              <span className="text-xs font-medium text-emerald-700">
                {" "}
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Server className="h-5 w-5 text-emerald-700" /> Fastest managed launch
            </div>
            <p className="text-sm text-slate-700">
              <strong>Cloudways</strong> ships a tuned PHP/WordPress stack with
              staging, backups, and firewall rules in minutes—ideal when you want
              managed hosting without losing cloud flexibility.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Globe2 className="h-5 w-5 text-indigo-600" /> Best raw price / regions
            </div>
            <p className="text-sm text-slate-700">
              <strong>Vultr</strong> often wins on pure price/performance and offers a
              wide set of regions, including more niche locations. Perfect for edge
              workloads and cost-sensitive deployments.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-slate-800" /> Balanced builder cloud
            </div>
            <p className="text-sm text-slate-700">
              <strong>DigitalOcean</strong> sits in the middle—simple UI and pricing,
              helpful managed DBs and storage, and enough control for serious
              workloads without overwhelming complexity.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => {
            const meta = brandMeta[card.key];
            return (
              <a
                key={card.key}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-700"
                } p-5 shadow-md`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                  <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
                </div>
                <div className="relative flex items-start justify-between">
                  <LogoBadge name={card.name} />
                  <span className="rounded-full bg-black/20 px-2 py-1 text-xs font-semibold text-white/90">
                    Cloud contender
                  </span>
                </div>
                <p className="relative mt-3 text-sm font-medium text-white/90">
                  {card.blurb}
                </p>
              </a>
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-700">
            This table summarizes how Cloudways, DigitalOcean, and Vultr compare
            across setup, performance, managed features, regions, and their fit for
            common WordPress/LAMP workloads.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">DigitalOcean</th>
                  <th className="px-4 py-3">Vultr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.cloudways}</td>
                    <td className="px-4 py-3">{row.digitalocean}</td>
                    <td className="px-4 py-3">{row.vultr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard (single, non-repeated section) */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and reflect a mix of performance, usability, and
            value. Highest score in each row is highlighted, and the gradient row
            shows the overall average.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Cloudways</th>
                  <th className="px-4 py-3">DigitalOcean</th>
                  <th className="px-4 py-3">Vultr</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerKey = getRowWinnerKey(row);
                  const winnerName =
                    winnerKey === "cloudways"
                      ? "Cloudways"
                      : winnerKey === "digitalocean"
                      ? "DigitalOcean"
                      : winnerKey === "vultr"
                      ? "Vultr"
                      : "Tie";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "cloudways"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.cloudways}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "digitalocean"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.digitalocean}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "vultr"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.vultr}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-purple-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.cloudways}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.digitalocean}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.vultr}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-900">
                    {overallWinnerKey === "cloudways"
                      ? "Cloudways"
                      : overallWinnerKey === "digitalocean"
                      ? "DigitalOcean"
                      : "Vultr"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Stack & performance profile
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Management & DevOps overhead
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.management.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Security, backups, and observability
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Pricing model & scaling behaviour
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.pricing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Billing / term</th>
                  <th className="px-4 py-3">What you get</th>
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
            Pricing changes frequently and varies by region, traffic, and configuration.
            Treat these as directional reference points and check each provider’s pricing
            page for up-to-date numbers before making a long-term decision.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700 md:text-base">
            <li>
              <strong>Cloudways:</strong> Web-based panel with task-oriented flows—
              launch server, add app, create staging, set backups. It feels familiar if
              you have used managed WordPress or PaaS tools, and it hides most OS-level
              complexity.
            </li>
            <li>
              <strong>DigitalOcean:</strong> Clean dashboard and resource list model. If
              you know basic Linux and SSH, the learning curve is manageable. Their
              tutorials and community examples help you improve quickly.
            </li>
            <li>
              <strong>Vultr:</strong> UI is straightforward but assumes you already know
              what you are doing when it comes to OS images, SSH, and networking. Power
              users will feel at home; beginners may prefer Cloudways or DigitalOcean.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  Winner: {useCase.winner}
                </p>
                <p className="mt-1 text-sm text-slate-700">{useCase.reasoning}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            In reality, many teams mix and match providers. For example, you might run
            your marketing site on a managed Cloudways stack, your core API on
            DigitalOcean droplets with managed DBs, and your edge nodes or test
            environments on small Vultr instances.
          </p>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 shadow-sm ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
