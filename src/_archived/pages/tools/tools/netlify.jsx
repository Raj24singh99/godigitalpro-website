import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Netlify";
const slug = "netlify";
const category = "Hosting & Jamstack";
const shortPitch = "Netlify is a Jamstack platform for hosting, CI/CD, serverless functions, and edge features to deploy modern web apps quickly.";
const pricingSummary = "Free and paid tiers by seats and usage. Higher plans add team features, edge functions, enterprise support, and compliance.";
const officialUrl = "https://www.netlify.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/netlify.com",
  gradient: "from-emerald-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Vercel", slug: "vercel" },
  { name: "Render", slug: "render" },
  { name: "Cloudflare Pages", slug: "cloudflare" },
  { name: "AWS Amplify", slug: "amplify" },
  { name: "GitHub Pages", slug: "github" },
];

const faqs = [
  { q: "What is Netlify?", a: "Netlify is a Jamstack platform providing hosting, CI/CD, serverless functions, and edge features for modern web apps." },
  { q: "Who is it for?", a: "Developers and teams building static sites, frontends, and Jamstack apps who want integrated deploys and serverless functions." },
  { q: "Does it include CI/CD?", a: "Yes. Netlify builds and deploys from your repo with previews and branch deploys." },
  { q: "Are functions supported?", a: "Yes. Netlify Functions and Edge Functions let you run serverless logic close to users." },
  { q: "How is pricing structured?", a: "Free tier for hobby/small projects; paid tiers add seats, usage limits, and enterprise support/compliance." },
  { q: "Does it support custom domains?", a: "Yes. You can add custom domains, SSL, and DNS management." },
  { q: "Can I use any framework?", a: "Netlify supports popular frameworks (Next, Gatsby, Astro, etc.). Check build guides for specifics." },
  { q: "Is there analytics?", a: "Netlify offers add-on analytics; you can also integrate third-party analytics." },
];

function NetlifyToolPage() {
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
        "Netlify offers Jamstack hosting, CI/CD, serverless functions, and edge capabilities. It fits teams that want integrated deploys and globally distributed hosting.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "CI/CD & deploy previews", body: "Build and deploy from git with branch previews and rollbacks." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Global CDN", body: "Serve sites from a global edge network for performance." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Serverless & edge", body: "Run serverless and edge functions for dynamic logic close to users." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Forms & functions", body: "Built-in form handling, background functions, and scheduled jobs." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Framework support", body: "Supports Next.js, Gatsby, Astro, and more with optimized builds." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Domains & SSL", body: "Custom domains, automatic SSL, and DNS management." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Netlify review: pricing, features, pros & cons, and alternatives to decide if it fits your Jamstack hosting needs."
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
                  {toolName} streamlines Jamstack hosting, CI/CD, and functions. Ship fast with previews, then scale globally on the CDN and edge.
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
              {toolName} is a platform for hosting and deploying Jamstack sites and frontends. It provides CI/CD, serverless functions, edge functions, forms, DNS, and previews so teams can ship quickly without managing servers.
            </p>
            <p className="mt-3 text-slate-700">
              It is best for frontend-heavy apps, static sites, and APIs handled via functions. For heavy backend needs, pair with managed databases or APIs.
            </p>
            <p className="mt-3 text-slate-700">Use it to streamline deploys, previews, and edge logic while keeping infrastructure simple.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for frontend teams, agencies, and product squads shipping Jamstack experiences.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Frontend teams building static or SSR sites.",
                "Agencies needing fast previews and client approvals.",
                "Developers deploying marketing sites and docs.",
                "Teams running serverless functions for APIs and forms.",
                "Startups wanting simple hosting with CI/CD baked in.",
                "Projects that benefit from edge functions for performance.",
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
              {toolName} focuses on CI/CD, global hosting, serverless/edge capabilities, and built-ins like forms and DNS to support modern web workflows.
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
                  {toolName} offers a free tier and paid plans by seats and usage. Higher tiers add team controls, edge features, SLAs, and compliance. Align your plan with traffic, function usage, and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use the free tier for small projects; move to Pro/Business for teams, edge functions, and higher limits; enterprise for compliance and dedicated support.</p>
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
                    <td className="px-4 py-3">Hobby and small sites</td>
                    <td className="px-4 py-3">Basic builds, limited functions, CDN hosting</td>
                    <td className="px-4 py-3">Great for testing and small projects</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams and client work</td>
                    <td className="px-4 py-3">More seats, higher limits, edge functions</td>
                    <td className="px-4 py-3">Fits most production frontends</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger orgs</td>
                    <td className="px-4 py-3">SLA, compliance, support, custom limits</td>
                    <td className="px-4 py-3">Best when compliance/support are required</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track build minutes, function invocations, and bandwidth. Consider add-ons like analytics or edge features as needs grow.
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
                  <li>Integrated CI/CD with deploy previews.</li>
                  <li>Global CDN and edge functions for speed.</li>
                  <li>Built-in forms, functions, DNS, and SSL.</li>
                  <li>Great framework support for modern frontends.</li>
                  <li>Easy custom domains and rollbacks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heavy backend workloads may need external services.</li>
                  <li>Function cold starts and limits need planning.</li>
                  <li>Pricing scales with usage and seats; watch build minutes.</li>
                  <li>Enterprise features require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other Jamstack and serverless hosts to match performance, features, and pricing.
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
            <p className="text-slate-700">See how {toolName} compares with other Jamstack platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Vercel</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/vercel">
                  View Vercel
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Vercel is tightly optimized for Next.js and edge features; {toolName} is framework-agnostic with strong Jamstack tooling. Choose based on framework fit and pricing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Render</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/render">
                  View Render
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Render supports web services, databases, and static sites; {toolName} focuses on Jamstack hosting and functions. Pick based on whether you need broader backend hosting or specialized frontend workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want integrated CI/CD, serverless functions, and edge hosting for modern web apps with minimal ops overhead.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure the function limits and pricing fit your workload; keep backend-heavy services on dedicated providers if needed.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong Jamstack platform; best when paired with clear build pipelines and awareness of usage limits.
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
            <p>Use {toolName} to deploy modern frontends with built-in CI/CD, functions, and edge hosting.</p>
            <p>
              Upgrade as your team and usage grow; keep an eye on build minutes and function limits; pair with backend services as needed.
            </p>
            <p>{toolName} makes shipping Jamstack apps fast—govern usage and architecture to keep it cost-effective.</p>
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

export default NetlifyToolPage;
