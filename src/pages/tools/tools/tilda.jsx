import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tilda";
const slug = "tilda";
const category = "Website builder";
const shortPitch = "Tilda is a no-code website builder with blocks, typography, and animation controls for landing pages, catalogs, and content sites.";
const pricingSummary =
  "Free/paid plans. Higher tiers add more projects, custom domains, higher traffic limits, forms/CRM features, and ecommerce options.";
const officialUrl = "https://tilda.cc";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tilda.cc",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Webflow", slug: "webflow" },
  { name: "Squarespace", slug: "squarespace" },
  { name: "Wix", slug: "wix" },
  { name: "Framer", slug: "framer" },
  { name: "Carrd", slug: "carrd" },
];

const faqs = [
  {
    q: "What is Tilda?",
    a: "Tilda is a no-code website builder with pre-designed blocks, typography settings, and animations for landing pages, blogs, and light ecommerce.",
  },
  {
    q: "Who is it for?",
    a: "Founders, marketers, and designers who want to ship pages quickly without coding, while keeping control over layout and type.",
  },
  {
    q: "Does it support custom code?",
    a: "Yes. You can inject custom HTML/CSS/JS for advanced tweaks.",
  },
  {
    q: "How is pricing structured?",
    a: "Free plan with limits; paid tiers add domains, bandwidth, more projects, ecommerce, and forms/CRM features.",
  },
  {
    q: "Can I sell products?",
    a: "Yes. Ecommerce features exist on higher plans; best for small catalogs vs large stores.",
  },
  {
    q: "Is SEO supported?",
    a: "SEO basics (titles, metas, clean markup) are included. Still requires keyword research and content quality.",
  },
  {
    q: "Does it have analytics?",
    a: "Built-in stats plus integrations with external analytics and tags.",
  },
  {
    q: "Can I export code?",
    a: "Export is available on some plans; check limits and licensing before deploying elsewhere.",
  },
];

function TildaToolPage() {
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
        "Tilda makes it easy to launch landing pages and content sites with strong typography and animations. Great for speed and aesthetics; advanced CMS and ecommerce needs may require other tools.",
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
      title: "Block-based builder",
      body: "Pre-made blocks for hero, forms, galleries, and pricing; mix and match quickly.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Typography & motion",
      body: "Fine-tune fonts, spacing, and animations to ship polished pages without code.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Light CMS",
      body: "Create blog/content collections; suitable for small to mid-sized catalogs.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "SEO & performance",
      body: "Clean markup, responsive layouts, and SEO fields—still needs research and content quality.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Hosting & exports",
      body: "Hosted by default with SSL; export code on eligible plans if you want custom hosting.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Forms & integrations",
      body: "Built-in forms and CRM-like features; connect to analytics, tags, and webhooks.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Tilda review: pricing, features, pros & cons, and alternatives so you can decide if this builder fits your site or landing page needs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} helps ship beautiful pages quickly—use it to launch fast, then layer in custom code or exports if you outgrow built-ins.
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
              {toolName} is a no-code website builder focused on design, typography, and motion. It offers block-based layouts, form handling, and light CMS/ecommerce features for landing pages and content sites.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a launch tool: great for fast, polished pages. For complex CMS, deep integrations, or large ecommerce, you may need more specialized platforms.
            </p>
            <p className="mt-3 text-slate-700">Plan for SEO basics, analytics tags, and QA on mobile performance before publishing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams wanting fast, design-forward pages without engineering effort.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers launching landing pages and lead magnets.",
                "Designers who want more control over type and motion than basic builders.",
                "Founders shipping MVP marketing sites quickly.",
                "Agencies producing client microsites and campaigns.",
                "Teams needing light CMS for blogs/collections.",
                "Small catalogs testing ecommerce without heavy overhead.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
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
              {toolName} focuses on design-friendly blocks, typography, light CMS/ecommerce, hosting, and integrations.
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
                  {toolName} offers a free plan and paid tiers. Upgrades add custom domains, traffic limits, more projects, ecommerce blocks, forms/CRM features, and code export on select plans.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to test blocks; upgrade when you need custom domains, higher limits, and ecommerce or export options.</p>
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
                    <td className="px-4 py-3">Testing/light sites</td>
                    <td className="px-4 py-3">Limited projects, Tilda domain</td>
                    <td className="px-4 py-3">Great for evaluation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Personal/Business</td>
                    <td className="px-4 py-3">Landing pages & blogs</td>
                    <td className="px-4 py-3">Custom domains, higher limits, forms/CRM</td>
                    <td className="px-4 py-3">Recommended starting point</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Shop/Ecommerce</td>
                    <td className="px-4 py-3">Small catalogs</td>
                    <td className="px-4 py-3">Cart, payments, export (plan-dependent)</td>
                    <td className="px-4 py-3">Use if you’re selling products</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Budget for domains, analytics tags, and QA on performance. For complex ecommerce or CMS, evaluate when to graduate to specialized tools.
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
                  <li>Design-forward blocks with typography and animation controls.</li>
                  <li>Fast to launch landing pages and microsites.</li>
                  <li>Light CMS and forms/CRM features included.</li>
                  <li>Exports available on select plans.</li>
                  <li>SEO basics and responsive layouts baked in.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less suited for complex CMS or large ecommerce.</li>
                  <li>Integrations are lighter than some pro builders.</li>
                  <li>Export/licensing requires attention on certain plans.</li>
                  <li>Advanced customization may need custom code.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other site builders to match your design needs, CMS depth, and ecommerce scope.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares to other builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webflow</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/webflow">
                  View Webflow
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webflow offers deeper CMS and interactions but has a steeper learning curve. {toolName} is faster for simple sites with solid design presets. Choose based on complexity and integration needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Squarespace</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/squarespace">
                  View Squarespace
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Squarespace has strong templates and commerce; {toolName} offers more granular layout control and animation flexibility. Pick based on whether you want simplicity or finer design control.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want design-forward pages without coding and your CMS/ecommerce needs are moderate.
            </p>
            <p className="mt-3 text-slate-700">
              If you expect large catalogs, complex integrations, or enterprise CMS, plan for when to move to a more specialized platform.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Great for fast, polished sites and landers—pair with analytics, SEO research, and QA for best results.
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
              Choose {toolName} if you want a design-friendly builder for landing pages, blogs, and small shops without heavy engineering.
            </p>
            <p>
              Consider Webflow for complex CMS or Squarespace for simpler commerce; use {toolName} for speed and control over type and motion.
            </p>
            <p>{toolName} delivers polished sites quickly—validate performance, SEO, and integrations as you scale.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default TildaToolPage;
