import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Proton Drive";
const slug = "proton-drive";
const category = "Secure Cloud Storage";
const shortPitch =
  "Proton Drive is an end-to-end encrypted cloud storage and file sharing service from Proton, focused on privacy and secure collaboration.";
const pricingSummary =
  "Free plan with limited storage; paid plans add more storage, sharing, and Proton ecosystem benefits. End-to-end encryption applies to stored files and shares.";
const officialUrl = "https://proton.me/drive";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/proton.me",
  gradient: "from-indigo-500 via-purple-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Dropbox", slug: "dropbox" },
  { name: "Google Drive", slug: "google-drive" },
  { name: "Tresorit", slug: "tresorit" },
  { name: "Proton Drive vs Dropbox vs Tresorit", slug: "compare/proton-drive-vs-dropbox-vs-tresorit", isComparison: true },
  { name: "OneDrive", slug: "onedrive-vs-dropbox-vs-sync-com" },
];

const faqs = [
  { q: "What is Proton Drive?", a: "Proton Drive is an end-to-end encrypted cloud storage service that lets you store and share files privately." },
  { q: "Who is it for?", a: "Users and teams prioritizing privacy and encryption for cloud storage and sharing." },
  { q: "How is pricing structured?", a: "Free storage tier; paid plans add more storage, sharing, and Proton ecosystem features (like Mail/VPN bundles)." },
  { q: "Is sharing encrypted?", a: "Yes. Files and shared links are end-to-end encrypted; recipients can view/download securely." },
  { q: "Are there desktop/mobile apps?", a: "Yes. Apps are available for syncing and access across devices." },
  { q: "Can I collaborate?", a: "Basic sharing and link controls exist; collaboration is more limited than Google Drive/Dropbox." },
  { q: "Is data private?", a: "Proton is Switzerland-based with a privacy-first approach; encryption keeps files private from the provider." },
  { q: "Any limitations?", a: "Storage caps by plan; collaboration features are lighter than mainstream drives." },
];

function ProtonDriveToolPage() {
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
        "Proton Drive provides end-to-end encrypted cloud storage and sharing. It’s ideal for privacy-focused users; collaboration is leaner than mainstream drives.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "End-to-end encryption", body: "Files and shares are encrypted; Proton cannot read your data." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Secure sharing", body: "Encrypted links and controls for recipients." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Cross-platform apps", body: "Desktop/mobile apps and web access for syncing and viewing." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Proton ecosystem", body: "Integrates with Proton Mail/VPN bundles for privacy-focused users." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Simple UI", body: "Clean interface for managing files without clutter." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Privacy jurisdiction", body: "Switzerland-based, privacy-first policies." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Security, Pros & Cons, Alternatives`}
        description="Proton Drive review: pricing, encrypted storage, pros & cons, and alternatives like Dropbox and Tresorit."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Encrypted Storage, Pricing, Pros & Cons
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded_full bg-indigo-100 blur-3xl" />
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
                  {toolName} delivers end-to-end encrypted storage and sharing—ideal if privacy is your priority and you can live with lighter collaboration.
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
              {toolName} is a privacy-first cloud storage service with end-to-end encryption for files and sharing links. It aims to keep your data unreadable to the provider while offering everyday storage features.
            </p>
            <p className="mt-3 text-slate-700">Use it if you value encryption and Proton’s ecosystem; collaboration features are simpler than mainstream drives.</p>
            <p className="mt-3 text-slate-700">Verify storage needs and sharing workflows before migrating fully.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for privacy-focused individuals and teams.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Users wanting encrypted storage beyond mainstream drives.",
                "Teams sharing sensitive files and needing E2EE links.",
                "Proton ecosystem users (Mail/VPN) wanting integrated storage.",
                "Privacy-conscious creators storing drafts and assets.",
                "Small teams with modest collaboration needs.",
                "Anyone preferring Switzerland-based privacy protections.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on privacy-first storage and sharing.</p>
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
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify_between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Free plan offers limited storage. Paid plans add more storage, sharing options, and Proton bundle benefits. Pricing varies by storage size and region.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade if you need more storage or rely on Proton bundles for Mail/VPN + Drive.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Light personal use</td>
                    <td className="px-4 py-3">Limited storage, E2EE sharing</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Paid (Drive/Proton bundles)</td>
                    <td className="px-4 py-3">Regular users</td>
                    <td className="px-4 py-3">More storage, sharing controls, Proton benefits</td>
                    <td className="px-4 py-3">Monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Family/Business</td>
                    <td className="px-4 py-3">Multiple users</td>
                    <td className="px-4 py-3">Shared storage, user management</td>
                    <td className="px-4 py-3">Check region/pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Evaluate collaboration needs; consider mainstream drives if you require rich real-time editing.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>End-to-end encryption for storage and sharing.</li>
                  <li>Privacy-first provider based in Switzerland.</li>
                  <li>Simple UI across web, desktop, and mobile.</li>
                  <li>Fits well with Proton Mail/VPN users.</li>
                  <li>Secure link sharing with encryption.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items_center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Collaboration is lighter than Google Drive/Dropbox.</li>
                  <li>Storage quotas on free/entry plans.</li>
                  <li>Feature set is focused on security over rich co-editing.</li>
                  <li>Some Proton bundle pricing may be higher than standalone drives.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other cloud storage providers.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
                  </div>
                  <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to mainstream drives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dropbox</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/dropbox">
                  View Dropbox
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dropbox is collaboration-first with broad integrations; {toolName} emphasizes encryption and privacy. Choose based on security priority vs collaboration depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tresorit</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/tresorit">
                  View Tresorit
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tresorit also offers end-to-end encryption with business features; {toolName} benefits from Proton bundles. Compare pricing, collaboration features, and ecosystem preference.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you prioritize privacy and encryption for cloud storage and are okay with lighter collaboration compared to mainstream drives.
            </p>
            <p className="mt-3 text-slate-700">If you need advanced co-editing or deep integrations, compare Dropbox/Google Drive; keep E2EE in mind for sensitive data.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong privacy-first storage option; best for users who value encryption over rich collaboration features.
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
              Choose {toolName} if you want encrypted storage and sharing with Proton’s privacy-first approach. It’s ideal for sensitive files and users who prioritize security.
            </p>
            <p>
              Consider Dropbox/Google Drive for collaboration depth or Tresorit for business E2EE; {toolName} excels when privacy is the main requirement.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
              >
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

export default ProtonDriveToolPage;
