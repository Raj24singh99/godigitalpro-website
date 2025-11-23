import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Box";
const slug = "box";
const category = "Cloud Storage & Collaboration";
const shortPitch =
  "Box is an enterprise cloud content management platform with secure file sharing, workflow automation, and integrations that support collaboration across teams and partners.";
const pricingSummary =
  "Plans start near $17/user/month (annual) for Business. Business Plus and Enterprise add advanced security, governance, and workflow automation; Enterprise Plus offers full content lifecycle controls.";
const officialUrl = "https://www.box.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/box.com",
  gradient: "from-blue-500 via-indigo-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.23)]",
};

const alternatives = [
  { name: "Dropbox", slug: "dropbox" },
  { name: "OneDrive", slug: "onedrive" },
  { name: "pCloud", slug: "pcloud" },
  { name: "Sync.com", slug: "sync-com" },
];

const faqs = [
  { q: "Is Box secure?", a: "Yes. Box offers enterprise-grade security with granular permissions, SSO/SCIM, device trust, DLP integrations, watermarking, and optional customer-managed keys (Enterprise Plus)." },
  { q: "Does Box integrate with Office and Google?", a: "Box integrates with Microsoft 365 and Google Workspace for coauthoring and file editing while keeping storage/governance in Box." },
  { q: "Can I automate workflows in Box?", a: "Box Relay provides workflow automation for approvals, onboarding, and content review. Integrations and APIs extend automation further." },
  { q: "How does Box handle compliance?", a: "Box supports HIPAA, GDPR, FINRA, and other compliance needs with governance, legal holds, retention policies, and audit trails on higher tiers." },
  { q: "Is Box good for external sharing?", a: "Box excels at external collaboration with secure links, expiration, passwords, classifications, and granular access controls." },
  { q: "Does Box have e-signature?", a: "Yes. Box Sign offers integrated e-signatures, and Box has partnerships with third-party e-sign providers as well." },
  { q: "How is storage priced?", a: "Business plans often include unlimited storage with fair-use policies. Pricing varies by tier and commitment (usually annual per user)." },
  { q: "Which Box plan should I choose?", a: "Business works for most teams. Choose Business Plus/Enterprise for advanced security/governance. Enterprise Plus if you need customer-managed keys and full lifecycle controls." },
];

