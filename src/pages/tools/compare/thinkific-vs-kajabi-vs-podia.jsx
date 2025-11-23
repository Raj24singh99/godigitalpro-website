import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Workflow,
  Users,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "thinkific vs kajabi vs podia";
const canonical = buildCanonical(
  "/tools/compare/thinkific-vs-kajabi-vs-podia"
);

const brandMeta = {
  thinkific: {
    gradient: "from-indigo-500 via-sky-500 to-blue-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/thinkific.com",
  },
  kajabi: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/kajabi.com",
  },
  podia: {
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/podia.com",
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
    key: "kajabi",
    name: "Kajabi",
    blurb:
      "All-in-one platform with courses, memberships, email marketing, and funnels.",
    url: "https://kajabi.com",
  },
  {
    key: "podia",
    name: "Podia",
    blurb:
      "Affordable all-in-one solution for courses, downloads, and memberships.",
    url: "https://www.podia.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    thinkific: "Educators wanting assessments, certificates, and student focus.",
    kajabi: "Marketers wanting all-in-one with automation and community.",
    podia: "Budget-friendly creators selling courses, downloads, and memberships.",
  },
  {
    label: "Marketing & email",
    thinkific: "Relies on integrations for email and advanced automations.",
    kajabi: "Native email, funnels, automations, and pipelines.",
    podia: "Built-in email and campaigns; lighter automation.",
  },
  {
    label: "Community/memberships",
    thinkific: "Communities plus robust course experience.",
    kajabi: "Native community, memberships, and programs.",
    podia: "Light community; memberships supported but basic.",
  },
  {
    label: "Pricing feel",
    thinkific: "Predictable tiers, including a free plan for starting out.",
    kajabi: "Premium pricing; can replace multiple tools if fully used.",
    podia: "Lower price and simple, predictable plans.",
  },
  {
    label: "Ease of use",
    thinkific: "Straightforward course builder and curriculum tools.",
    kajabi: "All-in-one—more to learn but cohesive when set up.",
    podia: "Very easy UI and minimal setup for first-time creators.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { thinkific: 8.8, kajabi: 8.4, podia: 9.2 } },
  { label: "Marketing/funnels", scores: { thinkific: 8.0, kajabi: 9.4, podia: 8.1 } },
  {
    label: "Student experience",
    scores: { thinkific: 9.3, kajabi: 8.7, podia: 8.0 },
  },
  {
    label: "Community/membership",
    scores: { thinkific: 8.6, kajabi: 9.1, podia: 8.0 },
  },
  { label: "Value", scores: { thinkific: 8.9, kajabi: 8.2, podia: 9.3 } },
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
  kajabi: avg("kajabi"),
  podia: avg("podia"),
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
    notes: "Priced fairly with strong learning tools and a free plan to start.",
  },
  {
    plan: "Kajabi Basic",
    monthly: "From ~US$149/mo",
    annual: "Lower on annual",
    limits: "Courses, memberships, email, automation, funnels",
    notes:
      "Higher price, but can consolidate email, funnel, and community tools.",
  },
  {
    plan: "Podia Mover",
    monthly: "From ~US$39/mo",
    annual: "Lower on annual",
    limits: "Courses, downloads, simple email, memberships",
    notes: "Best budget all-in-one for smaller catalogs and simple launches.",
  },
];

