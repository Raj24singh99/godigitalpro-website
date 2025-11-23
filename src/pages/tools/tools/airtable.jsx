import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Airtable";
const slug = "airtable";
const category = "Database + project workspace";
const shortPitch =
  "Airtable blends spreadsheets, databases, and collaboration so marketing, product, and ops teams can ship workflows, content calendars, and automations fast.";
const pricingSummary = "Free for small bases. Plus starts around $10/user/month; Pro adds advanced views/automations; Enterprise unlocks governance and sync at scale.";
const officialUrl = "https://www.airtable.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/airtable.com",
  gradient: "from-sky-500 via-indigo-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Notion", slug: "notion" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Monday.com", slug: "monday" },
  { name: "Trello", slug: "trello" },
  { name: "Asana", slug: "asana" },
];

const faqs = [
  { q: "Is Airtable free?", a: "Yes. The Free plan includes essential views and automations for up to 5 creators or editors. Paid plans add sync, advanced views, and higher limits." },
  { q: "Who is Airtable best for?", a: "Marketing, product, design, and ops teams that want spreadsheet simplicity plus database structure for content, campaigns, and roadmaps." },
  { q: "Does Airtable replace a CRM?", a: "It can power lightweight CRM and lead routing, but revenue teams with complex pipelines usually adopt a dedicated CRM while syncing key fields to Airtable." },
  { q: "Does Airtable integrate with other tools?", a: "Yes. Native connectors and Automations, plus Zapier and Make, connect Airtable to Slack, Google Drive, Jira, HubSpot, Salesforce, and more." },
  { q: "How powerful are Airtable automations?", a: "Automations handle triggers, branching, record updates, webhooks, and scripts. They’re strong for GTM workflows but lighter than full-blown iPaaS." },
  { q: "Is Airtable secure?", a: "Airtable offers SSO/SCIM on higher tiers, granular permissions, audit logs, and enterprise controls. Admins can govern base access and sharing links." },
  { q: "Can Airtable handle large datasets?", a: "Yes, but row and attachment limits apply by tier. For very large datasets, teams often sync subsets or pair Airtable with a data warehouse." },
  { q: "How does Airtable compare to Notion?", a: "Airtable is stronger for structured data, views, and automations. Notion excels at docs and knowledge bases. Many teams pair them." },
];

