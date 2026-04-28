import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Nosto";
const slug = "nosto";
const category = "Ecommerce Personalization";
const shortPitch = "Nosto personalizes onsite experiences, recommendations, and merchandising to lift conversion and AOV across ecommerce stores.";
const pricingSummary = "Pricing is quote-based by traffic and feature set. Higher tiers add advanced segments, merchandising rules, testing, and support.";
const officialUrl = "https://www.nosto.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/nosto.com",
  gradient: "from-sky-500 via-indigo-500 to-fuchsia-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Dynamic Yield", slug: "dynamicyield" },
  { name: "Optimizely", slug: "optimizely" },
  { name: "Bloomreach", slug: "bloomreach" },
  { name: "Klaviyo CDP", slug: "klaviyo-cdp" },
  { name: "Segment", slug: "segment" },
];

const faqs = [
  { q: "What is Nosto?", a: "Nosto is an ecommerce personalization platform that delivers tailored recommendations, content, and merchandising to increase conversion and average order value." },
  { q: "How does Nosto price plans?", a: "Pricing is custom based on traffic, catalogs, and features. Expect quotes that scale with volume and modules activated." },
  { q: "Does it support A/B testing?", a: "Yes. You can test recommendation strategies, layouts, and experiences to measure uplift." },
  { q: "Which ecommerce platforms are supported?", a: "Nosto integrates with Shopify, Magento/Adobe Commerce, BigCommerce, WooCommerce, and headless setups through APIs and tags." },
  { q: "Can I control merchandising rules?", a: "Yes. You can pin, boost, or exclude products and set rules by category, margin, stock, or brand." },
  { q: "Is there a CDP?", a: "Nosto manages segments and behaviors for personalization. For richer profiles, you can connect CDPs like Segment or Klaviyo." },
  { q: "Is setup technical?", a: "Core setup uses tags or platform apps; deeper use (headless, advanced events) may need developer help." },
  { q: "How is data privacy handled?", a: "Nosto supports GDPR and provides data processing terms. Review your data mapping and cookie consent flows." },
];

