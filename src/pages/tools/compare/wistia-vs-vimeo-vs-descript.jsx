import React from "react";
import {
  Sparkles,
  Gauge,
  Layers,
  Zap,
  Crown,
  ArrowLeft,
  Mic2,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import ProsConsSection from "../../../components/ProsConsSection.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const YEAR = new Date().getFullYear();
const primaryKeyword = "wistia vs vimeo vs descript";
const canonical = buildCanonical("/tools/compare/wistia-vs-vimeo-vs-descript");

const brandMeta = {
  wistia: {
    gradient: "from-sky-500 via-indigo-500 to-purple-500",
    badge: "bg-sky-100 text-sky-900",
    logo: "https://logo.clearbit.com/wistia.com",
  },
  vimeo: {
    gradient: "from-slate-500 via-blue-500 to-indigo-600",
    badge: "bg-blue-100 text-blue-900",
    logo: "https://logo.clearbit.com/vimeo.com",
  },
  descript: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "bg-emerald-100 text-emerald-900",
    logo: "https://logo.clearbit.com/descript.com",
  },
};

const contenders = [
  {
    key: "wistia",
    name: "Wistia",
    blurb: "Marketing video hosting with CTAs, lead capture, podcast hosting, and analytics.",
    url: "https://wistia.com",
  },
  {
    key: "vimeo",
    name: "Vimeo",
    blurb: "Branded video hosting/OTT and client delivery with strong player control.",
    url: "https://vimeo.com",
  },
  {
    key: "descript",
    name: "Descript",
    blurb: "AI-powered editing + recording with publishing to YouTube, podcasts, and socials.",
    url: "https://www.descript.com",
  },
];

const comparisonRows = [
  {
    label: "Primary use case",
    wistia: "Marketing funnel hosting with CTAs, lead capture, podcasts, and analytics.",
    vimeo: "Client delivery, OTT streaming, portfolios, and general-purpose hosting.",
    descript: "Recording, editing, overdub, and publishing for creators and teams.",
  },
  {
    label: "Lead capture + CTAs",
    wistia: "Built-in Turnstile forms, annotations, email capture, and HubSpot/Marketo sync.",
    vimeo: "Add-ons via forms/events; not natively marketing-focused.",
    descript: "Focuses on editing; CTAs require exporting to another platform (e.g. Wistia, YouTube).",
  },
  {
    label: "Editing tools",
    wistia: "Basic trimming + Soapbox recorder; serious editing happens elsewhere.",
    vimeo: "Minor trimming, chaptering, and review tools.",
    descript:
      "Full multi-track editing, AI overdub, transcription, screen/cam recording, and collaboration.",
  },
  {
    label: "Analytics",
    wistia:
      "Per-viewer heatmaps, play rates, conversions, and attribution into CRM/MA tools.",
    vimeo: "Solid engagement analytics, OTT dashboards, and Google Analytics integrations.",
    descript: "Project-level analytics; no granular viewer-level marketing data.",
  },
  {
    label: "Integrations",
    wistia:
      "HubSpot, Marketo, Pardot, Salesforce, Zapier, Drift, Intercom, email tools, and more.",
    vimeo: "Zapier, live events, OTT apps, GA, social publishing, review workflows.",
    descript:
      "YouTube, TikTok, podcast feeds, Slack, Zoom, Drive, and direct export to social platforms.",
  },
  {
    label: "Best fit",
    wistia: "Marketing teams where video is part of an owned funnel and CRM strategy.",
    vimeo: "Studios, agencies, and brands delivering video to clients or OTT apps.",
    descript: "Podcast teams, YouTubers, and content marketers focused on production speed.",
  },
];

