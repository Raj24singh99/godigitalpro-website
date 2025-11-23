import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Alloy Automation";
const slug = "alloy-automation";
const category = "Ecommerce Automation";
const shortPitch =
  "Alloy Automation is an ecommerce automation platform that connects your store, apps, and data to run workflows for operations, marketing, and retention.";
const pricingSummary =
  "Pricing is tiered by workflow volume, connectors, and support level. Expect paid plans for production use; enterprise tiers add SSO, SLAs, and premium support.";
const officialUrl = "https://www.runalloy.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/runalloy.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Pabbly", slug: "pabbly" },
  { name: "Shopify", slug: "shopify" },
  { name: "Klaviyo", slug: "klaviyo" },
];

const faqs = [
  {
    q: "What does Alloy Automation do?",
    a: "Alloy connects ecommerce platforms and apps to automate workflows like order routing, tagging, customer segmentation, and notifications.",
  },
  {
    q: "Who is Alloy best for?",
    a: "D2C and ecommerce brands, agencies, and ops teams that need robust Shopify/BigCommerce automations beyond native flows.",
  },
  {
    q: "Does Alloy support custom logic?",
    a: "Yes. You can build conditional workflows, use variables, webhooks, and custom actions to tailor automations to your stack.",
  },
  {
    q: "Which platforms does Alloy integrate with?",
    a: "Shopify, BigCommerce, Klaviyo, Gorgias, ReCharge, ShipBob, 3PLs, CRMs, ESPs, and many more via connectors and webhooks.",
  },
  {
    q: "Can Alloy handle fulfillment and operations?",
    a: "Yes. Common use cases include routing orders to 3PLs, tagging VIP or risky orders, syncing inventory, and triggering ops alerts.",
  },
  {
    q: "Is Alloy no-code?",
    a: "It offers a visual builder for most workflows, plus developer-friendly options (webhooks, custom code) for advanced cases.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale by workflow volume, connectors, seats, and support level. Enterprise tiers add security features and SLAs.",
  },
  {
    q: "Does Alloy offer support for agencies?",
    a: "Yes. Agencies can manage multiple stores, templatize automations, and get partner-focused support on higher plans.",
  },
];

function AlloyAutomationToolPage() {
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
        "Alloy Automation helps ecommerce teams connect stores, apps, and data to automate operations, marketing, and retention workflows. It’s a strong option when Shopify native flows or basic zaps aren’t enough.",
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
      title: "Ecommerce connectors",
      body: "Native integrations with Shopify, BigCommerce, Klaviyo, Gorgias, ReCharge, ShipBob, and more.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Visual workflows",
      body: "Build branching automations for orders, customers, tickets, and inventory without heavy code.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Custom actions & webhooks",
      body: "Extend workflows with webhooks, API calls, and custom logic for unique store needs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-orange-500" />,
      title: "Operational automations",
      body: "Automate order tagging, fraud/risk checks, VIP routing, and 3PL fulfillment triggers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Monitoring & retries",
      body: "Error handling, retries, and alerting keep critical flows stable for high-volume stores.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Templates & agencies",
      body: "Prebuilt templates for common ecommerce automations; agency features to manage multiple brands.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Alloy Automation review: pricing, features, pros & cons, and alternatives so you can decide if it fits your ecommerce automation stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-100 blur-3xl" />
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
                  {toolName} connects your store, apps, and data so you can automate post-purchase, ops, and retention workflows with confidence.
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
              {toolName} is an ecommerce automation platform that connects your commerce platform, 3PLs, marketing tools, and support stack. It runs workflows for order routing, tagging, segmentation, notifications, and more.
            </p>
            <p className="mt-3 text-slate-700">
              Use it when native Shopify flows or light zaps aren’t enough, and you need reliability, retries, and deeper ecommerce connectors.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies can templatize automations across clients; brands can centralize ops, support, and marketing triggers in one place.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce teams that need robust, reliable automations across store, 3PL, marketing, and support tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "D2C brands automating order routing, tagging, and post-purchase comms.",
                "Ops teams syncing inventory, triggering 3PL workflows, and flagging risky orders.",
                "Retention teams segmenting customers and triggering lifecycle messaging.",
                "Support teams integrating tickets, refunds, and order status updates.",
                "Agencies standardizing automations across multiple client stores.",
                "Stores outgrowing basic Shopify Flow/Zapier and needing reliability/scale.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
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
              {toolName} focuses on deep ecommerce connectors, visual workflows, and operational reliability.
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
                  {toolName} is priced by workflow volume, connectors, and support. Higher tiers add enterprise features (SSO, SLAs, premium support). Expect paid plans for production ecommerce use.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pilot on a mid-tier; move to enterprise if you need SSO, advanced support, and higher volume limits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">Growing stores</td>
                    <td className="px-4 py-3">Visual workflows, key connectors</td>
                    <td className="px-4 py-3">Volume-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Scaling brands</td>
                    <td className="px-4 py-3">More volume, advanced actions, support</td>
                    <td className="px-4 py-3">Adds reliability features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume & agencies</td>
                    <td className="px-4 py-3">SSO, SLAs, premium support, custom limits</td>
                    <td className="px-4 py-3">Custom contract</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm connector availability, rate limits, and support SLAs. Factor in implementation time for complex workflows.
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
                  <li>Deep ecommerce connectors (Shopify, 3PLs, ESPs, support).</li>
                  <li>Visual builder with retries and monitoring for reliability.</li>
                  <li>Custom actions and webhooks for advanced logic.</li>
                  <li>Templates speed up common ecommerce automations.</li>
                  <li>Agency-friendly for managing multiple stores.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Priced for production ecommerce; lighter needs may be cheaper on basic tools.</li>
                  <li>Setup requires clear data flows and testing to avoid errors.</li>
                  <li>Advanced custom logic may need developer involvement.</li>
                  <li>Costs scale with volume and connector usage.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other automation and ecommerce tools to match budget, connectors, and governance needs.
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
            <p className="text-slate-700">See how {toolName} stacks up against other automation options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Make</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/make">
                  View Make
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Make is a general automation tool; {toolName} specializes in ecommerce connectors and reliability for store operations. Choose based on whether you need broad app coverage or deep ecommerce focus.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/zapier">
                  View Zapier
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier is easy for simple automations; {toolName} adds ecommerce-grade connectors, retries, and monitoring. Use Zapier for lightweight flows and {toolName} for mission-critical ecommerce operations.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need reliable, ecommerce-specific automations that go beyond native Shopify Flow or basic zaps. It shines for multi-app workflows, fulfillment routing, and retention triggers.
            </p>
            <p className="mt-3 text-slate-700">
              If your needs are light or budget is tight, start with Shopify Flow or simple zaps. Upgrade to {toolName} when scale, reliability, and connectors matter.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong automation choice for serious ecommerce operations and agencies managing multiple stores.
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
              Choose {toolName} if you want ecommerce-grade automation that ties together store, 3PL, marketing, and support tools with reliability.
            </p>
            <p>
              Consider Make/Zapier for simpler flows, or native Shopify Flow for basic tasks. Use {toolName} when uptime, retries, and deep connectors are required.
            </p>
            <p>{toolName} helps teams scale operations and retention with dependable automations tailored to ecommerce.</p>
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

export default AlloyAutomationToolPage;
