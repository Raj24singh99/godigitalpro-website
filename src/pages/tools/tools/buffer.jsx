import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Buffer";
const slug = "buffer";
const category = "Social Media Management";
const shortPitch =
  "Buffer is a social scheduling, publishing, and analytics platform that helps teams plan content, collaborate, and measure performance across major social channels.";
const pricingSummary =
  "Free plan for up to 3 channels with limited scheduling. Essentials starts near $6/month per channel; Teams adds collaboration/approvals; Agency bundles multiple channels at volume discounts.";
const officialUrl = "https://buffer.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/buffer.com",
  gradient: "from-blue-500 via-sky-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Later", slug: "later" },
  { name: "SocialPilot", slug: "socialpilot" },
  { name: "Canva", slug: "canva" },
  { name: "Tidio", slug: "tidio" },
];

const faqs = [
  { q: "Is Buffer free?", a: "Buffer has a free plan covering up to 3 channels with limited scheduled posts. Paid plans add more channels, scheduling, analytics, and collaboration features." },
  { q: "What networks does Buffer support?", a: "Buffer supports Instagram, Facebook, LinkedIn, X/Twitter, Pinterest, TikTok, and more, with network-specific features like IG first comment and tagging." },
  { q: "Does Buffer have analytics?", a: "Yes. Buffer offers per-channel analytics, best time to post insights, and reporting exports on paid plans." },
  { q: "Can teams collaborate in Buffer?", a: "Teams plan adds approvals, drafts, user roles, and comments so marketers and stakeholders can review content before publishing." },
  { q: "Is Buffer good for agencies?", a: "Yes. Agency plans bundle more channels and offer permissions, client separation, and reporting that agencies use for multiple brands." },
  { q: "Does Buffer include a content calendar?", a: "Buffer has a visual calendar for scheduling, drag-and-drop reordering, drafts, and queue management per channel." },
  { q: "Can Buffer help with ideation?", a: "Buffer includes post ideas, content inbox, and integration with apps like Canva to speed creative workflows." },
  { q: "Which plan should I start with?", a: "Start free for small tests, move to Essentials for more channels and analytics, and Teams/Agency if you need approvals and client management." },
];

