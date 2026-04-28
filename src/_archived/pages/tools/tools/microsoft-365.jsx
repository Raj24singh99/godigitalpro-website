import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Microsoft 365";
const slug = "microsoft-365";
const category = "Productivity Suite";
const shortPitch = "Microsoft 365 bundles Office apps, cloud storage, security, collaboration, and AI-powered Copilot for individuals and businesses.";
const pricingSummary = "Subscription plans by user count and features. Higher tiers add advanced security, compliance, device management, and more storage.";
const officialUrl = "https://www.microsoft.com/microsoft-365";
const ratingValue = 4.6;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/microsoft.com",
  gradient: "from-sky-500 via-blue-500 to-indigo-600",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.22)]",
};

const alternatives = [
  { name: "Google Workspace", slug: "google-workspace" },
  { name: "Zoho Workplace", slug: "zoho" },
  { name: "Notion", slug: "notion" },
  { name: "Slack", slug: "slack" },
  { name: "Dropbox", slug: "dropbox" },
];

const faqs = [
  { q: "What is Microsoft 365?", a: "Microsoft 365 is a subscription suite with Office apps (Word, Excel, PowerPoint), OneDrive, Teams, Outlook, security features, and AI via Copilot." },
  { q: "Who is it for?", a: "Individuals, SMBs, and enterprises needing productivity apps, storage, collaboration, and device/security management." },
  { q: "What about Copilot?", a: "Copilot adds AI assistance for writing, data analysis, slides, email drafting, and meeting summaries in supported apps and tiers." },
  { q: "How is pricing structured?", a: "Per-user subscriptions with tiers for personal, business, and enterprise. Higher tiers add security, compliance, and management." },
  { q: "Does it include email?", a: "Business and Enterprise plans include Exchange for email; personal plans include Outlook.com services." },
  { q: "How much storage is included?", a: "OneDrive storage starts at 1TB per user on most Business plans; enterprise tiers can add more." },
  { q: "Does it work offline?", a: "Desktop apps support offline work with sync back to cloud; some web-only tiers are online-first." },
  { q: "What about compliance?", a: "Enterprise tiers include compliance, DLP, eDiscovery, and advanced security controls." },
];

