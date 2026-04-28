import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Crown, ArrowLeft, ChevronDown, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Descript";
const slug = "descript";
const category = "Video & Podcast Editing";
const shortPitch =
  "Descript is an AI-powered video, screen recording, and podcast editor that lets teams edit by text transcript, remove filler words, and publish polished content fast.";
const pricingSummary =
  "Free plan with limited transcription. Creator starts around $12/editor/month, Pro near $24/editor/month with more transcription hours, filler word removal, and export automation.";
const officialUrl = "https://www.descript.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/descript.com",
  gradient: "from-sky-500 via-cyan-500 to-blue-700",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.25)]",
};

const alternatives = [
  { name: "Veed", slug: "veed" },
  { name: "Riverside", slug: "riverside" },
  { name: "Loom", slug: "loom" },
  { name: "Kapwing", slug: "kapwing" },
  { name: "Vimeo", slug: "vimeo" },
];

const faqs = [
  { q: "Is Descript free?", a: "Descript has a free plan with limited transcription and export options. Creator and Pro add more hours, stock assets, filler word removal, and audiogram templates." },
  { q: "Is Descript good for podcasts?", a: "Yes. You can record, multitrack edit, remove filler words, apply Studio Sound, and publish directly to podcast hosts or export mastered files." },
  { q: "Can Descript replace screen recorders?", a: "Descript includes screen and webcam recording with instant transcriptions and one-click editing by text. Many teams use it instead of Loom for polished outputs." },
  { q: "Does Descript support team collaboration?", a: "Shared projects, comments, and version history make it easy for producers, editors, and marketers to collaborate, leave notes, and lock final cuts." },
  { q: "What is Overdub?", a: "Overdub lets you clone your voice (with consent) and regenerate lines directly from the transcript—useful for fixing mistakes without re-recording." },
  { q: "Can I publish captions and social clips?", a: "Yes. Descript generates captions, social cut-downs, and audiograms. You can burn-in subtitles or export SRT/VTT for platforms natively." },
  { q: "Does Descript integrate with other tools?", a: "It integrates with Zoom, Riverside, Google Drive, Slack, and more for imports/exports. Webhooks and Zapier help automate downstream workflows." },
  { q: "Which plan should marketers choose?", a: "Creator works for most marketing teams. Pro is better if you need more transcription hours, custom drive limits, and advanced publishing automations." },
];

