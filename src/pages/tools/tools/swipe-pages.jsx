import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Swipe Pages";
const slug = "swipe-pages";
const category = "Landing Page Builder";
const shortPitch =
  "Swipe Pages is a landing page builder focused on speed and conversions, offering AMP pages, templates, A/B testing, and integrations for marketers.";
const pricingSummary =
  "Tiered pricing by domains, traffic, and features. Higher tiers add AMP, A/B testing, dynamic text, and more integrations. Costs scale with traffic and project count.";
const officialUrl = "https://swipepages.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/swipepages.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Unbounce", slug: "unbounce" },
  { name: "Instapage", slug: "instapage" },
  { name: "Leadpages", slug: "leadpages" },
  { name: "Carrd", slug: "carrd" },
  { name: "Webflow", slug: "webflow" },
];

const faqs = [
  {
    q: "What is Swipe Pages?",
    a: "Swipe Pages is a landing page builder that offers fast-loading AMP pages, templates, and conversion-focused features for marketers.",
  },
  {
    q: "Who is it for?",
    a: "Marketers, performance teams, and SMBs building high-converting landing pages without heavy dev work.",
  },
  {
    q: "How is pricing structured?",
    a: "Tiered plans based on domains, traffic, and features like AMP, A/B testing, and integrations.",
  },
  {
    q: "Does it support A/B testing?",
    a: "Yes. A/B testing is available on eligible tiers to optimize pages.",
  },
  {
    q: "Can I use AMP?",
    a: "Yes. Swipe Pages supports AMP for faster mobile experiences on certain plans.",
  },
  {
    q: "What integrations are available?",
    a: "Integrations with CRM, email, analytics, and webhooks/Zapier for lead capture and tracking.",
  },
  {
    q: "Is it code-free?",
    a: "Yes. Drag-and-drop builder with templates; custom code can be added for advanced needs.",
  },
  {
    q: "Does it include forms and popups?",
    a: "Yes. Built-in forms, popups, and dynamic text for personalization.",
  },
];

function SwipePagesToolPage() {
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
        "Swipe Pages is a landing page builder with AMP, templates, and A/B testing for conversion-focused marketers. It’s strong for fast builds without heavy dev involvement.",
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
      title: "Drag-and-drop builder",
      body: "Create pages quickly with templates and blocks; add custom code when needed.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "AMP support",
      body: "Build AMP pages for faster mobile load times and better performance.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "A/B testing",
      body: "Test variations to improve conversion rates on key pages.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Dynamic text & personalization",
      body: "Use dynamic text replacement and personalization to match visitor intent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect forms to CRM, email, analytics, and automation via APIs or Zapier/webhooks.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Forms & popups",
      body: "Built-in forms, popups, and lead capture elements to collect and convert traffic.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Swipe Pages review: pricing, features, pros & cons, and alternatives so you can decide if it fits your landing page and conversion needs."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
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
                  {toolName} helps you ship fast, conversion-focused landing pages with AMP, testing, and integrations—no heavy dev work required.
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
              {toolName} is a landing page builder with drag-and-drop editing, templates, AMP support, and conversion features like A/B testing and dynamic text. It’s built for marketers and performance teams to launch pages quickly.
            </p>
            <p className="mt-3 text-slate-700">
              It integrates with CRMs, email platforms, and analytics for lead capture and tracking. Custom code can be added for advanced needs.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to spin up campaign pages fast; monitor performance and iterate via A/B tests and analytics.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for marketers who want fast, high-performing landing pages without developer dependence.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Performance marketers running campaigns and tests.",
                "SMBs needing quick, optimized landing pages.",
                "Agencies building pages for clients with minimal dev time.",
                "Teams wanting AMP for mobile speed and conversions.",
                "Marketers needing A/B testing and personalization options.",
                "Users who prefer drag-and-drop builders with integration hooks.",
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
              {toolName} focuses on speed, conversions, and flexibility with AMP, testing, and integrations.
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
                  {toolName} offers tiered plans based on domains, traffic, and features. AMP, A/B testing, dynamic text, and advanced integrations are available on higher tiers. Costs rise with traffic and project count.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a mid-tier if you need AMP and testing; upgrade when traffic, domains, or integration needs expand.</p>
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
                    <td className="px-4 py-3">Small projects</td>
                    <td className="px-4 py-3">Core builder, basic integrations</td>
                    <td className="px-4 py-3">Limited domains/traffic</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid-tier</td>
                    <td className="px-4 py-3">Growing campaigns</td>
                    <td className="px-4 py-3">AMP, A/B testing, dynamic text</td>
                    <td className="px-4 py-3">Good balance of features vs cost</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Top/Agency</td>
                    <td className="px-4 py-3">High traffic/agency use</td>
                    <td className="px-4 py-3">More domains, integrations, priority support</td>
                    <td className="px-4 py-3">Use when managing many clients/projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for traffic growth and domain needs; budget for analytics/CRM tools and any custom code work.
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
                  <li>Fast, conversion-focused landing page building.</li>
                  <li>AMP support for mobile speed.</li>
                  <li>A/B testing and dynamic text for optimization.</li>
                  <li>Integrations with CRM/email/analytics.</li>
                  <li>Templates and drag-and-drop ease; custom code possible.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Tier limits on domains and traffic; higher tiers may be needed.</li>
                  <li>Advanced features gated to mid/high tiers.</li>
                  <li>Less flexible than full custom dev for unique designs.</li>
                  <li>Ongoing costs plus additional tools (CRM/analytics).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other landing page builders to fit your traffic, testing, and customization needs.
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
            <p className="text-slate-700">See how {toolName} compares to other landing page builders.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Unbounce</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/unbounce">
                  View Unbounce
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Unbounce offers robust testing and Smart Traffic; {toolName} emphasizes AMP and speed. Choose Unbounce for extensive optimization features, {toolName} for AMP and ease.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Instapage</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/instapage">
                  View Instapage
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Instapage focuses on collaboration and enterprise features; {toolName} is lighter and AMP-oriented. Choose based on team size, collaboration needs, and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need fast, conversion-focused landing pages with AMP, testing, and integrations, and you prefer a drag-and-drop builder over custom dev.
            </p>
            <p className="mt-3 text-slate-700">
              Choose a tier that matches your traffic and domain needs; upgrade for testing and personalization. Pair with analytics/CRM to measure performance.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid landing page builder for speed and conversions—best when you need AMP and quick iteration without developer overhead.
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
              Choose {toolName} if you need a fast, AMP-capable landing page builder with testing and integrations, and you want to minimize developer effort.
            </p>
            <p>
              Consider Unbounce or Instapage for deeper optimization or enterprise collaboration; {toolName} excels for speed-focused builds with strong mobile performance.
            </p>
            <p>{toolName} helps ship conversion-focused pages quickly—use testing and analytics to keep improving results.</p>
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

export default SwipePagesToolPage;
