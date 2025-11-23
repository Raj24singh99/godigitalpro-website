import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Crown, ArrowLeft, ChevronDown, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Demio";
const slug = "demio";
const category = "Webinar Platform";
const shortPitch =
  "Demio is a modern webinar and event platform built for marketers—offering live, on-demand, and automated events with high-quality streaming, engagement, and lead capture.";
const pricingSummary =
  "Starter pricing typically begins around $49/month for smaller attendee caps. Growth and Premium tiers add higher limits, automated events, workspaces, and priority support.";
const officialUrl = "https://www.demio.com";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/demio.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.22)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "WebinarJam", slug: "webinarjam" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
  { name: "Restream", slug: "restream" },
  { name: "Webex", slug: "webex" },
];

const faqs = [
  { q: "Is Demio easy for attendees?", a: "Yes. Demio is browser-based with no downloads, making it easy for prospects and customers to join without IT friction." },
  { q: "Can Demio run automated webinars?", a: "Demio supports live, on-demand, and automated sessions. You can schedule replays, evergreen funnels, and just-in-time sessions for lead gen." },
  { q: "Does Demio support HD streaming?", a: "Demio streams in HD with adaptive quality. It handles screen sharing, camera feeds, and media uploads for smooth presentations." },
  { q: "What engagement tools does Demio include?", a: "Polls, Q&A, handouts, CTAs, chat, and featured actions make it easy to drive engagement and conversions during sessions." },
  { q: "Does Demio integrate with CRMs and marketing tools?", a: "Yes. Integrations with HubSpot, Marketo, ActiveCampaign, Mailchimp, Zapier, and webhooks push registrations and attendance into your marketing stack." },
  { q: "Is Demio good for agencies?", a: "Agencies like Demio for its clean attendee experience, multi-workspaces, and easy branding so client events look polished without custom dev work." },
  { q: "What attendee limits does Demio support?", a: "Starter tiers cover small events; Growth and Premium tiers increase attendee caps, hosts, and workspaces. Enterprise options are available for bigger rooms." },
  { q: "Does Demio handle recordings and replays?", a: "Demio records events automatically, stores replays, and lets you share on-demand sessions with registration gates for ongoing lead capture." },
];

