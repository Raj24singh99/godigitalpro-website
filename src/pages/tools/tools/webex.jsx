import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, Users, Globe, Lock, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Webex";
const slug = "webex";
const category = "Video Conferencing";
const shortPitch =
  "Cisco Webex is an enterprise-grade meeting, webinar, and calling platform that combines strong security, hardware options, and hybrid-work features for regulated industries.";
const pricingSummary =
  "Webex offers a free plan with 40-minute meetings, Starter/Business plans from ~$14.50/host/month, Enterprise custom pricing, and add-ons for webinars, calling, and contact center.";
const officialUrl = "https://www.webex.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/webex.com",
  gradient: "from-emerald-500 via-cyan-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(34,197,94,0.25)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Microsoft Teams", slug: "microsoft-teams" },
  { name: "Google Meet", slug: "google-meet" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
  { name: "Whereby", slug: "whereby" },
];

const faqs = [
  { q: "Is Webex still relevant?", a: "Yes. Cisco has modernized Webex with AI, background noise removal, and hardware integrations—especially valuable for enterprises and hybrid conference rooms." },
  { q: "Does Webex offer end-to-end encryption?", a: "Webex provides default security, end-to-end encryption options, compliance certifications, and data residency choices." },
  { q: "How does Webex pricing work?", a: "Free plan handles 40-minute meetings. Paid tiers unlock longer meetings, recordings, calling, webinars, and advanced admin controls." },
  { q: "What about Webex hardware?", a: "Cisco sells room kits, headsets, and desk devices tightly integrated with Webex, making it ideal for hybrid offices." },
  { q: "Is Webex good for webinars?", a: "Webex Webinars offers registration, Q&A, polling, breakout sessions, and high attendee caps. It's comparable to Zoom Webinars for enterprise use." },
  { q: "Does Webex integrate with other tools?", a: "Yes. Integrations for Salesforce, Microsoft 365, Google Workspace, ServiceNow, Slack, Notion, and automation via Zapier/Make." },
  { q: "Can I embed Webex?", a: "Webex supports SDKs and embeddable widgets for custom apps, though it's more enterprise-focused than APIs like Whereby." },
  { q: "Who should avoid Webex?", a: "Small teams wanting ultra-lightweight meetings may prefer Zoom, Google Meet, or Whereby." },
];

function WebexToolPage() {
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
        "Webex is built for enterprise collaboration, offering meetings, calling, webinars, and hardware powered by Cisco security. It’s favored by regulated industries and hybrid offices.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Video className="h-5 w-5 text-emerald-500" />, title: "HD meetings & webinars", body: "Host meetings up to 100,000 attendees with breakout sessions, Q&A, and real-time translations." },
    { icon: <Users className="h-5 w-5 text-sky-500" />, title: "Calling + contact center", body: "Integrated cloud calling, voicemail, and contact center solutions tie into Webex Control Hub." },
    { icon: <Globe className="h-5 w-5 text-indigo-500" />, title: "Hybrid work hardware", body: "Cisco devices, Room Kits, and whiteboards optimize conference rooms and hot desks." },
    { icon: <ShieldCheck className="h-5 w-5 text-rose-500" />, title: "Enterprise security & compliance", body: "End-to-end encryption, data residency, FedRAMP, HIPAA, and granular policy controls." },
    { icon: <Plug className="h-5 w-5 text-amber-500" />, title: "Integrations & workflow apps", body: "Connect to CRM, ITSM, productivity, and automation platforms or build custom bots." },
    { icon: <Sparkles className="h-5 w-5 text-purple-500" />, title: "AI audio + video", body: "Noise removal, gesture recognition, and AI assistant features keep meetings polished." },
  ];

  const pricingTable = [
    { plan: "Free", best: "Testing & solo", limits: "40-min meetings, 100 attendees", price: "$0" },
    { plan: "Starter", best: "SMBs needing reliability", limits: "Up to 150 attendees, 5 GB cloud recording", price: "~$14.50/host/mo" },
    { plan: "Business", best: "Growing teams", limits: "Up to 200 attendees, 10 GB storage, branding", price: "~$25/host/mo" },
    { plan: "Enterprise", best: "Hybrid enterprises", limits: "Custom attendees, webinars, calling bundles, dedicated support", price: "Custom" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Objective Webex review for 2025 covering pricing, security, features, pros & cons, alternatives like Zoom and Teams, plus comparison guides."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" /> {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold md:text-4xl">{toolName} Review (2025): Features, Pricing, Pros & Cons</h1>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Webex blends Cisco-grade security with modern meeting experiences and hardware for hybrid offices.</p>
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
            <p className="mt-4 text-slate-700">Webex is Cisco’s collaboration suite covering meetings, webinars, cloud calling, and contact center. It’s trusted by enterprises needing rigorous security, hardware integrations, and admin controls.</p>
            <p className="mt-3 text-slate-700">From hybrid boardrooms to remote sellers, Webex supports polished experiences with noise removal, simultaneous translation, and high attendee caps.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Webex suits teams that can’t compromise on compliance or hardware integration.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Enterprises needing end-to-end encryption and data residency.",
                "Hybrid companies standardizing on Cisco conference rooms.",
                "Healthcare, finance, and public sector organizations.",
                "Customer success teams running webinars or trainings with high attendee caps.",
                "Global teams requiring PSTN dial-in, translation, and localized storage.",
                "IT departments wanting one vendor for meetings, calling, and contact center.",
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
            <p className="mt-3 text-slate-700">Why enterprises continue to pick Webex.</p>
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
                <p className="mt-2 text-slate-700">Paid tiers are billed annually per host. Enterprise deals bundle calling, webinars, and hardware support.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Starter for SMBs, Business for scaling teams, Enterprise when you deploy Cisco devices + advanced compliance.</p>
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
            <p className="mt-3 text-slate-700">Add-ons like Webex Webinars, Webex Events, and Contact Center carry additional costs.</p>
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
                  <li>Enterprise-grade security and compliance.</li>
                  <li>Tight hardware integration for hybrid offices.</li>
                  <li>Robust webinars, translations, and large meeting caps.</li>
                  <li>Control Hub gives admins granular oversight.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Interface feels heavier than Zoom/Meet.</li>
                  <li>Best experience often requires Cisco hardware.</li>
                  <li>Pricing can be high for small teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need lighter tools or suite-aligned options? Explore these reviews.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Full review available.</p>
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
            <p className="text-slate-700">Read these comparisons before committing.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Microsoft Teams</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webex-vs-zoom-vs-microsoft-teams">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">See how Webex stacks up against Zoom’s ubiquity and Teams’ 365 integration.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Google Meet</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webex-vs-zoom-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Perfect for IT teams comparing enterprise-grade Webex with meeting staples.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you’re in a regulated industry, require Cisco hardware, or need a single vendor for meetings + calling + webinars, Webex is worth the investment.</p>
            <p className="mt-3 text-slate-700">If you just need quick client calls, lighter tools like Zoom, Google Meet, or Whereby may be faster and cheaper.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> Webex is the enterprise collaboration suite to beat when security, compliance, and hybrid hardware matter.</p>
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
            <p>Pick Webex if you need enterprise governance, dedicated devices, and reliable webinars in one suite.</p>
            <p>Choose Zoom, Teams, or Google Meet when budget, familiarity, or suite alignment matter more than hardware integration.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default WebexToolPage;
