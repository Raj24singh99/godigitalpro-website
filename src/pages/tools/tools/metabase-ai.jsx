import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Metabase AI";
const slug = "metabase-ai";
const category = "BI & AI Querying";
const shortPitch = "Metabase AI lets teams ask questions in natural language, build dashboards, and explore data without writing SQL for every query.";
const pricingSummary = "Metabase offers free and paid tiers. AI and advanced features are on paid plans with usage considerations for queries and hosting.";
const officialUrl = "https://www.metabase.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/metabase.com",
  gradient: "from-sky-500 via-indigo-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Looker", slug: "looker" },
  { name: "Tableau", slug: "tableau-ai" },
  { name: "Mode", slug: "mode" },
  { name: "Power BI", slug: "powerbi-ai" },
  { name: "Superset", slug: "apache-superset" },
];

const faqs = [
  { q: "What is Metabase AI?", a: "Metabase AI lets you ask data questions in natural language on top of Metabase models and permissions." },
  { q: "Do I need to self-host?", a: "You can self-host or use Metabase Cloud. AI features are available on supported paid tiers." },
  { q: "Is SQL still needed?", a: "SQL is helpful for modeling and complex queries, but AI can handle many ad-hoc questions for non-technical users." },
  { q: "How is pricing handled?", a: "Free for open source; paid tiers add hosting, governance, AI usage, and enterprise features." },
  { q: "Is data secure?", a: "Security depends on your deployment and permissions. Configure roles and SSO on higher tiers for stronger control." },
  { q: "Can I embed dashboards?", a: "Yes. Paid plans allow embedding and sharing dashboards securely." },
  { q: "Does AI work on all data?", a: "AI uses your models and permissions; clean modeling improves answer quality and safety." },
  { q: "Does it replace analysts?", a: "No. It reduces ad-hoc SQL needs but still benefits from analyst-created models and oversight." },
];

function MetabaseAiToolPage() {
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
        "Metabase AI adds natural language querying to Metabase dashboards and models. It is useful for teams that want self-serve analytics without heavy BI overhead.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Natural language questions", body: "Ask questions in plain language and let AI generate queries based on models and permissions." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Models and permissions", body: "Use semantic models and row-level permissions to keep results safe and consistent." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Dashboards and alerts", body: "Build charts, share dashboards, and set up alerts on key metrics for teams." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect to popular databases and warehouses with guided setup and drivers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Governance", body: "Control access with permissions, auditing, and moderation of AI answers." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Embeds and sharing", body: "Embed charts or dashboards and share insights securely with stakeholders." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Metabase AI review: pricing, features, pros & cons, and alternatives so you can decide if AI querying on Metabase fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  {toolName} helps teams explore data with natural language while keeping governed models and dashboards in one place. Good modeling keeps AI answers accurate and safe.
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
              {toolName} allows users to ask questions in natural language, generating queries based on existing data models and permissions. It sits on top of Metabase's dashboards, visualizations, and models so non-technical teams can explore data safely.
            </p>
            <p className="mt-3 text-slate-700">
              Data modeling, permissions, and validation remain critical to keep answers accurate. AI reduces ad-hoc SQL needs but does not replace sound modeling practices.
            </p>
            <p className="mt-3 text-slate-700">Use it to expand self-serve analytics while keeping governance and quality controls in place.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want self-serve analytics with AI-assisted queries on top of governed models.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Growth and marketing teams exploring metrics without SQL.",
                "Product managers checking adoption and feature usage.",
                "CX teams reviewing support and retention dashboards.",
                "Ops teams combining multiple data sources for quick answers.",
                "Analysts who want to scale self-serve while keeping control over models.",
                "Founders who need quick insights without BI bottlenecks.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on natural language querying, modeling, and governed dashboards to bring self-serve analytics to more teams.
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
                  {toolName} offers free and paid tiers. AI features, embedding, and advanced governance live on paid plans. Choose based on hosting preference, AI usage, and security needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to model data; upgrade for AI features, embedding, and governance when adoption grows.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Open Source</td>
                    <td className="px-4 py-3">Small teams and testing</td>
                    <td className="px-4 py-3">Dashboards, visualizations, basic permissions</td>
                    <td className="px-4 py-3">Great for initial setup</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Hosting, more permissions, AI and embedding features</td>
                    <td className="px-4 py-3">Fits most cloud deployments</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs with security needs</td>
                    <td className="px-4 py-3">Advanced governance, SSO, higher AI limits, SLAs</td>
                    <td className="px-4 py-3">Best for strict compliance and scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor AI usage, hosting preference, and compliance. Invest in clean models and permissions so AI answers stay reliable and safe for non-technical users.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Natural language querying lowers barriers for non-technical users.</li>
                  <li>Semantic models keep answers aligned to definitions and permissions.</li>
                  <li>Open source option for teams that want control.</li>
                  <li>Embeds and alerts extend insights beyond the BI team.</li>
                  <li>Balanced usability and governance compared with heavier BI tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>AI answers depend on well-modeled data and permissions.</li>
                  <li>Complex transforms may still need SQL or ETL tools.</li>
                  <li>Self-hosting requires ops and maintenance.</li>
                  <li>Usage-based AI features may require plan upgrades.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BI and AI-assisted analytics tools to match visualization depth, governance, and deployment preferences.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with similar analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Looker</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/looker">
                  View Looker
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Looker offers deep semantic modeling and governance; {toolName} is faster to adopt and now adds AI querying. Choose Looker for strict governance and modeling depth, {toolName} for speed and ease of use.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/tableau-ai">
                  View Tableau
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau excels at rich visualizations; {toolName} focuses on ease of use and self-serve with AI questions. Pick based on whether visual depth or fast access matters more for your teams.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want self-serve insights and AI-assisted queries without heavy BI overhead, and you are willing to invest in good models and permissions.
            </p>
            <p className="mt-3 text-slate-700">
              Maintain data quality and modeling hygiene. Monitor AI usage and user access to keep answers reliable and secure.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great balance of usability and control; still needs solid data modeling and governance to shine.
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
            <p>Use {toolName} to expand self-serve analytics with natural language questions and governed dashboards.</p>
            <p>
              Model data carefully, set permissions, and upgrade as AI usage and embedding needs grow; keep analysts in the loop for complex work.
            </p>
            <p>{toolName} helps teams move faster with data—good modeling and governance keep answers trustworthy.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default MetabaseAiToolPage;
