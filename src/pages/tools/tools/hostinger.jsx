import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hostinger";
const slug = "hostinger";
const category = "Web Hosting";
const shortPitch =
  "Hostinger is a value-focused hosting provider offering fast shared, VPS, and cloud hosting with managed WordPress features at aggressive pricing.";
const pricingSummary = "Promo pricing starts around $2–$3/month for shared hosting with SSL; renewals increase. Cloud and VPS plans scale for higher performance and isolation.";
const officialUrl = "https://www.hostinger.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hostinger.com",
  gradient: "from-purple-500 via-violet-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(124,58,237,0.24)]",
};

const alternatives = [
  { name: "Namecheap", slug: "namecheap" },
  { name: "SiteGround", slug: "siteground" },
  { name: "Bluehost", slug: "bluehost" },
  { name: "Cloudways", slug: "cloudways" },
  { name: "Kinsta", slug: "kinsta" },
];

const faqs = [
  {
    q: "Is Hostinger good for WordPress?",
    a: "Yes. Hostinger offers LiteSpeed caching, staging, and easy installs that work well for WordPress sites on a budget.",
  },
  {
    q: "Does Hostinger include free SSL and email?",
    a: "Most plans include free SSL and email accounts, though renewals and certain TLDs may have additional costs.",
  },
  {
    q: "How fast is Hostinger?",
    a: "Hostinger performs well for the price thanks to LiteSpeed servers and caching. For heavier traffic, consider cloud or VPS plans.",
  },
  {
    q: "What about backups and security?",
    a: "Plans include weekly or daily backups depending on tier, plus malware scanning. Higher tiers offer better backup frequency.",
  },
  {
    q: "Is Hostinger reliable for e-commerce?",
    a: "For small to mid-sized stores, Hostinger’s performance-to-price is strong. For mission-critical stores, consider premium managed hosts like Kinsta or SiteGround.",
  },
  {
    q: "How does Hostinger compare to SiteGround or Bluehost?",
    a: "Hostinger usually wins on price and speed for shared hosting. SiteGround offers premium support/performance; Bluehost is beginner-friendly with upsells.",
  },
  {
    q: "What are Hostinger’s renewals like?",
    a: "Intro prices are low; renewals are higher. Review renewal rates and consider multi-year terms to lock savings.",
  },
  {
    q: "Does Hostinger have a control panel?",
    a: "Yes. Hostinger’s hPanel is modern and straightforward; it is not standard cPanel but covers common hosting tasks.",
  },
];

