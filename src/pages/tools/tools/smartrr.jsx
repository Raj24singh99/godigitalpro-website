import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Smartrr";
const slug = "smartrr";
const category = "Subscriptions for Ecommerce";
const shortPitch =
  "Smartrr is a Shopify subscription platform focused on customer experience and retention, offering flexible portals, rewards, and churn-reducing flows.";
const pricingSummary =
  "Tiered pricing often tied to subscription GMV and features. Higher tiers add advanced retention tools, analytics, and support; costs rise with volume.";
const officialUrl = "https://www.smartrr.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/smartrr.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Recharge", slug: "recharge-subscriptions" },
  { name: "Skio", slug: "skio" },
  { name: "Bold Commerce", slug: "bold-commerce" },
  { name: "Loop Subscriptions", slug: "loop-subscriptions" },
  { name: "Upscribe", slug: "upscribe" },
];

const faqs = [
  {
    q: "What is Smartrr?",
    a: "Smartrr is a Shopify subscription platform that improves customer portals, rewards, and retention flows to reduce churn.",
  },
  {
    q: "Who is it for?",
    a: "DTC brands on Shopify that rely on subscriptions and want a customer-friendly portal with loyalty and upsell options.",
  },
  {
    q: "How is pricing structured?",
    a: "Typically tiered by subscription GMV and feature access. Higher tiers include more retention tools, analytics, and support.",
  },
  {
    q: "Does it help reduce churn?",
    a: "Yes. Smartrr includes pause/skip, cancellation offers, loyalty, and dunning to keep subscribers active.",
  },
  {
    q: "Is migration supported?",
    a: "Migration help is available for moving from other subscription apps; plan for QA and comms before switching.",
  },
  {
    q: "What integrations exist?",
    a: "Integrates with Shopify ecosystem apps across email/SMS, loyalty, analytics, and fulfillment.",
  },
  {
    q: "Do customers get a portal?",
    a: "Yes. The customer portal allows skips, swaps, add-ons, and rewards to boost retention.",
  },
  {
    q: "Does it replace analytics?",
    a: "No. It provides subscription analytics; pair with broader analytics/attribution to track full funnel impact.",
  },
];

function SmartrrToolPage() {
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
        "Smartrr is a Shopify subscription platform focused on retention and loyalty-driven experiences. It helps brands reduce churn with portals, rewards, and cancellation flows.",
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
      title: "Customer-first portal",
      body: "Skips, pauses, swaps, and add-ons with a branded experience to keep subscribers engaged.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Loyalty & rewards",
      body: "Incentives and perks for subscribers to increase retention and upsells.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Churn reduction",
      body: "Cancellation flows, dunning, and offers to save at-risk subscribers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Secure Shopify checkout",
      body: "Built on Shopify for compliance and payment stability; works with Shopify checkout.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Analytics",
      body: "Subscription KPIs, churn insights, and cohorts to guide retention experiments.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Ecosystem integrations",
      body: "Connects to email/SMS, loyalty, and support tools to coordinate subscriber journeys.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Smartrr review: pricing, features, pros & cons, and alternatives so you can decide if it fits your Shopify subscription program."
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
                  {toolName} elevates subscription CX with portals, rewards, and churn reduction flows—keeping subscribers engaged longer.
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
              {toolName} is a Shopify subscription app focused on retention through better customer experience. It offers a branded portal, loyalty perks, and churn-fighting flows to keep subscribers active.
            </p>
            <p className="mt-3 text-slate-700">
              Brands use it to reduce cancellations, drive add-ons, and connect subscription data to marketing. Implementation requires theme QA and integration checks.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with lifecycle marketing, loyalty, and analytics to personalize offers and monitor cohorts.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify DTC brands where subscriber experience and loyalty are central to retention.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands wanting a branded portal with skip/pause/swap options.",
                "Teams using loyalty and perks to increase retention and AOV.",
                "Marketers coordinating offers via email/SMS when churn risk rises.",
                "Brands migrating from legacy apps seeking improved CX.",
                "Ops teams aiming to reduce support tickets with self-serve portals.",
                "Analytics teams tracking cohorts and churn save rates.",
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
              {toolName} centers on subscriber experience, loyalty, and churn reduction within Shopify.
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
                  {toolName} pricing is tiered by subscription GMV and feature depth. Higher tiers unlock advanced retention flows, analytics, and support. Costs rise with volume; align fees to churn savings and LTV lift.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a tier that matches current GMV; re-evaluate after you measure churn impact and portal adoption.</p>
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
                    <td className="px-4 py-3">Growing subscription brands</td>
                    <td className="px-4 py-3">Portal, basic retention tools, integrations</td>
                    <td className="px-4 py-3">Good starting tier</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Higher-volume brands</td>
                    <td className="px-4 py-3">Rewards, deeper analytics, support</td>
                    <td className="px-4 py-3">Upgrade when retention programs expand</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Custom/Enterprise</td>
                    <td className="px-4 py-3">Complex implementations</td>
                    <td className="px-4 py-3">Tailored terms, SLAs, migration support</td>
                    <td className="px-4 py-3">Negotiate for high-volume needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for migration/QA and syncs with marketing tools. Track churn save rates, portal adoption, and LTV to evaluate ROI.
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
                  <li>Customer-friendly portal with self-serve controls.</li>
                  <li>Rewards and perks to increase retention and AOV.</li>
                  <li>Churn reduction flows (pause/skip/offers/dunning).</li>
                  <li>Shopify-first integrations across marketing and loyalty.</li>
                  <li>Analytics to monitor cohorts and churn saves.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing tied to GMV can get expensive at scale.</li>
                  <li>Requires implementation, QA, and migration planning.</li>
                  <li>Feature gaps vs. other apps may require add-ons—validate needs.</li>
                  <li>Retention results depend on marketing follow-through.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other subscription apps to match your portal, loyalty, and pricing preferences.
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
            <p className="text-slate-700">See how {toolName} compares to other subscription platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Recharge</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/recharge-subscriptions">
                  View Recharge
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Recharge is the incumbent with broad integrations; {toolName} differentiates on portal experience and loyalty-driven retention. Evaluate migration paths, pricing, and portal UX for your brand.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Skio</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/skio">
                  View Skio
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Skio emphasizes migration speed and churn tools; {toolName} leans into CX, rewards, and portal customization. Choose based on loyalty needs, UX preferences, and pricing fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a customer-centric subscription portal with loyalty and churn reduction baked in on Shopify.
            </p>
            <p className="mt-3 text-slate-700">
              Align pricing to GMV and retention goals, and plan migration plus lifecycle marketing to fully realize value.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for retention-focused subscription programs—best when paired with strong marketing automation and QAed implementation.
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
              Choose {toolName} if your Shopify brand wants a loyalty-forward portal that keeps subscribers engaged with perks and offers.
            </p>
            <p>
              Consider Recharge for breadth of integrations or Skio for migration speed and churn tools. {toolName} shines when CX and loyalty are top priorities.
            </p>
            <p>{toolName} helps reduce churn when combined with thoughtful offers, lifecycle messaging, and a smooth migration/QA plan.</p>
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

export default SmartrrToolPage;
