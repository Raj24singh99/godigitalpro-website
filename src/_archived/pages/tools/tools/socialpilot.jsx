import React, { useState } from "react";
import { Sparkles, ShieldCheck, Calendar, BarChart3, Users, Plug, Clock, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "SocialPilot";
const slug = "socialpilot";
const category = "Social Media Management";
const shortPitch =
  "SocialPilot is a cost-effective social media management platform for agencies and teams, offering scheduling, collaboration, analytics, and white labeling across major networks.";
const pricingSummary =
  "Plans start around $30–$50/month with generous account limits. Agency tiers include more users, white labeling, client approvals, and advanced analytics without high per-seat costs.";
const officialUrl = "https://www.socialpilot.co";
const ratingValue = 4.4;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/socialpilot.co",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.20)]",
};

const alternatives = [
  { name: "Buffer", slug: "buffer" },
  { name: "Hootsuite", slug: "hootsuite" },
  { name: "Later", slug: "later" },
  { name: "HubSpot", slug: "hubspot" },
];

const faqs = [
  { q: "Is SocialPilot good for agencies?", a: "Yes. SocialPilot offers client approvals, white labeling, and generous account limits that keep costs low for agencies compared to enterprise SMM suites." },
  { q: "Which networks does SocialPilot support?", a: "Facebook, Instagram, LinkedIn, Twitter/X, Pinterest, TikTok, YouTube, and Google Business Profiles with scheduling, approvals, and analytics." },
  { q: "Does SocialPilot have AI or content curation?", a: "Yes. SocialPilot includes an AI assistant for captions and content ideas, plus curated feeds to fill calendars faster." },
  { q: "How does SocialPilot pricing compare to Hootsuite?", a: "SocialPilot is typically cheaper per user/profile, especially on agency plans with white labeling. Hootsuite is pricier but has deeper enterprise features." },
  { q: "Can clients approve posts in SocialPilot?", a: "Yes. Clients can review and approve posts without full access, streamlining agency workflows." },
  { q: "Does SocialPilot handle inbox/unified engagement?", a: "It offers a social inbox for comments/messages on major channels, but it’s lighter than enterprise-level engagement tools." },
  { q: "Is SocialPilot good for reporting?", a: "Reports cover engagement, growth, and best times to post with white-label exports. For deeper BI, connect to analytics tools." },
  { q: "Is there a free trial?", a: "Yes. SocialPilot typically offers a trial so teams can test scheduling, approvals, and reporting before committing." },
];

