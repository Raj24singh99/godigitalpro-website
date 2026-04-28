import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, BarChart2, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Plann";
const slug = "plann";
const category = "Social Media Scheduling";
const shortPitch =
  "Plann is a social media scheduler and planner for Instagram, TikTok, Facebook, and more, with drag-and-drop grids, analytics, and content ideas.";
const pricingSummary =
  "Freemium with limits on profiles and posts; paid tiers add more profiles, scheduled posts, team seats, and deeper analytics.";
const officialUrl = "https://www.plannthat.com";
const ratingValue = 4.0;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/plannthat.com",
  gradient: "from-blue-500 via-sky-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.26)]",
};

const alternatives = [
  { name: "Planoly", slug: "planoly" },
  { name: "Later", slug: "later" },
  { name: "Buffer", slug: "buffer" },
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Plann vs Planoly vs Later", slug: "compare/plann-vs-planoly-vs-later", isComparison: true },
];

const faqs = [
  { q: "What is Plann?", a: "Plann is a social media planning and scheduling tool with drag-and-drop grids, captions, analytics, and idea prompts." },
  { q: "Who is it for?", a: "Creators, small businesses, and social teams that need visual planning for Instagram and cross-posting to other networks." },
  { q: "Which platforms are supported?", a: "Instagram, TikTok, Facebook, and others; check current list for auto-publish support." },
  { q: "How is pricing structured?", a: "Free plan with limited profiles/posts; paid tiers add more profiles, posts, seats, and analytics." },
  { q: "Does it support auto-publish?", a: "Yes for supported platforms; some content types may require reminders." },
  { q: "Can I collaborate with a team?", a: "Paid plans include team seats and approval workflows." },
  { q: "Does it include analytics?", a: "Yes. Insights on engagement and best times to post are available on paid tiers." },
  { q: "Is it a design tool?", a: "Light editing and text help are included, but pair with design tools for heavy creative work." },
];

function PlannToolPage() {
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
        "Plann offers visual grids, scheduling, and analytics for social media. It’s handy for Instagram-first workflows with cross-posting to other platforms.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  const featureBlocks = [
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Visual grid planning", body: "Drag-and-drop grid to plan Instagram aesthetics and sequences." },
    { icon: <BarChart2 className="h-5 w-5 text-blue-600" />, title: "Scheduling & auto-publish", body: "Queue posts and publish automatically where supported." },
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Captions & ideas", body: "Caption prompts, hashtags, and content ideas to speed drafting." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "Cross-posting", body: "Plan and repurpose content across multiple platforms." },
    { icon: <Plug className="h-5 w-5 text-emerald-500" />, title: "Team collaboration", body: "Approvals and shared calendars on higher tiers." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Analytics", body: "Engagement insights and best-times data to optimize posting." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Plann review: pricing, features, pros & cons, and alternatives like Planoly, Later, and Buffer for social scheduling."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-blue-600" />
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
                  {toolName} helps plan and schedule social posts with a visual grid—great for Instagram-first workflows and cross-posting. Review brand fit before publishing.
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
              {toolName} is a social media scheduler with visual grid planning, captions, analytics, and cross-posting. It is especially strong for Instagram planning while supporting other platforms.
            </p>
            <p className="mt-3 text-slate-700">Use it to organize content calendars, queue posts, and track engagement without complex tools.</p>
            <p className="mt-3 text-slate-700">Pair with design apps for creative assets and with analytics for deeper performance views.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for creators and small teams managing multi-platform posting.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Creators planning Instagram/TikTok grids and stories.",
                "Small businesses scheduling posts across IG, FB, and more.",
                "Agencies coordinating client calendars and approvals.",
                "Social managers testing captions and hashtags quickly.",
                "Teams needing best-times suggestions and lightweight analytics.",
                "Users wanting a visual planner without enterprise complexity.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">{toolName} focuses on visual planning, scheduling, and simple analytics.</p>
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
                  Free plan includes limited profiles and posts. Paid plans add more profiles, scheduled posts, team seats, and deeper analytics. Pricing scales with number of profiles and users.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start free; upgrade when you need more profiles, auto-publish, or team approvals.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Tier</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing/light solo use</td>
                    <td className="px-4 py-3">Limited profiles/posts, basic planner</td>
                    <td className="px-4 py-3">Good to trial</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pro</td>
                    <td className="px-4 py-3">Creators/SMBs</td>
                    <td className="px-4 py-3">More profiles, auto-publish, analytics</td>
                    <td className="px-4 py-3">Monthly/annual pricing</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Agencies/social teams</td>
                    <td className="px-4 py-3">Team seats, approvals, higher limits</td>
                    <td className="px-4 py-3">Price scales with profiles/users</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Compare with Planoly/Later for feature coverage and platform support. Verify auto-publish support for each network.</p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Visual grid for Instagram planning.</li>
                  <li>Cross-posting and auto-publish (supported types).</li>
                  <li>Caption prompts and hashtag help.</li>
                  <li>Team collaboration on higher tiers.</li>
                  <li>Lightweight analytics and best-times suggestions.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Free plan is limited; serious use needs paid tiers.</li>
                  <li>Not a full design tool—needs external creative apps.</li>
                  <li>Auto-publish varies by platform/content type.</li>
                  <li>Analytics lighter than enterprise suites.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare {toolName} with other social schedulers.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Open comparison page." : "View the full review and pricing details."}</p>
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
            <p className="text-slate-700">See how {toolName} compares to other schedulers.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Planoly</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/planoly">
                  View Planoly
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Planoly is also grid-focused for Instagram; {toolName} offers similar planning plus cross-posting. Choose based on UI preference and platform coverage.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Later</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/later">
                  View Later
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Later has strong link-in-bio and media management; {toolName} focuses on visual planning and caption help. Pick based on feature depth vs simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you plan Instagram-first content and want an easy grid scheduler with cross-posting. It speeds planning for small teams and creators.
            </p>
            <p className="mt-3 text-slate-700">Upgrade when you need more profiles, auto-publish, and team approvals. Keep design tools for asset creation.</p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A good pick for visual social planning; best for creators and SMBs that want simplicity over enterprise depth.
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
              Choose {toolName} if you need a visual planner and scheduler for Instagram and cross-platform posts without heavy enterprise features.
            </p>
            <p>
              Consider Planoly or Later for similar planners, or Buffer/Hootsuite for broader social suites; {toolName} shines for simplicity and grid-first planning.
            </p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit, try it here:{" "}
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
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900">
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default PlannToolPage;
