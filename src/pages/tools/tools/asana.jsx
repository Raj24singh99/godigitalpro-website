import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, LayoutGrid, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Asana";
const slug = "asana";
const category = "Project management";
const shortPitch =
  "Asana is a collaborative work management platform that helps teams plan, execute, and track projects with tasks, workflows, timelines, and reporting.";
const pricingSummary = "Free for small teams. Premium starts around $10.99/user/month billed annually; Business adds approvals, portfolios, and advanced reporting.";
const officialUrl = "https://asana.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/asana.com",
  gradient: "from-fuchsia-500 via-rose-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(236,72,153,0.24)]",
};

const alternatives = [
  { name: "Monday.com", slug: "monday" },
  { name: "Trello", slug: "trello" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Notion", slug: "notion" },
  { name: "Airtable", slug: "airtable" },
];

const faqs = [
  { q: "Is Asana free?", a: "Yes. The Basic plan is free with unlimited tasks and projects for small teams. Timelines, automations, and advanced reporting require paid plans." },
  { q: "Is Asana good for agencies?", a: "Agencies use Asana for client delivery, creative ops, and approval flows. Portfolios, templates, and workload views make it easier to manage multiple accounts." },
  { q: "Which Asana plan should I choose?", a: "Start with Premium if you need timelines and task dependencies. Business is best for approvals, portfolios, and reporting across multiple teams or clients." },
  { q: "Does Asana integrate with other tools?", a: "Yes. Asana integrates with Slack, Google Workspace, Microsoft 365, Jira, Zapier, GitHub, Salesforce, and many others to sync tasks and notifications." },
  { q: "Can Asana handle automation?", a: "Rules automate assignments, statuses, and routing. Business adds more triggers and custom rule actions to reduce manual admin work." },
  { q: "Is Asana secure?", a: "Asana offers SOC 2 Type II, SSO, SCIM, admin controls, and audit logs. Enterprise plans add more controls and data residency options." },
  { q: "How does Asana compare to ClickUp?", a: "Asana delivers a refined UI and strong collaboration; ClickUp packs in more features at a lower price but can feel heavier. Pick Asana for focus and adoption." },
  { q: "Is Asana good for product teams?", a: "Yes. Timelines, milestones, templates, and integrations with design/engineering tools make it solid for product ops and GTM collaboration." },
];

function AsanaToolPage() {
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
        "Asana combines an approachable interface with robust workflows, timelines, and reporting. It’s a reliable choice for agencies, product teams, and marketing squads that need clarity and collaboration without clutter.",
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
      icon: <LayoutGrid className="h-5 w-5 text-rose-500" />,
      title: "Multiple work views",
      body: "Switch between list, board, timeline, workload, and calendar views so teams can plan the way they prefer without duplicating work.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Dependencies and timelines",
      body: "Task dependencies, milestones, and Gantt-style timelines keep complex projects on track and highlight critical paths early.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Rules and automation",
      body: "Rules automate assignments, status updates, field changes, and stakeholder notifications, reducing manual follow-ups.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations for GTM and product",
      body: "Connect Slack, Teams, Gmail, Outlook, Figma, GitHub, HubSpot, Salesforce, and more so work stays visible in the tools you use every day.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Governance and security",
      body: "Permission controls, admin audit logs, SSO, and SCIM keep data secure while giving leaders visibility across teams.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Reporting and portfolios",
      body: "Dashboards, goals, and portfolios track status and capacity across projects so leaders can unblock risks early.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Asana review for 2025 covering pricing, workflows, pros & cons, alternatives, and how it fits agencies, marketing, and product teams."
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
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Asana blends clarity and collaboration with flexible views, timelines, and automation. It scales from simple task boards to cross-team portfolios.
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
              Asana is a {category.toLowerCase()} platform that organizes work across teams. It supports task management, project planning, workflows, and executive reporting in one place.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies, marketing teams, and product orgs use Asana to coordinate launches, creative production, and sprint planning. Templates and automation reduce setup time, while portfolios and goals keep leadership aligned.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to heavier work management suites, Asana prioritizes adoption and clarity, making it easier to roll out across cross-functional teams.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need structure without excessive complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing creative production, client approvals, and delivery timelines.",
                "Marketing teams running campaigns, launches, and content calendars.",
                "Product and engineering teams aligning backlogs, sprints, and stakeholders.",
                "Ops teams standardizing workflows with templates and automation rules.",
                "Leadership teams wanting reporting, portfolio health, and workload views.",
                "Distributed teams needing a shared source of truth with Slack/Teams alerts.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Views, workflows, and reporting help Asana scale from simple task lists to cross-team programs.</p>
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
                  Basic is free with unlimited tasks and limited views. Premium adds timelines, custom fields, forms, and more automation. Business introduces approvals, portfolios, workload, and advanced integrations. Enterprise adds SSO/SCIM, admin controls, and data restrictions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free, upgrade to Premium for timelines and dependencies; use Business when you need approvals, workload, and reporting at scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Individuals and very small teams</td>
                    <td className="px-4 py-3">Limited views, no timelines or dependencies</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Growing teams needing structure</td>
                    <td className="px-4 py-3">Timelines, advanced search, workflows, limited admin</td>
                    <td className="px-4 py-3">~$10.99/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies and cross-team programs</td>
                    <td className="px-4 py-3">Approvals, portfolios, workload, advanced integrations</td>
                    <td className="px-4 py-3">~$24.99/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with strict governance</td>
                    <td className="px-4 py-3">SSO/SCIM, data controls, audit log exports, DLP</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Most teams land on Premium; Business is the sweet spot for agencies, PMOs, and cross-functional programs needing portfolio and workload views.</p>
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
                  <li>Clean, intuitive UI that drives adoption across teams.</li>
                  <li>Flexible views (list, board, timeline, workload) without duplication.</li>
                  <li>Rules automate routine updates and routing.</li>
                  <li>Strong templates and forms for repeatable workflows.</li>
                  <li>Integrations with major GTM, design, and dev tools.</li>
                  <li>Reporting and portfolios keep leadership visibility high.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing per user adds up for large, guest-heavy teams.</li>
                  <li>Native docs are lighter than Notion; may need external docs.</li>
                  <li>Advanced automation is less customizable than ClickUp.</li>
                  <li>Reporting depth may require BI tools for very large orgs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Asana balances clarity with capability. Some teams prefer broader suite bundles or deeper automation depending on use case and budget.
            </p>
            <p className="mt-2 text-slate-700">All offer project/task management; they differ on automation, documentation, and price.</p>
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
            <p className="text-slate-700">Here’s how Asana compares to two close rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Monday.com</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/monday-vs-asana-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Monday.com is highly customizable with dashboards and databases. Asana is opinionated with a cleaner UX and great templates, reducing setup time for most teams.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Monday for heavy customization and app-like boards; choose Asana for adoption, templates, and balanced automation.
              </p>
              <p className="mt-2 text-slate-900">Pricing is similar at lower tiers; Monday can get pricier with advanced features or enterprise security.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trello</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/trello-vs-asana-vs-monday">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trello is simple and board-first; great for lightweight tasks. Asana offers structured projects, timelines, dependencies, and reporting for cross-team work.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Trello for simple boards and personal tasking; choose Asana when you need workflow structure, dependencies, and portfolio visibility.
              </p>
              <p className="mt-2 text-slate-900">If you want more experimentation features, ClickUp is another option; Asana wins for focus and ease.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For agencies, marketing teams, and product orgs needing structured workflows and clear accountability, Asana is worth the spend. Its balance of usability, automation, and reporting shortens rollout time and keeps adoption high.
            </p>
            <p className="mt-3 text-slate-700">
              If you want deep customization or bundled docs/databases, consider Notion or ClickUp. If you need simple boards, Trello is still great. But for most cross-functional teams, Asana’s maturity and UX make it the safest pick.
            </p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: A top-tier work management tool that scales from startups to enterprise programs with strong adoption.</p>
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
            <p>Pick Asana if you want structured workflows, timelines, and reporting that teams actually adopt.</p>
            <p>Consider Monday.com or ClickUp for deeper customization; Trello for simple boards; Notion for doc-heavy workflows.</p>
            <p>Asana integrates cleanly with chat, design, and dev tools, keeping work and communication aligned.</p>
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

export default AsanaToolPage;
