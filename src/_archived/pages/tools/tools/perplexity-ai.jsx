import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Perplexity AI";
const slug = "perplexity-ai";
const category = "AI Search & Research";
const shortPitch =
  "Perplexity AI is an AI search assistant that answers questions with cited sources, summaries, and follow-up suggestions to speed up research.";
const pricingSummary =
  "Free tier with usage caps; paid Pro unlocks higher limits, faster models, file upload, and more advanced search depth. Team plans add shared billing and admin.";
const officialUrl = "https://www.perplexity.ai";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/perplexity.ai",
  gradient: "from-blue-500 via-sky-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "ChatGPT", slug: "chatgpt" },
  { name: "Claude", slug: "claude" },
  { name: "Google Gemini", slug: "gemini" },
  { name: "Perplexity vs ChatGPT vs Claude", slug: "compare/ai-research" },
  { name: "You.com", slug: "you-com" },
];

const faqs = [
  { q: "What is Perplexity AI?", a: "Perplexity AI is an AI search engine that provides answers with citations, summaries, and follow-up questions." },
  { q: "Who is it for?", a: "Researchers, marketers, students, and teams that need quick answers with sources and context." },
  { q: "Does it replace Google?", a: "It’s best for research-style queries; for navigation or shopping, traditional search may still be needed." },
  { q: "How is pricing structured?", a: "Free with daily caps; Pro adds higher limits, better models, file uploads, and deeper search." },
  { q: "Can it analyze files?", a: "Pro supports file uploads for analysis; always review outputs before acting on them." },
  { q: "Does it cite sources?", a: "Yes, responses include citations and links so you can verify information." },
  { q: "Is data private?", a: "Check current privacy and data retention policies before uploading sensitive information." },
  { q: "Is human review needed?", a: "Yes. Verify facts and sources, especially for business or academic use." },
];

function PerplexityToolPage() {
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
        "Perplexity AI delivers research-style answers with citations and summaries. It is strong for quick synthesis, but human verification remains essential.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Cited answers", body: "Responses include source links so you can verify claims quickly." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Follow-up suggestions", body: "Guided follow-ups help you dig deeper into a topic without rephrasing." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Web search depth", body: "Searches across the web to summarize recent information and context." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "File uploads (Pro)", body: "Upload documents for analysis and summarization in Pro plans." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Browser extensions and APIs help bring answers into your workflows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Model options", body: "Choose higher-quality models on Pro for better reasoning and depth." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Perplexity AI review: pricing, features, pros & cons, and alternatives so you can pick the right AI search assistant."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  {toolName} accelerates research with cited answers—use it to gather context, then verify sources and details before acting.
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
              {toolName} is an AI search assistant built for research-style questions. It searches the web, cites sources, and summarizes findings with suggested follow-ups.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to speed up desk research, compare viewpoints, and gather context. Always click through citations to verify accuracy.
            </p>
            <p className="mt-3 text-slate-700">Pair with your own fact-checking and domain expertise before publishing or making decisions.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for people who need research answers with citations.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers researching industries, competitors, and messaging quickly.",
                "Students and researchers gathering sources and summaries.",
                "Operators needing fast policy or compliance context (with verification).",
                "Writers and editors seeking cited background for drafts.",
                "Analysts exploring topics before deeper quant work.",
                "Teams that value follow-up suggestions for deeper dives.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on cited answers, deep search, and quick follow-ups.</p>
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
                  Free tier includes daily caps. Pro adds higher limits, faster/better models, file uploads, and deeper search depth. Teams can get shared billing and admin controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade if you hit caps or need file uploads and higher-quality models.</p>
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
                    <td className="px-4 py-3">Light research</td>
                    <td className="px-4 py-3">Cited answers, daily caps</td>
                    <td className="px-4 py-3">Great for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular researchers</td>
                    <td className="px-4 py-3">Higher limits, better models, file upload</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Teams needing admin</td>
                    <td className="px-4 py-3">Shared billing, admin controls, higher usage</td>
                    <td className="px-4 py-3">Custom options</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Always verify sources and claims. For regulated topics, rely on primary sources and expert review.
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
                  <li>Cited answers and summaries save research time.</li>
                  <li>Follow-up prompts guide deeper exploration.</li>
                  <li>File uploads (Pro) for document analysis.</li>
                  <li>Higher-quality models on paid tiers.</li>
                  <li>Browser extensions and API options.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Facts can be wrong—verification is required.</li>
                  <li>Usage caps on free; Pro costs can add up.</li>
                  <li>Not ideal for navigational/shopping queries.</li>
                  <li>Sensitive data should not be uploaded without review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI search and chat tools.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.slug.startsWith("compare") ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other AI assistants.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ChatGPT</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/chatgpt">
                  View ChatGPT
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ChatGPT excels at creation and conversation; {toolName} focuses on cited web answers. Use ChatGPT for drafting, {toolName} for quick sourced research.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Claude</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/claude">
                  View Claude
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Claude offers long-context writing and analysis; {toolName} specializes in search with citations. Pick based on whether you need long-form reasoning or web-grounded answers.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want fast, cited research answers and are prepared to verify sources. Pro is useful when you hit free limits or need file uploads.
            </p>
            <p className="mt-3 text-slate-700">For creative drafting, combine it with generative writing tools; always keep human review in the loop.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong choice for research-style queries with citations; best when paired with verification and editorial judgment.
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
              Choose {toolName} if you want AI-assisted search with citations to speed up research. Verify sources, and use other tools for drafting or design as needed.
            </p>
            <p>
              Consider ChatGPT or Claude for long-form creation; {toolName} shines when you need sourced answers quickly.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your research, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default PerplexityToolPage;
