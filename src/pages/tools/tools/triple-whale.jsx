import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Triple Whale";
const slug = "triple-whale";
const category = "Ecommerce analytics";
const shortPitch = "Triple Whale unifies ecommerce analytics, attribution, and dashboards for Shopify brands to track ROAS, LTV, and channel performance.";
const pricingSummary =
  "Plan-based pricing by store revenue and features. Higher tiers add advanced attribution, creative insights, and expanded dashboards/support.";
const officialUrl = "https://www.triplewhale.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/triplewhale.com",
  gradient: "from-blue-500 via-purple-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Triple Whale Pixel", slug: "triple-whale-pixel" },
  { name: "Redtrack", slug: "redtrack" },
  { name: "AnyTrack", slug: "anytrack" },
  { name: "Hyros", slug: "hyros" },
  { name: "Segment", slug: "segment" },
];

const faqs = [
  {
    q: "What is Triple Whale?",
    a: "Triple Whale is an ecommerce analytics and attribution platform for Shopify brands, offering dashboards, LTV/cohort views, and tracking.",
  },
  {
    q: "Who is it for?",
    a: "Shopify merchants and agencies that need clearer attribution, ROAS tracking, and unified dashboards across channels.",
  },
  {
    q: "Does it include a pixel?",
    a: "Yes. Triple Whale Pixel (and CAPI) feeds data into the analytics platform for better attribution.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale with revenue/store size and feature depth. Higher tiers add advanced attribution, creative insights, and more support.",
  },
  {
    q: "What channels does it cover?",
    a: "Meta, Google, TikTok and others, plus first-party data via pixel and API connections.",
  },
  {
    q: "Does it replace GA or ads managers?",
    a: "It complements them with ecommerce-focused attribution and dashboards. Keep core analytics for compliance and backup.",
  },
  {
    q: "Is technical setup required?",
    a: "Setup is guided; pixel/CAPI and integrations still need QA to ensure clean data.",
  },
  {
    q: "What about privacy and consent?",
    a: "You must manage consent and data-sharing policies; configure pixel and integrations accordingly.",
  },
];

function TripleWhalePage() {
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
        "Triple Whale gives Shopify brands dashboards, attribution, and LTV/cohort views powered by its pixel and integrations. It’s strong for ecommerce insight if tracking and consent are configured correctly.",
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
      title: "Attribution & pixel",
      body: "First-party pixel and CAPI capture events for clearer ROAS across channels.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Dashboards & cohorts",
      body: "Revenue, channel, and cohort/LTV views tuned for ecommerce decisions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Creative insights",
      body: "Analyze creative performance to inform iteration and budget allocation.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Data QA",
      body: "Tools to spot event gaps and discrepancies; ongoing monitoring still required.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect Shopify, ad platforms, and other data sources to centralize reporting.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Benchmarks & alerts",
      body: "Benchmarks and alerts to track performance shifts; availability depends on plan.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Triple Whale review: pricing, features, pros & cons, and alternatives so Shopify brands can evaluate analytics and attribution needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} centralizes ecommerce attribution and insights—use it to guide spend and creative decisions, with tracking and consent configured properly.
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
              {toolName} is an ecommerce analytics and attribution platform for Shopify. It combines first-party tracking with dashboards, ROAS/LTV views, and creative insights to help brands allocate spend.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a decision layer: data quality depends on proper pixel/CAPI setup and consent. Keep GA and ad platform data for backup and compliance.
            </p>
            <p className="mt-3 text-slate-700">Plan for onboarding time to map events, connect channels, and align reporting definitions.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify brands with meaningful ad spend seeking clearer attribution and ecommerce dashboards.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands scaling Meta/Google/TikTok spend.",
                "Marketing teams needing unified ROAS and LTV views.",
                "Analysts building cohorts and retention reporting.",
                "Operators wanting creative performance insights.",
                "Agencies standardizing reporting for Shopify clients.",
                "Teams frustrated with platform attribution gaps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
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
              {toolName} focuses on attribution, dashboards, LTV/cohorts, creative insights, and integrations for Shopify brands.
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
                  {toolName} pricing scales by revenue/store size and feature bundle. Higher tiers add advanced attribution, creative insights, benchmarks, and premium support. Costs rise with data volume and stores connected.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick the lowest tier that includes the attribution depth you need; upgrade when you add stores, channels, or need creative/benchmark modules.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Base</td>
                    <td className="px-4 py-3">Smaller brands</td>
                    <td className="px-4 py-3">Core dashboards, pixel, basic attribution</td>
                    <td className="px-4 py-3">Validate fit and data quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling spend</td>
                    <td className="px-4 py-3">Deeper attribution, more integrations, creative insights</td>
                    <td className="px-4 py-3">Common pick for DTC teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">High-volume or multi-store</td>
                    <td className="px-4 py-3">Highest limits, benchmarks, premium support</td>
                    <td className="px-4 py-3">Use if you need advanced analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Align pricing with expected ROAS lift. Budget time for data validation; keep alternative analytics for backup and compliance.
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
                  <li>Ecommerce-focused attribution and dashboards.</li>
                  <li>First-party pixel/CAPI to improve signals.</li>
                  <li>LTV/cohort and creative insights.</li>
                  <li>Multi-store/channel integrations for Shopify brands.</li>
                  <li>Alerts/benchmarks available on higher plans.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with revenue and features.</li>
                  <li>Data quality relies on correct pixel/consent setup.</li>
                  <li>Less useful outside Shopify ecosystem.</li>
                  <li>Still need GA/ad platform data for redundancy/compliance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other attribution and tracking tools to match your stack and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hyros</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/hyros">
                  View Hyros
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hyros covers multi-channel attribution beyond Shopify; {toolName} is optimized for Shopify with strong dashboards. Choose based on platform scope and ease of deployment.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Redtrack</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/redtrack">
                  View Redtrack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Redtrack is a broader ad tracker with rule-based automations; {toolName} emphasizes ecommerce dashboards and creative insights. Pick based on whether you need multi-channel rule automation or Shopify-focused analytics.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you are a Shopify brand with real ad spend and need clearer attribution, LTV, and creative insights powered by first-party tracking.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure pixel/CAPI, consent, and naming conventions are solid before judging performance lift. Keep backup analytics for redundancy.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong analytics layer for Shopify growth teams—best with disciplined tracking and data hygiene.
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
              Choose {toolName} if you want Shopify-focused attribution, LTV, and creative insights powered by first-party tracking.
            </p>
            <p>
              Consider Hyros for broader channel coverage or Redtrack for rule-based ad tracking; use {toolName} when Shopify is central and you need ecommerce dashboards.
            </p>
            <p>{toolName} can clarify performance—keep tracking, consent, and data hygiene tight to trust the numbers.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TripleWhalePage;
