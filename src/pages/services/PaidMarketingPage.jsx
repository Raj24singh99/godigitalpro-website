// src/pages/services/PaidMarketingPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  Search,
  PlayCircle,
  ShoppingCart,
  Megaphone,
  Target,
  Users,
  BarChart3,
  Rocket,
  Gauge,
  ClipboardCheck,
  ServerCog,
  ShieldCheck,
  LayoutDashboard,
  Zap,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Platforms shown in hero (brand color only) */
const PLATFORMS = [
  { name: "Google Search", color: "#4285F4" },
  { name: "Meta Ads", color: "#0866FF" },
  { name: "YouTube Ads", color: "#FF0000" },
  { name: "Remarketing", color: "#FFB800" },
  { name: "Creative Testing", color: "#000000" },
  { name: "Offline Conversion Loops", color: "#22C55E" },
];

const FAQ_ITEMS = [
  { question: "Do you take over existing ad accounts?", answer: "Yes. We usually start with a read-only audit, identify waste and broken tracking, then clean the account without losing useful historical learnings." },
  { question: "Can you work with our creative or admissions team?", answer: "Yes. We translate campaign learnings into new hooks, landing page inputs, and follow-up guidance for your content and admissions teams." },
  { question: "How fast can results come?", answer: "Tracking and structure fixes can improve efficiency quickly. Stronger lead quality and enrollment outcomes usually improve over several testing cycles." },
  { question: "Do you optimize for enrollments and revenue, not just leads?", answer: "Yes. We use CRM feedback, offline conversions, counselor outcomes, and application-stage reporting wherever the stack allows it." },
  { question: "What does reporting look like?", answer: "A weekly scorecard across spend, lead quality, applications, show-up rates, pacing, and the actions we are taking next." },
  { question: "Can you handle multiple campuses, geos, or programs?", answer: "Yes. We build geo and program-level views so budgets and creative decisions can be made with more control." },
];

