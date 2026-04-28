import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Notion AI";
const slug = "notion-ai";
const category = "AI Productivity Suite";
const shortPitch = "Notion AI adds writing, summarization, translation, and data-aware assistance directly inside Notion docs, wikis, and databases.";
const pricingSummary = "Notion AI is an add-on per member on paid plans. Billing applies only to seats with AI enabled; confirm current per-seat rates and limits.";
const officialUrl = "https://www.notion.so/product/ai";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/notion.so",
  gradient: "from-slate-900 via-slate-700 to-emerald-600",
  glow: "shadow-[0_20px_80px_rgba(15,23,42,0.24)]",
};

const alternatives = [
  { name: "Coda AI", slug: "coda" },
  { name: "Google Workspace AI", slug: "google-workspace" },
  { name: "Microsoft 365 Copilot", slug: "microsoft-365" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Evernote", slug: "evernote" },
];

const faqs = [
  { q: "What is Notion AI?", a: "Notion AI is an embedded AI assistant for Notion that drafts, summarizes, translates, and restructures content inside pages and databases." },
  { q: "How is it priced?", a: "It is a per-seat add-on for paid Notion plans. Only members with AI turned on are billed; guests typically do not incur AI fees." },
  { q: "Can admins control access?", a: "Yes. Workspace admins can enable AI for specific members to manage costs and compliance." },
  { q: "Does it support mobile?", a: "Yes. AI features work on web, desktop, and mobile in the Notion editor." },
  { q: "Is data used for training?", a: "Notion states customer content is not used to train public models. Review the latest data usage policy for your compliance needs." },
  { q: "Which languages are supported?", a: "Notion AI supports multiple languages for drafting, summarizing, and translating; quality varies by language." },
  { q: "Does it automate databases?", a: "AI can draft tasks, summarize rows, and extract action items; for workflows, pair with Notion automations or external tools." },
  { q: "Can I export AI content?", a: "Yes. AI-generated text stays in your pages and exports like any other Notion content." },
];

function NotionAiToolPage() {
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
        "Notion AI brings drafting, summaries, translations, and structured assistance directly into Notion pages and databases. It saves time for teams already living in Notion, but still requires human review for accuracy and brand tone.",
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
    { icon: <Sparkles className="h-5 w-5 text-emerald-500" />, title: "Writing & brainstorming", body: "Generate outlines, rewrite text, and draft content in-place without leaving the editor." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Summaries & highlights", body: "Summarize long docs, meeting notes, and database items into action-ready snippets." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Translation & tone", body: "Translate text and adjust tone (formal, concise, friendly) directly in your pages." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Database context", body: "Use AI inside database rows for status updates, task drafts, and action items using nearby context." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Prompt templates", body: "Save prompts as templates to standardize briefs, meeting notes, and task drafting across teams." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Admin controls", body: "Enable AI per seat, manage billing visibility, and align AI usage with compliance requirements." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Notion AI review: pricing, features, pros & cons, and alternatives to decide if its embedded AI fits your workspace."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-slate-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-slate-800" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} keeps AI in the editor you already use. Draft, summarize, translate, and polish without copy-paste friction—then review for brand and accuracy.
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
              {toolName} is an AI layer inside Notion. It drafts content, summarizes long pages, translates copy, and suggests action items directly in your docs and databases. Because it is native, it keeps formatting and context intact.
            </p>
            <p className="mt-3 text-slate-700">
              You can highlight text to rewrite, generate outlines, or pull summaries from meeting notes. In databases, AI can fill status updates or task descriptions using nearby fields. Admins control which seats have AI to manage spend.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for first drafts and tidy summaries. Keep human review for facts, names, dates, and regulated topics before sharing externally.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Ideal for teams that already live in Notion and want AI help without switching tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content and marketing teams drafting briefs, posts, and campaign docs in Notion.",
                "Product managers summarizing research, PRDs, and meeting notes.",
                "Operations and support teams creating SOPs, runbooks, and FAQs.",
                "Founders and small teams using Notion as their all-in-one workspace.",
                "PMs and chiefs of staff producing action summaries from recurring meetings.",
                "Students and educators organizing study notes and translations.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
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
              The strength of {toolName} is staying in context—no new app, no copy/paste. You work in the same editor and databases while AI handles drafts, summaries, and translations.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is an add-on to paid Notion plans. Only AI-enabled members incur the AI fee. Confirm per-seat pricing, usage limits, guest rules, and whether exports or audits count against limits before rollout.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "AI add-on",
                  price: "$ per-seat add-on",
                  detail: "Enables AI for a paid member; billed only for enabled seats.",
                  bestFor: "Teams that write and summarize frequently.",
                },
                {
                  name: "Seat controls",
                  price: "On/Off",
                  detail: "Turn AI on for select users to manage spend.",
                  bestFor: "Pilots and budget-conscious teams.",
                },
                {
                  name: "Usage considerations",
                  price: "Included tasks",
                  detail: "Usage is metered. Heavy generations can hit soft caps—track early.",
                  bestFor: "Teams relying on AI for long documents.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-800">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Billing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Start with a pilot group, measure time saved on summaries and drafts, then expand. Keep AI off for read-only users to avoid unnecessary charges.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Native to Notion—no context switching.</li>
                  <li>Summaries, rewrites, translations, and action items in-place.</li>
                  <li>Seat-level controls to manage AI spend.</li>
                  <li>Prompt templates to standardize common tasks.</li>
                  <li>Works across docs, wikis, and databases.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Costs scale with AI-enabled seats; heavy use adds up.</li>
                  <li>Outputs still need human fact-checking and brand edits.</li>
                  <li>Model choices are limited compared to standalone AI tools.</li>
                  <li>Usage caps apply; heavy generation may hit limits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Compare these if you want different ecosystems or deeper AI controls:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">AI workspace alternative</p>
                  </div>
                  <Link className="text-sm font-semibold text-slate-800 hover:text-emerald-600" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other AI tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Notion AI vs standalone chatbots",
                  betterFor: "ChatGPT/Claude offer larger context and model options; {toolName} stays in Notion with formatting preserved.",
                  choose: "Pick {toolName} to avoid context switching. Pick chatbots for deep research, code, or larger context windows.",
                },
                {
                  title: "Notion AI vs Jasper AI",
                  betterFor: "Jasper excels at marketing templates and brand voice; {toolName} is generalist but integrated with docs and databases.",
                  choose: "Use {toolName} for internal docs and notes. Use Jasper for marketing copy with strict brand tone control.",
                },
                {
                  title: "Notion AI vs Microsoft 365 Copilot",
                  betterFor: "Copilot spans Office apps and email; {toolName} is focused on Notion content and lightweight databases.",
                  choose: "Pick {toolName} if your team is already in Notion. Pick Copilot if you rely on Office/Outlook heavily.",
                },
                {
                  title: "Notion AI vs Coda AI",
                  betterFor: "Coda AI is table-forward with packs; {toolName} focuses on page-first collaboration.",
                  choose: "Choose {toolName} for wiki-style docs and databases. Choose Coda AI for doc-plus-table workflows and automation.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth trying if your team already lives in Notion and needs faster drafts and summaries. Costs stay predictable when you enable AI only for heavy authors. Readers or occasional contributors may not need AI turned on.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Pilot with a few creators; measure time saved on summaries and drafts.",
                "Create prompt templates for briefs, meeting notes, and task drafts.",
                "Keep human review for facts, dates, names, and regulated content.",
                "Document when AI is used in client-facing work for transparency and QA.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is best for teams entrenched in Notion that want AI to stay within their docs, wikis, and lightweight databases. It trims drafting and summarization time but still needs human oversight. Enable it for writers and PMs first; expand after proving value and understanding costs.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your workflow, start a trial here:{" "}
                  <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default NotionAiToolPage;
