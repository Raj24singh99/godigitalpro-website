import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Search, BarChart3, TrendingUp, ClipboardList, Gauge, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Ubersuggest";
const slug = "ubersuggest";
const category = "SEO & Keyword Research";
const shortPitch =
  "Ubersuggest gives marketers an affordable way to research keywords, audit sites, and track rankings with AI-backed recommendations inside one dashboard.";
const pricingSummary =
  "Free tier available with daily limits. Paid plans start at $29/month for Individual, $49/month for Business, and $99/month for Enterprise (with optional lifetime deals).";
const officialUrl = "https://neilpatel.com/ubersuggest/";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/neilpatel.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.25)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "Mangools", slug: "mangools" },
];

const faqs = [
  {
    q: "Is Ubersuggest free?",
    a: "There’s a free plan with limited daily credits for keyword research, site audits, and rank tracking. Paid plans unlock higher limits, historical data, and more projects.",
  },
  {
    q: "Who is Ubersuggest best for?",
    a: "Freelancers, small in-house teams, and agencies needing core SEO workflows without the cost of Semrush or Ahrefs. Larger orgs use it as a supplemental data source.",
  },
  {
    q: "Does Ubersuggest integrate with Google tools?",
    a: "Yes. Connect Google Analytics and Search Console to pull in traffic, conversion, and query data alongside Ubersuggest metrics.",
  },
  {
    q: "How many projects can I track?",
    a: "Individual plans track 3 websites, Business up to 7, and Enterprise up to 15 with increased keyword and page limits. Lifetime plans mirror those numbers.",
  },
  {
    q: "Does Ubersuggest include AI features?",
    a: "AI Writer creates outlines, meta descriptions, FAQs, and content ideas. Audits also include AI-powered prioritization suggestions.",
  },
  {
    q: "Can agencies white-label reports?",
    a: "You can export PDFs or share read-only dashboards. Full white-labeling requires exporting data into Looker Studio, Sheets, or another reporting tool.",
  },
  {
    q: "Is there a lifetime plan?",
    a: "Neil Patel frequently offers lifetime access for a one-time payment (typically $290–$990) depending on the tier. It’s attractive for long-term users.",
  },
  {
    q: "How accurate are keyword numbers?",
    a: "Ubersuggest uses Google data plus clickstream partnerships. Numbers are directional—cross-check with Search Console before finalizing large campaigns.",
  },
];

