import React, { useState } from "react";
import { Sparkles, ShieldCheck, CreditCard, Globe, Plug, BarChart3, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Stripe";
const slug = "stripe";
const category = "Payments";
const shortPitch =
  "Stripe is the leading payments and billing platform for SaaS, ecommerce, and marketplaces, offering global payments, subscriptions, invoicing, tax, and fraud tools in one API-first stack.";
const pricingSummary =
  "Pay-as-you-go for payments (from ~2.9% + fees in many regions). Billing, Tax, Radar, and Issuing are add-ons with usage-based pricing. Volume/enterprise discounts available.";
const officialUrl = "https://stripe.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/stripe.com",
  gradient: "from-indigo-500 via-purple-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.20)]",
};

const alternatives = [
  { name: "Paddle", slug: "paddle" },
  { name: "Lemon Squeezy", slug: "lemon-squeezy" },
  { name: "Gumroad", slug: "gumroad" },
  { name: "Shopify", slug: "shopify" },
];

const faqs = [
  { q: "Is Stripe good for SaaS?", a: "Yes. Stripe Billing, Tax, and Invoicing make it easy to launch subscriptions, trials, seat-based pricing, and usage models with solid dunning and analytics." },
  { q: "What are Stripe’s fees?", a: "Standard online card payments often start around 2.9% + transaction fees (varies by region). Billing, Tax, Radar, Issuing, and Connect have additional usage-based costs." },
  { q: "Does Stripe handle tax?", a: "Stripe Tax calculates and collects sales/VAT/GST in many countries. For merchant-of-record needs you may prefer Paddle or Lemon Squeezy." },
  { q: "Is Stripe secure and compliant?", a: "Stripe is PCI DSS Level 1, supports SCA/3DS, and offers Radar for fraud. You still need to implement compliance steps for your business." },
  { q: "Can Stripe handle global payments?", a: "Yes. Stripe supports dozens of currencies and local payment methods (ACH, SEPA, iDEAL, wallets). Availability varies by country and business type." },
  { q: "Does Stripe integrate with my stack?", a: "Stripe has broad integrations and APIs with webhooks, client SDKs, and prebuilt Elements/Checkout. It works well with tools like HubSpot, Salesforce, and your own backend." },
  { q: "Is Stripe or Paddle better?", a: "Stripe offers flexibility with APIs and ownership of merchant accounts. Paddle is merchant of record—handling tax/chargebacks for you. Pick Stripe if you want control; Paddle if you want offloaded ops." },
  { q: "Can Stripe be used for invoicing and one-off payments?", a: "Yes. Stripe Invoicing, Payment Links, and Checkout make one-off, recurring, and quote-to-cash flows possible without heavy custom code." },
];

