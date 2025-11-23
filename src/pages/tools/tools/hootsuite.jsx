import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Video, ClipboardList, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Hootsuite";
const slug = "hootsuite";
const category = "Social Media Management";
const shortPitch =
  "Hootsuite is a social media management platform for teams that need scheduling, monitoring, social inbox, and reporting across multiple networks in one place.";
const pricingSummary = "Plans start near $99/month billed annually for Professional, with Team and Business tiers adding collaboration, approvals, and deeper reporting.";
const officialUrl = "https://www.hootsuite.com";
const ratingValue = 4.3;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/hootsuite.com",
  gradient: "from-indigo-500 via-blue-500 to-slate-600",
  glow: "shadow-[0_20px_80px_rgba(79,70,229,0.24)]",
};

const alternatives = [
  { name: "Buffer", slug: "buffer" },
  { name: "Later", slug: "later" },
  { name: "SocialPilot", slug: "socialpilot" },
  { name: "Zoho", slug: "zoho" },
  { name: "Canva", slug: "canva" },
];

const faqs = [
  {
    q: "Is Hootsuite free?",
    a: "Hootsuite no longer offers a meaningful free plan. Paid plans start with Professional and scale up by seats and features.",
  },
  {
    q: "Which Hootsuite plan should I pick?",
    a: "Solo users can start with Professional. Small teams benefit from Team for collaboration and approvals. Larger teams should consider Business for roles, SSO, and advanced reports.",
  },
  {
    q: "Does Hootsuite have a social inbox?",
    a: "Yes. Hootsuite offers a unified inbox and monitoring streams so teams can engage and respond without switching networks.",
  },
  {
    q: "Can I schedule Reels, Shorts, or TikTok with Hootsuite?",
    a: "Yes. Hootsuite supports scheduling and publishing across major social platforms, including Instagram, TikTok, LinkedIn, Facebook, and YouTube.",
  },
  {
    q: "Is Hootsuite good for agencies?",
    a: "Agencies use Hootsuite for client workspaces, approvals, saved replies, and reporting across multiple brands.",
  },
  {
    q: "Does Hootsuite include analytics?",
    a: "Yes. Reporting covers post performance, audience trends, and campaign summaries. Higher tiers unlock more advanced analytics and exports.",
  },
  {
    q: "How does Hootsuite compare to Buffer or Later?",
    a: "Buffer is simpler and more affordable. Later is strong for visual planning. Hootsuite offers deeper monitoring, roles, and reporting for larger teams.",
  },
  {
    q: "Does Hootsuite integrate with other tools?",
    a: "Yes. Hootsuite connects with Canva, Google Drive, Dropbox, and CRM/helpdesk tools through the app directory.",
  },
];

