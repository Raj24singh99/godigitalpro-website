import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "The Trade Desk";
const slug = "thetradedesk";
const category = "Programmatic DSP";
const shortPitch = "The Trade Desk is a demand-side platform for programmatic buying across display, video, CTV, and audio with deep targeting and reporting.";
const pricingSummary =
  "Platform fees plus media spend; CPM-based buying. Enterprise contracts vary. Costs scale with budget, data usage, and advanced features.";
const officialUrl = "https://www.thetradedesk.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/thetradedesk.com",
  gradient: "from-blue-500 via-cyan-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "StackAdapt", slug: "stackadapt" },
  { name: "Voluum DSP", slug: "voluum-dsp" },
  { name: "RTB House", slug: "rtbhouse" },
  { name: "Taboola", slug: "taboola" },
  { name: "Outbrain", slug: "outbrain" },
];

const faqs = [
  {
    q: "What is The Trade Desk?",
    a: "The Trade Desk is a demand-side platform for programmatic advertising across display, video, CTV, audio, and native inventory.",
  },
  {
    q: "Who is it for?",
    a: "Agencies and sophisticated in-house teams managing multi-channel programmatic campaigns with significant budgets.",
  },
  {
    q: "How does pricing work?",
    a: "CPM-based media buying with platform fees. Contracts vary; expect minimums and data/feature costs as budgets rise.",
  },
  {
    q: "What targeting is available?",
    a: "Contextual, audience data partnerships, retargeting, geo/device, and advanced CTV options. Data fees may apply.",
  },
  {
    q: "Does it support CTV and video?",
    a: "Yes. Strong support for CTV and video placements with brand safety and measurement integrations.",
  },
  {
    q: "What about brand safety?",
    a: "Brand safety controls, inventory quality filters, and third-party verification are available—configuring them is essential.",
  },
  {
    q: "Is it self-serve?",
    a: "It is self-serve but aimed at experienced traders; ramp requires training and process for pacing, QA, and optimization.",
  },
  {
    q: "How is reporting?",
    a: "Robust reporting with custom dashboards and log-level data options. Data hygiene and pixel setup drive accuracy.",
  },
];

function TradeDeskToolPage() {
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
        "The Trade Desk is a powerful DSP for programmatic buying across channels. Best for teams with budget, trading expertise, and the process to manage data, safety, and optimization.",
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
      title: "Omni-channel buying",
      body: "Run campaigns across display, video, CTV, audio, and native with unified reporting.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Advanced targeting",
      body: "Contextual, audience segments, retargeting, geo/device, and data partnerships for precise reach.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Custom reporting",
      body: "Dashboards and log-level data (where enabled) for deep analysis and attribution work.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand safety",
      body: "Inventory quality controls, verification integrations, and fraud filtering to protect spend.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "CTV focus",
      body: "Robust CTV placements with measurement options and PMP/guaranteed deals.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Pixels, server-to-server signals, third-party measurement, and data partners; setup affects accuracy and cost.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="The Trade Desk review: pricing, features, pros & cons, and alternatives so you can evaluate it for programmatic buying."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
                  {toolName} offers deep programmatic controls—use it if you have the expertise to manage data, brand safety, and optimization across channels.
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
              {toolName} is a leading DSP for buying across display, video, CTV, audio, and native. It’s built for performance and brand campaigns that need granular controls and measurement.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as an enterprise trading platform: success depends on trader expertise, pixel setup, brand safety rules, and disciplined optimization. Budgets and data fees can escalate if unmanaged.
            </p>
            <p className="mt-3 text-slate-700">Ensure tracking, audiences, and QA processes are solid before scaling spend.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for experienced programmatic teams managing multi-channel budgets with brand safety requirements.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies running multi-channel campaigns for clients.",
                "In-house growth teams with programmatic expertise.",
                "Brands investing in CTV/video with strict safety controls.",
                "Performance teams needing log-level data and custom reporting.",
                "Marketers testing audiences beyond search/social with DSP controls.",
                "Advertisers coordinating PMP/guaranteed deals alongside open exchange.",
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
              {toolName} focuses on omni-channel programmatic buying, advanced targeting, reporting, brand safety, and integrations for enterprise advertisers.
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
                  Pricing includes platform fees plus media spend on a CPM basis. Contracts, minimums, and data/feature fees vary by region and volume. Expect costs to scale with budget and targeting complexity.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with controlled budgets on priority channels (e.g., CTV/video), enable brand safety from day one, and expand after stable CPAs/ROAS.</p>
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
                    <td className="px-4 py-3">Limited geos/channels, strict safety</td>
                    <td className="px-4 py-3">Baseline CPAs and viewability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Growing budgets</td>
                    <td className="px-4 py-3">Broader inventory, data partners</td>
                    <td className="px-4 py-3">Watch data costs and frequency</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Always-on</td>
                    <td className="px-4 py-3">Mature programs</td>
                    <td className="px-4 py-3">Full mix, advanced measurement</td>
                    <td className="px-4 py-3">Requires ongoing QA and refresh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in data partner costs, measurement fees, and team bandwidth. QA pixels, brand safety lists, and pacing rules regularly to avoid waste.
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
                  <li>Omni-channel programmatic reach including CTV.</li>
                  <li>Advanced targeting and data partnerships.</li>
                  <li>Robust reporting and log-level options.</li>
                  <li>Strong brand safety and verification integrations.</li>
                  <li>Supports PMP/guaranteed deals alongside open exchange.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires experienced traders and process.</li>
                  <li>Data and measurement fees can add up.</li>
                  <li>Complex setup for pixels, deals, and QA.</li>
                  <li>Minimums and contracts may not fit small budgets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other DSPs and native platforms to match your channel mix, budget, and control requirements.
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
            <p className="text-slate-700">See how {toolName} compares to other programmatic platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs StackAdapt</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/stackadapt">
                  View StackAdapt
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                StackAdapt is known for ease-of-use and strong support; {toolName} offers broader enterprise controls and data options. Choose based on team maturity and channel breadth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Voluum DSP</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/voluum-dsp">
                  View Voluum DSP
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Voluum DSP emphasizes performance flows and tracking; {toolName} provides enterprise-scale buying and data depth. Pick based on scale, channels, and reporting needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you manage significant programmatic budgets, need CTV/video reach, and have the expertise to configure data, safety, and optimization properly.
            </p>
            <p className="mt-3 text-slate-700">
              Smaller teams or budgets may prefer simpler DSPs. Build strong QA, pacing, and reporting processes before scaling spend.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful DSP for experienced teams; excellence depends on disciplined setup, data hygiene, and ongoing optimization.
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
              Choose {toolName} if you need enterprise-grade programmatic buying with CTV/video strength and have a team that can manage complex setups.
            </p>
            <p>
              Consider StackAdapt for simpler workflows or Voluum DSP for performance-focused setups; use {toolName} when you want deep controls and data access.
            </p>
            <p>{toolName} can deliver scale and control—pair it with strict brand safety, QA, and pacing practices to maximize ROI.</p>
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

export default TradeDeskToolPage;
