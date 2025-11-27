import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BookOpen, Globe2, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Figma";
const slug = "figma";
const category = "Design & Prototyping";
const shortPitch =
  "Figma is a collaborative design platform for UI/UX teams to design, prototype, and hand off products in the browser with live multiplayer editing.";
const pricingSummary =
  "Free tier for individuals; Professional around $15/editor/month billed annually; Organization/Enterprise add SSO, advanced libraries, and governance.";
const officialUrl = "https://www.figma.com";
const ratingValue = 4.8;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/figma.com",
  gradient: "from-indigo-500 via-violet-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Sketch", slug: "sketch" },
  { name: "Adobe XD", slug: "adobe-xd" },
  { name: "Penpot", slug: "penpot" },
  { name: "Framer", slug: "framer" },
  { name: "Canva", slug: "canva" },
];

const faqs = [
  {
    q: "Is Figma good for teams?",
    a: "Yes. Real-time collaboration, comments, and shared libraries make it ideal for distributed design and product teams.",
  },
  {
    q: "Does Figma support prototyping?",
    a: "Yes. You can build interactive prototypes with animations, variables, and component states without code.",
  },
  {
    q: "How does developer handoff work?",
    a: "Developers can inspect designs, export assets, and view code snippets directly in the browser—no separate files needed.",
  },
  {
    q: "Are there design systems and libraries?",
    a: "Shared libraries, styles, and variables let teams maintain design systems; Org/Enterprise add advanced permissions.",
  },
  {
    q: "Does Figma have offline support?",
    a: "Desktop apps support limited offline editing; most collaboration is cloud-first.",
  },
  {
    q: "Is there a plugin ecosystem?",
    a: "Yes. Thousands of plugins and widgets extend functionality for automation, accessibility, and integrations.",
  },
  {
    q: "What about FigJam?",
    a: "FigJam is the collaborative whiteboard inside Figma for workshops and brainstorming, available on similar plans.",
  },
  {
    q: "Is Figma secure for enterprise?",
    a: "Enterprise plans include SSO, audit logs, and granular admin controls for compliance-minded teams.",
  },
];

function FigmaToolPage() {
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
        "Figma is the leading collaborative design platform with real-time editing, prototyping, and design system management—all in the browser.",
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
      icon: <Sparkles className="h-5 w-5 text-violet-500" />,
      title: "Real-time collaboration",
      body: "Multiple people design simultaneously with comments, cursor chat, and multiplayer presence.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
      title: "Design systems and libraries",
      body: "Shared components, styles, and variables keep products consistent across squads.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Prototyping and motion",
      body: "Interactive prototypes with animations, conditions, and variables—no extra tools needed.",
    },
    {
      icon: <Plug className="h-5 w-5 text-cyan-500" />,
      title: "Plugins and integrations",
      body: "Rich ecosystem of plugins plus integrations with Jira, Slack, Notion, and dev workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Enterprise security",
      body: "SSO, audit logs, and admin controls on Organization/Enterprise keep access governed.",
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-500" />,
      title: "FigJam collaboration",
      body: "Whiteboarding for discovery, workshops, and research alongside design files.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Figma review for product and design teams: pricing, features, pros & cons, and alternatives for collaborative UI/UX design."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-violet-500" />
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
                  Figma keeps design, prototyping, and collaboration in one place so product teams move faster with fewer handoffs.
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
              {toolName} is a {category.toLowerCase()} platform where teams design interfaces, build prototypes, and manage design systems together in the cloud.
            </p>
            <p className="mt-3 text-slate-700">
              Designers, PMs, and engineers can co-edit, comment, and inspect files without exports. FigJam adds whiteboarding for discovery and workshops.
            </p>
            <p className="mt-3 text-slate-700">
              Plugins and integrations extend workflows, while Organization/Enterprise plans add governance for larger companies.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} suits product design teams, agencies, and cross-functional squads that need live collaboration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product designers collaborating with PMs and engineers in real time.",
                "Agencies working with clients in shared files and prototypes.",
                "Teams building and enforcing design systems across products.",
                "Researchers and facilitators running workshops in FigJam.",
                "Developers needing accurate specs and assets without exports.",
                "Enterprises requiring SSO, audit logs, and admin governance.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
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
              {toolName} emphasizes multiplayer design, prototyping, and design system management to keep teams aligned from ideation to handoff.
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
                  Free plan for individuals; Professional around $15/editor/month billed annually; Organization/Enterprise add SSO, advanced libraries, admin controls, and security.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Free/Professional; move to Organization when you need design system governance, SSO, and admin controls.</p>
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
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter (Free)</td>
                    <td className="px-4 py-3">Individuals and early teams</td>
                    <td className="px-4 py-3">Limited projects, fewer permissions</td>
                    <td className="px-4 py-3">Free</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Growing product teams</td>
                    <td className="px-4 py-3">Unlimited files, shared libraries</td>
                    <td className="px-4 py-3">~$15/editor/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Organization/Enterprise</td>
                    <td className="px-4 py-3">Enterprises with governance needs</td>
                    <td className="px-4 py-3">SSO, audit logs, advanced admin/security</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in editors vs. viewers, need for design system governance, and security requirements. Annual billing lowers per-editor cost.
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
                  <li>Best-in-class real-time collaboration.</li>
                  <li>Robust prototyping without extra tools.</li>
                  <li>Strong design system capabilities.</li>
                  <li>Rich plugin ecosystem and integrations.</li>
                  <li>Simple dev handoff in the browser.</li>
                  <li>FigJam for workshops and research.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heavy files can feel slow on low-power machines.</li>
                  <li>Offline support is limited compared to desktop-first tools.</li>
                  <li>Enterprise governance and SSO are locked to higher tiers.</li>
                  <li>Costs scale with editor seats as teams grow.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              {toolName} competes with design and prototyping tools. Choose based on platform preference, offline needs, and design system depth.
            </p>
            <p className="mt-2 text-slate-700">Every link below goes to a live tool page—no broken routes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Compare {toolName} to other design platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Sketch</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/figma-vs-sketch">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Sketch is Mac-first with strong plugins. {toolName} is browser-based with real-time collaboration and cross-platform support.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for multiplayer cloud workflows; choose Sketch if you prefer native macOS performance and an established plugin ecosystem.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Framer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/figma-vs-framer">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Framer focuses on high-fidelity, production-ready sites with code-based interactions. {toolName} centers on product design and prototyping with design systems.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for product UI/UX collaboration; choose Framer if you want to publish live sites from your designs quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need collaborative UI design, prototyping, and design systems in one place, {toolName} is worth it. It reduces handoffs and speeds iteration.
            </p>
            <p className="mt-3 text-slate-700">
              If offline-first or single-platform workflows matter most, Sketch or Penpot might fit better. For site publishing, look at Framer or Webflow alongside {toolName}.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} remains the top choice for collaborative product design and handoff in 2025.
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
              Choose {toolName} if you want collaborative design, prototyping, and design system management in a browser-based platform.
            </p>
            <p>
              Consider Sketch or Penpot for offline/native preferences, and Framer or Webflow if you’re focused on shipping live experiences from designs.
            </p>
            <p>{toolName} helps product teams move from discovery to handoff with fewer friction points and strong ecosystem support.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FigmaToolPage;
