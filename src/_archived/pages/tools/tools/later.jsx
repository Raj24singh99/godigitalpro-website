import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, Calendar, Camera, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Later";
const slug = "later";
const category = "Social scheduling";
const shortPitch =
  "Later is an Instagram- and TikTok-first social scheduler with visual planning, media management, and analytics for marketing teams.";
const pricingSummary =
  "Starter plans begin around $25/month for 1 user/profile per platform; Growth/Advanced add more users, profiles, analytics, and collaboration features.";
const officialUrl = "https://later.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/later.com",
  gradient: "from-indigo-500 via-purple-500 to-pink-500",
  glow: "shadow-[0_20px_80px_rgba(147,51,234,0.18)]",
};

const alternatives = [
  { name: "Buffer", slug: "buffer" },
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Tailwind", slug: "tailwind" },
  { name: "SocialPilot", slug: "socialpilot" },
  { name: "Canva", slug: "canva" },
];

const faqs = [
  {
    q: "Is Later good for Instagram and TikTok?",
    a: "Yes. Later is built for visual planning on IG and TikTok with grid previews, video scheduling, and best-time posting suggestions.",
  },
  {
    q: "Which platforms does Later support?",
    a: "Instagram, TikTok, Facebook, Pinterest, LinkedIn, and Twitter/X. Feature depth is strongest for IG/TikTok visual workflows.",
  },
  {
    q: "Does Later have analytics?",
    a: "Yes. Later provides performance analytics, best times to post, and link-in-bio insights. Higher tiers add deeper reporting and exporting.",
  },
  {
    q: "Can teams collaborate in Later?",
    a: "Growth and Advanced add more users, approvals, and media library collaboration. Starter is mostly single-user.",
  },
  {
    q: "Does Later include link in bio?",
    a: "Yes. Linkin.bio lets you create a shoppable/linked grid with click tracking built in.",
  },
  {
    q: "Is there a mobile app?",
    a: "Later has mobile apps for planning, media upload, and publishing, plus desktop visual calendar for full control.",
  },
  {
    q: "Does Later generate captions?",
    a: "It provides caption ideas and saves caption templates. For AI writing, pair it with an AI copy tool.",
  },
  {
    q: "Are there posting limits?",
    a: "Plans limit the number of posts per profile and profiles per plan. Check your tier for monthly post allowances.",
  },
];

