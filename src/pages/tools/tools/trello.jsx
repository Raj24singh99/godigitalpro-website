import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Kanban, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Trello";
const slug = "trello";
const category = "Project Management";
const shortPitch = "Trello is a kanban-first project management tool that helps marketers and teams organize work visually with boards, cards, and automations.";
const pricingSummary = "Freemium with paid plans from around $5/user/month, adding unlimited boards, advanced checklists, custom fields, and Butler automation.";
const officialUrl = "https://trello.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/trello.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.18)]",
};

const alternatives = [
  { name: "Asana", slug: "asana" },
  { name: "Monday.com", slug: "monday" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Notion", slug: "notion" },
  { name: "Airtable", slug: "airtable" },
];

const faqs = [
  { q: "Is Trello free?", a: "Yes. Trello has a free plan with basic boards, lists, and cards. Paid plans add unlimited boards, advanced checklists, custom fields, and automation." },
  { q: "Is Trello good for marketing teams?", a: "Yes. Marketers use Trello to run campaign boards, content calendars, launch checklists, and client projects with simple collaboration." },
  { q: "Which Trello plan should I pick?", a: "Most teams start on Standard for unlimited boards and custom fields. Premium adds timeline, calendar, table views, and stronger admin controls." },
  { q: "Does Trello support automation?", a: "Trello’s Butler automation lets you create rules, scheduled commands, and button actions to reduce manual work across cards and boards." },
  { q: "Can Trello handle complex projects?", a: "Trello excels at lightweight workflows. For dependencies, burndowns, or resource planning, consider pairing it with templates or moving to tools like Asana, Monday.com, or ClickUp." },
  { q: "Does Trello integrate with other tools?", a: "Yes. Power-Ups and integrations connect Trello to Slack, Google Drive, Jira, Confluence, GitHub, HubSpot, and Zapier for automation and reporting." },
  { q: "Is Trello secure?", a: "Trello offers SOC2 compliance, encryption in transit/at rest, SSO/SCIM on Enterprise, and admin controls for workspaces." },
  { q: "Can Trello handle multiple teams?", a: "Yes. Workspaces, board permissions, templates, and admin controls help agencies and multi-team orgs standardize boards while keeping clients or freelancers in view-only modes." },
];

function TrelloToolPage() {
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
        "Trello is the fastest way to spin up kanban boards for campaigns, sprints, and team tasks. It offers power-ups, custom fields, advanced checklists, and Butler automation to keep workflows humming. Pricing starts free and scales affordably for small teams.",
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
      icon: <Kanban className="h-5 w-5 text-sky-500" />,
      title: "Kanban-first boards",
      body: "Cards, lists, labels, and swimlanes that anyone can learn fast. Ideal for campaign boards, content calendars, and sprint backlogs.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Butler automation",
      body: "Rules, scheduled commands, and card buttons automate reminders, checklists, due dates, and card movement without code.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Advanced checklists and custom fields",
      body: "Break down tasks with owners and due dates inside cards while tracking key metadata with dropdowns, numbers, and dates.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Power-Ups and integrations",
      body: "Connect Slack, Google Drive, GitHub, Jira, Confluence, HubSpot, and Zapier to keep updates flowing between teams.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Workspace permissions",
      body: "Manage guests, observers, and admins so agencies can collaborate with clients securely across boards and workspaces.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Templates and views",
      body: "Start from templates for content, product, or ops. Timeline, calendar, and table views help leaders scan status at a glance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Trello review for marketers and teams covering pricing, features, pros & cons, alternatives, and whether Trello fits your 2025 stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-200 blur-3xl" />
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
                  Trello delivers visual clarity for any workflow—campaigns, content, sprints, or ops—while Butler automation keeps cards moving without manual effort.
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
              Trello is a {category.toLowerCase()} tool built around simple boards and cards. It gives teams a visual way to manage tasks, campaigns, and projects without heavy process overhead.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and agencies rely on Trello for editorial calendars, launch trackers, and client handoffs. Product and ops teams use it for sprints, backlogs, and intake queues.
            </p>
            <p className="mt-3 text-slate-700">
              Power-Ups, custom fields, and Butler automation help Trello scale beyond basic boards so teams can add reporting, integrations, and workflows as they grow.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Trello suits teams that want a flexible, visual system without a steep learning curve.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams organizing campaigns, content calendars, and launch checklists.",
                "Agencies managing client projects, handoffs, and approvals with guests or observers.",
                "Product squads running sprint backlogs, triage, and discovery tasks.",
                "Ops and RevOps teams tracking processes, requests, and automation backlogs.",
                "Design and creative teams handling briefs, feedback, and asset delivery.",
                "Founders and small teams needing a simple work OS that scales with them.",
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
            <p className="mt-3 text-slate-700">Trello focuses on clarity, speed, and automation so teams can stay organized with minimal admin overhead.</p>
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
                  Trello’s free plan covers core boards. Standard adds unlimited boards and custom fields. Premium enables timeline, calendar, dashboard, and advanced admin controls. Enterprise layers SSO/SCIM and security.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Standard for unlimited boards. Upgrade to Premium for views and admin if you run larger teams or multiple clients.</p>
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
                    <td className="px-4 py-3">Personal use and small tests</td>
                    <td className="px-4 py-3">Basic boards, limited automation, limited Power-Ups</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Small teams and agencies</td>
                    <td className="px-4 py-3">Unlimited boards, custom fields, advanced checklists</td>
                    <td className="px-4 py-3">~$5/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Growing teams needing views</td>
                    <td className="px-4 py-3">Timeline, calendar, dashboard views, advanced admin</td>
                    <td className="px-4 py-3">~$10/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with security needs</td>
                    <td className="px-4 py-3">SSO/SCIM, organization-wide controls, security reviews</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Standard is enough for most teams. Premium is the sweet spot when you need multiple views and stronger admin controls.</p>
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
                  <li>Fast onboarding with a clean kanban UI.</li>
                  <li>Butler automation removes repetitive steps.</li>
                  <li>Advanced checklists and custom fields for richer cards.</li>
                  <li>Power-Ups and integrations extend reporting and workflows.</li>
                  <li>Affordable pricing for small teams and agencies.</li>
                  <li>Templates and multiple views on Premium aid leadership visibility.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Reporting and resource management are light compared to heavier PM tools.</li>
                  <li>Power-Ups can add cost as needs grow.</li>
                  <li>Dependencies and workload planning are minimal.</li>
                  <li>Complex programs may outgrow boards-first structure.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Trello excels at simplicity. If you need deeper reporting, dependencies, or all-in-one work management, consider these alternatives. All have dedicated pages.
            </p>
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
            <p className="text-slate-700">Here’s how Trello stacks up against two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana vs Monday</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/trello-vs-asana-vs-monday">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana brings timelines, dependencies, and goals. Monday.com offers highly customizable boards and dashboards. Trello stays simpler with fast kanban and affordable pricing.
              </p>
              <p className="mt-2 text-slate-700">Choose Trello for simplicity and campaign boards; Asana for project rigor; Monday for customizable workflows across teams.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickUp vs Notion</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/trello-vs-clickup-vs-notion">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickUp packs deep PM features and dashboards. Notion combines docs, wiki, and tasks. Trello is fastest to adopt for boards-first teams and still integrates with both via automations.
              </p>
              <p className="mt-2 text-slate-700">Choose Trello for ease; ClickUp for depth; Notion for docs + tasks in one workspace.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a simple, visual system that teams adopt quickly, Trello is worth it. Butler automation and Power-Ups reduce admin while keeping workflows flexible.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy reporting, dependencies, or resource planning, Asana, Monday.com, or ClickUp may fit better. Trello pairs well with those tools when you want lightweight boards alongside deeper systems.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Trello is a top choice for teams that value speed-to-adoption and visual clarity, with enough automation to stay organized as you scale.
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
              Choose Trello if you need a fast, visual way to organize campaigns, tasks, and client projects with low friction. Automations and Power-Ups keep it valuable as teams mature.
            </p>
            <p>
              Consider Asana or Monday.com if you require deeper reporting and dependencies. Consider ClickUp or Notion for all-in-one workspaces that blend docs, dashboards, and tasks.
            </p>
            <p>Trello fits well in a modern stack, connecting to Slack, Google Drive, Zapier, and CRMs so updates flow automatically.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TrelloToolPage;
