import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Briefcase,
  Target,
  Users,
  Megaphone,
  Search,
  FileText,
  ClipboardCheck,
  BarChart3,
  Gauge,
  Calculator,
  Workflow,
  MousePointerClick,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";

/* ---------- Layout helpers ---------- */
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/* ---------- Hero rotating words (only colored phrase changes) ---------- */
const WORDS = [
  { text: "ICP Clarity", color: "text-indigo-600" },
  { text: "Qualified Pipeline", color: "text-emerald-600" },
  { text: "LinkedIn ABM", color: "text-sky-600" },
  { text: "Comparison SEO", color: "text-rose-600" },
  { text: "Demo Conversions", color: "text-amber-600" },
  { text: "Attribution", color: "text-fuchsia-600" },
  { text: "CRM Hygiene", color: "text-violet-600" },
];

export default function B2BServicesPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds measurable pipeline for B2B services using ICP clarity, offer packaging, LinkedIn ABM, problem/solution & comparison SEO, and RevOps—so marketing feeds sales with qualified SQLs and attribution is clear.",
    []
  );

  /* ---------- SEO constants (absolute URLs) ---------- */
  const site = "https://www.godigitalpro.in";
  const path = "/industries/b2b-services";
  const pageUrl = `${site}${path}`;
  const ogImage = `${site}/og-b2b-services.jpg`; // ← place a 1200x630 image at /public/og-b2b-services.jpg

  const title = "B2B Services Marketing | ABM, Comparison SEO, RevOps & Attribution";
  const desc =
    "B2B pipeline you can measure. We align ICP & offer, LinkedIn ABM, problem/solution & comparison SEO, and RevOps (lead scoring, routing, SLAs) to generate qualified SQLs with clear attribution.";
  const keywords =
    "B2B marketing agency, ABM, LinkedIn ABM, comparison SEO, problem solution SEO, RevOps, lead scoring, lead routing, attribution, pipeline growth, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Helmet>
        {/* Basic */}
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="GoDigitalPro" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />

        {/* Optional author/publisher hints (non-rendering) */}
        <meta name="author" content="GoDigitalPro" />
        <meta name="publisher" content="GoDigitalPro" />
      </Helmet>

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ---------- HERO (text-only; animated colored phrase) ---------- */}
      <Section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(240,252,228,.45), rgba(255,255,255,0))",
          }}
        />
        <Container>
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 4.2vw, 3.6rem)" }}
          >
            B2B services marketing that feeds your pipeline.
          </h1>

          {/* animated line — only colored part changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)" }}
            >
              <span className="text-slate-700">We build with </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>
                {WORDS[idx].text}
              </span>
            </div>
          </div>

          <p className="sr-only">{seoIntro}</p>

          {/* Single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Get Free B2B Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- PROBLEMS (symptoms) ---------- */}
      <Section id="problems" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What’s going wrong (symptoms)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Unqualified leads",
                desc: "Broad targeting fills SDR calendars but not the pipeline.",
                icon: Users,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Stalled cycles",
                desc: "Deals slow in MoFu/BoFu due to thin proof and risk.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Murky attribution",
                desc: "Leads show up in CRM without a clear source or touch map.",
                icon: BarChart3,
                grad: "from-emerald-500 to-teal-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- DIAGNOSIS ---------- */}
      <Section id="diagnosis" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Why it happens (diagnosis)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "ICP & offer mismatch",
                desc: "Positioning, pricing, and outcomes aren’t packaged for the right pains.",
                icon: Target,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Thin MoFu/BoFu assets",
                desc: "Few case studies, calculators, or comparison pages to de-risk decisions.",
                icon: FileText,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Weak RevOps",
                desc: "No scoring or routing discipline; SLAs and handoffs are unclear.",
                icon: Workflow,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- SOLUTIONS (mapped to problems) ---------- */}
      <Section id="solution" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">How we solve it</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "ICP & Offer Packaging",
                points: [
                  "Value prop & proof mapped to pains and buying roles.",
                  "ROI calculators, pricing one-pagers, implementation guide.",
                  "Clear ‘why now’ and risk-reduction levers.",
                ],
                icon: Calculator,
                color: "bg-emerald-500",
              },
              {
                title: "LinkedIn ABM & Sequences",
                points: [
                  "Target job titles, firmographics, and tech stacks.",
                  "Message pillars for problems, objections, outcomes.",
                  "Retargeting with proof-first creatives.",
                ],
                icon: Megaphone,
                color: "bg-blue-600",
              },
              {
                title: "Problem/Solution & Comparison SEO",
                points: [
                  "Pages for ‘how to’, alternatives, pricing, integrations.",
                  "Schema, internal links, CWV fixes for speed.",
                  "Topical clusters supporting BoFu conversion.",
                ],
                icon: Search,
                color: "bg-rose-500",
              },
              {
                title: "RevOps: Scoring, Routing, SLAs",
                points: [
                  "Lead scoring by fit & intent; handoff rules.",
                  "Auto-routing to AEs; call/meeting SLAs.",
                  "Offline conversions & attribution in dashboards.",
                ],
                icon: ClipboardCheck,
                color: "bg-amber-500",
              },
            ].map((b) => (
              <BulletCard key={b.title} {...b} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- PLAYBOOK ---------- */}
      <Section id="playbook" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Our B2B growth playbook</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Prove & Package",
              desc: "Case studies, calculators, integration maps, and pricing clarity.",
              icon: Briefcase,
              grad: "from-sky-500 to-cyan-400",
            },
            {
              title: "ABM + Demand Capture",
              desc: "LinkedIn ABM + search for problem/solution & comparisons.",
              icon: Megaphone,
              grad: "from-emerald-500 to-teal-400",
            },
            {
              title: "Nurture & SLAs",
              desc: "Email/LinkedIn cadences, SDR playbooks, and meeting SLAs.",
              icon: MessageSquare,
              grad: "from-indigo-500 to-violet-400",
            },
          ].map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>
        </Container>
      </Section>

      {/* ---------- FUNNEL DESIGN ---------- */}
      <Section id="funnel" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Acquisition → Conversion → Pipeline</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <PlainList
              icon={Megaphone}
              badge="Acquisition"
              color="bg-blue-600"
              items={[
                "LinkedIn ABM to buying roles; retarget with proof.",
                "Search for problem/solution, comparisons, & integrations.",
                "Partner/content syndication where relevant.",
              ]}
            />
            <PlainList
              icon={MousePointerClick}
              badge="Conversion & RevOps"
              color="bg-emerald-500"
              items={[
                "High-converting demo/consult pages with social proof.",
                "Lead scoring, routing, and AE/SDR SLAs.",
                "Offline conversions: map meetings/opps back to ads.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ---------- MEASUREMENT & GUARDRAILS ---------- */}
      <Section id="measurement" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Attribution and weekly improvement</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Pipeline Attribution",
                desc: "See sourced vs. influenced, by channel and content.",
                icon: BarChart3,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Guardrails",
                desc: "Spend pacing, audience hygiene, and brand safety.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Learning Loop",
                desc: "Weekly tests → insights → next steps for SDRs & ads.",
                icon: Sparkles,
                grad: "from-violet-500 to-fuchsia-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
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
              Make marketing feed your pipeline.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit ICP, offers, channels, and RevOps—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free B2B Audit
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
            {[
              { q: "Do you work with existing SDR/AE teams?", a: "Yes. We align scoring, routing, cadences, and SLAs so marketing and sales move together." },
              { q: "Can you show sourced vs. influenced pipeline?", a: "Yes—dashboards include both, plus meetings, opps, and win rates by segment." },
              { q: "How fast until we see results?", a: "Quick wins in 2–4 weeks from offer packaging and ABM setup; durable growth compounds with content and RevOps." },
              { q: "Do you support outbound too?", a: "We assist with messaging, list logic, and reply playbooks to complement paid/inbound." },
            ].map((f) => (
              <details key={f.q} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-slate-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- JSON-LD (Service) ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "B2B Services Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Industry Marketing",
            areaServed: "Global",
            description:
              "GoDigitalPro generates qualified B2B pipeline with ICP/offer clarity, LinkedIn ABM, problem/solution & comparison SEO, and RevOps—tracked with clear attribution.",
            offers: { "@type": "Offer", category: "Service" },
            audience: { "@type": "Organization" }
          }),
        }}
      />
    </main>
  );
}

