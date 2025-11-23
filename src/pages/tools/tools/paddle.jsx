import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, CreditCard, Globe2, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Paddle";
const slug = "paddle";
const category = "Payments & Billing (MoR)";
const shortPitch =
  "Paddle is a merchant-of-record platform for SaaS and digital products that handles tax, billing, compliance, and payments so teams can launch globally faster.";
const pricingSummary = "Revenue-share pricing (typically ~5–7%) that includes tax, compliance, fraud, and chargeback handling with no additional gateway fees.";
const officialUrl = "https://www.paddle.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/paddle.com",
  gradient: "from-indigo-500 via-blue-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Stripe", slug: "stripe" },
  { name: "Lemon Squeezy", slug: "lemon-squeezy" },
  { name: "Gumroad", slug: "gumroad" },
  { name: "Paddle vs Stripe vs Lemon Squeezy", slug: "compare/stripe-vs-paddle-vs-lemon-squeezy", isComparison: true },
  { name: "Paddle vs Gumroad vs Lemon Squeezy", slug: "compare/paddle-vs-gumroad-vs-lemon-squeezy", isComparison: true },
];

const faqs = [
  { q: "What does merchant of record (MoR) mean?", a: "Paddle becomes the merchant of record for your sales—handling tax, compliance, fraud, and chargebacks—so you don’t need separate registrations or filings globally." },
  { q: "How is Paddle priced?", a: "It’s a revenue-share fee that bundles tax, fraud, and chargeback handling. You don’t pay separate gateway fees like with Stripe unless using add-ons." },
  { q: "Can Paddle handle subscriptions and invoicing?", a: "Yes. Paddle covers subscriptions, trials, proration, dunning, invoicing, and localized checkout with tax/VAT handled automatically." },
  { q: "Does Paddle support global payment methods?", a: "It supports major cards, wallets, and local methods in key markets, plus localized pricing and tax calculations for each region." },
  { q: "When is Paddle better than Stripe?", a: "Choose Paddle when you want tax and compliance offloaded. Choose Stripe when you need granular APIs, Connect, or custom payment flows and can manage tax yourself." },
  { q: "Is Paddle good for SaaS?", a: "Yes. Paddle is designed for SaaS billing with trials, upgrades/downgrades, metered billing support, analytics, and retention tooling." },
  { q: "How does Paddle handle tax/VAT/GST?", a: "As MoR, Paddle calculates, collects, files, and remits taxes globally. This removes the need for separate tax registrations in many markets." },
  { q: "Does Paddle manage chargebacks?", a: "Yes. Chargebacks and fraud screening are included in the revenue-share fee." },
];

