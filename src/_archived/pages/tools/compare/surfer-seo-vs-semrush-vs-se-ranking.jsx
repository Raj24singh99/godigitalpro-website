import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  BarChart2,
  PenSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullFullYear ? new Date().getFullYear() : new Date().getFullYear(); // safety

const primaryKeyword = "surfer seo vs semrush vs se ranking";
const canonical = buildCanonical(
  "/tools/compare/surfer-seo-vs-semrush-vs-se-ranking"
);

const brandMeta = {
  "surfer seo": {
    gradient: "from-amber-500 via-orange-500 to-pink-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/surferseo.com",
  },
  semrush: {
    gradient: "from-amber-600 via-orange-600 to-rose-600",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/semrush.com",
  },
  "se ranking": {
    gradient: "from-indigo-500 via-blue-600 to-sky-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/seranking.com",
  },
};

const contenders = [
  {
    key: "surfer seo",
    name: "Surfer SEO",
    blurb: "On-page optimizer with NLP terms, Content Score, and audits.",
    url: "https://www.surferseo.com",
  },
  {
    key: "semrush",
    name: "Semrush",
    blurb: "Full SEO suite: research, backlinks, technical audits, PPC intel.",
    url: "https://www.semrush.com",
  },
  {
    key: "se ranking",
    name: "SE Ranking",
    blurb:
      "Affordable all-in-one SEO platform with rank tracking and audits.",
    url: "https://seranking.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    "surfer seo": "On-page briefs and content refreshes",
    semrush: "All-in-one SEO/PPC suite and reporting",
    "se ranking": "Budget-friendly SEO suite with tracking",
  },
  {
    label: "Content optimization",
    "surfer seo": "NLP terms, Content Score, AI drafts",
    semrush: "SEO Writing Assistant + topic research",
    "se ranking": "Basic on-page checker",
  },
  {
    label: "Keyword research",
    "surfer seo": "Keyword clustering (add-on)",
    semrush: "Deep keyword + PPC data",
    "se ranking": "Solid keyword + SERP data",
  },
  {
    label: "Backlinks",
    "surfer seo": "Not core",
    semrush: "Robust backlink analytics",
    "se ranking": "Backlink monitoring and gap analysis",
  },
  {
    label: "Price/value",
    "surfer seo": "Priced per article credits",
    semrush: "Higher price, suite depth",
    "se ranking": "Great value for SMBs",
  },
];

const scoreboard = [
  {
    label: "On-page quality",
    scores: { "surfer seo": 9.4, semrush: 8.9, "se ranking": 8.2 },
  },
  {
    label: "Research breadth",
    scores: { "surfer seo": 7.8, semrush: 9.6, "se ranking": 8.6 },
  },
  {
    label: "Reporting & dashboards",
    scores: { "surfer seo": 7.5, semrush: 9.3, "se ranking": 8.5 },
  },
  {
    label: "Value for money",
    scores: { "surfer seo": 8.3, semrush: 7.9, "se ranking": 9.0 },
  },
  {
    label: "Ease for teams",
    scores: { "surfer seo": 9.0, semrush: 8.5, "se ranking": 8.8 },
  },
];

const pricingTable = [
  {
    plan: "Surfer SEO Essential/Pro",
    monthly: "From ~$89+/mo",
    annual: "Lower on annual promos",
    limits:
      "Article credits, Content Score, audits; AI brief/draft add-ons typically extra.",
    notes:
      "Great for content teams actively producing and refreshing blog/SEO assets.",
  },
  {
    plan: "Semrush Pro/Guru",
    monthly: "From ~$129+/mo",
    annual: "Lower on annual",
    limits:
      "Keyword research, PPC intel, backlinks, audits, reporting, SEO Writing Assistant.",
    notes:
      "Best when you need a primary SEO suite across research, links, and client reporting.",
  },
  {
    plan: "SE Ranking Pro/Business",
    monthly: "From ~$55+/mo",
    annual: "Lower on annual",
    limits:
      "Rank tracking, research, audits, reporting; strong value for agencies/SMBs.",
    notes:
      "Smart choice if budget is tight but you still want an all-rounder SEO stack.",
  },
];

