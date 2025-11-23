import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "A2 Hosting";
const slug = "a2-hosting";
const category = "Web hosting";
const shortPitch =
  "A2 Hosting is a performance-focused hosting provider known for fast Turbo servers, developer-friendly tools, and responsive support across shared, VPS, and dedicated plans.";
const pricingSummary = "Shared hosting starts near $3/month on longer terms; Turbo plans cost more but deliver faster performance. VPS and dedicated options scale further.";
const officialUrl = "https://www.a2hosting.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/a2hosting.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Hostinger", slug: "hostinger" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Bluehost", slug: "bluehost" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "DigitalOcean", slug: "digitalocean" },
];

const faqs = [
  { q: "Is A2 Hosting fast?", a: "Yes. Turbo plans include LiteSpeed-based servers, NVMe storage, and optimized caching to improve speed." },
  { q: "Is A2 Hosting reliable?", a: "A2 offers a 99.9% uptime commitment and is respected for reliable shared and VPS performance with responsive support." },
  { q: "Does A2 Hosting have a website builder?", a: "You can use WordPress, Elementor, or other builders. A2 focuses on hosting quality rather than a proprietary builder." },
  { q: "Is A2 Hosting good for developers?", a: "Yes. SSH access, staging, Git, and multiple PHP versions make it friendly for developers and agencies." },
  { q: "Does A2 Hosting offer free migrations?", a: "Many plans include free site migration. Check the plan terms to confirm eligibility and limits." },
  { q: "Is A2 Hosting good for WooCommerce?", a: "Yes. Turbo plans with more resources and caching benefit WooCommerce stores; you can pair with performance plugins/CDN." },
  { q: "How is A2 Hosting support?", a: "Support is responsive via chat and tickets. Turbo plans often receive priority resources and better performance out of the box." },
  { q: "Does A2 Hosting include backups?", a: "Automated backups are available on many plans; verify the retention policy and consider offsite backups for critical sites." },
];

