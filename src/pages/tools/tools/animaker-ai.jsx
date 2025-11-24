import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Animaker AI";
const slug = "animaker-ai";
const category = "AI Video Creation";
const shortPitch =
  "Animaker AI turns scripts and prompts into explainer, social, and marketing videos with templates, stock assets, and AI voiceovers.";
const pricingSummary =
  "Free plan with watermarks and limited exports. Starter/Pro plans add HD/4K renders, longer durations, brand kits, stock libraries, and team collaboration.";
const officialUrl = "https://www.animaker.com/ai-video-maker";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/animaker.com",
  gradient: "from-purple-500 via-fuchsia-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.28)]",
};

const alternatives = [
  { name: "Pictory AI", slug: "pictory-ai" },
  { name: "Lumen5", slug: "lumen5-ai" },
  { name: "InVideo", slug: "invideo-io-ai-modes" },
  { name: "Kapwing AI", slug: "kapwing-ai" },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  {
    q: "What is Animaker AI?",
    a: "Animaker AI is a video creation platform that lets you generate explainer, social, and marketing videos from prompts or scripts using templates, stock assets, and AI voiceovers.",
  },
  {
    q: "Who is it for?",
    a: "Marketing, content, and growth teams making social clips, ads, explainers, and product walkthroughs without heavy video editing.",
  },
  {
    q: "How does pricing work?",
    a: "Free tier has watermarks and export limits. Paid Starter/Pro plans add more exports, longer durations, brand kits, better stock, and HD/4K renders.",
  },
  {
    q: "Does it replace a video editor?",
    a: "It speeds up templated videos and light edits. Complex motion, advanced color, or detailed sound design still need a pro editor.",
  },
  {
    q: "What about voiceovers?",
    a: "You can generate AI voiceovers and sync them to scenes; you can also upload your own VO for better control.",
  },
  {
    q: "Can it keep brand consistency?",
    a: "Paid plans support brand kits (logos, fonts, colors). You still need to review scenes for tone, timing, and accuracy.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. You should check pacing, claims, and brand compliance before publishing or promoting videos.",
  },
];

function AnimakerAIToolPage() {
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
        "Animaker AI accelerates explainer and marketing video creation with templates, stock, and AI voiceovers. It is ideal for fast social clips and light explainers; complex edits still need pro tools.",
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
      title: "Prompt-to-video",
      body: "Turn a prompt or script into scenes with layouts, stock assets, and AI voice in minutes.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Templates & scenes",
      body: "Use ready-made templates for explainers, ads, and social clips to keep pacing on-brand.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Stock & animations",
      body: "Access stock video, images, icons, and character animations to quickly fill storyboards.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand kits",
      body: "Upload logos, colors, and fonts so exports stay consistent across campaigns.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "AI voiceovers",
      body: "Generate voiceovers in multiple voices and languages, or upload your own for more control.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & formats",
      body: "Render square, vertical, and landscape videos; higher plans unlock HD/4K and more exports.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Animaker AI review: pricing, features, pros & cons, and alternatives so you can choose the right AI video maker."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-100 blur-3xl" />
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
                  {toolName} speeds up script-to-video creation with templates, stock assets, and AI voiceovers—best for quick explainers and social clips.
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
              {toolName} is an AI-assisted video maker that turns prompts or scripts into scene-by-scene videos using templates, stock assets, and AI voiceovers.
            </p>
            <p className="mt-3 text-slate-700">
              It is best for explainer and social videos where speed matters. For complex motion design or precise audio mixing, you will still need a pro editor.
            </p>
            <p className="mt-3 text-slate-700">
              Use brand kits, review scripts, and adjust timing before publishing to ensure accuracy and compliance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for teams making fast explainers, ads, and social clips with light editing needs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams producing social and ad variants quickly.",
                "Growth teams testing multiple hooks and formats for paid campaigns.",
                "Founders or PMs making quick product walkthroughs and pitches.",
                "Content teams turning blogs into short video summaries.",
                "Agencies needing templated explainers at scale with light edits.",
                "Creators repurposing scripts into vertical clips.",
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
              {toolName} focuses on prompt-to-video creation with templates, stock assets, AI voiceovers, and brand kits.
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
                  {toolName} has a free tier with watermarks and export limits. Starter/Pro add HD/4K renders, longer durations, more exports, brand kits, and better stock. Costs rise with output volume and quality.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free for fit; move to Starter for HD social exports; use Pro for brand kits, longer videos, and more exports.</p>
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
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Watermark, limited exports, core templates</td>
                    <td className="px-4 py-3">Good for fit/quality checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Light marketing/social</td>
                    <td className="px-4 py-3">HD exports, more scenes, stock access</td>
                    <td className="px-4 py-3">Choose if exporting weekly</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams and campaigns</td>
                    <td className="px-4 py-3">More exports, brand kits, longer videos, priority renders</td>
                    <td className="px-4 py-3">Use for multi-channel campaigns</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for stock usage, render quality, and collaboration needs; heavy exporters should model monthly render counts.</p>
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
                  <li>Fast prompt/script-to-video workflows.</li>
                  <li>Large template and stock asset library.</li>
                  <li>AI voiceovers with multi-language support.</li>
                  <li>Brand kits help keep visuals consistent.</li>
                  <li>Easy exports for vertical, square, and landscape formats.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Watermarks and export caps on free tier.</li>
                  <li>Complex motion design requires pro editors.</li>
                  <li>Voiceovers can sound synthetic—review tone.</li>
                  <li>Accuracy of scripts still needs human review.</li>
                  <li>Render limits and stock use can add up on higher volumes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI video makers to find the best fit for your budget, stock needs, and export volume.
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
            <p className="text-slate-700">See how {toolName} compares to other AI video platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pictory AI</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/pictory-ai">
                  View Pictory AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pictory focuses on turning long-form text into short videos; {toolName} emphasizes template-driven scenes with AI VO. Choose based on whether you start from scripts or from long articles.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/descript">
                  View Descript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript excels at timeline edits for screen recordings and podcasts. {toolName} is faster for templated explainers and social clips. Use Descript when you need tight timeline control and audio polish.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick explainers, ads, or social clips and want to avoid deep timeline editing. Review scripts, pacing, and branding before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              Heavy motion design or premium VO will still require pro tools or talent. Model export counts and stock usage to pick the right tier.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid AI video maker for fast marketing and explainer outputs—best when combined with human review for tone and accuracy.
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
            <p>{toolName} is strong for quick script-to-video explainers and social clips using templates, stock assets, and AI voiceovers.</p>
            <p>Use it when speed matters and you can review for tone and accuracy; move to pro editors for advanced motion or detailed audio work.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, you can try it here:{" "}
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

export default AnimakerAIToolPage;