const scoreboard = [
  { label: "Marketing + lead capture", scores: { wistia: 9.6, vimeo: 8.0, descript: 6.8 } },
  { label: "Editing/recording workflow", scores: { wistia: 6.8, vimeo: 6.5, descript: 9.4 } },
  { label: "Player branding + control", scores: { wistia: 9.2, vimeo: 9.4, descript: 7.2 } },
  { label: "Analytics + attribution", scores: { wistia: 9.3, vimeo: 8.1, descript: 6.9 } },
  { label: "Value for purpose", scores: { wistia: 8.4, vimeo: 8.8, descript: 9.0 } },
];

const avg = (key) => {
  const total = scoreboard.reduce((sum, row) => sum + (row.scores[key] || 0), 0);
  return (total / scoreboard.length).toFixed(1);
};

const averages = {
  wistia: avg("wistia"),
  vimeo: avg("vimeo"),
  descript: avg("descript"),
};

const overallWinnerKey = Object.entries(averages).sort(
  (a, b) => Number(b[1]) - Number(a[1])
)[0][0];

const overallWinnerLabel =
  overallWinnerKey === "wistia"
    ? "Wistia"
    : overallWinnerKey === "vimeo"
    ? "Vimeo"
    : "Descript";

const pricingTable = [
  {
    plan: "Wistia Plus / Pro",
    monthly: "From around ~$24/mo",
    annual: "Lower effective rate on annual",
    limits: "Hosted videos, channels, CTAs, lead capture, integrations",
    notes: "Best when video is part of your owned marketing funnel.",
  },
  {
    plan: "Vimeo Standard / Advanced",
    monthly: "From around ~$25/mo",
    annual: "Starts around ~$20/mo billed annually",
    limits: "Player branding, live streaming, OTT apps, collaboration",
    notes: "Great for client delivery and OTT-style distribution.",
  },
  {
    plan: "Descript Creator / Pro",
    monthly: "From ~$12–$24/mo",
    annual: "Cheaper when billed annually",
    limits: "Recording, editing, transcription, overdub, project limits",
    notes: "Ideal for podcasters, YouTubers, and content teams shipping often.",
  },
];

