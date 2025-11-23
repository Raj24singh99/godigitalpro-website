import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Crown, ArrowLeft, ChevronDown, ServerCog, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "WP Engine";
const slug = "wp-engine";
const category = "Managed WordPress Hosting";
const shortPitch =
  "WP Engine is a premium managed WordPress platform combining fast EverCache architecture, enterprise security, headless capabilities, and white-glove support for agencies and growth teams.";
const pricingSummary = "Plans start around $30/month (annual) for a single install. Professional, Growth, Scale, and Custom tiers add more sites, visits, and SLAs with 24/7 phone support.";
const officialUrl = "https://wpengine.com/";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wpengine.com",
  gradient: "from-slate-900 via-sky-900 to-emerald-700",
  glow: "shadow-[0_20px_80px_rgba(15,118,110,0.25)]",
};

const alternatives = [
  { name: "Kinsta", slug: "kinsta", isComparison: true },
  { name: "Cloudways", slug: "cloudways", isComparison: true },
  { name: "Rocket.net", slug: "rocket-net", isComparison: true },
  { name: "SiteGround", slug: "siteground" },
  { name: "WP Rocket", slug: "wp-rocket" },
];

const faqs = [
  { q: "Is WP Engine worth the premium price?", a: "Yes if uptime, headless features, and expert support matter. WP Engine bundles EverCache, CDN, security, backups, and 24/7 engineers so you avoid DevOps hires." },
  {
    q: "Does WP Engine include email hosting?",
    a: "No. Like most managed WordPress hosts, it focuses on performance. Pair it with Google Workspace or Microsoft 365 for email.",
  },
  { q: "Can WP Engine handle WooCommerce?", a: "Absolutely. Ecommerce-optimized caching, CDN, and search partners keep stores fast. Checkout/cart pages are excluded from cache automatically." },
  { q: "Does WP Engine support headless WordPress?", a: "Yes. Atlas provides WPGraphQL, Node.js hosting, and CDN so you can power React/Next.js frontends while keeping WordPress as a CMS." },
  {
    q: "What about security and updates?",
    a: "WP Engine manages firewalls, DDoS, malware scanning, daily backups, and keeps WordPress core/plugins updated by testing in staging before pushing live.",
  },
  { q: "Can I use WP Rocket or Perfmatters on WP Engine?", a: "Yes for front-end optimization. EverCache already handles server caching, but WP Rocket/Perfmatters can delay JS, optimize CSS, and manage scripts." },
  { q: "How scalable is WP Engine?", a: "Growth and Scale plans support millions of visits. Burst traffic is absorbed via autoscaling, and Custom plans add dedicated account teams plus SLAs." },
  { q: "Do they offer migrations?", a: "Yes. WP Engine Migration Plugin handles most moves. Launch engineers assist for enterprise migrations and complex WooCommerce/headless builds." },
];

