import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "HyperWrite";
const slug = "hyperwrite";
const category = "AI Writing Assistant";
const shortPitch =
  "HyperWrite is an AI writing assistant and browser extension that drafts, rewrites, and automates tasks directly inside your workflow.";
const pricingSummary =
  "Free plan with limited generations. Paid tiers add more credits, advanced AutoWrite/agent features, team controls, and faster responses.";
const officialUrl = "https://hyperwriteai.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hyperwriteai.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
  { name: "Notion AI", slug: "notion-ai" },
  { name: "Grammarly", slug: "grammarly" },
];

const faqs = [
  {
    q: "What is HyperWrite?",
    a: "HyperWrite is an AI writing assistant with a browser extension that drafts, rewrites, and automates tasks in apps you already use.",
  },
  {
    q: "Who is it for?",
    a: "Professionals and teams who want faster emails, docs, and web-based writing without leaving their workflow.",
  },
  {
    q: "Does HyperWrite support automation?",
    a: "Yes. AutoWrite and agent-like features can complete tasks such as drafting replies or filling forms, with user review required.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier with limited generations; paid plans add more credits, faster responses, and advanced agent features. Costs scale with usage.",
  },
  {
    q: "Is human review needed?",
    a: "Always. Check outputs for accuracy, compliance, and brand voice before sending or publishing.",
  },
  {
    q: "Does HyperWrite integrate with other tools?",
    a: "The browser extension works across web apps and email. Pair with CMS/CRM tools via copy/paste or exports.",
  },
  {
    q: "Does it guarantee factual accuracy?",
    a: "No AI tool can guarantee accuracy. Fact-check and edit before relying on outputs.",
  },
  {
    q: "Can teams manage access?",
    a: "Higher tiers add more credits and team controls. Confirm current collaboration features with HyperWrite’s pricing page.",
  },
];

function HyperWriteToolPage() {
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
        "HyperWrite combines AI writing with an in-browser assistant. It speeds up replies, drafting, and rewriting, but still requires human oversight.",
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
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Browser extension",
      body: "Works inside Gmail, Docs, and most web apps so you can draft and rewrite without switching tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "AutoWrite & agents",
      body: "Automate tasks like email replies or form fills; keep humans in the loop for review and approval.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Fast drafting",
      body: "Generate first drafts for emails, articles, and briefs to accelerate your writing flow.",
    },
    {
      icon: <Folder className="h-5 w-5 text-emerald-500" />,
      title: "Rewrite & tone controls",
      body: "Paraphrase or adjust tone for clarity and brevity while keeping intent intact.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-blue-500" />,
      title: "Template-based prompts",
      body: "Use guided templates for common tasks like outreach, summaries, and social captions.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Guardrails",
      body: "Human review is built-in—outputs should be checked for accuracy, compliance, and voice.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="HyperWrite review: pricing, features, pros & cons, and alternatives to decide if this AI writing assistant fits your workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} helps you draft, rewrite, and automate tasks in-browser—use it to move faster, then review for accuracy and voice.
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
              {toolName} is an AI writing assistant and automation layer that lives in your browser. It generates drafts, rewrites, and suggested replies while you work in email, docs, and web apps.
            </p>
            <p className="mt-3 text-slate-700">
              Use it as a drafting partner: humans still need to review outputs, add expertise, and ensure compliance before sending or publishing.
            </p>
            <p className="mt-3 text-slate-700">Pair it with your CMS, CRM, or knowledge base workflows to move faster without sacrificing quality.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for people who want AI assistance directly where they work online.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Professionals writing email or docs inside the browser.",
                "Sales and success teams drafting replies and follow-ups.",
                "Marketing teams creating briefs, outlines, and copy faster.",
                "Founders and operators who want quick drafts without new tools.",
                "Writers who need paraphrasing and tone adjustment on the fly.",
                "Teams experimenting with agent-like workflows but keeping review steps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on AI-assisted writing, rewriting, and task automation inside your browser.</p>
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
                  {toolName} offers a free tier with limited generations. Paid plans increase credits, speed, and unlock AutoWrite/agent features. Costs rise with usage and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free to test quality; move to paid when you need higher limits or automation features.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Limited generations, core writing tools</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular individual use</td>
                    <td className="px-4 py-3">More credits, faster responses, AutoWrite features</td>
                    <td className="px-4 py-3">Monthly pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams/Top</td>
                    <td className="px-4 py-3">Collaborating teams</td>
                    <td className="px-4 py-3">Highest limits, team controls, priority support</td>
                    <td className="px-4 py-3">Best when multiple seats are needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track usage, review outputs, and budget for time spent editing—AI drafts save time, but human oversight is essential.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-blue-50 p-5 shadow-sm ring-1 ring-blue-100">
                <div className="flex items-center gap-2 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Lives in the browser, so no new app to learn.</li>
                  <li>AutoWrite/agent-style features can speed up routine tasks.</li>
                  <li>Good for email replies, briefs, and rewrites.</li>
                  <li>Templates guide prompts for common workflows.</li>
                  <li>Flexible free tier for evaluation.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs require review for accuracy and compliance.</li>
                  <li>Credit costs increase with heavy usage.</li>
                  <li>Automation still needs human oversight to avoid mistakes.</li>
                  <li>Not a replacement for deep research or editing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI assistants to match your workflow, budget, and collaboration needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI writing assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and structured campaigns; {toolName} shines for in-browser drafting and quick replies. Choose based on whether brand control or browser-native speed matters more.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion AI</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/notion-ai">
                  View Notion AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion AI is embedded in docs and wikis; {toolName} works across the web via its extension. If you live in Notion, use its native AI. If you work across many sites, {toolName} is more flexible.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth trying if you want AI drafting and automation directly in your browser and you plan to review every output before sending or publishing.
            </p>
            <p className="mt-3 text-slate-700">
              It saves time on routine writing but still needs human judgment for accuracy, compliance, and brand voice.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A convenient in-browser assistant for drafting and automation—strongest when paired with human oversight and established workflows.
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
              Choose {toolName} if you want AI-assisted writing, replies, and task automation where you already work online, with human review in place.
            </p>
            <p>Consider Jasper for brand governance or Notion AI for native doc workflows; use {toolName} to move faster across many web apps.</p>
            <p>{toolName} accelerates drafting while keeping you in control of quality and tone.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default HyperWriteToolPage;
