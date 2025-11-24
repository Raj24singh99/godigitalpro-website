import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  Plug,
  BarChart3,
  LineChart,
  Gauge,
  Rocket,
  Crown,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Amplitude";
const slug = "amplitude";
const category = "Product Analytics";
const shortPitch =
  "Amplitude is a product analytics platform for event tracking, funnels, cohorts, retention, and experimentation so product and growth teams can make decisions with data.";
const pricingSummary =
  "Free plan with core analytics and caps; Growth and Enterprise add higher event/MTU limits, governance, experiments, data tables, and advanced permissions.";
const officialUrl = "https://amplitude.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/amplitude.com",
  gradient: "from-sky-600 via-indigo-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.25)]",
};

const alternatives = [
  { name: "Mixpanel", slug: "mixpanel" },
  { name: "Heap", slug: "heap" },
  { name: "PostHog", slug: "posthog" },
  { name: "Google Analytics 4", slug: "ga4" },
  { name: "Pendo", slug: "pendo" },
];

const faqs = [
  {
    q: "What is Amplitude?",
    a: "Amplitude is a product analytics platform for tracking events, funnels, retention, journeys, and experiments to help product and growth teams ship better outcomes.",
  },
  {
    q: "Who is Amplitude best for?",
    a: "Product, growth, and data teams that need self-serve behavioral analytics, dashboards, and experiments across web and mobile apps.",
  },
  {
    q: "How does Amplitude pricing work?",
    a: "There is a free plan with caps. Paid Growth/Enterprise tiers expand event and MTU limits, add data governance, experiments, and advanced access controls. Pricing depends on volume and seats.",
  },
  {
    q: "Does Amplitude replace Google Analytics?",
    a: "Amplitude focuses on product analytics (behavioral events, cohorts, funnels, retention). GA4 is broader marketing/web analytics. Many teams run both.",
  },
  {
    q: "Does Amplitude support experiments?",
    a: "Yes. Amplitude Experiment (on paid tiers) handles feature flags, A/B testing, and stats. You need enough volume and clean events to trust results.",
  },
  {
    q: "How do you send data to Amplitude?",
    a: "SDKs (web/mobile), server APIs, CDPs (Segment/RudderStack), cloud warehouse connectors, and data tables. A clear tracking plan is essential.",
  },
  {
    q: "Is Amplitude GDPR/CCPA compliant?",
    a: "Yes. It provides controls for consent, data deletion, and access. You must configure settings and implement consent flows correctly.",
  },
];

const featureBlocks = [
  {
    icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
    title: "Event tracking + funnels",
    body: "Track product events, build funnels, and see where users drop off across key flows.",
  },
  {
    icon: <LineChart className="h-5 w-5 text-indigo-500" />,
    title: "Cohorts & retention",
    body: "Analyze retention by cohorts, behavior, and segments to spot stickiness and churn drivers.",
  },
  {
    icon: <Gauge className="h-5 w-5 text-amber-500" />,
    title: "Journeys & pathing",
    body: "Map user journeys, discover top paths, and find friction before experimentation.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-500" />,
    title: "Experiments & flags",
    body: "Run A/B tests and feature flags (paid tiers) with stats to ship confident releases.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
    title: "Governance",
    body: "Schema controls, event taxonomies, and approvals to keep data clean as teams scale.",
  },
  {
    icon: <Plug className="h-5 w-5 text-purple-500" />,
    title: "Integrations",
    body: "Ingest via SDKs, CDPs, warehouses; push cohorts to ad platforms, messaging, and feature flags.",
  },
];

