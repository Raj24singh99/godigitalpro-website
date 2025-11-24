import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Bubble";
const slug = "bubble";
const category = "No-Code App Builder";
const shortPitch = "Bubble is a visual web app builder that lets teams design responsive UIs, workflows, and databases without writing code.";
const pricingSummary =
  "Free tier to learn; paid plans unlock custom domains, higher capacity, version control, and collaboration. Costs scale with usage and app capacity needs.";
const officialUrl = "https://bubble.io";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/bubble.io",
  gradient: "from-indigo-500 via-purple-500 to-sky-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Adalo", slug: "adalo" },
  { name: "Glide", slug: "glide" },
  { name: "Softr", slug: "softr" },
  { name: "Bildr", slug: "bildr" },
];

const faqs = [
  {
    q: "What is Bubble?",
    a: "Bubble is a no-code platform for building full-featured web apps with a visual editor, workflows, and a built-in database.",
  },
  {
    q: "Who is it for?",
    a: "Founders, product teams, and ops groups that need to launch internal tools or SaaS products without a full engineering team.",
  },
  {
    q: "Can Bubble handle complex logic?",
    a: "Yes. Workflows can branch, schedule, and integrate with APIs. Very complex logic may still benefit from plugins or custom code via APIs.",
  },
  {
    q: "How is pricing structured?",
    a: "Free to start; paid plans add custom domains, higher capacity, collaboration, and backend scaling. Costs rise with app capacity and add-ons.",
  },
  {
    q: "Does Bubble scale for production apps?",
    a: "Many production apps run on Bubble, but performance depends on workflow design, database queries, and capacity choices.",
  },
  {
    q: "Can I export the code?",
    a: "Bubble hosts your app; you cannot export the full source. You can export data and use APIs for interoperability.",
  },
  {
    q: "Does Bubble support responsive design?",
    a: "Yes. The responsive engine lets you define breakpoints, containers, and rules to adapt layouts.",
  },
  {
    q: "Do I still need developers?",
    a: "For complex integrations, performance tuning, or security reviews, developer support helps. Non-technical teams can still ship MVPs quickly.",
  },
];

function BubbleToolPage() {
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
        "Bubble is a powerful no-code platform for building responsive web apps with workflows and a built-in database. It is strong for MVPs and internal tools; performance and scale depend on design choices.",
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Visual UI builder",
      body: "Design responsive pages with drag-and-drop elements, styles, and breakpoints.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Workflow automation",
      body: "Create event-based workflows with branching logic, scheduling, and custom actions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-purple-500" />,
      title: "Built-in database",
      body: "Model data types, privacy rules, and queries without writing SQL.",
    },
    {
      icon: <Plug className="h-5 w-5 text-orange-500" />,
      title: "API and plugins",
      body: "Connect to REST APIs, install plugins, or build your own for deeper integrations.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Hosting & scaling",
      body: "Managed hosting with capacity controls, versioning, and deployment workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Access control",
      body: "Role-based privacy rules, data protections, and audit considerations for production apps.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Bubble review: features, pricing, pros & cons, and best alternatives for building web apps without code."
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
                  {toolName} lets you launch web apps visually—great for MVPs and internal tools, with capacity controls for growth.
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
              {toolName} is a visual, no-code platform for building full web applications. You can design responsive UIs, connect workflows, and manage data without writing front-end or back-end code.
            </p>
            <p className="mt-3 text-slate-700">
              It excels for MVPs, prototypes, and internal tools where speed matters. Teams should still plan for good database structure, privacy rules, and performance practices.
            </p>
            <p className="mt-3 text-slate-700">Use APIs and plugins to integrate payments, auth, analytics, and external data sources.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for founders and teams launching apps quickly without full-code stacks.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Non-technical founders validating SaaS or marketplace ideas.",
                "Product teams shipping internal tools and dashboards fast.",
                "Ops teams automating workflows with forms, triggers, and approvals.",
                "Agencies delivering MVPs before custom engineering.",
                "Startups needing responsive web apps with built-in auth and data.",
                "Builders who want APIs and plugins without managing servers.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on visual app building, workflow automation, and hosted infrastructure so you can build without managing codebases.
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
                  {toolName} uses plan tiers with capacity units. Paid plans unlock custom domains, higher workload units, versioning, and team features. Costs rise with app usage, plugins, and storage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to prototype; upgrade when you need a custom domain, higher capacity, or collaboration.</p>
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
                    <td className="px-4 py-3">Learning & prototypes</td>
                    <td className="px-4 py-3">Core editor, limited capacity, Bubble domain</td>
                    <td className="px-4 py-3">Great to validate an idea</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Live apps with custom domains</td>
                    <td className="px-4 py-3">Custom domain, higher capacity, version control</td>
                    <td className="px-4 py-3">Watch workload spikes</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Enterprise</td>
                    <td className="px-4 py-3">Collaboration & scale</td>
                    <td className="px-4 py-3">Team features, more capacity, security options</td>
                    <td className="px-4 py-3">Best when multiple builders contribute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Monitor workload units, database queries, and plugin costs. Budget for third-party APIs (payments, auth, analytics) and performance optimization time.
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
                  <li>Visual editor for responsive web apps without code.</li>
                  <li>Powerful workflows, database, and API integrations.</li>
                  <li>Managed hosting, deployments, and versioning built-in.</li>
                  <li>Large plugin marketplace to speed up integrations.</li>
                  <li>Good for MVPs, internal tools, and quick iterations.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Exporting full source code is not available.</li>
                  <li>Performance depends on workflow design and capacity choices.</li>
                  <li>Pricing scales with workload units and add-ons.</li>
                  <li>Advanced security and architectural decisions still need expertise.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other no-code builders to match your app type, performance needs, and collaboration requirements.
            </p>
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
            <p className="text-slate-700">See how {toolName} stacks against other no-code platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/webflow">
                  View Webflow
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow is strongest for visual websites and CMS-driven marketing pages. {toolName} is better for complex web apps with workflows and databases.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Adalo</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/adalo">
                  View Adalo
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Adalo targets mobile-first apps with native wrappers; {toolName} focuses on responsive web apps. Choose based on platform targets and complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to build and iterate on web apps quickly without managing servers or writing full-stack code.
            </p>
            <p className="mt-3 text-slate-700">
              Teams should budget for capacity, plugin costs, and time to tune workflows and privacy rules for performance and security.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading no-code option for MVPs and internal tools—great speed to market, with scale tied to app design quality.
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
              Choose {toolName} if you want to launch web apps with a visual builder, built-in database, and managed hosting—without owning backend operations.
            </p>
            <p>
              Consider Webflow for marketing sites or Adalo/Glide for mobile-first experiences; use {toolName} when workflows, data models, and responsive web app logic are core.
            </p>
            <p>{toolName} helps teams move from idea to live app quickly. Invest in performance best practices and data privacy rules as you scale.</p>
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

export default BubbleToolPage;
