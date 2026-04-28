import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, BarChart3, TrendingUp, Bell, ClipboardList, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "VidIQ";
const slug = "vidiq";
const category = "YouTube SEO & Analytics";
const shortPitch =
  "VidIQ is a YouTube intelligence platform that surfaces keywords, competitor data, and AI ideas so creators, agencies, and brands can grow their channels with less guesswork.";
const pricingSummary =
  "Freemium with paid plans from around $10/month for Pro, $49/month for Boost, and custom Max tiers that add coaching, multi-channel workspaces, and trend alerts.";
const officialUrl = "https://vidiq.com";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vidiq.com",
  gradient: "from-sky-500 via-blue-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(56,189,248,0.25)]",
};

const alternatives = [
  { name: "TubeBuddy", slug: "tubebuddy" },
  { name: "Pictory", slug: "pictory" },
  { name: "InVideo", slug: "invideo" },
  { name: "Descript", slug: "descript" },
  { name: "Jasper AI", slug: "jasper-ai" },
];

const faqs = [
  {
    q: "Is VidIQ free?",
    a: "VidIQ offers a free plan that includes the Chrome extension, daily video ideas, limited keyword metrics, and email alerts. To unlock historical keyword volumes, bulk competitor tracking, and higher idea caps you need a paid plan.",
  },
  {
    q: "Does VidIQ work for agencies?",
    a: "Yes. Agencies can add multiple client channels, share watchlists across teammates, and export keyword lists into planning docs. Boost and Max tiers add channel-wide scorecards plus coaching for campaigns.",
  },
  {
    q: "What makes VidIQ different from TubeBuddy?",
    a: "VidIQ leans into keyword data, real-time trend alerts, and AI suggestions. TubeBuddy still shines for bulk updates and A/B testing thumbnails. Many teams use VidIQ for research and TubeBuddy for publishing workflows.",
  },
  {
    q: "Does VidIQ integrate with other marketing tools?",
    a: "VidIQ focuses on YouTube but exports CSVs, connects to Google Sheets, and offers API access on Max. Zapier and Make users usually push keyword data into Notion, Airtable, or project management boards.",
  },
  {
    q: "Is the Chrome extension required?",
    a: "The extension unlocks overlay data directly inside YouTube Studio and search results. You can still use the standalone dashboard for research, but the browser add-on speeds up live optimization.",
  },
  {
    q: "Can VidIQ generate scripts or descriptions?",
    a: "VidIQ AI can draft titles, descriptions, hook ideas, tags, and chapter markers. It also summarizes competitor videos so you can see what resonated before writing your own outline.",
  },
  {
    q: "How accurate is VidIQ search volume?",
    a: "VidIQ blends YouTube API data with clickstream forecasting. Volumes are directional but helpful for spotting relative demand and difficulty before recording.",
  },
  {
    q: "Does VidIQ support Shorts?",
    a: "Yes. Trend alerts and keyword research include Shorts. Boost and Max tiers also show retention benchmarks for short-form uploads so you can tweak hooks.",
  },
];