function BufferToolPage() {
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
        "Buffer helps social teams plan, publish, and measure content across major networks with a clean UI, solid analytics, and lightweight collaboration options at a friendly price.",
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
      icon: <CalendarDays className="h-5 w-5 text-blue-500" />,
      title: "Unified social calendar",
      body: "Plan and schedule posts across channels with drag-and-drop queues, drafts, and slot management.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Network-specific workflows",
      body: "First comment on IG, hashtags, tagging, link in bio, and TikTok scheduling keep features aligned to each network.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Analytics and reporting",
      body: "Post and channel analytics, best time to post, and reports help teams optimize content cadence and creative.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and content sources",
      body: "Integrate Canva, cloud storage, and RSS/content inbox to speed creation and curation.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Collaboration and approvals",
      body: "Roles, drafts, approvals, and comments keep marketing, design, and stakeholders aligned before publishing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Affordable scaling",
      body: "Channel-based pricing keeps Buffer accessible for small teams and agencies compared to heavier suites.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Buffer review for social teams and agencies: pricing, features, pros & cons, alternatives, and comparisons vs Hootsuite/SocialPilot/Later."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
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
                  Buffer keeps social publishing organized with a clear calendar, analytics, and approvals—ideal for teams who want a leaner alternative to heavyweight suites.
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
              Buffer is a {category.toLowerCase()} platform that simplifies planning, publishing, and reporting across social networks. It’s known for its clean UI, affordable pricing, and solid analytics for small to mid-size teams.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers use Buffer to maintain consistent calendars, gain best-time-to-post insights, and collaborate with designers and stakeholders via drafts and approvals.
            </p>
            <p className="mt-3 text-slate-700">
              Integrations with Canva and content inboxes help teams ideate faster, while reporting keeps campaigns accountable.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">{toolName} fits social teams that want a streamlined, affordable stack.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Small marketing teams scheduling across multiple channels.",
                "Creators and freelancers managing a few brand accounts.",
                "Agencies handling many channels with a need for approvals and reporting.",
                "Brands needing clean analytics and best-time-to-post guidance.",
                "Teams collaborating on drafts with designers and stakeholders.",
                "Companies preferring channel-based pricing over seat-heavy suites.",
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
            <p className="mt-3 text-slate-700">Buffer focuses on scheduling, collaboration, and actionable analytics without bloat.</p>
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
                  Buffer prices by channel, with Essentials for publishing/analytics, Teams for collaboration/approvals, and Agency bundles for higher channel counts at discounts.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with Essentials; move to Teams for approvals or Agency if you manage many brands.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key inclusions</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Free</td>
                    <td className="px-4 py-3">Testing with 1-3 channels</td>
                    <td className="px-4 py-3">Limited scheduling, basic analytics</td>
                    <td className="px-4 py-3">$0</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Essentials</td>
                    <td className="px-4 py-3">Solo marketers/creators</td>
                    <td className="px-4 py-3">More channels/posts, analytics, best time to post</td>
                    <td className="px-4 py-3">~$6/channel/month</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Teams</td>
                    <td className="px-4 py-3">Collaborating teams</td>
                    <td className="px-4 py-3">Roles, approvals, comments, channel management</td>
                    <td className="px-4 py-3">~$12/channel/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Agency</td>
                    <td className="px-4 py-3">Agencies with many channels</td>
                    <td className="px-4 py-3">Higher channel bundles with discounts, collaboration tools</td>
                    <td className="px-4 py-3">Bundle pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Choose based on number of channels and need for approvals. Channel-based pricing favors lean teams compared to seat-based enterprise suites.
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
                  <li>Clean UI and quick onboarding for social teams.</li>
                  <li>Channel-specific features (IG first comment, tags, link in bio).</li>
                  <li>Good analytics and best-time recommendations.</li>
                  <li>Affordable channel-based pricing.</li>
                  <li>Approvals and comments for collaboration on paid tiers.</li>
                  <li>Integrations with Canva and content sources for speed.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Less automation depth and social listening than enterprise suites.</li>
                  <li>Advanced reporting/export options are lighter than Sprout/Hootsuite.</li>
                  <li>Approval workflows are simpler than complex agency platforms.</li>
                  <li>Per-channel billing can add up with many profiles if not bundled.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Buffer competes with broader social suites and niche schedulers. Choose based on automation depth, listening needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All support scheduling; they differ on analytics, approvals, and listening.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Buffer compares to two common social platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hootsuite</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/hootsuite-vs-buffer-vs-socialpilot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hootsuite has deeper enterprise features and listening. Buffer is simpler and cheaper for scheduling and analytics. Buffer’s UI is leaner; Hootsuite covers more enterprise needs.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Buffer for affordability and speed; choose Hootsuite if you need social listening, ads management, and advanced reporting.
              </p>
              <p className="mt-2 text-slate-900">Both support teams; pick based on feature depth vs simplicity.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Later</h3>
                <a className="text-sm font-semibold text-blue-700 hover:text-blue-600" href="/tools/compare/buffer-vs-hootsuite-vs-later">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Later excels at Instagram-first workflows and link-in-bio. Buffer is broader across networks with flexible pricing and solid analytics.
              </p>
              <p className="mt-2 text-slate-700">
                Choose Buffer for multi-network management; choose Later if Instagram/TikTok content is your primary focus.
              </p>
              <p className="mt-2 text-slate-900">Both are easy to learn; pick based on channel priority.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Buffer is worth it for teams that need reliable scheduling, analytics, and light collaboration without enterprise pricing. The UI is fast, and channel-based billing suits lean teams and agencies.
            </p>
            <p className="mt-3 text-slate-700">
              If you need deep listening, community management, or ads management, consider Hootsuite or Sprout. Otherwise, Buffer covers the essentials efficiently.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Buffer is a practical, budget-friendly pick for social publishing and reporting across multiple channels.
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
              Choose Buffer if you want streamlined scheduling, analytics, and collaboration that scale affordably across social channels.
            </p>
            <p>
              Consider Hootsuite or SocialPilot for broader automation/listening, or Later if IG/TikTok-first. Buffer balances speed, clarity, and cost for most teams.
            </p>
            <p>Buffer integrates with Canva, storage, and RSS to keep content pipelines flowing with minimal friction.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-blue-700 hover:text-blue-600" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default BufferToolPage;
