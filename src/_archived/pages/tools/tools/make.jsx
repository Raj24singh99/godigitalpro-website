import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Workflow, Database, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Make (Integromat)";
const slug = "make";
const category = "Automation & integrations";
const shortPitch =
  "Make is a visual automation platform that lets teams orchestrate APIs, SaaS tools, and databases with drag-and-drop scenarios, robust error handling, and granular controls.";
const pricingSummary =
  "Free tier includes 1,000 operations/month; paid plans start around $9/month for Core, with Pro/Teams adding higher ops, faster scheduling, and premium connectors.";
const officialUrl = "https://www.make.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/make.com",
  gradient: "from-purple-600 via-indigo-600 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(124,58,237,0.20)]",
};

const alternatives = [
  { name: "Zapier", slug: "zapier" },
  { name: "Pabbly", slug: "pabbly" },
  { name: "Airtable", slug: "airtable" },
  { name: "Notion", slug: "notion" },
  { name: "ClickUp", slug: "clickup" },
];

const faqs = [
  {
    q: "Is Make hard to learn?",
    a: "Make’s visual builder is approachable, but advanced scenarios use routers, data stores, and iterators. Most marketers ramp quickly with templates, then learn HTTP modules for custom APIs.",
  },
  {
    q: "How is Make different from Zapier?",
    a: "Zapier is simpler for quick zaps. Make offers deeper control with branching, mapping, error handling, and low-cost operations, making it better for multi-step workflows and ETL-style jobs.",
  },
  {
    q: "Can Make work with webhooks and custom APIs?",
    a: "Yes. Make excels at webhooks, HTTP calls, JSON parsing, and custom authentication. You can connect niche SaaS or internal tools without waiting for native apps.",
  },
  {
    q: "Does Make have data stores?",
    a: "Make includes native data stores to keep lightweight tables for lookups, deduplication, and stateful automations without needing a full database.",
  },
  {
    q: "Is Make reliable for production workflows?",
    a: "With error handling, retries, and logging, Make is production-ready for many teams. Pro and Teams plans add higher throughput, priority processing, and better support.",
  },
  {
    q: "What are Make operations?",
    a: "Operations count every module execution. Complex scenarios consume more operations, but pricing remains competitive compared to per-task pricing on other platforms.",
  },
  {
    q: "Can I schedule scenarios frequently?",
    a: "Yes. Higher tiers support faster intervals (down to every minute) plus real-time triggers via webhooks. Free/Core have slower scheduling caps.",
  },
  {
    q: "How does Make handle errors?",
    a: "You can set error handlers, fallbacks, and notifications per route. Scenarios can resume, skip, or reroute data when modules fail, helping protect downstream systems.",
  },
];

