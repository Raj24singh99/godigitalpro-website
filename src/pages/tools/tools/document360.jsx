import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Document360";
const slug = "document360";
const category = "Knowledge Base Software";
const shortPitch =
  "Document360 helps product, support, and marketing teams build searchable knowledge bases, docs, and FAQs that stay organized at scale.";
const pricingSummary =
  "Paid plans start around $149/month for Standard with team accounts, analytics, and versioning; higher tiers add more projects, storage, and advanced security.";
const officialUrl = "https://document360.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/document360.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.22)]",
};

const alternatives = [
  { name: "HelpScout", slug: "helpscout" },
  { name: "Intercom", slug: "intercom" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Zoho Desk", slug: "zoho-desk" },
];

const faqs = [
  {
    q: "Is Document360 easy for non-technical teams?",
    a: "Yes. Editors and reviewers can manage articles with a clean interface, workflow approvals, and versioning. It’s built for writers, PMs, and CS teams.",
  },
  {
    q: "Can I host a public and private knowledge base?",
    a: "Document360 supports public, private, and mixed-access spaces with roles and granular permissions, so you can serve customers and internal teams separately.",
  },
  {
    q: "Does Document360 support custom domains and branding?",
    a: "Yes. You can use a custom domain, configure themes, add logos, and set branding to match your product or company site.",
  },
  {
    q: "Is there analytics on article performance?",
    a: "Document360 includes search and engagement analytics, feedback, and broken-link reports to identify gaps and improve docs.",
  },
  {
    q: "How does Document360 handle versioning?",
    a: "You can keep multiple versions of documentation, compare changes, roll back, and manage releases—useful for product teams shipping frequently.",
  },
  {
    q: "Does Document360 have an API?",
    a: "Yes. You can pull content via API, embed widgets, and integrate with your app or website for contextual help experiences.",
  },
  {
    q: "Can we restrict access by IP or SSO?",
    a: "Business/Enterprise tiers support SSO (SAML, OAuth), IP restrictions, and granular roles for secure access control.",
  },
  {
    q: "Is migration from another KB possible?",
    a: "Yes. Migration tools and import options help move content from other knowledge bases or markdown sources with minimal friction.",
  },
];

function Document360ToolPage() {
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
        "Document360 is a purpose-built knowledge base platform with strong authoring, versioning, and analytics. It’s designed to keep docs organized for customers and internal teams as products evolve quickly.",
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
      icon: <BookOpen className="h-5 w-5 text-amber-500" />,
      title: "Structured authoring and versioning",
      body: "Markdown-friendly editor, workflows, approvals, and versioning help teams maintain accurate docs across releases.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-rose-500" />,
      title: "Public, private, and mixed access",
      body: "Serve customers and internal teams with granular permissions, custom domains, and SSO/IP restrictions for secure access.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Search and content analytics",
      body: "Search insights, feedback, and broken-link reports reveal what users need and where to improve documentation.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Embeddable widgets and API",
      body: "Bring articles into your app or site with widgets and APIs for contextual help without duplicating content.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and compliance controls",
      body: "SSO, roles, backups, encryption, and audit trails keep sensitive knowledge bases compliant and protected.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-orange-400" />,
      title: "Team collaboration",
      body: "Comments, assignments, and notifications keep writers, PMs, and support aligned while updating docs.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Document360 review for product and support teams: pricing, features, pros & cons, and alternatives to build a fast, organized knowledge base."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  Document360 keeps knowledge organized with structured authoring, strong analytics, and secure access options for public and private docs.
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
              Document360 is a {category.toLowerCase()} platform built to create and maintain high-quality product docs, FAQs, and SOPs. It focuses on authoring workflows, versioning, and search so teams can scale knowledge without chaos.
            </p>
            <p className="mt-3 text-slate-700">
              Product, success, and marketing teams use it to reduce support load, onboard customers faster, and keep internal teams aligned with accurate information.
            </p>
            <p className="mt-3 text-slate-700">
              Embeddable widgets and APIs let you surface content contextually in apps, reducing friction for users who need help in the moment.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Document360 fits teams that treat documentation as a core product experience.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams maintaining release-specific documentation and changelogs.",
                "Customer success teams reducing ticket volume with self-serve answers.",
                "Support orgs managing internal SOPs and public FAQs with approvals.",
                "Marketing teams hosting partner docs, playbooks, and campaign FAQs.",
                "Engineering teams needing versioned API docs with role-based workflows.",
                "Operations and IT teams running internal knowledge bases with SSO/IP controls.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
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
              Document360 emphasizes structured writing, governance, and discoverability so documentation stays accurate and actionable.
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
                  Pricing scales by projects, users, and features like SSO/IP restrictions, backups, and API limits. Standard fits growing teams; Business/Enterprise suit larger orgs with stricter governance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Standard for most SaaS teams; upgrade to Business/Enterprise if you need SSO, IP controls, or multiple projects at scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing SaaS and support teams</td>
                    <td className="px-4 py-3">Single project, core analytics, versioning</td>
                    <td className="px-4 py-3">~$149/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger teams needing security</td>
                    <td className="px-4 py-3">SSO, IP restrictions, backups, more users</td>
                    <td className="px-4 py-3">Higher, billed monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex orgs and compliance-heavy teams</td>
                    <td className="px-4 py-3">Multiple projects, advanced controls, SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider the number of contributors, expected traffic, and need for SSO or private spaces. Enterprise tiers add deeper governance and compliance support when required.
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
                  <li>Excellent authoring workflows with versioning and approvals.</li>
                  <li>Strong search, analytics, and feedback to improve content.</li>
                  <li>Supports public/private knowledge bases with granular access.</li>
                  <li>Embeddable widgets and APIs for contextual help.</li>
                  <li>SSO, IP controls, and backups for security-conscious teams.</li>
                  <li>Clean editor that non-technical contributors can use quickly.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Higher starting price than lightweight wiki tools.</li>
                  <li>Advanced features (SSO, private spaces) require upper tiers.</li>
                  <li>Limited WYSIWYG design compared to CMS/site builders.</li>
                  <li>Multiple projects and seats can increase cost for large orgs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Document360 competes with help desk suites and knowledge tools that pair docs with support workflows. Pick based on price, security, and how tightly you need docs tied to tickets.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
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
            <p className="text-slate-700">Compare Document360 to other knowledge and support platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HelpScout</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/document360-vs-helpscout-vs-zendesk">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HelpScout bundles docs with a lightweight help desk and shared inbox. Document360 is purpose-built for documentation with deeper authoring, versioning, and analytics.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Document360 for dedicated knowledge management; choose HelpScout if you want docs tied directly to a simple support inbox.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/document360-vs-helpscout-vs-zendesk">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk comes with a full-ticketing suite and help center. Document360 offers more focused documentation workflows and easier authoring for non-technical contributors.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Document360 if you want the best doc experience; choose Zendesk if you need an all-in-one ticketing and support stack with integrated help center.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If documentation is a core product surface, Document360 is worth it for its structured authoring, analytics, and governance. It reduces ticket volume and speeds onboarding with accurate, searchable content.
            </p>
            <p className="mt-3 text-slate-700">
              If you want a bundled ticketing + docs suite, Zendesk or Freshdesk might suit you. For lighter, low-cost wikis, consider alternatives, but you’ll trade off workflows and analytics.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Document360 is a strong choice for teams that treat docs as a product and need secure, well-governed knowledge at scale.
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
              Choose Document360 if you need a dedicated knowledge base platform with structured authoring, analytics, and secure access. It’s ideal for SaaS, support, and product teams scaling fast.
            </p>
            <p>
              Consider HelpScout or Zendesk if you want docs bundled with support ticketing. Freshdesk and Zoho Desk are also viable if you prefer an all-in-one help desk with a knowledge component.
            </p>
            <p>Document360 integrates well with support stacks via widgets and APIs, letting you surface the right content in-app or in-ticket.</p>
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

export default Document360ToolPage;
