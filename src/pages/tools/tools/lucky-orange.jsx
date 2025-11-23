import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MousePointerClick, Map, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Lucky Orange";
const slug = "lucky-orange";
const category = "Heatmaps & behavior analytics";
const shortPitch =
  "Lucky Orange combines heatmaps, session recordings, live chat, surveys, and conversion funnels so marketers can quickly see where visitors drop and why.";
const pricingSummary =
  "Plans start around $39/month for 50k pageviews with seat and domain flexibility. Pricing scales by tracked pageviews with a 7-day free trial.";
const officialUrl = "https://www.luckyorange.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/luckyorange.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.18)]",
};

const alternatives = [
  { name: "Hotjar", slug: "hotjar" },
  { name: "Crazy Egg", slug: "crazy-egg" },
  { name: "VWO", slug: "vwo" },
  { name: "Matomo", slug: "matomo" },
  { name: "Fathom Analytics", slug: "fathom-analytics" },
];

const faqs = [
  {
    q: "What does Lucky Orange include?",
    a: "Heatmaps, session recordings, conversion funnels, form analytics, live chat, surveys, and announcements—all in one platform focused on CRO and UX insights.",
  },
  {
    q: "Is Lucky Orange easy to install?",
    a: "Yes. Add a single script or deploy via tag managers like Google Tag Manager. You can enable features gradually to control performance.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is pageview-based with multiple sites and seats included. As traffic grows, plans scale. It’s generally more affordable than pairing separate tools.",
  },
  {
    q: "Do heatmaps and recordings hurt performance?",
    a: "The script is lightweight. You can sample sessions, limit recordings, and choose which pages to track to balance performance and insight depth.",
  },
  {
    q: "Can I use Lucky Orange for funnels?",
    a: "Yes. You can build conversion funnels, see drop-off steps, and pair that with recordings and form analytics to troubleshoot friction.",
  },
  {
    q: "Does Lucky Orange integrate with other tools?",
    a: "It connects with platforms like Shopify, WordPress, HubSpot, and tag managers. Webhooks and APIs help push data to other systems.",
  },
  {
    q: "Is Lucky Orange GDPR-friendly?",
    a: "It supports consent, masking of sensitive inputs, and IP anonymization. Configure masking and policy banners to stay compliant.",
  },
  {
    q: "Does it replace A/B testing?",
    a: "Lucky Orange focuses on insight, not experimentation. Use it with VWO or other testing tools to validate changes after spotting friction.",
  },
];

