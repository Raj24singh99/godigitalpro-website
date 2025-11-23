import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Gauge, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "RedTrack";
const slug = "redtrack";
const category = "Ad tracking & attribution";
const shortPitch = "RedTrack is an ad tracking and attribution platform for affiliates, media buyers, and brands to track clicks, conversions, and optimize campaigns without cookie chaos.";
const pricingSummary = "Plans typically start around $59/month with higher tiers for more events, workspaces, and partner integrations.";
const officialUrl = "https://redtrack.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/redtrack.io",
  gradient: "from-rose-500 via-pink-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(244,63,94,0.22)]",
};

const alternatives = [
  { name: "Voluum", slug: "voluum" },
  { name: "ClickMagick", slug: "clickmagick" },
  { name: "Fathom Analytics", slug: "fathom-analytics" },
  { name: "Plausible", slug: "plausible" },
  { name: "Matomo", slug: "matomo" },
];

const faqs = [
  { q: "Who is RedTrack for?", a: "Affiliates, media buyers, and in-house performance teams that need accurate tracking, postback support, and route traffic without relying on third-party cookies." },
  { q: "Does RedTrack support postbacks?", a: "Yes. It supports S2S postbacks with major affiliate networks and ad platforms for accurate conversion tracking." },
  { q: "Can RedTrack handle multi-touch attribution?", a: "Yes. It offers attribution models to credit channels and optimize budgets across campaigns." },
  { q: "Does RedTrack integrate with FB/Google?", a: "It provides integrations, webhooks, and APIs to send conversions to ad platforms for better optimization and offline conversions." },
  { q: "Is there anti-fraud?", a: "It includes fraud detection and bot filtering to keep reports clean and protect budgets." },
  { q: "How does pricing work?", a: "Pricing scales by events, traffic volume, and features like workspaces, API, and team seats. Trials are usually available." },
  { q: "Can I do rule-based routing?", a: "Yes. Traffic distribution rules let you route by GEO, device, or performance to test offers and landers." },
  { q: "Does RedTrack have reporting dashboards?", a: "Yes. Real-time dashboards, cohort breakdowns, and customizable reports help teams optimize quickly." },
];

function RedTrackToolPage() {
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
        "RedTrack is a reliable ad tracker for affiliates and performance teams, offering postbacks, rule-based routing, attribution, and anti-fraud. It helps teams stay accurate without third-party cookies.",
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
    { icon: <Gauge className="h-5 w-5 text-rose-500" />, title: "Accurate tracking & postbacks", body: "Server-to-server tracking and postbacks reduce reliance on cookies for cleaner attribution." },
    { icon: <BarChart3 className="h-5 w-5 text-indigo-500" />, title: "Attribution & reporting", body: "Multi-touch attribution, cohort views, and customizable dashboards to see what’s working." },
    { icon: <ClipboardList className="h-5 w-5 text-emerald-500" />, title: "Rule-based routing", body: "Distribute traffic by GEO/device/performance to test offers and landers automatically." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Integrations & APIs", body: "Connect affiliate networks, FB/Google, and send conversions back for optimization." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Anti-fraud", body: "Detect bots and fraudulent traffic to keep budgets safe and reports clean." },
    { icon: <Rocket className="h-5 w-5 text-rose-500" />, title: "Team & workspaces", body: "User roles, workspaces, and collaboration features for agencies and teams." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="RedTrack review for 2025 covering pricing, tracking accuracy, postbacks, routing, pros/cons, and alternatives like Voluum or ClickMagick."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-rose-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  RedTrack helps performance teams track, attribute, and optimize campaigns with accuracy, postbacks, and anti-fraud baked in.
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
              {toolName} is an ad tracking and attribution platform built for affiliates and performance teams. It tracks clicks/conversions, supports S2S postbacks, and provides reporting to optimize ROI.
            </p>
            <p className="mt-3 text-slate-700">It replaces patchy pixel tracking with server-side signals, routing, and anti-fraud so budgets are spent on real users.</p>
            <p className="mt-3 text-slate-700">If you need reliable tracking across channels and offers, {toolName} is a strong option. Pair it with analytics stacks for deeper CRO insights.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits performance marketers who need accurate tracking and routing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Affiliates running multi-offer, multi-lander funnels.",
                "Media buyers who need S2S postbacks for FB/Google and networks.",
                "Agencies managing tracking across many clients and workspaces.",
                "Ecommerce/lead-gen teams needing attribution and routing by GEO/device.",
                "Ops teams looking to reduce fraud/bots in ad traffic.",
                "Marketers sending conversion data back to ad platforms for optimization.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on accurate tracking, attribution, routing, and fraud control.</p>
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
                  Entry plans start near $59/month with limits on events and workspaces. Higher tiers add more events, API access, white-label, and expanded integrations. Trials are often available.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick the tier that fits your event volume; upgrade as campaigns scale and you need more workspaces/users.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">New campaigns & testing</td>
                    <td className="px-4 py-3">Core tracking, basic routing, limited events</td>
                    <td className="px-4 py-3">~$59/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing buyers & affiliates</td>
                    <td className="px-4 py-3">More events, API, expanded integrations, anti-fraud</td>
                    <td className="px-4 py-3">$100+/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency/Enterprise</td>
                    <td className="px-4 py-3">Agencies & high-volume teams</td>
                    <td className="px-4 py-3">Multiple workspaces, white-label, higher limits, SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Compared to Voluum/Hyros, {toolName} competes on value and flexible routing without heavy costs.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Accurate S2S tracking and postbacks reduce data loss.</li>
                  <li>Rule-based routing for GEO/device/offer testing.</li>
                  <li>Attribution models and reporting for budget decisions.</li>
                  <li>Anti-fraud/bot filtering improves data quality.</li>
                  <li>Integrations and API for workflows with ad platforms.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Backlink/SEO analytics not included—tracking only.</li>
                  <li>Learning curve for routing rules and postbacks.</li>
                  <li>Event limits can require upgrades as volume grows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these if you prefer different pricing, UI, or analytics depth.</p>
            <p className="mt-2 text-slate-700">All handle tracking; they differ on depth, price, and analytics vs. routing focus.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to popular ad trackers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Voluum vs Hyros</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/voluum-vs-redtrack-vs-hyros">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Voluum is feature-rich with automation; Hyros goes deep on attribution for ecommerce. RedTrack balances price and tracking accuracy with strong routing and S2S support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Voluum vs ClickMagick</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/voluum-vs-redtrack-vs-clickmagick">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickMagick is simpler but lighter; Voluum is powerful with automations; RedTrack offers a middle ground with S2S tracking, routing, and anti-fraud.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you run performance campaigns and need accurate, privacy-friendly tracking with routing and anti-fraud, {toolName} is worth it. It’s strong for affiliates and agencies balancing volume and cost.
            </p>
            <p className="mt-3 text-slate-700">If you need advanced automations and BI, consider Voluum or pair RedTrack with analytics tools. For SEO analytics, use a separate suite.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a dependable ad tracker that blends accuracy, routing, and affordability for performance marketers.
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
            <p>Choose {toolName} if you want solid S2S tracking, routing, attribution, and fraud controls without paying enterprise prices.</p>
            <p>Voluum offers more automation; ClickMagick is lighter; pair RedTrack with analytics for deeper insights.</p>
            <p>{toolName} fits well alongside ad platforms, analytics, and BI to keep performance teams confident in their data.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default RedTrackToolPage;
