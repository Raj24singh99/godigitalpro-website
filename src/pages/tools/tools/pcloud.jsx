import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Lock, Globe2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "pCloud";
const slug = "pcloud";
const category = "Cloud Storage";
const shortPitch =
  "pCloud is a secure cloud storage platform with lifetime plans, built-in media playback, and optional client-side encryption for freelancers, teams, and content creators.";
const pricingSummary = "Monthly/annual subscriptions plus lifetime plans; optional Crypto add-on for zero-knowledge encryption at an extra fee.";
const officialUrl = "https://www.pcloud.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/pcloud.com",
  gradient: "from-sky-500 via-teal-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.25)]",
};

const alternatives = [
  { name: "Sync.com", slug: "sync-com" },
  { name: "Dropbox", slug: "dropbox" },
  { name: "OneDrive", slug: "onedrive" },
  { name: "Box", slug: "box" },
  { name: "pCloud vs Dropbox vs OneDrive", slug: "compare/pcloud-vs-dropbox-vs-onedrive", isComparison: true },
];

const faqs = [
  { q: "Is pCloud zero-knowledge by default?", a: "Standard storage is encrypted in transit/at rest. Zero-knowledge encryption comes with the paid Crypto add-on to protect selected folders end-to-end." },
  { q: "Does pCloud have lifetime plans?", a: "Yes. pCloud offers lifetime storage tiers alongside monthly/annual plans, making it attractive for long-term use." },
  { q: "Where is pCloud data stored?", a: "You can choose EU or US data centers. Pick EU for GDPR alignment if most users are in Europe." },
  { q: "Is pCloud good for media?", a: "Yes. Built-in audio/video players and previewing make it popular for photographers, videographers, and podcasters sharing large files." },
  { q: "Can pCloud replace Dropbox?", a: "For many teams, yes—especially if you want lifetime pricing and optional E2E encryption. Dropbox still leads on collaboration and app ecosystem." },
  { q: "Does pCloud support backup and sync?", a: "It offers selective sync, backup of local folders, and file versioning. You can also back up from other clouds like Dropbox or Google." },
  { q: "How secure is pCloud Crypto?", a: "Crypto encrypts files client-side with zero-knowledge keys. Even pCloud cannot access Crypto folders." },
  { q: "Is pCloud good for teams?", a: "Business plans add user management, roles, and shared folders. It’s strong for media-heavy teams needing predictable costs." },
];

