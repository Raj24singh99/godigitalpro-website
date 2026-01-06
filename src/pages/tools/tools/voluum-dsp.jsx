import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Voluum DSP";
const slug = "voluum-dsp";
const category = "Programmatic advertising";
const shortPitch = "Voluum DSP is a demand-side platform with built-in tracking to buy display/native/CTV inventory and optimize performance campaigns.";
const pricingSummary =
  "Media spend plus platform/tech fees. Costs scale with budget, data usage, and features; contracts may vary by region and spend.";
const officialUrl = "https://voluum.com/dsp";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/voluum.com",
  gradient: "from-indigo-500 via-blue-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "The Trade Desk", slug: "thetradedesk" },
  { name: "StackAdapt", slug: "stackadapt" },
  { name: "RTB House", slug: "rtbhouse" },
  { name: "Taboola", slug: "taboola" },
  { name: "Outbrain", slug: "outbrain" },
];

const faqs = [
  {
    q: "What is Voluum DSP?",
    a: "Voluum DSP is a demand-side platform with integrated tracking, letting you buy display/native/CTV inventory and optimize performance campaigns.",
  },
  {
    q: "Who is it for?",
    a: "Performance marketers and agencies running multi-channel programmatic campaigns that need tracking and optimization in one stack.",
  },
  {
    q: "How is pricing structured?",
    a: "CPM-based media buying with platform/tech fees. Contracts can vary by spend, region, and features used.",
  },
  {
    q: "What channels are supported?",
    a: "Display, native, CTV, and other programmatic inventory via supported exchanges/partners.",
  },
  {
    q: "Does it include tracking?",
    a: "Yes. Tracking and optimization tools are built in; ensure pixels/conversions are set up correctly.",
  },
  {
    q: "What about brand safety?",
    a: "Brand safety filters and verification integrations are available—configure allow/block lists and QA placements.",
  },
  {
    q: "Is it self-serve?",
    a: "Yes, aimed at experienced buyers. Training and process are important for pacing and QA.",
  },
  {
    q: "Does it replace analytics?",
    a: "Use it for campaign tracking/optimization; keep analytics/attribution for cross-channel measurement and validation.",
  },
];

function VoluumDSPToolPage() {
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
        "Voluum DSP combines programmatic buying with Voluum tracking. It can streamline performance campaigns, but requires disciplined setup, brand safety, and QA.",
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
      title: "Integrated tracking",
      body: "Voluum tracking built in—manage campaigns and attribution in one place.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Multi-channel buying",
      body: "Access display, native, CTV inventory with optimization tools for performance.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Optimization & rules",
      body: "Automation rules to cut poor placements, adjust bids, and improve CPA/ROAS.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand safety",
      body: "Filters, verification, and allow/block lists to maintain quality and compliance.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reporting",
      body: "Campaign and placement-level reporting; validate with external analytics where needed.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Pacing & QA",
      body: "Tools to control spend and pacing; requires active monitoring especially in early flights.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Voluum DSP review: pricing, features, pros & cons, and alternatives so you can evaluate it for programmatic performance campaigns."
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
                  {toolName} merges DSP buying with tracking—use it with tight brand safety, QA, and pacing controls to hit CPA/ROAS goals.
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
              {toolName} is a programmatic demand-side platform paired with Voluum tracking. It lets you buy display/native/CTV inventory, optimize bids, and measure performance within the same ecosystem.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a performance DSP: success depends on clean conversion setup, brand safety rules, and proactive optimization. Keep external analytics for validation and cross-channel views.
            </p>
            <p className="mt-3 text-slate-700">Plan for structured QA, allow/block lists, and pacing rules before scaling budgets.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for experienced performance buyers running multi-channel programmatic with tight CPA/ROAS goals.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers managing display/native/CTV campaigns.",
                "Agencies needing integrated tracking and buying.",
                "Advertisers seeking rule-based optimization and pacing.",
                "Teams that want Voluum tracking plus DSP in one stack.",
                "Marketers ready to manage brand safety and placement QA.",
                "Buyers needing quick reporting loops for CPA/ROAS control.",
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
              {toolName} focuses on integrated tracking, multi-channel buying, optimization rules, brand safety, reporting, and pacing controls.
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
                  {toolName} pricing includes media spend plus platform/tech fees. Costs vary by region, data usage, and contract terms. Expect fees to rise with budget and feature use.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with controlled budgets; scale after verifying CPA/ROAS. Clarify platform fees and data costs upfront.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Stage</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pilot</td>
                    <td className="px-4 py-3">Initial validation</td>
                    <td className="px-4 py-3">Limited budgets, strict brand safety</td>
                    <td className="px-4 py-3">Baseline CPA/ROAS and viewability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Growing performance</td>
                    <td className="px-4 py-3">Expanded placements, optimization rules</td>
                    <td className="px-4 py-3">Monitor data fees and frequency</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Always-on</td>
                    <td className="px-4 py-3">Mature programs</td>
                    <td className="px-4 py-3">Full mix, ongoing QA, brand safety layers</td>
                    <td className="px-4 py-3">Requires refresh and QA cadence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Negotiate fees, set daily caps, and keep brand safety strict early. Validate conversions with external analytics to ensure accuracy.
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
                  <li>Integrated DSP + tracking workflow.</li>
                  <li>Multi-channel inventory access (display/native/CTV).</li>
                  <li>Automation rules for optimization.</li>
                  <li>Brand safety and placement controls.</li>
                  <li>Reporting tied to conversions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires experienced buyers and QA.</li>
                  <li>Platform/data fees add to media spend.</li>
                  <li>Placement quality varies; needs active curation.</li>
                  <li>Data verification with external analytics is advised.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other DSPs and native networks to match your channel mix, fee structure, and control needs.
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
            <p className="text-slate-700">See how {toolName} compares to other programmatic platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs The Trade Desk</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/thetradedesk">
                  View The Trade Desk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                The Trade Desk offers broad enterprise controls and data partners; {toolName} pairs closely with Voluum tracking for performance workflows. Choose based on control depth and tracking stack preferences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs StackAdapt</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/stackadapt">
                  View StackAdapt
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                StackAdapt is known for ease-of-use and strong support; {toolName} ties in Voluum’s tracking for performance buyers. Pick based on your need for tracking integration vs platform ease/coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run performance campaigns and want DSP buying integrated with Voluum tracking, and you have the expertise to manage brand safety and optimization.
            </p>
            <p className="mt-3 text-slate-700">
              Keep external analytics for verification, and set strict QA and pacing processes before scaling spend.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid DSP for performance teams in the Voluum ecosystem—best with disciplined tracking, brand safety, and optimization routines.
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
              Choose {toolName} if you want DSP buying tied to Voluum tracking for performance campaigns and you can maintain strict QA and brand safety.
            </p>
            <p>
              Consider The Trade Desk for broader enterprise controls or StackAdapt for ease-of-use and support; use {toolName} when integrated tracking is your priority.
            </p>
            <p>{toolName} can drive performance—ensure conversions are accurate and brand safety is enforced before scaling budgets.</p>
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

export default VoluumDSPToolPage;