function DemioToolPage() {
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
        "Demio focuses on a clean, high-converting webinar experience. Marketers run live and automated events with polished branding, engagement, and CRM-ready data without forcing attendees to download software.",
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
      icon: <Video className="h-5 w-5 text-emerald-500" />,
      title: "Live, on-demand, and automated webinars",
      body: "Run live launches and Q&As, or set evergreen replays and automated sessions to keep lead capture going 24/7.",
    },
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      title: "Polished attendee experience",
      body: "Browser-based, no-download joining with branded registration, waiting rooms, and customizable event pages to match your campaign look.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Engagement that drives conversions",
      body: "Polls, Q&A, handouts, featured CTAs, and chat keep audiences active and help presenters move attendees down-funnel.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Analytics and insights",
      body: "Track registrations, attendance, watch time, and engagement actions to see which sessions and CTAs convert best.",
    },
    {
      icon: <Plug className="h-5 w-5 text-blue-600" />,
      title: "Integrations for handoff",
      body: "Sync registrants and attendees into HubSpot, Marketo, ActiveCampaign, Mailchimp, or via Zapier/webhooks for immediate follow-up.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Host controls and reliability",
      body: "Granular presenter permissions, recording defaults, automated reminders, and adaptive streaming keep sessions stable and secure.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Comprehensive Demio review for marketers: pricing, features, pros & cons, alternatives, and when to pick Demio over Zoom, WebinarJam, or Restream."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
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
                  Demio helps marketers run demos and webinars that look great, keep attendees engaged, and push registration + attendance data into CRMs right away.
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
              {toolName} is a {category.toLowerCase()} designed for go-to-market teams. It combines registration pages, reminders, live and automated events, engagement tools, and CRM integrations in one platform.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use Demio for product demos, thought leadership webinars, onboarding workshops, and evergreen funnels. The attendee experience stays clean and branded without downloads.
            </p>
            <p className="mt-3 text-slate-700">
              Built-in analytics show who registered, attended, interacted, and clicked CTAs, so sales and success teams can follow up with context.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Demio fits teams that need polished webinars without the friction of desktop apps.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "B2B marketers running product demos, AMAs, and launch events.",
                "Growth teams building evergreen webinars for lead nurture.",
                "Customer success teams delivering onboarding and training sessions.",
                "Agencies hosting client webinars with custom branding and workspaces.",
                "Founders running investor updates or community sessions with easy join links.",
                "RevOps teams who want registration and attendance data flowing to CRMs automatically.",
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
            <p className="mt-3 text-slate-700">Demio focuses on attendee experience, engagement, and clean data handoff.</p>
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
                  Demio’s pricing is attendee-cap based with tiers for live and automated events. Expect Starter, Growth, and Premium levels with rising limits and support.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Growth for most marketing teams; move to Premium for higher caps and automations.</p>
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
                    <td className="px-4 py-3">Small webinars and testing</td>
                    <td className="px-4 py-3">Core live events, limited attendees/hosts, basic branding</td>
                    <td className="px-4 py-3">~$49/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Marketing teams and agencies</td>
                    <td className="px-4 py-3">Higher attendee caps, automated/on-demand events, more workspaces</td>
                    <td className="px-4 py-3">From ~$99/month depending on caps</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Premium</td>
                    <td className="px-4 py-3">Scaling webinar programs</td>
                    <td className="px-4 py-3">Max attendee limits, priority support, advanced branding</td>
                    <td className="px-4 py-3">Custom / higher tiers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Pick a tier based on attendee caps and whether you need automated events. Budget for email/SMS reminders and follow-up sequences via your CRM or MAP.
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
                  <li>Browser-based joining—no downloads for attendees.</li>
                  <li>Supports live, on-demand, and automated sessions for evergreen funnels.</li>
                  <li>Engagement tools (polls, Q&A, CTAs, handouts) built to drive conversions.</li>
                  <li>Strong integrations with HubSpot, Marketo, ActiveCampaign, Zapier, and webhooks.</li>
                  <li>Clean branding and registration pages that feel modern without custom dev.</li>
                  <li>Automatic recordings and replays for events and follow-up campaigns.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Attendee caps can climb in price as programs scale.</li>
                  <li>Fewer enterprise IT/security controls versus legacy webinar suites.</li>
                  <li>Does not include hybrid/physical event management features.</li>
                  <li>Advanced production (custom lower thirds, scenes) is lighter than broadcast tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Demio competes with general meeting platforms and webinar-focused tools. Choose based on attendee size, engagement needs, and how much control you need over branding.
            </p>
            <p className="mt-2 text-slate-700">All of these run webinars; they differ on production depth, reliability, and automation flexibility.</p>
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
            <p className="text-slate-700">Here’s how Demio compares to two common webinar choices.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/webinarjam-vs-demio-vs-zoom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoom is ubiquitous for meetings and webinars with large caps. Demio offers a cleaner marketing-centric experience, no downloads, and stronger default branding for GTM teams.
              </p>
              <p className="mt-2 text-slate-700">
                If you need suite-wide video for internal meetings plus webinars, Zoom fits. If you want frictionless attendee joins, automated events, and marketing-ready pages, Demio is better.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Demio for marketing webinars with polished branding; choose Zoom when you already standardize on Zoom for everything else.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs WebinarJam</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/webinarjam-vs-demio-vs-goto-meeting">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                WebinarJam has mature automation and evergreen funnels. Demio’s advantage is a cleaner UI and lighter attendee friction. Both integrate with major CRMs and MAPs.
              </p>
              <p className="mt-2 text-slate-700">
                WebinarJam can feel dated but powerful; Demio feels modern and fast. Pick based on whether you prefer extensive evergreen controls or streamlined live experiences.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Demio for modern UX and quick setup; choose WebinarJam if you need deeply customizable evergreen flows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Demio is worth it for marketing and customer teams that prioritize attendee experience, fast setup, and CRM-ready data. Automated webinars and replays keep funnels running even when live teams are offline.
            </p>
            <p className="mt-3 text-slate-700">
              If you need all-in-one meeting/chat plus webinars, Zoom may cover more bases. If you need broadcast-level production, consider pairing Demio with a studio tool.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Demio is a strong pick for polished marketing webinars, evergreen lead capture, and reliable attendee experiences without downloads.
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
              Choose Demio if you need webinars that look polished, run in the browser, and feed engagement data straight into your CRM. It’s ideal for demos, launches, and onboarding experiences where conversions matter.
            </p>
            <p>
              Consider Zoom for broad meeting + webinar coverage or Restream if you want to multistream across channels. WebinarJam remains solid for heavy evergreen automation.
            </p>
            <p>Demio fits into modern GTM stacks, syncing registrations, reminders, and attendance for timely sales and success follow-up.</p>
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

export default DemioToolPage;
