import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ClickUp";
const slug = "clickup";
const category = "Work Management";
const shortPitch =
  "ClickUp is an all-in-one work management platform combining tasks, docs, goals, sprints, whiteboards, and automation for marketing, product, and ops teams.";
const pricingSummary =
  "Free plan with core tasks and docs. Unlimited around $7/user/month, Business near $12/user/month, and Business Plus/Enterprise adding advanced security, permissions, and automation capacity.";
const officialUrl = "https://clickup.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clickup.com",
  gradient: "from-fuchsia-500 via-indigo-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.22)]",
};

const alternatives = [
  { name: "Asana", slug: "asana" },
  { name: "Trello", slug: "trello" },
  { name: "Notion", slug: "notion" },
  { name: "Monday.com", slug: "monday" },
  { name: "Jira", slug: "jira" },
];

const faqs = [
  { q: "Is ClickUp good for marketing teams?", a: "Yes. ClickUp supports content calendars, campaign boards, automations, proofing, and dashboards that give marketers visibility on pipeline and dependencies." },
  { q: "Does ClickUp handle sprints and agile?", a: "ClickUp offers sprint points, burndown charts, backlog views, and custom statuses so product and engineering teams can run agile without separate tools." },
  { q: "Can I create docs and wikis in ClickUp?", a: "ClickUp Docs let you write, @mention, embed tasks, and publish for external sharing, making it possible to keep project briefs and SOPs with the work." },
  { q: "How does ClickUp pricing work?", a: "Free tier is generous for small teams. Unlimited adds unlimited storage and guests. Business/Business Plus add advanced automation, permissions, and workload features." },
  { q: "Does ClickUp integrate with other tools?", a: "Yes—Slack, Google Drive, HubSpot, Figma, GitHub, Calendars, Zapier, and more. You can also use webhooks and API for custom workflows." },
  { q: "Is ClickUp secure and reliable?", a: "ClickUp offers SOC 2 compliance, SSO/SAML, advanced permissions, and data residency options on higher tiers. Uptime and performance have improved since v3." },
  { q: "Can I automate workflows?", a: "Native automations handle status changes, assignments, due dates, and notifications. Business tiers increase automation runs and conditional logic." },
  { q: "Which plan should I start with?", a: "Start with Free to test. Most teams move to Unlimited for storage/guests; choose Business for advanced permissions, sprints, and better automations." },
];

