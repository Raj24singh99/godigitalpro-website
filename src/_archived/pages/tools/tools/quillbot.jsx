import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Highlighter, Type, BookOpen, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "QuillBot";
const slug = "quillbot";
const category = "AI Writing & Paraphrasing";
const shortPitch =
  "QuillBot rewrites, summarizes, and polishes text with AI so marketers, students, and content teams can sound clearer without starting from scratch.";
const pricingSummary = "Freemium paraphrasing with Premium from about $19.95/month unlocking faster speeds, more modes, and higher character limits.";
const officialUrl = "https://quillbot.com/";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/quillbot.com",
  gradient: "from-emerald-500 via-teal-500 to-green-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.25)]",
};

const alternatives = [
  { name: "Grammarly", slug: "grammarly" },
  { name: "ProWritingAid", slug: "prowritingaid" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
];

const faqs = [
  { q: "Is QuillBot free to use?", a: "Yes. QuillBot has a free paraphrasing tier with limited character counts and fewer modes. Premium unlocks all modes, faster processing, and higher limits." },
  { q: "Does QuillBot replace full AI writers?", a: "QuillBot is strongest for rewriting, summarizing, and citation help. For long-form ideation, pair it with a generator like Jasper or Writesonic and then polish with QuillBot." },
  { q: "Can QuillBot improve SEO content?", a: "It can rewrite intros, conclusions, and meta descriptions with clearer phrasing. Use the Summarizer and Grammar Checker to tighten copy while keeping keywords intact." },
  { q: "Is QuillBot good for agencies?", a: "Agencies use QuillBot to clean up briefs, proposals, and outlines quickly. It reduces editing cycles and keeps tone consistent across client deliverables." },
  { q: "Does QuillBot have a plagiarism checker?", a: "Yes. The Premium plan includes a plagiarism checker that scans billions of sources to ensure rewritten copy is original before publishing." },
  { q: "Which QuillBot mode should I start with?", a: "Begin with 'Standard' or 'Fluency' for natural rewrites. Switch to 'Formal' for business writing, 'Shorten' for concise summaries, and 'Expand' when you need added context." },
  { q: "Does QuillBot integrate with browsers and docs?", a: "QuillBot offers Chrome, Word, and macOS extensions plus a web app. The extensions help rewrite directly in Google Docs, Gmail, or CMS editors without switching tabs." },
  { q: "Is QuillBot safe for academic use?", a: "Yes when used responsibly. Its citation generator and plagiarism checker help keep work original, but users should review outputs and cite sources properly." },
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
        "QuillBot shines when teams need fast paraphrasing, summarization, and grammar support. Its modes help writers adjust tone without losing meaning, and Premium adds plagiarism checking for publish-ready drafts.",
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
      icon: <Highlighter className="h-5 w-5 text-emerald-500" />,
      title: "Tone-aware paraphrasing modes",
      body: "Switch between Standard, Fluency, Formal, Shorten, and Expand to rewrite sections while keeping intent and keywords intact for SEO or academic work.",
    },
    {
      icon: <Type className="h-5 w-5 text-teal-500" />,
      title: "AI summarization for briefs and research",
      body: "Summarize articles, transcripts, and reports into digestible bullets so teams can build outlines, meta descriptions, and executive summaries faster.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Grammar and clarity polish",
      body: "The Grammar Checker and Co-Writer clean up spelling, punctuation, and readability so deliverables feel professional without heavy editing rounds.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-green-500" />,
      title: "Citation generator and plagiarism checker",
      body: "Premium adds MLA/APA citations and a plagiarism scanner, helping students and content teams verify originality before shipping copy.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "Extensions where you write",
      body: "Chrome, Word, and macOS extensions let you paraphrase and check tone directly in Docs, Gmail, CMS editors, or email without tab switching.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-600" />,
      title: "Affordable pricing for individuals",
      body: "Freemium access plus monthly and annual plans undercuts many AI writing suites, making it an approachable upgrade for students and solopreneurs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Modes, Pros & Cons, Alternatives`}
        description="In-depth QuillBot review for 2025 covering paraphrasing modes, pricing, pros & cons, and the best alternatives for writers, students, and marketers."
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Modes, Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-emerald-600 text-white ring-2 ring-emerald-500 hover:bg-emerald-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  QuillBot speeds up editing with AI paraphrasing, summarization, and grammar checks so you can keep voice consistent and ship polished deliverables faster.
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
              QuillBot is an {category.toLowerCase()} platform that rewrites, summarizes, and edits text to improve clarity and tone. Instead of crafting a new draft, you paste copy and pick a mode to get cleaner alternatives.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use QuillBot to refresh blog sections, email intros, and landing page copy. Students and researchers lean on it for citations, clarity, and concise summaries of dense articles.
            </p>
            <p className="mt-3 text-slate-700">
              The browser and Word extensions keep the workflow inside your editor, while Premium unlocks plagiarism checking to keep content ready to publish.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">QuillBot fits anyone who edits more than they draft from scratch.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content marketers rewriting sections to match brand tone and SEO keywords.",
                "Agencies tightening briefs, scripts, and proposals without starting over.",
                "Students summarizing research papers and generating citations responsibly.",
                "Sales and success teams polishing outreach, follow-ups, and QBR recaps.",
                "Bloggers repurposing old posts into fresh angles or social snippets.",
                "Non-native English writers who need fluent, concise phrasing quickly.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">QuillBot emphasizes rewriting quality and workflow speed so you can iterate on drafts without sacrificing voice or accuracy.</p>
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
                  {toolName} uses a freemium model. The free tier includes limited paraphrasing characters and standard modes. Premium expands limits, unlocks all modes, adds plagiarism checking, and speeds up processing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most users start on Premium monthly; teams save on the annual plan if QuillBot is a weekly workflow.</p>
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
                    <td className="px-4 py-3">Light rewriting and testing modes</td>
                    <td className="px-4 py-3">Limited characters, fewer modes, no plagiarism checker</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium Monthly</td>
                    <td className="px-4 py-3">Students and marketers needing frequent rewrites</td>
                    <td className="px-4 py-3">All modes, higher limits, plagiarism checker, faster speed</td>
                    <td className="px-4 py-3">~$19.95/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium Annual</td>
                    <td className="px-4 py-3">Teams and heavy users optimizing cost</td>
                    <td className="px-4 py-3">Same features with lower effective monthly rate</td>
                    <td className="px-4 py-3">~$99.95/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Choose Free to try modes. Upgrade to Premium Monthly if you rewrite a few times each week. Move to Annual once QuillBot becomes part of your drafting or academic workflow to save over 50%.
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
                  <li>Excellent paraphrasing quality with multiple tone modes.</li>
                  <li>Fast summaries and citation tools save research time.</li>
                  <li>Affordable pricing versus broader AI writing suites.</li>
                  <li>Browser and Word extensions keep you in your editor.</li>
                  <li>Plagiarism checker helps keep content publish-ready.</li>
                  <li>Simple UI makes it easy for students and first-time users.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a full long-form AI writer; best used alongside one.</li>
                  <li>Free tier has strict character limits per run.</li>
                  <li>Team collaboration is lighter than Jasper or Notion AI.</li>
                  <li>Paraphrasing can occasionally alter nuance—always review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need deeper long-form drafting, stronger grammar checks, or team workflows, these alternatives are commonly compared with QuillBot.
            </p>
            <p className="mt-2 text-slate-700">Each option links to a full review page so you can evaluate pricing, features, and fit.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">View the full review and pricing details.</p>
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
            <p className="text-slate-700">See how QuillBot stacks up against popular writing tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grammarly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/rytr-vs-quillbot-vs-grammarly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grammarly leads in grammar, tone detection, and style feedback. QuillBot excels at rewriting and concise summaries. Many writers pair them: draft in Grammarly, then paraphrase sections with QuillBot.
              </p>
              <p className="mt-2 text-slate-900">Choose QuillBot when you need quick rewrites; choose Grammarly for in-depth grammar coaching.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper vs Writesonic</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/writesonic-vs-jasper-vs-quillbot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper and Writesonic are robust AI writers with templates, brand voice, and collaboration. QuillBot focuses on improving existing text. Use Jasper/Writesonic to ideate, then polish with QuillBot.
              </p>
              <p className="mt-2 text-slate-900">Pick QuillBot for editing workflows; pick Jasper or Writesonic for net-new copy and campaign assets.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For rewriting, summarizing, and polishing text at speed, QuillBot is one of the best-value AI editors. Its modes make it easy to adjust tone for clients or professors without rewriting from scratch.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy long-form generation or rich team governance, you may still need Jasper or Writesonic alongside QuillBot. But as an editing companion, its price-to-value ratio is strong.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> QuillBot is a standout paraphrasing and summarizing tool for marketers, students, and editors who need clean copy fast.
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
              Choose QuillBot if you already have drafts and need cleaner wording, shorter summaries, or plagiarism-safe copy. It pairs well with AI writers and grammar checkers to reduce editing cycles.
            </p>
            <p>Switch to alternatives like Jasper or Writesonic when you need net-new campaign assets and collaboration. Grammarly and ProWritingAid are better for deep grammar coaching.</p>
            <p>QuillBot fits into modern content workflows as the fast editor that keeps tone consistent across emails, blogs, and academic work.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, try it here: <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
