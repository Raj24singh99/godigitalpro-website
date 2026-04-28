import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Synthesys";
const slug = "synthesys";
const category = "AI Voice & Video";
const shortPitch =
  "Synthesys turns scripts into AI voiceovers and avatar videos so teams can produce explainers, promos, and training assets fast.";
const pricingSummary =
  "Tiered pricing based on voice/video credits. Higher plans unlock more avatars, templates, commercial rights, and faster render speeds.";
const officialUrl = "https://synthesys.io";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/synthesys.io",
  gradient: "from-indigo-500 via-purple-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Murf AI", slug: "murf-ai" },
  { name: "Play.ht", slug: "play-ht" },
  { name: "Descript", slug: "descript" },
  { name: "Colossyan", slug: "colossyan" },
  { name: "Pictory", slug: "pictory" },
];

const faqs = [
  {
    q: "What is Synthesys?",
    a: "Synthesys is an AI voiceover and avatar video platform that converts scripts into narrated videos for marketing, training, and product explainers.",
  },
  {
    q: "Who is it for?",
    a: "Marketers, educators, and teams that need quick voiceovers or presenter-style videos without hiring voice talent or setting up a studio.",
  },
  {
    q: "Does Synthesys include avatars?",
    a: "Yes. Plans provide AI presenters and templates so you can drop in scripts, adjust scenes, and export without on-camera talent.",
  },
  {
    q: "How is pricing structured?",
    a: "Credit- or minute-based tiers. Higher plans add more render minutes, avatar options, commercial rights, and faster processing.",
  },
  {
    q: "Can I use the voices commercially?",
    a: "Most paid plans include commercial usage, but always confirm the license details on the plan you choose.",
  },
  {
    q: "Does Synthesys replace human narration?",
    a: "It speeds up production but human QA for tone, pronunciation, and brand fit is still important—especially for regulated or sensitive content.",
  },
  {
    q: "What file formats can I export?",
    a: "Common exports include MP4 for video and standard audio formats for voiceovers. Check plan limits on resolution and bitrate.",
  },
  {
    q: "Does Synthesys integrate with other tools?",
    a: "Typical workflows include exporting assets to video editors, LMS platforms, or social schedulers. APIs/embeds may require higher tiers.",
  },
];

function SynthesysToolPage() {
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
        "Synthesys accelerates AI voiceovers and avatar video creation. It is useful for marketing and training teams that want fast, consistent narration without a studio.",
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
      title: "AI voice library",
      body: "Choose from multilingual voices and adjust pacing, emphasis, and pitch to match your script.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Avatar videos",
      body: "Turn scripts into presenter-style videos with AI avatars and scene templates for explainers and training.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Template workflow",
      body: "Drop scripts into ready-made layouts for promos, onboarding, and FAQs to ship assets quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Commercial usage",
      body: "Higher tiers typically include commercial rights—verify terms before publishing paid campaigns.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Credit-based pricing",
      body: "Plans scale by minutes/credits and features, making it easy to start small and upgrade as output needs grow.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Pairs with editors",
      body: "Export to your video editor, LMS, or social scheduler to finish polish, captions, and distribution.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Synthesys review: pricing, features, pros & cons, and alternatives so you can decide if it fits your AI voiceover and avatar video workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
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
                  {toolName} speeds up AI voiceovers and presenter videos—use it to ship drafts quickly, then polish timing, visuals, and compliance.
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
              {toolName} is an AI voiceover and avatar video creator. It transforms scripts into narrated videos so teams can produce explainers, promos, and internal training without microphones or cameras.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a production accelerator: you still need to review pronunciation, pacing, and visuals before publishing—especially for regulated industries.
            </p>
            <p className="mt-3 text-slate-700">Export to your editor or LMS for final polish, captions, and distribution.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams producing recurring voiceover or presenter content that needs to stay on-brand and fast to ship.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams producing promos, ads, and product explainers.",
                "Learning & development teams building onboarding or microlearning videos.",
                "Support teams creating FAQ or how-to voiceovers without studio time.",
                "Agencies delivering multilingual narrations at scale with consistent tone.",
                "Founders making quick landing page or investor update videos.",
                "Video editors who want AI narration to pair with motion graphics.",
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
              {toolName} focuses on AI narration and avatar videos with templates, commercial usage options, and credit-based plans.
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
                  {toolName} uses minute/credit-based plans. Paid tiers increase render minutes, add avatars, and unlock commercial rights. Costs rise with video length and volume—pick a tier that matches your output cadence.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a mid-tier if you need both voiceovers and avatars; upgrade when you hit minute limits or need faster rendering.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">Testing/light use</td>
                    <td className="px-4 py-3">Core voices, limited minutes</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Recurring marketing/training</td>
                    <td className="px-4 py-3">More minutes, avatar access, templates</td>
                    <td className="px-4 py-3">Balanced cost vs capability</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">High-volume teams</td>
                    <td className="px-4 py-3">Highest limits, faster renders, commercial rights</td>
                    <td className="px-4 py-3">Choose if you publish frequently</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor minute usage and review licensing. Budget for post-production time (captions, music, visuals) and approvals before launching campaigns.
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
                  <li>Fast AI voiceovers without recording equipment.</li>
                  <li>Avatar videos for presenter-style explainers.</li>
                  <li>Templates speed up marketing and training assets.</li>
                  <li>Commercial rights available on higher plans.</li>
                  <li>Exports fit into standard video workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Voices may need manual tweaks for pacing and emphasis.</li>
                  <li>Minute/credit costs rise with longer videos.</li>
                  <li>Brand voice and compliance still need human review.</li>
                  <li>Advanced avatars or HD exports may require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI voice and video tools to match your budget, avatar needs, and licensing requirements.
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
            <p className="text-slate-700">See how {toolName} compares to other AI voice and presenter platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Murf AI</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/murf-ai">
                  View Murf AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Murf focuses on voiceovers with a large voice library; {toolName} adds avatar videos and templates. Pick Murf for voice depth, {toolName} for presenter videos.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Colossyan</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/colossyan">
                  View Colossyan
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Colossyan is known for realistic talking-head videos and enterprise controls. {toolName} is streamlined for quick marketing and training clips; choose based on control depth and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI-generated voiceovers or avatar presenters to speed up content production and you plan to polish timing and visuals before publishing.
            </p>
            <p className="mt-3 text-slate-700">
              For highly regulated or brand-sensitive scripts, keep human review in the loop and validate pronunciations, tone, and licensing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid pick for fast AI narration and presenter videos—best when paired with editorial QA and post-production.
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
              Choose {toolName} if you want AI-assisted voiceovers and avatar videos to ship marketing, training, or support assets faster, with human review for tone and accuracy.
            </p>
            <p>
              Consider Murf for broader voice options or Colossyan for detailed avatar controls; use {toolName} for speed and template-driven production.
            </p>
            <p>{toolName} helps teams create consistent narration and presenter videos quickly—editorial oversight remains essential.</p>
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

export default SynthesysToolPage;
