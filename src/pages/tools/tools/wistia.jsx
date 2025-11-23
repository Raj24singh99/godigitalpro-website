import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, BarChart3, Mic2, Share2, Workflow, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wistia";
const slug = "wistia";
const category = "Video Hosting";
const shortPitch =
  "Wistia is a video hosting and analytics platform built for marketers. It combines branded players, CTAs, email capture, heatmaps, and integrations so you can turn video views into pipeline.";
const pricingSummary =
  "Wistia has a free tier for 10 videos, Pro plans from ~$24/mo billed annually, and Advanced/Enterprise plans with marketing automation integrations and custom bandwidth.";
const officialUrl = "https://wistia.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wistia.com",
  gradient: "from-sky-500 via-indigo-500 to-purple-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "Vimeo", slug: "vimeo" },
  { name: "Loom", slug: "loom" },
  { name: "Descript", slug: "descript" },
  { name: "Wistia vs Vimeo vs Loom", slug: "compare/wistia-vs-vimeo-vs-loom", isComparison: true },
  { name: "Wistia vs Vimeo vs Descript", slug: "compare/wistia-vs-vimeo-vs-descript", isComparison: true },
];

const faqs = [
  {
    q: "Is Wistia free?",
    a: "Wistia’s free plan includes 10 videos, Wistia-branded player, and basic analytics. Paid plans unlock custom branding, lead capture, integrations, and higher limits.",
  },
  {
    q: "What makes Wistia different from Vimeo or YouTube?",
    a: "Wistia focuses on marketers: branded player, CTAs, email gates, per-viewer analytics, HubSpot/Marketo integrations, and privacy controls for customer videos.",
  },
  {
    q: "Can I capture leads inside videos?",
    a: "Yes. Use Wistia’s Turnstile forms to gate videos or insert CTAs at specific timestamps. Data syncs to HubSpot, Marketo, Pardot, or Zapier automations.",
  },
  {
    q: "Does Wistia support podcasts?",
    a: "Wistia’s podcast hosting lets you upload, manage RSS feeds, and embed branded audio players on your site with analytics alongside video content.",
  },
  {
    q: "Can I embed Wistia videos anywhere?",
    a: "Embeds work on any CMS or landing page platform. Customize player colors, controls, and chapters to match brand guidelines. Password protection and domain restrictions keep assets safe.",
  },
  {
    q: "How good is Wistia analytics?",
    a: "Heatmaps show exactly how each viewer watched, skipped, or replayed. Engagement graphs, conversion reports, and HubSpot/Salesforce syncing connect video to revenue.",
  },
  {
    q: "Who is Wistia best for?",
    a: "Marketing, sales enablement, and customer success teams who want to treat video as a revenue channel, not just a file upload.",
  },
  {
    q: "Does Wistia integrate with marketing stacks?",
    a: "Yes. Native integrations include HubSpot, Marketo, Pardot, Salesforce, Mailchimp, Drift, ConvertKit, and Zapier/Make.",
  },
];

