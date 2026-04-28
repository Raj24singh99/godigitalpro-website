import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Serpstat";
const slug = "serpstat";
const category = "SEO platform & rank tracking";
const shortPitch =
  "Serpstat is an all-in-one SEO platform offering keyword research, rank tracking, site audits, backlink analysis, and competitive insights for marketers and agencies.";
const pricingSummary = "Free trial with paid plans from ~$59/month for Lite. Higher tiers add more keywords, projects, API credits, and branded reports.";
const officialUrl = "https://serpstat.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/serpstat.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  {
    q: "Is Serpstat good for agencies?",
    a: "Yes. Serpstat offers multi-project dashboards, team permissions, white-label reports, and an API, which makes it practical for agency retainers.",
  },
  {
    q: "Does Serpstat have a free version?",
    a: "There is a free tier with limited credits plus a paid Lite plan starting around $59/month that unlocks higher limits and more projects.",
  },
  {
    q: "How accurate is Serpstat rank tracking?",
    a: "Serpstat pulls daily rankings with local and mobile/desktop segmentation. As with all trackers, verify high-value terms by spot-checking SERPs, but accuracy is competitive with peers.",
  },
  {
    q: "Can Serpstat replace Ahrefs or Semrush?",
    a: "For many SMBs and agencies, Serpstat can cover keyword research, audits, and rank tracking at a lower price. If you need the largest backlink index or ad spend data, Semrush/Ahrefs may still lead.",
  },
  {
    q: "Does Serpstat support local SEO?",
    a: "Yes. It tracks positions by city or region, checks local packs, and offers auditing for on-page/local elements, making it solid for location-focused clients.",
  },
  {
    q: "Is there an API?",
    a: "Serpstat includes API credits on higher tiers (or add-ons) so you can pipe keyword, backlink, and domain data into dashboards or internal tools.",
  },
  {
    q: "Does Serpstat include PPC research?",
    a: "It provides competitor ads data and keyword CPC volumes, though PPC depth is lighter than Semrush. It’s strong enough for quick paid search recon.",
  },
  {
    q: "How steep is the learning curve?",
    a: "Serpstat’s UI is straightforward compared to heavier suites. Most marketers can launch audits and tracking within a day with minimal onboarding.",
  },
];

