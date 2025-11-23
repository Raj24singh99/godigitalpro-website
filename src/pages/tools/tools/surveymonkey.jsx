import React, { useState } from "react";
import { Sparkles, ShieldCheck, ClipboardList, Gauge, BarChart3, Target, Crown, ArrowLeft, ChevronDown, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SurveyMonkey";
const slug = "surveymonkey";
const category = "Survey Platform";
const shortPitch =
  "SurveyMonkey is a mature survey, research, and feedback platform with templates, logic, quotas, and analysis that helps marketers and researchers collect high-quality data at scale.";
const pricingSummary =
  "Free basic tier; paid plans from ~$34/user/month for Advantage with logic and analysis. Team and enterprise plans add quotas, governance, role-based controls, and research panels.";
const officialUrl = "https://www.surveymonkey.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/surveymonkey.com",
  gradient: "from-emerald-500 via-green-500 to-teal-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.18)]",
};

const alternatives = [
  { name: "Typeform", slug: "typeform" },
  { name: "Jotform", slug: "jotform" },
  { name: "Tally", slug: "tally" },
  { name: "Paperform", slug: "paperform" },
];

const faqs = [
  {
    q: "Is SurveyMonkey good for marketers?",
    a: "Yes. Marketers use SurveyMonkey for NPS, churn surveys, product feedback, persona research, and event follow-up because of its templates, logic, and analysis tools.",
  },
  {
    q: "Which SurveyMonkey plan should I start with?",
    a: "Try the free plan to test the builder. Most teams start on Advantage (with logic, quotas, and exports). Enterprise is best for governance, SSO, and research panels.",
  },
  {
    q: "How does SurveyMonkey compare to Typeform?",
    a: "Typeform wins on design and completion rate for marketing forms. SurveyMonkey wins on analytics depth, benchmarking, quotas, and enterprise governance. Use both depending on your use case.",
  },
  {
    q: "Can SurveyMonkey handle research panels?",
    a: "Yes. SurveyMonkey Audience lets you recruit respondents quickly with targeting, quotas, and benchmarks, which is useful for fast market validation.",
  },
  {
    q: "Does SurveyMonkey integrate with CRMs?",
    a: "SurveyMonkey integrates with HubSpot, Salesforce, Marketo, Slack, and Zapier, making it easy to route responses into marketing systems or alerts.",
  },
  {
    q: "Is SurveyMonkey HIPAA or GDPR-ready?",
    a: "SurveyMonkey offers HIPAA-eligible plans, GDPR compliance features, data residency options, and admin controls for retention, SSO, and permissions.",
  },
  {
    q: "Is SurveyMonkey better for enterprise teams?",
    a: "SurveyMonkey shines for enterprise research thanks to governance, approvals, quotas, benchmarks, and secure sharing. It’s less design-forward than Typeform but more controlled.",
  },
  {
    q: "Can I run NPS and CSAT with SurveyMonkey?",
    a: "Yes. Templates for NPS, CSAT, CES, onboarding feedback, and churn surveys make it easy to deploy recurring programs with automated reports.",
  },
];

