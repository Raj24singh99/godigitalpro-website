import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wicked Reports";
const slug = "wicked-reports";
const category = "Marketing attribution";
const shortPitch = "Wicked Reports unifies ad, CRM, and revenue data to deliver multi-touch attribution and ROI reporting for ecommerce and subscriptions.";
const pricingSummary =
  "Pricing scales by revenue/ad spend and integrations. Higher plans add more data sources, longer lookback windows, and dedicated support.";
const officialUrl = "https://www.wickedreports.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wickedreports.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.24)]",
};

const alternatives = [
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Northbeam", slug: "northbeam" },
  { name: "Rockerbox", slug: "rockerbox" },
  { name: "Hyros", slug: "hyros" },
  { name: "Segmetrics", slug: "segmetrics" },
];

const faqs = [
  {
    q: "What is Wicked Reports?",
    a: "Wicked Reports is a marketing attribution and ROI reporting platform that connects ad, CRM, and revenue data to show performance across the funnel.",
  },
  {
    q: "Who is it for?",
    a: "DTC and subscription marketers who need multi-touch attribution, LTV insights, and cohort reporting to guide spend.",
  },
  {
    q: "What makes Wicked Reports different?",
    a: "It focuses on first-party data, multi-touch timelines, and longer lookback windows to capture delayed conversions and subscription value.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription tiers scale with revenue/ad spend and integrations. Higher tiers add longer history, more sources, and priority support.",
  },
  {
    q: "Does it replace platform pixel reporting?",
    a: "It complements ad platform pixels by reconciling revenue across sources for more reliable, unified ROI reporting.",
  },
  {
    q: "Does Wicked Reports track subscriptions?",
    a: "Yes. It connects subscription revenue to acquisition sources to measure payback and LTV by channel and campaign.",
  },
  {
    q: "Is onboarding complex?",
    a: "Expect a guided onboarding to connect ad, ecommerce, and CRM systems. Higher tiers may include white-glove setup.",
  },
  {
    q: "Do I still need UTMs?",
    a: "Yes—clean UTMs and consistent naming improve attribution quality and reporting clarity across channels.",
  },
];

