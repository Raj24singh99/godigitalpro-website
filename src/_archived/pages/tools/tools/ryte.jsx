import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Search, Server } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Ryte";
const slug = "ryte";
const category = "Website Quality & SEO";
const shortPitch = "Ryte is a website quality platform for technical SEO, content, and performance monitoring with crawls, alerts, and recommendations.";
const pricingSummary = "Tiered plans based on crawl volume, projects, and features. Higher tiers add more pages, monitoring frequency, and team collaboration.";
const officialUrl = "https://www.ryte.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/ryte.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Screaming Frog", slug: "screaming-frog" },
  { name: "Sitebulb", slug: "sitebulb" },
  { name: "Botify", slug: "botify" },
  { name: "Oncrawl", slug: "oncrawl" },
  { name: "Semrush Site Audit", slug: "semrush" },
];

const faqs = [
  { q: "What is Ryte?", a: "Ryte is a website quality platform for technical SEO, content, and performance monitoring with site crawls and alerts." },
  { q: "Who is it for?", a: "SEO teams, web owners, and agencies needing ongoing site health monitoring and recommendations." },
  { q: "What does it cover?", a: "Technical SEO issues, content quality signals, performance insights, and indexation monitoring." },
  { q: "How is pricing structured?", a: "Tiered by crawl volume, projects, and features. Higher tiers add more pages, frequency, and collaboration." },
  { q: "Does it integrate with GA/Search Console?", a: "Yes. Integrations and data connections help correlate issues with traffic and impressions." },
  { q: "Are alerts available?", a: "Yes. Alerts flag issues after crawls and monitoring checks." },
  { q: "Does it replace manual audits?", a: "No. Use it to surface issues; SEOs still need to validate and prioritize fixes." },
  { q: "Is human review needed?", a: "Yes. Recommendations need human prioritization and developer collaboration." },
];

function RyteToolPage() {
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
        "Ryte monitors website quality with technical SEO crawls, performance checks, and recommendations, helping teams detect and prioritize site issues.",
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
      icon: <Search className="h-5 w-5 text-emerald-500" />,
      title: "Technical SEO crawls",
      body: "Detect indexation, duplication, and on-page issues across your site.",
    },
    {
      icon: <Server className="h-5 w-5 text-teal-600" />,
      title: "Performance & Core Web Vitals",
      body: "Monitor performance signals and Core Web Vitals alongside technical issues.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Recommendations",
      body: "Surface prioritized fixes and guidance for SEO and dev teams.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Reporting & alerts",
      body: "Track health trends over time and get alerts when issues spike.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Projects & permissions",
      body: "Organize sites/projects with access controls for teams and clients.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect analytics and Search Console to align issues with traffic impact.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Ryte review: pricing, features, pros & cons, and alternatives to help you assess it for website quality and technical SEO monitoring."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} monitors site quality with technical SEO crawls, performance checks, and alerts so teams can fix issues faster.
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
              {toolName} is a website quality and SEO monitoring platform. It crawls sites for technical issues, checks performance and Core Web Vitals, and provides recommendations and alerts so teams can prioritize fixes.
            </p>
            <p className="mt-3 text-slate-700">Use it to catch regressions, validate releases, and align SEO, product, and engineering on site health.</p>
            <p className="mt-3 text-slate-700">Pair with analytics and A/B testing to measure impact of fixes on traffic and conversions.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for SEO teams, site owners, and agencies that need continuous monitoring and prioritization of technical issues.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO leads monitoring indexation and on-page health.",
                "Developers and product teams needing alerts on regressions.",
                "Agencies reporting site quality to clients regularly.",
                "Web teams tracking Core Web Vitals over time.",
                "Content teams ensuring pages meet technical standards.",
                "Ops teams coordinating fixes with analytics context.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on technical SEO crawls, performance checks, recommendations, alerts, projects, and integrations.</p>
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
                  {toolName} uses tiered pricing based on crawl volume, number of projects, and features. Higher tiers add more pages per crawl, higher frequency, and collaboration options.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose a tier matching your site size and crawl cadence; upgrade if you need more pages, projects, or alerts.</p>
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
                    <td className="px-4 py-3">Small sites</td>
                    <td className="px-4 py-3">Limited pages and basic monitoring</td>
                    <td className="px-4 py-3">Good for initial audits</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Growth</td>
                    <td className="px-4 py-3">Growing sites</td>
                    <td className="px-4 py-3">More pages, more frequent crawls, alerts</td>
                    <td className="px-4 py-3">Fits most SEO teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large/complex</td>
                    <td className="px-4 py-3">Highest limits, advanced features, support</td>
                    <td className="px-4 py-3">Choose for large sites and teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Align plan with site size and sprint cadence; ensure dev resources are ready to address surfaced issues.</p>
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
                  <li>Comprehensive technical SEO crawls.</li>
                  <li>Performance and Core Web Vitals monitoring.</li>
                  <li>Recommendations with prioritization.</li>
                  <li>Alerts for regressions and issues.</li>
                  <li>Integrations with analytics/search data.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing scales with pages and crawl frequency.</li>
                  <li>Findings still need SEO/developer validation.</li>
                  <li>Large sites may require careful crawl budgeting.</li>
                  <li>Not a replacement for human strategy or content work.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other technical SEO and site monitoring tools to match your site size and workflow.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other website quality platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Screaming Frog</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/screaming-frog">
                  View Screaming Frog
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Screaming Frog is desktop-based and great for one-off crawls; {toolName} adds hosted monitoring, alerts, and reporting. Choose based on whether you need continuous monitoring or ad-hoc audits.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Botify</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/botify">
                  View Botify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Botify targets very large sites and enterprise data needs; {toolName} suits small-to-mid sites needing monitoring and recommendations. Pick based on scale, budget, and data depth required.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need ongoing technical SEO and site quality monitoring with alerts and recommendations.
            </p>
            <p className="mt-3 text-slate-700">Plan resources to fix findings; the tool surfaces issues but teams must prioritize and implement.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid website quality platform; best when paired with SEO strategy, dev resources, and analytics to measure impact.</p>
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
            <p>Choose {toolName} if you want hosted technical SEO monitoring, alerts, and recommendations to keep your site healthy.</p>
            <p>Consider Screaming Frog for ad-hoc crawls or Botify for enterprise depth; use {toolName} when you want ongoing monitoring with practical guidance.</p>
            <p>{toolName} helps catch regressions early—ensure teams can act on the issues it surfaces.</p>
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

export default RyteToolPage;
