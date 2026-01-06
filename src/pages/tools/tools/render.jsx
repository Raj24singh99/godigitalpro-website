import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Server, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Render";
const slug = "render";
const category = "Cloud Hosting & Deploys";
const shortPitch = "Render is a cloud platform for hosting web services, static sites, databases, and cron jobs with Git-based deploys and autoscaling.";
const pricingSummary = "Usage-based pricing with free tiers. Paid plans add higher performance, persistent volumes, autoscaling, and private networking.";
const officialUrl = "https://render.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/render.com",
  gradient: "from-indigo-500 via-sky-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Heroku", slug: "heroku" },
  { name: "Railway", slug: "railway" },
  { name: "Fly.io", slug: "fly-io" },
  { name: "Vercel", slug: "vercel" },
  { name: "Netlify", slug: "netlify" },
];

const faqs = [
  { q: "What is Render?", a: "Render is a cloud hosting platform that deploys web services, static sites, and databases from Git with autoscaling and managed SSL." },
  { q: "Who is it for?", a: "Developers and teams wanting simpler deploys than DIY cloud while keeping flexibility for services, jobs, and DBs." },
  { q: "Does Render support databases?", a: "Yes. Managed PostgreSQL and Redis are available, plus persistent disks for services." },
  { q: "How is pricing structured?", a: "Usage-based with free tiers; paid tiers add more resources, autoscaling, and networking features." },
  { q: "Is autoscaling available?", a: "Yes. Services can scale based on CPU/requests; costs rise with resource usage." },
  { q: "Does it support background jobs?", a: "Yes. Cron jobs and background workers are supported alongside web services." },
  { q: "Does Render handle SSL and CDN?", a: "Managed SSL and global CDN for static sites are included." },
  { q: "Is monitoring included?", a: "Logs and basic metrics are included; integrate with APM/observability for deeper insights." },
];

function RenderToolPage() {
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
        "Render hosts web services, static sites, databases, and jobs with Git-based deploys, autoscaling, and managed SSL, offering a Heroku-like developer experience.",
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
      icon: <Server className="h-5 w-5 text-indigo-500" />,
      title: "Managed services",
      body: "Deploy web services and background workers from Git with SSL and env management.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Static sites & CDN",
      body: "Host static sites with global CDN and automatic SSL.",
    },
    {
      icon: <Folder className="h-5 w-5 text-cyan-500" />,
      title: "Databases & storage",
      body: "Managed Postgres, Redis, and persistent disks for stateful workloads.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Autoscaling",
      body: "Scale services up and down based on usage; pay for resources consumed.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      title: "Logs & metrics",
      body: "View logs and basic metrics; export to external APM or observability stacks.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Cron & background jobs",
      body: "Run scheduled jobs and workers alongside web services.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Render review: pricing, features, pros & cons, and alternatives so you can judge it for hosting and deploys."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  {toolName} offers Heroku-like deploys with managed services, DBs, cron jobs, and autoscaling on usage-based pricing.
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
              {toolName} is a cloud platform for deploying services, static sites, jobs, and databases from Git. It aims to simplify ops with managed SSL, autoscaling, and sensible defaults while keeping flexibility for custom services.
            </p>
            <p className="mt-3 text-slate-700">Use it when you want speed to deploy without managing raw cloud infrastructure.</p>
            <p className="mt-3 text-slate-700">Pair with observability and backups for production readiness.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
          <p className="mt-3 text-slate-700">Best for startups and teams wanting managed deploys with less ops overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Developers moving from Heroku-like workflows.",
                "Teams needing managed Postgres/Redis with services.",
                "Startups that want Git-based deploys and SSL without DevOps hiring.",
                "Side projects that may scale and need autoscaling later.",
                "Agencies hosting client apps with predictable workflows.",
                "Teams running cron jobs and workers alongside APIs.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on managed services, static hosting, databases, autoscaling, and job runners with simple deploys.</p>
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
                  {toolName} is usage-based with free tiers. Paid plans add more CPU/RAM, autoscaling, persistent storage, and private networking. Costs depend on runtime hours and resource sizes.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on free or low-tier services for staging; size production services to measured load and add autoscaling cautiously.</p>
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
                    <td className="px-4 py-3">Hobby & staging</td>
                    <td className="px-4 py-3">Basic resources, managed SSL, deploys</td>
                    <td className="px-4 py-3">Good for prototypes</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard/Growth</td>
                    <td className="px-4 py-3">Production apps</td>
                    <td className="px-4 py-3">More resources, autoscaling, storage</td>
                    <td className="px-4 py-3">Fits most small teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High scale</td>
                    <td className="px-4 py-3">Private networking, higher limits, support</td>
                    <td className="px-4 py-3">Choose if you need SLAs and networking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Monitor usage and autoscaling events; budget for databases and egress alongside services.</p>
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
                  <li>Simple Git-based deploys with managed SSL.</li>
                  <li>Supports services, static sites, cron jobs, and databases.</li>
                  <li>Autoscaling available with usage-based pricing.</li>
                  <li>Free tier for testing and staging.</li>
                  <li>Managed Postgres/Redis and persistent storage.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage costs can spike with aggressive autoscaling.</li>
                  <li>Less control than raw cloud for networking/custom infra.</li>
                  <li>Regional options are limited compared to hyperscalers.</li>
                  <li>Observability is basic without external tooling.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other PaaS options to match your control, region, and pricing needs.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other hosting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Heroku</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/heroku">
                  View Heroku
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Heroku is battle-tested with add-ons and pipelines; {toolName} offers modern pricing and managed DBs/disks. Choose based on ecosystem needs and pricing preferences.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Railway</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/railway">
                  View Railway
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Railway emphasizes speed and simplicity; {toolName} offers more structured service types and persistent storage. Pick based on whether you prefer minimal setup or more defined infrastructure resources.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want Heroku-style deploys with managed services, autoscaling, and usage-based pricing.
            </p>
            <p className="mt-3 text-slate-700">Monitor usage and add observability; confirm regions and networking meet your needs.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong PaaS for modern teams; best when you want speed to production without running raw cloud.</p>
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
            <p>Choose {toolName} if you want managed deploys for services, static sites, DBs, and jobs with minimal ops overhead.</p>
            <p>Consider Heroku or Railway for different ecosystems and pricing; use {toolName} when you need usage-based scaling with persistent storage options.</p>
            <p>{toolName} helps teams ship faster—add monitoring and backups for production confidence.</p>
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

export default RenderToolPage;