const faqs = [
  {
    q: `Is Wistia better than Vimeo or Descript in ${YEAR}?`,
    a: "Wistia is best for marketing teams that need lead capture, CTAs, and CRM attribution on owned landing pages. Vimeo is stronger for general hosting, client delivery, and OTT streaming. Descript wins for editing/recording workflows.",
  },
  {
    q: "Do I still need an editor if I pick Wistia?",
    a: "Yes. Wistia focuses on hosting, embeds, and analytics—not editing. Most teams edit in tools like Descript, Premiere, or Final Cut, then upload into Wistia.",
  },
  {
    q: "Can Descript replace Wistia?",
    a: "Descript lets you record, edit, and publish to YouTube, podcasts, and socials, but it does not replace on-site hosting with CTAs/CRM integrations. Many teams use Descript for production and Wistia or Vimeo for hosting.",
  },
  {
    q: "Who should choose Vimeo?",
    a: "Pick Vimeo when you need affordable, high-quality hosting, OTT distribution, or polished players for client deliveries and review—without deep marketing automation requirements.",
  },
  {
    q: "Can I use all three together?",
    a: "Yes. A common stack is Descript for editing, Wistia for marketing videos and lead capture, and Vimeo for client review or OTT delivery.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const prosCons = {
  wistia: {
    pros: [
      "Lead capture forms and CTAs built directly into the player",
      "Viewer-level heatmaps, events, and CRM/MA sync for attribution",
      "Podcast hosting, channels, and series for content hubs",
      "Secure sharing, domain restrictions, and brandable players",
    ],
    cons: [
      "Requires an external editor (e.g. Descript, Premiere, Final Cut)",
      "Higher cost than generic hosting alternatives",
      "Video limits and overages on lower tiers",
    ],
  },
  vimeo: {
    pros: [
      "Strong player branding and embed control for client work",
      "Live streaming and OTT app distribution on higher tiers",
      "Affordable storage and generous bandwidth for most teams",
      "Client review tools and private share links",
    ],
    cons: [
      "Lead capture and marketing features are limited vs Wistia",
      "Analytics are less granular for per-contact attribution",
      "Automation and CRM workflows rely heavily on third-party tools",
    ],
  },
  descript: {
    pros: [
      "All-in-one recording, editing, transcription, and publishing",
      "AI overdub, filler-word removal, and text-based editing",
      "Collaboration, commenting, and version control for teams",
      "Direct publish to YouTube, TikTok, podcast feeds, and more",
    ],
    cons: [
      "Needs external hosting for fully branded embeds and CTAs",
      "No native lead capture or deep marketing analytics",
      "Project and storage limits can require upgrades for heavy users",
    ],
  },
};

const featureBullets = {
  workflow: [
    "Wistia: Light editing only; built for post-production hosting once your video is final.",
    "Vimeo: Basic trimming and chaptering; the workflow assumes you edit elsewhere and upload.",
    "Descript: Script, record, edit, overdub, and export in one place for podcasts and video.",
  ],
  hosting: [
    "Wistia: Opinionated marketing hosting for sites, hubs, and podcasts with conversion tools.",
    "Vimeo: Flexible hosting for portfolios, client delivery, OTT apps, and livestreams.",
    "Descript: Not a traditional host—export files or publish to external platforms.",
  ],
  analytics: [
    "Wistia: Viewer-level data tied to your CRM and marketing automation tools.",
    "Vimeo: Engagement metrics and dashboards, strong enough for studios and OTT.",
    "Descript: High-level performance per project; not designed for funnel analytics.",
  ],
};

const LogoBadge = ({ name }) => {
  const meta =
    brandMeta[name.toLowerCase()] || {
      gradient: "from-slate-400 to-slate-600",
      badge: "bg-slate-100 text-slate-900",
    };

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${meta.gradient}`}
      >
        {meta.logo ? (
          <img src={meta.logo} alt={`${name} logo`} className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.badge}`}>
        {name}
      </span>
    </div>
  );
};

