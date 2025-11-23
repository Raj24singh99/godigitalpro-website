import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Rocket, Crown, ArrowLeft, ChevronDown, Cloud, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "DigitalOcean";
const slug = "digitalocean";
const category = "Cloud Infrastructure";
const shortPitch =
  "DigitalOcean is a developer-friendly cloud platform for hosting apps, databases, and static sites without enterprise complexity—popular with startups, SMBs, and agencies.";
const pricingSummary =
  "Droplets start near $4–6/month, managed databases from ~$15/month, and managed Kubernetes with pay-as-you-go worker nodes. Straightforward bandwidth and snapshot pricing keep bills predictable.";
const officialUrl = "https://www.digitalocean.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/digitalocean.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-700",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "Vultr", slug: "vultr" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "A2 Hosting", slug: "a2-hosting" },
  { name: "Rocket.net", slug: "rocket-net" },
];

const faqs = [
  { q: "Is DigitalOcean good for agencies?", a: "Yes. Simple pricing, predictable bandwidth, and fast deploys make it easy for agencies to host client apps and WordPress sites without complex cloud overhead." },
  { q: "Does DigitalOcean have managed databases?", a: "It offers managed PostgreSQL, MySQL, and Redis with automatic backups, point-in-time recovery, and high availability in select regions." },
  { q: "How reliable is DigitalOcean?", a: "DigitalOcean targets 99.99% uptime on managed databases and Kubernetes control planes. Droplet reliability depends on how you architect redundancy (LBs, multiple droplets/regions)." },
  { q: "Can I host WordPress easily?", a: "Yes. You can deploy WordPress 1-click images, use managed databases for offloaded DB, add a load balancer, and front it with CDN/Cloudflare for performance." },
  { q: "Does DigitalOcean have a CDN?", a: "DigitalOcean offers Spaces CDN via the Spaces object storage network. Many users also pair DO with Cloudflare for global caching and security." },
  { q: "Is billing straightforward?", a: "DigitalOcean pricing is transparent by the hour/month with clear bandwidth and snapshot costs. No complex enterprise calculators are required." },
  { q: "Does DigitalOcean support autoscaling?", a: "Managed Kubernetes supports node pools and vertical/horizontal scaling. Droplets can be resized manually; autoscaling typically handled via Kubernetes or third-party tooling." },
  { q: "Which plan should beginners choose?", a: "Start with a $6–$12/month Basic Droplet for simple apps, or use App Platform for git-based deploys without server management. Add managed DBs as you grow." },
];

function DigitalOceanToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "DigitalOcean is loved for its simple, predictable cloud hosting. It’s powerful enough for production apps yet easy for SMBs, agencies, and startups to manage without dedicated DevOps.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Developer-friendly Droplets",
      body: "Spin up SSD-powered VMs in minutes with common stacks prebuilt. Resize, snapshot, and scale horizontally across regions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "App Platform for git-based deploys",
      body: "Deploy from GitHub/GitLab with auto-builds, SSL, zero-downtime deploys, and autoscaling without server maintenance.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Managed databases and Kubernetes",
      body: "PostgreSQL, MySQL, Redis, and Kubernetes with automated backups, failover, metrics, and encryption at rest/in transit.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Networking, CDN, and storage",
      body: "Load balancers, VPC networking, Spaces object storage + CDN, and Volumes block storage keep workloads flexible and fast.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and compliance",
      body: "Team access controls, VPC isolation, Cloud Firewalls, private networking, backups, and data center compliance options.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Simple, predictable pricing",
      body: "Clear hourly/monthly rates with straightforward bandwidth and snapshot pricing, making budgets easier for SMBs and agencies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased DigitalOcean review for startups and agencies: pricing, features, pros & cons, and the best DigitalOcean alternatives in 2025."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  DigitalOcean keeps cloud simple: fast droplets, managed DBs, and Kubernetes with plain-language pricing that startups and agencies can trust.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a {category.toLowerCase()} platform built for developers and lean teams. It offers droplets (VMs), managed databases, managed Kubernetes, storage, networking, and a PaaS-style App Platform.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use DigitalOcean to host WordPress, headless CMS, SaaS apps, and APIs with predictable costs. Startups choose it over hyperscalers for simpler billing and fast setup.
            </p>
            <p className="mt-3 text-slate-700">
              The platform includes monitoring, alerts, backups, and a marketplace of 1-click images (e.g., LAMP, Docker, Ghost) to speed up deployment.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">DigitalOcean suits teams that want cloud flexibility without enterprise overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies hosting WordPress or headless marketing sites with predictable pricing.",
                "Startups deploying SaaS apps who want simple billing and fast environments.",
                "Engineers needing managed PostgreSQL/MySQL/Redis without running their own clusters.",
                "Teams standardizing on Kubernetes but wanting lighter-weight infrastructure.",
                "Product teams using App Platform for auto-deploys from Git without server upkeep.",
                "Developers who prefer clear pricing for bandwidth, backups, and snapshots.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">DigitalOcean emphasizes simplicity, transparent pricing, and quick deployment.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Pricing is hourly with monthly caps. You can start cheap and scale up as traffic and workloads grow. Bandwidth, snapshots, and backups are clearly itemized.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a Basic Droplet; add managed DB + LB for production resilience.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic Droplets</td>
                    <td className="px-4 py-3">Blogs, marketing sites, small apps</td>
                    <td className="px-4 py-3">Shared CPU, SSD storage, snapshots/backups optional</td>
                    <td className="px-4 py-3">$4–$24/month depending on size</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium / CPU-Optimized</td>
                    <td className="px-4 py-3">APIs, production SaaS, higher traffic</td>
                    <td className="px-4 py-3">Faster CPUs, NVMe storage options</td>
                    <td className="px-4 py-3">From ~$18/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed Databases</td>
                    <td className="px-4 py-3">Postgres/MySQL/Redis with backups</td>
                    <td className="px-4 py-3">HA, PITR, automatic updates, metrics, encryption</td>
                    <td className="px-4 py-3">From ~$15/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">App Platform</td>
                    <td className="px-4 py-3">Deploy from git with no servers</td>
                    <td className="px-4 py-3">Build + runtime, SSL, scaling, health checks</td>
                    <td className="px-4 py-3">Starter free tier, paid from ~$12/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              For production, budget for load balancers, backups, and monitoring. App Platform removes server ops, while Kubernetes gives teams more control over scaling.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Clear pricing and billing—easy to forecast for SMBs and agencies.</li>
                  <li>Fast to deploy VMs, databases, or Kubernetes with sensible defaults.</li>
                  <li>App Platform supports git-based deploys with autoscaling and SSL.</li>
                  <li>Marketplace images for WordPress, LAMP/LEMP, Ghost, Docker, and more.</li>
                  <li>Good docs and community tutorials shorten onboarding for new teams.</li>
                  <li>VPC, Cloud Firewalls, and load balancers simplify secure architectures.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No bundled enterprise features (IAM breadth, private service meshes) found in hyperscalers.</li>
                  <li>Global region list is smaller than AWS/Azure/GCP; may matter for strict latency needs.</li>
                  <li>Autoscaling for Droplets is manual; you’ll need Kubernetes/App Platform for automatic scaling.</li>
                  <li>Compliance requirements beyond SOC/ISO may need third-party tooling or another provider.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              DigitalOcean competes with lean VPS providers and managed platforms. Pick based on performance, global regions, and how much infrastructure you want to manage.
            </p>
            <p className="mt-2 text-slate-700">All of these support hosting modern apps; they differ on management layers and enterprise extras.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">Here’s how DigitalOcean stacks up against nearby cloud options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Vultr</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vultr-vs-digitalocean-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Vultr often leads on raw price/performance per VM. DigitalOcean wins on docs, ecosystem, and managed database/Kubernetes polish. Both offer global regions and simple pricing.
              </p>
              <p className="mt-2 text-slate-700">
                If you value community resources and App Platform for git deploys, DigitalOcean is smoother. If lowest-cost VMs and many edge locations are priority, Vultr is compelling.
              </p>
              <p className="mt-2 text-slate-900">
                Choose DigitalOcean for simplicity + managed services; choose Vultr for aggressive VM pricing and region breadth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Cloudways</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/cloudways-vs-digitalocean-vs-vultr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Cloudways runs managed hosting on top of DigitalOcean, Vultr, and others. It adds dashboards, backups, staging, and support for non-DevOps teams. DigitalOcean direct offers more control and lower base cost.
              </p>
              <p className="mt-2 text-slate-700">
                Pick Cloudways if you want managed WordPress or PHP apps with minimal ops work. Pick DigitalOcean direct if you’re comfortable managing the stack and want tighter budget control.
              </p>
              <p className="mt-2 text-slate-900">
                Choose DigitalOcean for hands-on control; choose Cloudways for a managed layer on familiar infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For startups, SMBs, and agencies that need reliable hosting without hyperscaler complexity, DigitalOcean is a strong fit. Transparent pricing, good docs, and managed services keep teams focused on products, not infrastructure.
            </p>
            <p className="mt-3 text-slate-700">
              If you require deep enterprise features, specialized compliance, or advanced networking, AWS/Azure/GCP may be better. Otherwise, DigitalOcean’s simplicity is a competitive advantage.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> DigitalOcean is worth it when you want predictable cloud costs, quick deployments, and enough managed services to run production without heavy DevOps.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>
              Choose DigitalOcean if you need a straightforward cloud that scales from side projects to production SaaS without complex billing. Managed databases, Kubernetes, and App Platform cover most workloads with minimal friction.
            </p>
            <p>
              Consider Vultr for aggressive VM pricing or Cloudways if you want a managed layer on top of DigitalOcean’s infrastructure. Hyperscalers make sense only if you need their unique services or compliance footprint.
            </p>
            <p>DigitalOcean integrates easily with CI/CD, monitoring, and CDNs so modern marketing and product teams can ship fast.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default DigitalOceanToolPage;
