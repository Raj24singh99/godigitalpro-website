import React, { useState } from "react";
import { BarChart2, Sparkles, ShieldCheck, Plug, Cloud, Folder, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Peel Insights";
const slug = "peel-insights";
const category = "Ecommerce Analytics";
const shortPitch =
  "Peel Insights is an ecommerce analytics platform for Shopify brands, surfacing cohorts, LTV, retention, and subscription metrics without heavy BI setup.";
const pricingSummary =
  "Plan-based pricing tied to order volume/store count. Higher tiers add advanced metrics, more users, data syncs, and priority support.";
const officialUrl = "https://peelinsights.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/peelinsights.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Peel vs Triple Whale vs Lifetimely", slug: "compare/triple-whale-vs-lifetimely" },
  { name: "Lifetimely", slug: "lifetimely" },
  { name: "Daasity", slug: "daasity" },
  { name: "Peel vs Daasity vs Triple Whale", slug: "compare/daasity-vs-triple-whale" },
];

const faqs = [
  { q: "What is Peel Insights?", a: "Peel Insights is an analytics platform for Shopify brands that surfaces cohorts, LTV, retention, subscriptions, and product performance without custom BI." },
  { q: "Who is it for?", a: "DTC ecommerce teams that want plug-and-play metrics for revenue, retention, and cohorts without hiring data engineers." },
  { q: "Does it require coding?", a: "No. Peel connects to your store and surfaces prebuilt dashboards; exports and connectors are available for deeper analysis." },
  { q: "How is pricing structured?", a: "Pricing scales with order volume and store count; higher tiers add more users, metrics, and support." },
  { q: "Does Peel handle subscriptions?", a: "Yes. It reports on subscription performance, churn, retention, and LTV across cohorts." },
  { q: "Can I export data?", a: "Yes. Exports and integrations let you sync to other tools; check current connectors for your stack." },
  { q: "Is attribution included?", a: "It focuses on ecommerce metrics and cohorts; pair with attribution tools for channel-level modeling." },
  { q: "Is it good for agencies?", a: "Yes. Agencies can monitor client stores quickly without building custom dashboards." },
];

function PeelInsightsToolPage() {
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
        "Peel Insights gives Shopify brands plug-and-play cohorts, LTV, and retention reporting without building BI. It speeds decision-making for ecommerce growth teams.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <BarChart2 className="h-5 w-5 text-emerald-600" />, title: "Cohorts & LTV", body: "Monitor cohorts, LTV, and retention trends to guide growth and retention plans." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Prebuilt dashboards", body: "Out-of-the-box ecommerce metrics without BI setup or SQL." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Subscription analytics", body: "Track churn, MRR, and subscription behavior alongside one-time purchases." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Data syncs", body: "Exports and integrations to share metrics with marketing, finance, and CRM tools." },
    { icon: <Plug className="h-5 w-5 text-teal-500" />, title: "Shopify-native", body: "Connects directly to Shopify for quick setup; supports multi-store monitoring." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Alerts & reporting", body: "Track key metrics, set alerts, and keep teams aligned on revenue and retention." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Peel Insights review: pricing, ecommerce analytics features, pros & cons, and alternatives like Triple Whale and Lifetimely for Shopify brands."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} gives Shopify brands ready-made cohorts, LTV, and retention reporting—great for teams without BI resources.
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
              {toolName} is an ecommerce analytics platform focused on cohorts, LTV, retention, and subscriptions. It connects to Shopify and surfaces prebuilt dashboards to guide growth decisions.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use it to monitor repeat purchase behavior, product performance, and subscription churn without building a custom BI stack.
            </p>
            <p className="mt-3 text-slate-700">Pair it with attribution tools for channel-level insight and with finance tools for revenue reconciliation.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify-focused ecommerce teams that need fast retention and LTV insights.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands needing cohorts and LTV without BI hires.",
                "Subscription brands monitoring churn and retention quickly.",
                "Growth teams testing offers and bundles and measuring repeat behavior.",
                "Agencies reporting on client stores with minimal setup.",
                "Operators wanting automated dashboards instead of spreadsheets.",
                "Teams comparing SKUs and campaigns on retention/LTV, not just ROAS.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on fast ecommerce metrics, cohorts, and subscription analytics out of the box.</p>
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
                  Pricing scales with order volume and store count. Higher tiers add more users, advanced metrics, data sync options, and priority support. Expect quotes to vary by GMV and stores connected.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate metrics; upgrade when you need more users, stores, or advanced dashboards.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">Single-store brands</td>
                    <td className="px-4 py-3">Prebuilt dashboards, cohorts, LTV, basic exports</td>
                    <td className="px-4 py-3">Volume-based pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling DTC teams</td>
                    <td className="px-4 py-3">More users, advanced metrics, subscription dashboards</td>
                    <td className="px-4 py-3">Adds support/alerts</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Enterprise</td>
                    <td className="px-4 py-3">Multi-store/agency setups</td>
                    <td className="px-4 py-3">Multi-store, deeper data syncs, priority support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Benchmark cost against the time saved vs custom Looker/BI builds. Ensure key metrics (cohorts, LTV, subscriptions) match your growth model.
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
                  <li>Fast setup for Shopify; no BI required.</li>
                  <li>Strong cohorts, LTV, and subscription reporting.</li>
                  <li>Multi-store support for brands/agencies.</li>
                  <li>Exports and integrations to share data across teams.</li>
                  <li>Useful alerts and automated reporting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with volume; costs can rise with growth.</li>
                  <li>Attribution and MMM need separate tools.</li>
                  <li>Customization is lighter than full BI solutions.</li>
                  <li>Primarily Shopify-focused; non-Shopify stores need to confirm support.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} to other ecommerce analytics platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.slug.startsWith("compare") ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other analytics stacks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Triple Whale</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/triple-whale">
                  View Triple Whale
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Triple Whale bundles attribution with dashboards; {toolName} emphasizes cohorts and retention. Choose based on whether channel attribution or deep LTV is your priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Lifetimely</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/lifetimely">
                  View Lifetimely
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Lifetimely also focuses on LTV and cohorts; {toolName} offers broader subscription analytics and multi-store workflows. Pick based on features and pricing at your GMV.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast cohorts, LTV, and subscription analytics for Shopify without building BI. It saves time for growth and retention teams.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep attribution/marketing mix modeling, pair with dedicated tools. Validate pricing vs GMV and team usage.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong plug-and-play analytics choice for Shopify brands focused on retention and LTV.
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
              Choose {toolName} if you want plug-and-play ecommerce analytics for cohorts, LTV, and subscriptions without a BI build. It’s ideal for Shopify-focused teams.
            </p>
            <p>
              Consider Triple Whale for attribution or Daasity for broader data warehousing; {toolName} excels at fast retention insights with minimal setup.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your store, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PeelInsightsToolPage;
