import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ClickUp AI";
const slug = "clickup-ai";
const category = "Productivity & Work Management";
const shortPitch =
  "ClickUp AI is the native AI assistant inside ClickUp for writing, summarizing tasks, creating docs, and drafting project updates without leaving your workspace.";
const pricingSummary =
  "Add-on pricing per user per month on top of ClickUp plans. Teams pay for AI seats; higher plans include more workspace features, storage, and permissions.";
const officialUrl = "https://clickup.com/ai";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clickup.com",
  gradient: "from-purple-500 via-pink-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(147,51,234,0.25)]",
};

const alternatives = [
  { name: "Notion AI", slug: "notion-ai" },
  { name: "Asana", slug: "asana" },
  { name: "Monday.com", slug: "monday" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Slack AI", slug: "slack" },
];

const faqs = [
  {
    q: "What is ClickUp AI?",
    a: "ClickUp AI is an add-on that brings AI writing, task summaries, standup updates, and doc assistance directly inside ClickUp tasks and docs.",
  },
  {
    q: "Who is it for?",
    a: "Teams already using ClickUp that want faster updates, summaries, and draft creation without switching tools.",
  },
  {
    q: "How is pricing structured?",
    a: "It is billed per user per month on top of your ClickUp plan. You pay for each AI seat you enable.",
  },
  {
    q: "Does it replace project managers?",
    a: "No. It speeds up writing and summarizing but still needs human oversight for priorities, deadlines, and accuracy.",
  },
  {
    q: "Can it summarize tasks and docs?",
    a: "Yes. It can summarize task threads, comments, and docs to help teams catch up quickly.",
  },
  {
    q: "Does it integrate with other AI tools?",
    a: "It is native to ClickUp; you can still use external tools for specialized writing or analytics alongside it.",
  },
  {
    q: "Is my data secure?",
    a: "Data follows ClickUp’s security model. Verify how prompts are handled and ensure workspace permissions are set correctly.",
  },
  {
    q: "Does it work on mobile?",
    a: "ClickUp AI features are available across ClickUp’s apps, but check current mobile support for specific actions.",
  },
];

function ClickUpAiToolPage() {
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
        "ClickUp AI speeds up drafting docs, status updates, and task summaries within ClickUp. It is best for teams already running their work in ClickUp who want faster writing without leaving the tool.",
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
      title: "AI writing in docs",
      body: "Generate outlines, drafts, and edits directly inside ClickUp Docs with tailored prompts.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Task summaries",
      body: "Summarize task descriptions and comment threads to catch up quickly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Standup & status",
      body: "Produce standup updates and status reports from task data so teams stay aligned.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Context-aware prompts",
      body: "Use templates by role and content type, keeping formatting consistent across the workspace.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Native to ClickUp",
      body: "No extra tool-switching—AI lives where you manage tasks, docs, and sprints.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Mobile & desktop",
      body: "AI actions are available across ClickUp apps, making updates accessible anywhere.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ClickUp AI review: pricing, features, pros & cons, and alternatives so you can decide if the add-on is worth it for your team."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} keeps AI where your work already lives, helping teams draft, summarize, and update projects faster.
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
              {toolName} is ClickUp’s AI add-on. It adds AI drafting, editing, and summarizing to Docs, tasks, and comments so teams can move faster without leaving the platform.
            </p>
            <p className="mt-3 text-slate-700">Use it to generate outlines, brainstorm ideas, clean up writing, and summarize long threads.</p>
            <p className="mt-3 text-slate-700">It works best when paired with clear processes and human review to keep updates accurate and actionable.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams already managing projects in ClickUp that want faster content and status workflows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Project managers turning updates into concise summaries.",
                "Product teams drafting specs and PRDs in ClickUp Docs.",
                "Marketing teams creating briefs and posts directly in tasks.",
                "Support and ops teams summarizing long threads for stakeholders.",
                "Leaders preparing standups and status updates from tasks.",
                "Teams who want AI without switching between multiple tools.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI-assisted writing, summarization, and task context inside ClickUp.</p>
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
                  {toolName} is a paid add-on billed per user per month. Pricing sits on top of your ClickUp plan, so total cost depends on both your workspace plan and enabled AI seats.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Enable AI for users who write and report the most; expand if adoption proves value.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-on (per user)</td>
                    <td className="px-4 py-3">Teams already on ClickUp</td>
                    <td className="px-4 py-3">AI prompts, summaries, templates in tasks/docs</td>
                    <td className="px-4 py-3">Billed on top of base ClickUp plan</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add selectively</td>
                    <td className="px-4 py-3">Writers, PMs, team leads</td>
                    <td className="px-4 py-3">Same features, fewer seats</td>
                    <td className="px-4 py-3">Control costs by role</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Workspace-wide</td>
                    <td className="px-4 py-3">Full-team rollout</td>
                    <td className="px-4 py-3">Broad adoption for updates and docs</td>
                    <td className="px-4 py-3">Use when AI is core to workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Track usage and quality; keep human review in place for decisions, timelines, and external-facing content.</p>
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
                  <li>Native to ClickUp—no context switching.</li>
                  <li>Task and doc summaries save catch-up time.</li>
                  <li>Role-based prompts keep formatting consistent.</li>
                  <li>Useful for status updates, briefs, and quick drafts.</li>
                  <li>Deploy only to the users who need it.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Extra cost per seat on top of ClickUp plans.</li>
                  <li>Quality varies; human review is required.</li>
                  <li>Limited outside ClickUp ecosystem.</li>
                  <li>May not replace specialized writing tools for long-form content.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing and productivity tools to fit your stack and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other AI productivity tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/notion-ai">
                  View Notion AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion AI lives in docs and databases; {toolName} lives across tasks and docs in ClickUp. Choose based on where your team already works.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper focuses on brand voice and marketing content; {toolName} focuses on workspace productivity. Use Jasper for campaigns, ClickUp AI for internal updates and docs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your team already lives in ClickUp and wants faster writing, summaries, and updates without extra tools.
            </p>
            <p className="mt-3 text-slate-700">
              It pays off when users adopt it daily for briefs, docs, and standups. Keep human review for decisions, timelines, and external content.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A helpful productivity boost for ClickUp users; costs scale with seats, so start with heavy writers first.
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
              Choose {toolName} if you need AI help directly where tasks and docs already live in ClickUp, and you want faster summaries and updates.
            </p>
            <p>
              Consider Notion AI or Jasper for richer writing use cases; use {toolName} for daily productivity inside ClickUp.
            </p>
            <p>{toolName} keeps teams moving faster while work stays inside one platform—still verify outputs for accuracy and tone.</p>
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

export default ClickUpAiToolPage;
