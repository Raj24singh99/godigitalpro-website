import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Crown, ArrowLeft, ChevronDown, ShoppingBag, Gauge, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Shopify";
const slug = "shopify";
const category = "Ecommerce platform";
const shortPitch =
  "Shopify is the leading hosted commerce platform for launching, scaling, and running DTC stores with unbeatable checkout, apps, and fulfillment tooling.";
const pricingSummary =
  "14-day free trial. Paid plans start around $39/month (Basic), $105/month (Shopify), and $399/month (Advanced), with Shopify Plus for high-volume brands.";
const officialUrl = "https://www.shopify.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/shopify.com",
  gradient: "from-emerald-500 via-green-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.25)]",
};

const alternatives = [
  { name: "BigCommerce", slug: "bigcommerce" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Wix", slug: "wix" },
];

const faqs = [
  { q: "Is Shopify good for beginners?", a: "Yes. Shopify’s templates, onboarding wizard, and app store make it the easiest way for beginners to launch, sell, and manage a store without touching servers or code." },
  { q: "Does Shopify handle international selling?", a: "Shopify Markets, multicurrency, and multilingual checkout help brands sell globally. You can customize domains, duties, and pricing per region for cleaner cross-border conversion." },
  { q: "Can I use my own payment gateway?", a: "Yes. Shopify Payments is default, but you can use PayPal, Stripe, and other gateways. Third-party gateways incur a small transaction fee unless you’re on Shopify Payments or Plus." },
  { q: "Is Shopify SEO-friendly?", a: "Shopify includes fast hosting, structured data, meta controls, and clean URLs. Paired with apps like Yoast or native features, stores can rank competitively without custom dev." },
  { q: "How does Shopify compare to WooCommerce?", a: "Shopify is faster to launch and fully hosted. WooCommerce offers more control if you want to self-host WordPress. Shopify wins on checkout quality, POS, and uptime; Woo wins on flexibility." },
  { q: "Does Shopify support B2B and wholesale?", a: "Shopify has B2B features on Plus—company profiles, price lists, and purchase lists. Apps also extend B2B on lower plans, but Plus is best for wholesale complexity." },
  { q: "Can I run subscriptions on Shopify?", a: "Yes. Shopify Payments supports subscriptions through compatible apps such as Recharge or Bold Subscriptions. Checkout Extensibility keeps the experience on-brand for recurring orders." },
  { q: "Is Shopify secure and PCI compliant?", a: "Shopify is Level 1 PCI DSS compliant with SSL, fraud analysis, and hosted checkout. Security patches, infrastructure, and compliance are managed by Shopify so you don’t maintain servers." },
];

function ShopifyToolPage() {
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
        "Shopify is the fastest way to launch and scale a modern ecommerce brand. With best-in-class checkout, thousands of apps, robust POS, and built-in hosting, it reduces operational drag for marketers and founders alike.",
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
      icon: <ShoppingBag className="h-5 w-5 text-emerald-500" />,
      title: "Elite checkout & conversions",
      body: "Shopify’s optimized checkout, Shop Pay, accelerated wallets, and native upsells drive industry-leading conversion rates without custom engineering.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Apps for every revenue lever",
      body: "Thousands of vetted apps cover subscriptions, loyalty, reviews, A/B testing, shipping, and bundling so marketers can move fast without rebuilding core flows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "POS and omnichannel built in",
      body: "Unified inventory, POS, and sales channels sync online and offline. Sell across Instagram, Amazon, TikTok, and retail with one backend and unified reporting.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Hosted, secure, and PCI compliant",
      body: "Shopify manages hosting, patches, SSL, and PCI compliance so teams focus on merchandising and growth instead of infrastructure and security chores.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-rose-500" />,
      title: "Scales from starter to Plus",
      body: "From Basic to Plus, Shopify scales traffic spikes, flash sales, and expansion. Scripts, Functions, and Checkout Extensibility keep performance tight.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-blue-500" />,
      title: "Global-ready storefronts",
      body: "Shopify Markets, localized domains, duties, and multilingual support help teams sell worldwide without maintaining separate stacks per region.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Shopify review for 2025 covering pricing, features, pros and cons, alternatives, FAQs, and when Shopify is the right platform for your ecommerce roadmap."
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
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
                <a className="btn btn-primary bg-emerald-600 text-white ring-2 ring-emerald-600 hover:bg-emerald-700" href={officialUrl}>
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
                  Shopify streamlines ecommerce with dependable hosting, high-converting checkout, and an app ecosystem that lets growth teams add functionality without slowing deployments.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Why marketers like {toolName}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Shopify’s plans scale with team size, channels, and customization needs. Most brands start on Basic or Shopify; Shopify Plus unlocks checkout scripts and deeper B2B controls.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-white text-slate-800">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">New stores and side projects</td>
                    <td className="px-4 py-3">Online store, basic reports, up to 2 staff, Shopify Payments</td>
                    <td className="px-4 py-3">$39/mo or $29/mo annually</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shopify</td>
                    <td className="px-4 py-3">Growing brands and omnichannel</td>
                    <td className="px-4 py-3">Professional reports, 5 staff, lower payment fees, POS Pro add-ons</td>
                    <td className="px-4 py-3">$105/mo or $79/mo annually</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Scaling stores with analytics needs</td>
                    <td className="px-4 py-3">Advanced reports, duties/fees, 15 staff, best payment rates</td>
                    <td className="px-4 py-3">$399/mo or $299/mo annually</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shopify Plus</td>
                    <td className="px-4 py-3">High-volume & enterprise</td>
                    <td className="px-4 py-3">Checkout Extensibility, Scripts/Functions, B2B suite, white-glove support</td>
                    <td className="px-4 py-3">Starts around $2,300/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Choose Basic to launch quickly. Upgrade to Shopify for better rates and reporting. Advanced and Plus deliver analytics, customization, and B2B/wholesale features for teams forecasting rapid growth.
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
                  <li>Best-in-class hosted checkout with Shop Pay and accelerated wallets.</li>
                  <li>Largest commerce app store covering every growth lever.</li>
                  <li>Reliable hosting, PCI compliance, and 24/7 support managed for you.</li>
                  <li>POS, channels, and fulfillment integrations keep inventory unified.</li>
                  <li>Scales from small brands to Plus without re-platforming.</li>
                  <li>Checkout Extensibility and Functions add flexibility without hurting performance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Transaction fees apply when not using Shopify Payments on lower plans.</li>
                  <li>Deeper checkout customization often requires Plus or paid apps.</li>
                  <li>App fees can stack up; budgeting matters as you scale features.</li>
                  <li>Less server-level control than WooCommerce or custom headless builds.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              While Shopify leads in hosted ecommerce, some teams opt for other platforms based on ownership preferences, catalog complexity, or budget constraints. These options are commonly evaluated.
            </p>
            <p className="mt-2 text-slate-700">All provide core storefronts and payments but vary in customization depth, app ecosystems, and B2B or omnichannel capabilities.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Shopify compares to two of its most-requested alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WooCommerce</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/woocommerce-vs-shopify-vs-bigcommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WooCommerce gives total ownership under WordPress, ideal when you want to self-host and customize everything. Shopify is faster to launch, handles hosting and security, and offers a tighter checkout experience with Shop Pay.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Shopify for speed, stability, and omnichannel; choose WooCommerce when control, custom code, and open-source flexibility matter more than convenience.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Squarespace &amp; Wix</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/squarespace-vs-wix-vs-shopify">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Squarespace and Wix are design-led site builders with simple commerce. Shopify focuses solely on ecommerce scale with better checkout, inventory, and app depth for serious sellers.
              </p>
              <p className="mt-2 text-slate-900">
                Pick Shopify for heavy commerce, channels, and POS; pick Squarespace or Wix if you need a simple content-first site with occasional sales.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers and founders who want to launch and scale without managing infrastructure, Shopify is the clear pick. Checkout performance, apps, fulfillment partners, and POS make it a durable core for DTC and omnichannel brands.
            </p>
            <p className="mt-3 text-slate-700">
              Teams that demand full server control or unique checkout flows may prefer WooCommerce or a headless build, but most stores gain speed and reliability by running on Shopify’s managed platform.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Shopify is worth it for fast launches, reliable scale, and high-converting checkout—especially when marketing teams need to experiment quickly.
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
              Choose Shopify if you want a dependable, conversion-focused ecommerce platform with minimal maintenance overhead. The app ecosystem, POS, and global selling tools keep brands moving quickly without sacrificing capability.
            </p>
            <p>
              Consider alternatives like WooCommerce if you prioritize full code ownership, or BigCommerce if you want SaaS with strong B2B features. Squarespace and Wix stay compelling for simpler sites that only need light commerce.
            </p>
            <p>Shopify fits neatly into modern marketing stacks, connecting email, analytics, automation, and fulfillment so campaigns tie directly to revenue.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your store, you can explore it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default ShopifyToolPage;
