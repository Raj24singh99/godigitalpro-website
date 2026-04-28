import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Loomly";
const slug = "loomly";
const category = "Social Media Management";
const shortPitch = "Loomly is a social media management platform for planning, publishing, collaboration, and analytics across major social channels.";
const pricingSummary =
  "Tiered pricing by users and features. Higher tiers add collaboration, approvals, advanced analytics, and more social accounts; costs scale with team size.";
const officialUrl = "https://www.loomly.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/loomly.com",
  gradient: "from-emerald-500 via-teal-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(16,185,129,0.24)]",
};

const alternatives = [
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Buffer", slug: "buffer" },
  { name: "Sprout Social", slug: "sprout-social" },
  { name: "Later", slug: "later" },
  { name: "Planable", slug: "planable" },
];

const faqs = [
  {
    q: "What is Loomly?",
    a: "Loomly is a social media management tool for content planning, collaboration, publishing, and analytics across major social platforms.",
  },
  {
    q: "Who is Loomly best for?",
    a: "Marketing teams, agencies, and creators who need calendars, approvals, and scheduling with lightweight analytics.",
  },
  {
    q: "Which platforms are supported?",
    a: "Major social channels (e.g., Facebook, Instagram, LinkedIn, X/Twitter, Pinterest) are supported; check Loomly for exact coverage.",
  },
  {
    q: "How does pricing work?",
    a: "Tiered by users and features. Higher tiers add collaboration, approvals, ad previews, and advanced analytics.",
  },
  {
    q: "Does it support approvals?",
    a: "Yes. Collaboration and approval workflows are available on select tiers.",
  },
  {
    q: "Are analytics included?",
    a: "Yes. Post and profile analytics with export options; depth varies by plan and platform data.",
  },
  {
    q: "Can it manage ads?",
    a: "Ad mockups/previews and some ad management are supported; confirm per plan.",
  },
  {
    q: "Do I still need a social strategy?",
    a: "Yes. Loomly aids execution, but strategy, creative quality, and community management remain human-led.",
  },
];

function LoomlyPage() {
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
        "Loomly helps teams plan, collaborate, and publish social content with calendars, approvals, and analytics across major platforms.",
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
      title: "Content calendar",
      body: "Plan posts visually across channels with drafts, ideas, and scheduling.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Collaboration & approvals",
      body: "Workflow for drafts, comments, and approvals to keep teams aligned.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Publishing",
      body: "Schedule and publish to major social platforms with previews and link handling.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Brand consistency",
      body: "Asset libraries and guidelines help keep posts on-brand.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Analytics",
      body: "Post and profile metrics with exports; depth varies by platform and plan.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Ad mockups",
      body: "Create/previews for ads; confirm features per tier and platform.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Loomly review: pricing, features, pros & cons, and alternatives so you can choose the right social media management platform."
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
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  {toolName} keeps social calendars, approvals, and publishing in one place—use it to coordinate teams and ship posts consistently.
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
              {toolName} is a social media management platform that helps teams plan, collaborate, schedule, and measure posts across major social channels.
            </p>
            <p className="mt-3 text-slate-700">
              Use it to manage calendars, approvals, and publishing, then review performance through built-in analytics and exports.
            </p>
            <p className="mt-3 text-slate-700">
              Asset libraries and brand guidelines help keep content consistent across teams and clients.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for social teams and agencies needing calendars, approvals, and scheduling with straightforward analytics.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Marketing teams coordinating multi-channel calendars.",
                "Agencies managing drafts/approvals with clients.",
                "Creators scheduling posts with previews and link handling.",
                "Teams needing basic analytics and exports.",
                "Brands enforcing asset guidelines and consistency.",
                "Users who prefer a simpler UI over complex enterprise suites.",
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
              {toolName} focuses on planning, approvals, publishing, and analytics to simplify social media workflows.
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
                  {toolName} tiers by users, features, and number of social accounts. Higher tiers add approvals, advanced analytics, and more accounts; costs rise with team size and managed profiles.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on a plan that includes approvals if you collaborate; upgrade as you add social accounts or need deeper analytics.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Base</td>
                    <td className="px-4 py-3">Individuals</td>
                    <td className="px-4 py-3">Core scheduling, few accounts</td>
                    <td className="px-4 py-3">Good for solo creators</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Approvals, more accounts</td>
                    <td className="px-4 py-3">Balanced features</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Advanced/Premium</td>
                    <td className="px-4 py-3">Larger teams</td>
                    <td className="px-4 py-3">Advanced analytics, more users/accounts</td>
                    <td className="px-4 py-3">Plan for client/brand scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Check platform-specific limits, scheduling rules, and API constraints. Keep a QA process for posts and brand guidelines.
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
                  <li>Easy calendar and scheduling across channels.</li>
                  <li>Collaboration and approvals for teams/clients.</li>
                  <li>Previews and link handling for posts.</li>
                  <li>Asset libraries to keep branding consistent.</li>
                  <li>Analytics and exports for reporting.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing increases with users/accounts.</li>
                  <li>Analytics depth limited compared to enterprise suites.</li>
                  <li>Platform/API limits can affect scheduling features.</li>
                  <li>Ad management features are lighter than dedicated ad tools.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other social management platforms to match your collaboration, analytics, and budget needs.
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
            <p className="text-slate-700">See how {toolName} compares with other social scheduling platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hootsuite</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/hootsuite">
                  View Hootsuite
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hootsuite is feature-rich and priced higher; {toolName} aims for simplicity with approvals. Choose Hootsuite for enterprise depth; {toolName} for approachable workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Buffer</h3>
                <a className="text-sm font-semibold text-emerald-700 hover:text-emerald-600" href="/tools/buffer">
                  View Buffer
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Buffer is lightweight and affordable; {toolName} adds more collaboration and approval structure. Pick based on team size and approval needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a clear calendar, approvals, and scheduling across social channels and prefer a simpler UI over complex enterprise suites.
            </p>
            <p className="mt-3 text-slate-700">
              Budget for user/account counts; ensure platform coverage fits your channels and that analytics depth meets your reporting needs.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> A strong pick for social teams and agencies wanting collaboration and scheduling without heavy complexity.
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
              Choose {toolName} if you want collaborative social calendars, approvals, and scheduling with approachable analytics across major channels.
            </p>
            <p>
              Consider Hootsuite for enterprise depth or Buffer for minimalism; keep {toolName} for balanced collaboration and simplicity.
            </p>
            <p>{toolName} keeps social workflows organized—success depends on solid content strategy and QA before scheduling.</p>
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

export default LoomlyPage;
