import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Icons8";
const slug = "icons8";
const category = "Design Assets";
const shortPitch =
  "Icons8 is a design asset platform offering icons, illustrations, photos, music, and AI image tools so marketers and designers can ship on-brand creatives fast.";
const pricingSummary = "Free tier with attribution plus paid plans from around $12–$19/month for unlimited downloads, commercial use, and team access.";
const officialUrl = "https://icons8.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/icons8.com",
  gradient: "from-emerald-500 via-teal-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Canva", slug: "canva" },
  { name: "Canva Creators", slug: "canva-creators" },
  { name: "Envato", slug: "envato" },
  { name: "Framer", slug: "framer" },
  { name: "Kapwing", slug: "kapwing" },
];

const faqs = [
  {
    q: "Is Icons8 free?",
    a: "Icons8 has a free tier that requires attribution. Paid plans remove attribution, unlock higher-resolution assets, and add commercial licensing.",
  },
  {
    q: "What assets come with Icons8?",
    a: "You get icon sets, 3D icons, vector illustrations, photos, UI sounds, and AI image generation tools with styles that stay consistent.",
  },
  {
    q: "Which Icons8 plan should I use?",
    a: "Start with the free plan to test styles. Upgrade to Pro for unlimited downloads and commercial use. Teams can add seats for shared access and brand kits.",
  },
  {
    q: "Does Icons8 allow commercial use?",
    a: "Yes. Paid plans include commercial licensing with no attribution needed. Free assets require attribution to Icons8.",
  },
  {
    q: "Can I edit Icons8 assets?",
    a: "Yes. You can adjust colors, sizes, and formats in-browser, then export PNG, SVG, or other formats depending on the asset type.",
  },
  {
    q: "Does Icons8 integrate with design tools?",
    a: "Icons8 offers plugins and packs for Figma, Sketch, and more, plus downloads you can import into Canva or other editors.",
  },
  {
    q: "How does Icons8 compare to Canva or Envato?",
    a: "Canva is a full design suite; Envato is a broad asset marketplace. Icons8 specializes in cohesive icon and illustration styles with AI add-ons.",
  },
  {
    q: "Is Icons8 good for agencies?",
    a: "Yes. Agencies use Icons8 to keep client assets consistent across projects, accelerate mockups, and avoid hunting for ad-hoc visuals.",
  },
];

