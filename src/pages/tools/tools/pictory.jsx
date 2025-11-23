import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, Wand2, Mic, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Pictory";
const slug = "pictory";
const category = "AI Video Creation";
const shortPitch =
  "Pictory turns scripts, blog posts, and text into short videos with AI storyboards, stock footage, captions, and voiceovers for social, explainer, and repurposed content.";
const pricingSummary = "Plans from around $19/month with credit-based rendering; higher tiers add more exports, brand kits, and collaboration.";
const officialUrl = "https://pictory.ai";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pictory.ai",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.25)]",
};

const alternatives = [
  { name: "Synthesia", slug: "synthesia" },
  { name: "Veed", slug: "veed" },
  { name: "Descript", slug: "descript" },
  { name: "Vidiq", slug: "vidiq" },
  { name: "InVideo", slug: "invideo" },
];

const faqs = [
  { q: "What is Pictory best for?", a: "Pictory excels at turning scripts, URLs, or long text into short videos with captions and stock footage—great for social clips, promos, and explainers." },
  { q: "Does Pictory have avatars?", a: "Pictory offers simple avatars but focuses more on stock footage, captions, and voiceovers. For realistic avatars, use Synthesia." },
  { q: "Can I add my own voice?", a: "Yes. You can record or upload voiceovers, or use AI voices. Pictory syncs audio with captions automatically." },
  { q: "Does Pictory support brand kits?", a: "Higher tiers include brand kits for consistent fonts, colors, and logos across videos." },
  { q: "How does pricing work?", a: "Pricing is tiered by monthly credits/exports, length limits, and features like brand kits and transcription hours. Annual billing lowers the cost." },
  { q: "Can I collaborate with a team?", a: "Team plans include shared projects, comments, and brand standards so editors and marketers can ship faster together." },
  { q: "Does Pictory auto-caption videos?", a: "Yes. It auto-generates captions and lets you edit styling for accessibility and social engagement." },
  { q: "Can Pictory repurpose blog posts?", a: "Yes. Import a URL or paste text to auto-create storyboards with stock footage and captions, then trim and style." },
];

