import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hasura";
const slug = "hasura";
const category = "APIs & Databases";
const shortPitch =
  "Hasura is a GraphQL engine that instantly generates APIs on your Postgres (and other) databases with built-in auth, permissions, and caching.";
const pricingSummary =
  "Open-source core; cloud plans add usage-based pricing for requests, roles, caching, observability, and support. Self-hosting remains free.";
const officialUrl = "https://hasura.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hasura.io",
  gradient: "from-indigo-600 via-purple-600 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.26)]",
};

const alternatives = [
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "Appwrite", slug: "appwrite" },
  { name: "Neon", slug: "neon-tech" },
  { name: "PlanetScale", slug: "planetscale" },
];

const faqs = [
  {
    q: "What is Hasura?",
    a: "Hasura is a GraphQL engine that auto-generates APIs on top of databases (Postgres, SQL Server, BigQuery, etc.) with authorization, caching, and actions for custom logic.",
  },
  {
    q: "Who is it for?",
    a: "Teams building data-driven apps that want fast GraphQL APIs without writing resolvers, while keeping control of their database and access rules.",
  },
  {
    q: "Does Hasura handle authorization?",
    a: "Yes. You can define row- and column-level permissions tied to roles and JWT/webhook-based auth.",
  },
  {
    q: "How is pricing structured?",
    a: "Open-source core is free. Hasura Cloud charges by usage (requests, caching, limits) and adds monitoring, reliability, and support.",
  },
  {
    q: "Can I write custom business logic?",
    a: "Yes. Use Actions, Remote Schemas, and Event Triggers to connect services or extend with custom resolvers.",
  },
  {
    q: "Does it support subscriptions?",
    a: "Yes. Real-time GraphQL subscriptions are supported on Postgres and compatible sources.",
  },
  {
    q: "Is vendor lock-in a concern?",
    a: "You control the database. You can self-host Hasura or move providers since schema and data remain yours.",
  },
  {
    q: "Which databases are supported?",
    a: "Postgres is primary; Hasura Cloud also supports MySQL (beta), SQL Server, BigQuery, Snowflake (some features vary).",
  },
];

function HasuraToolPage() {
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
        "Hasura generates GraphQL APIs on your database with role-based permissions, subscriptions, and extensibility. It accelerates backend delivery while keeping data under your control.",
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
      title: "Instant GraphQL",
      body: "Auto-generate GraphQL APIs on your database tables and views.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Row-level permissions",
      body: "Define role-based auth with row/column filters tied to JWT/webhooks.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Real-time subscriptions",
      body: "Out-of-the-box subscriptions for live UI updates on data changes.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Actions & remote schemas",
      body: "Extend with custom business logic and stitch multiple GraphQL endpoints.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Triggers & events",
      body: "Event triggers to invoke serverless functions or webhooks on data changes.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud performance",
      body: "Managed hosting with caching, rate limits, observability, and global regions.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hasura review: pricing, features, pros & cons, and alternatives so you can pick the right GraphQL backend approach."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-700" />
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
                  {toolName} speeds up backend delivery with instant GraphQL APIs, role-based permissions, and real-time subscriptions—while you keep control of your database.
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
              {toolName} is a GraphQL engine that auto-generates APIs on top of your data sources. It includes permissions, subscriptions, remote schemas, and actions to extend with custom logic without writing boilerplate resolvers.
            </p>
            <p className="mt-3 text-slate-700">
              You keep ownership of the database. Use Hasura self-hosted or Hasura Cloud for scaling, observability, and reliability features.
            </p>
            <p className="mt-3 text-slate-700">Great for product teams that want to ship features quickly while keeping strong access control over data.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams building data-rich apps that prefer GraphQL and want to keep direct database access.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams that need fast backend APIs without writing resolvers.",
                "Full-stack teams adopting GraphQL with strong row-level auth.",
                "SaaS apps that want subscriptions and real-time updates out of the box.",
                "Backends that orchestrate multiple services via remote schemas/actions.",
                "Teams migrating from REST to GraphQL while keeping the same database.",
                "Developers who want to self-host or choose a managed cloud later.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on instant GraphQL, permissions, real-time, and extensibility.</p>
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
                  The open-source engine is free to self-host. Hasura Cloud uses usage-based pricing (requests, limits, caching, regions) with higher tiers adding observability, rate limits, and enterprise support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start self-hosted or on the free cloud tier; upgrade when you need SLAs, caching, or advanced observability.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-hosted OSS</td>
                    <td className="px-4 py-3">Developers, POCs</td>
                    <td className="px-4 py-3">Core engine, full control, your infra</td>
                    <td className="px-4 py-3">You manage ops and scaling</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud (free/entry)</td>
                    <td className="px-4 py-3">Small apps</td>
                    <td className="px-4 py-3">Managed hosting, limited usage, monitoring basics</td>
                    <td className="px-4 py-3">Great to validate production fit</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro/Enterprise</td>
                    <td className="px-4 py-3">Scaling teams</td>
                    <td className="px-4 py-3">Caching, rate limits, observability, SLAs, support</td>
                    <td className="px-4 py-3">Usage-based; plan for traffic growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for your database hosting costs separately. Consider data residency and region choices if you serve global users.
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
                  <li>Instant GraphQL on your database with no resolver boilerplate.</li>
                  <li>Row/column permissions with JWT/webhook integration.</li>
                  <li>Subscriptions and event triggers for real-time/reactive apps.</li>
                  <li>Extensible via actions and remote schemas to stitch services.</li>
                  <li>Self-host or managed cloud; data stays in your DB.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>GraphQL-first; REST patterns require extra setup.</li>
                  <li>Complex permission rules need careful design and testing.</li>
                  <li>Cloud pricing is usage-based; heavy traffic can add cost.</li>
                  <li>Non-Postgres sources may have feature gaps.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other backend and database platforms.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other backend platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supabase</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/supabase">
                  View Supabase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supabase bundles Postgres hosting with REST/Realtime/Edge Functions; {toolName} specializes in GraphQL with granular permissions. Choose Supabase for a full backend bundle, {toolName} for GraphQL power on your DB.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Firebase</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/firebase">
                  View Firebase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firebase offers managed NoSQL/hosting with SDKs; {toolName} keeps data in SQL and exposes GraphQL. Pick Firebase for rapid mobile/web with Google ecosystem, {toolName} for SQL-based GraphQL and ownership of data.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want GraphQL on your database with minimal boilerplate, strong permissions, and the option to self-host or use managed cloud.
            </p>
            <p className="mt-3 text-slate-700">If you prefer REST-first or need deep Firebase ecosystem features, consider those platforms instead.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A powerful accelerator for GraphQL backends—great when you want database control plus real-time and auth baked in.
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
            <p>Choose {toolName} if you need GraphQL with fine-grained auth on your own database and want to ship fast.</p>
            <p>Pick Supabase/Firebase if you prefer a full backend bundle with SDKs, or Appwrite if you want a self-hosted BaaS with REST.</p>
            <p>{toolName} works best when you design permissions carefully and monitor performance for heavy workloads.</p>
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

export default HasuraToolPage;
