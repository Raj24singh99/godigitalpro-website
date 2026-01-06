import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Surfer AI Mode";
const slug = "surfer-ai-mode";
const category = "AI Writing for SEO";
const shortPitch =
  "Surfer AI Mode generates long-form content drafts guided by Surfer’s SEO data, aiming to speed up article creation aligned with keyword targets and SERP structure.";
const pricingSummary =
  "Pay-per-article pricing on top of a Surfer subscription. Costs depend on the number of AI articles and your Surfer plan; each AI generation is purchased separately.";
const officialUrl = "https://surferseo.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/surferseo.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Copy.ai", slug: "copy-ai" },
  { name: "Scalenut", slug: "scalenut" },
  { name: "Outranking", slug: "outranking-io" },
];

const faqs = [
  {
    q: "What is Surfer AI Mode?",
    a: "Surfer AI Mode is an add-on that generates full content drafts using Surfer’s SEO data, aiming to accelerate article creation aligned to target keywords.",
  },
  {
    q: "Who is it for?",
    a: "SEO/content teams using Surfer who want to speed up drafting while keeping keyword and SERP alignment.",
  },
  {
    q: "How is pricing structured?",
    a: "Pay-per-article credits on top of a Surfer subscription. Each AI generation costs a credit; Surfer plans are separate.",
  },
  {
    q: "Does it guarantee rankings?",
    a: "No. It provides SEO-aligned drafts, but rankings depend on quality, links, authority, and optimization. Human editing remains critical.",
  },
  {
    q: "Do I still need to edit?",
    a: "Yes. Review for accuracy, brand voice, originality, and E-E-A-T. Optimize headings, links, and facts.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Surfer supports multiple languages; check AI Mode language availability and quality before large-scale use.",
  },
  {
    q: "Is plagiarism a risk?",
    a: "AI outputs should be reviewed and checked. Add original research and citations to reduce risk.",
  },
  {
    q: "How does it compare to other AI writers?",
    a: "It uses Surfer’s SEO data for structure. Competing AI writers may focus more on general drafting without integrated SERP insights.",
  },
];

function SurferAiModeToolPage() {
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
        "Surfer AI Mode generates SEO-informed drafts using Surfer’s data. It’s helpful for speeding up article creation but still requires human editing for quality and E-E-A-T.",
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
      title: "SEO-informed drafts",
      body: "Generates articles aligned to target keywords and SERP structure using Surfer’s data.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Outline + content",
      body: "Creates outlines and fills them with draft content, saving time on first versions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Optimization alignment",
      body: "Drafts are built to match Surfer recommendations; still require human optimization and fact-checks.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Human-in-the-loop",
      body: "Designed as a starting point—edit for voice, facts, and E-E-A-T to avoid low-quality content.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Language support",
      body: "Supports multiple languages (check coverage and quality before scaling).",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Surfer integration",
      body: "Lives inside Surfer’s ecosystem; pairs with Content Editor and audits for optimization.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Surfer AI Mode review: pricing, features, pros & cons, and alternatives so you can decide if Surfer’s AI drafts fit your SEO workflow."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} accelerates SEO drafts with Surfer data—edit thoroughly for voice, accuracy, and E-E-A-T before publishing.
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
              {toolName} is an AI add-on inside Surfer that generates long-form drafts based on target keywords and SERP analysis. It’s meant to speed up drafting while keeping alignment with Surfer’s recommendations.
            </p>
            <p className="mt-3 text-slate-700">
              Use it as a starting point; human editors must refine for voice, accuracy, originality, and optimization. Pair with Surfer Content Editor for final optimization.
            </p>
            <p className="mt-3 text-slate-700">
              It’s pay-per-article, so plan generation volume carefully and prioritize pages where speed matters.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Surfer users producing SEO articles who want AI drafts to accelerate the first-draft stage.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO teams creating outlines and drafts for target keywords.",
                "Agencies needing faster first drafts for client content.",
                "Content teams that already optimize with Surfer and want AI assistance.",
                "Writers who can edit AI drafts for voice and factual accuracy.",
                "Teams with tight deadlines needing baseline drafts to refine.",
                "Surfer users who prefer pay-per-article vs. unlimited general AI writers.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} uses Surfer’s data to build outlines and drafts while keeping SEO alignment; human editing remains essential.
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
                  Pricing is pay-per-article in addition to your Surfer plan. Each AI generation consumes a credit; Surfer subscriptions are separate. Model the cost per article vs. time saved and quality gains.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use credits for priority pages; test quality before scaling. Keep budget aside for human editing and fact-checking.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Option</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Per-article credit</td>
                    <td className="px-4 py-3">As-needed drafting</td>
                    <td className="px-4 py-3">One full AI draft per credit</td>
                    <td className="px-4 py-3">Purchase credits as needed</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Bundles/promotions</td>
                    <td className="px-4 py-3">Higher volume users</td>
                    <td className="px-4 py-3">Bulk credit discounts (if offered)</td>
                    <td className="px-4 py-3">Check current offers</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Surfer plan</td>
                    <td className="px-4 py-3">Platform access</td>
                    <td className="px-4 py-3">Required Surfer subscription</td>
                    <td className="px-4 py-3">Not included in AI credits</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for human editing, fact-checking, and on-page optimization. Credits are best used where AI speed delivers ROI.
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
                  <li>SEO-aligned drafts built from Surfer data.</li>
                  <li>Fast first drafts and outlines.</li>
                  <li>Pay-per-article—use only when needed.</li>
                  <li>Integrated with Surfer Content Editor ecosystem.</li>
                  <li>Multi-language support (check quality per language).</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires Surfer subscription plus per-article credits.</li>
                  <li>Needs heavy human editing for voice and accuracy.</li>
                  <li>Not a guarantee of rankings; E-E-A-T and links still required.</li>
                  <li>Cost can add up if overused without ROI.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing tools that support SEO to pick the right balance of cost, control, and quality.
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
            <p className="text-slate-700">See how {toolName} compares to other AI writing platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper excels at brand voice and templates; {toolName} leans on Surfer’s SEO data for drafts. Choose Jasper for brand-controlled copy; {toolName} for Surfer-aligned SEO drafts.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Writesonic</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/writesonic">
                  View Writesonic
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Writesonic offers broader AI content tools; {toolName} integrates tightly with Surfer. Pick based on whether you need Surfer’s SEO guidance or a generalist AI writer.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you already use Surfer and want faster SEO drafts that align with its data, and you have editors to refine outputs.
            </p>
            <p className="mt-3 text-slate-700">
              Use credits strategically on priority pages. Always edit for voice, accuracy, and E-E-A-T; AI alone won’t guarantee rankings.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A useful drafting accelerator for Surfer users—best when paired with human editing and full SEO processes.
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
              Choose {toolName} if you’re a Surfer user seeking faster SEO-aligned drafts and you’re prepared to invest in editing and optimization.
            </p>
            <p>
              Consider Jasper or Writesonic for broader AI writing needs. {toolName} shines when Surfer data is central to your workflow and speed-to-draft matters.
            </p>
            <p>{toolName} saves time on first drafts—human expertise is needed to publish quality content.</p>
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

export default SurferAiModeToolPage;