export default function ToolPage() {
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
        "Pictory speeds up script-to-video creation with AI storyboards, captions, and stock assets. It’s strong for social clips and repurposing content without heavy editing skills.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Video className="h-5 w-5 text-indigo-500" />,
      title: "Script-to-video automation",
      body: "Paste scripts or URLs to generate storyboards with captions and suggested visuals, cutting production time from hours to minutes.",
    },
    {
      icon: <Wand2 className="h-5 w-5 text-pink-500" />,
      title: "AI-assisted editing",
      body: "Auto-captions, scene suggestions, and stock footage matching help non-editors build polished clips quickly.",
    },
    {
      icon: <Mic className="h-5 w-5 text-amber-500" />,
      title: "Voiceovers and audio control",
      body: "Use AI voices or upload/record your own. Adjust timing and background music for consistent sound across videos.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "Brand kits and templates",
      body: "Set brand colors, fonts, and logos; apply templates to keep videos on-brand across teams and channels.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "Integrations and publishing",
      body: "Export in multiple formats and publish to YouTube or social channels, or download for editing in other tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Collaboration and sharing",
      body: "Team plans add shared projects, comments, and review links so marketers and editors can iterate together.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Pictory review for 2025 covering pricing, AI video creation, pros & cons, and the best alternatives like Synthesia, Veed, and Descript."
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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-indigo-600 text-white ring-2 ring-indigo-500 hover:bg-indigo-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
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
                  Pictory streamlines short-form video production with AI storyboards, captions, and voice options—ideal for marketers repurposing content at scale.
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
              Pictory is an {category.toLowerCase()} platform that converts text, scripts, and URLs into short videos. It pairs AI scene suggestions with captions, stock assets, and voiceovers so non-editors can publish quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use Pictory to repurpose blog posts, webinar snippets, and scripts into social-ready clips. Teams can customize branding and collaborate on storyboards before exporting.
            </p>
            <p className="mt-3 text-slate-700">
              While Pictory’s avatars are basic, its strength is fast storyboard generation and captioned videos for awareness and engagement.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Use Pictory if you want fast, AI-assisted short-form video without a heavy editor.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers repurposing blogs into social clips.",
                "Product marketers creating quick explainers and promos.",
                "Creators publishing captioned shorts with minimal editing.",
                "Teams needing brand-consistent videos without pro editors.",
                "Agencies producing batches of social videos for clients.",
                "Educators making short lesson recaps with captions.",
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
            <p className="mt-3 text-slate-700">Pictory compresses video production into a few guided steps, making it accessible to non-editors.</p>
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
                  Pricing is tiered by monthly credits/exports and features like brand kits, collaboration, and transcription hours. Plans start around $19/month; annual billing lowers the effective rate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the entry plan for testing; upgrade when you need more exports, brand kits, or team collaboration.</p>
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
                    <td className="px-4 py-3">Testing AI storyboards and captions</td>
                    <td className="px-4 py-3">Lower credits/exports; core features</td>
                    <td className="px-4 py-3">~$19/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Regular creators and marketers</td>
                    <td className="px-4 py-3">More exports, longer videos, brand kits</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Collaboration and brand control</td>
                    <td className="px-4 py-3">Shared projects, comments, higher limits</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Start on Starter to validate workflows. Move to Professional for brand kits and more credits. Teams plans make sense when multiple editors collaborate and need shared branding.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast script-to-video with AI scene and caption support.</li>
                  <li>Strong for short-form repurposing without pro editors.</li>
                  <li>Brand kits and templates keep output consistent.</li>
                  <li>Team collaboration with shared projects and comments.</li>
                  <li>Flexible voice options: AI voices or your own recordings.</li>
                  <li>Accessible pricing for creators and small teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Avatars are basic compared to Synthesia.</li>
                  <li>Limited timeline-level editing; complex edits need another tool.</li>
                  <li>Credit-based limits require monitoring for heavy users.</li>
                  <li>Rendering speed can slow on heavy workloads.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare Pictory with these popular AI video tools. Every link goes to a full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">View the full review and pricing details.</p>
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
            <p className="text-slate-700">See where Pictory stands against other AI video platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Synthesia vs Veed</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/synthesia-vs-pictory-vs-veed">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Synthesia excels at avatar-led explainer videos, Veed provides a fuller editor and captions, and Pictory focuses on fast script-to-video with stock. The comparison breaks down editing depth and cost.
              </p>
              <p className="mt-2 text-slate-900">Choose Pictory for quick repurposing; Synthesia for avatar quality; Veed for timeline editing.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Synthesia vs Descript</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/synthesia-vs-pictory-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript offers powerful text-based and timeline editing, Synthesia leads in avatars, and Pictory is strong for quick storyboarded social clips. The comparison shows which fits your workflow.
              </p>
              <p className="mt-2 text-slate-900">Pick Pictory for fast AI storyboards; Descript for deep editing; Synthesia for lifelike avatars.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need fast, on-brand short videos without a full video team, Pictory is worth it. Script-to-video automation, captions, and stock assets make it ideal for high-volume social output.
            </p>
            <p className="mt-3 text-slate-700">
              If you need lifelike avatars or advanced timeline editing, pair Pictory with Synthesia or Descript. For creators and marketers who want speed, Pictory is a strong value.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Pictory is a fast-moving AI video tool for repurposing and social clips, best when you prioritize speed and captions over heavy editing.
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
              Choose Pictory if you want quick script-to-video creation with captions and stock assets for social and explainers. It’s ideal for marketers who need volume and speed over intricate edits.
            </p>
            <p>Consider Synthesia for realistic avatars or Descript/Veed for deeper editing. Pictory pairs well with these for a full video workflow.</p>
            <p>Pictory’s affordability and ease of use make it a strong fit for creators and teams scaling video output.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your workflow, try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