function SerpstatToolPage() {
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
        "Serpstat balances price and breadth with keyword research, audits, rank tracking, and competitor intel. It’s appealing for agencies and SMBs that need solid coverage without top-tier costs.",
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
      icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
      title: "Rank tracking with local visibility",
      body: "Daily mobile/desktop rankings with city-level and SERP feature tracking help SEO teams monitor movement and prove outcomes to clients.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Keyword research & clustering",
      body: "Keyword suggestions, search intent, and clustering workflows make it easier to design content calendars without jumping between tools.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Site audit for quick technical wins",
      body: "Crawls surface broken links, speed issues, metadata gaps, and hreflang/local errors so teams can ship fixes and improve crawlability.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Backlink and competitor insights",
      body: "Track referring domains, anchors, and toxicity plus see competitor rankings and ads data to inform outreach and content priorities.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Reporting & white-labeling",
      body: "Scheduled PDF/CSV exports, dashboards, and white-labeled reports help agencies keep stakeholders updated without manual copy/paste.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "API for custom workflows",
      body: "Higher tiers include API credits so ops teams can feed Serpstat data into Looker, Data Studio, or internal tools.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Serpstat review for 2025 covering pricing, rank tracking accuracy, keyword research, site audits, pros/cons, and alternatives like Semrush or Ahrefs."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                  Serpstat keeps keyword research, rank tracking, and technical audits in one place so marketers can ship changes and report wins faster.
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
              {toolName} is an SEO platform that combines keyword research, SERP analysis, rank tracking, site audits, backlink data, and PPC insights. It’s positioned as a cost-effective alternative to heavier suites while still covering core SEO workflows.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and agencies use it to plan content, monitor keyword movement, surface technical issues, and benchmark competitors. Local rank tracking and white-label reports make it practical for client services.
            </p>
            <p className="mt-3 text-slate-700">
              If you need solid SEO coverage with friendly pricing and a simpler UI, {toolName} is a strong contender. For the largest backlink index or ad spend intelligence, you may pair it with specialized tools.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Serpstat fits marketers who need broad SEO coverage without enterprise price tags.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies delivering SEO retainers with white-label reporting.",
                "In-house marketers planning content and tracking ongoing rankings.",
                "Founders validating keyword opportunities and competitors quickly.",
                "Brands needing local rank tracking with city or region granularity.",
                "Teams that want site audits to prioritize quick technical fixes.",
                "Ops and data folks who want API access for dashboards.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Serpstat focuses on the SEO essentials so marketers can research, ship fixes, and report impact quickly.</p>
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
                  Lite begins near $59/month. Standard and Advanced add higher keyword, audit, and backlink limits plus more users and API credits. Enterprise is custom, with SLA-backed support and large data allowances.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Lite to validate fit; upgrade when you need more keywords, projects, or API throughput.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lite</td>
                    <td className="px-4 py-3">Solo marketers & small sites</td>
                    <td className="px-4 py-3">Lower keyword limits, basic reports</td>
                    <td className="px-4 py-3">~$59/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing teams</td>
                    <td className="px-4 py-3">Higher keyword caps, more projects, branded reports</td>
                    <td className="px-4 py-3">~$119/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Agencies & established brands</td>
                    <td className="px-4 py-3">Even higher limits, robust API credits, more seats</td>
                    <td className="px-4 py-3">~$239/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large datasets & custom needs</td>
                    <td className="px-4 py-3">Custom limits, SLA support, onboarding</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Serpstat is often cheaper than Semrush/Ahrefs for comparable keyword and audit volumes, which makes it attractive to agencies managing many smaller sites.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Broad SEO toolkit (keywords, rank tracking, audits) at a lower cost.</li>
                  <li>Local rank tracking and SERP feature monitoring for city-level campaigns.</li>
                  <li>Clean UI with quick onboarding compared to heavier suites.</li>
                  <li>White-label reports and API access for agencies and dashboards.</li>
                  <li>Keyword clustering to speed up content planning.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Backlink index is smaller than Ahrefs for deep link audits.</li>
                  <li>PPC/ad data is lighter than Semrush.</li>
                  <li>Interface can feel slower on very large audits or exports.</li>
                  <li>Some advanced reports require higher-tier limits or add-on credits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Serpstat competes with enterprise SEO suites and lighter freemium tools. Your choice depends on data depth, backlink needs, and whether PPC research matters.
            </p>
            <p className="mt-2 text-slate-700">All of these cover keyword research and rank tracking; they differ on index size, UI depth, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} stacks up against two popular SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/serpstat-vs-semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush has deeper PPC data and a larger backlink index, plus more integrations. Serpstat is leaner, cheaper, and easier to onboard while still covering core keyword research, audits, and tracking.
              </p>
              <p className="mt-2 text-slate-700">
                If you’re PPC-heavy or need the richest backlink explorer, Semrush may justify the higher cost. For balanced SEO on a budget, Serpstat is compelling.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} for affordability and simple workflows; choose Semrush for the broadest data and paid search depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/serpstat-vs-se-ranking-vs-ubersuggest">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs is revered for backlink depth and link intersect reports. Serpstat offers competitive rank tracking and keywords at a lower price, though its backlink index is smaller.
              </p>
              <p className="mt-2 text-slate-700">
                If link-building is your core motion, Ahrefs still leads. For blended SEO where cost matters, Serpstat may be sufficient and easier to scale across many projects.
              </p>
              <p className="mt-2 text-slate-900">Choose {toolName} for budget-friendly, all-around SEO; choose Ahrefs if backlink analysis is mission-critical.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} delivers strong keyword research, rank tracking, audits, and reporting at a price agencies and SMBs can afford. If you need reliable daily tracking and quick audit wins, it is a solid pick.
            </p>
            <p className="mt-3 text-slate-700">
              If your strategy hinges on deep backlink research or enterprise PPC intel, pair Serpstat with a specialist like Ahrefs or Semrush. Otherwise, Serpstat alone may cover 80–90% of typical SEO workflows.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> {toolName} is a budget-friendly SEO suite that balances data depth and usability for agencies, marketers, and founders.
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
              Choose {toolName} if you want a cost-effective SEO platform with solid rank tracking, audits, and keyword research. It’s especially strong for agencies managing many sites or budgets that can’t stretch to top-tier suites.
            </p>
            <p>
              Consider alternatives like Semrush for deeper data or Ahrefs for backlink-first strategies. Lighter freemium tools like Ubersuggest work for very small sites but lack agency-friendly reporting.
            </p>
            <p>{toolName} complements content, analytics, and CRM stacks by supplying the SEO insights needed to prioritize sprints and show ROI.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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

export default SerpstatToolPage;
