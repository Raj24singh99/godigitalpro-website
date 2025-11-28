import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Moonbeam AI";
const slug = "moonbeam-ai";
const category = "AI Writing & Long-form";
const shortPitch = "Moonbeam AI is an AI writing assistant focused on long-form drafts, outlines, and rewriting with tone controls and research aids.";
const pricingSummary = "Subscription plans with credit limits and features. Higher tiers add more words, advanced modes, and collaboration options.";
const officialUrl = "https://www.gomoonbeam.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/gomoonbeam.com",
  gradient: "from-indigo-500 via-purple-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Sudowrite", slug: "sudowrite" },
  { name: "KoalaWriter", slug: "koalawriter" },
  { name: "HyperWrite", slug: "hyperwrite" },
];

const faqs = [
  { q: "What is Moonbeam AI?", a: "Moonbeam AI is an AI writing tool focused on long-form content, outlines, and rewriting with tone and style controls." },
  { q: "Who is it for?", a: "Writers, bloggers, and teams creating articles, essays, or scripts who want AI assistance for drafts and rewrites." },
  { q: "Does it replace editing?", a: "No. Human editing for facts, sources, and brand voice remains necessary." },
  { q: "How is pricing structured?", a: "Subscription tiers include word/credit limits and features; higher tiers add more volume and modes." },
  { q: "Are there templates?", a: "Yes. Outlines, blog posts, and rewriting templates are available to speed up drafting." },
  { q: "Does it support citations?", a: "Citation support is limited; users should add sources and fact-check manually." },
  { q: "Can teams collaborate?", a: "Team-oriented features exist on higher tiers; check plan details for collaboration options." },
  { q: "Does it integrate with CMS?", a: "Exports and copy/paste workflows are common; check for direct integrations if needed." },
];

function MoonbeamToolPage() {
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
        "Moonbeam AI focuses on long-form writing with outlines, rewriting, and tone controls. It suits writers who want AI assistance but still plan to edit for accuracy and voice.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Outlines & drafts", body: "Generate structured outlines and first drafts for articles, essays, and scripts." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Rewriting & tone", body: "Rewrite passages with different tones and clarity while retaining meaning." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Templates", body: "Use templates for blogs, long-form posts, and research-style drafts to speed up starts." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "AI guidance", body: "Prompts and style suggestions help keep writing on track and aligned to the brief." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Exports", body: "Export drafts to docs or copy/paste into CMS workflows." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Human editing", body: "Reminders to fact-check, add sources, and ensure brand voice for publication." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Moonbeam AI review: pricing, features, pros & cons, and alternatives so you can decide if it fits your long-form writing workflow."
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} speeds up long-form drafting and rewriting. Use it for structured starts; add your expertise, sources, and edits before publishing.
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
              {toolName} is an AI writing assistant built for long-form content. It generates outlines, drafts, and rewrites with tone controls and templates for articles and essays.
            </p>
            <p className="mt-3 text-slate-700">
              It is best used as a drafting partner; human editing for accuracy, sources, and brand voice remains essential before publishing.
            </p>
            <p className="mt-3 text-slate-700">Pair it with research tools and editorial review to maintain quality and credibility.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for writers and teams producing long-form content who want faster drafts.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Bloggers and content marketers creating articles regularly.",
                "Students or researchers drafting essays and needing rewrites.",
                "Teams producing scripts and long-form narratives.",
                "Editors seeking outlines and tone-adjusted rewrites.",
                "Agencies producing volume drafts for clients.",
                "Writers looking to overcome blank-page issues quickly.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on outlines, long-form drafts, rewriting, and tone guidance to speed up writing without replacing editing.
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
                  {toolName} offers subscription tiers with credit limits and features. Higher tiers provide more words, advanced modes, and collaboration. Match your tier to monthly output and team needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a mid-tier to cover drafts; upgrade if you hit word limits or need team features.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Light drafting</td>
                    <td className="px-4 py-3">Core writing modes, limited credits</td>
                    <td className="px-4 py-3">Good for testing quality</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Regular writers</td>
                    <td className="px-4 py-3">More credits, templates, tone controls</td>
                    <td className="px-4 py-3">Fits most content teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Business</td>
                    <td className="px-4 py-3">Collaborative teams</td>
                    <td className="px-4 py-3">Highest credits, team features, priority support</td>
                    <td className="px-4 py-3">Best for agencies and large teams</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track word usage and editing time saved. Budget for human editing and fact-checking—AI drafts are a starting point, not a final product.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong for outlines and long-form drafting.</li>
                  <li>Rewriting and tone controls help refine style.</li>
                  <li>Templates reduce blank-page friction.</li>
                  <li>Exports make handoff to docs or CMS easy.</li>
                  <li>Credit-based pricing keeps entry cost manageable.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires human editing for facts and citations.</li>
                  <li>Credit costs can rise for heavy users.</li>
                  <li>Less suited for short-form social posts vs dedicated tools.</li>
                  <li>CMS integrations may rely on exports/copy-paste.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other AI writing platforms to balance long-form strength, pricing, and collaboration.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other AI writers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/jasper-ai">
                  View Jasper
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and templates across formats. {toolName} focuses on long-form drafts and rewriting. Choose {toolName} for deep articles; Jasper for multi-format marketing content.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Writesonic</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/writesonic">
                  View Writesonic
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Writesonic covers many templates including ads and social. {toolName} is oriented to long-form and rewriting. Choose based on whether you need breadth of formats or depth for articles.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you produce long-form content and want faster outlines and drafts with tone controls, while keeping human editing in the loop.
            </p>
            <p className="mt-3 text-slate-700">
              Monitor credit usage and build an editorial process for fact-checking and brand voice. Pair with SEO or research tools as needed.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Good long-form assistant; rely on human editors for quality, accuracy, and differentiation.
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
            <p>Use {toolName} to accelerate long-form drafts and rewrites with outline and tone support.</p>
            <p>
              Combine AI drafts with human editing, sources, and brand voice to create publish-ready content; upgrade if your team needs more credits or collaboration.
            </p>
            <p>{toolName} keeps writing moving; humans keep it accurate, differentiated, and on-brand.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MoonbeamToolPage;
