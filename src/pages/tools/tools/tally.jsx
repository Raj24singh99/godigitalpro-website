import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, PenTool, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Tally";
const slug = "tally";
const category = "Form builder";
const shortPitch = "Tally is a Notion-like form builder with a generous free plan, fast setup, and solid logic, payments, and embeds.";
const pricingSummary = "Generous free plan with unlimited forms/responses; Pro from around $29/month removes branding and unlocks payments, advanced logic, and integrations.";
const officialUrl = "https://www.tally.so";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/tally.so",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(99,102,241,0.18)]",
};

const alternatives = [
  { name: "Typeform", slug: "typeform" },
  { name: "Jotform", slug: "jotform" },
  { name: "Paperform", slug: "paperform" },
  { name: "SurveyMonkey", slug: "surveymonkey" },
  { name: "Tally vs Typeform vs Jotform", slug: "tools/compare/tally-vs-typeform-vs-jotform", isComparison: true },
];

const faqs = [
  { q: "Is Tally free?", a: "Yes. Tally’s free plan includes unlimited forms and responses with light branding. Pro removes branding and adds payments, advanced logic, and collaboration features." },
  { q: "Is Tally good for startups and creators?", a: "Yes. The free tier and fast, Notion-like editor make it ideal for startups, creators, and agencies that need forms quickly without high costs." },
  { q: "Does Tally support payments?", a: "Yes. On Pro you can collect payments, donations, and subscriptions with popular gateways." },
  { q: "Does Tally handle conditional logic?", a: "Tally supports branching, calculations, hidden fields, and answer piping so you can personalize respondent paths." },
  { q: "Can I embed Tally in my site or Notion?", a: "Yes. Tally offers embeds, popups, and share links that drop into sites, Notion, and landing pages easily." },
  { q: "Is Tally secure and GDPR-ready?", a: "Tally offers encryption, GDPR compliance features, and privacy controls for submissions." },
  { q: "Does Tally integrate with other tools?", a: "Yes. It integrates with popular apps and automation via Zapier, Make, and webhooks to push responses to CRMs, sheets, and marketing tools." },
  { q: "Can Tally handle long surveys?", a: "Yes, but it’s best for concise forms. For very long audits or research-heavy surveys, tools like Typeform or SurveyMonkey may offer richer analytics." },
];

