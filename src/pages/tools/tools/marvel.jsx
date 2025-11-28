import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Marvel";
const slug = "marvel";
const category = "Design & Prototyping";
const shortPitch = "Marvel is a design and prototyping platform for wireframes, interactive prototypes, user testing, and handoff to development.";
const pricingSummary = "Plans scale by projects and collaboration. Higher tiers add user testing, advanced handoff, and team permissions.";
const officialUrl = "https://marvelapp.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/marvelapp.com",
  gradient: "from-sky-500 via-indigo-500 to-purple-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.2)]",
};

const alternatives = [
  { name: "Figma", slug: "figma" },
  { name: "Sketch", slug: "sketch" },
  { name: "Adobe XD", slug: "adobe-xd" },
  { name: "InVision", slug: "invision" },
  { name: "ProtoPie", slug: "protopie" },
];

const faqs = [
  { q: "What is Marvel used for?", a: "Marvel is used to design wireframes, create interactive prototypes, run user tests, and hand off specs to developers." },
  { q: "Is it browser-based?", a: "Yes. Marvel runs in the browser, making access easy for collaborators." },
  { q: "Does it support user testing?", a: "Yes. Built-in user testing and recordings help validate flows and gather feedback." },
  { q: "Can developers get assets?", a: "Developers can view specs and download assets for implementation." },
  { q: "Is it suitable for large teams?", a: "It works for teams, but large design system needs may require more advanced component management elsewhere." },
  { q: "Does it have templates?", a: "Marvel offers templates and components to speed up wireframing and prototyping." },
  { q: "Is offline support available?", a: "Marvel is primarily browser-based; offline support is limited compared with desktop apps." },
  { q: "Can it handle animations?", a: "Animations are available but more basic than advanced motion design tools." },
];

function MarvelToolPage() {
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
        "Marvel provides fast wireframing, prototyping, user testing, and handoff features. It suits teams that want lightweight design workflows without heavy tooling.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Wireframes and design", body: "Create screens quickly with components, templates, and a lightweight editor." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Interactive prototyping", body: "Link screens and add interactions to test user flows and states." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "User testing", body: "Gather feedback with user tests, recordings, and task completion insights." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Handoff and specs", body: "Share design specs, assets, and CSS for developers to implement." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect with tools like Jira, Trello, and Slack for updates and collaboration." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Collaboration", body: "Commenting, sharing, and permissions keep reviews organized for teams." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Marvel review: pricing, features, pros & cons, and alternatives so you can decide if its prototyping fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  {toolName} simplifies wireframing and prototyping so teams can validate ideas and hand off specs quickly without heavyweight design tools.
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
              {toolName} is a browser-based design tool for creating wireframes and interactive prototypes with simple collaboration, user testing, and developer handoff.
            </p>
            <p className="mt-3 text-slate-700">
              It is lighter than enterprise design systems, making it best for teams wanting speed and straightforward reviews. Complex design system teams may still need deeper component governance elsewhere.
            </p>
            <p className="mt-3 text-slate-700">Use it to validate flows, gather feedback, and hand off specs and assets to developers quickly.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for product teams that want quick prototypes and simple handoff without heavy design system overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product managers validating flows with stakeholders.",
                "Designers creating quick mobile and web prototypes.",
                "Startups needing lightweight design and user testing.",
                "Developers reviewing specs and assets for handoff.",
                "Agencies producing client prototypes fast.",
                "Teams collaborating without installing heavy desktop apps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on speed, collaboration, and handoff for wireframes and prototypes with built-in testing.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify_center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
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
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify_between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  {toolName} pricing scales by projects and collaboration features. Higher tiers add user testing, handoff enhancements, and permissions. Choose based on project volume and team size.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier for prototyping; upgrade for team permissions, testing, and more projects as collaboration grows.</p>
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
                    <td className="px-4 py-3">Individuals testing ideas</td>
                    <td className="px-4 py-3">Limited projects, prototyping basics</td>
                    <td className="px-4 py-3">Great for quick validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">More projects, user testing, handoff features</td>
                    <td className="px-4 py-3">Fits most startup workflows</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Enterprise</td>
                    <td className="px-4 py-3">Larger organizations</td>
                    <td className="px-4 py-3">Permissions, security features, priority support</td>
                    <td className="px-4 py-3">Best when multiple teams collaborate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor in project count and collaboration needs. If you outgrow Marvel for complex design systems, plan migration to a tool with deeper component governance.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items_center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast, browser-based wireframing and prototypes.</li>
                  <li>Simple collaboration and commenting.</li>
                  <li>User testing and recordings built in.</li>
                  <li>Developer handoff with specs and assets.</li>
                  <li>Lower learning curve than heavier design suites.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less powerful than tools with full component systems.</li>
                  <li>Large design systems may need external management.</li>
                  <li>Offline support is limited versus desktop apps.</li>
                  <li>Advanced animation features are basic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other design tools to balance simplicity, collaboration depth, and design system needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify_between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other prototyping platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Figma</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/figma">
                  View Figma
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Figma offers robust design systems and multiplayer editing. {toolName} is simpler and faster for lightweight prototyping. Pick Figma for complex design systems, {toolName} for quick prototypes and testing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify_between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs InVision</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/invision">
                  View InVision
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                InVision focuses on prototyping and enterprise collaboration; {toolName} offers built-in design tools with simple workflows. Choose based on how deep your design system and approvals need to go.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want quick prototypes, user testing, and handoff without heavy design overhead.
            </p>
            <p className="mt-3 text-slate-700">
              Use it for early-stage validation and collaboration; migrate to system-heavy tools if you need complex component governance later.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for rapid prototyping and sharing; less suited for large design systems requiring deep component control.
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
            <p>Use {toolName} to move quickly from ideas to prototypes, test flows, and hand off specs to developers.</p>
            <p>
              Upgrade as collaboration grows and you need more projects, testing, or permissions; consider system-heavy tools later if you need deep component management.
            </p>
            <p>{toolName} keeps prototyping fast and accessible—human review and design standards still matter for production quality.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default MarvelToolPage;
