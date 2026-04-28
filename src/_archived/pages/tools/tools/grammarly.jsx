import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Grammarly";
const slug = "grammarly";
const category = "Writing Assistant";
const shortPitch =
  "Grammarly is a real-time writing assistant that improves grammar, clarity, tone, and conciseness across emails, docs, and the web, with team style guides on Business plans.";
const pricingSummary = "Freemium with Premium starting near $12/month; Business adds style guides, brand tones, and team analytics.";
const officialUrl = "https://www.grammarly.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/grammarly.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "ProWritingAid", slug: "prowritingaid" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
];

const faqs = [
  {
    q: "Is Grammarly free?",
    a: "Yes. Grammarly has a free tier covering grammar, spelling, and basic clarity suggestions. Premium unlocks tone improvement, conciseness, and advanced rewrite help.",
  },
  {
    q: "How does Grammarly work?",
    a: "Grammarly runs in your browser, desktop app, and popular editors to offer real-time suggestions on grammar, clarity, tone, and correctness.",
  },
  {
    q: "Does Grammarly support teams?",
    a: "Yes. Business plans add style guides, brand tones, snippets, and team analytics so organizations keep writing consistent.",
  },
  {
    q: "Can Grammarly rewrite sentences?",
    a: "Grammarly Premium provides rewrite and tone adjustments for clarity and brevity, plus plagiarism detection.",
  },
  {
    q: "Does Grammarly integrate with Google Docs and Outlook?",
    a: "Yes. Grammarly works in Google Docs, Outlook, Word, Gmail, Chrome, and other browsers, along with a desktop app.",
  },
  {
    q: "Is Grammarly secure?",
    a: "Grammarly encrypts data in transit and at rest and offers Business-grade controls, including SSO for enterprise customers.",
  },
  {
    q: "How does Grammarly compare to ProWritingAid?",
    a: "Grammarly is fast and easy for everyday writing; ProWritingAid offers deeper style reports. Teams often use Grammarly for daily polish and ProWritingAid for editorial depth.",
  },
  {
    q: "Can Grammarly generate content?",
    a: "Grammarly focuses on rewriting and polishing. For AI content generation, consider Jasper or Writesonic and then polish with Grammarly.",
  },
];

