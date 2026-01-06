import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "PlayHT";
const slug = "play-ht";
const category = "AI Voice & Text-to-Speech";
const shortPitch =
  "PlayHT is an AI voice generator and text-to-speech platform for realistic narrations, podcasts, product videos, and conversational applications.";
const pricingSummary =
  "Usage-based and tiered plans. Higher tiers add faster rendering, more characters, voice cloning, commercial rights, and API access for production use.";
const officialUrl = "https://play.ht";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/play.ht",
  gradient: "from-sky-500 via-indigo-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Murf AI", slug: "murf-ai" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "PlayHT vs ElevenLabs vs Murf", slug: "compare/playht-vs-elevenlabs-vs-murf", isComparison: true },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  { q: "What is PlayHT?", a: "PlayHT is an AI voice generation and text-to-speech platform that produces realistic voices for narration, video, and conversational use cases." },
  { q: "Who is it for?", a: "Content teams, podcasters, marketers, and developers needing high-quality TTS voices and API access." },
  { q: "Does it support voice cloning?", a: "Yes on higher tiers; cloning requires consent and compliance with their policies." },
  { q: "Is commercial use allowed?", a: "Commercial rights are included on paid tiers. Always review current licensing terms." },
  { q: "Does it offer an API?", a: "Yes. APIs and SDKs are available for product integration and batch generation." },
  { q: "How is pricing structured?", a: "Tiered by character limits and features; higher tiers add speed, cloning, and commercial rights." },
  { q: "Can it handle multiple languages?", a: "Yes. Many languages/voices are supported; check the library for coverage." },
  { q: "Is human review needed?", a: "Yes. Review pronunciation, tone, and compliance before publishing, especially for ads." },
];

function PlayHTToolPage() {
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
        "PlayHT delivers realistic AI voices for narration and product use cases, with cloning and API options. Quality is strong; ensure licensing and pronunciation review.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Realistic TTS voices", body: "Natural-sounding voices across many languages and accents." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Fast rendering", body: "High-speed generation for production workflows on higher tiers." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Voice cloning", body: "Clone voices (with consent) for consistent brand audio." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "APIs & SDKs", body: "Integrate TTS into apps, IVR, support bots, and content pipelines." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Batch & captions", body: "Batch jobs and caption exports for video/podcast workflows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Commercial rights", body: "Paid tiers include rights and improved QoS; review policies." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, AI Voices, Pros & Cons, Alternatives`}
        description="PlayHT review: pricing, AI voice quality, pros & cons, and alternatives like ElevenLabs and Murf for text-to-speech and cloning."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Pricing, Pros & Cons
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
                  {toolName} delivers realistic AI voices and cloning for content and product use cases—review pronunciation and rights before shipping.
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
              {toolName} is an AI text-to-speech platform for creating natural voiceovers, podcasts, product videos, and conversational experiences. It supports many languages and accents with realistic delivery.
            </p>
            <p className="mt-3 text-slate-700">Treat it as a production tool: check pronunciations, pacing, and legal rights—especially when cloning voices.</p>
            <p className="mt-3 text-slate-700">Use the API or web app to generate audio, add captions, and integrate with downstream workflows.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing polished AI voiceovers.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams producing explainers, promos, and product demos.",
                "Podcasters and video creators needing consistent narration.",
                "Marketers generating ads with commercial rights (paid tiers).",
                "Developers embedding TTS into apps, IVR, or chatbots.",
                "Teams localizing content into multiple languages quickly.",
                "Brands cloning approved voices for consistent audio identity.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on high-quality voices, cloning, and production-friendly APIs.</p>
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
                  Pricing is tiered by character usage and features. Paid plans add faster rendering, voice cloning, commercial rights, and API access. Enterprise tiers offer custom limits and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate quality; upgrade for cloning, API, and commercial rights when you move to production.</p>
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
                    <td className="px-4 py-3">Light creators/testing</td>
                    <td className="px-4 py-3">Core voices, character limits</td>
                    <td className="px-4 py-3">Good for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular production use</td>
                    <td className="px-4 py-3">Faster rendering, higher limits, commercial rights</td>
                    <td className="px-4 py-3">Monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large-scale/API-heavy</td>
                    <td className="px-4 py-3">Custom limits, cloning, SLAs, support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track pronunciation and brand safety. For ads or regulated industries, secure approvals and rights before launch.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Natural-sounding AI voices across languages.</li>
                  <li>Voice cloning (consent required) for brand consistency.</li>
                  <li>APIs for product integration and automation.</li>
                  <li>Fast rendering for production workflows.</li>
                  <li>Commercial rights on paid tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Character-based costs can rise with volume.</li>
                  <li>Cloning requires approvals and may have constraints.</li>
                  <li>Quality still needs human review for names/brands.</li>
                  <li>Free tiers limited for heavy use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI voice generators.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI voice platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ElevenLabs</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/elevenlabs">
                  View ElevenLabs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ElevenLabs is known for highly expressive voices and dubbing; {toolName} emphasizes speed, API usage, and cloning. Choose based on expressiveness vs product integration needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Murf AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/murf-ai">
                  View Murf AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Murf offers studio-style editing and voiceovers; {toolName} focuses on TTS, cloning, and APIs. Pick Murf for editor-like workflows, {toolName} for developer pipelines.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need realistic AI voices, cloning, and APIs for production content or apps and can budget for character-based pricing.
            </p>
            <p className="mt-3 text-slate-700">For expressive dubbing or script editing, compare with other studios; always review outputs for accuracy and rights.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong choice for high-quality TTS and cloning with developer-friendly workflows—best with human QA and clear licensing.
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
              Choose {toolName} if you want realistic AI voiceovers, cloning, and APIs for your content and products. Verify pronunciation, rights, and costs before scaling.
            </p>
            <p>
              Consider ElevenLabs for expressiveness or Murf for studio editing; {toolName} excels at TTS quality with developer-friendly delivery.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your workflow, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PlayHTToolPage;
