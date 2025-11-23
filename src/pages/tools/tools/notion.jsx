import React, { useState } from "react";
import { Sparkles, ShieldCheck, Layers, PencilLine, Workflow, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Notion";
const slug = "notion";
const category = "Docs & Project Management";
const shortPitch =
  "Notion combines docs, wikis, databases, and lightweight project management so teams can centralize knowledge, roadmaps, and SOPs in one flexible workspace.";
const pricingSummary = "Free for individuals; paid plans from ~$8/user/month for team permissions, guests, and advanced databases.";
const officialUrl = "https://www.notion.so/";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/notion.so",
  gradient: "from-slate-800 via-slate-700 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(15,23,42,0.25)]",
};

const alternatives = [
  { name: "ClickUp", slug: "clickup", blurb: "All-in-one work OS with tasks, docs, and dashboards." },
  { name: "Asana", slug: "asana", blurb: "Structured project and portfolio management." },
  { name: "Trello", slug: "trello", blurb: "Simple kanban for teams that want clarity fast." },
  { name: "Monday", slug: "monday", blurb: "Visual workflows and automations for teams." },
  { name: "Airtable", slug: "airtable", blurb: "Relational database-style spreadsheets and apps." },
];

const faqs = [
  { q: "Is Notion good for agencies?", a: "Yes. Agencies use Notion to centralize client wikis, project plans, briefs, and SOPs. Linked databases make it easy to roll up tasks, deliverables, and status for each account." },
  { q: "Is there a free version of Notion?", a: "Notion has a free plan for individuals with unlimited pages. The Plus and Business plans add permissions, guests, version history, and admin controls for teams." },
  { q: "Can Notion replace project management tools?", a: "For many teams, yes. You can build kanban boards, sprints, calendars, and timelines with shared databases. For large PMOs needing dependencies/portfolio views, Asana or ClickUp can go deeper." },
  { q: "Does Notion support AI?", a: "Yes. Notion AI can summarize docs, generate outlines, and draft copy directly inside pages and databases." },
  { q: "How secure is Notion?", a: "Notion offers SSO on Business, role-based permissions, page-level sharing, and SOC2 compliance. Granular permissions are improving but require thoughtful setup." },
  { q: "Is Notion good for product teams?", a: "Yes. Product teams use Notion for PRDs, research repos, and roadmaps. Databases let you relate tickets, decisions, and experiments in one workspace." },
  { q: "Does Notion integrate with other tools?", a: "Yes. Notion connects with Slack, Google Drive, Figma embeds, GitHub links, and offers an API for two-way syncs through tools like Zapier and Make." },
  { q: "What are Notion’s limitations?", a: "Complex workspaces can become slow if not modeled well. Opinionated project hierarchies (advanced dependencies, capacity planning) may need Asana or ClickUp instead." },
];

const featureBlocks = [
  {
    icon: <Layers className="h-5 w-5 text-amber-600" />,
    title: "Docs, wikis, and databases together",
    body: "Create docs and relate them to databases for projects, tasks, briefs, and assets so context and execution live in one place.",
  },
  {
    icon: <Workflow className="h-5 w-5 text-indigo-500" />,
    title: "Flexible project views",
    body: "Kanban, table, timeline, calendar, and gallery views let each team work the way they prefer while sharing a single source of truth.",
  },
  {
    icon: <PencilLine className="h-5 w-5 text-emerald-500" />,
    title: "Templates and AI assistance",
    body: "Use templates for wikis, sprints, and CRM-style trackers, plus Notion AI to summarize, outline, or draft content inline.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Linked databases and rollups",
    body: "Relate projects, tasks, and docs to clients or products, then roll up status and KPIs for leadership in real time.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Permissions and sharing",
    body: "Granular page sharing, guests, groups, and SSO (Business) enable secure collaboration with clients and partners.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-sky-500" />,
    title: "Embeds and integrations",
    body: "Embed Figma, Loom, Miro, or dashboards; connect Slack and calendar; and use the API with Zapier/Make for automations.",
  },
];

