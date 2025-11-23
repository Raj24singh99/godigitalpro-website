import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Crown, ArrowLeft, ChevronDown, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "WP Rocket";
const slug = "wp-rocket";
const category = "WordPress Performance";
const shortPitch =
  "WP Rocket is the premium caching plugin trusted by WordPress publishers, agencies, and ecommerce stores to deliver sub-three-second load times without complex dev work.";
const pricingSummary = "Licenses start at $59/year for one site, $119/year for three, and $299/year for unlimited sites with one-click renewals.";
const officialUrl = "https://wp-rocket.me/";
const ratingValue = 4.8;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wp-rocket.me",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.20)]",
};

const alternatives = [
  { name: "Perfmatters", slug: "perfmatters", isComparison: true },
  { name: "SiteGround", slug: "siteground", isComparison: true },
  { name: "Cloudways", slug: "cloudways", isComparison: true },
  { name: "Kinsta", slug: "kinsta" },
  { name: "Rocket.net", slug: "rocket-net" },
];

const faqs = [
  { q: "Is WP Rocket free?", a: "No. WP Rocket is a premium plugin. However, it includes automatic updates, support, and access to all features without upsells or add-on fees." },
  {
    q: "Does WP Rocket work with any host?",
    a: "Yes. WP Rocket works with most WordPress hosts including SiteGround, Kinsta, Cloudways, WP Engine, and standard shared hosting. Some managed hosts already bundle caching logic, but WP Rocket still improves file optimization, preloading, and CDN integration.",
  },
  {
    q: "What features make WP Rocket different?",
    a: "It activates caching immediately, enables file optimization (CSS/JS minify + defer), lazy-load images, critical CSS, database cleanup, CDN rewrite, DNS prefetch, and WooCommerce optimizations with toggle-based controls.",
  },
  { q: "Will WP Rocket break my theme?", a: "The defaults are safe, and there’s a rollback plus safe mode options. Advanced features like delay JS or CSS optimization offer exclusions so builders like Elementor, Divi, or Gutenberg keep rendering perfectly." },
  {
    q: "Does WP Rocket help Core Web Vitals?",
    a: "Yes. Removing render-blocking assets, delaying scripts, enabling preloading, and optimizing fonts dramatically improve LCP and CLS. Pair WP Rocket with a CDN like Cloudflare for best scores.",
  },
  { q: "Can I use WP Rocket on WooCommerce?", a: "Yes. WP Rocket automatically excludes cart, checkout, and account pages from caching, ensuring dynamic content works while catalog pages stay fast." },
  {
    q: "Does WP Rocket integrate with CDNs?",
    a: "You can connect Cloudflare, Bunny, RocketCDN, or custom CDNs. WP Rocket rewrites URLs, handles cache purges, and preloads so assets serve from the closest POP.",
  },
  { q: "Is there a refund policy?", a: "Yes. WP Rocket offers a 14-day money-back guarantee, so you can test performance improvements risk-free." },
];

