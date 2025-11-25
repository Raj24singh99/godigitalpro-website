import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Gravit Designer";
const slug = "gravit-designer";
const category = "Vector Design & UI";
const shortPitch =
  "Gravit Designer (now Corel Vector) is a browser-based vector design app with templates, UI kits, and exports for digital teams.";
const pricingSummary =
  "Free plan with core tools; Pro unlocks advanced exports, offline/desktop access, unlimited storage, and brand assets.";
const officialUrl = "https://www.designer.io/";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/designer.io",
  gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Figma", slug: "figma" },
  { name: "Sketch", slug: "sketch" },
  { name: "Adobe XD", slug: "adobe-xd" },
  { name: "Canva", slug: "canva" },
  { name: "Affinity Designer", slug: "affinity-designer" },
];

const faqs = [
  {
    q: "What is Gravit Designer?",
    a: "Gravit Designer (Corel Vector) is a cross-platform vector design app that runs in the browser and via desktop, suitable for UI, marketing, and illustration work.",
  },
  {
    q: "Who is it for?",
    a: "Designers and marketers who need accessible vector tools for UI mockups, icons, and social graphics without heavy desktop installs.",
  },
  {
    q: "Does it support collaboration?",
    a: "You can share files via cloud storage links; real-time multiplayer like Figma is limited, so feedback often happens via exports or comments elsewhere.",
  },
  {
    q: "How is pricing structured?",
    a: "Free tier for basics; Pro is a subscription with offline/desktop apps, unlimited cloud files, advanced export formats, and brand assets.",
  },
  {
    q: "Can it replace Adobe Illustrator or Figma?",
    a: "It can cover many vector tasks, but deep illustration/print workflows and full collaborative design systems may still be better in Illustrator or Figma.",
  },
  {
    q: "Does it run offline?",
    a: "Offline and desktop access are part of the Pro plan; the free tier is browser-based and requires connectivity.",
  },
  {
    q: "Is there a learning curve?",
    a: "The UI is approachable, especially for Canva or Figma users. Vector fundamentals still matter for precision work.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Exports to SVG, PDF, PNG, and more make it easy to hand off assets to dev, marketing, and print workflows.",
  },
];

function GravitDesignerToolPage() {
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
        "Gravit Designer delivers a capable browser-based vector editor with templates and exports. It is convenient for everyday UI and marketing assets, but power users may still prefer Figma or Illustrator.",
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
      title: "Vector-first workspace",
      body: "Pen, shape, boolean, and path tools for UI, icons, and illustrations.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Templates & UI kits",
      body: "Start faster with presets for web, mobile, social posts, and marketing assets.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Smart export",
      body: "Export to SVG, PDF, PNG, and JPG with slices and asset organization.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Cross-platform",
      body: "Runs in-browser; Pro adds desktop/offline for Mac, Windows, Linux, and ChromeOS.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Cloud sync",
      body: "Save files to the cloud to access them on any device and share links for review.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Hand-off ready",
      body: "Share SVG/PDF exports with devs; simple CSS values help bridge design-to-code.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Gravit Designer review: pricing, features, pros & cons, and alternatives so you can pick the right vector design tool."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-700" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} keeps vector design lightweight and accessible in the browser—ideal for quick UI, marketing, and illustration tasks.
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
              {toolName} is a vector design platform that runs in the browser with optional desktop apps. It offers templates, UI kits, and export tools for digital teams that need fast, lightweight design workflows.
            </p>
            <p className="mt-3 text-slate-700">
              It covers common design needs—mockups, icons, banners, and social graphics—without the heavy footprint of full creative suites.
            </p>
            <p className="mt-3 text-slate-700">Use it to iterate quickly and export clean assets for web, marketing, or dev hand-off.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Great fit for teams that need vector design without heavyweight installs or licensing complexity.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product teams sketching UI flows and iconography.",
                "Marketing teams creating web and social graphics.",
                "Agencies needing quick design turnarounds with easy exports.",
                "Students and freelancers who want a free/low-cost vector tool.",
                "Teams working across OSes, including ChromeOS and Linux.",
                "Designers who need SVG/PDF exports for dev and print hand-off.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
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
              {toolName} focuses on accessible vector design, fast exporting, and cloud access across platforms.
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
                  Free tier covers basics; Pro is subscription-based and unlocks offline/desktop apps, unlimited storage, advanced exports, and brand assets. Costs depend on seats and billing cycle.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Prototype on free; upgrade to Pro if you need offline, more exports, and larger brand libraries.</p>
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
                    <td className="px-4 py-3">Learning/light assets</td>
                    <td className="px-4 py-3">Core vector tools, limited cloud, browser access</td>
                    <td className="px-4 py-3">Good for testing workflows</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (monthly)</td>
                    <td className="px-4 py-3">Freelancers/teams in production</td>
                    <td className="px-4 py-3">Offline + desktop apps, unlimited storage, advanced export</td>
                    <td className="px-4 py-3">Flexible billing; cancel anytime</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro (annual)</td>
                    <td className="px-4 py-3">Teams wanting savings</td>
                    <td className="px-4 py-3">Same as monthly at a lower effective rate</td>
                    <td className="px-4 py-3">Best if you commit for a year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for cloud storage needs and export formats your stakeholders require. Keep backups of source files for hand-offs and revisions.
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
                  <li>Runs in-browser; Pro adds offline/desktop flexibility.</li>
                  <li>Clean UI with templates and UI kits to start faster.</li>
                  <li>Strong export options (SVG, PDF, PNG, JPG) with slices.</li>
                  <li>Cross-platform, including ChromeOS and Linux users.</li>
                  <li>Affordable compared to heavy creative suites.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Real-time collaboration is lighter than Figma.</li>
                  <li>Advanced illustration/print workflows may be limited.</li>
                  <li>Brand system management is basic compared to design system tools.</li>
                  <li>Some pro features (offline, advanced export) are paywalled.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other design platforms to match your collaboration, cost, and export needs.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks against other design platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Figma</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/figma">
                  View Figma
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Figma excels at real-time collaboration and design systems; {toolName} offers a lighter footprint with solid exports. Choose Figma for team workflows, {toolName} for fast individual work across devices.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/canva">
                  View Canva
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva prioritizes templates and collaboration for non-designers; {toolName} is more vector-precise for UI and icons. Pick Canva for quick social content, {toolName} for detailed vector control.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want a lightweight vector tool that runs anywhere, and you do not need deep multiplayer or complex print workflows.
            </p>
            <p className="mt-3 text-slate-700">Upgrade to Pro if offline/desktop access, unlimited storage, and richer exports are must-haves for your team.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A flexible, affordable vector editor for everyday UI and marketing assets; heavier collaboration and print needs may require Figma or Illustrator.
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
            <p>Choose {toolName} if you want cross-platform vector design with quick exports and approachable tools.</p>
            <p>Pick Figma for live collaboration and design systems, or Illustrator for advanced illustration/print workflows.</p>
            <p>
              {toolName} hits a sweet spot for speed and accessibility—great for teams that value portability and clean exports over complex suites.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default GravitDesignerToolPage;
