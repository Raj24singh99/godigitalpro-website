import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, GraduationCap, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Teachable";
const slug = "teachable";
const category = "Course Platform";
const shortPitch = "Teachable is a course and coaching platform that makes it easy to launch and monetize programs with a clean builder and dependable checkout.";
const pricingSummary = "Free plan available; paid plans from around $39/month add lower fees, coaching, upsells, and advanced admin controls.";
const officialUrl = "https://teachable.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/teachable.com",
  gradient: "from-amber-500 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.18)]",
};

const alternatives = [
  { name: "Thinkific", slug: "thinkific" },
  { name: "Kajabi", slug: "kajabi" },
  { name: "Podia", slug: "podia" },
  { name: "ThriveCart", slug: "thrivecart" },
  { name: "Tally", slug: "tally" },
];

const faqs = [
  { q: "Is Teachable free?", a: "Teachable has a free plan to launch a course. Paid plans reduce transaction fees and add coaching, upsells, and advanced features." },
  { q: "Is Teachable good for beginners?", a: "Yes. Teachable’s builder, checkout, and tax handling make it easy to launch courses or coaching with minimal setup." },
  { q: "Which Teachable plan should I choose?", a: "Start free to validate. Upgrade to Basic/Pro to lower fees, unlock coaching, upsells, and better admin controls." },
  { q: "Does Teachable support coaching?", a: "Yes. Teachable includes coaching products alongside courses so you can sell programs and sessions in one place." },
  { q: "Does Teachable handle VAT/taxes?", a: "Teachable can calculate and collect taxes for you, reducing manual compliance overhead." },
  { q: "Can I sell bundles and payment plans?", a: "Yes. Teachable supports bundles, subscriptions, coupons, and payment plans to boost conversions and LTV." },
  { q: "Does Teachable integrate with email and CRMs?", a: "Yes. It integrates with email tools, Zapier, analytics, and payment gateways so you can automate follow-up and reporting." },
  { q: "Is Teachable secure?", a: "Teachable hosts your site with SSL, handles payments through trusted gateways, and offers admin controls for teams." },
];