const faqs = [
  {
    q: `Is Surfer SEO better than Semrush or SE Ranking in ${YEAR}?`,
    a: "Surfer SEO wins for on-page optimization and content briefs. Semrush wins for full-suite SEO and PPC research. SE Ranking wins on price while still covering rank tracking, research, and audits.",
  },
  {
    q: "Should I replace Semrush with Surfer?",
    a: "Usually not. Surfer complements suites like Semrush or Ahrefs. Use Semrush for research/backlinks and Surfer to optimize drafts and content refreshes.",
  },
  {
    q: "Which is best on a budget?",
    a: "SE Ranking is the best value play—it covers rank tracking, research, audits, and reporting at a lower price. Add Surfer SEO later if you want advanced on-page guidance for priority URLs.",
  },
  {
    q: "Does Surfer SEO include rank tracking?",
    a: "Rank tracking is not Surfer’s core focus. Combine it with SE Ranking or Semrush to get tracking, reporting, and broader SEO monitoring.",
  },
  {
    q: "Which is better for agencies?",
    a: "Agencies often pair Semrush or SE Ranking (for research + reporting) with Surfer SEO for content briefs and on-page optimization at scale.",
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

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  "surfer seo": avg("surfer seo"),
  semrush: avg("semrush"),
  "se ranking": avg("se ranking"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const prettyNameFromKey = (key) => {
  if (key === "surfer seo") return "Surfer SEO";
  if (key === "se ranking") return "SE Ranking";
  if (key === "semrush") return "Semrush";
  return key;
};

const featureBullets = {
  onPage: [
    "Surfer SEO: Content Editor with NLP terms, SERP-based guidelines, internal link ideas, and powerful audit recommendations.",
    "Semrush: SEO Writing Assistant and On-Page SEO Checker tied back to keyword and topic research modules.",
    "SE Ranking: Page audit and basic on-page checker suitable for small teams and lower priority pages.",
  ],
  research: [
    "Surfer SEO: Strong SERP analyzer and optional keyword clustering; not a full research suite on its own.",
    "Semrush: Market-leading keyword and PPC research, competitor intel, and topic research for campaigns.",
    "SE Ranking: Reliable keyword and SERP data for most markets, plus competitor and gap analysis on a budget.",
  ],
  reporting: [
    "Surfer SEO: Focused on page-level reports for writers and editors rather than global dashboards.",
    "Semrush: Robust project dashboards, site audits, backlink reports, and client-ready PDF exports.",
    "SE Ranking: Customizable dashboards, rank tracking charts, and white-label reporting for agencies.",
  ],
};

const prosCons = {
  "surfer seo": {
    pros: [
      "Excellent on-page guidance via Content Editor, audits, and NLP suggestions.",
      "Clear content briefs and live scoring that writers can follow without deep SEO knowledge.",
      "Good fit for refreshing old content and aligning it with the current SERP.",
      "Plays nicely alongside Semrush, Ahrefs, or SE Ranking as the ‘content side’ of your stack.",
    ],
    cons: [
      "Not a full SEO suite—limited keyword, backlink, and tracking coverage.",
      "Pricing tied to article credits can feel expensive for very high-volume teams.",
      "AI features are add-ons, which can increase overall cost if used heavily.",
    ],
  },
  semrush: {
    pros: [
      "Very deep keyword research, SERP intel, and PPC/competitor data.",
      "Backlink analytics, site audit, and reporting in one platform.",
      "SEO Writing Assistant helps bring on-page signals into your content workflow.",
      "Strong fit for agencies and in-house teams who need one main SEO hub.",
    ],
    cons: [
      "Higher starting price than SE Ranking; can feel heavy for solo creators.",
      "On-page features are good but not as content-editor focused as Surfer.",
      "Many modules can overwhelm new users without a clear process.",
    ],
  },
  "se ranking": {
    pros: [
      "Very good price/value balance for rank tracking, research, and audits.",
      "Intuitive UI and straightforward reports for SMBs and agencies.",
      "White-label and reporting features are strong at its price point.",
      "Flexible rank tracking limits and user seats compared with bigger suites.",
    ],
    cons: [
      "Research depth and backlink index are solid but not as extensive as Semrush.",
      "On-page tools are more basic than Surfer’s Content Editor.",
      "Fewer integrations and ecosystem tools than the largest SEO platforms.",
    ],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
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

export default function SurferVsSemrushVsSeRankingPage() {
  const overallWinnerName = prettyNameFromKey(overallWinnerKey);
  const overallAvg = averages[overallWinnerKey];

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Surfer SEO vs Semrush vs SE Ranking – Which to pick? (${YEAR})`}
        description="Compare Surfer SEO, Semrush, and SE Ranking on on-page optimization, research breadth, reporting, pricing, and real-world use cases so you can design the right SEO stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, on-page seo comparison, surfer seo vs semrush, surfer vs se ranking`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          SEO &amp; content
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Surfer SEO vs Semrush vs SE Ranking – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Surfer SEO</strong> leads on on-page optimization and content
          briefs. <strong>Semrush</strong> is the broad SEO/PPC suite with deep
          research and backlinks. <strong>SE Ranking</strong> offers strong
          value for rank tracking, research, and audits. Here is how they
          compare on optimization depth, research, reporting, and price.
        </p>

        {/* Quick verdict & highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-sm md:text-base text-slate-800">
              Choose <strong>Surfer SEO</strong> for content briefs, NLP terms,
              and live content scores. Choose <strong>Semrush</strong> if you
              want one main SEO/PPC suite for research, backlinks, and audits.
              Choose <strong>SE Ranking</strong> when you want an affordable
              all-rounder SEO platform and plan to add Surfer for high-value
              on-page work.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {overallAvg}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <PenSquare className="h-5 w-5 text-amber-700" /> Best for
              on-page/content
            </div>
            <p className="text-sm text-slate-700">
              Surfer SEO provides the clearest SERP-based guidelines, NLP terms,
              and live scores that writers can follow without deep SEO
              knowledge.
            </p>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <BarChart2 className="h-5 w-5 text-indigo-700" /> Best for
              research breadth
            </div>
            <p className="text-sm text-slate-700">
              Semrush covers keyword research, backlinks, technical audits, and
              reporting in one place, making it a strong “primary” SEO platform.
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
                <LogoBadge name={card.name} />
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
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Surfer SEO</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">SE Ranking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.label}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row["surfer seo"]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.semrush}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["se ranking"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard table */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (out of 10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Surfer SEO</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">SE Ranking</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const surfer = row.scores["surfer seo"];
                  const sem = row.scores.semrush;
                  const ser = row.scores["se ranking"];
                  const maxScore = Math.max(surfer, sem, ser);
                  const winner =
                    maxScore === surfer
                      ? "Surfer SEO"
                      : maxScore === sem
                      ? "Semrush"
                      : "SE Ranking";

                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Surfer SEO"
                            ? "font-semibold text-amber-800"
                            : "text-slate-700"
                        }`}
                      >
                        {surfer}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Semrush"
                            ? "font-semibold text-orange-800"
                            : "text-slate-700"
                        }`}
                      >
                        {sem}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "SE Ranking"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {ser}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-orange-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages["surfer seo"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-orange-800">
                    {averages.semrush}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages["se ranking"]}
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
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <PenSquare className="h-6 w-6 text-amber-700" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              On-page optimization & briefs
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.onPage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Research & SERP intelligence
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.research.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Reporting, dashboards & clients
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-slate-700">
              {featureBullets.reporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-emerald-600" /> Pricing
            snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[700px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row, idx) => (
                  <tr
                    key={row.plan}
                    className={idx % 2 ? "bg-slate-50/40" : "bg-white"}
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.annual}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.limits}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700">
            Surfer SEO pricing depends on article credits and AI add-ons.
            Semrush is pricier but can replace several other tools if you fully
            adopt it. SE Ranking is the value play for agencies and SMBs—many
            teams add Surfer on top for a “suite + on-page” combo.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            User experience & learning curve
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Surfer SEO:</strong> Feels like a content production
              assistant—briefs, outlines, and scores that writers can follow
              inside the editor or via integrations (Docs, WordPress, etc.).
            </li>
            <li>
              <strong>Semrush:</strong> Feels like an SEO command center. Best
              once you have clear processes for research, audits, and reporting;
              otherwise it can feel overwhelming at first.
            </li>
            <li>
              <strong>SE Ranking:</strong> Cleaner, simpler UI with faster
              onboarding for SMBs and smaller agencies. Less noise than
              full-blown enterprise suites.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Real-world use-cases & stack ideas
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-slate-700">
            <li>
              <strong>Content-led agencies:</strong> Run Semrush or SE Ranking
              for research, audits, and reporting. Add Surfer SEO for briefs and
              on-page optimization at scale across clients.
            </li>
            <li>
              <strong>In-house marketing teams:</strong> If budget allows,
              Semrush + Surfer gives a strong research + content combo. On
              tighter budgets, SE Ranking + Surfer is a smart alternative.
            </li>
            <li>
              <strong>Solo creators/freelancers:</strong> Start with SE Ranking
              for tracking and basic research. Add Surfer for your highest-ROI
              articles or retainers where on-page quality really matters.
            </li>
            <li>
              <strong>Technical SEO focus:</strong> Semrush or SE Ranking will
              matter more; Surfer becomes an add-on for strategic content URLs
              rather than a core tool.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/tools/surfer-seo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-600"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Surfer SEO review
          </Link>
          <div className="flex flex-wrap gap-2">
            {contenders.map((c) => {
              const slug = c.key.toLowerCase().replace(/\s+/g, "-");
              return (
                <a
                  key={c.key}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-slate-200"
                  href={`/tools/${slug}`}
                >
                  View {c.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
