import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Modash";
const slug = "modash";
const category = "Influencer Discovery & UGC";
const shortPitch = "Modash helps brands find influencers, verify audiences, and manage campaigns with search filters, analytics, and UGC tracking.";
const pricingSummary = "Plans scale by number of profiles, searches, and features. Higher tiers add more reports, exports, and team collaboration.";
const officialUrl = "https://www.modash.io";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/modash.io",
  gradient: "from-emerald-500 via-cyan-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.2)]",
};

const alternatives = [
  { name: "HypeAuditor", slug: "hypeauditor" },
  { name: "Aspire", slug: "aspireiq" },
  { name: "Upfluence", slug: "upfluence" },
  { name: "CreatorIQ", slug: "creator-co" },
  { name: "Influencity", slug: "influencity" },
];

const faqs = [
  { q: "What is Modash?", a: "Modash is an influencer discovery and analytics platform to find creators, verify audiences, and manage campaigns." },
  { q: "Who is it for?", a: "Brands and agencies running influencer or UGC campaigns who need search filters and audience verification." },
  { q: "Does it verify followers?", a: "Yes. It provides audience authenticity metrics and fake follower detection." },
  { q: "Which platforms are covered?", a: "Supports major social platforms; check plan details for coverage and limits." },
  { q: "Can I track campaigns?", a: "Yes. Campaign tracking and reporting are available on paid tiers." },
  { q: "Is there a free trial?", a: "Trials or demos are often available; current details vary by plan." },
  { q: "Can I export lists?", a: "Paid plans include exports and reports for outreach and tracking." },
  { q: "Does it handle contracts/payments?", a: "Modash focuses on discovery and analytics; contract/payment workflows may require other tools." },
];

function ModashToolPage() {
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
        "Modash provides influencer discovery, audience verification, and campaign tracking. It suits brands and agencies that need reliable data for creator partnerships.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Influencer search", body: "Filter creators by niche, audience, engagement, and location to build accurate lists." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Audience verification", body: "Check fake followers, audience demographics, and authenticity to reduce risk." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Campaign tracking", body: "Track live content, links, and results to measure ROI of collaborations." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Exports & reporting", body: "Export creator lists, contacts, and performance reports for outreach and clients." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "UGC discovery", body: "Find creators generating content about your brand or niche to repurpose and engage." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Alerts & monitoring", body: "Monitor campaigns and creators to stay on top of deliverables and content quality." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Modash review: pricing, features, pros & cons, and alternatives to evaluate influencer discovery and verification for your campaigns."
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
                  {toolName} helps you find and vet creators, reducing risk from fake audiences. Use it to build reliable lists and track campaign performance.
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
              {toolName} is an influencer discovery and analytics platform that lets brands find creators, verify audiences, and track campaign performance. It focuses on search filters, authenticity checks, and reporting to reduce risk in influencer marketing.
            </p>
            <p className="mt-3 text-slate-700">
              It is useful for teams that need reliable data before contracting creators and want to monitor delivered content and metrics.
            </p>
            <p className="mt-3 text-slate-700">Use it alongside outreach and contract tools to complete your influencer workflow.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for brands and agencies that rely on influencer programs and need data-driven vetting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands running influencer and UGC campaigns.",
                "Agencies sourcing creators for multiple clients.",
                "Marketing teams that need audience authenticity checks.",
                "Performance teams measuring campaign ROI from creators.",
                "Teams repurposing UGC across ads and social.",
                "Brands expanding to new geos needing local creators.",
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
              {toolName} focuses on discovery, authenticity, and tracking to de-risk influencer campaigns.
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
                  {toolName} pricing scales by profile lookups, searches, and reporting features. Higher tiers add more exports, alerts, and collaboration. Choose a tier based on monthly sourcing volume and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a plan that covers your monthly searches; upgrade when you need deeper reporting, exports, or more seats.</p>
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
                    <td className="px-4 py-3">Smaller teams testing</td>
                    <td className="px-4 py-3">Limited searches, core filters, basic reports</td>
                    <td className="px-4 py-3">Good for initial validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Brands and agencies</td>
                    <td className="px-4 py-3">More searches, exports, audience authenticity, tracking</td>
                    <td className="px-4 py-3">Fits most active programs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large teams with heavy sourcing</td>
                    <td className="px-4 py-3">Highest limits, alerts, collaboration, support</td>
                    <td className="px-4 py-3">Best for multi-brand agencies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track how many profiles you evaluate monthly and whether you need exports or team workflows. Pair with outreach/contract tools for a full pipeline.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong filtering to find niche creators.</li>
                  <li>Audience authenticity checks reduce fake follower risk.</li>
                  <li>Exports and reporting help client communication.</li>
                  <li>Campaign tracking supports ROI measurement.</li>
                  <li>UGC discovery identifies organic brand advocates.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Higher tiers needed for larger search volumes.</li>
                  <li>Does not manage contracts or payments.</li>
                  <li>Platform coverage varies; verify for your geos.</li>
                  <li>Data freshness depends on platform syncs; spot-check key profiles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other influencer platforms to balance authenticity data, pricing, and coverage.
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
            <p className="text-slate-700">See how {toolName} compares with common influencer platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HypeAuditor</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hypeauditor">
                  View HypeAuditor
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HypeAuditor is strong on audience authenticity and benchmarks. {toolName} offers discovery plus campaign tracking and UGC. Choose based on whether you need heavier reporting or active campaign monitoring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Aspire</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/aspireiq">
                  View Aspire
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Aspire includes influencer CRM and workflow. {toolName} focuses on discovery and analytics. Pick {toolName} if you already have outreach tools; Aspire if you want an all-in-one workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run influencer or UGC programs and need reliable discovery with audience verification and campaign tracking.
            </p>
            <p className="mt-3 text-slate-700">
              Plan how many profiles you evaluate monthly and pair {toolName} with outreach and contracting to complete the workflow.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong for data-driven influencer sourcing; ensure you have outreach, contracts, and measurement lined up for full ROI.
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
            <p>Use {toolName} to find and vet influencers, track campaigns, and reduce risk from fake audiences.</p>
            <p>
              Upgrade when you need more searches, exports, or team seats; complement with contract/payment tools for end-to-end execution.
            </p>
            <p>{toolName} keeps influencer programs data-driven—human relationships and clear briefs still drive outcomes.</p>
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

export default ModashToolPage;
