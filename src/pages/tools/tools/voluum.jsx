import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Workflow, BarChart3, Rocket, Globe, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Voluum";
const slug = "voluum";
const category = "Affiliate Tracking";
const shortPitch =
  "Voluum is a performance marketing tracking platform for affiliates, media buyers, and agencies, providing real-time attribution, automation, fraud protection, and reporting across all traffic sources.";
const pricingSummary =
  "Plans start around $199/mo for Discover, $299/mo for Profit, and $499/mo for Grow with higher caps. Enterprise and Agency plans are custom. All include real-time tracking, rule-based routing, and integrations.";
const officialUrl = "https://voluum.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/voluum.com",
  gradient: "from-purple-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.3)]",
};

const alternatives = [
  { name: "RedTrack", slug: "redtrack" },
  { name: "ClickMagick", slug: "clickmagick" },
  { name: "Hotjar", slug: "hotjar" },
  { name: "Crazy Egg", slug: "crazy-egg" },
  { name: "Lucky Orange", slug: "lucky-orange" },
];

const faqs = [
  { q: "What does Voluum track?", a: "Clicks, conversions, revenue, and cost for affiliate campaigns across display, search, native, push, and social traffic." },
  { q: "Can it integrate with ad networks?", a: "Yes. Templates and APIs exist for Meta, TikTok, Taboola, PropellerAds, Google Ads, Bing, and custom sources." },
  { q: "Does Voluum offer automation?", a: "Rule-based automation adjusts bids, pauses underperforming campaigns, and sends alerts to keep ROI healthy." },
  { q: "How fast is the reporting?", a: "Sub-second redirects and real-time reporting make optimization decisions faster." },
  { q: "Can agencies use Voluum?", a: "Yes. Agency plans include multi-client workspaces, whitelabeling, and granular permissions." },
  { q: "Does Voluum have fraud protection?", a: "Traffic distribution AI, IP filtering, and bot detection reduce invalid traffic and protect budgets." },
  { q: "How is data stored?", a: "Voluum uses AWS infrastructure with 30+ data centers to handle high volume and ensure uptime." },
  { q: "Is there an API?", a: "Yes. REST API, tracking domains, and postback integrations connect Voluum to BI tools or data warehouses." },
];

function VoluumToolPage() {
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
        "Voluum centralizes performance marketing tracking, making it easier to optimize ROI across multiple ad networks and offers.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Workflow className="h-5 w-5 text-purple-500" />, title: "Traffic distribution AI", body: "Route visitors to the highest-performing landers/offers automatically based on rules and ML." },
    { icon: <BarChart3 className="h-5 w-5 text-indigo-500" />, title: "Real-time analytics", body: "Sub-second redirects and dashboards show performance by campaign, traffic source, GEO, device, and more." },
    { icon: <Rocket className="h-5 w-5 text-rose-500" />, title: "Automation", body: "Rule-based automations pause, bid-adjust, or notify when KPIs drift, saving hours of manual optimization." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Integrations & partner templates", body: "Hundreds of network templates, API connectors, and postback options reduce setup time." },
    { icon: <ShieldCheck className="h-5 w-5 text-sky-500" />, title: "Fraud protection", body: "Bot filtering, IP/ASN rules, and anti-fraud integrations guard budgets against fake clicks." },
    { icon: <Globe className="h-5 w-5 text-orange-500" />, title: "Agency & multi-client support", body: "Workspaces, custom domains, and reporting make it easy to manage multiple advertisers." },
  ];

  const pricingTable = [
    { plan: "Discover", best: "New affiliate teams", limits: "3 tracking domains, 1M events, rule-based alerts", price: "$199/mo" },
    { plan: "Profit", best: "Scaling media buyers", limits: "6 domains, 3M events, traffic distribution AI", price: "$299/mo" },
    { plan: "Grow", best: "Agencies + high spend", limits: "15 domains, 10M events, whitelabel reports", price: "$499/mo" },
    { plan: "Enterprise/Agency", best: "Custom volume", limits: "Dedicated success, SLA, unlimited users", price: "Custom" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Voluum review covering pricing, automation, integrations, pros & cons, alternatives, and comparisons against RedTrack and ClickMagick."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" /> {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold md:text-4xl">{toolName} Review (2025): Features, Pricing, Pros & Cons</h1>
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-100 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Voluum keeps all your affiliate and media-buying data in one place so you can scale campaigns confidently.</p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" /> Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">Voluum centralizes affiliate tracking, conversion reporting, and automation so you can optimize campaigns across multiple networks and offers.</p>
            <p className="mt-3 text-slate-700">You get fast redirects, customizable postbacks, and reporting that reveals ROI per source, device, GEO, and more.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Voluum fits growth teams who live in performance marketing dashboards.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Affiliates managing dozens of offers and GEOs.",
                "Media buyers optimizing across native, push, and social.",
                "Agencies needing client-ready reports and whitelabel dashboards.",
                "Networks wanting to route traffic intelligently.",
                "Analytics pros feeding data into BI tools.",
                "High-volume ecommerce marketers needing automation.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-purple-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Everything performance marketers expect.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">{feature.icon}</div>
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
                <p className="mt-2 text-slate-700">Pricing scales with tracked events and features. Annual discounts available.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Profit to unlock automation. Agencies go straight to Grow for client workspaces.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2l font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fast, reliable tracking even under heavy load.</li>
                  <li>Automation rules save hours of manual optimizations.</li>
                  <li>Rich partner templates and API support.</li>
                  <li>Agency features (multi-client, whitelabel reports).</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is higher than ClickMagick or RedTrack for small teams.</li>
                  <li>Learning curve for automation & reports.</li>
                  <li>Overkill if you only run occasional campaigns.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need lighter tracking or built-in CRM features? Explore these options.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Full review available.</p>
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
            <p className="text-slate-700">Dive into these comparisons before choosing your tracker.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RedTrack vs ClickMagick</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/voluum-vs-redtrack-vs-clickmagick">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">See how enterprise-grade Voluum compares with leaner trackers.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RedTrack vs Hyros</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/voluum-vs-redtrack-vs-hyros">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Great for paid social and multi-touch revenue teams comparing tracking stacks.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If your business depends on paid traffic, Voluum’s reliability and automation justify the spend. Lighter trackers are fine for small campaigns, but they can’t match Voluum’s scale and routing.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> Voluum is a top choice for affiliates, media buyers, and agencies running continuous campaigns.</p>
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
            <p>Choose Voluum if you need enterprise-grade tracking with automation and real-time optimization.</p>
            <p>Pick leaner trackers like RedTrack or ClickMagick when budgets or traffic volume are smaller.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default VoluumToolPage;