function HostingerToolPage() {
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
        "Hostinger delivers fast, affordable hosting with LiteSpeed, free SSL, and WordPress-friendly tooling. It’s great value for blogs, small businesses, and side projects, with cloud/VPS options for scaling. Intro pricing is low with higher renewals.",
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
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "LiteSpeed and caching",
      body: "LiteSpeed servers, caching, and CDN options deliver strong performance at budget pricing, especially for WordPress.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Easy setup and hPanel",
      body: "hPanel makes installs, DNS, email, and backups straightforward without needing cPanel experience.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and backups",
      body: "Free SSL, malware scanning, and weekly/daily backups depending on plan keep sites safer out of the box.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Managed WordPress features",
      body: "One-click installs, staging, automatic updates, and WordPress-specific caching help keep sites stable.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Scalable plans",
      body: "Upgrade from shared to cloud or VPS as traffic grows, keeping the same hosting provider through growth.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Affordability",
      body: "Intro pricing is among the lowest in the market, making it easy to launch new sites with respectable speed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Value-focused Hostinger review covering pricing, performance, features, pros & cons, alternatives, and whether Hostinger fits your 2025 hosting needs."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/35 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-500" />
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
                  Hostinger pairs budget pricing with fast LiteSpeed servers, making it easy to launch and grow sites without sacrificing performance.
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
              {toolName} is a {category.toLowerCase()} platform focused on high performance for the price. It offers shared, cloud, and VPS plans with WordPress-friendly features like LiteSpeed caching, staging, and automated updates.
            </p>
            <p className="mt-3 text-slate-700">
              SMBs and creators pick Hostinger to launch fast sites without premium costs. Cloud and VPS plans handle heavier traffic while keeping management simple.
            </p>
            <p className="mt-3 text-slate-700">
              The modern hPanel, bundled SSL, and backups reduce setup friction, though renewals are higher than intro prices.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Hostinger fits teams seeking fast, affordable hosting with room to grow.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers and creators needing low-cost, fast WordPress hosting.",
                "Small businesses launching brochure sites or simple stores.",
                "Agencies hosting multiple small client sites with staging.",
                "Startups validating projects before moving to premium managed hosts.",
                "Developers wanting VPS or cloud plans with LiteSpeed performance.",
                "Teams that prefer a clean, modern panel over classic cPanel clutter.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Hostinger focuses on performance, affordability, and ease of use.</p>
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
                  Hostinger’s introductory prices are low, with higher renewals. Shared plans suit new sites; cloud and VPS plans handle growth. All include SSL and backups (frequency varies by tier).
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose Premium/Business Shared to start. Move to Cloud/VPS when traffic or CPU needs rise.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Promo price (approx.)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Single/Premium Shared</td>
                    <td className="px-4 py-3">New blogs and simple sites</td>
                    <td className="px-4 py-3">Light resources; includes SSL, email</td>
                    <td className="px-4 py-3">$2–$3/month (promo)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Shared</td>
                    <td className="px-4 py-3">Growing sites and small stores</td>
                    <td className="px-4 py-3">More resources, daily backups, WooCommerce-ready</td>
                    <td className="px-4 py-3">$3–$5/month (promo)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud Hosting</td>
                    <td className="px-4 py-3">High-traffic sites</td>
                    <td className="px-4 py-3">Isolated resources, better performance</td>
                    <td className="px-4 py-3">$9–$30+/month (promo)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">VPS</td>
                    <td className="px-4 py-3">Developers needing control</td>
                    <td className="px-4 py-3">Root access, scalable resources</td>
                    <td className="px-4 py-3">$5–$30+/month (promo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Lock in multi-year terms for best pricing but plan for renewal rates. If you need premium support and performance out of the box, compare SiteGround or managed hosts like Kinsta.
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
                  <li>Strong performance for the price with LiteSpeed and caching.</li>
                  <li>Modern hPanel and easy WordPress installs/staging.</li>
                  <li>Free SSL and email on most plans.</li>
                  <li>Affordable entry-level pricing.</li>
                  <li>Upgradeable path to cloud and VPS without switching hosts.</li>
                  <li>Daily/weekly backups included depending on tier.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Renewal pricing is higher than intro offers.</li>
                  <li>hPanel differs from cPanel; some users prefer standard cPanel.</li>
                  <li>Support is good but not as premium as higher-priced managed hosts.</li>
                  <li>Shared plans have resource limits; heavy sites need cloud/VPS.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Hostinger focuses on value and speed. If you prefer premium support, standard cPanel, or managed WordPress, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All provide hosting; they differ on performance, support quality, and price.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug + alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two popular hosting options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Namecheap & GoDaddy</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/namecheap-vs-hostinger-vs-godaddy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Namecheap is great for domains and budget hosting; GoDaddy has broad add-ons. Hostinger generally delivers better speed for the price. Choose Hostinger for performance/value, Namecheap for domains/DNS, GoDaddy for one-stop convenience.
              </p>
              <p className="mt-2 text-slate-900">Performance-focused users usually favor Hostinger over budget shared plans from GoDaddy.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bluehost vs SiteGround</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/compare/hostinger-vs-bluehost-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bluehost is beginner-friendly with upsells; SiteGround offers premium support/performance; Hostinger targets speed-to-price. Pick Hostinger for value and LiteSpeed, Bluehost if you want a guided onboarding, SiteGround for higher-touch support.
              </p>
              <p className="mt-2 text-slate-900">For most budget-conscious users, Hostinger balances speed and cost best, with an upgrade path to cloud/VPS.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want fast hosting at a low entry price, {toolName} is worth it. LiteSpeed, SSL, and staging make launches easy, and upgrades cover growth without changing hosts.
            </p>
            <p className="mt-3 text-slate-700">
              If you prioritize premium support or enterprise SLAs, consider SiteGround, Kinsta, or Cloudways. Always plan for renewals when budgeting Hostinger’s long-term cost.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Hostinger is a leading value pick for WordPress and small business sites, provided you account for renewal pricing and resource needs as you scale.
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
              Choose {toolName} if you need a fast, affordable host with WordPress-friendly tooling and an upgrade path to cloud/VPS. It balances performance and price better than many entry-level hosts.
            </p>
            <p>
              Consider SiteGround or Kinsta if you want premium support, or Bluehost if you prefer beginner-focused onboarding. For advanced control, Cloudways or VPS hosting may fit better.
            </p>
            <p>Hostinger’s blend of LiteSpeed performance, SSL, backups, and simple management makes it a strong value pick for most new sites.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-purple-700 hover:text-purple-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default HostingerToolPage;
