import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Bell, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Recharge Subscriptions";
const slug = "recharge-subscriptions";
const category = "Subscriptions & Billing for Ecommerce";
const shortPitch = "Recharge Subscriptions powers recurring billing, customer portals, and retention tools for subscription ecommerce brands.";
const pricingSummary = "Pricing combines platform fees plus transaction-based costs. Higher tiers add more features, support, and customization options.";
const officialUrl = "https://rechargepayments.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rechargepayments.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Appstle Subscriptions", slug: "appstle" },
  { name: "Bold Subscriptions", slug: "bold-subscriptions" },
  { name: "Loop Subscriptions", slug: "loop-subscriptions" },
  { name: "Ordergroove", slug: "ordergroove" },
  { name: "Smartrr", slug: "smartrr" },
];

const faqs = [
  { q: "What is Recharge?", a: "Recharge Subscriptions is a platform for recurring billing, customer portals, and subscription management for ecommerce brands." },
  { q: "Who is it for?", a: "DTC brands running subscriptions for consumables, memberships, or replenish products on Shopify and similar platforms." },
  { q: "Does Recharge include a customer portal?", a: "Yes. Customers can manage skips, swaps, frequency, and payment info via branded portals." },
  { q: "How is pricing structured?", a: "Platform and transaction fees; higher tiers add advanced features, customization, and support." },
  { q: "Does it handle churn reduction?", a: "Yes. Tools include dunning, winback flows, and incentives to keep subscribers active." },
  { q: "Are analytics included?", a: "Yes. Subscription analytics track churn, LTV, and cohorts to guide lifecycle decisions." },
  { q: "Does Recharge integrate with other apps?", a: "Integrates with Shopify, marketing, analytics, and fulfillment tools to sync data and actions." },
  { q: "Is developer support available?", a: "APIs and developer tools exist; higher tiers include more support for custom workflows." },
];

function RechargeToolPage() {
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
        "Recharge Subscriptions manages recurring billing, customer portals, churn tools, and analytics for subscription ecommerce brands.",
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
      icon: <CreditCard className="h-5 w-5 text-sky-500" />,
      title: "Recurring billing",
      body: "Manage subscriptions, renewals, and payment retries with flexible intervals.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Customer portal",
      body: "Offer branded portals for skips, swaps, address changes, and payment updates.",
    },
    {
      icon: <Bell className="h-5 w-5 text-rose-500" />,
      title: "Churn reduction",
      body: "Dunning, winback flows, and incentives to keep subscribers active.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
      title: "Analytics & cohorts",
      body: "Track churn, LTV, and cohorts to optimize lifecycle and pricing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & security",
      body: "Subscription tax, payment security, and compliance tooling for ecommerce.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-500" />,
      title: "Ecosystem integrations",
      body: "Connect with Shopify, marketing automation, and fulfillment platforms.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Recharge Subscriptions review: pricing, features, pros & cons, and alternatives to help you choose a subscription platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} powers subscription billing, portals, and churn tools so ecommerce brands can retain more subscribers.
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
              {toolName} is a subscription management platform for ecommerce. It handles recurring billing, customer portals, dunning, and analytics to keep subscribers active and informed.
            </p>
            <p className="mt-3 text-slate-700">Use it to reduce churn, enable customer self-service, and link subscription data to marketing and support workflows.</p>
            <p className="mt-3 text-slate-700">Pair with lifecycle marketing to turn insights into higher LTV and better retention.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for DTC brands running recurring products that need a solid portal, billing, and retention stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands offering replenish products like CPG or nutrition.",
                "Merchants wanting branded portals for skips and swaps.",
                "Teams focused on reducing churn with dunning and offers.",
                "Operators needing subscription analytics and cohorts.",
                "Stores tying subscriptions to personalization and upsells.",
                "Brands requiring robust integrations with fulfillment and marketing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} centers on recurring billing, portals, churn reduction, analytics, and integrations for subscription commerce.
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
                  {toolName} combines platform fees with transaction-based pricing. As volume grows, so do fees; higher tiers offer more customization, features, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the plan that covers your current volume and portal needs; upgrade when churn tooling, API depth, or support become critical.</p>
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
                    <td className="px-4 py-3">New subscription stores</td>
                    <td className="px-4 py-3">Core billing, basic portal, standard support</td>
                    <td className="px-4 py-3">Good for early launches</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Growth</td>
                    <td className="px-4 py-3">Scaling brands</td>
                    <td className="px-4 py-3">More customization, analytics, churn tools</td>
                    <td className="px-4 py-3">Fits most mid-market teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume or complex</td>
                    <td className="px-4 py-3">Advanced features, deeper API, enhanced support</td>
                    <td className="px-4 py-3">Use if you need SLAs and customization</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Watch fees against LTV and churn. Align plan choice to your growth and support expectations.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong recurring billing and dunning tools.</li>
                  <li>Branded customer portal for self-service.</li>
                  <li>Churn reduction features and incentives.</li>
                  <li>Analytics for LTV, churn, and cohorts.</li>
                  <li>Integrations with ecommerce, marketing, and fulfillment.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fees grow with volume and transactions.</li>
                  <li>Requires careful testing with checkout to avoid friction.</li>
                  <li>Advanced customization may need developer time.</li>
                  <li>Churn tools work best when paired with lifecycle marketing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other subscription platforms to match your billing complexity, churn goals, and support needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks up against other subscription platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Appstle Subscriptions</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/appstle">
                  View Appstle
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Appstle emphasizes affordability and fast setup; {toolName} offers deeper analytics and churn tooling. Choose based on whether cost or lifecycle depth matters more.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bold Subscriptions</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/bold-subscriptions">
                  View Bold Subscriptions
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bold offers broad ecommerce tooling alongside subscriptions; {toolName} specializes in subscription workflows and retention. Pick based on whether you want a focused subscription platform or a broader suite.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need reliable subscription billing, portals, and churn tools with solid analytics for ecommerce.
            </p>
            <p className="mt-3 text-slate-700">Make sure fees align with your volume and that you pair it with marketing to keep subscribers engaged.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A robust choice for subscription commerce; best when combined with lifecycle campaigns and margin guardrails.
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
            <p>Choose {toolName} if you need reliable subscription billing, branded portals, and churn tools with analytics.</p>
            <p>Consider Appstle or Bold for different price points or broader ecommerce features; use {toolName} when lifecycle and retention are priorities.</p>
            <p>{toolName} helps brands retain subscribers and simplify billing—keep marketing and support aligned for best results.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default RechargeToolPage;
