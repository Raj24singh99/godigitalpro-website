import React, { useState } from "react";
import { Sparkles, ShieldCheck, Workflow, LayoutTemplate, BarChart3, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Monday.com";
const slug = "monday";
const category = "Work OS & Project Management";
const shortPitch =
  "Monday.com is a customizable work OS that lets teams build boards, workflows, automations, and dashboards to run projects, marketing, sales, and ops in one place.";
const pricingSummary = "Free tier for individuals; paid plans from ~$9/seat/month billed annually with higher tiers for automations, views, and permissions.";
const officialUrl = "https://monday.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/monday.com",
  gradient: "from-amber-500 via-yellow-500 to-lime-500",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.25)]",
};

const alternatives = [
  { name: "Asana", slug: "asana", blurb: "Structured project and portfolio management." },
  { name: "ClickUp", slug: "clickup", blurb: "Highly customizable work OS with many views." },
  { name: "Trello", slug: "trello", blurb: "Simple kanban for quick adoption." },
  { name: "Notion", slug: "notion", blurb: "Docs + databases for flexible workspaces." },
  { name: "Airtable", slug: "airtable", blurb: "Database-style tables and views for custom workflows." },
];

const faqs = [
  { q: "Is Monday.com good for agencies?", a: "Yes. Agencies use Monday for client boards, creative requests, approvals, and dashboards that roll up status across accounts." },
  { q: "Is there a free version?", a: "Yes, a free tier for individuals. Teams typically choose Basic/Standard/Pro for more automation, views, and permissions." },
  { q: "Does Monday have automations?", a: "Yes. It offers recipe-based automations (triggers + actions) plus integrations with Slack, Gmail, HubSpot, and more." },
  { q: "Can Monday replace spreadsheets?", a: "Often. Boards, formulas, and dashboards cover many spreadsheet workflows with better collaboration and governance." },
  { q: "Does it handle dependencies and timelines?", a: "Yes. Timelines, Gantt, and dependencies exist on higher tiers and work well for campaign and project tracking." },
  { q: "Is Monday secure for client work?", a: "Audit logs, permissions, SSO (Enterprise), and granular sharing make it suitable for client-facing boards when configured correctly." },
  { q: "Does Monday integrate with marketing tools?", a: "Yes. Integrations include HubSpot, Salesforce, Slack, Google Workspace, Outlook, Jira, and more via native apps and Zapier/Make." },
  { q: "Is Monday good for product teams?", a: "It can work for product backlogs and launches; for dense engineering workflows, specialized tools like Jira may be stronger." },
];

const featureBlocks = [
  {
    icon: <Workflow className="h-5 w-5 text-amber-600" />,
    title: "Customizable workflows",
    body: "Boards, columns, and automations adapt to marketing, sales, ops, and product processes without engineering support.",
  },
  {
    icon: <LayoutTemplate className="h-5 w-5 text-sky-500" />,
    title: "Multiple views",
    body: "Switch between board, list, timeline, Gantt, calendar, workload, and dashboards so each team works the way it prefers.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Automations and integrations",
    body: "Recipe-based automations plus integrations with Slack, HubSpot, Gmail, and more keep updates and alerts flowing automatically.",
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
    title: "Dashboards & reporting",
    body: "Cross-board dashboards visualize status, workload, budgets, and campaign performance for stakeholders.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-amber-700" />,
    title: "Permissions & governance",
    body: "Granular permissions, private boards, guest access, and audit logs help agencies and enterprises stay compliant.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-indigo-500" />,
    title: "Templates for teams",
    body: "Ready-made templates for marketing campaigns, CRM, product launches, and ops make onboarding faster.",
  },
];

