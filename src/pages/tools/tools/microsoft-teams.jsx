import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, MessageSquare, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Microsoft Teams";
const slug = "microsoft-teams";
const category = "Collaboration & Video";
const shortPitch =
  "Microsoft Teams is a unified collaboration and video platform for chat, meetings, and webinars—integrated tightly with Microsoft 365 apps and security.";
const pricingSummary = "Included in many Microsoft 365 plans; standalone plans start low per user with add-ons for webinars and advanced security.";
const officialUrl = "https://www.microsoft.com/microsoft-teams";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/microsoft.com",
  gradient: "from-blue-500 via-indigo-500 to-slate-800",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.25)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom", blurb: "Client-friendly video meetings and webinars." },
  { name: "Google Meet", slug: "google-meet", blurb: "Browser-first meetings inside Workspace." },
  { name: "Webex", slug: "webex", blurb: "Enterprise-grade calling and meetings." },
  { name: "GoTo Meeting", slug: "goto-meeting", blurb: "Reliable meetings with webinars add-ons." },
  { name: "Whereby", slug: "whereby", blurb: "Lightweight meetings with simple UX." },
];

const faqs = [
  { q: "Is Teams free?", a: "Teams offers a free version, but most businesses use the versions included with Microsoft 365 or paid add-ons for webinars and advanced management." },
  { q: "Is Teams good for external clients?", a: "Yes. Guests can join via browser or app, though some clients find Zoom slightly simpler. Waiting rooms, lobby controls, and meeting policies help manage access." },
  { q: "How does Teams integrate with Microsoft 365?", a: "Chat, meetings, and files are tightly integrated with Outlook, SharePoint, OneDrive, and Office apps. Recording storage typically lands in OneDrive/SharePoint." },
  { q: "Does Teams support webinars?", a: "Yes. Teams has webinar capabilities with registration, reminders, and attendee reporting. Advanced features may require specific licensing." },
  { q: "Is Teams secure?", a: "Teams benefits from Microsoft 365 security, compliance, and admin controls. It supports conditional access, data loss prevention, and tenant-level governance." },
  { q: "Can I use Teams for telephony?", a: "Yes. With Teams Phone licensing and carriers, you can add PSTN calling, call queues, and contact center integrations." },
  { q: "How is call quality?", a: "Generally strong, especially inside 365-centric organizations. Network optimization, device configuration, and admin policies influence real-world quality." },
  { q: "Is Teams good for webinars vs Zoom?", a: "Teams webinars are solid for 365 organizations. Zoom may feel smoother for external-facing events; evaluate attendee experience and reporting needs." },
];

const featureBlocks = [
  {
    icon: <Video className="h-5 w-5 text-indigo-500" />,
    title: "Meetings, webinars, and events",
    body: "Schedule internal or external meetings, webinars with registration, and events with recording and attendee reporting.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-emerald-500" />,
    title: "Chat and channels",
    body: "Persistent chat, channels, and file collaboration across teams with OneDrive/SharePoint storage and coauthoring.",
  },
  {
    icon: <Plug className="h-5 w-5 text-amber-500" />,
    title: "Microsoft 365 integration",
    body: "Deep links to Outlook, SharePoint, OneDrive, Power Platform, and security/compliance features across the tenant.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-sky-600" />,
    title: "Security and governance",
    body: "SSO, conditional access, DLP, retention, recordings management, and admin controls for meetings and chat policies.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Collaboration add-ons",
    body: "Apps, bots, approvals, whiteboards, and Together mode to support day-to-day collaboration and workshops.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-indigo-500" />,
    title: "Telephony options",
    body: "With Teams Phone, add PSTN calling, call queues, and integrations to contact center providers.",
  },
];

