import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Chargebee";
const slug = "chargebee";
const category = "Subscription Billing";
const shortPitch = "Chargebee is a subscription billing and revenue operations platform for SaaS and recurring businesses.";
const pricingSummary =
  "Tiered pricing by revenue/feature set. Higher tiers unlock advanced revenue recognition, dunning, tax/VAT support, and compliance tooling.";
const officialUrl = "https://www.chargebee.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/chargebee.com",
  gradient: "from-amber-500 via-orange-500 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.26)]",
};

const alternatives = [
  { name: "Stripe Billing", slug: "stripe" },
  { name: "Recurly", slug: "recurly" },
  { name: "Paddle Billing", slug: "paddle-billing" },
  { name: "Paddle", slug: "paddle" },
  { name: "Pabbly", slug: "pabbly" },
];

const faqs = [
  {
    q: "What is Chargebee?",
    a: "Chargebee is a subscription billing and revenue operations platform for SaaS, memberships, and other recurring models.",
  },
  {
    q: "Who is it for?",
    a: "SaaS and subscription businesses that need billing, invoicing, dunning, tax handling, and revenue recognition.",
  },
  {
    q: "Does Chargebee handle tax and invoicing?",
    a: "Yes. It supports invoicing, taxes/VAT/GST, and payment gateways. Complex setups may still need tax advisors.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered plans by revenue and features. Higher tiers add revenue recognition, advanced reporting, and compliance features.",
  },
  {
    q: "Can I manage dunning and churn?",
    a: "Yes. Dunning workflows, smart retries, and alerts help reduce involuntary churn.",
  },
  {
    q: "Does Chargebee integrate with gateways?",
    a: "It integrates with major gateways (e.g., Stripe, Braintree, Adyen). Check regional coverage and fees.",
  },
  {
    q: "How about revenue recognition?",
    a: "Higher tiers support revenue recognition and audit-friendly reporting for SaaS accounting.",
  },
  {
    q: "Is migration difficult?",
    a: "Migration requires careful data mapping, proration rules, and testing. Plan a phased rollout.",
  },
];

function ChargebeeToolPage() {
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
        "Chargebee centralizes subscription billing, taxes, dunning, and revenue recognition. It is strong for SaaS and recurring revenue; plan implementation carefully for pricing, taxes, and migrations.",
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
      title: "Subscription billing",
      body: "Manage plans, trials, coupons, proration, and invoicing across currencies.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Dunning & retention",
      body: "Smart retries, reminders, and notifications to reduce involuntary churn.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Revenue reporting",
      body: "MRR/ARR dashboards, cohort views, and finance-ready reports.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Tax & compliance",
      body: "VAT/GST support, invoicing, and recognition tools for audit readiness.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Gateways & CRM",
      body: "Integrations with payment gateways, CRM, accounting, and support tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security & controls",
      body: "Role-based access, SSO, and permissions to manage finance workflows safely.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Chargebee review: features, pricing, pros & cons, and alternatives for subscription billing and revenue operations."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} streamlines billing, taxes, and retention. Plan migration carefully and validate compliance with your finance team.
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
              {toolName} is a billing and revenue platform for recurring businesses. It covers plans, invoicing, taxes, dunning, and recognition so finance and growth teams can manage revenue operations in one place.
            </p>
            <p className="mt-3 text-slate-700">
              It supports many gateways and geographies. Implement carefully: map products, coupons, proration rules, and tax settings before launch.
            </p>
            <p className="mt-3 text-slate-700">Use its analytics to track MRR, churn, and cohort health, then refine pricing and offers.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SaaS and recurring businesses needing billing, tax, and dunning without building from scratch.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B/B2C SaaS managing trials, upgrades, and proration.",
                "Subscription commerce with multiple currencies and taxes.",
                "Teams reducing involuntary churn via dunning and retries.",
                "Finance groups needing revenue recognition and audit support.",
                "Growth teams experimenting with pricing, coupons, and add-ons.",
                "Companies wanting gateway flexibility across regions.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} focuses on subscription lifecycle management, dunning, reporting, and compliance so revenue teams can scale safely.
            </p>
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
                  {toolName} prices by revenue/usage and features. Higher tiers add revenue recognition, advanced reporting, and stronger compliance support. Expect onboarding effort for migration and tax setup.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Match a tier to current ARR; revisit pricing as volumes and compliance needs grow.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Growth</td>
                    <td className="px-4 py-3">Early-stage SaaS</td>
                    <td className="px-4 py-3">Core billing, invoices, trials, coupons</td>
                    <td className="px-4 py-3">Good for launch</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Growing ARR</td>
                    <td className="px-4 py-3">More gateways, dunning, advanced reporting</td>
                    <td className="px-4 py-3">Add support SLAs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex/global</td>
                    <td className="px-4 py-3">Revenue recognition, compliance, custom terms</td>
                    <td className="px-4 py-3">Plan implementation carefully</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for implementation, payment gateway fees, taxes, and potential revrec needs as ARR scales.</p>
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
                  <li>Robust subscription lifecycle management.</li>
                  <li>Dunning and retries to reduce involuntary churn.</li>
                  <li>Integrations with major gateways and CRMs.</li>
                  <li>Revenue reporting and recognition options.</li>
                  <li>Audit-friendly invoicing and tax support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Implementation/migration requires planning and testing.</li>
                  <li>Pricing rises with revenue and advanced features.</li>
                  <li>Complex tax/compliance still needs expert oversight.</li>
                  <li>Customization depends on gateway and region constraints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other billing platforms based on gateway needs, compliance, and engineering capacity.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other billing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stripe Billing</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/stripe">
                  View Stripe Billing
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stripe Billing is tightly integrated with Stripe payments and APIs. {toolName} offers broader billing ops, revrec options, and gateway flexibility. Choose based on gateway needs and finance workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Recurly</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/recurly">
                  View Recurly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Recurly emphasizes billing flexibility and dunning. {toolName} pairs billing with revenue recognition and broader finance tooling. Compare based on reporting and compliance needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want mature subscription billing, dunning, and finance workflows without building in-house.
            </p>
            <p className="mt-3 text-slate-700">
              Success depends on solid implementation: map products, taxes, proration, and revrec with finance and engineering before go-live.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong billing platform for SaaS and recurring revenue—plan migrations carefully to realize full value.
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
              Choose {toolName} if you need subscription billing, dunning, and revenue ops across multiple gateways and regions.
            </p>
            <p>
              Consider Stripe Billing for Stripe-centric stacks or Recurly for flexible billing; use {toolName} when revrec and finance workflows are critical.
            </p>
            <p>{toolName} helps recurring businesses scale billing and compliance—invest in implementation planning to capture its benefits.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default ChargebeeToolPage;
