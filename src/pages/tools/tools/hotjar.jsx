import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hotjar";
const slug = "hotjar";
const category = "Behavior Analytics";
const shortPitch =
  "Hotjar is a behavior analytics platform offering heatmaps, session recordings, surveys, and feedback widgets to understand user behavior and improve conversion.";
const pricingSummary = "Free tier for small sites; paid plans start around $32/month with higher pageview limits, more recordings, and advanced surveys on higher tiers.";
const officialUrl = "https://www.hotjar.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hotjar.com",
  gradient: "from-rose-500 via-red-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(239,68,68,0.24)]",
};

const alternatives = [
  { name: "VWO", slug: "vwo" },
  { name: "Crazy Egg", slug: "crazy-egg" },
  { name: "Lucky Orange", slug: "lucky-orange" },
  { name: "Plausible", slug: "plausible" },
  { name: "Matomo", slug: "matomo" },
];

const faqs = [
  {
    q: "Is Hotjar free?",
    a: "Yes. Hotjar has a free tier with limited pageviews and recordings. Paid plans expand traffic limits, recordings, and feedback tools.",
  },
  {
    q: "Does Hotjar slow down my site?",
    a: "Hotjar is lightweight and designed to minimize performance impact. You can sample traffic and mask fields to reduce overhead.",
  },
  {
    q: "Can Hotjar run A/B tests?",
    a: "Hotjar focuses on qualitative insights—heatmaps, recordings, and surveys. For A/B or MVT testing, pair it with tools like VWO.",
  },
  {
    q: "Is Hotjar GDPR-compliant?",
    a: "Yes. Hotjar offers consent management, IP masking, data residency options, and tools to hide sensitive input fields.",
  },
  {
    q: "What is Hotjar best for?",
    a: "Understanding on-page behavior, spotting UX friction, collecting feedback, and prioritizing CRO tests.",
  },
  {
    q: "Does Hotjar have funnels or form analytics?",
    a: "Yes. On paid plans you can track funnels, drop-offs, and form field performance alongside heatmaps and recordings.",
  },
  {
    q: "How does Hotjar compare to VWO?",
    a: "Hotjar is stronger on qualitative insights. VWO adds experimentation and personalization. Many teams use both together.",
  },
  {
    q: "Is Hotjar good for product teams?",
    a: "Yes. Product and UX teams use Hotjar to watch sessions, gather survey feedback, and prioritize roadmap fixes based on behavior.",
  },
];

