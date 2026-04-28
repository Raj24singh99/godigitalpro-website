import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Globe, Monitor, Users, Radio, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Whereby";
const slug = "whereby";
const category = "Video Collaboration";
const shortPitch =
  "Whereby is a lightweight, browser-native video meeting platform that gives agencies, startups, and product teams reliable rooms with zero downloads plus embeddable video APIs for apps.";
const pricingSummary =
  "Whereby has a free plan for personal rooms, Pro plans from ~$9.99/mo per host, Business plans around $14.99/mo per host, and Embedded Video APIs that scale usage-based.";
const officialUrl = "https://whereby.com";
const affiliateUrl = `/go/${slug}`;
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/whereby.com",
  gradient: "from-amber-400 via-orange-500 to-rose-500",
  glow: "shadow-[0_20px_80px_rgba(251,191,36,0.25)]",
};

const alternatives = [
  { name: "Zoom", slug: "zoom" },
  { name: "Google Meet", slug: "google-meet" },
  { name: "Microsoft Teams", slug: "microsoft-teams" },
  { name: "Webex", slug: "webex" },
  { name: "GoTo Meeting", slug: "goto-meeting" },
];

const faqs = [
  { q: "Is Whereby free?", a: "Yes. Whereby Free includes one room with up to 100 participants and 45-minute group meetings. Paid plans lift limits, add recording, branding, and admin controls." },
  { q: "Does Whereby require downloads?", a: "No. Whereby runs entirely in the browser, making it ideal for client calls, recruiting, and customer meetings where you want minimal friction." },
  { q: "Can I embed Whereby into my product?", a: "Yes. Whereby Embedded lets you drop secure video rooms into your SaaS, marketplace, or LMS via simple APIs, Web Components, or React hooks." },
  { q: "How secure is Whereby?", a: "Whereby is GDPR compliant, offers Norwegian/EU hosting, supports SSO (Business+), locked rooms, and moderations controls." },
  { q: "Does Whereby have recordings?", a: "Pro and Business plans include cloud recording. Embedded APIs can stream to your own storage for compliance-heavy workflows." },
  { q: "How does Whereby compare with Zoom?", a: "Zoom is deeper for webinars and enterprise admin. Whereby prioritizes ease, embeddability, and privacy with fewer toggles. See our comparison below." },
  { q: "Can I brand my meeting rooms?", a: "Yes. Add custom logos, meeting backgrounds, room links, and waiting room text. Embedded video allows full design control." },
  { q: "Who uses Whereby?", a: "Agencies, telehealth providers, marketplaces, and hybrid teams who need fast meetings or embedded video inside their product." },
];

