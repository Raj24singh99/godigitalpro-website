import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Server, Cpu, Globe, Cloud, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Vultr";
const slug = "vultr";
const category = "Cloud Hosting";
const shortPitch =
  "Vultr is a developer-friendly cloud provider offering high-performance compute, bare metal, Kubernetes, and managed databases with 32+ global locations and simple flat pricing.";
const pricingSummary =
  "Shared compute plans start at $2.50/mo, High Frequency Compute at $6/mo, Bare Metal at $120/mo, and managed Kubernetes/databases scale by resources. Pay hourly with predictable caps.";
const officialUrl = "https://www.vultr.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vultr.com",
  gradient: "from-blue-500 via-indigo-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "DigitalOcean", slug: "digitalocean" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Kinsta", slug: "kinsta" },
];

const faqs = [
  { q: "What is Vultr best for?", a: "Developers and agencies that want fast SSD instances, predictable pricing, and global PoPs without hyperscaler complexity." },
  { q: "Does Vultr have managed services?", a: "Yes. Managed Kubernetes, managed databases, block storage, and load balancers reduce ops overhead." },
  { q: "How is Vultr pricing structured?", a: "Flat monthly or hourly rates per instance. You can spin up compute for a few cents per hour and scale up/down easily." },
  { q: "Where are Vultr data centers?", a: "32+ locations including North America, Europe, Asia, and Australia. Great for latency-sensitive workloads." },
  { q: "Is support good?", a: "Email support is standard; premium support tiers available for SLA-driven teams." },
  { q: "Does Vultr integrate with Terraform?", a: "Yes. Terraform providers, APIs, and CLI make automation straightforward." },
  { q: "How does Vultr compare to DigitalOcean?", a: "Both offer simple clouds. Vultr has more global locations and bare metal; DigitalOcean has stronger managed app platform. See comparison below." },
  { q: "Can I host WordPress or SaaS apps?", a: "Yes. Use Marketplace images or deploy via Cloudways for managed stacks." },
];

function VultrToolPage() {
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
        "Vultr offers high-performance compute and storage options with transparent pricing, making it a popular alternative to DigitalOcean and Linode.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Server className="h-5 w-5 text-blue-500" />, title: "High performance compute", body: "Shared, High Frequency, Bare Metal, and GPU instances let you match workloads to budgets." },
    { icon: <Cpu className="h-5 w-5 text-indigo-500" />, title: "Managed Kubernetes & databases", body: "Deploy clusters, Postgres, MySQL, or Redis with automated backups and scaling." },
    { icon: <Globe className="h-5 w-5 text-emerald-500" />, title: "Global edge", body: "32+ data centers across 6 continents reduce latency for SaaS and ecommerce." },
    { icon: <Cloud className="h-5 w-5 text-cyan-500" />, title: "Marketplace & automation", body: "Launch WordPress, Plesk, OpenVPN, or stacks via one-click images, API, Terraform, or Ansible." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Networking extras", body: "Anycast IP, DDoS protection, load balancers, VPC, and block object storage keep workloads resilient." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-500" />, title: "Security & governance", body: "Team accounts, role-based access, MFA, and private networking support compliance-minded teams." },
  ];

  const pricingTable = [
    { plan: "Shared CPU", best: "Side projects & staging", limits: "1 vCPU / 1 GB RAM", price: "$2.50/mo" },
    { plan: "High Frequency Compute", best: "Production web apps", limits: "1 vCPU / 1 GB RAM NVMe", price: "$6/mo" },
    { plan: "Bare Metal", best: "High-performance workloads", limits: "Dedicated CPU, 10GbE", price: "$120/mo" },
    { plan: "Managed Kubernetes", best: "Containerized SaaS", limits: "$0 control plane + worker nodes", price: "Pay per node" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Vultr review covering pricing, performance, features, pros & cons, alternatives, and comparisons to DigitalOcean and SiteGround."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" /> {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold md:text-4xl">{toolName} Review (2025): Features, Pricing, Pros & Cons</h1>
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-100 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Vultr balances developer-friendly automation with predictable pricing so teams can launch globally without hyperscaler complexity.</p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" /> Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">{toolName} is an independent cloud provider known for fast SSD storage, NVMe high frequency compute, bare metal, and managed services. Developers choose it for simple dashboards, global coverage, and transparent billing.</p>
            <p className="mt-3 text-slate-700">It competes directly with DigitalOcean and Linode, offering more global PoPs and bare metal options for performance-sensitive workloads.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Pick Vultr if you want control without AWS-level complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS teams deploying web apps or APIs globally.",
                "Agencies hosting client WordPress or WooCommerce sites.",
                "Gaming and media companies needing low-latency edge.",
                "Startups wanting predictable infrastructure spend.",
                "DevOps teams running Kubernetes without building control planes.",
                "Businesses migrating from traditional VPS providers to NVMe compute.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Modern infrastructure built for developers.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                <p className="mt-2 text-slate-700">Transparent hourly pricing keeps budgets simple, whether you need tiny droplets or bare metal.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use High Frequency Compute for production apps, Bare Metal for dedicated workloads, and Managed K8s when orchestrating containers.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Remember bandwidth and backups may add small usage fees.</p>
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
                  <li>Fast NVMe compute across many regions.</li>
                  <li>Simple, transparent pricing.</li>
                  <li>Marketplace images + automation tooling.</li>
                  <li>Bare metal and GPU options without long contracts.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer managed services than AWS/Azure.</li>
                  <li>Support SLAs require premium tiers.</li>
                  <li>No built-in compliance attestations for some regulated industries.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare these platforms if you need managed PaaS, hyperscaler depth, or WordPress-optimized hosting.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Full review available.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Dive into our head-to-head comparisons.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Cloudways vs DigitalOcean</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/cloudways-vs-digitalocean-vs-vultr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">See how Vultr stacks up against managed Cloudways and DigitalOcean’s developer-friendly cloud.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs DigitalOcean vs SiteGround</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vultr-vs-digitalocean-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Perfect for agencies weighing raw VPS power against managed WordPress hosting.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you want control, predictable cost, and global regions without hyperscaler overhead, Vultr is an excellent choice. Pair it with managed services like Cloudways if you need a control panel.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> Vultr is a go-to option for developers and agencies that want fast infrastructure with transparent economics.</p>
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
            <p>Choose Vultr for developer-friendly infrastructure across many regions.</p>
            <p>Consider DigitalOcean or SiteGround if you need more managed services or WordPress-specific tooling.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default VultrToolPage;
