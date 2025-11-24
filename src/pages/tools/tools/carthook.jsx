import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "CartHook";
const slug = "carthook";
const category = "Checkout & Post-Purchase";
const shortPitch = "CartHook adds optimized checkouts and post-purchase offers to increase average order value without extra friction.";
const pricingSummary =
  "Pricing typically includes a platform fee plus variable fees based on usage or revenue lift. Higher tiers add more features and support.";
const officialUrl = "https://carthook.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/carthook.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.26)]",
};

const alternatives = [
  { name: "ReConvert", slug: "reconvert" },
  { name: "CartFlows", slug: "cartflows" },
  { name: "Rebuy", slug: "rebuy" },
  { name: "Recharge Subscriptions", slug: "recharge-subscriptions" },
  { name: "Shopify", slug: "shopify" },
];

const faqs = [
  {
    q: "What is CartHook?",
    a: "CartHook is a checkout optimization platform that adds post-purchase offers and funnels to increase average order value.",
  },
  {
    q: "Who is it for?",
    a: "Ecommerce brands and marketers who want to improve checkout conversion and add upsells/downsells without rebuilding their stack.",
  },
  {
    q: "Does CartHook support post-purchase upsells?",
    a: "Yes. It focuses on post-purchase offers to add revenue without disrupting the initial checkout.",
  },
  {
    q: "How is pricing structured?",
    a: "Typically a platform fee plus usage or revenue-based components. Higher tiers add features and support—request a quote for details.",
  },
  {
    q: "Does it integrate with Shopify?",
    a: "Yes. CartHook integrates with Shopify. Check compatibility with your theme, payment gateways, and apps.",
  },
  {
    q: "Is custom coding required?",
    a: "CartHook is designed to add offers without heavy custom code, though implementation details may vary by store setup.",
  },
  {
    q: "How do I measure performance?",
    a: "Use A/B testing and reporting on take rates, lift, and funnel drop-offs. Compare revenue per visitor before/after.",
  },
  {
    q: "Does it impact checkout UX?",
    a: "Post-purchase offers run after payment to protect conversion. Still review UX and ensure offers fit your brand and policies.",
  },
];

function CarthookToolPage() {
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
        "CartHook adds optimized checkouts and post-purchase offers to lift average order value. It is strong for Shopify brands; ensure fit with your payments, UX, and compliance needs.",
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
      title: "Post-purchase offers",
      body: "Add one-click upsells and downsells after checkout to lift AOV without adding friction to payment.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Optimized checkout",
      body: "Streamlined checkout flows designed to reduce abandonment and increase conversion.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Funnels & testing",
      body: "Create offer funnels and A/B test variants to see which combinations perform best.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Platform integrations",
      body: "Integrate with Shopify and key apps; align offers with inventory and fulfillment.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Analytics",
      body: "Track conversion, take rates, revenue lift, and cohort performance across funnels.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & UX",
      body: "Post-purchase placements avoid checkout disruption; review policies and brand alignment.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="CartHook review: features, pricing, pros & cons, and alternatives for checkout optimization and post-purchase offers."
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
                  {toolName} focuses on post-purchase revenue lift—protect your checkout UX and align offers with inventory and policies.
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
              {toolName} is a checkout optimization platform centered on post-purchase upsells and streamlined checkouts. It aims to lift revenue per order without slowing the initial payment flow.
            </p>
            <p className="mt-3 text-slate-700">
              Shopify merchants can layer CartHook onto existing stores. Ensure compatibility with payment gateways, taxes, and policies before rollout.
            </p>
            <p className="mt-3 text-slate-700">Use analytics and testing to tune offers, pricing, and sequencing for maximum lift.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands aiming to raise AOV without rebuilding checkout flows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify brands wanting one-click post-purchase offers.",
                "Growth teams focused on AOV lift and conversion rate improvements.",
                "Marketers testing upsell/downsells without heavy dev work.",
                "Stores adding funnels tied to specific collections or behaviors.",
                "Teams that want analytics on take rates and revenue lift.",
                "Brands balancing UX, compliance, and offer aggressiveness.",
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
              {toolName} focuses on post-purchase offers, optimized checkouts, integrations, and analytics to increase average order value.
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
                  {toolName} typically uses a platform fee plus usage or revenue-based pricing. Higher tiers include more features, support, and reporting. Request a quote for your store size and volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Run an AOV lift test; if incremental revenue outweighs fees, scale with higher tiers and more funnels.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Single store</td>
                    <td className="px-4 py-3">Core checkout, post-purchase offers, basic reporting</td>
                    <td className="px-4 py-3">Good starting point</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Higher volume</td>
                    <td className="px-4 py-3">More funnels, A/B testing, expanded support</td>
                    <td className="px-4 py-3">Watch revenue-share/usage terms</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large brands</td>
                    <td className="px-4 py-3">Advanced support, custom terms, deeper integrations</td>
                    <td className="px-4 py-3">Align legal/compliance needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model fees vs. expected lift, validate on a subset of traffic, and ensure compatibility with payment gateways and policies.
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
                  <li>Post-purchase offers boost AOV without hurting initial conversion.</li>
                  <li>Optimized checkout experience focused on speed and clarity.</li>
                  <li>A/B testing for offers and funnels to find winners.</li>
                  <li>Shopify integration for many store setups.</li>
                  <li>Analytics on take rates and revenue lift.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing may include revenue share or usage fees.</li>
                  <li>Requires compatibility checks with payment gateways and apps.</li>
                  <li>Offer aggressiveness must align with brand and policies.</li>
                  <li>Value depends on measurable lift; testing is required.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other checkout and post-purchase tools to match your platform, pricing, and feature needs.
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
            <p className="text-slate-700">See how {toolName} stacks against other checkout optimization platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ReConvert</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/reconvert">
                  View ReConvert
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ReConvert focuses on Shopify thank-you page upsells. {toolName} emphasizes checkout and post-purchase funnels—pick based on desired placement and A/B testing needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs CartFlows</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/cartflows">
                  View CartFlows
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                CartFlows is built for WordPress/WooCommerce funnels. {toolName} targets Shopify stores; choose based on platform and desired funnel controls.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to lift AOV through post-purchase offers without slowing checkout, especially on Shopify.
            </p>
            <p className="mt-3 text-slate-700">
              Model fees vs. incremental revenue, run controlled tests, and ensure offers match your brand and policies before scaling.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong option for checkout and post-purchase optimization—best when paired with careful testing and UX oversight.
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
              Choose {toolName} if you want to add post-purchase upsells and optimized checkout to raise AOV, especially on Shopify.
            </p>
            <p>
              Consider ReConvert for thank-you page upsells or CartFlows for WooCommerce; use {toolName} when you want focused post-purchase funnels with testing and analytics.
            </p>
            <p>{toolName} helps increase revenue per order—validate lift, monitor UX, and align offers with compliance to sustain gains.</p>
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

export default CarthookToolPage;
