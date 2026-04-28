import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Ortto";
const slug = "ortto";
const category = "Marketing Automation & Customer Data";
const shortPitch = "Ortto blends customer data, journeys, email/SMS, and analytics so teams can automate lifecycle marketing in one platform.";
const pricingSummary = "Plans scale by contacts and features. Higher tiers add journey complexity, reporting, and channel volume.";
const officialUrl = "https://ortto.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/ortto.com",
  gradient: "from-emerald-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Klaviyo CDP", slug: "klaviyo-cdp" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Customer.io", slug: "customer-io" },
  { name: "Iterable", slug: "iterable" },
];

const faqs = [
  { q: "Does Ortto replace my ESP?", a: "It can for many teams, offering email/SMS plus journeys and analytics." },
  { q: "Is there a free trial?", a: "Trials are typically available; check Ortto for current offers and contact limits." },
  { q: "Do I need engineers?", a: "Initial event tracking setup benefits from developer help; day-to-day journeys are marketer-friendly." },
  { q: "Does Ortto support B2B?", a: "Yes, though it is especially popular with PLG and SaaS teams." },
  { q: "Can I export data?", a: "Yes. You can export or sync segments to other tools; confirm limits and APIs." },
  { q: "Is SMS supported?", a: "Yes. SMS is available; confirm regional availability and costs." },
  { q: "What about analytics?", a: "Ortto includes dashboards and cohort reports tied to lifecycle events and revenue." },
  { q: "Does it integrate with CRMs?", a: "Yes. Integrations are available to sync data with CRMs and product analytics tools." },
];

function OrttoToolPage() {
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
        "Ortto is a marketing automation and CDP-lite platform. It unifies customer data, builds visual journeys, and sends email/SMS with reporting to optimize lifecycle performance.",
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
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Unified customer data", body: "Combine events and attributes into profiles and segments." },
    { icon: <Sparkles className="h-5 w-5 text-emerald-500" />, title: "Visual journeys", body: "Build multi-channel flows with triggers, splits, and experiments." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Email & SMS", body: "Send lifecycle messages with personalization and throttling controls." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Reporting & cohorts", body: "Dashboards for conversions, revenue, and cohort trends by segment." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Sync data with CRMs, ad platforms, and product analytics." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Governance", body: "Permissions, workspace controls, and suppression lists for compliance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Ortto review: pricing, features, pros & cons, and alternatives to decide if its lifecycle automation and data fits your stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-700" />
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
                  {toolName} lets you unify customer data and automate journeys across email/SMS with experiments and reporting. Keep events clean to maximize results.
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
              {toolName} brings customer data, segmentation, and messaging together. It ingests customer events and attributes, then lets marketers build journeys across email, SMS, and in-app messages. Dashboards and cohort reports show performance by segment, and experiments can compare paths to improve conversion or retention.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations push and pull data to keep profiles current. It is a good fit for SaaS and product-led teams that want a unified view without the complexity of a full CDP plus separate ESP.
            </p>
            <p className="mt-3 text-slate-700">
              Advanced enterprise use cases may still need a dedicated CDP, but for many teams {toolName} covers lifecycle automation, messaging, and analytics in one stack.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SaaS and lifecycle teams needing data-driven journeys without heavy engineering.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product-led growth teams automating onboarding and activation.",
                "Marketing teams orchestrating email/SMS based on product events.",
                "Success teams running win-back and churn prevention campaigns.",
                "Founders who want dashboards tied to lifecycle milestones.",
                "Data-aware marketers needing segments across events and traits.",
                "Teams replacing separate ESP, journey builder, and analytics tools.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
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
              {toolName} combines event data, journeys, and messaging with analytics to iterate on lifecycle campaigns.
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
              Plans scale by contacts and features. Higher tiers add journey complexity, reporting, and channel volume. Confirm SMS rates, email volume, and event/segment limits before committing.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Starter", price: "Entry", detail: "Core journeys, email, basic reporting, contact limits", bestFor: "Early teams and pilots" },
                { name: "Professional", price: "Mid-tier", detail: "Advanced journeys, experiments, SMS, more data sources", bestFor: "Growing SaaS and lifecycle teams" },
                { name: "Enterprise", price: "Custom", detail: "Higher volumes, SSO, dedicated support, custom limits", bestFor: "Larger orgs with compliance needs" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Instrument key events (signup, activation, retention) before buying higher tiers. Model contact growth and SMS/email volume to forecast costs.
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
                  <li>Combines customer data, journeys, and messaging in one platform.</li>
                  <li>Visual builder with experiments to optimize paths.</li>
                  <li>Analytics and cohort views tied to lifecycle events.</li>
                  <li>Integrations keep profiles current across tools.</li>
                  <li>Reduces the need for separate ESP and lightweight CDP.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Contact-based pricing can rise with list growth.</li>
                  <li>Advanced data modeling is lighter than full CDPs.</li>
                  <li>Email/SMS design flexibility may need custom branding.</li>
                  <li>Requires clean event tracking to realize full value.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Compare these if you need different channel depth or CDP capabilities:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Lifecycle/automation alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-emerald-700 hover:text-emerald-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other lifecycle tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Ortto vs HubSpot", betterFor: "HubSpot spans sales/marketing CRM; Ortto is leaner for product-led journeys and event-driven automation.", choose: "Pick Ortto for PLG journeys and in-product events. Pick HubSpot for broader sales/marketing CRM needs." },
                { title: "Ortto vs Customer.io", betterFor: "Customer.io offers granular API control; Ortto is more visual and bundled with analytics.", choose: "Pick Ortto for marketer-friendly journeys. Pick Customer.io for deep API-driven control." },
                { title: "Ortto vs Klaviyo", betterFor: "Klaviyo excels for ecommerce; Ortto is oriented to SaaS and product-led use cases.", choose: "Pick Ortto for SaaS and PLG. Pick Klaviyo if ecommerce is core." },
                { title: "Ortto vs Iterable", betterFor: "Iterable scales messaging across many channels; Ortto is lighter-weight for mid-market PLG teams.", choose: "Pick Ortto for simplicity. Pick Iterable for large-scale multi-channel programs." },
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
              {toolName} is worth it if you want unified journeys across email/SMS backed by product events. Instrument key events (signup, activation, retention) before building flows. Monitor contact growth to forecast costs; archive inactive contacts responsibly.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Instrument core events and validate data before scaling journeys.",
                "Start with one lifecycle flow (onboarding or churn prevention) to prove value.",
                "Create segment rules and suppression policies to protect deliverability.",
                "Track contact growth and channel costs to avoid budget surprises.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
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
                {toolName} centralizes event-driven journeys with built-in analytics and messaging. It is most effective when your tracking is reliable and segments are well-defined. Start with one lifecycle flow, measure uplift, then expand channels and segments.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your lifecycle programs, start a trial here:{" "}
                  <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
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

export default OrttoToolPage;
