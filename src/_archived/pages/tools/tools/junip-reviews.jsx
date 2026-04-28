import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Junip Reviews";
const slug = "junip-reviews";
const category = "Ecommerce Reviews & UGC";
const shortPitch =
  "Junip is a Shopify-first reviews platform that helps DTC brands collect verified product reviews, photos, and UGC while keeping storefront widgets fast.";
const pricingSummary =
  "Tiered pricing based on order volume and features. Free/entry plans cover basics; higher tiers add SMS collection, syndication, and advanced widgets.";
const officialUrl = "https://juniphq.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/juniphq.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Yotpo", slug: "yotpo" },
  { name: "Okendo", slug: "okendo" },
  { name: "Stamped.io", slug: "stamped-io" },
  { name: "Judge.me", slug: "judge-me" },
  { name: "Loox", slug: "loox" },
];

const faqs = [
  {
    q: "What is Junip Reviews?",
    a: "Junip is a review and UGC platform built for Shopify and headless storefronts. It helps brands collect, moderate, and publish product reviews and photos.",
  },
  {
    q: "Who is Junip best for?",
    a: "Shopify and DTC brands that want modern review widgets, SMS/email collection, and fast page performance without heavy scripts.",
  },
  {
    q: "Does Junip support photos and videos?",
    a: "Yes. Customers can add photos and videos to reviews; moderation tools help keep UGC on-brand.",
  },
  {
    q: "How does pricing work?",
    a: "Plans scale with monthly order volume and feature access. Higher tiers add SMS flows, Google Shopping syndication, and advanced widgets.",
  },
  {
    q: "Can Junip send review requests via SMS?",
    a: "Yes. SMS and email flows are available on paid tiers to improve submission rates.",
  },
  {
    q: "Does it integrate with Klaviyo or Attentive?",
    a: "Junip supports key ecommerce integrations like Klaviyo, Attentive, Shopify, and headless setups to trigger review requests.",
  },
  {
    q: "Is migration from another reviews tool supported?",
    a: "Import tools help move historical reviews from providers like Yotpo or Okendo, keeping your social proof intact.",
  },
  {
    q: "Do I still need to moderate reviews?",
    a: "Yes. Junip offers moderation and filters, but brands should review submissions to protect trust and compliance.",
  },
];

function JunipReviewsPage() {
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
        "Junip focuses on fast, modern review widgets for Shopify brands, making it easier to collect verified reviews and UGC while protecting site speed.",
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
      title: "Shopify-native",
      body: "Tight Shopify integration plus support for headless storefronts and quick theme setup.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Fast review widgets",
      body: "Lightweight widgets that keep page speed high while showcasing social proof.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "SMS & email requests",
      body: "Automated flows via email and SMS to lift review submission rates.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Moderation controls",
      body: "Tools to approve, filter, and flag reviews to maintain trust and compliance.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Syndication & feeds",
      body: "Google Shopping and other syndication options help expand reach beyond the PDP.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Works with Klaviyo, Attentive, Gorgias, and analytics tools to trigger flows and report performance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Junip Reviews: pricing, features, pros & cons, and alternatives so you can pick the right review platform for your Shopify or DTC store."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-600" />
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
                  {toolName} keeps storefronts fast while showcasing reviews, photos, and UGC that build trust at checkout.
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
              {toolName} is a review and UGC platform for ecommerce brands. It prioritizes fast-loading widgets, straightforward setup on Shopify, and collection flows that increase response rates.
            </p>
            <p className="mt-3 text-slate-700">
              Brands use it to capture product reviews with photos and videos, moderate submissions, and publish social proof across PDPs, PLPs, and cart/checkout.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations with Klaviyo, Attentive, and headless stacks make it fit for modern DTC teams that want conversion lifts without heavy scripts.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify and DTC brands that want more reviews, faster pages, and flexible widgets.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify stores that need modern review widgets without slowing page speed.",
                "DTC brands upgrading from basic review apps to SMS/email collection flows.",
                "Teams migrating from heavier legacy tools like Yotpo or PowerReviews.",
                "Merchants wanting photo/video UGC on PDPs, PLPs, and post-purchase.",
                "Brands investing in conversion rate lifts via social proof and trust signals.",
                "Headless storefronts needing API support and performant embeds.",
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
              {toolName} focuses on review collection, UGC, and storefront performance with Shopify-native integrations.
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
                  {toolName} uses tiered pricing aligned to monthly orders and feature access. Expect higher costs as order volume grows; SMS usage and syndication add-ons can increase spend.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier, enable review requests, then upgrade if you need SMS, syndication, or advanced widgets.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Free</td>
                    <td className="px-4 py-3">New stores testing reviews</td>
                    <td className="px-4 py-3">Core widgets, email requests, basic moderation</td>
                    <td className="px-4 py-3">Good for initial proof of concept</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing DTC brands</td>
                    <td className="px-4 py-3">Photo/video reviews, SMS requests, integrations</td>
                    <td className="px-4 py-3">Watch SMS and order-volume costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">High-volume merchants</td>
                    <td className="px-4 py-3">Advanced widgets, Google Shopping feeds, SLA</td>
                    <td className="px-4 py-3">Plan for custom terms and onboarding</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track order volume and SMS usage when budgeting. Consider migration support if you are switching from another provider.
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
                  <li>Lightweight, fast review widgets for Shopify.</li>
                  <li>SMS and email flows improve collection rates.</li>
                  <li>Clean moderation and import tools for migrations.</li>
                  <li>Photo/video UGC support across PDPs and feeds.</li>
                  <li>Integrates with popular DTC tools like Klaviyo and Attentive.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Order-volume pricing can climb for high-growth brands.</li>
                  <li>SMS usage adds variable costs; monitoring is required.</li>
                  <li>Feature depth differs from legacy enterprise suites.</li>
                  <li>Human moderation remains necessary for trust and compliance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} to other review platforms to match your budget, order volume, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares with other review platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yotpo</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/yotpo">
                  View Yotpo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yotpo offers a larger marketing suite (SMS, loyalty, referrals). {toolName} focuses on fast, modern review widgets and simpler pricing. Choose based on whether you want an all-in-one suite or a focused reviews product.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Okendo</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/okendo">
                  View Okendo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Okendo leans into personalization and data capture; {toolName} emphasizes speed and straightforward setup. Consider your need for quizzes/attributes versus lighter, faster widgets.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you want more reviews without sacrificing page performance and you value SMS/email collection flows.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for order-volume tiers and SMS usage. Ensure moderation processes are in place to maintain trust and avoid policy issues.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong choice for Shopify and DTC brands needing fast review widgets, UGC support, and modern integrations.
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
              Choose {toolName} if you want fast, modern review widgets and effective SMS/email collection to boost social proof on Shopify or headless stores.
            </p>
            <p>
              Consider Yotpo if you need an all-in-one suite or Okendo for deeper attributes and quizzes; keep {toolName} in mind for speed and simplicity.
            </p>
            <p>{toolName} helps ecommerce teams increase conversion rates with verified reviews and UGC while keeping page performance healthy.</p>
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

export default JunipReviewsPage;
