import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, BarChart3, Users, Clock, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "WebinarJam";
const slug = "webinarjam";
const category = "Webinar Platform";
const shortPitch =
  "WebinarJam is a live webinar, automated event, and sales presentation platform that helps marketers host high-converting sessions with chat, offers, and evergreen replays.";
const pricingSummary =
  "Plans start near $79/mo (billed annually) for 500 attendees, $209/mo for 2,000 attendees, and enterprise tiers for 5,000+. Each plan includes multiple presenters, automated replays, and marketing automation tools.";
const officialUrl = "https://home.webinarjam.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/webinarjam.com",
  gradient: "from-rose-500 via-red-500 to-amber-500",
  glow: "shadow-[0_20px_80px_rgba(244,114,182,0.25)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Demio", slug: "demio" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
  { name: "Webex", slug: "webex" },
  { name: "Wistia", slug: "wistia" },
];

const faqs = [
  { q: "Is WebinarJam cloud-based?", a: "Yes. WebinarJam is a hosted webinar platform accessible via browsers with optional dial-in. Nothing to install for attendees." },
  { q: "Does WebinarJam support automated webinars?", a: "Absolutely. Evergreen webinars can run on autopilot with simulated chat, timed offers, and email sequences." },
  { q: "How many attendees can join?", a: "Basic plans support 500 attendees, Professional 2,000, Enterprise 5,000. Each includes 2–6 presenters and multiple sessions." },
  { q: "Can I run paid webinars?", a: "Yes. You can integrate Stripe/PayPal or third-party checkout tools, then gate webinars via unique links and passwords." },
  { q: "What integrations exist?", a: "Native integrations with HubSpot, ActiveCampaign, Infusionsoft, Mailchimp, Zapier, and more keep registrations + attendance synced." },
  { q: "How does WebinarJam compare to Zoom or Demio?", a: "WebinarJam focuses on marketing features—timed offers, hybrid events, evergreen replays—whereas Zoom is general-purpose and Demio is simpler. See the comparisons below." },
  { q: "Does WebinarJam have analytics?", a: "Yes. Get registration sources, live attendance, retention, poll results, and offer conversion reports to optimize funnels." },
  { q: "Can I co-host or bring attendees on stage?", a: "Yes. Promote attendees to presenters, share screens, play videos, and use moderated Q&A." },
];

