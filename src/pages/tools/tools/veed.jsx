import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, PenTool, Mic, Share2, Layers, BadgeCheck, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "VEED";
const slug = "veed";
const category = "Online Video Editor";
const shortPitch =
  "VEED is a browser-based video editor built for marketing teams that need fast subtitles, branded templates, and AI repurposing without touching desktop software.";
const pricingSummary =
  "Free tier available, with Basic plans from ~$12/month, Pro from ~$24/month, and Business/Enterprise tiers adding collaboration, brand kits, and custom storage.";
const officialUrl = "https://www.veed.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/veed.io",
  gradient: "from-rose-500 via-pink-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.25)]",
};

const alternatives = [
  { name: "Descript", slug: "descript" },
  { name: "Kapwing", slug: "kapwing" },
  { name: "InVideo", slug: "invideo" },
  { name: "Pictory", slug: "pictory" },
  { name: "Canva", slug: "canva" },
];

const faqs = [
  {
    q: "Is VEED really browser-based?",
    a: "Yes. VEED runs in Chrome, Edge, or Safari with no downloads, which makes collaboration easier for teams working across Mac and Windows. Heavy exports use VEED’s cloud render.",
  },
  {
    q: "Does VEED support subtitles automatically?",
    a: "VEED auto-generates subtitles in 100+ languages, lets you edit timings, and exports SRT/VTT files. You can also burn-in captions and apply animated styles for social cutdowns.",
  },
  {
    q: "Can VEED repurpose long-form content?",
    a: "The AI clipper turns webinars, podcasts, or Zoom recordings into short vertical clips. You can add templates, progress bars, emojis, and timeline overlays without leaving the browser.",
  },
  {
    q: "How does VEED compare to Descript?",
    a: "Descript pairs video editing with transcript-based editing, while VEED focuses on timeline editing, templates, and social exports. VEED is easier for marketers, Descript is closer to a production tool.",
  },
  {
    q: "Is VEED good for agencies?",
    a: "Agencies like VEED for client approvals because links can be shared for review without requiring seats. Business plans add workspaces, brand kits, and watermark control for each client.",
  },
  {
    q: "Does VEED include stock or templates?",
    a: "Yes. VEED bundles stock music, B-roll, waveform overlays, and dozens of subtitle styles. Templates let you save brand colors, fonts, and intro/outro scenes for quick reuse.",
  },
  {
    q: "What about collaboration features?",
    a: "Users can comment, mention teammates, lock layers, and track versions. Business plans plug into Slack for approvals and offer SSO on enterprise tiers.",
  },
  {
    q: "Is VEED secure for corporate teams?",
    a: "VEED uses SOC 2 compliant infrastructure, encryption in transit/at rest, and optional data residency. Admins can manage seats, enforce SSO, and control private workspaces.",
  },
];

