import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "VEED AI";
const slug = "veed-ai";
const category = "AI video tools";
const shortPitch = "VEED AI adds AI editing, subtitles, translations, and generation to VEED’s browser-based video editor for quick social content.";
const pricingSummary =
  "Free/paid tiers. Higher plans add longer exports, higher quality, brand kits, AI limits, and collaboration; usage-based AI features vary by plan.";
const officialUrl = "https://www.veed.io/ai";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/veed.io",
  gradient: "from-indigo-500 via-purple-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Pictory", slug: "pictory" },
  { name: "Lumen5 AI", slug: "lumen5-ai" },
  { name: "Descript", slug: "descript" },
  { name: "Wisecut", slug: "wisecut" },
  { name: "Raw Shorts", slug: "raw-shorts" },
];

const faqs = [
  {
    q: "What is VEED AI?",
    a: "VEED AI is the AI feature set inside VEED, adding AI editing, subtitles, translations, and generation tools for fast video creation.",
  },
  {
    q: "Who is it for?",
    a: "Creators and marketers who need quick social clips, subtitles, translations, and simple AI generation without heavy desktop software.",
  },
  {
    q: "How is pricing structured?",
    a: "Free and paid VEED plans. Higher tiers increase export quality/length, brand kits, and AI limits.",
  },
  {
    q: "Does it do auto subtitles?",
    a: "Yes. Auto subtitles and translations are included; review for accuracy before publishing.",
  },
  {
    q: "Can it generate videos from prompts?",
    a: "Prompt-based generation and templates are available; outputs still need editing for brand fit.",
  },
  {
    q: "Does it support collaboration?",
    a: "Yes. Team workspaces and shared assets are on paid tiers.",
  },
  {
    q: "What about brand kits?",
    a: "Brand kits for fonts/colors/logos are on higher plans to speed consistent outputs.",
  },
  {
    q: "Is it good for long-form editing?",
    a: "It’s best for short/mid-form and social edits. Complex long-form may need pro editors.",
  },
];

function VeedAiToolPage() {
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
        "VEED AI brings AI editing, subtitles, translations, and generation into VEED’s browser editor. Great for fast social clips; review outputs for accuracy and brand fit.",
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
      title: "AI editing",
      body: "Auto-trim, silence removal, and smart edits to speed rough cuts.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Auto subtitles & translations",
      body: "Generate captions and translate; always review accuracy and timing.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Brand kits",
      body: "Logos, colors, and fonts to keep outputs on-brand across clips.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Templates",
      body: "Ready-made templates for social formats to move fast.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Browser-based",
      body: "No heavy installs; edit in the browser with cloud storage for assets.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & quality",
      body: "Export to common formats; higher plans unlock higher resolution and longer duration.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="VEED AI review: pricing, features, pros & cons, and alternatives so you can decide if it fits your social video workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  {toolName} accelerates social video creation—review AI edits, captions, and translations before publishing to keep quality high.
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
              {toolName} brings AI editing, captions, translations, and generation into VEED’s browser editor. It’s built for quick social content and streamlined workflows without desktop software.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a speed layer: AI helps with rough cuts and captions, but you should edit for accuracy, pacing, and brand voice before publishing.
            </p>
            <p className="mt-3 text-slate-700">Plan exports and quality settings based on your channels; higher plans unlock better resolution and length.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators and marketers producing frequent short-form content.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Social teams needing fast captions/translations.",
                "Creators making TikTok/Reels/Shorts at volume.",
                "Marketers turning webinars/podcasts into clips.",
                "Teams wanting browser-based editing without heavy installs.",
                "Brands using brand kits for consistent outputs.",
                "Collaborators who need shared assets and templates.",
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
              {toolName} focuses on AI-assisted editing, subtitles/translations, brand kits, templates, browser access, and exports.
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
                  {toolName} follows VEED’s plans. Free tier for light use; paid tiers add higher export limits, quality, brand kits, collaboration, and larger AI allowances. Costs rise with usage and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test AI captions/edits; upgrade when you need HD/longer exports, brand kits, and team workspaces.</p>
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
                    <td className="px-4 py-3">Testing/light edits</td>
                    <td className="px-4 py-3">Core editor, limited AI/export length</td>
                    <td className="px-4 py-3">Great for validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular creators</td>
                    <td className="px-4 py-3">Higher AI limits, better quality/length</td>
                    <td className="px-4 py-3">Recommended for individuals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams</td>
                    <td className="px-4 py-3">Brand kits, collaboration, higher caps</td>
                    <td className="px-4 py-3">Use for brand consistency</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor AI caption accuracy and export settings. Budget for storage if you keep multiple drafts in the cloud.
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
                  <li>Fast AI captions, edits, and translations.</li>
                  <li>Templates and brand kits for consistency.</li>
                  <li>Browser-based—no heavy installs.</li>
                  <li>Good for social clips and short-form.</li>
                  <li>Collaboration on paid tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Accuracy of captions/translations needs review.</li>
                  <li>AI limits and export length vary by plan.</li>
                  <li>Not ideal for complex long-form edits.</li>
                  <li>Heavy cloud use may need storage management.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI video editors to match your content length, quality needs, and budget.
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
            <p className="text-slate-700">See how {toolName} compares to other AI video solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pictory</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/pictory">
                  View Pictory
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pictory focuses on script-to-video and blog-to-video; {toolName} excels at editing and captioning existing footage. Choose based on whether you start from text or from clips.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Descript</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/descript">
                  View Descript
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript is strong for audio-first editing with transcripts; {toolName} is streamlined for quick social video edits. Choose based on whether audio or video-first workflows matter more.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast AI-assisted subtitles, translations, and edits for social videos and can review outputs for accuracy.
            </p>
            <p className="mt-3 text-slate-700">
              Upgrade when you need higher quality, brand kits, or collaboration; pair with storage hygiene to manage cloud assets.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for quick social edits with AI help—best when paired with human QA and brand review.
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
              Choose {toolName} if you want browser-based AI editing, subtitles, and translations for social videos with minimal setup.
            </p>
            <p>
              Consider Pictory for text-to-video or Descript for audio-first editing; use {toolName} when you need quick, template-driven social clips.
            </p>
            <p>{toolName} speeds video creation—keep humans reviewing captions, translations, and pacing for quality.</p>
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

export default VeedAiToolPage;
