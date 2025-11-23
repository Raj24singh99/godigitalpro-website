import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ActivitySquare, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Fathom Analytics";
const slug = "fathom-analytics";
const category = "Privacy-first Web Analytics";
const shortPitch =
  "Fathom Analytics is a lightweight, privacy-first alternative to Google Analytics that gives marketers clean insights without cookies or compliance headaches.";
const pricingSummary =
  "Paid plans start around $14/month for up to 100K monthly page views, with higher tiers and annual discounts available.";
const officialUrl = "https://usefathom.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/usefathom.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Plausible", slug: "plausible" },
  { name: "Matomo", slug: "matomo" },
  { name: "ClickMagick", slug: "clickmagick" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "MonsterInsights", slug: "monsterinsights" },
];

const faqs = [
  {
    q: "Is Fathom compliant with privacy laws?",
    a: "Yes. Fathom is GDPR, CCPA, and PECR compliant by design. It avoids cookies, anonymizes data, and offers EU isolation for privacy-sensitive teams.",
  },
  {
    q: "Does Fathom sample data?",
    a: "No sampling. Fathom provides accurate, cookieless analytics with fast dashboards, so marketers can trust the numbers.",
  },
  {
    q: "Can I use Fathom alongside Google Analytics?",
    a: "Yes. Many teams run Fathom next to GA4 for privacy-first reporting and faster dashboards while migrating off GA.",
  },
  {
    q: "How does Fathom track conversions?",
    a: "Fathom uses events and goals you define. You can track button clicks, form submissions, and route conversions without heavy tagging.",
  },
  {
    q: "Does Fathom impact page speed?",
    a: "Fathom’s script is very small compared to GA and loads quickly, protecting Core Web Vitals and SEO performance.",
  },
  {
    q: "Is Fathom good for agencies?",
    a: "Yes. Agencies appreciate the privacy posture, clear dashboards, uptime monitoring, and clean reports clients understand instantly.",
  },
  {
    q: "Does Fathom block ad-blockers?",
    a: "Fathom offers custom domains for the tracking script, which helps bypass many ad-blockers and increases data completeness.",
  },
  {
    q: "Can I export my data?",
    a: "You can export CSVs and use the API to pull data into your own reports or dashboards.",
  },
];