function WPRocketToolPage() {
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
        "WP Rocket remains the fastest way to speed up WordPress without touching code. It bundles caching, file optimization, image lazy load, database cleanup, and CDN integrations that agencies rely on to pass Core Web Vitals for clients.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Instant caching + preload",
      body: "Activate the plugin and caching starts immediately. Sitemap-based preloading rebuilds cache anytime you publish, guaranteeing fast first visits.",
    },
    {
      icon: <Layers3 className="h-5 w-5 text-emerald-500" />,
      title: "File optimization & delay JS",
      body: "Minify, combine, and defer CSS/JS. Delay JavaScript execution until user interaction to eliminate render-blockers and improve Core Web Vitals.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-sky-500" />,
      title: "Media optimization & lazy load",
      body: "Lazy-load images/iframes, replace YouTube embeds with preview thumbnails, and enable WebP compatibility for leaner pages.",
    },
    {
      icon: <Plug className="h-5 w-5 text-rose-500" />,
      title: "CDN & Cloudflare integration",
      body: "Rewrite URLs for RocketCDN or any CDN. Built-in Cloudflare add-on clears edges automatically and handles optimal cache rules.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-teal-500" />,
      title: "WooCommerce-safe caching",
      body: "Automatically excludes carts, checkout, and account pages while caching catalog and blog content to keep conversions high.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-indigo-500" />,
      title: "Database cleanup & heartbeat control",
      body: "Schedule database cleanups, remove expired transients, and tame WordPress Heartbeat API to save server resources.",
    },
  ];

  const pricingTable = [
    { plan: "Single", best: "Bloggers & small sites", limits: "1 website license, all features, 1 year support", price: "$59/year" },
    { plan: "Plus", best: "Freelancers & small agencies", limits: "3 websites, all features, 1 year support", price: "$119/year" },
    { plan: "Infinite", best: "Agencies & product bundles", limits: "Unlimited sites, priority support, white-label ready", price: "$299/year" },
  ];

  const pros = [
    "Fastest setup—caching works instantly with safe defaults.",
    "Improves Core Web Vitals via delay JS, preloading, and CSS optimization.",
    "Image lazy load, WebP compatibility, and video placeholders built in.",
    "Cloudflare, custom CDN, and RocketCDN integrations are native.",
    "WooCommerce and multilingual sites handled automatically.",
    "Top-tier support team with deep WordPress performance knowledge.",
  ];

  const cons = [
    "No lifetime license; renew annually for updates/support.",
    "No free tier—requires purchase to test beyond refund window.",
    "Critical CSS generation relies on their API; occasional queue delays.",
    "Advanced exclusions still require performance knowledge for complex setups.",
  ];

  const useCases = [
    "Bloggers improving Core Web Vitals for SEO rankings.",
    "Agencies optimizing dozens of client sites quickly.",
    "WooCommerce stores needing fast catalog pages and safe cart behavior.",
    "Publishers combining WP Rocket with Cloudflare or BunnyCDN.",
    "Course creators hosting on shared or managed WordPress needing speed boosts.",
    "Marketing teams preparing for paid traffic or product launches.",
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Deep WP Rocket review for 2025 covering pricing, caching features, pros & cons, performance tips, and how it compares to Perfmatters, SiteGround Optimizer, and Cloudways."
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-10 top-12 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  WP Rocket compresses caching, file optimization, and CDN best practices into one plugin—no developer or .htaccess edits required. It’s our go-to for WordPress speed projects.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Any WordPress site that needs speed without engineering effort benefits from WP Rocket.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">These switches give WP Rocket the edge over free caching plugins.</p>
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
                  Pricing is simple: yearly licenses by number of sites. You get all features, updates, and support regardless of tier. Renewals receive a discount if you keep auto-renew enabled.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Buy Single for your own site, Plus for 2–3 client projects, Infinite for agency volume.</p>
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
            <p className="mt-3 text-slate-700">
              WP Rocket also sells RocketCDN and Imagify add-ons. They’re optional but handy when you want a one-vendor experience. Agencies often pair WP Rocket with BunnyCDN or Cloudflare depending on geography.
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
            <p className="mt-3 text-slate-700">
              Depending on hosting stack or customization needs, you might consider these performance tools. Each link opens an in-depth GoDigitalPro review.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Performance-focused host or tool."}</p>
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
            <p className="text-slate-700">Compare WP Rocket with other site speed stacks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Perfmatters vs Cloudways</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-rocket-vs-perfmatters-vs-cloudways">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Perfmatters focuses on script management and hosting-agnostic performance tweaks, while Cloudways pairs managed hosting with its own caching stack. See when WP Rocket should be layered on top or swapped for
                host-level solutions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Perfmatters vs SiteGround Optimizer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wp-rocket-vs-perfmatters-vs-siteground">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SiteGround Optimizer is free for SiteGround customers, but WP Rocket and Perfmatters provide deeper control and compatibility. The comparison breaks down features, pricing, and when to stack plugins versus
                sticking with host tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run WordPress, WP Rocket is one of the quickest wins for speed. It removes plugin bloat, handles caching plus file optimization, and plays nicely with most themes and hosts. Passing Core Web Vitals can
              unlock SEO lifts and paid media ROI, often paying for WP Rocket immediately.
            </p>
            <p className="mt-3 text-slate-700">
              If your managed host already includes aggressive caching (e.g., Kinsta, Cloudways) you may rely on their stack for base caching and use Perfmatters for script control. But WP Rocket still adds value via delay
              JS, image lazy load, and database cleanup.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> WP Rocket is worth it for most sites that want fast results without touching .htaccess or hiring a performance engineer.
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
            <p>Choose WP Rocket if you want an all-in-one WordPress speed boost that your team can deploy in minutes. Stack it with a CDN and image optimization to unlock its full potential.</p>
            <p>Consider Perfmatters for granular script control, or rely on SiteGround/Cloudways caching if you prefer host-managed speed. Many agencies run WP Rocket plus Perfmatters together for peak performance.</p>
            <p>WP Rocket fits perfectly in modern marketing stacks because faster pages raise conversion rates, SEO rankings, and ad quality scores.</p>
            <p className="font-semibold text-slate-900">
              Ready to speed up your site?{" "}
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

export default WPRocketToolPage;

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              WP Rocket is a {category.toLowerCase()} plugin designed to make performance optimization simple. Toggle caching, file optimization, preload, lazy load, and database cleanup features without touching code, and
              Core Web Vitals improve almost immediately.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and freelancers love it because it works on nearly every theme, page builder, or hosting stack—Elementor, Divi, WooCommerce, multilingual sites, you name it. Instead of configuring multiple plugins,
              WP Rocket bundles the essentials.
            </p>
            <p className="mt-3 text-slate-700">Pair WP Rocket with a CDN and image optimization for best results. Its UX keeps speed projects repeatable even for junior team members.</p>
          </div>
        </section>
