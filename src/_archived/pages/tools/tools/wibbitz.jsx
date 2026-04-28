import React, { useState } from "react";
import { Sparkles, ShieldCheck, Plug, Cloud, Folder, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Wibbitz";
const slug = "wibbitz";
const category = "Video creation";
const shortPitch = "Wibbitz turns scripts and articles into short branded videos with templates for news, social, and marketing teams.";
const pricingSummary =
  "Plans scale by seats, export limits, and brand control. Higher tiers unlock brand kits, collaboration, premium templates, and priority support.";
const officialUrl = "https://www.wibbitz.com";
const ratingValue = 4.1;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/wibbitz.com",
  gradient: "from-blue-500 via-sky-500 to-indigo-500",
  glow: "shadow-[0_20px_80px_rgba(59,130,246,0.24)]",
};

const alternatives = [
  { name: "Lumen5", slug: "lumen5" },
  { name: "Canva Video", slug: "canva" },
  { name: "Animoto", slug: "animoto" },
  { name: "InVideo", slug: "invideo" },
  { name: "Pictory", slug: "pictory" },
];

const faqs = [
  {
    q: "What is Wibbitz?",
    a: "Wibbitz is a video creation platform that converts text and assets into short-form branded videos using templates and automation.",
  },
  {
    q: "Who is it for?",
    a: "Newsrooms, social teams, and marketers who need quick turnaround social clips, explainers, or headline videos without pro editors.",
  },
  {
    q: "Does Wibbitz handle branding?",
    a: "Yes. Brand kits, fonts, colors, and templates keep videos on-brand; advanced control sits on higher plans.",
  },
  {
    q: "How is pricing structured?",
    a: "Subscription tiers by seats and features. Costs rise with collaboration, export volumes, premium assets, and support SLAs.",
  },
  {
    q: "Can I export square and vertical formats?",
    a: "Yes. Templates support multiple aspect ratios for social feeds, stories, and mobile-first placements.",
  },
  {
    q: "Does Wibbitz replace full editors?",
    a: "It speeds up assembly, but detailed motion graphics, audio mastering, or complex cuts may still need a traditional editor.",
  },
  {
    q: "Can teams collaborate?",
    a: "Higher tiers add collaboration, shared libraries, and approval flows to keep assets consistent across teams.",
  },
  {
    q: "Is there stock media included?",
    a: "Plans typically include stock media libraries; premium asset packs may require higher tiers or add-ons.",
  },
];