function Microsoft365ToolPage() {
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
        "Microsoft 365 combines Office apps, storage, collaboration, and security. Copilot adds AI assistance across apps. It fits teams that want a comprehensive productivity stack with management controls.",
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
    { icon: <Sparkles className="h-5 w-5 text-amber-500" />, title: "Office apps", body: "Word, Excel, PowerPoint, Outlook, OneNote, and more across desktop, web, and mobile." },
    { icon: <Cloud className="h-5 w-5 text-sky-500" />, title: "OneDrive & SharePoint", body: "Cloud storage, sharing, and document libraries for teams and individuals." },
    { icon: <Plug className="h-5 w-5 text-purple-500" />, title: "Teams collaboration", body: "Chat, meetings, calling, and collaboration hubs with file sharing and recordings." },
    { icon: <ShieldCheck className="h-5 w-5 text-slate-700" />, title: "Security & compliance", body: "Threat protection, DLP, device management, eDiscovery, and compliance features on higher tiers." },
    { icon: <Rocket className="h-5 w-5 text-emerald-500" />, title: "Copilot AI", body: "AI assistance for writing, analysis, presentations, and meeting summaries in supported apps." },
    { icon: <Folder className="h-5 w-5 text-indigo-500" />, title: "Admin & device management", body: "User management, policy controls, and device management via Intune (in Business Premium/Enterprise)." },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Microsoft 365 review: pricing, features, pros & cons, and alternatives so you can choose the right productivity suite for your team."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-200/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-sky-600" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Features, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro - Updated May 2025</span>
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Suite</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  {toolName} blends Office apps, storage, collaboration, security, and Copilot AI. It is strongest when paired with good governance and user training.
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
              {toolName} is a cloud productivity suite that includes Office apps, storage, collaboration, email, security, and device management. Copilot adds AI assistance for writing, analysis, presentations, and meetings on supported plans.
            </p>
            <p className="mt-3 text-slate-700">
              It is designed for organizations that need unified productivity tools with strong security and management. It spans personal, business, and enterprise use cases.
            </p>
            <p className="mt-3 text-slate-700">Use it as your core productivity stack; plan governance, security baselines, and training to maximize ROI.</p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Best for teams that want full-suite productivity with management, security, and AI built in.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "SMBs needing bundled email, storage, and Office apps.",
                "Enterprises requiring security, compliance, and device management.",
                "Teams collaborating via Teams chat, meetings, and shared docs.",
                "Analysts and knowledge workers leveraging Excel/PowerPoint with Copilot.",
                "IT teams standardizing on Microsoft ecosystem for support and governance.",
                "Remote teams needing synced files and offline-capable desktop apps.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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
              {toolName} focuses on productivity apps, collaboration, storage, security, and AI assistance to support modern work.
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
                  {toolName} pricing is subscription-based by user and tier. Business tiers cover SMB needs; Enterprise adds security, compliance, and advanced management. Copilot licensing is separate on supported plans.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Pick Business Standard for most SMBs; Business Premium if you need device/security management; Enterprise if you need advanced compliance. Budget for Copilot if AI is critical.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Personal/Family</td>
                    <td className="px-4 py-3">Individuals & households</td>
                    <td className="px-4 py-3">Office apps, OneDrive storage, Outlook.com</td>
                    <td className="px-4 py-3">No business email or admin controls</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Standard</td>
                    <td className="px-4 py-3">Most SMBs</td>
                    <td className="px-4 py-3">Office apps, Teams, Exchange, 1TB OneDrive</td>
                    <td className="px-4 py-3">Core productivity without advanced security</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Business Premium</td>
                    <td className="px-4 py-3">SMBs needing security</td>
                    <td className="px-4 py-3">Adds Intune, advanced security, DLP basics</td>
                    <td className="px-4 py-3">Best for managed devices and compliance</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise (E3/E5)</td>
                    <td className="px-4 py-3">Enterprises</td>
                    <td className="px-4 py-3">Advanced security, compliance, analytics, voice options</td>
                    <td className="px-4 py-3">Highest controls; Copilot available on supported plans</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Plan for migration, identity/SSO, device management, and change management. Factor Copilot costs separately where available.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros and cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 p-5 shadow-sm ring-1 ring-sky-100">
                <div className="flex items-center gap-2 text-sky-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Full suite of productivity apps with offline support.</li>
                  <li>Strong security, compliance, and management on higher tiers.</li>
                  <li>Teams and SharePoint enable collaboration at scale.</li>
                  <li>Copilot AI can speed writing, analysis, and meetings.</li>
                  <li>Broad ecosystem and integrations across industries.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Admin complexity requires IT/ops investment.</li>
                  <li>Licensing can be confusing across tiers and add-ons.</li>
                  <li>Copilot availability and costs vary by plan.</li>
                  <li>Change management needed for Teams/SharePoint adoption.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare {toolName} with other suites to match collaboration style, security needs, and budget.
            </p>
            <p className="mt-2 text-slate-700">All links go to live tool pages.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">Popular alternative in the same category.</p>
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
            <p className="text-slate-700">See how {toolName} compares with common productivity suites.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Google Workspace</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/google-workspace">
                  View Google Workspace
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Google Workspace is lighter and web-first. {toolName} offers deeper desktop apps, security, and device management. Choose based on your security posture, offline needs, and user preference.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Zoho Workplace</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/zoho">
                  View Zoho Workplace
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Zoho offers a cost-effective suite with integrated apps. {toolName} provides enterprise-grade security and broader ecosystem. Decide based on budget, security, and ecosystem fit.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth it if you need a comprehensive productivity suite with strong security, management, and AI support, and you are ready to invest in admin and change management.
            </p>
            <p className="mt-3 text-slate-700">
              Align plan choice to your compliance and device needs; factor Copilot where valuable. Provide training to maximize adoption.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              <strong>Verdict:</strong> Excellent all-in-one suite for businesses; ensure governance and training to unlock full value.
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
            <p>Use {toolName} if you want a robust productivity suite with security, management, and AI built in.</p>
            <p>
              Choose the tier that matches your compliance and device needs, and plan change management to ensure Teams, SharePoint, and Copilot adoption.
            </p>
            <p>{toolName} provides breadth and depth—governance, training, and licensing clarity ensure success.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>
                Visit {toolName}
              </a>.
            </p>
            <div className="pt-2">
              <Link
                to="/tools"
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
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

export default Microsoft365ToolPage;
