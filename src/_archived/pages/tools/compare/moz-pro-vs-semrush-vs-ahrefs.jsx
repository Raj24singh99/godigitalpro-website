import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Link as LinkIcon,
  Crown,
  ArrowLeft,
  Search,
  BarChart3,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "moz pro vs semrush vs ahrefs";
const canonical = buildCanonical("/tools/compare/moz-pro-vs-semrush-vs-ahrefs");

const brandMeta = {
  "moz pro": {
    gradient: "from-indigo-500 via-purple-500 to-blue-600",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/moz.com",
  },
  semrush: {
    gradient: "from-orange-500 via-amber-500 to-red-500",
    badge: "bg-orange-100 text-orange-900",
    logo: "https://logo.clearbit.com/semrush.com",
  },
  ahrefs: {
    gradient: "from-blue-500 via-sky-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/ahrefs.com",
  },
};

const contenders = [
  {
    key: "moz pro",
    name: "Moz Pro",
    blurb: "Trusted authority metrics, rank tracking, and SEO audits.",
    url: "/tools/moz-pro",
  },
  {
    key: "semrush",
    name: "Semrush",
    blurb: "Broad SEO/SEM suite with PPC, content, and social tools.",
    url: "/tools/semrush",
  },
  {
    key: "ahrefs",
    name: "Ahrefs",
    blurb: "Deep backlink index and SERP-driven content research.",
    url: "/tools/ahrefs",
  },
];

const comparisonRows = [
  {
    label: "Data strengths",
    "moz pro": "Authority metrics (DA/PA), stable rank tracking & audits.",
    semrush: "SEO + PPC + content briefs + social scheduling.",
    ahrefs: "Backlink index depth, SERP explorer, and content gap.",
  },
  {
    label: "Backlink coverage",
    "moz pro": "Strong, but smaller index vs Ahrefs and Semrush.",
    semrush: "Good link index with anchor/referring domain insights.",
    ahrefs: "Market-leading backlink discovery and freshness.",
  },
  {
    label: "Rank tracking",
    "moz pro": "Clear reporting, local & mobile support, easy exports.",
    semrush: "Robust tracking with competitor overlays and visibility.",
    ahrefs: "Solid tracking; more focused on research than reporting polish.",
  },
  {
    label: "Content tools",
    "moz pro": "Basic on-page suggestions and keyword explorer.",
    semrush: "Content templates, briefs, topic research, SEO writing help.",
    ahrefs: "Content gap, top pages, and SERP-based ideation.",
  },
  {
    label: "All-in-one coverage",
    "moz pro": "SEO core (keywords, links, audits, rank).",
    semrush: "SEO + PPC + social + content marketing workflows.",
    ahrefs: "SEO-focused suite (links, content, technical, rank).",
  },
  {
    label: "Best for",
    "moz pro": "Teams needing trusted DA/PA, rank reports, and audits.",
    semrush: "Agencies and in-house teams wanting an all-in-one growth suite.",
    ahrefs: "Link-first SEOs needing fast, deep research.",
  },
];

