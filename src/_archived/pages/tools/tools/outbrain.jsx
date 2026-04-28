import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Outbrain";
const slug = "outbrain";
const category = "Native Advertising Network";
const shortPitch = "Outbrain is a native advertising platform that distributes sponsored content across premium publisher sites to drive traffic and conversions.";
const pricingSummary = "CPC-based bids with budget controls. Costs vary by geo, audience, and placement quality.";
const officialUrl = "https://www.outbrain.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/outbrain.com",
  gradient: "from-orange-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Taboola", slug: "taboola" },
  { name: "MGID", slug: "mgid" },
  { name: "Revcontent", slug: "revcontent" },
  { name: "Meta Ads", slug: "facebook" },
];

const faqs = [
  { q: "How does pricing work?", a: "You bid CPC; total cost depends on clicks. Conversion optimization can focus on CPA/ROAS goals with sufficient data." },
  { q: "Can I control placements?", a: "You can exclude publishers and use brand safety settings; premium inventory may require managed options." },
  { q: "What tracking is needed?", a: "Implement conversion pixels or server events; verify events before enabling optimization." },
  { q: "Is there a minimum spend?", a: "Self-serve has low entry; managed options may have higher minimums." },
  { q: "How important are creatives?", a: "Critical. Test many headline/image variants and align landing pages closely with the creative promise." },
  { q: "Does it support remarketing?", a: "Remarketing is available; set audiences and frequency caps to avoid fatigue." },
  { q: "Can I run pre-sell pages?", a: "Yes. Pre-sell and advertorial funnels are common—ensure compliance with publisher policies." },
  { q: "Who is it best for?", a: "Marketers scaling content or lead-gen with native placements on premium publishers." },
];

function OutbrainToolPage() {
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
        "Outbrain is a native ad network that places content recommendations on publisher sites. It offers CPC bidding, audience targeting, and conversion optimization to drive traffic and leads.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "CPC bidding", body: "Set bids and budgets with pacing controls for native placements." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Optimization", body: "Smart bidding and conversion optimization for CPA/ROAS goals." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Targeting", body: "Geo, device, interest, and contextual targeting options." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Brand safety", body: "Publisher controls, exclusions, and approvals to manage placements." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Creative testing", body: "Headline/image testing to find winning combinations and rotate them." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Track conversions via pixels, server-to-server, or tag manager setups." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Outbrain review: pricing, features, pros & cons, and alternatives to decide if its native ad network fits your campaigns."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  {toolName} scales native placements on premium publishers. Pair strong creatives with clean tracking to achieve ROAS.
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
              {toolName} distributes native ads across its publisher network, showing recommended stories and sponsored content. Advertisers pay per click, set budgets, and target by geo, device, and interest signals.
            </p>
            <p className="mt-3 text-slate-700">
              It supports performance campaigns (leads, sales) and content amplification. Smart bidding and conversion optimization aim to improve ROAS while brand safety settings help manage placement quality.
            </p>
            <p className="mt-3 text-slate-700">
              Native works best when creative matches editorial tone. Strong headlines, relevant landing pages, and clear conversion tracking are essential to make Outbrain profitable.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers scaling content or lead-gen with native placements.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers driving leads or ecommerce via native placements.",
                "Publishers and brands amplifying content and advertorials.",
                "Agencies managing multi-geo native campaigns with budgets and pacing.",
                "Advertisers seeking brand-safe inventory beyond social/display.",
                "Teams testing pre-sell pages or advertorial funnels.",
                "Brands wanting a mix of awareness and performance in one channel.",
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
              {toolName} focuses on native reach, optimization, and brand safety controls.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              CPC-based bids with budget controls. Costs vary by geo, audience, and placement quality. Conversion optimization is available with sufficient data; confirm minimum volumes and learning requirements.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "CPC campaigns", price: "CPC", detail: "Self-serve platform, CPC bids, basic targeting", bestFor: "Standard advertisers starting native" },
                { name: "Conversion optimization", price: "CPC/CPA goal", detail: "Smart bidding toward CPA/ROAS goals", bestFor: "Performance teams with tracking in place" },
                { name: "Managed/Enterprise", price: "Custom", detail: "Managed service, premium inventory options, support", bestFor: "Large spenders needing premium placements" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Start with CPC campaigns, then enable conversion optimization once tracking is clean. Test multiple creatives and block low-quality placements quickly to protect ROAS.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Access to premium publisher inventory for native formats.</li>
                  <li>CPC bidding with budget controls.</li>
                  <li>Conversion optimization to improve ROAS.</li>
                  <li>Brand safety settings and publisher controls.</li>
                  <li>Strong for content amplification and pre-sell funnels.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Needs strong creatives; weak headlines will underperform.</li>
                  <li>Traffic quality varies by placement—requires monitoring and exclusions.</li>
                  <li>Can be costly without optimized funnels and tracking.</li>
                  <li>Limited compared to social platforms for rich demographic targeting.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Outbrain alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need different reach, pricing, or channel mix:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "Native/ads alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-amber-700 hover:text-amber-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Outbrain vs other native networks</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Outbrain vs Taboola", betterFor: "Both are large native networks; test both for reach and CPA. Inventory and performance vary by geo and publisher mix.", choose: "Pick based on tested CPA and brand safety results in your geos." },
                { title: "Outbrain vs social ads", betterFor: "Social offers richer targeting; Outbrain provides contextual/native placements on publishers that may be more brand-safe.", choose: "Pick Outbrain for contextual reach on publishers. Pick social for demographic/interest depth." },
                { title: "Outbrain vs display", betterFor: "Native blends into content and can achieve higher engagement; display offers broader formats and remarketing depth.", choose: "Pick Outbrain for content-style funnels. Pick display for remarketing and broader formats." },
                { title: "Outbrain vs MGID", betterFor: "MGID offers global reach with variable quality; Outbrain emphasizes premium publishers.", choose: "Pick Outbrain for premium inventory. Test MGID if you need scale in specific regions at lower CPCs." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you have strong pre-sell pages, clean tracking, and a plan for creative testing. Start lean, optimize headlines and blocklists, then scale budgets gradually. Without disciplined testing and tracking, native costs can rise quickly.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Test multiple headline/image combinations and pause losers fast.",
                "Set conversion tracking and verify before enabling optimization.",
                "Use brand safety controls and publisher exclusions to maintain quality.",
                "Scale budgets slowly after achieving stable CPA/ROAS.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} delivers native reach on premium publishers with CPC bidding. It works best for performance marketers who test creatives relentlessly, keep tracking clean, and manage placements for quality. If you need deep demographic targeting or remarketing, pair it with social/display.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your funnel, start a campaign here:{" "}
                  <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OutbrainToolPage;
