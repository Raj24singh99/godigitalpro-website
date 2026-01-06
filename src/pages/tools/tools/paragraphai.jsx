import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ParagraphAI";
const slug = "paragraphai";
const category = "AI Writing Assistants";
const shortPitch =
  "ParagraphAI is an AI writing assistant for emails, messages, drafts, and rewrites that helps individuals and teams produce clearer copy quickly.";
const pricingSummary =
  "Freemium with daily limits; paid plans unlock higher message caps, faster responses, and premium tones. Teams can add shared billing and admin controls.";
const officialUrl = "https://paragraphai.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/paragraphai.com",
  gradient: "from-purple-500 via-indigo-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(109,40,217,0.26)]",
};

const alternatives = [
  { name: "Grammarly", slug: "grammarly" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
];

const faqs = [
  { q: "What is ParagraphAI?", a: "ParagraphAI is an AI writing assistant that drafts, rewrites, and shortens text for emails, messages, and basic documents." },
  { q: "Who is it for?", a: "Individuals, students, and teams that need quick drafts and rewrites for everyday writing: outreach, replies, and short-form content." },
  { q: "Does ParagraphAI handle SEO content?", a: "It is best for short-form writing and rewriting; for long-form SEO drafting, pair it with specialized tools." },
  { q: "How is pricing structured?", a: "Freemium with daily limits; paid plans add higher usage caps, premium tone controls, and faster responses." },
  { q: "Does it integrate with other tools?", a: "Exports and copy/paste are the main workflows. Use browser extensions or the app to speed up drafting across tools." },
  { q: "Is human review needed?", a: "Yes. You should review for accuracy, tone, and context—especially for sensitive or brand-critical communication." },
  { q: "Can I change tone and length?", a: "Yes. ParagraphAI lets you set tone, formal/informal style, and adjust length or rewrite for clarity." },
  { q: "Is it safe for business use?", a: "Use policies that avoid pasting sensitive data; review security settings and ensure human approval for external communications." },
];

function ParagraphAIToolPage() {
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
        "ParagraphAI drafts and rewrites everyday messages and short-form content. It is useful for speed, but teams should review outputs for tone, accuracy, and brand alignment.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Instant drafts", body: "Generate replies, outreach messages, and short-form drafts in seconds." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Rewrite & improve", body: "Paraphrase, simplify, or expand text to fit context and clarity needs." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Tone controls", body: "Switch between formal/informal tones and adjust length for each channel." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Email & messaging focus", body: "Optimized prompts for email, LinkedIn, and messaging use cases." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Cross-device access", body: "Use the app or browser extensions to apply suggestions wherever you write." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Affordable plans", body: "Freemium entry with low-cost upgrades for higher usage caps and speed." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ParagraphAI review with pricing, features, pros & cons, and alternatives to help you choose the right short-form AI writing assistant."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} speeds up everyday writing—use it for drafts and rewrites, then edit for context, tone, and accuracy before sending.
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
              {toolName} is an AI writing assistant focused on short-form drafting, rewriting, and tone adjustment. It’s built for emails, outreach, and quick responses rather than long-form SEO content.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a drafting helper: teams should review, personalize, and fact-check before sending—especially for brand-critical or legal communications.
            </p>
            <p className="mt-3 text-slate-700">Pair it with grammar checkers, SEO tools, or CMSes when you move beyond short-form tasks.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for individuals and teams that need quick, polished short-form writing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Sales outreach and follow-ups where speed matters but personalization is needed.",
                "Support teams drafting friendly, on-brand replies that still need human review.",
                "Founders and operators sending investor or customer updates quickly.",
                "Students and professionals refining emails, cover letters, or concise summaries.",
                "Marketers polishing social captions or short landing snippets.",
                "Writers who want fast rewrites before applying brand voice guidelines.",
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
              {toolName} focuses on fast drafting and rewriting with tone controls for everyday communication.
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
                  {toolName} offers a free tier with daily usage caps. Paid plans raise limits, add faster responses, and unlock advanced tones. Team pricing typically bundles shared billing and admin controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to gauge quality; upgrade only if you hit caps or need faster generation and premium tone options.</p>
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
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Daily caps, core drafting and rewriting</td>
                    <td className="px-4 py-3">Good for testing quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular individual use</td>
                    <td className="px-4 py-3">Higher caps, premium tones, faster responses</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small teams/business use</td>
                    <td className="px-4 py-3">Shared billing, admin controls, higher limits</td>
                    <td className="px-4 py-3">Contact sales for volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor message volume and quality. Keep human review in the loop for important communications, and avoid pasting sensitive data.
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
                  <li>Very fast drafts for emails and messages.</li>
                  <li>Tone/length controls make replies feel more natural.</li>
                  <li>Low-cost entry with a usable free tier.</li>
                  <li>Helpful for rewriting and simplifying text.</li>
                  <li>Cross-device access through extensions/apps.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Outputs need human review for tone and accuracy.</li>
                  <li>Not a replacement for SEO or long-form content tools.</li>
                  <li>Daily caps can be limiting on the free plan.</li>
                  <li>Limited integrations beyond copy/paste workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI writing assistants to match tone control, pricing, and integrations.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div
                  key={alt.slug}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200"
                >
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
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grammarly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/grammarly">
                  View Grammarly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grammarly focuses on grammar, clarity, and brand tone style guides; {toolName} focuses on fast drafting and rewriting. Use Grammarly for error-proofing and tone rules, {toolName} for quick generation.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs QuillBot</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/quillbot">
                  View QuillBot
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuillBot is strong at paraphrasing and summarization; {toolName} emphasizes ready-to-send drafts for emails and messages. Choose based on whether rewriting depth or quick draft speed is more important.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need quick, polished replies or rewrites and you already plan to review outputs before sending. It is a productivity boost for everyday writing.
            </p>
            <p className="mt-3 text-slate-700">
              For long-form content, SEO drafting, or strict brand tone enforcement, pair {toolName} with specialized tools and human editing.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A fast drafting assistant for short-form writing; best when combined with review steps and complementary tools.
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
              Choose {toolName} if you want AI-assisted drafts, rewrites, and tone adjustments for everyday writing and have a review process before sending.
            </p>
            <p>
              Consider Grammarly for grammar/style enforcement or QuillBot for deeper paraphrasing; use {toolName} to speed up the first-draft stage.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default ParagraphAIToolPage;