function BoxToolPage() {
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
        "Box is a secure content cloud with strong governance, workflow automation, and Office/Google integrations. It’s popular with enterprises that need tight control over files shared internally and externally.",
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
      icon: <Cloud className="h-5 w-5 text-blue-500" />,
      title: "Secure cloud storage and sharing",
      body: "Granular permissions, secure links, expiration, password protection, and classification keep internal and external collaboration safe.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Office & Google coauthoring",
      body: "Edit Microsoft 365 and Google files directly while storing in Box, keeping governance and permissions centralized.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Workflow automation (Box Relay)",
      body: "Automate approvals, onboarding, and review with no-code workflows tied to metadata, tasks, and notifications.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "APIs and integrations",
      body: "Integrates with CRM, ticketing, e-signature, security, and productivity tools. APIs support custom apps and embeds.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Governance and compliance",
      body: "Retention, legal holds, version history, watermarking, device trust, and DLP/SIEM integrations support regulated industries.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Unlimited storage options",
      body: "Most business plans include unlimited storage (fair use), making Box predictable for large content libraries.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Box review for secure content management: pricing, features, pros & cons, alternatives, and comparisons vs Dropbox and OneDrive."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  Box delivers secure collaboration with governance, Office/Google coauthoring, and automation so enterprises can keep content controlled and productive.
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
              {toolName} is a {category.toLowerCase()} platform that centralizes secure file storage, sharing, collaboration, and workflows. It’s built for teams that need strong governance while working with internal and external partners.
            </p>
            <p className="mt-3 text-slate-700">
              Enterprises choose Box for its compliance posture, granular permissions, and integration ecosystem with productivity, CRM, and security tools.
            </p>
            <p className="mt-3 text-slate-700">
              With Box Relay, Box Sign, and API access, teams can automate approvals, sign agreements, and embed content into custom apps.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits mid-market and enterprise teams prioritizing secure collaboration and governance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Companies needing strong external sharing controls with clients/partners.",
                "Teams in regulated industries that require retention, legal holds, and DLP.",
                "Organizations standardizing on Office/Google but wanting centralized governance.",
                "Enterprises automating approvals and onboarding via Box Relay.",
                "Teams needing e-sign workflows embedded into content processes.",
                "Businesses planning to scale storage without per-GB surprises.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Box focuses on secure collaboration, governance, and automation.</p>
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
                  Pricing is per user with annual commitments. Business plans include core collaboration; Business Plus/Enterprise add governance and security; Enterprise Plus adds customer-managed keys and advanced controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Business for most teams; Business Plus/Enterprise for governance; Enterprise Plus for maximum security/keys.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Core collaboration</td>
                    <td className="px-4 py-3">Unlimited storage, secure sharing, integrations, basic governance</td>
                    <td className="px-4 py-3">~$17/user/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Plus</td>
                    <td className="px-4 py-3">Security/governance upgrades</td>
                    <td className="px-4 py-3">Enhanced security, more governance, workflow automation, integrations</td>
                    <td className="px-4 py-3">$17–$25+/user/month (varies)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Compliance-heavy teams</td>
                    <td className="px-4 py-3">Advanced governance, device trust, retention/legal holds, API limits</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise Plus</td>
                    <td className="px-4 py-3">Max security (e.g., CMK)</td>
                    <td className="px-4 py-3">Customer-managed keys, advanced theft protection, advanced threat detection</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate based on security/governance needs, partner sharing requirements, and automation volumes. Box pricing is annual; factor in add-ons like Shield or Governance where required.
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
                  <li>Enterprise-grade security, governance, and compliance posture.</li>
                  <li>Excellent external sharing controls and permissions.</li>
                  <li>Office/Google coauthoring while keeping storage centralized.</li>
                  <li>Box Relay automation and Box Sign streamline approvals and signatures.</li>
                  <li>Unlimited storage on many business plans simplifies scaling.</li>
                  <li>Rich integration ecosystem and APIs for custom apps.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricier than consumer-grade storage; minimum user counts apply.</li>
                  <li>Advanced governance features on higher tiers only.</li>
                  <li>Offline sync and large file handling can be slower than some competitors.</li>
                  <li>Users unfamiliar with Box may need onboarding to configure permissions correctly.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Box competes with collaboration-focused storage platforms. Choose based on security/governance needs, coauthoring preferences, and ecosystem fit.
            </p>
            <p className="mt-2 text-slate-700">All provide cloud storage; they differ on security, collaboration UX, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Box compares to two leading storage platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dropbox</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/box-vs-dropbox-vs-onedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dropbox emphasizes collaboration UX and integrations; Box emphasizes security, governance, and external sharing controls. Both integrate with Office/Google.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Box if compliance and granular controls matter; choose Dropbox for the smoothest sharing and collaboration experience.
              </p>
              <p className="mt-2 text-slate-900">Pricing differs: Box is per user with limits; Dropbox has varied seat pricing—compare based on size and governance needs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs OneDrive</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/box-vs-dropbox-vs-onedrive">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                OneDrive is bundled with Microsoft 365 and best for Teams/Office-heavy organizations. Box provides suite-agnostic storage with stronger external sharing and governance features.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Box if you collaborate outside your 365 tenant or need advanced compliance; choose OneDrive if you want tight Teams/Office integration and bundled pricing.
              </p>
              <p className="mt-2 text-slate-900">Both support coauthoring; pick based on ecosystem standardization vs vendor-neutral governance.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for teams that require secure storage, external sharing controls, and compliance. It centralizes collaboration while meeting governance needs.
            </p>
            <p className="mt-3 text-slate-700">
              If you need the simplest collaboration UX or bundled 365 storage, Dropbox or OneDrive may fit better. For regulated industries and partner-heavy workflows, Box stands out.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Box is a strong choice for enterprise-grade content management with flexible integrations and governance.</p>
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
              Choose Box if you need enterprise-grade security, governance, and external sharing controls with integrations to Office/Google and business apps.
            </p>
            <p>
              Consider Dropbox for collaboration-first UX or OneDrive if you’re fully standardized on Microsoft 365. Box is the balanced pick for secure, vendor-agnostic content management.
            </p>
            <p>Box integrates with CRM, ticketing, security, and productivity tools so content stays secure while workflows move forward.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default BoxToolPage;