function StripeToolPage() {
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
        "Stripe is the go-to payments and billing stack for SaaS and internet businesses. Its APIs, global payment methods, and add-ons like Billing, Tax, and Radar make monetization flexible and scalable.",
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
      icon: <CreditCard className="h-5 w-5 text-indigo-600" />,
      title: "Global payments & local methods",
      body: "Cards, wallets, ACH, SEPA, iDEAL, and more—Stripe localizes payment methods to improve conversion for international buyers.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
      title: "Billing for SaaS subscriptions",
      body: "Trials, seats, usage, coupons, proration, and dunning are built in. Revenue Recognition helps finance teams stay compliant.",
    },
    {
      icon: <Globe className="h-5 w-5 text-sky-600" />,
      title: "Tax, fraud, and compliance",
      body: "Stripe Tax automates sales/VAT/GST calculations. Radar fights fraud. Built-in SCA/3DS and PCI compliance tools reduce risk.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "APIs, webhooks, and integrations",
      body: "API-first with strong docs, CLI, test clocks, and webhooks. Works with CRMs, data warehouses, and product analytics.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Connect for platforms",
      body: "Onboard sellers, split payouts, and manage compliance with Connect. Ideal for marketplaces, B2B platforms, and multi-seller apps.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Prebuilt checkout & links",
      body: "No-code Payment Links and Checkout pages let teams launch offers fast while engineers build deeper flows over time.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Stripe review for SaaS, SaaS-like, and ecommerce teams—covering pricing, billing, tax, pros & cons, alternatives, and whether Stripe fits your stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Payments, Billing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit Stripe
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
                  Stripe powers payments, subscriptions, tax, and fraud prevention with an API-first approach, letting teams launch faster while staying compliant.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Trusted by SaaS and ecommerce
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              Stripe is a {category.toLowerCase()} platform built for internet businesses. It offers global payment processing, Billing for subscriptions, Tax for compliance, Radar for fraud, and Connect for platforms—all backed by strong
              APIs and docs.
            </p>
            <p className="mt-3 text-slate-700">Agencies, SaaS teams, and marketplaces use Stripe to monetize faster without stitching together multiple vendors for billing, tax, and compliance.</p>
            <p className="mt-3 text-slate-700">If you want flexibility and control over payments while keeping speed to launch, Stripe is a top choice.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Stripe suits teams that want control over payments with strong developer tooling.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS teams launching subscriptions, trials, and usage-based pricing.",
                "Marketplaces and platforms needing onboarding, payouts, and KYC via Connect.",
                "Agencies and creators selling digital products or services globally.",
                "Ecommerce brands wanting Payment Links or Checkout without building from scratch.",
                "Product and finance teams needing reliable reporting, tax automation, and revenue recognition.",
                "Developers who value excellent APIs, docs, and webhooks with robust testing tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Stripe focuses on developer-first payments with modular add-ons for billing, fraud, tax, and payouts.</p>
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
                  Standard card payments often start around 2.9% + fixed fees (region-dependent). ACH, wallets, and alternative payments have separate rates. Billing, Tax, Radar, and Connect add usage-based costs. Larger volumes can
                  negotiate custom pricing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with standard rates. Add Billing/Tax as needed. Negotiate when volume justifies it.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan/module</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key notes</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Payments (standard)</td>
                    <td className="px-4 py-3">General online payments</td>
                    <td className="px-4 py-3">Cards, wallets, local methods, SCA/3DS included</td>
                    <td className="px-4 py-3">~2.9% + fees (varies by region)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Billing</td>
                    <td className="px-4 py-3">SaaS subscriptions/usage</td>
                    <td className="px-4 py-3">Trials, usage, dunning, invoicing, quotes</td>
                    <td className="px-4 py-3">~0.5%–0.8% + fees (tiered)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Tax</td>
                    <td className="px-4 py-3">Global tax calculation</td>
                    <td className="px-4 py-3">Auto VAT/GST/sales tax detection</td>
                    <td className="px-4 py-3">Per-transaction fee</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Connect</td>
                    <td className="px-4 py-3">Marketplaces/platforms</td>
                    <td className="px-4 py-3">Seller onboarding, split payouts, compliance</td>
                    <td className="px-4 py-3">Usage-based + payouts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Stripe is flexible but can get pricey with add-ons. Paddle or Lemon Squeezy can be simpler if you prefer merchant-of-record billing that bundles tax/chargebacks.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Excellent APIs, docs, and webhooks for developers.</li>
                  <li>Global payment methods boost conversion in multiple regions.</li>
                  <li>Billing, Tax, Radar, and Connect reduce third-party sprawl.</li>
                  <li>Prebuilt Checkout and Payment Links speed launches.</li>
                  <li>Strong reporting, reconciliation, and revenue tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Add-ons (Billing, Tax, Radar) increase effective cost.</li>
                  <li>Merchant-of-record duties (tax filings, chargebacks) stay on you.</li>
                  <li>Requires engineering to unlock full flexibility.</li>
                  <li>Settlement times and eligibility vary by country/business type.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want merchant-of-record simplicity or lighter checkout flows, compare Stripe with these options. Each has a dedicated page in our hub.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Stripe stacks up against Paddle and Lemon Squeezy.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Paddle</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/stripe-vs-paddle-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Paddle is a merchant of record, handling tax, invoicing, and chargebacks. Stripe gives you more flexibility and control but leaves compliance on you. Choose Paddle to offload finance ops; choose Stripe for flexibility and
                customization.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/stripe-vs-paddle-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Lemon Squeezy also acts as a merchant of record with simple digital product flows. Stripe offers deeper APIs and payment methods. Choose Lemon Squeezy for the fastest launch with tax handled; choose Stripe when scale and
                customization matter.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want flexible, global payments with strong APIs, Stripe is worth it. Billing, Tax, Radar, and Connect reduce integration sprawl and help you monetize faster.
            </p>
            <p className="mt-3 text-slate-700">
              Choose a merchant-of-record like Paddle or Lemon Squeezy if you’d rather outsource tax, chargebacks, and compliance. For teams with engineering resources and global ambitions, Stripe remains the default choice.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Stripe is a top payments stack for SaaS, marketplaces, and digital products when you want control, reliability, and breadth of payment methods.
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
            <p>Pick Stripe if you want an API-first payments stack with global coverage and modular add-ons for billing, tax, and fraud.</p>
            <p>Pick Paddle or Lemon Squeezy if you prefer merchant-of-record simplicity and less compliance overhead.</p>
            <p>Stripe fits SaaS, platforms, and modern ecommerce teams that want control and scalability in one stack.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default StripeToolPage;
