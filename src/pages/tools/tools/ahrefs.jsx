import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Ahrefs";
const slug = "ahrefs";
const category = "SEO platform";
const shortPitch =
  "Ahrefs is an SEO suite with industry-leading backlink data, keyword research, site audits, and competitive analysis for marketers and SEO teams.";
const pricingSummary = "Plans start around $99/month; higher tiers add more users, reports, and data limits. Site audit and keyword tools scale with usage.";
const officialUrl = "https://ahrefs.com";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/ahrefs.com",
  gradient: "from-blue-600 via-indigo-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.26)]",
};

const alternatives = [
  { name: "Semrush", slug: "semrush" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Mangools", slug: "mangools" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  { q: "Is Ahrefs worth it for beginners?", a: "Yes, if you want reliable keyword and backlink data. The interface is straightforward, but pricing is premium compared to entry-level tools." },
  { q: "Does Ahrefs have a free plan?", a: "No free plan, but a free Webmaster Tools version provides limited site audit and backlink data for verified sites." },
  { q: "Is Ahrefs good for agencies?", a: "Yes. Agencies rely on it for keyword research, link audits, content gaps, and reporting. Data depth makes it a staple for client SEO work." },
  { q: "How accurate is Ahrefs backlink data?", a: "Ahrefs is known for one of the largest, freshest backlink indexes. It’s consistently among the most trusted for link analysis." },
  { q: "Does Ahrefs support rank tracking?", a: "Yes. Rank Tracker monitors keywords by location and device with scheduled reports, including competitors." },
  { q: "Can Ahrefs audit my site?", a: "Yes. Site Audit crawls pages, finds technical issues, and prioritizes fixes with health scores and trend tracking." },
  { q: "How does Ahrefs compare to Semrush?", a: "Ahrefs leads on backlinks and content gap analysis. Semrush bundles more channels (PPC, social). Pick based on your channel mix." },
  { q: "Does Ahrefs integrate with GA/GSC?", a: "Yes. Integrations with Google Analytics and Search Console enrich reporting and site audit insights." },
];

function AhrefsToolPage() {
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
        "Ahrefs provides elite backlink data, solid keyword research, and actionable SEO audits. It’s trusted by marketers and agencies for competitive insights and reliable tracking.",
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

  const featureBlocks = [
    {
      icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      title: "Backlink intelligence",
      body: "Large, fresh link index with helpful metrics (DR, UR, anchors) for audits, outreach, and competitive analysis.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
      title: "Keyword research",
      body: "Robust keyword explorer for Google, YouTube, and other engines with difficulty scores, SERP features, and click metrics.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Site audit",
      body: "Crawls your site to surface technical issues, prioritize fixes, and track health over time.",
    },
    {
      icon: <Plug className="h-5 w-5 text-indigo-500" />,
      title: "Content gap & opportunities",
      body: "Find keywords and pages competitors rank for, discover linkable assets, and plan content that closes gaps.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Rank tracking",
      body: "Track keyword performance by device and location, monitor competitors, and send scheduled reports.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Reporting & integrations",
      body: "Dashboards plus GA/GSC integrations keep data in one place; exports simplify client reporting.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Ahrefs review for 2025 covering pricing, backlink data, keyword research, pros & cons, alternatives, and comparisons for SEO teams and agencies."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
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
                  Ahrefs is trusted for backlink data, keyword research, and technical audits. It’s a staple for SEO pros and agencies running competitive programs.
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
              Ahrefs is an {category.toLowerCase()} focused on backlink intelligence, keyword research, site audits, and competitive insights. It’s known for a large, fresh link index and trusted metrics.
            </p>
            <p className="mt-3 text-slate-700">
              SEO teams and agencies use Ahrefs to plan content, monitor rankings, find link opportunities, and fix technical issues. Its simplicity and data quality make it a go-to choice for professionals.
            </p>
            <p className="mt-3 text-slate-700">Compared to suite-style tools, Ahrefs stays focused on organic search, which keeps workflows fast for SEOs.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits teams that need reliable SEO data and straightforward workflows.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SEO specialists and agencies analyzing backlinks and competitors.",
                "Content teams planning topic clusters, briefs, and SERP targets.",
                "Marketing teams auditing sites and tracking rankings by locale.",
                "Link builders prospecting with link intersects and anchor analysis.",
                "Founders validating keyword opportunities before investing in content.",
                "Product marketers monitoring branded and competitive SERPs.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Backlink authority, keyword research, and audits drive the Ahrefs workflow.</p>
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
                  Plans scale by user seats, projects, and data credits. Lite/Standard fit most small teams; Advanced/Enterprise add more users, reports, and custom limits, plus SSO and access controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Lite or Standard; upgrade to Advanced for larger teams and reporting; Enterprise for governance and higher caps.</p>
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
                    <td className="px-4 py-3">Solo SEOs and small projects</td>
                    <td className="px-4 py-3">Lower credits and tracked keywords</td>
                    <td className="px-4 py-3">~$99/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing teams needing more data</td>
                    <td className="px-4 py-3">More reports, rows, and tracked keywords</td>
                    <td className="px-4 py-3">~$199/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Agencies and multi-site teams</td>
                    <td className="px-4 py-3">Higher limits, additional users, advanced tools</td>
                    <td className="px-4 py-3">~$399/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large SEO teams needing governance</td>
                    <td className="px-4 py-3">Custom limits, SSO, admin controls</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Ahrefs is premium; teams on tight budgets can mix Ahrefs for link data with lighter tools for rank tracking.</p>
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
                  <li>Best-in-class backlink data and link metrics.</li>
                  <li>Strong keyword research with click metrics.</li>
                  <li>Simple, fast interface for daily SEO workflows.</li>
                  <li>Effective site audit with clear prioritization.</li>
                  <li>Content gap analysis speeds opportunity discovery.</li>
                  <li>Reliable rank tracking with competitor views.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>No true free plan; premium pricing.</li>
                  <li>Limited PPC/social features versus suite tools like Semrush.</li>
                  <li>Seat-based pricing can add up for large teams.</li>
                  <li>Data credits mean heavy users must monitor usage.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Ahrefs shines for backlinks and content gaps. Some teams prefer suite-style tools or more budget-friendly options depending on channel mix.
            </p>
            <p className="mt-2 text-slate-700">All of these handle core SEO; they differ on PPC, pricing, and data depth.</p>
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
            <p className="text-slate-700">Here’s how Ahrefs compares to two leading SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Semrush</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Semrush is broader (SEO, PPC, social) and great for multi-channel marketers. Ahrefs is focused and excels at backlink and content research speed.
              </p>
              <p className="mt-2 text-slate-700">Choose Semrush for all-in-one channel coverage; choose Ahrefs for pure SEO depth and simplicity.</p>
              <p className="mt-2 text-slate-900">Many agencies keep both: Ahrefs for link data, Semrush for PPC/competitor breadth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Moz Pro</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/moz-pro-vs-semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Moz Pro offers solid on-page tools and an approachable UI. Ahrefs tends to have fresher link data and faster workflows for competitive research.
              </p>
              <p className="mt-2 text-slate-700">Choose Moz if you want simplicity and budgets are tighter; choose Ahrefs if backlink depth and speed are top priorities.</p>
              <p className="mt-2 text-slate-900">Both integrate with GA/GSC; Ahrefs is usually preferred for link-building programs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For SEO teams and agencies needing reliable backlink and keyword data, Ahrefs is worth it. It saves time on research, link audits, and content planning with trusted metrics and fast UI.
            </p>
            <p className="mt-3 text-slate-700">If you require PPC and social in one tool, Semrush may be better. For budget constraints, SE Ranking or Mangools are lighter alternatives.</p>
            <p className="mt-3 font-semibold text-slate-900">Verdict: A best-in-class SEO platform for link and keyword intelligence.</p>
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
            <p>Choose Ahrefs for backlink authority, keyword research, and straightforward SEO workflows.</p>
            <p>Consider Semrush if you need PPC/social alongside SEO, or SE Ranking/Mangools for budget-friendly stacks.</p>
            <p>Ahrefs pairs well with content briefs, outreach tools, and analytics to keep organic programs measurable.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here:{" "}
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

export default AhrefsToolPage;
