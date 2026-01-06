import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Speechelo";
const slug = "speechelo";
const category = "Text-to-Speech";
const shortPitch =
  "Speechelo is a text-to-speech tool that converts scripts into natural-sounding voiceovers with multiple voices and languages for video creators and marketers.";
const pricingSummary =
  "One-time/plan-based pricing with upsells. Higher packages add more voices/languages and commercial rights. Costs depend on usage limits and add-ons.";
const officialUrl = "https://speechelo.com";
const ratingValue = 3.9;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/speechelo.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Play.ht", slug: "play-ht" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Murf AI", slug: "murf-ai" },
  { name: "Lovo AI", slug: "lovo-ai" },
];

const faqs = [
  {
    q: "What is Speechelo?",
    a: "Speechelo is a text-to-speech tool for generating voiceovers from scripts, aimed at video creators and marketers.",
  },
  {
    q: "Who is it for?",
    a: "Creators, marketers, and small teams needing quick voiceovers without hiring voice talent.",
  },
  {
    q: "How is pricing structured?",
    a: "Plan-based with upsells; higher options add voices, languages, and commercial rights. Check limits before purchasing.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. It includes multiple languages/accents depending on plan.",
  },
  {
    q: "Can I use it for commercial projects?",
    a: "Commercial rights may require specific plans or upsells; verify license terms.",
  },
  {
    q: "Is it cloud-based?",
    a: "Yes. Generate audio online and download files; file formats depend on plan.",
  },
  {
    q: "Does it integrate with video editors?",
    a: "No native integrations; export audio for use in your editor or workflow.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. Check pronunciation, pacing, and script quality; edit audio as needed.",
  },
];

function SpeecheloToolPage() {
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
        "Speechelo converts text to speech with multiple voices and languages. It’s useful for quick voiceovers, but review licensing and audio quality for commercial use.",
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
      title: "Natural-style voices",
      body: "Multiple voices and accents to match brand tone and audience.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Language support",
      body: "Generate audio in various languages depending on your plan.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Voiceover pacing",
      body: "Adjust pauses and tone to improve clarity for video scripts.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial rights",
      body: "Certain plans include rights for business use—confirm before publishing.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud-based",
      body: "Generate and download audio files without local setup.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Workflow ready",
      body: "Export files to your video or audio editor; no native plugins required.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Speechelo review: pricing, features, pros & cons, and alternatives so you can decide if its text-to-speech voices fit your videos."
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
                  {toolName} helps you generate quick voiceovers—review pronunciation and licensing to ensure it fits your commercial needs.
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
              {toolName} is a text-to-speech tool for generating voiceovers without recording. It offers multiple voices, accents, and languages aimed at video creators and marketers.
            </p>
            <p className="mt-3 text-slate-700">
              It’s useful for quick production, but audio still needs review for pacing, emphasis, and pronunciation—especially for names or technical terms.
            </p>
            <p className="mt-3 text-slate-700">
              Export audio and edit in your preferred DAW or video editor to polish final output.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small teams and creators needing fast, affordable voiceovers.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "YouTube creators needing quick narration without hiring voice talent.",
                "Marketers producing explainer or promo videos on tight timelines.",
                "Course creators building voiceovers for e-learning content.",
                "Agencies testing scripts before commissioning voice actors.",
                "Teams localizing content with multiple languages/accents.",
                "Businesses needing budget-friendly audio for internal or low-stakes projects.",
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
              {toolName} focuses on fast text-to-speech generation with a mix of voices and languages, plus basic controls.
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
                  {toolName} uses plan-based pricing with upsells. Higher packages add more voices, languages, and commercial rights. Evaluate limits (characters, downloads) and license terms before purchasing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on a lower package; upgrade if you need more languages/rights after validating audio quality.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Testing/low volume</td>
                    <td className="px-4 py-3">Core voices, limited languages</td>
                    <td className="px-4 py-3">Check download/character caps</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active creators</td>
                    <td className="px-4 py-3">More voices, languages, longer scripts</td>
                    <td className="px-4 py-3">Review commercial rights inclusion</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Upsells/Commercial</td>
                    <td className="px-4 py-3">Business use</td>
                    <td className="px-4 py-3">Commercial rights, additional voices</td>
                    <td className="px-4 py-3">Confirm licensing terms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in editing time and any DAW/plugins you use. If you need higher fidelity or emotional range, compare with premium TTS options.
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
                  <li>Fast text-to-speech voiceovers.</li>
                  <li>Multiple voices and languages.</li>
                  <li>Affordable vs. hiring voice talent.</li>
                  <li>Cloud-based, easy downloads.</li>
                  <li>Useful for drafts and lower-stakes projects.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Audio quality may be less natural than premium TTS.</li>
                  <li>Licensing/commercial rights depend on plan.</li>
                  <li>Limited controls compared to pro voice editors.</li>
                  <li>Pronunciation may need manual fixes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other TTS tools if you need higher fidelity, API access, or broader licensing.
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
            <p className="text-slate-700">See how {toolName} compares to other TTS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/play-ht">
                  View Play.ht
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers high-fidelity TTS, APIs, and studio controls; {toolName} is simpler and budget-friendly. Choose based on quality needs and integration requirements.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ElevenLabs</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/elevenlabs">
                  View ElevenLabs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ElevenLabs focuses on ultra-realistic voices and cloning; {toolName} focuses on quick voiceovers. Choose based on realism, cloning needs, and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick, affordable voiceovers and can accept simpler audio controls and potential licensing upsells.
            </p>
            <p className="mt-3 text-slate-700">
              Test quality against your use case; for high-profile or broadcast work, compare premium TTS options.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Good for budget-friendly voiceovers—ensure licensing fits and review audio before publishing.
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
              Choose {toolName} if you want fast, budget-friendly text-to-speech for videos and drafts and can handle basic editing and licensing checks.
            </p>
            <p>
              Consider Play.ht or ElevenLabs for higher realism and APIs. {toolName} works well for quick turnarounds and lower-stakes content.
            </p>
            <p>{toolName} accelerates voiceover production—pair it with human QA to ensure quality.</p>
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

export default SpeecheloToolPage;
