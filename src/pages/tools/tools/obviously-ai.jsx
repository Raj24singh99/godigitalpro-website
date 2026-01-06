import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Obviously AI";
const slug = "obviously-ai";
const category = "No-Code Predictive Analytics";
const shortPitch = "Obviously AI lets business teams run predictive models on their data without coding—upload, pick a target, and generate insights fast.";
const pricingSummary = "Plans are tiered by users, data volume, and model features. Higher tiers add automation, API access, and dedicated support.";
const officialUrl = "https://www.obviously.ai";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/obviously.ai",
  gradient: "from-purple-500 via-indigo-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.25)]",
};

const alternatives = [
  { name: "DataRobot", slug: "datarobot" },
  { name: "H2O.ai", slug: "h2o" },
  { name: "BigML", slug: "bigml" },
  { name: "Akkio", slug: "akkio" },
];

const faqs = [
  { q: "Do I need coding skills?", a: "No. Obviously AI is built for non-technical users to upload data and build predictive models with a few clicks." },
  { q: "Can I export predictions?", a: "Yes. Export results or use APIs to push scores into your systems and workflows." },
  { q: "What data sources are supported?", a: "You can upload CSVs and connect popular databases; check the latest connector list in the app." },
  { q: "Is there a trial?", a: "Trials or demos are typically available; contact sales for current offers and credit limits." },
  { q: "How is pricing set?", a: "Pricing depends on users, data volume, and features like automation or APIs. Ask for thresholds and overage rules." },
  { q: "What about security?", a: "Role controls and data handling policies are available; request documentation for compliance needs." },
  { q: "Can I run real-time scoring?", a: "Higher tiers include APIs for real-time or batch scoring. Confirm latency and rate limits." },
  { q: "Does it explain model results?", a: "Yes. Feature importance and directionality help business users understand drivers." },
];

