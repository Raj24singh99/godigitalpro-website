import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wisecut";
const slug = "wisecut";
const category = "AI video editing";
const shortPitch = "Wisecut auto-edits talking videos with jump cuts, captions, music ducking, and silence removal to ship polished clips faster.";
const pricingSummary =
  "Freemium with limits; paid tiers unlock longer exports, higher resolution, brand kits, team seats, and faster processing.";
const officialUrl = "https://www.wisecut.video";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wisecut.video",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Descript", slug: "descript" },
  { name: "Kapwing", slug: "kapwing" },
  { name: "Runway", slug: "runwayml" },
  { name: "Veed AI", slug: "veed-ai" },
  { name: "Pictory", slug: "pictory" },
];

const faqs = [
  {
    q: "What is Wisecut?",
    a: "Wisecut is an AI video editor that automates jump cuts, captions, music ducking, and silence removal for talking-head or explainer videos.",
  },
  {
    q: "Who is it for?",
    a: "Creators, educators, and marketers who want to clean up talking videos quickly without manual timeline edits.",
  },
  {
    q: "Does it add subtitles automatically?",
    a: "Yes. Wisecut generates captions and lets you style them; higher tiers improve export resolution and brand options.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier with limits; paid plans scale by export length, resolution, watermark removal, and team features.",
  },
  {
    q: "Can I control the edits?",
    a: "You can review and tweak cuts, captions, and music levels after the AI draft. Complex edits may still need a full NLE.",
  },
  {
    q: "Does it remove background noise?",
    a: "Yes. Noise reduction and auto ducking are included to clean speech and balance music.",
  },
  {
    q: "Is it good for short-form social clips?",
    a: "Yes. It speeds up turning long recordings into concise social clips with subtitles and aspect-ratio options.",
  },
  {
    q: "Does it support collaboration?",
    a: "Team features appear on higher tiers; for deep collaboration and version control, a pro editor may still be needed.",
  },
];