const faqs = [
  {
    q: `Is Thinkific better than Kajabi or Podia in ${YEAR}?`,
    a: "Thinkific is strongest when you prioritize student experience, assessments, and structured courses. Kajabi is best when you want an all-in-one stack with marketing, email, funnels, and community. Podia is ideal if you want a budget-friendly all-in-one platform with simple setup and predictable costs.",
  },
  {
    q: "Which is most affordable?",
    a: "Podia generally has the lowest entry price and predictable plans. Thinkific offers a free plan and reasonably priced tiers as you grow. Kajabi is premium, but can be cost-effective if it fully replaces separate tools for email, funnels, and community.",
  },
  {
    q: "Which is best for community?",
    a: "Kajabi has the most robust native community and membership features integrated into offers and email. Thinkific offers communities plus a strong course UX. Podia supports community and memberships but is lighter in terms of engagement features.",
  },
  {
    q: "Which is best for automation?",
    a: "Kajabi has the strongest native automations, pipelines, and email sequences. Thinkific and Podia both rely more heavily on integrations with external tools for advanced workflows and multi-step launches.",
  },
  {
    q: "Which is best purely for course delivery?",
    a: "Thinkific is often preferred by education-first creators who want solid assessments, certificates, and a clear student journey. Kajabi and Podia are better if you value the broader business stack more than deep assessment tooling.",
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
      "Great learning experience and student UX",
      "Assessments, certificates, and structured curriculum",
      "Communities and cohorts supported",
      "Predictable pricing with a free tier",
    ],
    cons: [
      "Marketing automation mainly via integrations",
      "Email not native; needs external tools for campaigns",
      "Site and page design flexibility below Kajabi",
    ],
  },
  kajabi: {
    pros: [
      "All-in-one with email, funnels, and pipelines",
      "Integrated community and memberships",
      "Automation sequences and tagging",
      "Reduces overall tool count when fully adopted",
    ],
    cons: [
      "Highest monthly price among the three",
      "More features to learn at the start",
      "Assessments less deep than Thinkific for some use cases",
    ],
  },
  podia: {
    pros: [
      "Affordable and simple all-in-one",
      "Courses, downloads, email, and memberships included",
      "Very low learning curve for new creators",
      "Good fit for small catalogs and side projects",
    ],
    cons: [
      "Lighter automation vs Kajabi",
      "Less design flexibility and customization",
      "Community tools are more basic than Kajabi/Thinkific",
    ],
  },
};

