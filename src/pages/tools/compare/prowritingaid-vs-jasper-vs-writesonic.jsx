import React from "react";
import {
  Sparkles,
  Layers,
  Type,
  Crown,
  ArrowLeft,
  ShieldCheck,
  BarChart3,
  Gauge,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "prowritingaid vs jasper vs writesonic";
const canonical = buildCanonical(
  "/tools/compare/prowritingaid-vs-jasper-vs-writesonic"
);

const brandMeta = {
  prowritingaid: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/prowritingaid.com",
  },
  jasper: {
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/jasper.ai",
  },
  writesonic: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/writesonic.com",
  },
};

const contenders = [
  {
    key: "prowritingaid",
    name: "ProWritingAid",
    blurb: "Deep editing, style and readability reports with team guides.",
    url: "https://prowritingaid.com",
    slug: "prowritingaid",
  },
  {
    key: "jasper",
    name: "Jasper",
    blurb: "Enterprise-grade AI writer with brand voice and collaboration.",
    url: "https://jasper.ai",
    slug: "jasper-ai",
  },
  {
    key: "writesonic",
    name: "Writesonic",
    blurb: "Affordable AI writer with templates, Chatsonic and SEO tools.",
    url: "https://writesonic.com",
    slug: "writesonic",
  },
];

const comparisonRows = [
  {
    label: "Primary use",
    prowritingaid: "Editing, style, readability and consistency.",
    jasper: "Brand-safe content generation across channels.",
    writesonic: "Template-driven copywriting and AI chat.",
  },
  {
    label: "Best for",
    prowritingaid: "Teams/authors needing deep editorial reports.",
    jasper: "Marketing teams with approvals and brand guardrails.",
    writesonic: "Agencies and SMBs shipping lots of copy on a budget.",
  },
  {
    label: "Collaboration",
    prowritingaid: "Team style guides, term lists, shared reports.",
    jasper: "Workspaces, permissions, campaign workflows.",
    writesonic: "Shared projects and docs; lighter governance.",
  },
  {
    label: "AI strengths",
    prowritingaid: "Rewrite suggestions, pacing, and style analysis.",
    jasper: "Brand voice, briefs, campaign assets and variants.",
    writesonic: "Templates, Chatsonic, blog/SEO tools, quick variants.",
  },
  {
    label: "Pricing (approx.)",
    prowritingaid: "Free; Premium and Teams; lifetime licence option.",
    jasper: "From around ~$39/mo annually; usage-based tiers.",
    writesonic: "From roughly ~$19/mo; free/low tiers available.",
  },
  {
    label: "Integrations",
    prowritingaid: "Browser, Word, Google Docs, Scrivener, desktop.",
    jasper: "Docs-style editor, extensions, CMS/marketing tools.",
    writesonic: "Browser, WordPress, Zapier and marketing stacks.",
  },
];

const scoreboard = [
  {
    label: "Editing depth",
    prowritingaid: 9.5,
    jasper: 8.3,
    writesonic: 7.9,
  },
  {
    label: "Long-form creation",
    prowritingaid: 7.2,
    jasper: 9.2,
    writesonic: 8.7,
  },
  {
    label: "Team workflows",
    prowritingaid: 8.6,
    jasper: 9.4,
    writesonic: 8.3,
  },
  {
    label: "Value for money",
    prowritingaid: 9.2,
    jasper: 7.9,
    writesonic: 9.0,
  },
  {
    label: "Ease of use",
    prowritingaid: 8.2,
    jasper: 8.6,
    writesonic: 8.8,
  },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  prowritingaid: avg("prowritingaid"),
  jasper: avg("jasper"),
  writesonic: avg("writesonic"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.prowritingaid),
    parseFloat(averages.jasper),
    parseFloat(averages.writesonic)
  ) === parseFloat(averages.prowritingaid)
    ? "ProWritingAid"
    : Math.max(
        parseFloat(averages.jasper),
        parseFloat(averages.writesonic)
      ) === parseFloat(averages.jasper)
    ? "Jasper"
    : "Writesonic";

