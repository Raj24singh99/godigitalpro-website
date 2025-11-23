import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Target, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Semrush";
const slug = "semrush";
const category = "SEO & competitive research suite";
const shortPitch =
  "Semrush is an all-in-one SEO and PPC platform for keyword research, competitive analysis, content planning, backlink audits, and reporting.";
const pricingSummary = "Paid plans from ~$129.95/month (Pro) with Guru, Business, and Enterprise tiers adding more projects, keywords, and reporting features.";
const officialUrl = "https://www.semrush.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/semrush.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(249,115,22,0.20)]",
};

const alternatives = [
  { name: "Ahrefs", slug: "ahrefs" },
  { name: "Serpstat", slug: "serpstat" },
  { name: "SE Ranking", slug: "se-ranking" },
  { name: "Moz Pro", slug: "moz-pro" },
  { name: "Ubersuggest", slug: "ubersuggest" },
];

const faqs = [
  { q: "Is Semrush worth it for agencies?", a: "Yes. Agencies get multi-project tracking, client-ready reports, Looker Studio connectors, and PPC/SEO data in one place to reduce tool sprawl." },
  { q: "Does Semrush have a free plan?", a: "There is a limited free tier with small keyword and domain lookups. Pro starts around $129.95/month for more projects and tracking." },
  { q: "How accurate is Semrush keyword data?", a: "Semrush’s keyword volumes and difficulty scores are industry-standard. Always validate high-value terms in live SERPs, but the dataset is strong for planning." },
  { q: "Can Semrush track local rankings?", a: "Yes. Position tracking supports countries, cities, and devices with SERP feature tracking and cannibalization insights." },
  { q: "Is Semrush good for PPC research?", a: "Semrush is one of the best options for PPC intel—ad copies, keywords, PLA data, and competitive spend trends." },
  { q: "Does Semrush integrate with GA4 or GSC?", a: "Yes. You can connect GA4 and GSC for dashboards, audits, and reporting that blend traffic and ranking data." },
  { q: "What about backlink audits?", a: "Semrush has a solid backlink index, toxicity scoring, and disavow exports to manage cleanup and outreach targeting." },
  { q: "Does Semrush help with content?", a: "Content templates, topic research, SEO Writing Assistant, and content audit features help teams prioritize and optimize content faster." },
];

