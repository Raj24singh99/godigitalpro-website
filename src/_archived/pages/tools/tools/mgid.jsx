import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MGID";
const slug = "mgid";
const category = "Native Ads & Performance";
const shortPitch = "MGID is a native advertising platform offering widgets, audience targeting, and optimization for publishers and advertisers.";
const pricingSummary = "Costs depend on spend and placements. Publishers monetize via native widgets; advertisers pay per click with targeting and optimization controls.";
const officialUrl = "https://www.mgid.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mgid.com",
  gradient: "from-amber-500 via-rose-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.2)]",
};

const alternatives = [
  { name: "Outbrain", slug: "outbrain" },
  { name: "Taboola", slug: "taboola" },
  { name: "Revcontent", slug: "revcontent" },
  { name: "Content.ad", slug: "content-ad" },
  { name: "Zemanta", slug: "zemanta" },
];

const faqs = [
  { q: "What is MGID?", a: "MGID is a native advertising platform for publishers and advertisers, offering content recommendation widgets and performance optimization." },
  { q: "Who is it for?", a: "Publishers monetizing traffic with native placements and advertisers running performance or content campaigns." },
  { q: "How does pricing work?", a: "Advertisers pay per click; publishers earn revenue shares from traffic. Rates vary by geo and placement." },
  { q: "Does MGID offer targeting?", a: "Yes. Targeting options include geo, device, interests, and audiences depending on campaign setup." },
  { q: "Is there brand safety?", a: "MGID offers quality controls and moderation; advertisers should still monitor placements and blocklists." },
  { q: "Can I track conversions?", a: "Yes. Conversion tracking and UTM support help optimize toward CPA goals." },
  { q: "Is there a minimum spend?", a: "Minimums can apply; check with MGID sales for current requirements." },
  { q: "Does it support multiple languages?", a: "Yes. Campaigns can run in multiple languages across supported geos." },
];

function MgidToolPage() {
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
        "MGID provides native advertising widgets for publishers and performance campaigns for advertisers. It suits teams seeking native reach and monetization with CPC buying.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Native widgets", body: "Content recommendation widgets for publishers to monetize traffic with native placements." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Targeting options", body: "Geo, device, interest, and audience targeting for performance campaigns." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Creative variations", body: "Test multiple headlines and images to improve CTR and engagement." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Optimization", body: "Optimize by placement and creative performance to hit CPA or ROI goals." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Brand safety controls", body: "Moderation and blocklists to reduce low-quality placements; monitor results regularly." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Analytics & tracking", body: "Conversion tracking, UTMs, and reporting to steer budgets toward winning placements." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="MGID review: pricing, features, pros & cons, and alternatives so you can evaluate native advertising options for monetization and performance."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  {toolName} connects advertisers and publishers with native placements. Use it to test new audiences and monetize traffic; keep brand safety and optimization guardrails in place.
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
              {toolName} is a native advertising network that provides content recommendation widgets for publishers and performance campaigns for advertisers. It focuses on CPC buying, placement optimization, and monetization through native units.
            </p>
            <p className="mt-3 text-slate-700">
              Advertisers use it to reach audiences through native placements; publishers use it to monetize traffic with widgets. Performance depends on creative quality, targeting, and placement controls.
            </p>
            <p className="mt-3 text-slate-700">Use it as part of a diversified acquisition or monetization mix, keeping tracking and brand safety in mind.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance marketers testing native ads and publishers monetizing via native widgets.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance teams adding native to their acquisition mix.",
                "Publishers seeking additional revenue from native widgets.",
                "Advertisers testing new geos and audiences via native placements.",
                "Agencies managing native campaigns for clients.",
                "Marketers optimizing CPC campaigns toward CPA goals.",
                "Brands needing reach outside traditional social/display channels.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on native placements, targeting, optimization, and monetization for both advertisers and publishers.
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
                  Advertisers pay per click; publishers earn revenue shares. Costs vary by geo, placement, and competition. Budget tests to find winning creatives and placements, and monitor margins closely.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with small budgets and multiple creatives; scale on placements that meet CPA or RPM targets. Publishers should test widgets and placements for RPM lift.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Audience</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Publishers</td>
                    <td className="px-4 py-3">Monetizing traffic</td>
                    <td className="px-4 py-3">Native widgets, placements, revenue share</td>
                    <td className="px-4 py-3">Test placements for RPM and UX</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advertisers</td>
                    <td className="px-4 py-3">Performance and content campaigns</td>
                    <td className="px-4 py-3">CPC bidding, targeting, creative testing</td>
                    <td className="px-4 py-3">Optimize to CPA/ROI; monitor placements</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agencies</td>
                    <td className="px-4 py-3">Managing multiple campaigns</td>
                    <td className="px-4 py-3">Multi-account support, reporting, optimizations</td>
                    <td className="px-4 py-3">Test across geos and creatives</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              For advertisers, set clear CPA or ROI targets and use conversion tracking. For publishers, watch page speed and UX when placing widgets to avoid user frustration.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Native placements can drive incremental reach.</li>
                  <li>Publishers can add revenue via widgets.</li>
                  <li>Targeting and creative testing help optimize CPC campaigns.</li>
                  <li>Supports multiple geos and languages.</li>
                  <li>Conversion tracking enables CPA optimization.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Performance varies by placement quality and creative.</li>
                  <li>Brand safety requires monitoring and blocklists.</li>
                  <li>Some traffic sources may be lower quality; vet placements.</li>
                  <li>UX impact for publishers if widgets are placed poorly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other native networks to balance reach, pricing, and brand safety controls.
            </p>
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
            <p className="text-slate-700">See how {toolName} compares with other native ad platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Taboola</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/taboola">
                  View Taboola
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Taboola has broad publisher reach and enterprise tooling; {toolName} offers native placements with performance focus. Choose based on reach needs, brand safety controls, and service model.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Outbrain</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/outbrain">
                  View Outbrain
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Outbrain offers strong publisher relationships and optimization features. {toolName} provides alternative inventory and pricing. Test both to see which delivers better CPA/RPM for your verticals.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to test or scale native ads and need a partner for both advertiser campaigns and publisher monetization.
            </p>
            <p className="mt-3 text-slate-700">
              For advertisers, start small and optimize aggressively; for publishers, test placements carefully to balance RPM and UX.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Solid native ads option; success depends on creative quality, targeting, and vigilant optimization and brand safety.
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
            <p>Use {toolName} to add native advertising to your acquisition mix or to monetize traffic with native widgets.</p>
            <p>
              Keep creative testing, tracking, and brand safety guardrails active; scale only where CPA or RPM meets your targets.
            </p>
            <p>{toolName} can deliver incremental reach and revenue—success depends on vigilant optimization and placement quality.</p>
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

export default MgidToolPage;
