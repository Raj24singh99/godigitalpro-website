import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Railway";
const slug = "railway";
const category = "Cloud Hosting & PaaS";
const shortPitch =
  "Railway is a developer-friendly PaaS for deploying apps, databases, and services quickly with simple pricing and managed infrastructure.";
const pricingSummary =
  "Usage-based with free tier. Paid plans add higher usage limits, custom domains, team seats, and better performance; monitor egress and build minutes.";
const officialUrl = "https://railway.app";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/railway.app",
  gradient: "from-purple-500 via-indigo-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Vercel", slug: "vercel" },
  { name: "Render", slug: "render" },
  { name: "Heroku", slug: "heroku" },
  { name: "Fly.io", slug: "fly-io" },
  { name: "Railway vs Render vs Fly.io", slug: "compare/railway-vs-render-vs-flyio", isComparison: true },
];

const faqs = [
  { q: "What is Railway?", a: "Railway is a platform-as-a-service that lets developers deploy apps, databases, and services quickly with managed infrastructure." },
  { q: "Who is it for?", a: "Developers and small teams that want simple deployments, environment variables, and managed DBs without heavy ops." },
  { q: "How is pricing structured?", a: "Usage-based with a free tier; paid plans lift limits and add team features. Watch for egress and build minutes." },
  { q: "What databases are supported?", a: "Managed databases (Postgres, etc.) are available; check current offerings." },
  { q: "Does it support custom domains?", a: "Yes, on paid plans." },
  { q: "Is CI/CD included?", a: "Deploy from Git; build minutes count toward usage." },
  { q: "Is observability available?", a: "Logs and metrics are available; depth varies by plan." },
  { q: "Is human review needed?", a: "Yes. Monitor costs, security, and environment variables carefully." },
];

function RailwayToolPage() {
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
        "Railway simplifies app and database deployments with usage-based pricing. Great for developers wanting low-friction hosting; track usage and egress to manage cost.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Fast deploys", body: "Deploy from Git with minimal config; managed builds." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Managed databases", body: "Provision Postgres and other DBs with environment binding." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Environment variables", body: "Simple env management across services." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Templates & starters", body: "Start quickly with templates for common stacks." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Teams & access", body: "Team seats and permissions on paid plans." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Observability", body: "Logs/metrics built-in; monitor usage and performance." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Railway review: pricing, PaaS features, pros & cons, and alternatives like Render, Fly.io, and Vercel."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-purple-600" />
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
                  {toolName} gives developers a low-friction PaaS—great for quick deploys, provided you monitor usage and egress.
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
              {toolName} is a platform-as-a-service for deploying apps and databases with minimal configuration. It abstracts infrastructure so teams can focus on code and speed.
            </p>
            <p className="mt-3 text-slate-700">Use it for prototypes, side projects, and production apps if usage fits your budget. Track cost drivers like egress and build minutes.</p>
            <p className="mt-3 text-slate-700">Compare with other PaaS options if you need specific networking/control requirements.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for developers wanting fast deploys and managed DBs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers deploying prototypes and side projects quickly.",
                "Teams wanting managed Postgres and env binding without ops.",
                "Startups needing simple PaaS pricing with a free tier to test.",
                "Builders who prefer templates and minimal config over infra setup.",
                "Teams that can monitor usage to avoid bill surprises.",
                "Projects that don’t require heavy custom networking controls.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on developer-friendly deploys and managed services.</p>
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
                  Usage-based with a free tier. Paid plans increase usage limits, add custom domains, team features, and better performance. Costs can come from egress, build minutes, and managed DB usage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; monitor usage. Upgrade when you need custom domains, higher limits, or team seats.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing/light apps</td>
                    <td className="px-4 py-3">Usage caps, managed DBs, basic deploys</td>
                    <td className="px-4 py-3">Good for prototypes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Developer/Pro</td>
                    <td className="px-4 py-3">Regular projects</td>
                    <td className="px-4 py-3">Higher limits, custom domains, better performance</td>
                    <td className="px-4 py-3">Usage-based billing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Collaboration</td>
                    <td className="px-4 py-3">Team seats, permissions, higher quotas</td>
                    <td className="px-4 py-3">Custom/plan dependent</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Watch egress and database usage; set budgets/alerts to avoid surprises.</p>
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
                  <li>Fast deploys with minimal config.</li>
                  <li>Managed databases and env binding.</li>
                  <li>Simple usage-based pricing with free tier.</li>
                  <li>Templates help start quickly.</li>
                  <li>Team features on paid plans.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage costs can grow with egress/build minutes.</li>
                  <li>Less control than self-managed infra.</li>
                  <li>Feature set evolving; verify needed integrations.</li>
                  <li>May not suit complex networking/security needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other PaaS providers.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other hosting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Render</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/render">
                  View Render
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Render offers similar PaaS with clear pricing; {toolName} emphasizes speed and simplicity. Choose based on pricing model, features, and region support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Fly.io</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/fly-io">
                  View Fly.io
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Fly.io focuses on global app placement; {toolName} on easy deploys and managed DBs. Pick based on latency/placement needs versus simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want fast, low-friction app hosting with managed databases and can monitor usage-based costs.
            </p>
            <p className="mt-3 text-slate-700">For complex infra needs, consider more configurable platforms; otherwise, Railway offers speed and simplicity.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A developer-friendly PaaS for quick deploys—best when paired with cost monitoring and clear environment practices.
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
              Choose {toolName} if you want quick app/database deploys with managed infra and simple pricing, and you’re ready to watch usage and costs.
            </p>
            <p>
              Consider Render/Fly.io/Vercel based on features or global placement; {toolName} shines for simplicity and fast starts.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right, try it here:{" "}
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

export default RailwayToolPage;