function ClickUpToolPage() {
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
        "ClickUp centralizes tasks, docs, dashboards, and goals so cross-functional teams can run campaigns, product work, and operations in one system. Pricing stays competitive with strong automation and permissions.",
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
      icon: <LayoutTemplate className="h-5 w-5 text-fuchsia-500" />,
      title: "Flexible views for every team",
      body: "Switch between list, board, Gantt, calendar, workload, and dashboards so marketing, product, and ops teams work the way they prefer.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Docs, whiteboards, and goals",
      body: "Capture briefs, SOPs, and strategy in Docs; plan journeys on whiteboards; tie work to measurable goals and OKRs.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Sprints and delivery",
      body: "Backlogs, sprint points, burndown charts, dependencies, and workload give squads the agile structure they need.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Automations and integrations",
      body: "Automate assignments, statuses, and notifications. Connect Slack, calendars, Git, Figma, CRM, and storage to keep updates flowing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Permissions and security",
      body: "Granular permissions, guest roles, and SSO/SAML on higher tiers help larger teams keep data controlled.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Dashboards and reporting",
      body: "Custom widgets for velocity, cycle time, workload, campaign status, and revenue-linked KPIs keep stakeholders aligned.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Complete ClickUp review for marketers and product teams: pricing, features, pros & cons, alternatives, and ClickUp vs Asana or Trello comparisons."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-fuchsia-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  ClickUp unifies tasks, docs, sprints, and dashboards so cross-functional teams share one source of truth without juggling multiple tools.
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
              {toolName} is a {category.toLowerCase()} platform that gives teams multiple views (list, board, Gantt, calendar), docs, forms, goals, and dashboards in one workspace. It’s built to replace separate task, doc, and OKR tools.
            </p>
            <p className="mt-3 text-slate-700">
              Marketing teams run campaigns and approvals; product and engineering manage sprints and roadmaps; ops coordinates SOPs and requests. Everything stays linked to goals and reporting.
            </p>
            <p className="mt-3 text-slate-700">
              Strong automation, templates, and permissions make it easier to onboard new teams without losing control or speed.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits teams needing a single system for projects, docs, and reporting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams managing campaigns, content calendars, and approvals.",
                "Product squads running sprints with dependencies, points, and burndown.",
                "Ops teams standardizing SOPs, requests, and recurring checklists.",
                "Agencies combining client projects, docs, and reporting in one workspace.",
                "Leadership tracking goals/OKRs and dashboards across departments.",
                "Remote teams needing automation and templates to stay consistent.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on unifying project delivery, collaboration, and reporting in a customizable workspace.</p>
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
                  ClickUp pricing scales per user with automation and permission limits by tier. Free is capable for small teams; Business tiers add security and more automations.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most teams start on Unlimited; choose Business for advanced permissions, sprints, and automation volume.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and small teams</td>
                    <td className="px-4 py-3">Unlimited tasks, limited storage, basic views</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Unlimited</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Unlimited storage, guests, agile features, integrations</td>
                    <td className="px-4 py-3">~$7/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Cross-functional orgs</td>
                    <td className="px-4 py-3">Advanced automations, dashboards, permissions, SSO</td>
                    <td className="px-4 py-3">~$12/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Plus / Enterprise</td>
                    <td className="px-4 py-3">Large deployments</td>
                    <td className="px-4 py-3">Higher automation limits, admin controls, data residency</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pick based on automation volume, permission needs, and security requirements. Unlimited fits most teams; Business adds controls and reporting for multi-team rollouts.
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
                  <li>All-in-one views (list, board, Gantt, docs, dashboards) reduce tool sprawl.</li>
                  <li>Strong automations and templates accelerate onboarding.</li>
                  <li>Docs and whiteboards keep strategy close to execution.</li>
                  <li>Agile features (sprints, burndown, workload) built-in.</li>
                  <li>Competitive pricing versus many PM + doc suites.</li>
                  <li>Granular permissions and SSO on upper tiers for governance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Interface can feel busy; teams need onboarding to set norms.</li>
                  <li>Advanced automation limits require Business tiers.</li>
                  <li>Heavy workspaces may need performance tuning and hierarchy cleanup.</li>
                  <li>Docs are improving but not as advanced as Notion for complex databases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              ClickUp competes with modern PM suites and doc+task hybrids. Choose based on simplicity needs, automation depth, and reporting requirements.
            </p>
            <p className="mt-2 text-slate-700">All of these handle projects; they differ on UI ease, database/docs strength, and governance.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how ClickUp compares to two leading PM options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/monday-vs-asana-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana is straightforward with polished UI and strong project templates. ClickUp is more configurable with docs, whiteboards, and broader views but needs setup discipline.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ClickUp for all-in-one flexibility and automations; choose Asana for simplicity and fast adoption across non-technical teams.
              </p>
              <p className="mt-2 text-slate-900">Asana wins on ease; ClickUp wins on breadth and price/value per feature.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion/Trello</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/trello-vs-clickup-vs-notion">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion excels at docs + databases; Trello is light kanban. ClickUp offers stronger agile features, dashboards, and automation while keeping boards and docs connected.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ClickUp when you need advanced project delivery; choose Notion for flexible knowledge bases; choose Trello for the simplest campaign boards.
              </p>
              <p className="mt-2 text-slate-900">All integrate with common stacks—pick based on structure needs versus simplicity.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want one workspace for projects, docs, sprints, and reporting. It reduces tool sprawl and keeps teams aligned through automation and dashboards.
            </p>
            <p className="mt-3 text-slate-700">
              If you prefer a lighter UI with minimal setup, Asana or Trello may fit. For doc-heavy workflows, Notion is great. ClickUp balances customization with competitive pricing.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> ClickUp is a robust, budget-friendly choice for cross-functional teams that need depth without stacking multiple tools.
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
              Choose ClickUp if you want a customizable all-in-one hub for tasks, docs, goals, and reporting. It’s strong for teams needing agile features and automation without enterprise costs.
            </p>
            <p>
              Consider Asana or Trello for lightweight adoption, or Notion for doc-first collaboration. ClickUp is the best middle ground when you need breadth and price efficiency.
            </p>
            <p>ClickUp integrates with the tools you already use, keeping updates, assets, and metrics flowing without context switching.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default ClickUpToolPage;
