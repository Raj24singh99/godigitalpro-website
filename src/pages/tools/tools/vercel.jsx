import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Vercel";
const slug = "vercel";
const category = "Cloud hosting";
const shortPitch = "Vercel is a frontend cloud for deploying Next.js and modern web apps with edge delivery, serverless functions, and previews.";
const pricingSummary =
  "Free and paid tiers by usage and seats. Higher plans add more bandwidth, edge/compute limits, analytics, and enterprise features like SSO and SLAs.";
const officialUrl = "https://vercel.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vercel.com",
  gradient: "from-slate-900 via-slate-700 to-indigo-700",
  glow: "shadow-[0_20px_80px_rgba(15,23,42,0.28)]",
};

const alternatives = [
  { name: "Netlify", slug: "netlify" },
  { name: "Render", slug: "render" },
  { name: "Railway", slug: "railway" },
  { name: "Supabase", slug: "supabase" },
  { name: "AWS Amplify", slug: "aws-amplify" },
];

const faqs = [
  {
    q: "What is Vercel?",
    a: "Vercel is a hosting platform optimized for Next.js and modern frontends, offering edge network delivery, serverless functions, and instant previews.",
  },
  {
    q: "Who is it for?",
    a: "Frontend teams, Next.js developers, and SaaS/products that want fast deployments, previews, and edge delivery without managing infra.",
  },
  {
    q: "How is pricing structured?",
    a: "Free for hobby; paid plans scale with bandwidth, serverless/edge execution, seats, and enterprise features like SSO and SLAs.",
  },
  {
    q: "Does it require Next.js?",
    a: "No, but it’s optimized for Next.js and supports many frameworks (React, SvelteKit, Nuxt, etc.).",
  },
  {
    q: "Are there serverless functions?",
    a: "Yes. Serverless and edge functions are supported; monitor cold starts and limits for heavy workloads.",
  },
  {
    q: "Does it include analytics?",
    a: "Vercel Analytics provides lightweight insights; you can pair with other analytics tools as needed.",
  },
  {
    q: "What about databases?",
    a: "Vercel partners with DB providers (e.g., Supabase/PlanetScale); databases are external to Vercel.",
  },
  {
    q: "Is it enterprise-ready?",
    a: "Enterprise adds SSO, SLAs, observability integrations, and custom limits; verify compliance needs.",
  },
];

function VercelToolPage() {
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
        "Vercel provides edge-first hosting and serverless for modern web apps. Excellent for Next.js and frontend teams; watch usage limits and pair with external databases.",
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
      title: "Edge network",
      body: "Global edge delivery for static assets and edge functions to reduce latency.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Serverless & edge functions",
      body: "API routes and edge functions with autoscaling; monitor limits for heavy tasks.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Preview deployments",
      body: "Automatic previews for every git branch to speed reviews and QA.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Observability & security",
      body: "Integrations for logging/monitoring; custom domains and TLS by default.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Framework support",
      body: "Optimized for Next.js; supports many frameworks and static/SSR/ISR patterns.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Analytics & integrations",
      body: "Built-in analytics plus integrations for databases, auth, and third-party services.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Vercel review: pricing, features, pros & cons, and alternatives so you can evaluate hosting modern web apps and Next.js projects."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-slate-900/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-slate-900" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-slate-200 blur-3xl" />
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
                  {toolName} delivers frontends fast with edge and serverless—monitor usage, pair with external DB/auth, and keep CI/CD hygiene for reliable deploys.
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
              {toolName} is a hosting platform built for modern web frameworks, especially Next.js. It offers edge delivery, serverless/edge functions, preview deploys, and integrations to ship frontends quickly.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a frontend platform: databases, background jobs, and heavy workloads may need external services. Watch limits to avoid surprises on cold starts or bandwidth.
            </p>
            <p className="mt-3 text-slate-700">Set up observability and error tracking early to keep deploys stable.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for frontend-heavy teams shipping Next.js or similar frameworks with fast iteration cycles.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Next.js teams needing edge delivery and previews.",
                "SaaS products wanting quick CI/CD for frontends.",
                "Agencies building marketing sites and web apps.",
                "Developers who prefer serverless/edge over managing servers.",
                "Teams integrating with external DB/auth providers.",
                "Orgs needing enterprise SSO/SLAs for frontend hosting.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-slate-900" />
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
              {toolName} focuses on edge delivery, serverless/edge functions, previews, observability, framework support, and integrations.
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
                  {toolName} offers free, Pro, and Enterprise plans. Costs scale with bandwidth, function execution, seats, and features like SSO/SLAs. Monitor usage to avoid overages.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use Free/Hobby for prototypes; move to Pro when you need custom domains, more bandwidth, and higher limits; Enterprise for SSO/SLAs and larger scale.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Hobby/Free</td>
                    <td className="px-4 py-3">Prototypes/personal</td>
                    <td className="px-4 py-3">Basic bandwidth, functions, previews</td>
                    <td className="px-4 py-3">Good for testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams in production</td>
                    <td className="px-4 py-3">More bandwidth/exec, analytics, domains</td>
                    <td className="px-4 py-3">Common for SaaS/marketing sites</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Custom limits, SSO, SLAs, support</td>
                    <td className="px-4 py-3">Needed for compliance/scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track bandwidth/function usage and cold start impact. Pair with a managed database and observability stack for full coverage.
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
                  <li>Edge-first hosting optimized for modern frameworks.</li>
                  <li>Preview deploys for every branch.</li>
                  <li>Serverless and edge functions included.</li>
                  <li>Strong Next.js integration.</li>
                  <li>Built-in analytics and many integrations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Usage-based costs can spike with traffic/functions.</li>
                  <li>Databases and heavy jobs require external services.</li>
                  <li>Cold starts/limits can affect heavy workloads.</li>
                  <li>Enterprise features locked to higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other hosting platforms to match your framework, database, and budget needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other frontend clouds.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Netlify</h3>
                <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href="/tools/netlify">
                  View Netlify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Netlify is strong for Jamstack/static sites; {toolName} is tuned for Next.js and SSR/ISR. Choose based on framework and SSR needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Render</h3>
                <a className="text-sm font-semibold text-slate-900 hover:text-slate-700" href="/tools/render">
                  View Render
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Render supports broader app types and managed DBs; {toolName} excels at frontends with edge delivery. Pick based on whether you need full-stack hosting or frontend-first speed.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you build modern frontends (especially Next.js) and want edge delivery, previews, and serverless without managing infra.
            </p>
            <p className="mt-3 text-slate-700">
              Watch usage-based costs, plan for external databases, and set observability early. Upgrade when you need higher limits or enterprise features.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top choice for Next.js/frontends—best with careful tracking of usage and complementary backend services.
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
              Choose {toolName} if you want fast, edge-first hosting for Next.js and modern frontends with minimal ops overhead.
            </p>
            <p>
              Consider Netlify for Jamstack/static or Render for broader app hosting; use {toolName} when frontend speed and previews are top priority.
            </p>
            <p>{toolName} accelerates frontend delivery—monitor usage and pair with reliable databases and observability.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-slate-900 hover:text-slate-700" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default VercelToolPage;