function VeedToolPage() {
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
        "VEED delivers a fast, cloud-native editing workflow that marketing, social, and enablement teams can use without technical editors. It packages subtitles, brand kits, templates, and AI repurposing in one tab.",
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
      icon: <PenTool className="h-5 w-5 text-rose-500" />,
      title: "Brand-ready editor",
      body: "Timeline editing, custom fonts, color palettes, canvas resizing, and reusable templates make branded videos quick even for non-editors.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "AI subtitle + clipper",
      body: "Auto subtitles, translations, and AI clip suggestions help you turn webinars or podcasts into dozens of Shorts or Reels in minutes.",
    },
    {
      icon: <Mic className="h-5 w-5 text-emerald-500" />,
      title: "Audio cleanup & overdub",
      body: "VEED removes noise, levels audio, and lets you add voiceovers or AI narrators without exporting to another DAW.",
    },
    {
      icon: <Share2 className="h-5 w-5 text-amber-500" />,
      title: "Collaboration & review",
      body: "Share a link for review, collect time-stamped comments, and lock layers so only final tweaks are made before export.",
    },
    {
      icon: <Layers className="h-5 w-5 text-purple-500" />,
      title: "Social repurposing",
      body: "Resize canvases, add progress bars, emojis, auto zooms, and timeline stickers that feel native to TikTok, Instagram, or LinkedIn.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-sky-500" />,
      title: "Compliance & brand kits",
      body: "Business plans add workspaces, brand controls, watermarking, and permissioning so large teams stay on-brand.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth VEED review for marketing and social teams covering pricing, templates, subtitles, repurposing workflows, and key alternatives."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl} target="_blank" rel="noreferrer">
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  VEED helps marketing teams turn raw recordings into polished clips with subtitles, hooks, and layouts that feel native to every platform—without waiting on editors.
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
              VEED is a cloud-native video editor that removes the desktop learning curve. Drag in footage, auto-transcribe, drop brand templates, and export horizontal, square, or vertical clips in one sitting.
            </p>
            <p className="mt-3 text-slate-700">
              Social, lifecycle, and enablement teams rely on VEED to clean up webinar recordings, add subtitles for LinkedIn, batch TikTok/Reels variations, and spin up explainer snippets to embed in blogs or emails.
            </p>
            <p className="mt-3 text-slate-700">
              Because everything happens in the browser, reviewers can jump in for comments or simple touch-ups without expensive licenses.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Use VEED if speed-to-publish and collaboration matter more than frame-perfect edits.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social media managers publishing daily short-form clips.",
                "Lifecycle marketers embedding video explainers in emails and onboarding flows.",
                "Agencies packaging deliverables for clients who need approvals in-browser.",
                "Content marketers repurposing webinars and podcasts into snackable clips.",
                "People teams running internal comms or culture updates with subtitles.",
                "Product marketing/enablement teams recording quick how-to demos.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">VEED prioritizes fast collaboration, subtitle accuracy, and template consistency.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  VEED charges per user, with storage and export limits increasing at each tier. Business and Enterprise upgrades unlock brand kits, approval workflows, and higher resolution exports.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Creators can stay Free, most teams go Pro, and distributed orgs use Business for collaboration + SSO.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing the editor</td>
                    <td className="px-4 py-3">Watermark, 720p exports, limited storage</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Solo creators</td>
                    <td className="px-4 py-3">1080p exports, limited brand kit, 25 min renders</td>
                    <td className="px-4 py-3">~$12/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Marketing teams</td>
                    <td className="px-4 py-3">4K exports, longer projects, AI clipper, stock assets</td>
                    <td className="px-4 py-3">~$24/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business / Enterprise</td>
                    <td className="px-4 py-3">Agencies & enterprises</td>
                    <td className="px-4 py-3">Brand kit per workspace, SSO, priority support, higher storage</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              The biggest jump is from Basic to Pro where you unlock AI tools, brand kit flexibility, and higher export quality. Business is worthwhile if you need approvals or multi-brand workspaces.
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
                  <li>Fast browser workflow with minimal onboarding.</li>
                  <li>Best-in-class subtitle accuracy and styling for social clips.</li>
                  <li>Templates, auto-resize, and AI clipper speed up repurposing.</li>
                  <li>Client-friendly review links and comments.</li>
                  <li>Audio cleanup + stock assets reduce dependency on other tools.</li>
                  <li>Scales to enterprise with brand kits and permissions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Precision editors still need Premiere/Final Cut for advanced color or audio mixing.</li>
                  <li>Free/Basic tiers include watermarks or export limits that add up.</li>
                  <li>Heavy renders depend on internet connection quality.</li>
                  <li>Workspaces become pricey for large reviewer counts without seat planning.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              VEED sits between consumer editors and pro NLEs. If you need transcript-based editing, advanced audio, or different pricing, consider these contenders.
            </p>
            <p className="mt-2 text-slate-700">Each tool below has a deep-dive review on GoDigitalPro.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Need a head-to-head breakdown? Start with these comparison pages.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript vs Kapwing</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-descript-vs-kapwing">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript shines for transcript-based editing and podcast production. Kapwing keeps things lightweight for memes and quick cuts. VEED sits in the middle with stronger brand kits and subtitle polish. Dive into the comparison to see which workflow fits your team size.
              </p>
              <p className="mt-2 text-slate-900">Pick VEED when you want marketer-friendly editing with enterprise permissions.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs InVideo vs Canva</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/veed-vs-invideo-vs-canva">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                If template libraries and on-brand motion graphics matter more than editing controls, you may lean toward InVideo or Canva. Our comparison outlines where VEED’s timeline approach wins and when a template-first tool is enough.
              </p>
              <p className="mt-2 text-slate-900">For teams juggling multiple aspect ratios weekly, VEED keeps the process faster.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              VEED is an easy yes for content teams without full-time editors. Subtitles, templates, and AI clipping save hours per campaign, and reviewers can jump in with nothing to install.
            </p>
            <p className="mt-3 text-slate-700">
              If you already own Adobe seats or need color grading, you may keep Premiere or Resolve for final polish, but VEED still handles the social repurposing layer. That’s where most ROI appears.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> VEED is the fastest way for marketing teams to move from raw recordings to publish-ready clips.
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
              Choose VEED if your team values speed, subtitles, and collaboration more than granular timeline tweaks. It excels as the repurposing layer across marketing, enablement, and internal communications.
            </p>
            <p>
              Consider Descript for transcript-first editing or Kapwing/Canva for lighter templated graphics. Pro video editors may still need Adobe/Final Cut for feature films or cinematic work.
            </p>
            <p>VEED slips into the modern stack between Zoom, Google Drive, and social schedulers, helping every department ship more video.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default VeedToolPage;