function UbersuggestToolPage() {
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
        "Ubersuggest bundles keyword research, link data, site audits, and AI ideas into a budget-friendly package. It’s a great fit when you need dependable insights but aren’t ready for Semrush/Ahrefs pricing.",
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
      icon: <Search className="h-5 w-5 text-amber-500" />,
      title: "Keyword discovery & clustering",
      body: "Pull keyword ideas by country, see search volume, difficulty, CPC, and SERP overview. Group winning phrases into clusters to plan pillar/supporting content.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-rose-500" />,
      title: "Rank tracking & alerts",
      body: "Monitor daily rankings across desktop/mobile, benchmark against competitors, and get alerts whenever a key keyword gains or loses positions.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-500" />,
      title: "Site audits & health scoring",
      body: "Scan thousands of pages for technical issues, Core Web Vitals, and content problems, then get prioritized to-do lists with suggested fixes.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-emerald-500" />,
      title: "AI content briefs",
      body: "Generate outlines, FAQs, meta tags, and content ideas tied directly to your keyword research so writers know exactly what to include.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-blue-500" />,
      title: "Competitor insights",
      body: "See top pages, backlink gaps, and content ideas from rival domains. Export the data or drop it into Looker Studio dashboards.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & exports",
      body: "Native Google Analytics/Search Console sync plus CSV/Sheets exports and Zapier automations to push insights into your task manager or BI layer.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Ubersuggest review for 2025 covering pricing, features, AI tools, pros & cons, best alternatives, and comparison guides."
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
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl} target="_blank" rel="noreferrer">
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
                <div className="absolute inset-0 opacity-25">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-200 blur-3xl" />
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
                  All-in-one keyword research, audits, rank tracking, and AI ideas tuned for teams that need fast SEO wins without complex onboarding.
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
              {toolName} is a {category.toLowerCase()} platform that packages keyword research, competitor tracking, backlink discovery, and AI copy suggestions. It’s built by Neil Patel’s team to offer core SEO workflows at a price point accessible to smaller teams.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and in-house marketers use Ubersuggest to ideate content, monitor rankings, and spot technical issues before they impact organic traffic. Lifetime plans make it especially appealing if you run repeat SEO programs.
            </p>
            <p className="mt-3 text-slate-700">
              It won’t replace enterprise suites entirely, but it delivers 80% of what most marketers need day-to-day.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Ubersuggest hits the sweet spot for growing companies balancing budget with insight.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Freelance SEO consultants delivering audits and keyword research.",
                "In-house marketers managing a handful of sites with lean resources.",
                "Agencies wanting to give clients live dashboards without extra seats.",
                "Content teams planning briefs and optimizing existing posts.",
                "Founders validating demand and building first SEO roadmaps.",
                "Paid media teams aligning landing page copy with organic keywords.",
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
            <p className="mt-3 text-slate-700">Everything you need to research, prioritize, and measure SEO results—without enterprise overhead.</p>
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
                <p className="mt-2 text-slate-700">
                  You can pay monthly or buy a lifetime license. Plans differ by number of tracked websites, keywords, and daily search credits.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Solo marketers choose Individual, agencies lean on Business/Enterprise, lifetime buyers lock in savings early.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Individual</td>
                    <td className="px-4 py-3">Solopreneurs & small sites</td>
                    <td className="px-4 py-3">3 websites, 150 keywords tracked, 125 reports/day</td>
                    <td className="px-4 py-3">$29/month or $290 lifetime</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies & growing brands</td>
                    <td className="px-4 py-3">7 websites, 300 keywords, 200 reports/day</td>
                    <td className="px-4 py-3">$49/month or $490 lifetime</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">15 websites, 500+ keywords, 300 reports/day</td>
                    <td className="px-4 py-3">$99/month or $990 lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Annual billing saves ~20%. Lifetime deals are popular because they cap your SEO software spend forever.</p>
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
                  <li>Excellent value compared to enterprise SEO suites.</li>
                  <li>Clean UI that’s easy for non-SEOs to use.</li>
                  <li>AI-assisted briefs and ideas speed up content production.</li>
                  <li>Lifetime pricing keeps budgets predictable.</li>
                  <li>Integrates Google data for better reporting.</li>
                  <li>Great for agencies offering DIY-friendly dashboards.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Data depth lags behind Semrush/Ahrefs for large sites.</li>
                  <li>Link index is smaller, so outreach pros still use other tools.</li>
                  <li>Daily limits can feel restrictive on lower tiers.</li>
                  <li>Reporting customization requires external dashboards.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need more depth or different pricing? Explore these SEO platforms—each has a full review on GoDigitalPro.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same space.</p>
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
            <p className="text-slate-700">Still debating? These comparison pages break down the details.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush vs Ahrefs</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/ubersuggest-vs-semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush and Ahrefs offer deeper link data and enterprise reporting, but they cost significantly more. Our comparison shows when Ubersuggest delivers “good enough” insights without the price tag.
              </p>
              <p className="mt-2 text-slate-900">Choose Ubersuggest for nimble teams, Semrush/Ahrefs when you need full-scale SEO operations.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SE Ranking vs Moz Pro</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/ubersuggest-vs-se-ranking-vs-moz-pro">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SE Ranking and Moz Pro target the same buyer segment. The comparison highlights keyword depth, reporting, and pricing so you can pick the best fit for your stack.
              </p>
              <p className="mt-2 text-slate-900">If AI briefs and lifetime pricing matter, Ubersuggest often wins.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you’re building SEO muscle or managing a portfolio of smaller sites, Ubersuggest provides strong ROI. You get essential data, AI guidance, and client-ready dashboards without enterprise cost.
            </p>
            <p className="mt-3 text-slate-700">
              Power users who live in backlink data or need advanced automation will still reach for Semrush/Ahrefs, but many teams keep Ubersuggest as a secondary tool even then.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Worth it if you want reliable SEO intel with approachable pricing and AI planning baked in.
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
              Choose Ubersuggest if you need a dependable SEO copilot for keyword research, audits, and reporting without a huge subscription. It’s perfect for marketers who want actionable insights fast.
            </p>
            <p>
              Consider Semrush or Ahrefs when link building and enterprise automation take priority, or SE Ranking/Moz Pro if you want middle-ground pricing with different data coverage.
            </p>
            <p>Many teams pair Ubersuggest with Google Search Console, Looker Studio, or editorial tools to cover the entire SEO workflow.</p>
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default UbersuggestToolPage;
