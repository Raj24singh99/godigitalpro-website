import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Rocket, Crown, ArrowLeft, ChevronDown, BarChart3, TrendingUp, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Mangools";
const slug = "mangools";
const category = "SEO toolkit";
const shortPitch =
  "Mangools bundles KWFinder, SERPWatcher, SERPChecker, LinkMiner, and SiteProfiler into an easy SEO stack for marketers who want clean UI and fast wins without enterprise complexity.";
const pricingSummary =
  "Paid plans start around $19/month (annual billing) with limits on tracked keywords, lookups, and link rows. Pricing scales by usage, not seats, making it friendly for small teams.";
const officialUrl = "https://mangools.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/mangools.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.18)]",
};

const alternatives = [
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Semrush", slug: "semrush" },
  { name: "Ubersuggest", slug: "ubersuggest" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Serpstat", slug: "serpstat" },
];

const faqs = [
  {
    q: "Is Mangools good for beginners?",
    a: "Yes. Mangools is built with a simple UI, clear metrics, and helpful tooltips. KWFinder and SERPWatcher make keyword research and rank tracking easy for first-time SEOs.",
  },
  {
    q: "What tools are included in Mangools?",
    a: "You get KWFinder (keywords), SERPWatcher (rank tracking), SERPChecker (SERP analysis), LinkMiner (backlinks), and SiteProfiler (domain metrics) under one subscription.",
  },
  {
    q: "How accurate is Mangools rank tracking?",
    a: "SERPWatcher checks rankings daily with location targeting. Accuracy is strong for mainstream markets; like all trackers, variability happens with hyper-local SERPs.",
  },
  {
    q: "How does Mangools compare to Ahrefs or Semrush?",
    a: "Mangools is lighter and cheaper. Ahrefs/Semrush have larger link indexes, more technical audits, and PPC data. Mangools wins on ease of use and value for small teams.",
  },
  {
    q: "Does Mangools have backlink data?",
    a: "LinkMiner offers backlink lookups with anchor and status info. The index is smaller than Ahrefs or Semrush but enough for lightweight link prospecting.",
  },
  {
    q: "Can Mangools handle local SEO?",
    a: "Yes. You can check SERPs and rankings by location, track map packs, and research local keywords. It’s popular with agencies serving SMBs.",
  },
  {
    q: "Is there an API?",
    a: "Mangools provides an API on higher tiers so you can pull keyword, SERP, and backlink data into custom dashboards or reporting tools.",
  },
  {
    q: "Does Mangools replace a site audit tool?",
    a: "Mangools does not ship a full technical auditor like Semrush. Many teams pair it with Screaming Frog or Sitebulb for deep technical checks.",
  },
];

function MangoolsToolPage() {
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
        "Mangools gives marketers a clean, affordable SEO toolkit with keywords, SERP analysis, rank tracking, backlinks, and domain metrics. It’s great for small teams that want clarity over complexity.",
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
      icon: <Compass className="h-5 w-5 text-amber-600" />,
      title: "Friendly keyword discovery",
      body: "KWFinder surfaces long-tail ideas with keyword difficulty, SERP snapshots, trends, and search volume so you can prioritize topics fast.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
      title: "Daily rank tracking by location",
      body: "SERPWatcher tracks desktop and mobile rankings with a simple performance index, alerts, and local targeting to monitor growth.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
      title: "SERP and competitor insights",
      body: "SERPChecker shows real SERP results, snippets, and authority metrics so you know why pages rank and how to compete.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Backlink checks with LinkMiner",
      body: "Find backlinks by domain or URL, filter by follow status, anchors, and LS, and export prospects for outreach lists.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-rose-500" />,
      title: "Domain health snapshots",
      body: "SiteProfiler rolls up domain authority metrics, top content, and referring domains for quick audits and competitor overviews.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Affordable for lean teams",
      body: "Plans scale by usage not seats, which is friendly for indie marketers, agencies, and consultants collaborating in one dashboard.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Clear Mangools review for marketers covering pricing, features, pros & cons, alternatives, and when to choose it over Ahrefs or Semrush."
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
                  Mangools balances simple UX with the core SEO workflows—keywords, SERPs, backlinks, and rank tracking—so marketers can find quick wins without enterprise overhead.
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
              Mangools is an {category.toLowerCase()} that prioritizes clarity for marketers. Instead of sprawling dashboards, it keeps each workflow focused: keywords (KWFinder), SERPs (SERPChecker), rankings (SERPWatcher), backlinks (LinkMiner), and authority snapshots (SiteProfiler).
            </p>
            <p className="mt-3 text-slate-700">
              It’s a favorite of indie marketers, content teams, and SMB agencies that want trustworthy metrics without training clients on complex suites. Limits are transparent, and pricing scales by usage rather than seats.
            </p>
            <p className="mt-3 text-slate-700">
              Heavy enterprise workflows like PPC intel or deep technical audits still belong to Semrush/Ahrefs or a crawler, but Mangools covers core organic research faster than most tools.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Mangools is best for marketers who want to execute SEO quickly without enterprise training.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Content teams validating topics and SERP intent fast.",
                "Agencies doing quick audits and rank tracking for SMB accounts.",
                "Solo founders and indie hackers tracking keywords on a budget.",
                "Growth marketers adding SEO to broader campaigns without new headcount.",
                "Local SEO specialists monitoring map packs and location-based rankings.",
                "Teams that value clean UX over sprawling dashboards and add-ons.",
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
            <p className="mt-3 text-slate-700">Mangools focuses on clarity and speed across the core SEO jobs-to-be-done.</p>
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
                  Mangools keeps three main plans that scale limits for keyword lookups, tracked keywords, and simultaneous login seats. Billing annually lowers the monthly rate significantly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Basic is enough for a single marketer; Premium fits small agencies; Agency plan helps multi-seat teams.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Solo marketers and freelancers</td>
                    <td className="px-4 py-3">100 keyword lookups/day, 200 tracked keywords, 1 login</td>
                    <td className="px-4 py-3">~$19/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Growing teams and small agencies</td>
                    <td className="px-4 py-3">500 keyword lookups/day, 700 tracked keywords, 3 logins</td>
                    <td className="px-4 py-3">~$29–$39/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies with multiple collaborators</td>
                    <td className="px-4 py-3">1200 keyword lookups/day, 1500 tracked keywords, 5 logins</td>
                    <td className="px-4 py-3">~$59–$79/month (annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Daily lookup limits reset each 24 hours. If you run large keyword harvests or deep backlink work often, you may hit caps—plan to export lists or step up to Premium/Agency. Seat counts are modest but priced lower than bigger suites.
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
                  <li>Clean, beginner-friendly UI across all modules.</li>
                  <li>Affordable pricing that scales by usage instead of seats.</li>
                  <li>Great for quick keyword validation and SERP intent checks.</li>
                  <li>Local SEO targeting for SERPs and rank tracking.</li>
                  <li>Transparent limits and exports to share with clients.</li>
                  <li>API access on higher tiers for reporting workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Smaller backlink index versus Ahrefs or Semrush.</li>
                  <li>No full-site technical auditor; pair with a crawler.</li>
                  <li>Daily lookup limits can feel tight for heavy researchers.</li>
                  <li>Limited PPC/PLA intel compared to enterprise suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need larger link indexes, PPC data, or technical audits, consider these SEO platforms. They cost more but cover enterprise workflows.
            </p>
            <p className="mt-2 text-slate-700">Each balances data depth, integrations, and price differently.</p>
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
            <p className="text-slate-700">Here’s how Mangools compares to two other affordable SEO suites.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ubersuggest vs SE Ranking</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/mangools-vs-ubersuggest-vs-se-ranking">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                All three focus on affordability. Mangools has the cleanest UI and strong SERP snapshots; Ubersuggest bundles site audits and more content ideas; SE Ranking offers deeper rank tracking and audits.
              </p>
              <p className="mt-2 text-slate-700">
                If you prioritize simplicity and keyword clarity, Mangools wins. Pick SE Ranking for richer tracking and audits; Ubersuggest if you want built-in content ideas and light audits on one plan.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Mangools when you want fast research without bloat and transparent usage caps.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Serpstat vs Ahrefs</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/mangools-vs-serpstat-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Serpstat and Ahrefs carry larger backlink indexes and technical audits. Mangools is leaner with clearer UX but a smaller index and fewer enterprise connectors.
              </p>
              <p className="mt-2 text-slate-700">
                Agencies doing heavy link building may prefer Ahrefs; budget-conscious teams that still want audits might lean Serpstat. Mangools is the speediest for quick topic validation and lightweight reporting.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Mangools if you value ease and price; pick Serpstat or Ahrefs when depth and crawling power matter more.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For content marketers, freelancers, and SMB agencies, Mangools is one of the best-value SEO stacks. The UI is intuitive, limits are clear, and you get the essential workflows to ship briefs and monitor rankings without drowning in toggles.
            </p>
            <p className="mt-3 text-slate-700">
              If you need huge link indexes, PPC/PLA intelligence, or enterprise audits, you’ll outgrow it—grab Ahrefs/Semrush or pair Mangools with a crawler. But as a starter or secondary tool, Mangools often pays for itself quickly.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Mangools is worth it for teams that want fast SEO wins, clear pricing, and minimal onboarding time.
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
              Choose Mangools if you need a clear, affordable SEO toolkit for keyword research, SERP analysis, backlinks, and rank tracking. It’s ideal for small teams and agencies proving ROI quickly.
            </p>
            <p>
              Consider Serpstat, SE Ranking, or Ahrefs if you want bigger indexes, crawlers, and more integrations. You can also pair Mangools with a technical crawler to cover the gaps while staying cost-efficient.
            </p>
            <p>Mangools fits nicely into a lean SEO stack, exporting clean reports your clients and stakeholders can understand without onboarding headaches.</p>
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

export default MangoolsToolPage;
