import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AOVBoost";
const slug = "aovboost";
const category = "Conversion & Upsells";
const shortPitch =
  "AOVBoost adds pre- and post-purchase upsells, bundles, and cross-sells to lift average order value without hurting checkout flow.";
const pricingSummary =
  "Free trial, then paid by store size and features. Higher tiers unlock more funnels, advanced targeting, subscriptions, and priority support.";
const officialUrl = "https://aovboost.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/aovboost.com",
  gradient: "from-emerald-500 via-teal-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.26)]",
};

const alternatives = [
  { name: "ReConvert", slug: "reconvert" },
  { name: "CartHook", slug: "carthook" },
  { name: "Upsell Funnel Engine", slug: "trackify" },
  { name: "Zipify", slug: "zipify" },
  { name: "Bold Upsell", slug: "bold-commerce" },
];

const faqs = [
  {
    q: "What is AOVBoost?",
    a: "AOVBoost is an upsell/cross-sell app that inserts pre- and post-purchase offers, bundles, and add-ons to raise average order value.",
  },
  {
    q: "Who is it for?",
    a: "Ecommerce brands wanting more revenue per order without overhauling their storefront or checkout.",
  },
  {
    q: "How does pricing work?",
    a: "Free trials then paid tiers that scale with features, funnels, and volume. Higher tiers add targeting, subscriptions, and support.",
  },
  {
    q: "Does it slow checkout?",
    a: "Offers are designed to stay lightweight. Still, you should test load time and conversions when adding upsells.",
  },
  {
    q: "What platforms are supported?",
    a: "Primarily Shopify apps; check store listing for platform/version support.",
  },
  {
    q: "Do upsells hurt conversion?",
    a: "If overused, yes. Keep offers relevant, cap steps, and A/B test acceptance vs. abandonment.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Validate pricing, margins, and customer experience; monitor post-purchase CS tickets.",
  },
];

function AOVBoostToolPage() {
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
        "AOVBoost helps merchants lift average order value with targeted upsells and bundles. Best when offers are relevant, tested, and kept lightweight.",
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
      title: "Pre- & post-purchase upsells",
      body: "Add offers before or after checkout to lift AOV while keeping the main flow fast.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Bundles & add-ons",
      body: "Create bundles, volume discounts, and add-ons tailored to cart context.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Targeting rules",
      body: "Show offers by product, cart value, geo, or customer segments to stay relevant.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "A/B testing",
      body: "Test acceptance vs. abandonment to balance AOV gains with checkout completion.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect with subscriptions, analytics, and email/SMS tools to sync offer results.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Reporting",
      body: "Track take rates, lift, and revenue by funnel and offer type.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AOVBoost review: pricing, features, pros & cons, and alternatives so you can choose the right upsell tool."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  {toolName} lifts AOV with targeted upsells and bundles—keep offers relevant and tested to avoid checkout friction.
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
              {toolName} is an upsell and cross-sell platform that inserts offers before and after checkout to increase average order value. It supports bundles, add-ons, and targeted rules.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to capture incremental revenue without changing your core product pages. Keep offers lightweight and relevant to avoid hurting conversion.
            </p>
            <p className="mt-3 text-slate-700">Pair with analytics to monitor take rates, abandonment, and margin impact.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands with steady traffic who want more revenue per order.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands adding accessories or warranties pre/ post purchase.",
                "Stores with complementary products that bundle well.",
                "Merchants with clear hero SKUs and logical add-ons.",
                "Growth teams running A/B tests on upsell placement and copy.",
                "Brands mindful of checkout speed and mobile UX.",
                "Operators tracking margins and support impact from upsells.",
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
              {toolName} focuses on targeted upsells, bundles, and testing to increase AOV without breaking checkout.
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
                  Plans scale by store size, features, and funnel limits. Higher tiers add advanced targeting, subscriptions, and priority support. Model ROI against projected lift and margins.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate lift; upgrade when you need more funnels, targeting, or subscriptions.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Basic upsells, limited funnels</td>
                    <td className="px-4 py-3">Good for proof of lift</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active stores</td>
                    <td className="px-4 py-3">More funnels, targeting, reporting</td>
                    <td className="px-4 py-3">Common for scaling brands</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest limits, subscriptions, priority support</td>
                    <td className="px-4 py-3">For aggressive AOV programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Track take rates, lift, and margin impact. Keep a ceiling on steps to protect checkout completion.</p>
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
                  <li>Pre- and post-purchase upsells to boost AOV.</li>
                  <li>Targeted rules keep offers relevant.</li>
                  <li>Bundles and add-ons for higher basket size.</li>
                  <li>A/B testing to balance lift vs. abandonment.</li>
                  <li>Reporting on take rate and revenue lift.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Overuse can slow checkout or annoy customers.</li>
                  <li>Requires QA to avoid pricing or tax errors.</li>
                  <li>Lift varies by relevance; testing is required.</li>
                  <li>Subscription/advanced features on higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other upsell tools to match targeting depth, funnels, and pricing.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AOV/upsell apps.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ReConvert</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/reconvert">
                  View ReConvert
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ReConvert emphasizes post-purchase funnels; {toolName} balances pre- and post-purchase with targeting. Pick based on where you want to insert offers.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs CartHook</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/carthook">
                  View CartHook
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                CartHook offers deep post-purchase flows; {toolName} aims for simpler setup with pre- and post-purchase offers. Choose based on complexity needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you have stable traffic and logical add-ons to lift AOV. Keep offers relevant, test for abandonment, and watch margins.
            </p>
            <p className="mt-3 text-slate-700">
              Budget time for QA (pricing, taxes) and analytics to track lift. Avoid overloading checkout with too many steps.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical upsell tool to raise AOV—best with disciplined testing and margin monitoring.
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
            <p>{toolName} helps increase order value with targeted pre- and post-purchase offers, bundles, and add-ons.</p>
            <p>Use it when you can keep offers relevant and lightweight, and measure lift vs. abandonment and margins.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your store, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
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

export default AOVBoostToolPage;
