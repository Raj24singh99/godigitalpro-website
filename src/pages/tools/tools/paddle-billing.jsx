import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, CreditCard, Globe2, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Paddle Billing";
const slug = "paddle-billing";
const category = "Merchant-of-Record Billing";
const shortPitch =
  "Paddle Billing is the merchant-of-record platform from Paddle that bundles tax, compliance, subscriptions, and global payments so SaaS teams can launch faster.";
const pricingSummary =
  "Revenue-share pricing (often ~5–7%) that includes tax/VAT/GST calculation and remittance, fraud, chargebacks, and localized payments—no separate gateway fees for core checkout.";
const officialUrl = "https://www.paddle.com/billing";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/paddle.com",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Stripe Billing", slug: "stripe" },
  { name: "Lemon Squeezy", slug: "lemon-squeezy" },
  { name: "Chargebee", slug: "chargebee" },
  { name: "Paddle vs Stripe vs Lemon Squeezy", slug: "compare/stripe-vs-paddle-vs-lemon-squeezy", isComparison: true },
  { name: "Paddle vs Gumroad vs Lemon Squeezy", slug: "compare/paddle-vs-gumroad-vs-lemon-squeezy", isComparison: true },
];

const faqs = [
  {
    q: "What is Paddle Billing?",
    a: "Paddle Billing is Paddle’s merchant-of-record platform for SaaS and digital products. It handles tax/VAT, fraud, chargebacks, subscriptions, and global payments in one stack.",
  },
  {
    q: "How is pricing structured?",
    a: "It’s a revenue-share fee that bundles tax calculation/filing, fraud, and chargebacks. You don’t pay separate gateway fees for the core checkout.",
  },
  { q: "Does Paddle Billing support subscriptions and invoices?", a: "Yes. Trials, proration, upgrades/downgrades, invoicing, and dunning are built in for SaaS billing." },
  { q: "Is it good for global payments?", a: "Yes. Paddle Billing localizes currency, tax, and payment methods (cards, wallets, some local options) so you can sell in multiple regions quickly." },
  {
    q: "When should I pick Paddle Billing over Stripe?",
    a: "Choose Paddle Billing when you want tax and compliance offloaded under an MoR model. Pick Stripe if you need granular API control or marketplace-style flows and can manage tax separately.",
  },
  { q: "Does Paddle Billing handle chargebacks?", a: "Yes. Fraud screening and dispute management are included in the take-rate." },
  { q: "Is Paddle Billing only for SaaS?", a: "It’s optimized for SaaS and digital products (downloads, licenses). It’s not meant for physical goods." },
  {
    q: "Do I need to register for tax in each country?",
    a: "When using Paddle as merchant of record, Paddle is the legal seller and handles registration, collection, and remittance for supported regions.",
  },
];