function AirtableToolPage() {
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
        "Airtable blends spreadsheet ease with database power. Views, automations, and sync make it a flexible hub for marketing calendars, product ops, and content workflows. Pricing scales fairly as teams grow.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
      icon: <Layers className="h-5 w-5 text-sky-500" />,
      title: "Flexible views and models",
      body: "Switch between grid, kanban, gallery, calendar, interfaces, and timelines without duplicating data. Customize fields for any workflow.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Automations and scripts",
      body: "Trigger notifications, create records, run scripts, and call webhooks. Keep GTM workflows, intake, and approvals in sync automatically.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Integrations and sync",
      body: "Native connectors and sync modules pull data from apps (or other bases) so teams maintain a single, reliable source of truth.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Permissions and governance",
      body: "Role-based access, field and view restrictions, audit logs, SSO/SCIM, and admin controls keep collaboration safe at scale.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Interface Designer",
      body: "Build lightweight internal apps and dashboards over your bases without code, so stakeholders see only what they need.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Templates for fast starts",
      body: "Use templates for content calendars, campaign tracking, product roadmaps, and assets to launch new workflows quickly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Airtable review for 2025 covering pricing, views, automations, pros & cons, alternatives, and comparisons for marketing, ops, and product teams."
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
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  Airtable keeps data, views, and automations in one place so teams can move from spreadsheets to reliable workflows without heavy dev work.
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
              Airtable is a {category.toLowerCase()} that lets teams model data like a spreadsheet while adding database relationships, permissions, and automations. It powers campaign tracking, product ops, asset management, and more.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing teams use it for calendars, content workflows, briefs, and approvals. Product orgs rely on it for roadmaps, bug triage, and research repositories. Ops teams centralize requests and inventory in one place.
            </p>
            <p className="mt-3 text-slate-700">
              With Interface Designer, stakeholders get tailored views without touching raw tables, keeping collaboration focused and secure.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need more structure than spreadsheets but less overhead than custom apps.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams managing content calendars, campaigns, and briefs.",
                "Product and design teams tracking research, roadmaps, and experiments.",
                "RevOps building lightweight CRMs, territories, and lead routing.",
                "Agencies packaging repeatable delivery workflows and approvals.",
                "Operations teams standardizing intake, assets, and inventory.",
                "Founders needing a flexible workspace before investing in custom tools.",
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
            <p className="mt-3 text-slate-700">Views, automations, and governance help Airtable scale from scrappy trackers to mission-critical workflows.</p>
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
                  Free includes essential views and automations for small teams. Plus lifts record limits and adds custom branding. Pro adds advanced views, interface features, and higher automation runs. Enterprise unlocks governance,
                  SSO/SCIM, admin controls, and enhanced sync.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free or Plus; upgrade to Pro for Interface Designer and advanced views; Enterprise for governance at scale.</p>
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
                    <td className="px-4 py-3">Testing and small teams</td>
                    <td className="px-4 py-3">5 creators/editors, limited automations, lower record caps</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing teams with more records</td>
                    <td className="px-4 py-3">Higher record limits, more automations, custom branded forms</td>
                    <td className="px-4 py-3">~$10/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams needing advanced views and interfaces</td>
                    <td className="px-4 py-3">Gantt, timeline, interface features, higher sync/automation limits</td>
                    <td className="px-4 py-3">~$20–$24/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs needing governance</td>
                    <td className="px-4 py-3">SSO/SCIM, admin controls, enhanced sync, audit logs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Most teams start with Plus and move to Pro once interfaces, advanced views, and higher automation runs are needed.</p>
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
                  <li>Flexible views keep teams aligned without duplicating data.</li>
                  <li>Automations and scripts cut manual updates and routing.</li>
                  <li>Interface Designer tailors dashboards for stakeholders.</li>
                  <li>Strong integrations and sync keep systems in step.</li>
                  <li>Granular permissions and SSO/SCIM for governance.</li>
                  <li>Great template ecosystem for fast setup.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Record and attachment limits require planning on large datasets.</li>
                  <li>Per-seat pricing can add up for guest-heavy teams.</li>
                  <li>Complex BI needs still require a data warehouse or BI tool.</li>
                  <li>Automation runs are capped per plan; high-volume teams must monitor usage.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Airtable excels at structured collaboration. Some teams lean toward doc-first or task-first tools depending on needs and budget.
            </p>
            <p className="mt-2 text-slate-700">These tools share similar use cases; they differ on documentation depth, automation, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Here’s how Airtable stacks up against two popular workspace alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/airtable-vs-notion-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion is excellent for documentation and wikis. Airtable is stronger for structured data, relational models, and automations that drive workflows.
              </p>
              <p className="mt-2 text-slate-700">Choose Notion for knowledge bases; choose Airtable to run campaigns, requests, and product ops with data integrity.</p>
              <p className="mt-2 text-slate-900">Many teams pair both—Airtable for structured work, Notion for docs.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickUp</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/airtable-vs-monday-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickUp is task-first with deep customization across docs, goals, and dashboards. Airtable offers database-style flexibility and Interface Designer for tailored apps.
              </p>
              <p className="mt-2 text-slate-700">Pick ClickUp for task-heavy teams wanting everything in one app; pick Airtable for data-first workflows and integrations.</p>
              <p className="mt-2 text-slate-900">Both support automations; Airtable’s relational structure often wins for complex content and ops pipelines.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams outgrowing spreadsheets who need structured workflows, rollups, and automations, Airtable is worth it. The time saved on approvals, updates, and reporting quickly offsets license cost.
            </p>
            <p className="mt-3 text-slate-700">
              If you only need docs, Notion or Google Docs might suffice. If you need dev-grade customization, consider building atop a database. For most GTM and ops teams, Airtable’s speed-to-value is excellent.
            </p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: A leading no-code workspace for structured, collaborative work.</p>
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
            <p>Choose Airtable if you want a structured, automation-ready workspace that scales beyond spreadsheets without heavy engineering.</p>
            <p>Consider Notion for doc-heavy knowledge management and ClickUp or Monday for task-first adoption; pair them when it suits your stack.</p>
            <p>Airtable integrates neatly with marketing, product, and data stacks, keeping workflows connected.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default AirtableToolPage;
