import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Motion AI";
const slug = "motion-ai";
const category = "Scheduling & Task Automation";
const shortPitch = "Motion AI auto-schedules tasks, meetings, and projects with a calendar and task manager that adapts to priorities and deadlines.";
const pricingSummary = "Subscription plans by user count. Higher tiers add team features, collaboration, and advanced project scheduling.";
const officialUrl = "https://www.usemotion.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/usemotion.com",
  gradient: "from-emerald-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Reclaim", slug: "reclaim" },
  { name: "Clockwise", slug: "clockwise" },
  { name: "Todoist", slug: "todoist-business" },
  { name: "Asana", slug: "asana" },
  { name: "ClickUp", slug: "clickup" },
];

const faqs = [
  { q: "What is Motion AI?", a: "Motion AI is an AI-assisted calendar and task manager that auto-schedules tasks, meetings, and projects based on priorities and deadlines." },
  { q: "Who is it for?", a: "Individuals and teams who want automated scheduling and task planning without manual calendar juggling." },
  { q: "Does it integrate with calendars?", a: "Yes. It syncs with major calendars to schedule tasks around meetings." },
  { q: "Can teams collaborate?", a: "Team plans support shared projects, assignments, and visibility into workloads." },
  { q: "Does it handle deadlines?", a: "Yes. Tasks are scheduled automatically to meet deadlines and reprioritized as conflicts arise." },
  { q: "Is there a mobile app?", a: "Motion offers web and mobile apps; check platform availability by OS." },
  { q: "How does privacy work?", a: "Calendar and task data are used for scheduling; review security and privacy policies for your organization." },
  { q: "Can I override scheduling?", a: "Yes. You can lock events, adjust task durations, and reschedule manually when needed." },
];

function MotionAiToolPage() {
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
        "Motion AI automates scheduling for tasks and meetings, reshuffling calendars to meet deadlines. It suits individuals and teams that want planning handled automatically.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Auto-scheduling", body: "Automatically schedules tasks into your calendar based on priorities and deadlines." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Calendar integration", body: "Syncs with your calendars to avoid conflicts and place tasks around meetings." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Project planning", body: "Break down projects into tasks and let Motion schedule them over time." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Rescheduling & conflicts", body: "Automatically reshuffles tasks when meetings appear or priorities change." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Team features", body: "Assign tasks, view workloads, and align schedules across team members (on team plans)." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Controls & overrides", body: "Lock events, adjust durations, and manually move items when needed." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Motion AI review: pricing, features, pros & cons, and alternatives so you can decide if automated scheduling suits your workflow."
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
                  {toolName} automates scheduling so you can focus on work. Lock key events and let Motion reshuffle the rest as priorities shift.
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
              {toolName} is an AI-driven calendar and task manager. It schedules tasks into your calendar automatically, reshuffles when conflicts arise, and helps teams coordinate workloads.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to reduce manual planning time, keep deadlines visible, and align individual and team schedules. It complements, rather than replaces, detailed project management for complex work.
            </p>
            <p className="mt-3 text-slate-700">Pair it with your PM tool for task intake, letting Motion handle scheduling in calendars.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for busy professionals and teams that juggle meetings, deadlines, and tasks.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Founders and executives needing auto-prioritized calendars.",
                "Product and engineering teams balancing meetings and deep work.",
                "Consultants coordinating client meetings with deliverables.",
                "Sales teams scheduling follow-ups around calls.",
                "Ops teams aligning tasks across multiple stakeholders.",
                "Remote teams wanting clear visibility into workloads.",
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
              {toolName} focuses on auto-scheduling, calendar sync, team coordination, and control when you need to override decisions.
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
                  {toolName} charges per user with tiers for individuals and teams. Team plans add collaboration, shared projects, and workload views. Choose based on how many people need automated scheduling.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a single-user plan to see fit; upgrade to team plans if you need shared projects and visibility.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Individual</td>
                    <td className="px-4 py-3">Single users</td>
                    <td className="px-4 py-3">Auto-scheduling, calendar sync, task management</td>
                    <td className="px-4 py-3">Great for personal productivity</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Shared projects, assignments, workload view</td>
                    <td className="px-4 py-3">Aligns calendars across members</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Priority support, advanced controls</td>
                    <td className="px-4 py-3">Best when scheduling is mission-critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider how many users need automation and whether you need PM integrations. For complex projects, Motion complements but does not replace full PM tools.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Automates scheduling across tasks and meetings.</li>
                  <li>Reschedules automatically when conflicts appear.</li>
                  <li>Calendar sync reduces manual juggling.</li>
                  <li>Team plans show workloads and assignments.</li>
                  <li>Controls let you lock important events and adjust durations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Needs consistent task input to schedule well.</li>
                  <li>Less suited for detailed project dependencies.</li>
                  <li>Team adoption required to avoid conflicts with other tools.</li>
                  <li>Privacy considerations when sharing calendar/task data.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other scheduling and time-blocking tools to match collaboration needs and calendar behavior.
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
            <p className="text-slate-700">See how {toolName} compares with similar scheduling automation tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Reclaim</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/reclaim">
                  View Reclaim
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Reclaim focuses on smart scheduling for habits and tasks; {toolName} combines tasks, projects, and meetings in one app. Choose based on whether you want an all-in-one task/calendar experience or a scheduling layer on top of other tools.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Clockwise</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/clockwise">
                  View Clockwise
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Clockwise optimizes meeting schedules and focus time; {toolName} schedules tasks plus meetings. Pick Clockwise for meeting optimization, {toolName} for combined task and meeting scheduling.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want automated task and meeting scheduling to protect focus time and hit deadlines without manual calendar work.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure team buy-in for shared projects; keep sensitive tasks private if needed. Use overrides for critical commitments.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong time-blocking and scheduling assistant; best when paired with clear priorities and team alignment.
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
            <p>Use {toolName} to automate scheduling of tasks and meetings, keeping deadlines visible and calendars balanced.</p>
            <p>
              Upgrade if you need team coordination and workload views; keep using your PM tool for detailed dependencies while letting Motion handle scheduling.
            </p>
            <p>{toolName} reduces planning overhead—human prioritization and communication keep it effective.</p>
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

export default MotionAiToolPage;