function SemrushToolPage() {
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
        "Semrush is a powerhouse SEO + PPC suite with deep keyword data, competitive intel, and reporting. Agencies and marketing teams value its breadth, connectors, and robust audits.",
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
      icon: <BarChart3 className="h-5 w-5 text-amber-500" />,
      title: "Keyword & market research",
      body: "Massive keyword database with intent, SERP features, and competitor gaps so you can plan content and ads with confidence.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-rose-500" />,
      title: "Content & on-page tools",
      body: "Topic research, SEO Writing Assistant, and content audits help editors ship optimized pages faster across teams.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Technical SEO audits",
      body: "Site audits flag crawl issues, CWV, hreflang, canonicals, and duplicate content with prioritized fixes.",
    },
    {
      icon: <Link2 className="h-5 w-5 text-indigo-500" />,
      title: "Backlink analysis & cleanups",
      body: "Backlink index with toxicity scoring, link intersect, and disavow exports to strengthen authority and manage risk.",
    },
    {
      icon: <Target className="h-5 w-5 text-blue-600" />,
      title: "PPC & PLA competitive intel",
      body: "Ad copies, keywords, and share of voice for search and shopping campaigns so paid teams can iterate faster.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Reporting & connectors",
      body: "Looker Studio connector, GA4/GSC integrations, and client-ready reports reduce manual exports and spreadsheet ops.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Semrush review for 2025 covering pricing, keyword data quality, competitive intel, content tools, pros/cons, and best alternatives."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-amber-50 to-white" />
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
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}>
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
                  Semrush blends SEO and PPC intelligence so marketing teams can research, execute, and report from one stack instead of juggling multiple tools.
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
              {toolName} is an SEO and PPC platform with keyword research, competitive intel, site audits, backlink analysis, rank tracking, and reporting. It’s built for teams that want one stack for organic and paid search.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use it to manage multiple client sites and campaigns; in-house marketers rely on it for content planning, audits, and pipeline reporting. PPC teams benefit from ad copy, PLA, and keyword intel in the same place.
            </p>
            <p className="mt-3 text-slate-700">
              If you need broad data coverage with connectors and reporting, Semrush is a top-tier option. For backlink-first work only, you might pair it with Ahrefs or similar.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Semrush fits teams that want unified SEO + PPC research and reporting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing many sites needing client-ready reports and connectors.",
                "In-house marketers planning content and tracking rankings by market.",
                "PPC teams researching keywords, ads, and PLA competitors.",
                "Content teams needing briefs, writing assistance, and content audits.",
                "SEO leads wanting technical audits with prioritized fixes.",
                "Founders validating demand and competitors before launching pages.",
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
            <p className="mt-3 text-slate-700">Semrush focuses on unified research, execution, and reporting so you can ship SEO and PPC work faster.</p>
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
                  Pro starts around $129.95/month. Guru and Business add more projects, keywords, and reporting features. Enterprise is custom with SLAs, API, and onboarding support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Pro if you manage a few sites; upgrade to Guru/Business for multi-client reporting and content tools.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits/features</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo marketers, small teams</td>
                    <td className="px-4 py-3">Core keyword research, basic reports, limited projects/keywords</td>
                    <td className="px-4 py-3">~$129.95/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Guru</td>
                    <td className="px-4 py-3">Content-led teams & agencies</td>
                    <td className="px-4 py-3">More projects/keywords, content tools, historical data, Looker connector</td>
                    <td className="px-4 py-3">~$249.95/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Larger agencies & ecom</td>
                    <td className="px-4 py-3">API access, Share of Voice, higher limits, more seats</td>
                    <td className="px-4 py-3">~$499.95/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Custom needs & SLAs</td>
                    <td className="px-4 py-3">Custom limits, onboarding, support SLAs, security reviews</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">If you only need backlink depth, Ahrefs can be cheaper; if you need PPC + SEO + reporting together, Semrush often replaces multiple tools.</p>
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
                  <li>Broad SEO + PPC dataset with competitive intel.</li>
                  <li>Content tools and audits reduce extra subscriptions.</li>
                  <li>Reporting, GA4/GSC connectors, and Looker Studio integration.</li>
                  <li>Good backlink index with toxicity scoring and cleanup help.</li>
                  <li>Local rank tracking with SERP feature monitoring.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>UI can feel busy; navigation takes onboarding.</li>
                  <li>Higher cost per seat than lighter SEO tools.</li>
                  <li>Backlink index is strong but Ahrefs can surface links faster.</li>
                  <li>Some advanced exports and limits require expensive tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Semrush leads on breadth. Choose an alternative if you need deeper backlinks, lower cost, or simpler UI.</p>
            <p className="mt-2 text-slate-700">All of these cover keyword research and rank tracking; they differ on backlink depth, PPC data, and reporting.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} stacks up against close competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Ahrefs</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Ahrefs is the backlink specialist; Semrush wins on PPC, reporting, and content tools. Backlink discovery speed favors Ahrefs, but Semrush’s breadth can replace multiple tools.
              </p>
              <p className="mt-2 text-slate-700">
                Pricing is similar at Pro/Lite levels. Choose Semrush if you need PPC and dashboards; choose Ahrefs if link research is priority one.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Serpstat</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/serpstat-vs-semrush-vs-ahrefs">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Serpstat is more affordable with solid rank tracking and audits. Semrush provides richer PPC intel, larger datasets, and better connectors. Agencies on tight budgets may start with Serpstat then upgrade.
              </p>
              <p className="mt-2 text-slate-900">
                Choose {toolName} if you need cross-channel research and reporting; choose Serpstat if you want core SEO coverage at lower cost.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you need unified SEO + PPC research, audits, content tools, and client-ready reporting, Semrush is worth the spend. It can replace multiple niche tools and streamline workflows.
            </p>
            <p className="mt-3 text-slate-700">
              If backlink depth is all you need or budgets are tight, pair a lighter tool with Ahrefs. Otherwise, Semrush’s breadth and connectors justify its price for most teams.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Semrush is a best-in-class option for marketing teams that want comprehensive search intelligence without juggling many tools.
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
              Choose {toolName} if you want one platform for keyword research, PPC intel, site audits, backlinks, and reporting. It’s ideal for agencies and teams that need to move fast with fewer tools.
            </p>
            <p>Consider Ahrefs if backlink discovery speed matters most, or Serpstat/Ubersuggest if budgets are tight and you only need core SEO coverage.</p>
            <p>{toolName} pairs well with your CMS, analytics, and CRM stack by feeding insights into content, SEM, and sales motions.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default SemrushToolPage;
