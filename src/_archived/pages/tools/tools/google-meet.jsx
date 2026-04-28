import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Google Meet";
const slug = "google-meet";
const category = "Video Conferencing";
const shortPitch =
  "Google Meet is a browser-first video meeting tool bundled with Google Workspace, ideal for quick internal calls, client check-ins, and lightweight collaboration.";
const pricingSummary = "Included with Google Workspace (from ~$6/user/month). Free tier available with time and feature limits; higher Workspace tiers add recording and attendance tracking.";
const officialUrl = "https://meet.google.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/google.com",
  gradient: "from-emerald-500 via-teal-500 to-sky-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.22)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Microsoft Teams", slug: "microsoft-teams" },
  { name: "Webex", slug: "webex" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
  { name: "Whereby", slug: "whereby" },
];

const faqs = [
  {
    q: "Is Google Meet free?",
    a: "Yes. A free version exists with time and participant limits. Paid Workspace plans remove many limits and add recording and admin control.",
  },
  {
    q: "Does Google Meet require software installs?",
    a: "No. Meet runs in the browser and mobile apps, with no extra downloads required for most users.",
  },
  {
    q: "Does Google Meet support recording?",
    a: "Recording is available on higher Workspace tiers. Basic plans may not include cloud recording.",
  },
  {
    q: "Can I use Google Meet without Workspace?",
    a: "Yes, on the free tier. But paid Workspace plans unlock longer meetings, recordings, and admin controls.",
  },
  {
    q: "Is Google Meet secure?",
    a: "Meet offers encrypted meetings, host controls, and workspace admin policies. Security inherits Workspace settings and compliance posture.",
  },
  {
    q: "How does Google Meet compare to Zoom?",
    a: "Meet is simpler and bundled with Workspace; Zoom offers richer webinar features and advanced collaboration options. Choose based on depth vs. simplicity.",
  },
  {
    q: "Does Google Meet integrate with calendars?",
    a: "Yes. Meet links are generated directly from Google Calendar; Outlook add-ons are also available.",
  },
  {
    q: "What are Google Meet limits?",
    a: "Participant and recording limits depend on Workspace tier. Higher tiers allow more attendees and add features like attendance tracking.",
  },
];

