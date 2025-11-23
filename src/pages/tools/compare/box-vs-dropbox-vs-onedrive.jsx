import React from "react";
import {
  Sparkles,
  Crown,
  Layers,
  BarChart3,
  ArrowLeft,
  Gauge,
  ShieldCheck,
  Cloud,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "box vs dropbox vs onedrive";
const canonical = buildCanonical("/tools/compare/box-vs-dropbox-vs-onedrive");

const brandMeta = {
  box: {
    gradient: "from-blue-500 via-indigo-500 to-slate-700",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/box.com",
  },
  dropbox: {
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/dropbox.com",
  },
  onedrive: {
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/onedrive.com",
  },
};

const contenders = [
  {
    key: "box",
    name: "Box",
    blurb: "Enterprise content cloud with governance, workflows, and secure external collaboration.",
    url: "https://www.box.com",
  },
  {
    key: "dropbox",
    name: "Dropbox",
    blurb: "Team-friendly storage with intuitive sharing, sync, and broad third-party integrations.",
    url: "https://www.dropbox.com",
  },
  {
    key: "onedrive",
    name: "OneDrive",
    blurb: "Microsoft 365-native storage for Teams and Office coauthoring across devices.",
    url: "https://www.microsoft.com/onedrive",
  },
];

const comparisonRows = [
  {
    label: "Best for",
    box: "Governance-heavy orgs with external collaboration",
    dropbox: "Client collaboration and cross-suite workflows",
    onedrive: "Microsoft 365-centric teams and tenants",
  },
  {
    label: "Security & governance",
    box: "Advanced governance, retention, legal holds, DLP/SIEM integrations",
    dropbox: "Solid security and admin controls; basic governance add-ons",
    onedrive: "365 security stack, conditional access, tenant controls",
  },
  {
    label: "External sharing",
    box: "Granular links, classification, expiration, watermarks, partner controls",
    dropbox: "Client-friendly links, file requests, viewer history",
    onedrive: "Strong inside tenant; external sharing configurable per policy",
  },
  {
    label: "Workflows & automation",
    box: "Box Relay workflows, Box Sign, content-driven automation",
    dropbox: "Comments, tasks, Dropbox Replay/Paper for reviews",
    onedrive: "SharePoint, Power Automate, and Teams in the 365 stack",
  },
  {
    label: "Storage model",
    box: "Pooled/unlimited options on business tiers (fair use)",
    dropbox: "Per-seat storage tiers by plan",
    onedrive: "Storage bundled per user with Microsoft 365",
  },
  {
    label: "Ecosystem fit",
    box: "Suite-agnostic, security-focused content layer",
    dropbox: "Works across Google, Microsoft, and others",
    onedrive: "Best when you are already all-in on Microsoft 365",
  },
];

const scoreboard = [
  { label: "Security & governance", box: 9.5, dropbox: 8.3, onedrive: 8.6 },
  { label: "Collaboration & UX", box: 8.4, dropbox: 9.3, onedrive: 8.8 },
  { label: "External sharing", box: 9.4, dropbox: 9.2, onedrive: 8.5 },
  { label: "Ecosystem fit", box: 8.7, dropbox: 9.0, onedrive: 9.6 },
  { label: "Value for money", box: 8.5, dropbox: 8.6, onedrive: 9.0 },
];

const pricingTable = [
  {
    plan: "Box Business / Enterprise",
    monthly: "Varies by tier (per user, business plans)",
    annual: "Discounts typically available on annual",
    limits: "Storage, governance, and security features scale by tier",
    notes: "Best value when you need advanced governance, e-sign, and external collaboration.",
  },
  {
    plan: "Dropbox Business (Standard / Advanced)",
    monthly: "Per user, varies by storage and features",
    annual: "Lower effective price when billed annually",
    limits: "Storage pools, security, and admin tools differ by plan",
    notes: "Great for collaboration-heavy teams working across tools and clients.",
  },
  {
    plan: "OneDrive via Microsoft 365 Business",
    monthly: "Included in most Microsoft 365 Business plans",
    annual: "Usually billed on annual term",
    limits: "Per-user storage plus SharePoint/Teams storage",
    notes: "Often the best-value choice if you already use Microsoft 365.",
  },
];

const featureBullets = {
  security: [
    "Box: Built as a content cloud with advanced governance, retention policies, legal holds, and DLP/SIEM integrations for regulated industries.",
    "Dropbox: Strong baseline security with admin controls, device management, and activity logs; governance add-ons available at higher tiers.",
    "OneDrive: Leverages Microsoft 365 security, including conditional access, sensitivity labels, and tenant-wide policies.",
  ],
  collaboration: [
    "Box: Secure external collaboration with partners and vendors; Box Notes and integrations for reviews and sign-offs.",
    "Dropbox: Excellent UX for sync and sharing, file requests for client uploads, and tools like Dropbox Replay for media teams.",
    "OneDrive: Seamless coauthoring in Word, Excel, PowerPoint and tight integration with Teams and SharePoint.",
  ],
  ecosystem: [
    "Box: Suite-agnostic backbone that slots into Microsoft, Google, and other SaaS tools while staying your central content hub.",
    "Dropbox: Integration-rich and neutral—works across Google Workspace, Microsoft 365, Slack, Zoom, and more.",
    "OneDrive: Deeply integrated into Microsoft 365; best experience when your identity, email, and collaboration already live in Azure AD.",
  ],
};

const faqs = [
  {
    q: `Which is best overall in ${YEAR}?`,
    a: "Box is best for governance and secure external collaboration, Dropbox for the smoothest sync/sharing UX, and OneDrive for Microsoft 365-centric teams that want bundled value and deep Office/Teams integration.",
  },
  {
    q: "Who should choose Box?",
    a: "Choose Box if you operate in a compliance-heavy industry or share sensitive content with partners and need advanced governance, legal holds, and workflow automation without being locked into one office suite.",
  },
  {
    q: "Who should choose Dropbox?",
    a: "Choose Dropbox if collaboration UX, simple client sharing, and working across multiple ecosystems matter most, and you do not need the heaviest governance stack.",
  },
  {
    q: "Is OneDrive cheaper than Box or Dropbox?",
    a: "If you already pay for Microsoft 365, OneDrive storage is included for each licensed user, which often makes it the best-value choice for Microsoft tenants compared with adding a separate storage platform.",
  },
  {
    q: "Can I mix these tools in one organisation?",
    a: "Yes. Many organisations standardise on OneDrive/SharePoint for internal content, while using Box or Dropbox for external client and partner collaboration where workflows or UX are stronger.",
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
  box: {
    pros: [
      "Industry-leading governance, retention, and legal hold capabilities",
      "Granular external sharing with classification, expiration, and watermark controls",
      "Box Relay automation and Box Sign for content-centric workflows",
    ],
    cons: [
      "Can be overkill for very small teams with simple sharing needs",
      "Requires change management vs. consumer-style storage tools",
      "Total cost can be higher if you do not fully need governance features",
    ],
  },
  dropbox: {
    pros: [
      "Best-in-class sync and sharing UX for non-technical users",
      "Client-friendly file requests and review tools (e.g. for media teams)",
      "Broad integrations with Google Workspace, Microsoft 365, Slack, and more",
    ],
    cons: [
      "Governance and compliance features trail Box for highly regulated sectors",
      "Per-seat storage plans can be less economical at very large scale",
      "Not as deeply integrated into Microsoft 365 as OneDrive/SharePoint",
    ],
  },
  onedrive: {
    pros: [
      "Included with most Microsoft 365 Business and Enterprise licences",
      "Tight integration with Teams, Outlook, SharePoint, and Office apps",
      "Strong centralised security and compliance via Microsoft 365",
    ],
    cons: [
      "UX can feel fragmented across OneDrive, SharePoint, and Teams for end-users",
      "External sharing UX is less polished than Dropbox in some client scenarios",
      "Less appealing if your organisation is not standardised on Microsoft 365",
    ],
  },
};

const avg = (tool) =>
  (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);

const averages = {
  box: avg("box"),
  dropbox: avg("dropbox"),
  onedrive: avg("onedrive"),
};

const overallWinner =
  Math.max(averages.box, averages.dropbox, averages.onedrive) === parseFloat(averages.onedrive)
    ? "OneDrive"
    : Math.max(averages.box, averages.dropbox) === parseFloat(averages.box)
    ? "Box"
    : "Dropbox";

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
        className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
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

export default function BoxVsDropboxVsOnedrivePage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Box vs Dropbox vs OneDrive (${YEAR}) – Secure cloud storage comparison`}
        description="Side-by-side comparison of Box, Dropbox, and OneDrive on security, governance, collaboration, sharing, ecosystem fit, and pricing so you can pick the right cloud storage platform for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, box vs dropbox, dropbox vs onedrive, box vs onedrive, box review, dropbox review, onedrive review, cloud storage comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Cloud storage & collaboration
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Box vs Dropbox vs OneDrive ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          Box leads on governance and secure external sharing, Dropbox on collaboration UX and
          integrations, and OneDrive on Microsoft 365 alignment and overall value. This guide
          compares them across security, collaboration, workflows, and pricing to help you choose
          the right cloud storage platform.
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
                <Cloud className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </a>
          ))}
        </div>

        {/* Quick verdict + scoreboard winner */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>Box</strong> if governance, legal holds, and secure partner sharing are
              non-negotiable. Pick <strong>Dropbox</strong> if you want the smoothest sync and
              sharing UX across tools and clients. Go with <strong>OneDrive</strong> if your
              organisation is already standardised on Microsoft 365 and you want the best bundled
              value.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-amber-600" /> Overall scoreboard winner:{" "}
              {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg:{" "}
                {overallWinner === "Box"
                  ? averages.box
                  : overallWinner === "Dropbox"
                  ? averages.dropbox
                  : averages.onedrive}
                /10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              There is no single “best” option—pick based on whether security, UX, or Microsoft
              ecosystem fit is your primary driver.
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
                  <th className="px-4 py-3">Box</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">OneDrive</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.box}</td>
                    <td className="px-4 py-3 text-slate-700">{row.dropbox}</td>
                    <td className="px-4 py-3 text-slate-700">{row.onedrive}</td>
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
                  <th className="px-4 py-3">Box</th>
                  <th className="px-4 py-3">Dropbox</th>
                  <th className="px-4 py-3">OneDrive</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.box === row.dropbox && row.dropbox === row.onedrive
                      ? "Tie"
                      : Math.max(row.box, row.dropbox, row.onedrive) === row.box
                      ? "Box"
                      : Math.max(row.dropbox, row.onedrive) === row.dropbox
                      ? "Dropbox"
                      : "OneDrive";

                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Box" ? "font-semibold text-blue-700" : "text-slate-700"
                        }`}
                      >
                        {row.box}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "Dropbox"
                            ? "font-semibold text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.dropbox}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winner === "OneDrive"
                            ? "font-semibold text-sky-700"
                            : "text-slate-700"
                        }`}
                      >
                        {row.onedrive}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-blue-800">{averages.box}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.dropbox}</td>
                  <td className="px-4 py-3 font-semibold text-sky-800">{averages.onedrive}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-blue-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="h-5 w-5 text-blue-600" /> Security, compliance & governance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Cloud className="h-5 w-5 text-indigo-600" /> Collaboration & external sharing
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Lock className="h-5 w-5 text-sky-600" /> Ecosystem fit & long-term value
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecosystem.map((item) => (
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
            Pricing for Box, Dropbox, and OneDrive varies by region, contract, and promotions. Always
            confirm current plans and limits on the official pricing pages before making a final
            decision.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Box:</strong> Admin-heavy but powerful for IT and security teams. End-users
              adapt quickly to web and desktop apps once folder structures and sharing policies are
              clear.
            </li>
            <li>
              <strong>Dropbox:</strong> Feels closest to consumer cloud storage—very low friction for
              end-users and external clients, with intuitive sync and sharing.
            </li>
            <li>
              <strong>OneDrive:</strong> Familiar to Microsoft 365 users, but concepts split across
              OneDrive, SharePoint, and Teams can require some enablement and training.
            </li>
          </ul>
        </section>

        {/* Real-world use cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Regulated industries & strict governance:</strong> Box wins with advanced
              governance, legal holds, and DLP/SIEM integrations.
            </li>
            <li>
              <strong>Agencies and client-facing teams:</strong> Dropbox wins with frictionless
              sync, file requests, and simple client access.
            </li>
            <li>
              <strong>Microsoft 365-first organisations:</strong> OneDrive wins with bundled
              licensing, Teams/Office integration, and centralised security controls.
            </li>
            <li>
              <strong>Hybrid ecosystems:</strong> Many organisations run OneDrive internally and use
              Box or Dropbox for select external collaborations—your winner may be a mix.
            </li>
          </ul>
        </section>

        {/* Pros & cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
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
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-amber-700 ring-1 ring-amber-100 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
