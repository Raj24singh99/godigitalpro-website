import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Taboola";
const slug = "taboola";
const category = "Native advertising";
const shortPitch = "Taboola is a native ads network that places sponsored content across publisher sites to drive traffic, leads, and conversions.";
const pricingSummary =
  "CPC-based spend with campaign budgets and bids. Costs vary by vertical and competition; higher budgets unlock scale and placements.";
const officialUrl = "https://www.taboola.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/taboola.com",
  gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Outbrain", slug: "outbrain" },
  { name: "StackAdapt", slug: "stackadapt" },
  { name: "MGID", slug: "mgid" },
  { name: "RTB House", slug: "rtbhouse" },
  { name: "The Trade Desk", slug: "thetradedesk" },
];

const faqs = [
  {
    q: "What is Taboola?",
    a: "Taboola is a native advertising platform that distributes sponsored articles and video placements across publisher sites.",
  },
  {
    q: "Who is it for?",
    a: "Performance marketers, publishers, and brands seeking traffic, leads, or conversions via native placements at scale.",
  },
  {
    q: "How is pricing structured?",
    a: "Campaigns run on CPC bidding with daily budgets. Costs depend on geo, device, vertical, and competition.",
  },
  {
    q: "Does it support video?",
    a: "Yes. You can run native video campaigns with view- and click-based optimization options.",
  },
  {
    q: "What targeting is available?",
    a: "Contextual placements, geo/device targeting, audience retargeting, and interest segments are available.",
  },
  {
    q: "Is creative QA required?",
    a: "Yes. Headlines and thumbnails should follow network policies and be optimized for CTR and relevance.",
  },
  {
    q: "Does Taboola integrate with analytics?",
    a: "You can track with pixels and integrate conversions into analytics/attribution tools via tags or server-side.",
  },
  {
    q: "How do optimizations work?",
    a: "Campaigns can be optimized toward CPC/CPA goals; performance improves with creative testing and negative placement lists.",
  },
];

function TaboolaToolPage() {
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
        "Taboola offers native ads across publisher inventory. Great for scale on content-style campaigns; success hinges on creatives, landing pages, and ongoing optimization.",
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
      title: "Native placements",
      body: "Sponsored content units across publisher feeds for scale beyond search and social.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Video + display",
      body: "Run video or image-led creatives with optimization toward clicks or conversions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Creative testing",
      body: "Test headlines, thumbnails, and landing pages to improve CTR and CPA.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand safety tools",
      body: "Controls for placement exclusions, categories, and publisher-level management.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Attribution pixels",
      body: "Use pixels or server-side tracking to capture conversions and feed optimization.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Context + audience",
      body: "Target by interests, retarget visitors, and leverage contextual placements.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Taboola review: pricing, features, pros & cons, and alternatives so you can evaluate native ads for traffic and conversion goals."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
                  {toolName} helps scale native campaigns across publishers—success requires strong creatives, landing pages, and active optimization.
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
              {toolName} is a native advertising network for distributing sponsored stories and videos on publisher sites. It focuses on performance outcomes like traffic, leads, and conversions via content-style ads.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a performance channel that needs creative testing, compliant headlines, and strong post-click experiences. Native works best with content-driven funnels and clear attribution.
            </p>
            <p className="mt-3 text-slate-700">Set up pixels, verify placements, and monitor quality to keep CPAs in line.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for advertisers with content-led funnels and teams ready to optimize creatives and placements.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers scaling beyond search/social.",
                "Lead gen teams using advertorial-style landers.",
                "Brands with video or story-driven campaigns.",
                "Publishers promoting subscriptions or newsletters.",
                "Ecommerce brands testing content-to-cart flows.",
                "Agencies managing native budgets across clients.",
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
              {toolName} focuses on native placements, creative testing, brand safety, and conversion tracking for performance campaigns.
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
                  {toolName} is CPC-based with budgets and bids. Costs vary by geo, device, vertical, and creative performance. Higher budgets can unlock better placements but require strong CPA control.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with controlled budgets and 5-10 headline/thumbnail pairs; scale winners once CPAs stabilize.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Test budgets</td>
                    <td className="px-4 py-3">Initial validation</td>
                    <td className="px-4 py-3">Low daily caps, multiple creatives</td>
                    <td className="px-4 py-3">Find CTR and CPA baselines</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale campaigns</td>
                    <td className="px-4 py-3">Growing performance</td>
                    <td className="px-4 py-3">Higher bids, expanded placements</td>
                    <td className="px-4 py-3">Maintain CPA with exclusions</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Always-on</td>
                    <td className="px-4 py-3">Ongoing acquisition</td>
                    <td className="px-4 py-3">Retargeting + evergreen winners</td>
                    <td className="px-4 py-3">Refresh creatives frequently</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track conversions with pixels or server-side. Build exclusion lists, rotate creatives, and align landing pages to claims for compliance and performance.
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
                  <li>Large native inventory across publishers.</li>
                  <li>Supports video and image creatives.</li>
                  <li>Contextual and audience targeting options.</li>
                  <li>Conversion tracking with pixels/server-to-server.</li>
                  <li>Placement controls for brand safety.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires constant creative testing and refresh.</li>
                  <li>Performance can vary widely by placement quality.</li>
                  <li>Compliance and headline policies need attention.</li>
                  <li>CPA control depends on exclusions and bidding discipline.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other native and programmatic platforms to match reach, controls, and budget fit.
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
            <p className="text-slate-700">See how {toolName} compares to other native and programmatic options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Outbrain</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/outbrain">
                  View Outbrain
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Outbrain and {toolName} both offer native placements; performance depends on creative and vertical. Test both to see which inventory and CPC deliver better CPAs.
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
                StackAdapt is a programmatic DSP with broader channels; {toolName} specializes in native feeds. Choose based on whether you want multi-channel DSP controls or native-focused scale.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you have content-driven funnels, strong creatives, and the resources to test, exclude, and iterate to hit CPA targets.
            </p>
            <p className="mt-3 text-slate-700">
              Success hinges on landing page quality, attribution setup, and creative refresh cadence. Budget for ongoing optimization.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A proven native network for scale—best when paired with disciplined testing and compliance checks.
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
              Choose {toolName} if you want native reach across publishers and can support creative testing, landing page alignment, and CPA discipline.
            </p>
            <p>
              Consider Outbrain to compare inventory or StackAdapt for broader DSP controls; use {toolName} when native scale is the priority.
            </p>
            <p>{toolName} can drive meaningful volume—ensure tracking, creative refreshes, and brand safety guardrails stay in place.</p>
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

export default TaboolaToolPage;