function GoogleMeetPage() {
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
        "Google Meet provides browser-based video meetings bundled with Workspace. It excels for quick internal calls and client check-ins, with recordings and admin controls on higher tiers. Free options exist with limits.",
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
      title: "Browser-first meetings",
      body: "Join from the browser without heavy installs; mobile apps available for on-the-go calls.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sky-500" />,
      title: "One-click from Google Calendar",
      body: "Meet links are automatically generated in Calendar invites, reducing friction for Workspace users and guests.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-indigo-500" />,
      title: "Recording and attendance (higher tiers)",
      body: "Workspace higher tiers add cloud recording, attendance tracking, and advanced meeting controls.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Admin and security controls",
      body: "Admins can set policies, manage host controls, and align Meet with Workspace security and compliance settings.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Collaboration features",
      body: "Screen sharing, captions, whiteboarding (Jamboard alternatives), and simple Q&A/polls for interactive sessions.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Lightweight performance",
      body: "Meet is optimized for quick joins and runs well on most networks, ideal for everyday meetings and standups.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Straightforward Google Meet review: pricing, features, pros & cons, alternatives, and whether Meet fits your 2025 meeting stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-500" />
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
                  Meet keeps meetings lightweight and easy, especially for teams already in Google Workspace—no installs, fast joins, and reliable performance.
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
              Google Meet is a {category.toLowerCase()} platform built into Google Workspace. It offers fast, browser-based meetings with screen sharing, captions, and host controls for simple collaboration.
            </p>
            <p className="mt-3 text-slate-700">
              It excels for internal meetings, standups, and quick client calls. Because it’s bundled with Workspace, scheduling and joining are frictionless for users already on Gmail and Calendar.
            </p>
            <p className="mt-3 text-slate-700">While webinars and large events are limited, Meet covers daily meeting needs with minimal overhead.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Google Meet suits teams that value speed, simplicity, and Workspace integration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Teams already on Google Workspace needing quick meetings.",
                "Startups and SMBs wanting bundled video without extra cost.",
                "Remote teams running standups, 1:1s, and internal collaborations.",
                "Client services teams scheduling calls via Google Calendar.",
                "Schools and training sessions that benefit from captions and ease of join.",
                "Teams that do not need advanced webinars or heavy meeting controls.",
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
            <p className="mt-3 text-slate-700">Meet emphasizes fast, accessible meetings backed by Workspace.</p>
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
                  Google Meet is included with Google Workspace plans starting around $6/user/month. Free tiers exist with time/participant limits. Higher Workspace tiers add recording, attendance tracking, noise cancellation, and larger meeting sizes.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you already use Workspace, Meet is included. Upgrade tiers if you need recording, attendance, or larger meetings.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Casual or low-volume meetings</td>
                    <td className="px-4 py-3">Time and participant limits; no recording</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Workspace Starter/Business Starter</td>
                    <td className="px-4 py-3">SMBs on Workspace</td>
                    <td className="px-4 py-3">Meeting size limits; basic Meet features</td>
                    <td className="px-4 py-3">~$6/user/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Workspace Standard/Plus</td>
                    <td className="px-4 py-3">Growing teams needing recording</td>
                    <td className="px-4 py-3">Cloud recording, attendance, larger meetings</td>
                    <td className="px-4 py-3">Varies (~$12–$18+/user/month)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs</td>
                    <td className="px-4 py-3">Highest caps, advanced security/compliance</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              If you already pay for Workspace, Meet can replace separate meeting tools for most use cases. For webinars or advanced controls, compare with Zoom or GoTo solutions.
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
                  <li>Runs in the browser—fast to join without installs.</li>
                  <li>Included with Workspace; easy scheduling via Google Calendar.</li>
                  <li>Good captions and noise cancellation on higher tiers.</li>
                  <li>Simple UI; low friction for guests.</li>
                  <li>Admin controls inherit Workspace governance.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer webinar/event features than Zoom/Webex.</li>
                  <li>Recording and attendance tracking locked to higher tiers.</li>
                  <li>Advanced whiteboarding and collaboration are limited.</li>
                  <li>Meeting size limits may require higher Workspace plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you need advanced webinars, deep integrations with Microsoft, or more collaboration features, consider these alternatives.
            </p>
            <p className="mt-2 text-slate-700">All handle meetings; they differ on suite alignment, webinar depth, and admin controls.</p>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two popular meeting solutions.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/zoom-vs-microsoft-teams-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoom offers stronger webinars and collaboration features. Meet is simpler and bundled with Workspace. Choose Zoom for events and feature depth; choose Meet for quick everyday meetings inside the Google ecosystem.
              </p>
              <p className="mt-2 text-slate-900">Teams already on Workspace often default to Meet for convenience and cost.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Microsoft Teams</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/compare/zoom-vs-microsoft-teams-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Teams is integrated with Microsoft 365, offering chat, collaboration, and meetings in one app. Meet is lighter and browser-first. Choose Teams if you’re in the Microsoft ecosystem; choose Meet for a simpler, Google-aligned stack.
              </p>
              <p className="mt-2 text-slate-900">If you use both ecosystems, pick based on where your calendar and documents live.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              If you’re on Google Workspace and need straightforward meetings, {toolName} is worth it. It’s quick, included in your plan, and reliable for daily calls.
            </p>
            <p className="mt-3 text-slate-700">
              For advanced webinars or collaboration, consider Zoom or Teams. For large events, add dedicated webinar tools or compare with GoTo Webinar or Webex.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Google Meet is a simple, effective meeting tool—ideal for teams that prioritize speed and tight integration with Google Workspace.
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
              Choose {toolName} for fast, browser-based meetings included in Workspace. It’s perfect for day-to-day internal and client calls without extra licensing.
            </p>
            <p>
              Consider Zoom or Teams for advanced webinars, events, or deeper collaboration. GoTo Meeting/Webex are options when dial-in and admin controls are priorities.
            </p>
            <p>Meet’s tight Calendar and Gmail integration make scheduling and joining frictionless, saving time for distributed teams.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-emerald-700 hover:text-emerald-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default GoogleMeetPage;