const featureBullets = {
  creation: [
    "ProWritingAid: Best when you already have a draft and need to refine structure, style and readability rather than create from scratch.",
    "Jasper: Strong for turning briefs, brand voice profiles and campaigns into multi-channel content (blogs, ads, social, emails).",
    "Writesonic: Great for generating blog posts, landing pages, ads and product copy quickly using templates and Chatsonic.",
  ],
  governance: [
    "ProWritingAid: Enforce team style guides and terminology; ensures drafts from different writers feel consistent.",
    "Jasper: Brand voice, knowledge and approval workflows give marketing teams stronger control over what ships.",
    "Writesonic: Shared projects and folders; governance is lighter but fine for smaller teams and agencies.",
  ],
  seo: [
    "ProWritingAid: Helps with readability and clarity, supporting SEO content indirectly via better human-friendly writing.",
    "Jasper: Often paired with SEO workflows/briefs; focuses more on content creation than deep on-page SEO analysis.",
    "Writesonic: Includes SEO-minded templates and tools to structure and optimise posts around keywords.",
  ],
};

const pricingTable = [
  {
    plan: "ProWritingAid Premium / Teams",
    monthly: "Monthly, annual and lifetime licence options",
    bestFor: "Content teams, authors, agencies, editorial workflows",
    notes:
      "Lifetime can be most cost-effective if you will use ProWritingAid for years as your editing layer.",
  },
  {
    plan: "Jasper Creator / Teams",
    monthly:
      "From around ~$39/mo (billed annually) with usage-based scaling",
    bestFor: "Marketing/brand teams producing assets across channels",
    notes:
      "You pay a premium for brand voice, collaboration and approvals versus pure raw token usage.",
  },
  {
    plan: "Writesonic Pro / Business",
    monthly: "From roughly ~$19/mo with higher tiers for agencies",
    bestFor: "Solo creators, agencies and SMBs on a budget",
    notes:
      "Competitive price for blogs, ads and product copy; check token/word caps for your volume.",
  },
];

