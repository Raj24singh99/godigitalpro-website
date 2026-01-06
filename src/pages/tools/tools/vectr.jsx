import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Vectr";
const slug = "vectr";
const category = "Vector design";
const shortPitch = "Vectr is a free vector graphics editor for simple illustrations, logos, and social assets in a lightweight interface.";
const pricingSummary =
  "Free to use; web and desktop apps available. Paid upgrades (if any) are minimal—best for basic vector needs without subscription cost.";
const officialUrl = "https://vectr.com";
const ratingValue = 3.9;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vectr.com",
  gradient: "from-purple-500 via-pink-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(168,85,247,0.24)]",
};

const alternatives = [
  { name: "Figma", slug: "figma" },
  { name: "Adobe XD", slug: "adobe-xd" },
  { name: "Sketch", slug: "sketch" },
  { name: "Affinity Designer", slug: "affinity-designer" },
  { name: "CorelDRAW", slug: "coreldraw" },
];

const faqs = [
  {
    q: "What is Vectr?",
    a: "Vectr is a free vector graphics editor for creating simple illustrations, logos, and social media assets.",
  },
  {
    q: "Who is it for?",
    a: "Beginners and teams needing lightweight vector edits without the complexity or cost of pro suites.",
  },
  {
    q: "Is it really free?",
    a: "Yes. Vectr is free; check current site for any premium options. Great for basic use cases on a budget.",
  },
  {
    q: "Can it handle advanced design?",
    a: "It’s best for simple assets. Advanced vector work, collaboration, or prototyping is better served by tools like Figma or Illustrator equivalents.",
  },
  {
    q: "Does it support collaboration?",
    a: "Basic sharing is available; real-time multi-user editing is limited compared to pro tools.",
  },
  {
    q: "Are there desktop apps?",
    a: "Yes. Web and desktop versions exist; features can vary, so confirm on their site.",
  },
  {
    q: "Can I export common formats?",
    a: "Yes. Standard vector and image export formats are supported for simple workflows.",
  },
  {
    q: "Does it have templates?",
    a: "There are templates for basic assets; expect fewer than in larger design ecosystems.",
  },
];

function VectrToolPage() {
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
        "Vectr is a free, lightweight vector editor. It works for simple assets and logos, but advanced workflows and collaboration are limited compared to pro design suites.",
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
      title: "Simple vector tools",
      body: "Basic shapes, text, paths, and effects for quick assets and logos.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Cross-platform",
      body: "Web and desktop apps so you can edit without heavy installs.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Templates",
      body: "Starter templates for simple graphics and social assets.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Learning-friendly",
      body: "Low barrier to entry for beginners; good for training and light tasks.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud saves",
      body: "Save and sync designs online; keep local copies for backup.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports",
      body: "Export to common vector and raster formats for handoff or publishing.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Vectr review: pricing, features, pros & cons, and alternatives so you can decide if this free vector editor fits your needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                  {toolName} keeps vector design lightweight and free—great for simple assets, but use pro suites for complex, collaborative work.
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
              {toolName} is a free vector editor for simple design work. It offers basic tools to create logos, icons, and social assets without complex workflows.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as an entry-level tool: ideal for quick edits and beginner training. For advanced components, collaboration, or prototyping, consider professional suites.
            </p>
            <p className="mt-3 text-slate-700">Check web vs desktop feature differences, and keep local backups of important files.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for beginners and teams needing basic vector tasks without subscription overhead.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "New designers learning vector basics.",
                "Teams creating simple social assets or icons.",
                "Founders needing quick logo/brand tweaks.",
                "Educators teaching intro design concepts.",
                "Marketers adjusting simple visuals without pro tools.",
                "Users who want free, lightweight software on web/desktop.",
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
            <p className="mt-3 text-slate-700">
              {toolName} focuses on simple vector editing, templates, cross-platform access, and basic exports.
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
                  {toolName} is free for core use. If premium options are offered, they typically add storage or collaboration; most users rely on the free tier for basic tasks.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use the free tier for simple assets. Move to pro suites (Figma, Sketch, Affinity) if you need advanced features or collaboration.</p>
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
                    <td className="px-4 py-3">Basic design</td>
                    <td className="px-4 py-3">Core vector tools, templates</td>
                    <td className="px-4 py-3">Sufficient for simple assets</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Upgrades</td>
                    <td className="px-4 py-3">If available</td>
                    <td className="px-4 py-3">Potential storage/collab features</td>
                    <td className="px-4 py-3">Check current site for details</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro suites</td>
                    <td className="px-4 py-3">Advanced needs</td>
                    <td className="px-4 py-3">Consider Figma/Sketch/Affinity</td>
                    <td className="px-4 py-3">Switch when complexity grows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Save backups and export often. For team design systems or prototypes, evaluate when to migrate to professional tools.
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
                  <li>Free and lightweight for simple work.</li>
                  <li>Easy for beginners to learn.</li>
                  <li>Web and desktop access.</li>
                  <li>Templates and basic exports included.</li>
                  <li>Good for quick, low-stakes assets.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Limited for complex vector and collaboration.</li>
                  <li>Feature depth trails pro design suites.</li>
                  <li>Real-time multi-user editing is basic.</li>
                  <li>Asset libraries/design systems not robust.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other vector tools if you need richer collaboration or advanced design features.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to pro vector tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Figma</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/figma">
                  View Figma
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Figma offers robust collaboration and prototyping; {toolName} is lighter and free for basic assets. Choose Figma for team design systems and complex UI work.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Affinity Designer</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/affinity-designer">
                  View Affinity Designer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Affinity Designer is a one-time purchase with pro-level vector tools; {toolName} is free but limited. Pick Affinity for advanced work, {toolName} for quick edits and training.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a free, lightweight vector editor for simple assets and don’t require pro collaboration or advanced features.
            </p>
            <p className="mt-3 text-slate-700">
              For complex branding, UI, or multi-user workflows, plan to upgrade to professional tools after initial exploration.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great entry-level vector tool—step up to Figma/Sketch/Affinity when your work outgrows the basics.
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
              Choose {toolName} if you need free, simple vector editing for quick assets and learning.
            </p>
            <p>
              Consider Figma or Affinity Designer for advanced work and collaboration; use {toolName} for fast, lightweight tasks.
            </p>
            <p>{toolName} lowers the barrier to vector design—upgrade when you need pro depth and teamwork.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-purple-700 hover:text-purple-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-purple-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default VectrToolPage;
