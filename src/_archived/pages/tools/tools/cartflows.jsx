import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "CartFlows";
const slug = "cartflows";
const category = "WooCommerce Funnels";
const shortPitch =
  "CartFlows is a funnel builder for WooCommerce that adds optimized checkout flows, order bumps, upsells/downsells, and templates to increase conversion and AOV without custom code.";
const pricingSummary =
  "CartFlows has a free version; paid Pro plans start around $79/year for solo sites and ~$239/year for multi-site with advanced funnels, upsells, and A/B testing.";
const officialUrl = "https://cartflows.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/cartflows.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "ThriveCart", slug: "thrivecart" },
  { name: "Shopify", slug: "shopify" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "ClickFunnels", slug: "clickfunnels" },
  { name: "Lemon Squeezy", slug: "lemon-squeezy" },
];

const faqs = [
  { q: "What does CartFlows do?", a: "CartFlows replaces default WooCommerce checkout with optimized funnels, order bumps, upsells, downsells, and A/B testing to lift conversion and AOV." },
  { q: "Is CartFlows easy to set up?", a: "Yes. It works with popular page builders (Elementor, Divi, Gutenberg) and includes templates for landing pages and checkouts. You can launch funnels quickly without coding." },
  { q: "Does CartFlows support one-click upsells?", a: "CartFlows Pro supports one-click upsells/downsells after checkout to increase AOV, along with order bumps and cart abandonment tools." },
  { q: "What payment gateways work with CartFlows?", a: "CartFlows supports WooCommerce gateways including Stripe, PayPal, Razorpay, and others. One-click upsells require compatible gateways (e.g., Stripe, PayPal Reference Transactions)." },
  { q: "Does CartFlows have A/B testing?", a: "Yes. CartFlows Pro includes split testing for steps in your funnels to optimize copy, layouts, and offers." },
  { q: "Is CartFlows mobile-friendly?", a: "Templates are responsive and work with modern page builders, so funnels stay performant on mobile and desktop." },
  { q: "Can agencies use CartFlows?", a: "Yes. CartFlows has multi-site licenses, templates, and controls that agencies use to launch funnels for clients quickly." },
  { q: "Which plan should I choose?", a: "Try the free version to validate. Use Pro for one-click upsells/downsells, A/B testing, and advanced templates, especially if you rely on AOV boosts." },
];