const prosCons = {
  prowritingaid: {
    pros: [
      "Deep style, readability, pacing and consistency reports ideal for long-form and editorial-quality content.",
      "Team style guides, term bases and reporting to keep brand tone consistent across writers.",
      "Lifetime licence option can make it excellent value over the long term.",
    ],
    cons: [
      "Not a primary ideation/generation tool—best when paired with Jasper or Writesonic for drafting.",
      "The volume of reports can overwhelm casual users who just want quick grammar fixes.",
      "Real-time UX is slightly heavier than some always-on grammar extensions.",
    ],
  },
  jasper: {
    pros: [
      "Strong brand voice, knowledge and workflow features for marketing teams.",
      "Excellent at generating campaign-ready assets across multiple channels from one brief.",
      "Good collaboration and permissions model for approvals and governance.",
    ],
    cons: [
      "Price point is higher than many solo-creator tools and raw API setups.",
      "Less focused on deep line-by-line editing; you will still want an editor layer.",
      "Can feel like overkill for individuals who just need occasional content.",
    ],
  },
  writesonic: {
    pros: [
      "Budget-friendly AI writer with a wide range of templates and Chatsonic assistant.",
      "Good for quickly generating blogs, landing pages and ad variations.",
      "SEO-leaning features help structure posts around keywords and outlines.",
    ],
    cons: [
      "Governance and brand controls are lighter than Jasper for large teams.",
      "Editing depth and reporting are not as advanced as ProWritingAid.",
      "You may need to carefully review and standardise tone across outputs.",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick ProWritingAid if you already draft content (whether human- or AI-written) and need deep editing and style consistency. Pick Jasper if your priority is brand-governed AI content with workflows and approvals. Pick Writesonic if you want budget-friendly generation with templates and Chatsonic for day-to-day marketing copy.",
  },
  {
    q: "Can I use ProWritingAid with Jasper or Writesonic?",
    a: "Yes. A common pattern is to generate first drafts in Jasper or Writesonic, then run them through ProWritingAid to fix structure, style, readability and terminology before publishing.",
  },
  {
    q: "Which is best for teams?",
    a: "Jasper is strongest for campaign workflows, approvals and brand voice. ProWritingAid adds powerful style guides and consistency checks over everything you publish. Writesonic offers collaborative docs and projects that work well for smaller teams and agencies on a budget.",
  },
  {
    q: "Which is best value for solo creators?",
    a: "Writesonic usually wins on monthly price for generation, while ProWritingAid’s lifetime licence can be the best editing investment over several years. Jasper tends to be best value once you truly benefit from brand voice and team workflows.",
  },
  {
    q: "Do I still need a human editor with these tools?",
    a: "For important assets—sales pages, legal copy, high-profile campaigns—yes. These tools accelerate drafting and editing but do not fully replace human judgment, especially around nuance and accuracy.",
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

const LogoBadge = ({ name }) => {
  const lowered = name.toLowerCase(); // "prowritingaid", "jasper", "writesonic"
  const meta =
    brandMeta[lowered] || {
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
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function ProWritingAidVsJasperVsWritesonicPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`ProWritingAid vs Jasper vs Writesonic – which stack works best? (${YEAR})`}
        description="Compare ProWritingAid, Jasper, and Writesonic for AI writing vs editing. See pricing, collaboration, and when to pair generation tools with deep style reports."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai writing comparison, ai copywriting tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Category + H1 */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          AI writing & editing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          ProWritingAid vs Jasper vs Writesonic ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Jasper and Writesonic excel at generating new content, while
          ProWritingAid is the editing layer that enforces readability, style
          and consistency. Here is how to choose the right mix for your content
          stack.
        </p>

        {/* Top contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Use <strong>Jasper</strong> when you need brand-safe, governed AI
              content across channels. Choose <strong>Writesonic</strong> if you
              want flexible templates and Chatsonic at a lower price point. Keep{" "}
              <strong>ProWritingAid</strong> as the editing anchor that catches
              style, readability and consistency issues across everything you
              publish.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-purple-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "ProWritingAid"
                  ? averages.prowritingaid
                  : overallWinner === "Jasper"
                  ? averages.jasper
                  : averages.writesonic}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              In practice, the best stack is often a generator (Jasper or
              Writesonic) plus ProWritingAid for editing—rather than a single
              winner.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-purple-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ProWritingAid</th>
                  <th className="px-4 py-3">Jasper</th>
                  <th className="px-4 py-3">Writesonic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50 align-top"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.prowritingaid}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.jasper}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.writesonic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">ProWritingAid</th>
                  <th className="px-4 py-3">Jasper</th>
                  <th className="px-4 py-3">Writesonic</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerValue = Math.max(
                    row.prowritingaid,
                    row.jasper,
                    row.writesonic
                  );
                  const winner =
                    winnerValue === row.prowritingaid
                      ? "ProWritingAid"
                      : winnerValue === row.jasper
                      ? "Jasper"
                      : "Writesonic";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ProWritingAid"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.prowritingaid}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Jasper"
                            ? "font-semibold text-purple-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.jasper}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Writesonic"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {row.writesonic}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-purple-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.prowritingaid}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.jasper}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.writesonic}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
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
              <Type className="h-5 w-5 text-purple-600" /> Drafting & content
              creation
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.creation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-emerald-600" /> Governance &
              brand control
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.governance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-sky-600" /> SEO & content
              performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.seo.map((item) => (
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
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Billing & level</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.bestFor}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing shifts frequently with usage tiers, promos and regional
            discounts. Use this as directional guidance and always confirm on
            each vendor’s pricing page before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>ProWritingAid:</strong> Feels like an editor-plus-report
              environment. There is more to explore, but you get granular
              feedback on style, structure and consistency.
            </li>
            <li>
              <strong>Jasper:</strong> Campaign-focused UX that suits marketers.
              Once brand voice and workflows are configured, non-technical
              users can produce assets quickly within guardrails.
            </li>
            <li>
              <strong>Writesonic:</strong> Straightforward template-based
              interface and Chatsonic. Easy to learn and ideal when you just
              want to fill in prompts and ship copy fast.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Content and SEO teams:</strong> Generate drafts in Jasper
              or Writesonic, then run them through ProWritingAid for consistent
              style and readability before publishing.
            </li>
            <li>
              <strong>Brand/creative teams:</strong> Jasper wins with brand
              voice, approvals and multi-channel campaign support.
            </li>
            <li>
              <strong>Agencies and SMBs on a budget:</strong> Writesonic offers
              strong value for blogs, ads and landing pages, especially at lower
              tiers.
            </li>
            <li>
              <strong>Authors and editorial teams:</strong> ProWritingAid is the
              anchor tool, regardless of whether drafts are written by humans or
              AI, thanks to its deep editorial reports.
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
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Editing & style depth</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: ProWritingAid.</strong> Best when you care about
                structure, pacing and consistency across serious content.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-purple-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Brand-led content engine</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: Jasper.</strong> Ideal for marketing teams that
                need guardrails, workflows and reusable brand voice.
              </p>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Budget AI copywriting</h3>
              <p className="text-sm text-slate-700">
                <strong>Winner: Writesonic.</strong> A strong mix of templates,
                chat and SEO tools at accessible price points.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            FAQ: ProWritingAid vs Jasper vs Writesonic
          </h2>
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

        {/* Internal review links */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/prowritingaid"
          >
            Read the full ProWritingAid review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
          <a
            className="group flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-slate-200 hover:bg-emerald-50"
            href="/tools/jasper-ai"
          >
            Read the full Jasper review
            <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
          </a>
        </div>

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