const scoreboard = [
  { label: "Backlink data", scores: { "moz pro": 8.6, semrush: 8.8, ahrefs: 9.6 } },
  {
    label: "Keyword & SERP research",
    scores: { "moz pro": 8.7, semrush: 9.3, ahrefs: 9.4 },
  },
  {
    label: "Rank tracking/reporting",
    scores: { "moz pro": 9.1, semrush: 9.0, ahrefs: 8.7 },
  },
  { label: "Content/briefs", scores: { "moz pro": 7.8, semrush: 9.2, ahrefs: 8.2 } },
  {
    label: "All-in-one coverage",
    scores: { "moz pro": 8.2, semrush: 9.5, ahrefs: 8.5 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  "moz pro": avg("moz pro"),
  semrush: avg("semrush"),
  ahrefs: avg("ahrefs"),
};

const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const formatToolName = (key) => {
  if (key === "moz pro") return "Moz Pro";
  if (key === "semrush") return "Semrush";
  if (key === "ahrefs") return "Ahrefs";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const pricingTable = [
  {
    plan: "Moz Pro core plans",
    tool: "Moz Pro",
    positioning: "SEO-focused suite with DA/PA, rank tracking, and audits.",
    pricingFeel: "Tiered plans based on campaigns, tracked keywords, and crawl limits.",
    notes:
      "Good fit when you mainly need SEO metrics, link data, and clear client-friendly reporting.",
  },
  {
    plan: "Semrush Pro / Guru / Business",
    tool: "Semrush",
    positioning: "All-in-one growth platform (SEO, PPC, content, social).",
    pricingFeel: "Higher price point; plans scale with projects, users, and limits.",
    notes:
      "Best justified if you use multiple modules (SEO + PPC + content) rather than SEO alone.",
  },
  {
    plan: "Ahrefs Lite / Standard / Advanced",
    tool: "Ahrefs",
    positioning: "SEO-centric toolset focused on backlinks and SERP research.",
    pricingFeel: "Mid-to-high; limits on rows, projects, and reporting seats.",
    notes:
      "Great value for link-heavy, content-led SEO if you truly use the depth of the index.",
  },
];

const featureBullets = {
  research: [
    "Moz Pro: Keyword Explorer with difficulty, CTR curves, and SERP features data.",
    "Semrush: Keyword Magic Tool, topic research, and competitive domain vs domain views.",
    "Ahrefs: Keywords Explorer plus SERP overview, click data, and parent topic insights.",
  ],
  links: [
    "Moz Pro: DA/PA benchmarks with link intersect and spam score for prioritising prospects.",
    "Semrush: Backlink analytics combined with outreach lists, toxic link audit, and disavow helpers.",
    "Ahrefs: Industry-leading index with link growth charts, broken links, and historical snapshots.",
  ],
  reporting: [
    "Moz Pro: Simple scheduled reports and clear graphs clients can understand quickly.",
    "Semrush: Custom dashboards, My Reports, and multi-channel reporting for agencies.",
    "Ahrefs: Strong in-app reporting and exports; often paired with Looker/Data Studio for dashboards.",
  ],
};

const prosCons = {
  "moz pro": {
    pros: [
      "Widely recognised authority metrics (DA/PA) that clients and stakeholders trust.",
      "Very clear rank tracking and site audit reports for agencies and in-house teams.",
      "Good balance of keyword research, link data, and on-site recommendations.",
    ],
    cons: [
      "Smaller backlink index versus Ahrefs and Semrush for deep link prospecting.",
      "Fewer built-in content brief and PPC tools than Semrush.",
      "Interface feels more SEO-only compared with broader growth platforms.",
    ],
  },
  semrush: {
    pros: [
      "Most complete all-in-one stack across SEO, PPC, content, and social.",
      "Excellent for agencies that want one hub for many client workflows.",
      "Strong keyword research, content templates, and site audits in one place.",
    ],
    cons: [
      "Price can feel high if you only need a subset of the modules.",
      "UI density can be overwhelming for new or non-technical users.",
      "Seat and export limits can be restrictive for larger teams on lower tiers.",
    ],
  },
  ahrefs: {
    pros: [
      "Leading backlink index and SERP-driven research tools.",
      "Fast, intuitive workflows for link building and content gap analysis.",
      "Great for content-led SEO teams and technical SEOs alike.",
    ],
    cons: [
      "Less PPC and non-SEO tooling than Semrush.",
      "Reporting and dashboards can require extra work for client-ready views.",
      "Pricing and usage limits can add up for very heavy users.",
    ],
  },
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Semrush wins for all-in-one SEO/SEM and content workflows. Ahrefs wins for backlink depth and SERP research. Moz Pro wins for trusted authority metrics and clear, client-friendly reporting.",
  },
  {
    q: "Best for backlinks?",
    a: "Ahrefs generally leads on backlink depth and freshness. Semrush is strong and keeps closing the gap. Moz Pro is solid but comparatively smaller for heavy link prospection.",
  },
  {
    q: "Best for content briefs and topic workflows?",
    a: "Semrush is usually best: content templates, briefs, topic research, and SEO writing helpers. Moz Pro is lighter here; Ahrefs offers strong topic and SERP research but fewer full brief generators.",
  },
  {
    q: "Best for simple reporting and authority benchmarking?",
    a: "Moz Pro is the easiest for straightforward rank, authority, and audit reports. Many stakeholders already recognise DA/PA, which helps with education and buy-in.",
  },
  {
    q: "Which is better for agencies?",
    a: "If you run SEO plus PPC and content for clients, Semrush often offers the most value. If your agency is link- and content-led, Ahrefs + Moz Pro (for DA/PA and reporting) is a strong combo.",
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

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function MozProVsSemrushVsAhrefsPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Moz Pro vs Semrush vs Ahrefs – SEO platform comparison (${YEAR})`}
        description="Compare Moz Pro, Semrush, and Ahrefs on backlinks, keyword research, rank tracking, content tools, and pricing to choose the right SEO platform for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, seo tools comparison, backlinks research, moz vs semrush vs ahrefs`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          SEO platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Moz Pro vs Semrush vs Ahrefs ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Moz Pro</strong> delivers trusted authority metrics and clear
          reporting. <strong>Semrush</strong> is the broadest all-in-one suite across
          SEO, PPC, and content. <strong>Ahrefs</strong> leads on backlink depth and
          SERP research speed. Here is a structured comparison to help you decide
          which belongs in your SEO stack.
        </p>

        {/* Quick verdict + best for */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Semrush</strong> if you want one hub for SEO, PPC, and
              content marketing. Choose <strong>Ahrefs</strong> if backlink depth and
              SERP-driven research are your top priorities. Choose{" "}
              <strong>Moz Pro</strong> when you need DA/PA, rank tracking, and audits
              that clients and stakeholders instantly understand.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner:{" "}
              {formatToolName(overallWinner)}{" "}
              <span className="text-xs font-medium text-indigo-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold text-slate-900">Best for</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Search className="mt-0.5 h-4 w-4 text-indigo-600" />
                <span>
                  <strong>Moz Pro</strong> for DA/PA benchmarks, rank tracking, and
                  SEO audits.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Gauge className="mt-0.5 h-4 w-4 text-amber-600" />
                <span>
                  <strong>Semrush</strong> for all-in-one SEO/SEM plus content
                  workflows.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <LinkIcon className="mt-0.5 h-4 w-4 text-sky-600" />
                <span>
                  <strong>Ahrefs</strong> for backlink depth and fast SERP research.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 md:grid-cols-3">
            {contenders.map((tool) => (
              <div
                key={tool.key}
                className="rounded-2xl bg-white/60 p-4 ring-1 ring-slate-200"
              >
                <div className="flex items-center justify-between gap-2">
                  <LogoBadge name={tool.name} />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    Contender
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700">{tool.blurb}</p>
                <RouterLink
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-600"
                  to={tool.url}
                >
                  Visit page
                </RouterLink>
              </div>
            ))}
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Moz Pro</th>
                  <th className="px-4 py-3">Semrush</th>
                  <th className="px-4 py-3">Ahrefs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/60"
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </td>
                    <td className="px-4 py-3">{row["moz pro"]}</td>
                    <td className="px-4 py-3">{row.semrush}</td>
                    <td className="px-4 py-3">{row.ahrefs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-sky-600" /> Scoreboard (1–10)
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {scoreboard.map((row) => (
              <div
                key={row.label}
                className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-sm font-semibold text-slate-900">{row.label}</p>
                <div className="mt-2 space-y-1 text-sm text-slate-700">
                  <Score label="Moz Pro" value={row.scores["moz pro"]} />
                  <Score label="Semrush" value={row.scores.semrush} />
                  <Score label="Ahrefs" value={row.scores.ahrefs} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-600">
            Averages: Moz Pro {averages["moz pro"]}/10, Semrush {averages.semrush}/10,
            Ahrefs {averages.ahrefs}/10. The right choice still depends on whether you
            value breadth (Semrush), link depth (Ahrefs), or clarity and authority
            metrics (Moz Pro).
          </p>
        </section>

        {/* Feature comparison */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Keyword & SERP research</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.research.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Backlink analysis</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.links.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Reporting & dashboards</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.reporting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Tool</th>
                  <th className="px-4 py-3">Positioning</th>
                  <th className="px-4 py-3">Pricing feel</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.tool}</td>
                    <td className="px-4 py-3 text-slate-700">{row.positioning}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pricingFeel}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing, limits, and bundles change frequently. Always verify current
            tiers, user limits, and included modules on the vendor&apos;s pricing page
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Moz Pro:</strong> Clean and SEO-focused; easy for teams that want
              rankings, DA/PA, and audits without too much noise.
            </li>
            <li>
              <strong>Semrush:</strong> Feature-dense UI that shines for power users and
              agencies, but can be overwhelming initially.
            </li>
            <li>
              <strong>Ahrefs:</strong> Very fast and intuitive for SEOs who live in SERP
              and link data, with a modest learning curve for non-specialists.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Agencies running multi-channel campaigns:</strong> Semrush wins
              with SEO, PPC, content, and social tools under one roof.
            </li>
            <li>
              <strong>Teams focused on link building & content SEO:</strong> Ahrefs wins
              with deep backlink data and SERP-led content research.
            </li>
            <li>
              <strong>Consultants needing simple, trusted reports:</strong> Moz Pro wins
              with DA/PA, rank tracking, and audit reports that are easy to explain.
            </li>
            <li>
              <strong>Hybrid stacks:</strong> Many teams pair Semrush or Ahrefs with Moz
              Pro to use DA/PA for stakeholder comms while relying on their preferred
              research suite day to day.
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
              <h3 className="text-lg font-semibold">Moz Pro</h3>
              <p className="text-sm text-slate-700">
                Best when you want authority metrics, rank tracking, and audits that
                clients already recognise and trust.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: SEO consultants, agencies with reporting-heavy clients, and
                in-house SEO teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Semrush</h3>
              <p className="text-sm text-slate-700">
                Best for teams that need one platform for SEO, PPC, content, and basic
                social media insights.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Performance marketing teams, multi-service agencies, and
                growth squads.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Ahrefs</h3>
              <p className="text-sm text-slate-700">
                Best for link-led strategies, content gap analysis, and technical SEO
                that leans heavily on SERP data.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Content-heavy brands, link-building agencies, and technical
                SEOs.
              </p>
            </div>
          </div>
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
                <p className="mt-1 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3">
          <RouterLink
            to="/tools"
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </RouterLink>
        </div>
      </div>
    </main>
  );
}

const Score = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span>{label}</span>
    <span className="font-semibold text-slate-900">{value}/10</span>
  </div>
);