function HootsuiteToolPage() {
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
        "Hootsuite is a mature social media management suite with scheduling, monitoring streams, social inbox, approvals, and analytics. It’s built for teams handling multiple brands and channels. Pricing starts near $99/month annually for Professional, with team workflows on higher tiers.",
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
      icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      title: "Cross-network scheduling and calendar",
      body: "Plan, approve, and publish to Instagram, TikTok, LinkedIn, Facebook, YouTube, and X from a unified calendar with drafts and queues.",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-emerald-500" />,
      title: "Social inbox and engagement",
      body: "Monitor mentions, comments, and messages across networks with saved replies, assignments, and SLA-friendly workflows.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Roles, approvals, and governance",
      body: "Workspaces, permissions, and approval flows keep brands compliant while letting teams collaborate efficiently.",
    },
    {
      icon: <Plug className="h-5 w-5 text-amber-500" />,
      title: "Integrations and app directory",
      body: "Connect Canva, storage, CRM, helpdesk, and more via apps to streamline asset creation and handoffs.",
    },
    {
      icon: <Video className="h-5 w-5 text-blue-500" />,
      title: "Analytics and reporting",
      body: "Performance dashboards, ROI metrics, and exports help teams report results to stakeholders and optimize content.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Team collaboration",
      body: "Shared libraries, tags, and content approvals keep larger teams coordinated across campaigns and time zones.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Detailed Hootsuite review for social teams: pricing, features, pros & cons, alternatives, and whether Hootsuite fits your 2025 social media stack."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-indigo-200 blur-3xl" />
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
                  Built for social teams managing multiple brands, Hootsuite combines scheduling, monitoring, and reporting with approvals to keep content moving safely.
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
              {toolName} is a {category.toLowerCase()} suite that simplifies planning, publishing, and monitoring social content across channels. It brings scheduling, streams, inbox, approvals, and analytics into one workspace.
            </p>
            <p className="mt-3 text-slate-700">
              Brands and agencies rely on Hootsuite to coordinate teams, keep messaging consistent, and react quickly to mentions. Streams and inbox features reduce context switching between native apps.
            </p>
            <p className="mt-3 text-slate-700">
              Higher tiers add governance (roles, SSO), asset libraries, and advanced reporting to support enterprise social programs.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Hootsuite suits social teams that need collaboration, monitoring, and approvals across many accounts.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Agencies managing multiple client brands and networks.",
                "In-house social teams needing approvals and roles for compliance.",
                "Customer support teams handling social messages via unified inbox.",
                "Marketing teams coordinating campaigns across regions and languages.",
                "Brands that require reporting for stakeholders and leadership.",
                "Teams that need monitoring streams to catch brand and competitor mentions.",
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
            <p className="mt-3 text-slate-700">Hootsuite focuses on cross-network control, collaboration, and analytics for social teams.</p>
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
                  {toolName} pricing scales by seats and social accounts. Professional suits single users, Team adds collaboration, and Business/Enterprise unlock approvals, SSO, and advanced reporting. Expect higher pricing than leaner tools like Buffer or Later.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Solo marketers: Professional. Small teams: Team. Larger or regulated orgs: Business/Enterprise.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Professional</td>
                    <td className="px-4 py-3">Solo social managers</td>
                    <td className="px-4 py-3">Limited seats/accounts; core scheduling and inbox</td>
                    <td className="px-4 py-3">~$99/month (annual)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Small teams</td>
                    <td className="px-4 py-3">Approvals, roles, shared content, more accounts</td>
                    <td className="px-4 py-3">~$249/month (annual)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Growing or enterprise teams</td>
                    <td className="px-4 py-3">Advanced analytics, SSO, priority support</td>
                    <td className="px-4 py-3">Custom</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Add-ons</td>
                    <td className="px-4 py-3">Teams needing more seats or boards</td>
                    <td className="px-4 py-3">Extra accounts, add tools via app directory</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Hootsuite charges more than lightweight tools but provides deeper monitoring and governance. Model seat and account needs to choose the right tier without overspending.
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
                  <li>Robust monitoring streams and unified inbox.</li>
                  <li>Strong roles, approvals, and workspaces for teams.</li>
                  <li>Analytics and reporting suitable for stakeholders.</li>
                  <li>Integrations and app directory for creative and support tools.</li>
                  <li>Supports all major social networks including TikTok and YouTube.</li>
                  <li>Asset library and tagging keep content organized.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Pricing is higher than leaner tools like Buffer or Later.</li>
                  <li>Interface can feel heavy compared to lighter schedulers.</li>
                  <li>Some features require upper tiers, increasing cost.</li>
                  <li>Learning curve for new users due to breadth of features.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Hootsuite focuses on monitoring, governance, and reporting. If you want simpler scheduling or lower cost, consider these alternatives social teams often evaluate.
            </p>
            <p className="mt-2 text-slate-700">All offer scheduling; they differ on monitoring depth, price, and collaboration.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug + alt.name} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how {toolName} compares to two popular social media management platforms.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Buffer</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/buffer-vs-hootsuite-vs-later">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Buffer is simpler and more affordable, great for small teams and creators. Hootsuite offers deeper monitoring, roles, approvals, and reporting for larger teams or agencies.
              </p>
              <p className="mt-2 text-slate-900">Choose Buffer for ease and price; choose Hootsuite for enterprise-grade workflows and analytics.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs SocialPilot</h3>
                <a className="text-sm font-semibold text-indigo-700 hover:text-indigo-600" href="/tools/compare/hootsuite-vs-buffer-vs-socialpilot">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                SocialPilot is budget-friendly with solid scheduling and reporting. Hootsuite delivers stronger monitoring streams, governance, and enterprise support at a higher price.
              </p>
              <p className="mt-2 text-slate-900">Pick SocialPilot if affordability matters most; pick Hootsuite for complex teams needing approvals and monitoring.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it for teams that need monitoring, approvals, and analytics at scale. It centralizes social work, reduces risk, and supports enterprise reporting.
            </p>
            <p className="mt-3 text-slate-700">
              If you prioritize simplicity and price, Buffer or Later may be better fits. For heavier governance and collaboration, Hootsuite justifies the premium.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Hootsuite is a strong choice for social teams managing multiple brands, provided you plan for its higher cost and onboarding curve.
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
              Choose {toolName} if you manage multiple brands, need monitoring streams, and require approvals and analytics to keep social operations organized and compliant.
            </p>
            <p>
              Consider Buffer or SocialPilot if you need a leaner scheduler at a lower price, or Later if visual planning is your priority. Hootsuite remains best when governance and reporting matter.
            </p>
            <p>Hootsuite integrates well with creative and collaboration tools, keeping assets, approvals, and reporting in one flow.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here: <a className="text-indigo-700 hover:text-indigo-600" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-indigo-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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

export default HootsuiteToolPage;