function HotjarToolPage() {
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
        "Hotjar delivers heatmaps, recordings, and feedback widgets to reveal how users browse, click, and convert. It’s ideal for UX and CRO teams wanting qualitative insights without heavy setup. Pricing starts free and scales with traffic and features.",
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
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Heatmaps and scroll maps",
      body: "See where users click, move, and scroll to identify friction and optimize layouts on desktop and mobile.",
    },
    {
      icon: <Video className="h-5 w-5 text-orange-500" />,
      title: "Session recordings",
      body: "Watch anonymized user sessions to spot UX issues, broken flows, and hesitations without guessing.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Funnels and form analytics",
      body: "Track drop-offs across steps and form fields to prioritize fixes that lift conversion.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Privacy controls",
      body: "Mask fields, manage consent, and configure sampling to stay compliant with GDPR and protect user data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Surveys and feedback widgets",
      body: "Collect voice-of-customer insights with on-page widgets, NPS, and micro-surveys targeted by behavior.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-600" />,
      title: "Integrations for product and marketing",
      body: "Push data to Slack, Jira, Asana, and analytics tools so teams can act on findings quickly.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Hotjar review covering pricing, features, pros & cons, alternatives, and whether Hotjar fits your 2025 CRO and UX stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-rose-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Hotjar surfaces what users do and feel on your site with heatmaps, recordings, and feedback—so you can prioritize UX fixes and CRO tests with confidence.
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
              {toolName} is a {category.toLowerCase()} toolset with heatmaps, recordings, surveys, and feedback widgets. It helps marketers, product managers, and UX teams understand why users behave the way they do.
            </p>
            <p className="mt-3 text-slate-700">
              Use Hotjar to uncover friction points before running experiments. Funnels and form analytics reveal drop-offs; surveys capture sentiment; recordings show real interactions.
            </p>
            <p className="mt-3 text-slate-700">
              It’s lightweight to deploy, with privacy controls that keep implementations compliant across regions and industries.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Hotjar fits teams that need fast qualitative insights to guide UX and CRO decisions.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Product managers prioritizing UX improvements via recordings and feedback.",
                "Marketers running CRO programs that need heatmaps and form analytics.",
                "Designers validating new layouts and navigation changes.",
                "Support and success teams investigating user friction before tickets arise.",
                "Founders and growth teams needing quick insight without heavy analytics setup.",
                "Agencies delivering CRO/UX audits for multiple clients.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Hotjar highlights user behavior so teams can prioritize fixes and experiments.</p>
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
                  Hotjar pricing is based on traffic and features. The free plan suits small sites. Paid plans increase pageview and recording limits, unlock funnels/form analytics, and add surveys and user attributes on higher tiers.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free, upgrade to Plus/Business when you need more recordings, funnels, and surveys.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic (Free)</td>
                    <td className="px-4 py-3">Small sites and testing</td>
                    <td className="px-4 py-3">Limited pageviews/recordings, core heatmaps</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">More pageviews/recordings, funnels, form analytics</td>
                    <td className="px-4 py-3">~$32/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Product and CRO teams</td>
                    <td className="px-4 py-3">Higher limits, advanced surveys, user attributes</td>
                    <td className="px-4 py-3">$80–$171+/month (traffic-based)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Scale</td>
                    <td className="px-4 py-3">Enterprises and large sites</td>
                    <td className="px-4 py-3">Highest limits, priority support, advanced controls</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Hotjar’s value hinges on traffic and insight needs. Small teams can stay on free or Plus; CRO-focused teams often upgrade to Business for surveys and higher recording volumes.
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
                  <li>Excellent heatmaps and session recordings.</li>
                  <li>Built-in surveys and feedback widgets.</li>
                  <li>Simple setup with privacy controls and masking.</li>
                  <li>Funnels and form analytics for conversion insights.</li>
                  <li>Integrations with collaboration and analytics tools.</li>
                  <li>Freemium pricing to start quickly.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No native A/B or multivariate testing.</li>
                  <li>Sampling limits on lower tiers can miss edge cases.</li>
                  <li>Not ideal for server-side or complex experimentation.</li>
                  <li>Heavy use can increase costs as traffic grows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Hotjar shines for qualitative insight. If you need experimentation or different pricing models, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All offer heatmaps/recordings; they differ on testing depth, live chat, and cost.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug + alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two popular behavior analytics options.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs VWO</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/vwo-vs-hotjar-vs-crazy-egg">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                VWO includes A/B testing and personalization plus analytics. Hotjar focuses on qualitative insights. Many teams use Hotjar for research and VWO for experiments.
              </p>
              <p className="mt-2 text-slate-900">Choose Hotjar for behavior insight; choose VWO when you’re ready to test and personalize.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Lucky Orange</h3>
                <a className="text-sm font-semibold text-rose-700 hover:text-rose-600" href="/tools/compare/vwo-vs-hotjar-vs-lucky-orange">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Lucky Orange offers live chat and competitive pricing alongside heatmaps and recordings. Hotjar provides a more polished UX and surveys. Pick Lucky Orange for all-in-one chat + insights; pick Hotjar for refined analytics and feedback tools.
              </p>
              <p className="mt-2 text-slate-900">Both can coexist if you need live chat plus Hotjar’s survey and heatmap depth.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For UX, product, and CRO teams needing qualitative insights quickly, Hotjar is worth it. Heatmaps, recordings, funnels, and feedback reveal what analytics alone can’t.
            </p>
            <p className="mt-3 text-slate-700">
              If you need experimentation or server-side testing, add a tool like VWO. If budget is the main factor, compare with Lucky Orange or Crazy Egg.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Hotjar is a top pick for behavior analytics and feedback, ideal before or alongside conversion experiments.
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
              Choose {toolName} if you want clear visual evidence of user behavior to guide UX and CRO work. It’s easy to deploy and gives quick wins through heatmaps, recordings, and feedback.
            </p>
            <p>
              Consider VWO if you need experimentation, or Lucky Orange/Crazy Egg for budget-friendly alternatives with chat or simpler feature sets.
            </p>
            <p>Hotjar complements analytics and testing tools, providing the qualitative context needed to prioritize the right fixes.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-rose-700 hover:text-rose-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-rose-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default HotjarToolPage;