function ObviouslyAiToolPage() {
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
        "Obviously AI is a no-code predictive analytics tool. Upload data, choose a target, and it builds models, explains drivers, and lets you run forecasts with minimal setup.",
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
    { icon: <Sparkles className="h-5 w-5 text-purple-500" />, title: "AutoML workflows", body: "Point-and-click setup builds models and evaluates accuracy automatically." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Feature importance", body: "Identify top drivers and directionality to explain model outputs." },
    { icon: <Plug className="h-5 w-5 text-slate-700" />, title: "Batch & real-time", body: "Run batch predictions or use APIs to score records in real time." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Data connections", body: "Upload CSVs or connect data sources to keep pipelines refreshed." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Automation", body: "Schedule model runs and push results to downstream tools." },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-700" />, title: "Compliance & security", body: "Workspace controls, access settings, and logging for governed use." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Obviously AI review: pricing, features, pros & cons, and alternatives to decide if its no-code AutoML fits your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-100 blur-3xl" />
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
                  {toolName} helps business teams run predictions quickly. Upload data, set a target, and review feature importance before deploying scores.
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
              {toolName} removes most coding from predictive analytics. Users upload spreadsheets or connect databases, pick a target field, and the platform automates model selection and evaluation.
            </p>
            <p className="mt-3 text-slate-700">
              It returns predictions, accuracy metrics, and feature importance so non-technical teams can act. Automated workflows and APIs help move results into production systems or reports.
            </p>
            <p className="mt-3 text-slate-700">
              It is great for quick experiments and lightweight deployments. For complex feature engineering or strict governance, you may still need a dedicated data science stack.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for business teams that need fast predictions without hiring data scientists.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Growth and marketing teams forecasting conversions, churn, or LTV.",
                "Ops teams predicting demand, support volume, or supply needs.",
                "Product teams experimenting with propensity and usage models.",
                "Agencies offering rapid analytics to clients without writing code.",
                "Startups validating data-driven decisions before investing in DS hires.",
                "Teams that want quick feature importance to guide experiments.",
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
              The platform focuses on speed: upload, select target, review feature importance, and push predictions via API or exports.
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
              Pricing scales by users, data volume, and features such as automation or APIs. Ask for thresholds, overage rules, and whether support is included in your tier.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { name: "Starter", price: "Entry", detail: "Limited users, batch predictions, feature importance.", bestFor: "Pilots and simple datasets." },
                { name: "Pro", price: "Mid-tier", detail: "APIs, scheduling, more rows/models, collaboration.", bestFor: "Teams running ongoing scoring." },
                { name: "Enterprise", price: "Custom", detail: "Custom SLAs, security reviews, higher volume.", bestFor: "Regulated or large-scale teams." },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-wide text-purple-600">{tier.name}</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</p>
                  <p className="mt-2 text-sm text-slate-700">{tier.detail}</p>
                  <p className="mt-3 text-xs font-semibold text-slate-600">Best for: {tier.bestFor}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-slate-900">Buying tip</p>
              <p className="mt-2 text-sm text-slate-700">
                Use a pilot dataset to gauge accuracy and feature importance. Confirm data limits, API quotas, and support response times before signing annual contracts.
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
                  <li>Very fast to set up—no code required.</li>
                  <li>Explains feature importance for business users.</li>
                  <li>APIs for integrating predictions into workflows.</li>
                  <li>Good for quick pilots and lightweight production scoring.</li>
                  <li>Clear value for teams without in-house data science.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-lg font-semibold text-rose-700">Cons</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Limited custom feature engineering compared to full ML stacks.</li>
                  <li>Model choice control is abstracted; advanced users may want more levers.</li>
                  <li>Data prep still matters; messy data degrades outputs.</li>
                  <li>Pricing scales with volume—plan budgets for large datasets.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Obviously AI alternatives</h2>
            <p className="mt-3 text-slate-700">Consider these if you need enterprise controls, deeper modeling, or different pricing:</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-xs text-slate-600">{alt.tagline || "AutoML alternative"}</p>
                  </div>
                  <Link className="text-sm font-semibold text-purple-600 hover:text-purple-500" to={`/tools/${alt.slug}`}>
                    View
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--comparisons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Obviously AI vs other AutoML tools</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                { title: "Obviously AI vs Akkio", betterFor: "Akkio emphasizes business dashboards; Obviously AI focuses on rapid model building and explanations for uploaded data.", choose: "Pick Obviously AI for quick modeling and feature importance. Pick Akkio if you need dashboard-style experiences." },
                { title: "Obviously AI vs DataRobot", betterFor: "DataRobot offers enterprise controls and model management; Obviously AI is faster and lighter for SMB use.", choose: "Pick Obviously AI for speed and simplicity. Pick DataRobot for governance-heavy, large-scale programs." },
                { title: "Obviously AI vs custom ML", betterFor: "Custom stacks allow deep control; Obviously AI is faster and cheaper for straightforward use cases with clean data.", choose: "Pick Obviously AI when you lack DS resources. Pick custom ML when you need bespoke features and control." },
                { title: "Obviously AI vs H2O.ai", betterFor: "H2O provides open-source flexibility and AutoML; Obviously AI provides a guided UI for business users.", choose: "Pick Obviously AI for business-friendly setup. Pick H2O for teams comfortable with notebooks and code." },
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
              {toolName} is worth it if you need predictions quickly without building pipelines or hiring data scientists. Use clean, labeled data; garbage in will hurt performance. Pair with a data warehouse or BI tool to validate predictions against outcomes.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Start with a narrow use case (churn, lead score) and validate accuracy.",
                "Use feature importance to guide experiments and marketing tests.",
                "Set governance: who can publish models, who monitors drift, and how often.",
                "Plan data refreshes and versioning before scaling to production APIs.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-500" />
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
                {toolName} is best for SMB and mid-market teams that need fast predictive insights with minimal engineering. It trades deep customization for speed—ideal when you need answers fast. Establish data quality and governance to keep models trustworthy as you scale.
              </p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">
                  If {toolName} sounds right for your team, start a trial here:{" "}
                  <a className="text-purple-600 hover:text-purple-500" href={officialUrl}>
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

export default ObviouslyAiToolPage;
