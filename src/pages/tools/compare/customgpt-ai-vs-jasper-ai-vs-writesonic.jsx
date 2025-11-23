import React from "react";
import {
  Sparkles,
  Crown,
  Gauge,
  Layers,
  ArrowLeft,
  BarChart3,
  Shield,
  Zap,
  Brain,
  Wand2,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";
import { Link } from "react-router-dom";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/customgpt-ai-vs-jasper-ai-vs-writesonic");
const primaryKeyword = "customgpt ai vs jasper ai vs writesonic";

const brandMeta = {
  customgpt: {
    gradient: "from-indigo-600 via-blue-600 to-slate-800",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/customgpt.ai",
  },
  jasper: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/jasper.ai",
  },
  writesonic: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/writesonic.com",
  },
};

const contenders = [
  {
    key: "customgpt",
    name: "CustomGPT.ai",
    blurb: "No-code RAG chatbots grounded in your own data, with citations and embeds.",
    url: "https://customgpt.ai/",
  },
  {
    key: "jasper",
    name: "Jasper AI",
    blurb: "Brand voice–aware AI writing assistant for marketing teams and campaigns.",
    url: "https://www.jasper.ai/",
  },
  {
    key: "writesonic",
    name: "Writesonic",
    blurb: "Affordable AI writer + chatbot with broad templates and channel coverage.",
    url: "https://writesonic.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    customgpt: "Data-grounded chatbots with citations from your content.",
    jasper: "Marketing copy, campaigns, and brand voice at scale.",
    writesonic: "Affordable AI writing and chat across many templates.",
  },
  {
    label: "Core strength",
    customgpt: "No-code retrieval-augmented chatbots on your documents, sites, and knowledge base.",
    jasper: "Brand voice, frameworks, and structured marketing templates for teams.",
    writesonic: "Wide set of content templates and formats at a friendly price point.",
  },
  {
    label: "Trust & citations",
    customgpt: "Built-in citations pointing back to your source docs/URLs for each answer.",
    jasper: "No native citations; geared toward creative copy and idea generation.",
    writesonic: "No strict citations; oriented around rapid content drafting.",
  },
  {
    label: "Embeds & deployment",
    customgpt: "Embeddable widgets, share links, API, and webhooks for custom workflows.",
    jasper: "Doc exports, browser extension, and integrations with marketing tools.",
    writesonic: "Exports, Sonic Chat, and simple site/chatbot embeds depending on tier.",
  },
  {
    label: "Pricing style",
    customgpt: "Plans shaped around chatbots, document limits, and usage.",
    jasper: "Per-seat pricing with word limits and Brand Voice features on higher tiers.",
    writesonic: "Per-seat or per-workspace tiers with word/token limits and add-ons.",
  },
  {
    label: "Enterprise controls",
    customgpt: "Workspace controls, privacy options, and SSO/SAML on higher tiers.",
    jasper: "SSO, workspaces, and brand governance on Business/Enterprise.",
    writesonic: "Security and governance options vary by tier; more SMB-focused.",
  },
  {
    label: "Multichannel support",
    customgpt: "Strong on web/app chat; use API for omnichannel experiences.",
    jasper: "Best for written marketing assets (ads, emails, landing pages).",
    writesonic: "Supports blogs, ads, socials, and chat across many formats.",
  },
];

const scoreboard = [
  { label: "Data-grounded answers", customgpt: 9.4, jasper: 7.2, writesonic: 7.0 },
  { label: "Marketing copy depth", customgpt: 7.3, jasper: 9.2, writesonic: 8.6 },
  { label: "Ease of launch", customgpt: 8.8, jasper: 8.6, writesonic: 8.5 },
  { label: "Value for price", customgpt: 8.5, jasper: 8.0, writesonic: 8.8 },
  { label: "Security & control", customgpt: 9.0, jasper: 8.3, writesonic: 8.0 },
];

const quickPicks = [
  {
    label: "Best for trusted, data-grounded chat",
    tool: "CustomGPT.ai",
    reason: "Retrieval-augmented responses from your sources with citations and admin controls.",
  },
  {
    label: "Best for brand voice marketing teams",
    tool: "Jasper AI",
    reason: "Brand Voice, campaigns, briefs, and collaboration built around marketing outputs.",
  },
  {
    label: "Best for budget-conscious creators",
    tool: "Writesonic",
    reason: "Wide template library and Sonic Chat at lower price points.",
  },
];

