import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "onedrive vs dropbox vs sync.com";
const canonical = buildCanonical(
  "/tools/compare/onedrive-vs-dropbox-vs-sync-com"
);

const brandMeta = {
  onedrive: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    badge: "bg-cyan-100 text-cyan-900",
    logo: "https://logo.clearbit.com/onedrive.live.com",
  },
  dropbox: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/dropbox.com",
  },
  "sync.com": {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/sync.com",
  },
};

const contenders = [
  {
    key: "onedrive",
    name: "OneDrive",
    blurb: "Bundled with Microsoft 365 for Office-first teams and enterprises.",
    url: "https://www.microsoft.com/onedrive",
  },
  {
    key: "dropbox",
    name: "Dropbox",
    blurb: "Polished sharing, file requests, and collaboration for mixed stacks.",
    url: "https://www.dropbox.com",
  },
  {
    key: "sync.com",
    name: "Sync.com",
    blurb: "Zero-knowledge encryption and privacy-first cloud storage and sharing.",
    url: "https://www.sync.com",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    onedrive: "Microsoft 365-centric teams that live in Office apps.",
    dropbox: "Agencies, creatives, and client work with mixed tools.",
    "sync.com": "Privacy-first individuals and regulated teams.",
  },
  {
    label: "Ecosystem fit",
    onedrive: "Deeply integrated with Teams, Office, and Windows.",
    dropbox: "Suite-agnostic; works well across macOS, Windows, Linux.",
    "sync.com": "Less ecosystem integration, more privacy focus.",
  },
  {
    label: "Security posture",
    onedrive: "AES at rest, TLS in transit, admin controls, conditional access.",
    dropbox: "AES/TLS, device security options, enterprise controls on higher tiers.",
    "sync.com": "End-to-end, zero-knowledge encryption by default.",
  },
  {
    label: "Collaboration",
    onedrive: "Real-time coauthoring in Office apps and Teams.",
    dropbox:
      "Strong external sharing, file requests, Paper, and previews for media.",
    "sync.com":
      "Basic collaboration; links and shared folders prioritise privacy over UX.",
  },
  {
    label: "External sharing",
    onedrive:
      "Good for B2B sharing within Microsoft tenants; link controls depend on admin policies.",
    dropbox:
      "Excellent for external clients with link settings, file requests, and comments.",
    "sync.com":
      "Private links with password/expiry; fewer collaboration niceties.",
  },
  {
    label: "Pricing approach",
    onedrive:
      "Often bundled into Microsoft 365 subscriptions, strong value if you already pay.",
    dropbox: "Per-seat plans with storage and collaboration features grouped.",
    "sync.com":
      "Per-user plans with generous storage and no-tracking, privacy-first positioning.",
  },
];

const scoreboard = [
  { label: "Security & privacy", onedrive: 8.3, dropbox: 8.0, syncCom: 9.4 },
  { label: "Collaboration", onedrive: 8.9, dropbox: 9.4, syncCom: 7.5 },
  { label: "Value for money", onedrive: 9.2, dropbox: 8.0, syncCom: 8.6 },
  { label: "Ecosystem fit", onedrive: 9.6, dropbox: 9.1, syncCom: 8.0 },
  { label: "External sharing", onedrive: 8.4, dropbox: 9.5, syncCom: 8.1 },
];

const avg = (tool) =>
  (
    scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) /
    scoreboard.length
  ).toFixed(1);

const averages = {
  onedrive: avg("onedrive"),
  dropbox: avg("dropbox"),
  syncCom: avg("syncCom"),
};

const overallWinner =
  Math.max(
    parseFloat(averages.onedrive),
    parseFloat(averages.dropbox),
    parseFloat(averages.syncCom)
  ) === parseFloat(averages.onedrive)
    ? "OneDrive"
    : Math.max(
        parseFloat(averages.dropbox),
        parseFloat(averages.syncCom)
      ) === parseFloat(averages.dropbox)
    ? "Dropbox"
    : "Sync.com";

const pricingTable = [
  {
    plan: "OneDrive via Microsoft 365",
    monthly: "Often from ~$6–$12/user/month (with Office apps)",
    annual: "Discounts on annual or enterprise agreements",
    limits:
      "Storage per user (typically 1 TB+), plus Office apps and Teams depending on plan",
    notes: "Best value if you already use Microsoft 365 across the organisation.",
  },
  {
    plan: "Dropbox Standard / Advanced",
    monthly: "From around ~$12–$20/user/month",
    annual: "Lower effective rate on annual billing",
    limits:
      "Storage per user on Standard; more admin/governance and storage on Advanced",
    notes: "Worth it if external collaboration and sharing UX directly drive revenue.",
  },
  {
    plan: "Sync.com Pro / Teams",
    monthly: "From around ~$8–$15/user/month",
    annual: "Discounted yearly plans with higher storage tiers",
    limits:
      "Per-user storage allocations with end-to-end encryption on all plans",
    notes: "Compelling when compliance and privacy requirements are strict.",
  },
];