function WherebyToolPage() {
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
        "Whereby provides frictionless video rooms plus embeddable video APIs for SaaS companies. It is adored by agencies and startups that want reliable meetings without desktop downloads.",
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
    { icon: <Globe className="h-5 w-5 text-amber-500" />, title: "Browser-native meetings", body: "Guests join instantly by clicking a branded link. No downloads or logins required, even on mobile." },
    { icon: <Monitor className="h-5 w-5 text-rose-500" />, title: "Embedded video APIs", body: "Drop live video into your app via prebuilt components, token-based security, and GDPR-ready hosting." },
    { icon: <Users className="h-5 w-5 text-emerald-500" />, title: "Custom branded rooms", body: "Add logos, colors, or background images to rooms and waiting screens to keep meetings on brand." },
    { icon: <Radio className="h-5 w-5 text-indigo-500" />, title: "Moderation + collaboration", body: "Host controls, breakout groups, integrations with Miro/Google Docs, and in-room chat keep sessions structured." },
    { icon: <ShieldCheck className="h-5 w-5 text-sky-500" />, title: "Privacy-first infrastructure", body: "EU data hosting, E2EE options, SSO, and room locking satisfy privacy-conscious industries." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Integrations and automations", body: "Connect to HubSpot, Slack, Calendly, Zapier, and CRMs so meetings trigger workflows automatically." },
  ];

  const pricingTable = [
    { plan: "Free", best: "Personal rooms & quick tests", limits: "One room, 45-min group calls, 100 participants", price: "$0" },
    { plan: "Pro", best: "Freelancers & small agencies", limits: "Three rooms, 12-hour meetings, recordings, custom branding", price: "~$9.99/mo per host" },
    { plan: "Business", best: "Teams needing admin", limits: "Unlimited rooms, SSO, priority support, analytics", price: "~$14.99/mo per host" },
    { plan: "Embedded", best: "Products embedding video", limits: "Usage-based API pricing, HIPAA/GDPR options", price: "Starts ~$9.99/mo + usage" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Whereby review for 2025 covering pricing, embedded video APIs, pros & cons, best use cases, alternatives, and how it stacks up versus Zoom and Google Meet."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">Whereby prioritizes ease of use for guests and gives builders an API to embed secure video anywhere.</p>
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
            <p className="mt-4 text-slate-700">Whereby is a privacy-first video collaboration suite. It runs in any browser, supports branded rooms, and offers embeddable video components for SaaS and marketplace products.</p>
            <p className="mt-3 text-slate-700">Teams use Whereby to make client calls painless, run remote workshops, or power telehealth/consulting experiences inside their product.</p>
            <p className="mt-3 text-slate-700">Because it’s browser-first and host-managed, guests skip downloads—ideal for agencies, telehealth, and global partners.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Choose Whereby when join experience and embeddability matter most.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies hosting design reviews, client retro, or strategy workshops.",
                "Telehealth startups embedding HIPAA-ready video into apps.",
                "Marketplaces facilitating seller-buyer consultations via embedded rooms.",
                "Recruiters wanting quick interviews without requiring apps.",
                "Remote teams running async standups and project syncs.",
                "Product teams who need EU-hosted video with privacy assurances.",
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
            <p className="mt-3 text-slate-700">Lighter than enterprise suites yet powerful enough for modern GTM and product teams.</p>
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
                <p className="mt-2 text-slate-700">Free gets you started. Paid tiers unlock longer meetings, recordings, admin controls, and Embedded APIs.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Freelancers stick with Pro. Agencies and SaaS teams move to Business for SSO + analytics. Builders choose Embedded.</p>
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
            <p className="mt-3 text-slate-700">Need HIPAA or telehealth compliance? Contact sales for Business + Embedded pricing with BAAs.</p>
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
                  <li>Browser-native; perfect guest experience.</li>
                  <li>Embedded APIs for custom products.</li>
                  <li>EU hosting + GDPR-first posture.</li>
                  <li>Simple admin UI; little training needed.</li>
                  <li>Integrates with scheduling, CRM, and automation tools.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Fewer webinar/event features than Zoom or WebinarJam.</li>
                  <li>No native phone dial-in on lower tiers.</li>
                  <li>Embedded pricing increases with usage; budget carefully.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Need deeper admin controls or bundled suites? Review these options.</p>
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
            <p className="text-slate-700">Review our dedicated comparisons for the most common evaluations.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Google Meet</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/whereby-vs-zoom-vs-google-meet">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Zoom wins on webinars and scale, Google Meet is bundled with Workspace, and Whereby is best when you want zero-download meetings and privacy-first hosting.</p>
              <p className="mt-2 text-slate-900">See feature-by-feature scores in the guide.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoom vs Microsoft Teams</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/whereby-vs-zoom-vs-microsoft-teams">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Teams is great when you live in Microsoft 365, Zoom is the enterprise standard, and Whereby wins when UX + embeddability beat everything else.</p>
              <p className="mt-2 text-slate-900">Read the teardown before choosing your stack.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you value frictionless guest experience or need embedded video, the answer is usually yes. Whereby trades a few advanced webinar features for simplicity and developer-friendly APIs.</p>
            <p className="mt-3 text-slate-700">If you require complex webinars, marketing automation, or PSTN dial-ins across the globe, Zoom or Teams might fit better.</p>
            <p className="mt-3 text-slate-900 font-semibold"><strong>Verdict:</strong> Whereby is a top pick for agencies, telehealth, and SaaS products needing privacy-first meetings that just work.</p>
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
            <p>Choose Whereby for lightning-fast, browser-based calls and embedded video experiences.</p>
            <p>Consider Zoom, Teams, or Webex if you need complex webinars, PSTN, or enterprise policies.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds right for your stack, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default WherebyToolPage;