function A2HostingToolPage() {
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
        "A2 Hosting delivers fast servers, developer-friendly controls, and responsive support. Turbo plans and NVMe storage make it a strong value for WordPress and WooCommerce sites that need speed.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Turbo performance",
      body: "LiteSpeed-based Turbo servers, NVMe storage, and optimized caching aim to deliver faster load times on higher-tier shared plans.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Managed WordPress features",
      body: "Staging, auto-updates, caching, and security hardening keep WordPress sites running smoothly with less manual work.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Developer-friendly stack",
      body: "SSH, Git, multiple PHP versions, and CLI access make it easy for developers and agencies to deploy and manage projects.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Migrations and support",
      body: "Free migrations on many plans and responsive support help teams move sites with less downtime.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and backups",
      body: "DDoS protection, malware scanning, SSL, and backup options provide a baseline of security for live sites.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Scaling choices",
      body: "Shared, VPS, and dedicated options let you grow without changing providers; WooCommerce-friendly resources available.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="A2 Hosting review for 2025 covering pricing, performance, pros & cons, alternatives, and comparisons for WordPress and WooCommerce sites."
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  A2 Hosting focuses on speed, developer tools, and quality support across shared and VPS tiers, making it a versatile option for growing sites.
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
              A2 Hosting is a {category.toLowerCase()} provider known for performance-focused shared and VPS plans. It offers Turbo servers, developer conveniences, and managed WordPress features to keep sites fast and secure.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and site owners choose {toolName} for WordPress and WooCommerce projects that need speed without moving to fully managed enterprise hosting.
            </p>
            <p className="mt-3 text-slate-700">The platform balances cost, performance, and support, with upgrade paths to VPS or dedicated as traffic grows.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that prioritize speed, developer control, and responsive support.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "WordPress site owners wanting faster shared hosting.",
                "WooCommerce stores needing improved performance without enterprise costs.",
                "Agencies managing multiple client sites with staging and SSH.",
                "Developers who want Git/CLI access and PHP control.",
                "Businesses planning to scale from shared to VPS/dedicated.",
                "Marketers who value quick support and migration help.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Performance-minded hosting with developer tools and managed WordPress perks.</p>
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
                <p className="mt-2 text-slate-700">
                  Shared plans scale from entry-level to Turbo (faster servers). Managed WordPress overlays add staging and updates. VPS and dedicated plans introduce more control and resources. Pricing varies by term length and resources.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Turbo shared for WordPress; move to managed VPS as traffic and concurrency grow.</p>
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
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shared (Startup/Drive)</td>
                    <td className="px-4 py-3">Small sites on a budget</td>
                    <td className="px-4 py-3">Standard resources, shared servers</td>
                    <td className="px-4 py-3">$3–$7/mo (long-term promos)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Turbo shared</td>
                    <td className="px-4 py-3">Sites needing more speed</td>
                    <td className="px-4 py-3">LiteSpeed-based Turbo, NVMe, higher resource caps</td>
                    <td className="px-4 py-3">$10–$15+/mo (term-based)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed VPS</td>
                    <td className="px-4 py-3">Growing sites needing isolation</td>
                    <td className="px-4 py-3">Dedicated resources, root/managed options</td>
                    <td className="px-4 py-3">$30+/mo depending on specs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Dedicated</td>
                    <td className="px-4 py-3">High-traffic or compliance needs</td>
                    <td className="px-4 py-3">Full server resources, more control</td>
                    <td className="px-4 py-3">Custom based on hardware</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Watch renewal pricing and term lengths; Turbo plans offer the best performance value for most WordPress/WooCommerce sites.</p>
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
                  <li>Turbo servers and NVMe deliver strong speed at reasonable cost.</li>
                  <li>Developer-friendly with SSH, Git, and PHP version control.</li>
                  <li>Managed WordPress perks (staging, caching, updates).</li>
                  <li>Free migrations on many plans; responsive support.</li>
                  <li>Upgrade paths to VPS/dedicated without changing hosts.</li>
                  <li>Good fit for WooCommerce when paired with caching/CDN.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Performance differs by plan; non-Turbo tiers are slower.</li>
                  <li>Renewal pricing can jump after promo periods.</li>
                  <li>Not as hands-off as premium managed WP hosts.</li>
                  <li>Backups/retention vary by plan; offsite backups still recommended.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              A2 Hosting emphasizes speed and developer tools. Some teams pick hosts optimized for budget, support, or managed services depending on needs.
            </p>
            <p className="mt-2 text-slate-700">All provide reliable hosting; they differ on management, performance, and pricing models.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how A2 Hosting compares to two popular hosting options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hostinger</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/a2-hosting-vs-hostinger-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hostinger is budget-friendly with good performance. A2’s Turbo plans often edge out on speed and developer tooling, with flexible upgrade paths to VPS.
              </p>
              <p className="mt-2 text-slate-700">Choose Hostinger for the lowest cost; choose A2 for developer features and faster Turbo tiers.</p>
              <p className="mt-2 text-slate-900">Both are solid for WordPress; A2 is favored by developers needing SSH/Git defaults.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SiteGround</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/a2-hosting-vs-bluehost-vs-cloudways">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SiteGround is known for managed WordPress experience and support. A2 offers faster NVMe/Turbo options and more developer control at similar price points.
              </p>
              <p className="mt-2 text-slate-700">Pick SiteGround for hands-on support and managed feel; pick A2 if you want speed and dev flexibility without managed WP pricing.</p>
              <p className="mt-2 text-slate-900">Cloudways is another alternative if you prefer managed cloud over shared hosting.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need faster shared hosting with developer tools and responsive support, A2 Hosting is worth it. Turbo plans deliver strong performance for WordPress/WooCommerce without jumping to pricey managed hosts.
            </p>
            <p className="mt-3 text-slate-700">
              If budget is the only priority, Hostinger may be cheaper. If you need fully managed convenience, consider SiteGround or managed cloud providers. A2 balances speed and control well for most SMB sites.
            </p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: A strong performance-focused host with developer-friendly features and fair pricing.</p>
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
            <p>Choose A2 Hosting for speed-focused shared/VPS hosting with developer tools and supportive migrations.</p>
            <p>Consider Hostinger for lowest pricing, SiteGround for more managed support, or Cloudways for managed cloud flexibility.</p>
            <p>A2 scales with you from shared to VPS/dedicated, keeping performance and control in one vendor.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default A2HostingToolPage;
