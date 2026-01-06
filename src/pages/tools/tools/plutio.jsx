import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Plutio";
const slug = "plutio";
const category = "Project & Client Management";
const shortPitch =
  "Plutio is an all-in-one project, CRM, and billing workspace for freelancers and small agencies—covering tasks, proposals, invoices, and time tracking.";
const pricingSummary =
  "Tiered per-seat plans; higher tiers add team access, white-label options, automation, and client portals. Add-ons for extra collaborators/clients.";
const officialUrl = "https://www.plutio.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/plutio.com",
  gradient: "from-indigo-500 via-purple-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "ClickUp", slug: "clickup" },
  { name: "Asana", slug: "asana" },
  { name: "Trello", slug: "trello" },
  { name: "HoneyBook", slug: "honeybook" },
  { name: "Plutio vs Asana vs Trello", slug: "compare/asana-vs-trello-vs-clickup", isComparison: true },
];

const faqs = [
  { q: "What is Plutio?", a: "Plutio is an all-in-one workspace for projects, CRM, invoicing, proposals, and time tracking built for freelancers and small teams." },
  { q: "Who is it for?", a: "Freelancers, agencies, and small service businesses that want projects, billing, and client portals in one tool." },
  { q: "Does it include invoicing?", a: "Yes. Proposals, invoices, payments, and time tracking are included." },
  { q: "How is pricing structured?", a: "Per-seat plans; higher tiers add team seats, white-label options, and automation." },
  { q: "Does it have templates?", a: "Yes. Templates for proposals, contracts, and projects to speed setup." },
  { q: "Are client portals supported?", a: "Yes. Clients can view tasks, proposals, and invoices via portals." },
  { q: "Does it integrate with other tools?", a: "Integrations and Zapier/API are available for payments, calendars, and forms." },
  { q: "Is it good for large teams?", a: "Best for freelancers/SMBs. Larger orgs may need more advanced reporting and role controls." },
];

function PlutioToolPage() {
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
        "Plutio bundles projects, CRM, proposals, and invoicing for freelancers and agencies. It reduces tool sprawl; confirm if reporting/roles meet your scale.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Projects & tasks", body: "Kanban and list views with time tracking, files, and comments." },
    { icon: <BarChart2 className="h-5 w-5 text-purple-600" />, title: "Proposals & contracts", body: "Build proposals/contracts with e-signatures to close clients faster." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Invoices & payments", body: "Send invoices, take payments, and track revenue in the same workspace." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Integrations & API", body: "Connect calendars, payments, and forms; extend via Zapier/API." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Templates & automation", body: "Reusable templates and automation rules to reduce admin work." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Client portals", body: "Share tasks, proposals, and invoices with clients securely." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Plutio review: pricing, features, pros & cons, and alternatives like ClickUp and Asana for freelancers and agencies."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} keeps projects, billing, and client collaboration in one place—great for freelancers and small agencies reducing tool sprawl.
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
              {toolName} is a unified workspace for projects, tasks, CRM, proposals, invoicing, and time tracking. It is designed to help freelancers and small teams manage work and billing in one app.
            </p>
            <p className="mt-3 text-slate-700">Use it to streamline client onboarding, proposals, deliverables, and payments without juggling multiple tools.</p>
            <p className="mt-3 text-slate-700">Check integrations and automation depth if you need complex workflows or advanced reporting.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for freelancers and small agencies wanting an all-in-one client ops stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Freelancers managing proposals, projects, and invoicing solo.",
                "Boutique agencies needing client portals and team collaboration.",
                "Service businesses that bill time and want simpler invoicing.",
                "Teams moving off spreadsheets into a unified workspace.",
                "Users wanting templates for proposals/contracts and quick approvals.",
                "Small orgs that need automation without enterprise CRM overhead.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on combining projects, billing, and client collaboration.</p>
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
                  Pricing is tiered by seats and features. Higher tiers add team access, white-label, automation, and client portals. Add-ons may apply for more collaborators/clients.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier; upgrade if you need white-label, more collaborators, or deeper automation.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Solo</td>
                    <td className="px-4 py-3">Freelancers</td>
                    <td className="px-4 py-3">Projects, proposals, invoicing, basic automation</td>
                    <td className="px-4 py-3">Seat-limited</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small agencies</td>
                    <td className="px-4 py-3">More seats, client portals, advanced automation</td>
                    <td className="px-4 py-3">Most popular</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency/White-label</td>
                    <td className="px-4 py-3">White-label needs</td>
                    <td className="px-4 py-3">Branding removal, higher limits, priority support</td>
                    <td className="px-4 py-3">Custom options</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare with ClickUp/Asana for project depth; Plutio wins on bundled billing/CRM for small teams. Confirm payment processor fees if using in-app invoicing.
            </p>
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
                  <li>All-in-one for projects, CRM, proposals, and invoicing.</li>
                  <li>Client portals and e-signatures included.</li>
                  <li>Templates and automation reduce admin work.</li>
                  <li>Good fit for freelancers and small agencies.</li>
                  <li>Integrations/Zapier extend workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Reporting/roles less advanced than enterprise PM tools.</li>
                  <li>Per-seat costs add up for larger teams.</li>
                  <li>Automation depth lighter than specialized tools.</li>
                  <li>Payment processing and regional features may vary.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other project and client management tools.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other work management apps.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickUp</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/clickup">
                  View ClickUp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickUp excels at complex project workflows; {toolName} bundles billing/CRM for small teams. Choose based on project complexity vs all-in-one client ops.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/asana">
                  View Asana
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana is strong for team projects and reporting; {toolName} focuses on client billing and proposals. Pick Asana for deeper PM, Plutio for client-centric workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want projects, billing, and client collaboration in one tool and you run a freelance or small agency workflow.
            </p>
            <p className="mt-3 text-slate-700">For complex PM/reporting, compare ClickUp/Asana; for billing-heavy workflows, {toolName} may reduce your tool stack.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid all-in-one for small client services teams; best when you need proposals-to-payment in one place.
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
              Choose {toolName} if you need an all-in-one client management workspace—projects, proposals, invoicing, and portals—in a single app.
            </p>
            <p>
              Consider ClickUp/Asana for deeper PM or HoneyBook for client-focused workflows; {toolName} excels at combining delivery and billing for small teams.
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

export default PlutioToolPage;
