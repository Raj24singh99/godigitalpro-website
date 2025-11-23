import React from "react";
import { Sparkles, Crown, Layers, BarChart3, ArrowLeft, Gauge, Zap, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const canonical = buildCanonical("/tools/compare/aweber-vs-getresponse-vs-activecampaign");
const primaryKeyword = "aweber vs getresponse vs activecampaign";

const brandMeta = {
  aweber: {
    gradient: "from-blue-500 via-indigo-500 to-slate-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/aweber.com",
  },
  getresponse: {
    gradient: "from-emerald-500 via-teal-500 to-indigo-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/getresponse.com",
  },
  activecampaign: {
    gradient: "from-indigo-700 via-blue-600 to-slate-700",
    badge: "bg-indigo-100 text-indigo-900",
    logo: "https://logo.clearbit.com/activecampaign.com",
  },
};

const contenders = [
  { key: "aweber", name: "AWeber", blurb: "Fast newsletters, landing pages, strong inboxing.", url: "https://www.aweber.com/" },
  { key: "getresponse", name: "GetResponse", blurb: "Funnels, webinars, and ecommerce recommendations.", url: "https://www.getresponse.com/" },
  { key: "activecampaign", name: "ActiveCampaign", blurb: "Deep automation with CRM alignment and sales tools.", url: "https://www.activecampaign.com/" },
];

const comparisonRows = [
  { label: "Best for", aweber: "SMB newsletters & promos", getresponse: "SMBs needing funnels & webinars", activecampaign: "Automation-heavy sales/marketing" },
  { label: "Automation depth", aweber: "Core rules & splits", getresponse: "Visual workflows + scoring", activecampaign: "Advanced branching, CRM sync" },
  { label: "Funnels/landing pages", aweber: "Fast landing pages + payments", getresponse: "Funnel builder + webinars", activecampaign: "Landing pages + CRM-driven journeys" },
  { label: "Ecommerce features", aweber: "Cart follow-up, simple sales", getresponse: "Funnels, product recs, paid webinars", activecampaign: "Deep ecommerce automation + CRM" },
  { label: "Pricing feel", aweber: "Approachable for small lists", getresponse: "Value for funnels + webinars", activecampaign: "Priced for advanced automation/CRM" },
];

const scoreboard = [
  { label: "Ease of use", aweber: 9.0, getresponse: 8.6, activecampaign: 8.2 },
  { label: "Automation depth", aweber: 8.2, getresponse: 8.9, activecampaign: 9.4 },
  { label: "Funnels/landing pages", aweber: 8.5, getresponse: 9.1, activecampaign: 8.7 },
  { label: "Deliverability/reputation", aweber: 9.3, getresponse: 9.0, activecampaign: 9.0 },
  { label: "Value for money", aweber: 8.6, getresponse: 8.8, activecampaign: 8.0 },
];

const avg = (tool) => (scoreboard.reduce((sum, row) => sum + (row[tool] || 0), 0) / scoreboard.length).toFixed(1);
const averages = { aweber: avg("aweber"), getresponse: avg("getresponse"), activecampaign: avg("activecampaign") };
const overallWinner =
  Math.max(averages.aweber, averages.getresponse, averages.activecampaign) === parseFloat(averages.activecampaign)
    ? "ActiveCampaign"
    : Math.max(averages.getresponse, averages.aweber) === parseFloat(averages.getresponse)
      ? "GetResponse"
      : "AWeber";

const pricingTable = [
  { plan: "AWeber Lite/Plus", monthly: "From ~$15–$30/mo", annual: "Lower on annual", limits: "Subscriber caps by tier; landing pages", notes: "Best for simple newsletters + carts with great deliverability." },
  { plan: "GetResponse Marketing Automation", monthly: "From ~$59/mo", annual: "Lower on annual", limits: "Workflows, webinars, funnels", notes: "Strong for funnels, webinars, and ecommerce recs." },
  { plan: "ActiveCampaign Marketing/Plus", monthly: "From ~$49–$149/mo", annual: "Lower on annual", limits: "Advanced automation, scoring, CRM", notes: "Best for multistep journeys and sales alignment." },
];

const featureBullets = {
  automation: [
    "AWeber: Core automations and splits cover most SMB newsletters.",
    "GetResponse: Visual workflows with scoring; funnels and webinars included.",
    "ActiveCampaign: Deep branching, scoring, and CRM/object syncing for complex journeys.",
  ],
  funnels: [
    "AWeber: Quick landing pages and payments for simple promos.",
    "GetResponse: Full funnel builder, webinars, product recommendations.",
    "ActiveCampaign: Pages + CRM-driven journeys; leaner webinars than GetResponse.",
  ],
  ecommerce: [
    "AWeber: Abandoned cart and product blocks; simple enough for small shops.",
    "GetResponse: Paid webinars, recommendations, and funnels tuned for ecommerce.",
    "ActiveCampaign: Strong ecommerce automations, scoring, and sales pipeline sync.",
  ],
};

const faqs = [
  { q: `Who wins overall in ${YEAR}?`, a: "AWeber wins for simplicity and deliverability. GetResponse wins for funnels + webinars. ActiveCampaign wins for deep automation and CRM alignment." },
  { q: "When should I choose AWeber?", a: "Choose AWeber if you want fast newsletters, reliable inboxing, and simple automations without heavy setup." },
  { q: "When should I choose GetResponse?", a: "Choose GetResponse if you want funnels, webinars, and ecommerce recommendations packaged with email." },
  { q: "When should I choose ActiveCampaign?", a: "Choose ActiveCampaign if you need advanced branching, lead scoring, and tight CRM + sales automation." },
  { q: "Which is easiest to launch?", a: "AWeber is fastest to send. GetResponse is next with funnel templates. ActiveCampaign takes more setup for journeys/CRM." },
  { q: "Who wins for ecommerce?", a: "GetResponse for funnels/webinars; ActiveCampaign for deep lifecycle and CRM; AWeber for simple carts and promos." },
  { q: "Do they include landing pages?", a: "All three do. AWeber for simple pages, GetResponse for funnels/webinars, ActiveCampaign for CRM-driven journeys." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const prosCons = {
  aweber: {
    pros: ["Excellent deliverability reputation", "Very fast to launch newsletters", "Landing pages and payment blocks included"],
    cons: ["Automation is lighter than GetResponse/ActiveCampaign", "Designs feel simpler unless customized", "Fewer advanced segmentation options"],
  },
  getresponse: {
    pros: ["Funnels and webinars built-in", "Visual automation with scoring", "Ecommerce recommendations and product blocks"],
    cons: ["Pricing rises with list size", "UI can feel busy for beginners", "Webinars are capped by tier"],
  },
  activecampaign: {
    pros: ["Deep automation and branching", "Strong lead scoring and CRM sync", "Good ecommerce and sales alignment"],
    cons: ["Higher price for automation depth", "Setup/governance needed for complex journeys", "Fewer built-in webinar/funnel tools than GetResponse"],
  },
};

const LogoBadge = ({ name }) => {
  const key = name.toLowerCase();
  const meta = brandMeta[key] || { gradient: "from-slate-400 to-slate-600", badge: "bg-slate-100 text-slate-900" };
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}>
        {meta.logo ? <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" /> : <span className="text-sm font-bold text-white">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>{name}</span>
    </div>
  );
};

export default function AweberVsGetResponseVsActiveCampaignPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`AWeber vs GetResponse vs ActiveCampaign (${YEAR}) – ESP comparison`}
        description="Compare AWeber, GetResponse, and ActiveCampaign on automation depth, funnels, deliverability, pricing, UX, and best-fit use cases."
        canonical={canonical}
        keywords={`${primaryKeyword}, aweber review, getresponse review, activecampaign review, esp comparison`}
        schema={[faqSchema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Email automation</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">AWeber vs GetResponse vs ActiveCampaign ({YEAR})</h1>
        <p className="mt-4 text-lg text-slate-700">
          AWeber is the reliable starter. GetResponse bundles funnels and webinars. ActiveCampaign is the automation powerhouse. Here’s how they compare on automation, funnels, pricing, UX, and real-world fit.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {contenders.map((item) => (
            <div
              key={item.key}
              className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${brandMeta[item.key]?.gradient || "from-slate-500 to-slate-700"} p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={item.name} />
                <Workflow className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">{item.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-900">
              <Sparkles className="h-5 w-5" />
              <p className="text-lg font-semibold">Quick verdict</p>
            </div>
            <p className="mt-2 text-slate-800">
              Choose <strong>AWeber</strong> for the fastest newsletters and great deliverability, <strong>GetResponse</strong> for funnels + webinars bundled with email, and <strong>ActiveCampaign</strong> for the deepest
              automation with CRM alignment.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Crown className="h-4 w-4 text-indigo-700" /> Overall scoreboard winner: {overallWinner}{" "}
              <span className="text-xs text-slate-600">
                (avg: {overallWinner === "ActiveCampaign" ? averages.activecampaign : overallWinner === "GetResponse" ? averages.getresponse : averages.aweber}/10)
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-700">Pick by automation depth vs funnels vs simplicity: ActiveCampaign for depth, GetResponse for funnels/webinars, AWeber for simple sends.</p>
          </div>
        </div>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-indigo-700" /> Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">AWeber</th>
                  <th className="px-4 py-3">GetResponse</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                    <td className="px-4 py-3 text-slate-700">{row.aweber}</td>
                    <td className="px-4 py-3 text-slate-700">{row.getresponse}</td>
                    <td className="px-4 py-3 text-slate-700">{row.activecampaign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Criterion</th>
                  <th className="px-4 py-3">AWeber</th>
                  <th className="px-4 py-3">GetResponse</th>
                  <th className="px-4 py-3">ActiveCampaign</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const winner =
                    row.aweber === row.getresponse && row.getresponse === row.activecampaign
                      ? "Tie"
                      : Math.max(row.aweber, row.getresponse, row.activecampaign) === row.aweber
                        ? "AWeber"
                        : Math.max(row.getresponse, row.activecampaign) === row.getresponse
                          ? "GetResponse"
                          : "ActiveCampaign";
                  return (
                    <tr key={row.label}>
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.label}</th>
                      <td className={`px-4 py-3 ${winner === "AWeber" ? "font-semibold text-blue-700" : "text-slate-700"}`}>{row.aweber}</td>
                      <td className={`px-4 py-3 ${winner === "GetResponse" ? "font-semibold text-emerald-700" : "text-slate-700"}`}>{row.getresponse}</td>
                      <td className={`px-4 py-3 ${winner === "ActiveCampaign" ? "font-semibold text-indigo-700" : "text-slate-700"}`}>{row.activecampaign}</td>
                      <td className="px-4 py-3 font-semibold text-slate-800">{winner}</td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-blue-50 via-emerald-50 to-indigo-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">Average (winner overall)</th>
                  <td className="px-4 py-3 font-semibold text-blue-800">{averages.aweber}</td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">{averages.getresponse}</td>
                  <td className="px-4 py-3 font-semibold text-indigo-800">{averages.activecampaign}</td>
                  <td className="px-4 py-3 font-bold text-emerald-800 capitalize">{overallWinner}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-emerald-600" /> Feature Comparison
          </h2>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Automation & workflows</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.automation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Funnels & pages</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.funnels.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Ecommerce & personalization</h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.ecommerce.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing Snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 md:overflow-hidden shadow-sm">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Annual</th>
                  <th className="px-4 py-3">Limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">{row.plan}</th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-700">Price scales with list size; ActiveCampaign’s automation/CRM justifies higher tiers. GetResponse pricing adds funnels/webinars; AWeber stays simple.</p>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User Experience & Learning Curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>AWeber:</strong> Easiest to launch; classic layouts with simple automation.
            </li>
            <li>
              <strong>GetResponse:</strong> Moderate learning curve with funnels/webinars; templates help.
            </li>
            <li>
              <strong>ActiveCampaign:</strong> Steeper at first; powerful once journeys and CRM objects are mapped.
            </li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-World Use-Cases & Winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Newsletters + simple promos:</strong> AWeber wins for speed and inboxing.
            </li>
            <li>
              <strong>Funnels + webinars for offers:</strong> GetResponse wins with bundled funnel/webinar tooling.
            </li>
            <li>
              <strong>Sales-led lifecycle automation:</strong> ActiveCampaign wins with CRM, scoring, and multistep journeys.
            </li>
            <li>
              <strong>Ecommerce recommendations/abandon:</strong> GetResponse for funnels/recs; ActiveCampaign for deeper lifecycle and CRM signals.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">AWeber</h3>
              <p className="text-sm text-slate-700">Best for small lists needing quick newsletters and strong inboxing with simple pages.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Subscriber-based; predictable</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">GetResponse</h3>
              <p className="text-sm text-slate-700">Best for funnels, webinars, and ecommerce recommendations in one ESP.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Value for funnels/webinars; rises with list</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">ActiveCampaign</h3>
              <p className="text-sm text-slate-700">Best for advanced branching, scoring, and CRM-driven sales/marketing alignment.</p>
              <p className="text-sm font-semibold text-emerald-700">Pricing: Higher for automation/CRM depth</p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link to="/tools" className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-emerald-700 ring-1 ring-emerald-100 hover:bg-emerald-50">
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
