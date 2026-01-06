import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Triple Whale Pixel";
const slug = "triple-whale-pixel";
const category = "Shopify tracking";
const shortPitch = "Triple Whale Pixel is a first-party pixel and CAPI setup for Shopify to improve Meta event quality and attribution.";
const pricingSummary =
  "Included in Triple Whale plans; cost varies by plan features and store size. Higher tiers add more tracking, analytics, and support options.";
const officialUrl = "https://www.triplewhale.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/triplewhale.com",
  gradient: "from-indigo-500 via-emerald-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Trackify", slug: "trackify" },
  { name: "Redtrack", slug: "redtrack" },
  { name: "AnyTrack", slug: "anytrack" },
  { name: "Hyros", slug: "hyros" },
  { name: "Triple Whale", slug: "triple-whale" },
];

const faqs = [
  {
    q: "What is Triple Whale Pixel?",
    a: "Triple Whale Pixel is a first-party tracking solution for Shopify that sets up Meta pixel events and Conversions API to improve attribution.",
  },
  {
    q: "Who is it for?",
    a: "Shopify merchants running Meta ads who want better event match rates and cleaner data feeding Triple Whale analytics.",
  },
  {
    q: "Does it include Conversions API?",
    a: "Yes. It works with CAPI alongside browser events for more reliable tracking.",
  },
  {
    q: "How is pricing structured?",
    a: "Access depends on your Triple Whale plan; higher plans include more features, support, and analytics modules.",
  },
  {
    q: "Does it reduce attribution gaps?",
    a: "It can improve signal quality; attribution still depends on campaign setup, consent, and data hygiene.",
  },
  {
    q: "Is developer work required?",
    a: "Setup is mostly app-driven. Complex stores may still benefit from technical QA.",
  },
  {
    q: "Does it support multiple stores?",
    a: "Yes, within your Triple Whale account; verify plan limits for store count and events.",
  },
  {
    q: "What about privacy?",
    a: "Ensure consent mechanisms are in place and data sharing complies with your policies and regulations.",
  },
];

function TripleWhalePixelPage() {
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
        "Triple Whale Pixel provides first-party tracking and CAPI for Shopify. It boosts event quality and feeds Triple Whale analytics, but still needs proper consent and QA.",
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
      title: "First-party pixel",
      body: "Capture Shopify events with first-party tracking to improve match rates.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Conversions API",
      body: "Send server-side events alongside browser signals for more reliable data.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Multi-store support",
      body: "Manage tracking across stores inside Triple Whale; align pixels with account structure.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Event QA",
      body: "Diagnostics to spot duplicates or missing events; still requires ongoing monitoring.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Attribution feed",
      body: "Improved signals feed into Triple Whale analytics for clearer ROAS and LTV views.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Support & onboarding",
      body: "Guides and support vary by plan; complex setups benefit from technical review.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Triple Whale Pixel review: pricing, features, pros & cons, and alternatives so you can evaluate Shopify tracking for Meta ads."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  {toolName} strengthens Meta tracking for Shopify—use it with consent, QA, and solid campaign structure to see lift in attribution.
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
              {toolName} is a first-party pixel and CAPI setup for Shopify stores. It captures events, reduces data loss, and feeds Triple Whale’s analytics for clearer ad performance insights.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a tracking layer: it won’t fix weak campaigns but can improve data quality. Ensure consent, test events, and align pixel mapping with your ad account.
            </p>
            <p className="mt-3 text-slate-700">Plan for ongoing QA and collaboration between dev and marketing to keep signals clean.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify stores running Meta ads that need reliable tracking and use Triple Whale analytics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Shopify merchants scaling Meta spend and needing clean events.",
                "Teams adopting Conversions API without heavy dev work.",
                "Marketers aligning pixels across multiple stores/accounts.",
                "Analysts relying on Triple Whale dashboards for ROAS/LTV.",
                "Agencies standardizing client tracking setups.",
                "Stores troubleshooting duplicate/missing Meta events.",
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
              {toolName} focuses on first-party pixel tracking, CAPI, multi-store support, event QA, and feeding analytics.
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
                  {toolName} is bundled within Triple Whale plans. Pricing varies by plan level, store size, and included analytics modules. Higher tiers add more tracking depth, support, and reporting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose the plan that covers your store count and data needs; upgrade if you need deeper analytics or more support for CAPI/pixel setups.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Base</td>
                    <td className="px-4 py-3">Smaller stores</td>
                    <td className="px-4 py-3">Core pixel/CAPI and analytics</td>
                    <td className="px-4 py-3">Validate setup and signals</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling spend</td>
                    <td className="px-4 py-3">More tracking depth, richer dashboards</td>
                    <td className="px-4 py-3">Good default for serious spenders</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">High-volume teams</td>
                    <td className="px-4 py-3">Highest limits, advanced support, more stores</td>
                    <td className="px-4 py-3">Use if multi-store or complex setups</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              QA events regularly, maintain consent, and align pixel mappings with campaigns. Budget for analytics add-ons if you need full Triple Whale dashboards.
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
                  <li>First-party tracking and CAPI for better signal quality.</li>
                  <li>Built for Shopify with app-driven setup.</li>
                  <li>Feeds Triple Whale analytics for clearer attribution.</li>
                  <li>Supports multi-store structures.</li>
                  <li>Diagnostics to spot event issues.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Bundled pricing tied to Triple Whale plans.</li>
                  <li>Requires ongoing QA to avoid duplicates/missing events.</li>
                  <li>Results depend on consent and campaign structure.</li>
                  <li>Less relevant if you do not use Triple Whale analytics.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other Shopify tracking and attribution tools to match your budget and analytics stack.
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
            <p className="text-slate-700">See how {toolName} compares to other tracking solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trackify</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/trackify">
                  View Trackify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trackify focuses on Meta pixel/CAPI setup; {toolName} integrates tracking with Triple Whale analytics. Choose based on whether you want standalone tracking or bundled analytics.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hyros</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/hyros">
                  View Hyros
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hyros covers multi-channel attribution; {toolName} is Shopify-first and optimized for Meta signals feeding Triple Whale. Pick based on channel mix and analytics needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run Meta ads on Shopify, use Triple Whale analytics, and want cleaner event data without heavy custom code.
            </p>
            <p className="mt-3 text-slate-700">
              Maintain consent, monitor events, and align pixels with campaigns to see attribution improvements.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong Shopify tracking layer for Triple Whale users—best with disciplined QA and privacy practices.
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
              Choose {toolName} if you are a Shopify store using Triple Whale and want better Meta tracking with CAPI and first-party signals.
            </p>
            <p>
              Consider Trackify for standalone Meta tracking or Hyros for multi-channel attribution; use {toolName} when you want tracking integrated with Triple Whale analytics.
            </p>
            <p>{toolName} can stabilize attribution—keep consent, QA, and campaign alignment in place to maximize benefits.</p>
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

export default TripleWhalePixelPage;
