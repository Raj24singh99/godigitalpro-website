import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, ShoppingBag, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Rebuy";
const slug = "rebuy";
const category = "Ecommerce Personalization";
const shortPitch = "Rebuy is a personalization and upsell platform for ecommerce, offering smart bundles, recommendations, and checkout/cart offers.";
const pricingSummary =
  "Pricing scales by GMV/usage with add-ons for features and support. Higher tiers unlock more widgets, advanced rules, and deeper data access.";
const officialUrl = "https://rebuyengine.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rebuyengine.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Nosto", slug: "nosto" },
  { name: "Dynamic Yield", slug: "dynamic-yield" },
  { name: "LimeSpot", slug: "limespot" },
  { name: "ReConvert", slug: "reconvert" },
  { name: "Bold Upsell", slug: "bold-upsell" },
];

const faqs = [
  { q: "What is Rebuy?", a: "Rebuy is an ecommerce personalization and upsell platform for recommendations, bundles, and smart cart/checkout offers." },
  { q: "Who is it for?", a: "Shopify and DTC brands that want better AOV and conversion through personalization widgets and data-driven offers." },
  { q: "Does Rebuy support checkout offers?", a: "Yes. You can deploy cart and checkout offers, bundles, and post-purchase recommendations." },
  { q: "How is pricing structured?", a: "Usage-based pricing that scales with GMV and feature access. Larger plans add more widgets, rules, and support." },
  { q: "Does it require code?", a: "No-code widgets are available; developers can customize with rules, APIs, and scripts if needed." },
  { q: "Are analytics included?", a: "Yes. Dashboards track revenue lift, AOV, and widget performance to guide optimization." },
  { q: "Does Rebuy integrate with other tools?", a: "It integrates with Shopify, recharge apps, reviews, and marketing tools to enrich recommendations." },
  { q: "Is testing needed?", a: "Yes. A/B test widgets and monitor impact to avoid hurting UX or margins." },
];

function RebuyToolPage() {
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
        "Rebuy helps ecommerce brands drive AOV with personalized recommendations, bundles, and checkout/cart offers. It pairs no-code widgets with data rules and analytics.",
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
      title: "Personalized recommendations",
      body: "Deploy product recommendations across PDP, cart, and checkout to lift AOV.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Bundles & upsells",
      body: "Create bundles, frequently bought together, and post-purchase offers.",
    },
    {
      icon: <Folder className="h-5 w-5 text-blue-500" />,
      title: "Rules & targeting",
      body: "Use rules, segments, and merchandising controls to shape what shows where.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Cart & checkout widgets",
      body: "Add cart drawer and checkout widgets to increase attach rates without friction.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
      title: "Analytics & lift tracking",
      body: "Monitor revenue impact, conversions, and widget performance to iterate quickly.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Integrations",
      body: "Connect with reviews, subscriptions, and marketing tools to enrich recommendations.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Rebuy review: pricing, features, pros & cons, and alternatives to decide if it fits your ecommerce personalization stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} increases AOV with smart recommendations, bundles, and checkout offers tailored to each shopper.
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
              {toolName} is an ecommerce personalization platform that delivers dynamic recommendations, bundles, and checkout/cart offers. It combines no-code widgets, data rules, and analytics to help brands increase AOV and conversion.
            </p>
            <p className="mt-3 text-slate-700">Use it to surface relevant products, reduce friction at checkout, and test upsell placements.</p>
            <p className="mt-3 text-slate-700">Pair it with clear merchandising rules and profit guardrails to avoid margin erosion.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify and DTC brands focused on AOV lift, repeat purchases, and smarter merchandising.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands needing cart/checkout upsells without custom code.",
                "Merchandisers who want rules plus AI recommendations.",
                "Agencies managing personalization across many stores.",
                "Teams measuring revenue lift per widget and placement.",
                "Stores pairing recommendations with subscriptions or bundles.",
                "Marketers who want fast tests and analytics on AOV impact.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} focuses on recommendations, upsells, rules, and analytics to increase average order value across the funnel.
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
                  {toolName} uses usage-based pricing tied to GMV and feature access. More traffic and widgets increase costs; larger plans add more rules, data, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with enough capacity for core PDP/cart placements; upgrade after you validate revenue lift and need more widgets.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower tier</td>
                    <td className="px-4 py-3">Testing/smaller stores</td>
                    <td className="px-4 py-3">Core widgets, limited usage</td>
                    <td className="px-4 py-3">Good for early validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Established DTC</td>
                    <td className="px-4 py-3">More placements, rules, analytics</td>
                    <td className="px-4 py-3">Covers most scaling brands</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-GMV & multi-store</td>
                    <td className="px-4 py-3">Highest usage, support, advanced features</td>
                    <td className="px-4 py-3">Use when you need capacity and SLAs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Measure AOV lift against fees and margin. Align pricing to key placements and traffic volume.</p>
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
                  <li>Strong personalization and upsell widgets.</li>
                  <li>Rules plus AI recommendations for control.</li>
                  <li>Cart and checkout coverage to lift attach rate.</li>
                  <li>Analytics to track revenue impact per widget.</li>
                  <li>Integrations with subscriptions, reviews, and marketing tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage/GMV-based costs rise with growth.</li>
                  <li>Too many widgets can clutter UX if not tested.</li>
                  <li>Requires guardrails to protect margins and brand.</li>
                  <li>Setup needs coordination with dev/ops for stable performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other personalization and upsell tools to match your budget and level of control.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other ecommerce personalization platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Nosto</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/nosto">
                  View Nosto
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Nosto focuses on full-funnel personalization; {toolName} leans into cart/checkout upsells and bundles. Choose based on whether you need broad onsite personalization or AOV-focused widgets.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ReConvert</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/reconvert">
                  View ReConvert
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ReConvert specializes in post-purchase offers and thank-you page upsells; {toolName} covers PDP through checkout. Pair them or pick based on where you want to concentrate upsells.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a focused way to increase AOV with recommendations, bundles, and checkout offers without heavy custom development.
            </p>
            <p className="mt-3 text-slate-700">Ensure you track lift versus fees and maintain UX quality and brand consistency.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong personalization and upsell option for Shopify/DTC; best with disciplined testing and margin guardrails.
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
            <p>Choose {toolName} if you want smart recommendations, bundles, and checkout offers to lift AOV with analytics to prove impact.</p>
            <p>Consider Nosto for wider onsite personalization or Bold Upsell/ReConvert for specific upsell placements; use {toolName} when you want AOV-focused widgets with data controls.</p>
            <p>{toolName} helps teams monetize traffic better—test carefully and keep UX smooth.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default RebuyToolPage;
