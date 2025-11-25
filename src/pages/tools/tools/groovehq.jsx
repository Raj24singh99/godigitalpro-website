import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GrooveHQ";
const slug = "groovehq";
const category = "Help Desk & Shared Inbox";
const shortPitch =
  "GrooveHQ is a shared inbox and help desk for small teams, with email, live chat, knowledge base, automation, and reporting.";
const pricingSummary = "Tiered pricing per user with limits by mailbox, features, and automation depth; free trial available.";
const officialUrl = "https://www.groovehq.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/groovehq.com",
  gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Help Scout", slug: "helpscout" },
  { name: "Freshdesk", slug: "freshdesk" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Intercom", slug: "intercom" },
  { name: "HelpCrunch", slug: "helpcrunch" },
];

const faqs = [
  {
    q: "What is GrooveHQ?",
    a: "GrooveHQ is a shared inbox and help desk platform offering email management, live chat, knowledge base, automation, and reporting for small to midsize teams.",
  },
  {
    q: "Who is it for?",
    a: "Support and success teams that want a simpler alternative to heavyweight enterprise help desks.",
  },
  {
    q: "Does it support live chat?",
    a: "Yes. Groove offers embeddable live chat widgets alongside email and knowledge base tools.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-user pricing with feature differences across tiers. Higher tiers add automation, custom roles, and advanced reporting.",
  },
  {
    q: "Can I build a knowledge base?",
    a: "Yes. You can publish help center articles, categorize them, and surface them in chat and email responses.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Yes. Integrations include CRMs, commerce platforms, and analytics so agents see customer context.",
  },
  {
    q: "How does it compare to Zendesk?",
    a: "Groove is lighter and easier to onboard; Zendesk is more configurable for complex enterprises.",
  },
  {
    q: "Is there SLA or enterprise support?",
    a: "Higher tiers add priority support and security controls, but heavy enterprise IT requirements may still favor bigger suites.",
  },
];

function GroovehqToolPage() {
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
        "GrooveHQ simplifies support with a shared inbox, chat, and knowledge base for small teams. It is approachable and lighter than enterprise help desks while covering core workflows.",
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
      title: "Shared inbox",
      body: "Collaborate on email queues with assignments, collision detection, and internal notes.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automation",
      body: "Rules, canned replies, SLAs, and tagging to speed up responses and triage.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Knowledge base",
      body: "Publish help docs, embed search, and surface suggestions in chat and email.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Live chat",
      body: "Embed chat widgets to support customers in real time alongside email.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reporting",
      body: "Track response times, volumes, CSAT, and agent performance metrics.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect commerce, CRM, and analytics tools to bring context into the inbox.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GrooveHQ review: pricing, features, pros & cons, and alternatives so you can choose the right help desk for your team."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
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
                  {toolName} keeps support workflows simple: shared inbox, chat, and a knowledge base without the weight of enterprise help desks.
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
              {toolName} is a help desk and shared inbox platform built for small to midsize teams. It covers email, live chat, knowledge base, automation rules, and reporting to keep customer support organized and responsive.
            </p>
            <p className="mt-3 text-slate-700">
              It aims to stay approachable compared to enterprise suites, while still offering the automations and integrations needed for modern support teams.
            </p>
            <p className="mt-3 text-slate-700">Use it to centralize customer conversations and reduce tab-switching between tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Ideal for lean support and success teams that want clarity without enterprise overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SaaS startups needing a clear shared inbox and chat.",
                "Ecommerce brands supporting customers across email and live chat.",
                "Teams moving off Gmail/Outlook into a structured help desk.",
                "Support leaders wanting faster onboarding than heavyweight suites.",
                "Companies that value knowledge base deflection and automation.",
                "Teams integrating support context with commerce or CRM tools.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on a clean shared inbox, chat, automation, and knowledge base.</p>
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
                  Pricing is per user with feature and mailbox limits by tier. Higher tiers add automation, reporting depth, roles, and security. A free trial is offered; annual billing typically lowers effective cost.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the middle tier if you need automation and chat; upgrade for advanced reporting or more mailboxes.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower tier</td>
                    <td className="px-4 py-3">Small teams, basic inbox</td>
                    <td className="px-4 py-3">Shared inbox, basic automation, limited mailboxes</td>
                    <td className="px-4 py-3">Trial Groove fit and workflow</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Mid</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Chat, stronger automation, reporting</td>
                    <td className="px-4 py-3">Likely sweet spot for most teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Advanced</td>
                    <td className="px-4 py-3">Teams needing scale and control</td>
                    <td className="px-4 py-3">Advanced analytics, roles, security, higher limits</td>
                    <td className="px-4 py-3">Consider if you need strict SLAs or more mailboxes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in email domain setup and agent onboarding time. If you need deeper CRM context, plan for integrations or side-by-side tools.
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
                  <li>Clean shared inbox with easy onboarding.</li>
                  <li>Chat, knowledge base, and automation included.</li>
                  <li>Integrations bring customer context into tickets.</li>
                  <li>Good reporting for response and resolution metrics.</li>
                  <li>Less complex than heavyweight enterprise suites.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Feature depth lighter than enterprise help desks.</li>
                  <li>Advanced workflows or custom objects may be limited.</li>
                  <li>Automation/routing less granular than Zendesk/Intercom.</li>
                  <li>Best fit for small/mid teams rather than complex orgs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other help desk platforms to match complexity and cost.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other help desks.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Help Scout</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/helpscout">
                  View Help Scout
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Help Scout has strong docs and workflows for small teams; {toolName} is similarly simple with bundled chat and automation. Compare UI, reporting depth, and channel coverage for your team.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zendesk</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/zendesk">
                  View Zendesk
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zendesk is more configurable for complex orgs; {toolName} is lighter and faster to onboard. Choose Zendesk for advanced routing/SLAs, {toolName} for simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a clean shared inbox with chat and a knowledge base without the overhead of enterprise support suites.
            </p>
            <p className="mt-3 text-slate-700">If you need deep omnichannel routing, complex objects, or custom SLAs, consider Zendesk or Intercom.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong pick for lean teams needing approachable support tools; grows well until highly complex workflows emerge.
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
            <p>Choose {toolName} if you want a streamlined help desk with shared inbox, chat, and knowledge base for small teams.</p>
            <p>Pick Zendesk or Freshdesk if you need deeper enterprise workflows or broader omnichannel support.</p>
            <p>{toolName} is strongest when paired with clear macros, documentation, and integrations that surface customer context.</p>
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

export default GroovehqToolPage;
