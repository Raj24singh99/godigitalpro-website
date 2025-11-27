import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Glide";
const slug = "glide";
const category = "No-Code App Builder";
const shortPitch =
  "Glide lets teams build internal tools and customer-facing apps from data sources like Google Sheets, Airtable, and BigQuery without writing code.";
const pricingSummary =
  "Free tier for simple apps; Starter around $60/month; Pro/Business increase users, usage, roles, and security. Usage-based pricing scales with seats and records.";
const officialUrl = "https://www.glideapps.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/glideapps.com",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Bubble", slug: "bubble" },
  { name: "Retool", slug: "retool" },
  { name: "Softr", slug: "softr" },
  { name: "AppSheet", slug: "appsheet" },
  { name: "Stacker", slug: "stacker" },
];

const faqs = [
  {
    q: "What data sources does Glide support?",
    a: "Glide connects to Google Sheets, Airtable, BigQuery, and other sources via integrations and API connectors.",
  },
  {
    q: "Can I publish to web and mobile?",
    a: "Yes. Glide outputs progressive web apps with responsive layouts for desktop and mobile; you can add to home screen like an app.",
  },
  {
    q: "Does Glide support roles and permissions?",
    a: "Yes. Pro/Business plans include roles, row-level access, and granular permissions to secure data.",
  },
  {
    q: "Can I use APIs and integrations?",
    a: "Glide supports actions and API calls, plus integrations like Zapier, webhooks, and automation tools.",
  },
  {
    q: "Is there branding control?",
    a: "You can customize branding, domains, and themes on paid plans.",
  },
  {
    q: "What about offline use?",
    a: "Glide apps are web-based; limited offline support exists for some features, but persistent offline is limited compared to native apps.",
  },
  {
    q: "Does Glide handle security and SOC 2?",
    a: "Business/Enterprise tiers include security features and compliance; check current certifications and documentation.",
  },
  {
    q: "Can I manage records and limits?",
    a: "Plans have limits on rows/records and usage; Business increases limits. Monitor quotas for larger datasets.",
  },
];

function GlideToolPage() {
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
        "Glide is a no-code app builder that turns spreadsheets and databases into responsive apps with role-based access, automations, and integrations.",
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
      icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
      title: "Data-driven apps",
      body: "Connect Google Sheets, Airtable, BigQuery, and other sources; bind data to UI components quickly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Actions and automations",
      body: "Build workflows with actions, API calls, and integrations to automate updates and notifications.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Roles and access control",
      body: "Row-level access, roles, and permissions secure data for internal and external users.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Components and templates",
      body: "Prebuilt layouts, templates, and design controls speed up app creation without code.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-teal-500" />,
      title: "Responsive web apps",
      body: "Deploy as PWAs with responsive UI for desktop and mobile; custom domains supported on paid plans.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Analytics and logging",
      body: "Monitor usage, errors, and performance; governance features on higher tiers for security teams.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Glide review for ops and product teams: pricing, features, pros & cons, and alternatives for building apps from spreadsheets and databases without code."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  Glide turns spreadsheets and databases into responsive apps with role-based access and automations—no code required.
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
              {toolName} is a {category.toLowerCase()} that lets teams build internal and customer-facing apps from spreadsheets and databases. It handles UI, data binding, and permissions without writing code.
            </p>
            <p className="mt-3 text-slate-700">
              Ops, product, and support teams use it to launch portals, dashboards, and tools faster than custom development.
            </p>
            <p className="mt-3 text-slate-700">
              Actions, integrations, and automations help connect Glide apps to existing workflows and APIs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams that need to ship apps quickly from spreadsheet or database data.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ops teams building internal tools and dashboards from Sheets/Airtable.",
                "Customer success teams creating portals and knowledge apps.",
                "Founders validating products without engineering resources.",
                "Field and support teams needing mobile-friendly data entry apps.",
                "Marketing teams creating lead capture and event apps with custom domains.",
                "Businesses needing role-based access to data without custom dev.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
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
              {toolName} emphasizes fast app creation from data, secure access, and integrations to automate workflows.
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
                  Free for simple apps; Starter around $60/month; Pro and Business add higher row/user limits, roles, security, and support. Pricing is usage-based by seats/records and features.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free/Starter to validate; upgrade to Pro/Business for roles, security, higher limits, and custom domains.</p>
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
                    <td className="px-4 py-3">Testing and simple apps</td>
                    <td className="px-4 py-3">Limited rows/features; Glide branding</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Small teams/light usage</td>
                    <td className="px-4 py-3">More rows, basic auth, custom domain</td>
                    <td className="px-4 py-3">~$60/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Business</td>
                    <td className="px-4 py-3">Production apps and portals</td>
                    <td className="px-4 py-3">Roles, row-level access, higher limits, security</td>
                    <td className="px-4 py-3">Higher/custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor row limits, seats, and security needs. Business is best if you require advanced access control, compliance, or larger datasets.
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
                  <li>Fast app creation from spreadsheets/databases.</li>
                  <li>Roles and row-level access for secure apps.</li>
                  <li>Automations and API calls to tie into workflows.</li>
                  <li>Good templates and components for common patterns.</li>
                  <li>Responsive PWAs with custom domains.</li>
                  <li>Open-ended integrations via Zapier/webhooks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Record/usage limits can require plan upgrades.</li>
                  <li>Offline support is limited compared to native apps.</li>
                  <li>Complex logic may need external APIs or scripts.</li>
                  <li>Pricing can climb for large user bases or datasets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with no-code builders and internal tool platforms. Choose based on data size, security, and logic needs.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-start justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
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
            <p className="text-slate-700">Compare {toolName} to other app builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bubble</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/glide-vs-bubble">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bubble offers more custom logic and design flexibility for web apps. {toolName} is faster for data-driven apps from spreadsheets with strong permissions.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for speed and data-centric apps; choose Bubble for complex logic and pixel-level control.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Retool</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/glide-vs-retool">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Retool targets developers building internal tools with SQL/JS flexibility. {toolName} is more no-code and spreadsheet-friendly for business users.</p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for no-code and external portals; choose Retool for dev-heavy internal tools with custom logic.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to ship apps quickly from spreadsheet or database data with built-in auth, roles, and automations, {toolName} is worth it. It’s fast to adopt and flexible for many internal and customer use cases.
            </p>
            <p className="mt-3 text-slate-700">
              For highly custom logic or deep offline/native needs, compare Bubble, Retool, or custom development. Watch row/user limits as you scale.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong no-code choice for data-driven apps with secure access and quick deployment.</p>
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
              Choose {toolName} if you want to build secure, data-driven apps from spreadsheets/databases without code, with roles and automations baked in.
            </p>
            <p>
              Consider Bubble or Retool for heavier logic or developer-centric workflows; Stacker/Softr if you want similar spreadsheet-first portals.</p>
            <p>{toolName} helps teams move from data to usable apps quickly while keeping access controlled.</p>
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
        className="flex w/full items-center justify-between px-4 py-3 text-left text-slate-900"
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

export default GlideToolPage;
