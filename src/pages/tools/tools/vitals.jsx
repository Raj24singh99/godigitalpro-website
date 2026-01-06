import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Vitals";
const slug = "vitals";
const category = "Shopify apps";
const shortPitch = "Vitals bundles Shopify conversion, marketing, and UX apps (reviews, upsells, trust, popups) into one package.";
const pricingSummary =
  "Flat monthly pricing with a unified bundle of apps; pricing may vary by store size/plan. One fee covers the suite instead of multiple standalone apps.";
const officialUrl = "https://vitals.co";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vitals.co",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Reconvert", slug: "reconvert" },
  { name: "Stamped.io", slug: "stamped-io" },
  { name: "Loox", slug: "loox" },
  { name: "Privy", slug: "privy" },
  { name: "Klaviyo", slug: "klaviyo" },
];

const faqs = [
  {
    q: "What is Vitals?",
    a: "Vitals is a Shopify app bundle combining conversion, marketing, and UX tools (reviews, upsells, popups, trust badges, etc.) into one subscription.",
  },
  {
    q: "Who is it for?",
    a: "Shopify stores that prefer an all-in-one app to avoid multiple subscriptions and simplify setup.",
  },
  {
    q: "How is pricing structured?",
    a: "Typically a flat monthly fee covering the suite; check current pricing for your store size.",
  },
  {
    q: "Does it include reviews?",
    a: "Yes. Reviews, UGC import, and display widgets are included.",
  },
  {
    q: "Does it include upsells?",
    a: "Yes. Upsells, cross-sells, bundles, and volume discounts are part of the bundle.",
  },
  {
    q: "Can it replace multiple apps?",
    a: "Yes, for many common conversion/marketing features. Specialized needs may still require standalone tools.",
  },
  {
    q: "Does it impact speed?",
    a: "Vitals is optimized, but adding many widgets can affect performance; test and limit what you use.",
  },
  {
    q: "Does it integrate with email tools?",
    a: "It can integrate with email/CRM; confirm specific integrations (e.g., Klaviyo/Mailchimp) for your stack.",
  },
];

function VitalsToolPage() {
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
        "Vitals bundles many Shopify apps (reviews, upsells, popups, trust, etc.) into one. It simplifies stacks, but you should enable only what you need to keep speed and UX clean.",
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
      title: "Reviews & UGC",
      body: "Collect, import, and display reviews with widgets to build trust.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Upsells & bundles",
      body: "Volume discounts, cross-sells, and post-purchase upsells to lift AOV.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Popups & capture",
      body: "Email/SMS capture, spin-to-win, and exit popups to grow lists (use responsibly).",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Trust & badges",
      body: "Trust badges, timers, and UX widgets to reassure buyers—avoid overuse.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Speed & optimization",
      body: "Optimized scripts and image tools; still test performance after enabling apps.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Hooks to email/CRM and other Shopify ecosystem tools; confirm your stack coverage.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Vitals review: pricing, features, pros & cons, and alternatives so you can decide if an all-in-one Shopify app bundle fits your store."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} replaces multiple apps with one bundle—turn on only the pieces you need to keep speed and UX intact.
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
              {toolName} is an all-in-one Shopify app suite covering reviews, UGC, upsells, popups, trust, and speed tools. It aims to reduce app sprawl with a single subscription.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a bundle: enable only features that move the needle to avoid clutter and performance hits. Track impact on speed and conversions as you add widgets.
            </p>
            <p className="mt-3 text-slate-700">Align Vitals’ forms/capture with your email/SMS tools to keep data flowing correctly.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify stores that want a single app for common CRO and marketing features.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Stores replacing multiple apps with one bundle.",
                "Merchants wanting reviews + upsells + popups quickly.",
                "Teams on budgets who want fixed pricing vs many subscriptions.",
                "Shops needing trust widgets and basic speed optimizations.",
                "Marketers who need email/SMS capture tied to CRM tools.",
                "Brands that want UGC display without a separate review app.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} focuses on reviews, upsells, popups, trust, performance tools, and integrations—all in one app.
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
                  {toolName} uses a flat monthly bundle model. Pricing may vary by plan/store size. One fee covers all included apps, replacing multiple individual subscriptions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the standard bundle; ensure it includes the apps you’ll actually use. Evaluate ROI by removing redundant apps and measuring speed/conversion impact.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Bundle</td>
                    <td className="px-4 py-3">Most stores</td>
                    <td className="px-4 py-3">All included apps (reviews, upsells, popups, trust, speed)</td>
                    <td className="px-4 py-3">Confirm pricing by store size</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise/Custom</td>
                    <td className="px-4 py-3">Higher volume</td>
                    <td className="px-4 py-3">Custom terms and support</td>
                    <td className="px-4 py-3">Use if you need SLAs/support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Remove redundant apps, test speed, and measure conversion impact. Keep only necessary widgets live to protect UX and performance.
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
                  <li>One app replaces many Shopify apps.</li>
                  <li>Reviews, upsells, popups, trust in a single bundle.</li>
                  <li>Flat pricing can reduce costs.</li>
                  <li>Speeds up setup vs multiple vendors.</li>
                  <li>Integrations to email/CRM tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enabling too many widgets can hurt speed/UX.</li>
                  <li>Specialized apps may have deeper features.</li>
                  <li>Flat fee still needs ROI tracking.</li>
                  <li>Need to align with brand design to avoid clutter.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other apps if you prefer specialized tools or need specific features.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to single-purpose Shopify apps.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Reconvert</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/reconvert">
                  View Reconvert
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Reconvert specializes in post-purchase upsells; {toolName} offers broader features. Pick Reconvert for deep post-purchase flows, {toolName} for an all-in-one bundle.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Stamped.io</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/stamped-io">
                  View Stamped.io
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Stamped.io is focused on reviews/UGC loyalty; {toolName} bundles many CRO tools. Choose based on whether you want specialized review depth or a broad toolset.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want an all-in-one CRO/marketing bundle on Shopify and are willing to curate which widgets you use.
            </p>
            <p className="mt-3 text-slate-700">
              Track performance and speed; disable low-impact features. Consider specialist apps if you need deeper functionality in one area.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Strong value as a bundle—best when you selectively enable features and monitor impact.
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
              Choose {toolName} if you want one Shopify app for reviews, upsells, popups, and trust, with a single fee instead of many subscriptions.
            </p>
            <p>
              Consider specialized tools like Reconvert (upsells) or Stamped.io (reviews/loyalty) if you need deeper features; use {toolName} for breadth and simplicity.
            </p>
            <p>{toolName} can simplify your stack—enable selectively and keep speed/UX in check.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default VitalsToolPage;