const faqs = [
  {
    q: `Which wins overall in ${YEAR}?`,
    a: "CustomGPT.ai wins if you need retrieval-augmented chatbots with citations and governance. Jasper wins for brand voice marketing copy and structured campaigns. Writesonic wins on price-to-feature balance when you want broad writing templates and chat without strict citation requirements.",
  },
  {
    q: "Who should pick CustomGPT.ai?",
    a: "Choose CustomGPT.ai if you need AI agents that answer strictly from your documents, websites, and knowledge bases—with citations, embeds, and workspace controls. It fits support teams, customer portals, and internal knowledge assistants.",
  },
  {
    q: "Who should pick Jasper?",
    a: "Pick Jasper if your core use case is marketing copy: ad variations, landing page copy, email flows, briefs, and brand-aligned content. Jasper’s Brand Voice and campaign tools are tuned for marketing departments and agencies.",
  },
  {
    q: "Who should pick Writesonic?",
    a: "Pick Writesonic if you want an all-purpose AI writer and chatbot with many templates (blogs, ads, social posts) at a lower price point. It’s strong for small teams and freelancers who need volume more than governance or citations.",
  },
  {
    q: "Do any of them fully replace human review?",
    a: "No. All three tools should be treated as accelerators, not full replacements. For regulated, brand-sensitive, or public-facing content, human review and approval flows are still essential.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const avg = (toolKey) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[toolKey] || 0), 0) / scoreboard.length
  ).toFixed(1);

const averages = {
  customgpt: avg("customgpt"),
  jasper: avg("jasper"),
  writesonic: avg("writesonic"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerName =
  overallWinnerKey === "customgpt"
    ? "CustomGPT.ai"
    : overallWinnerKey === "jasper"
    ? "Jasper AI"
    : "Writesonic";

const pricingTable = [
  {
    plan: "CustomGPT.ai (Business tiers)",
    monthly: "Varies by bots & usage",
    model: "Per-workspace with chatbot and document limits; usage-based elements on higher tiers.",
    bestFor: "Teams deploying multiple data-grounded chatbots with citations and embeds.",
    notes:
      "Expect pricing to track number of chatbots, indexed sources, and traffic—higher tiers add SSO, advanced privacy, and governance.",
  },
  {
    plan: "Jasper AI (Creator / Teams / Business)",
    monthly: "Per-seat with word limits",
    model: "Seats + Brand Voice + campaign capabilities; custom pricing for Business.",
    bestFor: "Marketing orgs and agencies creating large volumes of on-brand copy.",
    notes:
      "Effective when you have multiple marketers collaborating on briefs, campaigns, and brand-controlled outputs.",
  },
  {
    plan: "Writesonic (Small Team / Business)",
    monthly: "Lower entry price per user",
    model: "Seats and word/token allowances across templates and Sonic Chat.",
    bestFor: "SMBs, creators, and freelancers needing general-purpose AI writing.",
    notes:
      "Good for high-volume drafting without heavy governance; watch word/token metering if you scale usage quickly.",
  },
];

const prosCons = {
  customgpt: {
    pros: [
      "Retrieval-augmented generation (RAG) grounded in your own documents, sites, and data sources.",
      "Built-in citations and source links increase trust and make answers auditable.",
      "No-code/low-code chatbot builder with widgets, share links, API, and webhooks.",
      "Workspace controls and higher-tier security features (SSO/SAML, privacy options).",
    ],
    cons: [
      "Less focused on marketing templates and creative writing than Jasper/Writesonic.",
      "Requires organized data sources for best results; messy content can produce noisy outputs.",
      "Pricing can scale with number of chatbots and usage, which needs monitoring at high volume.",
    ],
  },
  jasper: {
    pros: [
      "Deep library of marketing templates spanning ads, emails, long-form content, and assets.",
      "Brand Voice and style controls help keep multi-writer teams consistent.",
      "Campaign views and collaboration features tuned for marketing workflows.",
      "Integrations and extensions allow Jasper to live in existing writer workflows.",
    ],
    cons: [
      "No strict citations and limited data-grounding; best used with careful review.",
      "Priced for marketing teams, which can feel high for solo creators or simple use cases.",
      "Less ideal for support or knowledge-base chat compared with a RAG-first tool.",
    ],
  },
  writesonic: {
    pros: [
      "Broad set of templates covering blogs, ads, social content, and more.",
      "Sonic Chat provides conversational interface alongside template-based writing.",
      "Generally more affordable than many marketing-focused competitors.",
      "Good entry point for small businesses and creators exploring AI writing.",
    ],
    cons: [
      "Fewer deep enterprise governance features than CustomGPT.ai or top marketing suites.",
      "No native citation-first workflow; content requires careful review for accuracy.",
      "Template breadth can feel overwhelming without clear processes or prompts.",
    ],
  },
};

const featureBullets = {
  grounding: [
    "CustomGPT.ai: Designed from the ground up for retrieval-augmented chat on your documents, websites, and structured data. Answers are anchored to your content and can include citations.",
    "Jasper AI: Uses general models and internal features like Brand Voice, but does not specialize in strict retrieval from your private corpus.",
    "Writesonic: Focuses on generic models and templates for drafting content quickly, not on structured retrieval from your own data.",
  ],
  workflows: [
    "CustomGPT.ai: Common workflows include customer support chatbots, internal knowledge assistants, partner portals, and documentation Q&A widgets.",
    "Jasper AI: Common workflows include ad ideation, landing page copy, email sequences, social calendars, and blog drafting for campaigns.",
    "Writesonic: Popular for creators and SMBs drafting blog posts, social posts, ad copy, and product descriptions across many channels.",
  ],
  governance: [
    "CustomGPT.ai: Citations, workspace controls, and privacy options support teams in regulated or high-trust environments.",
    "Jasper AI: Governance is oriented around brand consistency (Brand Voice, templates, approvals) and team collaboration.",
    "Writesonic: Governance features are lighter; best for smaller teams where manual review is the primary safeguard.",
  ],
};

const useCases = [
  {
    title: "Customer support and help center chatbots",
    winner: "CustomGPT.ai",
    reasoning:
      "Its retrieval-augmented design, citations, and embeds make it ideal for answering from FAQs, docs, and knowledge bases while keeping responses auditable.",
  },
  {
    title: "Central marketing team producing campaigns",
    winner: "Jasper AI",
    reasoning:
      "Brand Voice, templates, and campaign tools give marketers a shared system for generating and refining on-brand copy across channels.",
  },
  {
    title: "Freelancers and creators producing lots of content",
    winner: "Writesonic",
    reasoning:
      "Lower price points and broad templates help solo operators draft a high volume of content without committing to heavier enterprise suites.",
  },
  {
    title: "Internal knowledge assistants for operations and sales",
    winner: "CustomGPT.ai",
    reasoning:
      "The ability to plug in internal documents and keep responses grounded in current policies and enablement assets is a strong fit.",
  },
];

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("custom")
    ? "customgpt"
    : name.toLowerCase().includes("jasper")
    ? "jasper"
    : name.toLowerCase().includes("write")
    ? "writesonic"
    : name.toLowerCase();
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img
            src={meta.logo}
            alt={`${name} logo`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

const getRowWinnerName = (row) => {
  const max = Math.max(row.customgpt, row.jasper, row.writesonic);
  if (row.customgpt === row.jasper && row.jasper === row.writesonic) return "Tie";
  if (max === row.customgpt) return "CustomGPT.ai";
  if (max === row.jasper) return "Jasper AI";
  return "Writesonic";
};

export default function CustomGptVsJasperVsWritesonicPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`CustomGPT.ai vs Jasper AI vs Writesonic (${YEAR}) – Which AI tool fits?`}
        description="Deep comparison of CustomGPT.ai, Jasper, and Writesonic across data-grounded chatbots, marketing copy, pricing, governance, and best-fit teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, customgpt review, jasper review, writesonic review, ai tool comparison, rag chatbot, ai marketing tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          AI tools & content platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          CustomGPT.ai vs Jasper AI vs Writesonic ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>CustomGPT.ai</strong> focuses on retrieval-augmented chatbots that
          answer from your own data with citations. <strong>Jasper AI</strong> is
          built for brand voice marketing copy. <strong>Writesonic</strong> offers
          affordable AI writing and Sonic Chat across many templates. This detailed
          comparison walks through strengths, trade-offs, pricing, and real-world
          use-cases so you can pick the right AI stack for your team.
        </p>

        {/* Quick verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-900">
              <Sparkles className="h-5 w-5" />
              Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>CustomGPT.ai</strong> if your priority is trusted,
              data-grounded chat with citations on top of your docs and sites. Choose{" "}
              <strong>Jasper AI</strong> if you run marketing campaigns and need
              brand-aligned copy across channels. Choose <strong>Writesonic</strong>{" "}
              if you want broad templates and chat capabilities at lower starting
              prices.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {quickPicks.map((pick) => (
                <li key={pick.label}>
                  <span className="font-semibold">{pick.label}:</span>{" "}
                  <span className="font-semibold text-slate-900">
                    {pick.tool}
                  </span>{" "}
                  – {pick.reason}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-indigo-900">
              <Crown className="h-4 w-4 text-indigo-600" />
              Overall scoreboard winner: {overallWinnerName}
              <span className="text-xs font-medium text-slate-700">
                (avg:{" "}
                {overallWinnerKey === "customgpt"
                  ? averages.customgpt
                  : overallWinnerKey === "jasper"
                  ? averages.jasper
                  : averages.writesonic}
                /10)
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-indigo-600" />
              Trust & governance
            </div>
            <p className="text-sm text-slate-700">
              <strong>CustomGPT.ai</strong> leans into grounded answers with
              citations. If you care about where each answer came from, it is the
              most natural fit. <strong>Jasper</strong> and <strong>Writesonic</strong>{" "}
              excel for ideation and copy, but you will rely more on human review for
              factual accuracy.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Wand2 className="h-5 w-5 text-amber-500" />
              Creative marketing output
            </div>
            <p className="text-sm text-slate-700">
              <strong>Jasper AI</strong> is the clear winner for structured
              marketing workflows—brand voice, campaigns, briefs, and multi-channel
              assets. Writesonic follows closely for smaller teams on a budget.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Brain className="h-5 w-5 text-emerald-600" />
              General-purpose writing & chat
            </div>
            <p className="text-sm text-slate-700">
              <strong>Writesonic</strong> offers strong coverage for blogs, ads, and
              Sonic Chat at affordable tiers, making it attractive for creators and
              SMBs testing AI writing at scale.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => {
            const meta = brandMeta[tool.key];
            return (
              <a
                key={tool.key}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                  meta?.gradient || "from-slate-500 to-slate-800"
                } p-5 shadow-md`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                  <div className="pointer-events-none absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-white" />
                </div>
                <div className="relative flex items-start justify-between">
                  <LogoBadge name={tool.name} />
                  <span className="rounded-full bg-black/25 px-2 py-1 text-xs font-semibold text-white/90">
                    AI contender
                  </span>
                </div>
                <p className="relative mt-3 text-sm font-medium text-white/90">
                  {tool.blurb}
                </p>
              </a>
            );
          })}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" />
            Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-700">
            At a glance, this table shows where each tool leans—data-grounded chat,
            marketing copy, or broad writing templates—and how they differ on pricing
            and deployment.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">CustomGPT.ai</th>
                  <th className="px-4 py-3">Jasper AI</th>
                  <th className="px-4 py-3">Writesonic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="align-top odd:bg-white even:bg-slate-50/40">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.customgpt}</td>
                    <td className="px-4 py-3 text-slate-700">{row.jasper}</td>
                    <td className="px-4 py-3 text-slate-700">{row.writesonic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <p className="text-sm text-slate-700">
            Scores are directional and blend hands-on experience with how each tool
            positions itself. The highest performer in each row is highlighted, and
            the final row shows the overall average.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">CustomGPT.ai</th>
                  <th className="px-4 py-3">Jasper AI</th>
                  <th className="px-4 py-3">Writesonic</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerName = getRowWinnerName(row);
                  const max = Math.max(row.customgpt, row.jasper, row.writesonic);

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          max === row.customgpt
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.customgpt}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === row.jasper
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.jasper}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === row.writesonic
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.writesonic}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-indigo-50 via-amber-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.customgpt}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.jasper}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.writesonic}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" />
            Feature comparison & fit
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Data grounding & citations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.grounding.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Core workflows & strengths
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.workflows.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Governance, review, and risk profile
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 md:text-base">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan / Suite</th>
                  <th className="px-4 py-3">Indicative monthly</th>
                  <th className="px-4 py-3">Pricing model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.model}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bestFor}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for AI tools changes quickly and may vary by usage, workspace
            configuration, and contracts. Always confirm current tiers and limits on
            each vendor’s site before standardizing your stack.
          </p>
        </section>

        {/* Use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-indigo-700">
                  Winner: {item.winner}
                </p>
                <p className="mt-1 text-sm text-slate-700">{item.reasoning}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Many teams blend tools—for example, using CustomGPT.ai for support and
            internal knowledge, Jasper for marketing campaigns, and Writesonic for
            social content and quick drafts. The right mix depends on your channels,
            compliance needs, and budget.
          </p>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools/customgpt-ai"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-indigo-700 shadow-sm ring-1 ring-indigo-100 hover:bg-indigo-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to CustomGPT.ai review
          </Link>
        </div>
      </div>
    </main>
  );
}