function NotionToolPage() {
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
        "Notion unifies docs, wikis, and databases so teams can capture knowledge, plan projects, and ship work in one flexible workspace. It’s popular with agencies, product teams, and startups.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
        description="Detailed Notion review for teams and agencies: pricing, features, pros & cons, alternatives, and how it compares to ClickUp and Asana."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Docs, wikis, and projects in one place
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
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Notion blends docs and databases so teams can connect knowledge, projects, and assets in one flexible system that scales with you.
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
              Notion is a collaborative workspace that merges documents, wikis, and databases. Teams use it to centralize product specs, marketing plans, and SOPs while keeping related tasks and assets connected.
            </p>
            <p className="mt-3 text-slate-700">
              The flexibility is powerful: you can build anything from a client portal to a content calendar to a lightweight CRM, then share it internally or with clients using permissions and guests.
            </p>
            <p className="mt-3 text-slate-700">
              Notion’s templates and blocks keep setup simple for small teams, while linked databases and rollups let larger orgs build dashboards and rollups for leadership.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Notion works well when you need flexible structure without heavy PM overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies building client hubs with briefs, timelines, and status updates.",
                "Product teams managing PRDs, research, experiments, and launch checklists.",
                "Marketing teams running editorial calendars, asset libraries, and playbooks.",
                "Founders and ops teams documenting SOPs and onboarding in one wiki.",
                "Cross-functional squads that need linked tasks, docs, and decisions.",
                "Teams wanting AI assistance for summarizing docs and writing drafts.",
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
            <p className="mt-3 text-slate-700">
              Notion focuses on flexible building blocks, knowledge sharing, and database-driven planning that teams can adapt to their workflows.
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
                  Notion keeps pricing simple: a generous free plan for individuals, Plus for small teams, Business for guests and SSO, and Enterprise for large orgs needing advanced governance.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Plus for teams; move to Business for permissions/guests; Enterprise for advanced security.</p>
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
                    <td className="px-4 py-3">Individuals and personal docs</td>
                    <td className="px-4 py-3">Unlimited pages/blocks, limited file uploads</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Small teams and startups</td>
                    <td className="px-4 py-3">Unlimited file uploads, 30-day history</td>
                    <td className="px-4 py-3">~$8/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Growing companies and agencies</td>
                    <td className="px-4 py-3">Guests, SSO, 90-day history, advanced permissions</td>
                    <td className="px-4 py-3">~$15/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs needing governance</td>
                    <td className="px-4 py-3">Audit logs, SCIM, advanced security, custom terms</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Many teams start free, upgrade to Plus for uploads/history, then Business once client guests and tighter permissions are needed.
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
                  <li>Unifies docs, wikis, and databases in one workspace.</li>
                  <li>Highly flexible for building custom workflows and portals.</li>
                  <li>AI features for summarizing and drafting content.</li>
                  <li>Great templates and embeds for design/product teams.</li>
                  <li>Easy guest sharing for clients and partners.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Large, complex workspaces can slow down if not structured well.</li>
                  <li>Advanced dependencies and portfolio reporting are lighter than ClickUp/Asana.</li>
                  <li>Permissions need careful setup to avoid accidental oversharing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need stricter project structure or deeper databases? Explore these alternatives—each link goes to an in-depth review.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-slate-800 hover:text-slate-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare Notion to structured project tools and work OS platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trello vs ClickUp</h3>
                <a className="text-sm font-semibold text-slate-800 hover:text-slate-600" href="/tools/compare/trello-vs-clickup-vs-notion">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trello is the simplest kanban option. ClickUp adds heavy PM capabilities. Notion sits between them—more flexible than Trello, lighter than ClickUp, with docs and databases built-in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Asana vs ClickUp</h3>
                <a className="text-sm font-semibold text-slate-800 hover:text-slate-600" href="/tools/compare/notion-vs-asana-vs-clickup">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Asana excels at structured projects and dependencies. ClickUp offers deep customization for PMOs. Notion is ideal when you want flexible docs plus tasks without heavy process overhead.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams that need to centralize knowledge and keep work connected, Notion is a strong choice. It lets you build the workspace you need without waiting on engineering or heavy admin setup.
            </p>
            <p className="mt-3 text-slate-700">
              If you require strict project governance, advanced dependencies, and portfolio planning, ClickUp or Asana may fit better. For lean teams and agencies that want a unified wiki + project hub, Notion is hard to beat.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Notion is worth it when flexibility, docs, and connected databases matter more than heavy PM structure.
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
              Choose Notion if you need a flexible all-in-one workspace for docs, projects, and wikis. It is great for agencies, product teams, and startups that want to move fast without complex PM tooling.
            </p>
            <p>
              Consider ClickUp or Asana if you require advanced dependencies, resource planning, or portfolio reporting. Trello remains a solid option for the simplest kanban needs.
            </p>
            <p>Notion integrates with the rest of your stack, embeds design tools, and keeps knowledge close to execution, reducing context switching.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, you can try it here: <a className="text-slate-800 hover:text-slate-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default NotionToolPage;
