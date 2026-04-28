import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "StockAI";
const slug = "stockai";
const category = "Generative Stock Images";
const shortPitch =
  "StockAI generates stock-style images from prompts, aiming to replace traditional stock photos with AI-created visuals for marketing and content teams.";
const pricingSummary =
  "Credits/subscription pricing. Costs scale with image generation volume, resolution, and licensing needs. Higher tiers may include commercial rights and faster generation.";
const officialUrl = "https://www.stockai.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/stockai.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Adobe Firefly", slug: "firefly-adobe" },
  { name: "DreamStudio", slug: "dreamstudio" },
  { name: "Midjourney", slug: "midjourney" },
  { name: "DALL·E", slug: "d-id" },
  { name: "Leonardo AI", slug: "leonardo-ai" },
];

const faqs = [
  {
    q: "What is StockAI?",
    a: "StockAI is a generative image platform that creates stock-style photos from text prompts for marketing, design, and content use cases.",
  },
  {
    q: "Who is it for?",
    a: "Marketers, designers, and content teams needing quick visuals without traditional stock libraries.",
  },
  {
    q: "How is pricing structured?",
    a: "Credits or subscription plans; higher tiers add more generations, resolution, and commercial rights.",
  },
  {
    q: "Are images commercially usable?",
    a: "Check licensing on each plan. Commercial rights and usage terms vary; review before publishing.",
  },
  {
    q: "Does it support styles and prompts?",
    a: "Yes. You can prompt for different styles and compositions; prompt engineering improves results.",
  },
  {
    q: "Are there safety filters?",
    a: "Platforms typically include safety filters; ensure compliance and avoid sensitive content.",
  },
  {
    q: "How does it compare to traditional stock?",
    a: "Faster and more flexible, but may require prompt iteration and QA to ensure suitability.",
  },
  {
    q: "Is API access available?",
    a: "Some plans may include API or bulk generation; verify availability.",
  },
];

function StockaiToolPage() {
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
        "StockAI generates stock-style images from prompts, offering a flexible alternative to traditional stock libraries. It’s useful for teams needing fast visuals if licensing and QA are handled well.",
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
      title: "Prompt-based generation",
      body: "Create stock-style visuals from text prompts to match campaigns and brand tone.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Style flexibility",
      body: "Generate different aesthetics and compositions; iterate prompts to refine output.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Resolution options",
      body: "Choose resolutions suitable for web or print depending on plan limits.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Licensing & rights",
      body: "Plans may include commercial rights—confirm usage terms before publishing.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Library replacement",
      body: "Generate on-demand visuals instead of browsing static stock libraries.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Bulk/API (plan-dependent)",
      body: "Potential API/bulk generation on higher tiers; check availability.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="StockAI review: pricing, features, pros & cons, and alternatives so you can decide if generative stock fits your creative workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} replaces scrolling stock sites with on-demand prompts—always verify licensing and quality before use.
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
              {toolName} is a generative stock image platform. Instead of browsing libraries, you prompt for the images you need and download results, aiming for stock-like quality and variety.
            </p>
            <p className="mt-3 text-slate-700">
              It suits teams wanting fast, tailored visuals, but you must review outputs for quality, relevance, and licensing before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside brand guidelines and QA to ensure consistency across campaigns.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketing and content teams needing quick visuals without traditional stock constraints.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers generating campaign visuals on demand.",
                "Designers needing placeholders or fast concept art.",
                "Content teams creating blog/social images tailored to topics.",
                "Teams tired of generic stock and wanting custom looks.",
                "Small teams with limited stock budgets seeking alternatives.",
                "Builders integrating generative images into workflows via API (if available).",
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
              {toolName} focuses on prompt-based generation with stock-like usability and licensing considerations.
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
                  Pricing typically uses credits/subscriptions with limits by image count, resolution, and features. Commercial rights may be tied to higher tiers—confirm before commercial use.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower plan to test quality and fit; upgrade if you need higher resolution, volume, or commercial rights.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Testing/low volume</td>
                    <td className="px-4 py-3">Limited credits, standard resolution</td>
                    <td className="px-4 py-3">Validate quality and licensing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active creators/teams</td>
                    <td className="px-4 py-3">More credits, higher resolution, possible API</td>
                    <td className="px-4 py-3">Watch monthly usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Commercial-heavy use</td>
                    <td className="px-4 py-3">Commercial rights, bulk/API, priority support</td>
                    <td className="px-4 py-3">Review terms for public campaigns</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Always review licensing and QA outputs for brand fit. Consider a DAM or naming conventions to organize generated assets.
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
                  <li>On-demand stock-style images tailored to prompts.</li>
                  <li>Faster than searching traditional stock libraries.</li>
                  <li>Style flexibility across campaigns.</li>
                  <li>Potential API/bulk options for workflows.</li>
                  <li>Cost control via credits/subscriptions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality can vary; requires prompt iteration and QA.</li>
                  <li>Licensing/commercial rights depend on plan—must be verified.</li>
                  <li>May not match the diversity/accuracy of real photography in all cases.</li>
                  <li>Safety filters and compliance are your responsibility in production.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other generative image tools for quality, licensing, and integration needs.
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
            <p className="text-slate-700">See how {toolName} compares to other generative stock/image platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Adobe Firefly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/firefly-adobe">
                  View Firefly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firefly emphasizes commercial-safe training and Adobe integration; {toolName} offers generative stock-style images with flexible prompting. Choose based on licensing needs and creative workflow.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Midjourney</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/midjourney">
                  View Midjourney
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Midjourney excels in artistic styles; {toolName} aims for stock-like imagery. Pick Midjourney for artful outputs, {toolName} for more traditional stock aesthetics.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want on-demand, stock-like images via prompts and you’ll verify licensing and quality before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Start with small plans to test fit; ensure legal review for commercial use and maintain QA for brand consistency.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible alternative to traditional stock libraries—best when combined with careful prompt craft, QA, and licensing checks.
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
              Choose {toolName} if you want to generate stock-like images on demand and can manage prompt iteration, QA, and licensing.
            </p>
            <p>
              Consider Firefly for Adobe integration and commercial-safe data or Midjourney for artistic outputs; {toolName} suits traditional stock replacements with prompts.
            </p>
            <p>{toolName} accelerates visual creation—pair with brand guidelines and legal review for production use.</p>
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

export default StockaiToolPage;
