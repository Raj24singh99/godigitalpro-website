import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  Zap,
  Shield,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/beehiiv-vs-mailerlite-vs-convertkit");
const primaryKeyword = "beehiiv vs mailerlite vs convertkit";

const brandMeta = {
  beehiiv: {
    gradient: "from-amber-500 via-orange-500 to-slate-800",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/beehiiv.com",
  },
  mailerlite: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/mailerlite.com",
  },
  convertkit: {
    gradient: "from-rose-500 via-pink-500 to-indigo-500",
    badge: "bg-rose-100 text-rose-900",
    logo: "https://logo.clearbit.com/convertkit.com",
  },
};

const contenders = [
  {
    key: "beehiiv",
    name: "Beehiiv",
    blurb: "Media-style newsletter OS with referrals, boosts, and ad network.",
    url: "https://www.beehiiv.com/",
  },
  {
    key: "mailerlite",
    name: "MailerLite",
    blurb: "Modern ESP with lightweight automations and strong value.",
    url: "https://www.mailerlite.com/",
  },
  {
    key: "convertkit",
    name: "ConvertKit",
    blurb: "Creator-first platform with funnels and digital product checkout.",
    url: "https://convertkit.com/",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    beehiiv: "Media-style newsletters, publications, and multi-brand ops",
    mailerlite: "Lightweight newsletters, sites, and automations for SMBs",
    convertkit: "Creators selling courses, downloads, and memberships",
  },
  {
    label: "Growth & monetization",
    beehiiv: "Referrals, boosts, ad network, paid tiers",
    mailerlite: "Upsells via automations + basic payments/integrations",
    convertkit: "Digital products, tip jars, paid newsletters, memberships",
  },
  {
    label: "Automation depth",
    beehiiv: "Core flows, sequences, and tags (media-focused)",
    mailerlite: "Visual workflows with splits, delays, and triggers",
    convertkit: "Visual builder, rules, link triggers, purchase events",
  },
  {
    label: "Multi-newsletter / workspaces",
    beehiiv: "Strong multi-publication / workspace support",
    mailerlite: "Limited; more single-brand oriented",
    convertkit: "Primarily single audience/brand focus",
  },
  {
    label: "Audience & analytics",
    beehiiv: "Deep campaign, referral, and UTM analytics for media",
    mailerlite: "Good core analytics for campaigns and automations",
    convertkit: "Subscriber-centric analytics and funnel reporting",
  },
  {
    label: "Pricing feel",
    beehiiv: "Audience-based; friendly for high-volume media",
    mailerlite: "Affordable creator/SMB tiers with strong value",
    convertkit: "Priced by subscribers with commerce features baked in",
  },
];

const scoreboard = [
  { label: "Ease of use", beehiiv: 8.8, mailerlite: 9.2, convertkit: 9.0 },
  { label: "Growth tools", beehiiv: 9.5, mailerlite: 8.4, convertkit: 8.8 },
  { label: "Automation", beehiiv: 8.2, mailerlite: 8.7, convertkit: 8.9 },
  { label: "Monetization", beehiiv: 9.4, mailerlite: 8.0, convertkit: 9.1 },
  { label: "Value for money", beehiiv: 9.0, mailerlite: 9.2, convertkit: 8.6 },
];

const pricingTable = [
  {
    plan: "Beehiiv Grow / Scale (mid-size lists)",
    monthly: "From roughly tens of dollars/month upward",
    annual: "Lower per month on annual plans",
    limits: "Audience tiers, advanced analytics, referrals, boosts, ad tools vary by tier",
    notes: "Best value when you actively use referrals/ads or run multiple newsletters.",
  },
  {
    plan: "MailerLite Growing Business (up to ~1,000 subs)",
    monthly: "From around ~$10–$15/mo",
    annual: "Cheaper when billed annually",
    limits: "Emails, sites, and automation volume scale with list size",
    notes: "Excellent all-rounder pricing for SMBs and lean content teams.",
  },
  {
    plan: "ConvertKit Creator (up to ~1,000 subs)",
    monthly: "From around ~$15–$25/mo",
    annual: "Discounted annual pricing",
    limits: "Broadcasts, automations, tagging, creator features",
    notes: "Makes most sense if you monetise with digital products or paid newsletters.",
  },
  {
    plan: "ConvertKit Creator Pro / larger tiers",
    monthly: "Scales with subscribers",
    annual: "Annual options available",
    limits: "Advanced reporting, deliverability tools, priority support",
    notes: "For serious creator businesses with larger lists and revenue.",
  },
];