export default function WistiaVsVimeoVsDescriptPage() {
  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={`Wistia vs Vimeo vs Descript – Honest Comparison (${YEAR})`}
        description="Compare Wistia, Vimeo, and Descript for marketing video hosting, OTT delivery, recording/editing workflows, analytics, and which mix is right for your team."
        canonical={canonical}
        keywords={`${primaryKeyword}, wistia vs vimeo, wistia vs descript, video hosting comparison, video marketing tools`}
        schema={[schema]}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          Video platforms
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
          Wistia vs Vimeo vs Descript ({YEAR})
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          <strong>Wistia</strong> is built for marketers who treat video as part of their funnel.{" "}
          <strong>Vimeo</strong> is the flexible host for client delivery, OTT, and portfolios.{" "}
          <strong>Descript</strong> is the AI-powered editor and recorder you use before you host. Use this
          breakdown to decide which platform (or combination) actually fits your video strategy.
        </p>

        {/* Quick verdict + best for content teams */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="space-y-3 rounded-3xl bg-sky-50/90 p-6 ring-1 ring-sky-100 md:col-span-2">
            <div className="flex items-center gap-2 text-lg font-semibold text-sky-800">
              <Sparkles className="h-5 w-5" /> Quick verdict
            </div>
            <p className="text-base text-slate-800">
              Choose <strong>Wistia</strong> when you need marketing-ready hosting with lead capture,
              CTAs, and CRM integrations. Choose <strong>Vimeo</strong> for general hosting, OTT, and
              polished client deliveries. Choose <strong>Descript</strong> when editing, overdub, and
              fast content production are your bottlenecks.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-sky-800">
              <Crown className="h-4 w-4" /> Overall scoreboard winner: {overallWinnerLabel}{" "}
              <span className="text-xs font-medium text-sky-700">
                (avg: {averages[overallWinnerKey]}/10)
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Mic2 className="h-5 w-5 text-sky-700" /> Best for content teams
            </div>
            <p className="text-sm text-slate-700">
              <strong>Descript</strong> gives content teams a single place to record, edit, and publish
              podcasts, shorts, and tutorials—before handing off to Wistia or Vimeo for hosting.
            </p>
          </div>
        </div>

        {/* Top contender cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contenders.map((card) => (
            <a
              key={card.key}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${
                brandMeta[card.key]?.gradient || "from-slate-500 to-slate-700"
              } p-5 shadow-md`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white" />
              </div>
              <div className="relative flex items-start justify-between">
                <LogoBadge name={card.name} />
                <Sparkles className="h-5 w-5 text-white/80" />
              </div>
              <p className="relative mt-3 text-sm font-medium text-white/90">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>

        {/* Side-by-side comparison */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Layers className="h-6 w-6 text-sky-600" /> Side-by-side comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Wistia</th>
                  <th className="px-4 py-3">Vimeo</th>
                  <th className="px-4 py-3">Descript</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.wistia}</td>
                    <td className="px-4 py-3 text-slate-700">{row.vimeo}</td>
                    <td className="px-4 py-3 text-slate-700">{row.descript}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Scoreboard */}
        <section className="mt-10 space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <BarChart3 className="h-6 w-6 text-indigo-600" /> Scoreboard (1–10)
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Dimension</th>
                  <th className="px-4 py-3">Wistia</th>
                  <th className="px-4 py-3">Vimeo</th>
                  <th className="px-4 py-3">Descript</th>
                  <th className="px-4 py-3">Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {scoreboard.map((row) => {
                  const wistiaScore = row.scores.wistia;
                  const vimeoScore = row.scores.vimeo;
                  const descriptScore = row.scores.descript;
                  const winnerValue = Math.max(wistiaScore, vimeoScore, descriptScore);
                  const winnerKey =
                    winnerValue === wistiaScore
                      ? "wistia"
                      : winnerValue === vimeoScore
                      ? "vimeo"
                      : "descript";
                  const winnerLabel =
                    winnerKey === "wistia"
                      ? "Wistia"
                      : winnerKey === "vimeo"
                      ? "Vimeo"
                      : "Descript";

                  return (
                    <tr key={row.label} className="odd:bg-white even:bg-slate-50/50">
                      <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                        {row.label}
                      </th>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "wistia"
                            ? "font-semibold text-sky-800"
                            : "text-slate-700"
                        }`}
                      >
                        {wistiaScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "vimeo"
                            ? "font-semibold text-blue-800"
                            : "text-slate-700"
                        }`}
                      >
                        {vimeoScore}
                      </td>
                      <td
                        className={`px-4 py-3 ${
                          winnerKey === "descript"
                            ? "font-semibold text-emerald-800"
                            : "text-slate-700"
                        }`}
                      >
                        {descriptScore}
                      </td>
                      <td className="px-4 py-3 font-semibold text-slate-800">
                        {winnerLabel}
                      </td>
                    </tr>
                  );
                })}
                <tr className="bg-gradient-to-r from-sky-50 via-blue-50 to-emerald-50">
                  <th className="px-4 py-3 font-semibold text-slate-900">
                    Average (winner overall)
                  </th>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {averages.wistia}
                  </td>
                  <td className="px-4 py-3 font-semibold text-blue-800">
                    {averages.vimeo}
                  </td>
                  <td className="px-4 py-3 font-semibold text-emerald-800">
                    {averages.descript}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {overallWinnerLabel}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Feature comparison */}
        <section className="mt-10 space-y-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Gauge className="h-6 w-6 text-sky-600" /> Feature comparison
          </h2>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Mic2 className="h-5 w-5 text-sky-600" /> Creation & editing workflow
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.workflow.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Layers className="h-5 w-5 text-indigo-600" /> Hosting, players & distribution
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.hosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-semibold">
              <Zap className="h-5 w-5 text-emerald-600" /> Analytics & performance
            </h3>
            <ul className="space-y-2 text-slate-700">
              {featureBullets.analytics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing snapshots */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Pricing snapshots</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:overflow-hidden">
            <table className="w-full min-w-[680px] text-left text-sm md:text-base">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Monthly (approx.)</th>
                  <th className="px-4 py-3">Annual (approx.)</th>
                  <th className="px-4 py-3">Key limits</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pricingTable.map((row) => (
                  <tr key={row.plan}>
                    <th className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                      {row.plan}
                    </th>
                    <td className="px-4 py-3 text-slate-700">{row.monthly}</td>
                    <td className="px-4 py-3 text-slate-700">{row.annual}</td>
                    <td className="px-4 py-3 text-slate-700">{row.limits}</td>
                    <td className="px-4 py-3 text-slate-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600">
            Pricing changes frequently and can vary by region, usage, and promos. Always confirm
            current tiers, video limits, and usage policies on each vendor’s official pricing page
            before committing.
          </p>
        </section>

        {/* UX & learning curve */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">User experience & learning curve</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>Wistia:</strong> Easy for marketers to manage channels, embeds, CTAs, and
              analytics once the video is produced. The learning curve is light if you come from
              marketing automation or CRM tools.
            </li>
            <li>
              <strong>Vimeo:</strong> Familiar to most video teams; straightforward for client
              deliveries, review links, and portfolios. Advanced livestream/OTT features add some
              complexity but are optional.
            </li>
            <li>
              <strong>Descript:</strong> Initially different if you come from timeline-based NLEs,
              but the text-first editing model becomes very fast for talk-heavy content and
              podcasts.
            </li>
          </ul>
        </section>

        {/* Real-world use-cases */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Real-world use-cases & winners</h2>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>SaaS & B2B marketing teams:</strong> Wistia wins with lead capture, CTAs,
              and CRM attribution powering product tours and webinars on owned pages.
            </li>
            <li>
              <strong>Agencies and production studios:</strong> Vimeo wins for client review,
              portfolios, and OTT distribution while keeping costs predictable.
            </li>
            <li>
              <strong>Podcasters, YouTubers, and content creators:</strong> Descript wins as your
              daily driver for scripting, recording, editing, and repurposing content.
            </li>
            <li>
              <strong>Full-funnel video strategy:</strong> Use Descript to produce content, Wistia
              to host and convert traffic, and Vimeo where you need OTT or client deliveries.
            </li>
          </ul>
        </section>

        {/* Pros & Cons */}
        <section className="mt-12">
          <ProsConsSection contenders={contenders} prosCons={prosCons} />
        </section>

        {/* Who wins for… */}
        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Who wins for…</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Wistia</h3>
              <p className="text-sm text-slate-700">
                Best for marketing teams that treat video like a performance channel with CTAs,
                lead capture, and CRM-connected analytics.
              </p>
              <p className="mt-2 text-sm font-semibold text-sky-700">
                Ideal for: B2B SaaS, product-led growth teams, marketing agencies.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Vimeo</h3>
              <p className="text-sm text-slate-700">
                Best for client delivery, portfolios, livestreams, and OTT apps where brandable
                players and stable hosting matter most.
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-700">
                Ideal for: Studios, creative agencies, educators, and event producers.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
              <h3 className="text-lg font-semibold">Descript</h3>
              <p className="text-sm text-slate-700">
                Best for scripting, recording, editing, and repurposing content at scale across
                podcasts, video, and social clips.
              </p>
              <p className="mt-2 text-sm font-semibold text-emerald-700">
                Ideal for: Content teams, solo creators, and marketers shipping high volumes of
                talk-based content.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-1 text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 flex items-center gap-2 text-sm text-slate-600">
          <Link
            to="/tools"
            className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sky-700 ring-1 ring-sky-100 hover:bg-sky-50"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