function VidIQToolPage() {
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
        "VidIQ gives marketers, agencies, and creators the keyword intelligence, competitor tracking, and AI prompts they need to scale YouTube channels. Freemium pricing and workflow-friendly exports make it easy to slot into an existing content engine.",
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
      icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
      title: "Accurate keyword engine",
      body: "Surface volume, competition scores, related phrases, and historical trends so you can prioritize topics with proven YouTube demand.",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-indigo-500" />,
      title: "Competitor & channel tracking",
      body: "Monitor rival uploads, velocity, and engagement benchmarks. Build watchlists to see which keywords or formats are working across your niche.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      title: "AI writing assistance",
      body: "Generate titles, descriptions, hooks, and chapter ideas from target keywords or transcripts, keeping messaging aligned with current search intent.",
    },
    {
      icon: <Bell className="h-5 w-5 text-amber-500" />,
      title: "Real-time performance alerts",
      body: "Get notified when a video outperforms baseline, when new keywords spike, or when a competitor starts ranking for a phrase you tracked.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-600" />,
      title: "Optimization checklists",
      body: "Scorecards flag missing tags, weak descriptions, or low retention moments so editors know what to fix before publishing or promoting.",
    },
    {
      icon: <Plug className="h-5 w-5 text-rose-500" />,
      title: "Exports and integrations",
      body: "Sync data to Google Sheets, download CSVs, or trigger automations via Zapier/Make on higher tiers to align with editorial calendars.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on VidIQ review for creators and agencies covering pricing, features, keyword research, pros & cons, and top alternatives for scaling YouTube."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
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
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl} target="_blank" rel="noreferrer">
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-200 blur-3xl" />
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
                  VidIQ blends keyword intel, AI prompts, and channel scorecards so marketing teams can plan winning topics, optimize before launch, and double down when videos spike.
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
              {toolName} is a {category.toLowerCase()} platform built for YouTube-first teams. It pairs an in-browser assistant with a research dashboard so you always know which keywords, angles, and formats will resonate before hitting record.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies use VidIQ to audit channels, benchmark competitors, and hand clients a prioritized calendar. In-house marketers rely on it for launch monitoring, alerting the moment a video over- or under-performs baseline so they can tweak thumbnails and promotion spend.
            </p>
            <p className="mt-3 text-slate-700">
              The workflow-friendly exports make VidIQ play nicely with Notion, Airtable, ClickUp, or Sheets, so your wider go-to-market team can see what is planned and why.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">
              VidIQ shines anywhere YouTube is a growth lever and you need data to justify creative choices.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Solo creators and influencer teams planning weekly uploads.",
                "Agencies handling client channels that need reporting-ready scorecards.",
                "B2B and SaaS marketers using video for thought leadership and demand creation.",
                "Ecommerce and DTC brands doubling down on Shorts and seasonal campaigns.",
                "Media companies and newsrooms coordinating dozens of contributors.",
                "Growth marketers repurposing webinars/podcasts into searchable clips.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
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
              VidIQ focuses on surfacing the data behind YouTube search and surfacing it where editors, strategists, and clients already work.
            </p>
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
                  VidIQ keeps onboarding low-friction with a generous free plan, then adds AI writing, historical data, and coaching as you scale. Expect per-channel billing unless you move to Max.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Creators test on Free, serious channels jump to Pro, agencies use Boost/Max for alerts + multi-channel workspaces.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Basic (Free)</td>
                    <td className="px-4 py-3">Testing keywords & overlays</td>
                    <td className="px-4 py-3">Limited ideas/day, 1 channel, no historical search volume</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Active creators</td>
                    <td className="px-4 py-3">Single channel, AI descriptions, trend alerts</td>
                    <td className="px-4 py-3">~$10/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Boost</td>
                    <td className="px-4 py-3">Agencies & growing teams</td>
                    <td className="px-4 py-3">Up to 5 channels, historical keyword data, bulk competitor tracking</td>
                    <td className="px-4 py-3">$49–$99/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Max</td>
                    <td className="px-4 py-3">Enterprise & YouTube-first orgs</td>
                    <td className="px-4 py-3">Dedicated coach, API/export automations, unlimited ideas</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              The move from Pro to Boost is where most agencies land since it unlocks multiple channels plus stronger reporting. Max is worth it if you need verified data exports or coaching for clients.
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
                  <li>Reliable keyword volume and competition scoring.</li>
                  <li>AI scripts, titles, and hook suggestions save ideation time.</li>
                  <li>Performance alerts flag wins/losses faster than native YouTube data.</li>
                  <li>Chrome overlay keeps optimization insights inside Studio.</li>
                  <li>Export-friendly for Notion, Airtable, and Sheets workflows.</li>
                  <li>Coaching access on Max packages for strategic support.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Data is YouTube-only—no TikTok, Reels, or Shorts-first platforms beyond YouTube.</li>
                  <li>Advanced exports, API access, and multi-channel workspaces require higher tiers.</li>
                  <li>Some UI elements still rely on the Chrome extension instead of the main dashboard.</li>
                  <li>Reporting is directional rather than full-funnel analytics.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Depending on how you produce and repurpose YouTube content, you might consider pairing or replacing VidIQ with these adjacent tools.
            </p>
            <p className="mt-2 text-slate-700">Each option listed below already has a dedicated review on GoDigitalPro.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how VidIQ stacks up against common picks creators debate.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs TubeBuddy vs Pictory</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vidiq-vs-tubebuddy-vs-pictory">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                TubeBuddy excels at bulk publishing workflows and thumbnail experiments, while Pictory transforms scripts into ready-to-edit videos. VidIQ is the research brain that feeds both. If keyword accuracy and trend alerts come first, VidIQ is the anchor and the comparison explains why.
              </p>
              <p className="mt-2 text-slate-900">Choose VidIQ for insights, TubeBuddy for channel maintenance, and Pictory for fast content production.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs TubeBuddy vs InVideo</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/vidiq-vs-tubebuddy-vs-invideo">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                When teams want both research and editing in one stack, they usually pair VidIQ with TubeBuddy or InVideo. Our comparison breaks down whether you should invest more heavily in analytics (VidIQ), workflow automations (TubeBuddy), or branded templates and repurposing (InVideo).
              </p>
              <p className="mt-2 text-slate-900">If you frequently repurpose webinars and podcasts, InVideo covers editing while VidIQ fuels topic selection.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              VidIQ is worth the subscription if YouTube drives a meaningful portion of your pipeline or revenue. Its mix of keyword intelligence, AI copy, and alerts lets you spend more time on creative rather than spreadsheets.
            </p>
            <p className="mt-3 text-slate-700">
              If YouTube is merely a cross-posting channel, the free plan is enough. But once you are chasing specific keywords, need to show clients why you selected topics, or want automated alerts, upgrading to Pro/Boost quickly pays back.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> VidIQ is the go-to research companion when you treat YouTube as a true search platform, not just a file host.
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
              Choose VidIQ if you want data-backed decisions for every upload. It plugs the keyword knowledge gap that YouTube Studio leaves open and combines it with AI prompts so brainstorms move faster.
            </p>
            <p>
              Consider alternatives like TubeBuddy if bulk publishing tools matter more, or Pictory/InVideo if you need editing first. Many teams bundle VidIQ with those to cover both ideation and production.
            </p>
            <p>VidIQ fits cleanly into a modern marketing stack where long-form content, Shorts, and paid campaigns all need aligned messaging.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default VidIQToolPage;
