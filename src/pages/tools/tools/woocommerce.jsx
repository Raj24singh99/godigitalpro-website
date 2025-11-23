import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ShoppingCart, Layers, CreditCard, Globe, BarChart3, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "WooCommerce";
const slug = "woocommerce";
const category = "WordPress Ecommerce";
const shortPitch =
  "WooCommerce is the WordPress-native ecommerce platform that lets marketers, agencies, and DTC brands own every part of their storefront, checkout, and data model without SaaS lock-in.";
const pricingSummary =
  "Core WooCommerce is free, but you should budget for quality hosting, premium themes, payments, AutomateWoo, Subscriptions, shipping, and any pro extensions you rely on.";
const officialUrl = "https://woocommerce.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/woocommerce.com",
  gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(139,92,246,0.25)]",
};

const alternatives = [
  { name: "Shopify", slug: "shopify" },
  { name: "BigCommerce", slug: "bigcommerce" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Wix", slug: "wix" },
  { name: "CartFlows", slug: "cartflows" },
];

const faqs = [
  {
    q: "Is WooCommerce free to use?",
    a: "Yes. The core plugin is free and open-source, so you only pay for WordPress hosting, premium themes, and any extensions you need. Woo Express bundles managed hosting plus official plugins for a flat fee.",
  },
  {
    q: "Do I need to know how to code to run WooCommerce?",
    a: "You can launch WooCommerce stores using block themes or builders like Elementor without touching code. Custom experiences, headless builds, or deep integrations usually require a developer or agency.",
  },
  {
    q: "What type of hosting works best for WooCommerce?",
    a: "Use performance-focused WordPress hosting (Kinsta, SiteGround, WP Engine, Cloudways) or Woo Express so checkout stays fast under load. Shared $5 plans struggle once you add products, payments, and traffic.",
  },
  {
    q: "Can WooCommerce handle subscriptions and memberships?",
    a: "Yes. Official Subscriptions, Memberships, and domain-specific extensions let you run recurring revenue, gated content, B2B pricing, or multi-currency offers directly inside WooCommerce.",
  },
  {
    q: "Is WooCommerce secure and PCI compliant?",
    a: "WooCommerce leverages WordPress best practices plus PCI-compliant payment gateways. Keep core, plugins, and PHP updated, use SSL, and rely on managed hosts or services like Cloudflare for extra security.",
  },
  {
    q: "How does WooCommerce compare to Shopify?",
    a: "WooCommerce gives you total control, owns your data, and can cost less if you already invest in WordPress. Shopify wins on speed to launch, native POS, and hosted reliability. We break it down in our comparison below.",
  },
  {
    q: "Which payment gateways work with WooCommerce?",
    a: "WooCommerce Payments plus Stripe, PayPal, Razorpay, Paytm, Authorize.net, and hundreds more are available. You can mix gateways, add BNPL providers, and set country-specific options.",
  },
  {
    q: "Does WooCommerce integrate with marketing stacks?",
    a: "Yes. Plugins and APIs connect WooCommerce to HubSpot, Klaviyo, Mailchimp, GA4, Meta, TikTok, Zapier, Make, and custom data lakes so orders sync to automation and reporting.",
  },
];

function WooCommerceToolPage() {
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
        "WooCommerce powers customizable WordPress stores, funnels, and subscription programs. Agencies pick it when they want to own checkout UX, data, SEO, and infrastructure instead of renting a SaaS storefront.",
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
      icon: <Layers className="h-5 w-5 text-purple-500" />,
      title: "Ownable WordPress storefront",
      body: "WooCommerce runs inside WordPress so you control hosting, SEO structure, themes, and every template. No SaaS lock-in or per-transaction UI limits.",
    },
    {
      icon: <ShoppingCart className="h-5 w-5 text-fuchsia-500" />,
      title: "Flexible catalog & checkout flows",
      body: "Support physical, digital, services, bundles, custom fields, and multi-step checkouts. Pair CartFlows or custom hooks to craft upsells that match your funnel.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Massive extension ecosystem",
      body: "Over 800 official extensions plus thousands of community plugins cover shipping, B2B pricing, marketplaces, tax, loyalty, point-of-sale, and marketing automation.",
    },
    {
      icon: <CreditCard className="h-5 w-5 text-emerald-500" />,
      title: "Payments, subscriptions, memberships",
      body: "WooCommerce Payments, Subscriptions, and Memberships unlock recurring revenue, installments, and gated content while keeping billing data synced to CRM.",
    },
    {
      icon: <Globe className="h-5 w-5 text-indigo-500" />,
      title: "Headless & API friendly",
      body: "REST, GraphQL, and Store API endpoints let you go headless with Next.js or build mobile apps. Data portability is built-in for bespoke experiences.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Analytics + automation ready",
      body: "AutomateWoo, Klaviyo, HubSpot, and GA4 integrations send carts, refunds, and LTV to your marketing stack so you can trigger flows and attribute revenue.",
    },
  ];

  const pricingTable = [
    {
      plan: "Core plugin + quality hosting",
      best: "WordPress site owners and agencies launching flexible stores",
      limits: "Unlimited products, coupons, tax & shipping rules; performance depends on host",
      price: "$0 plugin + $15–$40/mo hosting",
    },
    {
      plan: "Woo Express Essential",
      best: "Managed WordPress commerce for growing catalogs",
      limits: "Hosted WP, CDN, backups, email, essential extensions, support",
      price: "$25/mo introductory (renews higher)",
    },
    {
      plan: "Woo Express Performance",
      best: "Scaling stores needing higher bandwidth and priority support",
      limits: "High-performance hosting, 500 GB bandwidth, staging, developer tools",
      price: "$45/mo introductory (renews higher)",
    },
    {
      plan: "Key paid extensions",
      best: "Subscriptions, memberships, AutomateWoo, advanced shipping",
      limits: "Each extension licensed annually; bundles available",
      price: "$19–$79/mo equivalent (annual billing)",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on WooCommerce review covering pricing, hosting requirements, best extensions, pros & cons, alternatives, and how WooCommerce stacks up to Shopify and BigCommerce."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-200 blur-3xl" />
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
                  WooCommerce gives you the flexibility to own checkout UX, run niche catalogs, or build membership programs on top of WordPress without sacrificing SEO, content, or integrations.
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
              WooCommerce is a {category.toLowerCase()} platform built on top of WordPress. It turns any WordPress install into an ecommerce engine with product management, checkout, payments, shipping, and automation hooks.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies choose WooCommerce when they want to own their data model, run storefronts alongside content hubs, or craft funnels without the limits that come with hosted SaaS competitors.
            </p>
            <p className="mt-3 text-slate-700">
              The plugin is free and open-source. You decide the hosting stack, caching, CDN, security, and the exact combination of extensions that power your store.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">WooCommerce fits teams that want more control than SaaS storefronts provide.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies building ecommerce plus content marketing inside one WordPress install.",
                "DTC brands needing custom checkout, upsell flows, or bundles tied to funnels.",
                "Publishers adding commerce, memberships, or paid communities to their sites.",
                "B2B companies running account pricing, quotes, or punchout workflows.",
                "Course creators or service businesses selling digital downloads and retainers.",
                "International stores requiring multi-currency, translations, or localized payments.",
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
            <p className="mt-3 text-slate-700">WooCommerce is flexible by design. These are the features marketers and operators rely on the most.</p>
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
                  {toolName} itself is free, but total cost depends on your hosting tier, premium extensions, support, and payment fees. Woo Express bundles managed hosting plus key plugins so you can predict spend.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Woo Express or quality managed WordPress hosting, then add paid extensions only when the roadmap demands it.</p>
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
            <p className="mt-3 text-slate-700">
              You decide when to layer on paid features like Subscriptions, AutomateWoo, or managed shipping. That flexibility is why WooCommerce scales from side hustles to multi-store enterprises.
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
                  <li>Own your storefront, database, and SEO—no SaaS lock-in.</li>
                  <li>Massive ecosystem of plugins, themes, and agencies.</li>
                  <li>Integrates nicely with WordPress content and funnels.</li>
                  <li>Supports physical, digital, subscriptions, memberships, and B2B.</li>
                  <li>Headless/API support for custom apps or decoupled frontends.</li>
                  <li>Woo Express reduces maintenance for teams without DevOps.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>You manage hosting, caching, and security unless you pick Woo Express.</li>
                  <li>Extensions add up; budgeting across licenses is required.</li>
                  <li>Performance tuning (object cache, CDN) matters as traffic scales.</li>
                  <li>More technical onboarding than Shopify or Squarespace.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              WooCommerce shines when you want total control. If you prefer fully hosted setups, lighter site builders, or checkout-first tools, these platforms are worth reviewing.
            </p>
            <p className="mt-2 text-slate-700">Each option below links to a detailed tool review so you can compare stacks quickly.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">The most common comparisons are against Shopify, BigCommerce, and Wix. Dive deeper with our dedicated comparison guides.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Shopify vs BigCommerce</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/woocommerce-vs-shopify-vs-bigcommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Shopify wins on speed to launch and POS, BigCommerce excels with B2B catalogs and multi-store APIs, and WooCommerce shines when you want to own code, data, and WordPress-powered content. Our comparison explains when to pick each platform.
              </p>
              <p className="mt-2 text-slate-900">Choose WooCommerce if you need custom checkout logic, headless flexibility, or to tie ecommerce directly into your existing WordPress build.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Shopify vs Wix</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/woocommerce-vs-shopify-vs-wix">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Wix Commerce is the fastest visual builder for micro stores, Shopify is the polished hosted option with a huge app store, and WooCommerce offers the most flexibility if you already run WordPress.
              </p>
              <p className="mt-2 text-slate-900">If you value speed and simplicity, start on Wix or Shopify; if you want long-term control, WooCommerce will hold up as you scale.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you already invest in WordPress content, SEO, or custom development, WooCommerce is usually a smart bet. It keeps storefront and marketing teams in the same CMS so personalization, CRO, and editorial work stay in sync.
            </p>
            <p className="mt-3 text-slate-700">
              It does demand better hosting, monitoring, and occasional engineering help. Teams that want to “set and forget” ecommerce may prefer Shopify. But if you crave flexibility and want to own your roadmap, WooCommerce is hard to beat.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> WooCommerce is the right call for marketers and agencies prioritizing control, extensibility, and WordPress alignment over pure convenience.
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
            <p>Choose WooCommerce if you want enterprise-level control with open-source flexibility and already have WordPress talent available.</p>
            <p>Consider Shopify or BigCommerce if your team prioritizes packaged hosting or wants native POS/multi-channel out of the box.</p>
            <p>WooCommerce integrates with every marketing automation platform we cover, so it plays nicely in a modern acquisition or retention stack.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default WooCommerceToolPage;
