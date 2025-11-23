import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Crown,
  ArrowLeft,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "pcloud vs dropbox vs onedrive";
const canonical = buildCanonical(
  "/tools/compare/pcloud-vs-dropbox-vs-onedrive"
);

const brandMeta = {
  pcloud: {
    gradient: "from-sky-500 via-teal-500 to-emerald-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/pcloud.com",
  },
  dropbox: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/dropbox.com",
  },
  onedrive: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    badge: "bg-cyan-100 text-cyan-900",
    logo: "https://logo.clearbit.com/onedrive.live.com",
  },
};

const contenders = [
  {
    key: "pcloud",
    name: "pCloud",
    blurb:
      "Affordable storage with lifetime plans, strong media handling, and optional zero-knowledge Crypto.",
    url: "https://www.pcloud.com",
  },
  {
    key: "dropbox",
    name: "Dropbox",
    blurb:
      "Collaboration-focused cloud storage with polished sharing, requests, and integrations.",
    url: "https://www.dropbox.com",
  },
  {
    key: "onedrive",
    name: "OneDrive",
    blurb:
      "Cloud storage bundled with Microsoft 365 for productivity-heavy and enterprise teams.",
    url: "https://www.microsoft.com/onedrive",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    pcloud: "Value + optional zero-knowledge Crypto",
    dropbox: "Collaboration and sharing",
    onedrive: "Microsoft 365 teams and Office coauthoring",
  },
  {
    label: "Encryption",
    pcloud: "AES/TLS + optional zero-knowledge Crypto add-on",
    dropbox: "AES/TLS; no default zero-knowledge",
    onedrive: "AES/TLS; Personal Vault per account",
  },
  {
    label: "Collaboration",
    pcloud: "Good sharing; lighter live collaboration",
    dropbox: "Excellent shared folders, file requests, Paper/Replay",
    onedrive: "Strong Office coauthoring; Teams/SharePoint tie-in",
  },
  {
    label: "Data residency",
    pcloud: "EU or US data region choice",
    dropbox: "US/EU; enterprise data residency options",
    onedrive: "Region based on Microsoft tenant",
  },
  {
    label: "Pricing approach",
    pcloud: "Monthly/annual + lifetime; Crypto extra",
    dropbox: "Per-seat subscriptions (personal and business tiers)",
    onedrive: "Bundled with Microsoft 365 licenses",
  },
];

const scoreboard = [
  {
    label: "Security & privacy",
    scores: { pcloud: 8.8, dropbox: 8.0, onedrive: 8.2 },
  },
  {
    label: "Collaboration",
    scores: { pcloud: 8.1, dropbox: 9.4, onedrive: 9.0 },
  },
  {
    label: "Value for money",
    scores: { pcloud: 9.1, dropbox: 8.0, onedrive: 8.8 },
  },
  {
    label: "Ecosystem fit",
    scores: { pcloud: 7.8, dropbox: 9.1, onedrive: 9.5 },
  },
  {
    label: "Media handling",
    scores: { pcloud: 9.0, dropbox: 8.5, onedrive: 8.2 },
  },
];

const avg = (key) =>
  (
    scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  pcloud: avg("pcloud"),
  dropbox: avg("dropbox"),
  onedrive: avg("onedrive"),
};

const winnerEntry = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0];