function PaddleBillingToolPage() {
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
        "Paddle Billing offloads tax, compliance, subscriptions, and chargebacks under a merchant-of-record model. SaaS teams use it to launch globally faster while reducing finance overhead.",
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
      icon: <CreditCard className="h-5 w-5 text-indigo-500" />,
      title: "Merchant-of-record billing",
      body: "Handles tax/VAT/GST, fraud, and chargebacks as the merchant of record so you don’t need separate registrations in each region.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Subscriptions and invoicing",
      body: "Trials, proration, upgrades, invoices, and dunning are built in for SaaS-friendly billing flows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "APIs and webhooks",
      body: "REST APIs, webhooks, and integrations connect billing data to your CRM, analytics, and support tools.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-600" />,
      title: "Global payments and tax",
      body: "Localized currencies, pricing, and payment methods plus tax calculation/filing across supported regions.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-indigo-700" />,
      title: "Revenue analytics",
      body: "MRR, churn, and cohort insights without needing a separate BI setup for basic subscription metrics.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Fraud & dispute handling",
      body: "Fraud screening and chargeback management are included, cutting overhead for lean finance teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, MoR Billing, Pros & Cons, Alternatives`}
        description="Paddle Billing review with pricing, merchant-of-record benefits, pros & cons, and the best alternatives like Stripe Billing and Lemon Squeezy."
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): MoR Billing, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-indigo-600 text-white ring-2 ring-indigo-500 hover:bg-indigo-700" href={officialUrl}>
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
                  Paddle Billing lets SaaS teams sell globally without building tax or compliance infrastructure. Its MoR model bundles payments, subscriptions, and chargebacks in one stack.
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
              {toolName} is a {category.toLowerCase()} platform that acts as merchant of record for your digital sales. It calculates, collects, and remits tax, manages fraud and chargebacks, and provides SaaS billing flows.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Paddle Billing to launch subscriptions, trials, and invoicing with localized checkout and payment methods, without registering for tax in every market or stitching multiple vendors together.
            </p>
            <p className="mt-3 text-slate-700">
              This makes {toolName} attractive for SaaS companies that prefer compliance offload over building bespoke payment stacks.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SaaS and digital product teams that want global launch with compliance handled.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS founders wanting to sell globally without managing tax registrations country-by-country.",
                "Product-led teams needing trials, upgrades/downgrades, and proration without heavy billing engineering.",
                "Finance teams that want fraud and chargebacks handled inside one take-rate.",
                "Businesses adding localized currencies and payment methods quickly.",
                "Teams migrating from custom Stripe builds to an MoR for compliance relief.",
                "Digital goods or license sellers that want invoicing plus subscription analytics in one place.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Paddle Billing’s strength is bundling compliance, payments, and SaaS billing into one MoR layer.</p>
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
                  Paddle Billing uses a revenue-share fee that covers payments, tax calculation/filing, fraud, and chargebacks. There are no extra gateway fees for the core checkout. Higher ARR can negotiate custom terms.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Compare the take-rate to the cost of engineers, tax tools, and chargeback handling. If compliance offload matters, the bundled fee is often worth it.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Offering</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Includes</th>
                    <th className="px-4 py-3">Pricing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard MoR billing</td>
                    <td className="px-4 py-3">SaaS/digital products wanting compliance offloaded</td>
                    <td className="px-4 py-3">Checkout, subscriptions, tax/VAT, fraud, chargebacks, analytics</td>
                    <td className="px-4 py-3">Revenue-share (varies by volume, often ~5–7%)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Higher ARR with complex compliance or contracts</td>
                    <td className="px-4 py-3">Custom terms, dedicated support, advanced integrations</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track take-rate versus the cost of DIY billing (Stripe engineering, tax tools, dispute handling). The MoR model is usually cheaper for lean teams prioritizing speed to market.
            </p>
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
                  <li>MoR model offloads tax, compliance, chargebacks, and fraud.</li>
                  <li>Fast global launch with localized payment methods and currencies.</li>
                  <li>Built-in subscriptions, invoicing, and dunning flows.</li>
                  <li>Revenue analytics (MRR, churn, cohorts) without extra tooling.</li>
                  <li>APIs/webhooks integrate billing data into your stack.</li>
                  <li>Great for lean teams that don’t want to build billing infrastructure.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Revenue-share may cost more than DIY at very high volume.</li>
                  <li>Less customizable than Stripe for bespoke flows or marketplaces.</li>
                  <li>MoR model lists Paddle as seller on invoices, which some enterprises scrutinize.</li>
                  <li>Focused on SaaS/digital goods—not suitable for physical products.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare Paddle Billing to these options. All links open full reviews or comparisons.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div
                  key={alt.slug}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other billing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stripe vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/stripe-vs-paddle-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stripe offers the most flexible APIs; {toolName} bundles MoR compliance; Lemon Squeezy targets fast digital product launches. The comparison breaks down pricing and control trade-offs.
              </p>
              <p className="mt-2 text-slate-900">
                Pick {toolName} to offload tax/chargebacks; Stripe for custom billing and marketplaces; Lemon Squeezy for quick digital sales.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gumroad vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gumroad is creator-friendly for digital goods, Lemon Squeezy is an MoR for quick embeds, and {toolName} is SaaS-focused with subscriptions and invoicing. The comparison shows which fits your GTM and tax needs.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for SaaS billing and compliance; Gumroad for creator storefronts; Lemon Squeezy for fast digital launches.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to sell globally without building tax, fraud, and chargeback infrastructure, {toolName} is worth it. The revenue-share fee often beats the combined cost of engineering, tax tools, and compliance vendors.
            </p>
            <p className="mt-3 text-slate-700">
              If you need bespoke billing flows, marketplaces, or full gateway control, Stripe is better. For simple digital goods, Lemon Squeezy or Gumroad may be faster and cheaper.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a top MoR choice for SaaS teams that want compliance offloaded and faster global launch.
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
              Choose {toolName} if you want a merchant-of-record to handle tax, fraud, and chargebacks while giving you SaaS-friendly billing tools. It speeds up global launch and reduces ops overhead.
            </p>
            <p>
              Opt for Stripe if you need deep customization and control, or Lemon Squeezy/Gumroad for creator-style digital goods. {toolName} fits best when compliance offload outweighs take-rate concerns.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your product, try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PaddleBillingToolPage;
