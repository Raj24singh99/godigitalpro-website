import React, { useState } from "react";
import { Sparkles, ShieldCheck, PlugZap, Layers3, ClipboardList, Crown, ArrowLeft, ChevronDown, Brain, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Writesonic";
const slug = "writesonic";
const category = "AI Writing Platform";
const shortPitch =
  "Writesonic is an AI copywriting suite for marketers, founders, and agencies who need to spin up on-brand landing pages, ads, emails, and SEO content fast.";
const pricingSummary =
  "Freemium with 10,000 premium words/month. Small Team plan starts around $19/month (annual) for GPT-4. The Business and Enterprise tiers unlock factual AI research, bulk workflows, and team seats.";
const officialUrl = "https://writesonic.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/writesonic.com",
  gradient: "from-sky-500 via-indigo-500 to-violet-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai", isComparison: true },
  { name: "Rytr", slug: "rytr", isComparison: true },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Surfer SEO", slug: "surfer-seo" },
  { name: "Grammarly", slug: "grammarly" },
];

const faqs = [
  {
    q: "Is Writesonic free?",
    a: "Yes. Writesonic’s free tier gives you up to 10,000 premium words each month so you can test templates, Chatsonic, and landing page builders. Paid plans unlock higher limits, GPT-4 quality, and collaboration.",
  },
  {
    q: "Which Writesonic plan should agencies choose?",
    a: "Agencies typically start on the Business plan for unlimited brand voices, factual AI research, and priority support. Teams needing SSO, granular seat control, or data-retention guarantees can upgrade to Enterprise.",
  },
  {
    q: "Does Writesonic support GPT-4 or other models?",
    a: "Yes. Writesonic lets you toggle between GPT-3.5, GPT-4, and its proprietary GPT-4 Turbo (called GPT-4o) for long-form workflows. You can also import your own APIs with the custom model option.",
  },
  {
    q: "Can Writesonic help with SEO?",
    a: "Writesonic includes an SEO article writer, Surfer SEO integration, keyword research, and outline builders. It generates optimized drafts that map to target keywords and search intent.",
  },
  {
    q: "How is Chatsonic different from ChatGPT?",
    a: "Chatsonic combines GPT-4 quality, web search, image generation, and voice commands. It remembers brand guidelines, pulls live data, and can publish directly to WordPress or social tools.",
  },
  {
    q: "Does Writesonic integrate with Zapier or WordPress?",
    a: "Yes. There are native integrations for Zapier, WordPress, Shopify, Notion, and browser extensions so you can push copy directly to your workflows.",
  },
  {
    q: "Is Writesonic secure for enterprise teams?",
    a: "Writesonic offers data encryption, SOC 2-ready processes, SSO, audit logs, and custom data retention on Enterprise plans. You can also host models in a private environment for compliance-heavy clients.",
  },
  {
    q: "Can Writesonic replace human writers?",
    a: "Writesonic accelerates drafting, ideation, and repurposing, but you still need editors for accuracy, voice, and compliance. Treat it as a co-pilot rather than a full replacement.",
  },
];