function LaterPage() {
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
        "Later is a social scheduling platform built around Instagram and TikTok. It offers visual calendars, media management, link-in-bio, and analytics so teams can plan and publish consistently.",
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
      icon: <Calendar className="h-5 w-5 text-indigo-600" />,
      title: "Visual content calendar",
      body: "Drag-and-drop scheduling with grid preview for Instagram and TikTok, plus other platforms.",
    },
    {
      icon: <Camera className="h-5 w-5 text-rose-500" />,
      title: "Media management",
      body: "Upload, tag, and organize media; reuse assets across posts and campaigns with a shared library.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-amber-500" />,
      title: "Linkin.bio",
      body: "Create a linked/shoppable grid with click tracking to route traffic from social profiles.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "Analytics and best times",
      body: "Performance analytics and best-time suggestions to optimize reach; exports on higher tiers.",
    },
    {
      icon: <Plug className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Integrates with Canva, Unsplash, and Zapier. Mobile apps support on-the-go publishing.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      title: "Collaboration controls",
      body: "Multi-user access, approvals, and permissions on Growth/Advanced for team workflows.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Later review for social teams covering pricing, features, pros & cons, alternatives, and how it compares to Buffer and Hootsuite."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-indigo-500" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-purple-200 blur-3xl" />
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
                  Later helps teams plan visual content, manage media, and publish consistently on IG/TikTok and beyond with link-in-bio and analytics included.
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
              {toolName} is a {category.toLowerCase()} platform focused on visual planning for Instagram and TikTok. It provides a visual calendar, media library, analytics, link-in-bio, and best-time suggestions to keep teams consistent.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and social teams use Later for drag-and-drop scheduling, approvals, and link-in-bio tracking without heavy enterprise UI. If you need deep listening or complex inbox features, Hootsuite or Sprout may fit better.
            </p>
            <p className="mt-3 text-slate-700">
              Later balances usability and price, with stronger features on the platforms it prioritizes (IG/TikTok/Pinterest).
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Later is ideal for visually led social teams and creators.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Instagram/TikTok-first teams planning feeds and Reels.",
                "Creators and small brands wanting link-in-bio and scheduling in one place.",
                "Agencies managing calendars and approvals for multiple clients.",
                "Marketers who want best-time suggestions and simple analytics.",
                "Teams needing media library sharing across campaigns.",
                "Brands pairing Later with Canva for quick creative swaps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Later focuses on visual scheduling, media, and link-in-bio performance.</p>
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
                  Pricing scales by users, profiles per platform, and posts. Starter covers one user/profile per platform with post limits; Growth/Advanced expand profiles, approvals, and analytics. Annual billing lowers the monthly rate.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on Starter to test; upgrade to Growth for more profiles/users and better analytics; Advanced for teams needing approvals and higher limits.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Creators/solo marketers</td>
                    <td className="px-4 py-3">1 user, 1 profile per platform, post limits</td>
                    <td className="px-4 py-3">~$25/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Growth</td>
                    <td className="px-4 py-3">Small teams/agencies</td>
                    <td className="px-4 py-3">More profiles, users, approvals, better analytics</td>
                    <td className="px-4 py-3">~$45–$60/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced</td>
                    <td className="px-4 py-3">Teams needing higher limits</td>
                    <td className="px-4 py-3">Highest limits, more users/profiles, advanced reporting</td>
                    <td className="px-4 py-3">$80+/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Watch post limits per profile on lower tiers. If you manage many brands or need deep listening/inbox, consider Hootsuite or Sprout. For visual-first planning at a fair price, Later hits a sweet spot.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-indigo-50 p-5 shadow-sm ring-1 ring-indigo-100">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Great visual planner for IG/TikTok with grid preview.</li>
                  <li>Linkin.bio with click tracking included.</li>
                  <li>Media library and best-time suggestions.</li>
                  <li>Integrations with Canva, Unsplash, Zapier.</li>
                  <li>Fair pricing for small teams and creators.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Heavier social inbox/listening requires other tools.</li>
                  <li>Post limits on lower tiers can constrain heavy posters.</li>
                  <li>Automation/bot features are limited vs enterprise suites.</li>
                  <li>Advanced reporting/exporting on higher tiers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Need deeper listening, more automation, or different pricing? Consider these social scheduling tools.
            </p>
            <p className="mt-2 text-slate-700">Each links to a full review page.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Social scheduler alternative.</p>
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
            <p className="text-slate-700">Here’s how Later compares to popular social schedulers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Buffer vs Hootsuite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/buffer-vs-hootsuite-vs-later">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Buffer is lightweight and affordable; Hootsuite offers deeper listening and inbox; Later excels for IG/TikTok visual planning and link-in-bio tracking.
              </p>
              <p className="mt-2 text-slate-900">
                Choose Later if your priority is visual planning for IG/TikTok; choose Buffer for simple publishing; choose Hootsuite for robust monitoring/inbox.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Later is worth it for IG/TikTok-focused teams needing visual planning, media organization, link-in-bio, and solid analytics at a fair price. It keeps scheduling simple without enterprise sprawl.
            </p>
            <p className="mt-3 text-slate-700">
              If you need advanced listening, inbox, or automation, consider Hootsuite or Sprout. For budget publishing, Buffer is a good alternative. For Pinterest-heavy workflows, Tailwind may fit better.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> {toolName} is a strong pick for visually led social teams that want consistency without heavy overhead.
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
              Choose {toolName} if your social stack is IG/TikTok-first and you want visual planning, link-in-bio, and analytics without heavy enterprise costs. It’s great for creators, brands, and agencies.
            </p>
            <p>
              Consider Buffer for simplest publishing, Hootsuite for listening/inbox depth, or Tailwind for Pinterest-heavy schedules. Pair Later with Canva or an AI writer for faster creative and captions.
            </p>
            <p>{toolName} fits smoothly into modern social workflows, keeping content organized and consistent across channels.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default LaterPage;