export default function ToolPage() {
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
        "pCloud blends reliable cloud storage, built-in media playback, and optional zero-knowledge encryption. Lifetime plans make it a strong value for long-term storage needs.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Flexible storage options",
      body: "Monthly, annual, and lifetime plans with generous storage make budgeting predictable for individuals and teams.",
    },
    {
      icon: <Lock className="h-5 w-5 text-emerald-600" />,
      title: "Optional zero-knowledge encryption",
      body: "The Crypto add-on encrypts selected folders client-side so only you hold the keys—ideal for sensitive docs and client work.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Media-friendly experience",
      body: "Built-in audio/video players and previews handle large media libraries, letting clients and teammates stream without downloading.",
    },
    {
      icon: <Plug className="h-5 w-5 text-emerald-700" />,
      title: "Backups and integrations",
      body: "Sync desktop folders, back up external drives or other clouds, and integrate with tools like Zoom and social platforms for content ingestion.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-600" />,
      title: "EU or US data regions",
      body: "Choose data residency that matches your compliance needs. GDPR alignment makes pCloud appealing for EU-focused teams.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Sharing and access control",
      body: "Passworded links, expirations, downloads limits, and roles help you share securely while keeping auditability in mind.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Crypto Encryption, Pros & Cons, Alternatives`}
        description="Comprehensive pCloud review for 2025 covering pricing, lifetime plans, encryption, pros & cons, and the best cloud storage alternatives."
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-emerald-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Pricing, Pros & Cons</h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-sky-600 text-white ring-2 ring-sky-500 hover:bg-sky-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  pCloud mixes value-focused storage, strong media handling, and optional zero-knowledge encryption so you can keep client work and assets secure long term.
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
              pCloud is a {category.toLowerCase()} service offering secure storage, media-friendly playback, and flexible pricing. Users can pick EU or US data centers and add Crypto for zero-knowledge folders.
            </p>
            <p className="mt-3 text-slate-700">
              It appeals to creators and agencies who share large files, as well as businesses that want predictable costs via lifetime plans and strong sharing controls.
            </p>
            <p className="mt-3 text-slate-700">With desktop/mobile apps, selective sync, backup, and link security, pCloud covers day-to-day storage and delivery for most teams.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">pCloud fits teams that need secure, media-friendly storage with flexible pricing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Photographers and videographers sharing large media libraries with clients.",
                "Agencies storing deliverables and offering secure link sharing.",
                "Small teams wanting lifetime storage to avoid ongoing fees.",
                "Businesses needing EU-hosted storage for GDPR alignment.",
                "Remote teams backing up devices and syncing key folders.",
                "Creators who want built-in audio/video playback without downloads.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">pCloud emphasizes secure storage, flexible pricing, and media-friendly sharing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                  pCloud offers monthly, annual, and lifetime plans. Crypto is a paid add-on for zero-knowledge folders. Business plans add user management, roles, and team collaboration.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose lifetime for long-term use; add Crypto if you need zero-knowledge. Business plans fit teams needing roles and consolidated billing.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium / Premium Plus</td>
                    <td className="px-4 py-3">Individuals and small teams</td>
                    <td className="px-4 py-3">Monthly/annual or lifetime storage tiers</td>
                    <td className="px-4 py-3">From ~$4.99/mo or lifetime options</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Crypto add-on</td>
                    <td className="px-4 py-3">Zero-knowledge encryption for sensitive folders</td>
                    <td className="px-4 py-3">Applies to selected folders only</td>
                    <td className="px-4 py-3">~$4.99/mo or lifetime option</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Teams needing roles and admin controls</td>
                    <td className="px-4 py-3">User management, access control, activity logs</td>
                    <td className="px-4 py-3">~$9.99/user/mo (annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Lifetime plans are great for long-term savings. Add Crypto for sensitive data. Choose Business for multi-user management and auditability.
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
                  <li>Lifetime pricing options for long-term savings.</li>
                  <li>Optional client-side Crypto encryption for sensitive folders.</li>
                  <li>Media streaming and previews for large audio/video libraries.</li>
                  <li>EU or US data centers for compliance needs.</li>
                  <li>Strong sharing controls with passwords and expirations.</li>
                  <li>Backups and multi-cloud imports simplify migration.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Collaboration/workspace features are lighter than Dropbox.</li>
                  <li>Crypto is a paid add-on, not default.</li>
                  <li>No native docs/spreadsheets; best as storage, not productivity suite.</li>
                  <li>Business admin controls are solid but not as deep as Box/OneDrive enterprise.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need richer collaboration or different pricing, compare these options. All links go to full reviews or comparisons.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how pCloud stacks up to other cloud storage services.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Sync.com vs Dropbox</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/sync-com-vs-dropbox-vs-pcloud">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Sync.com leads on default E2E encryption, Dropbox on collaboration, and pCloud on lifetime value plus optional Crypto. The comparison covers pricing and security trade-offs.
              </p>
              <p className="mt-2 text-slate-900">Pick pCloud for value + optional zero-knowledge; Sync.com for strict privacy; Dropbox for collaboration depth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dropbox vs OneDrive</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/pcloud-vs-dropbox-vs-onedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dropbox offers the richest collaboration, OneDrive integrates with Microsoft 365, and pCloud offers lifetime value and optional Crypto. The comparison highlights which to pick based on stack and budget.
              </p>
              <p className="mt-2 text-slate-900">Choose pCloud for lifetime value + encryption; Dropbox for teamwork features; OneDrive for Microsoft-native workflows.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need secure storage with strong media handling and predictable costs, pCloud is worth it. Lifetime plans and Crypto make it attractive for creators, agencies, and businesses that want control over budget and privacy.
            </p>
            <p className="mt-3 text-slate-700">
              If deep collaboration or productivity apps matter most, Dropbox or OneDrive may fit better. For privacy defaults, consider Sync.com. Otherwise, pCloud strikes a strong balance of cost, security, and usability.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> pCloud is a value-focused, secure cloud storage choice with optional zero-knowledge encryption and lifetime pricing.
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
              Choose pCloud if you want affordable, secure storage with media-friendly playback and the option for zero-knowledge encryption. It’s especially compelling if lifetime pricing and EU data residency matter.
            </p>
            <p>Consider Dropbox or OneDrive for collaboration-heavy teams, and Sync.com if you need default E2E encryption. pCloud sits in the value + security sweet spot for many small businesses and creators.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for you, try it here: <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>Visit {toolName}</a>.
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}
