import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Bonsai";
const slug = "bonsai";
const category = "Freelance CRM & Billing";
const shortPitch =
  "Bonsai is an all-in-one platform for freelancers and agencies with proposals, contracts, time tracking, invoices, and light CRM/PM.";
const pricingSummary =
  "Paid tiers by seats/features; add-ons for partners/clients. Higher plans add white-label, workflows, and automations.";
const officialUrl = "https://www.hellobonsai.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hellobonsai.com",
  gradient: "from-emerald-500 via-teal-500 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.26)]",
};

const alternatives = [
  { name: "HoneyBook", slug: "ai" },
  { name: "Dubsado", slug: "ai" },
  { name: "FreshBooks", slug: "freshbooks" },
  { name: "Harvest", slug: "harvest" },
  { name: "QuickBooks", slug: "ai" },
];

const faqs = [
  { q: "What is Bonsai?", a: "Bonsai is a freelancer/agency platform for proposals, contracts, time tracking, invoicing, and light CRM/PM." },
  { q: "Who is it for?", a: "Freelancers and small agencies needing client management, billing, and simple project workflows in one tool." },
  { q: "How does pricing work?", a: "Paid tiers by seats/features; higher plans add white-label, workflows, partners, and automations." },
  { q: "Does it include contracts/proposals?", a: "Yes. Templates, e-sign, and proposals are built in." },
  { q: "Does it handle accounting?", a: "It covers invoicing and expenses; full accounting may still need QuickBooks/Xero." },
  { q: "Is human review needed?", a: "Yes. Review contract templates with legal and ensure tax compliance for invoices." },
];

function BonsaiToolPage() {
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
        "Bonsai centralizes proposals, contracts, time tracking, and invoicing for freelancers and agencies. It’s great for small teams wanting an all-in-one workflow.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Proposals & contracts", body: "Templates, e-sign, and workflows to close clients faster." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Time tracking & projects", body: "Track time, tasks, and simple project progress." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Invoices & payments", body: "Send invoices, accept payments, and track expenses." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Automation", body: "Recurring invoices, reminders, and workflows on higher tiers." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "CRM & clients", body: "Keep client info, proposals, contracts, and billing together." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Branding & white-label", body: "Custom branding/white-label on upper plans." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Bonsai review: pricing, features, pros & cons, and alternatives so you can choose the right freelance/agency operating system."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
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
                  {toolName} pulls proposals, contracts, time tracking, and invoices together—review legal and tax settings before sending.
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
              {toolName} is an all-in-one workspace for freelancers and small agencies, covering proposals, contracts, time tracking, projects, invoicing, and basic CRM.
            </p>
            <p className="mt-3 text-slate-700">Use it to streamline client onboarding and billing; connect accounting tools if you need full bookkeeping.</p>
            <p className="mt-3 text-slate-700">Customize templates and ensure compliance with your region’s tax and legal requirements.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for freelancers and small agencies that want client/billing workflows in one place.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Freelancers sending proposals and collecting e-signatures.",
                "Studios/agencies needing time tracking + invoicing per client.",
                "Teams wanting recurring invoices and reminders automated.",
                "Service providers wanting branded/white-label client portals.",
                "Shops needing light project/task tracking tied to billing.",
                "Users who prefer templates for contracts and proposals.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on client-facing workflows plus basic project/time tracking.</p>
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
                  Paid tiers by seats and features; add-ons for partners/clients. Upper plans add white-label, automation, and workflows. Model seat count and recurring invoices volume.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with the middle tier for automation/branding; upgrade if you need white-label and more collaborators.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Solo</td>
                    <td className="px-4 py-3">Proposals, contracts, invoicing, tasks</td>
                    <td className="px-4 py-3">Good for solo testing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Active freelancers</td>
                    <td className="px-4 py-3">Automation, branding, recurring invoices</td>
                    <td className="px-4 py-3">Most common</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Agency</td>
                    <td className="px-4 py-3">Teams</td>
                    <td className="px-4 py-3">White-label, partners, team features</td>
                    <td className="px-4 py-3">For agencies/studios</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Budget for payment processing fees and any external accounting software if needed.</p>
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
                  <li>All-in-one client workflow: proposals to payments.</li>
                  <li>Automation for invoices/reminders.</li>
                  <li>Templates and e-sign streamline onboarding.</li>
                  <li>Branding/white-label on higher tiers.</li>
                  <li>Time tracking ties to billing.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not full accounting—may need QuickBooks/Xero.</li>
                  <li>Sales tax/VAT compliance requires configuration.</li>
                  <li>Project management is lightweight vs dedicated PM tools.</li>
                  <li>Per-seat costs add up for larger teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other freelancer/agency CRMs and billing tools.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other freelancer/agency platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs HoneyBook</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/ai">
                  View HoneyBook
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                HoneyBook focuses on clientflows and invoices; {toolName} adds time tracking and tasks. Choose based on need for time tracking and light PM vs CRM depth.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Dubsado</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/ai">
                  View Dubsado
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Dubsado is strong on client workflows and forms; {toolName} offers a balanced mix of contracts, time, invoicing, and tasks. Pick based on workflow vs time/billing emphasis.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want proposals, contracts, time, and invoicing in one tool and don’t need deep accounting or heavy PM features.
            </p>
            <p className="mt-3 text-slate-700">Align with accounting/legal for compliance; connect to bookkeeping software if needed.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong all-in-one hub for freelancers/agencies—best when paired with clear processes for taxes and contracts.
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
            <p>{toolName} centralizes client workflows, time, and billing for freelancers and agencies.</p>
            <p>Use it when you want one place for proposals to payments and can supplement with accounting tools for full books.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your client services business, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>
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

export default BonsaiToolPage;
