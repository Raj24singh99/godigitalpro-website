import React, { useState } from "react";
import { Sparkles, ShieldCheck, PlugZap, Workflow, ClipboardList, Crown, ArrowLeft, ChevronDown, Database } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Zapier";
const slug = "zapier";
const category = "Automation & Integrations";
const shortPitch =
  "Zapier is the automation backbone for marketers, agencies, and RevOps teams that need to connect 6,000+ apps, launch workflows fast, and move data with minimal engineering help.";
const pricingSummary =
  "Freemium with paid tiers from around $29/month (Starter, billed annually) for multi-step zaps. Professional (~$73/month) unlocks unlimited zaps, higher task quotas, AI actions, and premium connectors. Team and Company plans add collaboration, SSO, and governance.";
const officialUrl = "https://zapier.com/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/zapier.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.25)]",
};

const alternatives = [
  { name: "Make", slug: "make", isComparison: true },
  { name: "Pabbly Connect", slug: "pabbly", isComparison: true },
  { name: "ActiveCampaign", slug: "activecampaign" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Airtable", slug: "airtable" },
];

const faqs = [
  {
    q: "Is Zapier free?",
    a: "Zapier offers a free plan with 100 tasks/month, single-step zaps, and key apps for testing. To run multi-step automations or access Webhooks/Premium apps, you need a paid plan.",
  },
  {
    q: "Which Zapier plan is best for agencies?",
    a: "Agencies usually pick Professional for unlimited zaps, advanced logic, and 2k+ tasks per month, then upgrade to Team for shared workspaces, folders, and client access controls.",
  },
  {
    q: "Does Zapier integrate with Shopify, HubSpot, or Slack?",
    a: "Yes. Zapier maintains 6,000+ connectors covering Shopify, HubSpot, Salesforce, Webflow, Airtable, Sheets, Slack, ClickUp, Facebook Ads, TikTok, and more.",
  },
  {
    q: "Can Zapier handle complex branching?",
    a: "Zapier supports multi-path logic, lookup tables, loops, and webhook steps. Extreme routing or array-heavy work is better suited to Make or custom code, but most GTM automation fits Zapier.",
  },
  {
    q: "What are Zapier Tables, Interfaces, and Canvas?",
    a: "Tables give you lightweight databases for automation inputs, Interfaces create mini apps/portals for stakeholders, and Canvas documents workflows so teams see how each zap fits the process.",
  },
  {
    q: "Does Zapier include AI automation?",
    a: "Yes. Zapier’s AI actions let you describe a workflow in natural language and auto-build the zap. You can also layer in GPT, Claude, or custom LLM prompts within steps.",
  },
  {
    q: "Is Zapier secure and compliant?",
    a: "Zapier is SOC 2 Type II compliant, supports SSO/SAML, granular access controls, and regional data hosting on Company plans. They also offer DPAs for GDPR/enterprise buyers.",
  },
  {
    q: "Can Zapier replace custom integrations?",
    a: "For many marketing, RevOps, and CS use cases yes—Zapier eliminates custom one-off scripts. Deep product data syncs or latency-sensitive flows may still call for engineering or iPaaS tools like Workato.",
  },
];

function ZapierToolPage() {
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
        "Zapier is the go-to automation layer for marketers and agencies who need to move data between SaaS apps fast. It combines the largest connector library with templates, AI actions, and admin controls so teams can automate onboarding, lead flow, fulfillment, and reporting without writing code.",
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
      icon: <PlugZap className="h-5 w-5 text-amber-500" />,
      title: "6,000+ connectors and templates",
      body: "Zapier ships the broadest catalog of ready-to-use connectors plus thousands of templates, so you can automate CRMs, ad platforms, forms, and fulfillment tools in minutes.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "AI-powered builder",
      body: "Describe a workflow in plain English and Zapier AI drafts the steps, data mappings, and filters. AI Actions, Chatbots, and Formatter steps help enrich data automatically.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-indigo-500" />,
      title: "Multi-step logic and branching",
      body: "Paths, loops, filters, and lookup tables let you orchestrate complex go-to-market processes like lead routing, lifecycle emails, CS alerts, and fulfillment checks.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Tables, Interfaces, and Canvas",
      body: "Keep structured records inside Zapier Tables, expose simple UI for stakeholders via Interfaces, and document flow maps with Canvas so handoffs stay clear.",
    },
    {
      icon: <Database className="h-5 w-5 text-sky-500" />,
      title: "Native storage & data prep",
      body: "Storage, Transfers, and Bulk data update tools help migrate lists or reconcile CRM data without spreadsheets or custom scripts.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Admin controls and monitoring",
      body: "Team and Company plans include shared folders, audit logs, SSO, and granular permissions so agencies can safely manage multiple clients.",
    },
  ];

  const pricingTable = [
    { plan: "Free", best: "Testing & founders validating automation", limits: "Single-step zaps, 100 tasks/month, core apps", price: "$0" },
    { plan: "Starter", best: "Solo marketers or creators", limits: "Multi-step zaps, 750–1,500 tasks/month, basic premium apps", price: "~$29/month (annual)" },
    { plan: "Professional", best: "Agencies & growth teams", limits: "Unlimited zaps, 2,000–20,000 tasks, AI + custom logic, Webhooks", price: "~$73/month (annual)" },
    { plan: "Team / Company", best: "In-house ops & larger agencies", limits: "Unlimited seats, shared workspaces, SSO, data residency, 50k+ tasks", price: "From ~$103/month (Team) / Custom (Company)" },
  ];

  const pros = [
    "Biggest connector library with fast new-app coverage.",
    "AI builder plus templates slash setup time for new automations.",
    "Multi-step logic, paths, and loops cover most GTM workflows.",
    "Tables, Interfaces, and Canvas add lightweight apps + documentation.",
    "Transfers and Storage simplify one-off migrations or list cleanups.",
    "Team/Company plans add SSO, shared folders, and governance that agencies need.",
  ];

  const cons = [
    "Task-based billing can get expensive at high volume.",
    "Complex array/iterator handling is lighter than Make or Workato.",
    "Real-time latency can lag for mission-critical ops.",
    "Some premium apps require higher-tier plans even for light usage.",
  ];

  const useCases = [
    "Marketing ops syncing leads between forms, CRMs, ads, and email tools.",
    "Agencies automating client onboarding, reporting, and fulfillment updates.",
    "Revenue teams routing deals, handoffs, and alerts between CRM + CS tools.",
    "Customer success creating renewal reminders, surveys, and playbooks.",
    "Ecommerce brands connecting storefronts, shipping, and finance stacks.",
    "Product-led teams prototyping internal tooling with Interfaces + Tables.",
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Automation Features, Pricing, Pros & Cons, Alternatives`}
        description="Hands-on Zapier review for 2025 covering pricing, features, pros & cons, best use cases, and how it compares to Make, Pabbly, HubSpot, and ActiveCampaign."
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-slate-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-10 top-12 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/40">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Zapier pairs the world’s largest automation catalog with new AI workflows, Tables, Interfaces, and governance so GTM teams can move faster without waiting on engineering.
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
              Zapier is a {category.toLowerCase()} platform that lets business teams connect SaaS apps, trigger workflows, and move data without engineering work. With thousands of connectors, AI-assistants, and new
              app-like experiences (Tables, Interfaces), you can automate almost any marketing, sales, CS, or finance process.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers rely on it for lead routing, ad attribution, webinar follow-up, and reporting. Agencies build onboarding, fulfillment, and reporting systems for multiple clients. Operations teams use it to glue
              product analytics, CRMs, spreadsheets, and collaboration tools together quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Zapier’s appeal lies in speed: you can launch a zap in minutes, document it for the team in Canvas, and hand over lightweight Interfaces for stakeholders—no lengthy sprints needed.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Zapier suits GTM teams that need dependable no-code automation with minimal lift.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Zapier focuses on speed-to-ship, breadth of connectors, and governance so operations and agency teams can scale automations safely.</p>
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
                  Zapier pricing is task-based. You pay for task volume and features, not per seat until you reach Team/Company. Free and Starter plans are ideal for experimentation. Professional adds AI, custom logic,
                  and Webhooks. Team and Company layer on collaboration, shared workspaces, and compliance controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most marketers start on Starter → Professional. Agencies jump straight to Professional or Team for unlimited zaps and shared folders.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 ? "bg-slate-50/60" : "bg-white"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Forecast usage before committing—task spikes from ad campaigns or seasonal flows can quickly increase bills. Use Zapier’s Task usage alerts and Transfer for large one-off imports so recurring zaps stay lean.
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
                  {pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  {cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Zapier leads in connector coverage and speed, but ops teams sometimes prefer visual-first builders, bundled marketing platforms, or CRM-native automation. These are the common options marketers compare.
            </p>
            <p className="mt-2 text-slate-700">Each link opens a detailed GoDigitalPro write-up so you can evaluate pricing and fit.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular automation alternative."}</p>
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
            <p className="text-slate-700">Here’s how Zapier stacks up when automation collides with visual builders or CRM-native workflows.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Make vs Pabbly Connect</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zapier-vs-make-vs-pabbly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Make wins when you need routers, iterators, or webhooks running at massive scale. Pabbly Connect is the budget-friendly pick with subscriptions and forms baked in. Zapier wins on connector breadth and
                speed-to-launch, especially for marketers and agencies juggling many SaaS tools.
              </p>
              <p className="mt-2 text-slate-900">If app coverage and fast shipping matter most, stick with Zapier. If you need deep branching or very low pricing at high volume, explore the others.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HubSpot vs ActiveCampaign</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zapier-vs-hubspot-vs-activecampaign">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HubSpot and ActiveCampaign combine CRM + marketing automation under one roof, but they primarily automate events that happen inside their own suites. Zapier remains best for stitching together dozens of
                specialized tools, enriching data, and handing off to the perfect app for each stage.
              </p>
              <p className="mt-2 text-slate-900">Choose Zapier when you want vendor-neutral automations. Choose HubSpot or ActiveCampaign when you want CRM, email, and nurture data to live in a single platform.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For lean marketing, RevOps, and agency teams, Zapier’s speed-to-ship outweighs the premium task pricing. You can deploy workflows in minutes, iterate quickly, and document everything for handoff. AI actions,
              Tables, and Interfaces extend its usefulness beyond simple data passing.
            </p>
            <p className="mt-3 text-slate-700">
              If you rely on one suite (HubSpot, ActiveCampaign, Salesforce) and rarely touch external tools, their built-in automation may be enough. If you need router-level control, Make or n8n could be better. But for
              most GTM stacks, Zapier offers the best mix of coverage, UX, and governance.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Zapier is worth it when you value agility and need to connect multiple niche SaaS tools fast without writing code.
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
              Go with Zapier if you are stitching together many SaaS tools, need to launch automations fast, and want AI + documentation to keep teams aligned. It’s our default choice for agencies, marketing ops, and CS
              leaders building client-facing workflows.
            </p>
            <p>
              Consider Make or n8n for developer-style branching, or choose HubSpot/ActiveCampaign when you want CRM + automation combined. Pabbly Connect is solid for budget-sensitive SMBs with predictable flows.
            </p>
            <p>Zapier fits well as the connective tissue in a modern go-to-market stack, giving you automation coverage that keeps pipeline, onboarding, and retention humming.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
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

export default ZapierToolPage;
