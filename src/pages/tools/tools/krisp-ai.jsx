import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Krisp AI";
const slug = "krisp-ai";
const category = "Meetings & Audio Productivity";
const shortPitch = "Krisp AI provides real-time noise cancellation, echo removal, and AI meeting transcription to improve call quality and productivity.";
const pricingSummary =
  "Free and paid tiers. Paid plans add HD noise cancellation minutes, meeting transcription, call summaries, and admin controls for teams.";
const officialUrl = "https://krisp.ai";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/krisp.ai",
  gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(6,182,212,0.24)]",
};

const alternatives = [
  { name: "Zoom AI Companion", slug: "zoom" },
  { name: "Microsoft Teams Noise Suppression", slug: "microsoft-teams" },
  { name: "NVIDIA RTX Voice", slug: "nvidia-rtx-voice" },
  { name: "Gong", slug: "gong" },
  { name: "Otter.ai", slug: "otter-ai" },
];

const faqs = [
  {
    q: "What is Krisp AI?",
    a: "Krisp AI is a noise cancellation and meeting productivity app that removes background noise/echo and offers transcription and summaries.",
  },
  {
    q: "Who is Krisp AI best for?",
    a: "Remote teams, sales/support reps, and anyone on frequent calls who needs cleaner audio and meeting notes.",
  },
  {
    q: "Does Krisp work with any conferencing app?",
    a: "Yes. It runs as a system-level device, working with Zoom, Teams, Meet, and other apps.",
  },
  {
    q: "How does pricing work?",
    a: "Free tier with limited minutes; paid plans add more HD noise cancellation, transcription, summaries, and admin controls for teams.",
  },
  {
    q: "Is transcription included?",
    a: "Transcription and summaries are available on paid tiers; check minute limits and storage.",
  },
  {
    q: "Does Krisp record calls?",
    a: "It can generate transcripts and summaries; review privacy requirements for recording and storage.",
  },
  {
    q: "Is it secure?",
    a: "Audio processing is device-side for noise cancellation; transcription features may process data—review security docs and policies.",
  },
  {
    q: "Do I still need good hardware?",
    a: "Krisp improves audio but works best with decent mics and stable connections.",
  },
];

function KrispAIToolPage() {
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
        "Krisp AI removes background noise and echo for calls and adds transcription and summaries, helping remote teams sound clearer and stay organized.",
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
      title: "Noise cancellation",
      body: "Real-time removal of background sounds for both microphone and speaker audio.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-cyan-500" />,
      title: "Echo removal",
      body: "Eliminate echo and room reverb to keep voices clear.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Transcription & summaries",
      body: "Meeting transcripts and AI summaries for notes and follow-ups (paid tiers).",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Privacy & security",
      body: "On-device noise processing; review policies for transcription and storage.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "App compatibility",
      body: "Works with major conferencing tools by acting as a virtual device.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Team controls",
      body: "Admin dashboards, usage controls, and centralized billing on team plans.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Krisp AI review: pricing, features, pros & cons, and alternatives so you can choose the right noise cancellation and meeting productivity tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-cyan-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-100 blur-3xl" />
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
                  {toolName} keeps calls clear by removing noise and echo—and adds transcripts and summaries so teams stay aligned after meetings.
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
              {toolName} is a real-time noise cancellation app for meetings. It removes background sounds and echo, and on paid tiers offers transcription and summaries to capture key points.
            </p>
            <p className="mt-3 text-slate-700">
              Use it with any conferencing app by selecting Krisp as your audio device. Teams can reduce distractions, improve customer call quality, and standardize meeting notes.
            </p>
            <p className="mt-3 text-slate-700">
              Audio processing happens on-device for noise removal; review policies for transcript storage and privacy if you enable meeting notes.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for remote teams, sales/support reps, and anyone on frequent calls needing cleaner audio and meeting notes.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Remote teams working in noisy environments.",
                "Sales and support reps on customer-facing calls.",
                "Leaders who want call summaries and transcripts.",
                "Teams with mixed conferencing apps needing a universal solution.",
                "Users without premium noise suppression in their meeting app.",
                "Organizations needing admin controls for rollout and billing.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500" />
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
              {toolName} focuses on noise removal, echo cancellation, and meeting notes to improve call quality and productivity.
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
                  {toolName} offers a free tier with limited minutes. Paid plans add more HD noise cancellation, transcription, summaries, and admin features. Costs scale with usage and seats.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free or the lowest paid tier; measure minutes and transcription needs, then upgrade for more capacity and admin controls.</p>
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
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Limited noise cancellation minutes</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Frequent callers</td>
                    <td className="px-4 py-3">More minutes, HD removal, transcripts</td>
                    <td className="px-4 py-3">Best for daily meetings</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Business</td>
                    <td className="px-4 py-3">Teams</td>
                    <td className="px-4 py-3">Admin controls, higher limits, summaries</td>
                    <td className="px-4 py-3">Centralize billing and rollout</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track monthly minutes and transcription storage. Ensure policies allow recording/transcription; inform participants when applicable.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-cyan-50 p-5 shadow-sm ring-1 ring-cyan-100">
                <div className="flex items-center gap-2 text-cyan-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong real-time noise and echo removal.</li>
                  <li>Works with major meeting apps as a virtual device.</li>
                  <li>Transcripts and summaries improve follow-up.</li>
                  <li>On-device processing for noise cancellation.</li>
                  <li>Team controls for centralized rollout.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free tier has limited minutes.</li>
                  <li>Transcription/storage may raise compliance needs.</li>
                  <li>Quality still depends on mic and network.</li>
                  <li>Not all features available on every OS/device.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other noise reduction and meeting productivity tools to match your platform, budget, and compliance needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other noise cancellation and meeting assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom/Teams built-in</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/zoom">
                  View Zoom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Built-in suppression in Zoom/Teams is convenient but may be limited. {toolName} offers stronger cancellation, works across apps, and adds transcripts/summaries on paid tiers.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs NVIDIA RTX Voice</h3>
                <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-600" href="/tools/nvidia-rtx-voice">
                  View NVIDIA RTX Voice
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                RTX Voice delivers strong noise removal but requires specific GPUs and lacks transcripts. {toolName} is hardware-agnostic and adds meeting notes; choose based on hardware and feature needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need stronger noise cancellation across apps plus transcription and summaries to streamline meetings.
            </p>
            <p className="mt-3 text-slate-700">
              Evaluate minutes usage, device compatibility, and privacy requirements. Start free, then upgrade if quality and transcripts meet your standards.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top pick for clean calls and meeting notes—ensure compliance for recording and inform participants when transcripts are enabled.
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
              Choose {toolName} if you need stronger noise/echo removal across meeting apps and value built-in transcripts and summaries to keep teams aligned.
            </p>
            <p>
              Consider built-in app suppression for light needs or RTX Voice if you have compatible GPUs; keep {toolName} for hardware-agnostic quality and meeting notes.
            </p>
            <p>{toolName} improves call professionalism and saves time on note-taking—just align usage with privacy and compliance policies.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-cyan-700 hover:text-cyan-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-cyan-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default KrispAIToolPage;
