import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ArrowLeft,
  Workflow,
  Plug,
  BarChart3,
  Zap,
  Shield,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "writesonic vs jasper vs quillbot";
const canonical = buildCanonical(
  "/tools/compare/writesonic-vs-jasper-vs-quillbot"
);

const brandMeta = {
  writesonic: {
    gradient: "from-sky-500 via-indigo-500 to-violet-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/writesonic.com",
  },
  jasper: {
    gradient: "from-rose-500 via-purple-500 to-indigo-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/jasper.ai",
  },
  quillbot: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/quillbot.com",
  },
};

const contenders = [
  {
    key: "writesonic",
    name: "Writesonic",
    blurb: "AI writer with Chatsonic, templates, and publishing workflows.",
    url: "https://writesonic.com",
  },
  {
    key: "jasper",
    name: "Jasper AI",
    blurb: "Enterprise campaign co-pilot for structured marketing workflows.",
    slug: "jasper-ai",
    url: "https://www.jasper.ai/",
  },
  {
    key: "quillbot",
    name: "QuillBot",
    blurb: "Paraphrasing and rewriting assistant for students and editors.",
    url: "https://quillbot.com/",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    writesonic: "Net-new marketing copy and blog content",
    jasper: "Enterprise campaigns, briefs, and brand assets",
    quillbot: "Rewriting, paraphrasing, summarising, and grammar",
  },
  {
    label: "Best for",
    writesonic: "Solo creators, agencies, SMBs needing templates + chat",
    jasper: "Larger marketing orgs, brand teams, and content ops",
    quillbot: "Students, editors, researchers, and localisation teams",
  },
  {
    label: "AI models",
    writesonic: "GPT-3.5/4/4o and custom models",
    jasper: "GPT-4 plus Anthropic, Google, and others",
    quillbot: "Proprietary paraphrasing and grammar engines",
  },
  {
    label: "Unique advantages",
    writesonic: "Chatsonic, brand voice, knowledge base, WordPress export",
    jasper: "Campaign briefs, brand workspaces, analytics, guardrails",
    quillbot: "MS Word/Google Docs/Chrome extensions, citations, summariser",
  },
  {
    label: "Pricing (headline)",
    writesonic: "Free tier + paid from ~US$19/mo",
    jasper: "From ~US$39/mo (annual billing)",
    quillbot: "Free tier + Premium from ~US$19.95/mo",
  },
];

