import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Cloudways";
const slug = "cloudways";
const category = "Managed Cloud Hosting";
const shortPitch =
  "Cloudways is a managed hosting platform that lets you deploy on DigitalOcean, Vultr, Linode, AWS, or GCP with an easy panel, backups, staging, and performance optimizations built in.";
const pricingSummary =
  "Pricing depends on chosen cloud provider and instance size. DigitalOcean plans start around $14/month, with managed backups, CDN add-ons, and support included in the platform fee.";
const officialUrl = "https://www.cloudways.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/cloudways.com",
  gradient: "from-indigo-500 via-sky-500 to-blue-700",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "DigitalOcean", slug: "digitalocean" },
  { name: "Vultr", slug: "vultr" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Kinsta", slug: "kinsta" },
  { name: "Rocket.net", slug: "rocket-net" },
];

const faqs = [
  { q: "What is Cloudways?", a: "Cloudways is a managed hosting layer on top of cloud providers like DigitalOcean, Vultr, Linode, AWS, and GCP. It offers an easy panel, performance stack, backups, and security." },
  { q: "Is Cloudways good for WordPress?", a: "Yes. Cloudways optimizes for WordPress with caching, staging, backups, and a managed stack (Nginx, Varnish, Redis) to improve performance without server tuning." },
  { q: "How does pricing work?", a: "You pay based on the underlying cloud provider/instance plus Cloudways’ management fee. Plans start near $14/month on DigitalOcean with hourly billing and pay-as-you-go scaling." },
  { q: "Does Cloudways have backups and staging?", a: "Automatic backups, one-click restore, and staging environments are included. You can set backup frequency and retention per app." },
  { q: "Which providers can I choose?", a: "DigitalOcean, Vultr, Linode, AWS, and Google Cloud are available. Pricing and performance vary per provider and plan size." },
  { q: "Is there a CDN?", a: "Cloudways offers an add-on CDN and also integrates easily with Cloudflare. You can enable CDN per application for better global performance." },
  { q: "Do I need server management skills?", a: "Not much. The platform handles stack setup, security patches, and monitoring. You still control scaling and basic configs via the panel." },
  { q: "Who is Cloudways best for?", a: "Agencies, WooCommerce stores, and SaaS teams that want managed performance on top of flexible cloud providers without building DevOps from scratch." },
];

