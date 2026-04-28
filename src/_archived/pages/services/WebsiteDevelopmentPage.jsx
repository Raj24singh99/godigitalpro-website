// src/pages/services/WebsiteDevelopmentPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  LayoutDashboard,
  MonitorSmartphone,
  ServerCog,
  BarChart3,
  Search,
  Palette,
  Layers,
  TerminalSquare,
  Rocket,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating offerings for hero (only the colored part changes) */
const WORDS = [
  { text: "Program Pages", color: "text-emerald-600" },
  { text: "Admissions Funnels", color: "text-indigo-600" },
  { text: "Campus Microsites", color: "text-rose-600" },
  { text: "Application Landing Pages", color: "text-amber-600" },
  { text: "CRM-Connected Forms", color: "text-fuchsia-600" },
  { text: "Content Hubs", color: "text-sky-600" },
];

/** Tech chips shown under hero */
const TECH = [
  { label: "Application Funnels", color: "#61DAFB" },
  { label: "Landing Page CRO", color: "#646CFF" },
  { label: "CRM Integrations", color: "#38BDF8" },
  { label: "WhatsApp & Call Tracking", color: "#3178C6" },
  { label: "GA4 & Pixels", color: "#3C873A" },
  { label: "SEO-Ready Architecture", color: "#111827" },
  { label: "Fast Mobile UX", color: "#FFCA28" },
  { label: "Content Publishing Workflows", color: "#21759B" },
  { label: "A/B Testing Ready", color: "#00AD9F" },
  { label: "Reliable Hosting", color: "#000000" },
  { label: "Schema & Metadata", color: "#F38020" },
  { label: "Counselor Handoffs", color: "#FBBC05" },
];

const WEBSITE_FAQ = [
  {
    question: "How fast can we go live?",
    answer: "Simple landing pages can ship quickly. Larger websites and admissions funnel builds typically take a few weeks depending on pages, integrations, and approvals.",
  },
  {
    question: "Can you work with our CMS or internal tools?",
    answer: "Yes. We can connect to existing CMS, CRMs, form systems, call workflows, and analytics tools instead of forcing a rebuild from scratch.",
  },
  {
    question: "Will it be SEO-ready?",
    answer: "Yes. We set route-level metadata, schema, canonicals, sitemaps, robots, and performance foundations so the site is crawlable and fast.",
  },
  {
    question: "Do you handle analytics and conversion tracking?",
    answer: "Yes. We map GA4, ad pixels, call tracking, and funnel events to the actions that matter across the student journey.",
  },
  {
    question: "Can you support testing and optimization after launch?",
    answer: "Yes. We can support new pages, CRO testing, tracking refinement, and launch support after the first version goes live.",
  },
];