const scoreboard = [
  {
    label: "Drafting new marketing copy",
    scores: { writesonic: 9.1, jasper: 9.4, quillbot: 6.5 },
  },
  {
    label: "Editing / paraphrasing strength",
    scores: { writesonic: 7.8, jasper: 8.4, quillbot: 9.5 },
  },
  {
    label: "Team collaboration & workflows",
    scores: { writesonic: 8.6, jasper: 9.3, quillbot: 6.9 },
  },
  {
    label: "Value for money",
    scores: { writesonic: 8.7, jasper: 7.6, quillbot: 8.9 },
  },
  {
    label: "Integrations & ecosystem",
    scores: { writesonic: 8.5, jasper: 8.9, quillbot: 8.0 },
  },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  writesonic: avg("writesonic"),
  jasper: avg("jasper"),
  quillbot: avg("quillbot"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerMap = {
  writesonic: "Writesonic",
  jasper: "Jasper AI",
  quillbot: "QuillBot",
};

const pricingTable = [
  {
    tool: "Writesonic",
    monthly: "Free tier + paid from around ~US$19/mo",
    billing: "Cheaper on annual plans; word limits by tier and model",
    bestFor: "Creators and small teams needing templates, chat, and blog tools",
    notes:
      "Watch GPT-4/4o usage on lower tiers; Business plans add more brand control.",
  },
  {
    tool: "Jasper AI",
    monthly: "From ~US$39/mo on annual billing",
    billing: "Seat-based pricing; higher tiers add guardrails and SSO",
    bestFor: "Established marketing teams running structured campaigns",
    notes:
      "Best value when multiple marketers are collaborating inside Jasper daily.",
  },
  {
    tool: "QuillBot Premium",
    monthly: "From ~US$19.95/mo",
    billing: "Discounts for annual and student plans",
    bestFor: "Students, writers, and editors who mostly rewrite and refine text",
    notes:
      "Great add-on to any drafting tool when paraphrasing and citations matter.",
  },
];

const featureBullets = {
  generation: [
    "Writesonic: Strong at blog posts, ads, landing pages, product descriptions, and basic SEO workflows.",
    "Jasper: Built for multi-asset campaigns, creative briefs, and on-brand messaging across channels.",
    "QuillBot: Limited ideation; better at improving and re-phrasing existing text than writing from scratch.",
  ],
  editing: [
    "Writesonic: Offers rewriting and expansion tools, but they sit alongside generation rather than being the star.",
    "Jasper: Includes rewrite, tone shift, and refinement inside its campaign workflows.",
    "QuillBot: Leading paraphraser with multiple modes, integrated grammar checker, citation generator, and summariser.",
  ],
  workflow: [
    "Writesonic: Suits solo creators and agencies who want templates, brand voice, and export to CMS or social.",
    "Jasper: Best when you need approvals, brand guidelines, campaign briefs, and analytics in one place.",
    "QuillBot: Fits into existing writing tools via browser and document extensions, with minimal learning curve.",
  ],
};

const faqs = [
  {
    q: `Do I need Writesonic, Jasper, and QuillBot in ${YEAR}?`,
    a: "Most teams pick either Writesonic or Jasper as their main drafting tool and keep QuillBot as an auxiliary paraphrasing and grammar assistant. A common setup is: Jasper or Writesonic for campaigns and QuillBot for polishing, localisation, and academic-style rewriting.",
  },
  {
    q: "Is QuillBot an alternative to Writesonic or Jasper?",
    a: "Not directly. QuillBot focuses on rewriting, paraphrasing, summarising, and grammar. It does not provide the same campaign planning, asset management, or multi-channel templates that Writesonic and Jasper do.",
  },
  {
    q: "Which tool has the best collaboration features?",
    a: "Jasper leads for teams, with workspaces, brand guides, approval flows, and analytics. Writesonic offers team seats and project sharing on higher plans. QuillBot is primarily single-user with limited collaboration features.",
  },
  {
    q: "Which is cheapest overall?",
    a: "QuillBot Premium is affordable for individuals focused on editing. Writesonic offers a usable free tier and competitive entry-level pricing for creators. Jasper is typically the most expensive but makes sense when multiple marketers rely on it as a central campaign hub.",
  },
  {
    q: "How should agencies decide between Writesonic and Jasper?",
    a: "If you run complex, multi-channel campaigns for brands and need shared guidelines and approvals, Jasper fits better. If you want fast templates, blogs, and ad copy at a lower price point, Writesonic is often enough—then add QuillBot for client-side rewriting if needed.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const prosCons = {
  writesonic: {
    pros: [
      "GPT-4/4o output with a large library of marketing templates",
      "Chatsonic, brand voice, knowledge base, and CMS publishing integrations",
      "Generous free tier and accessible pricing for small teams",
    ],
    cons: [
      "Credits burn quickly on higher-end models at scale",
      "Template-heavy UI can feel busy for new users",
      "Governance and analytics are lighter than Jasper’s enterprise focus",
    ],
  },
  jasper: {
    pros: [
      "Deep brand governance with guidelines, tones, and reusable briefs",
      "Strong collaboration features for teams and larger marketing orgs",
      "Supports multiple top-tier AI models for flexibility and resilience",
    ],
    cons: [
      "Higher per-seat cost than most creator tools",
      "Can be overkill for solo creators or very small teams",
      "Best value appears when you fully commit workflows into Jasper",
    ],
  },
  quillbot: {
    pros: [
      "Industry-leading paraphrasing and rewriting modes",
      "Built-in grammar checker, summariser, and citation tools",
      "Excellent browser and document extensions at an affordable price",
    ],
    cons: [
      "Weak at net-new ideation compared with Writesonic or Jasper",
      "Limited collaboration and campaign-level features",
      "Not designed as a full marketing or content ops platform",
    ],
  },
};

const LogoBadge = ({ name, metaKey }) => {
  const meta =
    brandMeta[metaKey] || {
      gradient: "from-slate-500 to-slate-700",
      badge: "bg-slate-100 text-slate-900",
    };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
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
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function WritesonicVsJasperVsQuillbotPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Writesonic vs Jasper vs QuillBot (${YEAR})`}
        description="Decide whether Writesonic, Jasper, or QuillBot is best for drafting, rewriting, and scaling AI content across your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai writing comparison, jasper alternative, writesonic vs quillbot`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          AI writing & editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Writesonic vs Jasper vs QuillBot ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Writesonic and Jasper specialise in generating campaigns and on-brand
          marketing copy, while QuillBot is built for rewriting, paraphrasing,
          and grammar fixes. Here’s how they compare on pricing, features, and
          workflows so you can choose the right AI stack.
        </p>

        {/* Quick verdict + side cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Writesonic</strong> is the balanced choice for creators and
              agencies that want templates, chat, and publishing.{" "}
              <strong>Jasper</strong> is best for larger marketing teams that
              need brand governance and campaign workflows.{" "}
              <strong>QuillBot</strong> is the go-to companion for rewriting and
              grammar when you already have drafts.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Scoreboard winner:{" "}
              {winnerMap[overallWinner]}{" "}
              <span className="text-xs font-medium text-emerald-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-indigo-700" /> When QuillBot
              fits
            </div>
            <p className="text-sm text-slate-700">
              Ideal when drafts already exist and your main problems are
              paraphrasing, reducing similarity scores, polishing grammar, and
              creating alternative phrasings.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When Writesonic or
              Jasper win
            </div>
            <p className="text-sm text-slate-700">
              Choose <strong>Writesonic</strong> or <strong>Jasper</strong> when
              you need to brief, ideate, draft, and repurpose campaigns across
              multiple channels—not just rewrite sentences.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} metaKey={card.key} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Writesonic</th>
                  <th className="px-4 py-3">Jasper</th>
                  <th className="px-4 py-3">QuillBot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.writesonic}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.jasper}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.quillbot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Writesonic</th>
                  <th className="px-4 py-3">Jasper</th>
                  <th className="px-4 py-3">QuillBot</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const top = Object.entries(row.scores).sort(
                    (a, b) => b[1] - a[1]
                  );
                  const winnerKey = top[0][0];
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.writesonic}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.jasper}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.scores.quillbot}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">
                        {winnerMap[winnerKey]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.writesonic}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.jasper}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.quillbot}
                  </td>
                  <td className="px-4 py-3 font-bold text-emerald-800">
                    {winnerMap[overallWinner]}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Content generation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.generation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-indigo-600" /> Editing &
              paraphrasing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.editing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Workflow className="h-5 w-5 text-slate-700" /> Workflow &
              integrations
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Billing model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.tool}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.tool}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.billing}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing, token limits, and model access change frequently. Always
            confirm current tiers and inclusions on each vendor&apos;s pricing
            page before standardising your AI content stack.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Writesonic:</strong> Template-driven but approachable; feels
              familiar to marketers who have used other AI copy tools. Chatsonic
              helps with ad-hoc ideation.
            </li>
            <li>
              <strong>Jasper:</strong> More structured. Best when you adopt its
              workflows for briefs, campaigns, and brand standards rather than
              using it as a simple prompt box.
            </li>
            <li>
              <strong>QuillBot:</strong> Extremely easy to learn; most users just
              paste text, select a paraphrasing mode, and iterate via the
              sidebar or browser extension.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS and ecommerce marketing teams:</strong>{" "}
              <span className="font-semibold">Jasper</span> wins for brand
              consistency, campaign briefs, and approvals.
            </li>
            <li>
              <strong>Agencies and solo creators:</strong>{" "}
              <span className="font-semibold">Writesonic</span> is a strong
              balance of cost, templates, and publishing features.
            </li>
            <li>
              <strong>Students, academic writers, and editors:</strong>{" "}
              <span className="font-semibold">QuillBot</span> wins for
              paraphrasing, citation support, and grammar refinement.
            </li>
            <li>
              <strong>Teams wanting a full stack:</strong> Use{" "}
              <span className="font-semibold">Writesonic or Jasper</span> for
              campaigns, then <span className="font-semibold">QuillBot</span> as
              a polishing layer for sensitive or academic-style copy.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Writesonic</h3>
              <p className="text-sm text-slate-700">
                Best for creators and agencies who want fast templates, blog
                workflows, and GPT-4-level quality without full enterprise
                complexity.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Solo marketers, small agencies, and growing brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Jasper</h3>
              <p className="text-sm text-slate-700">
                Best when marketing is a team sport and you need on-brand
                messaging, approvals, and analytics across many campaigns.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Larger marketing teams, content ops, and agencies
                embedded inside brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">QuillBot</h3>
              <p className="text-sm text-slate-700">
                Best as a specialised rewriting and grammar layer on top of your
                existing drafting tools, especially in academic or editorial
                contexts.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Students, proof-readers, editors, and localisation
                teams.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.q}
                </h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
