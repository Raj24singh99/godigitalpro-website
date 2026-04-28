import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers3, ClipboardList, Rocket, Crown, ArrowLeft, Headphones, ChevronDown, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Zoho Desk";
const slug = "zoho-desk";
const category = "Helpdesk & Customer Support";
const shortPitch =
  "Zoho Desk is a helpdesk platform built for teams that want omnichannel ticketing, automations, SLAs, and native alignment with the wider Zoho suite.";
const pricingSummary =
  "Paid tiers starting around $14–$20/agent/month with trials. Zoho One bundling can drop costs further if you use multiple Zoho apps.";
const officialUrl = "https://www.zoho.com/desk/";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/zoho.com",
  gradient: "from-amber-500 via-rose-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.20)]",
};

const alternatives = [
  { name: "Zendesk", slug: "zendesk", isComparison: true },
  { name: "Freshdesk", slug: "freshdesk", isComparison: true },
  { name: "Help Scout", slug: "helpscout" },
  { name: "Intercom", slug: "intercom" },
  { name: "HelpCrunch", slug: "helpcrunch" },
];

const faqs = [
  {
    q: "Is Zoho Desk free?",
    a: "Zoho Desk offers paid plans with trials; there is no full-featured free tier. If you already license Zoho One, Desk is included at excellent value.",
  },
  {
    q: "Does Zoho Desk work well for agencies?",
    a: "Yes. Agencies use Zoho Desk to centralize client requests, SLAs, and approvals while syncing context to Zoho CRM/Projects/Books for billing and reporting.",
  },
  {
    q: "Which Zoho Desk plan is best for beginners?",
    a: "Start with Standard if you need email ticketing, SLAs, and a basic knowledge base. Professional adds telephony, chat, and more automation. Enterprise unlocks advanced AI (Zia), guided mode, and deeper customization.",
  },
  {
    q: "Can I use Zoho Desk for client projects?",
    a: "Absolutely. You can manage client tickets, approvals, and SLAs, and push context to Zoho Projects, CRM, or Books for project tracking and invoicing.",
  },
  {
    q: "Does Zoho Desk integrate with CRM and marketing tools?",
    a: "Yes. Zoho Desk integrates natively with Zoho CRM, Books, Projects, and Analytics. It also connects to Slack, Jira, Zapier, and third-party tools, though the marketplace is smaller than Zendesk’s.",
  },
  {
    q: "Is Zoho Desk secure and compliant?",
    a: "Zoho Desk provides role-based access, IP restrictions, encryption, SSO, and audit logs. Zoho maintains strong compliance posture, with data center options by region.",
  },
  {
    q: "Is Zoho Desk good for automation and AI?",
    a: "Zoho Desk supports workflows, macros, SLAs, and assignment rules. Enterprise tiers add Zia AI for suggestions, sentiment detection, and auto-tagging.",
  },
  {
    q: "How does Zoho Desk compare to Zendesk or Freshdesk?",
    a: "Zoho Desk is most attractive if you already run Zoho apps or Zoho One. Zendesk is deeper on marketplace and omnichannel, while Freshdesk balances affordability and breadth for SMB/mid-market.",
  },
];

const featureBlocks = [
  {
    icon: <Headphones className="h-5 w-5 text-amber-600" />,
    title: "Omnichannel support with suite alignment",
    body: "Handle email, chat, phone, web, and social tickets in one workspace, pulling customer context from Zoho CRM and sending updates back automatically.",
  },
  {
    icon: <ClipboardList className="h-5 w-5 text-emerald-700" />,
    title: "Automations, SLAs, and routing",
    body: "Rules, blueprints, assignment, and SLAs keep tickets moving. Guided mode helps reps focus on the right next ticket to maintain response targets.",
  },
  {
    icon: <Layers3 className="h-5 w-5 text-indigo-600" />,
    title: "Knowledge base and self-serve",
    body: "Multi-brand help centers, embeddable widgets, and community forums reduce incoming volume while keeping content tied to ticket deflection metrics.",
  },
  {
    icon: <Plug className="h-5 w-5 text-sky-600" />,
    title: "Integrations and marketplace",
    body: "Native Zoho integrations plus connectors for Jira, Slack, Microsoft Teams, and Zapier. Marketplace is smaller than Zendesk’s but covers most workflows.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
    title: "Admin controls and security",
    body: "Roles, profiles, IP restrictions, data retention controls, and SSO keep governance tight for distributed teams.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-rose-600" />,
    title: "AI and analytics",
    body: "Dashboards, live traffic views, and Zia AI (Enterprise) offer suggestions, anomaly detection, and sentiment, helping teams prioritize and improve CSAT.",
  },
];

