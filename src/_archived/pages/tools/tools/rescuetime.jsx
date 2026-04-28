import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Clock, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "RescueTime";
const slug = "rescuetime";
const category = "Productivity & Focus";
const shortPitch = "RescueTime tracks time spent across apps and sites, offering focus goals, alerts, and reports to improve productivity habits.";
const pricingSummary = "Free and paid plans. Paid tiers add deeper reports, focus sessions, alerts, and goal tracking with more historical data.";
const officialUrl = "https://www.rescuetime.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/rescuetime.com",
  gradient: "from-indigo-500 via-blue-500 to-slate-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.22)]",
};

const alternatives = [
  { name: "Toggl Track", slug: "toggl-track" },
  { name: "Clockify", slug: "clockify" },
  { name: "Timing", slug: "timing" },
  { name: "Freedom", slug: "freedom" },
  { name: "Focusmate", slug: "focusmate" },
];

const faqs = [
  { q: "What is RescueTime?", a: "RescueTime is a productivity and time-tracking app that monitors app/website usage, sets goals, and provides focus tools." },
  { q: "Who is it for?", a: "Knowledge workers, students, and teams looking to understand time habits and reduce distractions." },
  { q: "Does it block distractions?", a: "Focus sessions can limit distracting sites/apps during set periods." },
  { q: "How is pricing structured?", a: "Free and paid tiers; paid plans add deeper reports, alerts, goals, and more history." },
  { q: "Is data private?", a: "Data is tied to your account; review privacy settings and permissions on each device." },
  { q: "Does it support teams?", a: "Team features exist; verify whether policies fit your org’s privacy guidelines." },
  { q: "Does RescueTime integrate with other tools?", a: "Integrations and calendar connections are available to contextualize focus time." },
  { q: "Is manual entry needed?", a: "Most tracking is automatic; you may still categorize some activities for accuracy." },
];

function RescueTimeToolPage() {
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
        "RescueTime tracks digital activity to surface time habits, focus opportunities, and distraction alerts, helping people build better routines.",
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
      icon: <Clock className="h-5 w-5 text-indigo-500" />,
      title: "Automatic time tracking",
      body: "Track app and website usage to understand where time goes.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Focus sessions",
      body: "Schedule focus time with distraction blocking and timers.",
    },
    {
      icon: <Bell className="h-5 w-5 text-rose-500" />,
      title: "Alerts & goals",
      body: "Set goals, get alerts on distractions, and celebrate focus streaks.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Reports & insights",
      body: "View productivity trends, categories, and historical data.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Category controls",
      body: "Adjust productivity ratings and categories for accuracy.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect calendars and tools to align focus time with meetings and tasks.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="RescueTime review: pricing, features, pros & cons, and alternatives to help you decide if it fits your productivity stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
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
                  {toolName} surfaces where time goes, helps schedule focus sessions, and nudges you away from distractions to build better habits.
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
              {toolName} is a productivity and focus app that automatically tracks digital activity, highlights distractions, and provides tools like focus sessions and alerts to encourage better routines.
            </p>
            <p className="mt-3 text-slate-700">Use it to understand habits, set goals, and block distractions during deep work.</p>
            <p className="mt-3 text-slate-700">Combine with task managers and calendars to schedule meaningful focus blocks.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for people who want automatic tracking and guided focus support.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Knowledge workers who multitask across apps.",
                "Students needing accountability for study sessions.",
                "Remote teams that want time visibility and goals.",
                "Freelancers monitoring productivity trends.",
                "Managers coaching teams on distraction habits (with consent).",
                "Anyone pairing focus blocks with alerts and reports.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on automatic tracking, focus sessions, alerts, category controls, and integrations to inform better habits.
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
                  Free and paid tiers. Paid plans add focus sessions, advanced alerts, more history, and deeper reports. Team plans may include admin controls and shared metrics.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test tracking quality; upgrade if you need focus sessions, alerts, or longer history.</p>
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
                    <td className="px-4 py-3">Personal tracking</td>
                    <td className="px-4 py-3">Automatic tracking, basic reports</td>
                    <td className="px-4 py-3">Good for habit awareness</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Serious focus users</td>
                    <td className="px-4 py-3">Focus sessions, alerts, deeper history</td>
                    <td className="px-4 py-3">Fits most individuals</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Managers & teams</td>
                    <td className="px-4 py-3">Team metrics, admin controls, support</td>
                    <td className="px-4 py-3">Ensure privacy policies are clear</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Consider privacy expectations and opt-in when using team plans. Balance blocking with realistic workloads.</p>
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
                  <li>Automatic time tracking across apps/sites.</li>
                  <li>Focus sessions and distraction blocking.</li>
                  <li>Goals, alerts, and streaks to encourage habits.</li>
                  <li>Custom categories for accuracy.</li>
                  <li>Integrations with calendars and other tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Privacy considerations for teams and shared data.</li>
                  <li>Automatic tracking may miss context without categorization.</li>
                  <li>Focus blocking can interrupt necessary tasks if misconfigured.</li>
                  <li>Long-term motivation still depends on personal habits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other focus and time-tracking tools to match your needs.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other productivity apps.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Toggl Track</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/toggl-track">
                  View Toggl Track
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Toggl is manual/interval-based time tracking; {toolName} is automatic with focus tools. Choose based on whether you need timesheets or automatic habit tracking.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Freedom</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/freedom">
                  View Freedom
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Freedom focuses on blocking distractions; {toolName} combines tracking with blocking and reporting. Pick based on whether you want pure blocking or insights plus goals.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want automatic tracking, focus sessions, and alerts to build better work habits.
            </p>
            <p className="mt-3 text-slate-700">Respect privacy and categorize activities for accuracy; it’s a guide, not a substitute for discipline.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A useful productivity companion; best when paired with realistic goals and regular review of reports.</p>
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
            <p>Choose {toolName} if you want automatic tracking plus focus tools to build better daily habits.</p>
            <p>Consider Toggl for manual timekeeping or Freedom for pure blocking; use {toolName} when insights and coaching matter.</p>
            <p>{toolName} helps surface distraction patterns—pair it with personal discipline and team transparency if used at work.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default RescueTimeToolPage;
