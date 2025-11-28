import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Kapwing AI";
const slug = "kapwing-ai";
const category = "AI Video & Editing";
const shortPitch = "Kapwing AI is a browser-based video creation and editing platform with AI tools for subtitles, resizing, scripting, and repurposing.";
const pricingSummary =
  "Free and paid tiers. Paid plans add higher export quality, brand controls, collaboration, and faster processing with monthly or annual billing.";
const officialUrl = "https://www.kapwing.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/kapwing.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.24)]",
};

const alternatives = [
  { name: "Descript", slug: "descript" },
  { name: "VEED.io", slug: "veed-io" },
  { name: "InVideo", slug: "invideo" },
  { name: "Canva", slug: "canva" },
  { name: "Adobe Express", slug: "adobe-express" },
];

const faqs = [
  {
    q: "What is Kapwing AI?",
    a: "Kapwing AI is a web-based video editor with AI tools for subtitling, resizing, scripting, and repurposing content across channels.",
  },
  {
    q: "Who is Kapwing AI best for?",
    a: "Creators, marketers, and teams that want quick social-ready edits without heavy desktop software.",
  },
  {
    q: "Does Kapwing add subtitles automatically?",
    a: "Yes. Auto-captioning and translation are available; review captions for accuracy.",
  },
  {
    q: "How does pricing work?",
    a: "Free tier with watermarks and limits. Paid tiers add higher quality exports, collaboration, and brand controls.",
  },
  {
    q: "Can I repurpose long videos into clips?",
    a: "Yes. AI clipping, resizing, and templates help turn long-form content into short-form posts.",
  },
  {
    q: "Is collaboration supported?",
    a: "Team workspaces, shared assets, and comments are available on paid plans.",
  },
  {
    q: "Does it run in the browser?",
    a: "Yes. Kapwing is fully browser-based, which eases collaboration and reduces hardware needs.",
  },
  {
    q: "Do I still need manual editing?",
    a: "Yes. Review captions, cuts, and brand elements; AI speeds up workflows but human polish is essential.",
  },
];

function KapwingAIToolPage() {
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
        "Kapwing AI delivers browser-based video editing with AI tools for subtitles, resizing, scripting, and repurposing. It’s great for social content speed, with human review required for polish.",
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
      title: "Auto subtitles",
      body: "Generate captions and translations automatically; edit for accuracy and brand style.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-sky-500" />,
      title: "Repurpose long-form",
      body: "Clip, resize, and template long videos into social-ready snippets fast.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "AI scripting & B-roll",
      body: "Draft scripts and add stock assets or B-roll to speed up production.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand controls",
      body: "Brand kits, fonts, and templates keep outputs consistent across channels.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-600" />,
      title: "Browser-based",
      body: "No heavy installs; collaborate in the browser with team workspaces and comments.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Publishing helpers",
      body: "Resize and export in platform-specific ratios with quick downloads or shares.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Kapwing AI review: pricing, features, pros & cons, and alternatives so you can pick the right browser-based video editor."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} keeps video creation in the browser with AI that accelerates captions, scripting, and resizing for social channels.
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
              {toolName} is a browser-based video editor that uses AI to automate subtitling, resizing, scripting, and repurposing. It helps creators and teams ship social-ready content fast.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for auto captions, translations, clipping, aspect-ratio changes, and brand templates without heavy desktop software.
            </p>
            <p className="mt-3 text-slate-700">
              Collaboration features let teams comment and share assets; exports cover common formats for TikTok, Reels, YouTube, and more.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers and creators who need quick, branded video edits without complex desktop tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social teams publishing across TikTok, Reels, Shorts, and YouTube.",
                "Creators repurposing podcasts and webinars into clips.",
                "Marketers adding auto captions and translations for accessibility.",
                "Teams needing browser-based collaboration with shared assets.",
                "Small teams without heavy video hardware.",
                "Brands standardizing templates and aspect ratios for campaigns.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on AI-assisted subtitling, repurposing, and browser collaboration for fast social content delivery.
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
                  {toolName} offers free and paid plans. Paid tiers remove watermarks, raise export quality, and add collaboration and brand kits. Pricing scales by users and usage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test the free plan for workflow fit; upgrade when you need watermark-free exports, brand kits, and faster processing.</p>
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
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Watermarked exports, limited minutes</td>
                    <td className="px-4 py-3">Great for trials</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo creators</td>
                    <td className="px-4 py-3">HD exports, brand kit, faster processing</td>
                    <td className="px-4 py-3">Good for consistent publishing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Teams & agencies</td>
                    <td className="px-4 py-3">Collaboration, shared assets, higher limits</td>
                    <td className="px-4 py-3">Best for collaborative workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch export limits and processing speeds. Ensure captions and translations meet accuracy requirements before publishing.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Browser-based editing—no heavy installs.</li>
                  <li>Fast auto captions and translations.</li>
                  <li>Templates and brand kits for consistency.</li>
                  <li>Collaboration and shared assets for teams.</li>
                  <li>Great for repurposing long-form into clips.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Browser performance can vary on large files.</li>
                  <li>Free tier includes watermarks and limits.</li>
                  <li>Human review needed for captions and cuts.</li>
                  <li>Less advanced than desktop NLEs for complex edits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other video editors to match your collaboration needs, hardware preferences, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with other AI video editors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/descript">
                  View Descript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript uses transcript-based editing and podcast workflows; {toolName} focuses on fast, browser-based social video creation. Choose based on audio-first vs. quick visual edits.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs VEED.io</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/veed-io">
                  View VEED.io
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                VEED and {toolName} are both browser editors. VEED leans into collaboration and motion design; {toolName} emphasizes ease of use and repurposing speed. Test both for UI and export limits.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want quick, browser-based video editing with strong AI subtitling and repurposing for social channels.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for paid tiers if you need watermark-free exports, faster processing, and collaboration. Always review captions and edits for accuracy.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A fast, accessible AI video editor for creators and teams focused on social content throughput.
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
              Choose {toolName} if you want AI-assisted captions, resizing, and clipping in the browser for fast social content.
            </p>
            <p>
              Consider Descript for transcript-first editing or VEED for alternative UI and motion features; keep {toolName} for its simplicity and speed.
            </p>
            <p>{toolName} helps teams produce more video with less friction—human review keeps quality high.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default KapwingAIToolPage;
