import React, { useState } from "react";
import { Sparkles, ShieldCheck, Gauge, ChartLine, Target, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Moz Pro";
const slug = "moz-pro";
const category = "SEO Platform";
const shortPitch =
  "Moz Pro is a veteran SEO suite with keyword research, rank tracking, site audits, link metrics, and content optimization built on trusted authority metrics.";
const pricingSummary = "Plans start around $99/month with higher tiers for more keywords, rank tracking, and site crawl limits.";
const officialUrl = "https://moz.com/products/pro";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/moz.com",
  gradient: "from-indigo-500 via-purple-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.25)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush", blurb: "All-in-one SEO/SEM suite with deep data." },
  { name: "Ahrefs", slug: "ahrefs", blurb: "Leading backlink data and competitive research." },
  { name: "SE Ranking", slug: "se-ranking", blurb: "Flexible rank tracking and audits." },
  { name: "Ubersuggest", slug: "ubersuggest", blurb: "Budget-friendly keyword and site tools." },
  { name: "Surfer SEO", slug: "surfer-seo", blurb: "Content optimization against SERP benchmarks." },
];

const faqs = [
  { q: "Is Moz Pro still accurate?", a: "Moz’s keyword, rank tracking, and link metrics remain reliable. Authority metrics (DA/PA) are trusted, though backlink index depth can trail Ahrefs in some niches." },
  { q: "Who should use Moz Pro?", a: "Agencies, in-house SEO teams, and marketers who want dependable rank tracking, site audits, and link metrics without needing PPC or content briefs in the same tool." },
  { q: "How does pricing work?", a: "Plans are tiered by keyword limits, rank tracking checks, and crawl credits. Higher tiers unlock more campaigns and seats." },
  { q: "Does Moz Pro have content optimization?", a: "It offers page optimization suggestions, but tools like Surfer may feel deeper for content briefs and on-page scoring." },
  { q: "Is Moz good for backlink analysis?", a: "Yes, Moz has strong authority metrics and link explorer. Ahrefs often has a larger backlink index and faster discoveries in competitive spaces." },
  { q: "Can I track local rankings?", a: "Yes. Moz Local is separate but integrates. Moz Pro supports local rank tracking and citation monitoring through add-ons." },
  { q: "Is there an API?", a: "Yes, Moz provides an API for authority metrics and link data on certain plans." },
  { q: "Is support responsive?", a: "Support is knowledgeable. Documentation and community resources are mature due to Moz’s long history in SEO." },
];

const featureBlocks = [
  {
    icon: <Gauge className="h-5 w-5 text-indigo-500" />,
    title: "Rank tracking & visibility",
    body: "Daily/weekly rank tracking across engines and locations, with visibility trends for stakeholders.",
  },
  {
    icon: <ChartLine className="h-5 w-5 text-emerald-500" />,
    title: "Keyword research & SERP analysis",
    body: "Keyword Explorer with volume estimates, SERP features, and difficulty scores to prioritize targets.",
  },
  {
    icon: <Target className="h-5 w-5 text-rose-500" />,
    title: "Site audits",
    body: "Crawls highlight issues like broken links, metadata gaps, accessibility, and speed signals to improve technical health.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-amber-600" />,
    title: "Link metrics & authority",
    body: "Domain/Page Authority and Link Explorer help benchmark against competitors and find link opportunities.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-sky-500" />,
    title: "On-page optimization",
    body: "Page analysis suggests improvements to titles, headings, and keyword targeting for priority URLs.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    title: "Reporting & alerts",
    body: "Automated reports and custom alerts keep teams informed of ranking changes and site issues.",
  },
];

