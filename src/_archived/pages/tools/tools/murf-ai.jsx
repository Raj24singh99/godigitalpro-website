import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Murf AI";
const slug = "murf-ai";
const category = "AI Voiceover & TTS";
const shortPitch = "Murf AI converts scripts into realistic voiceovers with multiple voices, accents, and editing tools for video, ads, and training content.";
const pricingSummary = "Subscription tiers by usage and features. Higher plans add more voice options, hours, team collaboration, and commercial rights.";
const officialUrl = "https://murf.ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/murf.ai",
  gradient: "from-indigo-500 via-amber-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.2)]",
};

const alternatives = [
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "Play.ht", slug: "play-ht" },
  { name: "Lovo AI", slug: "lovo-ai" },
  { name: "Speechelo", slug: "speechelo" },
];

const faqs = [
  { q: "What is Murf AI?", a: "Murf AI is a text-to-speech platform that creates realistic voiceovers from scripts with multiple voices, accents, and editing tools." },
  { q: "Who is it for?", a: "Creators, marketers, educators, and product teams producing videos, ads, training, or product walkthroughs." },
  { q: "Does it offer commercial rights?", a: "Commercial rights are available on paid plans; check your tier for usage terms." },
  { q: "Can I edit timing and emphasis?", a: "Yes. You can adjust pauses, speed, emphasis, and pronunciation to refine output." },
  { q: "Are there multiple languages?", a: "Yes. Murf supports multiple languages and accents; availability varies by voice." },
  { q: "Can I clone voices?", a: "Voice cloning is available on certain plans; verify eligibility and consent requirements." },
  { q: "Does it integrate with video?", a: "You can import media, sync voiceovers, and export audio; use your video editor for final assembly." },
  { q: "Is there a free trial?", a: "Trials or limited previews are often available; check current plan details on Murf.ai." },
];

function MurfAiToolPage() {
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
        "Murf AI produces realistic voiceovers with multiple voices and editing controls. It is useful for teams that need fast narration for video, training, or ads without hiring voice talent.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Realistic voices", body: "Choose from multiple voices, accents, and styles to match your brand." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Editing controls", body: "Adjust speed, pauses, emphasis, and pronunciation for natural delivery." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Voice cloning", body: "Clone voices on eligible plans with proper consent for consistent branding." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Media sync", body: "Import media, align voiceovers, and export audio to your video editor." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Multilingual", body: "Support for multiple languages and accents to reach wider audiences." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Commercial use", body: "Paid plans include commercial rights—always review the license terms." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Murf AI review: pricing, features, pros & cons, and alternatives to decide if its voiceovers fit your production workflow."
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
                  {toolName} speeds up voiceover production. Test voices, refine pacing, and combine with your editor for polished outputs.
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
              {toolName} is an AI-powered text-to-speech platform that turns scripts into realistic voiceovers. It offers multiple voices, accents, and editing controls to fine-tune delivery for videos, ads, training, and product content.
            </p>
            <p className="mt-3 text-slate-700">
              Use it as a production accelerator: generate drafts, adjust timing and tone, then finalize in your video/audio editor. Human review ensures accuracy, brand fit, and licensing compliance.
            </p>
            <p className="mt-3 text-slate-700">Pair it with a script workflow and QC process, especially for regulated or branded content.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams producing frequent voiceovers without hiring voice talent each time.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams making promo videos and ads.",
                "L&D teams producing training modules and explainers.",
                "Product teams creating walkthroughs and demos.",
                "Agencies needing many voiceovers across clients.",
                "Creators who want multilingual narration options.",
                "Teams that need quick voice tests before studio recording.",
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
              {toolName} focuses on realistic voices, editing controls, and multilingual support to make voiceover production fast and flexible.
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
                  {toolName} offers subscriptions by usage and features. More expensive plans include additional hours, voice options, team collaboration, and commercial rights. Align your plan with production volume and licensing needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to test voices and workflow; upgrade for more hours, cloning, or team features when production scales.</p>
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
                    <td className="px-4 py-3">Light use and testing</td>
                    <td className="px-4 py-3">Limited hours, core voices, basic export</td>
                    <td className="px-4 py-3">Great for trials and small projects</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams producing regularly</td>
                    <td className="px-4 py-3">More hours, more voices, better controls</td>
                    <td className="px-4 py-3">Fits most recurring needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume and collaboration</td>
                    <td className="px-4 py-3">Highest limits, team features, cloning, support</td>
                    <td className="px-4 py-3">Best when production is at scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track hours used and output quality. Confirm licensing terms for commercial projects and voice cloning; keep an approval process for final scripts and exports.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Realistic voices with multiple accents and tones.</li>
                  <li>Editing controls for timing, emphasis, and pronunciation.</li>
                  <li>Voice cloning on eligible plans.</li>
                  <li>Media sync supports video workflows.</li>
                  <li>Commercial rights available on paid tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Human review needed for accuracy and brand voice.</li>
                  <li>Voice cloning and commercial rights require plan alignment.</li>
                  <li>Heavy use can consume hours quickly.</li>
                  <li>Not a full audio workstation; editing may require other tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other TTS platforms to balance voice quality, pricing, and licensing.
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
            <p className="text-slate-700">See how {toolName} stacks up with leading TTS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ElevenLabs</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/elevenlabs">
                  View ElevenLabs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ElevenLabs is known for highly realistic voices and cloning. {toolName} combines realistic voices with media sync and an approachable editor. Choose based on voice quality preferences, pricing, and workflow needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/play-ht">
                  View Play.ht
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers a broad voice library and distribution options. {toolName} focuses on production-friendly editing. Pick based on library needs and editing controls for your projects.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast, realistic voiceovers and are ready to edit for accuracy and brand voice.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor hours and licensing; keep a QA pass for scripts and pronunciation before publishing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid TTS tool for production teams; human review keeps quality and compliance on track.
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
            <p>Use {toolName} to produce realistic voiceovers quickly; refine delivery and licensing before release.</p>
            <p>
              Consider alternatives for specific voice needs or pricing; keep editorial review to ensure accuracy and brand fit.
            </p>
            <p>{toolName} accelerates voiceover production—human oversight ensures it meets your standards.</p>
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

export default MurfAiToolPage;