const featureBullets = {
  security: [
    "OneDrive: Strong enterprise security when paired with Entra ID (Azure AD), conditional access, DLP and compliance policies in Microsoft 365.",
    "Dropbox: Mature security model with device approvals, remote wipe and admin controls that scale from freelancers to enterprise.",
    "Sync.com: End-to-end, zero-knowledge encryption by default, meaning the provider cannot see file contents.",
  ],
  collaboration: [
    "OneDrive: Best experience when your team already lives in Outlook, Teams and Office apps with coauthoring built-in.",
    "Dropbox: Excellent for cross-org collaboration, file requests, creative/media workflows and sharing large assets with clients.",
    "Sync.com: Collaboration is more “privacy-first” than “UX-first”, with basic folder and link sharing rather than rich workspaces.",
  ],
  ecosystem: [
    "OneDrive: Deeply integrated with Windows, Office desktop and web, SharePoint and Teams, reducing friction for Microsoft shops.",
    "Dropbox: Integrates broadly with productivity suites (Google Workspace, Microsoft 365), project tools and creative apps.",
    "Sync.com: Fewer flashy integrations, but a clear value prop for organisations that prioritise sovereignty and encryption.",
  ],
};

const prosCons = {
  onedrive: {
    pros: [
      "Excellent value when bundled into Microsoft 365 you already pay for",
      "Deep integration with Office apps, Teams, Windows and Entra ID security",
      "Strong governance options (DLP, retention, eDiscovery) for enterprises",
    ],
    cons: [
      "Best experience assumes a mostly-Microsoft environment",
      "External client sharing can be constrained by tenant security policies",
      "Web and sync UX can feel less polished than Dropbox for some users",
    ],
  },
  dropbox: {
    pros: [
      "Very polished sync and sharing UX that non-technical clients understand quickly",
      "Great for agencies and creatives handling large files and mixed toolchains",
      "Mature feature set for file requests, comments and external collaboration",
    ],
    cons: [
      "Can feel redundant and expensive if you already pay for Microsoft 365 or Google Workspace",
      "Less out-of-the-box compliance depth than a fully configured Microsoft 365 stack",
      "Zero-knowledge encryption is not the default model; provider can technically access metadata",
    ],
  },
  "sync.com": {
    pros: [
      "Zero-knowledge, end-to-end encryption by default for strong privacy",
      "Competitive storage allowances for the price, with privacy-first positioning",
      "Useful for legal, healthcare and other sensitive data scenarios",
    ],
    cons: [
      "Collaboration UX is simpler and less smooth than OneDrive/Dropbox",
      "Fewer productivity and creative-tool integrations available",
      "Sharing externally with less technical stakeholders may require more guidance",
    ],
  },
};