function WisecutToolPage() {
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
        "Wisecut automates jump cuts, captions, silence removal, and sound balancing for talking-head videos. It speeds up editing for social and training clips.",
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
      title: "Auto jump cuts",
      body: "Remove dead air and filler words automatically to tighten talking videos.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Captions & styles",
      body: "Generate subtitles, change fonts/colors, and add burned-in captions for social.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Music ducking",
      body: "Auto-duck background music under speech and balance levels without manual keyframes.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Noise reduction",
      body: "Clean up background noise and polish audio so speech is clearer.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Aspect ratios",
      body: "Export in social-friendly ratios for shorts, stories, and feeds.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Fast turnaround",
      body: "Draft edits quickly so you can focus on script and messaging instead of timeline labor.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Wisecut review: pricing, features, pros & cons, and alternatives so you can decide if it fits your AI video editing workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} is for quick cleanup of talking-head recordings. Auto jump cuts, captions, and noise control help you publish polished clips fast.
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
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                <div className="h-px w-10 bg-slate-300" />
                Overview
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">What is {toolName}?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is an AI-assisted video editor built to clean up talking-head, explainer, and interview content. It removes silences, adds jump cuts,
                captions, and music ducking automatically so creators spend less time on tedious edits.
              </p>
              <p className="mt-3 text-slate-700">
                It is best for fast-turnaround social clips, webinars, and course content. For complex multi-cam edits, VFX, or color grading, pair it with a
                traditional NLE once the rough cut is ready.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <ShieldCheck className="h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Best for</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">Creators and teams turning long recordings into concise, captioned clips.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <Cloud className="h-5 w-5 text-sky-500" />
                    <p className="text-sm font-semibold">Keep in mind</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">Heavy creative edits, layering, or grading still require a pro editor after AI cleanup.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Quick facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Auto jump cuts, silence removal, and noise reduction</li>
                  <li>Captions with styling options for social</li>
                  <li>Music ducking to balance audio under speech</li>
                  <li>Exports sized for shorts, stories, and feeds</li>
                  <li>Freemium with paid tiers for length and branding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
                <p className="mt-2 text-slate-700">Use {toolName} if you want AI to handle tedious cleanup on talking videos so you can publish faster.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                Explore more tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Creators shipping YouTube Shorts/Reels", "Course and webinar teams", "Marketers producing explainers and ads"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    {item === "Creators shipping YouTube Shorts/Reels" &&
                      "Tighten talking clips with captions for vertical formats quickly."}
                    {item === "Course and webinar teams" && "Trim long recordings, remove silences, and add captions for accessibility faster."}
                    {item === "Marketers producing explainers and ads" &&
                      "Polish talking-head promos with auto cuts, captions, and music balance before final tweaks."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} automates the rough cut: jump cuts, silence removal, captions, and audio balancing so you can focus on messaging and publishing.
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
                  {toolName} uses a freemium model with limits. Paid plans increase export length, resolution, remove watermarks, and add brand/team features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test accuracy; upgrade when you need longer exports, 1080p, or brand controls.</p>
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
                    <td className="px-4 py-3">Testing & light edits</td>
                    <td className="px-4 py-3">Short exports, watermark, basic captions/jump cuts</td>
                    <td className="px-4 py-3">Great for first pass and trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Creator</td>
                    <td className="px-4 py-3">Regular content production</td>
                    <td className="px-4 py-3">Longer exports, higher resolution, watermark removal</td>
                    <td className="px-4 py-3">Best value for most individuals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Pro</td>
                    <td className="px-4 py-3">Teams needing branding</td>
                    <td className="px-4 py-3">Brand kits, collaboration, priority processing</td>
                    <td className="px-4 py-3">Use when you need governance and faster turnaround</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Check export caps and watermark rules before client deliverables. For complex edits, use Wisecut as a first-pass cleaner then finish in an NLE.
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
                  <li>Automatic jump cuts, silence removal, and captions</li>
                  <li>Music ducking and noise reduction for cleaner audio</li>
                  <li>Social-friendly aspect ratios and burned-in subs</li>
                  <li>Fast drafts to shorten editing time</li>
                  <li>Freemium entry to test accuracy</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Limited for complex multi-layer edits</li>
                  <li>Watermark and length caps on free tier</li>
                  <li>Caption accuracy varies; requires review</li>
                  <li>Brand controls sit on higher plans</li>
                  <li>May need export to an NLE for final polish</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
                <p className="mt-2 text-slate-700">If you want deeper editing or different pricing, consider these tools.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                View all tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-slate-900">{alt.name}</p>
                    <Plug className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    A viable alternative to {toolName}. Compare caption quality, editing flexibility, and pricing before committing.
                  </p>
                  <Link to={`/tools/${alt.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                    Explore {alt.name}
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs similar tools</h2>
            <p className="mt-2 text-slate-700">
              Pick {toolName} when you need automatic cleanup for talking videos. Choose a full editor when you need multi-layer creative control or color
              grading.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{toolName} strengths</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Fast auto jump cuts and captions</li>
                  <li>Audio cleaning and music ducking built-in</li>
                  <li>Great for social-first talking content</li>
                  <li>Simple workflow for non-editors</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Where alternatives fit better</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Need multi-track timelines and heavy effects</li>
                  <li>Require brand kits on lower-cost plans</li>
                  <li>Want AI script-to-video with stock scenes</li>
                  <li>Prefer desktop editing with offline control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you publish talking videos often and want AI to handle tedious cuts and captions. If you routinely need complex visual
              edits or advanced grading, treat {toolName} as a first-pass tool and finish in an NLE.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "Start free to gauge caption accuracy and jump cuts",
                "Upgrade to Creator for watermark-free, longer exports",
                "Use Team/Pro when you need brand kits and faster processing",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Crown className="h-4 w-4 text-emerald-600" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">A sensible way to scale with {toolName} while keeping quality controls in place.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
                <p className="mt-2 text-slate-700">Answers to common questions about {toolName} and when to use it in your editing stack.</p>
              </div>
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
              {faqs.map((item) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--verdict bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: is {toolName} good?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is excellent for speeding up social and training edits where talking footage needs quick cleanup. It will not replace full editors
                for complex creative work, but it can save hours on drafts and captions.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
                <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                  <ArrowLeft className="h-4 w-4" />
                  Back to tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default WisecutToolPage;