function SocialPilotToolPage() {
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
        "SocialPilot is a budget-friendly social media management platform for agencies and small teams. It combines scheduling, approvals, analytics, and white labeling at a lower cost than many enterprise tools.",
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
      icon: <Calendar className="h-5 w-5 text-sky-600" />,
      title: "Bulk scheduling & calendar views",
      body: "Queue posts across networks, visualize content by week or month, and drag/drop to rebalance campaigns quickly.",
    },
    {
      icon: <Users className="h-5 w-5 text-indigo-600" />,
      title: "Agency workflows and approvals",
      body: "Invite clients for approvals, manage permissions, and keep revisions in one place without sharing raw credentials.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      title: "Analytics & best-time suggestions",
      body: "Performance reports, engagement breakdowns, and timing insights help optimize posting schedules. Export white-label PDFs for clients.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-600" />,
      title: "Integrations and social inbox",
      body: "Manage comments/messages from major networks, and integrate with Canva, Zapier, and URL shorteners to speed publishing.",
    },
    {
      icon: <Clock className="h-5 w-5 text-rose-500" />,
      title: "Automations and content curation",
      body: "RSS imports, AI captioning, and curated feeds reduce manual work while keeping calendars full.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-700" />,
      title: "White labeling for agencies",
      body: "Custom domains, logos, and white-labeled reports present SocialPilot as part of your agency toolkit.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Independent SocialPilot review for agencies and teams covering pricing, features, pros & cons, alternatives, and whether it fits your social stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Scheduling, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit SocialPilot
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-200 blur-3xl" />
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
                  Built for agencies and teams that want affordable scheduling, approvals, and reporting without enterprise pricing.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Budget-friendly SMM for teams
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              SocialPilot is a {category.toLowerCase()} platform that helps agencies and small teams plan, approve, publish, and analyze social posts across major networks. It emphasizes affordability and collaboration without sacrificing
              essentials like scheduling, analytics, and a social inbox.
            </p>
            <p className="mt-3 text-slate-700">Teams use SocialPilot to coordinate content calendars, apply consistent branding, and deliver white-label reports to clients.</p>
            <p className="mt-3 text-slate-700">If you want enterprise-like features at a lower price point, SocialPilot is a solid option.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">SocialPilot suits budget-conscious teams that still need approvals and reports.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple clients’ social accounts with approvals and white labeling.",
                "Small marketing teams that need affordable scheduling and analytics across platforms.",
                "Freelancers who want simple collaboration and client access without expensive seats.",
                "Brands that need a social inbox and reporting without heavyweight enterprise tools.",
                "Teams that want to speed content with AI captions and curated feeds.",
                "Groups that rely on Canva and Zapier to move assets into calendars quickly.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">SocialPilot keeps publishing workflows streamlined with collaboration, automation, and reporting in one place.</p>
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
                  SocialPilot is known for affordable tiers with many social accounts included. Plans often start around $30–$50/month, with Agency tiers adding more profiles, users, white labeling, and client approvals without steep
                  per-seat costs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start on the mid-tier for account limits; pick Agency for approvals/white labeling.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Small Team</td>
                    <td className="px-4 py-3">Freelancers and small teams</td>
                    <td className="px-4 py-3">Limited users/profiles, scheduling, inbox</td>
                    <td className="px-4 py-3">~$30–$40/mo</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Studio/Agency</td>
                    <td className="px-4 py-3">Agencies and growing teams</td>
                    <td className="px-4 py-3">More profiles/users, approvals, white labeling</td>
                    <td className="px-4 py-3">~$60–$100+/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Larger orgs needing SSO/custom limits</td>
                    <td className="px-4 py-3">Custom profiles/users, service-levels</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">Agencies often switch to SocialPilot to cut per-seat costs while keeping approvals and reporting. Direct trials make it easy to benchmark against Buffer or Hootsuite quickly.</p>
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
                  <li>Affordable pricing with generous profile limits.</li>
                  <li>Approvals, collaboration, and white labeling for agencies.</li>
                  <li>Good scheduling UX with AI captioning and curated feeds.</li>
                  <li>White-label reports and recommendations for best times to post.</li>
                  <li>Integrations with Canva, Zapier, and link shorteners to speed workflow.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Inbox and listening are lighter than enterprise SMM tools.</li>
                  <li>Analytics depth is solid but not as advanced as Sprout or Hootsuite enterprise.</li>
                  <li>UI can feel utilitarian compared to premium suites.</li>
                  <li>Fewer native integrations than larger platforms.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              If you want broader app ecosystems or enterprise listening, compare SocialPilot with these platforms. Each link goes to a full review.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how SocialPilot compares to Buffer and Hootsuite.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Buffer</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/socialpilot-vs-buffer-vs-hootsuite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Buffer is simple and polished with great publishing UX. SocialPilot offers more profiles per dollar, approvals, and white labeling aimed at agencies. Buffer’s analytics are clean but agency-focused features are lighter.
              </p>
              <p className="mt-2 text-slate-900">Choose SocialPilot for agency workflows and lower costs; choose Buffer for a streamlined UI and smaller teams.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Hootsuite</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/socialpilot-vs-buffer-vs-hootsuite">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Hootsuite has a larger enterprise ecosystem and listening options. SocialPilot is cheaper and simpler for agencies needing scheduling, approvals, and reporting without enterprise costs.
              </p>
              <p className="mt-2 text-slate-900">Choose SocialPilot for affordability and white labeling; choose Hootsuite for broader enterprise capabilities.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">If you’re an agency or small team needing approvals, reporting, and scheduling at a sensible price, SocialPilot is worth it.</p>
            <p className="mt-3 text-slate-700">If you require deep social listening, complex routing, or enterprise compliance, Hootsuite or Sprout Social may suit you better.</p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> SocialPilot is a strong budget-friendly SMM platform with agency-ready workflows, white labeling, and solid analytics.
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
            <p>Pick SocialPilot if you want affordable scheduling, approvals, and white-labeled reporting for clients.</p>
            <p>Pick Buffer for a polished lightweight experience; pick Hootsuite for enterprise ecosystem and listening.</p>
            <p>SocialPilot fits agencies and teams balancing cost with collaboration needs.</p>
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

export default SocialPilotToolPage;
