import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "UpPromote";
const slug = "uppromote";
const category = "Affiliate & referral";
const shortPitch = "UpPromote is a Shopify app for running affiliate and referral programs with tracking, payouts, and recruiter tools.";
const pricingSummary =
  "Shopify app pricing with tiers by features and order volume. Higher plans add more affiliate slots, advanced tracking, and automation; free plan for small stores.";
const officialUrl = "https://uppromote.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/uppromote.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "AnyTrack", slug: "anytrack" },
  { name: "Redtrack", slug: "redtrack" },
  { name: "Thrivecart", slug: "thrivecart" },
  { name: "Samcart", slug: "samcart" },
  { name: "Systeme.io", slug: "systeme-io" },
];

const faqs = [
  {
    q: "What is UpPromote?",
    a: "UpPromote is a Shopify app for managing affiliate and referral programs, including tracking, payouts, and recruitment.",
  },
  {
    q: "Who is it for?",
    a: "Shopify stores that want to launch or scale affiliate/referral programs without building custom tracking.",
  },
  {
    q: "How is pricing structured?",
    a: "Shopify app tiers; higher plans raise limits on affiliates, orders, and features like auto-approval and advanced tracking.",
  },
  {
    q: "Does it support coupons and links?",
    a: "Yes. You can assign links/coupons to affiliates and track attributed orders.",
  },
  {
    q: "Can I automate payouts?",
    a: "Payout workflows exist; verify payment methods and fees for your region.",
  },
  {
    q: "Does it recruit affiliates?",
    a: "Affiliate recruitment and storefront widgets are available to attract new partners.",
  },
  {
    q: "Is attribution reliable?",
    a: "Tracking relies on cookies and order data; align with your analytics and monitor for duplication or fraud.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Integrations exist for email, payment, and analytics; confirm coverage for your stack.",
  },
];

function UpPromoteToolPage() {
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
        "UpPromote lets Shopify stores run affiliate and referral programs with links, coupons, and payouts. It’s effective when paired with fraud checks, clean tracking, and clear terms.",
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
      title: "Link & coupon tracking",
      body: "Assign links and coupons per affiliate to track attributed orders.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Recruitment tools",
      body: "Sign-up pages and widgets to attract new affiliates and influencers.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Program rules",
      body: "Set commissions, approval rules, and tiered rewards to match your margins.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Fraud checks",
      body: "Tools to review suspicious orders and protect margins; keep manual QA in place.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Payout workflows",
      body: "Manage payouts; verify payment methods and fees before scaling.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Hooks into Shopify data plus email/payment/analytics tools to keep records aligned.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="UpPromote review: pricing, features, pros & cons, and alternatives so you can assess it for Shopify affiliate programs."
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
                  {toolName} powers affiliate and referral programs for Shopify—combine it with clear terms, fraud checks, and clean tracking to protect ROI.
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
              {toolName} is a Shopify app for affiliate and referral programs. It handles link/coupon tracking, recruitment, commissions, and payouts so stores can scale partner-driven revenue.
            </p>
            <p className="mt-3 text-slate-700">
              Treat it as a program hub: results depend on clean tracking, vetted partners, and fraud monitoring. Align commissions with margins and set clear terms.
            </p>
            <p className="mt-3 text-slate-700">Ensure analytics and payment tools are connected so attribution and payouts stay accurate.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for Shopify stores launching or scaling affiliate/referral programs.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC stores adding affiliate and influencer links.",
                "Brands using coupon-based tracking for creators.",
                "Stores needing recruitment widgets for partners.",
                "Teams that want payout workflows in one place.",
                "Marketers aligning affiliate data with ecommerce analytics.",
                "Operators monitoring fraud before issuing commissions.",
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
              {toolName} focuses on tracking links/coupons, recruitment, program rules, fraud checks, payouts, and integrations.
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
                  {toolName} offers Shopify app tiers. Higher plans lift limits on affiliates/orders, add automation, tracking options, and support. Costs rise with volume; factor payouts and processing fees too.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a paid tier if you expect volume; free is fine for validation. Upgrade when you hit order/feature limits or need automation.</p>
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
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Limited affiliates/orders</td>
                    <td className="px-4 py-3">Validate tracking</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active programs</td>
                    <td className="px-4 py-3">Higher limits, automation, fraud checks</td>
                    <td className="px-4 py-3">Good default tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional/Enterprise</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest limits, priority support</td>
                    <td className="px-4 py-3">Use if scaling strongly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Track order attribution accuracy, refund policies, and fraud. Budget for payout fees and set clear rules before scaling affiliates.
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
                  <li>Native Shopify app for affiliate tracking.</li>
                  <li>Links/coupons plus recruitment widgets.</li>
                  <li>Automation and payout workflows.</li>
                  <li>Fraud checks to protect margins.</li>
                  <li>Integrations for analytics and payments.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Attribution relies on cookies and clean Shopify data.</li>
                  <li>Fees and commissions can add up quickly.</li>
                  <li>Fraud prevention still needs manual review.</li>
                  <li>Feature limits on lower tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other tracking and affiliate platforms to match your program size and budget.
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
            <p className="text-slate-700">See how {toolName} compares to other affiliate and tracking tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Trackify</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/trackify">
                  View Trackify
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Trackify focuses on Meta pixel tracking; {toolName} handles affiliate/referral programs. Use both if you need strong ad tracking plus partner attribution.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AnyTrack</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/anytrack">
                  View AnyTrack
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AnyTrack focuses on unified conversion tracking; {toolName} adds affiliate program management. Choose based on whether you need partner workflows in addition to tracking.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you’re a Shopify store building affiliate/referral revenue and want tracking, recruitment, and payouts in one app.
            </p>
            <p className="mt-3 text-slate-700">
              Keep strict terms, fraud checks, and clean analytics in place. Track profitability by partner to avoid margin erosion.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid Shopify affiliate platform—best when paired with disciplined attribution and program governance.
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
              Choose {toolName} if you need a Shopify-native way to run affiliate/referral programs with tracking, recruitment, and payouts in one place.
            </p>
            <p>
              Consider Trackify for ad tracking depth or AnyTrack for broader conversion tracking; use {toolName} to operate the program itself.
            </p>
            <p>{toolName} can grow partner revenue—stay vigilant on fraud, terms, and profitability as you scale.</p>
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

export default UpPromoteToolPage;
