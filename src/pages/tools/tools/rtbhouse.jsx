import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Globe2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "RTB House";
const slug = "rtbhouse";
const category = "Programmatic & Retargeting";
const shortPitch = "RTB House is a programmatic platform specializing in deep-learning retargeting and prospecting to drive conversions for ecommerce and brands.";
const pricingSummary = "Typically performance-based or CPM/CPA arrangements. Costs vary by region, volume, and service level. Expect minimums for managed service.";
const officialUrl = "https://www.rtbhouse.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rtbhouse.com",
  gradient: "from-rose-500 via-orange-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Criteo", slug: "criteo" },
  { name: "AdRoll", slug: "adroll" },
  { name: "The Trade Desk", slug: "the-trade-desk" },
  { name: "StackAdapt", slug: "stackadapt" },
  { name: "Skai", slug: "skai" },
];

const faqs = [
  { q: "What is RTB House?", a: "RTB House is a programmatic advertising platform focused on deep-learning retargeting and prospecting for ecommerce and brands." },
  { q: "Who is it for?", a: "Brands and retailers seeking performance retargeting and dynamic ads managed by a service team." },
  { q: "How is pricing structured?", a: "Performance-based or CPM/CPA deals with minimums; pricing depends on region, volume, and service level." },
  { q: "Does it handle creatives?", a: "Yes. Dynamic creatives and feed-based ads are supported; review brand controls and approval flows." },
  { q: "Is it managed or self-serve?", a: "Primarily managed service; confirm access level and reporting." },
  { q: "What metrics can I track?", a: "ROAS, CPA, view-through, and incremental lift where measured; validate attribution models." },
  { q: "Does it support prospecting?", a: "Yes. Lookalike/prospecting options exist alongside retargeting." },
  { q: "Is brand safety covered?", a: "Brand safety controls exist; align on exclusions, inventory quality, and reporting." },
];

function RtbhouseToolPage() {
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
        "RTB House provides deep-learning retargeting and prospecting with dynamic ads for ecommerce and brands, typically via managed service.",
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
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Deep-learning retargeting",
      body: "Retarget site visitors with dynamic ads tuned for conversions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Dynamic creatives",
      body: "Feed-based ads and creative testing with brand controls and approvals.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-orange-500" />,
      title: "Global reach",
      body: "Access inventory across regions; align on markets and brand safety.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-600" />,
      title: "Performance reporting",
      body: "Track ROAS, CPA, and view-through; discuss incrementality and attribution.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Feed & product coverage",
      body: "Supports product feeds and catalogs to personalize ads.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect analytics, feeds, and pixels; coordinate with consent tools.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="RTB House review: pricing, features, pros & cons, and alternatives to help you evaluate it for programmatic retargeting."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-100 blur-3xl" />
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
                  {toolName} delivers deep-learning retargeting and prospecting with dynamic ads—managed service helps teams scale performance.</p>
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
              {toolName} is a programmatic platform with deep-learning models for retargeting and prospecting. It focuses on dynamic creative, feed-based ads, and managed service to drive conversions and revenue.
            </p>
            <p className="mt-3 text-slate-700">Use it when you want a managed partner for retargeting across regions; align on attribution and brand safety upfront.</p>
            <p className="mt-3 text-slate-700">Pair with first-party data strategy and clear feed hygiene to maximize results.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce and brands seeking managed retargeting/prospecting with dynamic ads.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Retailers needing performance retargeting at scale.",
                "Brands seeking managed service with dynamic creatives.",
                "Marketers expanding internationally with local inventory.",
                "Teams wanting feed-based ads and product personalization.",
                "Advertisers aligning on brand safety and exclusions.",
                "Companies measuring ROAS/CPA with partner support.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on deep-learning bidding, dynamic creatives, global reach, performance reporting, feed support, and integrations.</p>
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
                  Pricing is performance-based or CPM/CPA with minimums. Managed service levels affect fees; confirm regions, inventory, and goals before negotiating.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pilot with clear KPIs and brand safety rules; scale only if incremental lift is proven.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Pilot</td>
                    <td className="px-4 py-3">Testing fit</td>
                    <td className="px-4 py-3">Limited spend, managed setup</td>
                    <td className="px-4 py-3">Validate lift and attribution</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling retargeting</td>
                    <td className="px-4 py-3">Broader inventory, dynamic creatives</td>
                    <td className="px-4 py-3">Fits most ecommerce teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Global & high spend</td>
                    <td className="px-4 py-3">Custom terms, dedicated support, brand safety</td>
                    <td className="px-4 py-3">Align legal and security on terms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Negotiate attribution, brand safety, and data usage; monitor incrementality and margin.</p>
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
                  <li>Strong retargeting and dynamic creative capabilities.</li>
                  <li>Managed service reduces internal workload.</li>
                  <li>Global reach with feed support for ecommerce.</li>
                  <li>Focus on ROAS/CPA performance metrics.</li>
                  <li>Brand safety controls and reporting available.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Performance fees and minimums can be significant.</li>
                  <li>Managed service requires trust and clear SLAs.</li>
                  <li>Attribution and incrementality must be validated.</li>
                  <li>Less hands-on control than self-serve DSPs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other retargeting and programmatic platforms to match control, pricing, and regions.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other retargeting providers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Criteo</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/criteo">
                  View Criteo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Criteo is a major retargeting player with retail media ties; {toolName} promotes deep-learning bidding and service. Choose based on inventory needs, service style, and pricing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs The Trade Desk</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/the-trade-desk">
                  View The Trade Desk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                The Trade Desk is a self-serve DSP for advanced traders; {toolName} is managed with retargeting focus. Pick based on whether you want hands-on control or managed performance service.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth testing if you need managed retargeting/prospecting with dynamic creatives and can align on attribution and brand safety.
            </p>
            <p className="mt-3 text-slate-700">Pilot with clear KPIs, feed hygiene, and incrementality checks before scaling spend.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable managed retargeting partner; best when you want performance focus without building an in-house trading team.</p>
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
            <p>Choose {toolName} if you want managed retargeting/prospecting with dynamic creatives and are comfortable with performance-based pricing.</p>
            <p>Consider Criteo or self-serve DSPs for different control and inventory; use {toolName} when you want a managed, performance-focused partner.</p>
            <p>{toolName} can scale conversions—verify attribution, brand safety, and incremental lift as you grow.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default RtbhouseToolPage;
