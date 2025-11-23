import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, PenSquare, Workflow, BarChart3, Brain, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "CustomGPT.ai";
const slug = "customgpt-ai";
const category = "AI chatbot builder";
const shortPitch =
  "CustomGPT.ai lets teams build secure, retrieval-augmented chatbots on their own data—without code—using OpenAI under the hood and guardrails for accuracy.";
const pricingSummary =
  "Free trial available. Paid plans start around $89/month for a single chatbot and scale with data limits, users, and advanced features like webhooks and multi-source ingestion.";
const officialUrl = "https://customgpt.ai/?fpr=raj81";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/customgpt.ai",
  gradient: "from-indigo-500 via-blue-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.20)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Rytr", slug: "rytr" },
  { name: "QuillBot", slug: "quillbot" },
  { name: "Notion", slug: "notion" },
];

const faqs = [
  {
    q: "What makes CustomGPT.ai different from ChatGPT?",
    a: "CustomGPT.ai lets you bring your own data (docs, PDFs, webpages) and builds a retrieval-augmented chatbot with guardrails. Responses stay grounded in your content with citations.",
  },
  {
    q: "Do I need to code to use CustomGPT.ai?",
    a: "No. You can upload or sync data sources, configure tone/policies, and deploy via embed or share links without writing code. Developers can extend with webhooks and API access.",
  },
  {
    q: "Which data sources are supported?",
    a: "You can ingest PDFs, DOCX, text files, URLs, site maps, and knowledge bases. Higher tiers unlock larger limits and more frequent syncs.",
  },
  {
    q: "Is CustomGPT.ai secure and private?",
    a: "CustomGPT.ai offers encryption, data isolation, and controls to keep proprietary content private. It uses OpenAI models but keeps your data scoped to your workspace.",
  },
  {
    q: "Can I add citations to answers?",
    a: "Yes. Generated answers include source citations and snippets so users can verify accuracy and trust the bot’s responses.",
  },
  {
    q: "Does CustomGPT.ai support multiple bots?",
    a: "Paid plans allow multiple chatbots with separate datasets and styling. Tier limits vary; higher plans expand data and user limits.",
  },
  {
    q: "Can I embed the bot on my site?",
    a: "Yes. Share via public link or embed widget; use API/webhooks to pipe conversations into your stack or trigger backend actions.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "You can use webhooks and API endpoints to connect with CRMs, help desks, or automation tools like Zapier/Make for downstream workflows.",
  },
];

