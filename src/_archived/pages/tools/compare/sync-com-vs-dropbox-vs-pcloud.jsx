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
  ClipboardList,
  Lock,
  Cloud,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "sync.com vs dropbox vs pcloud";
const canonical = buildCanonical("/tools/compare/sync-com-vs-dropbox-vs-pcloud");

const brandMeta = {
  "sync.com": {
    gradient: "from-emerald-500 via-cyan-500 to-blue-600",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/sync.com",
  },
  dropbox: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/dropbox.com",
  },
  pcloud: {
    gradient: "from-slate-800 via-slate-700 to-slate-500",
    badge: "bg-slate-100 text-slate-900",
    logo: "https://logo.clearbit.com/pcloud.com",
  },
};

const contenders = [
  {
    key: "sync.com",
    name: "Sync.com",
    blurb: "Privacy-first, end-to-end encrypted storage with share controls for client delivery.",
    url: "https://www.sync.com",
    slug: "sync-com",
  },
  {
    key: "dropbox",
    name: "Dropbox",
    blurb: "Collaboration-friendly cloud storage with the largest integration ecosystem.",
    url: "https://www.dropbox.com",
    slug: "dropbox",
  },
  {
    key: "pcloud",
    name: "pCloud",
    blurb: "Secure cloud storage with lifetime plans and optional Crypto add-on for E2E encryption.",
    url: "https://www.pcloud.com",
    slug: "pcloud",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    "sync.com": "Privacy-first client delivery and compliance-heavy workloads",
    dropbox: "Team collaboration, real-time sync, and integrations",
    pcloud: "Affordable long-term storage and media-friendly playback",
  },
  {
    label: "Encryption",
    "sync.com": "Always-on end-to-end, zero-knowledge by default",
    dropbox: "AES + TLS; E2E not default, relies on account security",
    pcloud: "AES + TLS; E2E via paid Crypto add-on",
  },
  {
    label: "Sharing controls",
    "sync.com": "Passwords, expiry, download limits, granular share permissions, audit logs",
    dropbox: "Rich collaboration, file requests, viewer history, comments",
    pcloud: "Password/expiry links, media streaming in built-in player",
  },
  {
    label: "Compliance & residency",
    "sync.com": "HIPAA-ready, Canadian data centers, BAAs available",
    dropbox: "ISO/SOC compliance; US/EU data centers; enterprise controls",
    pcloud: "EU/US data centers with privacy focus and residency options",
  },
  {
    label: "Desktop & sync performance",
    "sync.com": "Reliable sync; focused more on secure sharing than power-collab",
    dropbox: "Mature sync engine, Smart Sync, LAN sync, and team features",
    pcloud: "Virtual drive approach, strong media streaming and selective sync",
  },
  {
    label: "Pricing & value",
    "sync.com": "Predictable per-seat with generous storage and transfer",
    dropbox: "Priced for collaboration; add-ons for advanced needs",
    pcloud: "Monthly, annual, or lifetime; Crypto add-on for E2E",
  },
  {
    label: "Best for",
    "sync.com": "Agencies, legal, health, and finance teams needing zero-knowledge",
    dropbox: "Teams living in Google/Microsoft/Slack ecosystems",
    pcloud: "Creators and businesses wanting long-term storage value",
  },
];