function CloudwaysToolPage() {
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
        "Cloudways provides a managed layer over multiple cloud providers with strong WordPress performance, backups, staging, and security. It’s a good fit for teams wanting managed hosting without losing cloud flexibility.",
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
      icon: <Server className="h-5 w-5 text-sky-500" />,
      title: "Managed cloud stack",
      body: "Nginx, Varnish, Redis, PHP-FPM, and built-in caching tuned for performance, especially for WordPress and WooCommerce.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Multi-provider flexibility",
      body: "Deploy on DigitalOcean, Vultr, Linode, AWS, or GCP while using the same control panel, backups, and monitoring.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Staging, backups, and restores",
      body: "Create staging environments, schedule automated backups, and restore in one click to protect releases and updates.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Add-ons and integrations",
      body: "Enable CDN, email, and monitoring add-ons. Integrate with Git deploys, Cloudflare, and your CI/CD for smooth workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and governance",
      body: "Managed OS patches, firewalls, bot protection, and IP allowlisting reduce operational overhead for security-conscious teams.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Performance and scaling",
      body: "Vertical scaling, server resizing, and built-in caching/CDN options help handle traffic spikes without manual tuning.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Cloudways review for agencies and site owners: pricing, features, pros & cons, alternatives, and comparisons vs DigitalOcean, Vultr, and SiteGround."
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-200 blur-3xl" />
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
                  Cloudways gives you managed performance and security while keeping the flexibility of your preferred cloud provider—ideal for WordPress, WooCommerce, and PHP apps.
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
              {toolName} is a {category.toLowerCase()} platform that adds an easy control panel, backups, staging, performance stack, and security on top of your choice of cloud infrastructure providers.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies, WooCommerce stores, and SaaS teams use Cloudways because it handles server maintenance while letting them pick providers and regions. It’s faster to deploy than raw cloud VMs.
            </p>
            <p className="mt-3 text-slate-700">
              The platform includes monitoring, bot protection, Git deploys, and add-ons like CDN/email to keep sites stable without deep DevOps work.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that want managed hosting with control over provider choice and performance stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies hosting multiple client WordPress or WooCommerce sites with staging and backups.",
                "Ecommerce stores needing managed performance and security without DevOps overhead.",
                "SaaS teams deploying PHP/WordPress apps that need autoscaling-friendly infrastructure choices.",
                "Developers who want a managed stack but prefer DigitalOcean/Vultr/Linode for pricing and regions.",
                "Marketers needing reliable hosting with CDN, backups, and restore options built in.",
                "Teams transitioning from shared hosting to managed cloud without learning server administration.",
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
            <p className="mt-3 text-slate-700">Cloudways focuses on balancing managed convenience with provider choice and performance.</p>
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
                  Pricing varies by provider (DO, Vultr, Linode, AWS, GCP) and instance specs. Cloudways adds a management layer fee that covers backups, security patches, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with DigitalOcean/Vultr plans for best value; upgrade specs or providers as traffic grows.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">DigitalOcean standard</td>
                    <td className="px-4 py-3">Most SMB sites and Woo stores</td>
                    <td className="px-4 py-3">Managed stack, backups, staging, monitoring</td>
                    <td className="px-4 py-3">~$14–$36/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Vultr high frequency</td>
                    <td className="px-4 py-3">Performance-focused WordPress/Woo</td>
                    <td className="px-4 py-3">Faster CPUs/NVMe, same managed features</td>
                    <td className="px-4 py-3">~$16–$44/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">AWS / GCP</td>
                    <td className="px-4 py-3">Enterprise workloads needing regions/features</td>
                    <td className="px-4 py-3">Managed stack on hyperscalers, higher costs</td>
                    <td className="px-4 py-3">$30+/month depending on size</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">*Approximate totals include Cloudways platform fee and underlying provider costs; exact pricing varies by region/spec.</p>
            <p className="mt-2 text-slate-700">
              Factor in CDN add-on and backups in your budget. Upgrade vertically as traffic increases; move providers or regions when needed without changing your workflow.
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
                  <li>Managed stack with backups, staging, and security out of the box.</li>
                  <li>Choose from multiple cloud providers and regions with one panel.</li>
                  <li>Good WordPress/WooCommerce performance with caching and Redis.</li>
                  <li>CDN, email, and monitoring add-ons keep ops simple.</li>
                  <li>Vertical scaling and provider choice balance cost and performance.</li>
                  <li>Pay-as-you-go billing with clear resource breakdowns.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Platform fee makes it pricier than managing cloud directly.</li>
                  <li>No email inboxes included by default (add-on needed).</li>
                  <li>Less control than raw cloud; advanced configs can be limited.</li>
                  <li>Resource scaling is vertical; horizontal scaling needs careful planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Cloudways competes with direct cloud hosting and managed WordPress platforms. Choose based on control, price, and how much management you want outsourced.
            </p>
            <p className="mt-2 text-slate-700">All can host WordPress and PHP apps; they differ on panel UX, support SLAs, and included performance tools.</p>
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
            <p className="text-slate-700">Here’s how Cloudways compares to two common hosting options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs DigitalOcean/Vultr</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/cloudways-vs-digitalocean-vs-vultr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Direct cloud is cheaper but requires server management. Cloudways adds backups, staging, and security for a fee. Many teams start on Cloudways DO/Vultr for value and simplicity.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Cloudways for managed convenience; choose direct providers if you have DevOps resources and want the lowest cost.
              </p>
              <p className="mt-2 text-slate-900">Cloudways wins on speed-to-launch; raw cloud wins on maximum control and price.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SiteGround/WP Engine</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-engine-vs-cloudways-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SiteGround and WP Engine are managed hosts with fixed infrastructure. Cloudways lets you choose providers/regions and often costs less than premium managed WordPress plans at similar specs.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Cloudways for flexibility and value; choose WP Engine or SiteGround if you want a fully opinionated WordPress experience with specific support SLAs.
              </p>
              <p className="mt-2 text-slate-900">Cloudways balances control and management; WP Engine/SiteGround offer streamlined WordPress-specific flows.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want managed performance, backups, and security while keeping flexibility to pick cloud providers and regions. It’s especially strong for WordPress, WooCommerce, and PHP apps.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer raw control or lowest possible cost, go direct to cloud providers. If you want totally hands-off WordPress with bundled email/CDN, consider WP Engine or Kinsta.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Cloudways is a balanced choice for teams needing managed hosting with portability and predictable ops on top of trusted cloud providers.
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
              Choose Cloudways if you want managed hosting with performance and backups included while keeping flexibility over provider, region, and scaling path.
            </p>
            <p>
              Consider direct DigitalOcean or Vultr if you have DevOps expertise and want to minimize costs. Consider WP Engine or Kinsta if you prefer a fully opinionated managed WordPress stack.
            </p>
            <p>Cloudways integrates with Git, CDNs, and caching to fit modern web stacks and handle traffic confidently.</p>
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

export default CloudwaysToolPage;
