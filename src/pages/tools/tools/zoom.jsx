import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Zoom";
const slug = "zoom";
const category = "Video Conferencing";
const shortPitch =
  "Zoom is a leading video conferencing and webinar platform that helps marketers, agencies, and distributed teams host reliable meetings, demos, and virtual events.";
const pricingSummary =
  "Freemium with paid plans from around $15/user/month for Pro, with Business, Enterprise, and Events add-ons for higher capacity and admin controls.";
const officialUrl = "https://www.zoom.us";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/zoom.us",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "Microsoft Teams", slug: "microsoft-teams" },
  { name: "Google Meet", slug: "google-meet" },
  { name: "Webex", slug: "webex" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
  { name: "Whereby", slug: "whereby" },
];

const faqs = [
  {
    q: "Is Zoom free?",
    a: "Zoom has a free Basic plan with 40-minute group meetings, HD video, and core collaboration. Longer sessions, advanced admin controls, and webinars require paid plans.",
  },
  {
    q: "Does Zoom work well for agencies?",
    a: "Yes. Agencies rely on Zoom for client reviews, workshops, demos, and training because it’s easy for clients to join, stable at scale, and offers recordings, transcripts, and strong integrations.",
  },
  {
    q: "Which Zoom plan is best for beginners?",
    a: "Start with the free Basic plan to test. Upgrade to Pro for unlimited meeting lengths and cloud recordings. Agencies and teams needing SSO, branding, and admin controls should pick Business.",
  },
  {
    q: "Can I use Zoom for client projects?",
    a: "Absolutely. Zoom is widely used for discovery, stakeholder workshops, training, and QBRs. Breakout rooms, whiteboards, and recordings make client sessions structured and easy to hand off.",
  },
  {
    q: "Is Zoom secure and GDPR-compliant?",
    a: "Zoom offers end-to-end encryption, waiting rooms, locked meetings, SSO, data residency options, and a GDPR-ready DPA. Admins can enforce policies and control recording/storage settings.",
  },
  {
    q: "Does Zoom integrate with other marketing tools?",
    a: "Yes. Zoom integrates with HubSpot, Salesforce, Slack, Google Workspace, Microsoft 365, Calendly, Zapier, and marketing automation tools so meetings and webinars sync to calendars and CRMs.",
  },
  {
    q: "Can I run webinars with Zoom?",
    a: "Yes. Zoom Webinars and Events add registration, reminders, Q&A, polling, and attendee reporting, which marketers use for launches, demos, partner enablement, and lead nurture.",
  },
  {
    q: "How reliable is Zoom video quality?",
    a: "Zoom is optimized for variable bandwidth with adaptive HD. It’s known for stability across regions, even with large groups, making it a dependable choice for client-facing calls and events.",
  },
];