function WritesonicToolPage() {
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
        "Writesonic delivers fast AI copy for ads, emails, product pages, and SEO articles. Marketing teams use it for Chatsonic (GPT-4), brand voices, landing page builders, and integrations that publish content directly to CMS or ad platforms.",
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
      title: "Chatsonic (GPT-4) with live data",
      body: "Chatsonic combines GPT-4 with web search, voice commands, and brand memory so marketers can ideate campaigns, answer briefs, or summarize research instantly.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "100+ templates for every funnel stage",
      body: "Generate landing pages, Google/Facebook ads, ecommerce descriptions, press releases, and Amazon listings with prompts tailored to each channel.",
    },
    {
      icon: <PlugZap className="h-5 w-5 text-sky-500" />,
      title: "Integrations & publishing",
      body: "Push drafts directly to WordPress, Shopify, Zapier, or HubSpot. Use browser extensions to write inside Gmail, LinkedIn, or Google Docs.",
    },
    {
      icon: <Layers3 className="h-5 w-5 text-emerald-500" />,
      title: "Brand voice & knowledge base",
      body: "Upload style guides, product docs, and brand snippets so Writesonic tailors tone and factual accuracy across every asset.",
    },
    {
      icon: <Brain className="h-5 w-5 text-purple-500" />,
      title: "AI art & video scripts",
      body: "Sonic Editor, Photosonic, and Audiosonic generate images, video scripts, and voiceovers enabling full-funnel creative from one tool.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Optimization & collaboration",
      body: "Outline planners, SEO scoring, approvals, and seat management help agencies manage multiple clients with shared credits.",
    },
  ];

  const pricingTable = [
    { plan: "Free", best: "Creators testing AI workflows", limits: "10k premium words/month, GPT-3.5, limited templates", price: "$0" },
    { plan: "Small Team", best: "Solo marketers & startups", limits: "GPT-4/4o, brand voice, bulk processing, 1 seat", price: "~$19/month (annual)" },
    { plan: "Business", best: "GTM teams & agencies", limits: "Higher quality, factual AI research, up to 10 seats, priority support", price: "From ~$19/user/month" },
    { plan: "Enterprise", best: "Large content ops", limits: "Custom limits, SSO, SOC 2, private model hosting, onboarding", price: "Custom" },
  ];

  const pros = [
    "Fast GPT-4 access with templates for every go-to-market channel.",
    "Chatsonic blends live data, voices, and image generation.",
    "Brand voice + knowledge base keep outputs on-message.",
    "Direct publishing to WordPress, Shopify, social, and Zapier.",
    "Bulk generators and factual AI reduce editing time for SEO teams.",
    "Transparent pricing tiers with generous free plan to test.",
  ];

  const cons = [
    "Credits can burn quickly on GPT-4 image-heavy workflows.",
    "Quality still requires human editing for compliance-heavy brands.",
    "Interface feels busy with 100+ templates for new users.",
    "Enterprise security features mostly available on higher tiers.",
  ];

  const useCases = [
    "Growth marketers drafting landing pages + PPC ads rapidly.",
    "Content teams scaling SEO articles with Surfer integration.",
    "Agencies repurposing webinars and podcasts into blogs + snippets.",
    "Ecommerce teams writing product descriptions and emails at scale.",
    "Customer success teams building help docs or macros.",
    "Founders needing quick pitch decks, cold outreach, or investor updates.",
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Writesonic review for 2025 covering pricing, GPT-4 features, templates, pros & cons, and how it compares to Jasper AI, Rytr, and QuillBot."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/35 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute -left-10 top-12 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/40">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Writesonic combines GPT-4, brand voices, and publishing workflows so marketers can ideate, draft, and ship multi-channel copy in minutes without waiting on contractors.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Writesonic suits marketing teams that crave fast drafts, collaboration, and on-brand outputs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {useCases.map((item) => (
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
            <p className="mt-3 text-slate-700">These capabilities differentiate Writesonic from other AI copy tools.</p>
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
                  Pricing is based on words, model quality, and seats. Free gives you a taste of GPT-3.5. Small Team unlocks GPT-4/4o and brand voices. Business/Enterprise expand seats, quality, and compliance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to validate quality, then move to Small Team when you need GPT-4 + brand voice. Agencies upgrade to Business for seats + support.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watching usage is essential—GPT-4 stories, image/video generations, and Team seats can consume credits quickly. Use bulk workflows and knowledge base training to reduce rewrites.
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
                  {pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Evaluate these AI writing tools if you need deeper automation, cheaper pricing, or different tones. Each link jumps to another GoDigitalPro review.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Detailed review on GoDigitalPro."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Writesonic compares to the most-requested AI writing rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI vs Rytr</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/writesonic-vs-jasper-vs-rytr">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper leads on enterprise workflows and campaign briefs, Writesonic balances GPT-4 speed with pricing, and Rytr is the budget pick. Read the full comparison for scoring, pricing, and content examples.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI vs QuillBot</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/writesonic-vs-jasper-vs-quillbot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                QuillBot excels at rewriting and paraphrasing while Writesonic and Jasper handle net-new copy. Use this comparison to decide when to mix drafting plus editing automation.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Writesonic is worth it if you need GPT-4 quality plus workflow glue for blogs, ads, and product copy. Agencies save time with brand voices, approvals, and integrations. Solo creators love the free tier and
              Chatsonic for ideation.
            </p>
            <p className="mt-3 text-slate-700">
              Choose Jasper or Copy.ai if you want deeper campaign brief management. Choose Rytr if low price beats everything. But for a balanced mix of templates, GPT-4 access, and publishing, Writesonic is a strong pick.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Writesonic is a top-tier AI writing platform for teams who want to ship high-quality copy quickly without hiring another content squad.
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
            <p>Use Writesonic if you want a creative copilot that drafts landing pages, ads, and SEO content with GPT-4 quality plus publishing workflows.</p>
            <p>Consider Jasper for enterprise content ops, QuillBot for rewriting, or Surfer SEO for deep optimization. Many teams pair Writesonic with these for ideation plus refinement.</p>
            <p>Writesonic fits well in modern marketing stacks because it connects to WordPress, Shopify, Zapier, and knowledge bases without custom code.</p>
            <p className="font-semibold text-slate-900">
              Ready to test it? <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
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

export default WritesonicToolPage;
        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              Writesonic is a {category.toLowerCase()} that ships AI templates, Chatsonic, and publishing workflows to help go-to-market teams create content across the funnel. Instead of juggling docs and freelancers, you
              can brief the AI, generate drafts, and push them live in one interface.
            </p>
            <p className="mt-3 text-slate-700">
              The platform covers landing pages, ads, blog posts, product descriptions, social captions, and even podcast/video scripts. Agencies use it to standardize brand guidelines, reduce turnaround times, and allocate
              credits across clients.
            </p>
            <p className="mt-3 text-slate-700">With GPT-4 quality, knowledge base training, and direct publishing, Writesonic acts like a creative ops teammate rather than a basic text generator.</p>
          </div>
        </section>
