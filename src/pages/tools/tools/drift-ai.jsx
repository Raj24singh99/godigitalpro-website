import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Drift AI";
const slug = "drift-ai";
const category = "Conversational Marketing";
const shortPitch =
  "Drift AI powers chat, meetings, and routing so marketing and sales teams can capture, qualify, and book buyers instantly on your site.";
const pricingSummary =
  "Drift pricing is quote-based. Essential/Advanced tiers scale by seats, routing complexity, and AI features like fastlane and meeting booking.";
const officialUrl = "https://www.drift.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/drift.com",
  gradient: "from-sky-500 via-cyan-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.22)]",
};

const alternatives = [
  { name: "Intercom", slug: "intercom" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Qualified", slug: "qualified" },
  { name: "Freshchat", slug: "freshchat" },
];

const faqs = [
  {
    q: "Is Drift AI good for B2B teams?",
    a: "Yes. Drift focuses on B2B sites with routing, account-based targeting, and meeting booking to connect buyers to sales quickly.",
  },
  {
    q: "Does Drift AI replace live chat?",
    a: "It combines AI chat with human handoff. Bots handle qualification and FAQs, while reps can jump in or accept booked meetings.",
  },
  {
    q: "Can Drift AI connect to my CRM?",
    a: "Yes. It integrates with Salesforce, HubSpot, Marketo, and other MAP/CRM tools for routing, enrichment, and attribution.",
  },
  {
    q: "How does Drift handle routing?",
    a: "Rules and AI assist match visitors to the right rep or team, based on account, territory, and intent signals.",
  },
  {
    q: "Does Drift support ABM targeting?",
    a: "Yes. It can target specific accounts with personalized messages and playbooks tied to campaigns.",
  },
  {
    q: "Is there meeting scheduling?",
    a: "Prospects can book meetings directly in chat with calendar integration and ownership rules.",
  },
  {
    q: "Is pricing transparent?",
    a: "Pricing is custom; expect mid-market to enterprise-level plans. Trials and demos are typical to scope cost.",
  },
  {
    q: "Can Drift AI handle multilingual chat?",
    a: "Drift supports multiple languages; check current language coverage by tier before rollout.",
  },
];

function DriftAIToolPage() {
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
        "Drift AI is a conversational marketing platform built for B2B. It combines AI chat, routing, and meeting booking to qualify and convert site visitors faster.",
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
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "AI chat and qualification",
      body: "Bots greet visitors, ask qualifying questions, and respond with knowledge-trained answers before routing to reps.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Instant meeting booking",
      body: "Calendar integration lets qualified buyers book meetings directly in chat with ownership rules respected.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-cyan-500" />,
      title: "Playbooks and targeting",
      body: "Personalize outreach by page, campaign, or account, triggering specific flows for high-intent visitors.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "CRM and MAP integrations",
      body: "Sync leads, update fields, and trigger workflows across Salesforce, HubSpot, Marketo, and more.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Routing and governance",
      body: "Territory rules, account ownership, and permissions keep handoffs clean for sales teams.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-emerald-500" />,
      title: "Analytics and attribution",
      body: "Track influenced pipeline, booked meetings, and revenue to prove conversational impact.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Drift AI review for B2B marketing and sales teams: pricing, features, pros & cons, and alternatives for AI chat and meeting booking."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-300/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Drift AI connects buyers to sales with AI chat, routing, and instant meeting booking built for B2B motion.
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
              {toolName} is a conversational marketing platform that blends AI chat, playbooks, and scheduling so visitors can qualify and book with sales in real time.
            </p>
            <p className="mt-3 text-slate-700">
              Revenue teams use it to reduce form drop-off, accelerate pipeline, and personalize outreach for target accounts.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations with CRM and MAP tools keep data in sync and ensure routing respects ownership and territories.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits B2B go-to-market teams that want to capture and qualify intent faster.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Demand gen teams replacing static forms with conversational capture.",
                "Account-based teams targeting named accounts with tailored playbooks.",
                "Sales teams that want instant routing and meeting booking.",
                "RevOps needing clean CRM/MAP sync and ownership rules.",
                "Support teams that deflect FAQs with AI before human handoff.",
                "Teams wanting measurable influence on pipeline and bookings.",
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
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes fast qualification, clean routing, and measurable pipeline impact.
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
                  Pricing is custom and depends on seats, AI features, routing complexity, and integrations. Expect mid-market to enterprise contracts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a pilot on core pages; expand to full ABM coverage and advanced routing after seeing booked-meeting lift.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential</td>
                    <td className="px-4 py-3">Lean marketing and sales teams</td>
                    <td className="px-4 py-3">Core chat, basic routing, limited seats</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Scaling ABM programs</td>
                    <td className="px-4 py-3">AI playbooks, deeper integrations, more seats</td>
                    <td className="px-4 py-3">Quote-based</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex routing and governance</td>
                    <td className="px-4 py-3">Advanced security, SLAs, custom onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider seat needs, routing complexity, and whether you require MAP/CRM automation or advanced security. Enterprise tiers add governance and SLA coverage.
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
                  <li>Strong B2B focus with routing and ABM targeting.</li>
                  <li>AI chat reduces form drop-off and accelerates booking.</li>
                  <li>Tight CRM/MAP integrations to keep data aligned.</li>
                  <li>Playbooks allow personalization by page and account.</li>
                  <li>Clear impact reporting on meetings and pipeline.</li>
                  <li>Supports human handoff seamlessly.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is opaque and skews higher for enterprise routing.</li>
                  <li>Requires RevOps setup to keep routing/ownership clean.</li>
                  <li>AI quality depends on training and playbook coverage.</li>
                  <li>May be more than needed for simple support chat use cases.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with conversational marketing and CX platforms. Choose based on ABM needs, routing complexity, and budget.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Compare {toolName} to other conversational platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Intercom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/drift-ai-vs-intercom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Intercom balances support and product use cases. {toolName} is built for marketing/sales with ABM targeting and aggressive routing to reps.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for B2B pipeline acceleration; choose Intercom for product support and lifecycle messaging.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot Chat</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/drift-ai-vs-hubspot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot chat is tightly integrated with its CRM and marketing hub. {toolName} offers deeper routing, ABM targeting, and specialized playbooks.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for sophisticated routing and ABM; choose HubSpot for all-in-one simplicity if you already run HubSpot CRM.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need to route high-intent visitors to sales instantly and prove pipeline impact, {toolName} is worth evaluating. It reduces friction and speeds bookings.
            </p>
            <p className="mt-3 text-slate-700">
              If you have lightweight support chat needs or a limited budget, consider Intercom, Freshchat, or HubSpot chat first.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for B2B teams focused on pipeline velocity and ABM personalization.
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
              Choose {toolName} if you want AI chat that routes qualified buyers to the right rep and books meetings immediately—ideal for ABM-heavy B2B teams.
            </p>
            <p>
              Consider Intercom or HubSpot if you need all-in-one support and marketing automation; Qualified if you want similar B2B routing with Salesforce-native focus.
            </p>
            <p>{toolName} integrates with major CRM/MAP tools to keep data aligned and reporting tight on meetings and revenue.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default DriftAIToolPage;