function Icons8ToolPage() {
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
        "Icons8 is a fast source of cohesive icons, illustrations, and media for marketers and designers. With free assets (attribution required), paid bundles, and AI tools, it keeps teams supplied with on-brand visuals without manual drawing. Pricing starts affordably for solo use and scales to teams.",
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
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Massive icon and illustration library",
      body: "Cohesive styles across icons, 3D assets, and vector scenes keep web and product visuals consistent without extra design time.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Commercial-ready licensing",
      body: "Paid plans remove attribution and include commercial rights, so agencies and brands can publish assets confidently.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Editable formats",
      body: "Download PNG or SVG, tweak colors and sizes, and export for web, product, or presentation use without redrawing.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Plugins for design tools",
      body: "Use Icons8 assets inside Figma, Sketch, and other editors, or import files into Canva, Webflow, or presentation tools.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Media beyond icons",
      body: "Access photos, UI sounds, and music to round out landing pages, ads, and product UI without sourcing elsewhere.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "AI-powered generation",
      body: "Use AI image tools and upscalers to produce custom visuals that stay close to Icons8 styles for faster iteration.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Icons8 review for marketers and designers covering pricing, features, pros & cons, alternatives, and fit for your 2025 creative stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Icons8 gives teams cohesive visuals—from icons to illustrations and AI-generated images—so designers and marketers can ship assets quickly with clear licensing.
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
              Icons8 is a {category.toLowerCase()} platform that bundles cohesive icons, illustrations, photos, audio, and AI tools. It helps marketers and designers move faster by providing ready-to-ship creative assets with clear licensing.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to build landing pages, app UIs, presentations, social posts, and ads without hunting across multiple marketplaces. Plugins and exports make it easy to work in Figma, Canva, Webflow, or Slide decks.
            </p>
            <p className="mt-3 text-slate-700">
              Free users can test with attribution; paid plans unlock commercial rights, higher resolution, and unlimited downloads for teams or agencies.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Icons8 fits teams that need cohesive visuals quickly without hiring illustrators for every project.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers building landing pages, ads, and email creatives that stay on-brand.",
                "Product designers needing consistent iconography for app or web UI.",
                "Agencies producing assets across many clients with tight timelines.",
                "Founders and no-code builders who need polished visuals without design hires.",
                "Content creators and YouTubers sourcing thumbnails, music, and overlays.",
                "Teams experimenting with AI images while keeping a coherent style library.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Icons8 speeds up creative production with ready-to-use assets and AI helpers.</p>
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
                  {toolName} offers a free tier with attribution and paid plans for commercial use. Pro unlocks unlimited downloads and higher resolutions; team plans add seats and shared favorites. AI credits may be separate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on free with attribution, then upgrade to Pro for commercial rights. Teams should add seats for shared kits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing and personal projects</td>
                    <td className="px-4 py-3">Attribution required, limited resolutions</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo marketers/designers</td>
                    <td className="px-4 py-3">Commercial license, unlimited downloads, higher res</td>
                    <td className="px-4 py-3">~$12–$19/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Agencies and in-house teams</td>
                    <td className="px-4 py-3">Multiple seats, shared favorites, brand kits</td>
                    <td className="px-4 py-3">Varies by seats</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">AI add-ons</td>
                    <td className="px-4 py-3">Teams using AI image generation</td>
                    <td className="px-4 py-3">Credit-based usage, upscalers, variations</td>
                    <td className="px-4 py-3">Usage-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Upgrade when you need commercial rights or higher-resolution exports. Teams collaborating in Figma or Webflow should add seats for shared asset kits and permissions.
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
                  <li>Cohesive icon and illustration styles for consistent visuals.</li>
                  <li>Fast exports (PNG, SVG) with in-browser color and size edits.</li>
                  <li>Commercial licensing on paid plans removes attribution friction.</li>
                  <li>Plugins and packs for Figma/Sketch plus easy imports to Canva.</li>
                  <li>AI tools for custom imagery and upscaling.</li>
                  <li>Affordable entry price for solo creators.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free tier requires attribution and has resolution limits.</li>
                  <li>Asset styles are opinionated; may need customization to match brands.</li>
                  <li>Marketplace breadth is narrower than Envato’s all-in-one library.</li>
                  <li>AI credits can add cost if you rely heavily on generation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Icons8 focuses on cohesive icons, illustrations, and AI helpers. Consider these alternatives if you need a full design suite or broader asset marketplace.
            </p>
            <p className="mt-2 text-slate-700">Each offers assets or design capability; they differ on breadth, editing depth, and licensing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two common creative asset options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Canva</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/icons8-vs-canva-vs-envato">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Canva is a full design suite with templates and collaborative editing. Icons8 is lighter, focusing on cohesive assets you can import into Canva or other editors. Use Icons8 when you need consistent icons and illustrations; use Canva to design full layouts.
              </p>
              <p className="mt-2 text-slate-900">Many teams pair both: source visuals from Icons8, assemble final creative in Canva.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Envato Elements</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/icons8-vs-canva-vs-envato">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Envato offers a massive generalist marketplace (templates, stock, audio, 3D). Icons8 is narrower but more cohesive for iconography and illustrations. Choose Envato for maximal variety; choose Icons8 for consistent style and quick exports.
              </p>
              <p className="mt-2 text-slate-900">If you value a uniform look across UI and marketing assets, Icons8 is the faster option.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers, designers, and agencies that need cohesive visuals quickly, {toolName} is worth it. The mix of icons, illustrations, and AI tools cuts production time while keeping assets consistent.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a full design editor or the widest possible library, Canva or Envato may fit better. But as a focused asset library with commercial licensing, Icons8 delivers strong value at an accessible price.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Icons8 is a smart pick for fast, on-brand visuals you can plug into any design workflow.
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
              Choose {toolName} if you want cohesive icons, illustrations, and AI visuals ready for web, product, and campaign use. It keeps licensing simple and speeds up creative production.
            </p>
            <p>
              Consider Canva for full design layouts or Envato for broad marketplaces. Many teams combine Icons8 assets with those editors for faster delivery and a consistent style.
            </p>
            <p>Icons8 plugs into modern workflows across Figma, Webflow, Canva, and slide tools, letting you design faster without compromising on look and feel.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default Icons8ToolPage;
