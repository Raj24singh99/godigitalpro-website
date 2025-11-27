import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Coda";
const slug = "coda";
const category = "Docs & Workflows";
const shortPitch =
  "Coda is a doc platform that blends documents, tables, automation, and integrations (“Packs”) so teams can build custom tools without code.";
const pricingSummary =
  "Free and paid plans. Pricing scales by doc makers and features—automations, Packs, publishing, and access controls increase on higher tiers.";
const officialUrl = "https://coda.io";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/coda.io",
  gradient: "from-amber-500 via-rose-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(236,72,153,0.24)]",
};

const alternatives = [
  { name: "Notion", slug: "notion" },
  { name: "Airtable", slug: "airtable" },
  { name: "Google Workspace", slug: "google-workspace" },
  { name: "Monday.com", slug: "monday" },
  { name: "ClickUp", slug: "clickup" },
];

const faqs = [
  {
    q: "What is Coda?",
    a: "Coda is a flexible doc and table platform with automations and integrations (Packs) that lets teams build custom workflows without heavy coding.",
  },
  {
    q: "Who is it for?",
    a: "Teams that want docs, tables, and automations in one place—product, ops, marketing, and founders who prototype tools quickly.",
  },
  {
    q: "What are Packs?",
    a: "Packs are integrations that connect Coda docs to external tools (e.g., Jira, Slack, HubSpot) so you can sync data and trigger automations.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on Doc Makers (creators) and plan level. Free users can edit; higher tiers add automations, Packs, and publishing controls.",
  },
  {
    q: "Can it replace project tools?",
    a: "It can for some teams. You can build roadmaps, task boards, and trackers, but evaluate governance and reporting needs before replacing dedicated PM tools.",
  },
  {
    q: "Does it support automation?",
    a: "Yes. Automations can send notifications, sync data, and run workflows based on triggers in your docs.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan supports core features with limits on automations and doc size. Paid plans expand Packs, controls, and automation runs.",
  },
  {
    q: "Can I publish docs?",
    a: "Yes. You can publish docs with permissions, embed them, and control whether users can copy or comment.",
  },
];

function CodaToolPage() {
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
        "Coda combines docs, tables, automations, and integrations so teams can craft custom workflows and mini-apps without engineering effort.",
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
      title: "Docs + tables",
      body: "Combine text and structured tables in one doc to build trackers, briefs, and dashboards.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Automations",
      body: "Trigger actions, notifications, and updates based on changes in your docs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Packs (integrations)",
      body: "Connect to tools like Jira, Slack, HubSpot, and Google Calendar to sync and act on data.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Templates",
      body: "Start quickly with prebuilt templates for product, ops, and marketing workflows.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Publishing",
      body: "Publish docs and portals with permissions and embed options for teams or customers.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Controls & permissions",
      body: "Manage Doc Makers, editors, and viewers with granular sharing and workspace controls.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Coda review: pricing, features, pros & cons, and alternatives so you can decide if it fits your docs and automation needs."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} helps teams craft custom docs, trackers, and workflows with automations and Packs—no engineering ticket needed.
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
              {toolName} is a flexible doc platform that combines pages, databases-like tables, automations, and integrations. Teams can build custom tools for planning, operations, and reporting without writing code.
            </p>
            <p className="mt-3 text-slate-700">Use Packs to pull data from external tools and automate actions like notifications, syncs, and record updates.</p>
            <p className="mt-3 text-slate-700">It shines when teams standardize processes in one place while keeping data connected to their existing stack.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want customizable docs and tables with automation baked in.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams building roadmaps, PRDs, and feedback trackers.",
                "Ops teams standardizing SOPs and checklists with automations.",
                "Marketing teams running content calendars and briefs in one place.",
                "Revenue teams syncing data from CRM and support tools via Packs.",
                "Founders prototyping internal tools quickly without engineering.",
                "Teams publishing portals and knowledge bases with permissions.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on flexible building blocks and automation.</p>
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
                  {toolName} uses a maker-based model: Doc Makers require paid seats on higher tiers, while editors/viewers can often be free. Higher plans increase automation runs, Packs, controls, and publishing options.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Map how many Doc Makers you need; start on a plan that fits automation and Pack requirements, then scale seats as adoption grows.</p>
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
                    <td className="px-4 py-3">Testing and small docs</td>
                    <td className="px-4 py-3">Core docs/tables with limited automations</td>
                    <td className="px-4 py-3">Good for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Team</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">More automations, Packs, controls</td>
                    <td className="px-4 py-3">Covers most team needs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Advanced governance, SSO, support</td>
                    <td className="px-4 py-3">Best for strict compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan Doc Maker counts carefully—most costs hinge on creators. Track automation usage to avoid limits.</p>
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
                  <li>Flexible docs and tables in one surface.</li>
                  <li>Automations reduce manual updates and reminders.</li>
                  <li>Packs integrate data from many tools.</li>
                  <li>Templates speed up new workflows.</li>
                  <li>Publishing and permissions for internal/external use.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Doc Maker-based pricing can surprise without planning.</li>
                  <li>Large docs can get complex; governance is important.</li>
                  <li>Automation and Pack limits vary by tier.</li>
                  <li>May not replace full project tools for all teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other doc and workflow tools to fit your collaboration and automation needs.
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
            <p className="text-slate-700">See how {toolName} compares with other document and workflow platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Notion</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/notion">
                  View Notion
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Notion excels at ease of use and knowledge bases; {toolName} leans into tables, automations, and Packs. Choose based on whether you need richer data/automation or simpler docs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Airtable</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/airtable">
                  View Airtable
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Airtable focuses on databases with views and automation; {toolName} blends docs plus tables. Pick Airtable for database-first workflows, {toolName} for doc-centric processes with embedded data.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a flexible doc platform that can replace spreadsheets and light apps with automations and integrations.
            </p>
            <p className="mt-3 text-slate-700">
              Success depends on governance and Doc Maker planning; define ownership and templates to avoid doc sprawl as you scale.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful doc/workflow builder for teams that want customization without code—plan your Makers, automations, and templates carefully.
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
              Choose {toolName} if you want docs, tables, automations, and integrations in one place to build custom workflows without code.
            </p>
            <p>
              Consider Notion or Airtable depending on whether you need simpler docs or database-first workflows; use {toolName} when you want a doc-centric builder with strong automation.
            </p>
            <p>{toolName} lets teams ship internal tools quickly—just plan templates, permissions, and Makers to keep it organized.</p>
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

export default CodaToolPage;
