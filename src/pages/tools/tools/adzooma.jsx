import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Adzooma";
const slug = "adzooma";
const category = "PPC Optimization & Management";
const shortPitch =
  "Adzooma helps marketers manage and optimize Google, Facebook, and Microsoft Ads with automated recommendations, rules, and streamlined reporting.";
const pricingSummary =
  "Free tier available with core management; paid plans unlock advanced automations, white-label reports, and higher account limits.";
const officialUrl = "https://www.adzooma.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/adzooma.com",
  gradient: "from-sky-500 via-blue-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "AdEspresso", slug: "adespresso" },
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Buffer", slug: "buffer" },
  { name: "Later", slug: "later" },
  { name: "SocialPilot", slug: "socialpilot" },
];

const faqs = [
  {
    q: "What does Adzooma do?",
    a: "Adzooma manages Google, Facebook, and Microsoft Ads with optimization recommendations, automation rules, and unified reporting.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The free plan includes core account management and basic recommendations. Paid plans add automation and white-label features.",
  },
  {
    q: "Does Adzooma automate optimizations?",
    a: "You can set rules for bids, budgets, and pausing underperforming ads. Automated recommendations suggest actions to improve ROAS.",
  },
  {
    q: "Who is Adzooma best for?",
    a: "Freelancers, agencies, and in-house PPC teams that manage multiple accounts and need faster optimizations and reports.",
  },
  {
    q: "Can I manage multiple ad channels?",
    a: "Yes. Adzooma supports Google Ads, Microsoft Ads, and Meta ads in one interface.",
  },
  {
    q: "Does it include reporting?",
    a: "Custom and scheduled reports are available. Higher tiers support white-label reporting for clients.",
  },
  {
    q: "Does Adzooma integrate with analytics?",
    a: "It pulls performance data from the ad platforms and can export reports. Use GA4 or analytics tools alongside for deeper attribution.",
  },
  {
    q: "Is onboarding required?",
    a: "You can self-serve; agencies may want to schedule onboarding to standardize rules and reporting across accounts.",
  },
];

function AdzoomaToolPage() {
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
        "Adzooma simplifies PPC management with automation rules, recommendations, and unified reporting. It’s useful for teams juggling multiple ad accounts and channels.",
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
      title: "Optimization recommendations",
      body: "Automatic suggestions to improve bids, budgets, keywords, and ads across Google, Microsoft, and Meta.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automation rules",
      body: "Set bid/budget rules and pausing criteria to protect spend and accelerate winners.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Multi-account management",
      body: "Manage multiple ad accounts and channels in one interface for faster changes.",
    },
    {
      icon: <Folder className="h-5 w-5 text-sky-500" />,
      title: "Templates & workflows",
      body: "Reusable templates for campaigns, audiences, and rules to standardize setups.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Alerts & monitoring",
      body: "Performance alerts flag issues early so you can adjust budgets or bids quickly.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-emerald-500" />,
      title: "Reporting",
      body: "Custom and scheduled reports with white-label options on higher tiers.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Adzooma review for PPC teams: pricing, features, pros & cons, and alternatives to choose the right ads optimization platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
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
                  {toolName} keeps PPC testing, automation, and reporting in one place so teams move faster across channels.
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
              {toolName} is a PPC management and optimization platform that unifies Meta, Google, and Microsoft ads. It surfaces recommendations, automates rules, and centralizes reporting to save time for busy teams.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and growth marketers use it to standardize setups, enforce guardrails, and scale testing without living in multiple native interfaces.
            </p>
            <p className="mt-3 text-slate-700">
              Reporting and alerts make it easier to keep clients or stakeholders updated on performance and budget health.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that run ongoing PPC across multiple channels and need speed plus safeguards.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing many client ad accounts across Meta and Google.",
                "In-house growth teams iterating on creative, audiences, and bids weekly.",
                "Marketers who want automated rules to pause losers and scale winners.",
                "Teams needing consolidated reporting and white-label exports for stakeholders.",
                "PPC managers looking to enforce best practices with templates and alerts.",
                "Companies that want a free starting tier before upgrading to automation.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on faster PPC execution, automated safeguards, and clear reporting across ad platforms.
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
                  {toolName} offers a free tier for basic management and recommendations. Paid tiers add automation rules, higher account limits, and white-label reports. Pricing scales with features and usage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free to validate; upgrade when you need rules, alerts, and more accounts or reporting.</p>
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
                    <td className="px-4 py-3">Getting started</td>
                    <td className="px-4 py-3">Core management, recommendations</td>
                    <td className="px-4 py-3">Limited accounts/features</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active PPC teams</td>
                    <td className="px-4 py-3">Automation rules, more accounts</td>
                    <td className="px-4 py-3">Monthly pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies & multi-brand</td>
                    <td className="px-4 py-3">White-label reports, collaboration</td>
                    <td className="px-4 py-3">Spend/account-based</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm account/spend limits per tier and which platforms are included. Plan time to standardize rules before scaling across accounts.
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
                  <li>Supports Google, Microsoft, and Meta ads in one place.</li>
                  <li>Automation rules and recommendations save time.</li>
                  <li>Templates standardize campaigns and audiences.</li>
                  <li>Reporting and alerts improve visibility and communication.</li>
                  <li>Free tier makes it easy to try before upgrading.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Best for teams with steady ad spend; light users may not need it.</li>
                  <li>Some advanced controls still require native platform access.</li>
                  <li>Automation setup needs thoughtful rules to avoid oversights.</li>
                  <li>Higher tiers add cost on top of ad spend.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other paid social and ad management tools to match your spend, channels, and reporting needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} stacks up against other ad management platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs AdEspresso</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/adespresso">
                  View AdEspresso
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                AdEspresso focuses on creative testing and paid social; {toolName} spans Meta, Google, and Microsoft with automation rules. Choose based on your channel mix and testing needs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hootsuite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/hootsuite">
                  View Hootsuite
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hootsuite is social scheduling/monitoring; {toolName} is paid ads optimization. Use both if you need organic + paid coverage in one stack.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for teams running continuous PPC who benefit from automation rules, faster reporting, and cross-channel visibility. Agencies gain from templates and white-label exports.
            </p>
            <p className="mt-3 text-slate-700">
              If you run minimal spend or prefer native UIs, the free tier may suffice; upgrade only when automation saves meaningful time.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid PPC helper for Meta/Google/Microsoft ads when you need speed, safeguards, and clearer reports.
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
              Choose {toolName} if you need automated PPC optimizations, cross-channel reporting, and templates to standardize work across accounts.
            </p>
            <p>
              Consider AdEspresso for deeper paid social testing or stick to native platforms if you run limited campaigns. Pair {toolName} with analytics for full-funnel visibility.
            </p>
            <p>{toolName} helps teams improve ROAS while reducing manual busywork across Meta, Google, and Microsoft ads.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AdzoomaToolPage;
