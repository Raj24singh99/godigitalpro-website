import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Mouseflow";
const slug = "mouseflow";
const category = "Session Replay & Conversion Optimization";
const shortPitch = "Mouseflow provides session recordings, heatmaps, funnels, and form analytics to uncover UX friction and improve conversions.";
const pricingSummary = "Plans scale by sessions and features. Higher tiers add more recordings, form analytics, funnels, and support options.";
const officialUrl = "https://mouseflow.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mouseflow.com",
  gradient: "from-amber-500 via-sky-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Hotjar", slug: "hotjar" },
  { name: "Crazy Egg", slug: "crazy-egg" },
  { name: "FullStory", slug: "fullstory" },
  { name: "Microsoft Clarity", slug: "microsoft-clarity" },
  { name: "Inspectlet", slug: "inspectlet" },
];

const faqs = [
  { q: "What is Mouseflow?", a: "Mouseflow is a session replay and heatmap tool with funnels and form analytics to find UX issues and improve conversions." },
  { q: "Who is it for?", a: "Product, UX, marketing, and CRO teams needing behavior insights and diagnostics on web experiences." },
  { q: "What about form analytics?", a: "Mouseflow tracks form drop-offs and field-level friction to help improve completion rates." },
  { q: "Is there sampling?", a: "Plans limit session counts; you can sample or increase plan limits for more recordings." },
  { q: "Does it support funnels?", a: "Yes. You can build funnels to see where users drop and review recordings for those steps." },
  { q: "How does pricing work?", a: "Pricing depends on monthly sessions and features; higher tiers add more recordings, funnels, and support." },
  { q: "Is it GDPR compliant?", a: "Masking and consent tools exist; you must configure them to meet your compliance needs." },
  { q: "Does it integrate with other tools?", a: "Integrations include GA, marketing tools, and tag managers for combined insights." },
];

function MouseflowToolPage() {
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
        "Mouseflow offers session replay, heatmaps, funnels, and form analytics. It helps teams find UX friction and improve conversions with targeted fixes.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Session replay", body: "Watch user sessions to see interactions, scrolls, and clicks to diagnose friction." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Heatmaps", body: "Click, scroll, and movement heatmaps reveal engagement and drop-offs on pages." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Funnels", body: "Build funnels to identify where users abandon and link to recordings for context." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Form analytics", body: "Track field-level abandonment and time to improve form completion rates." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect with analytics and marketing tools to align qualitative and quantitative data." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Segmentation", body: "Filter sessions by source, device, country, or custom variables to focus analysis." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Mouseflow review: pricing, features, pros & cons, and alternatives to see if it fits your UX and CRO stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
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
                  {toolName} surfaces friction through replays, heatmaps, and form analytics. Use it to prioritize fixes that improve conversion and UX.
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
              {toolName} is a UX analytics tool offering session recordings, heatmaps, funnels, and form analytics to help teams identify friction and improve conversions. It provides segmentation and filtering to target specific user cohorts.
            </p>
            <p className="mt-3 text-slate-700">
              It is suited for CRO, product, and UX teams that need actionable behavior insights and diagnostics beyond aggregated analytics.
            </p>
            <p className="mt-3 text-slate-700">Pair it with analytics/experimentation to validate and measure the impact of UX changes.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams optimizing conversion and UX via qualitative evidence.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "CRO teams diagnosing funnel drop-offs.",
                "Product managers reviewing onboarding friction.",
                "UX researchers studying behavior on key pages.",
                "Marketing teams improving landing pages.",
                "Support teams investigating user complaints.",
                "eCommerce teams fixing checkout and forms.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on behavior insights via replays, heatmaps, funnels, and form analytics with filters to find the sessions that matter.
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
                  {toolName} pricing is based on monthly recorded sessions and features. Higher tiers add more sessions, funnels, form analytics, and support. Choose based on traffic volume and analysis needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower session plan to sample behavior; upgrade when you need more recordings and advanced features like form analytics.</p>
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
                    <td className="px-4 py-3">Low-traffic sites</td>
                    <td className="px-4 py-3">Limited sessions, basic heatmaps/replays</td>
                    <td className="px-4 py-3">Good for initial UX discovery</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Most teams</td>
                    <td className="px-4 py-3">More sessions, funnels, form analytics</td>
                    <td className="px-4 py-3">Covers standard CRO/UX needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-traffic sites</td>
                    <td className="px-4 py-3">Highest limits, advanced support, compliance options</td>
                    <td className="px-4 py-3">Best for large teams and strict requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor session usage and sampling; configure masking and consent for privacy. Pair with experimentation tools to measure uplift from changes.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Comprehensive replays, heatmaps, funnels, and form analytics.</li>
                  <li>Segmentation and filtering to focus on key cohorts.</li>
                  <li>Form analytics highlight field-level friction.</li>
                  <li>Integrations align qualitative with quantitative data.</li>
                  <li>Scales with traffic via tiered plans.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Session limits require monitoring; costs rise with volume.</li>
                  <li>Privacy and masking must be configured carefully.</li>
                  <li>Not a replacement for analytics/experimentation platforms.</li>
                  <li>Analysis still needs human review of recordings for context.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other session replay tools to balance pricing, features, and privacy needs.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with similar UX analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hotjar</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hotjar">
                  View Hotjar
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hotjar combines surveys, feedback, and replays. {toolName} emphasizes form analytics and funnels. Choose based on whether you need feedback tools or deeper conversion diagnostics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs FullStory</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/fullstory">
                  View FullStory
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                FullStory offers advanced product analytics and search. {toolName} is strong for focused CRO diagnostics. Pick based on depth of analytics, volume needs, and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need replays, heatmaps, funnels, and form analytics to uncover UX friction and improve conversions, and you can manage session limits and privacy settings.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside analytics and experimentation to measure the impact of fixes; monitor costs as traffic grows.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong UX/CRO tool; success depends on disciplined tagging, privacy controls, and focused analysis of recordings.
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
            <p>Use {toolName} for behavior insights that highlight UX and conversion issues.</p>
            <p>
              Adjust plans as session needs grow; configure masking and consent; pair with analytics to quantify improvements from changes.
            </p>
            <p>{toolName} turns user behavior into actionable fixes—human prioritization and testing make the impact real.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
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

export default MouseflowToolPage;