function WibbitzToolPage() {
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
        "Wibbitz accelerates short video creation with templates and automation. It suits news, social, and marketing teams that need on-brand clips quickly.",
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
      title: "Template-first workflow",
      body: "Drop headlines or scripts into social-ready templates with automated scene assembly.",
    },
    {
      icon: <Folder className="h-5 w-5 text-indigo-500" />,
      title: "Brand control",
      body: "Use brand kits for fonts, colors, watermarks, and lower-thirds to keep every clip consistent.",
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-500" />,
      title: "Multi-format exports",
      body: "Render square, vertical, and landscape versions for feeds, stories, and sites from one project.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-slate-700" />,
      title: "Collaboration",
      body: "Share projects, comment, and approve in-platform so teams can ship quickly with oversight.",
    },
    {
      icon: <Plug className="h-5 w-5 text-purple-500" />,
      title: "Stock libraries",
      body: "Access stock media and music; premium packs may require upgraded plans.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-emerald-500" />,
      title: "Fast turnaround",
      body: "Automations reduce manual editing so social clips and explainers publish in minutes, not days.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Features, Pros & Cons, Alternatives`}
        description="Wibbitz review: pricing, features, pros & cons, and alternatives to help you decide if its template-first video creator fits your workflow."
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
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-200/25 blur-3xl" />
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
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
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
                  {toolName} speeds up social and news video production. Use it to keep branding consistent while turning scripts into publish-ready clips.
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
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                <div className="h-px w-10 bg-slate-300" />
                Overview
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">What is {toolName}?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} is a video creation platform focused on speed. It combines templates, brand kits, and automation so teams can convert scripts or
                articles into on-brand clips for social, news, and marketing channels—without heavy editing skills.
              </p>
              <p className="mt-3 text-slate-700">
                The platform emphasizes consistency: brand presets, lower-thirds, and color systems keep every asset aligned. It is not a full motion-graphics
                suite; it is for fast-turnaround branded video content where control and approvals still matter.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <ShieldCheck className="h-5 w-5 text-slate-700" />
                    <p className="text-sm font-semibold">Best for</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">News, social, and marketing teams needing rapid, on-brand short videos.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-2 text-slate-900">
                    <Cloud className="h-5 w-5 text-sky-500" />
                    <p className="text-sm font-semibold">Keep in mind</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">For complex motion, multi-cam edits, or custom animations you will still need a pro NLE.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Quick facts</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Template-first video builder for headlines, stories, and promos</li>
                  <li>Brand kits keep fonts, colors, and watermarks consistent</li>
                  <li>Multiple aspect ratios for feed, story, and website placements</li>
                  <li>Collaboration and approvals on higher tiers</li>
                  <li>Stock media access; premium assets may cost extra</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
                <p className="mt-2 text-slate-700">Use {toolName} if you need quick, branded short videos without deep editing skills.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                Explore more tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["News and editorial teams", "Social media and content marketers", "Brands needing consistent templates"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    {item === "News and editorial teams" &&
                      "Publish headline explainer videos quickly to accompany stories across channels."}
                    {item === "Social media and content marketers" &&
                      "Ship vertical and square clips for feeds, stories, and ads with consistent branding."}
                    {item === "Brands needing consistent templates" &&
                      "Lock branding and approvals so distributed teams publish on-brand assets fast."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">
              {toolName} emphasizes templates, brand control, and multi-format exports so non-editors can deliver consistent video content quickly.
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
                  {toolName} uses seat- and feature-based tiers. Higher plans add collaboration, brand controls, premium templates, and stronger support SLAs.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Start with a lower seat count to validate workflow; upgrade if you need brand governance and approvals.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Starter</td>
                    <td className="px-4 py-3">Individuals or small teams</td>
                    <td className="px-4 py-3">Core templates, limited exports, basic brand settings</td>
                    <td className="px-4 py-3">Good for quick tests and small campaigns</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Team</td>
                    <td className="px-4 py-3">Most marketing/social teams</td>
                    <td className="px-4 py-3">Brand kits, collaboration, more exports, stock media</td>
                    <td className="px-4 py-3">Balances control and speed</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Enterprise</td>
                    <td className="px-4 py-3">Large orgs and newsrooms</td>
                    <td className="px-4 py-3">Advanced approvals, premium assets, SSO, success manager</td>
                    <td className="px-4 py-3">Use when governance and support are critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Confirm license terms for commercial campaigns and check export limits to avoid overages during peak publishing periods.
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
                  <li>Fast template-driven workflow for short videos</li>
                  <li>Brand kits keep outputs consistent across teams</li>
                  <li>Multi-format exports for social feeds and stories</li>
                  <li>Collaboration and approvals available on higher tiers</li>
                  <li>Stock library access to speed up production</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50 p-5 shadow-sm ring-1 ring-rose-100">
                <div className="flex items-center gap-2 text-rose-700">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Not a replacement for pro NLEs or motion graphics</li>
                  <li>Premium assets and higher limits live on upper tiers</li>
                  <li>Heavy brand controls require pricier plans</li>
                  <li>Audio/mix controls are more limited than full editors</li>
                  <li>Output uniqueness can feel template-like without customization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives</h2>
                <p className="mt-2 text-slate-700">If you need deeper editing, more AI, or different pricing, consider these options.</p>
              </div>
              <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
                <ArrowLeft className="h-4 w-4" />
                View all tools
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-slate-900">{alt.name}</p>
                    <Plug className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">
                    A solid alternative to {toolName}. Compare templates, AI helpers, pricing, and export controls to pick the right fit.
                  </p>
                  <Link to={`/tools/${alt.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                    Explore {alt.name}
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs similar tools</h2>
            <p className="mt-2 text-slate-700">
              {toolName} is optimized for fast branded clips. Choose it when brand governance and speed outweigh custom animation needs.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{toolName} strengths</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Template-first flow ideal for non-editors</li>
                  <li>Brand kits and approvals for consistent output</li>
                  <li>Fast multi-aspect exports for social</li>
                  <li>Collaboration features for teams</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">Where alternatives fit better</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Need heavy motion graphics or 3D</li>
                  <li>Require advanced audio mixing or VFX</li>
                  <li>Want AI script-to-video with avatars</li>
                  <li>Need lower-cost options for occasional use</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              {toolName} is worth testing if you publish frequent short videos and need on-brand consistency without pro-editing overhead. If your team demands
              advanced motion or heavy audio control, pair {toolName} with a full editor or evaluate more robust suites.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {["Start on Team if you need collaboration and brand kits", "Upgrade to Enterprise for governance, SSO, and support", "Use lower tiers for quick social testing and scale as output rises"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-slate-900">{item}</p>
                    <Crown className="h-4 w-4 text-sky-600" />
                  </div>
                  <p className="mt-2 text-sm text-slate-700">A practical path to get value from {toolName} without overcommitting budget.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQ</h2>
                <p className="mt-2 text-slate-700">Answers to common questions about {toolName} and how to get the most from it.</p>
              </div>
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-200">
              {faqs.map((item) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--verdict bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold text-slate-900">Final verdict: is {toolName} good?</h2>
              <p className="mt-3 text-slate-700">
                {toolName} shines when you need fast, branded short videos for news or social. It keeps teams aligned with templates and brand kits, but it is
                not a substitute for full-fledged editing or complex motion. Try it if speed and consistency are your priorities.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
                <Link to="/tools" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900">
                  <ArrowLeft className="h-4 w-4" />
                  Back to tools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default WibbitzToolPage;
