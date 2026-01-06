import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Stacker";
const slug = "stacker";
const category = "No-Code App Builder";
const shortPitch =
  "Stacker is a no-code platform for building secure portals and internal tools on top of Airtable, Google Sheets, and databases, with roles, permissions, and workflows.";
const pricingSummary =
  "Tiered plans by users, records, apps, and features. Higher tiers add roles, SSO, security, and performance; pricing scales with app complexity and usage.";
const officialUrl = "https://www.stackerhq.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/stackerhq.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Softr", slug: "softr" },
  { name: "Glide", slug: "glide" },
  { name: "Bubble", slug: "bubble" },
  { name: "WeWeb", slug: "weweb" },
  { name: "Stacker (Core)", slug: "stacker" },
];

const faqs = [
  {
    q: "What is Stacker?",
    a: "Stacker is a no-code platform that lets you build portals and internal tools on top of Airtable, Google Sheets, and databases with roles and permissions.",
  },
  {
    q: "Who is it for?",
    a: "Ops, product, and customer teams that need secure portals, partner/customer dashboards, or internal tools without heavy engineering.",
  },
  {
    q: "What data sources are supported?",
    a: "Airtable, Google Sheets, and databases (depending on plan); syncing keeps data up to date.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered by apps, records, users, and security features. Higher tiers add roles, SSO, and performance options.",
  },
  {
    q: "Does it handle permissions?",
    a: "Yes. Role-based access, permissions, and page-level controls are core to Stacker’s offering.",
  },
  {
    q: "Can I customize workflows?",
    a: "Yes. Actions, forms, and automation hooks integrate with data; complex logic may need external automations.",
  },
  {
    q: "Does it support payments?",
    a: "Payment options exist via integrations; verify plan requirements.",
  },
  {
    q: "Is engineering needed?",
    a: "No-code building reduces engineering load, but data design, permissions, and integrations still need thoughtful setup.",
  },
];

function StackerToolPage() {
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
        "Stacker helps teams build secure portals and internal tools on Airtable/Sheets/databases with roles and workflows. It’s strong for customer/partner portals and ops tools without heavy engineering.",
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
      title: "Data-connected apps",
      body: "Build on Airtable, Google Sheets, or databases with live syncing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Roles & permissions",
      body: "Granular access controls for customers, partners, and internal users.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Portals & dashboards",
      body: "Create customer/partner portals, CRMs, and internal dashboards quickly.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security & SSO",
      body: "Higher tiers add SSO and security features for external-facing apps.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Workflows & actions",
      body: "Forms, actions, and automation hooks to update data and trigger processes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Customization",
      body: "Configure layouts, branding, and logic; extend with integrations where needed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Stacker review: pricing, features, pros & cons, and alternatives so you can decide if no-code portals on Airtable/Sheets fit your needs."
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
                  {toolName} helps you launch secure portals fast—configure roles and permissions carefully to protect data.
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
              {toolName} is a no-code builder for portals and internal tools. It connects to Airtable, Google Sheets, and databases, letting you create apps with roles, permissions, and workflows without coding.
            </p>
            <p className="mt-3 text-slate-700">
              It’s tailored for ops/product teams that need secure data sharing and UI quickly. Complex logic may require integrations or external automations.
            </p>
            <p className="mt-3 text-slate-700">
              Use it alongside your identity provider (for SSO on eligible plans) and automation tools to extend functionality.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams needing secure portals or internal tools on existing Airtable/Sheets data.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Customer success teams building client portals with limited data views.",
                "Operations teams creating partner/vendor dashboards.",
                "Product teams launching internal tools without engineering cycles.",
                "Agencies delivering client portals on top of Airtable/Sheets.",
                "Companies needing roles/permissions and SSO for external users.",
                "Teams integrating with automation tools for extra logic.",
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
              {toolName} focuses on secure, data-connected portals with roles, permissions, and configurable workflows.
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
                  Pricing scales by apps, records, users, and security features. Higher tiers add roles/permissions depth, SSO, performance, and support. Choose based on external user needs and data volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a plan that covers roles and expected records; upgrade when you need SSO, more scale, or premium support.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Simple internal tools</td>
                    <td className="px-4 py-3">Basic apps, limited records/users</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Portals with roles</td>
                    <td className="px-4 py-3">Roles/permissions, higher limits</td>
                    <td className="px-4 py-3">Common choice for client portals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">External users & security</td>
                    <td className="px-4 py-3">SSO, advanced security, performance, support</td>
                    <td className="px-4 py-3">Plan for governance and scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider Airtable/Sheets limits, data sync cadence, and SSO needs. Budget for integration work if you extend logic via automation tools.
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
                  <li>Rapid portal/internal app building without code.</li>
                  <li>Built-in roles/permissions and security options.</li>
                  <li>Connects to Airtable/Sheets/databases with syncing.</li>
                  <li>Customizable layouts and workflows.</li>
                  <li>SSO and security features on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Higher tiers needed for SSO/security and larger limits.</li>
                  <li>Performance tied to data source limits and sync.</li>
                  <li>Complex logic may require external automations.</li>
                  <li>Pricing scales with users/records—model costs early.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other no-code builders to match your data source, auth, and customization needs.
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
            <p className="text-slate-700">See how {toolName} compares to other no-code platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Softr</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/softr">
                  View Softr
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Softr is block/template-driven on Airtable/Sheets; {toolName} focuses on secure portals with robust permissions. Choose based on auth needs and customization style.
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
                Bubble offers deep customization and logic; {toolName} is faster for data-connected portals with permissions. Choose Bubble for complex apps, {toolName} for speed and secure data sharing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need secure portals or internal tools on Airtable/Sheets/databases and want strong roles/permissions without coding.
            </p>
            <p className="mt-3 text-slate-700">
              Plan data architecture, permissions, and SSO early. Move to higher tiers when you need more security and scale.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid choice for portals and ops tools—best when paired with careful data design and governance.
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
              Choose {toolName} if you need to deliver secure portals or internal tools quickly on Airtable/Sheets/databases, with built-in roles and permissions.
            </p>
            <p>
              Consider Softr for faster templates or Bubble for deep customization; {toolName} shines for data-connected portals with strong access control.
            </p>
            <p>{toolName} keeps teams agile while enforcing permissions—pair it with good data hygiene and automation.</p>
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

export default StackerToolPage;