function CustomGPTPage() {
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
        "CustomGPT.ai helps teams ship custom, retrieval-augmented chatbots on their own data without code. It emphasizes citations, privacy, and easy deployment across sites and support flows.",
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
      icon: <Brain className="h-5 w-5 text-indigo-500" />,
      title: "Retrieval-augmented chatbots",
      body: "Ground responses in your documents and URLs with citations so users can trust the answers.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
      title: "No-code builder",
      body: "Upload content, set policies, and publish chatbots without writing code. Customize greetings, tone, and allowed behaviors.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-amber-500" />,
      title: "Embeds, links, and API",
      body: "Share bots via link, embed on your site, or connect with webhooks/API to route conversations into your stack.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Privacy & controls",
      body: "Workspace isolation, encryption, and guardrails prevent leakage of proprietary data; admins control access and retention.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Multi-source ingestion",
      body: "Sync PDFs, docs, text files, URLs, and site maps; tiered limits let you expand datasets as you grow.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-500" />,
      title: "Analytics & feedback",
      body: "Track queries, satisfaction, and improvement opportunities. Use feedback to refine content and prompts.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on CustomGPT.ai review covering pricing, features, pros & cons, alternatives, and whether its no-code, retrieval-augmented chatbots fit your stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  Build trusted chatbots on your own data with citations and guardrails, deploy anywhere, and keep sensitive knowledge private and compliant.
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
              {toolName} is an {category.toLowerCase()} platform that transforms your content into an AI chatbot with retrieval augmentation and citations. It’s aimed at teams that want secure, branded bots for support,
              training, and lead capture—without building from scratch.
            </p>
            <p className="mt-3 text-slate-700">
              You can upload docs or connect URLs, configure tone and policies, and publish an embedded or shareable chatbot. Admins maintain control over data, access, and retention while users get accurate, cited answers.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to generic chat, CustomGPT.ai keeps answers grounded, helping reduce hallucinations and giving stakeholders confidence in AI-assisted workflows.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need trusted, data-grounded chatbots without heavy engineering.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams deploying bots that answer from docs and KBs with citations.",
                "Marketing and sales teams embedding bots for product FAQs and lead capture.",
                "RevOps/CS teams building onboarding and training assistants with trusted answers.",
                "Founders and agencies rolling out client-specific bots quickly without code.",
                "Product teams prototyping AI help experiences before deeper custom builds.",
                "Teams needing privacy and control over proprietary data while using OpenAI models.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">CustomGPT.ai focuses on trusted, deployable chatbots backed by your own content.</p>
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
                  Pricing scales by number of chatbots, data size, and users. The starter tier supports a single chatbot; higher plans add more sources, larger limits, webhooks, and team features. Trials let you validate fit
                  before rolling out widely.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the entry plan to launch one chatbot; upgrade when you need more data, more bots, or integrations.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">First chatbot launches</td>
                    <td className="px-4 py-3">Single bot, base data limits, embeds/links</td>
                    <td className="px-4 py-3">~$89/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Teams with multiple bots or sources</td>
                    <td className="px-4 py-3">More data, more bots, API/webhooks, teams</td>
                    <td className="px-4 py-3">$149–$299/month (varies by limits)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with compliance needs</td>
                    <td className="px-4 py-3">Highest limits, SSO/SCIM, custom onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Keep data hygiene tight to control costs and quality. If you need broader LLM flexibility or self-hosting, compare vector DB + open-source stacks. For no-code speed with guardrails, CustomGPT.ai is efficient.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No-code chatbot builder with retrieval and citations.</li>
                  <li>Embeds, links, API, and webhooks for flexible deployment.</li>
                  <li>Privacy controls and workspace isolation for proprietary data.</li>
                  <li>Multi-source ingestion for docs, PDFs, and URLs.</li>
                  <li>Analytics and feedback loops to improve responses.</li>
                  <li>Branded experiences with tone/style controls.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing steps up with data size and bot count.</li>
                  <li>LLM model choice is fixed; power users may want more control.</li>
                  <li>Advanced workflow automation still needs API/webhooks or Zapier/Make.</li>
                  <li>Heavy multimedia content may need preprocessing before ingest.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you prefer broader AI writing tools or different pricing, consider these options. Each links to a detailed tool page.
            </p>
            <p className="mt-2 text-slate-700">They vary on editing depth, marketing features, and workflow automation.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">AI assistant alternative.</p>
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
            <p className="text-slate-700">Here’s how CustomGPT.ai compares to popular AI writing and chatbot tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI vs Writesonic</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/customgpt-ai-vs-jasper-ai-vs-writesonic">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper and Writesonic focus on marketing copy and long-form writing. CustomGPT.ai focuses on data-grounded chatbots with citations and embeds. Pair them if you need both content generation and trusted chat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Rytr vs QuillBot</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/customgpt-ai-vs-rytr-vs-quillbot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Rytr and QuillBot are lightweight writing/paraphrasing tools. CustomGPT.ai is better for knowledge-grounded Q&A and support experiences. Choose based on whether you need copywriting or trustworthy chat on your
                data.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a no-code way to ship chatbots grounded in your own knowledge with citations and privacy controls, {toolName} is a strong pick. It’s fast to launch, flexible to embed, and safer than generic chat
              for proprietary content.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy customization, multi-LLM control, or self-hosting, you may consider building with vector databases and open-source stacks. For most marketing, support, and CS teams, CustomGPT.ai hits the
              speed and guardrail sweet spot.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> CustomGPT.ai is worth it for teams wanting trusted, branded chatbots on their own data without building infrastructure.
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
              Choose CustomGPT.ai if you want to turn your content into a trustworthy chatbot with citations, embeds, and admin controls—without coding. It’s great for support, onboarding, and product FAQ experiences.
            </p>
            <p>
              Consider Jasper or Writesonic for marketing copy, and DIY stacks for deep customization. Many teams pair CustomGPT.ai with a copywriting AI to cover both chat and content.
            </p>
            <p>{toolName} fits neatly alongside CRMs, help desks, and automation tools via webhooks and API.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default CustomGPTPage;