function WebinarJamToolPage() {
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
        "WebinarJam is built for marketers who sell, educate, and onboard via webinars. It bundles registration funnels, live chat, offers, evergreen replays, and analytics in one hosted experience.",
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
    { icon: <Video className="h-5 w-5 text-rose-500" />, title: "Live + automated webinars", body: "Host live launches, replays, and hybrid events with flexible scheduling, presenter green rooms, and always-on rooms." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Timed offers + CTAs", body: "Display offers, countdowns, or download buttons at precise moments to maximize conversions during live sessions." },
    { icon: <Users className="h-5 w-5 text-emerald-500" />, title: "Audience engagement", body: "Polls, Q&A, chat moderation, attendee spotlight, and screen sharing keep audiences involved." },
    { icon: <Clock className="h-5 w-5 text-sky-500" />, title: "Evergreen replays", body: "Automated sessions simulate chat and offer drops so you can scale education or sales content without live hosting." },
    { icon: <BarChart3 className="h-5 w-5 text-indigo-500" />, title: "Analytics + CRM sync", body: "Track registrations, attendance, retention, and offer conversions while pushing data to CRM/email platforms." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations + API", body: "Connect to ActiveCampaign, HubSpot, Infusionsoft, Zapier, and custom webhooks to automate reminders and follow-ups." },
  ];

  const pricingTable = [
    { plan: "Starter", best: "500 attendee launches", limits: "2 presenters, 1 hour max session, basic automations", price: "~$79/mo billed annually" },
    { plan: "Professional", best: "Scaling marketers & agencies", limits: "4 presenters, 2,000 attendees, always-on rooms, panic button", price: "~$209/mo billed annually" },
    { plan: "Enterprise", best: "Large events", limits: "6 presenters, 5,000 attendees, custom panic rooms, concierge support", price: "~$299/mo billed annually" },
    { plan: "EverWebinar add-on", best: "Automated funnels", limits: "Evergreen replays, simulated chat/attendee logic", price: "Bundled or ~$49/mo" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Learn if WebinarJam fits your 2025 webinar stack. We cover pricing, live vs evergreen features, pros & cons, alternatives, and head-to-head comparisons with Demio and Zoom."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-amber-200/30 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-rose-100 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Marketers lean on WebinarJam when live launches, evergreen funnels, and high attendee capacity matter more than everyday meetings.</p>
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
            <p className="mt-4 text-slate-700">WebinarJam is a webinar marketing platform with landing pages, automated email reminders, live streaming, chat, polls, offers, and evergreen replays. It’s purpose-built for marketers and educators who want sales-ready webinars.</p>
            <p className="mt-3 text-slate-700">Use it for product launches, workshops, onboarding series, and recurring training that needs analytics and automation beyond standard meeting tools.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Consider WebinarJam if webinars fuel your acquisition or onboarding.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Course creators hosting launches for new cohorts.",
                "SaaS teams running weekly demos + onboarding.",
                "Agencies selling retainers via live workshops.",
                "Membership sites running paid trainings.",
                "Customer success teams educating enterprise accounts.",
                "Marketing teams syndicating evergreen webinars 24/7.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Everything you need to produce, present, and optimize webinars in one place.</p>
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
                <p className="mt-2 text-slate-700">WebinarJam bills annually, with attendee caps and automation depth rising per plan.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Professional if you regularly host 500+ live attendees or want hybrid rooms. Upgrade when evergreen replays + big launches need more seats.</p>
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
            <p className="mt-3 text-slate-700">Note: Pricing is charged annually. Factor EverWebinar or third-party checkout costs if you run evergreen funnels.</p>
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
                  <li>Built-in registration funnels + email reminders.</li>
                  <li>Timed offers, polls, Q&A, and attendee spotlight.</li>
                  <li>Evergreen replays with simulated engagement.</li>
                  <li>High attendee caps without needing multiple tools.</li>
                  <li>Deep integrations with CRMs and marketing automation.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Annual billing only; higher upfront commitment.</li>
                  <li>Interface feels dated compared to Demio or Zoom.</li>
                  <li>Requires strong internet/upload speeds for hosts.</li>
                  <li>No native CRM; rely on integrations for segmentation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare other webinar or video platforms if you prefer lighter tools or enterprise suites.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Read the full review.</p>
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
            <p className="text-slate-700">Dive deeper with these comparisons.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Demio vs Zoom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webinarjam-vs-demio-vs-zoom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">WebinarJam excels at sales webinars, Demio is modern and easy for recurring education, and Zoom is ubiquitous for general meetings. View the feature-by-feature breakdown before choosing.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Demio vs GoTo Meeting</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/webinarjam-vs-demio-vs-goto-meeting">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">GoTo Meeting (and GoTo Webinar) lean enterprise, Demio is sleek for marketers, and WebinarJam piles on automation. Our comparison covers pricing, attendee caps, and engagement tooling.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If webinars drive a meaningful slice of revenue, WebinarJam’s marketing focus justifies the spend. Evergreen replays alone can offset the annual license.</p>
            <p className="mt-3 text-slate-700">If you mostly need occasional training calls or small-group meetings, Zoom or Demio may be cheaper.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> WebinarJam is a marketer’s webinar engine—great for launches, evergreen funnels, and high-volume education.</p>
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
            <p>Choose WebinarJam if you need a webinar machine that handles registration, engagement, and evergreen replays without additional software.</p>
            <p>Consider Demio or Zoom if you prioritize modern UI or multipurpose meetings.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default WebinarJamToolPage;
