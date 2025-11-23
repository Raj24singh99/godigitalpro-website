import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, CreditCard, ShoppingBag, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Lemon Squeezy";
const slug = "lemon-squeezy";
const category = "Payments & merchant of record";
const shortPitch =
  "Lemon Squeezy is a merchant-of-record platform for software and digital products—handling tax, compliance, checkout, and subscriptions so you can ship faster.";
const pricingSummary =
  "No monthly fee; flat 5% + 50¢ per transaction for starter plan, with lower fees at higher volumes. Includes tax compliance, invoicing, and licensing out of the box.";
const officialUrl = "https://www.lemonsqueezy.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/lemonsqueezy.com",
  gradient: "from-amber-400 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.20)]",
};

const alternatives = [
  { name: "Stripe", slug: "stripe" },
  { name: "Paddle", slug: "paddle" },
  { name: "Gumroad", slug: "gumroad" },
  { name: "Shopify", slug: "shopify" },
];

const faqs = [
  {
    q: "Is Lemon Squeezy a merchant of record?",
    a: "Yes. Lemon Squeezy handles sales tax/VAT, billing, compliance, and payouts as the merchant of record—ideal for indie SaaS and digital product sellers.",
  },
  {
    q: "How are fees structured?",
    a: "Starter pricing is 5% + 50¢ per transaction with no monthly fee. Higher-volume plans lower the fee. You do not pay extra for tax handling or invoices.",
  },
  {
    q: "Does Lemon Squeezy support subscriptions and trials?",
    a: "Yes. Subscriptions, trials, coupons, upgrades/downgrades, and prorations are built in. You can manage plans and entitlements from the dashboard or API.",
  },
  {
    q: "Can I sell licenses or downloads?",
    a: "You can. Licensing and file delivery are supported for software and digital products. License keys can be generated and managed automatically.",
  },
  {
    q: "What about EU/UK VAT and US sales tax?",
    a: "Lemon Squeezy calculates, collects, files, and remits taxes for you. This is the main benefit of the merchant-of-record model.",
  },
  {
    q: "Is there an API?",
    a: "Yes. There is a modern REST API and webhook support for orders, customers, subscriptions, and events so you can integrate deeply with your stack.",
  },
  {
    q: "Can I customize checkout?",
    a: "You can customize branding, languages, pricing, and fields. Embeddable and hosted checkouts are available for quick launch.",
  },
  {
    q: "How fast are payouts?",
    a: "Payout cadence is typically weekly or monthly depending on volume and region. You receive funds after taxes/fees are handled by Lemon Squeezy.",
  },
];

