import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "AnyTrack";
const slug = "anytrack";
const category = "Analytics & Attribution";
const shortPitch =
  "AnyTrack stitches ad platform pixels, analytics, and conversion APIs so you can track ROAS, conversions, and funnels across channels.";
const pricingSummary =
  "Free trial, then paid plans by tracked conversions and features. Higher tiers add more API calls, workspaces, advanced routing, and white labeling.";
const officialUrl = "https://anytrack.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/anytrack.io",
  gradient: "from-amber-500 via-orange-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.26)]",
};

const alternatives = [
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Hyros", slug: "hyros" },
  { name: "Wicked Reports", slug: "wicked-reports" },
  { name: "Improvely", slug: "improvely" },
  { name: "Voluum", slug: "voluum" },
];

const faqs = [
  {
    q: "What is AnyTrack?",
    a: "AnyTrack is an attribution and conversion tracking platform that unifies pixels, server-side APIs, and analytics to show ROAS and funnel performance across channels.",
  },
  {
    q: "Who is it for?",
    a: "Ecommerce, lead-gen, and performance marketers who need dependable conversion tracking across ads, affiliates, and analytics.",
  },
  {
    q: "How does pricing work?",
    a: "Paid plans scale with tracked conversions and features. Higher tiers add more API calls, workspaces, and advanced routing/transformations.",
  },
  {
    q: "Does it replace Google Analytics?",
    a: "No. It complements GA by improving conversion capture and sending clean events to ad platforms and analytics.",
  },
  {
    q: "Does it support server-side APIs?",
    a: "Yes. It supports Facebook CAPI, Google, TikTok, and other server-side endpoints to reduce signal loss.",
  },
  {
    q: "Is technical setup required?",
    a: "Some. You add scripts/pixels and connect platforms. Plan time for QA to avoid duplicate or missing conversions.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Validate event mapping, deduplication, and attribution windows before relying on the data for bidding.",
  },
];

function AnyTrackToolPage() {
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
        "AnyTrack improves conversion capture and attribution across ad platforms, pixels, and analytics. It is best for performance teams needing cleaner signals and ROAS visibility.",
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
      title: "Pixel + server-side capture",
      body: "Combine browser pixels with server-side APIs (CAPI, Google, TikTok) to reduce signal loss.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Attribution & ROAS views",
      body: "Track conversions, revenue, and ROAS by channel and campaign with flexible attribution windows.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Event mapping",
      body: "Map events to ad platforms and analytics tools to keep naming and deduplication consistent.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Deduplication",
      body: "Prevent double-counting across pixels and APIs by controlling IDs and event rules.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect Shopify, Woo, landing pages, and ad platforms with minimal custom code.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Routing & webhooks",
      body: "Send clean conversion payloads to analytics, CRMs, and warehouses for reporting.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="AnyTrack review: pricing, features, pros & cons, and alternatives so you can choose the right attribution stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
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
                  {toolName} improves conversion capture and ROAS tracking by unifying pixels, server-side APIs, and analytics events.
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
              {toolName} is an attribution and conversion tracking platform. It connects ad pixels, server-side APIs, and analytics so you can see ROAS and funnel performance despite signal loss.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to send clean, deduped conversion events back to ad platforms and analytics tools. Plan QA time to validate mappings and attribution windows.
            </p>
            <p className="mt-3 text-slate-700">
              Pair with a warehouse or BI layer if you need deeper cohort and LTV reporting.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance marketers needing reliable conversion signals across channels.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ecommerce teams sending conversions to ad platforms for ROAS and bidding.",
                "Lead-gen marketers needing clean form/phone conversions across channels.",
                "Agencies managing pixels, CAPI, and analytics for multiple clients.",
                "Brands impacted by browser privacy looking for server-side signals.",
                "Teams needing deduped events across pixels, APIs, and analytics.",
                "Marketers who want faster feedback loops on creative and channel tests.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on reliable conversion capture, deduplication, and ROAS views across ads and analytics.
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
                  Plans scale with tracked conversions and features. Higher tiers add more API calls, workspaces, and routing options. Budget for onboarding and QA to avoid noisy data.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the lower paid tier to validate mappings; upgrade when you need higher volume or multi-workspace support.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Core pixels/APIs, limited conversions</td>
                    <td className="px-4 py-3">Use to validate data quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling accounts</td>
                    <td className="px-4 py-3">More conversions, routing, more workspaces</td>
                    <td className="px-4 py-3">Common for active ecommerce/lead gen</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Agency</td>
                    <td className="px-4 py-3">High volume / multiple brands</td>
                    <td className="px-4 py-3">Highest limits, white labeling, priority support</td>
                    <td className="px-4 py-3">For agencies or heavy spenders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Model your monthly conversion volume and channels to size the plan. Plan QA for deduplication and event naming.</p>
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
                  <li>Combines pixels and server-side APIs to reduce signal loss.</li>
                  <li>Flexible event mapping and deduplication.</li>
                  <li>Clear ROAS and funnel visibility across channels.</li>
                  <li>Integrations for common ecommerce/lead-gen stacks.</li>
                  <li>Faster feedback loops for creative and channel tests.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires careful setup/QA to avoid duplicates or gaps.</li>
                  <li>Volume-based pricing can climb with high conversion counts.</li>
                  <li>Not a full analytics warehouse—pair with BI for deep reporting.</li>
                  <li>Still relies on platform APIs; changes require monitoring.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other attribution tools by signal quality, integrations, and pricing.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other attribution and conversion tracking platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Triple Whale</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/triple-whale">
                  View Triple Whale
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Triple Whale bundles analytics dashboards; {toolName} emphasizes conversion capture and routing. Choose based on whether dashboards or flexible event mapping are more important.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hyros</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/hyros">
                  View Hyros
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hyros offers call tracking and email tracking depth; {toolName} focuses on streamlined pixel/API capture. Pick based on channel mix and implementation appetite.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need cleaner conversion signals for ads and analytics and can invest time in setup/QA. It reduces signal loss and improves ROAS visibility.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for implementation and monitoring. Pair with BI or a warehouse if you need deeper cohort, LTV, or channel-mix analysis.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong fit for performance marketers who need dependable conversion capture across pixels and server-side APIs.
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
            <p>{toolName} is a strong choice for performance teams that need reliable conversion capture, deduplication, and ROAS tracking across channels.</p>
            <p>Use it when you can invest in setup/QA and want faster feedback loops on creative and channel tests.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
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

export default AnyTrackToolPage;
