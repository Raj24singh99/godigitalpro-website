import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Power BI (AI features)";
const slug = "powerbi-ai";
const category = "Business Intelligence";
const shortPitch =
  "Power BI with AI features combines classic dashboards with AI-assisted insights, natural language queries, and automated patterns for business reporting.";
const pricingSummary =
  "Power BI pricing is per user (Pro/Premium) with capacity options. AI features may require Premium capacity; review Microsoft licensing for specifics.";
const officialUrl = "https://powerbi.microsoft.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/powerbi.com",
  gradient: "from-amber-500 via-yellow-500 to-orange-500",
  glow: "shadow-[0_20px_80px_rgba(245,158,11,0.26)]",
};

const alternatives = [
  { name: "Tableau", slug: "tableau-ai" },
  { name: "Looker", slug: "looker" },
  { name: "Metabase", slug: "metabase-ai" },
  { name: "Power BI vs Tableau vs Looker", slug: "compare/powerbi-vs-tableau-vs-looker", isComparison: true },
  { name: "Polymer Search", slug: "polymersearch" },
];

const faqs = [
  { q: "What is Power BI with AI features?", a: "Power BI includes AI visuals, natural language queries (Q&A), and automated insights to enhance dashboards and reports." },
  { q: "Who is it for?", a: "Teams that already use Power BI for reporting and want AI-assisted insights without leaving the Microsoft ecosystem." },
  { q: "Do I need Premium for AI features?", a: "Some AI features require Premium capacity. Check Microsoft licensing for the latest requirements." },
  { q: "Does it replace analysts?", a: "No. AI aids exploration; analysts still design models, clean data, and validate insights." },
  { q: "Does it support natural language questions?", a: "Yes. Q&A allows asking questions in natural language to generate visuals." },
  { q: "Can I integrate with Azure AI?", a: "Yes. Azure Cognitive Services can be used for advanced enrichment on supported tiers." },
  { q: "Is governance available?", a: "Power BI provides dataflows, workspaces, and permissions; governance is essential for consistent definitions." },
  { q: "Is human validation needed?", a: "Yes. Validate models, data quality, and AI-generated insights before decision-making." },
];

function PowerBIToolPage() {
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
        "Power BI adds AI visuals, Q&A, and automated insights on top of core dashboards. It fits teams in the Microsoft stack—governance and validation remain key.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <BarChart2 className="h-5 w-5 text-amber-600" />, title: "AI visuals & insights", body: "Automated insights and AI visuals to surface patterns." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Natural language Q&A", body: "Ask questions in natural language to generate visuals." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Azure AI integration", body: "Connect to Azure Cognitive Services for enrichment on supported tiers." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Dataflows & modeling", body: "Build dataflows and models to keep metrics consistent." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Ecosystem connectors", body: "Integrates with Microsoft stack, Excel, and numerous connectors." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Governance & permissions", body: "Workspaces, RLS, and permissions for controlled access." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, AI Features, Pros & Cons, Alternatives`}
        description="Power BI (AI features) review: pricing, AI insights, pros & cons, and alternatives like Tableau and Looker."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): AI Insights, Pricing, Pros & Cons
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-amber-100 blur-3xl" />
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
                  {toolName} brings AI-assisted insights to Power BI dashboards—great for Microsoft-centric teams, with governance and validation still required.
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
              {toolName} enhances Power BI with AI visuals, natural language Q&A, and automated insights. It helps business users find patterns faster while staying in the Microsoft BI stack.
            </p>
            <p className="mt-3 text-slate-700">Use it to speed up exploratory analysis and create more interactive dashboards for stakeholders.</p>
            <p className="mt-3 text-slate-700">Modeling, data quality, and governance remain critical—AI does not replace consistent definitions and validation.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams already using Power BI that want AI-assisted exploration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "BI teams in the Microsoft stack needing AI-assisted visuals.",
                "Business users asking natural language questions over curated models.",
                "Organizations adding quick insights without leaving Power BI.",
                "Leaders wanting automated patterns without extra tooling.",
                "Teams that integrate Azure services for enrichment.",
                "Companies with governance in place to manage access and definitions.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on AI visuals, Q&A, and integration with Microsoft data sources.</p>
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
                  Power BI pricing is per user (Pro/Premium) with capacity options. Some AI features require Premium capacity; check Microsoft licensing for details and region availability.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you already use Power BI, evaluate whether Premium is justified for AI features and capacity needs.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Individuals/SMBs</td>
                    <td className="px-4 py-3">Core dashboards, sharing, some AI visuals</td>
                    <td className="px-4 py-3">Per-user pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium (Per User/Capacity)</td>
                    <td className="px-4 py-3">Teams/enterprises</td>
                    <td className="px-4 py-3">Advanced AI, larger datasets, paginated reports</td>
                    <td className="px-4 py-3">Per-user or capacity SKUs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Fabric/Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Unified data + analytics, higher SLAs</td>
                    <td className="px-4 py-3">Custom/enterprise licensing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Factor total cost: licenses, capacity, and governance overhead. Align AI usage with data quality standards.
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
                  <li>AI visuals and natural language Q&A for faster insights.</li>
                  <li>Deep integration with Microsoft ecosystem.</li>
                  <li>Governance features (RLS, workspaces, permissions).</li>
                  <li>Connectors for many data sources.</li>
                  <li>Familiar to teams already on Power BI/Excel.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Some AI features require Premium capacity.</li>
                  <li>Setup/modeling still needs BI expertise.</li>
                  <li>Performance depends on data model quality.</li>
                  <li>Costs add up with licenses and capacity SKUs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other BI platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other BI solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Tableau</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/tableau-ai">
                  View Tableau
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Tableau is strong for advanced visualization; {toolName} fits Microsoft-centric teams and adds AI Q&A. Choose based on stack alignment and viz depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Looker</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/looker">
                  View Looker
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Looker emphasizes modeled metrics and governance; {toolName} provides easier access for business users in Microsoft environments. Pick based on governance needs and stack.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if your organization uses Power BI and you want AI-assisted insights and natural language Q&A within that ecosystem.
            </p>
            <p className="mt-3 text-slate-700">Ensure you have clean models and governance; consider Premium costs for advanced AI features.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid AI-enhanced BI choice for Microsoft-centric teams; best when paired with strong data modeling and governance.
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
              Choose {toolName} if you’re committed to Power BI and want AI-assisted insights and Q&A within the Microsoft stack.
            </p>
            <p>
              Consider Tableau/Looker for different ecosystems or modeling approaches; {toolName} shines when you already rely on Microsoft data tools.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your org, try it here:{" "}
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PowerBIToolPage;
