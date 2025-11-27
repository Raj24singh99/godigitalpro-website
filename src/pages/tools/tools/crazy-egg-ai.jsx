import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Crazy Egg AI";
const slug = "crazy-egg-ai";
const category = "Conversion Optimization";
const shortPitch =
  "Crazy Egg AI adds AI-powered insights and recommendations to Crazy Egg’s heatmaps, recordings, and A/B testing to improve site conversions.";
const pricingSummary =
  "Pricing tiers depend on monthly tracked visits and features. Higher plans add more seats, domains, A/B testing, and AI suggestions; trials are available.";
const officialUrl = "https://www.crazyegg.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/crazyegg.com",
  gradient: "from-emerald-500 via-sky-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Hotjar", slug: "hotjar" },
  { name: "Microsoft Clarity", slug: "microsoft-clarity" },
  { name: "FullStory", slug: "fullstory" },
  { name: "VWO", slug: "vwo" },
  { name: "AB Tasty", slug: "ab-tasty" },
];

const faqs = [
  {
    q: "What is Crazy Egg AI?",
    a: "Crazy Egg AI layers AI insights and recommendations on top of Crazy Egg’s heatmaps, session recordings, and A/B testing to help improve conversions.",
  },
  {
    q: "Who is it for?",
    a: "Marketers, CRO specialists, and product teams that use Crazy Egg for behavior analytics and want AI guidance for optimizations.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans are based on monthly tracked visits and features. Higher tiers add more seats, domains, A/B testing, and AI suggestions.",
  },
  {
    q: "Does it include heatmaps and recordings?",
    a: "Yes. Heatmaps, scroll maps, and session recordings are core; AI surfaces insights from this data.",
  },
  {
    q: "Is A/B testing included?",
    a: "A/B testing is available on higher plans to test variants informed by analytics.",
  },
  {
    q: "Does it integrate with other tools?",
    a: "Yes. Integrations include popular analytics and CMS platforms; check current options for your stack.",
  },
  {
    q: "Do I still need manual analysis?",
    a: "Yes. AI suggestions are starting points—validate with experiments and human review.",
  },
  {
    q: "Is there a free trial?",
    a: "Trials are available; use them to evaluate AI recommendations and data coverage.",
  },
];

function CrazyEggAiToolPage() {
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
        "Crazy Egg AI provides AI-backed insights on top of heatmaps, recordings, and A/B testing, helping teams prioritize CRO opportunities more quickly.",
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
      title: "AI insights",
      body: "AI highlights friction and opportunities from heatmaps and recordings.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Heatmaps & scroll maps",
      body: "Visualize clicks, scrolls, and attention to understand user behavior.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "A/B testing",
      body: "Test variations informed by behavioral data to improve conversion rates.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Session recordings",
      body: "Watch user sessions to see interaction patterns and issues.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations",
      body: "Connect analytics, CMS, and marketing tools to streamline CRO workflows.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reporting",
      body: "Reports and AI summaries help prioritize tests and share findings.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Crazy Egg AI review: pricing, features, pros & cons, and alternatives to help you evaluate its CRO capabilities."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
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
                  {toolName} surfaces AI recommendations from behavior analytics so CRO teams can prioritize and test faster.
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
              {toolName} adds AI suggestions to Crazy Egg’s heatmaps, scroll maps, session recordings, and testing tools. It helps identify friction points and prioritize experiments.
            </p>
            <p className="mt-3 text-slate-700">Use it to quickly spot issues, generate hypotheses, and run A/B tests informed by behavior data.</p>
            <p className="mt-3 text-slate-700">Keep humans in the loop to validate recommendations and ensure they align with your UX and brand standards.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams already using or considering Crazy Egg for CRO and behavior analytics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "CRO teams prioritizing tests from heatmaps and recordings.",
                "Product managers wanting quick insights on friction points.",
                "Marketers optimizing landing pages and funnels.",
                "Agencies delivering conversion audits and tests for clients.",
                "Teams that need AI suggestions but will validate with experiments.",
                "Sites requiring lightweight setup compared to enterprise tools.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on AI insights layered on behavior analytics and testing.</p>
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
                  {toolName} pricing depends on tracked visits and features. Higher tiers add more seats, domains, A/B testing, and AI recommendations. Trials help validate fit and data quality.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Estimate monthly traffic and needed seats; choose a tier with A/B testing and AI suggestions if CRO is a priority.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Small sites/testing</td>
                    <td className="px-4 py-3">Heatmaps, recordings, limited visits</td>
                    <td className="px-4 py-3">Good for initial insights</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">More visits, A/B testing, more seats</td>
                    <td className="px-4 py-3">Fits most CRO programs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Higher traffic & support</td>
                    <td className="px-4 py-3">Highest limits, domains, priority support</td>
                    <td className="px-4 py-3">Best for larger orgs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for experiment design and dev time; AI suggestions still need validation and implementation.</p>
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
                  <li>AI insights built on heatmaps and recordings.</li>
                  <li>Includes A/B testing to validate changes.</li>
                  <li>Lightweight setup compared to enterprise suites.</li>
                  <li>Integrations with analytics and CMS tools.</li>
                  <li>Clear reports to share with stakeholders.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Visitor limits drive plan upgrades.</li>
                  <li>AI suggestions still require human judgment.</li>
                  <li>Not a full analytics suite; pair with broader analytics.</li>
                  <li>Complex tests may need dev involvement.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other CRO tools to match traffic limits, testing needs, and budgets.
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
            <p className="text-slate-700">See how {toolName} compares with other behavior analytics/CRO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hotjar</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hotjar">
                  View Hotjar
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hotjar is popular for heatmaps and feedback widgets; {toolName} adds AI insights and built-in testing. Choose based on testing needs and AI assist value.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs FullStory</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/fullstory">
                  View FullStory
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                FullStory offers deep session replay and analytics; {toolName} focuses on heatmaps, AI insights, and testing. Pick based on depth vs. simplicity and cost.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want AI-guided insights alongside heatmaps, recordings, and A/B testing to improve conversions quickly.
            </p>
            <p className="mt-3 text-slate-700">
              It works best when teams act on insights, design tests, and validate results; AI is a helper, not a replacement for CRO discipline.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A practical CRO option for teams wanting AI suggestions with built-in testing—budget visits and plan for implementation resources.
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
              Choose {toolName} if you want AI-backed insights with heatmaps, recordings, and A/B testing in one platform to accelerate CRO decisions.
            </p>
            <p>
              Consider Hotjar or FullStory based on depth of analytics vs. simplicity; use {toolName} when built-in testing and AI suggestions are priorities.
            </p>
            <p>{toolName} helps teams find and act on CRO opportunities—ensure you have designers/devs ready to implement and test changes.</p>
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

export default CrazyEggAiToolPage;
