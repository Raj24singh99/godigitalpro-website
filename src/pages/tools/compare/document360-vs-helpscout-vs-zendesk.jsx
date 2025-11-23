import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  ClipboardList,
  Crown,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "document360 vs helpscout vs zendesk";
const canonical = buildCanonical("/tools/compare/document360-vs-helpscout-vs-zendesk");

const brandMeta = {
  document360: {
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    badge: "bg-amber-100 text-amber-900",
    logo: "https://logo.clearbit.com/document360.com",
  },
  helpscout: {
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/helpscout.com",
  },
  zendesk: {
    gradient: "from-emerald-600 via-teal-600 to-slate-700",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/zendesk.com",
  },
};

const contenders = [
  {
    key: "document360",
    name: "Document360",
    blurb:
      "Dedicated knowledge base platform with strong authoring, versioning, analytics, and secure access controls.",
    url: "/tools/document360",
  },
  {
    key: "helpscout",
    name: "HelpScout",
    blurb:
      "Lightweight help desk with shared inbox, Beacon widget, in-product messaging, and Docs built-in.",
    url: "/tools/helpscout",
  },
  {
    key: "zendesk",
    name: "Zendesk",
    blurb:
      "Full customer support suite with ticketing, help center, and omnichannel support for scaled teams.",
    url: "/tools/zendesk",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    document360: "Product docs & structured knowledge bases",
    helpscout: "SMB support teams & shared inbox",
    zendesk: "Scaled support with omnichannel routing",
  },
  {
    label: "Docs depth",
    document360: "Advanced authoring, versioning, analytics, and taxonomy",
    helpscout: "Solid Docs with search; lighter workflows",
    zendesk: "Good help center closely tied to tickets",
  },
  {
    label: "Ticketing",
    document360: "Docs-first; no native ticketing",
    helpscout: "Strong shared inbox + live chat via Beacon",
    zendesk: "Enterprise ticketing, SLAs, and automations",
  },
  {
    label: "Security & access",
    document360: "SSO, IP restrictions, role-based access, backups",
    helpscout: "SSO on higher tiers; roles for inboxes",
    zendesk: "SSO, granular roles/permissions, enterprise controls",
  },
  {
    label: "Customization",
    document360: "Custom domains, themes, embeddable widgets, APIs",
    helpscout: "Docs branding & Beacon widget customization",
    zendesk: "Themeable help center, marketplace apps, workflows",
  },
];

const scoreboard = [
  { label: "Knowledge depth", scores: { document360: 9.4, helpscout: 8.2, zendesk: 8.6 } },
  { label: "Support workflow", scores: { document360: 7.5, helpscout: 8.8, zendesk: 9.3 } },
  { label: "Ease of use", scores: { document360: 8.6, helpscout: 9.2, zendesk: 8.0 } },
  { label: "Security/governance", scores: { document360: 9.0, helpscout: 8.1, zendesk: 9.1 } },
];

const quickPicks = [
  {
    label: "Best dedicated knowledge base",
    tool: "Document360",
    reason: "Deep authoring, taxonomy, analytics, and secure public/private spaces.",
  },
  {
    label: "Best for small support teams",
    tool: "HelpScout",
    reason: "Shared inbox + Docs + Beacon give you support and self-serve in one UI.",
  },
  {
    label: "Best for scaled, complex support",
    tool: "Zendesk",
    reason: "Enterprise ticketing, routing, SLAs, and omnichannel coverage.",
  },
];

