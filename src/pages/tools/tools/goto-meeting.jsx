import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "GoTo Meeting";
const slug = "goto-meeting";
const category = "Video Conferencing";
const shortPitch =
  "GoTo Meeting is a video conferencing and webinar platform focused on reliable meetings, screen sharing, and dial-in options for businesses needing straightforward collaboration.";
const pricingSummary = "Paid plans start around $12–$16/organizer/month with higher tiers for larger meetings, cloud recording, and admin controls.";
const officialUrl = "https://www.goto.com/meeting";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/goto.com",
  gradient: "from-amber-500 via-orange-500 to-slate-700",
  glow: "shadow-[0_20px_80px_rgba(251,146,60,0.22)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Microsoft Teams", slug: "microsoft-teams" },
  { name: "Google Meet", slug: "google-meet" },
  { name: "Webex", slug: "webex" },
  { name: "Whereby", slug: "whereby" },
];

const faqs = [
  {
    q: "Is GoTo Meeting free?",
    a: "GoTo Meeting offers trials and limited free options. Most teams use paid plans for longer meetings, recordings, and admin controls.",
  },
  {
    q: "What is GoTo Meeting best for?",
    a: "Reliable business meetings with dial-in numbers, screen sharing, and cloud recording. It’s straightforward for client calls and internal collaboration.",
  },
  {
    q: "Does GoTo Meeting support webinars?",
    a: "GoTo has separate webinar products. Meeting plans focus on standard meetings; higher tiers add capacities and recording.",
  },
  {
    q: "Can I record meetings?",
    a: "Yes. Paid plans support cloud recordings and local recordings with storage based on plan limits.",
  },
  {
    q: "Does GoTo Meeting integrate with calendars?",
    a: "Yes. It integrates with Google Workspace and Microsoft 365 for scheduling and joining links.",
  },
  {
    q: "Is GoTo secure?",
    a: "GoTo Meeting supports encrypted sessions, admin controls, and compliance features suitable for most business use cases.",
  },
  {
    q: "How does GoTo Meeting compare to Zoom?",
    a: "Zoom generally leads on video quality and webinars; GoTo Meeting offers solid performance and dial-in options, often preferred by some businesses for simplicity or existing GoTo Suites.",
  },
  {
    q: "Can I join from mobile?",
    a: "Yes. GoTo Meeting offers mobile apps and dial-in numbers to join on the go.",
  },
];

