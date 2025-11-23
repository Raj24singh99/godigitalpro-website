import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, ShoppingCart, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ThriveCart";
const slug = "thrivecart";
const category = "Checkout & Funnels";
const shortPitch = "ThriveCart is a hosted checkout and funnel platform built for digital products, subscriptions, and upsells without heavy development.";
const pricingSummary = "One-time/lifetime style pricing is common, giving you hosted carts, bumps, upsells, subscriptions, and native tax/affiliates without monthly bloat.";
const officialUrl = "https://thrivecart.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/thrivecart.com",
  gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "CartFlows", slug: "cartflows" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Shopify", slug: "shopify" },
  { name: "Paddle", slug: "paddle" },
  { name: "Kajabi", slug: "kajabi" },
];

const faqs = [
  { q: "Is ThriveCart a one-time purchase?", a: "ThriveCart often promotes lifetime one-time pricing instead of monthly fees, covering hosted checkout, bumps, upsells, and core features." },
  { q: "Is ThriveCart good for digital products?", a: "Yes. ThriveCart is popular with creators and infoproduct sellers because it ships fast checkout pages, bumps, upsells, subscriptions, and easy affiliate management." },
  { q: "Does ThriveCart support subscriptions and payment plans?", a: "Yes. You can configure subscriptions, trials, and payment plans with dunning and tax/VAT handling." },
  { q: "Can I use ThriveCart for physical products?", a: "ThriveCart is optimized for digital goods and info products. It can sell physical items, but logistics and inventory are better handled by ecommerce platforms like Shopify or WooCommerce." },
  { q: "Does ThriveCart have affiliates?", a: "Yes. It includes affiliate management so you can recruit partners, track performance, and auto-pay via PayPal or manual payouts." },
  { q: "Can I customize ThriveCart checkout?", a: "You can customize layouts, fields, and branding. Deep code-level control is more limited than building on WooCommerce/CartFlows." },
  { q: "Which gateways does ThriveCart support?", a: "ThriveCart supports Stripe, PayPal, Authorize.net, Apple Pay/Google Pay via Stripe, and multiple currencies." },
  { q: "Does ThriveCart integrate with email and CRM tools?", a: "Yes. It integrates with major email tools (e.g., ConvertKit, ActiveCampaign, MailerLite), Zapier/Make, and webinar/membership tools to pass customer data downstream." },
];

