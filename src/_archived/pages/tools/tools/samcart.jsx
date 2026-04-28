import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, ShoppingCart, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SamCart";
const slug = "samcart";
const category = "Checkout & Funnels";
const shortPitch = "SamCart is a checkout and sales page platform with upsells, order bumps, subscriptions, and digital product selling features.";
const pricingSummary = "Tiered plans by features and usage. Higher tiers add A/B testing, subscriptions, advanced upsells, and integrations. Transaction fees vary by plan/payment setup.";
const officialUrl = "https://www.samcart.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/samcart.com",
  gradient: "from-indigo-500 via-blue-500 to-teal-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "ThriveCart", slug: "thrivecart" },
  { name: "ClickFunnels", slug: "clickfunnels" },
  { name: "Shopify", slug: "shopify" },
  { name: "Kajabi", slug: "kajabi" },
  { name: "WooCommerce", slug: "woocommerce" },
];

const faqs = [
  { q: "What is SamCart?", a: "SamCart is a checkout and sales page platform with upsells, order bumps, and subscriptions for digital and physical products." },
  { q: "Who is it for?", a: "Creators and businesses selling courses, digital goods, and offers that need optimized checkout flows with upsells." },
  { q: "Does it support subscriptions?", a: "Yes. Subscriptions, trials, and payment plans are supported on applicable tiers." },
  { q: "How is pricing structured?", a: "Plans differ by features (upsells, A/B testing, subscriptions) and transaction terms; higher tiers remove limits and add advanced tools." },
  { q: "Does it include A/B testing?", a: "A/B testing and advanced upsell features are available on higher plans." },
  { q: "Can I sell digital goods?", a: "Yes. Digital delivery, product pages, and order bumps/upsells are supported." },
  { q: "Does it integrate with other tools?", a: "Integrations with email, membership, and payment providers are available depending on plan." },
  { q: "Is human review needed?", a: "Yes. Test funnels, taxes, and compliance (VAT, refunds) before launch." },
];

function SamcartToolPage() {
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
        "SamCart provides optimized checkout pages, upsells, bumps, and subscription tools for digital and physical products. It’s popular with creators who want fast funnels.",
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
      icon: <ShoppingCart className="h-5 w-5 text-indigo-500" />,
      title: "Optimized checkout pages",
      body: "Build sales pages and checkout flows focused on conversions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Upsells & order bumps",
      body: "Add one-click upsells, downsells, and bumps to increase AOV.",
    },
    {
      icon: <CreditCard className="h-5 w-5 text-teal-600" />,
      title: "Subscriptions & payment plans",
      body: "Offer trials, recurring billing, and payment plans on supported tiers.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Digital delivery",
      body: "Sell digital products and courses with delivery and access controls.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "A/B testing & analytics",
      body: "Test pages and track performance; available on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect email, membership, and payment providers; check plan limits.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SamCart review: pricing, features, pros & cons, and alternatives to evaluate it for checkout and upsell funnels."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} helps teams build high-converting checkouts with upsells and subscriptions—test thoroughly to keep UX smooth and compliant.
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
              {toolName} is a checkout and sales page builder focused on conversion. It offers upsells, bumps, subscriptions, and payment options for digital and physical products with templates tuned for speed.
            </p>
            <p className="mt-3 text-slate-700">Use it to launch offers quickly; pair with testing, tax/compliance checks, and post-purchase communication.</p>
            <p className="mt-3 text-slate-700">Integrate with email/membership tools to fulfill and nurture buyers.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators and businesses selling offers that need optimized checkout flows and upsells.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators selling digital products and bundles.",
                "Marketers launching funnels with upsells and bumps.",
                "DTC brands testing alternative checkouts alongside stores.",
                "Agencies setting up fast funnels for clients.",
                "Sellers needing payment plans and subscriptions quickly.",
                "Teams wanting A/B testing and analytics for checkouts.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on optimized checkouts, upsells, subscriptions, analytics, and integrations.</p>
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
                  {toolName} uses tiered plans. Higher tiers include A/B testing, subscriptions, advanced upsells, and deeper integrations. Payment processing and transaction fees depend on providers and plan.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose a tier with upsells and subscriptions if those are core; test free trials if available, then upgrade for A/B testing and integrations.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Launch/Entry</td>
                    <td className="px-4 py-3">Testing simple checkouts</td>
                    <td className="px-4 py-3">Core checkout pages, limited upsells</td>
                    <td className="px-4 py-3">Good for early validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Grow</td>
                    <td className="px-4 py-3">Scaling funnels</td>
                    <td className="px-4 py-3">Upsells, subscriptions, better integrations</td>
                    <td className="px-4 py-3">Fits most growing sellers</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">High-volume teams</td>
                    <td className="px-4 py-3">A/B testing, advanced upsells, support</td>
                    <td className="px-4 py-3">Use when optimization is critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Model transaction fees and payment processor costs. Validate tax/VAT settings for your regions.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Optimized checkout pages and templates.</li>
                  <li>Upsells, bumps, and subscriptions to lift AOV.</li>
                  <li>Digital delivery support for courses/products.</li>
                  <li>A/B testing and analytics on higher tiers.</li>
                  <li>Integrations with email and membership tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Transaction fees and payment costs can add up.</li>
                  <li>Limited compared to full ecommerce platforms.</li>
                  <li>A/B testing and some features require higher tiers.</li>
                  <li>Needs careful tax/compliance setup.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other checkout and funnel tools to match your stack.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other funnel platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ThriveCart</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/thrivecart">
                  View ThriveCart
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ThriveCart offers lifetime pricing and strong checkout features; {toolName} provides tiered plans with testing and subscription tools. Choose based on pricing model and needed features.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickFunnels</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/clickfunnels">
                  View ClickFunnels
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickFunnels is a broader funnel builder with pages and automation; {toolName} is checkout-focused. Pick based on whether you need full funnel builds or optimized checkouts.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need optimized checkouts with upsells, bumps, and subscriptions and want a lighter alternative to full ecommerce platforms.
            </p>
            <p className="mt-3 text-slate-700">Test flows, fees, and compliance; ensure integrations cover email and fulfillment needs.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid checkout/funnel tool for creators and marketers; best when paired with testing and clear tax/fulfillment processes.</p>
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
            <p>Choose {toolName} if you want quick, optimized checkouts with upsells and subscriptions for digital or physical offers.</p>
            <p>Consider ThriveCart or ClickFunnels for different pricing or funnel breadth; use {toolName} when checkout optimization is the priority.</p>
            <p>{toolName} can lift AOV and conversions—monitor fees, test flows, and ensure compliance.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SamcartToolPage;