function LuckyOrangeToolPage() {
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
        "Lucky Orange gives marketers and CRO teams heatmaps, recordings, funnels, and form analytics in one place, plus chat and surveys to learn why users drop. Pricing is straightforward and scales with traffic.",
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
      icon: <Map className="h-5 w-5 text-amber-600" />,
      title: "Heatmaps & scroll maps",
      body: "See where visitors click, scroll, and hover to spot friction and missed opportunities on key pages.",
    },
    {
      icon: <MousePointerClick className="h-5 w-5 text-emerald-600" />,
      title: "Session recordings",
      body: "Watch real user sessions with masking options to understand behavior and debug UX issues quickly.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-600" />,
      title: "Form analytics & funnels",
      body: "Find fields causing drop-offs and visualize funnel abandonment so teams can prioritize fixes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Surveys, chat, announcements",
      body: "Collect feedback in the moment with polls, NPS, live chat, and on-page announcements to validate hypotheses.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Privacy-aware controls",
      body: "Mask inputs, anonymize IPs, and tune sampling to keep recordings compliant and performant.",
    },
    {
      icon: <Activity className="h-5 w-5 text-rose-500" />,
      title: "Performance-friendly setup",
      body: "Deploy via tag manager, limit tracking to critical pages, and sample recordings to manage load.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Lucky Orange review covering heatmaps, session recordings, funnels, surveys, pricing, pros & cons, and how it stacks up to Hotjar and VWO."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-200 blur-3xl" />
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
                  Lucky Orange packs heatmaps, recordings, funnels, and feedback into one dashboard so CRO teams can move from “what happened” to “why” quickly.
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
              Lucky Orange is a {category.toLowerCase()} platform that shows where users get stuck through heatmaps, recordings, form analytics, and conversion funnels. It adds feedback (surveys, chat) to understand the “why.”
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and CRO teams use it to diagnose drop-offs on product, checkout, and onboarding flows. Built-in announcements and chat let you address friction or gather context without extra tools.
            </p>
            <p className="mt-3 text-slate-700">
              Instead of stitching multiple vendors, Lucky Orange combines the essentials so you can find issues faster and feed testing roadmaps.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Lucky Orange is built for teams that want actionable behavior insight without juggling multiple tools.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "CRO teams debugging drop-offs on landing, product, or checkout pages.",
                "Ecommerce marketers pairing heatmaps with form analytics to improve cart completion.",
                "Product teams reviewing recordings to validate UX changes.",
                "Support teams using chat and announcements to deflect friction in real time.",
                "Agencies delivering UX insights and quick wins for clients on retainers.",
                "Founders that need affordable behavior analytics before investing in A/B testing suites.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Lucky Orange focuses on behavior insight that leads to clear optimization ideas.</p>
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
                  Pricing scales primarily by pageviews. Even lower plans include multiple domains and users, making it more affordable than piecing together separate tools for heatmaps, recordings, and surveys.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a low pageview tier while sampling recordings; move up when you need all sessions or more sites.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter tiers</td>
                    <td className="px-4 py-3">Small sites testing heatmaps & recordings</td>
                    <td className="px-4 py-3">Pageview caps, sampling controls</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Ecommerce and SaaS with steady traffic</td>
                    <td className="px-4 py-3">Higher caps, more recordings, more domains</td>
                    <td className="px-4 py-3">$79–$150+/month based on volume</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large sites with heavy traffic</td>
                    <td className="px-4 py-3">Custom caps, SLAs, dedicated support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Sampling recordings and focusing on critical pages keeps costs predictable. As you scale, consider pairing Lucky Orange with testing tools like VWO for experimentation.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-amber-50 p-5 shadow-sm ring-1 ring-amber-100">
                <div className="flex items-center gap-2 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heatmaps, recordings, funnels, and forms in one tool.</li>
                  <li>Built-in chat, surveys, and announcements reduce extra vendors.</li>
                  <li>Pageview-based pricing is straightforward.</li>
                  <li>Easy setup via one script or tag manager.</li>
                  <li>Sampling and masking controls help manage privacy and performance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No native A/B testing—pair with VWO or similar.</li>
                  <li>Large traffic sites must watch pageview caps and sampling.</li>
                  <li>Recordings can create storage/noise if not filtered well.</li>
                  <li>Fewer product analytics features than dedicated analytics tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need broader experimentation or different pricing, explore these options. Each links to a full review page.
            </p>
            <p className="mt-2 text-slate-700">They vary on testing depth, analytics coverage, and ease of onboarding.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Behavior analytics alternative.</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Lucky Orange stacks up against popular behavior tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs VWO vs Hotjar</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vwo-vs-hotjar-vs-lucky-orange">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                VWO leads on experimentation; Hotjar is known for simplicity. Lucky Orange bundles more feedback (chat, surveys) and is cost-friendly for teams not ready for large testing suites.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Lucky Orange if you want all-in-one insights and feedback; choose VWO if testing is your priority; choose Hotjar for the lightest learning curve.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hotjar vs Crazy Egg</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/lucky-orange-vs-hotjar-vs-crazy-egg">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hotjar and Crazy Egg focus on heatmaps and recordings; Lucky Orange adds chat, surveys, and announcements, reducing extra tools for CRO teams.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Lucky Orange for all-in-one insight with feedback; choose Hotjar or Crazy Egg for a leaner footprint if you only need heatmaps and recordings.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For CRO, product, and ecommerce teams that want behavior insight plus feedback tools in one place, Lucky Orange is worth it. You get the essentials for diagnosing friction without buying multiple vendors.
            </p>
            <p className="mt-3 text-slate-700">
              Large sites should watch pageview caps and sampling. If you need experimentation built in, pair Lucky Orange with VWO or another testing platform.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Lucky Orange is a strong value for combined heatmaps, recordings, and feedback when you want to move fast on UX fixes.
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
              Choose Lucky Orange if you need heatmaps, recordings, funnels, and feedback in one platform to diagnose UX issues fast. It’s great for CRO teams, ecommerce, and agencies delivering quick wins.
            </p>
            <p>
              Consider VWO for built-in testing or Hotjar/Crazy Egg if you want only heatmaps and recordings with minimal setup. Pairing Lucky Orange with a testing suite covers both insight and experimentation.
            </p>
            <p>Lucky Orange fits neatly alongside analytics and testing tools, giving marketing and product teams a clear view of where to optimize next.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default LuckyOrangeToolPage;
