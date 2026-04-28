import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AttributionApp";
const slug = "attributionapp";
const category = "Analytics & Attribution";
const shortPitch =
  "AttributionApp is a marketing attribution platform that stitches multi-channel touchpoints to show which campaigns drive conversions and revenue.";
const pricingSummary =
  "Sales-led pricing by data volume, channels, and features. Higher tiers add multi-touch models, API access, advanced reporting, and support.";
const officialUrl = "https://www.attributionapp.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/attributionapp.com",
  gradient: "from-sky-500 via-blue-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.26)]",
};

const alternatives = [
  { name: "AnyTrack", slug: "anytrack" },
  { name: "Hyros", slug: "hyros" },
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Wicked Reports", slug: "wicked-reports" },
  { name: "Improvely", slug: "improvely" },
];

const faqs = [
  {
    q: "What is AttributionApp?",
    a: "AttributionApp is a marketing attribution platform that combines web analytics, ad platform data, and conversions to show channel performance.",
  },
  {
    q: "Who is it for?",
    a: "Performance and growth teams who need multi-touch attribution across paid, organic, email, and referral channels.",
  },
  {
    q: "How does pricing work?",
    a: "Sales-led; tiers scale by traffic/events, integrations, and features like API, models, and reporting.",
  },
  {
    q: "Does it replace analytics?",
    a: "No. It complements analytics with attribution modeling. Pair with GA/warehouse for deeper analysis.",
  },
  {
    q: "What models are supported?",
    a: "First/last touch, linear, time decay, position-based, and custom weights (on higher tiers).",
  },
  {
    q: "Is setup complex?",
    a: "Requires tagging, data source connections, and QA. Plan time to validate events and deduplication.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Validate model fit, data quality, and alignment with business KPIs before making spend decisions.",
  },
];

function AttributionAppToolPage() {
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
        "AttributionApp unifies multi-channel touchpoints to show which campaigns drive conversions and revenue. It’s useful for performance teams when paired with solid tagging and QA.",
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
      title: "Multi-touch models",
      body: "First/last, linear, time-decay, and position-based models to understand influence across the funnel.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Channel & campaign reporting",
      body: "Revenue, conversions, and ROAS views across paid, organic, email, and referral sources.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Event stitching",
      body: "Combines web sessions, UTMs, and conversions to reduce attribution gaps.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Deduplication",
      body: "Controls to reduce double-counting between platforms and analytics tools.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect ad platforms, analytics, ecommerce, and CRMs for unified reporting.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "API & exports",
      body: "Export clean data to BI/warehouses; available on higher tiers for custom reporting.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AttributionApp review: pricing, features, pros & cons, and alternatives so you can choose the right attribution platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} unifies multi-channel touchpoints to show which campaigns drive revenue—best with disciplined tagging and QA.
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
              {toolName} is a marketing attribution platform that connects multi-channel touchpoints to show which campaigns, creatives, and channels drive conversions and revenue.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to inform budget allocation and creative tests. Plan for tagging, source integrations, and QA to keep data trustworthy.
            </p>
            <p className="mt-3 text-slate-700">Pair with a BI/warehouse for deeper cohort and LTV analysis if you need more granular insights.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance marketers who need cross-channel attribution clarity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce marketers allocating budget across paid social/search/affiliate.",
                "Lead-gen teams tracking multi-touch journeys before conversion.",
                "Agencies needing standardized attribution across clients.",
                "Brands impacted by signal loss who need more reliable models.",
                "Teams that A/B test offers and creatives and need ROAS clarity.",
                "Operators exporting clean data to BI/warehouse for deeper analysis.",
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
            <p className="mt-3 text-slate-700">{toolName} centers on multi-touch attribution, deduplication, and exportable reporting.</p>
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
                  Pricing is sales-led and scales with traffic/events, integrations, and features. Higher tiers add custom models, API access, and advanced reporting. Budget for implementation and ongoing QA.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate data quality and model fit; upgrade when you need exports/API or more volume.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Fit testing</td>
                    <td className="px-4 py-3">Core models, limited integrations</td>
                    <td className="px-4 py-3">Use to validate data quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling teams</td>
                    <td className="px-4 py-3">More volume, more integrations, better reporting</td>
                    <td className="px-4 py-3">Common for active spenders</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Custom models, API/export, advanced support</td>
                    <td className="px-4 py-3">Plan for onboarding and QA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Model costs against spend and expected lift. Keep a QA cadence to maintain trustworthy data.</p>
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
                  <li>Multi-touch models for better signal than last-touch alone.</li>
                  <li>Channel/campaign ROAS and conversion views.</li>
                  <li>Integrations with ad platforms and analytics.</li>
                  <li>Export/API options for BI workflows.</li>
                  <li>Deduplication controls to reduce double-counting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Sales-led pricing; can be high for smaller teams.</li>
                  <li>Requires careful tagging and QA for accuracy.</li>
                  <li>Model choice can sway results; needs interpretation.</li>
                  <li>Not a full analytics warehouse; pair with BI for depth.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other attribution tools for model flexibility, integrations, and pricing.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other attribution platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AnyTrack</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/anytrack">
                  View AnyTrack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AnyTrack focuses on conversion capture via pixels/CAPI; {toolName} emphasizes multi-touch reporting. Choose based on data capture needs vs model/report depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hyros</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hyros">
                  View Hyros
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hyros adds call/email tracking depth; {toolName} provides broader channel attribution. Pick based on channel mix and data capture requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need multi-touch attribution and can invest in tagging, QA, and interpretation. It helps guide spend, but models require context.
            </p>
            <p className="mt-3 text-slate-700">
              Pair with BI/warehouse for deeper analysis. Monitor data quality and revisit model choices as campaigns change.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid attribution platform when backed by disciplined implementation and data review.
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
            <p>{toolName} brings multi-touch attribution and reporting across channels.</p>
            <p>Use it when you need clearer ROAS signals and can maintain tagging, QA, and model review. It’s a decision aid, not a replacement for BI.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your attribution needs, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
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

export default AttributionAppToolPage;