/* ---------- Reusable small components ---------- */
function Card({ title, desc, icon: Icon, grad }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm min-h-[190px]">
      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${grad} p-2 text-white`}>
          <Icon className="size-5" />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-700">{desc}</p>
    </article>
  );
}

function BulletCard({ title, points, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className={`inline-flex rounded-xl ${color} p-2 text-white`}>
          <Icon className="size-5" />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: "currentColor" }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlainList({ icon: Icon, badge, color, items }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className={`inline-flex rounded-xl ${color} p-2 text-white`}>
          <Icon className="size-5" />
        </span>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{badge}</h3>
        </div>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700">
        {items.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: "currentColor" }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

/* =========================
   Process Stepper Component
   ========================= */
function ProcessStepper() {
  const steps = [
    { label: "Diagnose", desc: "ICP, offer, assets, channels, and RevOps baseline." },
    { label: "Package", desc: "Proof, calculators, one-pagers, integration maps." },
    { label: "Build", desc: "ABM audiences, SEO hubs, demo pages, cadences." },
    { label: "Launch", desc: "ABM + search with guardrails and retargeting." },
    { label: "Nurture", desc: "Cadences, SLAs, and SDR playbooks by segment." },
    { label: "Scale", desc: "Portfolio budgets, new segments, and partners." },
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