function TallyToolPage() {
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
        "Tally delivers a fast, Notion-like form builder with a generous free plan, solid logic, payments, and embeds. It’s excellent for startups and teams that want forms without heavy costs.",
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
      icon: <PenTool className="h-5 w-5 text-indigo-500" />,
      title: "Notion-like form builder",
      body: "Create forms in minutes with slash commands and blocks—easy for anyone used to modern doc editors.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-purple-500" />,
      title: "Generous free plan",
      body: "Unlimited forms and responses for free with light branding, making Tally ideal for early teams and agencies.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Logic, calculations, and piping",
      body: "Conditional branching, calculations, hidden fields, and piping personalize flows for each respondent.",
    },
    {
      icon: <Wallet className="h-5 w-5 text-amber-500" />,
      title: "Payments and subscriptions",
      body: "Collect payments, donations, and subscriptions on Pro plans—great for productized services and paid forms.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations and webhooks",
      body: "Zapier, Make, and native integrations send responses to CRMs, sheets, and marketing tools automatically.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Embeds and popups",
      body: "Embed inline, use popups, or share links so you can place forms on websites, blogs, docs, and Notion pages.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Honest Tally review for marketers and startups covering pricing, features, pros & cons, alternatives, and whether Tally fits your 2025 stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-pink-200 blur-3xl" />
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
                  Tally delivers a fast, flexible form builder with a standout free plan. Build and embed in minutes, add logic and payments, and route data to your stack automatically.
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
              Tally is a modern form builder that feels like writing in Notion. It ships unlimited forms and responses on the free plan, with logic, payments, and embeds that work well for lead capture, feedback, surveys, and
              productized services.
            </p>
            <p className="mt-3 text-slate-700">Startups, creators, and agencies use Tally because it’s fast, affordable, and integrates easily with automation tools to keep data flowing.</p>
            <p className="mt-3 text-slate-700">Upgrade to Pro to remove branding, collect payments, and unlock advanced logic while keeping cost low compared with most form platforms.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Tally is ideal for teams that want fast forms with strong value.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Startups capturing leads and feedback with minimal overhead.",
                "Creators selling paid audits, consultations, or templates with payments on Pro.",
                "Agencies gathering briefs, client intake, and approvals quickly.",
                "Product teams running betas, feedback loops, and roadmap input.",
                "Ops/RevOps teams automating requests via Zapier/Make integrations.",
                "Marketers embedding forms in Landing pages, blogs, docs, and Notion.",
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
            <p className="mt-3 text-slate-700">Tally focuses on speed, value, and embeds while still offering logic, payments, and integrations.</p>
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
                  Tally’s free plan includes unlimited forms and responses with light branding. Pro removes branding and adds payments, logic, collaboration, and integrations for a flat monthly rate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Use the free plan for most forms. Upgrade to Pro when you need payments, advanced logic, or brand removal.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Most basic and even many pro forms</td>
                    <td className="px-4 py-3">Unlimited forms/responses with light branding</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Teams needing payments and brand control</td>
                    <td className="px-4 py-3">Removes branding, adds payments, advanced logic, collaboration</td>
                    <td className="px-4 py-3">~$29/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team/Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing security and support</td>
                    <td className="px-4 py-3">Limits increase; additional admin/security options</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Most teams can ship fast on the free plan; upgrade when you need payments, branding control, or heavier integrations.</p>
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
                  <li>Generous free plan with unlimited forms/responses.</li>
                  <li>Fast Notion-like editing experience.</li>
                  <li>Solid logic, calculations, and piping.</li>
                  <li>Payments and subscriptions on Pro.</li>
                  <li>Easy embeds and share links.</li>
                  <li>Integrations via Zapier/Make and webhooks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Reporting is lighter than SurveyMonkey or enterprise tools.</li>
                  <li>Brand controls are simpler than Typeform/Paperform.</li>
                  <li>Native integrations list is smaller; heavy use relies on automation platforms.</li>
                  <li>Very long research surveys may need more advanced analytics elsewhere.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need deeper analytics, premium brand polish, or heavier workflows, consider these. All have dedicated pages or comparisons.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={alt.slug.startsWith("tools/") ? `/${alt.slug}` : `/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Tally compares to two close alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Typeform vs Jotform</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/tally-vs-typeform-vs-jotform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Typeform wins for branded, conversational UX. Jotform wins for rich widgets and approvals. Tally wins for speed and the best free plan with strong value.
              </p>
              <p className="mt-2 text-slate-700">Choose Tally for affordability and speed; Typeform for premium UX; Jotform for operational depth.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Typeform vs SurveyMonkey</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/typeform-vs-surveymonkey-vs-tally">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SurveyMonkey is stronger for research analytics and governance. Typeform excels at brand-forward lead capture. Tally offers tremendous value and speed with modern UX.
              </p>
              <p className="mt-2 text-slate-700">Choose Tally for value; Typeform for brand polish; SurveyMonkey for analytics and enterprise needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For most startups, creators, and agencies, Tally is worth it—the free plan is generous and Pro is affordable for payments and branding. It balances speed, flexibility, and cost better than many alternatives.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy analytics, enterprise governance, or deep brand controls, consider SurveyMonkey or Typeform. For operations-heavy workflows, Jotform may fit best.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Tally is a top value pick for modern form building and fast lead capture with minimal overhead.
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
              Choose Tally if you want fast, affordable forms with modern UX, strong logic, and payments on Pro. It’s excellent for startups, agencies, and creators who value speed over heavy analytics.
            </p>
            <p>
              Consider Typeform for premium branded experiences, Jotform for operations-heavy workflows, or SurveyMonkey for research analytics and governance.
            </p>
            <p>{toolName} slots neatly into modern stacks via Zapier/Make, keeping data flowing to CRMs, sheets, and marketing automation.</p>
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default TallyToolPage;
