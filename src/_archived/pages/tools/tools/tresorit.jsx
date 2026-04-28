import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tresorit";
const slug = "tresorit";
const category = "Secure cloud storage";
const shortPitch = "Tresorit is an end-to-end encrypted cloud storage and file sharing platform built for privacy-focused teams.";
const pricingSummary =
  "Seat-based plans. Higher tiers add more storage, admin controls, compliance features, and advanced auditing; business/enterprise tiers for larger teams.";
const officialUrl = "https://tresorit.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tresorit.com",
  gradient: "from-sky-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.24)]",
};

const alternatives = [
  { name: "Proton Drive", slug: "proton-drive" },
  { name: "pCloud", slug: "pcloud" },
  { name: "Dropbox", slug: "dropbox" },
  { name: "OneDrive", slug: "onedrive" },
  { name: "Google Drive", slug: "google-drive" },
];

const faqs = [
  {
    q: "What is Tresorit?",
    a: "Tresorit is an encrypted cloud storage service offering secure file sync, sharing, and collaboration with end-to-end encryption.",
  },
  {
    q: "Who is it for?",
    a: "Privacy-conscious teams, regulated industries, and businesses that need secure sharing and compliance-ready controls.",
  },
  {
    q: "How is pricing structured?",
    a: "Seat-based plans; higher tiers increase storage, add admin/audit controls, and compliance features.",
  },
  {
    q: "Does it support end-to-end encryption?",
    a: "Yes. Files are encrypted client-side; admins still need policies for device security and key management.",
  },
  {
    q: "Are links and sharing secured?",
    a: "Yes. You can set passwords, expiry, download limits, and access rights on shared links and folders.",
  },
  {
    q: "Does it integrate with productivity tools?",
    a: "Integrations exist (Outlook, Gmail add-ins, SSO); coverage is narrower than mainstream storage providers.",
  },
  {
    q: "Is there offline access?",
    a: "Yes. Sync clients allow offline access with local encryption; device security remains important.",
  },
  {
    q: "What about compliance?",
    a: "Tresorit supports compliance needs with encryption and audit controls; your policies and configurations determine adherence.",
  },
];

function TresoritToolPage() {
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
        "Tresorit offers end-to-end encrypted storage and sharing with strong access controls. Great for privacy-focused teams; success relies on policy, device security, and user training.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "End-to-end encryption",
      body: "Client-side encryption for files and links; keys stay under customer control.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Access controls",
      body: "Passwords, expiry, download limits, and granular permissions for shared items.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Secure sharing",
      body: "Share folders/links with controls for recipients; revoke or update access quickly.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Sync & offline",
      body: "Desktop/mobile apps with selective sync and offline access; encrypted locally.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & SSO",
      body: "Add-ins for email, SSO support, and APIs to fit into security-conscious stacks.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Audit & compliance",
      body: "Admin dashboards, activity logs, and policy controls to support compliance requirements.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tresorit review: pricing, features, pros & cons, and alternatives to help you decide if secure cloud storage fits your compliance needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} keeps files encrypted end-to-end—pair it with device security, access policies, and training to maintain compliance.
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
              {toolName} is a secure cloud storage and sharing platform with end-to-end encryption. Teams use it to sync files, collaborate, and share externally while keeping data private.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a security-first alternative to mainstream storage. You still need policies for device security, MFA, and lifecycle management to keep data protected.
            </p>
            <p className="mt-3 text-slate-700">Verify integrations and bandwidth limits against your workflows before migrating.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that prioritize encryption and access control over broad app integrations.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Legal, healthcare, finance teams needing encrypted sharing.",
                "Remote teams with strict data handling policies.",
                "Businesses replacing less secure file-sharing methods.",
                "Organizations requiring detailed link controls and auditing.",
                "Teams with SSO/security stacks wanting E2EE storage.",
                "Companies sharing files externally with strong access rules.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on encryption, controlled sharing, sync, integrations, and admin oversight.
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
                  {toolName} uses seat-based tiers. Higher plans add storage, advanced admin controls, link policies, and audit/compliance features. Costs scale with seats and storage needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the lowest tier that includes link controls and admin oversight; upgrade as storage and compliance needs grow.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Standard</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Core storage, sharing controls</td>
                    <td className="px-4 py-3">Good starting point</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Plus</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">More storage, advanced admin/audit</td>
                    <td className="px-4 py-3">Balances cost and controls</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large/regulated</td>
                    <td className="px-4 py-3">Highest storage, SSO, policies, premium support</td>
                    <td className="px-4 py-3">Customize for compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in onboarding time for policies, MFA, and device hardening. Validate storage and bandwidth limits with your usage patterns.
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
                  <li>End-to-end encryption by default.</li>
                  <li>Granular link and access controls.</li>
                  <li>Audit and admin features for compliance.</li>
                  <li>Cross-platform apps with offline support.</li>
                  <li>SSO and add-ins for security-focused stacks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Integrations are lighter than mainstream storage suites.</li>
                  <li>Seat/storage costs can be higher than consumer-grade tools.</li>
                  <li>Key/device security still depends on user practices.</li>
                  <li>Migration and user training add overhead.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other storage tools to balance security, integrations, and cost.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other secure storage platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Proton Drive</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/proton-drive">
                  View Proton Drive
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Proton Drive is consumer/SMB-friendly with E2EE; {toolName} adds stronger admin/audit controls for businesses. Pick based on governance needs and team size.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dropbox</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/dropbox">
                  View Dropbox
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dropbox has broader integrations and collaboration features; {toolName} focuses on E2EE and link controls. Choose based on whether security or app ecosystem matters more.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need encrypted storage and strict access controls and can invest in user training and device security.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep integrations or low-cost storage, compare with mainstream providers. For compliance-heavy teams, {toolName} offers strong security features.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for privacy-first storage—best when combined with clear policies and security hygiene.
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
              Choose {toolName} if encrypted storage, strict link controls, and admin oversight are priorities for your team.
            </p>
            <p>
              Consider Dropbox for integration breadth or Proton Drive for simpler E2EE; use {toolName} when compliance and privacy lead the requirements.
            </p>
            <p>{toolName} keeps data private—back it up with training, MFA, and device security to maintain protection end to end.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default TresoritToolPage;
