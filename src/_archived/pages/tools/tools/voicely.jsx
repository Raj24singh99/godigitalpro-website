import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Voicely";
const slug = "voicely";
const category = "Text-to-speech";
const shortPitch = "Voicely converts text to AI voiceovers for videos, explainers, and e-learning with multilingual voices.";
const pricingSummary =
  "Tiered plans by minutes/credits. Higher tiers add more voices, languages, commercial rights, and longer output limits.";
const officialUrl = "https://voicely.net";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/voicely.net",
  gradient: "from-indigo-500 via-purple-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Play.ht", slug: "play-ht" },
  { name: "Murf AI", slug: "murf-ai" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "Resemble AI", slug: "resemble-ai" },
  { name: "Speechelo", slug: "speechelo" },
];

const faqs = [
  {
    q: "What is Voicely?",
    a: "Voicely is a text-to-speech tool that generates AI voiceovers in multiple languages for videos and e-learning.",
  },
  {
    q: "Who is it for?",
    a: "Creators, marketers, and educators needing quick voiceovers without hiring voice talent.",
  },
  {
    q: "How is pricing structured?",
    a: "Minute/credit-based tiers. Higher plans add more voices, languages, commercial rights, and longer outputs.",
  },
  {
    q: "Can I use it commercially?",
    a: "Commercial usage depends on plan; verify license terms before publishing paid content.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. Many languages/accents are available; test pronunciation and pacing before final use.",
  },
  {
    q: "Can I edit pacing and emphasis?",
    a: "Basic controls exist; for detailed control, consider more advanced TTS platforms.",
  },
  {
    q: "Does it integrate with video editors?",
    a: "You can export audio and import into editors; native integrations are limited.",
  },
  {
    q: "Does it replace human narration?",
    a: "No. It speeds production, but human QA is needed for tone, pronunciation, and compliance.",
  },
];

function VoicelyToolPage() {
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
        "Voicely creates AI voiceovers in multiple languages. It’s useful for quick narration, but review for tone and accuracy—human oversight remains important.",
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
      title: "Multilingual voices",
      body: "Voices across languages and accents; test pronunciation before final export.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Fast TTS generation",
      body: "Turn scripts into voiceovers quickly for videos and e-learning.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Formats & export",
      body: "Export audio for use in editors or LMS; integrate manually into your workflow.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial rights",
      body: "Higher plans include commercial usage—always verify license terms.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud-based",
      body: "No complex setup; generate from the web app and download outputs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Basic controls",
      body: "Adjust some pacing and tone; for fine control, pair with manual editing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Voicely review: pricing, features, pros & cons, and alternatives so you can choose the right AI voiceover tool."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
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
                  {toolName} speeds up voiceovers across languages—use it to draft fast, then adjust for tone, pronunciation, and compliance.
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
              {toolName} is a text-to-speech tool for generating voiceovers in multiple languages. It’s aimed at quick narration for videos, explainers, and training content.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a production accelerator: you still need to review for tone, emphasis, and accuracy, especially in regulated contexts or branded content.
            </p>
            <p className="mt-3 text-slate-700">Export audio and mix in your editor; set QA checkpoints for pronunciation and pacing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing fast, affordable voiceovers across multiple languages.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Video creators adding narration to explainers.",
                "E-learning teams generating multilingual modules.",
                "Marketers needing quick voiceovers for promos.",
                "Agencies producing drafts before hiring voice talent.",
                "Teams translating content for multiple regions.",
                "Small teams that need low-cost TTS vs. hiring voice actors.",
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
              {toolName} focuses on multilingual TTS, fast generation, exports, commercial usage options, and basic controls.
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
                  {toolName} uses minute/credit-based plans. Higher tiers add more minutes, voice options, and commercial usage. Costs rise with output length and language needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to test quality; upgrade if you need more minutes or commercial rights.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Basic voices, limited minutes</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Regular production</td>
                    <td className="px-4 py-3">More minutes, more voices/languages</td>
                    <td className="px-4 py-3">Fits most small teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Commercial/Top</td>
                    <td className="px-4 py-3">High volume, commercial</td>
                    <td className="px-4 py-3">Highest limits, commercial rights</td>
                    <td className="px-4 py-3">Pick for large or paid campaigns</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for QA time to review pronunciation and pacing. Confirm licensing on your plan before commercial distribution.
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
                  <li>Multilingual voices for global content.</li>
                  <li>Fast text-to-speech generation.</li>
                  <li>Commercial rights on higher tiers.</li>
                  <li>Simple web-based workflow.</li>
                  <li>Exports fit standard editors and LMS.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Quality varies by voice/language.</li>
                  <li>Limited fine-grained control vs advanced TTS.</li>
                  <li>Licensing/commercial use depends on plan.</li>
                  <li>Human QA needed for brand/regulated content.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other TTS platforms to match voice quality, controls, and licensing needs.
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
            <p className="text-slate-700">See how {toolName} compares to other TTS solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/play-ht">
                  View Play.ht
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers higher-quality voices and more control; {toolName} is simpler and faster. Choose based on voice quality needs and control requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Murf AI</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/murf-ai">
                  View Murf AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Murf AI offers studio-like controls and a broader library; {toolName} is quicker for straightforward voiceovers. Pick based on production depth vs speed.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick, multilingual voiceovers and can accept lighter control in exchange for speed and simplicity.
            </p>
            <p className="mt-3 text-slate-700">
              Review outputs for brand tone and accuracy; upgrade or switch if you need finer control or higher-quality voices.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Good for fast, budget-friendly TTS—pair with human QA and consider higher-end tools for premium productions.
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
              Choose {toolName} if you want quick, multilingual voiceovers without heavy setup and can handle quality checks manually.
            </p>
            <p>
              Consider Play.ht or Murf AI for higher fidelity and control; use {toolName} when speed and simplicity are the priority.
            </p>
            <p>{toolName} accelerates narration—keep humans reviewing pronunciation, pacing, and compliance.</p>
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

export default VoicelyToolPage;