function LemonSqueezyPage() {
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
        "Lemon Squeezy is a merchant-of-record checkout for SaaS and digital goods. It removes the headache of sales tax/VAT, invoicing, licensing, and subscriptions so teams can launch faster.",
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
      icon: <CreditCard className="h-5 w-5 text-amber-600" />,
      title: "Merchant-of-record checkout",
      body: "Tax, compliance, invoicing, and payouts handled for you so you can focus on product and growth.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
      title: "Subscriptions and billing",
      body: "Trials, coupons, upgrades/downgrades, prorations, and dunning are built in with transparent fees.",
    },
    {
      icon: <ShoppingBag className="h-5 w-5 text-emerald-600" />,
      title: "Licensing and digital delivery",
      body: "Issue license keys and deliver downloads automatically for software and digital products.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "API and webhooks",
      body: "Integrate orders, customers, and subscription events with your app, CRM, or automation tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Tax & compliance handled",
      body: "Sales tax and VAT are calculated, collected, filed, and remitted by Lemon Squeezy as the merchant of record.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Analytics and payouts",
      body: "Track revenue, churn, and growth; receive payouts on a predictable cadence after taxes and fees.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Lemon Squeezy review covering pricing, features, pros & cons, alternatives, and when to pick it over Stripe or Paddle."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Ship SaaS and digital products without wrestling taxes, compliance, and billing. Lemon Squeezy handles the messy parts with clean branding and simple APIs.
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
              {toolName} is a {category.toLowerCase()} platform that lets SaaS and digital product teams launch checkout with subscriptions, licensing, and tax handling in one place. As a merchant of record, it manages VAT/sales tax and payouts so you don’t need a tax stack.
            </p>
            <p className="mt-3 text-slate-700">
              It’s popular among indie hackers and small teams that want predictable fees and less compliance lift. APIs and webhooks make it easy to integrate with apps and back-office systems.
            </p>
            <p className="mt-3 text-slate-700">
              If you’d rather outsource tax and invoicing instead of building billing infrastructure on Stripe, Lemon Squeezy is a strong candidate.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Lemon Squeezy is built for teams that want to launch paid products quickly without handling tax/compliance themselves.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Indie SaaS founders who don’t want to manage tax filings.",
                "Digital product sellers offering downloads and license keys.",
                "Agencies selling templates, assets, or micro-SaaS.",
                "Product teams testing new paid add-ons with minimal billing build-out.",
                "Global sellers that need VAT handled as part of checkout.",
                "Developers who want API/webhooks for subscriptions without MoR overhead.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Lemon Squeezy focuses on fast, compliant selling with minimal setup.</p>
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
                  Pricing is a transaction fee with no monthly minimum on the starter tier. Higher tiers reduce fees and add enterprise features. Tax/VAT handling is included so you don’t need separate compliance tools.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the default fee tier to validate revenue; move to lower-fee tiers when volume justifies it.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter fee</td>
                    <td className="px-4 py-3">New products and indie SaaS</td>
                    <td className="px-4 py-3">5% + $0.50 per transaction, no monthly fee</td>
                    <td className="px-4 py-3">Included</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth / lower fees</td>
                    <td className="px-4 py-3">Growing revenue and larger carts</td>
                    <td className="px-4 py-3">Reduced fee schedule, volume-based</td>
                    <td className="px-4 py-3">Custom by volume</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume or compliance-heavy</td>
                    <td className="px-4 py-3">Custom terms, onboarding, support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in regional payouts and currency to estimate net revenue. If you already have complex billing logic on Stripe, compare MoR simplicity versus flexibility before switching fully.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Merchant-of-record: taxes and compliance covered.</li>
                  <li>Fast launch with hosted/embedded checkout.</li>
                  <li>Subscriptions, licensing, and digital delivery included.</li>
                  <li>Predictable transaction-based pricing.</li>
                  <li>API and webhooks for deeper integration.</li>
                  <li>Good fit for indie SaaS and digital products.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fees can be higher than raw Stripe if you self-manage tax.</li>
                  <li>Less flexibility for fully custom billing logic.</li>
                  <li>Payout timing may differ from direct processors.</li>
                  <li>Some enterprise features require custom tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you prefer more billing flexibility or a different merchant model, consider these options. Each links to a full tool page.
            </p>
            <p className="mt-2 text-slate-700">They differ on MoR vs PSP, pricing, and developer control.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.slice(0, 4).map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Payments/digital selling alternative.</p>
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
            <p className="text-slate-700">Here’s how Lemon Squeezy stacks up against other payment platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stripe vs Paddle</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/stripe-vs-paddle-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stripe is flexible but you manage tax/compliance. Paddle and Lemon Squeezy are merchants of record; Paddle leans enterprise, Lemon Squeezy is indie/startup friendly.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you want MoR simplicity with straightforward fees; choose Stripe for maximum billing control; choose Paddle for larger-scale MoR with enterprise features.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Paddle vs Gumroad</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gumroad is simplest for creators but charges higher fees and fewer SaaS features. Paddle is enterprise MoR. Lemon Squeezy sits between—modern API, MoR, and licensing for indie SaaS and digital goods.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you want modern MoR with subscriptions/licensing; choose Gumroad for the simplest creator checkout; choose Paddle if you need enterprise MoR and sales tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to avoid building billing, tax, and compliance, Lemon Squeezy is worth it. You trade some flexibility for speed and simplicity, with clear fees and built-in licensing/downloads.
            </p>
            <p className="mt-3 text-slate-700">
              If you already have a custom billing stack and tax solution, staying on Stripe/PSP may be better. But for new products and indie SaaS, MoR simplicity can save months of work and tax risk.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for SaaS/digital products that want merchant-of-record speed with modern APIs and transparent pricing.
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
              Choose {toolName} if you want MoR simplicity for SaaS and digital products with subscriptions, licensing, and tax included. It’s excellent for indie founders, agencies, and small teams shipping quickly.
            </p>
            <p>
              Consider Stripe if you need fully custom billing logic; consider Paddle for enterprise MoR; consider Gumroad for the simplest creator checkout. Lemon Squeezy balances modern APIs with managed compliance.
            </p>
            <p>{toolName} plugs into your stack via webhooks and APIs, keeping revenue flowing while you avoid tax and billing maintenance.</p>
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

export default LemonSqueezyPage;
