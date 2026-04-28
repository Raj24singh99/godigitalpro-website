import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Superhuman AI";
const slug = "superhuman-ai";
const category = "Email Productivity & AI";
const shortPitch =
  "Superhuman AI augments Superhuman’s fast email client with AI-assisted replies, summaries, and drafting to help users process inboxes faster.";
const pricingSummary =
  "Superhuman is subscription-based; AI features are included on eligible plans. Pricing varies by plan and team size—confirm AI availability and any usage considerations.";
const officialUrl = "https://superhuman.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/superhuman.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Gmail + Gemini", slug: "google-workspace" },
  { name: "Outlook + Copilot", slug: "microsoft-365" },
  { name: "Shortwave", slug: "shortwave" },
  { name: "Spark Mail", slug: "spark-mail" },
  { name: "Canary Mail", slug: "canary-mail" },
];

const faqs = [
  {
    q: "What is Superhuman AI?",
    a: "Superhuman AI adds AI drafting, replies, and summaries to Superhuman’s fast email client to accelerate inbox processing.",
  },
  {
    q: "Who is it for?",
    a: "Professionals and teams using Superhuman who want faster replies and summaries while keeping keyboard-driven workflows.",
  },
  {
    q: "How is pricing structured?",
    a: "Superhuman is subscription-based. AI features are available on eligible plans; confirm current plan requirements.",
  },
  {
    q: "Does it work with Gmail/Outlook?",
    a: "Superhuman connects to Gmail and Outlook accounts; AI features operate within the Superhuman client.",
  },
  {
    q: "Is my data secure?",
    a: "Superhuman emphasizes security; review their AI data usage and privacy policies to ensure compliance with your org’s requirements.",
  },
  {
    q: "Does it replace human review?",
    a: "No. AI drafts need review for tone, accuracy, and context before sending.",
  },
  {
    q: "Are there usage limits?",
    a: "AI usage may be subject to fair use or plan-based limits; check current terms.",
  },
  {
    q: "Does it integrate with team workflows?",
    a: "Yes. Teams can use AI alongside shared snippets, reminders, and split inboxes in Superhuman.",
  },
];

function SuperhumanAiToolPage() {
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
        "Superhuman AI speeds up email with AI-generated replies, summaries, and drafting within the Superhuman client. It’s valuable for users who rely on Superhuman’s speed and want AI assistance without leaving the app.",
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
      title: "AI replies & drafting",
      body: "Generate replies and drafts quickly; edit for tone and accuracy before sending.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Summaries",
      body: "Summarize long threads to get context faster and triage responses.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Keyboard-first workflow",
      body: "Use AI within Superhuman’s command palette and shortcuts for speed.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security & privacy",
      body: "Superhuman emphasizes privacy; review AI data handling to meet compliance needs.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Gmail/Outlook support",
      body: "Works with Gmail and Outlook accounts inside the Superhuman client.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Team features",
      body: "Combine AI with snippets, reminders, split inboxes, and team workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Superhuman AI review: pricing, features, pros & cons, and alternatives so you can decide if AI email acceleration fits your workflow."
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
                  {toolName} keeps email fast with AI inside the Superhuman client—use it with human oversight for tone and accuracy.
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
              {toolName} is the AI layer inside Superhuman’s email client. It drafts replies, summarizes threads, and helps you triage faster while staying in Superhuman’s keyboard-first interface.
            </p>
            <p className="mt-3 text-slate-700">
              It’s designed for speed and productivity, not as a standalone email platform. You still need to review AI outputs to maintain tone and accuracy.
            </p>
            <p className="mt-3 text-slate-700">
              Works with Gmail and Outlook accounts connected through Superhuman; review data usage policies for compliance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for professionals and teams already on Superhuman who want AI-assisted email speed.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Executives and operators processing large volumes of email quickly.",
                "Sales/CS teams using Superhuman and needing faster replies.",
                "Teams that prefer keyboard-driven workflows and minimal UI friction.",
                "Users who want in-client summaries to triage long threads.",
                "Teams standardizing snippets and AI drafts for consistent responses.",
                "Superhuman customers wanting AI without switching email apps.",
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
              {toolName} brings AI drafting and summarization into Superhuman’s fast email experience.
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
                  Superhuman uses subscription pricing; AI features are available on eligible plans. Confirm current pricing and any usage considerations for AI. Model ROI based on time saved and reply speed for your team.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you’re evaluating Superhuman, factor AI availability into plan choice; teams should test AI on a small group to validate speed gains.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard/Pro</td>
                    <td className="px-4 py-3">Individual users</td>
                    <td className="px-4 py-3">Superhuman client + AI features (eligible plans)</td>
                    <td className="px-4 py-3">Validate AI availability</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Business</td>
                    <td className="px-4 py-3">Teams needing shared workflows</td>
                    <td className="px-4 py-3">Team features, admin controls, AI (plan-dependent)</td>
                    <td className="px-4 py-3">Check per-seat pricing and AI terms</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Custom terms, security/compliance support</td>
                    <td className="px-4 py-3">Confirm AI data handling requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Always review AI outputs; ensure compliance with your organization’s data policies. Measure time savings and reply speed to justify cost.
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
                  <li>Fast AI drafting and summaries inside Superhuman.</li>
                  <li>Keyboard-first workflow; minimal UI friction.</li>
                  <li>Works with Gmail and Outlook accounts.</li>
                  <li>Team features like snippets and split inboxes.</li>
                  <li>Strong productivity focus for heavy email users.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires a Superhuman subscription; costs are higher than free clients.</li>
                  <li>AI outputs need review for tone/accuracy.</li>
                  <li>Not a fit if you prefer default Gmail/Outlook UIs or want full desktop clients.</li>
                  <li>Data policies must align with company compliance requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI-powered email tools to match your stack and budget.
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
            <p className="text-slate-700">See how {toolName} stacks against other AI email assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Gmail + Gemini</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/google-workspace">
                  View Google Workspace
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Gmail + Gemini is built into Google’s ecosystem; {toolName} offers a faster, keyboard-first client with AI. Choose based on UI preference, speed, and willingness to pay for Superhuman’s client.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Outlook + Copilot</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/microsoft-365">
                  View Microsoft 365
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Outlook + Copilot fits Microsoft-native teams; {toolName} is optimized for speed and Superhuman’s UX. Pick based on your ecosystem and whether you need the Superhuman client experience.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you already value Superhuman’s speed and want integrated AI replies and summaries to clear inboxes faster.
            </p>
            <p className="mt-3 text-slate-700">
              Validate time savings and ensure data policies fit your organization. Keep humans reviewing AI drafts to maintain tone and accuracy.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong productivity boost for Superhuman users—best when paired with disciplined review and a need for speed.
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
              Choose {toolName} if you rely on Superhuman and want AI to speed replies and summaries while keeping a fast, keyboard-first workflow.
            </p>
            <p>
              Consider Gmail+Gemini or Outlook+Copilot if you prefer native clients or already pay for those ecosystems. {toolName} is ideal when Superhuman’s UX is already your daily driver.
            </p>
            <p>{toolName} accelerates email when used with human oversight for tone and accuracy.</p>
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

export default SuperhumanAiToolPage;
