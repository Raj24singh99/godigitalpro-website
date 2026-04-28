import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Heepsy";
const slug = "heepsy";
const category = "Influencer Marketing";
const shortPitch =
  "Heepsy is an influencer discovery platform with audience filters, fraud detection signals, and exports for outreach and campaign planning.";
const pricingSummary =
  "Subscription tiers based on searches, exports, and analytics depth. Higher tiers add contact data, reporting, and team seats.";
const officialUrl = "https://www.heepsy.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/heepsy.com",
  gradient: "from-amber-500 via-rose-500 to-red-500",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.24)]",
};

const alternatives = [
  { name: "Modash", slug: "modash" },
  { name: "Klear", slug: "klear" },
  { name: "Aspire", slug: "aspireiq" },
  { name: "Creator.co", slug: "creator-co" },
  { name: "Grin", slug: "grin" },
];

const faqs = [
  {
    q: "What is Heepsy?",
    a: "Heepsy is an influencer discovery tool that lets you search creators by audience, engagement, location, and niche, with contact data and reports for outreach.",
  },
  {
    q: "Who is it for?",
    a: "Marketers and agencies running influencer campaigns who need searchable creator databases and exportable contact lists.",
  },
  {
    q: "Does Heepsy provide audience analytics?",
    a: "Yes. It offers audience demographics, authenticity signals, and engagement metrics depending on plan.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription tiers with limits on searches, lists, exports, and analytics depth. Higher tiers add email/contact details and reports.",
  },
  {
    q: "Does it support outreach?",
    a: "You can export lists with contacts for outreach. Some plans include in-platform messaging; many users pair it with email/CRM tools.",
  },
  {
    q: "Which platforms are covered?",
    a: "Instagram, TikTok, YouTube, and others. Coverage varies by region and niche.",
  },
  {
    q: "How reliable is fraud detection?",
    a: "Heepsy provides engagement quality signals; you should still review manually and request first-party analytics from creators.",
  },
  {
    q: "Is it a full influencer CRM?",
    a: "Discovery-focused. For end-to-end CRM, consider pairing with campaign management or payments tools.",
  },
];

function HeepsyToolPage() {
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
        "Heepsy focuses on influencer discovery with audience filters and authenticity signals. It is useful for list-building and initial vetting; pair it with CRM/payment tools for full campaign ops.",
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
      title: "Influencer discovery",
      body: "Search by audience size, location, niche, and engagement.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Authenticity signals",
      body: "Quality scores and engagement data to spot suspicious accounts.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Lists & exports",
      body: "Save creators to lists and export contact data for outreach.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Audience insights",
      body: "Demographics and interests on higher tiers to match your ICP.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Reporting",
      body: "Generate reports to share with stakeholders and clients.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Platform coverage",
      body: "Support for Instagram, TikTok, YouTube and more (coverage varies).",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Heepsy review: pricing, features, pros & cons, and alternatives to help you choose an influencer discovery platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />
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
                  {toolName} helps you find and vet influencers faster—use filters, check authenticity signals, and export contacts for outreach.
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
              {toolName} is an influencer discovery database. You can filter creators, review audience quality signals, and export contact details to start outreach and campaign planning.
            </p>
            <p className="mt-3 text-slate-700">It’s a discovery-first tool. Many teams pair it with influencer CRMs, payment tools, or platforms like GRIN for end-to-end management.</p>
            <p className="mt-3 text-slate-700">Use it to build prospect lists, vet engagement, and brief creators that match your brand.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that need influencer discovery and contact exports without a heavy CRM.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Brands and agencies sourcing new creators by niche and region.",
                "Campaign managers who need audience authenticity signals.",
                "Teams building outreach lists with contact data and exports.",
                "Marketers validating audience demographics against ICP.",
                "Programs that already manage payments elsewhere but need discovery.",
                "Teams that want quick reports to align stakeholders on creator picks.",
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
            <p className="mt-3 text-slate-700">{toolName} centers on discovery, authenticity checks, and exports for outreach.</p>
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
                  Plans scale by number of searches, lists, exports, and analytics. Higher tiers add contact emails, reports, and more profiles. Expect price jumps when you need more exports or deeper data.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower tier to validate coverage; upgrade when you need higher export volumes and audience analytics.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lower/Starter</td>
                    <td className="px-4 py-3">Testing coverage</td>
                    <td className="px-4 py-3">Limited searches, lists, exports</td>
                    <td className="px-4 py-3">Good for validation</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid/Growth</td>
                    <td className="px-4 py-3">Active campaigns</td>
                    <td className="px-4 py-3">More searches/exports, audience analytics</td>
                    <td className="px-4 py-3">Often sweet spot for teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Top/Agency</td>
                    <td className="px-4 py-3">High-volume sourcing</td>
                    <td className="px-4 py-3">Highest limits, contact data, reports</td>
                    <td className="px-4 py-3">Consider if you run multiple clients</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan separate budget for influencer payments and seeding. Validate regional coverage before committing to higher tiers.
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
                  <li>Fast discovery with robust filtering.</li>
                  <li>Audience and engagement signals for vetting.</li>
                  <li>Exports and contact data simplify outreach.</li>
                  <li>Reports help align stakeholders on picks.</li>
                  <li>Coverage across major social platforms.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Discovery-focused; campaign CRM and payments are limited.</li>
                  <li>Coverage depth can vary by region/niche.</li>
                  <li>Higher tiers needed for more exports and contact data.</li>
                  <li>Fraud signals should be paired with manual review.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other influencer discovery and management tools.</p>
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
            <p className="text-slate-700">See how {toolName} stacks against other influencer tools.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Modash</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/modash">
                  View Modash
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Modash is strong on audience filtering and authenticity; {toolName} offers similar discovery with accessible pricing. Compare coverage in your regions and export limits before choosing.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Aspire</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/aspireiq">
                  View Aspire
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Aspire includes campaign workflows and creator relationships; {toolName} focuses on discovery and exports. Choose Aspire for end-to-end programs, {toolName} for list-building and vetting.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need influencer discovery, authenticity checks, and exports without paying for a heavy CRM suite.
            </p>
            <p className="mt-3 text-slate-700">Pair it with your outreach, contracts, and payment tools, and verify coverage in your markets before scaling tiers.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid discovery tool for building and vetting influencer lists; best when combined with a clear outreach and compliance workflow.
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
            <p>Choose {toolName} if you need fast influencer discovery with exports and basic authenticity signals.</p>
            <p>Pick Modash/Klear if you want deeper analytics, or GRIN if you need full CRM + payments.</p>
            <p>{toolName} works best when paired with strong outreach processes and manual vetting of creators.</p>
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

export default HeepsyToolPage;