function SurveyMonkeyToolPage() {
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
        "SurveyMonkey is a proven survey platform for marketers and research teams that need quotas, logic, benchmarks, and governance. It trades flashy design for reliability, analytics, and enterprise controls.",
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
      icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
      title: "Templates and logic that scale",
      body: "NPS, CSAT, churn, market research, and product feedback templates with branching, quotas, randomization, and piping keep responses clean and targeted.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-green-600" />,
      title: "Benchmarks, quotas, and panels",
      body: "Use SurveyMonkey Audience to recruit respondents, apply quotas to avoid bias, and benchmark results against your industry for better decision-making.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
      title: "Reporting built for exec updates",
      body: "Dashboards, filters, and cross-tabs help summarize results fast. Export to CSV/PDF or sync to Slack/HubSpot so stakeholders see signal without manual work.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "Governance and compliance",
      body: "SSO, roles, approval workflows, data retention policies, audit logs, and HIPAA/GDPR support keep enterprise teams and legal teams comfortable.",
    },
    {
      icon: <Target className="h-5 w-5 text-rose-600" />,
      title: "Multi-channel distribution",
      body: "Share via link, email collector, website embeds, chat, or QR codes. Manage response limits and reminders so collection stays on track.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-amber-600" />,
      title: "Integrations for automated routing",
      body: "Connect to HubSpot, Salesforce, Marketo, Slack, and Zapier to push responses into CRM, trigger workflows, or alert account owners in real time.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Independent SurveyMonkey review for marketers and researchers covering pricing, logic, quotas, pros & cons, alternatives, and where it fits in 2025."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
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
                  Visit SurveyMonkey
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/40">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  Built for serious survey programs, SurveyMonkey pairs templates and logic with quotas, benchmarks, and governance so teams collect trustworthy data fast.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Trusted for NPS, CSAT, and research
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              SurveyMonkey is a {category.toLowerCase()} platform built for collecting feedback, running research, and sharing insights. It balances templates and logic with governance so data stays clean, compliant, and actionable.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use it for NPS, lifecycle feedback, and campaign research. Product teams rely on it for usability surveys and feature validation. Research teams leverage quotas, panels, and benchmarks for statistically sound
              studies.
            </p>
            <p className="mt-3 text-slate-700">
              If you need enterprise-ready surveys with analytics and approvals, SurveyMonkey is a reliable choice—even if it’s less design-forward than Typeform.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SurveyMonkey suits teams that value response quality, quotas, and governance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketers running NPS, CSAT, churn, and campaign research.",
                "Product and UX teams validating features with structured surveys.",
                "Customer success teams gathering onboarding and renewal feedback.",
                "Ops and HR teams collecting internal feedback with permissions.",
                "Research teams that need quotas, panels, benchmarks, and approvals.",
                "Agencies delivering survey results to clients with exports and dashboards.",
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
            <p className="mt-3 text-slate-700">
              SurveyMonkey prioritizes data quality, governance, and reporting while keeping survey builds efficient with templates and logic.
            </p>
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
                  Free lets you test forms with limited questions. Advantage (from ~$34/user/month) unlocks logic, quotas, and exports. Premier/Enterprise adds approvals, SSO, advanced analysis, data residency, and Audience access for
                  panels.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Growth teams start on Advantage. Enterprise/Business plans suit research teams that need governance, quotas, and panels.</p>
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
                    <td className="px-4 py-3">Testing and small runs</td>
                    <td className="px-4 py-3">Limited questions/responses, basic branding</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advantage / Premier</td>
                    <td className="px-4 py-3">Marketing & CS teams</td>
                    <td className="px-4 py-3">Logic, quotas, exports, reporting, limited governance</td>
                    <td className="px-4 py-3">~$34–$99/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Research & compliance-heavy teams</td>
                    <td className="px-4 py-3">SSO, approvals, data residency, Audience, benchmarks</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Typeform or Tally can feel lighter and look better for lead capture. SurveyMonkey costs more but gives you quotas, benchmarks, and governance that regulated teams and exec stakeholders appreciate.
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
                  <li>Strong logic, quotas, and randomization keep responses high quality.</li>
                  <li>Audience access for fast panel sourcing and benchmarking.</li>
                  <li>Governance features (SSO, approvals, data retention) for enterprise.</li>
                  <li>Good integrations with CRM, marketing, and collaboration tools.</li>
                  <li>Templates for NPS, churn, product feedback, and research.</li>
                  <li>Reporting and exports make stakeholder updates straightforward.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Design is more utilitarian than Typeform or Paperform.</li>
                  <li>Pricing is higher for solo creators versus Tally or Google Forms.</li>
                  <li>Advanced governance and Audience are locked to higher tiers.</li>
                  <li>Less flexibility for on-brand single-question flows.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need more design flexibility or lower pricing, compare these tools. Each link goes to a full review page so you can evaluate quickly.
            </p>
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
            <p className="text-slate-700">Here’s how SurveyMonkey stacks up against the most common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Typeform</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/typeform-vs-surveymonkey-vs-tally">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Typeform leads on design and completion rate for marketing forms. SurveyMonkey leads on analytics, quotas, Audience panels, and governance. Many teams run Typeform for lead capture and SurveyMonkey for research or NPS.
              </p>
              <p className="mt-2 text-slate-900">
                Choose SurveyMonkey for research rigor and enterprise governance; choose Typeform for polished, high-converting forms.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Jotform</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/surveymonkey-vs-typeform-vs-jotform">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Jotform offers powerful widgets, payments, and PDF automation at a friendly price. SurveyMonkey is stronger for research rigor, quotas, and benchmarks. If you need compliance and governance, SurveyMonkey wins; if you need
                flexible forms with payments, Jotform shines.
              </p>
              <p className="mt-2 text-slate-900">
                Choose SurveyMonkey for structured research and analytics; choose Jotform for versatile business forms and payment flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers and researchers who need reliable data quality, quotas, and governance, SurveyMonkey is worth it. It’s not the flashiest builder, but it’s trusted and battle-tested with solid analytics and exports.
            </p>
            <p className="mt-3 text-slate-700">
              If you mainly need beautiful lead capture, Typeform or Tally will feel lighter. If you need payments and widgets, Jotform is strong. But for research-grade surveys and stakeholder-ready reporting, SurveyMonkey is a safe pick.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> SurveyMonkey is a dependable survey platform for teams that care about data quality, governance, and fast analysis.
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
              Choose SurveyMonkey if you need governance, quotas, benchmarks, and reliable reporting for NPS, CSAT, or research. It’s best when data quality and approvals matter more than flashy design.
            </p>
            <p>
              Consider Typeform or Tally for branded lead capture, or Jotform for forms with payments. Many teams keep SurveyMonkey for research and one of those tools for evergreen site forms.
            </p>
            <p>SurveyMonkey fits teams that want predictable, trustworthy survey operations across marketing, product, CX, and research.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
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

export default SurveyMonkeyToolPage;