function NostoToolPage() {
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
        "Nosto personalizes ecommerce experiences with recommendations, content, and merchandising controls. It is suited for mid-market and enterprise stores that want measurable uplift without building personalization from scratch.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Personalized recommendations", body: "Serve dynamic product recommendations across home, PDP, cart, and email to lift conversion and AOV." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Merchandising control", body: "Boost, pin, and exclude products with rules for margin, stock, brands, categories, and campaigns." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Platform integrations", body: "Apps and APIs for Shopify, Magento, BigCommerce, WooCommerce, and headless builds." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Segmentation", body: "Behavior- and attribute-based segments to target experiences and promos." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Testing and uplift", body: "A/B test strategies and placements, measure uplift, and iterate with analytics." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Data privacy", body: "GDPR-supporting flows with data processing terms; align with your consent setup." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Nosto review: pricing, features, pros & cons, and alternatives to decide if its ecommerce personalization fits your store."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-fuchsia-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-700" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} brings personalization and merchandising together. Run experiments, tune rules, and tie experiences to revenue.
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
              {toolName} is an ecommerce personalization platform for recommendations, content blocks, popups, and merchandising. It uses behavioral data and product attributes to tailor onsite experiences and increase conversion, AOV, and repeat rate.
            </p>
            <p className="mt-3 text-slate-700">
              Teams can deploy via platform apps or tags, configure placements, set merchandising rules, and test strategies. Advanced users connect feeds, CDPs, and headless frontends through APIs for deeper control.
            </p>
            <p className="mt-3 text-slate-700">
              Success hinges on clean product data, clear segment definitions, and disciplined testing. Align campaigns with margin targets and inventory to avoid promoting out-of-stock or low-margin items.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for mid-market and enterprise ecommerce brands that want measurable uplift without building personalization in-house.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Retailers with sizable catalogs needing dynamic recommendations and upsells.",
                "Merchandising teams that want rules-based control with AI assist.",
                "Marketing teams coordinating campaigns with onsite experiences.",
                "Brands expanding internationally that need localized experiences.",
                "Stores running A/B tests on placements, layouts, and strategies.",
                "Headless teams wanting API access without building a recommendation engine.",
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
              {toolName} combines recommendations, merchandising rules, segments, and testing to align experiences with revenue goals.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Nosto pricing is custom. Expect quotes based on traffic, SKU count, and modules used (recommendations, content, search, merchandising). Ask for clear pricing per impression, per placement, or per module to forecast ROI.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Growth",
                  price: "Custom",
                  detail: "Core recommendations and onsite personalization for growing stores.",
                  bestFor: "Brands moving beyond basic theme widgets.",
                },
                {
                  name: "Professional",
                  price: "Custom",
                  detail: "Adds advanced merchandising, segments, A/B testing, and more placements.",
                  bestFor: "Merchandising teams needing control and measurement.",
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  detail: "Higher SLAs, support, headless/API depth, multi-store setups, and compliance options.",
                  bestFor: "High-volume retailers with complex catalogs and markets.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Request ROI benchmarks, clear traffic banding, and overage rules. Model uplift by placement and margin to justify spend before rollout.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Strong ecommerce focus with prebuilt placements and templates.</li>
                  <li>Merchandising rules and boosts for margin- and stock-aware control.</li>
                  <li>A/B testing and uplift reporting to guide iterations.</li>
                  <li>Integrations and apps for popular ecommerce platforms.</li>
                  <li>Headless-friendly APIs for custom storefronts.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Quote-based pricing can be opaque without detailed modeling.</li>
                  <li>Advanced setups may need developer time for events and APIs.</li>
                  <li>Requires disciplined data hygiene for best recommendations.</li>
                  <li>May overlap with CDP or ESP features if you already own those.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Nosto alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different price points, channel coverage, or guardrails:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">Personalization platform</p>
                  </div>
                  <Link className="text-sm font-semibold text-sky-700 hover:text-sky-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Nosto vs other personalization tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Nosto vs Dynamic Yield",
                  betterFor: "Dynamic Yield offers deep testing and multi-channel; Nosto is faster to deploy for ecommerce sites.",
                  choose: "Pick Nosto for ecommerce-first setups and quicker rollout. Pick Dynamic Yield for heavier experimentation and multi-property orchestration.",
                },
                {
                  title: "Nosto vs Optimizely",
                  betterFor: "Optimizely excels at experimentation; Nosto focuses on ecommerce merchandising and recommendations.",
                  choose: "Pick Nosto if you need turnkey merchandising controls. Pick Optimizely if experimentation depth is your primary need.",
                },
                {
                  title: "Nosto vs Bloomreach",
                  betterFor: "Bloomreach adds search and content; Nosto specializes in onsite recommendations and merchandising.",
                  choose: "Pick Nosto if you want lighter weight personalization. Pick Bloomreach if you need unified search, content, and CDP capabilities.",
                },
                {
                  title: "Nosto vs Klaviyo CDP",
                  betterFor: "Klaviyo centralizes messaging and profiles; Nosto focuses on onsite experiences.",
                  choose: "Pick Nosto for onsite merchandising and recs. Pick Klaviyo to unify messaging and lifecycle flows; they can be paired.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you have sufficient traffic and catalog depth to benefit from personalization. It shines when teams can test often, enforce merchandising rules, and measure revenue lift. Smaller stores may find costs high relative to volume—model ROI first.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Clean product data and inventory feeds before rollout.",
                "Map segments to campaigns with clear success metrics.",
                "Start with high-impact placements (home, PDP, cart) before expanding.",
                "Use A/B testing to validate uplift and inform spend with finance.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} fits mid-market and enterprise ecommerce brands that want fast personalization and merchandising control with measurable uplift. If you already have a heavy experimentation stack, you can pair Nosto for onsite commerce use cases; if budget is tight, consider lighter widgets or ESP-driven recommendations first.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your store, explore it here:{" "}
                  <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default NostoToolPage;
