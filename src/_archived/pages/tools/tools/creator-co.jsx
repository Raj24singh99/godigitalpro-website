import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Creator.co";
const slug = "creator-co";
const category = "Influencer Marketing";
const shortPitch =
  "Creator.co is an influencer marketing platform for finding creators, running campaigns, and tracking performance across social channels.";
const pricingSummary =
  "Tiered plans by campaign volume, creators, and features. Higher tiers add advanced search, campaign management, reporting, and managed services; trials/demos available.";
const officialUrl = "https://creator.co";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/creator.co",
  gradient: "from-purple-500 via-amber-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.24)]",
};

const alternatives = [
  { name: "Upfluence", slug: "upfluence" },
  { name: "AspireIQ", slug: "aspireiq" },
  { name: "Grin", slug: "grin" },
  { name: "Modash", slug: "modash" },
  { name: "Klear", slug: "klear" },
];

const faqs = [
  {
    q: "What is Creator.co?",
    a: "Creator.co is an influencer marketing platform that helps brands find creators, run campaigns, and track performance across social channels.",
  },
  {
    q: "Who is it for?",
    a: "Brands and agencies that manage influencer collaborations and want tools for discovery, outreach, and reporting.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are tiered by campaign limits, creators, and features. Higher tiers add advanced search, reporting, and managed services.",
  },
  {
    q: "Does it include creator discovery?",
    a: "Yes. You can search for creators by audience, platform, and performance metrics.",
  },
  {
    q: "Are campaigns managed?",
    a: "Self-serve and managed options are available depending on plan and service selection.",
  },
  {
    q: "Does it handle contracts and payments?",
    a: "Platforms like this often support briefs, tracking, and payouts; confirm current capabilities and fees.",
  },
  {
    q: "Is there analytics?",
    a: "Yes. Performance tracking and reporting help measure reach, engagement, and ROI.",
  },
  {
    q: "Is there a trial or demo?",
    a: "Trials or demos are available; use them to evaluate creator data quality and workflows.",
  },
];

function CreatorCoToolPage() {
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
        "Creator.co helps brands and agencies find creators, run influencer campaigns, and track performance, with options for self-serve or managed execution.",
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
      title: "Creator discovery",
      body: "Search and filter creators by audience, platform, and performance metrics.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Campaign management",
      body: "Organize briefs, deliverables, and timelines for influencer campaigns.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Performance tracking",
      body: "Monitor reach, engagement, and conversions; export reports for stakeholders.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance & approvals",
      body: "Track approvals and guidelines to keep campaigns compliant and on-brand.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect social platforms and analytics to consolidate performance data.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Managed services",
      body: "Option for managed campaign support depending on plan and service level.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Creator.co review: pricing, features, pros & cons, and alternatives so you can decide if it fits your influencer marketing program."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  {toolName} helps brands find creators, manage collaborations, and report on performance—use it to streamline influencer campaigns.
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
              {toolName} is an influencer marketing platform that supports creator discovery, campaign workflows, and performance tracking across social channels.
            </p>
            <p className="mt-3 text-slate-700">Use it to search for creators, manage briefs and deliverables, and report on reach and engagement.</p>
            <p className="mt-3 text-slate-700">Self-serve and managed options let you choose how much support you need for campaigns.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for brands and agencies running ongoing influencer programs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands sourcing creators for product launches and promos.",
                "Agencies managing multiple influencer campaigns.",
                "Marketers needing performance tracking and reporting.",
                "Teams that want discovery plus workflow tools in one place.",
                "Programs that require managed services for execution.",
                "Companies measuring ROI on influencer spend.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on creator discovery, campaign management, and performance reporting.</p>
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
                  {toolName} uses tiered plans by campaigns, creators, and features. Higher tiers add advanced search, reporting, more seats, and managed options. Expect demos to tailor a plan to your program.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Size your plan to campaign cadence and creator volume; consider managed services if you need hands-on support.</p>
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
                    <td className="px-4 py-3">Testing influencer fit</td>
                    <td className="px-4 py-3">Basic discovery, limited campaigns</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Ongoing programs</td>
                    <td className="px-4 py-3">More campaigns, reporting, approvals</td>
                    <td className="px-4 py-3">Fits most brands/agencies</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Managed/Enterprise</td>
                    <td className="px-4 py-3">High volume & support</td>
                    <td className="px-4 py-3">Managed services, highest limits, support</td>
                    <td className="px-4 py-3">Best for scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Validate creator data quality and reporting; ensure contracts, approvals, and compliance are aligned with your policies.</p>
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
                  <li>Creator discovery with filters and metrics.</li>
                  <li>Campaign workflows centralize briefs and deliverables.</li>
                  <li>Performance tracking and reports.</li>
                  <li>Managed services available for execution.</li>
                  <li>Useful for brands and agencies running ongoing programs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Data quality and coverage vary by platform/region.</li>
                  <li>Higher tiers or managed services increase cost.</li>
                  <li>Success depends on good brief quality and creator fit.</li>
                  <li>Contracts/payouts may still need manual coordination depending on plan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other influencer platforms to match creator data coverage, workflows, and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other influencer marketing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Upfluence</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/upfluence">
                  View Upfluence
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Upfluence is known for deep discovery and ecommerce integrations; {toolName} offers campaign workflows and managed options. Choose based on data depth and service needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow_sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grin</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/grin">
                  View Grin
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grin focuses on ecommerce brands with influencer workflows; {toolName} provides discovery and managed options. Pick based on ecommerce focus and desired support level.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run influencer campaigns and need discovery, workflow management, and reporting in one platform, with the option for managed help.
            </p>
            <p className="mt-3 text-slate-700">
              It performs best when you define clear briefs, vet creators carefully, and measure performance to optimize future collaborations.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable influencer platform—budget for plan tier or managed services and align on clear campaign goals to maximize ROI.
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
              Choose {toolName} if you want influencer discovery, campaign workflows, and reporting with optional managed support.
            </p>
            <p>
              Consider Upfluence or Grin depending on ecommerce focus and data depth; use {toolName} when balanced discovery and services matter.
            </p>
            <p>{toolName} streamlines influencer programs—align goals, briefs, and compliance to get the most from campaigns.</p>
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

export default CreatorCoToolPage;
