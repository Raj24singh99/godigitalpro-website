import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, ClipboardList, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ProWritingAid";
const slug = "prowritingaid";
const category = "Grammar & Style Assistant";
const shortPitch =
  "ProWritingAid delivers in-depth grammar, style, and readability reports so content teams, authors, and students can tighten drafts and keep tone consistent.";
const pricingSummary = "Free core grammar with Premium plans from ~$30/month or discounted annual billing for full reports, style guides, and integrations.";
const officialUrl = "https://prowritingaid.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/prowritingaid.com",
  gradient: "from-emerald-600 via-teal-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.24)]",
};

const alternatives = [
  { name: "Grammarly", slug: "grammarly" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
];

const faqs = [
  { q: "Is ProWritingAid free?", a: "There is a free tier with limited grammar and style checks. Premium unlocks full reports, higher word limits, team style guides, and integrations." },
  { q: "How is ProWritingAid different from Grammarly?", a: "ProWritingAid offers deeper reports for style, pacing, overused words, and readability. Grammarly excels at real-time grammar and tone coaching with a lighter UI." },
  { q: "Does ProWritingAid support fiction writing?", a: "Yes. Its pacing, cliche, and dialogue tags checks are popular with authors who need granular story and style guidance beyond grammar." },
  { q: "Can teams enforce brand voice?", a: "Premium teams can set custom style guides and terminology so writers keep language consistent across blog posts, product copy, and docs." },
  { q: "Does ProWritingAid work in Google Docs and Word?", a: "Yes. Browser extensions, Word, and Google Docs add-ons let you edit inside your editor. A desktop app covers offline drafting." },
  { q: "Is there a plagiarism checker?", a: "Premium users can add plagiarism checks to ensure originality before publishing—helpful for agencies, academics, and SEO teams." },
  { q: "Will it rewrite content automatically?", a: "ProWritingAid suggests fixes and rewrites sentences but is not a full long-form generator. Pair it with Jasper or Writesonic for ideation, then polish here." },
  { q: "Is it good for SEO teams?", a: "Yes. Readability, sentence variety, and overused-word reports help keep articles skimmable while maintaining keyword intent." },
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
        "ProWritingAid delivers granular grammar and style reports that help teams and authors tighten drafts faster. Its deep analysis, custom guides, and integrations keep copy consistent and publish-ready.",
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
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "20+ grammar and style reports",
      body: "Check readability, pacing, overused words, sentence variety, sticky sentences, and cliches to tighten drafts and keep readers engaged.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-cyan-500" />,
      title: "Custom style guides and term lists",
      body: "Teams can define preferred spellings, ban words, and brand voice guidance so writers stay consistent across blogs, product copy, and docs.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-teal-500" />,
      title: "In-editor suggestions",
      body: "Use the Chrome extension, Google Docs add-on, Word plugin, or desktop app to accept suggestions without leaving your writing flow.",
    },
    {
      icon: <BarChart2 className="h-5 w-5 text-emerald-600" />,
      title: "Plagiarism and originality checks",
      body: "Optional plagiarism scans ensure content is unique before publishing—useful for agencies, SEO writers, and academic submissions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-slate-600" />,
      title: "Integrations across the stack",
      body: "Works with Chrome, Edge, Safari (beta), Google Docs, MS Word, Scrivener, and most CMS editors to keep editing in-line.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "Team-friendly pricing",
      body: "Annual and lifetime options plus team plans lower total cost of ownership versus per-seat grammar tools, especially for agencies.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased ProWritingAid review for 2025 covering pricing, grammar and style reports, pros & cons, and the best alternatives like Grammarly and QuillBot."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-200 blur-3xl" />
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
                  ProWritingAid’s deep reports and custom guides help marketers, authors, and academics ship clean, consistent writing without overpaying for per-seat AI suites.
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
              ProWritingAid is a grammar and style assistant with detailed reports that go beyond simple typos. It highlights readability, overused words, sentence variety, and pacing so you can deliver clear, on-brand writing.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and content teams rely on it to standardize tone and catch issues before posts go to editors or clients. Authors lean on the fiction-focused checks to tighten dialogue and narrative flow.
            </p>
            <p className="mt-3 text-slate-700">
              Extensions for Chrome, Google Docs, and Word keep suggestions where you write, while team style guides enforce terminology across everything you publish.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Use ProWritingAid if you value deep stylistic checks alongside grammar.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams editing blog posts, newsletters, and landing pages at scale.",
                "Agencies needing consistent brand voice and terminology across clients.",
                "Authors polishing fiction with pacing, dialogue, and style insights.",
                "SEO writers improving readability and sentence variety without losing keywords.",
                "Students and academics checking citations, originality, and clarity.",
                "Product marketers tightening microcopy, in-app text, and support docs.",
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
            <p className="mt-3 text-slate-700">ProWritingAid blends human-friendly reports with integrations so edits stay fast.</p>
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
                  ProWritingAid offers a free plan with limited checks. Premium unlocks full reports, higher word limits, integrations, and plagiarism checking add-ons. Annual and lifetime options reduce cost compared with monthly billing.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most editors choose Premium annual; agencies with stable teams often take the lifetime plan to lock savings.</p>
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
                    <td className="px-4 py-3">Testing grammar and basic style suggestions</td>
                    <td className="px-4 py-3">Limited reports and word counts</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium Monthly</td>
                    <td className="px-4 py-3">Individuals needing full reports occasionally</td>
                    <td className="px-4 py-3">Full reports, integrations, optional plagiarism credits</td>
                    <td className="px-4 py-3">~$30/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium Annual</td>
                    <td className="px-4 py-3">Content teams using it weekly</td>
                    <td className="px-4 py-3">Same features with lower effective rate</td>
                    <td className="px-4 py-3">~$120/year</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Lifetime</td>
                    <td className="px-4 py-3">Agencies and authors planning multi-year use</td>
                    <td className="px-4 py-3">One-time fee, ongoing updates, optional plagiarism credits</td>
                    <td className="px-4 py-3">~$399 one-time</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Start free to see if the reports fit your workflow. Move to Premium annual when you edit weekly, and consider Lifetime if your team or author career will rely on ProWritingAid for the long haul.
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
                  <li>Deeper style and readability reports than most grammar tools.</li>
                  <li>Custom style guides and term lists keep brand language tight.</li>
                  <li>Integrations for Docs, Word, and browsers reduce context switching.</li>
                  <li>Lifetime pricing can be cost-effective for long-term users.</li>
                  <li>Fiction-focused checks help authors with pacing and dialogue.</li>
                  <li>Optional plagiarism checks for publish-ready content.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Interface feels heavier than Grammarly for quick fixes.</li>
                  <li>Paraphrasing and generation are limited—best used with another AI writer.</li>
                  <li>Plagiarism credits cost extra on top of Premium in many cases.</li>
                  <li>Team onboarding requires time to configure guides and terms.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Need lighter grammar checks, stronger paraphrasing, or full AI writing? Review these alternatives, each with a dedicated page for deeper research.
            </p>
            <p className="mt-2 text-slate-700">Every link below points to a full review—no dead ends.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Read the full review to compare fit and pricing.</p>
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
            <p className="text-slate-700">Explore side-by-side comparisons to see where ProWritingAid wins or loses.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Grammarly vs QuillBot</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/prowritingaid-vs-grammarly-vs-quillbot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Grammarly is fastest for grammar fixes, QuillBot for paraphrasing, and ProWritingAid for deep style reports. Check the comparison to see which is best for your writing workflow.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} when you want granular reports and custom guides; pick Grammarly or QuillBot when you need speed or rewrites.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper vs Writesonic</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/prowritingaid-vs-jasper-vs-writesonic">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper and Writesonic are AI writers for net-new content. ProWritingAid refines what you write. Pair them if you need both ideation and detailed editing support.
              </p>
              <p className="mt-2 text-slate-900">Pick {toolName} for editing depth, and Jasper or Writesonic for generating first drafts and campaigns.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you care about style, readability, and brand consistency, ProWritingAid is worth the upgrade. Its reports surface issues cheaper tools miss, and lifetime pricing can beat recurring fees over time.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need quick grammar fixes, Grammarly’s lightweight UI may feel faster. For heavy paraphrasing, add QuillBot. For long-form ideation, pair Jasper or Writesonic and then polish with ProWritingAid.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A top pick for teams and authors who want the deepest editing reports without losing affordability.
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
              Choose ProWritingAid if you want deeper style reports, readability insights, and custom guides that keep writing consistent across channels. It is especially strong for agencies, authors, and SEO teams.
            </p>
            <p>Lean on alternatives like Grammarly or QuillBot for faster fixes and paraphrasing, or Jasper/Writesonic for drafting. Many teams combine them for ideation plus editing.</p>
            <p>ProWritingAid integrates smoothly with browsers and docs, making it a dependable editor you can keep open all day.</p>
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