function GrammarlyToolPage() {
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
        "Grammarly is a real-time writing assistant that fixes grammar, improves clarity, and adjusts tone across the tools you write in daily. Free covers essentials; Premium adds rewrites and plagiarism checks; Business adds style guides and team controls.",
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
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "Real-time grammar and clarity",
      body: "Correctness, punctuation, and clarity suggestions adapt to your writing context in docs, email, and web apps.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Tone and rewrite suggestions",
      body: "Rewrite sentences for conciseness or different tones, ensuring messages sound confident and on-brand.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Team style guides and snippets",
      body: "Business plans add custom rules, brand tones, and reusable snippets to keep teams aligned.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Broad integrations",
      body: "Use Grammarly in Google Docs, Word, Outlook, Gmail, browsers, and desktop apps without changing your workflow.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Plagiarism detection",
      body: "Premium checks text against billions of pages to flag unoriginal content and help teams uphold standards.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Analytics for teams",
      body: "Business admins can see usage, improvements, and adherence to style rules, guiding training and process updates.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Grammarly review for individuals and teams: pricing, features, pros & cons, alternatives, and whether Grammarly fits your 2025 writing stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Grammarly helps teams and individuals write clearly and confidently everywhere they type, with style controls and analytics on Business plans.
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
              Grammarly is a {category.toLowerCase()} that checks grammar, spelling, clarity, and tone in real time across browsers, documents, and email clients. It’s designed to keep writing clear and consistent without leaving your workflow.
            </p>
            <p className="mt-3 text-slate-700">
              Individuals use it for emails, docs, and social posts. Teams use Business to enforce style guides, brand tones, and snippets while monitoring improvements with analytics.
            </p>
            <p className="mt-3 text-slate-700">It’s not a full AI writer; instead it polishes and rewrites existing text, complementing generative tools you may already use.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Grammarly suits anyone who writes frequently and wants consistent, polished output.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers and content teams polishing blog posts, emails, and landing pages.",
                "Sales and success teams sending client-facing communication.",
                "Support teams standardizing tone and clarity in tickets and chats.",
                "Students and professionals ensuring correctness and conciseness.",
                "Teams enforcing brand voice and terminology via style guides.",
                "Anyone pairing AI generation with Grammarly for final polish.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Grammarly focuses on clarity, correctness, and team consistency.</p>
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
                  Grammarly is freemium. Premium adds advanced tone, clarity rewrites, and plagiarism checks. Business adds style guides, brand tones, SSO, and analytics for teams. Pricing scales per user with volume discounts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use free for basics. Upgrade to Premium for serious writing. Choose Business for teams needing style guides and analytics.</p>
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
                    <td className="px-4 py-3">Basic correctness and spelling</td>
                    <td className="px-4 py-3">Limited tone/clarity, no plagiarism check</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Individuals writing frequently</td>
                    <td className="px-4 py-3">Full tone/clarity rewrites, plagiarism checks</td>
                    <td className="px-4 py-3">~$12/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams needing consistency</td>
                    <td className="px-4 py-3">Style guides, brand tones, SSO, analytics</td>
                    <td className="px-4 py-3">Varies by seats</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with compliance needs</td>
                    <td className="px-4 py-3">Dedicated support, advanced security, custom terms</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Grammarly’s value increases with daily use. Teams should factor SSO and analytics needs when choosing Business vs. Premium seats.
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
                  <li>Excellent real-time grammar and clarity coaching.</li>
                  <li>Strong tone detection and rewrite help for concise writing.</li>
                  <li>Wide integrations—works where you write.</li>
                  <li>Business style guides and brand tones for consistency.</li>
                  <li>Plagiarism checks and team analytics on higher tiers.</li>
                  <li>Easy onboarding for individuals and teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a full AI writer; focused on polish over generation.</li>
                  <li>Some advanced controls require Business/Enterprise.</li>
                  <li>Free tier omits plagiarism and many tone features.</li>
                  <li>Style guide customization is lighter than enterprise content governance tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Grammarly focuses on polish and tone. If you need deeper style reports, heavy paraphrasing, or AI generation, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All improve writing; they differ on editing depth, paraphrasing, and generation.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to common writing tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ProWritingAid</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/prowritingaid-vs-grammarly-vs-quillbot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ProWritingAid offers deeper style and readability reports. Grammarly is faster and more ubiquitous. Choose Grammarly for daily polish everywhere; choose ProWritingAid for in-depth editorial analysis.
              </p>
              <p className="mt-2 text-slate-900">Many teams combine them: Grammarly for everyday writing, ProWritingAid for long-form edits.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs QuillBot</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/rytr-vs-quillbot-vs-grammarly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuillBot excels at paraphrasing and summarizing. Grammarly focuses on correctness and tone. Choose QuillBot when you need rewrites; choose Grammarly to polish and standardize day-to-day writing.
              </p>
              <p className="mt-2 text-slate-900">For teams, Grammarly’s style guides and SSO provide better governance.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For individuals and teams that write daily, Grammarly is worth it. It reduces errors, improves clarity, and keeps tone on-brand across channels.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy paraphrasing or long-form generation, pair Grammarly with AI writers. For deep editorial reports, ProWritingAid may complement it.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Grammarly is a top pick for polished, consistent writing, especially when combined with team style guides on Business plans.
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
              Choose {toolName} if you want fast, reliable writing assistance everywhere you type, plus governance via style guides for teams.
            </p>
            <p>
              Consider ProWritingAid for deeper reports or QuillBot for paraphrasing. Pair Grammarly with AI writers when you need to generate and polish content end to end.
            </p>
            <p>Grammarly’s broad integrations make it an easy addition to any writing stack, improving clarity without changing tools.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default GrammarlyToolPage;
