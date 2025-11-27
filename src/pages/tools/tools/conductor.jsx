import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Conductor";
const slug = "conductor";
const category = "Enterprise SEO & Content";
const shortPitch =
  "Conductor is an enterprise SEO platform that combines keyword research, content guidance, site audits, and reporting for large marketing teams.";
const pricingSummary =
  "Custom, seat- and usage-based enterprise pricing. Packages scale with domains, tracked keywords, content recommendations, and support; expect onboarding and success services.";
const officialUrl = "https://www.conductor.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/conductor.com",
  gradient: "from-emerald-500 via-blue-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "BrightEdge", slug: "brightedge" },
  { name: "seoClarity", slug: "seoclarity" },
  { name: "Searchmetrics", slug: "searchmetrics" },
  { name: "SEMrush", slug: "semrush" },
  { name: "Ahrefs", slug: "ahrefs" },
];

const faqs = [
  {
    q: "What is Conductor?",
    a: "Conductor is an enterprise SEO and content platform for research, content guidance, rank tracking, and reporting across large sites.",
  },
  {
    q: "Who is it for?",
    a: "Enterprise marketing and SEO teams that need scalable workflows, reporting, and collaboration across multiple domains or markets.",
  },
  {
    q: "What features stand out?",
    a: "Keyword and intent research, content briefs, rank tracking, technical insights, and workflow tools for teams and agencies.",
  },
  {
    q: "How is pricing structured?",
    a: "Custom enterprise contracts based on domains, keywords tracked, users, and services. Expect onboarding, support, and potential integrations.",
  },
  {
    q: "Does Conductor integrate with content tools?",
    a: "Yes. It connects with CMSs, analytics, and writing workflows to push briefs and track performance.",
  },
  {
    q: "Is technical SEO covered?",
    a: "Conductor surfaces technical issues and pairs them with content insights; deep crawls may still rely on complementary crawl tools.",
  },
  {
    q: "Does it support reporting?",
    a: "Yes. Dashboards and scheduled reports help teams share performance and opportunities with stakeholders.",
  },
  {
    q: "Is there AI content guidance?",
    a: "Content scoring and suggestions help align pages to search intent; human editing and brand review remain essential.",
  },
];

function ConductorToolPage() {
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
        "Conductor delivers enterprise-scale keyword research, content guidance, rank tracking, and reporting, making it a fit for large SEO teams that need collaboration and governance.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Keyword & intent research",
      body: "Discover opportunities, map intent, and size demand to guide content strategy.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Content guidance",
      body: "Generate briefs, recommendations, and scoring to align pages with search intent.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Rank tracking",
      body: "Track keywords across geos and devices with alerts and scheduled reports.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Technical insights",
      body: "Surface crawl issues and page health signals; pair with your audit tools for fixes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Integrations & workflows",
      body: "Connect analytics, CMS, and task systems to push briefs and measure impact.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Reporting",
      body: "Dashboards and exports keep leadership and stakeholders aligned on SEO performance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Conductor review: pricing, features, pros & cons, and alternatives for enterprise SEO teams evaluating the platform."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                  {toolName} gives enterprise teams unified research, guidance, and reporting so SEO and content stay aligned at scale.
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
              {toolName} is an enterprise SEO platform. It blends keyword research, content guidance, rank tracking, and technical insights to help large teams prioritize and execute.
            </p>
            <p className="mt-3 text-slate-700">Use it to find opportunities, brief writers, monitor rankings, and share results with leadership.</p>
            <p className="mt-3 text-slate-700">It pairs best with clear ownership, analytics, and a workflow for implementing recommendations.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for enterprise SEO, content, and digital teams managing large sites or portfolios.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Enterprise SEO teams coordinating writers, developers, and stakeholders.",
                "Content teams needing briefs and scoring for new pages and refreshes.",
                "Agencies managing multiple client campaigns and reporting.",
                "Ecommerce teams tracking rankings across many categories and locales.",
                "B2B companies aligning SEO with demand gen and analytics.",
                "Leaders who need executive-ready SEO reporting and forecasts.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on research, content guidance, tracking, and reporting for large teams.</p>
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
                  {toolName} uses custom enterprise pricing. Costs depend on domains, keywords, users, and services like onboarding and success. Expect contracts and procurement steps.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Align the package with your tracked keywords, markets, and reporting needs; bake in budget for training and implementation.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Core enterprise</td>
                    <td className="px-4 py-3">Single brand or region</td>
                    <td className="px-4 py-3">Research, guidance, tracking, dashboards</td>
                    <td className="px-4 py-3">Good entry for large teams</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Multi-brand/geo</td>
                    <td className="px-4 py-3">Portfolios & international</td>
                    <td className="px-4 py-3">Higher keyword limits, more users, advanced reports</td>
                    <td className="px-4 py-3">Matches complex orgs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise plus</td>
                    <td className="px-4 py-3">Custom needs</td>
                    <td className="px-4 py-3">Custom integrations, services, SLAs</td>
                    <td className="px-4 py-3">Best for heavy governance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Plan for onboarding, training writers, and aligning analytics so reporting reflects business impact, not just rankings.</p>
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
                  <li>Enterprise-ready research and content guidance.</li>
                  <li>Collaboration and workflows for large teams.</li>
                  <li>Reporting for stakeholders and leadership.</li>
                  <li>Integrations with analytics and content stacks.</li>
                  <li>Support and services for onboarding.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Enterprise contracts and onboarding required.</li>
                  <li>May need complementary crawl or analytics tools.</li>
                  <li>Costs scale with keyword and user counts.</li>
                  <li>Content outputs still need human editing and SME input.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other enterprise SEO platforms to match data coverage, reporting, and service needs.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with other enterprise SEO platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs BrightEdge</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/brightedge">
                  View BrightEdge
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                BrightEdge includes strong reporting and recommendations; {toolName} emphasizes collaboration and integrations. Choose based on service model and UI preference.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs seoClarity</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/seoclarity">
                  View seoClarity
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                seoClarity is known for customizable workflows and data depth; {toolName} focuses on guided workflows and collaboration. Pick based on customization vs. structured guidance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you run enterprise SEO with multiple stakeholders and need unified research, guidance, and reporting plus support.
            </p>
            <p className="mt-3 text-slate-700">
              It delivers best results with dedicated owners, content processes, and development alignment to implement recommendations and track impact.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong enterprise SEO platform—budget for onboarding, seats, and implementation time to realize value.
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
              Choose {toolName} if you want enterprise-grade research, content guidance, and reporting in one platform with services to support rollout.
            </p>
            <p>
              Consider BrightEdge or seoClarity if you prefer their data depth or customization; use {toolName} for collaborative workflows and guided briefs.
            </p>
            <p>{toolName} helps large teams align SEO and content efforts—pair it with clear ownership and implementation plans.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default ConductorToolPage;
