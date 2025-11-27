import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Improvely";
const slug = "improvely";
const category = "Conversion Tracking";
const shortPitch = "Improvely is a conversion tracking and link management tool that monitors campaigns, detects fraud, and attributes revenue.";
const pricingSummary = "Tiered pricing based on monthly traffic and projects. Higher tiers add team seats, data retention, and API access.";
const officialUrl = "https://www.improvely.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/improvely.com",
  gradient: "from-amber-500 via-rose-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.24)]",
};

const alternatives = [
  { name: "ClickMagick", slug: "clickmagick" },
  { name: "RedTrack", slug: "redtrack" },
  { name: "Voluum", slug: "voluum" },
  { name: "Hyros", slug: "hyros" },
  { name: "Triple Whale", slug: "triple-whale" },
];

const faqs = [
  { q: "What is Improvely?", a: "Improvely is a conversion tracking tool with link management, fraud monitoring, and reporting for paid campaigns." },
  { q: "Who is it for?", a: "Marketers and agencies who need link tracking, conversion reporting, and fraud detection without heavy setup." },
  {
    q: "How is pricing structured?",
    a: "Plans scale by monthly traffic/projects. Higher tiers add team seats, longer data retention, and API access.",
  },
  { q: "Does Improvely detect click fraud?", a: "Yes. It flags suspicious clicks and sources so you can block or adjust campaigns." },
  { q: "Does it replace analytics tools?", a: "No. Use it alongside analytics/BI. It focuses on link tracking and conversion attribution." },
  { q: "Is there an API?", a: "API access is available on higher tiers. Check current limits before building automations." },
  { q: "Do I need developer help?", a: "Light setup—tracking scripts and pixels are required. Coordinate with devs for accuracy." },
  { q: "Is data sampling used?", a: "Plans specify data retention and limits. Review plan terms for sampling/retention." },
];

function ImprovelyToolPage() {
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
        "Improvely tracks conversions, manages links, and flags fraud. It is useful for quick campaign tracking but should be paired with analytics and QA.",
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
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Link tracking", body: "Create tracking links and UTM tags to monitor campaign performance." },
    { icon: <Rocket className="h-5 w-5 text-purple-500" />, title: "Conversion reports", body: "Track signups and purchases back to channels and ads." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Fraud alerts", body: "Detect suspicious clicks and sources to reduce wasted spend." },
    { icon: <Cloud className="h-5 w-5 text-blue-500" />, title: "API access", body: "Higher tiers include API for exporting data or building automations." },
    { icon: <Folder className="h-5 w-5 text-emerald-500" />, title: "Team collaboration", body: "Share projects with teammates and clients on multi-seat plans." },
    { icon: <Sparkles className="h-5 w-5 text-rose-500" />, title: "Attribution assist", body: "Helps attribute conversions but should be aligned with your analytics setup." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Improvely review: pricing, features, pros & cons, and alternatives to choose the right conversion tracking tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} helps track conversions and flag fraud—set it up with clean UTMs and validate data regularly.
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
              {toolName} is a conversion tracking and link management tool. It shows which ads drive signups or sales and flags suspicious clicks to reduce waste.
            </p>
            <p className="mt-3 text-slate-700">Use it alongside analytics and BI. Clean UTMs, QA, and governance are still required for accuracy.</p>
            <p className="mt-3 text-slate-700">Good fit for teams wanting lightweight attribution and fraud monitoring without enterprise complexity.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers who need quick tracking and fraud detection for paid campaigns.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers managing paid social and search.",
                "Agencies needing shared project tracking across clients.",
                "Teams that want fraud alerts on suspicious sources.",
                "Marketers who prefer simple link tracking over complex analytics.",
                "Operators who will maintain UTM hygiene and QA.",
                "Small teams that need API exports on higher tiers.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on conversion tracking, link management, and fraud monitoring.</p>
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
                  {toolName} uses tiered pricing by monthly traffic and projects. Higher tiers unlock more seats, longer retention, API access, and more tracked conversions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to validate tracking quality; scale when you need more conversions or API access.</p>
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
                    <td className="px-4 py-3">Light spenders</td>
                    <td className="px-4 py-3">Lower traffic limits, basic reporting</td>
                    <td className="px-4 py-3">Good for trial</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active marketers</td>
                    <td className="px-4 py-3">Higher limits, fraud detection, projects</td>
                    <td className="px-4 py-3">Balances cost and volume</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency/Top</td>
                    <td className="px-4 py-3">Agencies & teams</td>
                    <td className="px-4 py-3">More seats, API, longer retention</td>
                    <td className="px-4 py-3">Best for multi-client setups</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for clean UTMs, QA, and fraud review workflows. Consider data exports if you need to combine with BI dashboards.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quick link and conversion tracking.</li>
                  <li>Fraud alerts to reduce wasted spend.</li>
                  <li>API available on higher tiers.</li>
                  <li>Lightweight setup versus enterprise analytics.</li>
                  <li>Multi-project support for agencies.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a full analytics suite—pair with BI/analytics tools.</li>
                  <li>Limits by traffic and projects; costs rise with scale.</li>
                  <li>Accuracy depends on clean UTMs and tracking scripts.</li>
                  <li>Data retention varies by plan.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other tracking tools to fit budget, data access, and service needs.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against similar tracking platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickMagick</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/clickmagick">
                  View ClickMagick
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickMagick is heavily self-serve with split-testing tools; {toolName} focuses on clean reporting and fraud alerts. Pick based on testing needs vs simplicity.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RedTrack</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/redtrack">
                  View RedTrack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                RedTrack offers more advanced attribution options; {toolName} stays simpler. Choose based on whether you need deep attribution or quick campaign tracking.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth trying if you need fast conversion tracking and fraud alerts without adopting a full analytics suite.
            </p>
            <p className="mt-3 text-slate-700">Ensure UTM hygiene and regular QA to keep data trustworthy, and export data if you need deeper BI analysis.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A lightweight tracking option with fraud detection—best when paired with disciplined campaign tagging and analytics tools.
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
            <p>Choose {toolName} for quick link and conversion tracking with fraud alerts.</p>
            <p>Consider RedTrack or Hyros for deeper attribution; ClickMagick for heavy split-testing workflows.</p>
            <p>{toolName} keeps setup simple—just maintain clean UTMs and review data regularly.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default ImprovelyToolPage;