const scoreboard = [
  { label: "Security & privacy", scores: { "sync.com": 9.6, dropbox: 8.0, pcloud: 8.8 } },
  { label: "Collaboration & UX", scores: { "sync.com": 8.0, dropbox: 9.4, pcloud: 8.1 } },
  { label: "Sharing controls", scores: { "sync.com": 9.4, dropbox: 9.0, pcloud: 8.6 } },
  { label: "Compliance readiness", scores: { "sync.com": 9.2, dropbox: 8.5, pcloud: 8.4 } },
  { label: "Value for money", scores: { "sync.com": 8.8, dropbox: 8.0, pcloud: 9.0 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  "sync.com": avg("sync.com"),
  dropbox: avg("dropbox"),
  pcloud: avg("pcloud"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const keyToName = {
  "sync.com": "Sync.com",
  dropbox: "Dropbox",
  pcloud: "pCloud",
};

const overallWinnerName = keyToName[overallWinnerKey];

const pricingTable = [
  {
    plan: "Sync.com Teams / Pro",
    monthly: "From ~US$6–$8/user",
    annual: "Lower effective rate on annual",
    limits: "1–3 TB/user, E2E encryption, advanced link controls included",
    notes: "Best for privacy-first teams sharing sensitive files with clients.",
  },
  {
    plan: "Dropbox Standard / Advanced",
    monthly: "From ~US$12.50+/user",
    annual: "Lower on annual billing",
    limits: "2–3+ TB/user, powerful collaboration and integrations",
    notes: "Great fit if you rely heavily on shared folders and third-party apps.",
  },
  {
    plan: "pCloud Premium / Business / Lifetime",
    monthly: "From ~US$9.99/user; lifetime options",
    annual: "Discounts on annual; one-time lifetime deals",
    limits: "Up to 2–4 TB/user, optional Crypto add-on for E2E",
    notes: "Value pick for long-term storage and media-heavy libraries.",
  },
];

const featureBullets = {
  security: [
    "Sync.com: End-to-end encryption by default with zero-knowledge architecture, ideal for regulated industries.",
    "Dropbox: Strong security posture with enterprise certifications but not zero-knowledge by design.",
    "pCloud: Solid encryption at rest and in transit; zero-knowledge available via separate Crypto add-on.",
  ],
  collaboration: [
    "Sync.com: Folder sharing and secure links work well, though live co-editing is not its core strength.",
    "Dropbox: Best-in-class shared folders, team spaces, file requests, and collaboration UX.",
    "pCloud: Good for sharing and streaming media; collaboration features are lighter than Dropbox.",
  ],
  value: [
    "Sync.com: Simple per-seat pricing that bakes in E2E encryption and link controls without expensive add-ons.",
    "Dropbox: Higher price point but justified if your team relies on real-time collaboration and integrations.",
    "pCloud: Lifetime plans can be the cheapest option over 3–5+ years, especially for backup and archives.",
  ],
};

const prosCons = {
  "sync.com": {
    pros: [
      "Always-on end-to-end encryption and zero-knowledge by default",
      "Granular link controls (passwords, expiry, download limits) ideal for client delivery",
      "Canadian data residency and HIPAA-ready options with BAAs",
    ],
    cons: [
      "Fewer native collaboration features than Dropbox (no deep co-editing stack)",
      "Desktop and mobile UX is improving but feels more utilitarian",
      "Some advanced compliance features are on higher-tier plans",
    ],
  },
  dropbox: {
    pros: [
      "Mature sync engine and collaboration experience for teams",
      "Huge integration ecosystem with tools like Slack, Microsoft 365, Google Workspace, and e-sign",
      "Rich sharing workflows with file requests, comments, and viewer history",
    ],
    cons: [
      "Not end-to-end encrypted by default; relies on account and device security",
      "Higher per-seat pricing, especially with advanced features enabled",
      "Data residency and zero-knowledge controls are limited compared to privacy-first providers",
    ],
  },
  pcloud: {
    pros: [
      "Flexible monthly, annual, and lifetime pricing options",
      "Media-friendly with good audio/video streaming and virtual drive approach",
      "Optional Crypto add-on provides end-to-end encrypted folder for the most sensitive content",
    ],
    cons: [
      "Zero-knowledge encryption is not default and costs extra",
      "Collaboration and team features are lighter than Dropbox",
      "Admin and compliance tooling is less mature than Sync.com for regulated industries",
    ],
  },
};

const faqs = [
  {
    q: `Is Sync.com better than Dropbox or pCloud in ${YEAR}?`,
    a: "Sync.com wins on default end-to-end encryption and HIPAA readiness. Dropbox wins for collaboration, integrations, and team workflow. pCloud wins on long-term value and media-friendly storage, especially with lifetime plans.",
  },
  {
    q: "Who should pick Dropbox?",
    a: "If your team lives inside shared folders, works across multiple tools, and needs tight integrations with apps like Slack, Zoom, or Google Workspace, Dropbox is usually the most productive choice.",
  },
  {
    q: "Is pCloud end-to-end encrypted?",
    a: "pCloud encrypts data in transit and at rest by default. For true zero-knowledge end-to-end encryption, you need the paid pCloud Crypto add-on, which creates a separate fully encrypted vault.",
  },
  {
    q: "Which is most affordable long term?",
    a: "pCloud’s lifetime plans can be the cheapest over a multi-year horizon. Sync.com offers predictable per-seat pricing with E2E encryption baked in. Dropbox is pricier but may pay for itself if your team depends on its collaboration stack.",
  },
  {
    q: "Which one is best for client file delivery?",
    a: "Sync.com is typically the best for client delivery where privacy and compliance matter most, thanks to its link controls, zero-knowledge encryption, and audit-friendly design.",
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
  const lowered = name.toLowerCase();
  const key = lowered.includes("sync")
    ? "sync.com"
    : lowered.includes("dropbox")
    ? "dropbox"
    : lowered.includes("pcloud")
    ? "pcloud"
    : lowered;

  const meta =
    brandMeta[key] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} ring-2 ring-white/30 shadow-sm`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function SyncVsDropboxVsPcloudPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Sync.com vs Dropbox vs pCloud (${YEAR}) – Secure cloud storage comparison`}
        description="Compare Sync.com, Dropbox, and pCloud on security, collaboration, pricing, compliance, and best-fit use cases for agencies and teams."
        canonical={canonical}
        keywords={`${primaryKeyword}, cloud storage comparison, secure file sharing, zero-knowledge storage`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Cloud storage & secure sharing
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Sync.com vs Dropbox vs pCloud ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Sync.com prioritises privacy and end-to-end encryption. Dropbox focuses on collaboration
          speed and integrations. pCloud leans into value pricing and media-friendly storage. Here is
          a structured comparison across security, collaboration, compliance, and pricing so you can
          choose the right stack for your team and clients.
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
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Sync.com</strong> if you need default zero-knowledge encryption,
              compliance, and locked-down links for client delivery. Pick <strong>Dropbox</strong> if
              collaboration, shared folders, and integrations matter most. Go with{" "}
              <strong>pCloud</strong> if you want affordable long-term storage, strong media support,
              and the option to add end-to-end encryption when needed.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-emerald-700" /> Overall scoreboard winner:{" "}
              {overallWinnerName}{" "}
              <span className="text-xs text-slate-600">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no universal winner. Think of <strong>Sync.com</strong> as the privacy pick,
              <strong>Dropbox</strong> as the collaboration pick, and <strong>pCloud</strong> as the
              long-term value pick.
            </p>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-emerald-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Sync.com</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">pCloud</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row["sync.com"]}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dropbox}</td>
                    <td className="px-4 py-3 text-slate-700">{row.pcloud}</td>
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
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Sync.com</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">pCloud</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { "sync.com": syncScore, dropbox, pcloud } = row.scores;
                  const winnerValue = Math.max(syncScore, dropbox, pcloud);
                  const winner =
                    winnerValue === syncScore
                      ? "Sync.com"
                      : winnerValue === dropbox
                      ? "Dropbox"
                      : "pCloud";
                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Sync.com"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {syncScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Dropbox"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {dropbox}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "pCloud"
                            ? "font-semibold text-slate-900"
                            : "text-slate-700"
                        }`}
                      >
                        {pcloud}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-emerald-50 via-sky-50 to-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages["sync.com"]}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.dropbox}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {averages.pcloud}
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
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Shield className="h-5 w-5 text-emerald-600" /> Security, encryption & compliance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Cloud className="h-5 w-5 text-sky-600" /> Collaboration, sync & sharing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ClipboardList className="h-5 w-5 text-slate-700" /> Pricing & long-term value
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.value.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
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
            Pricing changes frequently and depends on storage, users, and promos. Always confirm
            current pricing on each vendor’s website, and model costs over 3–5 years if you are
            considering pCloud lifetime plans.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Sync.com:</strong> Feels like a secure vault with sharing layered on top.
              Non-technical users can share links and folders easily once configured, but it is
              clearly designed with security and compliance in mind.
            </li>
            <li>
              <strong>Dropbox:</strong> Most users already understand the “shared folder” model.
              Sync, Smart Sync, and tight integration with desktop OSes make onboarding very fast for
              most teams.
            </li>
            <li>
              <strong>pCloud:</strong> The virtual drive model is intuitive for power users, and
              built-in media players are handy for creatives. Admin and team controls are simpler
              than enterprise-focused tools.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Agencies and consultancies sharing client deliverables:</strong>{" "}
              <span className="font-semibold">Sync.com</span> wins with locked-down links,
              zero-knowledge encryption, and auditability.
            </li>
            <li>
              <strong>Product teams and startups collaborating daily:</strong>{" "}
              <span className="font-semibold">Dropbox</span> wins with strong sync, rich integrations,
              and team features.
            </li>
            <li>
              <strong>Creators and businesses building a long-term content archive:</strong>{" "}
              <span className="font-semibold">pCloud</span> wins with lifetime plans and
              media-friendly features.
            </li>
            <li>
              <strong>Regulated industries (legal, healthcare, finance):</strong>{" "}
              <span className="font-semibold">Sync.com</span> typically wins, with Dropbox as a
              possibility on stricter enterprise configurations.
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
              <h3 className="text-lg font-semibold">Sync.com</h3>
              <p className="text-sm text-slate-700">
                Best when secure file delivery, privacy, and compliance are non-negotiable. Ideal for
                agencies and regulated teams sharing sensitive assets.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Agencies, legal, healthcare, and finance teams.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Dropbox</h3>
              <p className="text-sm text-slate-700">
                Best for collaboration-heavy teams where shared folders, comments, and app
                integrations drive day-to-day work.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: Product teams, startups, distributed companies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">pCloud</h3>
              <p className="text-sm text-slate-700">
                Best for long-term storage, backups, and media libraries where cost and streaming
                support matter more than deep collaboration.
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Ideal for: Creators, small businesses, and archive-heavy teams.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom line callout */}
        <section className="mt-12 space-y-3 rounded-3xl bg-slate-900 p-6 text-white shadow-sm">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-emerald-300" />
            <h3 className="text-lg font-semibold">Bottom line</h3>
          </div>
          <p className="text-sm text-slate-100">
            Pick <strong>Sync.com</strong> if privacy-first sharing and compliance are the priority.
            Choose <strong>Dropbox</strong> if your team’s productivity depends on integrations,
            shared folders, and live collaboration. Choose <strong>pCloud</strong> if you are optimising
            for long-term storage cost, media playback, and the option to bolt on end-to-end
            encryption with Crypto.
          </p>
          <Link
            to="/tools/sync-com"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
          >
            Open Sync.com review <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
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