const pricingTable = [
  { plan: "Standard", best: "Lean teams starting with omnichannel", limits: "Email ticketing, SLAs, basic KB, multi-department", price: "~$14–$20/agent/mo" },
  { plan: "Professional", best: "Growing teams needing more channels", limits: "Chat/telephony, advanced automation, multi-brand help center", price: "~$23+/agent/mo" },
  { plan: "Enterprise / Zoho One", best: "Teams wanting AI, guidance, and suite savings", limits: "Zia AI, guided mode, custom functions; bundle via Zoho One", price: "Higher / bundled" },
];

const comparisons = [
  {
    title: "Zendesk vs Freshdesk vs Zoho Desk",
    summary: "See how Zoho Desk stacks up on omnichannel depth, automations, and value.",
    href: "/tools/compare/zendesk-vs-freshdesk-vs-zoho-desk",
  },
  {
    title: "Zoho Desk vs Zendesk",
    summary: "Head-to-head on marketplace depth, suite alignment, and pricing.",
    href: "/tools/compare/zoho-desk-vs-zendesk",
  },
];

function ZohoDeskPage() {
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
        "Zoho Desk gives marketers and support teams a modern helpdesk that aligns tightly with Zoho CRM, Projects, Books, and Analytics. It offers omnichannel ticketing, automation, and AI-assisted routing at strong value—especially when bundled via Zoho One.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description={`${toolName} is a helpdesk platform with omnichannel ticketing, automation, AI, and native Zoho suite alignment. Learn pricing, pros/cons, and best alternatives.`}
        canonical={canonical}
        keywords={`${toolName}, Zoho Desk review, Zoho Desk pricing, Zoho Desk vs Zendesk, helpdesk software, ${toolName} alternatives`}
        schema={[productSchema, faqSchema]}
      />

      <main className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/70 via-orange-50 to-emerald-50" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-16 pt-12 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Helpdesk & Support</p>
              <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} review: suite-aligned helpdesk for serious SLAs
              </h1>
              <p className="text-lg text-slate-700">{shortPitch}</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">Category: {category}</span>
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">Pricing: {pricingSummary}</span>
                <span className="rounded-full bg-white px-3 py-1 ring-1 ring-amber-200">Rating: {ratingValue}/5</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={officialUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Visit {toolName}
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-rose-500 to-emerald-500 p-1 shadow-xl">
              <div className="absolute inset-0 opacity-40 blur-2xl" />
              <div className="relative flex flex-col gap-3 rounded-2xl bg-white/90 p-5 shadow-inner ring-1 ring-white/40 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 via-rose-500 to-emerald-500 shadow-inner" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{category}</p>
                    <p className="text-lg font-bold text-slate-900">{toolName}</p>
                    <p className="text-sm text-slate-600">Built for teams on the Zoho suite</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <div className="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-100">
                    <p className="font-semibold text-amber-800">Best for</p>
                    <p>Teams using Zoho CRM/One</p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                    <p className="font-semibold text-emerald-800">Pricing</p>
                    <p>Starts ~$14–$20/agent/mo</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                    <p className="font-semibold text-slate-900">Channels</p>
                    <p>Email, chat, phone, social</p>
                  </div>
                  <div className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100">
                    <p className="font-semibold text-rose-700">AI (Zia)</p>
                    <p>Suggestions & sentiment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--features bg-slate-50/80">
          <div className="mx-auto max-w-6xl px-6 py-12 space-y-6">
            <div className="flex items-center gap-2 text-amber-700">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Why teams pick {toolName}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {featureBlocks.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex items-center gap-2 text-amber-700">
              <Crown className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">{toolName} pricing</p>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">How {toolName} is priced</h2>
            <p className="mt-3 text-slate-700">
              Zoho Desk is seat-based with tiers that unlock more channels, automation, and AI. If you already pay for Zoho One, Desk becomes one of the best-value helpdesks in the market.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">What you get</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 ? "bg-slate-50/60" : ""}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3 text-slate-800">{row.best}</td>
                      <td className="px-4 py-3 text-slate-800">{row.limits}</td>
                      <td className="px-4 py-3 text-slate-800">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Tip: Evaluate Zoho One if you already plan to run Zoho CRM, Books, Projects, or Analytics—Desk licensing is bundled and often cheaper than standalone per-seat pricing.
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
                  <li>Tight alignment with Zoho CRM, Projects, Books, and Analytics—strong if you already use the suite.</li>
                  <li>Solid automations, SLAs, and assignment rules with guided mode to keep agents focused.</li>
                  <li>Good value, especially via Zoho One bundle.</li>
                  <li>Multi-brand knowledge bases and embeddable widgets reduce volume.</li>
                  <li>Zia AI adds sentiment, suggestions, and anomaly alerts on Enterprise tiers.</li>
                  <li>Role-based access, audit logs, and IP restrictions for governance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Marketplace is smaller than Zendesk’s; some advanced apps require workarounds.</li>
                  <li>Interface can feel busy when many modules are enabled.</li>
                  <li>Full AI features are limited to Enterprise tiers.</li>
                  <li>Best value is with Zoho One; standalone pricing is competitive but less compelling if you do not use other Zoho tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Zoho Desk shines with Zoho suite alignment, but teams often compare it against other omnichannel helpdesks or messenger-led tools. Each option differs on marketplace depth, ease of rollout, and pricing.
            </p>
            <p className="mt-2 text-slate-700">Explore these if you need stronger marketplace breadth, lighter UIs, or deeper in-app messaging.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div
                  key={alt.slug}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Popular alternative in the same space."}</p>
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
          <div className="mx-auto max-w-5xl space-y-6 px-6 py-12">
            <div className="flex items-center gap-2 text-amber-700">
              <Layers3 className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em]">Zoho Desk vs other tools</p>
            </div>
            <p className="text-slate-700">
              Need a direct comparison? Start here. These walkthroughs cover omnichannel features, automations, pricing, and which teams should pick {toolName}.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {comparisons.map((comp) => (
                <div key={comp.href} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{comp.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{comp.summary}</p>
                  <a className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-500" href={comp.href}>
                    Open comparison
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--use bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-3 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Who should pick {toolName}?</h2>
            <p>
              Choose {toolName} if you already rely on Zoho CRM/Projects/Books or want strong value through Zoho One. It also fits teams needing clear SLAs, guided work queues, and self-serve that reduces ticket load.
            </p>
            <p>
              Consider Zendesk if you need the deepest marketplace and enterprise omnichannel; consider Freshdesk for strong value with broad channels; choose Intercom if in-app messaging is core to your model.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, start with a trial and connect it to your CRM early to get the best context in every ticket.
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
              {toolName} is a great fit for teams on the Zoho suite who want omnichannel ticketing, SLAs, and AI-guided workflows without paying enterprise premiums. Its value compounds if you bundle with Zoho One.
            </p>
            <p>
              If you rely heavily on third-party apps, Zendesk still wins on marketplace depth. For lighter UI with broad channels, Freshdesk is a strong alternative. For messenger-first teams, Intercom is worth a look.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to see it in action? <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default ZohoDeskPage;