const featureBullets = {
  growth: [
    "Beehiiv: Built-in referral program, boosts, and an ad network designed to grow newsletter audiences and revenue.",
    "MailerLite: Growth via landing pages, popups, and basic ecommerce integration—strong but less media-specific.",
    "ConvertKit: Growth focused on creator funnels, lead magnets, and tagging—not a full media network, but excellent for personal brands.",
  ],
  automation: [
    "Beehiiv: Core sequences and triggers that cover welcome flows, drips, and basic engagement for publications.",
    "MailerLite: Visual workflows that support splits, delays, and behavior-based triggers for typical lifecycle campaigns.",
    "ConvertKit: Deep automations with link triggers, purchases, and subscriber events tuned for funnels and launches.",
  ],
  monetization: [
    "Beehiiv: Native ad network, paid tiers, sponsorship workflows, and boosts to monetise like a media company.",
    "MailerLite: Monetisation via integrations (Stripe, ecommerce platforms) plus targeted campaigns and upsell flows.",
    "ConvertKit: Native checkout for digital products, tip jars, and subscriptions with tagging and automation around purchases.",
  ],
};

const faqs = [
  {
    q: `Who wins overall in ${YEAR}?`,
    a: "Beehiiv wins if you run media-style newsletters and want built-in growth and monetisation tools. MailerLite wins for most SMBs and lean teams needing simple, affordable email and automations. ConvertKit wins if you are a creator selling digital products, courses, or memberships.",
  },
  {
    q: "When should I choose Beehiiv?",
    a: "Choose Beehiiv if your main asset is a newsletter (or multiple newsletters) and you want referrals, boosts, ad network access, and strong analytics tuned for media-style growth.",
  },
  {
    q: "When should I choose MailerLite?",
    a: "Pick MailerLite if you want a clean UI, landing pages, visual workflows, and great value for small to mid-sized lists across SaaS, ecommerce, and services.",
  },
  {
    q: "When should I choose ConvertKit?",
    a: "Choose ConvertKit if you identify as a creator and plan to sell digital products, run paid newsletters, or build evergreen funnels with link triggers and advanced tagging.",
  },
  {
    q: "Which is better for multiple newsletters or brands?",
    a: "Beehiiv is strongest for multi-newsletter or multi-brand setups within a media-style operation. MailerLite can work with separate accounts or workspaces, while ConvertKit is primarily optimised for a single audience.",
  },
  {
    q: "Which platform is easiest for beginners?",
    a: "MailerLite and ConvertKit are very beginner-friendly for general email marketing and creator funnels. Beehiiv is also approachable, especially if you think in terms of newsletters and sponsorships.",
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
  beehiiv: {
    pros: [
      "Built from the ground up for media-style newsletters and publications",
      "Native referrals, boosts, and newsletter ad network tools",
      "Strong multi-newsletter management and analytics",
    ],
    cons: [
      "Automation is improving but still less advanced than classic ESPs in some areas",
      "Best value when you fully use referrals/ads; overkill for simple lists",
      "Ecosystem is more newsletter-centric than general-purpose email marketing",
    ],
  },
  mailerlite: {
    pros: [
      "Modern, clean UI that teams can learn quickly",
      "Visual automations with enough power for most SMB lifecycle needs",
      "Very strong value for money at lower to mid subscriber counts",
    ],
    cons: [
      "Not as specialised for media or creator commerce as Beehiiv/ConvertKit",
      "Multi-brand/multi-newsletter support is more limited",
      "Free and lower tiers have caps you will hit as you scale sends and lists",
    ],
  },
  convertkit: {
    pros: [
      "Creator-first workflows with tagging, link triggers, and sequences",
      "Native digital product checkout, tip jars, and subscription tools",
      "Excellent for launches, funnels, and evergreen creator journeys",
    ],
    cons: [
      "Pricing can feel higher if you only need basic newsletters",
      "Less focused on media network-style growth loops vs Beehiiv",
      "Templates and design are intentionally minimal, not ideal for heavy brand design",
    ],
  },
};

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  beehiiv: avg("beehiiv"),
  mailerlite: avg("mailerlite"),
  convertkit: avg("convertkit"),
};

