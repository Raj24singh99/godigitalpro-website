import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "ClickMagick";
const slug = "clickmagick";
const category = "Click Tracking & Attribution";
const shortPitch =
  "ClickMagick is a click tracking and attribution platform for affiliates and funnel builders, offering link cloaking, pixel tracking, rotators, and conversion reporting.";
const pricingSummary =
  "Starter plans typically begin around $69/month with higher tiers adding more clicks, funnels, and advanced tracking features. All plans include link cloaking, rotators, and basic attribution.";
const officialUrl = "https://www.clickmagick.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/clickmagick.com",
  gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Voluum", slug: "voluum" },
  { name: "RedTrack", slug: "redtrack" },
  { name: "Google Analytics 4", slug: "matomo" },
  { name: "Fathom Analytics", slug: "fathom-analytics" },
  { name: "Pabbly", slug: "pabbly" },
];

const faqs = [
  { q: "What is ClickMagick used for?", a: "ClickMagick tracks clicks, conversions, and ROI across funnels. It offers link cloaking, rotators, A/B testing, and attribution so affiliates and marketers can optimize traffic sources." },
  { q: "Is ClickMagick good for affiliates?", a: "Yes. Affiliates use ClickMagick for postback URLs, link cloaking, traffic distribution, and bot filtering to protect budgets and see which offers convert." },
  { q: "Does ClickMagick support postbacks and pixels?", a: "ClickMagick supports pixels and server-side postbacks so you can track conversions accurately across ad networks and offers." },
  { q: "Can I run split tests?", a: "Yes. You can A/B test landing pages and offers with link rotators and measure conversion uplifts in the reporting dashboard." },
  { q: "How does pricing work?", a: "Plans scale by tracked clicks and funnels. Higher tiers add more data retention, advanced tracking, and subaccounts. Trials are frequently available." },
  { q: "Does ClickMagick integrate with ad networks?", a: "You can integrate via pixels/postbacks, UTMs, and templates for common networks. Webhooks and Zapier support more custom workflows." },
  { q: "Is ClickMagick privacy-friendly?", a: "It supports cookieless tracking options, bot filtering, link cloaking, and GDPR-friendly settings. You can also exclude IPs and sensitive parameters." },
  { q: "Which plan should I start with?", a: "Start with the entry plan if you run a few offers or funnels. Move up when you need more clicks, funnels, or team usage with subaccounts." },
];