function AmplitudeToolPage() {
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
        "Amplitude delivers strong product analytics for funnels, retention, journeys, and experiments. It works best with a clear tracking plan and enough volume for trustworthy insights.",
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Amplitude review: pricing, features, pros & cons, and alternatives so you can choose the right product analytics platform."
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
                <Crown className="h-4 w-4 text-sky-700" />
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
              <div className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-2xl ring-1 ring-white/10 ${brandMeta.glow}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${brandMeta.gradient} opacity-95`} aria-hidden />
                <div className="absolute inset-0 bg-slate-900/45" aria-hidden />
                <div className="absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
                  <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-white/30 blur-3xl" />
                  <div className="absolute right-4 bottom-0 h-28 w-28 rounded-full bg-sky-200/50 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3 drop-shadow-sm">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/15 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold drop-shadow-sm">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white drop-shadow-sm">
                  {toolName} gives self-serve analytics for funnels, retention, journeys, and experiments—best with a clear tracking plan.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold drop-shadow-sm">
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
              {toolName} is a product analytics platform for measuring how users move through your product: funnels, retention, cohorts, journeys, and experiments. It helps product and growth teams find friction and ship improvements.
            </p>
            <p className="mt-3 text-slate-700">
              Use it when you have event instrumentation in place and enough volume to trust trends and A/B tests. It pairs well with a CDP or warehouse for cleaner schemas.
            </p>
            <p className="mt-3 text-slate-700">
              Expect to spend time on a tracking plan, governance, and onboarding teams to self-serve dashboards.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for product-led teams with meaningful event volume and a need for behavioral analytics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product managers tracking feature adoption and engagement.",
                "Growth teams running funnels, cohorts, and experiments.",
                "Data teams building governed taxonomies and dashboards.",
                "Founders/ops who need self-serve product insights at scale.",
                "B2B SaaS and marketplaces measuring activation and retention.",
                "Mobile apps monitoring journeys, churn, and push performance.",
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
              {toolName} focuses on product analytics with strong funnels, cohorts, journeys, and experimentation for product-led growth.
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
                  {toolName} has a free tier with caps. Growth/Enterprise scale by events/MTUs and seats, and add governance, experiments, data tables, and SSO/permissions.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free, validate tracking, then move to Growth once you need higher limits and governance.</p>
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
                    <td className="px-4 py-3">Early teams validating tracking</td>
                    <td className="px-4 py-3">Core analytics with caps</td>
                    <td className="px-4 py-3">Good for initial instrumentation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling product/growth teams</td>
                    <td className="px-4 py-3">Higher limits, governance, some experiments</td>
                    <td className="px-4 py-3">Most common choice</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs with strict controls</td>
                    <td className="px-4 py-3">Top limits, advanced experiments, SSO/SCIM, data tables</td>
                    <td className="px-4 py-3">Custom pricing; includes support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Model costs by events/MTUs and seats. Budget for CDP/ETL and tracking governance so data stays clean as usage grows.
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
                  <li>Strong funnels, cohorts, retention, and journey tools.</li>
                  <li>Self-serve dashboards with good UX for PMs/growth.</li>
                  <li>Governance features to manage schemas at scale.</li>
                  <li>Experiments and flags (paid tiers) for product teams.</li>
                  <li>Integrations to CDPs, warehouses, and activation tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Requires clean tracking and enough volume to be useful.</li>
                  <li>Free tier has caps; costs scale with events/MTUs.</li>
                  <li>Experimentation depends on traffic and good schemas.</li>
                  <li>Onboarding teams to self-serve takes enablement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other product analytics tools to match budget, governance needs, and experiment requirements.
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
            <p className="text-slate-700">See how {toolName} stacks against other product analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Mixpanel</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/mixpanel">
                  View Mixpanel
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Mixpanel and {toolName} are close peers; both have strong funnels and retention. {toolName} emphasizes journeys/experiments; Mixpanel is popular for its speed and UI. Choose based on governance, experiments, and pricing fit.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GA4</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/ga4">
                  View GA4
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GA4 is broader marketing/web analytics; {toolName} is deeper for product behavior. Many teams run GA4 for acquisition and {toolName} for in-product insights and experiments.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you have a clear tracking plan, sufficient volume, and teams ready to self-serve product analytics and experiments.
            </p>
            <p className="mt-3 text-slate-700">
              If you need lighter analytics or smaller budgets, start with free/cheaper tools and graduate once you need governance, journeys, and flags.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A leading product analytics and experimentation platform—best when paired with disciplined tracking and a CDP/warehouse.
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
              Choose {toolName} if you need self-serve product analytics, retention/funnel insights, and the option to run experiments with governance.
            </p>
            <p>
              Consider Mixpanel, Heap, or PostHog for similar analytics; GA4 for acquisition tracking; Pendo for in-app guides + analytics.
            </p>
            <p>{toolName} helps product and growth teams find friction, improve activation, and scale experiments—provided tracking is clean and volume is sufficient.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} fits your stack, you can try it here:{" "}
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
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-base font-semibold text-slate-900"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {question}
        <ChevronDown className={`h-4 w-4 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default AmplitudeToolPage;
