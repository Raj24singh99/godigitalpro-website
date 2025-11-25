import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Heap";
const slug = "heap";
const category = "Product Analytics";
const shortPitch = "Heap is a digital product analytics platform with auto-capture, retroactive analysis, and customer journey insights.";
const pricingSummary = "Free/entry tier with event limits; paid plans scale by usage, data retention, governance, and support.";
const officialUrl = "https://heap.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/heap.io",
  gradient: "from-indigo-600 via-fuchsia-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Mixpanel", slug: "mixpanel" },
  { name: "Amplitude", slug: "amplitude" },
  { name: "FullStory", slug: "fullstory" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "Snowplow", slug: "snowplow" },
];

const faqs = [
  {
    q: "What is Heap?",
    a: "Heap is a product analytics platform that auto-captures user interactions, enabling retroactive funnels, retention, and journey analysis without manual event tracking.",
  },
  {
    q: "Who is it for?",
    a: "Product, growth, and UX teams that want granular behavioral data with less instrumentation overhead.",
  },
  {
    q: "Does Heap auto-capture events?",
    a: "Yes. Heap auto-captures clicks, pageviews, form changes, etc., and lets you define events retroactively.",
  },
  {
    q: "How is pricing structured?",
    a: "Usage-based (events/visits) with differences in retention, governance, and support across tiers. Free/entry tiers are limited.",
  },
  {
    q: "Does it have session replay?",
    a: "Heap offers session replays to complement quantitative analysis on some plans.",
  },
  {
    q: "What about data governance?",
    a: "Paid tiers add governance, PII redaction, and access controls. Data privacy still requires careful setup.",
  },
  {
    q: "Can I integrate with data warehouses?",
    a: "Yes. Heap supports warehouse sync/export and integrations with engagement and marketing tools.",
  },
  {
    q: "How does it compare to manual tracking?",
    a: "Auto-capture reduces upfront instrumentation, but you should still curate events and define clear taxonomies.",
  },
];

function HeapToolPage() {
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
        "Heap auto-captures user behavior so teams can run retroactive analysis on funnels, retention, and journeys. It lowers instrumentation effort but still needs governance for quality data.",
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
      title: "Auto-capture",
      body: "Collect clicks, views, and form interactions automatically for retroactive analysis.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Funnels & journeys",
      body: "Analyze drop-offs and paths to optimize activation and conversion.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Retention & cohorts",
      body: "Track returning users, engagement by segment, and lifecycle cohorts.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance",
      body: "Event curation, PII controls, and access management on higher tiers.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Session replay",
      body: "View user sessions to pair qualitative insights with quantitative data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Sync with warehouses and engagement tools to activate insights.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Heap review: pricing, features, pros & cons, and alternatives so you can choose the right product analytics stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-700" />
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
                  {toolName} reduces instrumentation work with auto-capture and retroactive analysis—ideal for teams that want answers fast without rebuilding tracking.
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
              {toolName} is product analytics that auto-captures user behavior so teams can build funnels, retention views, and journey maps without exhaustive upfront event tagging. It pairs quantitative charts with session replays to speed diagnosis.
            </p>
            <p className="mt-3 text-slate-700">Use it to uncover drop-offs, validate experiments, and monitor activation and adoption across your product.</p>
            <p className="mt-3 text-slate-700">Data quality still benefits from event naming conventions and governance, especially as teams grow.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for teams that want analytics without heavy instrumentation upfront.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product managers diagnosing activation and adoption.",
                "Growth teams optimizing conversion funnels.",
                "UX teams pairing quant data with replays for usability fixes.",
                "Teams migrating from ad-hoc event tracking to structured analytics.",
                "Companies wanting warehouse exports to combine with BI.",
                "Lean teams that need fast answers without big data engineering lifts.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on auto-capture, retroactive analysis, and journey insights.</p>
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
                  Pricing is usage-based (events/visits) with limits on retention, governance, and features by tier. Free/entry tiers exist; higher plans add replays, governance, SSO, and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free/entry to validate auto-capture; move up when you need longer retention, replays, or governance.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Auto-capture, basic reports, limited retention</td>
                    <td className="px-4 py-3">Great to test fit</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth/Pro</td>
                    <td className="px-4 py-3">Scaling products</td>
                    <td className="px-4 py-3">More events/retention, journeys, replays, governance basics</td>
                    <td className="px-4 py-3">Likely sweet spot</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">SSO, advanced governance, SLAs, deep support</td>
                    <td className="px-4 py-3">Contracted and usage-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Align event volumes with budget; plan taxonomy and redaction early to keep data clean as auto-capture scales.
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
                  <li>Auto-capture reduces upfront instrumentation effort.</li>
                  <li>Retroactive event definition for faster analysis.</li>
                  <li>Journeys, funnels, and retention built-in.</li>
                  <li>Session replay pairs quant with qualitative insight.</li>
                  <li>Warehouse exports/integrations for activation.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage-based pricing can climb with heavy traffic.</li>
                  <li>Data governance and PII controls require diligence.</li>
                  <li>Auto-capture still benefits from curated taxonomies.</li>
                  <li>Advanced experimentation may need complementary tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other product analytics platforms.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mixpanel</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/mixpanel">
                  View Mixpanel
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mixpanel excels with event-based tracking and strong funnels; {toolName} reduces instrumentation via auto-capture. Choose Mixpanel if you prefer manual, precise schemas; {toolName} for faster retroactive analysis.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Amplitude</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/amplitude">
                  View Amplitude
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Amplitude offers deep product analytics and experimentation; {toolName} emphasizes auto-capture and replays. Pick Amplitude for advanced product ops, {toolName} for speed with lighter setup.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want product analytics with minimal upfront tracking and value journey insights plus replays.
            </p>
            <p className="mt-3 text-slate-700">If you need deep experimentation or strict, manual schemas, compare it to Mixpanel/Amplitude and factor in governance needs.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong choice for teams wanting speed-to-insight with auto-capture—plan for data hygiene as you scale.
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
            <p>Choose {toolName} if you want auto-captured product analytics with retroactive queries and session replays.</p>
            <p>Pick Mixpanel/Amplitude for stricter event schemas or advanced experimentation; consider Snowplow if you want full control via your warehouse.</p>
            <p>{toolName} works best when paired with a clear taxonomy and governance to keep auto-captured data tidy.</p>
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

export default HeapToolPage;
