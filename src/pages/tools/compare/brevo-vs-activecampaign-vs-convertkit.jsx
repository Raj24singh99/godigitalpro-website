import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  Gauge,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();

const page = {
  slug: "brevo-vs-activecampaign-vs-convertkit",
  primaryKeyword: "brevo vs activecampaign vs convertkit",
  title: "Brevo vs ActiveCampaign vs ConvertKit: which email platform wins?",
  description:
    "Compare Brevo (Sendinblue), ActiveCampaign, and ConvertKit on automation depth, CRM, SMS, ease of use, pricing, and best-fit teams.",
  summary:
    "ActiveCampaign is deepest on automation and CRM. Brevo (Sendinblue) balances email, SMS, and lightweight CRM at strong value. ConvertKit is the simplest, creator-first option.",
};

const canonical = buildCanonical(`/tools/compare/${page.slug}`);

const contenders = [
  {
    key: "brevo",
    name: "Brevo (Sendinblue)",
    tagline: "Email + SMS + lightweight CRM at great value.",
    url: "https://www.brevo.com/",
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/brevo.com",
  },
  {
    key: "activecampaign",
    name: "ActiveCampaign",
    tagline: "Deep automation and CRM scoring.",
    url: "https://www.activecampaign.com/",
    gradient: "from-indigo-500 via-blue-600 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/activecampaign.com",
  },
  {
    key: "convertkit",
    name: "ConvertKit",
    tagline: "Creator-first simplicity.",
    url: "https://convertkit.com/",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
];

const comparisonRows = [
  {
    label: "Automation depth",
    brevo: "Visual automation builder with essentials; lighter than AC.",
    activecampaign: "Industry-leading journeys, goals, scoring, and branching.",
    convertkit: "Simple rules and automations fit for creators.",
  },
  {
    label: "CRM/contact timeline",
    brevo: "Light CRM, tasks, and simple pipeline for follow-up.",
    activecampaign: "Full CRM with deals, scoring, and activity timeline.",
    convertkit: "No full CRM; subscriber view with tags/segments.",
  },
  {
    label: "SMS capability",
    brevo: "Native SMS with competitive pricing and campaigns.",
    activecampaign: "SMS available but secondary to email/CRM.",
    convertkit: "Limited SMS; mostly via third-party add-ons.",
  },
  {
    label: "Ease of use",
    brevo: "Friendly UI balancing power and usability.",
    activecampaign: "Powerful but denser UI; learning curve for journeys.",
    convertkit: "Easiest for newsletters, launches, and simple funnels.",
  },
  {
    label: "Price/value",
    brevo: "Strong value across tiers; great email + SMS pricing.",
    activecampaign: "Pricier but justified if you fully use CRM/automation.",
    convertkit: "Fair for creators; can climb for very large lists.",
  },
  {
    label: "Ecommerce/creator fit",
    brevo: "Good for SMBs and ecommerce with email + SMS.",
    activecampaign: "Excellent for ecommerce and lifecycle marketing.",
    convertkit: "Built for creators, courses, and content-led funnels.",
  },
];

const scoreboard = [
  { label: "Automation depth", brevo: 7.8, activecampaign: 9.4, convertkit: 8.2 },
  { label: "CRM/contact timeline", brevo: 8.0, activecampaign: 9.0, convertkit: 7.5 },
  { label: "SMS capability", brevo: 8.6, activecampaign: 7.8, convertkit: 6.0 },
  { label: "Ease of use", brevo: 8.5, activecampaign: 7.8, convertkit: 9.2 },
  { label: "Price/value", brevo: 9.0, activecampaign: 8.0, convertkit: 8.5 },
];

const strengths = {
  brevo: [
    "Native SMS and email with strong value-based pricing.",
    "Lightweight CRM and tasks for simple sales follow-up.",
    "Good transactional email alongside marketing sends.",
  ],
  activecampaign: [
    "Deep automation builder with goals, split testing, and branching.",
    "Full CRM pipeline with deals, scoring, and activity timeline.",
    "Powerful segmentation with site/event tracking and behavior triggers.",
  ],
  convertkit: [
    "Clean UI tailored to creators and solo operators.",
    "Fast landing pages, forms, and broadcasts.",
    "Tagging and segmentation that work well for courses and newsletters.",
  ],
};

const pricingTable = [
  {
    plan: "Brevo Starter / Business",
    monthly: "From around ~$25/mo",
    annual: "Lower per month on annual billing",
    limits: "Email send volumes and features scale with plan; SMS is pay-as-you-go.",
    notes: "Strong value when you need email, SMS, and light CRM together.",
  },
  {
    plan: "ActiveCampaign Plus",
    monthly: "From around ~$49/mo",
    annual: "Discounts for annual commitments",
    limits: "Automation, CRM, and contact limits vary by tier.",
    notes: "Best when you fully use journeys, deals, and scoring across teams.",
  },
  {
    plan: "ConvertKit Creator",
    monthly: "Free and paid tiers",
    annual: "Cheaper on annual plans",
    limits: "Subscribers, funnels, and advanced features scale by tier.",
    notes: "Ideal pricing profile for serious creators and newsletter businesses.",
  },
];

const faqs = [
  {
    q: `Is ActiveCampaign better than Brevo in ${YEAR}?`,
    a: "ActiveCampaign is stronger if you need deep automation and a full CRM. Brevo is better value if you want solid automation, native SMS, and lightweight CRM without paying for enterprise-level complexity.",
  },
  {
    q: "Which is best for creators?",
    a: "ConvertKit. It is built for creators with simple landing pages, forms, broadcasts, and funnels tailored to courses, newsletters, and memberships.",
  },
  {
    q: "Which is most affordable for email + SMS?",
    a: "Brevo is typically the most affordable for combined email and SMS thanks to its pricing structure and pay-as-you-go SMS model.",
  },
  {
    q: "Do any include a full CRM?",
    a: "ActiveCampaign includes a full CRM with deals, pipelines, and scoring. Brevo offers a lightweight CRM for tasks and basic pipelines, while ConvertKit focuses on subscribers, tags, and segments rather than deals.",
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

const prosCons = {
  brevo: {
    pros: [
      "Combines email, SMS, and light CRM in one tool.",
      "Strong value-based pricing for SMBs and ecommerce.",
      "Supports both marketing and transactional email.",
    ],
    cons: [
      "Automation depth is lighter than ActiveCampaign.",
      "CRM is basic compared to full sales CRMs.",
      "Interface can feel more “toolbox” than creator-focused.",
    ],
  },
  activecampaign: {
    pros: [
      "Industry-leading visual automation builder and CRM integration.",
      "Robust segmentation, scoring, and event-driven journeys.",
      "Great fit for teams aligning marketing and sales lifecycles.",
    ],
    cons: [
      "Higher pricing, especially as contact counts grow.",
      "Denser UI; onboarding and modelling journeys take time.",
      "Overkill if you only need simple newsletters and basic flows.",
    ],
  },
  convertkit: {
    pros: [
      "Very clean, creator-friendly UI.",
      "Great for landing pages, opt-ins, and simple funnels.",
      "Tag-based system is intuitive for launches and content flows.",
    ],
    cons: [
      "Limited CRM capabilities; not ideal for sales teams.",
      "SMS and some advanced automation require workarounds or third-parties.",
      "Can feel pricey for very large, non-creator lists.",
    ],
  },
};

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  brevo: avg("brevo"),
  activecampaign: avg("activecampaign"),
  convertkit: avg("convertkit"),
};

const overallWinnerKey =
  Math.max(averages.brevo, averages.activecampaign, averages.convertkit) ===
  parseFloat(averages.activecampaign)
    ? "activecampaign"
    : Math.max(averages.brevo, averages.convertkit) === parseFloat(averages.brevo)
    ? "brevo"
    : "convertkit";

const overallWinnerName =
  contenders.find((c) => c.key === overallWinnerKey)?.name || "ActiveCampaign";

const LogoBadge = ({ contender }) => (
  <div className="flex items-center gap-2">
    <div
      className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${contender.gradient}`}
    >
      {contender.logo ? (
        <img
          src={contender.logo}
          alt={`${contender.name} logo`}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-sm font-bold text-white">
          {contender.name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${contender.badge}`}>
      {contender.name}
    </span>
  </div>
);

export default function BrevoVsActiveCampaignVsConvertKitPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Brevo vs ActiveCampaign vs ConvertKit (${YEAR}) – Email & CRM comparison`}
        description={page.description}
        canonical={canonical}
        keywords={`${page.primaryKeyword}, email automation comparison, crm email tools, brevo review, activecampaign review, convertkit review`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Email marketing & CRM tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Brevo vs ActiveCampaign vs ConvertKit ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">{page.summary}</p>

        {/* Quick verdict + top picks */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm md:col-span-2">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>ActiveCampaign</strong> if you need deep automation and a full CRM. Go
              with <strong>Brevo</strong> for affordable email + SMS and lightweight CRM. Pick{" "}
              <strong>ConvertKit</strong> if you are a creator and want the simplest platform for
              landing pages, broadcasts, and funnels.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerName}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-800">
              Where each platform stands out
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <strong>ActiveCampaign:</strong> Best for advanced lifecycle and CRM-driven journeys.
              </li>
              <li>
                <strong>Brevo:</strong> Best for budget-friendly email + SMS with light CRM.
              </li>
              <li>
                <strong>ConvertKit:</strong> Best for creators, courses, and newsletters.
              </li>
            </ul>
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
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${card.gradient} p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge contender={card} />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.tagline}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Brevo (Sendinblue)</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                  <th className="px-4 py-3">ConvertKit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.brevo}</td>
                    <td className="px-4 py-3 text-slate-700">{row.activecampaign}</td>
                    <td className="px-4 py-3 text-slate-700">{row.convertkit}</td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Brevo</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.brevo === row.activecampaign && row.activecampaign === row.convertkit
                      ? "Tie"
                      : Math.max(row.brevo, row.activecampaign, row.convertkit) === row.activecampaign
                      ? "ActiveCampaign"
                      : Math.max(row.brevo, row.convertkit) === row.brevo
                      ? "Brevo (Sendinblue)"
                      : "ConvertKit";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Brevo (Sendinblue)" ? "font-semibold text-emerald-700" : "text-slate-700"
                        }`}
                      >
                        {row.brevo}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ActiveCampaign" ? "font-semibold text-indigo-700" : "text-slate-700"
                        }`}
                      >
                        {row.activecampaign}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ConvertKit" ? "font-semibold text-amber-700" : "text-slate-700"
                        }`}
                      >
                        {row.convertkit}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-indigo-50 to-amber-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.brevo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.activecampaign}
                  </td>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.convertkit}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-indigo-600" /> Automation & CRM depth
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Brevo:</strong> Visual automation covers core welcome, nurture, and
                ecommerce flows with a light CRM for tasks and pipelines.
              </li>
              <li>
                <strong>ActiveCampaign:</strong> Advanced journeys with goals, splits, and scoring,
                backed by a full CRM pipeline and activity timeline.
              </li>
              <li>
                <strong>ConvertKit:</strong> Simple rules, sequences, and tags that work well for
                creator funnels without overwhelming complexity.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Channels & SMS
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Brevo:</strong> Native SMS plus email and transactional support make it
                strong for ecommerce and appointment reminders.
              </li>
              <li>
                <strong>ActiveCampaign:</strong> SMS exists but is secondary; main power is in email
                + CRM and web event tracking.
              </li>
              <li>
                <strong>ConvertKit:</strong> Primarily email; SMS usually routed through external
                tools or not used at all in simpler creator stacks.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Ease of use & creator fit
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>
                <strong>Brevo:</strong> Easy enough for SMBs, with a UI that balances power and
                usability for marketing teams.
              </li>
              <li>
                <strong>ActiveCampaign:</strong> Requires more onboarding; best when a marketer can
                own journey design and CRM setup.
              </li>
              <li>
                <strong>ConvertKit:</strong> Minimalist and focused; creators can launch forms,
                landing pages, and broadcasts quickly with little training.
              </li>
            </ul>
          </div>
        </section>

        {/* Where each tool wins */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {contenders.map((c) => (
            <div
              key={c.key}
              className="space-y-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Gauge className="h-5 w-5 text-emerald-600" />
                Where {c.name} wins
              </div>
              <ul className="space-y-2 text-slate-700">
                {(strengths[c.key] || []).map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual</th>
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
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.plan.includes("Brevo")
                        ? "Email + SMS with value"
                        : row.plan.includes("ActiveCampaign")
                        ? "Automation + CRM"
                        : "Creators & newsletters"}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing for Brevo, ActiveCampaign, and ConvertKit changes frequently and depends on
            subscriber counts, sending volume, and feature tiers. Always confirm current pricing on
            their official sites before committing.
          </p>
        </section>

        {/* User experience & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Brevo:</strong> Easy to adopt for SMBs; marketing teams can handle email, SMS,
              and light CRM in one place without specialist staff.
            </li>
            <li>
              <strong>ActiveCampaign:</strong> Needs more configuration; best when someone owns
              automation design, CRM setup, and ongoing optimisation.
            </li>
            <li>
              <strong>ConvertKit:</strong> Very approachable for creators who need to ship quickly
              and do not want to think in terms of “CRM” at all.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Email + SMS for ecommerce SMBs:</strong> Brevo wins with native SMS, good
              transactional support, and value pricing.
            </li>
            <li>
              <strong>Advanced lifecycle and sales alignment:</strong> ActiveCampaign wins with
              deep journeys, scoring, and full CRM pipelines.
            </li>
            <li>
              <strong>Newsletters, courses, and creator brands:</strong> ConvertKit wins for
              simplicity, landing pages, and creator-centric flows.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
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