function WistiaToolPage() {
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
        "Wistia specializes in marketing video hosting. You get branded players, CTAs, lead capture, and granular engagement data that connect video to pipeline and retention.",
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
      icon: <Video className="h-5 w-5 text-sky-500" />,
      title: "Branded player + chapter control",
      body: "Customize colors, controls, chapters, and thumbnails so every embed looks native to your site. Preload multiple captions and audio descriptions for accessibility.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "CTAs, email capture, and lead scoring",
      body: "Turnstile forms and on-player CTAs let you gate videos or invite next steps. Sync captured leads directly into HubSpot, Marketo, or automation workflows.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-500" />,
      title: "Heatmaps + engagement analytics",
      body: "Per-viewer heatmaps show who rewound, skipped, or dropped. Aggregate reports tie watch time to conversions, helping GTM teams prove ROI.",
    },
    {
      icon: <Workflow className="h-5 w-5 text-amber-500" />,
      title: "Integrations and automation",
      body: "Native integrations with HubSpot, Salesforce, Marketo, Mailchimp, Drift, and Zapier trigger workflows when viewers convert or finish videos.",
    },
    {
      icon: <Mic2 className="h-5 w-5 text-purple-500" />,
      title: "Podcasts + channels",
      body: "Host podcasts alongside video, manage RSS feeds, and publish channels/series for webinars, onboarding, or product education.",
    },
    {
      icon: <Share2 className="h-5 w-5 text-rose-500" />,
      title: "Recording + embed friendly",
      body: "Use Wistia’s Soapbox recorder or upload from any editor, then embed anywhere with responsive players and secure permissions.",
    },
  ];

  const pricingTable = [
    {
      plan: "Free",
      best: "Testing embeds and internal training",
      limits: "10 videos, Wistia branding, basic analytics",
      price: "$0",
    },
    {
      plan: "Plus",
      best: "Small teams launching marketing video",
      limits: "Up to 75 videos, no ads, player customization, lead capture",
      price: "~$24/mo billed annually",
    },
    {
      plan: "Pro",
      best: "Growing marketing teams",
      limits: "250 videos, advanced integrations, A/B testing, priority support",
      price: "~$99/mo billed annually",
    },
    {
      plan: "Advanced / Enterprise",
      best: "High-volume video + automation",
      limits: "Unlimited videos, custom bandwidth, data warehouse sync, dedicated CSM",
      price: "Custom",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Updated Wistia review covering pricing, analytics, lead capture, integrations, pros & cons, alternatives, and how it compares to Vimeo, Loom, and Descript."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-200 blur-3xl" />
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
                  Wistia makes video measurable. Capture leads, see engagement, and pass data into your CRM without wrangling custom scripts or point tools.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" /> Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              {toolName} is a {category.toLowerCase()} platform focused on marketers. Upload video once, embed anywhere, and track viewer-level engagement, conversions, and pipeline impact without relying on ad platforms.
            </p>
            <p className="mt-3 text-slate-700">
              It replaces generic players like YouTube when you need control over branding, lead capture, and first-party data.
            </p>
            <p className="mt-3 text-slate-700">
              Teams also use Wistia for podcasts, webinar hubs, onboarding series, and sales enablement portals.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Pick Wistia if you need lead capture + analytics tied to video.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B marketers running webinars, demos, and product launches.",
                "SaaS teams with onboarding libraries or feature walkthroughs.",
                "Sales enablement leaders sharing personalized demos.",
                "Agencies creating video hubs or podcast networks for clients.",
                "Customer success teams measuring adoption with educational series.",
                "Media teams building channels with branded players + CTAs.",
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
            <p className="mt-3 text-slate-700">Wistia turns video from a black box into a measurable growth channel.</p>
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
                <p className="mt-2 text-slate-700">Pricing scales with hosted videos, bandwidth, and integration depth. Annual plans save more than 20%.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most marketing teams start on Plus, jump to Pro when they need advanced integrations and more video slots.</p>
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
                  {pricingTable.map((row, idx) => (
                    <tr key={row.plan} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.plan}</td>
                      <td className="px-4 py-3">{row.best}</td>
                      <td className="px-4 py-3">{row.limits}</td>
                      <td className="px-4 py-3">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Need more seats or integration depth? Advanced and Enterprise plans include custom onboarding, migration support, and uptime SLAs.</p>
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
                  <li>Lead capture and CTAs built into the player.</li>
                  <li>Granular heatmaps and viewer-level analytics.</li>
                  <li>Integrations with major CRMs and MAPs.</li>
                  <li>Podcast hosting + channels for multimedia hubs.</li>
                  <li>Security features: password protection, domain limits, SSO.</li>
                  <li>Fast global delivery with adaptive streaming.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>More expensive than generic hosting like Vimeo or YouTube.</li>
                  <li>Soapbox recorder is basic compared to Loom/Descript.</li>
                  <li>Video limits on lower tiers require pruning or add-ons.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need lighter async sharing, OTT distribution, or editing-first workflows? Explore these platforms.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Read our head-to-head breakdown." : "Full review with pricing and pros/cons."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-600 hover:text-sky-500" href={`/${alt.slug.startsWith("compare/") ? alt.slug : `tools/${alt.slug}`}`}>
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
            <p className="text-slate-700">Compare Wistia with other video stacks before you choose.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Vimeo vs Loom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wistia-vs-vimeo-vs-loom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Wistia wins for marketing analytics and lead capture, Vimeo excels at branded hosting/OTT, and Loom is unbeatable for async screen recording. See feature-by-feature rankings in the comparison guide.
              </p>
              <p className="mt-2 text-slate-900">Choose Wistia if revenue teams own video results.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Vimeo vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wistia-vs-vimeo-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Descript focuses on editing/recording, Vimeo handles general hosting, and Wistia bridges marketing, automation, and analytics. Our guide covers pricing, workflows, and the right fit for each team.
              </p>
              <p className="mt-2 text-slate-900">Pick Wistia when CTAs, CRM data, and branded channels matter most.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you treat video as a marketing or onboarding channel, Wistia’s analytics and integrations pay for themselves quickly. You’ll spend more than Vimeo or YouTube, but the data advantage is significant.
            </p>
            <p className="mt-3 text-slate-700">If you just need a quick recorder or file host, Loom or Vimeo could be cheaper. But when leads and revenue depend on video, Wistia is the safer bet.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Wistia is a top pick for marketing, revenue, and success teams who demand measurable impact from video.
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
            <p>Pick Wistia if video is core to marketing or customer success and you need first-party data + automation.</p>
            <p>Consider Vimeo for general hosting/OTT or Loom/Descript for recording-first workflows.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default WistiaToolPage;
