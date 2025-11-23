import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Thinkific";
const slug = "thinkific";
const category = "Course Platform";
const shortPitch = "Thinkific is an online course platform focused on student experience, assessments, and communities with predictable pricing.";
const pricingSummary = "Free plan available; paid plans from around $36/month add communities, assessments, certificates, and advanced course delivery features.";
const officialUrl = "https://www.thinkific.com";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/thinkific.com",
  gradient: "from-indigo-500 via-sky-500 to-blue-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.18)]",
};

const alternatives = [
  { name: "Teachable", slug: "teachable" },
  { name: "Kajabi", slug: "kajabi" },
  { name: "Podia", slug: "podia" },
  { name: "ThriveCart", slug: "thrivecart" },
];

const faqs = [
  { q: "Is Thinkific free?", a: "Thinkific offers a free plan for launching a simple course. Paid plans unlock communities, assessments, certificates, memberships, and more customization." },
  { q: "Is Thinkific good for educators?", a: "Yes. Thinkific’s learning experience, assessments, and completion tracking make it a strong choice for educators who care about student outcomes." },
  { q: "Which Thinkific plan should I choose?", a: "Start free to validate. Upgrade to Start/Grow for communities, exams, certificates, and advanced branding. Larger teams can add expansion and SSO features." },
  { q: "Can I build communities in Thinkific?", a: "Yes. Thinkific supports communities and memberships so you can keep learners engaged with discussions and cohorts." },
  { q: "Does Thinkific integrate with email and CRM tools?", a: "Yes. It integrates with email tools (e.g., Mailchimp/ConvertKit), Zapier/Make, and payment gateways plus webhooks for automation." },
  { q: "How customizable is Thinkific?", a: "You can use themes and page builder tools, add custom code, and embed widgets. Kajabi offers more built-in marketing/pipelines; Thinkific focuses on learning delivery." },
  { q: "Can I sell subscriptions and bundles?", a: "Yes. You can sell single courses, memberships, bundles, and payment plans while issuing certificates and tracking progress." },
  { q: "Is Thinkific secure and reliable?", a: "Thinkific handles hosting, SSL, and payments via trusted gateways. Higher tiers add SSO and advanced security controls." },
];