const featureBullets = {
  curriculumDelivery: [
    "Thinkific: Built around structured courses with modules, lessons, quizzes, certificates, and solid student progress tracking.",
    "Kajabi: Flexible products (courses, coaching, podcasts) that tie into offers, emails, and funnels; strong enough for most course businesses.",
    "Podia: Simple but effective course delivery for smaller catalogs; ideal when you do not need complex assessment features.",
  ],
  marketingFunnels: [
    "Thinkific: Checkouts, coupons, and order bumps are built-in, but serious funnels are usually driven by tools like ConvertKit, ActiveCampaign, or HubSpot.",
    "Kajabi: Landing pages, pipelines, email sequences, and automations all live in one place, making complete launch funnels possible without extra tools.",
    "Podia: Built-in email and simple campaigns handle basic launches and announcements; complex funnels will still rely on external tools.",
  ],
  communityMemberships: [
    "Thinkific: Communities layer alongside courses so you can host cohorts, Q&A, and discussions near your structured curriculum.",
    "Kajabi: Community, memberships, and courses are tightly integrated, which is ideal for long-term programs and subscriptions.",
    "Podia: Memberships and simple community features suit early-stage membership products, but are lighter than Kajabi's community tools.",
  ],
  pricingScale: [
    "Thinkific: Competitive pricing and a free plan make it easy to start; higher tiers unlock advanced features as your catalog grows.",
    "Kajabi: Higher cost, but may become cheaper overall if you consolidate email, landing pages, funnels, and community into Kajabi.",
    "Podia: Strong value at lower price points, especially for creators who want to keep recurring software costs down while still owning their products.",
  ],
  migrationsSupport: [
    "Thinkific: Common destination for education-first businesses; many migration guides and templates available from the ecosystem.",
    "Kajabi: Popular among creators wanting a single ‘home’ for their knowledge business, with agencies offering full-stack migrations.",
    "Podia: Straightforward to set up and easy to migrate a small set of courses and downloads without complex mapping.",
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

export default function ThinkificVsKajabiVsPodiaPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Thinkific vs Kajabi vs Podia – Which to pick? (${YEAR})`}
        description="Deep comparison of Thinkific, Kajabi, and Podia on student experience, community, marketing funnels, automation, pricing, and best-fit creators."
        canonical={canonical}
        keywords={`${primaryKeyword}, course platforms, creator tools, kajabi alternative, podia alternative, thinkific alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          Course platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Thinkific vs Kajabi vs Podia – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Thinkific focuses on student success with structured curriculum,
          assessments, and certificates. Kajabi is the all-in-one marketing and
          community powerhouse. Podia is the budget-friendly all-in-one for
          creators who want courses, downloads, and memberships without a
          complex tech stack. Here is a practical breakdown to help you decide
          where to build.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-indigo-50/90 p-6 ring-1 ring-indigo-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Thinkific</strong> if you prioritize student
              experience, assessments, and learning design. Choose{" "}
              <strong>Kajabi</strong> if you want an all-in-one engine for
              courses, email, funnels, and community. Choose{" "}
              <strong>Podia</strong> if you want a simple, affordable platform
              that covers courses, downloads, and memberships in one place.
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
              Thinkific shines for structured courses, assessments, and student
              progress tracking.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Users className="h-5 w-5 text-emerald-700" /> Best for community
            </div>
            <p className="text-sm text-slate-700">
              Kajabi leads for community and memberships integrated into your
              offers and funnels.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-purple-700" /> Best on a budget
            </div>
            <p className="text-sm text-slate-700">
              Podia offers courses, downloads, email, and memberships at a more
              accessible price point.
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
                  <th className="px-4 py-3">Kajabi</th>
                  <th className="px-4 py-3">Podia</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.kajabi}</td>
                    <td className="px-4 py-3 text-slate-700">{row.podia}</td>
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
                  <th className="px-4 py-3">Kajabi</th>
                  <th className="px-4 py-3">Podia</th>
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
                          winnerKey === "kajabi"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.kajabi}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "podia"
                            ? "font-semibold text-purple-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.scores.podia}
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
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.kajabi}
                  </td>
                  <td className="px-4 py-3 font-semibold text-purple-800">
                    {averages.podia}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature behavior in real launches */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Thinkific, Kajabi, and Podia behave in real launches
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
              Community, memberships & ongoing value
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
            <strong>Thinkific</strong> is attractive for education-first creators
            who want structured learning tools, <strong>Kajabi</strong> suits
            those ready to centralize their entire marketing and product stack,
            and <strong>Podia</strong> is ideal when budget and simplicity are
            the top priorities.
          </p>
        </section>

        {/* Shared ProsConsSection for any global styling you use elsewhere */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Thinkific:</strong> Very approachable for course creators
              who think in terms of curriculum and lessons. Most educators can
              launch an initial course without heavy tech support.
            </li>
            <li>
              <strong>Kajabi:</strong> Slightly steeper learning curve because
              it includes email, funnels, pages, and community. Once configured,
              it becomes the central operating system for your knowledge
              business.
            </li>
            <li>
              <strong>Podia:</strong> One of the simplest UIs in the market.
              Ideal for solo creators who want to get products live without
              spending weeks learning a new system.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Education-first academy with deep curriculum:</strong>{" "}
              <span className="font-semibold">Thinkific</span> is often the best
              fit thanks to assessments, certificates, and student-focused UX.
            </li>
            <li>
              <strong>Personal brand building a full ecosystem:</strong>{" "}
              <span className="font-semibold">Kajabi</span> fits when you want
              courses, memberships, email, pipelines, and community to live in a
              single platform and you are ready to invest more per month.
            </li>
            <li>
              <strong>Budget-conscious creator with multiple small products:</strong>{" "}
              <span className="font-semibold">Podia</span> is ideal for a mix of
              mini-courses, digital downloads, and a light membership with
              minimal overhead.
            </li>
            <li>
              <strong>Agency or studio running education for clients:</strong>{" "}
              Choose <span className="font-semibold">Thinkific</span> if the
              focus is delivering premium learning experiences, or{" "}
              <span className="font-semibold">Kajabi</span> if you also manage
              your clients’ funnels, email, and community in one place.
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Thinkific:</strong> Best when you care deeply about
              student experience, structured curriculum, and assessments. Plan
              to pair it with strong email/funnel tools as your marketing
              sophistication grows.
            </li>
            <li>
              <strong>Kajabi:</strong> Best when you are ready to treat Kajabi
              as the heart of your business—courses, email, funnels, community,
              and website in one place. Worth the premium if you consolidate
              multiple tools.
            </li>
            <li>
              <strong>Podia:</strong> Best when you want a low-friction,
              low-cost way to sell courses, downloads, and memberships, and do
              not need advanced assessment or automation features yet.
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
