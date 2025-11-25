import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GRIN";
const slug = "grin";
const category = "Influencer Marketing";
const shortPitch =
  "GRIN is an influencer marketing platform for ecommerce brands to find creators, manage seeding, pay collaborations, and track performance.";
const pricingSummary = "Custom pricing based on seats and program scale; demos are required. Costs rise with creator volume and integrations.";
const officialUrl = "https://grin.co";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/grin.co",
  gradient: "from-sky-500 via-indigo-500 to-blue-700",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.28)]",
};

const alternatives = [
  { name: "Aspire", slug: "aspireiq" },
  { name: "Creator.co", slug: "creator-co" },
  { name: "Modash", slug: "modash" },
  { name: "Klear", slug: "klear" },
  { name: "Heepsy", slug: "heepsy" },
];

const faqs = [
  {
    q: "What is GRIN?",
    a: "GRIN is an influencer marketing platform that helps ecommerce brands recruit creators, manage seeding and gifting, pay collaborations, and measure revenue impact.",
  },
  {
    q: "Who is it for?",
    a: "Ecommerce and consumer brands that run influencer and creator programs across Instagram, TikTok, YouTube, and other channels.",
  },
  {
    q: "Does GRIN find creators?",
    a: "Yes. It offers discovery, recruitment workflows, and outreach to bring new creators into your program.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is quote-based with demos. It typically scales with seats, creator volume, integrations, and support needs.",
  },
  {
    q: "Does GRIN integrate with ecommerce platforms?",
    a: "Yes. It integrates with platforms like Shopify and WooCommerce to track sales and manage product seeding.",
  },
  {
    q: "Can I manage payments in GRIN?",
    a: "Yes. You can handle contracts, payouts, and tax forms in-platform for creators.",
  },
  {
    q: "Is it a replacement for an agency?",
    a: "It centralizes workflows, but you still need strategy, creative review, and relationship management in-house or via agency support.",
  },
  {
    q: "Does it cover affiliate tracking?",
    a: "Yes. GRIN supports affiliate links and coupon tracking to tie influencer activity to revenue.",
  },
];

function GrinToolPage() {
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
        "GRIN centralizes influencer recruitment, seeding, payments, and revenue tracking for ecommerce brands. It is strong for brands that want to run programs in-house.",
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
      title: "Creator discovery",
      body: "Search and recruit creators by audience, platform, and brand fit.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Program workflows",
      body: "Pipeline management for outreach, approvals, and campaign milestones.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Product seeding",
      body: "Ship products to creators, track fulfillment, and manage gifting budgets.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Contracts & payouts",
      body: "Manage briefs, contracts, and payments with tax form collection.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Ecommerce integrations",
      body: "Connect Shopify/WooCommerce for sales attribution, codes, and links.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Performance reporting",
      body: "Track creator performance, revenue contribution, and program ROI.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="GRIN review: pricing, features, pros & cons, and alternatives so you can choose the right influencer platform for ecommerce growth."
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
                  {toolName} helps ecommerce brands scale influencer programs with discovery, seeding, and revenue reporting in one place.
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
              {toolName} is an influencer marketing platform built for ecommerce and consumer brands. It centralizes creator discovery, outreach, seeding, contracts, payments, and reporting so teams can manage programs in-house.
            </p>
            <p className="mt-3 text-slate-700">
              Because it ties into ecommerce platforms, you can track sales via codes and links, giving clearer ROI data on creator campaigns.
            </p>
            <p className="mt-3 text-slate-700">Use it to build repeatable creator workflows without juggling spreadsheets or multiple point tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for ecommerce brands that treat influencer marketing as a core growth channel.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "DTC brands managing a steady roster of creators.",
                "Ecommerce teams that ship product for seeding and gifting.",
                "Agencies handling creator programs for multiple clients.",
                "Brands that need payment + tax workflows for influencers.",
                "Teams that want clearer revenue attribution via codes/links.",
                "Marketing leaders needing program-level ROI reporting.",
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
              {toolName} focuses on creator discovery, program operations, ecommerce attribution, and compliant payments.
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
                  {toolName} uses custom, quote-based pricing. Expect pricing to scale with seats, creator volume, ecommerce integrations, and services. Plan budget for seeding products and creator payouts in addition to software.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Take a demo and benchmark against alternatives; pilot with a smaller creator set before committing to a long-term contract.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lower-tier/Starter</td>
                    <td className="px-4 py-3">Smaller programs</td>
                    <td className="px-4 py-3">Core CRM, discovery, limited seats</td>
                    <td className="px-4 py-3">Use to validate workflows</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling brands</td>
                    <td className="px-4 py-3">More seats, payments, ecommerce integrations</td>
                    <td className="px-4 py-3">Budget for seeding + payouts</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large creator programs</td>
                    <td className="px-4 py-3">Highest volumes, advanced reporting, services</td>
                    <td className="px-4 py-3">Contracts often annual</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Include team time for creative review and compliance. Consider agency or contractor support if you need additional bandwidth for outreach.
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
                  <li>Strong ecommerce focus with attribution via codes/links.</li>
                  <li>End-to-end workflows from outreach to payouts.</li>
                  <li>Product seeding and fulfillment management built-in.</li>
                  <li>Useful reporting for program ROI.</li>
                  <li>Good for teams keeping influencer work in-house.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is opaque; requires sales cycles.</li>
                  <li>Best value when you already run influencer programs at scale.</li>
                  <li>Discovery depth varies by region and niche.</li>
                  <li>Still need internal resources for creative and relationship work.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other influencer platforms to match your budget, verticals, and workflows.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other influencer platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Aspire</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/aspireiq">
                  View Aspire
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Aspire is strong on creator marketplaces and brand collaborations; {toolName} leans into ecommerce attribution and in-house program control. Choose based on how much you value deep ecommerce integrations.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Modash</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/modash">
                  View Modash
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Modash is discovery-led with strong audience filtering; {toolName} offers deeper seeding, payout, and ecommerce tracking. Pick Modash for discovery breadth, {toolName} for end-to-end program ops.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if influencer marketing is already meaningful for your brand and you want to centralize workflows, payouts, and attribution.
            </p>
            <p className="mt-3 text-slate-700">If you are early-stage, pilot with a smaller plan and set ROI targets before expanding seats and creator counts.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong fit for ecommerce teams running in-house creator programs; pricing and value improve with scale and disciplined tracking.
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
            <p>Choose {toolName} if you need ecommerce-focused influencer management with discovery, seeding, and payouts in one stack.</p>
            <p>Pick a lighter tool if you only need discovery lists, or an agency if you lack internal resources for relationship management.</p>
            <p>{toolName} works best when paired with clear creator briefs, brand guidelines, and revenue targets.</p>
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

export default GrinToolPage;
