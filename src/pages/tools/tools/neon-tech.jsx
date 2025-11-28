import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Neon";
const slug = "neon-tech";
const category = "Serverless Postgres & DBaaS";
const shortPitch = "Neon is a serverless Postgres platform with autoscaling, branching, and storage-compute separation for modern apps.";
const pricingSummary = "Usage-based pricing for compute and storage with free tiers. Higher plans add dedicated resources, support, and enterprise features.";
const officialUrl = "https://neon.tech";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/neon.tech",
  gradient: "from-emerald-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Supabase", slug: "supabase" },
  { name: "PlanetScale", slug: "planetscale" },
  { name: "Render", slug: "render" },
  { name: "Railway", slug: "railway" },
  { name: "Vercel", slug: "vercel" },
];

const faqs = [
  { q: "What is Neon?", a: "Neon is a serverless Postgres platform with autoscaling and storage-compute separation, built for modern applications." },
  { q: "Who is it for?", a: "Developers and teams that want managed Postgres with branching, autoscaling, and pay-as-you-go pricing." },
  { q: "Does Neon support branching?", a: "Yes. You can branch databases for previews, testing, and development without heavy clones." },
  { q: "How is pricing handled?", a: "Usage-based for compute and storage with free tiers; higher plans add dedicated resources and support." },
  { q: "Is it compatible with Postgres tools?", a: "Yes. Neon is Postgres-compatible, working with drivers, ORMs, and extensions (check supported list)." },
  { q: "What about performance?", a: "Storage-compute separation enables fast scale-up; cold starts can occur—plan for connection pooling and warm paths." },
  { q: "Does it support backups?", a: "Point-in-time recovery and backups are available; confirm retention by plan." },
  { q: "Can I self-host?", a: "Neon is a managed service; self-hosting is not the primary model. Check enterprise for options." },
];

function NeonToolPage() {
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
        "Neon offers serverless Postgres with autoscaling, branching, and storage-compute separation. It suits teams that want managed Postgres with modern developer workflows.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Serverless Postgres", body: "Autoscaling compute with storage-compute separation so you pay for what you use." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Branching", body: "Branch databases for previews, testing, and development without heavyweight clones." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Managed backups & PITR", body: "Point-in-time recovery and backups to protect data; retention depends on plan." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Postgres compatibility", body: "Works with Postgres drivers, ORMs, and many extensions (check support list)." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Scalability", body: "Scale up compute quickly for spikes; plan for connection pooling to reduce cold starts." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Security & governance", body: "Managed infrastructure with access controls; enterprise plans add support and compliance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Neon review: pricing, features, pros & cons, and alternatives so you can decide if serverless Postgres fits your stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} brings serverless principles to Postgres—great for fast spin-ups, previews, and scaling without managing servers.
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
              {toolName} is a managed, serverless Postgres platform with storage-compute separation and autoscaling. It lets developers create branches for testing, scale compute up or down, and pay for usage instead of fixed instances.
            </p>
            <p className="mt-3 text-slate-700">
              It is built for modern app teams that want Postgres compatibility without managing servers, while still needing performance and branching workflows.
            </p>
            <p className="mt-3 text-slate-700">Use it for fast environments, preview branches, and production workloads where elasticity matters.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want managed Postgres with elastic compute and developer-friendly branching.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups needing quick Postgres spin-ups without DBA overhead.",
                "Product teams wanting preview branches for features.",
                "Developers building apps with variable traffic and spikes.",
                "Teams seeking Postgres compatibility with pay-as-you-go billing.",
                "Engineering orgs wanting PITR and backups managed.",
                "Teams deploying to modern hosting platforms like Vercel/Render.",
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
              {toolName} focuses on serverless Postgres with autoscaling, branching, and managed recovery for modern workflows.
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
                  {toolName} uses usage-based pricing for compute and storage, with a free tier. Higher tiers add dedicated resources, support, and enterprise features. Match your plan to traffic patterns and uptime needs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the free tier for dev/previews; move to paid when you need consistent performance, more storage, or support.</p>
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
                    <td className="px-4 py-3">Dev, testing, previews</td>
                    <td className="px-4 py-3">Usage-limited compute/storage, branching</td>
                    <td className="px-4 py-3">Great for prototypes and CI previews</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pay-as-you-go</td>
                    <td className="px-4 py-3">Small production apps</td>
                    <td className="px-4 py-3">Usage-billed compute/storage, PITR</td>
                    <td className="px-4 py-3">Scales with demand; monitor cold starts</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger workloads and compliance</td>
                    <td className="px-4 py-3">Dedicated resources, support, compliance options</td>
                    <td className="px-4 py-3">Best when SLAs and support are required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track performance patterns; use pooling to mitigate cold starts. Plan storage growth and backup retention needs; review costs as usage scales.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Serverless scaling with usage-based pricing.</li>
                  <li>Branching simplifies previews and testing.</li>
                  <li>Postgres compatibility with modern workflows.</li>
                  <li>Managed backups and PITR reduce ops overhead.</li>
                  <li>Good fit for teams on modern hosting platforms.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Cold starts and connection limits need mitigation.</li>
                  <li>Some extensions may not be supported; check lists.</li>
                  <li>Self-hosted control is limited compared to running Postgres directly.</li>
                  <li>Costs can rise with sustained high compute; consider reserved resources if needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other managed databases to balance Postgres compatibility, pricing, and developer experience.
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
            <p className="text-slate-700">See how {toolName} compares with other managed database platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supabase</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/supabase">
                  View Supabase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supabase offers Postgres plus auth, storage, and real-time APIs. {toolName} focuses on serverless Postgres with branching. Choose based on whether you want an app backend bundle or a database-first service.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs PlanetScale</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/planetscale">
                  View PlanetScale
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                PlanetScale provides serverless MySQL with branching. {toolName} offers Postgres. Pick based on your database preference and extension requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want managed, serverless Postgres with branching and autoscaling, and you can handle connection pooling and any cold start considerations.
            </p>
            <p className="mt-3 text-slate-700">
              For very steady high loads, compare costs with reserved resources or traditional managed Postgres; for spiky and fast-moving teams, {toolName} fits well.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for modern app teams needing elastic Postgres and preview-friendly workflows; plan for pooling and supported extensions.
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
            <p>Choose {toolName} if you want elastic Postgres with branching and managed backups without running servers.</p>
            <p>
              Keep an eye on cold starts, connection limits, and extension support. Upgrade when you need dedicated resources or enterprise support.
            </p>
            <p>{toolName} makes Postgres easy to spin up and scale—good planning around pooling and cost keeps it efficient.</p>
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

export default NeonToolPage;
