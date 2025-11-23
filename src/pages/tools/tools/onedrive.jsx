import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Cloud, FolderSync } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "OneDrive";
const slug = "onedrive";
const category = "Cloud Storage";
const shortPitch =
  "OneDrive is Microsoft’s cloud storage and file collaboration platform, tightly integrated with Microsoft 365, Teams, and Office for seamless sharing and coauthoring.";
const pricingSummary =
  "Included with most Microsoft 365 plans; standalone storage starts around $1.99/month. Business plans add admin controls, file restore, and advanced sharing policies.";
const officialUrl = "https://www.microsoft.com/onedrive";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/onedrive.live.com",
  gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.20)]",
};

const alternatives = [
  { name: "Dropbox", slug: "dropbox", isComparison: true },
  { name: "pCloud", slug: "pcloud", isComparison: true },
  { name: "Sync.com", slug: "sync-com" },
  { name: "Box", slug: "box" },
];

const faqs = [
  {
    q: "Is OneDrive free?",
    a: "OneDrive offers 5 GB free. Most users get larger storage through Microsoft 365 Personal, Family, or Business plans, which bundle Office apps and Teams.",
  },
  {
    q: "Is OneDrive good for agencies?",
    a: "Yes if clients are on Microsoft 365. Shared libraries, permissions, and coauthoring make reviews easy. If clients are Google-first, Dropbox or pCloud can be smoother.",
  },
  {
    q: "Which OneDrive business plan should I pick?",
    a: "Business Plan 1 works for lightweight file sharing. Business Plan 2 adds advanced security, DLP, and file restore. If you already buy Microsoft 365, OneDrive is included.",
  },
  {
    q: "Does OneDrive integrate with Teams and SharePoint?",
    a: "Yes. Files stored in OneDrive or SharePoint show up in Teams channels and chats, with permissions and version history intact. Coauthoring works in Office apps.",
  },
  {
    q: "Is OneDrive secure?",
    a: "Files are encrypted at rest and in transit. Personal Vault, conditional access, and DLP (Business 2) add protection. Always enable MFA and sharing policies.",
  },
  {
    q: "Can I use OneDrive offline?",
    a: "Yes. Files sync locally with selective sync. Offline edits sync when back online. Use Files On-Demand to save disk space.",
  },
  {
    q: "How does OneDrive compare to Dropbox?",
    a: "Dropbox has superb sharing UX and integrations beyond Microsoft. OneDrive wins on Microsoft 365 bundling and Office coauthoring. Pick based on your primary suite.",
  },
  {
    q: "Is OneDrive good for large media files?",
    a: "It supports large files, but creative teams may prefer Dropbox or pCloud for media previews and client-friendly sharing. For Office-heavy teams, OneDrive is fine.",
  },
];

function OneDriveToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "OneDrive is the obvious pick for Microsoft 365 users who need seamless file sync, sharing, and Office coauthoring. Bundled pricing makes it cost-effective, while admin controls keep business data governed.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const featureBlocks = [
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Tight Microsoft 365 integration",
      body: "OneDrive is native to Teams, Outlook, and Office apps. Files stay in sync with version history and coauthoring for Word, Excel, and PowerPoint.",
    },
    {
      icon: <FolderSync className="h-5 w-5 text-indigo-500" />,
      title: "Reliable sync and offline access",
      body: "Files On-Demand, selective sync, and local caching let distributed teams work offline, then sync changes automatically with conflict awareness.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Permissions and sharing controls",
      body: "Share links with expiry, passwords, and scoped permissions. Admins can enforce conditional access, DLP, and audit logs on Business plans.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Simple sharing for clients",
      body: "Create shared folders or links that clients can use without deep setup. Works well when stakeholders already use Office or Teams.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and compliance",
      body: "Encryption at rest/in transit, Personal Vault, and admin policies keep data protected. Business Plan 2 adds advanced DLP and retention controls.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Bundled value",
      body: "Storage bundled with Microsoft 365 reduces extra subscriptions. Great value if you already rely on the Microsoft ecosystem.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Comprehensive OneDrive review for Microsoft-first teams covering pricing, features, pros & cons, alternatives, and whether it fits your 2025 stack."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Built into Microsoft 365, OneDrive keeps teams collaborating with reliable sync, permissions, and Office coauthoring without extra subscriptions.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              OneDrive is Microsoft’s {category.toLowerCase()} service for storing, sharing, and collaborating on files across devices. It’s deeply integrated into Teams and Office apps, making it easy for Microsoft-first organizations to keep files consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing, sales, and ops teams use OneDrive to centralize assets, collaborate on documents, and share with clients without switching platforms. Coauthoring, permissions, and version history are built in.
            </p>
            <p className="mt-3 text-slate-700">
              Because it’s bundled with Microsoft 365, OneDrive often replaces standalone storage subscriptions for companies standardized on Microsoft’s suite.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">OneDrive is ideal for teams already using Microsoft 365 and Teams.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams collaborating on briefs, copy, and assets alongside Outlook and Teams.",
                "Sales teams sharing proposals and decks with clients while tracking versions.",
                "Customer success teams storing playbooks and QBR docs with permission controls.",
                "Agencies working with Microsoft-first clients that expect Office-native files.",
                "Ops and finance teams syncing spreadsheets securely with audit trails.",
                "Distributed teams needing offline access plus straightforward sharing links.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">OneDrive focuses on Microsoft-native collaboration, sharing controls, and bundled value.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} is bundled with Microsoft 365 Personal, Family, and Business plans. Standalone storage exists, but most teams get better value inside the suite. Business Plan 2 adds advanced security and compliance controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you already buy Microsoft 365, use OneDrive. If not, compare standalone storage to bundled pricing before deciding.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Personal testing</td>
                    <td className="px-4 py-3">5 GB storage</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Microsoft 365 Personal/Family</td>
                    <td className="px-4 py-3">Individuals and households</td>
                    <td className="px-4 py-3">1 TB per user + Office apps</td>
                    <td className="px-4 py-3">~$6–$10/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Plan 1</td>
                    <td className="px-4 py-3">Small teams on Microsoft 365</td>
                    <td className="px-4 py-3">1 TB per user, core security</td>
                    <td className="px-4 py-3">~$5/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Plan 2</td>
                    <td className="px-4 py-3">Teams needing DLP and compliance</td>
                    <td className="px-4 py-3">Unlimited storage options, advanced security, file restore</td>
                    <td className="px-4 py-3">~$10–$12/user/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If your company already licenses Microsoft 365, OneDrive is effectively included value. If you’re not in the ecosystem, compare against Dropbox or pCloud for sharing UX and media handling before adding another subscription.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Bundled with Microsoft 365, keeping costs low for existing users.</li>
                  <li>Deep integration with Teams, Outlook, and Office coauthoring.</li>
                  <li>Permissions, link expiry, and Personal Vault improve security.</li>
                  <li>Reliable sync with offline access and Files On-Demand.</li>
                  <li>Version history and restore help recover mistakes or ransomware hits.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Sharing UX feels less polished than Dropbox, especially for external reviewers.</li>
                  <li>Media previews and client-proofing features are limited.</li>
                  <li>Full value depends on already using Microsoft 365; otherwise cost calculus changes.</li>
                  <li>Sync conflicts can happen when multiple local copies stay open.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              OneDrive leads for Microsoft-first teams. Dropbox is favored for polished sharing, pCloud for privacy and value, Sync.com for zero-knowledge encryption, and Box for enterprise governance.
            </p>
            <p className="mt-2 text-slate-700">All offer core storage and sharing; they differ on privacy, UX, and ecosystem fit.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Comparison available for a direct look." : "Popular storage alternative."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-500" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">Here’s how OneDrive compares to Dropbox and pCloud.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dropbox</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/pcloud-vs-dropbox-vs-onedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dropbox is suite-agnostic and has great sharing UX plus media previews. OneDrive wins if you’re already on Microsoft 365 and want native Office coauthoring with bundled pricing.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Dropbox for mixed-client collaboration; choose OneDrive when your team and clients are Microsoft-first.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs pCloud</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/onedrive-vs-dropbox-vs-sync-com">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                pCloud offers lifetime plans and optional zero-knowledge Crypto add-on. OneDrive is better for Office collaboration and Teams integration. pCloud feels lighter for media-heavy workflows.
              </p>
              <p className="mt-2 text-slate-900">
                Choose OneDrive if you operate inside Microsoft 365 every day; choose pCloud for privacy/value-focused storage without suite lock-in.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For Microsoft 365 users, OneDrive is a no-brainer: it’s bundled, secure, and integrated with Teams/Office. It reduces extra storage spend and keeps collaboration in one place.
            </p>
            <p className="mt-3 text-slate-700">
              If your clients are mixed or you need best-in-class sharing UX, evaluate Dropbox or pCloud. Media-heavy teams may prefer those experiences; Microsoft-first teams stay efficient with OneDrive.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Pick {toolName} when you run on Microsoft 365; weigh Dropbox or pCloud only if cross-suite collaboration or media workflows dominate.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>
              Choose {toolName} if you already pay for Microsoft 365 and need reliable file sync, sharing, and Office coauthoring. It keeps collaboration streamlined across Teams and Outlook.
            </p>
            <p>
              Consider Dropbox or pCloud if you prioritize neutral sharing UX, privacy features, or work with mixed-client stacks. For Microsoft-first companies, {toolName} remains the most efficient choice.
            </p>
            <p>{toolName} slots neatly into a modern Microsoft stack with security, governance, and offline access ready to go.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, start here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default OneDriveToolPage;
