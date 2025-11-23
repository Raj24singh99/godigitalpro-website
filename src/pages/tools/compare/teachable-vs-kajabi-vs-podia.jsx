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
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "teachable vs kajabi vs podia";
const canonical = buildCanonical(
  "/tools/compare/teachable-vs-kajabi-vs-podia"
);

const brandMeta = {
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
  podia: {
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    badge: "bg-purple-100 text-purple-900",
    logo: "https://logo.clearbit.com/podia.com",
  },
};

const contenders = [
  {
    key: "teachable",
    name: "Teachable",
    blurb:
      "Beginner-friendly course builder with coaching offers and a solid checkout.",
    url: "https://teachable.com",
  },
  {
    key: "kajabi",
    name: "Kajabi",
    blurb:
      "All-in-one platform for courses, memberships, email, and funnels in one stack.",
    url: "https://kajabi.com",
  },
  {
    key: "podia",
    name: "Podia",
    blurb:
      "Budget-friendly all-in-one for courses, digital downloads, and memberships.",
    url: "https://www.podia.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    teachable: "Creators needing easy setup and coaching offers.",
    kajabi: "Marketers who want all-in-one marketing, funnels, and community.",
    podia: "Budget-conscious creators needing simple all-in-one.",
  },
  {
    label: "Marketing & email",
    teachable: "Relies on integrations; good checkout and coupons.",
    kajabi: "Native email, funnels, automations, and pipelines.",
    podia: "Built-in email; lighter automation and funnels.",
  },
  {
    label: "Community/memberships",
    teachable: "Coaching and basic upsells; community via add-ons.",
    kajabi: "Robust community and memberships built-in.",
    podia: "Memberships supported; community features are lighter.",
  },
  {
    label: "Design flexibility",
    teachable: "Clean templates; straightforward branding and layout.",
    kajabi: "Site, pages, and pipelines are customizable.",
    podia: "Simple editor; fewer design and layout controls.",
  },
  {
    label: "Pricing feel",
    teachable:
      "Affordable starter; transaction fees on lower tiers increase costs as you grow.",
    kajabi: "Premium pricing that replaces multiple tools if used fully.",
    podia: "Very affordable and predictable across tiers.",
  },
];