export default function PaidMarketingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % PLATFORMS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro runs paid media for EdTech brands across Google, Meta, and YouTube with AI-led analysis, creative testing, budget controls, and CRM-linked measurement built around lead quality, applications, and enrollments.",
    []
  );

  // ---- SEO constants ----
  const path = "/services/paid-marketing";
  const pageUrl = buildCanonical(path);

  const title = "Paid Media for EdTech | Google, Meta, YouTube & Enrollment Growth";
  const desc =
    "Paid media management for EdTech across Google, Meta, and YouTube with strong tracking, creative testing, budget controls, and CRM feedback loops tied to applications and enrollments.";
  const keywords =
    "edtech paid media agency, education google ads agency, student enrollment ads, meta ads for education, youtube ads for edtech, paid media for institutes";

  const schemaBlocks = useMemo(
    () =>
      [
        serviceJsonLd({
          name: "Paid Media for EdTech",
          description: desc,
          url: pageUrl,
        }),
        faqJsonLd(FAQ_ITEMS),
      ].filter(Boolean),
    [desc, pageUrl]
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Paid Media", url: pageUrl },
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
              "radial-gradient(60% 60% at 50% 0%, rgba(240,252,228,.50), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Paid media for EdTech that improves lead quality, applications, and enrollments.
          </h1>

          {/* Animated platform line (only text changes color) */}
          <div className="mt-3 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)", color: PLATFORMS[idx].color }}
            >
              {PLATFORMS[idx].name}
            </div>
          </div>

          {/* crawler SEO */}
          <p className="sr-only">{seoIntro}</p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Get Free Paid Media Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- WHAT WE DO (high-level) ---------- */}
      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        </Container>
        <Container>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Intent capture",
                desc: "Program, city, and branded search campaigns built to turn active demand into qualified inquiries.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Creative testing",
                desc: "Hook libraries, ad variants, landing page angles, and weekly learnings that keep performance moving.",
                icon: Megaphone,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Measurement & CRM",
                desc: "GA4, CAPI, offline conversions, counselor feedback, and lead quality loops tied to actual outcomes.",
                icon: ServerCog,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Budget pacing",
                desc: "Portfolio views, bid guardrails, and spend pacing across programs, campuses, and seasons.",
                icon: Gauge,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Experiment engine",
                desc: "Rapid tests on audiences, offers, creatives, form journeys, and retargeting windows.",
                icon: Zap,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Admissions alignment",
                desc: "Campaigns tied back to counselor workflows, application stages, and actual sales reality.",
                icon: ShieldCheck,
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

      {/* ---------- GOOGLE (deeper) ---------- */}
      <Section id="google" className="bg-primary/5">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Google Ads: Search · Demand Capture · YouTube</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#4285F4", backgroundColor: "#4285F422", border: "1px solid #4285F455" }}>
              Google Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Search structure",
                points: [
                  "Program, city, and outcome-based keyword themes",
                  "Brand protection and high-intent non-brand separation",
                  "Query mining, negative lists, and landing page fit",
                ],
                icon: Search,
              },
              {
                title: "Lead capture journeys",
                points: [
                  "Fast forms, WhatsApp callbacks, and counselor routing",
                  "Offer-level pages mapped to campaign intent",
                  "Application, brochure, and call intent tracked separately",
                ],
                icon: ShoppingCart,
              },
              {
                title: "Remarketing & nurture",
                points: [
                  "RLSA, display, and YouTube remarketing for warm audiences",
                  "Stage-based messaging for inquiry, application, and open house pushes",
                  "Audience exclusions to keep learning clean",
                ],
                icon: Rocket,
              },
              {
                title: "YouTube for action",
                points: [
                  "6s, 15s, and 30s variants for awareness, proof, and response",
                  "Remarketing, custom intent, and contextual placements",
                  "View-through, engaged-view, and assisted conversion tracking",
                ],
                icon: PlayCircle,
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-blue-500/90 p-2 text-white">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- META (deeper) ---------- */}
      <Section id="meta" className="bg-white">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Meta Ads: Prospecting · Retargeting · Lead Gen</h2>
            <span className="text-sm font-semibold rounded-md px-2 py-1" style={{ color: "#0866FF", backgroundColor: "#0866FF22", border: "1px solid #0866FF55" }}>
              Meta Ads
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Account & audiences",
                points: [
                  "Broad, lookalike, and first-party segments built around student and parent demand",
                  "Clear exclusions so prospecting and retargeting do not compete",
                  "Objective choices tied to form quality and downstream action",
                ],
                icon: Users,
              },
              {
                title: "Creative & formats",
                points: [
                  "Founder videos, student proof, reels, statics, and testimonial edits",
                  "Vertical and feed variants built from one creative system",
                  "Weekly angle refreshes from call notes, comments, and query themes",
                ],
                icon: Megaphone,
              },
              {
                title: "Measurement",
                points: [
                  "CAPI with deduplication and clean event mapping",
                  "Offline conversions, lead quality scoring, and application-stage visibility",
                  "Geo or program-level comparisons when scale allows",
                ],
                icon: BarChart3,
              },
              {
                title: "Guardrails",
                points: [
                  "Frequency caps and creative fatigue alerts",
                  "Placement controls and spend guardrails",
                  "Daily pacing alerts across programs and geographies",
                ],
                icon: ClipboardCheck,
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-blue-600/90 p-2 text-white">
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- DATA & AUTOMATION STACK ---------- */}
      <Section id="data-ops" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Data & automation stack</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Tracking & attribution",
                desc: "GA4, CAPI, enhanced conversions, UTM hygiene, and cleaner attribution across the inquiry-to-enrollment journey.",
                icon: ServerCog,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "Offline conversions",
                desc: "CRM back into ad platforms so bidding can learn from applications, show-ups, and enrollments instead of raw leads.",
                icon: ClipboardCheck,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Budget pacing",
                desc: "Portfolio rules, seasonality planning, and alerts for over-spend, under-spend, and missed opportunities.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Audience quality",
                desc: "Segment syncs and quality layers that separate high-intent programs, geos, and audience bands.",
                icon: Users,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Dashboards",
                desc: "Blended views across spend, CPL, application rate, counselor conversion, and revenue signals.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-blue-500",
              },
              {
                title: "Safety & compliance",
                desc: "Policy reviews, exclusions, disapproved asset monitoring, and escalation paths for critical issues.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
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

      {/* ---------- PROCESS ---------- */}
      <ProcessStepper />

      {/* ---------- CTA ---------- */}
      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Ready to make paid media accountable to enrollments?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit structure, creative, tracking, and CRM visibility, then show you where scale is actually being lost.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free Paid Media Audit
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
            {FAQ_ITEMS.map(({ question, answer }) => (
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
    { label: "Audit", desc: "Structure, intent coverage, and tracking gaps." },
    { label: "Fix", desc: "Clean measurement, routing, and account hygiene." },
    { label: "Launch", desc: "Search, Meta, and YouTube plans with guardrails." },
    { label: "Learn", desc: "Creative, query, and audience insights every week." },
    { label: "Scale", desc: "Double down by geo, program, and winning offer." },
    { label: "Report", desc: "Dashboards tied back to quality and enrollment signals." },
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

        {/* MOBILE: vertical timeline */}
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

        {/* DESKTOP: horizontal stepper */}
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
