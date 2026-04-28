import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "nTask";
const slug = "ntask";
const category = "Project Management";
const shortPitch = "nTask is a project management platform that combines tasks, boards, Gantt charts, issues, risks, time tracking, and collaboration in one workspace.";
const pricingSummary = "Free and paid tiers billed per user/month. Higher plans add Gantt, custom fields, risks/issues, time tracking, and reporting.";
const officialUrl = "https://www.ntaskmanager.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/ntaskmanager.com",
  gradient: "from-emerald-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Asana", slug: "asana" },
  { name: "Trello", slug: "trello" },
  { name: "Monday.com", slug: "monday" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Jira", slug: "jira" },
];

const faqs = [
  { q: "What is nTask?", a: "nTask is a project management tool that combines task lists, boards, Gantt charts, issues, risks, timesheets, and collaboration features." },
  { q: "Does nTask have a free plan?", a: "Yes. There is a free plan with core tasks and limited users; paid tiers add advanced features and more storage." },
  { q: "Can I track time?", a: "Yes. Time tracking and timesheets are available on paid plans to capture billable and non-billable hours." },
  { q: "Does it support agile workflows?", a: "You can manage boards and sprints; for deep agile reporting, tools like Jira may still be preferable." },
  { q: "Are there integrations?", a: "nTask integrates with Slack, Google Calendar, Outlook, and Zapier for additional workflows." },
  { q: "How is security handled?", a: "Workspaces support role permissions and authentication; review their security page for compliance details." },
  { q: "Can I manage risks and issues?", a: "Yes. Dedicated modules let you log risks and issues with owners, statuses, and mitigation plans." },
  { q: "Is there mobile support?", a: "nTask offers mobile apps so teams can update tasks and time on the go." },
];

function NTaskToolPage() {
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
        "nTask centralizes tasks, boards, time tracking, risks, issues, and collaboration. It suits small to midsize teams that want an all-in-one PM tool without heavy configuration.",
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
    { icon: <Sparkles className="h-5 w-5 text-emerald-500" />, title: "Tasks & projects", body: "List, board, and Gantt views with assignments, due dates, and dependencies." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Issues & risks", body: "Dedicated modules to log, prioritize, and resolve issues and risks with owners." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Time tracking", body: "Capture time, approve timesheets, and export logs for billing or payroll." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Collaboration", body: "Comments, file attachments, and meeting agendas keep teams aligned." },
    { icon: <Rocket className="h-5 w-5 text-amber-500" />, title: "Automations", body: "Reminders, recurring tasks, and integrations streamline routine work." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Permissions", body: "Roles and workspace permissions help control access and edits." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="nTask review: pricing, features, pros & cons, and alternatives to decide if its all-in-one project management fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} brings tasks, time, issues, and risks together. It is straightforward enough for small teams yet covers common PM needs without heavy setup.
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
              {toolName} is an all-in-one project management platform. It combines tasks, Gantt charts, boards, issues, risks, meeting agendas, and time tracking so teams can manage delivery from planning through execution.
            </p>
            <p className="mt-3 text-slate-700">
              It targets teams that need more structure than simple boards but less complexity than enterprise systems. Templates, recurring tasks, and integrations make it straightforward to deploy without heavy admin work.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to centralize work, log risks, and keep time entries tied to projects. For specialized needs like deep agile metrics or portfolio planning, you may still need a complementary tool.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for small to midsize teams that want PM, time, and risk tracking in one place.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies tracking client projects, hours, and risks.",
                "Product and engineering teams needing tasks, boards, and sprints.",
                "Operations teams running recurring checklists and approvals.",
                "Consultancies that need timesheets and billing exports.",
                "Cross-functional teams managing issues and dependencies.",
                "Teams upgrading from spreadsheets to a structured PM tool.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
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
              {toolName} focuses on project delivery—tasks, issues, time, and collaboration—without heavy setup overhead.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing is per user per month with a free tier for small teams. Higher tiers add advanced PM features, custom fields, time tracking, risk registers, and reporting. Confirm current prices and annual discounts.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "Free",
                  price: "$0",
                  detail: "Tasks, boards, basic collaboration for small teams.",
                  bestFor: "Personal or very small teams testing the platform.",
                },
                {
                  name: "Premium",
                  price: "$ per user",
                  detail: "Gantt, recurring tasks, custom fields, time tracking, risks/issues.",
                  bestFor: "Growing teams needing structure and timesheets.",
                },
                {
                  name: "Business/Enterprise",
                  price: "Custom",
                  detail: "Advanced permissions, SLAs, dedicated support, and security options.",
                  bestFor: "Larger organizations with compliance needs.",
                },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Buying tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Start on monthly billing to validate adoption. Track time-tracking usage and storage before moving to annual commitments.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>All-in-one tasks, time, issues, risks, and collaboration.</li>
                  <li>Straightforward setup with templates and recurring tasks.</li>
                  <li>Per-user pricing with a usable free tier to start.</li>
                  <li>Integrations with Slack and calendars for reminders.</li>
                  <li>Gantt and board views for planning and execution.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Less depth in agile metrics compared to Jira or ClickUp.</li>
                  <li>Advanced reporting options are lighter than enterprise PM tools.</li>
                  <li>Limited customization compared to highly configurable suites.</li>
                  <li>Performance can vary with very large workspaces.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need deeper agile, heavier automation, or a different price point.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">Project management alternative</p>
                  </div>
                  <Link className="text-sm font-semibold text-emerald-700 hover:text-emerald-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">nTask vs other PM tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "nTask vs Asana",
                  betterFor: "Asana has broader ecosystem and workflows; nTask bundles time, risks, and issues more tightly.",
                  choose: "Pick nTask for built-in time/risk tracking. Pick Asana for polished UX and broader integrations.",
                },
                {
                  title: "nTask vs ClickUp",
                  betterFor: "ClickUp is highly customizable; nTask is simpler to set up.",
                  choose: "Pick nTask if you want less configuration. Pick ClickUp for heavy customization and automation.",
                },
                {
                  title: "nTask vs Jira",
                  betterFor: "Jira excels at software teams and agile reporting; nTask is lighter and easier for mixed teams.",
                  choose: "Pick nTask for general projects. Pick Jira for software teams needing deep sprint metrics.",
                },
                {
                  title: "nTask vs Trello",
                  betterFor: "Trello is simple boards; nTask offers time tracking, issues, risks, and Gantt.",
                  choose: "Pick nTask if you need schedules and time logs. Pick Trello for lightweight boards only.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a balanced PM tool with time and risk tracking without the complexity of enterprise suites. Ensure your team adopts time tracking and issues modules; otherwise simpler tools may suffice.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Pilot with one project and enforce time tracking to validate reports.",
                "Define risk and issue categories early to keep data clean.",
                "Use recurring tasks and templates to standardize delivery.",
                "Measure adoption across boards, Gantt, and timesheets before scaling.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} suits teams that need structured tasks, time tracking, risks, and issues in one tool without enterprise overhead. If you need deeper agile analytics or heavy customization, consider pairing with Jira or ClickUp—otherwise nTask is a practical all-rounder.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} fits your workflow, explore a trial here:{" "}
                  <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default NTaskToolPage;
