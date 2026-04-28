import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Lifetimely";
const slug = "lifetimely";
const category = "Ecommerce Analytics";
const shortPitch = "Lifetimely provides LTV, cohort, and profit analytics for ecommerce brands, helping teams understand payback, margins, and retention.";
const pricingSummary =
  "Tiered pricing by revenue and features. Higher tiers add advanced cohorts, benchmarking, and profit analytics; costs scale with store size.";
const officialUrl = "https://www.lifetimely.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/lifetimely.io",
  gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Peel", slug: "peel" },
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Daasity", slug: "daasity" },
  { name: "Glew", slug: "glew" },
  { name: "ProfitWell", slug: "profitwell" },
];

const faqs = [
  {
    q: "What is Lifetimely?",
    a: "Lifetimely is an ecommerce analytics platform that focuses on lifetime value (LTV), cohorts, payback, and profit analytics.",
  },
  {
    q: "Who is Lifetimely best for?",
    a: "DTC and ecommerce brands that want to track LTV, retention, and profitability beyond basic platform analytics.",
  },
  {
    q: "Does it support cohort analysis?",
    a: "Yes. Cohort views show retention, repeat purchase behavior, and LTV over time.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is tiered by revenue and features. Higher tiers add advanced cohorts, benchmarks, and profit tools.",
  },
  {
    q: "Can it track profit and payback?",
    a: "Yes. Profit analytics and CAC payback calculations are available on paid plans.",
  },
  {
    q: "What integrations exist?",
    a: "Integrates with Shopify and key marketing/ads platforms to pull revenue, cost, and attribution data.",
  },
  {
    q: "Is benchmarking included?",
    a: "Benchmarks and forecasts are available on select tiers to compare performance with similar stores.",
  },
  {
    q: "Do I still need BI tools?",
    a: "You might for custom reporting, but Lifetimely covers common ecommerce LTV and profit views out of the box.",
  },
];

function LifetimelyPage() {
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
        "Lifetimely gives ecommerce teams LTV, cohort, and profit analytics to understand retention, payback, and margins beyond standard store dashboards.",
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
      title: "LTV & cohorts",
      body: "Track customer LTV, repeat purchase behavior, and retention over cohorts.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Profit analytics",
      body: "Monitor margins, CAC payback, and contribution profit to see true performance.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Forecasting",
      body: "Forecast revenue and LTV based on historical trends and cohorts (select tiers).",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Benchmarks",
      body: "Compare performance against similar stores to spot strengths and gaps.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Pull data from Shopify and ad platforms to unify revenue and cost signals.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Reporting",
      body: "Dashboards for LTV, retention, and profit; export data for deeper analysis.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Lifetimely review: pricing, features, pros & cons, and alternatives so you can choose the right ecommerce LTV and profit analytics platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
                  {toolName} shows LTV, cohorts, and profit insights so ecommerce teams can invest confidently and improve retention.
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
              {toolName} is an ecommerce analytics platform centered on lifetime value, cohorts, and profit. It helps brands understand customer retention, margins, and payback periods.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to see how cohorts perform, which channels drive quality customers, and when CAC is paid back. Integrations pull in revenue, cost, and attribution data.
            </p>
            <p className="mt-3 text-slate-700">
              Forecasting and benchmarking (on select tiers) give context against similar stores and future expectations.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce and DTC teams that need LTV, retention, and profit clarity beyond default storefront analytics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands tracking CAC payback and contribution profit.",
                "Marketing teams comparing channel LTV and retention.",
                "Finance/ops teams monitoring margins and forecasts.",
                "Founders wanting cohort-level insights, not just top-line revenue.",
                "Stores needing benchmarks against similar brands.",
                "Teams using Shopify and ad platforms that want unified reporting.",
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
              {toolName} focuses on LTV, cohorts, profit analytics, and integrations to give ecommerce teams a clearer view of customer value.
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
                  {toolName} pricing scales with revenue/size and features. Advanced cohorts, benchmarking, and profit analytics are on higher tiers—costs rise as stores grow.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick a tier with cohorts and profit tools; upgrade when you need benchmarks, forecasts, or higher data limits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Smaller stores</td>
                    <td className="px-4 py-3">Core LTV and cohort views</td>
                    <td className="px-4 py-3">Good starting point</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing DTC brands</td>
                    <td className="px-4 py-3">Profit analytics, payback, more data</td>
                    <td className="px-4 py-3">Best balance of features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Advanced</td>
                    <td className="px-4 py-3">Larger stores</td>
                    <td className="px-4 py-3">Benchmarks, forecasts, support</td>
                    <td className="px-4 py-3">Plan for onboarding and data QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm data sources, attribution setup, and margin inputs. Align on payback targets and monitor cohorts after campaigns to validate ROI.
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
                  <li>Strong LTV and cohort analytics tailored to ecommerce.</li>
                  <li>Profit and payback visibility beyond standard dashboards.</li>
                  <li>Benchmarks and forecasts on higher tiers.</li>
                  <li>Shopify and ads integrations unify revenue and cost data.</li>
                  <li>Clear dashboards for retention and repeat behavior.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with revenue and data needs.</li>
                  <li>Requires accurate cost inputs for profit/payback.</li>
                  <li>May still need BI tools for custom reports.</li>
                  <li>Benchmarks limited to available categories/peers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other ecommerce analytics tools to match your depth, pricing, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares with other ecommerce analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Triple Whale</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/triple-whale">
                  View Triple Whale
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Triple Whale focuses on ROAS and dashboards; {toolName} focuses on LTV/cohorts and profit. Choose based on whether retention/LTV or ad-centric views are your priority.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Peel</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/peel">
                  View Peel
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Peel offers automated ecommerce reports; {toolName} emphasizes LTV, payback, and profit. Pick based on whether you need automated reporting or deeper retention/profit views.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need LTV, cohort, and profit analytics to guide spend and retention decisions, and you’re on Shopify or similar stacks.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure cost inputs and attribution are accurate; use the data to set payback targets and retention experiments.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong LTV and profit analytics tool for ecommerce—best when paired with clean data and clear growth targets.
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
              Choose {toolName} if you want LTV, cohort, and profit insights to steer marketing and retention, and you can provide accurate cost data.
            </p>
            <p>
              Consider Triple Whale for ad-centric dashboards or Peel for automated reports; keep {toolName} for depth on retention and profitability.
            </p>
            <p>{toolName} helps you invest smarter in customers—data quality and clear targets are key to success.</p>
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

export default LifetimelyPage;
