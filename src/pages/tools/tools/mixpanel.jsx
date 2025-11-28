import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Mixpanel";
const slug = "mixpanel";
const category = "Product Analytics";
const shortPitch = "Mixpanel is a product analytics platform for tracking events, funnels, retention, and cohorts to understand user behavior and growth.";
const pricingSummary = "Free and paid plans based on MTUs and data volume. Higher tiers add advanced analysis, governance, and data pipeline features.";
const officialUrl = "https://mixpanel.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mixpanel.com",
  gradient: "from-indigo-500 via-purple-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Amplitude", slug: "amplitude" },
  { name: "Heap", slug: "heap" },
  { name: "Pendo", slug: "pendo" },
  { name: "PostHog", slug: "posthog" },
  { name: "Google Analytics 4", slug: "google-analytics-4" },
];

const faqs = [
  { q: "What is Mixpanel?", a: "Mixpanel is a product analytics tool for tracking events, building funnels, cohorts, and retention reports to understand user behavior." },
  { q: "Who is it for?", a: "Product managers, growth teams, and analysts who need self-serve behavioral analytics for web and mobile apps." },
  { q: "How is pricing handled?", a: "Free plan with data limits; paid plans scale by monthly tracked users/events and add governance and export features." },
  { q: "Does it support mobile?", a: "Yes. SDKs exist for web and mobile platforms to track events and user properties." },
  { q: "Can I do cohort analysis?", a: "Yes. Cohorts can be built from events and properties and exported to downstream tools." },
  { q: "Is there a data pipeline?", a: "Paid tiers offer data pipelines and exports to warehouses; check plan specifics." },
  { q: "What about privacy?", a: "Mixpanel provides controls for data retention, privacy, and consent tagging; implementation choices matter." },
  { q: "Does it replace a data warehouse?", a: "No. It provides analytics; warehouses remain useful for modeling and governance." },
];

function MixpanelToolPage() {
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
        "Mixpanel provides event-based analytics, funnels, retention, and cohorts for product teams. It is strong for self-serve exploration and growth analysis.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Event tracking", body: "Track events and user properties across web and mobile with SDKs and APIs." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Funnels & flows", body: "Build funnels and user flows to find drop-offs and optimize conversion paths." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Retention & cohorts", body: "Analyze retention, build cohorts, and measure how behaviors affect long-term usage." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations & exports", body: "Send cohorts to messaging tools; export data to warehouses on paid tiers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Governance", body: "Schema controls, lexicon, and privacy settings help keep events consistent and compliant." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Self-serve analysis", body: "Non-technical users can slice data, build dashboards, and answer questions quickly." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Mixpanel review: pricing, features, pros & cons, and alternatives so you can decide if it fits your product analytics needs."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
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
                  {toolName} helps teams move from raw events to insights—self-serve funnels, retention, and cohorts make analysis fast. Good governance keeps schemas clean.
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
              {toolName} is an event-based analytics platform for product teams. It provides funnels, retention, cohorts, and segmentation to understand how users adopt and return to your product.
            </p>
            <p className="mt-3 text-slate-700">
              It is designed for self-serve analysis so PMs and growth teams can answer questions without always writing SQL. Analysts still add value by defining events and governance.
            </p>
            <p className="mt-3 text-slate-700">Use it to identify activation drivers, drop-offs, and retention levers across platforms.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for product, growth, and analytics teams that need fast behavioral insights.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product managers tracking activation and adoption.",
                "Growth teams optimizing onboarding and paywalls.",
                "Analysts building funnels and cohorts for experimentation.",
                "Mobile teams needing cross-platform event tracking.",
                "Marketing teams syncing cohorts to messaging tools.",
                "Startups needing self-serve dashboards for product metrics.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on event analytics, self-serve exploration, and retention insights that help teams ship better products.
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
                  {toolName} offers a free plan with limits. Paid plans scale by monthly tracked users/events and add governance, data pipelines, and higher retention. Choose based on volume and compliance needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the free plan to validate events; move to Growth/Enterprise when you need higher MTUs, exports, and governance.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Startups and testing</td>
                    <td className="px-4 py-3">Core reports, limited MTUs, basic retention</td>
                    <td className="px-4 py-3">Great for early validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling teams</td>
                    <td className="px-4 py-3">Higher limits, advanced queries, data pipeline add-ons</td>
                    <td className="px-4 py-3">Fits most mid-size products</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Governance, security, SSO, dedicated support</td>
                    <td className="px-4 py-3">Best for compliance and scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan event schemas early to avoid sprawl. Monitor MTU usage and retention costs; integrate with warehouses for long-term storage if needed.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong self-serve funnels, retention, and cohorts.</li>
                  <li>Good SDK coverage for web and mobile.</li>
                  <li>Free plan to start with clear upgrade paths.</li>
                  <li>Cohort exports to messaging tools support activation.</li>
                  <li>Governance features on higher tiers keep data clean.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Event schema discipline is required to avoid chaos.</li>
                  <li>MTU-based pricing can climb with usage.</li>
                  <li>Less suited for deep data modeling vs warehouses.</li>
                  <li>Some advanced features need higher tiers or add-ons.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other product analytics tools to match pricing, governance, and data depth.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with similar analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Amplitude</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/amplitude">
                  View Amplitude
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Amplitude has strong behavioral analysis and experimentation features; {toolName} is known for usability and fast self-serve. Choose based on depth of analysis vs ease of adoption and pricing fit.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Heap</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/heap">
                  View Heap
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Heap emphasizes autocapture and retroactive analysis; {toolName} requires planned events but offers strong self-serve UI. Choose based on your tracking philosophy and governance needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want self-serve product analytics with strong funnels, retention, and cohorts, and you can invest in clean event schemas.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor MTU costs and consider warehouse exports for long-term storage. Align tracking with product goals to keep data useful.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Excellent for product teams needing fast behavioral insights; governance and cost control are key to long-term success.
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
            <p>Use {toolName} to understand user behavior, improve activation and retention, and power growth experiments.</p>
            <p>
              Invest in event design and governance; monitor costs as usage scales; pair with your warehouse for long-term data needs.
            </p>
            <p>{toolName} delivers fast insights for product teams—discipline around tracking keeps it accurate and actionable.</p>
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

export default MixpanelToolPage;