const scoreboard = [
  { label: "Ease of use", scores: { teachable: 9.2, kajabi: 8.4, podia: 9.3 } },
  {
    label: "Marketing/funnels",
    scores: { teachable: 8.3, kajabi: 9.4, podia: 8.0 },
  },
  {
    label: "Community/memberships",
    scores: { teachable: 8.0, kajabi: 9.2, podia: 8.1 },
  },
  { label: "Value", scores: { teachable: 8.8, kajabi: 8.1, podia: 9.3 } },
  {
    label: "Learning experience",
    scores: { teachable: 8.5, kajabi: 8.7, podia: 8.0 },
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
  teachable: avg("teachable"),
  kajabi: avg("kajabi"),
  podia: avg("podia"),
};
const overallWinner = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const pricingTable = [
  {
    plan: "Teachable Basic",
    monthly: "From ~US$39/mo",
    annual: "Lower on annual",
    limits: "Courses, coaching, transaction fees apply",
    notes: "Great starter with coaching, checkout, and tax/VAT handling.",
  },
  {
    plan: "Kajabi Basic",
    monthly: "From ~US$149/mo",
    annual: "Lower on annual",
    limits: "Courses, memberships, email, pipelines",
    notes:
      "All-in-one; replaces email, funnel, and community tools if fully adopted.",
  },
  {
    plan: "Podia Mover",
    monthly: "From ~US$39/mo",
    annual: "Lower on annual",
    limits: "Courses, downloads, email, memberships",
    notes: "Best value for simple all-in-one needs with predictable pricing.",
  },
];

const faqs = [
  {
    q: `Is Teachable better than Kajabi or Podia in ${YEAR}?`,
    a: "Teachable is best when you want to launch online courses and coaching offers quickly with a solid checkout. Kajabi wins when you need all-in-one marketing, funnels, and community in a single platform. Podia wins for affordability if you want courses, downloads, and memberships without a high monthly bill.",
  },
  {
    q: "Which is best for all-in-one marketing?",
    a: "Kajabi. It bundles email, funnels, landing pages, and automations natively. Teachable and Podia can work well with marketing, but you will lean more on integrations and external tools for advanced funnels.",
  },
  {
    q: "Which is most affordable?",
    a: "Podia is typically the lowest-cost all-in-one, especially as your audience grows. Teachable has affordable starter plans but adds transaction fees on lower tiers. Kajabi is premium, but can be cost-effective if it replaces multiple tools (email, funnels, community, website).",
  },
  {
    q: "Which is simplest to launch?",
    a: "Teachable and Podia are both very easy. Teachable shines for course and coaching launches, while Podia keeps the UI minimal for courses, downloads, and memberships. Kajabi is still user-friendly but has more features to configure.",
  },
  {
    q: "Which is better for memberships and community?",
    a: "Kajabi is strongest for structured memberships and community baked into the platform. Podia supports memberships and has basic community features. Teachable is more course- and coaching-centric, with community often handled via add-ons or external tools.",
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
  teachable: {
    pros: [
      "Beginner-friendly course and coaching builder",
      "Strong checkout, taxes, and basic upsells",
      "Good for course-first creators who want simplicity",
    ],
    cons: [
      "Transaction fees on lower tiers",
      "Marketing funnels rely on external tools and integrations",
      "Community requires add-ons or separate platforms",
    ],
  },
  kajabi: {
    pros: [
      "All-in-one: email, funnels, pages, community, and courses",
      "Strong automation and pipelines",
      "Community and memberships are integrated",
      "Reduces tool sprawl when fully adopted",
    ],
    cons: [
      "Premium pricing versus Teachable and Podia",
      "More features to learn at the start",
      "Overkill if you just need a simple course site",
    ],
  },
  podia: {
    pros: [
      "Affordable and predictable plans",
      "Courses, downloads, email, and memberships in one place",
      "Very easy for creators to launch",
      "No transaction fees on most plans (check current details)",
    ],
    cons: [
      "Automation and funnels lighter than Kajabi",
      "Community is more basic",
      "Less design and layout flexibility than a full site builder",
    ],
  },
};

const featureBullets = {
  curriculumDelivery: [
    "Teachable: Structured course player with modules, lessons, and basic quizzes. Good student experience out of the box for linear and cohort-style programs.",
    "Kajabi: Flexible content types (courses, podcasts, coaching) with pipelines that connect modules directly to marketing and upsell flows.",
    "Podia: Clean, simple course delivery that works well for smaller catalogs and creators who want minimal setup.",
  ],
  marketingFunnels: [
    "Teachable: Solid checkout pages, coupons, and order bumps, but advanced funnels (tripwires, multi-step launches) are typically handled by tools like ConvertKit, ActiveCampaign, or ClickFunnels.",
    "Kajabi: Landing pages, email sequences, automations, and pipelines live in one platform. You can link lead magnets, webinars, and course launches without stitching multiple tools.",
    "Podia: Built-in email and simple campaigns cover basic launches; for complex funnels you will still lean on external tools or simpler campaign structures.",
  ],
  communityMemberships: [
    "Teachable: Good for one-off courses and coaching programs; community is typically handled via Circle, Facebook Groups, Discord, or other add-ons.",
    "Kajabi: Native community and membership features tie into offers, courses, and email, which is ideal for creators running a long-term membership or group program.",
    "Podia: Memberships and basic community tools are included and easy to set up, suitable for early-stage membership products.",
  ],
  pricingScale: [
    "Teachable: Great for getting started, but transaction fees and student counts can push you to higher plans as revenue grows.",
    "Kajabi: Higher base pricing, but costs can net out if you cancel multiple tools (email provider, funnel builder, simple community platform).",
    "Podia: Strong value if you want to keep recurring costs low while still owning courses, downloads, and memberships.",
  ],
  migrationsSupport: [
    "Teachable: Popular destination for course migrations; many templates and checklists from the community.",
    "Kajabi: Agencies and specialists often support full ‘Kajabi-only’ stack migrations so you can centralize your tech.",
    "Podia: Straightforward for small catalogs; simple structure makes migration and setup less overwhelming.",
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

export default function TeachableVsKajabiVsPodiaPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Teachable vs Kajabi vs Podia – Which to pick? (${YEAR})`}
        description="Deep comparison of Teachable, Kajabi, and Podia on ease of use, marketing funnels, community, memberships, pricing, and best-fit creators."
        canonical={canonical}
        keywords={`${primaryKeyword}, course platforms, creator tools, kajabi alternative, podia alternative`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Course platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Teachable vs Kajabi vs Podia – Honest Comparison ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Teachable is the simplest way to launch courses and coaching with a
          solid checkout. Kajabi is the all-in-one stack for courses, email,
          funnels, and community in one place. Podia is the budget-friendly
          all-in-one for courses, downloads, and memberships. Below is a
          practical breakdown so you can choose the right platform for your
          audience size, marketing workflow, and budget.
        </p>

        {/* Quick verdict + highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Teachable</strong> if you want to ship courses and
              coaching offers fast without a complex setup. Choose{" "}
              <strong>Kajabi</strong> if you want your site, email, funnels, and
              community under one roof. Choose <strong>Podia</strong> if you
              want simple all-in-one features with the best price-to-feature
              balance.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" /> Overall scoreboard leader:{" "}
              {overallWinner.charAt(0).toUpperCase() + overallWinner.slice(1)}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinner]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <GraduationCap className="h-5 w-5 text-amber-700" /> Best for
              coaching + courses
            </div>
            <p className="text-sm text-slate-700">
              Teachable’s coaching feature, simple builder, and strong checkout
              make it ideal for coaches and course-first creators.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-700" /> Best all-in-one
              stack
            </div>
            <p className="text-sm text-slate-700">
              Kajabi gives you email, funnels, pages, community, and courses in
              a single login, reducing tool sprawl if you commit to it.
            </p>
          </div>

          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-purple-700" /> Best on a budget
            </div>
            <p className="text-sm text-slate-700">
              Podia covers courses, downloads, email, and memberships at a
              lower price point, which is ideal for early-stage creators.
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
                  <th className="px-4 py-3">Teachable</th>
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
                      {row.teachable}
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
                  <th className="px-4 py-3">Teachable</th>
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
                <tr className="bg-amber-50/70">
                  <th className="bg-amber-100 px-4 py-3 font-semibold text-slate-900">
                    Average
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.teachable}
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

        {/* Feature behavior in real funnels */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold">
            How Teachable, Kajabi, and Podia behave in real launches
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

        {/* Pros & cons cards */}
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
            <ClipboardList className="h-6 w-6 text-amber-600" />
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
            <strong>Podia</strong> tends to be the best value on a tight budget,
            <strong>Teachable</strong> is an easy starting point that may
            require marketing add-ons, and <strong>Kajabi</strong> makes the
            most sense if you intentionally replace separate tools for email,
            funnels, and community.
          </p>
        </section>

        {/* Shared ProsConsSection */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">UX & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Teachable:</strong> Very low friction to publish a first
              course or coaching program. Most creators can launch within days,
              even without a tech background.
            </li>
            <li>
              <strong>Kajabi:</strong> Slightly steeper learning curve because
              it includes email, pipelines, and community. Once configured, it
              becomes a central operating system for your digital products.
            </li>
            <li>
              <strong>Podia:</strong> Extremely simple UI that suits
              first-time course creators and small teams that want minimal
              complexity in their stack.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Solo coach with a flagship program:</strong>{" "}
              <span className="font-semibold">Teachable</span> wins if you
              mainly sell one or two programs and coaching offers and do most of
              your email/funnel work elsewhere.
            </li>
            <li>
              <strong>Creator building a full knowledge business:</strong>{" "}
              <span className="font-semibold">Kajabi</span> is ideal when you
              want courses, community, memberships, and email marketing all in
              one place and are ready to pay for consolidation.
            </li>
            <li>
              <strong>Budget-conscious creator with multiple small products:</strong>{" "}
              <span className="font-semibold">Podia</span> works well for a
              catalog of small courses, downloads, and a light membership at a
              lower monthly cost.
            </li>
            <li>
              <strong>Agency or studio running education for clients:</strong>{" "}
              <span className="font-semibold">Kajabi</span> or{" "}
              <span className="font-semibold">Teachable</span> depending on
              whether you own the full funnel (Kajabi) or only the learning
              experience (Teachable).
            </li>
          </ul>
        </section>

        {/* Final verdict */}
        <section className="mt-12 space-y-4 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <h2 className="text-2xl font-bold">Final verdict</h2>
          <ul className="space-y-2 text-sm text-slate-100">
            <li>
              <strong>Teachable:</strong> Excellent starting point for course
              and coaching creators who want a straightforward platform, strong
              checkout, and are happy to plug in separate marketing tools as
              they grow.
            </li>
            <li>
              <strong>Kajabi:</strong> Best when you are ready to centralize
              your tech stack and treat Kajabi as your full marketing and
              delivery platform. The price is higher, but so is the potential
              tool consolidation.
            </li>
            <li>
              <strong>Podia:</strong> Ideal for creators who want an
              affordable, simple all-in-one solution for courses, downloads,
              email, and memberships without committing to a premium stack.
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
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 group-open:text-amber-800">
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
