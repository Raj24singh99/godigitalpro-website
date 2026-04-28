import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Workflow,
  Plug,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "writesonic vs jasper vs rytr";
const canonical = buildCanonical(
  "/tools/compare/writesonic-vs-jasper-vs-rytr"
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
  rytr: {
    gradient: "from-amber-500 via-orange-500 to-pink-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/rytr.me",
  },
};

const contenders = [
  {
    key: "writesonic",
    name: "Writesonic",
    blurb: "GPT-4 powered content engine with Chatsonic and publishing workflows.",
    url: "https://writesonic.com",
  },
  {
    key: "jasper",
    name: "Jasper AI",
    blurb: "Enterprise-grade AI marketing co-pilot for brand-safe campaigns.",
    slug: "jasper-ai",
    url: "https://www.jasper.ai/",
  },
  {
    key: "rytr",
    name: "Rytr",
    blurb: "Budget-friendly AI writer for quick drafts and everyday content.",
    url: "https://rytr.me/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    writesonic: "Balanced workflows & templates for creators and agencies",
    jasper: "Enterprise and scaling marketing teams",
    rytr: "Freelancers & SMBs on a tight budget",
  },
  {
    label: "Core strength",
    writesonic: "Chatsonic + blog/landing templates + WordPress/Zapier publishing",
    jasper: "Brand assets, multi-channel campaign briefs, analytics & governance",
    rytr: "Simple UI, low cost, decent templates for basic copy",
  },
  {
    label: "Model access",
    writesonic: "GPT-3.5 / GPT-4 / 4o + custom models on higher tiers",
    jasper: "GPT-4 plus Anthropic, Google, and other enterprise models",
    rytr: "GPT-3.5 and proprietary language models",
  },
  {
    label: "Collaboration",
    writesonic: "Team seats on Business and higher plans",
    jasper: "Robust workspaces, permissions, and approval flows",
    rytr: "Primarily single seat (limited collaboration unless upgrading)",
  },
  {
    label: "Pricing (headline)",
    writesonic: "Free tier + paid from around ~US$19/mo",
    jasper: "From ~US$39/mo on annual billing",
    rytr: "From ~US$9/mo with unlimited options",
  },
];