function DescriptToolPage() {
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
        "Descript blends AI transcription, multitrack editing, and screen recording into one workflow. Marketers and podcasters edit by text, fix mistakes with Overdub, and ship captions and clips quickly.",
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
      icon: <Video className="h-5 w-5 text-sky-500" />,
      title: "Edit video by editing text",
      body: "Descript turns recordings into transcripts. Delete text to delete video, making edits as simple as document editing for marketers and creators.",
    },
    {
      icon: <Mic className="h-5 w-5 text-indigo-500" />,
      title: "Overdub and Studio Sound",
      body: "Clone your voice to fix mistakes and apply noise reduction to clean audio. Great for podcasts, webinars, and sales demos that need polish.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Filler word removal and shortcuts",
      body: "Auto-remove ums/uhs, shorten gaps, and use multitrack timeline adjustments to tighten episodes quickly.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Screen and webcam recording",
      body: "Record screens, slides, and cameras in one place with instant transcripts and templates for tutorials, onboarding, and product walk-throughs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-600" />,
      title: "Publishing and integrations",
      body: "Export to YouTube, podcast hosts, or cloud drives with burnt-in captions, or push clips to social with the right aspect ratios.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Collaboration and review",
      body: "Comments, track changes, and version history keep teams aligned. Lock final sequences to avoid accidental edits before publishing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Full Descript review for marketers and podcasters: pricing, features, pros & cons, alternatives, and when to choose Descript over Loom or Riverside."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
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
                  Descript blends transcription, editing, and screen recording in one place, helping marketers cut polished videos and podcasts in hours instead of days.
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
              {toolName} is a {category.toLowerCase()} platform that merges transcription, multitrack audio/video editing, screen recording, and publishing. You edit media by editing a transcript, making production accessible to non-technical teams.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, podcasters, and enablement teams use Descript to create tutorials, webinars, podcasts, and social clips with AI-powered cleanup and captions.
            </p>
            <p className="mt-3 text-slate-700">
              The workflow includes collaboration, comments, and direct exports to YouTube/podcast hosts—reducing the number of tools required for content production.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
          <p className="mt-3 text-slate-700">Descript is built for teams that want fast, collaborative editing without a steep learning curve.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams producing demos, tutorials, and social clips.",
                "Podcasters who want transcript-based editing, filler removal, and publishing.",
                "Sales and CS teams creating onboarding videos and quick product explainers.",
                "Creators who need Overdub to fix mistakes without re-recording.",
                "Remote teams replacing separate screen recorders plus editors with one tool.",
                "Agencies delivering captions, audiograms, and cut-downs for clients fast.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Descript focuses on shortening the edit-to-publish cycle with AI-powered assists.</p>
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
                  Descript has a free tier and two main paid tiers. Pricing is per editor seat with transcription hour limits and export features scaling by plan.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose Creator for marketing teams; upgrade to Pro if you need more hours and Overdub flexibility.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and short clips</td>
                    <td className="px-4 py-3">Limited transcription, screen recording, watermark on exports</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Marketing/podcast teams</td>
                    <td className="px-4 py-3">More transcription hours, filler word removal, export templates</td>
                    <td className="px-4 py-3">~$12/editor/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Production podcast/video teams</td>
                    <td className="px-4 py-3">Higher hour limits, Overdub flexibility, advanced publishing</td>
                    <td className="px-4 py-3">~$24/editor/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large media or enablement teams</td>
                    <td className="px-4 py-3">SSO, team governance, higher limits, dedicated success</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Most teams start with Creator. Upgrade to Pro when you need more transcription hours, greater Overdub flexibility, or want to automate publishing at scale.
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
                  <li>Edit by transcript—huge time-saver for marketers and podcasters.</li>
                  <li>Filler word removal, Studio Sound, and Overdub reduce re-recording.</li>
                  <li>Screen recording + editing in one tool simplifies workflows.</li>
                  <li>Captioning, audiograms, and repurposing for social clips built-in.</li>
                  <li>Collaboration with comments and version history keeps teams aligned.</li>
                  <li>Plenty of export options for YouTube, podcast hosts, and CMS uploads.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Rendering heavier projects can be slower than pro NLEs for complex timelines.</li>
                  <li>Audio specialists may miss advanced mastering tools found in DAWs.</li>
                  <li>Overdub requires voice training and consent; not every workflow needs it.</li>
                  <li>Transcription hour limits mean frequent creators may need higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Descript competes with screen recorders, online editors, and studio-grade tools. Choose based on how deep you need to go with editing and collaboration.
            </p>
            <p className="mt-2 text-slate-700">All offer recording and editing; differences show up in AI assists, collaboration, and export controls.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Descript compares to two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Veed</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-descript-vs-kapwing">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Veed is browser-first and great for social templates; Descript leads for transcript-based editing, podcasts, and Overdub. Both handle captions and quick exports.
              </p>
              <p className="mt-2 text-slate-700">
                If you mostly create social clips, Veed’s templates are handy. If you need to edit long-form audio/video by text and clean audio, Descript is stronger.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Descript for podcasting and transcript workflows; choose Veed for rapid social-first editing in-browser.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Riverside</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/riverside-vs-loom-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Riverside specializes in remote recording with local tracks at high quality. Descript can import Riverside sessions for editing by transcript with filler removal and Overdub.
              </p>
              <p className="mt-2 text-slate-700">
                For the best remote recording quality, Riverside plus Descript is a common stack. If you want recording + editing in one place with AI cleanup, Descript alone can suffice.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Descript when editing speed and AI cleanup matter most; choose Riverside when highest-fidelity remote capture is the priority.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketing, podcasting, and enablement teams, Descript is worth it because it compresses recording, editing, captioning, and publishing into one workflow. Editing by transcript and Overdub save hours per project.
            </p>
            <p className="mt-3 text-slate-700">
              If you need frame-accurate color grading or complex motion graphics, pair Descript with a pro NLE. Otherwise, it can replace multiple tools for day-to-day content.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Descript is a top pick for teams that want fast, collaborative audio/video creation with AI assistance and clear pricing.
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
              Choose Descript if you want to script, record, edit, and publish in one place, with AI that clears filler words and noise. It’s especially strong for podcasts, explainers, and social cut-downs.
            </p>
            <p>
              Consider Veed or Kapwing for rapid social templates, or Riverside for premium remote capture quality. You can also pair Riverside recordings with Descript editing for the best of both.
            </p>
            <p>Descript fits into modern marketing stacks with exports to YouTube, podcast hosts, and social—plus integrations for collaboration and storage.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default DescriptToolPage;