export default function ToolPage() {
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
        "Paddle offloads payments, tax, and compliance as a merchant of record. SaaS teams use it to launch globally without juggling tax registrations, payment gateways, and chargebacks.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <CreditCard className="h-5 w-5 text-indigo-500" />,
      title: "Merchant-of-record billing",
      body: "Paddle handles tax, chargebacks, fraud, and compliance as MoR, reducing legal and finance overhead for global SaaS sales.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Subscriptions and invoicing",
      body: "Trials, proration, invoices, and dunning are built in, so you can manage upgrades/downgrades and recover revenue automatically.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "APIs and integrations",
      body: "REST APIs, webhooks, and integrations with CRMs, analytics, and support tools keep billing data connected to your stack.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-600" />,
      title: "Global payments and tax",
      body: "Localized pricing, currencies, and payment methods plus tax calculation/filing across key markets help you go global faster.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-indigo-700" />,
      title: "Revenue insights",
      body: "MRR, churn, cohort, and retention analytics show how subscriptions perform without needing a separate BI setup.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Fraud and chargeback handling",
      body: "Fraud screening and dispute management are included, reducing operational load on finance and support teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Merchant-of-Record, Pros & Cons, Alternatives`}
        description="Detailed Paddle review for 2025 covering MoR billing, pricing, features, pros & cons, and the best alternatives like Stripe and Lemon Squeezy."
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
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  Paddle lets SaaS teams sell globally without tax complexity. Its MoR model bundles compliance, fraud, and chargebacks so you can focus on product and growth.
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
              {toolName} is a {category.toLowerCase()} platform that acts as merchant of record for your digital sales. It handles tax calculation, collection, and remittance, plus fraud screening and chargebacks across regions.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use Paddle to launch subscriptions, trials, and invoicing globally with localized checkout and payment methods, without building complex billing stacks or registering in each country.
            </p>
            <p className="mt-3 text-slate-700">This makes Paddle attractive for SaaS companies that want to offload billing compliance and accelerate go-to-market.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Paddle fits SaaS and digital product teams that value speed and compliance offload.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS founders wanting global sales without managing tax registrations.",
                "Product-led teams needing fast trials, upgrades, and proration.",
                "Finance teams looking to reduce chargeback and fraud workload.",
                "Businesses launching in multiple regions with localized payment methods.",
                "Teams migrating from custom Stripe builds to an MoR for compliance relief.",
                "Products selling downloadable software or licenses worldwide.",
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
            <p className="mt-3 text-slate-700">Paddle’s strength is bundling compliance, payments, and billing in one MoR layer.</p>
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
                  Paddle uses a revenue-share fee that covers payments, tax calculation/filing, fraud, and chargebacks. There are no extra gateway fees for core checkout. Volume and custom terms are available for larger ARR.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Budget based on net take-rate; compare against DIY billing costs (tax tools, engineers, chargebacks) to judge ROI.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard MoR</td>
                    <td className="px-4 py-3">SaaS/digital products wanting compliance offloaded</td>
                    <td className="px-4 py-3">Checkout, subscriptions, tax/VAT, fraud, chargebacks, analytics</td>
                    <td className="px-4 py-3">Revenue-share (varies by volume, typically ~5–7%)</td>
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
              Compare Paddle’s take-rate to the cost of DIY billing (engineering, tax tools, chargeback handling). For many SaaS teams, the compliance offload and faster launch justify the revenue share.
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
                  <li>Analytics for MRR, churn, and retention without extra tooling.</li>
                  <li>APIs/webhooks integrate billing data into your stack.</li>
                  <li>Good for lean teams that don’t want to build billing infrastructure.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Revenue-share may cost more than DIY at large volume.</li>
                  <li>Less customizable than Stripe for bespoke flows and marketplaces.</li>
                  <li>MoR model requires Paddle to be recorded as seller on invoices.</li>
                  <li>Feature roadmap is focused on SaaS billing, not physical goods.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare Paddle to these options. All links open full reviews or comparisons—no dead ends.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">See how Paddle compares to other payment stacks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stripe vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/stripe-vs-paddle-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stripe offers the most flexible APIs; Paddle bundles MoR compliance; Lemon Squeezy targets fast digital product launches. The comparison breaks down pricing and control trade-offs.
              </p>
              <p className="mt-2 text-slate-900">Pick Paddle to offload tax/chargebacks; Stripe for custom billing; Lemon Squeezy for quick digital sales.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gumroad vs Lemon Squeezy</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/paddle-vs-gumroad-vs-lemon-squeezy">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gumroad is creator-friendly for digital goods, Lemon Squeezy is an MoR for fast embeds, and Paddle is SaaS-focused with subscriptions and invoicing. The comparison shows which fits your GTM and tax needs.
              </p>
              <p className="mt-2 text-slate-900">Choose Paddle for SaaS billing and compliance; Gumroad for creator storefronts; Lemon Squeezy for quick digital launches.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to sell globally without building tax, fraud, and chargeback infrastructure, Paddle is worth it. The revenue-share fee often beats the cost of engineering, tax tools, and compliance vendors.
            </p>
            <p className="mt-3 text-slate-700">
              If you need bespoke billing flows, marketplaces, or full gateway control, Stripe is better. For simple digital goods, Lemon Squeezy or Gumroad may be faster and cheaper.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Paddle is a top MoR choice for SaaS teams that want compliance offloaded and faster global launch.
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
              Choose Paddle if you want a merchant-of-record to handle tax, fraud, and chargebacks while giving you SaaS-friendly billing tools. It speeds up global launch and reduces ops overhead.
            </p>
            <p>Opt for Stripe if you need deep customization and control, or Lemon Squeezy/Gumroad for creator-style digital goods. Paddle fits best when compliance offload outweighs take-rate concerns.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your product, try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}