function ZoomToolPage() {
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
        "Zoom excels at reliable video meetings and webinars for marketers, agencies, and distributed teams. It pairs strong stability with admin controls, recordings, transcripts, and integrations that make client work smoother. Pricing starts free and scales reasonably per user.",
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
      title: "Stable HD meetings for client-facing work",
      body: "Adaptive video and audio keep discovery calls, reviews, and demos stable even with global attendees. Agencies avoid drops and maintain trust in high-stakes sessions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Webinars and events with lead capture",
      body: "Registration, reminders, Q&A, polling, and attendee reports let marketers run launches, demos, and partner sessions while syncing registrants and attendance into CRMs.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Recordings, transcripts, and clips",
      body: "Cloud recordings and searchable transcripts make follow-ups, training, and content repurposing faster. Share clips with delivery, CS, or enablement in minutes.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations across the go-to-market stack",
      body: "Native links to HubSpot, Salesforce, Slack, Google Workspace, Microsoft 365, Calendly, and Zapier sync meetings to calendars, tasks, and automations automatically.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and admin governance",
      body: "SSO, granular host permissions, waiting rooms, locked meetings, and E2E encryption satisfy client security asks. Admin dashboards enforce policy with visibility.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Collaboration that keeps audiences engaged",
      body: "Breakout rooms, reactions, and whiteboards make workshops, design reviews, and training interactive so larger groups stay involved instead of tuning out.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Unbiased Zoom review for marketers and agencies covering pricing, features, pros & cons, alternatives, and whether Zoom fits your 2025 stack. See use cases."
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
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Built for dependable video and webinar experiences, Zoom minimizes friction for client calls and go-to-market events while giving admins control and visibility.
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
              Zoom is a {category.toLowerCase()} platform built for reliable meetings, webinars, and virtual events. It combines high-quality audio/video with collaboration tools so teams can present, train, and sell remotely.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers and agencies use Zoom to host client reviews, product demos, and thought-leadership webinars without worrying about stability or attendee friction. Founders lean on it for investor updates and all-hands.
            </p>
            <p className="mt-3 text-slate-700">
              The platform pairs ease of joining with enterprise-ready admin controls, making it fit for both small teams and global organizations.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Zoom suits teams that need dependable live communication with prospects, customers, and partners.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies running client reviews, workshops, and training.",
                "In-house marketing teams hosting webinars and virtual events for lead gen.",
                "Sales teams delivering demos, discovery calls, and proofs-of-concept.",
                "Customer success teams managing onboarding and QBRs with recordings.",
                "Distributed product and ops teams collaborating with whiteboards and breakouts.",
                "Founders running all-hands and board or investor updates.",
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
              Zoom focuses on reliability, participation, and post-call handoff, giving go-to-market teams fewer hurdles during live sessions.
            </p>
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
                  {toolName} uses a freemium model with per-user paid tiers. Basic is free with 40-minute group meetings. Pro unlocks unlimited meeting lengths and cloud recordings. Business and Enterprise add SSO,
                  branding, higher capacities, and webinar/event capabilities.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most teams start on Pro; agencies pick Business for SSO + branding; event-led orgs go Enterprise/Events.</p>
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
                    <td className="px-4 py-3">Testing and short team huddles</td>
                    <td className="px-4 py-3">40-minute group meetings, limited cloud storage</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Solo founders and small teams</td>
                    <td className="px-4 py-3">Unlimited meeting length, 100 participants, 5 GB cloud recording</td>
                    <td className="px-4 py-3">~$15/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Agencies and growing companies</td>
                    <td className="px-4 py-3">SSO, managed domains, branding, 300 participants</td>
                    <td className="px-4 py-3">~$20–$22/user/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise / Events</td>
                    <td className="px-4 py-3">Large orgs and webinar-led teams</td>
                    <td className="px-4 py-3">Up to 1000 attendees, advanced events/webinars, more storage</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Solo creators can use Pro for unlimited calls and recordings. Agencies should choose Business for admin controls and branding. Scaling, event-heavy teams should explore Enterprise or Events add-ons for higher caps and analytics.
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
                  <li>Highly reliable audio/video quality across global participants.</li>
                  <li>Frictionless joining for external clients with minimal setup.</li>
                  <li>Strong webinar/event stack with registration and attendee reporting.</li>
                  <li>Deep integrations with CRM, calendar, and marketing tools.</li>
                  <li>Breakouts, whiteboards, and reactions for interactive sessions.</li>
                  <li>Granular admin controls, SSO, and security features for compliance.</li>
                  <li>Recordings and transcripts streamline handoffs and content reuse.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Advanced webinars and large meeting capacities require add-ons.</li>
                  <li>Interface can feel busy compared to lighter options like Whereby.</li>
                  <li>Per-user pricing can add up for large guest-facing teams.</li>
                  <li>Branding customization is limited on lower tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Zoom leads in live video quality and stability, but some teams prefer suite-aligned or lighter tools depending on stack, budget, and simplicity needs. Here are common options marketers and agencies consider.
            </p>
            <p className="mt-2 text-slate-700">All of these offer core meetings and screen sharing; they differ on admin depth, webinar features, and ecosystem fit.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how Zoom stacks up against two of its closest competitors.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Microsoft Teams</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zoom-vs-microsoft-teams-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Teams is bundled with Microsoft 365, convenient for organizations standardized on Outlook/SharePoint. Zoom is more neutral and often easier for external clients to join without account friction.
              </p>
              <p className="mt-2 text-slate-700">
                Pricing can favor Teams when 365 is already purchased; Zoom’s webinars, events, and attendee analytics are usually stronger for marketers and agencies running campaigns.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Zoom for frequent client-facing sessions and webinars; choose Teams if you’re all-in on Microsoft 365 and want a single suite.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Google Meet</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/zoom-vs-microsoft-teams-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Google Meet is lightweight, browser-first, and included in Workspace—great for quick internal calls. Zoom offers stronger features such as breakouts, robust webinars, branded waiting rooms, and richer admin controls.
              </p>
              <p className="mt-2 text-slate-700">
                Meet’s cost is bundled; Zoom adds cost but delivers more event-centric tooling and reporting. For agencies hosting workshops or lead-gen webinars, Zoom’s depth is a better fit.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Zoom for interactive sessions and webinars with reporting; choose Google Meet for the simplest meetings inside Workspace.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For marketers, agencies, and sales teams that run frequent client meetings and webinars, Zoom delivers reliability, admin controls, and integrations that reduce friction. Recordings, transcripts, and clips improve handoffs and content reuse, saving time across delivery and success.
            </p>
            <p className="mt-3 text-slate-700">
              If you already pay for a bundled suite like Microsoft 365 or Google Workspace and only need casual internal calls, Zoom may feel redundant. But for external-facing teams and event-led growth, its stability and webinar stack justify the spend.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Zoom is a top-tier choice for GTM teams needing dependable calls, polished webinars, and smooth collaboration with prospects and clients.
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
              Choose Zoom if you’re an agency, marketer, or sales team running frequent client meetings, demos, and webinars that demand reliability and solid admin controls. It’s especially strong when recordings, transcripts, and branded events matter.
            </p>
            <p>
              Consider alternatives like Teams or Google Meet if you’re fully standardized on those suites and only need basic internal calls. For lightweight, design-minded meetings, Whereby can be sufficient.
            </p>
            <p>Zoom fits well in a modern marketing stack, connecting calendars, CRMs, and automation so live sessions feed pipeline, onboarding, and customer success workflows.</p>
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

export default ZoomToolPage;
