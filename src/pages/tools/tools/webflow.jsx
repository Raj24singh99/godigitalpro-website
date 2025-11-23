import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Layers, PenTool, Globe, Server, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Webflow";
const slug = "webflow";
const category = "No-Code Builder";
const shortPitch =
  "Webflow is a visual development platform that lets marketers, designers, and agencies build responsive sites, CMS architectures, and interactions without relying on engineering sprints.";
const pricingSummary =
  "Webflow has a free Starter workspace, Site plans from $14/mo, CMS from $23/mo billed annually, and Business/Ecommerce plans for higher traffic plus Editor access. Workspaces are billed per seat.";
const officialUrl = "https://webflow.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/webflow.com",
  gradient: "from-indigo-500 via-purple-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.3)]",
};

const alternatives = [
  { name: "Framer", slug: "framer" },
  { name: "Wix", slug: "wix" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Shopify", slug: "shopify" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  { q: "Is Webflow good for agencies?", a: "Yes. Agencies use Webflow to ship marketing sites faster, control CMS structures, and hand off editing to clients without maintaining plugins." },
  { q: "Does Webflow replace WordPress?", a: "For marketing and content sites, yes—Webflow provides CMS collections, design control, and hosting. If you need heavy ecommerce or plugins, WordPress may still win." },
  { q: "What about SEO?", a: "Webflow outputs clean HTML/CSS, supports structured data, 301s, sitemaps, per-page meta, and custom fields so you can optimize like any modern stack." },
  { q: "Can I export code?", a: "You can export static sites. CMS collections, memberships, and logic stay on Webflow’s hosting." },
  { q: "Does Webflow have ecommerce?", a: "Yes—Webflow Ecommerce handles catalogs, checkout, and transactional emails for small to midsize brands." },
  { q: "How steep is the learning curve?", a: "Designers pick it up fast; marketers need time to learn classes and responsive layout. Once learned, shipping becomes much faster." },
  { q: "Is Webflow expensive?", a: "Site plans start at $14/mo billed annually. Workspaces charge per seat. Compared to dev time or WordPress maintenance, many teams find it cost effective." },
  { q: "Does Webflow integrate with other tools?", a: "Yes. Native integrations plus Zapier, Make, and the Webflow API connect CMS changes to CRMs, automation, and localization workflows." },
];

function WebflowToolPage() {
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
        "Webflow brings production-ready development into a visual canvas. Agencies and growth teams use it to iterate on landing pages, content hubs, and microsites without waiting on developers.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Layers className="h-5 w-5 text-indigo-500" />, title: "Visual development with clean code", body: "Build responsive layouts with CSS grid, flexbox, and interactions. Webflow generates semantic markup you’d expect from front-end engineers." },
    { icon: <PenTool className="h-5 w-5 text-purple-500" />, title: "CMS collections & dynamic content", body: "Structure collections with custom fields, reference relationships, and Editor access so marketing teams update pages safely." },
    { icon: <Globe className="h-5 w-5 text-blue-500" />, title: "Hosting & performance", body: "CDN-backed hosting, automatic SSL, backups, and global scaling remove DevOps work from marketing websites." },
    { icon: <Server className="h-5 w-5 text-emerald-500" />, title: "Logic, membership, & ecommerce", body: "Build gated experiences, connect logic to forms, and run ecommerce with custom checkout branding." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Integrations & automation", body: "Native integrations plus Zapier, Make, Airtable, and custom webhooks keep Webflow data synced to CRMs and analytics." },
    { icon: <ShieldCheck className="h-5 w-5 text-sky-500" />, title: "Collaboration & governance", body: "Workspaces, roles, comments, and publishing permissions give teams control over staging vs production releases." },
  ];

  const pricingTable = [
    { plan: "Starter", best: "Testing & personal projects", limits: "Up to 2 pages, Webflow domain", price: "$0" },
    { plan: "Basic", best: "Simple marketing sites", limits: "50 pages, 10k visits", price: "$14/mo billed annually" },
    { plan: "CMS", best: "Content-heavy brands", limits: "2k CMS items, 3 editors", price: "$23/mo billed annually" },
    { plan: "Business", best: "Scaling orgs", limits: "10k CMS items, 10 editors, higher bandwidth", price: "$39/mo billed annually" },
    { plan: "Workspace (Core)", best: "Teams collaborating", limits: "3 seats, staging, publishing", price: "$19/user/mo billed annually" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Webflow review for 2025 covering pricing, features, pros & cons, alternatives like Framer and WordPress, and when Webflow fits your stack."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" /> {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{toolName} Review (2025): Features, Pricing, Pros & Cons</h1>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Webflow pairs production-ready code with visual controls so teams can ship faster without compromising quality.</p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" /> Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">Webflow is a visual dev environment, CMS, and hosting platform. It helps teams build production-grade marketing sites, documentation hubs, and ecommerce experiences without traditional code handoffs.</p>
            <p className="mt-3 text-slate-700">Designers control layout and interactions, marketers edit content directly, and developers can extend with custom code, API integrations, and logic.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Webflow fits teams that need speed, design fidelity, and CMS flexibility.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies delivering marketing sites, landing pages, and microsites.",
                "SaaS companies building content hubs, docs, and launch pages.",
                "Product marketing teams iterating on experiments weekly.",
                "Startups wanting developer-grade quality without staffing front-end engineers.",
                "Designers managing portfolios or editorial brands with custom CMS fields.",
                "Enterprise teams building component libraries and localization flows.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Everything you need to design, launch, and optimize modern sites.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                <p className="mt-2 text-slate-700">Site plans cover hosting per domain, while Workspaces add collaboration and publishing controls. Billing is cheaper annually.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use CMS plan for content hubs, Business for high traffic, and Core Workspace when multiple designers collaborate.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Workspace seats are billed separately. Factor Editor seats and localization workflows into budgeting.</p>
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
                  <li>Visual dev + clean code speeds up shipping.</li>
                  <li>Robust CMS with Editor access for marketing teams.</li>
                  <li>Hosting, CDN, and backups handled automatically.</li>
                  <li>Interactions, Lottie, and logic unlock advanced UX.</li>
                  <li>APIs and automation hooks tie Webflow into modern stacks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Learning curve around classes + responsive design.</li>
                  <li>CMS item caps require careful planning.</li>
                  <li>Ecommerce still lighter than Shopify or WooCommerce.</li>
                  <li>Code export doesn’t include CMS/membership logic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare these platforms if you prioritize motion design, simplicity, or ecommerce-first stacks.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Read the full review.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Dive deeper into the most-requested comparisons.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Framer vs Wix</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webflow-vs-framer-vs-wix">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">See how Webflow stacks up against Framer’s motion-focused builder and Wix’s all-in-one simplicity.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WordPress vs Squarespace</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webflow-vs-wordpress-vs-squarespace">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Compare code export, CMS control, pricing, and maintenance across these staples.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you value speed and design fidelity, Webflow is a strong investment. It reduces developer dependency and pairs nicely with modern automation stacks.</p>
            <p className="mt-3 text-slate-700">If you need massive ecommerce, round-the-clock dev customization, or open-source flexibility, evaluate WordPress + custom code or Shopify/WooCommerce.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> Webflow is a top-tier no-code builder for serious marketing sites, doc hubs, and brand experiences.</p>
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
            <p>Choose Webflow if you need production-ready sites without heavy engineering. It shines for marketers, PMMs, and agencies wanting creative freedom.</p>
            <p>Pick alternatives like Framer for motion-heavy microsites, WordPress for plugin ecosystems, or Shopify for deeper ecommerce.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default WebflowToolPage;
