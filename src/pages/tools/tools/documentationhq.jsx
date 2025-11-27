import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "DocumentationHQ";
const slug = "documentationhq";
const category = "Knowledge Base Software";
const shortPitch =
  "DocumentationHQ gives product, support, and operations teams a structured space to publish knowledge bases, SOPs, and release notes with governance baked in.";
const pricingSummary =
  "Paid plans start near $49/month for Launch with custom domains and analytics; Pro/Enterprise add SSO, backups, and multiple workspaces for larger teams.";
const officialUrl = "https://documentationhq.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/documentationhq.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.22)]",
};

const alternatives = [
  { name: "Document360", slug: "document360" },
  { name: "HelpScout", slug: "helpscout" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Zoho Desk", slug: "zoho-desk" },
];

const faqs = [
  {
    q: "Is DocumentationHQ good for non-technical contributors?",
    a: "Yes. The editor is Markdown-friendly with approvals and suggestions, so PMs, support, and ops can publish without learning a CMS.",
  },
  {
    q: "Can I host both public and internal knowledge bases?",
    a: "DocumentationHQ supports public sites and locked-down internal spaces with roles, SSO, and IP restrictions on higher tiers.",
  },
  {
    q: "Does DocumentationHQ support custom domains and branding?",
    a: "You can use a custom domain, add your logo, tweak themes, and keep the docs on-brand for customers and partners.",
  },
  {
    q: "Is there analytics on articles and search?",
    a: "Yes. Search analytics, feedback, and broken-link reports show which topics perform, what users search for, and where to improve.",
  },
  {
    q: "How does DocumentationHQ handle versioning?",
    a: "You can create versions for releases, compare changes, and roll back if needed. This is useful when product teams ship frequently.",
  },
  {
    q: "Does DocumentationHQ have an API?",
    a: "An API and embeddable widgets let you surface articles in-app or on your site for contextual help.",
  },
  {
    q: "Can we enforce SSO or restrict by IP?",
    a: "Pro and Enterprise tiers include SSO (SAML/OAuth) and IP restrictions so only approved users can access internal docs.",
  },
  {
    q: "Is migration from another KB possible?",
    a: "Importers for markdown, CSV, and other KB tools help you move existing docs without manual copying.",
  },
];

function DocumentationHQToolPage() {
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
        "DocumentationHQ is a modern knowledge base and SOP platform with workflows, versioning, and analytics that keep docs organized and discoverable.",
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
      icon: <BookOpen className="h-5 w-5 text-sky-500" />,
      title: "Structured authoring and approvals",
      body: "Markdown-first editor with drafts, reviews, and approvals so teams keep knowledge accurate without chaos.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-indigo-500" />,
      title: "Public, private, and partner spaces",
      body: "Host customer-facing docs, internal SOPs, or partner portals with roles, custom domains, and SSO/IP controls.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Search and engagement analytics",
      body: "Search insights, feedback loops, and broken-link alerts reveal gaps and help you prioritize updates.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Widgets and API",
      body: "Embed contextual help in your app or website via widgets and APIs without duplicating content.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security and governance",
      body: "SSO, backups, audit trails, and IP allowlists keep sensitive knowledge compliant and protected.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Team collaboration",
      body: "Comments, assignments, and notifications align PMs, support, and ops on what to publish next.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="DocumentationHQ review for product and support teams: pricing, features, pros & cons, and alternatives to build a reliable knowledge base."
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
                  DocumentationHQ keeps knowledge organized with strong authoring workflows, analytics, and secure access for customer and internal docs.
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
              {toolName} is a {category.toLowerCase()} platform for building searchable product docs, SOPs, FAQs, and release notes. It focuses on workflows, versioning, and analytics so teams can maintain accurate content without clutter.
            </p>
            <p className="mt-3 text-slate-700">
              Support, product, and operations teams use it to reduce ticket volume, onboard customers faster, and keep internal processes aligned.
            </p>
            <p className="mt-3 text-slate-700">
              Embeddable widgets and APIs let you surface answers in your product or support portal, giving users help right where they need it.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that treat documentation as a core product surface.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams publishing versioned release notes and feature guides.",
                "Customer success teams deflecting tickets with self-serve answers.",
                "Support orgs managing internal SOPs with approvals and review flows.",
                "Marketing teams running partner docs, onboarding kits, and FAQs.",
                "Engineering teams keeping API docs and integrations versioned.",
                "Operations and IT teams needing private knowledge bases with SSO/IP controls.",
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
              {toolName} emphasizes governed writing, discoverability, and secure access so your documentation stays useful as products evolve.
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
                  Pricing varies by workspaces, users, and controls like SSO or backups. Launch works for small teams; Pro/Enterprise are for larger orgs needing stricter governance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Launch to validate fit; move to Pro when you need SSO, IP restrictions, or multiple workspaces.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Launch</td>
                    <td className="px-4 py-3">Startups and lean support teams</td>
                    <td className="px-4 py-3">Single workspace, core analytics, custom domain</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Scaling teams needing security</td>
                    <td className="px-4 py-3">SSO, IP allowlists, backups, more seats</td>
                    <td className="px-4 py-3">Higher, billed monthly/annual</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with compliance needs</td>
                    <td className="px-4 py-3">Multiple workspaces, SLAs, advanced controls</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Estimate contributors, expected traffic, and whether you need private spaces with SSO/IP. Enterprise adds governance and compliance when audits matter.
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
                  <li>Clean authoring experience with approvals and versioning.</li>
                  <li>Analytics and search insights to keep docs fresh.</li>
                  <li>Supports public, private, and partner spaces with granular access.</li>
                  <li>Widgets and API for embedding contextual help.</li>
                  <li>SSO, backups, and IP controls for security-sensitive teams.</li>
                  <li>Good balance of ease-of-use and governance for non-technical editors.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Higher price than lightweight wiki tools.</li>
                  <li>SSO/IP controls gated to upper tiers.</li>
                  <li>Design flexibility is narrower than a full CMS/site builder.</li>
                  <li>Multiple workspaces and seats can add cost at scale.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with focused knowledge tools and help desk suites. Choose based on how tightly you want docs tied to tickets and how much governance you need.
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
            <p className="text-slate-700">Compare {toolName} to other knowledge and support platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Document360</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/documentationhq-vs-document360">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                DocumentationHQ and Document360 are both purpose-built knowledge platforms. DocumentationHQ leans into modern UI and SOP workflows; Document360 has mature governance and enterprise lineage.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for a lighter, modern feel; choose Document360 if you need extensive enterprise controls out of the box.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/documentationhq-vs-zendesk">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk bundles ticketing with a help center. {toolName} is focused on authoring and structured documentation with lighter ticketing overlap.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you want the best doc experience; choose Zendesk if you need an all-in-one ticketing stack with an attached KB.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a structured knowledge platform with workflows, analytics, and governance, {toolName} is worth it. It reduces ticket load and keeps teams aligned with reliable docs.
            </p>
            <p className="mt-3 text-slate-700">
              If you need bundled ticketing, Zendesk or Freshdesk might suit you better. Lightweight wikis are cheaper, but you lose approvals, analytics, and secure access options.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for SaaS, support, and ops teams that treat documentation as a product surface.
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
              Choose {toolName} if you need a dedicated knowledge base platform with structured authoring, analytics, and secure access. It’s ideal for SaaS, support, and ops teams that want reliable docs.
            </p>
            <p>
              Consider Document360 if you want a comparable enterprise-focused option. HelpScout or Zendesk make sense if you prefer docs bundled with ticketing workflows.
            </p>
            <p>{toolName} integrates into support stacks via widgets and APIs, letting you surface the right content in-app or inside tickets.</p>
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

export default DocumentationHQToolPage;