function ThinkificToolPage() {
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
        "Thinkific prioritizes student experience with assessments, certificates, communities, and reliable delivery. Pricing is predictable and includes a free tier. It’s a strong pick for creators and educators who want control over learning outcomes without stitching many tools together.",
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
      icon: <GraduationCap className="h-5 w-5 text-indigo-500" />,
      title: "Student-first learning experience",
      body: "Clean course player with drip schedules, prerequisites, and certificates to keep learners on track.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "Assessments and exams",
      body: "Quizzes, assignments, and exams with progress tracking and reporting for real learning outcomes.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Communities and memberships",
      body: "Built-in community spaces, memberships, and cohorts to engage learners between lessons.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and automations",
      body: "Connect email, CRM, and analytics tools via native integrations, Zapier/Make, and webhooks for lifecycle automations.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "Payment flexibility",
      body: "Sell one-time purchases, subscriptions, bundles, and payment plans with trusted gateways and tax support.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Hosted reliability",
      body: "Thinkific hosts your courses with SSL, CDN, and uptime handled—no server management required.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Thinkific review covering pricing, features, pros & cons, alternatives, and whether Thinkific fits your 2025 course business."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />
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
                  Thinkific focuses on learner experience—assessments, certificates, communities, and hosted reliability—so you can deliver quality courses without stitching together multiple systems.
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
              Thinkific is a hosted course platform with built-in assessments, communities, and certificates. It helps creators and educators deliver structured learning experiences without managing servers or complex plugins.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, coaches, and education teams use Thinkific to run courses, cohorts, and memberships while integrating with email/CRM tools for marketing and lifecycle automation.
            </p>
            <p className="mt-3 text-slate-700">Its free tier and predictable pricing make it easy to start and scale without unexpected transaction fees (beyond gateway costs).</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Thinkific suits course creators who want strong learning experience and reliable hosting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Educators prioritizing assessments, completion, and learner outcomes.",
                "Creators launching courses and communities with predictable pricing.",
                "Bootcamps and cohort-based courses needing prerequisites and drip schedules.",
                "Coaches productizing programs with certificates and memberships.",
                "Teams selling training add-ons or customer academies without engineering help.",
                "Agencies delivering white-label education for clients.",
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
            <p className="mt-3 text-slate-700">Thinkific emphasizes student engagement, assessments, and reliable delivery, with integrations to power marketing.</p>
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
                <p className="mt-2 text-slate-700">Thinkific has a free plan. Paid tiers add communities, exams, certificates, and more branding and admin controls.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free, upgrade to Start/Grow for communities, certificates, and assessments. Larger teams add expansion/SSO if needed.</p>
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
                    <td className="px-4 py-3">Testing and first course</td>
                    <td className="px-4 py-3">Basics only; limited students/features</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Start</td>
                    <td className="px-4 py-3">Creators launching seriously</td>
                    <td className="px-4 py-3">Assessments, certificates, communities, coupons</td>
                    <td className="px-4 py-3">~$36/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Grow</td>
                    <td className="px-4 py-3">Teams and cohorts</td>
                    <td className="px-4 py-3">More admin controls, API/webhooks, priority support</td>
                    <td className="px-4 py-3">Higher tier, lower on annual</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus/Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing SSO/SLAs</td>
                    <td className="px-4 py-3">SSO, advanced security, dedicated support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Thinkific’s free plan is generous to start. Upgrade when you need communities, certificates, and more admin controls.</p>
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
                  <li>Strong learner experience with assessments and certificates.</li>
                  <li>Communities and memberships built-in.</li>
                  <li>Predictable pricing with a free tier.</li>
                  <li>Hosted reliability—no servers or plugins to maintain.</li>
                  <li>Integrations via native apps and Zapier/Make.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Marketing funnels and email require integrations vs Kajabi all-in-one.</li>
                  <li>Design flexibility is solid but not as open as full custom stacks.</li>
                  <li>Transaction fees depend on gateways; lower tiers may have some limits.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If you need more built-in marketing or want lower-cost all-in-one options, explore these. All have dedicated pages.</p>
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
            <p className="text-slate-700">Here’s how Thinkific stacks up against two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Teachable vs Kajabi</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/thinkific-vs-teachable-vs-kajabi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Teachable is beginner-friendly with coaching and solid checkout; Kajabi is all-in-one with email and funnels. Thinkific wins for learning experience, assessments, and communities with predictable pricing.
              </p>
              <p className="mt-2 text-slate-700">Choose Thinkific for student outcomes; Teachable for simplest setup; Kajabi for all-in-one marketing and community.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kajabi vs Podia</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/thinkific-vs-kajabi-vs-podia">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kajabi bundles site, email, automation, and community at a premium price. Podia is the budget-friendly all-in-one. Thinkific sits in the middle with strong learning tools and integrations.
              </p>
              <p className="mt-2 text-slate-700">Choose Thinkific for outcomes and communities; Kajabi to replace multiple tools; Podia for low-cost simplicity.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want a reliable, student-first course platform with communities and assessments, Thinkific is worth it. It balances UX, hosting, and integrations without forcing you into an all-in-one marketing stack.
            </p>
            <p className="mt-3 text-slate-700">
              Choose Kajabi if you need built-in email and funnels; choose Podia for budget simplicity; choose Teachable for fastest onboarding with coaching offers.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Thinkific is a top choice for creators and educators prioritizing learner outcomes, with enough integrations to tie into your marketing stack.
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
              Choose Thinkific if you prioritize student experience, assessments, and communities with dependable hosting. Integrate email/CRM tools to complete your marketing stack.
            </p>
            <p>
              Consider Kajabi if you want all-in-one marketing and community; Podia for low-cost simplicity; Teachable for quick starts and coaching programs.
            </p>
            <p>Thinkific fits well with modern marketing stacks using email/automation tools, letting you keep teaching quality high while sales flow is automated.</p>
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

export default ThinkificToolPage;