function ThriveCartToolPage() {
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
        "ThriveCart is a hosted checkout built for digital products. It delivers high-converting carts, bumps, upsells, and subscription billing with solid payment support and affiliate management. Pricing is typically one-time, making ROI attractive for creators and marketers.",
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
      icon: <ShoppingCart className="h-5 w-5 text-emerald-500" />,
      title: "High-converting hosted checkout",
      body: "Ready-to-use checkout templates with bumps, upsells, coupons, and A/B testing so marketers can launch fast without coding.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "Bumps, upsells, and trials",
      body: "Offer order bumps, post-purchase upsells, trials, and payment plans to increase AOV for digital and subscription offers.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
      title: "Affiliates and tax handling",
      body: "Built-in affiliate center with tracking and payouts, plus tax/VAT options, so you don’t need extra plugins.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations with email and memberships",
      body: "Sync buyers to email/CRM lists, membership tools, and automations via native integrations or Zapier/Make.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "Payment flexibility",
      body: "Stripe, PayPal, Authorize.net, Apple Pay/Google Pay, multiple currencies, and subscription billing support global sales.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Fast to launch",
      body: "Hosted approach means you avoid WordPress hosting, patching, and plugin stacks—ideal for lean teams and creators.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest ThriveCart review for creators and marketers covering pricing, features, pros & cons, alternatives, and whether ThriveCart fits your 2025 checkout stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  ThriveCart lets you launch high-converting carts with bumps, upsells, and affiliates fast—perfect for digital products and lean marketing teams.
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
              ThriveCart is a hosted checkout and funnel tool for selling digital products, subscriptions, and services. It bundles bumps, upsells, trials, and payment plans with built-in tax handling and affiliates.
            </p>
            <p className="mt-3 text-slate-700">
              Creators, course sellers, and SaaS marketers use ThriveCart to launch offers quickly without maintaining WordPress or custom code. Integrations route buyers to email, CRMs, and membership sites automatically.
            </p>
            <p className="mt-3 text-slate-700">Its lifetime-style pricing often pays back quickly for teams running high-volume launches and evergreen funnels.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">ThriveCart suits teams that want a fast, hosted checkout with strong conversion features.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators and infoproduct sellers needing bumps, upsells, and subscriptions.",
                "Marketers launching paid workshops, templates, and bundles without dev help.",
                "Agencies running funnels for clients and needing affiliate tracking.",
                "SaaS teams selling add-ons, onboarding packages, or annual pre-pay offers.",
                "Founders validating offers quickly before investing in full ecommerce builds.",
                "Consultants and coaches selling productized services with easy payment plans.",
              ].map((item) => (
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
            <p className="mt-3 text-slate-700">ThriveCart focuses on conversion, fast launch, and built-in monetization tools for digital offers.</p>
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
                  ThriveCart is commonly sold as a one-time/lifetime license, giving you hosted checkout, bumps, upsells, subscriptions, tax handling, and affiliates. Compared with monthly funnel tools, ROI is strong for
                  active sellers.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you sell digital products regularly, the lifetime pricing pays back quickly vs monthly funnel stacks.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">ThriveCart (lifetime style)</td>
                    <td className="px-4 py-3">Creators and marketers</td>
                    <td className="px-4 py-3">Hosted checkout, bumps, upsells, subscriptions, affiliate center</td>
                    <td className="px-4 py-3">One-time (varies by promo)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">ThriveCart Pro add-ons</td>
                    <td className="px-4 py-3">Teams needing more control</td>
                    <td className="px-4 py-3">Advanced features like calculations, more affiliates, extra settings</td>
                    <td className="px-4 py-3">One-time add-on</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">If you prefer monthly SaaS, alternatives like CartFlows on WooCommerce or Shopify can fit—but expect ongoing app/plugin costs.</p>
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
                  <li>Fast hosted setup—no WordPress or dev time.</li>
                  <li>Strong bumps, upsells, and trials/payment plans.</li>
                  <li>Affiliate center included.</li>
                  <li>Supports multiple gateways and currencies.</li>
                  <li>Integrations to email, memberships, and automation tools.</li>
                  <li>Lifetime-style pricing can lower long-term cost.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Customization is more limited than WooCommerce/CartFlows.</li>
                  <li>Less suited for large physical product catalogs.</li>
                  <li>Reliance on promos for best pricing can be confusing.</li>
                  <li>Analytics and reporting are lighter than full ecommerce suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these alternatives if you need deeper storefront control or different pricing models. Each has a dedicated page.</p>
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
            <p className="text-slate-700">Here’s how ThriveCart compares to two close alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs CartFlows vs Shopify Checkout</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                CartFlows + WooCommerce offers deep control on WordPress. Shopify Checkout is great for physical products and app ecosystem. ThriveCart is faster for digital offers with lifetime pricing.
              </p>
              <p className="mt-2 text-slate-700">Choose ThriveCart for speed and bumps; CartFlows for control; Shopify for full ecommerce and apps.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs CartFlows vs WooCommerce</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/thrivecart-vs-cartflows-vs-woocommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WooCommerce with CartFlows is the most customizable stack. ThriveCart is hosted and easiest to maintain. Pick based on your need for control vs speed and maintenance overhead.
              </p>
              <p className="mt-2 text-slate-700">Choose ThriveCart for hands-off hosting; choose CartFlows/WooCommerce if you want full control and plugin flexibility.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you sell digital products, courses, or subscriptions and want bumps/upsells without managing WordPress or a plugin stack, ThriveCart is worth it—especially with lifetime pricing.
            </p>
            <p className="mt-3 text-slate-700">
              If you need full storefront control, deep reporting, or physical-product ops, WooCommerce or Shopify may fit better. For WordPress funnels, CartFlows is strong. For all-in-one course stacks, Kajabi or Thinkific can
              complement checkout needs.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> ThriveCart is a top pick for creators and marketers needing fast, conversion-focused checkout with minimal maintenance.
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
              Choose ThriveCart if you want to run high-converting digital checkouts with bumps and upsells, no hosting headaches, and strong gateway/affiliate support.
            </p>
            <p>
              Consider CartFlows/WooCommerce if you need deep customization, or Shopify if you run broader ecommerce. For course-first stacks, you can pair ThriveCart with course platforms easily via integrations.
            </p>
            <p>ThriveCart fits well in a modern marketing stack, connecting to email, CRM, and automation so every purchase triggers the right follow-up.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default ThriveCartToolPage;