const faqs = [
  {
    q: `Is Document360 better than HelpScout Docs in ${YEAR}?`,
    a: "Document360 is deeper for documentation, versioning, taxonomy, and analytics. HelpScout Docs is simpler and tightly linked to its shared inbox and Beacon widget, which is ideal for small teams.",
  },
  {
    q: "Who should pick Zendesk instead?",
    a: "Choose Zendesk when you need enterprise ticketing, routing, SLAs, and multi-channel support (email, chat, voice, social) with a built-in help center that scales to many agents and teams.",
  },
  {
    q: "Can I pair Document360 with a separate help desk?",
    a: "Yes. Many teams run Document360 as their primary documentation hub and integrate it with tools like HelpScout, Zendesk, or other ticketing systems via widgets, links, or APIs for contextual help.",
  },
  {
    q: "Which is fastest to launch?",
    a: "HelpScout is typically fastest for small teams: you can stand up a shared inbox and Docs quickly. Document360 is also quick for docs-first deployments. Zendesk takes more configuration but handles more complex routing.",
  },
  {
    q: "Can I migrate between these tools later?",
    a: "Yes, but expect work. Knowledge base migrations usually require exports, URL mapping, and SEO redirects. Ticketing migrations require data exports, field mapping, and agent retraining.",
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
  document360: {
    pros: [
      "Deep authoring and versioning for technical docs and product knowledge",
      "Analytics and search insights to see what users read and where they drop",
      "Public and private knowledge spaces with SSO, IP restrictions, and access rules",
      "Embeddable widgets and API for contextual help in your app",
    ],
    cons: [
      "Higher entry price than basic help desk docs",
      "No built-in ticketing—you must pair with a separate help desk",
      "Theming and layouts are opinionated compared to full CMS flexibility",
    ],
  },
  helpscout: {
    pros: [
      "Fast to launch shared inbox for small teams",
      "Docs + Beacon give you self-serve and live chat together",
      "Agent experience is simple and friendly; easy onboarding",
    ],
    cons: [
      "Docs features are less advanced than dedicated KB platforms",
      "Routing and automations less granular than enterprise suites",
      "SSO and some advanced features sit on higher tiers",
    ],
  },
  zendesk: {
    pros: [
      "Enterprise-grade ticketing, SLAs, and automation",
      "Themeable help center with strong integration into workflows",
      "Large app ecosystem and integrations with CRMs, chat, and voice tools",
    ],
    cons: [
      "Can feel heavy and complex for small or non-technical teams",
      "Admin configuration and maintenance require more time",
      "Docs authoring is solid but not as deep as dedicated KB tools like Document360",
    ],
  },
};

const pricingTable = [
  {
    tool: "Document360",
    tiers: "Business & Enterprise tiers",
    bestFor: "Product companies treating documentation as a core asset.",
    notes:
      "Priced by projects, storage, and features like private spaces and advanced analytics. Expect a higher entry point but strong value if docs are central.",
  },
  {
    tool: "HelpScout",
    tiers: "Standard & Plus plans",
    bestFor: "SMB support teams wanting shared inbox + docs + Beacon.",
    notes:
      "Per-seat pricing. Docs and Beacon are included or available as add-ons depending on plan, making total cost predictable for small teams.",
  },
  {
    tool: "Zendesk",
    tiers: "Suite Team through Enterprise",
    bestFor: "Mid-market and enterprise support operations at scale.",
    notes:
      "Per-agent pricing with different channel bundles. Total cost scales with complexity and agent count but brings deep routing and reporting.",
  },
];

const useCases = [
  {
    title: "Docs-first product company with growing user base",
    winner: "Document360",
    explanation:
      "If releasing frequent product updates and needing strong versioning, localization, and analytics is your reality, a dedicated KB like Document360 becomes your system of record.",
  },
  {
    title: "Small support team upgrading from a shared email inbox",
    winner: "HelpScout",
    explanation:
      "HelpScout gives you a shared inbox, basic reporting, Docs, and Beacon in a single UI—ideal when you want a quick upgrade without enterprise complexity.",
  },
  {
    title: "Multi-brand, multi-channel support with SLAs",
    winner: "Zendesk",
    explanation:
      "When you need queues, SLAs, roles, custom fields, and multiple channels like chat, voice, and social, Zendesk’s suite is made to coordinate large support operations.",
  },
  {
    title: "Hybrid stack (dedicated docs + separate help desk)",
    winner: "Document360 + HelpScout/Zendesk",
    explanation:
      "Some teams prefer separate best-of-breed tools: Document360 for docs plus either HelpScout or Zendesk for ticketing, linked by widgets and contextual suggestions.",
  },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  document360: avg("document360"),
  helpscout: avg("helpscout"),
  zendesk: avg("zendesk"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const getWinnerNameFromKey = (key) => {
  if (key === "document360") return "Document360";
  if (key === "helpscout") return "HelpScout";
  if (key === "zendesk") return "Zendesk";
  return key;
};

const overallWinnerName = getWinnerNameFromKey(overallWinnerKey);

const getRowWinnerName = (row) => {
  const { document360, helpscout, zendesk } = row.scores;
  const max = Math.max(document360, helpscout, zendesk);
  if (document360 === helpscout && helpscout === zendesk) return "Tie";
  if (max === document360) return "Document360";
  if (max === helpscout) return "HelpScout";
  return "Zendesk";
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta =
    brandMeta[key] || {
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
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function Document360VsHelpScoutVsZendeskPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Document360 vs HelpScout vs Zendesk – Knowledge base & support comparison (${YEAR})`}
        description="Deep comparison of Document360, HelpScout, and Zendesk on documentation depth, support workflows, security, and pricing so you can assemble the right support stack."
        canonical={canonical}
        keywords={`${primaryKeyword}, knowledge base comparison, help desk comparison, document360 docs, helpscout docs, zendesk guide`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Support & documentation tools
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Document360 vs HelpScout vs Zendesk ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Document360</strong> is the docs-first specialist.{" "}
          <strong>HelpScout</strong> is the friendly shared inbox with Docs.{" "}
          <strong>Zendesk</strong> is the enterprise support suite. This guide walks
          through strengths, trade-offs, and ideal use-cases so you can decide
          whether a dedicated knowledge base, an all-in-one help desk, or an
          enterprise platform fits best.
        </p>

        {/* Quick verdict + highlights */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 space-y-3 rounded-3xl bg-amber-50/90 p-6 ring-1 ring-amber-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-amber-800">
              <Sparkles className="h-5 w-5" />
              Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Document360</strong> when documentation quality and
              analytics are your primary concern. Choose <strong>HelpScout</strong>{" "}
              when you want a fast, simple shared inbox with Docs and Beacon. Choose{" "}
              <strong>Zendesk</strong> when you need enterprise ticketing, routing,
              and omnichannel support with a built-in help center.
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {quickPicks.map((pick) => (
                <li key={pick.label}>
                  <span className="font-semibold">{pick.label}:</span>{" "}
                  <span className="font-semibold text-slate-900">
                    {pick.tool}
                  </span>{" "}
                  – {pick.reason}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-amber-800">
              <Crown className="h-4 w-4" />
              Overall scoreboard leader: {overallWinnerName}{" "}
              <span className="text-xs font-medium text-amber-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Shield className="h-5 w-5 text-emerald-700" />
              Security & governance
            </div>
            <p className="text-sm text-slate-700">
              <strong>Document360</strong> and <strong>Zendesk</strong> both provide
              strong SSO and access controls. Use Document360 when you want secure
              public/private docs, and Zendesk when ticket-level permissions and
              multi-team workflows matter most.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ClipboardList className="h-5 w-5 text-sky-700" />
              Launch speed & simplicity
            </div>
            <p className="text-sm text-slate-700">
              <strong>HelpScout</strong> is the fastest for small teams to adopt.
              You can move from a simple support inbox to a proper shared inbox,
              Docs, and Beacon with minimal configuration.
            </p>
          </div>
        </div>

        {/* Contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <div
              key={card.key}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
                <span className="rounded-full bg-black/25 px-2 py-1 text-xs font-semibold text-white/95">
                  Support contender
                </span>
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
              <div className="relative mt-3 text-sm font-semibold text-white">
                <Link
                  to={card.url}
                  className="underline decoration-white/70 underline-offset-2 hover:text-white"
                >
                  Open tool page
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-amber-600" />
            Side-by-side comparison
          </h2>
          <p className="text-sm text-slate-700">
            This table shows how each platform approaches documentation depth,
            ticketing, security, and customization. Start with your top 1–2
            priorities and look horizontally to see which tool aligns best.
          </p>
          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Document360</th>
                  <th className="px-4 py-3">HelpScout</th>
                  <th className="px-4 py-3">Zendesk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/40"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.document360}</td>
                    <td className="px-4 py-3 text-slate-700">{row.helpscout}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zendesk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-indigo-600" />
            Scoreboard (1–10)
          </h2>
          <p className="text-sm text-slate-700">
            Scores blend hands-on usage with how each product positions itself.
            They are directional rather than absolute, but they highlight which
            platform tends to win in each category.
          </p>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">Document360</th>
                  <th className="px-4 py-3">HelpScout</th>
                  <th className="px-4 py-3">Zendesk</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winnerName = getRowWinnerName(row);
                  const { document360, helpscout, zendesk } = row.scores;
                  const max = Math.max(document360, helpscout, zendesk);

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          max === document360
                            ? "font-semibold text-amber-700"
                            : "text-slate-700"
                        }`}
                      >
                        {document360}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === helpscout
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {helpscout}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          max === zendesk
                            ? "font-semibold text-emerald-700"
                            : "text-slate-700"
                        }`}
                      >
                        {zendesk}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winnerName}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall winner)
                  </th>
                  <td className="px-4 py-3 font-semibold text-amber-800">
                    {averages.document360}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.helpscout}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.zendesk}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerName}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ClipboardList className="h-6 w-6 text-amber-600" />
            Pricing snapshots & positioning
          </h2>
          <p className="text-sm text-slate-700">
            Pricing shifts often, but the patterns stay consistent: Document360
            prices like a dedicated knowledge platform, HelpScout like a lean help
            desk, and Zendesk like an enterprise suite. Treat these notes as
            directional and confirm details on each vendor’s pricing page.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingTable.map((row) => (
              <div
                key={row.tool}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {row.tool}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {row.tiers}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Best for: {row.bestFor}
                </p>
                <p className="mt-1 text-sm text-slate-700">{row.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {useCase.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-amber-800">
                  Winner: {useCase.winner}
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  {useCase.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-6 w-6 text-amber-600" />
            FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="ml-2 text-slate-500 group-open:hidden">+</span>
                  <span className="ml-2 hidden text-slate-500 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom line + links */}
        <section className="mt-12 rounded-3xl bg-slate-50 p-6 text-slate-800 ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Bottom line</h2>
          <p className="mt-2 text-sm md:text-base">
            <strong>Document360</strong> is the clear winner when deep,
            analytics-driven documentation is central to your product strategy.{" "}
            <strong>HelpScout</strong> is ideal when you want a friendly shared
            inbox with Docs and Beacon that a small team can run.{" "}
            <strong>Zendesk</strong> is built for larger, multi-channel support
            organizations that need enterprise ticketing and routing. Start from
            where your pain is worst—docs, inbox, or scale—and pick accordingly.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-sky-700">
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/document360"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Document360 review
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/helpscout"
            >
              View HelpScout review
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 hover:bg-slate-100"
              to="/tools/zendesk"
            >
              View Zendesk review
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
