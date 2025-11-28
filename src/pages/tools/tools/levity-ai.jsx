import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Levity AI";
const slug = "levity-ai";
const category = "AI Automation & No-Code";
const shortPitch = "Levity AI is a no-code AI automation platform that classifies text, images, and documents to trigger workflows without custom ML engineering.";
const pricingSummary =
  "Tiered plans by automations and runs. Higher tiers add more workflow runs, integrations, and support; costs scale with volume.";
const officialUrl = "https://www.levity.ai";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/levity.ai",
  gradient: "from-emerald-500 via-lime-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(52,211,153,0.24)]",
};

const alternatives = [
  { name: "Zapier AI", slug: "zapier" },
  { name: "Make.com", slug: "make" },
  { name: "Akkio", slug: "akkio" },
  { name: "Parabola", slug: "parabola" },
  { name: "Hugging Face Inference", slug: "huggingface" },
];

const faqs = [
  {
    q: "What is Levity AI?",
    a: "Levity AI is a no-code AI automation platform that classifies text, images, and documents to trigger workflows and decisions.",
  },
  {
    q: "Who is Levity best for?",
    a: "Ops, support, and marketing teams that want AI classification in workflows without building models or writing code.",
  },
  {
    q: "Which data types are supported?",
    a: "Text, images, and documents can be classified to route tasks, tag tickets, or trigger automation.",
  },
  {
    q: "How does pricing work?",
    a: "Plans are tiered by number of automations and monthly runs. Higher tiers add more usage and support.",
  },
  {
    q: "Does it integrate with Zapier/Make?",
    a: "Yes. Integrations and webhooks connect Levity outputs to tools like Zapier, Make, CRMs, and help desks.",
  },
  {
    q: "Do I need ML expertise?",
    a: "No. It’s no-code, but you should provide good training data and monitor accuracy.",
  },
  {
    q: "Is data secure?",
    a: "Review Levity’s security docs; set data retention and access controls per your policies.",
  },
  {
    q: "Do I still need human QA?",
    a: "Yes. Monitor accuracy, handle edge cases, and keep humans-in-the-loop for sensitive decisions.",
  },
];

function LevityAIToolPage() {
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
        "Levity AI brings AI classification to no-code workflows for text, images, and documents, letting teams automate routing and decisions without ML engineering.",
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
      title: "No-code classifiers",
      body: "Build text, image, and document classifiers without writing code.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Workflow automation",
      body: "Trigger routes, tags, and actions based on AI predictions.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Training data tools",
      body: "Import, label, and improve datasets to raise model accuracy.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Governance",
      body: "Set access, retention, and review processes for compliant use.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect via Zapier, Make, APIs, and webhooks to CRMs and help desks.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Monitoring",
      body: "Track accuracy and performance; iterate on training data as needed.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Levity AI review: pricing, features, pros & cons, and alternatives so you can choose the right no-code AI automation platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-lime-200/25 blur-3xl" />
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
                  {toolName} lets teams add AI classification to workflows without coding—train on your data, then route tasks automatically with human QA in the loop.
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
              {toolName} is a no-code AI automation platform. It lets teams train classifiers on their own text, images, or documents and trigger actions based on predictions.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to tag tickets, route forms, detect content types, or flag items for review. Integrations send results to CRMs, help desks, or automation platforms.
            </p>
            <p className="mt-3 text-slate-700">
              Human oversight remains important—track accuracy, handle edge cases, and keep compliant data practices.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams wanting AI classification in workflows without ML engineering, and with appetite for data labeling/QA.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Support teams auto-tagging tickets and routing by intent.",
                "Ops teams classifying documents or forms for downstream actions.",
                "Marketing teams filtering user submissions and leads.",
                "Teams integrating AI decisions into Zapier/Make workflows.",
                "Businesses needing no-code AI with governance controls.",
                "Users who can provide labeled data and monitor accuracy.",
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
              {toolName} centers on no-code classifiers, workflow triggers, integrations, and governance to bring AI decisions into daily operations.
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
                  {toolName} pricing scales by number of automations and monthly runs. More runs, channels, and support appear on higher tiers, so costs increase with usage.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to validate accuracy and ROI; upgrade when run volume or support needs grow.</p>
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
                    <td className="px-4 py-3">Testing</td>
                    <td className="px-4 py-3">Few automations/runs</td>
                    <td className="px-4 py-3">Great for pilots</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">More runs, integrations</td>
                    <td className="px-4 py-3">Match to steady workloads</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">High volume</td>
                    <td className="px-4 py-3">Highest runs, support, governance</td>
                    <td className="px-4 py-3">Plan for onboarding and SLAs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Account for labeling time, accuracy monitoring, and integration work. Keep humans in the loop for sensitive or high-impact decisions.
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
                  <li>No-code AI classification for text, images, documents.</li>
                  <li>Workflow triggers for routing and tagging.</li>
                  <li>Integrations with Zapier/Make and APIs.</li>
                  <li>Governance options for data handling.</li>
                  <li>Good for teams without ML engineers.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Accuracy depends on training data quality.</li>
                  <li>Usage limits can add costs at scale.</li>
                  <li>Requires ongoing monitoring and retraining.</li>
                  <li>Not ideal for highly custom or niche models.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other no-code/low-code AI tools to match your integration needs, model flexibility, and budget.
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
            <p className="text-slate-700">See how {toolName} compares with other AI automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zapier AI</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/zapier">
                  View Zapier
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zapier AI embeds AI steps inside automations; {toolName} specializes in training classifiers on your data. Choose Zapier for broad automation, {toolName} for custom classification inside workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Akkio</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/akkio">
                  View Akkio
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Akkio targets no-code predictive analytics; {toolName} focuses on classification and routing for ops. Pick based on whether you need predictive modeling or workflow classification.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI classification in your workflows without coding and can provide labeled data and oversight to keep accuracy high.
            </p>
            <p className="mt-3 text-slate-700">
              Start small, monitor performance, and budget for run volume. Keep humans in the loop for sensitive decisions and retrain when accuracy drifts.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A useful no-code AI automation tool for routing and tagging—best with solid data hygiene and ongoing monitoring.
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
              Choose {toolName} if you need AI classification in workflows without ML engineering and can invest in labeling, monitoring, and governance.
            </p>
            <p>
              Consider Zapier AI for general automation or Akkio for predictive analytics; keep {toolName} for custom classification and routing use cases.
            </p>
            <p>{toolName} boosts operational efficiency—maintain human oversight and data hygiene to keep quality high.</p>
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

export default LevityAIToolPage;
