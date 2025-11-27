import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Descript Overdub";
const slug = "descript-overdub";
const category = "AI Voice Cloning & Editing";
const shortPitch =
  "Descript Overdub lets you clone voices and generate/edit audio within Descript’s transcript-based editor for podcasts, video, and training content.";
const pricingSummary =
  "Included in Descript plans with limits by tier. Higher plans add more Overdub voices, transcription hours, collaboration, and export quality; try free with restrictions.";
const officialUrl = "https://www.descript.com/overdub";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/descript.com",
  gradient: "from-blue-500 via-emerald-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "ElevenLabs", slug: "elevenlabs" },
  { name: "Play.ht", slug: "play-ht" },
  { name: "WellSaid Labs", slug: "wellsaid-labs" },
  { name: "Murf AI", slug: "murf-ai" },
  { name: "Speechify", slug: "speechify" },
];

const faqs = [
  {
    q: "What is Descript Overdub?",
    a: "Overdub is Descript’s AI voice cloning feature that lets you create custom voices and generate or edit audio inside Descript’s editor.",
  },
  {
    q: "Who is it for?",
    a: "Podcasters, video creators, educators, and teams who edit via transcripts and want AI voice edits without re-recording.",
  },
  {
    q: "How is pricing structured?",
    a: "Overdub is included in Descript tiers. Higher plans allow more custom voices, transcription hours, and better export quality. Free plans have limited Overdub features.",
  },
  {
    q: "Is consent required?",
    a: "Yes. Voice cloning requires consent and verification. Overdub enforces consent for custom voices.",
  },
  {
    q: "Can I use stock voices?",
    a: "Yes. Stock voices are available; custom voices require training with provided audio and consent.",
  },
  {
    q: "Does it integrate with video editing?",
    a: "Yes. Overdub works within Descript’s video/audio editor—edits are transcript-based and update the timeline.",
  },
  {
    q: "Is there a free trial?",
    a: "Descript offers a free plan with limited Overdub; Pro tiers unlock more usage and quality.",
  },
  {
    q: "What about commercial use?",
    a: "Check Descript’s terms for commercial use of custom voices; ensure rights and consent are in place.",
  },
];

function DescriptOverdubToolPage() {
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
        "Descript Overdub enables AI voice cloning and transcript-based editing so teams can fix or generate audio without re-recording, all within Descript’s editor.",
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
      title: "Voice cloning",
      body: "Create custom voices with consent; generate audio from text within Descript.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Transcript-based editing",
      body: "Edit audio/video by editing text; Overdub fills or fixes lines seamlessly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Stock voices",
      body: "Use built-in voices when custom cloning isn’t needed.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Consent & security",
      body: "Voice cloning requires verification and consent to protect creators.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Video workflows",
      body: "Works alongside Descript’s video timeline for quick video/audio edits.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Collaboration",
      body: "Team plans include commenting, versioning, and shared drives.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Descript Overdub review: pricing, features, pros & cons, and alternatives so you can decide if AI voice cloning inside Descript fits your workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  {toolName} lets you fix lines, generate voiceovers, and keep audio in sync by editing text—ideal for podcasters and video teams.
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
              {toolName} is Descript’s AI voice cloning feature inside its transcript-based editor. Create custom voices with consent, generate or fix audio from text, and edit podcasts/video by editing the transcript.
            </p>
            <p className="mt-3 text-slate-700">Use it to replace retakes, add narration, or localize content without re-recording sessions.</p>
            <p className="mt-3 text-slate-700">Combine with Descript’s video tools to keep audio and video aligned as you edit.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams already editing in Descript who want AI voice edits and generation.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Podcasters fixing flubs and adding pickups without re-recording.",
                "Video creators updating VO alongside edits in Descript.",
                "Educators and trainers generating narration for lessons.",
                "Marketers creating voiceovers for product videos and ads.",
                "Teams localizing scripts with stock/custom voices.",
                "Collaborative teams needing comments, versions, and shared drives.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on voice cloning inside a transcript-based editor.</p>
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
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify_between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} is included in Descript plans. Higher tiers allow more custom voices, transcription hours, and export quality. Free plans offer limited Overdub; Pro tiers remove many constraints.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you need custom voices and more transcription hours, start on Pro; use the free plan to test editing workflow first.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing Overdub & transcripts</td>
                    <td className="px-4 py-3">Limited Overdub, transcription hours</td>
                    <td className="px-4 py-3">Great for trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator/Pro</td>
                    <td className="px-4 py-3">Regular pod/video teams</td>
                    <td className="px-4 py-3">More Overdub voices, hours, better exports</td>
                    <td className="px-4 py-3">Fits most production needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Enterprise</td>
                    <td className="px-4 py-3">Collaboration & scale</td>
                    <td className="px-4 py-3">Shared drives, collaboration, top limits</td>
                    <td className="px-4 py-3">Best for larger teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Factor in transcription hours and export needs; confirm consent and rights for any custom voice you create.</p>
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
                  <li>Transcript-based editing speeds up audio fixes.</li>
                  <li>Custom and stock voices available.</li>
                  <li>Fits into Descript’s audio/video workflow.</li>
                  <li>Collaboration features on team plans.</li>
                  <li>Great for podcast and video teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Consent requirements mean extra steps for custom voices.</li>
                  <li>Quality depends on training data and plan limits.</li>
                  <li>Free tier has limited Overdub usage and exports.</li>
                  <li>Not a standalone tool; best when using Descript overall.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI voice tools to match quality, rights, and workflow integration.
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
            <p className="text-slate-700">See how {toolName} compares with other AI voice platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ElevenLabs</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/elevenlabs">
                  View ElevenLabs
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ElevenLabs specializes in voice quality and API; {toolName} is integrated into Descript for editing. Choose based on standalone voice needs vs. transcript-based editing workflow.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Play.ht</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/play-ht">
                  View Play.ht
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Play.ht offers TTS and API; {toolName} shines for edit-in-Descript workflows with custom voices. Pick based on whether you want a standalone TTS API or all-in-one editing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you edit in Descript and want AI voice cloning to speed up podcast, video, or training content without re-recording.
            </p>
            <p className="mt-3 text-slate-700">
              It performs best when you have clear scripts, consent for custom voices, and a plan for transcription hours and export needs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful add-on for Descript users—budget for the right tier and ensure voice consent and compliance.</p>
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
              Choose {toolName} if you use Descript and want AI voice cloning for faster audio/video edits, with stock/custom voices and transcript-based workflows.
            </p>
            <p>
              Consider ElevenLabs or Play.ht for standalone TTS/API needs; use {toolName} when editing inside Descript is your main workflow.
            </p>
            <p>{toolName} saves re-recording time—keep consent, compliance, and audio quality checks in place.</p>
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

export default DescriptOverdubToolPage;
