import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Stamped.io";
const slug = "stamped-io";
const category = "Reviews & Loyalty for Ecommerce";
const shortPitch =
  "Stamped.io provides product reviews, ratings, UGC, and loyalty/rewards programs for ecommerce brands to build trust and retention.";
const pricingSummary =
  "Tiered plans based on order/usage limits and features. Higher tiers add loyalty, rewards, advanced moderation, and integrations; costs rise with volume and channels.";
const officialUrl = "https://stamped.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/stamped.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Okendo", slug: "okendo" },
  { name: "Yotpo", slug: "yotpo" },
  { name: "Junip", slug: "junip-reviews" },
  { name: "Judge.me", slug: "judge-me" },
  { name: "Klaviyo Reviews", slug: "klaviyo-reviews" },
];

const faqs = [
  {
    q: "What is Stamped.io?",
    a: "Stamped.io is a reviews and loyalty platform for ecommerce that collects product reviews, ratings, UGC, and runs rewards programs.",
  },
  {
    q: "Who is it for?",
    a: "Shopify and ecommerce brands that want social proof and loyalty programs to boost conversion and repeat purchases.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered by order volume/usage and features. Loyalty/rewards and advanced moderation sit on higher tiers.",
  },
  {
    q: "Does it support UGC?",
    a: "Yes. Photo/video reviews and Q&A are supported on eligible plans.",
  },
  {
    q: "Is loyalty included?",
    a: "Loyalty and rewards are available on higher tiers; verify inclusions per plan.",
  },
  {
    q: "Which platforms does it integrate with?",
    a: "Shopify, BigCommerce, and other ecommerce tools; plus marketing platforms like Klaviyo.",
  },
  {
    q: "Can I moderate reviews?",
    a: "Yes. Moderation, filters, and automation are available; depth depends on plan.",
  },
  {
    q: "Does it replace marketing automation?",
    a: "No. Pair with email/SMS for flows and post-purchase requests.",
  },
];

function StampedToolPage() {
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
        "Stamped.io offers reviews, UGC, and loyalty for ecommerce. It’s strong for brands wanting social proof and rewards in one platform with Shopify-friendly integrations.",
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
      title: "Reviews & ratings",
      body: "Collect product reviews, ratings, and Q&A to increase trust.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "UGC & media",
      body: "Photo and video reviews help showcase real customer experiences.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Loyalty & rewards",
      body: "Points, referrals, and VIP tiers on eligible plans to drive repeat purchases.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Moderation",
      body: "Manage approvals, filters, and automation to keep quality high.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect to Shopify/BigCommerce and marketing tools to trigger requests and sync data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Widgets & display",
      body: "Customizable display widgets for PDPs, carousels, and badges.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Stamped.io review: pricing, features, pros & cons, and alternatives so you can decide if its reviews + loyalty stack fits your store."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} combines reviews and loyalty—use it to capture UGC and drive repeat buys through rewards and recommendations.
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
              {toolName} is a reviews and loyalty platform for ecommerce. It collects product reviews, ratings, and UGC, and offers loyalty/rewards programs on higher tiers to encourage repeat purchases.
            </p>
            <p className="mt-3 text-slate-700">
              It integrates with Shopify and other platforms, enabling branded widgets and automated review requests. Loyalty features add points, referrals, and VIP tiers.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside email/SMS to request reviews and promote rewards; monitor performance and moderation to keep quality high.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify and ecommerce brands that want social proof plus loyalty in one system.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands needing photo/video reviews to boost PDP conversion.",
                "Stores adding loyalty/rewards to increase LTV.",
                "Merchants wanting branded review widgets and carousels.",
                "Teams automating review requests post-purchase.",
                "Brands integrating reviews with email/SMS for follow-ups.",
                "Stores replacing separate reviews and loyalty tools with one platform.",
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
              {toolName} combines reviews, UGC, and loyalty features to improve social proof and retention.
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
                  {toolName} pricing scales by order volume and features. Reviews and basic widgets are on lower tiers; loyalty, advanced moderation, and richer integrations require higher tiers. Costs rise with usage—track ROI from UGC and loyalty redemptions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a reviews-focused tier; upgrade to loyalty once you have review volume and want to boost retention.</p>
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
                    <td className="px-4 py-3">Smaller stores</td>
                    <td className="px-4 py-3">Core reviews, basic widgets</td>
                    <td className="px-4 py-3">Good to establish social proof</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Growing brands</td>
                    <td className="px-4 py-3">Photo/video UGC, better moderation, integrations</td>
                    <td className="px-4 py-3">Popular choice for scaling stores</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Loyalty/Advanced</td>
                    <td className="px-4 py-3">Retention-focused teams</td>
                    <td className="px-4 py-3">Loyalty/rewards, referrals, VIP tiers, advanced analytics</td>
                    <td className="px-4 py-3">Use when repeat purchases drive LTV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for design effort, moderation time, and email/SMS costs for review requests. Measure incremental revenue from widgets and loyalty redemptions.
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
                  <li>Combines reviews/UGC with loyalty in one platform.</li>
                  <li>Photo/video reviews and customizable widgets.</li>
                  <li>Shopify-friendly with integrations to marketing tools.</li>
                  <li>Moderation controls to manage quality.</li>
                  <li>Loyalty/referrals to increase LTV on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with order volume and features.</li>
                  <li>Loyalty requires higher tiers—extra cost.</li>
                  <li>Moderation and design take time to execute well.</li>
                  <li>Still need email/SMS for requests and reminders.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other reviews and loyalty platforms to match budget, feature depth, and ecosystem fit.
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
            <p className="text-slate-700">See how {toolName} compares to other reviews/loyalty platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Okendo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/okendo">
                  View Okendo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Okendo is strong on UGC and visual reviews; {toolName} bundles loyalty in higher tiers. Choose based on whether loyalty in the same platform is a priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Yotpo</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/yotpo">
                  View Yotpo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Yotpo offers a broad suite (reviews, loyalty, SMS); {toolName} is more focused. Pick Yotpo for full suite needs, {toolName} for a focused reviews+loyalty approach with Shopify fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to boost social proof and add loyalty in a Shopify-friendly tool and will measure ROI from reviews and rewards.
            </p>
            <p className="mt-3 text-slate-700">
              Start with reviews; expand to loyalty once you see engagement. Keep moderation and design tight to maintain trust.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid reviews + loyalty option for ecommerce—best when you measure uplift and manage UGC quality well.
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
              Choose {toolName} if you want a Shopify-friendly reviews platform that can expand to loyalty and referrals as you grow.
            </p>
            <p>
              Consider Okendo or Yotpo based on UGC depth or full-suite needs. {toolName} excels when you need focused reviews plus loyalty without heavy custom work.
            </p>
            <p>{toolName} boosts trust and retention—pair with email/SMS to maximize review capture and loyalty engagement.</p>
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

export default StampedToolPage;
