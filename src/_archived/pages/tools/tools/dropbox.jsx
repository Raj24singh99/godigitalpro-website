import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Dropbox";
const slug = "dropbox";
const category = "Cloud Storage & Collaboration";
const shortPitch =
  "Dropbox is a cloud storage and collaboration platform that helps teams keep files organized, synced, and shareable across devices.";
const pricingSummary =
  "Plans start with free storage; paid tiers like Plus/Essentials from ~$11–$12/month, Professional and Business plans add more storage, team controls, and security.";
const officialUrl = "https://www.dropbox.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/dropbox.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "pCloud", slug: "pcloud" },
  { name: "Sync.com", slug: "sync-com" },
  { name: "Box", slug: "box" },
  { name: "OneDrive", slug: "onedrive" },
  { name: "Google Meet", slug: "google-meet" },
];

const faqs = [
  {
    q: "Is Dropbox secure for client files?",
    a: "Dropbox offers encryption at rest and in transit, advanced sharing controls, password-protected links, and team admin settings. Business tiers add audit logs and device controls.",
  },
  {
    q: "How much storage does Dropbox include?",
    a: "Personal plans start with 2 GB free. Plus/Essentials offer 2–3 TB, Professional adds more tools, and Business plans start with 5 TB or as much space as needed depending on tier.",
  },
  {
    q: "Does Dropbox support collaboration?",
    a: "Yes. Dropbox enables shared folders, commenting, file requests, version history, and integrations with apps like Slack, Zoom, and Microsoft Office.",
  },
  {
    q: "Can Dropbox back up my computer?",
    a: "Dropbox Backup can automatically back up folders (Desktop, Documents, Downloads) and external drives on some plans, keeping copies in the cloud.",
  },
  {
    q: "Is Dropbox good for agencies?",
    a: "Agencies use Dropbox to organize client assets, control access, and share deliverables. Admin controls, link permissions, and activity logs help keep projects secure.",
  },
  {
    q: "How does Dropbox compare to pCloud or Sync.com?",
    a: "Dropbox prioritizes ease-of-use and integrations. pCloud offers optional lifetime pricing; Sync.com emphasizes zero-knowledge encryption. Choose based on security, pricing, and ecosystem fit.",
  },
  {
    q: "Does Dropbox work offline?",
    a: "Yes. Files can be stored locally and synced when you reconnect. Smart Sync/Selective Sync controls what stays on your device.",
  },
  {
    q: "Does Dropbox integrate with e-signatures?",
    a: "Dropbox includes built-in eSignature tools (HelloSign) on some plans, making contract workflows faster.",
  },
];

