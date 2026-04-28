import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Appwrite";
const slug = "appwrite";
const category = "Backend & BaaS";
const shortPitch =
  "Appwrite is an open-source backend platform that provides auth, databases, storage, functions, and edge runtimes so you can ship apps faster.";
const pricingSummary =
  "Self-host free/open source; cloud pricing scales by usage (requests, storage, bandwidth, functions). Higher tiers add enterprise support and SLAs.";
const officialUrl = "https://appwrite.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/appwrite.io",
  gradient: "from-rose-500 via-pink-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.26)]",
};

const alternatives = [
  { name: "Supabase", slug: "supabase" },
  { name: "Firebase", slug: "firebase" },
  { name: "PocketBase", slug: "pocketbase" },
  { name: "Hasura", slug: "hasura" },
  { name: "AWS Amplify", slug: "amplify" },
];

const faqs = [
  {
    q: "What is Appwrite?",
    a: "Appwrite is an open-source backend-as-a-service with auth, databases, storage, functions, and edge runtimes to build web/mobile apps quickly.",
  },
  {
    q: "Who is it for?",
    a: "Developers and teams who want OSS control with a managed option, plus a familiar REST/SDK experience across web, mobile, and edge.",
  },
  {
    q: "How does pricing work?",
    a: "Self-host is free (infrastructure cost only). Cloud pricing scales by requests, storage, bandwidth, and function/runtime usage; enterprise adds SLAs and support.",
  },
  {
    q: "Is it vendor lock-in?",
    a: "Less than closed BaaS since it's OSS and self-hostable. Still, APIs and infra patterns are Appwrite-specific; plan migrations if needed.",
  },
  {
    q: "Does it support edge functions?",
    a: "Yes. You can run functions at the edge and schedule jobs; check language/runtime support for your stack.",
  },
  {
    q: "Is it production-ready?",
    a: "Yes for many apps; ensure you review limits, scaling, observability, and security for your workload.",
  },
  {
    q: "Is human review needed?",
    a: "Yes. You still need to model data, security rules, and observability; plan backups and DR for critical apps.",
  },
];

function AppwriteToolPage() {
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
        "Appwrite gives an OSS backend stack—auth, DB, storage, functions, and edge runtimes—with a managed cloud option. Great for teams that want speed plus ownership.",
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
      title: "Auth & users",
      body: "Built-in auth, sessions, teams, and security rules to ship signup/login fast.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Databases & storage",
      body: "Document DB plus file/object storage with permissions, queries, and SDKs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Functions & edge",
      body: "Serverless functions and edge runtimes for background jobs, webhooks, and APIs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Security & permissions",
      body: "Granular rules for users, teams, and resources to protect data by default.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "OSS + managed cloud",
      body: "Self-host for control or use Appwrite Cloud for speed; migrate between as needed.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "SDKs & tooling",
      body: "Client/server SDKs, CLI, and console UI to build across web, iOS, and Android.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Appwrite review: pricing, features, pros & cons, and alternatives so you can choose the right backend stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-100 blur-3xl" />
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
                  {toolName} provides OSS auth, DB, storage, and functions with a managed cloud option—ship fast while keeping ownership.
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
              {toolName} is an open-source backend platform with auth, databases, storage, functions, and edge runtimes. It aims to give developers Firebase-like speed with OSS control.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to build web and mobile apps quickly while keeping portability through self-hosting options. Cloud hosting reduces ops; self-hosting gives maximum control.
            </p>
            <p className="mt-3 text-slate-700">Plan data models, security rules, and monitoring up front to stay production-ready.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great for teams wanting OSS flexibility with an optional managed cloud.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups shipping MVPs with auth, DB, and storage out of the box.",
                "Teams wanting Firebase-like speed but with OSS and self-host control.",
                "Mobile and web apps needing REST/SDK support across platforms.",
                "Engineers who want edge functions for latency-sensitive features.",
                "Orgs with compliance needs that prefer self-hosted options.",
                "Builders who value migration paths and reducing lock-in risk.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
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
              {toolName} bundles backend essentials—auth, data, storage, functions, and edge—so teams can build fast with OSS flexibility.
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
                  Self-host is free aside from infra. Cloud pricing scales by requests, storage, bandwidth, and functions. Enterprise adds SLAs, support, and private deployments. Model cost per monthly active user and per request.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on cloud for speed; self-host if you need control/compliance or to cap costs at scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Self-host (OSS)</td>
                    <td className="px-4 py-3">Control/compliance</td>
                    <td className="px-4 py-3">Full features, your infra</td>
                    <td className="px-4 py-3">Manage ops and scaling</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Cloud</td>
                    <td className="px-4 py-3">Speed to market</td>
                    <td className="px-4 py-3">Managed hosting, metered usage</td>
                    <td className="px-4 py-3">Watch request/storage costs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Mission critical</td>
                    <td className="px-4 py-3">SLAs, support, private deployments</td>
                    <td className="px-4 py-3">For larger orgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Model request/storage growth; plan observability, backups, and DR whether cloud or self-hosted.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Open-source with self-hosting and cloud options.</li>
                  <li>Auth, DB, storage, functions, and edge in one stack.</li>
                  <li>SDKs for web, iOS, Android; familiar REST/Graph patterns.</li>
                  <li>Less lock-in than closed BaaS; migration paths exist.</li>
                  <li>Granular permissions and security rules.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Still a platform dependency—APIs are Appwrite-specific.</li>
                  <li>Self-hosting requires ops/monitoring; cloud is metered.</li>
                  <li>Need to design schemas and security rules carefully.</li>
                  <li>Edge/runtime language support may not match every stack.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other BaaS/MBaaS options by lock-in, pricing, and feature depth.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other backend platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supabase</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/supabase">
                  View Supabase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supabase is Postgres-first with realtime; {toolName} offers doc DB and edge functions. Choose based on DB preference and runtime needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Firebase</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/firebase">
                  View Firebase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Firebase is tightly integrated with Google Cloud and has mature ecosystem; {toolName} offers OSS, self-host, and less lock-in. Pick based on compliance, control, and preferred DB model.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a fast, OSS-friendly backend with optional managed hosting. It reduces boilerplate while preserving ownership paths.
            </p>
            <p className="mt-3 text-slate-700">
              Plan for observability, security rules, and data modeling; monitor cloud usage or infra costs if self-hosting.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong BaaS choice for teams balancing speed with control—great fit if you value OSS and migration options.
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
            <p>{toolName} bundles auth, data, storage, and functions in an OSS-friendly stack with cloud hosting.</p>
            <p>Use it when you want Firebase-like speed with more control and migration options; plan for monitoring and good security practices.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
              <a className="text-rose-700 hover:text-rose-600" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AppwriteToolPage;
