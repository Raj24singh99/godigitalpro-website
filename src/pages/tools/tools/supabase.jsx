import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Supabase";
const slug = "supabase";
const category = "Backend as a Service";
const shortPitch =
  "Supabase is an open-source backend-as-a-service with Postgres, auth, storage, and edge functions, positioned as an open alternative to Firebase.";
const pricingSummary =
  "Free tier plus usage-based pricing for database, storage, auth, and edge functions. Costs scale with resource consumption; managed database and enterprise add SLAs and support.";
const officialUrl = "https://supabase.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/supabase.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Firebase", slug: "firebase" },
  { name: "Supabase (self-hosted)", slug: "supabase" },
  { name: "Appwrite", slug: "appwrite" },
  { name: "Hasura", slug: "hasura" },
  { name: "PocketBase", slug: "pocketbase" },
];

const faqs = [
  {
    q: "What is Supabase?",
    a: "Supabase is an open-source BaaS that provides Postgres, auth, storage, and edge functions with a managed hosting option.",
  },
  {
    q: "Who is it for?",
    a: "Developers who want a Postgres-first backend with auth, storage, and APIs without managing servers.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier plus usage-based pricing by DB size, bandwidth, storage, and function invocations. Enterprise adds SLAs and support.",
  },
  {
    q: "Can I self-host?",
    a: "Yes. Supabase is open-source; you can self-host if you want full control or lower costs at scale.",
  },
  {
    q: "Does it have real-time?",
    a: "Yes. Supabase uses replication and websockets for real-time changes on Postgres tables.",
  },
  {
    q: "What about auth?",
    a: "Built-in auth with providers (email/password, OAuth, magic links) and row-level security (RLS) for data access.",
  },
  {
    q: "Are edge functions supported?",
    a: "Yes. You can deploy edge functions for serverless logic close to users.",
  },
  {
    q: "Do I still need a backend?",
    a: "Supabase can cover many backend needs; complex logic or integrations may still require custom APIs or serverless functions.",
  },
];

function SupabaseToolPage() {
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
        "Supabase offers a Postgres-first backend with auth, storage, and edge functions. It’s a strong open alternative to Firebase for teams that want SQL and self-host options.",
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
      title: "Postgres at the core",
      body: "Managed Postgres with SQL, RLS, and extensions for a familiar relational backend.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Auth & security",
      body: "Built-in auth providers plus row-level security to protect data access.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Storage",
      body: "Object storage with policies and CDN support for files and media.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Real-time",
      body: "Database changes broadcast via websockets for live apps.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Edge functions",
      body: "Deploy serverless functions for custom logic at the edge.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Open-source & self-host",
      body: "Run it yourself or use managed hosting; switch as needs change.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Supabase review: pricing, features, pros & cons, and alternatives so you can decide if an open Postgres-first BaaS fits your stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} delivers Postgres, auth, storage, and edge functions in one BaaS—great for teams that want SQL and open-source flexibility.
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
              {toolName} is a backend-as-a-service built on Postgres. It provides auth, storage, real-time, and serverless edge functions with SDKs and APIs for web and mobile apps.
            </p>
            <p className="mt-3 text-slate-700">
              It’s positioned as an open alternative to Firebase for teams that prefer SQL, RLS, and self-hosting options. Managed hosting reduces ops; self-hosting offers control.
            </p>
            <p className="mt-3 text-slate-700">
              Combine it with your frontend frameworks and deploy functions for custom logic, webhooks, and integrations.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for dev teams that want Postgres-first BaaS with auth/storage and optional self-hosting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups building MVPs with SQL and real-time updates.",
                "Teams migrating from Firebase to a Postgres-based stack.",
                "Developers wanting row-level security and SQL over NoSQL.",
                "Products needing edge functions for fast serverless logic.",
                "Ops-conscious teams that may self-host later for control.",
                "Builders who want open-source transparency and flexibility.",
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
            <p className="mt-3 text-slate-700">
              {toolName} brings Postgres, auth, storage, and edge functions together with real-time support.
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
                  Pricing is usage-based: database size, storage, bandwidth, and edge function invocations. Free tier available; managed and enterprise options add higher limits, SLAs, and support. Costs grow with usage—monitor and optimize queries/storage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free; move to Pro when you need higher limits. Evaluate self-hosting if usage is predictable and you want cost control.</p>
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
                    <td className="px-4 py-3">MVPs/testing</td>
                    <td className="px-4 py-3">Limited DB/storage/functions</td>
                    <td className="px-4 py-3">Great for prototypes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing apps</td>
                    <td className="px-4 py-3">Higher limits, backups, more resources</td>
                    <td className="px-4 py-3">Common production choice</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/Self-host</td>
                    <td className="px-4 py-3">Scale/governance needs</td>
                    <td className="px-4 py-3">SLAs, SSO, support, or full control via self-host</td>
                    <td className="px-4 py-3">Choose based on compliance and cost control</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor resource usage; optimize queries, indexes, and storage to manage costs. Plan for backups and security (RLS, auth) early.
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
                  <li>Postgres-based with SQL and RLS.</li>
                  <li>Auth, storage, real-time, and edge functions in one platform.</li>
                  <li>Open-source with self-host option.</li>
                  <li>Good developer experience and SDKs.</li>
                  <li>Scales from MVP to production with managed hosting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage costs can climb; requires monitoring/optimization.</li>
                  <li>Complex apps may need extra backend logic.</li>
                  <li>Self-hosting requires ops resources and security management.</li>
                  <li>Real-time and edge functions add complexity to debugging.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other BaaS and backend platforms to match your data model, hosting, and compliance needs.
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
            <p className="text-slate-700">See how {toolName} compares to other backends.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Firebase</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/firebase">
                  View Firebase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firebase is NoSQL-first with Google ecosystem ties; {toolName} offers Postgres, SQL, and open-source flexibility. Choose based on data model preferences and hosting/control needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hasura</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hasura">
                  View Hasura
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hasura auto-generates GraphQL on Postgres; {toolName} includes auth/storage and edge functions. Choose based on need for GraphQL-first vs full BaaS features.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a Postgres-first BaaS with auth, storage, real-time, and edge functions, and value open-source or self-host options.
            </p>
            <p className="mt-3 text-slate-700">
              Start on managed hosting for speed; consider self-hosting or enterprise when you need more control, compliance, or predictable costs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A capable, open BaaS for SQL-centric teams—best when paired with good schema design, security, and cost monitoring.
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
              Choose {toolName} if you want a managed or self-hostable Postgres backend with auth, storage, and edge functions, and prefer open-source flexibility over closed ecosystems.
            </p>
            <p>
              Consider Firebase for Google ecosystem and NoSQL or Hasura for GraphQL-first. {toolName} shines when SQL, RLS, and open tooling are priorities.
            </p>
            <p>{toolName} speeds up backend setup—combine with strong schema design, security, and monitoring to scale safely.</p>
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

export default SupabaseToolPage;
