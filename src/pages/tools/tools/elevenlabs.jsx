import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ElevenLabs";
const slug = "elevenlabs";
const category = "AI Voice Generation";
const shortPitch =
  "ElevenLabs creates natural-sounding AI voices, clones custom voices, and offers multilingual dubbing for content, products, and support experiences.";
const pricingSummary =
  "Plans start around $5–$22/month for personal/creator usage; higher tiers add more characters, voice cloning, commercial rights, and enterprise controls. API is usage-based.";
const officialUrl = "https://elevenlabs.io";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/elevenlabs.io",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "Play.ht", slug: "play-ht" },
  { name: "Descript", slug: "descript" },
  { name: "Resemble AI", slug: "resemble-ai" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "Amazon Polly", slug: "amazon-polly" },
];

const faqs = [
  {
    q: "Is ElevenLabs good for production use?",
    a: "Yes. Many teams use it for podcasts, product voice, and support. Ensure you’re on a plan with the rights and quality you need.",
  },
  {
    q: "Can I clone a custom voice?",
    a: "Yes. Voice cloning is available on paid tiers with consent requirements. You can create proprietary voices for your brand.",
  },
  {
    q: "How many languages are supported?",
    a: "ElevenLabs supports dozens of languages and dialects; coverage expands regularly. Check the docs for current support.",
  },
  {
    q: "Is there an API?",
    a: "Yes. A robust API lets you generate speech, stream audio, and manage voices with usage-based billing.",
  },
  {
    q: "Does it support dubbing or voice conversion?",
    a: "Yes. Dubbing and voice conversion can translate and match voices across languages for localization.",
  },
  {
    q: "What file formats are supported?",
    a: "You can export common audio formats like MP3 and WAV; the API also supports streaming responses.",
  },
  {
    q: "How is pricing measured?",
    a: "Pricing is based on characters or generated audio duration. API usage is metered similarly.",
  },
  {
    q: "What about content safety?",
    a: "Policies require consent for cloning and restrict harmful content. Use provided safety filters and follow terms to stay compliant.",
  },
];

function ElevenLabsToolPage() {
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
        "ElevenLabs is a leading AI voice platform for lifelike TTS, voice cloning, and dubbing. Creators and product teams use it for narration, localization, and in-app voice.",
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
      icon: <Sparkles className="h-5 w-5 text-orange-500" />,
      title: "Lifelike TTS",
      body: "High-quality neural voices with adjustable stability, clarity, and style settings.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-amber-500" />,
      title: "Voice cloning",
      body: "Create custom voices (with consent) to represent your brand or narrators consistently.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-rose-500" />,
      title: "Multilingual dubbing",
      body: "Translate and dub content while preserving tone, making localization faster.",
    },
    {
      icon: <Plug className="h-5 w-5 text-orange-500" />,
      title: "Streaming API",
      body: "Generate and stream audio in real time for apps, support bots, and product voice.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Safety and rights",
      body: "Consent-based cloning, watermarking, and policy controls help keep usage compliant.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Editor and batch tools",
      body: "Web editor, pronunciation controls, and batch synthesis speed up production workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ElevenLabs review for creators and product teams: pricing, features, pros & cons, and alternatives for AI voice and cloning."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-orange-500" />
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
                  ElevenLabs delivers realistic AI voices and cloning so you can narrate content, power products, or localize experiences without heavy recording.
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
              {toolName} is an {category.toLowerCase()} platform that generates humanlike speech and custom voices. It’s used for narration, support bots, product voice, audiobooks, and localization.
            </p>
            <p className="mt-3 text-slate-700">
              Content teams use it to speed up production; product teams integrate via API to power real-time or on-demand audio experiences.
            </p>
            <p className="mt-3 text-slate-700">
              Dubbing tools let you translate and voice content across languages while retaining tone and style.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need high-quality voiceovers without studio time.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content creators producing podcasts, audiobooks, or video narration.",
                "Product teams adding voice to apps, IVR, or support bots.",
                "Localization teams dubbing content across languages.",
                "Marketing teams building brand voices and quick promos.",
                "Education teams producing course narration at scale.",
                "Developers needing streaming TTS via API.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />
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
              {toolName} emphasizes voice quality, cloning, and developer access so teams can add natural audio to content and products.
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
                  Pricing scales by characters/audio duration and feature access (cloning, commercial rights, enterprise security). Entry plans are under $25/month; enterprise is quoted.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Creator to test quality; upgrade if you need cloning rights, higher character limits, or enterprise compliance.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Personal and hobby use</td>
                    <td className="px-4 py-3">Character cap, limited voices, non-commercial</td>
                    <td className="px-4 py-3">~$5–$10/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Creators and small teams</td>
                    <td className="px-4 py-3">Higher caps, commercial rights, cloning access</td>
                    <td className="px-4 py-3">~$22+/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/API</td>
                    <td className="px-4 py-3">Products, support, localization at scale</td>
                    <td className="px-4 py-3">Usage-based, SLA, governance features</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model costs by character usage and whether you need cloning or dubbing at scale. Enterprise tiers add SSO, security reviews, and priority support.
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
                  <li>Top-tier natural voices with style controls.</li>
                  <li>Custom voice cloning with consent workflows.</li>
                  <li>Strong multilingual support and dubbing.</li>
                  <li>API with streaming for real-time use cases.</li>
                  <li>Batch tools and pronunciation control for production.</li>
                  <li>Clear pricing tiers for personal to enterprise use.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Character limits can be restrictive on lower tiers.</li>
                  <li>Cloning and commercial rights require higher plans.</li>
                  <li>Consent and usage policies require governance and review.</li>
                  <li>Voice quality still depends on scripts and fine-tuning settings.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with other TTS and cloning platforms. Pick based on realism, rights, language coverage, and API needs.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare {toolName} to other AI voice platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/elevenlabs-vs-play-ht">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers strong voices and commercial plans. {toolName} is widely praised for realism and supports advanced cloning and dubbing tools.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for top-tier quality and cloning; choose Play.ht if you want flexible pricing and solid TTS without heavy cloning needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Resemble AI</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/elevenlabs-vs-resemble-ai">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Resemble AI focuses on custom voice creation and real-time voice. {toolName} combines polished default voices with cloning and dubbing in one platform.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for strong out-of-the-box voices and dubbing; choose Resemble AI if you need specialized real-time voice conversion.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need realistic voices, multilingual dubbing, or custom cloning, {toolName} is worth it. Pricing is approachable to start and scales with usage.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need occasional TTS, compare cheaper options or bundled voice services from cloud providers. For heavy governance, align with enterprise terms.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a top choice for high-quality AI voice with cloning and API flexibility for content and product teams.
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
              Choose {toolName} if you want realistic AI voices, cloning, and multilingual dubbing for content or product experiences.
            </p>
            <p>
              Consider Play.ht or cloud TTS for basic needs; Resemble AI or WellSaid Labs if you need specialized real-time voice or strict enterprise controls.
            </p>
            <p>{toolName} offers one of the best balances of quality, control, and API access, making it suitable from creators to enterprises.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default ElevenLabsToolPage;