function WPEngineToolPage() {
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
        "WP Engine delivers a secure, performant WordPress hosting platform with EverCache, Atlas headless support, automated updates, and 24/7 engineers. Agencies rely on it for mission-critical marketing, ecommerce, and content hubs.",
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
      icon: <Sparkles className="h-5 w-5 text-emerald-400" />,
      title: "EverCache + CDN",
      body: "Custom caching layers, Cloudflare Enterprise CDN, and advanced routing keep global visitors under three seconds without plugin tuning.",
    },
    {
      icon: <Layers3 className="h-5 w-5 text-sky-400" />,
      title: "Dev/stage/prod workflows",
      body: "Each install includes three environments, Git integration, SSH access, and one-click cloning so releases stay safe.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-400" />,
      title: "Smart updates and monitoring",
      body: "Automatic core/plugin updates tested in staging, performance dashboards, and alerts keep sites patched without downtime.",
    },
    {
      icon: <Plug className="h-5 w-5 text-pink-400" />,
      title: "Headless Atlas platform",
      body: "Build React/Next.js frontends with WPGraphQL and Node hosting while keeping WordPress editorial workflows untouched.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Enterprise security",
      body: "Managed WAF, DDoS mitigation, malware scanning, free SSL, and optional Global Edge Security keep compliance teams happy.",
    },
    {
      icon: <ServerCog className="h-5 w-5 text-amber-400" />,
      title: "White-glove support",
      body: "24/7 chat & phone support from WP specialists plus launch engineers, premium success managers, and agency partner programs.",
    },
  ];

  const pricingTable = [
    { plan: "Startup", best: "Solo sites & creators", limits: "1 site, 25k visits, 50GB bandwidth, dev/stage/prod", price: "~$30/month (annual)" },
    { plan: "Professional", best: "Growing brands", limits: "3 sites, 75k visits, more storage, phone support", price: "~$62/month (annual)" },
    { plan: "Growth", best: "Agencies & WooCommerce", limits: "10 sites, 125k visits, enhanced support options", price: "~$115/month (annual)" },
    { plan: "Scale / Custom", best: "Enterprises", limits: "30+ sites, millions of visits, SLAs, Atlas/headless bundles", price: "Custom" },
  ];

  const pros = [
    "EverCache + Cloudflare CDN deliver consistent Core Web Vitals globally.",
    "Dev/stage/prod environments with Git and backups built in.",
    "Atlas headless platform, WooCommerce optimizations, and agency tooling.",
    "Top-tier security, auto updates, and managed firewalls.",
    "24/7 phone/chat support from actual WordPress engineers.",
    "Predictable scaling and partner programs for agencies.",
  ];

  const cons = [
    "Higher price than shared/VPS hosts.",
    "No email hosting included.",
    "Plugin restrictions (caching/backup duplicates not allowed).",
    "Visit/bandwidth caps mean you must monitor spikes.",
  ];

  const useCases = [
    "Digital agencies hosting dozens of client builds.",
    "WooCommerce stores needing secure, fast checkout experiences.",
    "Media sites and blogs targeting global audiences.",
    "Headless WordPress projects blending content + React frontends.",
    "Brands chasing Core Web Vitals improvements without dev ops hires.",
    "Enterprises requiring compliance, SLAs, and proactive security.",
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Independent WP Engine review covering pricing, EverCache features, Atlas headless capabilities, pros & cons, alternatives like Kinsta and Cloudways, and best-fit scenarios for 2025."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 text-white md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 ring-1 ring-white/20">
                <Crown className="h-4 w-4 text-emerald-300" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">{toolName} Review (2025): Features, Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-white/90">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/30">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/30">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-white/80">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-white text-slate-900 ring-2 ring-white hover:bg-slate-100" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-10 top-12 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/40">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  WP Engine’s managed platform keeps WordPress blazing fast and secure with EverCache, Cloudflare Enterprise, and responsive engineers—perfect for agencies and brands that can’t risk downtime.
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
              WP Engine is a {category.toLowerCase()} platform that handles caching, CDN, security, backups, and updates so marketers and product teams can ship WordPress sites faster. Dev/stage/prod environments, Git/SSH
              access, and Atlas headless support make it feel more like a PaaS than a traditional host.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use WP Engine to standardize performance workflows. Ecommerce and media teams rely on it for uptime, Core Web Vitals, and compliance. The result: faster sites, better SEO, and fewer late-night
              firefights.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">WP Engine shines when performance and support are non-negotiable.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">These features help WP Engine outperform commodity hosts.</p>
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
                  Pricing is visit-based. Startup fits most single-site brands, Professional/Growth cover multi-site agencies, and Scale/Custom tiers unlock higher bandwidth, SLAs, and dedicated account teams. Atlas bundles
                  price separately for headless builds.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Startup, upgrade when you outgrow visits/storage, move to Scale for multi-brand portfolios.</p>
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
                    <tr key={row.plan} className={idx % 2 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Renew early to lock in discounts. Factor in overages if you run spikes or heavy WooCommerce/affiliate campaigns.</p>
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
                  {pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare WP Engine to these hosting or optimization platforms depending on budget and control requirements.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Performance-focused alternative."}</p>
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
            <p className="text-slate-700">Dive deeper into how WP Engine stacks against other managed hosts.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kinsta vs Rocket.net</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/kinsta-vs-wp-engine-vs-rocket-net">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kinsta, WP Engine, and Rocket.net all promise premium WordPress performance. This comparison covers pricing, CDN locations, support, and when to favor each platform for WooCommerce or content-heavy sites.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Cloudways vs SiteGround</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-engine-vs-cloudways-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Cloudways and SiteGround offer flexible pricing and more DIY control. This comparison shows when to choose WP Engine’s white-glove platform versus more customizable (but hands-on) hosts.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you rely on WordPress to drive revenue, WP Engine pays for itself via uptime, performance, and support. The time saved on server management and the SEO lift from faster pages typically outweigh the premium
              price.
            </p>
            <p className="mt-3 text-slate-700">
              Choose Cloudways or SiteGround if you want cheaper hosting and don’t mind self-managing caching. Choose WP Engine when you prefer enterprise-grade guardrails, automation, and a team of WP specialists on
              speed dial.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> WP Engine is worth it for agencies, brands, and ecommerce teams who treat WordPress like mission-critical infrastructure.
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
            <p>WP Engine checks the boxes for performance, security, compliance, and headless flexibility. It’s our go-to when a WordPress site directly impacts revenue or brand reputation.</p>
            <p>Consider Kinsta or Rocket.net if you want similar managed experiences, or Cloudways/SiteGround if budget trumps white-glove support. You can still combine WP Engine with WP Rocket/Perfmatters for extra front-end polish.</p>
            <p>Fast, reliable infrastructure is a marketing advantage—WP Engine gives you that foundation.</p>
            <p className="font-semibold text-slate-900">
              Want to explore it?{" "}
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default WPEngineToolPage;