function DropboxToolPage() {
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
        "Dropbox is a user-friendly cloud storage platform with solid sync, sharing controls, and integrations. It remains a reliable choice for teams needing simple collaboration plus admin controls.",
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
      title: "Reliable sync and sharing",
      body: "Cross-device sync, smart sync, and shared folders make it easy for teams to collaborate on the latest files.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Organized version history",
      body: "File recovery and version history reduce risk from accidental edits, ransomware, or deletions.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Built-in collaboration",
      body: "Comments, file requests, signatures (HelloSign), and shared links streamline workflows with clients and partners.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Extensive integrations",
      body: "Connect Dropbox with Slack, Zoom, Microsoft 365, Google Workspace, Trello, and other productivity tools.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Admin controls and security",
      body: "Granular permissions, device approvals, SSO/2FA, and audit logs help protect sensitive assets.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-400" />,
      title: "Backup and offline access",
      body: "Desktop backup, selective sync, and offline access keep key files available even without a connection.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Dropbox review for teams: pricing, storage, security, pros & cons, and alternatives so you can pick the right cloud storage and collaboration platform."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  Dropbox remains a simple, dependable option for syncing and sharing files with clients and teammates while keeping admin control.
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
              Dropbox is a {category.toLowerCase()} platform that keeps files synced across devices, simplifies sharing, and adds collaboration via comments, signatures, and integrations.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, agencies, and distributed teams use Dropbox to organize creative assets, briefs, and deliverables while controlling who can access what.
            </p>
            <p className="mt-3 text-slate-700">
              Business plans add admin controls, device approvals, and audit logs to satisfy compliance needs without making users change their workflow.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Dropbox suits teams that want straightforward sync, sharing, and admin controls.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies collaborating with clients on creative assets and approvals.",
                "Marketing teams organizing campaign files, briefs, and media.",
                "Remote teams needing reliable sync and offline access.",
                "Consultants sharing deliverables securely with expiring links.",
                "Sales and success teams distributing enablement assets and proposals.",
                "Operations teams backing up key folders and external drives.",
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
            <p className="mt-3 text-slate-700">
              Dropbox focuses on reliable sync, easy sharing, and admin safeguards to keep collaboration simple and secure.
            </p>
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
                  Dropbox pricing ranges from free to Business tiers with more storage, admin controls, and security. Annual billing reduces per-month costs. Choose based on storage needs and team features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Individuals start on Plus/Essentials. Teams choose Business for admin controls and ample shared storage.</p>
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
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">~2 GB storage</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus / Essentials</td>
                    <td className="px-4 py-3">Individuals needing more space</td>
                    <td className="px-4 py-3">~2–3 TB storage, file transfer links</td>
                    <td className="px-4 py-3">~$11–$12/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Freelancers and consultants</td>
                    <td className="px-4 py-3">More storage, advanced sharing, branding</td>
                    <td className="px-4 py-3">Higher, billed monthly or annual</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams needing admin controls</td>
                    <td className="px-4 py-3">Starts ~5 TB or as-needed storage, SSO, audit logs</td>
                    <td className="px-4 py-3">Per user/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pick your plan by storage and control needs. If you collaborate externally or manage many users, Business plans offer the admin visibility you’ll want.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Easy sync and sharing for teams and clients.</li>
                  <li>Strong integrations with everyday productivity tools.</li>
                  <li>Version history and file recovery for mistakes and ransomware.</li>
                  <li>Admin controls and audit logs on Business plans.</li>
                  <li>Built-in signatures and file requests for workflow speed.</li>
                  <li>Selective/Smart Sync plus offline access keeps devices lean.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Storage pricing can be higher than some competitors.</li>
                  <li>End-to-end encryption is not default (unlike some privacy-first tools).</li>
                  <li>Shared links require careful permission settings to avoid oversharing.</li>
                  <li>Large teams may need enterprise support for compliance requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Dropbox competes with other cloud storage and collaboration tools that differ on encryption posture, pricing, and enterprise controls.
            </p>
            <p className="mt-2 text-slate-700">All links point to live tool pages—no broken redirects.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how Dropbox stacks up against privacy-focused and value-focused storage providers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Sync.com</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/sync-com-vs-dropbox-vs-pcloud">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Sync.com emphasizes zero-knowledge encryption and strong privacy. Dropbox focuses on UX and integrations. Choose based on compliance needs versus convenience and ecosystem fit.
              </p>
              <p className="mt-2 text-slate-900">
                Pick Dropbox for smooth collaboration; pick Sync.com if privacy-by-default is your primary requirement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs pCloud</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/pcloud-vs-dropbox-vs-onedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                pCloud offers optional lifetime licenses and client-side encryption add-ons. Dropbox has broader integrations and business tooling out of the box.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Dropbox for collaboration and ecosystem; choose pCloud for lifetime pricing and strong personal security options.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Dropbox is worth it for teams wanting dependable sync, easy sharing, and admin controls without heavy training. It’s strong for agencies, marketers, and remote teams exchanging large assets frequently.
            </p>
            <p className="mt-3 text-slate-700">
              If budget or zero-knowledge encryption is the priority, pCloud or Sync.com may fit better. If you are all-in on Microsoft 365, OneDrive could be simpler for license consolidation.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Dropbox remains a solid, user-friendly storage choice with enough security and integrations for most modern teams.
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
              Choose Dropbox if you need reliable sync, easy sharing, and integrations that your team and clients can adopt quickly. It’s ideal for creatives, marketers, and consultants who exchange assets regularly.
            </p>
            <p>
              Consider Sync.com or pCloud if you want stronger privacy defaults or lifetime pricing. OneDrive may be better if your team is standardized on Microsoft 365.
            </p>
            <p>Dropbox pairs well with productivity tools, e-signatures, and project management platforms to keep work organized and traceable.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default DropboxToolPage;