function ClickMagickToolPage() {
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
        "ClickMagick is a budget-friendly click tracker that helps affiliates and funnel marketers measure conversions, rotate traffic, and protect budgets with bot filtering and link cloaking.",
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
      icon: <Link2 className="h-5 w-5 text-emerald-500" />,
      title: "Link cloaking and tracking",
      body: "Clean up affiliate links, add UTMs, and track clicks by source, device, and geo to see which campaigns pay off.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-cyan-500" />,
      title: "Postbacks and pixels",
      body: "Support for pixels and server-side postbacks improves accuracy across ad networks and offers, reducing under-reporting.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Split testing and rotators",
      body: "Rotate traffic across landing pages or offers, run A/B tests, and automatically weight winners to maximize ROI.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and webhooks",
      body: "Connect to ad networks, CRMs, and automation tools via templates, webhooks, and Zapier to sync conversions and audiences.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Bot filtering and compliance",
      body: "Filter bots, block bad clicks, exclude IPs, and use GDPR-friendly settings to keep data clean and campaigns compliant.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Funnel and revenue reporting",
      body: "Track revenue per source, EPC, CPA, and LTV so you can quickly pause losers and scale winners.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="ClickMagick review for affiliates and funnel builders: pricing, features, pros & cons, alternatives, and comparisons vs Voluum or RedTrack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-200 blur-3xl" />
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
                  ClickMagick helps affiliates and funnel builders track, test, and protect traffic with link cloaking, rotators, and clean attribution without enterprise spend.
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
              {toolName} is a {category.toLowerCase()} tool that tracks clicks, conversions, and revenue across campaigns. It cloaks links, filters bots, and routes traffic so marketers can optimize spend.
            </p>
            <p className="mt-3 text-slate-700">
              Affiliates, paid media teams, and funnel builders use it to test offers, measure EPC/CPA, and keep data accurate via postbacks or pixels.
            </p>
            <p className="mt-3 text-slate-700">
              Compared with enterprise trackers, ClickMagick emphasizes ease and value, making it a good fit for SMBs and solo performance marketers.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits performance marketers and affiliates who want affordable, accurate tracking.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Affiliate marketers needing link cloaking, rotators, and EPC tracking.",
                "Funnel builders testing multiple landing pages and offers.",
                "Paid media teams routing traffic by device/geo and filtering bots.",
                "SMBs running lead-gen and wanting simple attribution without heavy analytics.",
                "Agencies managing smaller budgets that don’t justify enterprise trackers.",
                "Creators selling digital products who need ROI per traffic source.",
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
            <p className="mt-3 text-slate-700">{toolName} focuses on fast setup, reliable tracking, and traffic protection for budget-conscious marketers.</p>
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
                  Plans scale by monthly tracked clicks, funnels, and data retention. All tiers include core tracking, rotators, link cloaking, and bot filtering.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the entry plan to validate campaigns; upgrade as click volume and funnels expand.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Small funnels and affiliates</td>
                    <td className="px-4 py-3">Core tracking, rotators, link cloaking, basic attribution</td>
                    <td className="px-4 py-3">~$69/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Growing performance teams</td>
                    <td className="px-4 py-3">More clicks/funnels, longer retention, better reporting</td>
                    <td className="px-4 py-3">$69–$149/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">High-volume affiliates and agencies</td>
                    <td className="px-4 py-3">Highest limits, subaccounts, priority support</td>
                    <td className="px-4 py-3">$149+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate based on monthly click volume and number of funnels/offers. Postback integrations and bot filtering should be set early to keep data clean as you scale.
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
                  <li>Affordable compared to enterprise trackers.</li>
                  <li>Simple setup with pixel/postback support.</li>
                  <li>Rotators and A/B testing built in for fast optimization.</li>
                  <li>Bot filtering and link cloaking protect budgets.</li>
                  <li>Useful reporting on EPC, ROI, and conversion paths.</li>
                  <li>Works across multiple ad networks with templates and webhooks.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Automation depth and rule-based routing are lighter than Voluum/RedTrack.</li>
                  <li>Enterprise client/workspace management is limited.</li>
                  <li>Reporting customization is basic compared to BI-focused tools.</li>
                  <li>Click limits require monitoring on high-traffic campaigns.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              ClickMagick competes with heavier ad trackers and analytics tools. Pick based on budget, automation, and client/workspace management needs.
            </p>
            <p className="mt-2 text-slate-700">All track conversions; they differ on automation, integrations, and reporting depth.</p>
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
            <p className="text-slate-700">Here’s how ClickMagick stacks up against larger trackers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Voluum</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/voluum-vs-redtrack-vs-clickmagick">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Voluum is enterprise-grade with deep automation and cost integration. ClickMagick is simpler and cheaper, ideal for smaller budgets and solo affiliates.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ClickMagick for ease and value; choose Voluum if you need advanced rules, auto-optimization, and multi-client governance.
              </p>
              <p className="mt-2 text-slate-900">Voluum wins on automation; ClickMagick wins on price and simplicity.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs RedTrack</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/voluum-vs-redtrack-vs-clickmagick">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                RedTrack offers cost synchronization, BI exports, and better workspace controls. ClickMagick keeps costs low with straightforward tracking and testing.
              </p>
              <p className="mt-2 text-slate-700">
                Choose ClickMagick for budget-friendly tracking; choose RedTrack for automation, multi-account management, and richer reporting.
              </p>
              <p className="mt-2 text-slate-900">Both provide postbacks and bot filtering—pick based on automation and client needs.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for affiliates and SMB marketers who need accurate tracking, cloaking, and split testing without enterprise costs or complexity. It’s quick to set up and keeps budgets protected.
            </p>
            <p className="mt-3 text-slate-700">
              If you need heavy automation, client workspaces, or deep cost integrations, consider RedTrack or Voluum. Otherwise, ClickMagick offers strong ROI for most lean teams.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> ClickMagick is a practical, value-focused tracker for funnels and affiliate campaigns that want reliable attribution and testing on a budget.
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
              Choose ClickMagick if you want clean tracking, split tests, and bot filtering without paying for heavy automation. It’s strong for affiliates, funnels, and SMB lead-gen.
            </p>
            <p>
              Consider Voluum or RedTrack for advanced rules and multi-client setups, or pair ClickMagick with your analytics stack if you need deeper reporting elsewhere.
            </p>
            <p>{toolName} integrates with ad platforms, CRMs, and automation tools so you can keep optimization loops tight.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
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
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default ClickMagickToolPage;
