import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Adalo";
const slug = "adalo";
const category = "No-Code App Builder";
const shortPitch =
  "Adalo is a no-code platform to design, build, and publish mobile and web apps with drag-and-drop components, data, and workflows.";
const pricingSummary =
  "Free tier available; paid plans unlock custom domains, publishing, higher storage/API limits, and collaboration. Pricing is monthly per app with add-ons for scale.";
const officialUrl = "https://www.adalo.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/adalo.com",
  gradient: "from-indigo-500 via-sky-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.26)]",
};

const alternatives = [
  { name: "Bubble", slug: "bubble" },
  { name: "Webflow", slug: "webflow" },
  { name: "Framer", slug: "framer" },
  { name: "Carrd", slug: "carrd" },
  { name: "Make", slug: "make" },
];

const faqs = [
  {
    q: "What can you build with Adalo?",
    a: "You can build mobile and web apps with screens, databases, workflows, payments, and notifications—without writing code.",
  },
  {
    q: "Does Adalo publish to app stores?",
    a: "Yes. Paid plans support publishing to iOS and Android stores plus custom domains for web apps.",
  },
  {
    q: "Can I add custom logic or code?",
    a: "Adalo supports custom actions, external collections, and component marketplace items. For heavy customization, you may embed custom code via components or APIs.",
  },
  {
    q: "Does Adalo handle payments?",
    a: "Yes. You can accept payments via Stripe-powered components depending on plan and region.",
  },
  {
    q: "How does data work?",
    a: "Adalo includes built-in collections and supports external data via APIs. You can build relationships, filters, and queries visually.",
  },
  {
    q: "Is there authentication?",
    a: "Adalo includes user auth, roles, and permissions you can configure per screen or action.",
  },
  {
    q: "Can I integrate with other tools?",
    a: "Yes. Use REST APIs and tools like Make/Zapier to connect Adalo to CRMs, marketing platforms, and data stores.",
  },
  {
    q: "Who is Adalo best for?",
    a: "Founders, agencies, and product teams that need to prototype or launch apps quickly without hiring developers.",
  },
];

function AdaloToolPage() {
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
        "Adalo is a no-code builder for web and mobile apps. It’s popular with founders and agencies who need to ship MVPs fast and iterate visually.",
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
      title: "Drag-and-drop builder",
      body: "Design screens, navigation, and components visually for iOS, Android, and web apps.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Built-in database",
      body: "Create collections, relationships, filters, and queries without writing SQL.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "API & integrations",
      body: "Connect to external data and services via REST APIs and automation tools like Make.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Auth & permissions",
      body: "User authentication, roles, and per-screen permissions are built in.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "App store publishing",
      body: "Publish to Apple App Store and Google Play on paid plans; use custom domains for web apps.",
    },
    {
      icon: <Folder className="h-5 w-5 text-purple-500" />,
      title: "Templates & components",
      body: "Use templates and marketplace components for payments, chat, maps, and more.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Adalo review for no-code teams: pricing, features, pros & cons, and alternatives so you can decide if it fits your next app build."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  {toolName} lets you design and launch full apps visually—ideal for MVPs and internal tools when speed matters.
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
              {toolName} is a no-code app builder for web and mobile. It combines a visual UI builder, database, and workflows so teams can prototype and launch apps without engineers.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for MVPs, client apps, internal tools, and lightweight SaaS experiments. Publish to app stores or the web with minimal setup.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations and APIs extend functionality when you need to connect to external data or services.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for builders who want to ship apps fast without writing code.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Founders validating MVPs without hiring a dev team.",
                "Agencies delivering client apps and prototypes quickly.",
                "Ops teams building internal tools and portals.",
                "Educators and communities launching member apps.",
                "Product teams testing new flows before native builds.",
                "Creators monetizing niche apps with subscriptions or payments.",
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
              {toolName} focuses on visual app building, built-in data, and fast publishing to stores and web.
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
                  {toolName} offers a free tier and paid plans that add custom domains, publishing, higher limits, and collaboration. Pricing is per app; factor in publishing fees for app stores.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Prototype on Free; move to paid when you need custom domains and store publishing.</p>
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
                    <td className="px-4 py-3">Prototyping</td>
                    <td className="px-4 py-3">Builder, basic components, Adalo domain</td>
                    <td className="px-4 py-3">Great for MVP drafts</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Pro</td>
                    <td className="px-4 py-3">Live apps</td>
                    <td className="px-4 py-3">Custom domain, higher limits, store publishing</td>
                    <td className="px-4 py-3">Monthly per app</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Scaling apps</td>
                    <td className="px-4 py-3">Collaboration, higher performance, support</td>
                    <td className="px-4 py-3">For production workloads</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Consider app store fees and automation costs (Make/Zapier) in your budget. Start free to validate UX, then upgrade when you need branding and publishing.
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
                  <li>Fast, visual app building for web and mobile.</li>
                  <li>Built-in data, auth, and publishing flows.</li>
                  <li>Marketplace components accelerate common use cases.</li>
                  <li>API support to connect external data and services.</li>
                  <li>Good for MVPs and internal tools without code.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Performance may lag for complex apps or large datasets.</li>
                  <li>Advanced custom code support is limited.</li>
                  <li>Scaling costs can rise with users and storage/API needs.</li>
                  <li>App store publishing requires paid tiers and review cycles.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other no-code builders and automation tools to match your app’s complexity and publishing needs.
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
            <p className="text-slate-700">See how {toolName} compares with other no-code builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Bubble</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/bubble">
                  View Bubble
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Bubble offers deeper logic and extensibility; {toolName} is faster to learn for mobile-first builds. Choose based on app complexity and native needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/webflow">
                  View Webflow
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow excels at web sites/CMS; {toolName} is for app-like experiences with native publishing. Choose based on whether you need app stores or rich web CMS.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need to launch mobile/web apps quickly without engineers. It’s great for MVPs, prototypes, and internal tools.
            </p>
            <p className="mt-3 text-slate-700">
              Complex logic, heavy data, or performance-sensitive apps may outgrow no-code; consider custom dev or more extensible platforms in those cases.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A fast, approachable choice for no-code app building with store publishing.
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
              Choose {toolName} if you want to prototype or ship mobile/web apps visually, with built-in data, auth, and payments.
            </p>
            <p>
              Consider Bubble for deeper logic or Webflow/Framer for marketing sites; use Make to extend {toolName} with automations when needed.
            </p>
            <p>{toolName} helps you move from idea to published app quickly with minimal engineering overhead.</p>
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

export default AdaloToolPage;
