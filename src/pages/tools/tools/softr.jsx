import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Softr";
const slug = "softr";
const category = "No-Code App Builder";
const shortPitch =
  "Softr is a no-code platform for building web apps on top of Airtable/Google Sheets, offering templates, auth, roles, and integrations without coding.";
const pricingSummary =
  "Free and tiered plans; pricing scales by app limits, users, records, and advanced features like roles, custom domains, and integrations. Higher tiers add security and performance options.";
const officialUrl = "https://www.softr.io";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/softr.io",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Glide", slug: "glide" },
  { name: "Bubble", slug: "bubble" },
  { name: "Airtable Interfaces", slug: "airtable" },
  { name: "WeWeb", slug: "weweb" },
  { name: "Stacker", slug: "stacker" },
];

const faqs = [
  {
    q: "What is Softr?",
    a: "Softr is a no-code platform that builds web apps on top of data sources like Airtable and Google Sheets, with templates, auth, and roles.",
  },
  {
    q: "Who is it for?",
    a: "Ops, product, and business teams that want portals, directories, and internal tools without coding.",
  },
  {
    q: "What data sources are supported?",
    a: "Airtable and Google Sheets are primary; integrations extend data via APIs and connectors.",
  },
  {
    q: "How is pricing structured?",
    a: "Free and paid tiers; higher tiers add more apps, records, roles, custom domains, and security features.",
  },
  {
    q: "Does it handle auth and roles?",
    a: "Yes. User authentication, roles, and permissions are available on eligible plans.",
  },
  {
    q: "Can I embed payments?",
    a: "Payment blocks and integrations are supported; check plan requirements and fees.",
  },
  {
    q: "Does Softr replace a backend?",
    a: "It relies on your data source (Airtable/Sheets) and provides UI/auth/logic; complex logic may need external services.",
  },
  {
    q: "Is it customizable?",
    a: "Templates and blocks cover common patterns; custom code and integrations can extend functionality on higher tiers.",
  },
];

function SoftrToolPage() {
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
        "Softr lets teams build web apps on Airtable/Sheets with templates, auth, and roles. It suits ops/product teams that need portals and internal tools quickly without coding.",
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
      title: "Templates & blocks",
      body: "Prebuilt templates and UI blocks for portals, directories, client apps, and internal tools.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Airtable/Sheets backend",
      body: "Build on Airtable or Google Sheets without managing a custom backend.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Auth & roles",
      body: "User authentication, permissions, and visibility rules on eligible plans.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Secure sharing",
      body: "Control access to pages and data; add custom domains and SSL on paid tiers.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Automations & integrations",
      body: "Connect via APIs, webhooks, and tools like Zapier/Make to extend logic and workflows.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Payments & monetization",
      body: "Add payment blocks and forms to monetize portals or gated content.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Softr review: pricing, features, pros & cons, and alternatives so you can decide if its no-code Airtable/Sheets apps fit your needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  {toolName} lets teams ship portals and internal tools fast—build on Airtable/Sheets, then layer auth, roles, and integrations without code.
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
              {toolName} is a no-code app builder. It uses Airtable or Google Sheets as a backend, letting teams create portals, directories, and internal tools with templates, authentication, and roles.
            </p>
            <p className="mt-3 text-slate-700">
              It’s ideal for teams that want to avoid custom dev for straightforward apps. More complex logic may need external automations or APIs via Zapier/Make/webhooks.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with your existing data sources, automation tools, and analytics to monitor usage and performance.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want to ship web apps quickly on Airtable/Sheets without engineering heavy lift.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Ops teams building portals for partners, vendors, or clients.",
                "Product/ops teams creating internal tools and directories.",
                "Startups validating customer-facing apps before custom dev.",
                "Agencies delivering client portals on top of Airtable data.",
                "No-code builders who need auth/roles and secure sharing.",
                "Teams integrating with Zapier/Make for extra logic and automations.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} focuses on fast app building with templates, data connections, auth, and integrations.
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
                  {toolName} offers free and paid tiers; pricing scales by apps, records, users, and advanced features like roles, custom domains, and security. Higher tiers add performance, SSO, and audit capabilities.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free or lower tier to validate; move up if you need roles, SSO, higher limits, or production SLAs.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Testing and prototypes</td>
                    <td className="px-4 py-3">Core blocks, limited records/users</td>
                    <td className="px-4 py-3">Great for proof of concept</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Production apps</td>
                    <td className="px-4 py-3">Custom domain, roles, higher limits</td>
                    <td className="px-4 py-3">Common choice for SMB teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger or secure deployments</td>
                    <td className="px-4 py-3">SSO, security, performance, audit</td>
                    <td className="px-4 py-3">Custom pricing; plan for governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for Airtable/Sheets limits and API quotas. Plan roles, auth, and security early if you’re building external portals.
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
                  <li>Fast no-code app building on Airtable/Sheets.</li>
                  <li>Templates and blocks for common portal/internal use cases.</li>
                  <li>Auth, roles, and secure sharing on eligible tiers.</li>
                  <li>Integrations via APIs/webhooks and automation tools.</li>
                  <li>Payment blocks for monetization options.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Data and performance depend on Airtable/Sheets limits.</li>
                  <li>Complex logic may require external automations/custom code.</li>
                  <li>Higher tiers needed for roles, SSO, and security.</li>
                  <li>Customization beyond blocks can require developer help.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other no-code builders to match your backend preference, customization needs, and governance requirements.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other no-code builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Glide</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/glide">
                  View Glide
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Glide focuses on mobile-first apps with Google Sheets; {toolName} targets web apps on Airtable/Sheets with roles and portals. Choose based on app type and backend preference.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bubble</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/bubble">
                  View Bubble
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bubble offers deeper customization and logic; {toolName} is faster for data-driven portals on Airtable/Sheets. Choose Bubble for complex apps, {toolName} for speed and simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to ship portals or internal tools quickly on Airtable/Sheets with built-in auth and roles, without custom development.
            </p>
            <p className="mt-3 text-slate-700">
              Evaluate data limits, performance needs, and security requirements. Move to higher tiers when you need SSO, more records, and governance.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong no-code choice for data-driven web apps—best for teams prioritizing speed and simplicity over deep custom logic.
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
              Choose {toolName} if you need to launch web apps on Airtable/Sheets quickly with roles and auth, and can work within those data limits.
            </p>
            <p>
              Consider Glide for mobile-first apps or Bubble for heavier custom logic. {toolName} excels when speed, simplicity, and data-source convenience matter most.
            </p>
            <p>{toolName} keeps shipping fast—pair it with good data design and automation for best results.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default SoftrToolPage;
