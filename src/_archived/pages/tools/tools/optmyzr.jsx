import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Optmyzr";
const slug = "optmyzr";
const category = "PPC Automation & Optimization";
const shortPitch = "Optmyzr automates Google Ads, Microsoft Ads, and other PPC workflows with scripts, optimizations, reporting, and budgeting tools.";
const pricingSummary = "Plans scale by ad spend and feature modules. Higher tiers add advanced automations, reporting, and multi-account support.";
const officialUrl = "https://www.optmyzr.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/optmyzr.com",
  gradient: "from-amber-500 via-indigo-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.24)]",
};

const alternatives = [
  { name: "Revealbot", slug: "revealbot" },
  { name: "TrafficGuard", slug: "trafficguard" },
  { name: "Google Ads Scripts", slug: "google-ads-scripts" },
  { name: "Skai", slug: "skai" },
];

const faqs = [
  { q: "Which ad platforms are supported?", a: "Primarily Google Ads and Microsoft Ads, with support for other channels via connectors—check current list." },
  { q: "Do I need coding skills?", a: "No. Many features are UI-driven, though PPC knowledge is still required." },
  { q: "Is there a trial?", a: "Trials or demos are typically available; confirm current offers with Optmyzr." },
  { q: "How is pricing set?", a: "Pricing depends on spend tiers and modules. Ask for thresholds, overage rules, and contract length options." },
  { q: "Can I white-label reports?", a: "Yes. Reporting can be branded for clients or stakeholders." },
  { q: "Does it handle shopping campaigns?", a: "Yes. Shopping tools cover query segmentation, feed optimization, and structure builds." },
  { q: "Are there alerts?", a: "Yes. Budget pacing, disapprovals, and anomaly alerts are available." },
  { q: "Who is it best for?", a: "Agencies and in-house PPC teams managing multiple accounts and significant spend." },
];

function OptmyzrToolPage() {
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
        "Optmyzr is a PPC management platform that provides bid and budget automations, shopping feed tools, quality score optimizations, and reporting for agencies and in-house teams.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "One-click optimizations", body: "Bid, budget, and keyword suggestions to implement quickly across accounts." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Rule automation", body: "Create recurring automations and alerts for bids, budgets, and ads." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Shopping tools", body: "Query segmentation, feed optimization, and structure builds for shopping campaigns." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Reporting", body: "Dashboards and scheduled reports branded for clients or stakeholders." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Budget pacing", body: "Track budgets and pacing with alerts to avoid overspend or underspend." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations", body: "Connect Google Ads, Microsoft Ads, Facebook, and data sources; export via sheets or BI tools." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Optmyzr review: pricing, features, pros & cons, and alternatives to decide if its PPC automation fits your accounts."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  {toolName} augments PPC teams with automations, shopping tools, and reporting so you can spend more time on strategy and creative.
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
              {toolName} streamlines PPC management across Google Ads, Microsoft Ads, and other channels. It offers one-click optimizations, rule-based automations, shopping feed tools, and alerting to catch issues fast.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies can standardize reporting and budgeting across clients, while in-house teams benefit from scripts-like power without heavy coding. It is most useful when you have consistent account structures and want to scale automation safely.
            </p>
            <p className="mt-3 text-slate-700">
              It is best for teams managing multiple accounts or sizable spend who want more control than native automated recommendations while saving time versus manual management.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for agencies and in-house PPC teams managing multiple accounts and budgets.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies handling many PPC accounts and needing standardized workflows.",
                "In-house marketers managing large budgets across Google and Microsoft Ads.",
                "Teams wanting alerts for spend anomalies and disapproved ads.",
                "Managers needing fast reporting templates and dashboards.",
                "Shopping and ecommerce teams optimizing feeds and queries.",
                "PPC specialists who like scripts but want UI-driven controls.",
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
              {toolName} focuses on actionable optimizations, budgets, and reporting to augment platform-native tools.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <p className="text-lg font-semibold">{feature.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing</h2>
            <p className="mt-3 text-slate-700">
              Pricing scales by spend and modules. Ask for spend thresholds, overage rules, and whether reporting, shopping, or automation modules are included. Clarify seat limits and client account caps for agencies.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Core", price: "Spend-based", detail: "One-click optimizations, basic reporting, limited accounts", bestFor: "Smaller teams or single brand" },
                { name: "Pro/Agency", price: "Spend-based", detail: "Advanced automations, shopping tools, bulk edits, expanded reporting", bestFor: "Agencies and larger in-house teams" },
                { name: "Enterprise", price: "Custom", detail: "Custom SLAs, onboarding, higher limits, API access", bestFor: "High-spend or complex needs" },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Pricing tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Start with reporting and pacing to prove value; add automation modules once data hygiene and naming conventions are solid. Negotiate spend tiers and overages based on your aggregate budgets.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-emerald-700">Pros</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Saves time on repetitive PPC tasks with actionable suggestions.</li>
                  <li>Strong reporting and dashboards for agencies.</li>
                  <li>Shopping and query tools extend beyond native platform options.</li>
                  <li>Budget pacing and alerts reduce surprises.</li>
                  <li>Combines scripts-style power with UI-driven controls.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Pricing scales with spend; can be high for very large budgets.</li>
                  <li>Still requires PPC expertise to use suggestions wisely.</li>
                  <li>Interface has many modules—training is recommended.</li>
                  <li>Some features overlap with platform-native automation; avoid conflicts.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need social-focused automation, fraud controls, or open scripting:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "PPC/automation alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-amber-600 hover:text-amber-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other PPC tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Optmyzr vs Google Ads Scripts", betterFor: "Scripts offer full control but require coding; Optmyzr provides UI-driven automation and reporting.", choose: "Pick Optmyzr for UI + support. Pick Scripts if you have dev resources and need custom control." },
                { title: "Optmyzr vs Skai", betterFor: "Skai is enterprise and omni-channel; Optmyzr is faster to deploy and more cost-effective for PPC-focused teams.", choose: "Pick Optmyzr for PPC teams needing speed. Pick Skai for enterprise cross-channel strategies." },
                { title: "Optmyzr vs native recommendations", betterFor: "Native tools automate bids broadly; Optmyzr adds custom rules, pacing, and reporting tailored to your structure.", choose: "Pick Optmyzr to layer your own rules. Use native for simpler, low-touch accounts." },
                { title: "Optmyzr vs Revealbot", betterFor: "Revealbot focuses on paid social; Optmyzr focuses on search/shopping with some cross-channel support.", choose: "Pick Optmyzr for search/shopping heavy portfolios. Pick Revealbot for social-centric automation." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-700">{item.betterFor}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-800">Why choose</p>
                  <p className="mt-1 text-sm text-slate-700">{item.choose}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--worth bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you manage multiple accounts or significant spend and need faster optimizations. Define guardrails to avoid conflicts with platform bid strategies. Start with reporting and pacing, then layer automations once data quality is validated.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Standardize naming conventions and structures before automation.",
                "Use alerts and pacing first to build trust, then automate bids.",
                "Segment automations by campaign type to avoid conflicts with platform strategies.",
                "Audit performance after each automation change to ensure uplift.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: who is {toolName} best for?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} balances automation with control for PPC teams. It is most valuable when you standardize structures, data, and naming conventions. Use reports and alerts to monitor health before activating aggressive automations.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your portfolio, start a demo here:{" "}
                  <a className="text-amber-600 hover:text-amber-500" href={officialUrl}>
                    Visit {toolName}
                  </a>.
                </p>
                <div className="pt-2">
                  <Link
                    to="/tools"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
                  </Link>
                </div>
              </div>
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

export default OptmyzrToolPage;
