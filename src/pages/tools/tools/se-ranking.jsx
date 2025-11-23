import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SE Ranking";
const slug = "se-ranking";
const category = "All-in-one SEO platform";
const shortPitch = "SE Ranking is an SEO suite for rank tracking, keyword research, site audits, backlinks, and reporting with flexible pricing and strong local tracking.";
const pricingSummary = "Plans from ~$55/month (varies by tracking frequency and keywords) with higher tiers adding more limits, users, and reporting.";
const officialUrl = "https://seranking.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/seranking.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Serpstat", slug: "serpstat" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  { q: "Is SE Ranking good for agencies?", a: "Yes. It offers flexible pricing by tracking frequency, white-label reports, and user roles, making it budget-friendly for agencies with many projects." },
  { q: "How accurate is SE Ranking rank tracking?", a: "It provides daily rankings with strong local tracking (city/region), mobile/desktop splits, and SERP feature tracking. Accuracy is competitive for SMB/agency needs." },
  { q: "Does SE Ranking include site audits?", a: "Yes. It runs technical audits for crawlability, speed, metadata, and Core Web Vitals, with clear prioritization." },
  { q: "What about backlink analysis?", a: "SE Ranking includes backlink discovery and monitoring. Its index is smaller than Ahrefs but solid for monitoring growth, anchors, and toxicity." },
  { q: "Is there an API?", a: "API access is available on higher tiers to integrate ranking, keywords, and backlinks into custom dashboards." },
  { q: "Can it handle local SEO?", a: "Yes. It’s strong in local tracking with map pack visibility, region-specific rankings, and local SERP features." },
  { q: "Does SE Ranking integrate with GA4/GSC?", a: "Yes. You can connect GA4 and GSC for combined reporting and deeper insights." },
  { q: "Is there a free trial?", a: "SE Ranking typically offers a trial so you can test rank tracking, audits, and research before paying." },
];