function MakeToolPage() {
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
        "Make (formerly Integromat) is a powerful visual automation platform that blends an approachable builder with advanced routing, HTTP modules, and data stores. It’s ideal for teams that want Zapier-like ease but deeper control and better value at scale.",
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
      icon: <Workflow className="h-5 w-5 text-purple-500" />,
      title: "Visual scenarios with branching",
      body: "Drag-and-drop builder supports routers, filters, aggregators, and iterators so you can build complex workflows without writing code.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "HTTP and webhook flexibility",
      body: "Connect any API with webhooks, OAuth, custom headers, and JSON parsing. Ideal for niche tools or internal systems.",
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-600" />,
      title: "Native data stores",
      body: "Keep lightweight tables for deduplication, state, and lookups so scenarios stay fast without needing a separate database.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Robust ops-level controls",
      body: "Error handlers, retries, and detailed logs give ops teams confidence. You can notify stakeholders or reroute data automatically.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-sky-500" />,
      title: "Affordable operations at scale",
      body: "Pricing is per operation with generous caps, making Make cost-effective for multi-step flows that would be expensive elsewhere.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Templates for fast launch",
      body: "Thousands of templates for sales, marketing, support, and ops help teams ship working automations in minutes.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Make (Integromat) review for marketers and ops teams covering pricing, features, pros & cons, alternatives, and when to pick it over Zapier."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-500" />
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
                  Make emphasizes visual, flexible automation with strong branching and API support. It’s powerful enough for ops teams but friendly enough for marketers to build without engineering.
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
              Make is a visual automation platform for connecting SaaS apps, APIs, and databases. Scenarios are built with modules and routes that map data, branch, aggregate, and handle errors so teams can automate without heavy custom code.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use Make to sync leads, send alerts, and enrich contacts. Product and ops teams rely on it for ETL-style workflows, billing automations, QA checks, and internal tool glue.
            </p>
            <p className="mt-3 text-slate-700">
              Compared to Zapier, Make is more flexible and cost-efficient per operation while keeping a visual builder that non-engineers can navigate.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Make is ideal for teams that need flexible automations without hiring engineers for every integration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams syncing leads, scoring, and enrichment between CRMs and form tools.",
                "RevOps connecting billing, CRM, and support data to cut manual updates.",
                "Product ops handling QA alerts, user provisioning, and data cleanup jobs.",
                "Support teams routing tickets, escalations, and notifications automatically.",
                "Agencies standardizing client onboarding and reporting across stacks.",
                "Builders who want HTTP/webhook power without writing full backend code.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Make focuses on flexibility, visibility, and affordability for complex automations.</p>
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
                  Pricing is operation-based. Free gets you started with 1,000 ops/month; Core adds more ops and faster scheduling; Pro/Teams increase throughput, priority, and advanced controls like IP whitelisting.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start Free to prototype; upgrade to Core once you run live flows; Pro/Teams for higher ops and support.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and simple personal automations</td>
                    <td className="px-4 py-3">1,000 ops/month, 15-minute scheduling, limited apps</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Core</td>
                    <td className="px-4 py-3">Solo builders and early-stage teams</td>
                    <td className="px-4 py-3">Higher ops, 5-minute scheduling, most apps included</td>
                    <td className="px-4 py-3">~$9/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">GTM and ops teams running critical flows</td>
                    <td className="px-4 py-3">Even more ops, 1-minute scheduling, priority processing</td>
                    <td className="px-4 py-3">~$16–$29/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams / Enterprise</td>
                    <td className="px-4 py-3">Larger teams needing governance</td>
                    <td className="px-4 py-3">Team permissions, SSO, IP restrictions, support SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Operations include each module execution, so map complex flows accordingly. Make stays cost-effective for multi-step automations compared to per-task billing elsewhere; just forecast ops when scaling.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Visual builder with routers and iterators for complex flows.</li>
                  <li>HTTP/webhook strength connects almost any API.</li>
                  <li>Cost-effective operations for multi-step scenarios.</li>
                  <li>Data stores and mapping for stateful automations.</li>
                  <li>Error handling, retries, and logs improve reliability.</li>
                  <li>Templates accelerate marketing, sales, and ops use cases.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Steeper learning curve than Zapier for new builders.</li>
                  <li>Operations math can be confusing for first-time planners.</li>
                  <li>Some premium apps sit behind higher tiers.</li>
                  <li>Advanced scenarios need thoughtful error handling and testing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want simpler single-step automations or different pricing, consider these platforms. They vary in app coverage, governance, and complexity.
            </p>
            <p className="mt-2 text-slate-700">All link to active tool pages so you can compare quickly.</p>
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
            <p className="text-slate-700">Here’s how Make compares to two of its closest automation rivals.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier vs Pabbly</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zapier-vs-make-vs-pabbly">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier wins for fastest simple zaps and broad app catalog. Pabbly is budget-friendly with task-inclusive pricing. Make offers the deepest control with routers, error handling, and HTTP modules at competitive ops pricing.
              </p>
              <p className="mt-2 text-slate-700">
                If you need multi-step ETL-like flows, Make is strongest. Choose Zapier for speed-of-launch and client-friendly UI; Pabbly when cost predictability matters most.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Make if you want flexibility, visual branching, and strong webhooks without hiring engineers.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Pabbly vs Zapier</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/pabbly-vs-zapier-vs-make">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Pabbly is straightforward with unlimited workflows on higher tiers. Zapier focuses on ease and user-friendly automations. Make slots between them with more control than Zapier and broader HTTP flexibility than Pabbly.
              </p>
              <p className="mt-2 text-slate-700">
                Consider Make when you need branching, async handling, and complex data mapping but still want a visual builder. Pabbly covers simple stacks with predictable pricing; Zapier keeps setup fast for non-technical teams.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Make for configurable power; pick Pabbly or Zapier when simplicity or predictable billing outweighs flexibility.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Make is worth it for marketing, ops, and product teams that need more flexibility than Zapier without writing custom services. It scales well for multi-step workflows, webhooks, and custom APIs while staying cost-effective per operation.
            </p>
            <p className="mt-3 text-slate-700">
              If your needs are mostly simple single-step automations, Zapier or even native app automations might suffice. Teams that need governed, SOC2-heavy environments may consider Workato—though at a higher price bracket.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Make is a top pick for flexible, visual automations where price, power, and HTTP/webhook control all matter.
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
              Choose Make if you want a flexible automation platform that can handle branching, webhooks, and custom APIs while staying visual and affordable. It’s strong for marketing ops, revenue ops, and product-led teams.
            </p>
            <p>
              Consider Zapier if your team prioritizes simplicity above all. Consider Pabbly for predictable pricing with lighter feature depth. For enterprise governance and SLAs, evaluate Workato while budgeting accordingly.
            </p>
            <p>Make fits cleanly into modern stacks, connecting CRMs, data warehouses, support tools, and internal APIs without major engineering lift.</p>
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

export default MakeToolPage;