function MicrosoftTeamsToolPage() {
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
        "Microsoft Teams combines chat, meetings, webinars, and telephony inside Microsoft 365. It’s strong for organizations standardized on 365 with security and governance requirements.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
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

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Microsoft Teams review for 2025: pricing, meetings/webinars, security, pros & cons, alternatives, and how it compares to Zoom and Google Meet."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Collaboration and meetings inside Microsoft 365
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
                  Teams unifies chat, meetings, webinars, and 365 collaboration with security and compliance baked in—ideal if your org already runs on Microsoft 365.
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
              Microsoft Teams brings chat, meetings, webinars, files, and telephony into one app connected to Microsoft 365. It’s built for internal collaboration and secure external meetings.
            </p>
            <p className="mt-3 text-slate-700">
              Teams stores files in SharePoint/OneDrive, uses Outlook for calendaring, and leverages Microsoft’s security/compliance stack to manage users, devices, and data.
            </p>
            <p className="mt-3 text-slate-700">
              For external events, Teams webinars add registration, reminders, reporting, and attendee controls—especially useful when your org is standardized on 365.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Teams is best for organizations that rely on Microsoft 365 and need secure collaboration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Enterprises standardized on Microsoft 365 for email, files, and identity.",
                "IT-led organizations that need compliance, retention, and governance.",
                "Sales/CS teams hosting demos and onboarding with 365-linked records.",
                "Internal collaboration across chat, files, and meetings with deskless workers.",
                "Webinars and town halls where 365 integration simplifies registration and storage.",
                "Teams needing optional PSTN calling and telephony in one platform.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
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
              Teams focuses on unified collaboration across meetings, chat, files, and Microsoft 365 security/compliance.
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
                  Teams is included in many Microsoft 365 plans. Standalone plans and add-ons cover webinars, telephony, and advanced security. Costs vary by licensing and region.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">If you already have 365, start there. Add webinars or Teams Phone if you need events or telephony.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key notes</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Microsoft 365 Business plans</td>
                    <td className="px-4 py-3">Most SMEs on 365</td>
                    <td className="px-4 py-3">Teams included with chat/meetings</td>
                    <td className="px-4 py-3">Included in plan</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standalone/Essentials</td>
                    <td className="px-4 py-3">Teams-only needs</td>
                    <td className="px-4 py-3">Core meetings/chat, limited storage</td>
                    <td className="px-4 py-3">Low monthly per user</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Webinars add-ons</td>
                    <td className="px-4 py-3">Events and registration</td>
                    <td className="px-4 py-3">Registration, reminders, attendee reporting</td>
                    <td className="px-4 py-3">Add-on pricing</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams Phone</td>
                    <td className="px-4 py-3">PSTN calling needs</td>
                    <td className="px-4 py-3">Calling plans, call queues, contact center integrations</td>
                    <td className="px-4 py-3">Add-on pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Pricing changes by region and licensing. Check current 365 offers to avoid duplicate purchases.</p>
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
                  <li>Integrated chat, meetings, files, and security with Microsoft 365.</li>
                  <li>Strong admin controls, compliance, and identity management.</li>
                  <li>Webinars, live events, and recording storage in SharePoint/OneDrive.</li>
                  <li>Optional PSTN telephony through Teams Phone.</li>
                  <li>Apps, bots, and Power Platform integrations for workflows.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Interface can feel heavy compared to lighter options.</li>
                  <li>Guest experience can vary; Zoom may feel simpler externally.</li>
                  <li>Advanced features require the right licensing; can be complex to navigate.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">If user experience or simplicity is your priority, consider these options.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Compare Teams to leading meeting platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Google Meet</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/zoom-vs-microsoft-teams-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoom is the simplest for external meetings. Meet is lightweight inside Workspace. Teams is best when you already use Microsoft 365 and need integrated chat/files/security.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Webex vs Zoom</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/webex-vs-zoom-vs-microsoft-teams">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Webex and Teams excel for enterprises with strong security and telephony. Zoom excels at external-facing ease. Choose based on stack alignment and user experience needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For organizations on Microsoft 365, Teams is a strong default—chat, meetings, files, and security live together. External-heavy teams or event marketers might prefer Zoom for attendee ease, but Teams’ admin and compliance strength are hard to beat in 365 environments.
            </p>
            <p className="mt-3 text-slate-700">
              Add Teams Phone or webinars if you need telephony or events; otherwise, start with what’s included in your existing licensing.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Teams is worth it for 365-centric organizations needing secure collaboration and integrated meetings; choose Zoom/Meet for lighter external use.
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
              Choose Teams if you’re invested in Microsoft 365 and want unified chat, meetings, files, and governance. It scales from day-to-day collaboration to webinars and PSTN calling with the right licensing.
            </p>
            <p>
              Consider Zoom for the simplest external meeting UX, or Google Meet if you’re standardized on Workspace. Webex is strong for enterprises with advanced calling needs.
            </p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default MicrosoftTeamsToolPage;