function GoToMeetingPage() {
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
        "GoTo Meeting provides reliable video meetings with screen sharing, dial-in, and recordings. It’s straightforward for client calls and internal collaboration, with pricing starting around $12–$16/organizer/month.",
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
      icon: <Video className="h-5 w-5 text-amber-500" />,
      title: "HD video and screen sharing",
      body: "Run client calls, demos, and internal meetings with stable video, audio, and easy screen share controls.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Dial-in and mobile access",
      body: "Participants can join via phone dial-in or mobile apps, helpful for distributed teams and clients.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Admin and security controls",
      body: "Lock meetings, manage participants, and enforce settings across the organization for safer sessions.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Calendar integrations",
      body: "Schedule and join from Google Calendar or Outlook with add-ons that keep invites and links synced.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Cloud recordings",
      body: "Record meetings to the cloud and share links for training, approvals, or client recaps.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-400" />,
      title: "Lightweight webinars",
      body: "Pair with GoTo Webinar for larger events; Meeting plans cover standard-sized sessions well.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Clear GoTo Meeting review covering pricing, features, pros & cons, alternatives, and whether GoTo Meeting fits your 2025 meeting stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-orange-200/25 blur-3xl" />
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
                  Built for dependable business meetings, GoTo Meeting combines video, audio, and dial-in with admin controls and recordings for straightforward collaboration.
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
              GoTo Meeting is a {category.toLowerCase()} platform tailored to business meetings, client calls, and webinars. It emphasizes reliability, dial-in options, and admin controls with a straightforward interface.
            </p>
            <p className="mt-3 text-slate-700">
              Teams use it for scheduled calls, screen shares, and training. Higher tiers add recordings and larger attendee capacities. It pairs well with GoTo’s broader suite if you already use their tools.
            </p>
            <p className="mt-3 text-slate-700">If you need advanced webinars or integrated events, you may add GoTo Webinar or compare with Zoom and Webex.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">GoTo Meeting suits teams that want reliable, simple meeting software with dial-in options.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs needing dependable client and vendor calls.",
                "Consultants hosting screen-share sessions and trainings.",
                "Teams that rely on dial-in numbers for phone participants.",
                "Organizations already using GoTo tools seeking suite alignment.",
                "Sales/support teams that record sessions for follow-up.",
                "Internal teams that prefer a simple interface over feature-heavy tools.",
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
            <p className="mt-3 text-slate-700">GoTo Meeting focuses on reliability, accessibility, and admin control.</p>
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
                  Pricing is per organizer with different attendee caps and features. Entry plans cover core meetings; higher plans add larger meeting sizes, cloud recordings, transcriptions, and admin controls.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a meeting plan that fits your attendee cap. Upgrade if you need recordings, transcripts, or larger sessions.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Small teams and consultants</td>
                    <td className="px-4 py-3">Meeting cap ~150, basic recording</td>
                    <td className="px-4 py-3">~$12–$16/organizer/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Growing orgs</td>
                    <td className="px-4 py-3">Higher caps (~250), transcripts, admin controls</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large or regulated orgs</td>
                    <td className="px-4 py-3">Custom caps, governance, support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing webinars/events</td>
                    <td className="px-4 py-3">GoTo Webinar/Event add-ons for larger audiences</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Compare attendee limits, recording storage, and admin needs before choosing a tier. If you already use GoTo Webinar, bundling may make sense.
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
                  <li>Reliable meetings with dial-in and screen sharing.</li>
                  <li>Simple interface for clients and teams.</li>
                  <li>Cloud recordings and transcripts on higher tiers.</li>
                  <li>Calendar integrations with Google/Outlook.</li>
                  <li>Admin controls for security and compliance.</li>
                  <li>Works well for phone participants and distributed teams.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer modern collaboration features than Zoom/Teams.</li>
                  <li>Webinars often require separate GoTo products.</li>
                  <li>Interface feels more traditional compared to newer tools.</li>
                  <li>Meeting caps and storage vary by tier; upgrades may be needed.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want more collaboration features, deeper webinar tools, or tighter suite integration, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All cover video meetings; they differ on webinar strength, suite alignment, and pricing.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two popular meeting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/goto-meeting-vs-zoom-vs-webex">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoom is ubiquitous with strong video quality and webinars. GoTo Meeting is simpler with solid dial-in and suite alignment. Choose Zoom for modern features and webinars; choose GoTo Meeting if you value simplicity and existing GoTo stack.
              </p>
              <p className="mt-2 text-slate-900">For many businesses, Zoom’s feature depth wins; GoTo can still be a fit for teams needing reliable dial-in and straightforward meetings.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webex</h3>
                <a className="text-sm font-semibold text-amber-700 hover:text-amber-600" href="/tools/compare/goto-meeting-vs-zoom-vs-webex">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webex is enterprise-oriented with strong security and Cisco ecosystem alignment. GoTo Meeting is lighter and dial-in friendly. Choose Webex for strict compliance; choose GoTo Meeting for simple business meetings with easy phone access.
              </p>
              <p className="mt-2 text-slate-900">If you want advanced security and admin depth, Webex wins; for straightforward SMB meetings, GoTo Meeting is easier.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For teams needing reliable meetings, dial-in, and recordings without extra frills, GoTo Meeting is worth it. It covers core needs and integrates with calendars and GoTo services.
            </p>
            <p className="mt-3 text-slate-700">
              If you want the broadest feature set, Zoom or Teams may be stronger. For quick internal calls inside Workspace, Meet is simpler. Evaluate attendee caps, recording needs, and webinar plans before deciding.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> GoTo Meeting is a dependable choice for straightforward business meetings, especially when dial-in and reliability are priorities.
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
              Choose {toolName} if you want reliable video meetings with dial-in support and a straightforward interface. It’s well-suited to client calls, trainings, and internal collaboration.
            </p>
            <p>
              Consider Zoom for richer features and webinars, Webex for enterprise alignment, or Google Meet for quick browser-based calls. If you need advanced events, add GoTo Webinar.
            </p>
            <p>{toolName} integrates with calendars and offers recordings, covering most business meeting needs without the clutter of heavier platforms.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-amber-700 hover:text-amber-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-amber-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default GoToMeetingPage;
