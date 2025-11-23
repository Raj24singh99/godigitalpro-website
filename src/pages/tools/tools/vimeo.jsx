import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, Film, Globe, BarChart3, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Vimeo";
const slug = "vimeo";
const category = "Video Hosting";
const shortPitch =
  "Vimeo is a professional video platform that offers branded hosting, OTT distribution, live events, and collaboration tools for marketing, creative, and media teams.";
const pricingSummary =
  "Plans start with Vimeo Starter at ~$12/mo billed annually, Standard at ~$20/mo, Advanced at ~$65/mo with live events and marketing automations, and Enterprise/OTT plans for large audiences.";
const officialUrl = "https://vimeo.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/vimeo.com",
  gradient: "from-blue-500 via-sky-500 to-cyan-500",
  glow: "shadow-[0_20px_80px_rgba(14,165,233,0.3)]",
};

const alternatives = [
  { name: "Wistia", slug: "wistia" },
  { name: "InVideo", slug: "invideo" },
  { name: "Veed", slug: "veed" },
  { name: "Loom", slug: "loom" },
  { name: "Descript", slug: "descript" },
];

const faqs = [
  { q: "Is Vimeo still relevant?", a: "Yes. Vimeo is the go-to for marketers, creative agencies, and media teams that need branded players, OTT distribution, and collaboration features beyond YouTube." },
  { q: "Does Vimeo support live streaming?", a: "Advanced and Enterprise plans include live streaming with graphics, Q&A, and simultaneous multistreaming to social channels." },
  { q: "Can I monetize videos on Vimeo?", a: "Yes. Vimeo OTT lets you build subscription-based video services, sell videos, or rent content with built-in billing." },
  { q: "How is Vimeo different from Wistia?", a: "Vimeo is stronger for creative collaboration, OTT distribution, and live events. Wistia focuses on marketing analytics and lead capture. See the comparison below." },
  { q: "Does Vimeo integrate with marketing tools?", a: "Integrations include HubSpot, Mailchimp, Marketo, Google Analytics, Dropbox, Frame.io, and Zapier." },
  { q: "Can teams review and approve edits?", a: "Yes. Vimeo Review Tools let clients comment on frames, manage versions, and approve updates." },
  { q: "Does Vimeo offer 4K hosting?", a: "Yes. Upload 4K HDR content, embed anywhere, or send to OTT apps with adaptive streaming." },
  { q: "Is there a desktop or mobile app?", a: "You can upload, edit, and livestream from desktop/mobile apps, or use Vimeo Record for asynchronous screen recordings." },
];

function VimeoToolPage() {
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
      reviewBody: "Vimeo gives creative teams control over hosting, streaming, and OTT distribution with collaboration and security features.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Video className="h-5 w-5 text-blue-500" />, title: "Branded players & embeds", body: "Customize player colors, overlays, and end screens. Disable ads and recommended videos for a polished experience." },
    { icon: <Film className="h-5 w-5 text-indigo-500" />, title: "Collaboration & review tools", body: "Upload edits, gather timestamped feedback, version control, and approvals directly in Vimeo." },
    { icon: <Globe className="h-5 w-5 text-emerald-500" />, title: "OTT & monetization", body: "Launch subscription or transactional video services with apps for Roku, Apple TV, iOS, and Android." },
    { icon: <BarChart3 className="h-5 w-5 text-amber-500" />, title: "Analytics & engagement", body: "Track views, completion rates, heatmaps, and conversions; integrate with Google Analytics or BI tools." },
    { icon: <Plug className="h-5 w-5 text-rose-500" />, title: "Integrations & workflow", body: "Connect to editing suites, cloud storage, CRMs, and marketing platforms using native integrations or Zapier." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-500" />, title: "Security & privacy", body: "Password protection, domain-level privacy, SSO, IP restrictions, and DRM keep content secure." },
  ];

  const pricingTable = [
    { plan: "Starter", best: "Creators & freelancers", limits: "30 videos, basic analytics, video maker", price: "$12/mo billed annually" },
    { plan: "Standard", best: "Marketing teams", limits: "Unlimited projects, collaboration tools, brand kit", price: "$20/mo billed annually" },
    { plan: "Advanced", best: "Live events & marketing automation", limits: "Live streaming, events, marketing integrations", price: "$65/mo billed annually" },
    { plan: "Enterprise / OTT", best: "Media & broadcasters", limits: "Custom storage, SSO, OTT apps, dedicated support", price: "Custom" },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Hands-on Vimeo review covering pricing, features, pros & cons, alternatives, and comparisons with Wistia and YouTube for 2025."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[{ name: "Home", url: buildCanonical("/") }, { name: "Tools Hub", url: buildCanonical("/tools") }, { name: toolName, url: canonical }]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
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
                  Vimeo powers branded video experiences, live events, OTT apps, and collaboration so your team owns distribution end-to-end.
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
              Vimeo is a professional hosting and distribution platform for marketing videos, creative work, OTT services, and internal communications. It eliminates ads, offers branding control, and provides collaboration tools for stakeholders.
            </p>
            <p className="mt-3 text-slate-700">Marketing teams use Vimeo for webinars, gated video hubs, and embedded demos. Creative teams use it for review/approval workflows and high-fidelity playback.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Vimeo fits teams that need polished video experiences without relying on ad-supported platforms.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams embedding videos on landing pages without ads.",
                "Creative agencies delivering edits and gathering approvals.",
                "Media brands launching subscription or transactional OTT services.",
                "Event teams hosting live streams with backup recording.",
                "Internal comms teams streaming all-hands and training securely.",
                "Course creators selling premium video libraries.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Vimeo combines hosting, collaboration, OTT, and live streaming in one platform.</p>
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
                <p className="mt-2 text-slate-700">Plans scale with storage, collaboration, live streaming, and OTT features.</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most marketing teams start on Standard; Advanced unlocks automations + live streaming.</p>
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
            <p className="mt-3 text-slate-700">Enterprise and OTT deals include SSO, live event support, and custom SLAs.</p>
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
                  <li>Ad-free, fully branded video player.</li>
                  <li>Collaboration tools streamline review cycles.</li>
                  <li>Live streaming + events baked in.</li>
                  <li>OTT apps for monetization.</li>
                  <li>Strong privacy/security controls.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Marketing analytics lighter than Wistia.</li>
                  <li>Advanced/Enterprise pricing higher than YouTube/Veed.</li>
                  <li>Limited native lead capture without integrations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare these platforms if you need marketing analytics, asynchronous recording, or video editing workflows.</p>
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
            <p className="text-slate-700">Read these comparisons to pick the right fit.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Wistia vs Loom</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wistia-vs-vimeo-vs-loom">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">Compare Vimeo’s hosting/OTT strengths to Wistia’s marketing analytics and Loom’s async recording.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Wistia vs Descript</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/wistia-vs-vimeo-vs-descript">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">See whether Vimeo’s hosting, Wistia’s marketing focus, or Descript’s editing workflow best fit your video stack.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you need polished video experiences, live streaming, or OTT distribution without ads, Vimeo is absolutely worth the subscription.</p>
            <p className="mt-3 text-slate-700">If analytics, lead capture, and CRM integrations are more important than live video, evaluate Wistia or Vidyard.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Vimeo balances creative control with enterprise distribution, making it a dependable choice for marketing and media teams.
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
            <p>Choose Vimeo if you want ad-free hosting, live streaming, and OTT capabilities with strong collaboration workflows.</p>
            <p>Consider Wistia for marketing analytics or Loom/Descript for async recording and editing.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, you can try it here: <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
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

export default VimeoToolPage;
