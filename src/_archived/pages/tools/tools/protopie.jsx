import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ProtoPie";
const slug = "protopie";
const category = "Prototyping & Interaction Design";
const shortPitch =
  "ProtoPie is an advanced prototyping tool that lets designers create high-fidelity interactive prototypes with sensors, gestures, and logic without coding.";
const pricingSummary =
  "Tiered plans for individuals and teams. Higher tiers add collaboration, versioning, team libraries, and advanced features; enterprise options for larger orgs.";
const officialUrl = "https://www.protopie.io";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/protopie.io",
  gradient: "from-indigo-500 via-blue-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "Figma", slug: "figma" },
  { name: "Framer", slug: "framer" },
  { name: "Principle", slug: "principle" },
  { name: "ProtoPie vs Figma vs Framer", slug: "compare/protopie-vs-figma-vs-framer", isComparison: true },
  { name: "InVision", slug: "invision" },
];

const faqs = [
  { q: "What is ProtoPie?", a: "ProtoPie is an interaction design tool for high-fidelity prototypes with logic, sensors, and gestures—without coding." },
  { q: "Who is it for?", a: "Product/UX designers creating interactive prototypes beyond static screens." },
  { q: "Does it integrate with design tools?", a: "Yes. Import from Figma and other design tools to add interactions." },
  { q: "Is coding required?", a: "No. Interactions are built through logic, variables, and triggers visually." },
  { q: "How is pricing structured?", a: "Tiered by individual vs team; higher tiers add collaboration, libraries, and versioning." },
  { q: "Can I test on devices?", a: "Yes. Device mirroring and testing on real hardware are supported." },
  { q: "Does it support sensors?", a: "Yes. Sensors like tilt, microphone, and more can be used in prototypes." },
  { q: "Is it for production?", a: "No. It’s for prototyping; handoff to dev still required." },
];

function ProtopieToolPage() {
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
        "ProtoPie enables high-fidelity, sensor-rich prototypes without code. Great for interactive design and user testing; still requires dev handoff for production.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "High-fidelity interactions", body: "Create detailed interactions with triggers, variables, and states." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Sensor support", body: "Use sensors (tilt, mic, etc.) to prototype realistic behaviors." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Design imports", body: "Import from design tools like Figma to add interactivity." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Device testing", body: "Mirror and test prototypes on real devices for usability checks." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Team collaboration", body: "Team libraries, versioning, and shared components on higher tiers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Handoff readiness", body: "Communicate specs/behaviors to developers after testing." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ProtoPie review: pricing, interaction design features, pros & cons, and alternatives like Figma and Framer for advanced prototyping."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} lets you craft advanced interactions and sensor-based prototypes without code—great for testing realistic UX before dev.
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
              {toolName} is a prototyping platform for high-fidelity interactions. Designers can build logic, use sensors, and simulate real interactions without writing code, making usability testing more realistic.
            </p>
            <p className="mt-3 text-slate-700">Use it to validate complex interactions before development; it complements design tools like Figma.</p>
            <p className="mt-3 text-slate-700">Developers still need specs/hand-off; ProtoPie is not a production runtime.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for designers needing advanced interactive prototypes.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product designers prototyping gestures, animations, and logic-heavy flows.",
                "UX teams testing realistic interactions with users.",
                "Designers importing from Figma and adding advanced interactivity.",
                "Teams needing sensor-based prototypes (tilt, mic, device inputs).",
                "Studios handing detailed interaction specs to developers.",
                "Organizations wanting shared libraries and versioning for prototypes.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on high-fidelity interactions, sensors, and team workflows.</p>
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
                  Plans differ for individuals and teams. Higher tiers add collaboration, versioning, shared libraries, and advanced features. Enterprise options exist for larger organizations.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start individual for testing; move to team when you need shared libraries, versioning, and collaboration.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Individual</td>
                    <td className="px-4 py-3">Solo designers</td>
                    <td className="px-4 py-3">Full prototyping features, limited collaboration</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Design teams</td>
                    <td className="px-4 py-3">Team libraries, versioning, collaboration</td>
                    <td className="px-4 py-3">Most common</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs</td>
                    <td className="px-4 py-3">Security, SSO, custom support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate team needs for libraries and governance. Compare to Figma/Framer for collaboration depth and handoff requirements.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items_center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>High-fidelity interactions without code.</li>
                  <li>Sensor support for realistic prototypes.</li>
                  <li>Device testing for usability validation.</li>
                  <li>Imports from design tools like Figma.</li>
                  <li>Team libraries and versioning on higher tiers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items_center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Learning curve for advanced logic/sensors.</li>
                  <li>Not a production runtime—handoff still required.</li>
                  <li>Collaboration and versioning depend on plan.</li>
                  <li>Overlap with design tools; ensure team adoption.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other prototyping tools.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other prototyping platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Figma Prototyping</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/figma">
                  View Figma
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Figma prototyping covers common flows; {toolName} excels at advanced interactions and sensors. Choose based on complexity and testing needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items_center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Framer</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/framer">
                  View Framer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Framer can ship web experiences; {toolName} is focused on prototyping complex interactions. Pick Framer for deployable prototypes, {toolName} for advanced testing.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need high-fidelity, interactive prototypes with sensors and logic and you want to validate UX before development.
            </p>
            <p className="mt-3 text-slate-700">For simpler flows, Figma may suffice; for deployable prototypes, consider Framer. Keep developer handoff in mind.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A top choice for advanced interaction prototyping; best when teams will use it for usability testing and clear handoff to dev.
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
              Choose {toolName} if you need advanced, realistic prototypes with sensors and logic to validate UX before development.
            </p>
            <p>
              Consider Figma/Framer for lighter or deployable prototypes; {toolName} excels when interaction depth and testing fidelity matter most.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, try it here:{" "}
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

export default ProtopieToolPage;