function CartFlowsToolPage() {
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
        "CartFlows upgrades WooCommerce with optimized funnels, order bumps, and post-purchase upsells. It’s a proven way to raise checkout conversion and AOV without custom development.",
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
      icon: <ShoppingBag className="h-5 w-5 text-orange-500" />,
      title: "Optimized checkouts and templates",
      body: "Replace default Woo checkout with high-converting templates. Works with major page builders to match brand and reduce drop-off.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Order bumps and post-purchase offers",
      body: "Add order bumps on checkout and one-click upsells/downsells after purchase to increase AOV without extra traffic.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Funnel builder for WooCommerce",
      body: "Create step-by-step funnels (landing, checkout, upsell, thank you) with conditional flows and A/B tests to optimize performance.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Payment and plugin compatibility",
      body: "Supports popular Woo gateways (Stripe, PayPal, Razorpay) and plays well with LMS/ecommerce plugins like LearnDash and membership tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Performance and control",
      body: "Lightweight templates, analytics, and cart abandonment recovery help keep load times low and revenue growing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Agency-friendly licensing",
      body: "Multi-site licenses and reusable templates help agencies launch funnels quickly across clients and industries.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="CartFlows review for WooCommerce stores: pricing, features, pros & cons, alternatives, and comparisons vs ThriveCart or Shopify checkout flows."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  CartFlows turns WooCommerce into a high-converting funnel machine with optimized checkouts, bumps, and one-click upsells that lift revenue fast.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-100" />
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
              {toolName} is a {category.toLowerCase()} plugin that replaces default WooCommerce checkout with optimized funnels, order bumps, and one-click upsells/downsells. It helps merchants boost conversion and average order value without custom builds.
            </p>
            <p className="mt-3 text-slate-700">
              It works with popular page builders and payment gateways, making it easy for marketers and agencies to deploy funnels without developer-heavy projects.
            </p>
            <p className="mt-3 text-slate-700">
              Built-in analytics, A/B testing, and templates shorten launch times and support ongoing CRO.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} is best for WooCommerce stores and agencies focused on revenue per visitor.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "WooCommerce stores wanting better checkout conversion and higher AOV.",
                "Marketers running product launches or limited-time offers on Woo.",
                "Agencies building funnels and post-purchase flows for clients quickly.",
                "Course creators or membership sites using WooCommerce for payments.",
                "Brands needing order bumps, upsells/downsells, and cart recovery.",
                "Teams wanting A/B testing for checkout steps without custom code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on checkout optimization, upsells, and quick funnel deployment on WooCommerce.</p>
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
                  Pricing is license-based with free and Pro tiers. Pro adds one-click upsells/downsells, A/B testing, advanced templates, and more site activations.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Free to validate; go Pro to unlock upsells, order bumps, and testing for meaningful revenue lifts.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing core funnels</td>
                    <td className="px-4 py-3">Basic funnel steps, limited templates</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (1 site)</td>
                    <td className="px-4 py-3">Single store owners</td>
                    <td className="px-4 py-3">Order bumps, one-click upsells/downsells, A/B testing</td>
                    <td className="px-4 py-3">~$79/year</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (multi-site)</td>
                    <td className="px-4 py-3">Agencies and portfolio sites</td>
                    <td className="px-4 py-3">Multiple sites, advanced templates, priority support</td>
                    <td className="px-4 py-3">~$239/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor gateway compatibility for one-click upsells (Stripe, PayPal Reference Transactions). Budget for add-ons like email or SMS recovery if needed.
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
                  <li>Fast way to add proven checkout funnels to WooCommerce.</li>
                  <li>One-click upsells/downsells and bumps materially increase AOV.</li>
                  <li>Works with popular page builders and payment gateways.</li>
                  <li>A/B testing supports ongoing conversion optimization.</li>
                  <li>Agency-friendly licensing for multiple sites.</li>
                  <li>Templates keep brand-consistent layouts without coding.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>One-click upsells depend on gateway support; setup may vary.</li>
                  <li>Not a full ecommerce platform—relies on WooCommerce stack stability.</li>
                  <li>Advanced analytics are lighter than dedicated CRO suites.</li>
                  <li>Multi-language or headless setups may need extra configuration.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              CartFlows competes with funnel builders and hosted carts. Choose based on CMS preference, upsell flexibility, and licensing model.
            </p>
            <p className="mt-2 text-slate-700">All can sell products; they differ on checkout control, hosting, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how CartFlows compares to other checkout and funnel tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ThriveCart/WooCommerce</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/thrivecart-vs-cartflows-vs-woocommerce">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ThriveCart is hosted and quick to launch; CartFlows keeps you on WooCommerce with more design control. Both offer upsells and bumps; CartFlows leans on your existing WP stack.
              </p>
              <p className="mt-2 text-slate-700">
                Choose CartFlows if you want WooCommerce flexibility and builder control; choose ThriveCart for an all-in-one hosted cart with simpler setup.
              </p>
              <p className="mt-2 text-slate-900">CartFlows wins on WordPress customization; ThriveCart wins on speed to deploy without plugins.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Shopify Checkout</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/thrivecart-vs-cartflows-vs-shopify-checkout">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Shopify checkout is hosted and secure with native Shop Pay; CartFlows offers more customizable flows on WooCommerce. Shopify limits upsells without apps; CartFlows gives one-click offers inside Woo.
              </p>
              <p className="mt-2 text-slate-700">
                Choose CartFlows if you want deep checkout control on WordPress. Choose Shopify for hosted reliability and an app ecosystem if you don’t want to manage hosting.
              </p>
              <p className="mt-2 text-slate-900">Both can convert well—pick based on platform preference and control needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run WooCommerce and need higher checkout conversion and AOV fast. It adds revenue-focused features without rebuilding your store or hiring developers.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer a hosted cart or different CMS, consider ThriveCart or Shopify. Otherwise, CartFlows is a low-effort way to turn WooCommerce into a funnel-focused store.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> CartFlows is a strong upgrade for WooCommerce brands and agencies looking to boost revenue through optimized funnels and upsells.
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
              Choose CartFlows if you want to boost WooCommerce revenue with optimized checkouts, order bumps, and one-click upsells. It’s built for marketers who want results fast.
            </p>
            <p>
              Consider ThriveCart for a hosted cart, or Shopify if you want a full hosted ecommerce platform. CartFlows is best when you want to stay on WordPress with deeper checkout control.
            </p>
            <p>CartFlows works alongside your existing theme, builder, and gateways to turn more clicks into revenue without heavy engineering.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default CartFlowsToolPage;