const overallWinner =
  Math.max(averages.beehiiv, averages.mailerlite, averages.convertkit) === parseFloat(averages.beehiiv)
    ? "Beehiiv"
    : Math.max(averages.mailerlite, averages.convertkit) === parseFloat(averages.mailerlite)
    ? "MailerLite"
    : "ConvertKit";

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase().includes("beehiiv")
    ? "beehiiv"
    : name.toLowerCase().includes("mailerlite")
    ? "mailerlite"
    : name.toLowerCase().includes("convertkit")
    ? "convertkit"
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
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function BeehiivVsMailerLiteVsConvertKitPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Beehiiv vs MailerLite vs ConvertKit (${YEAR}) – Newsletter platform comparison`}
        description="Compare Beehiiv, MailerLite, and ConvertKit on growth tools, automations, monetization, pricing, and multi-newsletter workflows to choose the right newsletter platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, beehiiv review, mailerlite review, convertkit review, newsletter platform comparison, creator newsletter tools`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Newsletter platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Beehiiv vs MailerLite vs ConvertKit ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Beehiiv is built for media-style newsletter growth and monetisation. MailerLite is the
          simplicity-and-value pick for general email marketing. ConvertKit is the creator-commerce
          favourite. Below is a structured breakdown so you can choose the right stack for your
          audience, funnels, and revenue model.
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
                <Mail className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Beehiiv</strong> if you run media-style newsletters and want built-in
              referrals, boosts, and ads. Pick <strong>MailerLite</strong> for simple, affordable
              email with modern automations. Go with <strong>ConvertKit</strong> if you’re a creator
              selling digital products, running launches, or building evergreen funnels.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Beehiiv"
                  ? averages.beehiiv
                  : overallWinner === "MailerLite"
                  ? averages.mailerlite
                  : averages.convertkit}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              The “best” choice depends on whether you operate like a media company, a lean SMB, or
              a creator business.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Beehiiv</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.beehiiv}</td>
                    <td className="px-4 py-3 text-slate-700">{row.mailerlite}</td>
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
                  <th className="px-4 py-3">Beehiiv</th>
                  <th className="px-4 py-3">MailerLite</th>
                  <th className="px-4 py-3">ConvertKit</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.beehiiv === row.mailerlite && row.mailerlite === row.convertkit
                      ? "Tie"
                      : Math.max(row.beehiiv, row.mailerlite, row.convertkit) === row.beehiiv
                      ? "Beehiiv"
                      : Math.max(row.mailerlite, row.convertkit) === row.mailerlite
                      ? "MailerLite"
                      : "ConvertKit";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Beehiiv" ? "font-semibold text-amber-700" : "text-slate-700"
                        }`}
                      >
                        {row.beehiiv}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "MailerLite"
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.mailerlite}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "ConvertKit"
                            ? "font-semibold text-rose-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.convertkit}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-emerald-50 to-rose-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">{averages.beehiiv}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.mailerlite}</td>
                  <td className="px-4 py-3 font-semibold text-rose-800">{averages.convertkit}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-amber-600" /> Feature Comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-amber-600" /> Growth & list-building
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.growth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mail className="h-5 w-5 text-sky-600" /> Automations & journeys
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Monetisation & revenue
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.monetization.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
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
            Pricing for Beehiiv, MailerLite, and ConvertKit changes frequently and depends on list
            size, usage, and promos. Always confirm current pricing and free-tier limits on their
            official pricing pages before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Beehiiv:</strong> Feels like a newsletter CMS built for writers and media
              teams. If you think in “issues”, “campaigns”, and “sponsors”, the UX fits naturally.
            </li>
            <li>
              <strong>MailerLite:</strong> Clean, general-purpose ESP UX with visual automations.
              Very easy for marketing teams used to modern SaaS tools.
            </li>
            <li>
              <strong>ConvertKit:</strong> Built for creators and solo operators; concepts like
              broadcasts, sequences, and tags are front-and-center for funnels and launches.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Media-style newsletters or publication roll-ups:</strong> Beehiiv wins with
              referrals, boosts, ad network, and multi-newsletter controls.
            </li>
            <li>
              <strong>SMB newsletters, SaaS updates, simple automations:</strong> MailerLite wins
              with modern UX, landing pages, and strong value.
            </li>
            <li>
              <strong>Creators selling digital products, courses, or memberships:</strong>{" "}
              ConvertKit wins with native checkouts, tip jars, and powerful funnels.
            </li>
            <li>
              <strong>Agencies managing multiple clients’ newsletters:</strong> Beehiiv is strong
              for media-style networks; MailerLite can work well for multiple standard SMB brands.
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
              <h3 className="text-lg font-semibold">Beehiiv</h3>
              <p className="text-sm text-slate-700">
                Best when your newsletter is the product and you want integrated referrals, boosts,
                and ad monetisation across one or more publications.
              </p>
              <p className="mt-2 text-sm font-semibold text-amber-700">
                Ideal for: Media companies, newsletter-first brands, and content networks.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">MailerLite</h3>
              <p className="text-sm text-slate-700">
                Best for businesses needing modern email marketing with landing pages and
                automations, but without deploying a heavy marketing cloud.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: SaaS, ecommerce, agencies, and service businesses on a budget.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ConvertKit</h3>
              <p className="text-sm text-slate-700">
                Best for creators focused on launches, evergreen funnels, and direct digital product
                revenue from their audience.
              </p>
              <p className="mt-2 text-sm font-semibold text-rose-700">
                Ideal for: Creators, coaches, course sellers, and solo media brands.
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
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools/beehiiv"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Beehiiv review
          </Link>
        </div>
      </div>
    </main>
  );
}