export default function WebsiteDevelopmentPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(i);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds fast, SEO-ready websites and funnel systems for EdTech brands, with clearer information architecture, landing pages, analytics, CRM handoffs, and conversion-focused user journeys.",
    []
  );

  const title = "Websites & Funnels for EdTech | SEO-Ready, Fast & Conversion-Focused";
  const desc =
    "We design and build fast, SEO-ready websites and funnel systems for EdTech, with clear information architecture, conversion tracking, CRM handoffs, and reliable hosting.";
  const keywords =
    "edtech website development, education landing pages, admissions funnels, conversion-focused websites, crm-connected forms, GoDigitalPro";
  const canonical = buildCanonical("/services/website-development");

  const schemaBlocks = useMemo(
    () =>
      [
        serviceJsonLd({
          name: "Website & Funnel Development",
          description: desc,
          url: canonical,
        }),
        faqJsonLd(WEBSITE_FAQ),
      ].filter(Boolean),
    [canonical, desc]
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={canonical}
        keywords={keywords}
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Website & Funnel Development", url: canonical },
        ]}
      />

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ---------- HERO ---------- */}
      <Section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(245,250,220,.40), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Websites and funnel systems that turn inquiries into applications.
          </h1>

          {/* Animated line — only colored text changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden" aria-live="polite">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We help you build </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>
                {WORDS[idx].text}
              </span>
            </div>
          </div>

          {/* Tech chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {TECH.map((t) => {
              const isBlack = t.color.toLowerCase() === "#000000";
              return (
                <span
                  key={t.label}
                  className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold shadow-sm"
                  style={{
                    color: isBlack ? "#fff" : t.color,
                    backgroundColor: isBlack ? "#111827" : `${t.color}1A`,
                    borderColor: isBlack ? "#111827" : `${t.color}55`,
                  }}
                  aria-label={`Technology: ${t.label}`}
                >
                  {t.label}
                </span>
              );
            })}
          </div>

          {/* crawler SEO */}
          <p className="sr-only">{seoIntro}</p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Audit My Funnel
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO ---------- */}
      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Journey architecture",
                desc: "Sitemaps, page flows, and conversion paths built around the real admissions journey.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Landing page design",
                desc: "Pages that balance speed, clarity, proof, and next-step CTAs without creating friction.",
                icon: Palette,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Fast mobile UX",
                desc: "Responsive interfaces that load quickly, read cleanly, and hold up across low-friction mobile journeys.",
                icon: MonitorSmartphone,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Tracking & integrations",
                desc: "Forms, CRM, call workflows, pixels, and event tracking connected to the actions that matter.",
                icon: ServerCog,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "SEO & schema",
                desc: "Metadata, schema, canonicals, sitemap, robots, and crawlable route structures from day one.",
                icon: Search,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Analytics & CRO",
                desc: "GA4, funnel instrumentation, thank-you logic, and testing readiness for better conversion rates.",
                icon: BarChart3,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                style={{ minHeight: 210 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}>
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- FRONTEND & BACKEND (plain-English) ---------- */}
      <Section id="how-it-works" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">How the funnel works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Frontend */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-emerald-500/90 p-2 text-white">
                  <Layers className="size-5" />
                </span>
                <h3 className="font-semibold">Experience layer</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Pages built to make the next action obvious without overwhelming the user.",
                  "Responsive layouts that hold up across mobile-first discovery and inquiry flows.",
                  "Proof blocks, FAQs, forms, and CTA placement tuned to reduce hesitation.",
                  "Core Web Vitals and accessibility work so the experience stays fast and usable.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Backend */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-indigo-500/90 p-2 text-white">
                  <TerminalSquare className="size-5" />
                </span>
                <h3 className="font-semibold">Operations layer</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Form routing, CRM sync, and event tracking that match the business workflow.",
                  "Spam protection, attribution fields, and clean data handoff into downstream tools.",
                  "Integrations with email, WhatsApp, call workflows, and other operational systems.",
                  "Reliable hosting, caching, and deployment workflows that reduce site risk.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-indigo-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      {/* ---------- HOSTING & DEVOPS ---------- */}
      <Section id="devops" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What ships with every build</h2>
        </Container>
        <Container>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Launch workflow",
                desc: "Structured deployment, review links, and rollback-safe processes so launches do not become operational chaos.",
                icon: Rocket,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Security & reliability",
                desc: "HTTPS, backups, guardrails, and dependable hosting foundations that protect the site as it scales.",
                icon: ShieldCheck,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Measurement",
                desc: "Monitoring, analytics, event validation, and post-launch visibility into what users are actually doing.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}>
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PROCESS (mobile vertical / desktop horizontal) ---------- */}
      <ProcessStepper />

      {/* ---------- CTA ---------- */}
      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Launch a site that is easier to rank, easier to trust, and easier to convert from.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll map the funnel, redesign the key journeys, connect the tracking, and ship a build your team can actually use.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Audit My Funnel
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- FAQ ---------- */}
      <Section id="faq" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </Container>
        <Container className="mt-6">
          <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {WEBSITE_FAQ.map(({ question, answer }) => (
              <details key={question} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{question}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

/* =========================
   Process Stepper Component
   ========================= */
function ProcessStepper() {
  const steps = [
    { label: "Audit", desc: "Current journeys, leaks, and conversion blockers." },
    { label: "Map", desc: "Page structure, flows, and proof hierarchy." },
    { label: "Design", desc: "Layouts and components built around action." },
    { label: "Build", desc: "Pages, forms, integrations, and content workflows." },
    { label: "Validate", desc: "Tracking, SEO, QA, and mobile experience checks." },
    { label: "Launch", desc: "Deploy, monitor, and refine the next wins." },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % steps.length), 1500);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <Section id="process">
      <Container>
        <h2 className="text-2xl md:text-3xl font-semibold">Our process</h2>

        {/* MOBILE: vertical circular timeline */}
        <div className="relative mt-8 md:hidden">
          <div aria-hidden className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li key={s.label} className="relative pl-16">
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                >
                  <span className="text-xs font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="mt-1 text-xs text-slate-700">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* DESKTOP: horizontal circular stepper */}
        <div className="relative mt-10 hidden md:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#6366f1,#10b981,#38bdf8,#6366f1)",
              backgroundSize: "200% 100%",
              animation: "lineFlow 6s linear infinite",
            }}
          />
          <ol className="relative z-10 grid grid-cols-6">
            {steps.map((s, i) => (
              <li key={s.label} className="flex flex-col items-center gap-3 px-2 text-center">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-full border border-black/10 bg-white shadow-sm ${
                    i === active ? "ring-4 ring-blue-100 animate-[glow_1.5s_ease-in-out]" : ""
                  }`}
                  aria-current={i === active ? "step" : undefined}
                >
                  <span className="text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-2">
                  <p className="text-sm font-semibold">{s.label}</p>
                  <p className="text-xs text-slate-600">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
