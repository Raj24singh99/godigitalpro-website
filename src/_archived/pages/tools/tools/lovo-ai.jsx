import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Lovo AI";
const slug = "lovo-ai";
const category = "AI Voice & Audio";
const shortPitch = "Lovo AI is a text-to-speech and voiceover platform with realistic voices, cloning, and audio editing for videos, ads, and podcasts.";
const pricingSummary =
  "Tiered pricing by characters and features. Paid plans add more voices, downloads, voice cloning, and commercial rights; costs scale with usage.";
const officialUrl = "https://lovo.ai";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/lovo.ai",
  gradient: "from-purple-500 via-indigo-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(129,140,248,0.24)]",
};

const alternatives = [
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Play.ht", slug: "play-ht" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "Descript", slug: "descript" },
  { name: "Murf AI", slug: "murf-ai" },
];

const faqs = [
  {
    q: "What is Lovo AI?",
    a: "Lovo AI is a text-to-speech and voiceover platform offering realistic voices, voice cloning, and audio editing for media projects.",
  },
  {
    q: "Who is Lovo AI best for?",
    a: "Creators, marketers, and teams needing high-quality voiceovers for videos, ads, and podcasts with cloning options.",
  },
  {
    q: "Does it support voice cloning?",
    a: "Yes. Voice cloning is available on paid tiers; ensure you have rights/consent for training voices.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is character-based with feature tiers. Paid plans add more characters, downloads, cloning, and commercial rights.",
  },
  {
    q: "Can I edit audio?",
    a: "Yes. Basic audio editing, timing, and emphasis controls are included.",
  },
  {
    q: "Are commercial rights included?",
    a: "Commercial usage depends on plan; review terms before publishing or selling audio.",
  },
  {
    q: "What languages are supported?",
    a: "Multiple voices and languages are offered; test for your target accent and pronunciation needs.",
  },
  {
    q: "Do I still need human QA?",
    a: "Yes. Review audio for pronunciation, pacing, and brand fit; adjust and re-render as needed.",
  },
];

function LovoAIToolPage() {
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
        "Lovo AI delivers realistic text-to-speech with voice cloning and editing, helping teams create voiceovers for video, ads, and podcasts.",
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
      title: "Realistic voices",
      body: "High-quality voices across languages and accents for professional outputs.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-purple-500" />,
      title: "Voice cloning",
      body: "Clone voices on paid tiers; ensure rights and consent for training.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Audio editing",
      body: "Adjust speed, pauses, emphasis, and timing; re-render as needed.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial rights",
      body: "Paid plans include commercial usage; review terms before publishing.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Multi-language",
      body: "Voices in multiple languages; test pronunciation for your scripts.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-500" />,
      title: "Exports & integrations",
      body: "Download audio and integrate with video editors and publishing pipelines.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Lovo AI review: pricing, features, pros & cons, and alternatives so you can choose the right AI voiceover and cloning platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} produces realistic voiceovers and offers voice cloning—ideal for media teams who review outputs for rights, quality, and compliance.
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
              {toolName} is a TTS and voiceover platform with realistic voices, cloning, and editing tools. It’s built for creators and marketers who need voice tracks for video, ads, and podcasts.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to draft scripts, convert to audio, and adjust timing and emphasis. Voice cloning helps keep consistent brand voices when properly licensed and consented.
            </p>
            <p className="mt-3 text-slate-700">
              Review licensing and consent requirements before deploying cloned or AI-generated voices commercially.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for media teams, marketers, and creators needing realistic voiceovers and optional voice cloning with commercial rights.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Video creators adding narration or explainer audio.",
                "Marketers generating ad voiceovers in multiple languages.",
                "Podcast teams prototyping or producing episodes quickly.",
                "Brands needing consistent voices via cloning (with consent).",
                "Agencies producing voiceovers at volume with QA.",
                "Teams that will review audio for pacing, pronunciation, and licensing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
              {toolName} focuses on realistic TTS, voice cloning, and editing controls with credit-based pricing and commercial options.
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
                  {toolName} uses character-based tiers. Paid plans add more characters, downloads, voice cloning, and commercial rights. Costs increase with volume and premium features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick the tier that includes commercial rights and cloning if needed; upgrade if you hit character or download limits.</p>
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
                    <td className="px-4 py-3">Light use</td>
                    <td className="px-4 py-3">Limited characters, core voices</td>
                    <td className="px-4 py-3">Test quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators/teams</td>
                    <td className="px-4 py-3">More characters, downloads, commercial use</td>
                    <td className="px-4 py-3">Common choice for production</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest limits, cloning, premium support</td>
                    <td className="px-4 py-3">Plan for rights and compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor character usage and ensure you have consent and rights for cloning. Add human QA and post-production when needed.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Realistic voices with cloning options.</li>
                  <li>Editing controls for pacing and emphasis.</li>
                  <li>Commercial rights available on paid tiers.</li>
                  <li>Multi-language support.</li>
                  <li>Exports and integration-friendly outputs.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Character limits; costs rise with heavy usage.</li>
                  <li>Voice quality varies by language/accent.</li>
                  <li>Cloning requires rights/consent and compliance checks.</li>
                  <li>Human QA still needed for brand fit and accuracy.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI voice platforms to match your realism needs, cloning requirements, and licensing budgets.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other AI voiceover platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ElevenLabs</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/elevenlabs">
                  View ElevenLabs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ElevenLabs is known for top-tier realism; {toolName} offers strong quality plus editing and cloning options. Choose based on quality needs, budget, and licensing requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/play-ht">
                  View Play.ht
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers broad voice options and commercial plans; {toolName} emphasizes editing and cloning. Pick based on your need for editing controls vs. voice variety.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth considering if you need realistic voiceovers, editing controls, and voice cloning with commercial rights, and you can manage QA and licensing.
            </p>
            <p className="mt-3 text-slate-700">
              Track character usage, secure necessary consents for cloning, and use post-production for polish where needed.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable AI voice platform for professional outputs—best with clear QA, licensing checks, and production workflows.
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
              Choose {toolName} if you want realistic TTS with editing and cloning, and you can handle licensing, consent, and quality review steps.
            </p>
            <p>
              Consider ElevenLabs for ultimate realism or Play.ht for broad voice libraries; keep {toolName} for editing control and cloning with commercial options.
            </p>
            <p>{toolName} accelerates voiceover production—success depends on thorough QA and compliance with rights and consent.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default LovoAIToolPage;