const normalizeName = (key) => {
  if (key === "pcloud") return "pCloud";
  if (key === "onedrive") return "OneDrive";
  if (key === "dropbox") return "Dropbox";
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const winnerKey = winnerEntry[0];
const overallWinner = normalizeName(winnerKey);
const overallAvg = winnerEntry[1];

const prosCons = {
  pcloud: {
    pros: [
      "Lifetime plans can be exceptional value versus long-term subscriptions",
      "Optional Crypto add-on provides zero-knowledge encryption on selected folders",
      "Strong media streaming and file-versioning features for content-heavy users",
    ],
    cons: [
      "Zero-knowledge encryption is a paid add-on, not included by default",
      "Collaboration is lighter than Dropbox or OneDrive for document coauthoring",
      "Ecosystem integrations are narrower than Microsoft or Dropbox ecosystems",
    ],
  },
  dropbox: {
    pros: [
      "Polished sharing, file requests, and collaboration UX suitable for client work",
      "Wide ecosystem of integrations with productivity and creative tools",
      "Strong team features including granular permissions and shared folders",
    ],
    cons: [
      "No native zero-knowledge encryption; similar security model to many mainstream providers",
      "Can feel more expensive than value-focused or lifetime providers at scale",
      "Some features overlap with tools you may already use (e.g., project docs elsewhere)",
    ],
  },
  onedrive: {
    pros: [
      "Bundled storage with Microsoft 365 can be very cost-effective",
      "Deep integration with Office, Teams, and SharePoint for coauthoring",
      "Enterprise-grade admin and compliance controls for managed tenants",
    ],
    cons: [
      "Best experience is limited to Microsoft-centric environments",
      "Sharing UX is more complex for external clients who are not on Microsoft",
      "Zero-knowledge encryption is not available; Personal Vault helps but is limited scope",
    ],
  },
};

const featureBullets = {
  stack: [
    "pCloud often sits alongside other tools as a value-focused, media-friendly vault.",
    "Dropbox frequently becomes the central collaboration hub for agencies and distributed teams.",
    "OneDrive is usually the default storage layer wherever Microsoft 365 is standard.",
  ],
  privacy: [
    "pCloud with Crypto add-on can deliver true zero-knowledge encryption for selected folders.",
    "Dropbox and OneDrive encrypt data in transit and at rest but are not zero-knowledge providers.",
    "For regulated industries, OneDrive plus Microsoft compliance tooling can be attractive even without zero-knowledge.",
  ],
  migration: [
    "All three support sync clients and basic migration via uploads/downloads or third-party tools.",
    "Moving historical shares and permissions is more work than moving raw files.",
    "For teams, plan migrations in phases (archives first, active projects second, shared drives last).",
  ],
};

const pricingTable = [
  {
    platform: "pCloud",
    positioning: "Value-first with lifetime and regional data centers.",
    model:
      "Monthly/annual subscriptions plus one-time lifetime plans; Crypto zero-knowledge add-on extra.",
    bestFor:
      "Individuals and small teams who want long-term storage at predictable or one-off cost.",
    notes:
      "Lifetime plans are compelling if you expect to store data for several years and do not need deep enterprise collaboration.",
  },
  {
    platform: "Dropbox",
    positioning: "Collaboration-focused pricing for individuals and teams.",
    model:
      "Per-user plans across individual, family, and business tiers with additional admin controls at higher tiers.",
    bestFor:
      "Agencies, freelancers, and creative teams that trade a bit of cost for superior collaboration UX.",
    notes:
      "Price per user is easier to justify when Dropbox is the primary hub for client and internal file workflows.",
  },
  {
    platform: "OneDrive",
    positioning: "Storage embedded in Microsoft 365 subscriptions.",
    model:
      "Included with most Microsoft 365 plans; additional storage can be purchased on top.",
    bestFor:
      "Organizations already standardizing on Microsoft 365 for email, docs, and collaboration.",
    notes:
      "If you are already paying for Microsoft 365, OneDrive can effectively be “free” for primary usage.",
  },
];

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick pCloud if you want strong value, optional zero-knowledge encryption via Crypto, and flexible media storage. Pick Dropbox if collaboration UX, client sharing, and integrations matter most. Pick OneDrive if you already run on Microsoft 365 and want storage tightly tied into Office and Teams.",
  },
  {
    q: "Is pCloud more private than Dropbox?",
    a: "Yes, when you use the pCloud Crypto add-on for specific folders. Crypto applies zero-knowledge encryption so only you hold the keys. Without Crypto, pCloud and Dropbox both encrypt data at rest and in transit but are not zero-knowledge by default.",
  },
  {
    q: "Can I move between them?",
    a: "Yes. You can migrate by syncing/download-and-upload or by using third-party migration tools. Files move easily, but you will need to re-establish sharing links, permissions, and any integrations on the new platform.",
  },
  {
    q: "Which works best for media libraries?",
    a: "pCloud is often preferred for media libraries due to strong streaming and preview support, plus value-focused storage. Dropbox also works well for media collaboration, especially when working with clients.",
  },
  {
    q: "What if my company is already on Microsoft 365?",
    a: "If you are already paying for Microsoft 365, OneDrive is usually the default and most economical choice. You still might add Dropbox or pCloud for specific use cases such as client collaboration or privacy-focused archives.",
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

export default function PcloudVsDropboxVsOnedrivePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`pCloud vs Dropbox vs OneDrive – which cloud storage fits? (${YEAR})`}
        description="Compare pCloud, Dropbox, and OneDrive on security, privacy, collaboration, pricing, and ecosystem fit to decide the best cloud storage for your workflow."
        canonical={canonical}
        keywords={`${primaryKeyword}, cloud storage comparison, pcloud alternative, dropbox vs onedrive`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Cloud storage
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          pCloud vs Dropbox vs OneDrive ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          pCloud is value- and privacy-focused, Dropbox leads collaboration UX,
          and OneDrive is the natural choice in Microsoft 365 environments. Here
          is how they compare across security, sharing, pricing, and ecosystem
          fit.
        </p>

        {/* Contender cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((tool) => (
            <a
              key={tool.key}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[tool.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-sm`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-center justify-between gap-2">
                <LogoBadge name={tool.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {tool.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + Top pick */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>pCloud</strong> if you want strong value, the
              option for zero-knowledge folders via Crypto, and flexible media
              storage. Choose <strong>Dropbox</strong> if collaboration UX,
              external client sharing, and integrations are your priority.
              Choose <strong>OneDrive</strong> if your organization is already
              on Microsoft 365 and you want storage tightly integrated with
              Office and Teams.
            </p>
            <p className="text-sm text-slate-700">
              If you are unsure, start with where most of your documents live:
              if they are in Office/Teams, OneDrive wins; if they are spread
              across tools and clients, Dropbox may feel more natural; if you
              mainly need personal or small-team storage with privacy options,
              pCloud is often best value.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sky-700">
              <Crown className="h-4 w-4" />
              <p className="text-sm font-semibold uppercase tracking-wide">
                Overall scoreboard winner
              </p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              {overallWinner}
            </h3>
            <p className="mt-1 text-sm text-slate-700">
              Average score: {overallAvg}/10
            </p>
            <p className="mt-2 text-sm text-slate-700">
              The “winner” here is directional: you should still anchor the
              decision on your stack (Microsoft vs mixed), privacy needs
              (zero-knowledge or not), and collaboration style (internal vs
              client-heavy).
            </p>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>pCloud:</strong> long-term value, strong media
                libraries, and optional zero-knowledge encryption via Crypto.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-blue-600" />
              <span>
                <strong>Dropbox:</strong> polished collaboration and sharing UX
                with clients and partners, plus rich integrations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-600" />
              <span>
                <strong>OneDrive:</strong> Microsoft 365, Teams, and
                SharePoint-centric organizations that want a unified experience.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <Layers className="h-6 w-6 text-sky-600" />
            Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">pCloud</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">OneDrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="align-top odd:bg-white even:bg-slate-50/60"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.label}
                    </th>
                    <td className="px-4 py-3">{row.pcloud}</td>
                    <td className="px-4 py-3">{row.dropbox}</td>
                    <td className="px-4 py-3">{row.onedrive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-900">
            <BarChart3 className="h-6 w-6 text-amber-600" />
            Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">pCloud</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">OneDrive</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { pcloud, dropbox, onedrive } = row.scores;
                  const maxScore = Math.max(pcloud, dropbox, onedrive);
                  const winner =
                    maxScore === pcloud
                      ? "pCloud"
                      : maxScore === dropbox
                      ? "Dropbox"
                      : "OneDrive";

                  return (
                    <tr
                      key={row.label}
                      className="align-top odd:bg-white even:bg-slate-50/60"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "pCloud"
                            ? "font-semibold text-sky-800"
                            : "text-slate-800"
                        }`}
                      >
                        {pcloud}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Dropbox"
                            ? "font-semibold text-blue-800"
                            : "text-slate-800"
                        }`}
                      >
                        {dropbox}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "OneDrive"
                            ? "font-semibold text-cyan-800"
                            : "text-slate-800"
                        }`}
                      >
                        {onedrive}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-blue-50 to-cyan-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.pcloud}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.dropbox}
                  </td>
                  <td className="px-4 py-3 font-semibold text-cyan-800">
                    {averages.onedrive}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature & migration notes */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Feature and migration considerations
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              How they sit in your stack
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Privacy and encryption model
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.privacy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Migration between platforms
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.migration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Pricing snapshots (directional)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[720px] text-left text-sm text-slate-800 md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Positioning</th>
                  <th className="px-4 py-3">Model</th>
                  <th className="px-4 py-3">Best for</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.platform}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-900">
                      {row.platform}
                    </th>
                    <td className="px-4 py-3">{row.positioning}</td>
                    <td className="px-4 py-3">{row.model}</td>
                    <td className="px-4 py-3">{row.bestFor}</td>
                    <td className="px-4 py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600">
            Pricing tiers, storage limits, and bundled features change
            frequently. Always confirm up-to-date details on each provider’s
            site and compare against your expected usage profile.
          </p>
        </section>

        {/* Use-case winners */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Privacy-focused personal storage
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: pCloud (with Crypto).</strong> Use Crypto for
                sensitive folders where only you should hold the keys, and keep
                the rest of your files on regular encrypted storage.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Client-facing collaboration
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: Dropbox.</strong> File requests, shared folders,
                and a familiar UX make it ideal when you frequently exchange
                assets with clients and partners.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Microsoft-centric organizations
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                <strong>Winner: OneDrive.</strong> OneDrive, SharePoint, and
                Teams together offer a unified, policy-driven environment for
                document collaboration and governance.
              </p>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* FAQs */}
        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            FAQs: pCloud vs Dropbox vs OneDrive
          </h2>
          <div className="mt-4 space-y-2">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl leading-none text-slate-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-700">
            <Link
              className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-600"
              to="/tools"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
            </Link>
          </div>
        </section>
      </div>

      <ProsConsSection contenders={contenders} />
    </main>
  );
}
