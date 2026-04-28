import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, ShoppingCart, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ReConvert";
const slug = "reconvert";
const category = "Post-Purchase Upsells";
const shortPitch = "ReConvert is a post-purchase upsell app for Shopify that optimizes thank-you pages, post-purchase offers, and funnels to lift AOV.";
const pricingSummary = "Usage-based and tiered pricing scales with orders and features. Higher tiers add more funnels, widgets, and support.";
const officialUrl = "https://www.reconvert.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/reconvert.io",
  gradient: "from-amber-500 via-orange-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "AfterSell", slug: "aftersell" },
  { name: "Zipify OneClickUpsell", slug: "zipify-oneclickupsell" },
  { name: "Honeycomb Upsell", slug: "honeycomb-upsell" },
  { name: "Rebuy", slug: "rebuy" },
  { name: "CartHook", slug: "carthook" },
];

const faqs = [
  { q: "What is ReConvert?", a: "ReConvert is a Shopify app for post-purchase upsells, thank-you page optimization, and funnels to increase average order value." },
  { q: "Who is it for?", a: "Shopify and DTC brands that want to monetize the thank-you page and post-purchase moment without heavy dev work." },
  { q: "Does it offer post-purchase offers?", a: "Yes. Create post-purchase offers, upsells, and cross-sells after checkout to boost AOV." },
  { q: "How is pricing structured?", a: "Usage-based plans scale with order volume and feature access. Higher tiers include more funnels and support." },
  { q: "Are templates included?", a: "Yes. You can use drag-and-drop widgets and templates for thank-you and upsell pages." },
  { q: "Does it integrate with other apps?", a: "Integrates with reviews, subscriptions, and analytics tools to enrich offers." },
  { q: "Do I need developers?", a: "No-code setup is common; developers can extend with custom rules and styling if needed." },
  { q: "Is testing needed?", a: "Yes. A/B test offers and monitor impact to protect UX and margins." },
];

function ReconvertToolPage() {
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
        "ReConvert helps ecommerce brands lift AOV with post-purchase offers, thank-you page widgets, and funnels that plug into Shopify.",
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
      icon: <ShoppingCart className="h-5 w-5 text-amber-500" />,
      title: "Thank-you page widgets",
      body: "Optimize thank-you pages with offers, surveys, and social/social proof blocks.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-pink-500" />,
      title: "Post-purchase upsells",
      body: "Add one-click upsells and cross-sells immediately after checkout.",
    },
    {
      icon: <Folder className="h-5 w-5 text-orange-500" />,
      title: "Funnels & rules",
      body: "Set funnels based on products, collections, and behaviors to show relevant offers.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
      title: "Analytics & lift tracking",
      body: "Track revenue lift, acceptance rates, and performance per widget.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Checkout-safe implementation",
      body: "Designed for Shopify’s post-purchase flows with guardrails for performance.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Integrations",
      body: "Connect reviews, subscriptions, and CRM/analytics to personalize offers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ReConvert review: pricing, features, pros & cons, and alternatives for post-purchase upsells and thank-you page optimization."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-200/25 blur-3xl" />
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
                  {toolName} captures post-purchase intent with upsells and optimized thank-you pages to lift AOV quickly.
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
              {toolName} is a Shopify-focused post-purchase app that optimizes thank-you pages and adds one-click upsells after checkout. It helps brands boost revenue per order with targeted, low-friction offers.
            </p>
            <p className="mt-3 text-slate-700">Use it to monetize the high-intent moment right after purchase, while keeping UX clean and on-brand.</p>
            <p className="mt-3 text-slate-700">Pair offers with margin guardrails and testing to avoid eroding profit.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify brands focused on AOV and repeat purchases through post-purchase experiences.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC stores wanting AOV lift from thank-you pages.",
                "Merchandisers adding cross-sells without slowing checkout.",
                "Agencies managing upsells across multiple clients.",
                "Brands testing post-purchase offers by product/collection.",
                "Teams needing analytics to prove uplift before scaling.",
                "Stores coordinating with subscriptions and personalization tools.",
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
              {toolName} focuses on thank-you page optimization, one-click post-purchase offers, rules, and analytics to raise AOV.
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
                  {toolName} uses usage-based pricing tied to orders and features. Costs rise with volume; higher tiers unlock more funnels, widgets, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with enough capacity for your thank-you page traffic; upgrade when you add more funnels or need priority support.</p>
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
                    <td className="px-4 py-3">Core thank-you widgets, limited funnels</td>
                    <td className="px-4 py-3">Good for initial A/B tests</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active DTC brands</td>
                    <td className="px-4 py-3">More offers, segmentation, analytics</td>
                    <td className="px-4 py-3">Covers most scaling stores</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume brands</td>
                    <td className="px-4 py-3">Highest limits, priority support, advanced rules</td>
                    <td className="px-4 py-3">Use if thank-you traffic is large</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Measure incremental revenue and margin per offer; scale only winning funnels.</p>
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
                  <li>Strong thank-you and post-purchase upsell capabilities.</li>
                  <li>No-code widgets with templates and rules.</li>
                  <li>Analytics for revenue lift and acceptance rates.</li>
                  <li>Integrations with reviews, subscriptions, and CRM.</li>
                  <li>Designed for Shopify post-purchase flows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage-based fees increase with order volume.</li>
                  <li>Poorly targeted offers can hurt UX and refunds.</li>
                  <li>Requires ongoing testing to avoid banner blindness.</li>
                  <li>Margins can shrink if discounts are too aggressive.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other post-purchase and upsell apps to match your budget, UX needs, and control.
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
            <p className="text-slate-700">See how {toolName} compares to other post-purchase solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AfterSell</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/aftersell">
                  View AfterSell
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AfterSell emphasizes post-purchase upsells as well; {toolName} leans heavily on thank-you page customization. Choose based on whether you want page control or pure upsell flow depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rebuy</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/rebuy">
                  View Rebuy
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rebuy covers PDP through checkout personalization; {toolName} focuses on post-purchase moments. Pair them or pick based on where you want to place offers.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a focused tool for thank-you pages and post-purchase upsells with fast setup and analytics.
            </p>
            <p className="mt-3 text-slate-700">Keep offers targeted and track margin impact to avoid customer fatigue.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong post-purchase upsell app; best when paired with testing discipline and clear merchandising rules.
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
            <p>Choose {toolName} if you want thank-you page control and one-click post-purchase offers to lift AOV.</p>
            <p>Consider AfterSell or Zipify for different flows; use {toolName} when page customization and Shopify-native experience are priorities.</p>
            <p>{toolName} helps monetize the post-purchase moment—keep offers relevant and margin-aware.</p>
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

export default ReconvertToolPage;