function MondayToolPage() {
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
        "Monday.com is a flexible work OS with boards, automations, and dashboards that adapt to marketing, ops, and product workflows. It balances usability with customization for teams of many sizes.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Monday.com review for 2025 covering pricing, features, pros & cons, alternatives, and how it compares to Asana and ClickUp."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Flexible work OS for cross-team workflows
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-lime-200 blur-3xl" />
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
                  Monday.com adapts to your workflow—boards, automations, and dashboards keep marketing, ops, and product aligned without heavy PM overhead.
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
              Monday.com is a cloud-based work OS that lets teams build custom workflows with boards, automations, and dashboards. It’s flexible enough for marketing, sales, product launches, and operations.
            </p>
            <p className="mt-3 text-slate-700">
              Teams combine templates and custom columns to manage requests, campaigns, content, sprints, and more—while automations keep notifications, status changes, and handoffs consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Dashboards roll up progress across boards so leaders can see status, workload, and KPIs in one view.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Monday.com suits teams that need flexibility plus automation without building from scratch.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams running campaigns, content calendars, and launches.",
                "Agencies tracking client requests, approvals, and delivery.",
                "Ops teams coordinating processes with automations and dashboards.",
                "Sales/CS teams using simple pipelines and onboarding boards.",
                "Product/IT teams collaborating on sprints and launch plans.",
                "Leaders needing roll-up dashboards across multiple boards.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Monday.com focuses on flexibility, automation, and visibility across teams.</p>
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
                  Pricing scales by seats and features (views, automations, permissions). Annual plans lower effective seat price; Enterprise adds SSO, audit, and governance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Try Free/Basic to test fit; Standard/Pro for automations and views; Enterprise for compliance-heavy teams.</p>
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
                    <td className="px-4 py-3">Individuals testing boards</td>
                    <td className="px-4 py-3">Basic boards, limited items</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Unlimited boards; limited views</td>
                    <td className="px-4 py-3">~$9/seat/mo (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Timeline/Gantt, automations, integrations</td>
                    <td className="px-4 py-3">~$12/seat/mo (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Cross-team workflows</td>
                    <td className="px-4 py-3">Advanced automations, time tracking, dashboards</td>
                    <td className="px-4 py-3">~$19/seat/mo (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Enterprises and agencies with compliance</td>
                    <td className="px-4 py-3">SSO, audit logs, permissions, advanced security</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Standard is a common starting point for marketing and ops teams. Pro is best when automations, dashboards, and time tracking are critical.
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
                  <li>Highly customizable boards, columns, and automations.</li>
                  <li>Multiple views (board, list, timeline, Gantt, workload, dashboards).</li>
                  <li>Good templates for marketing, ops, and product teams.</li>
                  <li>Strong integrations with popular SaaS apps.</li>
                  <li>Dashboard roll-ups across boards.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Can feel busy for very simple task tracking needs.</li>
                  <li>Automations/integrations counts depend on plan limits.</li>
                  <li>Advanced permissions and audit features require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you prefer a lighter tool or stricter PM structure, consider these.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Monday.com stacks up against popular project tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trello vs Asana</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/trello-vs-asana-vs-monday">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trello is the simplest kanban. Asana offers structured projects and portfolios. Monday sits between—more customizable than Trello, lighter than heavy PMO tools.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana vs ClickUp</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/monday-vs-asana-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana excels at structured projects. ClickUp is highly configurable with many views. Monday blends customization with ease, making it friendly for marketing and ops teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Monday.com is worth it if you need flexible workflows, automation, and multi-view boards without heavy PM complexity. It scales from marketing squads to cross-functional ops teams.
            </p>
            <p className="mt-3 text-slate-700">
              If you want the simplest kanban, Trello works. If you need strict project governance and dependencies, Asana or ClickUp may fit better. Monday strikes a balance for most business teams.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> A strong pick for teams that want customizable workflows, automations, and dashboards in one place.
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
              Choose Monday.com if you want a flexible work OS that adapts to campaigns, ops, and product without heavy PM overhead. It’s especially good for marketing and cross-functional teams needing dashboards and automations.
            </p>
            <p>
              Consider Trello for the simplest boards or Asana/ClickUp for stricter project governance. Monday balances usability with customization for most business teams.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default MondayToolPage;
