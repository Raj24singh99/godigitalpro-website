import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "PlanetScale";
const slug = "planetscale";
const category = "Serverless MySQL Database";
const shortPitch =
  "PlanetScale is a serverless MySQL platform (built on Vitess) offering branching, non-blocking schema changes, and horizontal scalability for modern apps.";
const pricingSummary =
  "Usage-based with free tier; paid tiers add higher storage/throughput, production branches, backups, and support. Enterprise for custom SLAs and scale.";
const officialUrl = "https://planetscale.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/planetscale.com",
  gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "Neon", slug: "neon-tech" },
  { name: "Supabase", slug: "supabase" },
  { name: "AWS RDS MySQL", slug: "aws-rds-mysql" },
  { name: "PlanetScale vs Neon vs Supabase", slug: "compare/planetscale-vs-neon-vs-supabase", isComparison: true },
  { name: "Railway", slug: "railway" },
];

const faqs = [
  { q: "What is PlanetScale?", a: "PlanetScale is a serverless MySQL platform using Vitess, with branching, non-blocking schema changes, and autoscaling." },
  { q: "Who is it for?", a: "Developers and product teams needing scalable MySQL with minimal ops and safe schema workflows." },
  { q: "How is pricing structured?", a: "Usage-based. Free tier to start; paid adds more storage/throughput, production features, and support." },
  { q: "Can I branch databases?", a: "Yes. Branching lets you make schema changes safely and deploy without blocking writes." },
  { q: "Is it MySQL compatible?", a: "Yes. MySQL wire-compatible, built on Vitess; check feature compatibility if using niche extensions." },
  { q: "Does it handle scaling?", a: "Autoscaling and sharding via Vitess; managed infrastructure so you avoid manual clustering." },
  { q: "How are backups handled?", a: "Automatic backups/snapshots on paid tiers; confirm retention per plan." },
  { q: "What about vendor lock-in?", a: "MySQL compatibility helps portability, but branching and control plane are proprietary; plan migrations accordingly." },
];

function PlanetScaleToolPage() {
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
        "PlanetScale delivers serverless MySQL with branching and non-blocking schema changes. It’s great for product teams that want MySQL scaling without heavy ops.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Branching & deploy requests", body: "Create branches, propose schema changes, and deploy without blocking production writes." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Serverless scalability", body: "Built on Vitess for horizontal scaling and automatic capacity management." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "MySQL compatible", body: "MySQL wire protocol with familiar tooling; check compatibility for edge cases." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations & ORMs", body: "Works with common ORMs/frameworks; includes CLI and deploy workflows." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Backups & observability", body: "Backups, metrics, and query insights on paid tiers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Security & SLAs", body: "Role-based access, tokens, and enterprise SLAs for production workloads." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="PlanetScale review: pricing, serverless MySQL features, pros & cons, and alternatives like Neon and Supabase."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Serverless MySQL, Pricing, Pros & Cons
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  {toolName} brings branching and non-blocking schema changes to MySQL, letting teams ship faster without heavy DBA overhead.
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
              {toolName} is a managed, serverless MySQL platform built on Vitess. It offers database branching, deploy requests, and non-blocking schema changes to keep production online.
            </p>
            <p className="mt-3 text-slate-700">Teams use it to scale MySQL without managing clusters, while keeping developer workflows familiar.</p>
            <p className="mt-3 text-slate-700">Check compatibility for edge-case MySQL features and plan for vendor-specific controls when considering portability.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams building on MySQL that want safer schema changes and managed scaling.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams shipping features on MySQL who want branching workflows.",
                "Startups needing serverless scale without DBAs.",
                "Engineering orgs modernizing from self-managed MySQL to managed Vitess.",
                "Teams that require non-blocking schema changes to avoid downtime.",
                "Developers wanting MySQL compatibility with CI/CD-friendly deploys.",
                "Apps expecting traffic spikes and needing elastic capacity.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on MySQL compatibility with modern branching and scaling workflows.</p>
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
                  Usage-based pricing with a free tier. Paid plans expand storage/throughput, add production branches, backups, and support. Enterprise tiers provide SLAs and custom limits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free for dev; move to paid when you need production branches, higher capacity, or support SLAs.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free/Starter</td>
                    <td className="px-4 py-3">Dev/test</td>
                    <td className="px-4 py-3">Limited storage/throughput, branching, deploy requests</td>
                    <td className="px-4 py-3">Great for prototypes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scalability/Pro</td>
                    <td className="px-4 py-3">Production apps</td>
                    <td className="px-4 py-3">Higher limits, backups, production branches, support</td>
                    <td className="px-4 py-3">Pay for usage</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large scale</td>
                    <td className="px-4 py-3">Custom capacity, SLAs, security, dedicated support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare with Neon/Supabase for Postgres-based stacks; with RDS for control preferences. Consider egress and portability for long-term planning.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Branching and non-blocking schema deploys.</li>
                  <li>Serverless scaling on Vitess; reduced ops overhead.</li>
                  <li>MySQL compatible with common tools/ORMs.</li>
                  <li>Good developer workflow with deploy requests.</li>
                  <li>Backups and observability on paid tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Proprietary control plane—consider lock-in and portability.</li>
                  <li>Some MySQL edge features may not be supported.</li>
                  <li>Costs can rise with heavy throughput/storage.</li>
                  <li>Not a fit if you need Postgres-specific features.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other managed databases.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other databases.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Neon</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/neon-tech">
                  View Neon
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Neon offers serverless Postgres with branching; {toolName} provides MySQL with Vitess. Choose based on MySQL vs Postgres needs and ecosystem fit.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Supabase</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/supabase">
                  View Supabase
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Supabase bundles Postgres with auth/storage/realtime; {toolName} is MySQL-only with a focus on schema safety. Pick based on stack requirements and bundled services.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want MySQL with branching, non-blocking schema changes, and managed scaling. It reduces ops while keeping familiar tooling.
            </p>
            <p className="mt-3 text-slate-700">Evaluate lock-in, compatibility, and cost at scale. For Postgres shops, consider Neon/Supabase instead.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top pick for MySQL teams needing safer schema deploys and serverless scale; best with clear migration and cost plans.
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
              Choose {toolName} if you want MySQL with modern branching and managed scaling, and you prefer to avoid self-managed clusters.
            </p>
            <p>
              Consider Neon or Supabase if you’re on Postgres; use AWS RDS if you need more infrastructure control. {toolName} shines for developer-friendly MySQL workflows.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PlanetScaleToolPage;
