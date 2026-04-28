import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hive";
const slug = "hive";
const category = "Project Management";
const shortPitch =
  "Hive is a project management and collaboration platform with tasks, automations, time tracking, proofing, and reporting for teams.";
const pricingSummary =
  "Free tier with basics; paid plans add automations, time tracking, proofing, analytics, and user permissions. Enterprise offers SSO and advanced controls.";
const officialUrl = "https://www.hive.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hive.com",
  gradient: "from-amber-500 via-orange-500 to-yellow-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Asana", slug: "asana" },
  { name: "Trello", slug: "trello" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Monday.com", slug: "monday" },
  { name: "Wrike", slug: "wrike" },
];

const faqs = [
  {
    q: "What is Hive?",
    a: "Hive is a project management and collaboration platform with tasks, views, automations, proofing, time tracking, and reporting.",
  },
  {
    q: "Who is it for?",
    a: "Marketing, ops, and product teams that need collaborative tasks with proofing and time tracking in one place.",
  },
  {
    q: "Does Hive offer multiple views?",
    a: "Yes. Kanban, Gantt, table, calendar, and summary views are supported.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier for basics; paid plans add automations, analytics, proofing, time tracking, and SSO on enterprise.",
  },
  {
    q: "Does it include approvals/proofing?",
    a: "Yes. Proofing/approvals help review creative assets within Hive.",
  },
  {
    q: "Is there time tracking?",
    a: "Time tracking and resourcing are available on paid plans.",
  },
  {
    q: "Can I automate tasks?",
    a: "Yes. Hive Automate supports triggers and actions across tools.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Integrations exist for messaging, storage, and productivity apps via native connectors and Automate.",
  },
];

function HiveToolPage() {
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
        "Hive combines tasks, proofing, and automations to keep projects on track. It fits teams that want PM plus creative review without heavy setup.",
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
      title: "Task views",
      body: "Switch between Kanban, Gantt, calendar, table, and summary views.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automations",
      body: "Automate workflows with triggers, approvals, and notifications.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Proofing & approvals",
      body: "Review creative assets, add comments, and track approvals in one place.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Time tracking",
      body: "Log time on tasks and monitor effort for billing or reporting.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Analytics",
      body: "Project and team dashboards for status, workload, and progress.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect storage, chat, and productivity tools to reduce switching.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hive review: pricing, features, pros & cons, and alternatives to help you choose the right project management platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} blends tasks, automations, proofing, and time tracking—handy for teams that need PM plus creative review in one place.
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
              {toolName} is a collaborative project management tool that combines tasks, automations, proofing, and time tracking. It aims to reduce tool sprawl for teams running marketing, ops, and product projects.
            </p>
            <p className="mt-3 text-slate-700">Multiple views, approvals, and analytics help teams stay aligned on priorities and delivery.</p>
            <p className="mt-3 text-slate-700">Use it to centralize work and reduce back-and-forth across separate PM and proofing tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Good fit for teams that manage creative and operational projects together.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams needing proofing plus task management.",
                "Ops teams automating workflows and approvals.",
                "Product teams planning with Gantt/roadmap views.",
                "Agencies tracking time and approvals in one tool.",
                "Teams wanting built-in dashboards for status reporting.",
                "Managers needing multi-view flexibility for stakeholders.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on project execution, automations, proofing, and analytics.</p>
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
                  Free tier includes core tasks and views. Paid plans add automations, time tracking, proofing, permissions, and analytics. Enterprise adds SSO, advanced security, and dedicated support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free to validate views and tasks; upgrade when you need automations, proofing, or time tracking.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Light teams</td>
                    <td className="px-4 py-3">Tasks, basic views, limited automations</td>
                    <td className="px-4 py-3">Good starter</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams/Pro</td>
                    <td className="px-4 py-3">Active teams</td>
                    <td className="px-4 py-3">Automations, proofing, time, analytics</td>
                    <td className="px-4 py-3">Likely sweet spot</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs</td>
                    <td className="px-4 py-3">SSO, security controls, support</td>
                    <td className="px-4 py-3">Engage sales for pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for user onboarding and governance—automations and permissions benefit from clear processes.</p>
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
                  <li>Multiple views suit different teams.</li>
                  <li>Built-in proofing and approvals for creative work.</li>
                  <li>Automations reduce manual task updates.</li>
                  <li>Time tracking and analytics aid reporting.</li>
                  <li>Integrations connect chat/storage tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced automations need setup/governance.</li>
                  <li>Free tier is limited for larger teams.</li>
                  <li>May overlap with existing tools (proofing/time) in your stack.</li>
                  <li>Adoption requires change management across views and workflows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other project management platforms.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other PM platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/asana">
                  View Asana
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana excels at work management and templates; {toolName} adds proofing/time tracking. Choose Asana for broad PM adoption, {toolName} if proofing/time are central to your workflow.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ClickUp</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/clickup">
                  View ClickUp
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ClickUp is highly customizable with many features; {toolName} focuses on simpler setup with built-in proofing/time. Choose ClickUp for extreme flexibility, {toolName} for faster onboarding around creative workflows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need PM with built-in proofing, automations, and time tracking to streamline creative and operational projects.
            </p>
            <p className="mt-3 text-slate-700">If you already have specialized proofing or time tools, weigh overlap vs consolidation.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical choice for teams blending PM and creative review—plan onboarding and governance to maximize automations.
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
            <p>Choose {toolName} if you want project management with proofing, automations, and time tracking under one roof.</p>
            <p>Pick Asana/Trello for lighter PM, or ClickUp/Monday for deeper customization; Wrike for enterprise needs.</p>
            <p>{toolName} works best when you define clear workflows and train teams on automations and approvals.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default HiveToolPage;