const faqs = [
  {
    q: `Which should I pick in ${YEAR}?`,
    a: "Pick OneDrive if you run primarily on Microsoft 365, Dropbox for the most polished sharing and client collaboration, and Sync.com if privacy and zero-knowledge encryption are your top priorities.",
  },
  {
    q: "Is Sync.com more private than OneDrive and Dropbox?",
    a: "Yes. Sync.com offers end-to-end, zero-knowledge encryption by default. OneDrive and Dropbox encrypt data in transit and at rest but can technically access file contents for certain features and compliance requests.",
  },
  {
    q: "Can I migrate between them?",
    a: "Yes. All three support uploads and exports. You can migrate manually or via third-party tools, but expect to rebuild sharing links, permissions, and sometimes re-map folder structures.",
  },
  {
    q: "What if my team already pays for Microsoft 365?",
    a: "If you already license Microsoft 365, OneDrive is usually the most cost-effective because storage is bundled. Only layer in Dropbox or Sync.com if you have specific collaboration or privacy gaps to solve.",
  },
  {
    q: "Which is better for working with external clients?",
    a: "Dropbox usually offers the smoothest client experience, with clear links, file requests, previews and comments—even if clients use a different productivity stack.",
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
  const key = lowered.includes("sync") ? "sync.com" : lowered;
  const meta =
    brandMeta[key] || brandMeta["sync.com"] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
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

export default function OnedriveVsDropboxVsSyncPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`OneDrive vs Dropbox vs Sync.com (${YEAR}) – Cloud storage comparison`}
        description="Compare OneDrive, Dropbox, and Sync.com on security, privacy, collaboration, ecosystem fit, and pricing to choose the right cloud storage platform."
        canonical={canonical}
        keywords={`${primaryKeyword}, cloud storage comparison, onedrive vs dropbox, onedrive vs sync.com, dropbox vs sync.com`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Hero */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Cloud storage
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          OneDrive vs Dropbox vs Sync.com ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          OneDrive wins inside Microsoft 365 environments, Dropbox leads for
          client-friendly sharing, and Sync.com is the privacy-first choice with
          zero-knowledge encryption. Here is a structured breakdown to decide
          which storage stack fits your team.
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
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {item.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Quick verdict + overall winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sky-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>OneDrive</strong> if your organisation already runs
              on Microsoft 365 and you want integrated collaboration and
              compliance. Pick <strong>Dropbox</strong> if external collaboration
              and polished sharing with clients matter most. Go with{" "}
              <strong>Sync.com</strong> if your top priority is zero-knowledge
              encryption and strict privacy guarantees.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-sky-600" /> Overall scoreboard
              winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "OneDrive"
                  ? averages.onedrive
                  : overallWinner === "Dropbox"
                  ? averages.dropbox
                  : averages.syncCom}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no universal winner. The right choice depends on whether
              your primary constraint is ecosystem alignment, collaboration UX,
              or privacy and encryption.
            </p>
          </div>
        </div>

        {/* Best for summary */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="text-sm font-semibold text-slate-900">Best for</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-cyan-600" />
              <span>
                <strong>OneDrive:</strong> Microsoft 365-first organisations
                that want storage, collaboration and compliance under one roof.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 text-indigo-600" />
              <span>
                <strong>Dropbox:</strong> Agencies, creatives and teams that
                share large files and proposals with external clients.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>
                <strong>Sync.com:</strong> Privacy- and compliance-sensitive use
                cases where zero-knowledge encryption is non-negotiable.
              </span>
            </li>
          </ul>
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">OneDrive</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">Sync.com</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.label}
                    className="odd:bg-white even:bg-slate-50/50"
                  >
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">
                      {row.onedrive}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row.dropbox}
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {row["sync.com"]}
                    </td>
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
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">OneDrive</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">Sync.com</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const { onedrive, dropbox, syncCom } = row;
                  const winnerValue = Math.max(onedrive, dropbox, syncCom);
                  const winner =
                    winnerValue === onedrive
                      ? "OneDrive"
                      : winnerValue === dropbox
                      ? "Dropbox"
                      : "Sync.com";
                  return (
                    <tr
                      key={row.label}
                      className="odd:bg-white even:bg-slate-50/50"
                    >
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "OneDrive"
                            ? "font-semibold text-cyan-800"
                            : "text-slate-700"
                        }`}
                      >
                        {onedrive}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Dropbox"
                            ? "font-semibold text-indigo-800"
                            : "text-slate-700"
                        }`}
                      >
                        {dropbox}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Sync.com"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {syncCom}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winner}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-cyan-50 via-indigo-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-cyan-800">
                    {averages.onedrive}
                  </td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">
                    {averages.dropbox}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.syncCom}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinner}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <ShieldCheck className="h-6 w-6 text-sky-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Security & privacy
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Collaboration & sharing
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-slate-900">
              Ecosystem & integrations
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {featureBullets.ecosystem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual / term</th>
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
                    <td className="px-4 py-3 text-slate-700">
                      {row.monthly}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and may vary by region, storage tier and
            contract. Treat these as directional only and confirm current
            pricing, storage limits and compliance options on each vendor’s
            site.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>OneDrive:</strong> Feels natural for teams already living
              in Outlook, Teams and Office. Admin side can be complex but is
              powerful when governed well.
            </li>
            <li>
              <strong>Dropbox:</strong> Very approachable for end-users and
              clients; sharing, previewing and requesting files feels simple and
              intuitive.
            </li>
            <li>
              <strong>Sync.com:</strong> Slightly more utilitarian UX, but
              straightforward once users understand that privacy and encryption
              are the primary goals.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <strong>Microsoft 365 organisations:</strong> OneDrive is usually
              the default winner, consolidating storage, collaboration and
              compliance in the same ecosystem.
            </li>
            <li>
              <strong>Agencies and creative studios:</strong> Dropbox often
              wins, especially where client experience and large-file workflows
              are central to delivery.
            </li>
            <li>
              <strong>Privacy- and compliance-heavy sectors:</strong> Sync.com
              is attractive for legal, healthcare and other regulated scenarios
              where zero-knowledge encryption matters.
            </li>
            <li>
              <strong>Hybrid or multi-tool environments:</strong> You might use
              OneDrive internally, Dropbox for client projects, and Sync.com for
              particularly sensitive archives.
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
              <h3 className="text-lg font-semibold">OneDrive</h3>
              <p className="text-sm text-slate-700">
                Best when you want cloud storage tightly integrated with
                Microsoft 365, Teams and enterprise security controls.
              </p>
              <p className="mt-2 text-sm font-semibold text-cyan-700">
                Ideal for: IT-managed organisations standardising on Microsoft
                365 for productivity and compliance.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Dropbox</h3>
              <p className="text-sm text-slate-700">
                Best when client-facing sharing, previews and simple UX
                determine whether work moves smoothly.
              </p>
              <p className="mt-2 text-sm font-semibold text-indigo-700">
                Ideal for: Agencies, freelancers, production teams and cross-org
                collaborations.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Sync.com</h3>
              <p className="text-sm text-slate-700">
                Best when your first requirement is “no one but us should see
                these files”, even at the provider level.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Privacy-conscious individuals, legal/health teams,
                and organisations with strict data-handling policies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
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
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sky-700 ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
