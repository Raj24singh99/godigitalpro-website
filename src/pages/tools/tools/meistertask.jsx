import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "MeisterTask";
const slug = "meistertask";
const category = "Task & Project Management";
const shortPitch = "MeisterTask is a kanban-style task management tool with automations, timelines, and integrations for teams that want a visual workflow.";
const pricingSummary = "Plans scale by users and features. Higher tiers add automations, time tracking, timelines, and advanced permissions for teams.";
const officialUrl = "https://www.meistertask.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/meistertask.com",
  gradient: "from-sky-500 via-emerald-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Trello", slug: "trello" },
  { name: "Asana", slug: "asana" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Monday.com", slug: "monday" },
  { name: "Jira", slug: "jira" },
];

const faqs = [
  { q: "What is MeisterTask used for?", a: "MeisterTask is used to manage tasks and projects via kanban boards, automations, and collaboration." },
  { q: "Does it have time tracking?", a: "Yes. Time tracking is available to log work on tasks and support reporting or invoicing." },
  { q: "Can it integrate with other tools?", a: "Yes. Integrations include Slack, GitHub, and others on supported tiers." },
  { q: "Is there a free plan?", a: "A basic plan exists with limited features, good for personal or very small-team use." },
  { q: "Is it good for enterprises?", a: "Business tiers add permissions and controls, but very complex orgs may need heavier PM suites." },
  { q: "Does it have Gantt or timeline views?", a: "Timelines and calendar views are available on higher tiers to plan work visually." },
  { q: "Can I automate tasks?", a: "Yes. Automations can move tasks, assign owners, and trigger actions when statuses change." },
  { q: "Does it handle dependencies?", a: "Dependencies are basic; for complex dependencies, consider more advanced PM tools." },
];

function MeisterTaskToolPage() {
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
        "MeisterTask offers visual boards, automations, and timelines for teams that want structured workflows without complex enterprise project management.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Kanban boards", body: "Organize tasks with columns, checklists, due dates, and tags." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Automations", body: "Automate routine actions like assignments, status changes, and notifications." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Timelines and calendars", body: "Visualize work on timelines and sync with calendars for planning." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect with Slack, GitHub, and other tools to keep updates flowing." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Permissions", body: "Role-based permissions and security on higher plans." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Time tracking", body: "Track time on tasks for reporting and invoicing needs." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="MeisterTask review: pricing, features, pros & cons, and alternatives so you can decide if its kanban workflows fit your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} keeps teams organized with kanban boards, automations, and time tracking—without heavy PM overhead. Add governance on higher tiers as you scale.
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
              {toolName} is a kanban-based project management tool that supports tasks, checklists, due dates, and comments in a clean interface. Automations reduce manual steps, and integrations connect boards to tools like Slack, GitHub, and calendars.
            </p>
            <p className="mt-3 text-slate-700">
              It is lighter than enterprise PM suites, making it best for teams wanting clarity and speed without complex configuration. Timelines and time tracking help with planning and accountability.
            </p>
            <p className="mt-3 text-slate-700">Use it to manage sprints, content calendars, client projects, and internal ops with minimal overhead.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Good fit for teams that want kanban simplicity with helpful automations and reporting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product and design teams tracking sprints or feature work.",
                "Agencies managing client projects with boards and automations.",
                "Marketing teams planning campaigns and content calendars.",
                "Ops teams coordinating tasks with checklists and due dates.",
                "Founders looking for a simple task tool over heavy PM suites.",
                "Teams needing time tracking and timelines without complex setup.",
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
            <p className="mt-3 text-slate-700">
              {toolName} centers on visual boards, automations, collaboration, and lightweight reporting to keep teams aligned.
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
                  {toolName} pricing scales by users and features. Higher tiers add automations, time tracking, timelines, and governance. Choose based on team size and how much automation and reporting you need.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Pro for automations and time tracking; move up if you need roles, custom fields, or advanced reporting.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Individuals or very small teams</td>
                    <td className="px-4 py-3">Core boards, limited integrations</td>
                    <td className="px-4 py-3">Good for personal organization</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Most teams</td>
                    <td className="px-4 py-3">Automations, integrations, time tracking</td>
                    <td className="px-4 py-3">Balanced features for daily use</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger teams needing governance</td>
                    <td className="px-4 py-3">Roles, permissions, custom fields, priority support</td>
                    <td className="px-4 py-3">Best for structured organizations</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider reporting needs and dependency complexity. For heavy portfolio management or deep reporting, evaluate if a more advanced PM suite is needed alongside.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Clean kanban boards with helpful automations.</li>
                  <li>Time tracking and timelines support planning.</li>
                  <li>Integrations keep updates connected to other tools.</li>
                  <li>Lower learning curve than heavier PM suites.</li>
                  <li>Supports role-based permissions on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less suited for complex portfolio management.</li>
                  <li>Reporting is lighter than enterprise PM tools.</li>
                  <li>Offline support is limited versus desktop-heavy apps.</li>
                  <li>Advanced dependencies and Gantt features are basic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other task and project tools to balance simplicity, automation, and reporting.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with popular alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trello</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/trello">
                  View Trello
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trello is very lightweight with power-ups; {toolName} adds native automations, time tracking, and timelines. Choose based on whether you need those built-in features and governance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/asana">
                  View Asana
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana offers broader project views, dependencies, and reporting. {toolName} stays focused on kanban simplicity with automations. Pick Asana for complex projects, {toolName} for a faster, lighter workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want kanban simplicity with built-in automations, time tracking, and timelines for planning.
            </p>
            <p className="mt-3 text-slate-700">
              Consider more robust PM tools if you need deep reporting, dependencies, or portfolio management. {toolName} shines when you want speed and clarity with minimal setup.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for teams that value speed and clarity over heavy PM features; ensure it fits your reporting needs.
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
            <p>Use {toolName} for visual boards, automations, and time tracking when you want fast, clean workflows.</p>
            <p>
              Upgrade as your team grows and needs permissions or custom fields; if you need deep portfolio reporting, evaluate alongside more advanced PM tools.
            </p>
            <p>{toolName} keeps teams moving with clarity—governance and reporting choices should follow your growth.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w_full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MeisterTaskToolPage;