function WickedReportsToolPage() {
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
        "Wicked Reports provides multi-touch attribution, cohort analysis, and LTV reporting for ecommerce and subscription brands, tying revenue to campaigns with first-party data.",
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
      title: "Multi-touch timelines",
      body: "See influence across first click, middle touches, and last click for campaigns and channels.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "LTV and payback",
      body: "Track lifetime value and payback periods by channel, campaign, and audience for better budgeting.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Data unification",
      body: "Connect ad platforms, ecommerce, and CRM to reconcile revenue against spend.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "First-party focus",
      body: "Relies on first-party data and longer lookback windows to capture delayed or subscription conversions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Supports major ad platforms, ecommerce carts, and CRMs with onboarding assistance.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Cohort and journey views",
      body: "Analyze cohorts and customer journeys to spot where value concentrates or drops off.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Wicked Reports review: pricing, features, pros & cons, and alternatives so you can decide if it fits your attribution and LTV reporting needs."
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
                  {toolName} reconciles revenue and ad spend so you can trust ROI decisions. Expect a structured onboarding to connect data sources.
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
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                <div className="h-px w-10 bg-slate-300" />
                Overview
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">What is {toolName}?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is a marketing attribution and ROI analytics platform that uses first-party data and multi-touch models to show which campaigns drive
                revenue. It links ad platforms, ecommerce carts, and CRMs to deliver cohort, journey, and LTV insights.
              </p>
              <p className="mt-3 text-slate-700">
                It stands out for subscription-aware attribution, longer lookback windows, and guided onboarding. It is best for teams who need trustworthy
                revenue-backed reporting rather than channel-only pixel data.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <ShieldCheck className="h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Best for</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">Ecommerce and subscription brands needing reliable ROI, LTV, and payback reporting.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <Cloud className="h-5 w-5 text-sky-500" />
                    <p className="text-sm font-semibold">Keep in mind</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">Setup requires clean UTMs and connected data sources; plan time for onboarding and QA.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Quick facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>First-party, multi-touch attribution across channels</li>
                  <li>LTV, payback, and cohort views for ecommerce and subscriptions</li>
                  <li>Integrates major ad platforms, carts, and CRMs</li>
                  <li>Onboarding support; upper tiers may include white-glove setup</li>
                  <li>Pricing scales with revenue/ad spend and integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
                <p className="mt-2 text-slate-700">Use {toolName} if you rely on paid acquisition and need clear, revenue-backed attribution and LTV views.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                Explore more tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["DTC marketers scaling paid spend", "Subscription brands measuring LTV", "Agencies needing client-ready ROI reports"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    {item === "DTC marketers scaling paid spend" &&
                      "See which campaigns and audiences drive profitable growth with clear payback windows."}
                    {item === "Subscription brands measuring LTV" &&
                      "Connect first touch to subscription revenue to improve channel mix and retention tactics."}
                    {item === "Agencies needing client-ready ROI reports" &&
                      "Deliver trusted, multi-touch reports and cohorts to defend budgets and optimizations."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is built for first-party, multi-touch attribution, LTV analysis, and revenue reconciliation across your main paid channels.
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
                  {toolName} pricing aligns to revenue/ad spend and the number of data sources. Upper tiers add longer lookback windows, deeper history, and
                  more support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose a tier that matches your current spend; budget time for onboarding and data cleanup.</p>
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
                    <td className="px-4 py-3">Scaling DTC brands</td>
                    <td className="px-4 py-3">Core integrations, standard lookback, attribution dashboards</td>
                    <td className="px-4 py-3">Good for first lift-and-shift from pixel-only reporting</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams with multi-channel spend</td>
                    <td className="px-4 py-3">More data sources, longer history, LTV and cohort depth</td>
                    <td className="px-4 py-3">Best balance of cost and depth</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-volume or complex stacks</td>
                    <td className="px-4 py-3">Max history, custom integrations, white-glove setup, SLAs</td>
                    <td className="px-4 py-3">Use when governance and uptime are must-haves</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Ensure UTMs, naming conventions, and CRM mappings are clean before onboarding to shorten time-to-value and reduce attribution noise.
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
                  <li>First-party, multi-touch attribution tied to revenue</li>
                  <li>Strong for subscription and LTV analysis</li>
                  <li>Guided onboarding to connect major data sources</li>
                  <li>Cohort and payback views to guide budgeting</li>
                  <li>Reconciles platform-reported conversions with actual revenue</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires data hygiene and UTM discipline</li>
                  <li>Onboarding takes time; not a flip-a-switch setup</li>
                  <li>Costs scale with revenue/ad spend</li>
                  <li>Fewer creative analytics vs. some newer AI tools</li>
                  <li>Learning curve for teams new to multi-touch reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
                <p className="mt-2 text-slate-700">If you need different pricing, models, or creative analytics, compare these options.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                View all tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-slate-900">{alt.name}</p>
                    <Plug className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    A credible alternative to {toolName}. Compare models, integrations, and pricing to pick the fit for your stack.
                  </p>
                  <Link to={`/tools/${alt.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                    Explore {alt.name}
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs similar tools</h2>
            <p className="mt-2 text-slate-700">
              Choose {toolName} when you need first-party, multi-touch visibility and subscription-aware reporting. Consider alternatives if you want creative
              analytics or lower-cost models.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{toolName} strengths</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Revenue-backed, first-party attribution</li>
                  <li>Great for LTV and subscription payback views</li>
                  <li>Guided onboarding and data setup</li>
                  <li>Useful cohort and journey analytics</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Where alternatives fit better</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Need creative-level insights or ad asset scoring</li>
                  <li>Want a lighter setup with simpler attribution</li>
                  <li>Require lower-cost tooling for small spend levels</li>
                  <li>Prefer blended dashboards without detailed journeys</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your growth depends on paid acquisition and you need dependable, revenue-backed attribution. If you lack clean UTMs or
              want quick setup without onboarding time, a lighter tool may suit you better.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Start on Growth to replace pixel-only reporting", "Move to Pro for multi-channel LTV and cohorts", "Pick Enterprise if you need custom integrations and SLAs"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Crown className="h-4 w-4 text-amber-600" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">A practical path to get value from {toolName} while aligning features with complexity.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
                <p className="mt-2 text-slate-700">Answers to common questions about {toolName} and how to implement it well.</p>
              </div>
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
              {faqs.map((item) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--verdict bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: is {toolName} good?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is a strong choice for ecommerce and subscription brands needing trustworthy attribution and LTV views. It demands clean data and a
                thoughtful onboarding, but delivers clearer ROI decisions once connected.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
                <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                  <ArrowLeft className="h-4 w-4" />
                  Back to tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default WickedReportsToolPage;
