import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Akkio AI";
const slug = "akkio-ai";
const category = "AI Analytics & Forecasting";
const shortPitch =
  "Akkio AI is a no-code AI platform that lets teams connect data, build predictions, and automate insights without heavy data science lift.";
const pricingSummary =
  "Tiered plans based on users, data volume, and features. Paid tiers add automations, deployments, and higher row/model limits.";
const officialUrl = "https://www.akkio.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/akkio.com",
  gradient: "from-indigo-500 via-purple-500 to-emerald-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.26)]",
};

const alternatives = [
  { name: "Make", slug: "make" },
  { name: "Zapier", slug: "zapier" },
  { name: "Pabbly", slug: "pabbly" },
  { name: "Fathom Analytics", slug: "fathom-analytics" },
  { name: "Plausible", slug: "plausible" },
];

const faqs = [
  {
    q: "What is Akkio AI?",
    a: "Akkio AI is a no-code AI platform to build predictive models, forecasts, and automations directly from your data sources.",
  },
  {
    q: "Do I need data science skills?",
    a: "No. You can connect data, pick targets, and let Akkio build models. Understanding your data and metrics is still important.",
  },
  {
    q: "What problems can it solve?",
    a: "Lead scoring, churn prediction, sales forecasting, anomaly detection, and other predictive tasks across business data.",
  },
  {
    q: "How does it connect to data?",
    a: "Connect CSVs, databases, and apps; then create models and deploy them via API or automations.",
  },
  {
    q: "Is it real-time?",
    a: "Some use cases can run in near real-time via API or automation triggers; check limits per plan.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is tiered by seats, data volume, and deployment features. Higher tiers enable more rows, projects, and automations.",
  },
  {
    q: "Is data secure?",
    a: "Akkio offers security controls; review compliance and data handling for your industry before production use.",
  },
  {
    q: "Who is it best for?",
    a: "Ops, RevOps, and analytics-minded teams that want predictions without building models from scratch.",
  },
];

function AkkioAiToolPage() {
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
        "Akkio AI lets teams build predictions and forecasts without heavy data science work. It’s built for business teams that want practical AI on their data quickly.",
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
      title: "No-code model building",
      body: "Create predictive models and forecasts without coding; pick targets and let Akkio train models.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Automations & deployments",
      body: "Deploy models via API or connect to workflows so predictions run automatically.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Data connectors",
      body: "Connect CSVs, databases, and business apps to feed data into models.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Explainability",
      body: "Feature importance and insights help teams understand what drives predictions.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Collaboration",
      body: "Share projects with teammates; control access by role and workspace.",
    },
    {
      icon: <Folder className="h-5 w-5 text-purple-500" />,
      title: "Use-case templates",
      body: "Jumpstart with templates for lead scoring, churn, forecasting, and anomaly detection.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Akkio AI review: pricing, features, pros & cons, and alternatives so you can decide if no-code AI predictions fit your data stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-600" />
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
                  {toolName} helps business teams build and deploy predictions fast—use it to score leads, forecast, and automate decisions.
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
              {toolName} is a no-code AI platform to build predictive models from business data. You connect data, choose a target, and deploy models via API or automations—without writing code.
            </p>
            <p className="mt-3 text-slate-700">
              Common use cases include lead scoring, churn prediction, sales forecasts, and anomaly detection across marketing, sales, and ops datasets.
            </p>
            <p className="mt-3 text-slate-700">
              It emphasizes speed and usability for non-data scientists while providing explainability to understand drivers.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that need predictions quickly without building models in-house.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "RevOps teams scoring leads and routing by likelihood to convert.",
                "Success teams predicting churn to trigger saves and outreach.",
                "Sales leaders forecasting pipeline and bookings with updated data.",
                "Ops teams detecting anomalies in metrics or transactions.",
                "Analysts who want to experiment with models without coding.",
                "Teams connecting models to automations for real-time decisions.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
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
              {toolName} focuses on fast model creation, deployment, and explainability for business users.
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
                  {toolName} pricing is tiered by users, data volume, and deployments. Higher tiers allow more rows, more models, and API/automation features with support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a lower tier to validate models; upgrade when you need more rows, users, and automated deployments.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Evaluation</td>
                    <td className="px-4 py-3">Limited rows/models, core features</td>
                    <td className="px-4 py-3">Good for POCs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Active teams</td>
                    <td className="px-4 py-3">More data, deployments, collaboration</td>
                    <td className="px-4 py-3">Most common tier</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs</td>
                    <td className="px-4 py-3">Higher limits, security, support</td>
                    <td className="px-4 py-3">Custom pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Check row/model limits, API quotas, and security/compliance options per tier. Budget for data prep/cleaning time to improve model quality.
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
                  <li>No-code model building and deployment.</li>
                  <li>Templates for common business predictions.</li>
                  <li>API/automation options to operationalize models.</li>
                  <li>Explainability helps teams trust outputs.</li>
                  <li>Faster time-to-value than building models from scratch.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Model quality depends heavily on data prep and inputs.</li>
                  <li>API/row limits may require higher tiers for scale.</li>
                  <li>Complex custom models may need data science oversight.</li>
                  <li>Ongoing monitoring is required to avoid model drift.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with automation and analytics tools to match your data stack and control needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">See how {toolName} compares with other automation and analytics options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Make</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/make">
                  View Make
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Make is a workflow automation tool; {toolName} is for building predictions. Use {toolName} to generate scores and Make to route them into actions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/zapier">
                  View Zapier
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier connects apps with triggers/actions; {toolName} builds models. Combine them so predictions trigger Zaps for routing and alerts.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want to add predictive modeling without hiring data scientists. It shortens time-to-value for lead scoring, churn prediction, and forecasting.
            </p>
            <p className="mt-3 text-slate-700">
              Ensure your data is clean and monitored; for highly specialized models, data science oversight may still be needed.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical no-code AI option for business teams—great when paired with solid data hygiene and automation.
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
              Choose {toolName} if you want rapid, no-code predictive models to inform routing, retention, and forecasts without heavy data science.
            </p>
            <p>
              Pair with automation tools like Make/Zapier to act on predictions; ensure data governance and monitoring to sustain model quality.
            </p>
            <p>{toolName} helps teams operationalize AI predictions quickly and pragmatically.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-indigo-700 hover:text-indigo-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default AkkioAiToolPage;
