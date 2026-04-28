import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SocialBee";
const slug = "socialbee";
const category = "Social Media Scheduling";
const shortPitch =
  "SocialBee is a social media scheduling and content management platform that organizes posts by categories, recycles evergreen content, and offers concierge services.";
const pricingSummary =
  "Tiered plans by profiles, posting volume, and users. Higher tiers add more profiles, workspaces, and advanced features; concierge services are add-ons.";
const officialUrl = "https://www.socialbee.com";
const ratingValue = 4.2;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/socialbee.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Buffer", slug: "buffer" },
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Later", slug: "later" },
  { name: "SocialPilot", slug: "socialpilot" },
  { name: "Planoly", slug: "planoly" },
];

const faqs = [
  {
    q: "What is SocialBee?",
    a: "SocialBee is a social media scheduling platform that categorizes content, recycles evergreen posts, and supports multiple profiles and workspaces.",
  },
  {
    q: "Who is it for?",
    a: "SMBs, creators, and agencies managing multiple profiles who want organized queues and evergreen recycling.",
  },
  {
    q: "How is pricing structured?",
    a: "Plans scale by number of profiles, users, and features. Concierge services are available as add-ons.",
  },
  {
    q: "Which networks are supported?",
    a: "Major networks like Facebook, Instagram, LinkedIn, Twitter/X, Pinterest (check current supported list).",
  },
  {
    q: "Does it recycle content?",
    a: "Yes. Category queues and evergreen recycling help extend post reach over time.",
  },
  {
    q: "Can teams collaborate?",
    a: "Yes. Workspaces, approval flows (eligible plans), and multiple users are supported on higher tiers.",
  },
  {
    q: "Are analytics included?",
    a: "Basic analytics are included; pair with native platform analytics for deeper insights.",
  },
  {
    q: "What about concierge services?",
    a: "Optional services include content creation and strategy support for teams that want help executing.",
  },
];

function SocialbeeToolPage() {
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
        "SocialBee organizes social scheduling with content categories, evergreen queues, and multi-profile support. It suits SMBs and agencies needing structured posting and optional concierge help.",
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
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "Category-based queues",
      body: "Organize posts by category and set queue rules for balanced publishing.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Evergreen recycling",
      body: "Automatically recycle evergreen content to extend reach without constant creation.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Multi-profile management",
      body: "Handle multiple profiles and workspaces, useful for agencies and multi-brand teams.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Approval & collaboration",
      body: "Invite teammates, manage approvals, and keep workflows organized (eligible plans).",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Integrations",
      body: "Connect to major social networks and supporting tools; use RSS/imports to feed queues.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Analytics basics",
      body: "Track performance; pair with native analytics for deeper metrics.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="SocialBee review: pricing, features, pros & cons, and alternatives so you can decide if category-based scheduling fits your social plan."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-emerald-600" />
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
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  {toolName} keeps social posting organized with categories and evergreen recycling—helpful for teams balancing multiple profiles.
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
              {toolName} is a social scheduling platform built around category queues, evergreen recycling, and multi-profile management. Agencies and SMBs use it to keep consistent posting without constant manual work.
            </p>
            <p className="mt-3 text-slate-700">
              It supports major networks and includes basic analytics; concierge services are available if you want help with content creation and strategy.
            </p>
            <p className="mt-3 text-slate-700">
              Pair it with native analytics or additional tools if you need deeper performance reporting or social listening.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams managing multiple social profiles and wanting organized queues with evergreen content.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies posting across multiple clients and brands.",
                "SMBs and creators who need evergreen recycling to save time.",
                "Teams that prefer category-based scheduling to balance content types.",
                "Marketers needing multi-profile management and workspaces.",
                "Teams that want optional concierge content services.",
                "Social managers pairing basic analytics with native platform insights.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
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
              {toolName} focuses on organized scheduling, evergreen recycling, and multi-profile management.
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
                  {toolName} pricing scales by number of social profiles, users/workspaces, and features. Higher tiers add more profiles, advanced scheduling, and collaboration; concierge services are separate add-ons.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a mid-tier if you manage multiple profiles; add concierge services only if you need hands-on content help.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Lower tiers</td>
                    <td className="px-4 py-3">Fewer profiles/basic needs</td>
                    <td className="px-4 py-3">Category queues, basic analytics</td>
                    <td className="px-4 py-3">Good for individuals/SMBs</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Mid tiers</td>
                    <td className="px-4 py-3">Growing teams/agencies</td>
                    <td className="px-4 py-3">More profiles, workspaces, collaboration</td>
                    <td className="px-4 py-3">Popular choice for multi-brand teams</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Top tiers/Concierge</td>
                    <td className="px-4 py-3">High volume or service needs</td>
                    <td className="px-4 py-3">Max profiles, advanced features, content services (add-on)</td>
                    <td className="px-4 py-3">Consider if you need managed support</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Evaluate profile counts and posting volume to choose a tier. Budget separately for concierge services if you need content creation.
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
                  <li>Category-based scheduling and evergreen recycling.</li>
                  <li>Manages multiple profiles/workspaces for agencies.</li>
                  <li>Basic analytics with network coverage across major platforms.</li>
                  <li>Optional concierge services for content and strategy.</li>
                  <li>Helps maintain consistent posting cadence.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Analytics are lighter than dedicated social analytics tools.</li>
                  <li>Profile limits and features vary by tier—upgrades may be needed.</li>
                  <li>No deep social listening; pair with other tools if needed.</li>
                  <li>Concierge services add cost beyond software pricing.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other social scheduling tools to match your profile counts, analytics needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares to other social scheduling platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Buffer</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/buffer">
                  View Buffer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Buffer is simple and creator-friendly; {toolName} leans into category queues and evergreen recycling. Choose Buffer for simplicity, {toolName} for structured queues and agency use.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hootsuite</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hootsuite">
                  View Hootsuite
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hootsuite has broad enterprise features and listening; {toolName} emphasizes scheduling organization and evergreen queues. Pick based on need for listening/enterprise features vs structured posting.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you want organized, evergreen-friendly scheduling across multiple profiles and value optional concierge services.
            </p>
            <p className="mt-3 text-slate-700">
              Map your profile counts and collaboration needs to the right tier. Pair with analytics/listening tools if you need deeper insights.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A solid scheduling choice for SMBs and agencies—especially when evergreen recycling and structured queues matter.
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
              Choose {toolName} if you need structured social queues, evergreen recycling, and multi-profile management, with optional concierge help.
            </p>
            <p>
              Consider Buffer for simplicity or Hootsuite for enterprise listening; {toolName} fits teams wanting organized, evergreen scheduling at reasonable cost.
            </p>
            <p>{toolName} keeps posting consistent—pair it with strong creative and analytics to optimize performance.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-emerald-700 hover:text-emerald-500" href={officialUrl}>
                Visit {toolName}
              </a>.
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

export default SocialbeeToolPage;