function MozProToolPage() {
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
        "Moz Pro remains a dependable SEO platform for rank tracking, keyword research, auditing, and authority metrics. It’s trusted for DA/PA and clear reporting.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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
        description="Honest Moz Pro review for 2025 with pricing, keyword research, rank tracking, site audits, pros & cons, and how it compares to Semrush and Ahrefs."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Trusted SEO platform for rankings and authority
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Moz Pro delivers dependable rank tracking, keyword research, site audits, and trusted authority metrics for marketers and agencies.
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
              Moz Pro is an SEO software suite that covers rank tracking, keyword research, site audits, link metrics, and on-page optimization. It is known for its authority metrics (DA/PA) and clarity in reporting.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it to monitor rankings, identify technical issues, benchmark authority, and prioritize keywords with realistic difficulty scores. It’s reliable when you need SEO focus without PPC or social bundled in.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies appreciate its long-standing reputation and API access for DA/PA, while in-house teams lean on the reporting cadence and alerts.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Moz Pro fits teams that need SEO depth without broader ad or content brief tooling.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies needing clear rank tracking and client-friendly reports.",
                "In-house SEO teams monitoring authority, links, and technical issues.",
                "Marketers prioritizing keywords with realistic difficulty scoring.",
                "Teams wanting dependable DA/PA metrics for outreach and benchmarking.",
                "SEO leads needing alerts on ranking changes and crawl issues.",
                "Analysts who want API access to authority metrics.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Moz Pro focuses on ranking visibility, technical health, and link authority.</p>
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
                  Pricing is tiered by keyword/rank limits and crawl credits. Entry plans suit small teams; larger plans add campaigns, higher limits, and API access.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start at Standard for core tracking; move to higher tiers for more keywords, campaigns, and API usage.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Small teams and freelancers</td>
                    <td className="px-4 py-3">Core keyword, rank tracking, crawl limits</td>
                    <td className="px-4 py-3">~$99/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Medium/Large</td>
                    <td className="px-4 py-3">Agencies and in-house SEO teams</td>
                    <td className="px-4 py-3">Higher keyword/crawl limits, more campaigns</td>
                    <td className="px-4 py-3">Scaled pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Enterprises/data-heavy users</td>
                    <td className="px-4 py-3">Max limits, API, priority support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you need SEM, PPC research, or content briefs, Semrush or Surfer may complement Moz. For backlink-heavy workflows, compare Ahrefs’ index depth.
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
                  <li>Trusted authority metrics (DA/PA) and link data.</li>
                  <li>Clear rank tracking and reporting for stakeholders.</li>
                  <li>Technical audits highlight common SEO issues.</li>
                  <li>Keyword Explorer with realistic difficulty scoring.</li>
                  <li>Mature documentation and community resources.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Backlink index depth can trail Ahrefs in some niches.</li>
                  <li>Content optimization is lighter than Surfer/Frase.</li>
                  <li>No built-in PPC research like Semrush.</li>
                  <li>Higher tiers needed for larger keyword/crawl volumes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these tools if you need broader SEM, deeper backlinks, or stronger content briefs.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare Moz Pro to leading SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush vs Ahrefs</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/moz-pro-vs-semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush is broadest (SEO + PPC + content). Ahrefs is fastest for links and SERP research. Moz Pro is reliable for rank tracking, keyword analysis, and authority metrics with clear reporting.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ubersuggest vs SE Ranking</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/ubersuggest-vs-se-ranking-vs-moz-pro">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ubersuggest is most affordable, SE Ranking offers flexible limits, and Moz Pro provides trusted authority metrics with mature reporting. Pick based on budget and data depth needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Moz Pro is worth it if you prioritize dependable rank tracking, technical audits, and authority metrics. It’s less suited if you need PPC, deep backlink discovery, or rich content briefs in one platform.
            </p>
            <p className="mt-3 text-slate-700">
              Many teams pair Moz with PPC or content tools; others switch to Ahrefs for backlink depth or Semrush for all-in-one campaigns.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Moz Pro remains a solid SEO suite for rankings, authority, and audits, especially when clarity and trusted metrics matter.
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
              Choose Moz Pro when you need trusted authority metrics, solid rank tracking, and clear reporting. It’s reliable for ongoing SEO programs without bundling PPC or content briefs.
            </p>
            <p>
              Consider Ahrefs for deeper backlinks and SEMrush for all-in-one SEO/SEM. SE Ranking and Ubersuggest provide budget-friendly alternatives with flexible limits.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default MozProToolPage;