function TeachableToolPage() {
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
        "Teachable is a beginner-friendly course and coaching platform with dependable checkout, tax handling, and upsells. It keeps setup simple while offering bundles, payment plans, and integrations to automate follow-up.",
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
      icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
      title: "Course + coaching in one place",
      body: "Launch courses, cohorts, and coaching products with a clean builder and unified checkout so you can monetize in multiple ways.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-orange-500" />,
      title: "Checkout, tax, and payouts",
      body: "Teachable handles payments, tax/VAT calculation, and payouts so you spend less time on compliance and finance ops.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Upsells and bundles",
      body: "Offer order bumps, bundles, subscriptions, and payment plans to increase average order value across your catalog.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations and automation",
      body: "Connect email tools, analytics, and CRMs via native integrations and Zapier so enrollments trigger onboarding and marketing automatically.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Admin controls and team access",
      body: "Roles, permissions, and site settings keep your brand consistent while letting collaborators help with content and support.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Fast launch with hosted reliability",
      body: "Hosted pages, SSL, and uptime handled for you—no servers or plugins to manage. Focus on content, not maintenance.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="In-depth Teachable review covering pricing, features, pros & cons, alternatives, and whether Teachable fits your 2025 course business."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-orange-200 blur-3xl" />
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
                  Teachable keeps course and coaching launches simple—checkout, tax, and payouts handled, with upsells and bundles to grow revenue.
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
              Teachable is a hosted course and coaching platform that lets you launch programs quickly. It bundles checkout, tax/VAT, and payouts with a straightforward builder so you can focus on content and marketing.
            </p>
            <p className="mt-3 text-slate-700">Creators, coaches, and teams use Teachable to sell courses, cohorts, and coaching with upsells and bundles that lift average order value.</p>
            <p className="mt-3 text-slate-700">Integrations to email and automation tools keep onboarding and follow-up smooth without engineering help.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Teachable suits creators and teams who want reliable monetization with minimal setup.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators launching courses and coaching offers quickly.",
                "Agencies or freelancers packaging trainings and workshops.",
                "Coaches selling programs with sessions and follow-ups.",
                "Teams testing education-led growth before building a custom academy.",
                "Marketers needing upsells, bundles, and coupons without dev time.",
                "SMBs that want tax handling and payouts managed for them.",
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
            <p className="mt-3 text-slate-700">Teachable focuses on speed-to-launch, dependable checkout, and revenue boosters like upsells and bundles.</p>
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
                  Teachable has a free plan for first launches. Basic and Pro reduce fees and add coaching, upsells, subscriptions, and advanced admin controls. Expect transaction fees on lower tiers plus gateway fees.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free, move to Basic/Pro to lower fees and unlock coaching + upsells once you sell consistently.</p>
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
                    <td className="px-4 py-3">Testing and first course/coaching</td>
                    <td className="px-4 py-3">Higher transaction fees, limited features</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic</td>
                    <td className="px-4 py-3">Creators launching seriously</td>
                    <td className="px-4 py-3">Lower fees, coupons, bundles, coaching</td>
                    <td className="px-4 py-3">~$39/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Growing course/coaching teams</td>
                    <td className="px-4 py-3">Lowest fees, advanced admin, priority support</td>
                    <td className="px-4 py-3">Higher; lower on annual</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business/Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing SSO/SLAs</td>
                    <td className="px-4 py-3">Custom seats, SSO, SLAs</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Upgrade as soon as volume grows to lower fees; keep gateway fees in mind for overall margin.</p>
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
                  <li>Simple builder for courses and coaching.</li>
                  <li>Checkout, tax, and payouts handled.</li>
                  <li>Bumps, bundles, subscriptions, and coupons to lift AOV.</li>
                  <li>Integrations with email/CRM and automation tools.</li>
                  <li>Hosted reliability—no servers or plugins to manage.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Transaction fees on lower tiers.</li>
                  <li>Marketing funnels and automation rely on integrations vs Kajabi.</li>
                  <li>Community tools are lighter than some all-in-ones.</li>
                  <li>Design flexibility is simpler than fully custom stacks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Consider these options if you want more built-in marketing, lower cost, or deeper learning tools. Each has a dedicated page.</p>
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
            <p className="text-slate-700">Here’s how Teachable compares to two common alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Thinkific vs Kajabi</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/thinkific-vs-teachable-vs-kajabi">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Thinkific wins for student experience and assessments. Kajabi wins for all-in-one email/funnels/community. Teachable wins for ease of launch with strong checkout and coaching.
              </p>
              <p className="mt-2 text-slate-700">Choose Teachable for simplicity; Thinkific for outcomes; Kajabi for an all-in-one stack.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Kajabi vs Podia</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/teachable-vs-kajabi-vs-podia">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Kajabi is premium and all-in-one; Podia is the budget-friendly all-in-one. Teachable sits between them with strong checkout and coaching at a moderate price.
              </p>
              <p className="mt-2 text-slate-700">Choose Teachable for ease; Kajabi for all-in-one automation; Podia for lowest cost.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you want to launch courses or coaching quickly with reliable checkout, tax handling, and upsells, Teachable is worth it. It balances simplicity and revenue features without forcing an all-in-one stack.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep community, all-in-one email, or enterprise learning features, consider Kajabi or Thinkific. For lowest cost all-in-one, Podia is strong.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Teachable is an easy on-ramp for creators and teams who want dependable monetization and minimal setup time.
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
              Choose Teachable if you want a straightforward course/coaching platform with dependable checkout, tax handling, and simple monetization tools.
            </p>
            <p>
              Consider Kajabi for all-in-one automation and community, Thinkific for learning outcomes, or Podia for the most affordable all-in-one option.
            </p>
            <p>Teachable fits neatly with email/CRM and automation tools so you can onboard, nurture, and upsell without custom dev.</p>
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

export default TeachableToolPage;