function FathomAnalyticsPage() {
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
        "Fathom is a privacy-first analytics platform that keeps reporting simple, fast, and compliant. It removes cookie banners, improves site performance, and gives marketers the essentials without the bloat of GA4.",
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
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Privacy-first by default",
      body: "Cookieless tracking, GDPR/CCPA compliance, and EU isolation options reduce legal overhead and improve visitor trust.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
      title: "Clean, fast dashboards",
      body: "Real-time insights with no sampling or complex setup. Marketers get page views, referrers, conversions, and goals at a glance.",
    },
    {
      icon: <ActivitySquare className="h-5 w-5 text-indigo-500" />,
      title: "Simple events and goals",
      body: "Track button clicks, forms, and revenue events with a few lines of code or simple goal definitions—no massive tag plans required.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and API",
      body: "Send data to spreadsheets, dashboards, CRMs, or automation tools via exports and APIs to keep reporting centralized.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Performance friendly",
      body: "A tiny script and CDN delivery keep Core Web Vitals healthy and prevent analytics from slowing down your site.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "Uptime and alerting",
      body: "Site monitoring and alerts help teams catch downtime quickly, so they safeguard paid traffic and SEO momentum.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Fathom Analytics review for privacy-focused marketers and agencies. See pricing, features, pros, cons, and alternatives to decide if Fathom fits your stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  Fathom gives you clean analytics without cookies or slow scripts, making it a strong fit for privacy-first and performance-focused teams.
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
              Fathom is a {category.toLowerCase()} platform that replaces heavy analytics suites with a small script and simple reporting. It focuses on privacy compliance and fast, trustworthy data.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, founders, and agencies use Fathom to understand traffic, conversions, and marketing ROI without cookie banners or confusing dashboards.
            </p>
            <p className="mt-3 text-slate-700">
              Uptime monitoring and custom-domain tracking help teams protect revenue and collect more accurate data while staying privacy-friendly.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Fathom is ideal for privacy-first, speed-conscious teams.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers who want simple, accurate analytics without cookies.",
                "Agencies that need client-friendly dashboards and easy reporting.",
                "Founders and small teams who want to avoid GA4 complexity.",
                "Product and growth marketers who need fast conversion insights.",
                "Privacy-focused organizations that require GDPR-ready tooling.",
                "Teams protecting Core Web Vitals and SEO from heavy scripts.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
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
              Fathom trims analytics down to essentials: privacy, speed, and clarity. It avoids the bloat of GA4 while keeping data exportable and extensible.
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
                  Fathom pricing scales by monthly page views with unlimited sites. All plans include cookieless tracking, uptime monitoring, and privacy compliance. Annual billing reduces the monthly equivalent.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the entry plan for ~100K views; upgrade as traffic grows without losing historical data.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Entry</td>
                    <td className="px-4 py-3">New sites and small blogs</td>
                    <td className="px-4 py-3">Up to ~100K monthly views</td>
                    <td className="px-4 py-3">~$14/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Growing brands and campaigns</td>
                    <td className="px-4 py-3">Up to ~400K monthly views</td>
                    <td className="px-4 py-3">~$44/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies and multi-site operators</td>
                    <td className="px-4 py-3">Higher view limits, multiple team members</td>
                    <td className="px-4 py-3">Starts ~$100/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High-traffic or compliance-heavy teams</td>
                    <td className="px-4 py-3">Custom limits, support, and onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              There’s a free 14-day trial. Because pricing scales on page views, it’s predictable for most marketing sites and more affordable than enterprise analytics suites.
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
                  <li>Built-in privacy compliance; removes cookie-banner headaches.</li>
                  <li>Very fast script and dashboard with no sampling.</li>
                  <li>Unlimited sites per account with simple goal tracking.</li>
                  <li>Custom domain tracking helps bypass ad-blockers.</li>
                  <li>Easy exports and API access for reporting stacks.</li>
                  <li>Uptime monitoring included, protecting paid traffic.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less granular than GA4 or Mixpanel for product analytics.</li>
                  <li>No built-in session replay or heatmaps (pair with Hotjar).</li>
                  <li>Event tracking requires light setup via goals or code snippets.</li>
                  <li>Pricing scales with traffic; extremely high-traffic sites may prefer flat-fee alternatives.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Privacy-friendly analytics has grown fast. These alternatives differ on dashboards, attribution depth, and pricing. All have live pages so you can compare options directly.
            </p>
            <p className="mt-2 text-slate-700">Choose based on privacy posture, reporting depth, and whether you need session replay or attribution.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how Fathom compares to other privacy-first analytics platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Plausible</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/fathom-vs-plausible-vs-ga4">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Plausible and Fathom are both privacy-first and lightweight. Plausible leans slightly more customizable in reporting; Fathom emphasizes speed, uptime, and custom-domain tracking to avoid blockers.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Fathom if you want uptime monitoring and the cleanest dashboards. Choose Plausible if you prefer self-hosting options or more custom reporting slices.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs GA4</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/fathom-vs-plausible-vs-ga4">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                GA4 is powerful and free but complex, heavy, and reliant on consent banners. Fathom is paid but simpler, faster, and privacy-safe, saving time on consent management.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Fathom for fast, compliant reporting without bloat; choose GA4 if you need deep integrations and granular event modeling at massive scale.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers and agencies who want compliant analytics without slowing down sites, Fathom is worth the subscription. It gives trustworthy data, removes consent headaches, and plays well with automation and exports.
            </p>
            <p className="mt-3 text-slate-700">
              If you need product analytics or deep attribution modeling, pair Fathom with other tools. If you simply need traffic and conversion visibility that respects privacy, it’s a clear upgrade over GA4’s complexity.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Fathom is an excellent privacy-focused analytics choice for marketers who want speed, clarity, and compliance baked in.
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
              Choose Fathom if you want privacy-first analytics that are simple, fast, and easy for clients to understand. It reduces cookie-banner friction and protects site performance.
            </p>
            <p>
              Consider Plausible or Matomo if you need more customization or self-hosting. GA4 remains an option for teams needing deep integrations and free-at-scale data, but it comes with complexity.
            </p>
            <p>Fathom fits cleanly in a modern marketing stack alongside form tools, landing page builders, CRMs, and automation platforms.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FathomAnalyticsPage;