function SERankingToolPage() {
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
        "SE Ranking is a balanced SEO suite with strong local rank tracking, flexible pricing, and solid audits. Its backlink index trails Ahrefs, but value and reporting make it appealing to agencies and SMBs.",
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
    { icon: <BarChart3 className="h-5 w-5 text-emerald-500" />, title: "Rank tracking with local focus", body: "Daily tracking with mobile/desktop splits, city-level granularity, and SERP feature visibility for local SEO." },
    { icon: <Sparkles className="h-5 w-5 text-sky-500" />, title: "Keyword research & competitor gaps", body: "Keyword suggestions, difficulty, and competitor comparisons to shape content and targeting." },
    { icon: <ClipboardList className="h-5 w-5 text-indigo-500" />, title: "Technical site audits", body: "Crawl issues, speed, metadata, and CWV insights with prioritized fixes for quick wins." },
    { icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />, title: "Backlink monitoring", body: "Track new/lost links, anchors, and toxicity to manage authority building." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Reporting & white-label", body: "Customizable dashboards, scheduled reports, and white-label options for clients." },
    { icon: <MapPin className="h-5 w-5 text-rose-500" />, title: "Local & map pack insights", body: "Monitor map pack presence and local rankings for multi-location brands." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SE Ranking review for 2025 covering pricing, local rank tracking accuracy, audits, backlinks, pros/cons, and alternatives like Semrush or Ahrefs."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-white" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  SE Ranking gives teams rank tracking, keyword research, audits, backlinks, and reporting in one place with pricing that flexes by tracking frequency.
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
              {toolName} is an SEO platform with rank tracking, keyword research, site audits, backlink monitoring, and reporting. It’s especially strong for local tracking and budget-friendly pricing models.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and SMBs use it to manage multiple sites, track campaigns, and report to stakeholders without enterprise costs. Its UI is straightforward for quick onboarding.
            </p>
            <p className="mt-3 text-slate-700">
              If you prioritize local rank tracking and flexible pricing, SE Ranking is a solid option. For the largest backlink index, pairing it with Ahrefs can help.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SE Ranking fits teams that need reliable tracking and audits without enterprise pricing.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple local SEO clients with white-label reports.",
                "In-house marketers needing daily rankings and content planning.",
                "SMBs wanting affordable SEO tracking and audits.",
                "Local businesses tracking map pack and city-level rankings.",
                "Teams that want GSC/GA4-integrated reporting.",
                "Data teams needing API access on higher tiers.",
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
            <p className="mt-3 text-slate-700">{toolName} centers on rank tracking, research, audits, backlinks, and reporting for SEO teams.</p>
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
                  Pricing depends on keyword count and tracking frequency (daily/ every 3 days/weekly). Entry plans start near $55/month; higher plans add more keywords, users, and reporting/white-label options.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick daily tracking for competitive niches; choose lower frequency to save budget for long-tail monitoring.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key features/limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Essential</td>
                    <td className="px-4 py-3">Solo marketers & SMBs</td>
                    <td className="px-4 py-3">Core tracking, research, basic reports</td>
                    <td className="px-4 py-3">~$55/mo (varies by frequency)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing teams & agencies</td>
                    <td className="px-4 py-3">Higher keyword caps, more users, white-label reports, API access</td>
                    <td className="px-4 py-3">~$109/mo+</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Large datasets & multi-location brands</td>
                    <td className="px-4 py-3">Largest limits, advanced reporting, more workspaces</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Flexible frequency/keyword pricing makes SE Ranking attractive if you manage many long-tail terms or multiple locations.</p>
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
                  <li>Strong local rank tracking with map pack insights.</li>
                  <li>Flexible pricing by tracking frequency and keywords.</li>
                  <li>Solid site audits with clear prioritization.</li>
                  <li>White-label reporting and API on higher tiers.</li>
                  <li>Simple UI for fast onboarding across teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Backlink index is smaller than Ahrefs for deep link research.</li>
                  <li>PPC data is lighter than Semrush.</li>
                  <li>Some advanced reports and API limits require higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these if you need deeper backlinks, more PPC data, or different pricing.</p>
            <p className="mt-2 text-slate-700">All of these cover keyword research and tracking; they differ on depth, pricing, and reporting.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to close competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush vs Surfer SEO</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/surfer-seo-vs-semrush-vs-se-ranking">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush is broader with PPC and a larger backlink index; Surfer is content optimization-first. SE Ranking balances tracking, audits, and value—great for local and budget-conscious teams.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for local tracking and flexible pricing; choose Semrush for PPC + breadth; choose Surfer for on-page content scoring.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ubersuggest vs Moz Pro</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/ubersuggest-vs-se-ranking-vs-moz-pro">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ubersuggest is cheapest but limited. Moz Pro has a respected link index and UI. SE Ranking offers stronger tracking flexibility and reporting than Ubersuggest, often at lower cost than larger suites.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for balanced features and local focus; Moz Pro for link/brand familiarity; Ubersuggest only for simple starter needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need reliable rank tracking (especially local), audits, and reporting at flexible pricing, {toolName} is worth it. It covers most SEO workflows without enterprise costs.
            </p>
            <p className="mt-3 text-slate-700">Pair it with Ahrefs for deeper backlink work or Semrush for PPC data if needed. Otherwise, SE Ranking alone can handle day-to-day SEO for many teams.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a strong value pick for agencies and SMBs that want local-friendly tracking and solid audits without overspending.
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
            <p>Choose {toolName} if you want flexible pricing, local rank tracking, and solid audits/reporting. It’s great for agencies and SMBs that need value without giving up features.</p>
            <p>Consider Semrush for broader PPC and backlink data, or Ahrefs for deeper link analysis. Ubersuggest is fine for basics but limited at scale.</p>
            <p>{toolName} fits well with content, analytics, and CRM stacks to keep SEO performance visible across teams.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default SERankingToolPage;
