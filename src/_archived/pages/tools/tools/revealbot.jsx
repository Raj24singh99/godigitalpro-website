import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Folder, Crown, ArrowLeft, ChevronDown, BarChart3, Rocket, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Revealbot";
const slug = "revealbot";
const category = "Ads Automation & Optimization";
const shortPitch = "Revealbot automates ad rules, budgets, and reporting across Meta, Google, and TikTok Ads to scale performance with guardrails.";
const pricingSummary = "Pricing is tiered by ad spend. Higher tiers unlock more connected ad accounts, rules, and support. Costs rise with managed spend.";
const officialUrl = "https://revealbot.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/revealbot.com",
  gradient: "from-amber-500 via-orange-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.22)]",
};

const alternatives = [
  { name: "Madgicx", slug: "madgicx" },
  { name: "Triple Whale", slug: "triple-whale" },
  { name: "Supermetrics", slug: "supermetrics" },
  { name: "Google Ads Scripts", slug: "google-ads" },
  { name: "Meta Automated Rules", slug: "facebook-ads" },
];

const faqs = [
  { q: "What is Revealbot?", a: "Revealbot is an ads automation platform that runs rules, budget adjustments, and reporting across Meta, Google, and TikTok Ads." },
  { q: "Who is it for?", a: "Performance marketers and agencies managing multiple accounts who want automated rules with guardrails." },
  { q: "Which channels does it support?", a: "Meta Ads, Google Ads, TikTok Ads, and more via connectors." },
  { q: "How is pricing structured?", a: "Tiered by managed ad spend. More spend and accounts unlock higher tiers and features." },
  { q: "Does it include reporting?", a: "Yes. Dashboards and Slack alerts help monitor performance and spend." },
  { q: "Can it pause/scale campaigns?", a: "Yes. Rules can pause, scale budgets, or adjust bids based on metrics." },
  { q: "Does it replace human oversight?", a: "No. Human strategy and QA are required; use rules as guardrails." },
  { q: "Is onboarding needed?", a: "Yes. Plan time to map rules, naming, and account structure before automation." },
];

function RevealbotToolPage() {
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
        "Revealbot automates ad rules, budgeting, and reporting across major ad platforms. It is useful for teams needing scaling guardrails and faster monitoring.",
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
      icon: <Rocket className="h-5 w-5 text-amber-500" />,
      title: "Rule-based automation",
      body: "Automate pausing, scaling, and bid changes based on performance thresholds.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-orange-600" />,
      title: "Budget management",
      body: "Shift budgets across campaigns and ad sets with guardrails to control spend.",
    },
    {
      icon: <Bell className="h-5 w-5 text-pink-500" />,
      title: "Alerts & notifications",
      body: "Send alerts to Slack/email when metrics cross targets or rules trigger.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Creative & audience automations",
      body: "Rotate creatives, manage audiences, and sync exclusions to keep sets fresh.",
    },
    {
      icon: <Folder className="h-5 w-5 text-slate-700" />,
      title: "Reporting & dashboards",
      body: "Build dashboards for clients and stakeholders with live performance data.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Multi-platform support",
      body: "Connect Meta, Google, TikTok, and more to centralize automations.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Revealbot review: pricing, features, pros & cons, and alternatives to evaluate it for ads automation and reporting."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-600" />
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
                  {toolName} keeps paid media performance on track with rules, alerts, and budget automations—human oversight still matters.
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
              {toolName} is an ads automation and reporting platform. It runs rules to pause, scale, or shift budgets; sends alerts; and centralizes performance reporting across ad networks.
            </p>
            <p className="mt-3 text-slate-700">Use it as guardrails to reduce reaction time, not as a replacement for channel strategy and creative testing.</p>
            <p className="mt-3 text-slate-700">Document rules and thresholds to keep teams aligned and avoid over-automation.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for performance marketers and agencies managing multiple accounts and needing faster controls.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Media buyers managing Meta, Google, and TikTok Ads at scale.",
                "Agencies needing repeatable rule sets and reporting per client.",
                "Teams wanting budget shift guardrails during promotions.",
                "Marketers who need fast alerts on CPA/ROAS swings.",
                "Ops teams enforcing naming and structure with automation.",
                "Brands seeking 24/7 monitoring without manual checks.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on rules, budgets, alerts, reporting, and cross-network coverage to protect performance.</p>
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
                  {toolName} prices by monthly ad spend. As spend and connected accounts increase, you unlock more rules, alerts, and support. Model costs against managed budgets.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start at a tier that covers your current spend and accounts; upgrade when you need more rules, seats, or faster support.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lower spend</td>
                    <td className="px-4 py-3">Testing/early automation</td>
                    <td className="px-4 py-3">Core rules, limited accounts</td>
                    <td className="px-4 py-3">Good to validate impact</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Scaling brands/agencies</td>
                    <td className="px-4 py-3">More rules, alerts, reporting</td>
                    <td className="px-4 py-3">Covers most active teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">High spend & support</td>
                    <td className="px-4 py-3">Highest limits, priority support</td>
                    <td className="px-4 py-3">Use if you manage many accounts</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Align pricing with ROAS/CPA targets; keep manual review for big budget moves.</p>
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
                  <li>Powerful rules for budgets, bids, and pacing.</li>
                  <li>Multi-platform coverage (Meta, Google, TikTok).</li>
                  <li>Alerts and reporting reduce reaction time.</li>
                  <li>Creative/audience automations keep sets fresh.</li>
                  <li>Useful for agencies with repeatable rule sets.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing tied to spend; costs rise as you scale.</li>
                  <li>Poorly set rules can pause winners or overspend.</li>
                  <li>Still needs human strategy and creative testing.</li>
                  <li>Setup requires clear naming and data hygiene.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other ads automation and reporting tools to fit your budget and channel mix.</p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other automation platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Madgicx</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/madgicx">
                  View Madgicx
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Madgicx blends automation with creative insights; {toolName} emphasizes flexible rules and alerts across networks. Choose based on whether creative scoring or rule depth matters more.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs native automated rules</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/facebook-ads">
                  View Meta Ads
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Native rules are channel-specific; {toolName} centralizes automation and reporting across platforms with richer conditions. Use {toolName} when you need cross-channel control and dashboards.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you manage sizable ad spend and want automation guardrails, alerts, and reporting to react faster.
            </p>
            <p className="mt-3 text-slate-700">Keep human review for creative and strategy; validate rules on test budgets before scaling.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong ads automation layer; best when paired with disciplined rule design and spend oversight.</p>
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
            <p>Choose {toolName} if you need cross-network ad automations, budget guardrails, and alerting to manage spend efficiently.</p>
            <p>Consider Madgicx or Triple Whale for creative analytics and incrementality views; use {toolName} when rule flexibility and reporting speed are priorities.</p>
            <p>{toolName} helps teams react faster—document rules and keep humans in the loop.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-amber-700 hover:text-amber-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default RevealbotToolPage;
