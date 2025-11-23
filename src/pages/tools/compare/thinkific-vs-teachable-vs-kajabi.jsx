import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "thinkific vs teachable vs kajabi";
const canonical = buildCanonical(
  "/tools/compare/thinkific-vs-teachable-vs-kajabi"
);

const brandMeta = {
  thinkific: {
    gradient: "from-indigo-500 via-sky-500 to-blue-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/thinkific.com",
  },
  teachable: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/teachable.com",
  },
  kajabi: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/kajabi.com",
  },
};

const contenders = [
  {
    key: "thinkific",
    name: "Thinkific",
    blurb:
      "Course platform with strong student experience, assessments, and certificates.",
    url: "https://www.thinkific.com",
  },
  {
    key: "teachable",
    name: "Teachable",
    blurb:
      "User-friendly course builder with coaching, upsells, and solid checkout.",
    url: "https://teachable.com",
  },
  {
    key: "kajabi",
    name: "Kajabi",
    blurb:
      "All-in-one platform for courses, memberships, email marketing, and funnels.",
    url: "https://kajabi.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    thinkific: "Educators prioritizing student experience and assessments.",
    teachable: "Creators needing easy setup and coaching offers.",
    kajabi: "All-in-one marketers selling courses, memberships, and programs.",
  },
  {
    label: "Funnels & marketing",
    thinkific: "Integrates with external tools for funnels and email.",
    teachable: "Built-in checkout and coupons; funnels via integrations.",
    kajabi: "Native pipelines, email, landing pages, and automations.",
  },
  {
    label: "Community/memberships",
    thinkific: "Communities plus strong lessons, quizzes, and progress.",
    teachable: "Coaching and upsells; community via add-ons or external tools.",
    kajabi: "Native community, memberships, and email sequences.",
  },
  {
    label: "Design flexibility",
    thinkific: "Themes and page builder; supports custom code and branding.",
    teachable: "Clean templates; simpler customization for quick launches.",
    kajabi: "Customizable sites, pipelines, and email templates.",
  },
  {
    label: "Pricing feel",
    thinkific: "Predictable per-month tiers; free plan available.",
    teachable:
      "Affordable starter; transaction fees on lower tiers until you upgrade.",
    kajabi: "Priced higher but includes email, funnels, and communities.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { thinkific: 8.8, teachable: 9.2, kajabi: 8.6 } },
  {
    label: "Marketing/funnels",
    scores: { thinkific: 8.0, teachable: 8.3, kajabi: 9.4 },
  },
  {
    label: "Learning experience",
    scores: { thinkific: 9.3, teachable: 8.5, kajabi: 8.7 },
  },
  {
    label: "Community/memberships",
    scores: { thinkific: 8.6, teachable: 8.2, kajabi: 9.2 },
  },
  { label: "Value", scores: { thinkific: 8.9, teachable: 8.7, kajabi: 8.3 } },
];

const avg = (key) => {
  const total = scoreboard.reduce(
    (sum, row) => sum + (row.scores[key] || 0),
    0
  );
  return (total / scoreboard.length).toFixed(1);
};
const averages = {
  thinkific: avg("thinkific"),
  teachable: avg("teachable"),
  kajabi: avg("kajabi"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Thinkific Start",
    monthly: "From ~US$36/mo",
    annual: "Lower on annual",
    limits: "Courses, communities, assessments, certificates",
    notes: "Great balance of price and student experience, plus a free plan.",
  },
  {
    plan: "Teachable Basic",
    monthly: "From ~US$39/mo",
    annual: "Lower on annual",
    limits: "Courses, coaching, upsells (transaction fees on lower tiers)",
    notes: "Beginner-friendly with strong checkout and tax handling.",
  },
  {
    plan: "Kajabi Basic",
    monthly: "From ~US$149/mo",
    annual: "Lower on annual",
    limits: "Courses, memberships, email, funnels, and automations",
    notes:
      "All-in-one hub; higher price but replaces separate email, funnel, and community tools.",
  },
];

const faqs = [
  {
    q: `Is Thinkific better than Teachable or Kajabi in ${YEAR}?`,
    a: "Thinkific wins on student experience, assessments, and certificates. Teachable wins for beginner-friendly setup and coaching offers. Kajabi wins when you want an all-in-one stack with email, funnels, community, and site in one subscription.",
  },
  {
    q: "Which is best for all-in-one marketing?",
    a: "Kajabi. It bundles email, pipelines, landing pages, communities, and automations so your entire marketing stack lives in one tool.",
  },
  {
    q: "Which is most affordable to start?",
    a: "Teachable and Thinkific both have lower entry pricing and free or low-cost plans. Kajabi costs more per month but can be cost-effective if it replaces separate email, funnel, and community tools.",
  },
  {
    q: "Which has the best student experience?",
    a: "Thinkific is often preferred when you care about assessments, completion tracking, certificates, and an education-first experience.",
  },
  {
    q: "Which is best if I offer 1:1 or group coaching?",
    a: "Teachable is very popular for coaching thanks to its simple offers and checkout. Kajabi can work well too if you want coaching integrated into funnels and email sequences.",
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
  thinkific: {
    pros: [
      "Great student experience and course structure",
      "Assessments, quizzes, and certificates",
      "Communities and drip content support cohorts",
      "Predictable pricing with a free tier to start",
    ],
    cons: [
      "Funnels rely on external marketing tools",
      "Email and automation require integrations",
      "Design flexibility is below Kajabi’s all-in-one site builder",
    ],
  },
  teachable: {
    pros: [
      "Beginner-friendly builder for first-time course creators",
      "Coaching, upsells, and bundles are easy to set up",
      "Solid checkout, VAT/tax handling, and coupons",
      "Affordable entry pricing for solo creators",
    ],
    cons: [
      "Transaction fees on lower tiers until you upgrade",
      "Built-in marketing funnels are basic",
      "Community features are limited vs Thinkific/Kajabi",
    ],
  },
  kajabi: {
    pros: [
      "All-in-one with email, pipelines, landing pages, and funnels",
      "Built-in community and memberships",
      "Strong automation and tagging workflows",
      "Reduces tool sprawl when fully adopted",
    ],
    cons: [
      "Higher price point than Thinkific/Teachable",
      "Steeper learning curve for the full feature set",
      "Assessments have less depth than Thinkific’s tooling",
    ],
  },
};

const featureBullets = {
  curriculumDelivery: [
    "Thinkific: Built around structured curriculum with modules, lessons, quizzes, and certificates—ideal for academies or cohort-style courses.",
    "Teachable: Very easy to assemble lessons and modules; strong enough for most solo and small-team course businesses.",
    "Kajabi: Flexible product types (courses, coaching, podcasts) wrapped in offers; deep enough for most, but not as assessment-heavy as Thinkific.",
  ],
  marketingFunnels: [
    "Thinkific: Native checkouts, coupons, and order bumps; serious funnels usually rely on ConvertKit, ActiveCampaign, HubSpot, or similar tools.",
    "Teachable: Good checkout and upsells for small launches; advanced funnels and segmentation are typically handled via external email tools.",
    "Kajabi: Complete funnel engine with pipelines, landing pages, email sequences, and automations all built in—no extra funnel tool required.",
  ],
  communityMemberships: [
    "Thinkific: Communities live alongside courses, which works well for cohorts, Q&A, and discussion-based programs.",
    "Teachable: Focuses more on courses and coaching; communities are lighter and often supplemented with external tools like Circle or Facebook Groups.",
    "Kajabi: Strong native communities and memberships tightly integrated with offers and email, ideal for long-term programs and recurring revenue.",
  ],
  pricingScale: [
    "Thinkific: Competitive pricing and a free plan make it easy to start small and scale up as your course catalog grows.",
    "Teachable: Attractive for solo creators and coaches starting out; transaction fees incentivize upgrading as revenue increases.",
    "Kajabi: Higher cost but can become cheaper overall if it fully replaces separate tools for email, funnels, landing pages, and community.",
  ],
  migrationsSupport: [
    "Thinkific: Common choice for education-first migrations; many agencies and templates support moving complex curricula into Thinkific.",
    "Teachable: Very popular among early-stage creators; easy to migrate lightweight course catalogs and coaching programs.",
    "Kajabi: Favored by personal brands and online businesses that want one central ‘home’ for content, email, and community; migration support from agencies is widespread.",
  ],
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
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}
      >
        {name}
      </span>
    </div>
  );
};

export default function ThinkificVsTeachableVsKajabiPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Thinkific vs Teachable vs Kajabi – Which is best? (${YEAR})`}
        description="Deep comparison of Thinkific, Teachable, and Kajabi on student experience, marketing funnels, communities, pricing, and best-fit use-cases for course creators and educators."
        canonical={canonical}
        keywords={`${primaryKeyword}, course platforms, online courses, kajabi alternative, teachable alternative, thinkific alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Course platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Thinkific vs Teachable vs Kajabi – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Thinkific is built for strong learning experience and assessments.
          Teachable is beginner-friendly with coaching and solid checkout.
          Kajabi is the all-in-one growth engine for courses, memberships,
          email, and funnels. Here is how they compare so you can pick the right
          platform for your course business.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Thinkific</strong> if student outcomes,
              assessments, and certificates matter most. Choose{" "}
              <strong>Teachable</strong> for the simplest setup with courses and
              coaching offers. Choose <strong>Kajabi</strong> if you want a
              single platform for your site, email, funnels, community, and
              memberships.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-indigo-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-indigo-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <GraduationCap className="h-5 w-5 text-indigo-700" /> Best for
              learning experience
            </div>
            <p className="text-sm text-slate-700">
              Thinkific’s assessments, completion tracking, and communities keep
              learners engaged and progressing.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Users className="h-5 w-5 text-amber-700" /> Best for coaching
            </div>
            <p className="text-sm text-slate-700">
              Teachable is a favorite for solo coaches and creators who want to
              package 1:1, group programs, and courses quickly.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best all-in-one
            </div>
            <p className="text-sm text-slate-700">
              Kajabi combines site, email, pipelines, and community so you can
              consolidate your marketing stack.
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
            <Layers className="h-6 w-6 text-indigo-600" /> Side-by-side
            comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Thinkific</th>
                  <th className="px-4 py-3">Teachable</th>
                  <th className="px-4 py-3">Kajabi</th>
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
                      {row.thinkific}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.teachable}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.kajabi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Thinkific</th>
                  <th className="px-4 py-3">Teachable</th>
                  <th className="px-4 py-3">Kajabi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const entries = Object.entries(row.scores);
                  const winnerKey = entries.sort((a, b) => b[1] - a[1])[0][0];
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/40"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "thinkific"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.thinkific}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "teachable"
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.teachable}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "kajabi"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.kajabi}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-indigo-50/70">
                  <th className="bg-indigo-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.thinkific}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.teachable}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.kajabi}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How they behave in real launches */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Thinkific, Teachable, and Kajabi behave in real launches
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Course delivery & curriculum structure
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.curriculumDelivery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Marketing funnels, launches & email
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.marketingFunnels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Community, memberships & long-term value
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.communityMemberships.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Pricing, scaling & ROI</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.pricingScale.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Migrations, support & long-term stack
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.migrationsSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pros & cons at a glance */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pros & cons at a glance</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(prosCons).map(([key, value]) => (
              <div
                key={key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <LogoBadge
                    name={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-emerald-700">Pros</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {value.pros.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-rose-700">Cons</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                    {value.cons.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-indigo-600" />
            Pricing snapshot
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[640px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr
                    key={row.plan}
                    className="odd:bg-white even:bg-slate-50/40"
                  >
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
          <p className="text-sm text-slate-700">
            Pricing and limits change over time. In practice,{" "}
            <strong>Thinkific</strong> feels best for education-first businesses,
            <strong>Teachable</strong> suits solo creators and coaches who want
            to move quickly, and <strong>Kajabi</strong> fits brands that are
            ready to centralize their entire marketing and product stack.
          </p>
        </section>

        {/* Shared ProsConsSection for global styling */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Thinkific:</strong> Very approachable for course creators
              who think in terms of curriculum, modules, and assessments.
              Education-focused teams tend to feel at home quickly.
            </li>
            <li>
              <strong>Teachable:</strong> One of the easiest platforms to get a
              first course or coaching offer live. The interface is simple and
              opinionated, which reduces decision fatigue.
            </li>
            <li>
              <strong>Kajabi:</strong> Slightly steeper learning curve because
              it includes email, funnels, pages, and community. Once configured,
              it becomes the central operating system for your knowledge
              business.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases & winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Education-first academy or corporate training:</strong>{" "}
              <span className="font-semibold">Thinkific</span> is often the best
              fit due to assessments, certificates, and a clear student journey.
            </li>
            <li>
              <strong>Solo coach or creator launching courses + coaching:</strong>{" "}
              <span className="font-semibold">Teachable</span> is ideal for
              packaging 1:1, group, and course content rapidly without heavy
              setup.
            </li>
            <li>
              <strong>Personal brand building a full ecosystem:</strong>{" "}
              <span className="font-semibold">Kajabi</span> fits when you want
              courses, memberships, email, funnels, and community to live in one
              place and you are ready to pay more for consolidation.
            </li>
            <li>
              <strong>Agency managing launches for clients:</strong> Use{" "}
              <span className="font-semibold">Thinkific</span> when the focus is
              learning outcomes, <span className="font-semibold">Teachable</span>{" "}
              for simple programs, or <span className="font-semibold">Kajabi</span>{" "}
              when you also run email and funnels on behalf of clients.
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Thinkific:</strong> Best for education-first creators and
              academies that care about assessments, certificates, and student
              success metrics. Plan to pair it with a dedicated email/funnel
              tool as you scale.
            </li>
            <li>
              <strong>Teachable:</strong> Best for solo creators and coaches who
              want to get paid products live quickly with a friendly builder,
              good checkout, and coaching features, then layer in marketing
              tools over time.
            </li>
            <li>
              <strong>Kajabi:</strong> Best when you are ready to treat Kajabi
              as the heart of your online business—courses, email, funnels,
              community, and site in one place. The higher price can be worth it
              if you fully replace multiple tools.
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-slate-50"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-indigo-800">
                  {item.q}
                  <span className="text-xs text-slate-500 group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xs text-slate-500 group-open:inline">
                    –
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-sky-700">
          <ArrowLeft className="h-4 w-4" />
          <Link to="/tools">Back to Tools Hub</Link>
        </div>
      </div>
    </main>
  );
}