const scoreboard = [
  {
    label: "Content quality",
    scores: { writesonic: 9.0, jasper: 9.4, rytr: 7.8 },
  },
  {
    label: "Workflow automation",
    scores: { writesonic: 9.1, jasper: 8.8, rytr: 7.0 },
  },
  {
    label: "Ease of use",
    scores: { writesonic: 8.6, jasper: 8.3, rytr: 9.0 },
  },
  {
    label: "Value for money",
    scores: { writesonic: 8.7, jasper: 7.5, rytr: 9.3 },
  },
  {
    label: "Enterprise readiness",
    scores: { writesonic: 8.5, jasper: 9.6, rytr: 6.8 },
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
  rytr: avg("rytr"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const winnerMap = {
  writesonic: "Writesonic",
  jasper: "Jasper AI",
  rytr: "Rytr",
};

const pricingTable = [
  {
    plan: "Writesonic Small Team",
    monthly: "~US$19/mo",
    annual: "~US$19/mo (billed annually)",
    limits: "GPT-4 access, 1 seat, generous word limits per month",
    notes:
      "Scales to Business for more seats, knowledge base, and factual AI features.",
  },
  {
    plan: "Jasper Creator",
    monthly: "~US$49/mo",
    annual: "~US$39/mo (billed annually)",
    limits: "1 seat, 1 brand voice, 50+ templates and campaign tools",
    notes:
      "Teams/Business plans add multi-seat collaboration, SSO, and advanced analytics.",
  },
  {
    plan: "Rytr Saver",
    monthly: "~US$9/mo",
    annual: "~US$7.50/mo (billed annually)",
    limits: "100k characters/mo, 20+ tones, 30+ use cases",
    notes:
      "Unlimited plan available for power users who need constant short-form content.",
  },
];

const faqs = [
  {
    q: `Which AI writer is best in ${YEAR}?`,
    a: "Jasper leads for enterprises with structured campaign workflows and brand governance. Writesonic is the best balance of GPT-4 quality, templates, and price for creators and agencies. Rytr is strongest for individuals and SMBs that mainly need affordable, simple copy.",
  },
  {
    q: "Is Writesonic better than Jasper?",
    a: "Writesonic is more affordable, has a better free tier, and is easier to adopt for smaller teams. Jasper offers deeper brand governance, approvals, analytics, and enterprise onboarding—so it makes more sense once you have multiple marketers working in one central tool.",
  },
  {
    q: "When should I pick Rytr?",
    a: "Choose Rytr if you mainly need quick social captions, product descriptions, emails, or basic blog intros and want to keep costs very low. If you require advanced workflows, GPT-4 quality, or collaboration, Writesonic or Jasper will be a better long-term fit.",
  },
  {
    q: "Can I use multiple AI writers together?",
    a: "Yes. Some teams ideate and draft campaigns in Writesonic or Jasper, then use Rytr (or tools like QuillBot) as a secondary layer for alternative phrasings, language variations, and extra content variations.",
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
      "GPT-4 quality with a strong template library for blogs, ads, and landing pages",
      "Chatsonic with live data plus CMS and Zapier-style publishing workflows",
      "Brand voice and knowledge base features on higher plans",
    ],
    cons: [
      "GPT-4 and 4o usage can burn credits quickly at scale",
      "Template-heavy UI can feel busy for brand-new users",
    ],
  },
  jasper: {
    pros: [
      "Enterprise-grade briefs, campaign workflows, and brand guidelines",
      "Robust collaboration, analytics, and governance for bigger teams",
      "Multiple model choices to balance quality, cost, and compliance",
    ],
    cons: [
      "Higher price point compared to creator-focused tools",
      "Less generous free trial; best value appears at team scale",
    ],
  },
  rytr: {
    pros: [
      "One of the cheapest AI writers in this category",
      "Very simple, low-friction UI suited for casual usage",
      "Unlimited plan option for users who generate a lot of short-form copy",
    ],
    cons: [
      "Content quality and nuance trail GPT-4 based tools in many cases",
      "Limited collaboration and advanced workflow features",
      "Fewer integrations and governance options for larger organisations",
    ],
  },
};

const featureBullets = {
  generation: [
    "Writesonic: Strong at blogs, ad copy, product descriptions, and landing pages with GPT-4 quality on higher tiers.",
    "Jasper: Built for multi-asset campaigns, centralised briefs, and reuse of on-brand messaging across channels.",
    "Rytr: Good for short-form copy such as captions, bios, and simple blog sections at a low price point.",
  ],
  automation: [
    "Writesonic: Supports publishing to WordPress and other channels plus Zapier-style automation for recurring tasks.",
    "Jasper: Focuses on orchestrating campaign workflows—brief to final copy—with repeatable templates and analytics.",
    "Rytr: Minimal automation; mainly a fast text box with templates and tones.",
  ],
  collaboration: [
    "Writesonic: Team sharing on Business plans; suitable for small agency or in-house teams.",
    "Jasper: Best for collaborative content ops with roles, workspaces, and reporting.",
    "Rytr: Mostly individual usage; collaboration handled outside the product.",
  ],
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

export default function WritesonicVsJasperVsRytrPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Writesonic vs Jasper vs Rytr (${YEAR})`}
        description="Compare Writesonic, Jasper AI, and Rytr on pricing, collaboration, GPT-4 access, and ideal AI content workflows."
        canonical={canonical}
        keywords={`${primaryKeyword}, ai writing tools comparison, jasper alternative, rytr alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          AI writing tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Writesonic vs Jasper vs Rytr ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Writesonic balances GPT-4 content with price and publishing, Jasper is
          the enterprise-grade marketing co-pilot, and Rytr is the affordable
          option for quick drafts. Use this breakdown to see which one fits your
          budget, workflow, and quality expectations.
        </p>

        {/* Quick verdict + helper cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-emerald-50/90 p-6 ring-1 ring-emerald-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              <strong>Writesonic</strong> is the best balance of GPT-4 quality,
              templates, and publishing for creators and agencies.{" "}
              <strong>Jasper</strong> is the right choice when you need
              enterprise-level brand governance and team collaboration.{" "}
              <strong>Rytr</strong> is ideal if you mainly want cheap, fast
              copy, not a full content operations platform.
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
              <Workflow className="h-5 w-5 text-indigo-700" /> When Writesonic
              wins
            </div>
            <p className="text-sm text-slate-700">
              Pick Writesonic if you need GPT-4, brand voices, SEO/blog
              workflows, and WordPress/Zapier publishing—without paying full
              enterprise prices.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Plug className="h-5 w-5 text-amber-700" /> When Jasper or Rytr win
            </div>
            <p className="text-sm text-slate-700">
              Choose <strong>Jasper</strong> if marketing is a team sport with
              approvals and brand control. Choose <strong>Rytr</strong> if you
              are a scrappy solo user or SMB prioritising low cost over deep
              workflows.
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
                  <th className="px-4 py-3">Rytr</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.rytr}</td>
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
                  <th className="px-4 py-3">Rytr</th>
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
                        {row.scores.rytr}
                      </td>
                      <td className="px-4 py-3 font-semibold text-emerald-700">
                        {winnerMap[winnerKey]}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.writesonic}
                  </td>
                  <td className="px-4 py-3 font-semibold text-rose-800">
                    {averages.jasper}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.rytr}
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
              <Workflow className="h-5 w-5 text-indigo-600" /> Automation &
              publishing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-slate-700" /> Collaboration &
              governance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
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
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing, word/character limits, and model access change frequently.
            Always verify current plans directly on each vendor&apos;s pricing
            page before committing your stack.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Writesonic:</strong> Template-first interface with
              Chatsonic on top. Easy for marketers who are used to AI copy
              tools, though the number of options can feel busy at first.
            </li>
            <li>
              <strong>Jasper:</strong> Feels like a campaign operating system.
              Best when you embrace its briefs, brand voice, and workspace
              structure rather than trying to use it as a simple chat box.
            </li>
            <li>
              <strong>Rytr:</strong> Very straightforward. Most users select a
              use case, tone, and length, then generate content—minimal setup
              and almost no learning curve.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Agencies and solo creators running multi-channel content:</strong>{" "}
              <span className="font-semibold">Writesonic</span> wins with GPT-4,
              templates, and publishing integrations at a reasonable cost.
            </li>
            <li>
              <strong>Enterprise and scaling marketing teams:</strong>{" "}
              <span className="font-semibold">Jasper</span> wins for brand
              governance, analytics, and collaboration when many marketers work
              together.
            </li>
            <li>
              <strong>Freelancers and SMBs on a budget:</strong>{" "}
              <span className="font-semibold">Rytr</span> wins with low-cost,
              simple content generation and optional unlimited usage.
            </li>
            <li>
              <strong>Teams building a hybrid stack:</strong> Use{" "}
              <span className="font-semibold">Writesonic or Jasper</span> for
              core campaigns and keep <span className="font-semibold">Rytr</span>{" "}
              as a lightweight option for overflow or smaller side projects.
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
                Best when you want strong GPT-4 content, SEO/blog workflows, and
                CMS publishing without going full enterprise.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Solo marketers, small agencies, and growing brands.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Jasper</h3>
              <p className="text-sm text-slate-700">
                Best when multiple marketers need to enforce brand voice,
                collaborate on campaigns, and report on AI usage and impact.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Enterprise marketing teams, content ops, and larger
                agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Rytr</h3>
              <p className="text-sm text-slate-700">
                Best for simple copy needs and tight budgets where automation
                and governance are not priorities.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Freelancers, micro-businesses, and side projects.
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
