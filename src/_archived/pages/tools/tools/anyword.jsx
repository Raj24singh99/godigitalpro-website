import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Anyword";
const slug = "anyword";
const category = "AI Copywriting";
const shortPitch =
  "Anyword is an AI copy platform for ads, emails, and landing pages with predictive scores to tailor messaging by audience and channel.";
const pricingSummary =
  "Free trial with limits; paid plans add more words, predictive scoring, brand voice controls, workspaces, and collaboration.";
const officialUrl = "https://anyword.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/anyword.com",
  gradient: "from-sky-500 via-indigo-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.26)]",
};

const alternatives = [
  { name: "Jasper AI", slug: "jasper-ai" },
  { name: "Writesonic", slug: "writesonic" },
  { name: "Copy.ai", slug: "copyai" },
  { name: "Rytr", slug: "rytr" },
  { name: "AISEO", slug: "aiseo" },
];

const faqs = [
  {
    q: "What is Anyword?",
    a: "Anyword is an AI copywriting platform that generates and scores ad, email, and landing page copy with predictive performance insights.",
  },
  {
    q: "Who is it for?",
    a: "Performance marketers, growth teams, and copywriters who need channel-specific copy and testing ideas quickly.",
  },
  {
    q: "How does pricing work?",
    a: "Free trials are limited. Paid plans scale by words, features, and collaboration. Higher tiers add predictive scores and brand voice controls.",
  },
  {
    q: "Does it guarantee performance?",
    a: "No. Predictive scores guide you, but real performance depends on creative, targeting, and offer. A/B test before scaling.",
  },
  {
    q: "Does it support brand voice?",
    a: "Yes. You can train tone/voice on higher tiers; always review outputs for compliance and accuracy.",
  },
  {
    q: "Does it replace copywriters?",
    a: "No. It accelerates ideation and variants; humans should approve claims, tone, and compliance.",
  },
  {
    q: "Is human review needed?",
    a: "Always. Validate claims, proof points, and brand fit before launching paid campaigns.",
  },
];

function AnywordToolPage() {
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
        "Anyword speeds up ad/email/landing copy with predictive scores and channel-specific suggestions. Best as a copy accelerator with human QA.",
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
      title: "Channel-specific copy",
      body: "Generate variants for ads, emails, and landing pages tailored to format and character limits.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Predictive scoring",
      body: "See predicted performance scores to prioritize which variants to test first.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Brand voice",
      body: "Train tone and guardrails on higher tiers to keep outputs on-brand across teams.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Compliance checks",
      body: "Catch risky claims and compliance flags; still requires human/legal review.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Audience targeting",
      body: "Adjust copy for personas and intents to align messaging with segment needs.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Exports & collaboration",
      body: "Share variants, export to ad platforms/ESP, and collect feedback in one place.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Anyword review: pricing, features, pros & cons, and alternatives so you can choose the right AI copywriting platform."
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
                  {toolName} speeds up channel-specific copy with predictive scores—best when paired with human review and A/B testing.
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
              {toolName} is an AI copy platform that generates and scores ad, email, and landing page copy. It helps teams create variants faster and prioritize tests with predictive scores.
            </p>
            <p className="mt-3 text-slate-700">
              Treat scores as directional; real performance depends on targeting, offer, and creative. Keep human review for claims, compliance, and tone.
            </p>
            <p className="mt-3 text-slate-700">Use with A/B testing and analytics to validate winners before scaling spend.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance and growth teams needing copy variants and test ideas quickly.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers producing ad variants for paid social/search.",
                "Email and lifecycle teams testing subject lines and body copy.",
                "Landing page teams needing hero, CTA, and section copy options.",
                "Agencies creating fast variants for multiple clients and campaigns.",
                "Founders/ops running quick tests on messaging and offers.",
                "Teams that A/B test and want guidance on which variants to prioritize.",
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
              {toolName} focuses on channel-specific copy, predictive scoring, and brand voice controls to accelerate testing.
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
                  Free trials are limited. Paid plans scale by words, features, and collaboration. Higher tiers add predictive scoring depth, brand voice, and workspaces. Costs rise with output volume and team seats.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Test on a lower tier; upgrade when you need predictive scores, brand voice controls, or more seats/words.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter/Lower</td>
                    <td className="px-4 py-3">Light testing</td>
                    <td className="px-4 py-3">Limited words, core templates</td>
                    <td className="px-4 py-3">Good for fit/quality checks</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active marketers</td>
                    <td className="px-4 py-3">More words, predictive scores, collaboration</td>
                    <td className="px-4 py-3">Common choice for teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Advanced</td>
                    <td className="px-4 py-3">Teams needing control</td>
                    <td className="px-4 py-3">Brand voice training, workspaces, higher limits</td>
                    <td className="px-4 py-3">For larger teams/brands</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Estimate monthly word needs and seat count. Keep budget for creative testing and QA.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast ad/email/landing copy variants.</li>
                  <li>Predictive scores to prioritize tests.</li>
                  <li>Brand voice controls on higher tiers.</li>
                  <li>Persona/audience tailoring built in.</li>
                  <li>Collaboration and export options for teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Scores are directional—must A/B test.</li>
                  <li>Output quality varies; human QA required.</li>
                  <li>Word-based pricing can climb with volume.</li>
                  <li>Brand and compliance still need manual review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other AI copy tools to match budget, controls, and collaboration needs.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other AI copy platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jasper AI</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/jasper-ai">
                  View Jasper AI
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jasper emphasizes brand voice and collaboration; {toolName} adds predictive scoring to guide testing. Choose based on need for scores vs deep brand governance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Writesonic</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/writesonic">
                  View Writesonic
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Writesonic offers a broad template library and chat; {toolName} focuses on predictive scores and channel fit. Pick based on whether guided scoring or broader templates matter more.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast ad/email/landing variants with guidance on what to test. Keep humans in the loop for claims and compliance.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for A/B testing and review time. Predictive scores are helpful but should not replace real performance data.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid AI copy accelerator for performance teams—best when paired with testing discipline and brand review.
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
            <p>{toolName} accelerates ad, email, and landing copy with predictive scores and channel-focused variants.</p>
            <p>Use it when you have testing discipline and human review for claims, compliance, and brand tone.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your team, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-600" href={officialUrl}>
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

export default AnywordToolPage;
