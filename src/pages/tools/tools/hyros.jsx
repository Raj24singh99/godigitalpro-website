import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hyros";
const slug = "hyros";
const category = "Attribution & Analytics";
const shortPitch = "Hyros is a revenue attribution platform for performance marketers, combining call tracking, pixel tracking, and lead stitching.";
const pricingSummary =
  "Custom pricing. Plans typically scale with ad spend, traffic volume, and support level. Expect onboarding and ongoing service components.";
const officialUrl = "https://hyros.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hyros.com",
  gradient: "from-purple-500 via-fuchsia-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(147,51,234,0.22)]",
};

const alternatives = [
  { name: "Wicked Reports", slug: "wicked-reports" },
  { name: "Voluum", slug: "voluum" },
  { name: "RedTrack", slug: "redtrack" },
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "ClickMagick", slug: "clickmagick" },
];

const faqs = [
  {
    q: "What is Hyros?",
    a: "Hyros is an attribution platform that tracks revenue across ads, calls, and funnels to show which channels drive paying customers.",
  },
  {
    q: "Who is it for?",
    a: "Performance marketers, direct-response brands, and agencies that need clearer ROI attribution across multi-touch funnels.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is custom; costs scale with traffic, ad spend, and support. Expect onboarding and service fees.",
  },
  {
    q: "Does Hyros integrate with ads platforms?",
    a: "Yes. It syncs data to platforms like Meta and Google Ads for better optimization and reporting.",
  },
  {
    q: "Does it replace analytics tools?",
    a: "No. It complements analytics by providing revenue attribution and tracking—use alongside analytics/BI stacks.",
  },
  {
    q: "Is human oversight needed?",
    a: "Yes. Teams should audit tracking setups, validate conversions, and align naming across channels.",
  },
  {
    q: "Does Hyros support call tracking?",
    a: "Yes. Phone calls can be tracked and stitched to leads to attribute revenue.",
  },
  {
    q: "Does it require code changes?",
    a: "Tracking scripts and pixels need implementation; coordinate with developers for accurate setup.",
  },
];

function HyrosToolPage() {
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
        "Hyros is a performance marketing attribution platform that stitches clicks, calls, and revenue. It improves signal for optimization but needs careful setup and monitoring.",
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
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Multi-touch attribution",
      body: "Tracks leads across ads, email, calls, and funnels to attribute revenue accurately.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-indigo-500" />,
      title: "Pixel & API sync",
      body: "Feeds conversion data back to ad platforms for better optimization and bidding.",
    },
    {
      icon: <Folder className="h-5 w-5 text-emerald-500" />,
      title: "Call tracking",
      body: "Connects phone calls and close events to campaigns so offline interactions are attributed.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-blue-500" />,
      title: "Cohorts & LTV views",
      body: "Measure lifetime value and cohorts to see which campaigns generate durable revenue.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance & QA",
      body: "Requires strict tagging and QA to keep tracking accurate across devices and channels.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Service-driven onboarding",
      body: "Implementation support helps teams deploy scripts and naming conventions correctly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hyros review: pricing, features, pros & cons, and alternatives to decide if this attribution platform fits your marketing stack."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} helps performance teams see which ads drive revenue—use it to sharpen targeting and budgets, with ongoing QA.
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
              {toolName} is a revenue attribution platform for performance marketers. It stitches clicks, calls, and purchases to campaigns so you can see which channels drive sales.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a source of optimization signal: you still need disciplined naming, QA, and analysis to act on the data.
            </p>
            <p className="mt-3 text-slate-700">Pair it with BI and ad platform dashboards to align budgets, bids, and creative testing.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance teams that need deeper attribution than native pixels provide.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Direct-response marketers running paid social and search.",
                "Ecommerce brands needing call + online attribution.",
                "Agencies managing multi-channel spend for clients.",
                "Operators who want LTV and cohort data tied to campaigns.",
                "Teams syncing offline conversions back to ad platforms.",
                "Growth leads who maintain strict tagging and QA processes.",
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
              {toolName} focuses on attribution accuracy, offline/online stitching, and returning signal to ad platforms.
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
                  {toolName} is custom-priced based on traffic volume, ad spend, and support. Expect onboarding help and ongoing service to keep tracking accurate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Budget for both software and service—plan a paid test with clear success metrics and QA.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">SMB performance teams</td>
                    <td className="px-4 py-3">Core attribution, pixel/call tracking, onboarding</td>
                    <td className="px-4 py-3">Validate tracking before scaling</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Higher spend brands</td>
                    <td className="px-4 py-3">More volume, API sync, deeper support</td>
                    <td className="px-4 py-3">Align on QA playbooks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Complex, multi-brand setups</td>
                    <td className="px-4 py-3">Highest limits, custom integrations, dedicated support</td>
                    <td className="px-4 py-3">Plan for ongoing governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Invest time in implementation, naming conventions, and validation. Accurate data depends on disciplined tracking and periodic audits.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-purple-50 p-5 shadow-sm ring-1 ring-purple-100">
                <div className="flex items-center gap-2 text-purple-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Strong multi-touch attribution for paid media.</li>
                  <li>Call tracking to capture offline conversions.</li>
                  <li>Conversion data can be fed back to ad platforms.</li>
                  <li>Service-heavy onboarding to get tracking right.</li>
                  <li>Useful LTV and cohort visibility.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Custom pricing can be expensive for lower spend.</li>
                  <li>Requires strict QA and governance.</li>
                  <li>Still dependent on correct tagging and site performance.</li>
                  <li>Not a replacement for analytics/BI tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other attribution platforms to match budget, service level, and integrations.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other attribution platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RedTrack</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/redtrack">
                  View RedTrack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                RedTrack offers self-serve plans; {toolName} leans into service and deep stitching. Choose based on whether you want hands-on support or self-managed tracking.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Triple Whale</h3>
                <a className="text-sm font-semibold text-purple-700 hover:text-purple-600" href="/tools/triple-whale">
                  View Triple Whale
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Triple Whale emphasizes ecommerce dashboards; {toolName} focuses on attribution signal and call tracking. Pick based on whether attribution precision or broad ecommerce metrics matter most.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth testing if paid acquisition is a core growth driver and you need clearer attribution with call tracking and pixel syncing.
            </p>
            <p className="mt-3 text-slate-700">It requires disciplined implementation and QA. Plan resources for governance and analytics follow-through.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong choice for performance teams that value attribution depth and have the process to keep tracking clean.
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
            <p>Choose {toolName} if you want deeper attribution, call tracking, and ad platform feedback loops with service-led onboarding.</p>
            <p>Consider lighter tools like RedTrack for self-serve or ecommerce dashboards like Triple Whale if you prioritize blended metrics.</p>
            <p>{toolName} sharpens optimization when paired with strong tagging discipline and regular QA.</p>
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

export default HyrosToolPage;
