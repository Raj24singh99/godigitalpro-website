import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Target,
  Users,
  BarChart3,
  MousePointerClick,
  GitBranch,
  Boxes,
  Rocket,
  ShieldCheck,
  ClipboardCheck,
  LayoutDashboard,
  Link2,
  FileText,
  Webhook,
  Gauge,
} from "lucide-react";

/* ---------- Layout helpers ---------- */
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/* ---------- Hero rotating words (only the colored phrase changes) ---------- */
const WORDS = [
  { text: "Qualified Trials", color: "text-indigo-600" },
  { text: "Activation", color: "text-emerald-600" },
  { text: "PQLs", color: "text-sky-600" },
  { text: "SQLs", color: "text-rose-600" },
  { text: "Payback Time", color: "text-amber-600" },
  { text: "Attribution Clarity", color: "text-fuchsia-600" },
];

export default function SaaSStartupsPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro grows SaaS & tech startups with ICP-led messaging, product-led content, SEM, LinkedIn, and in-product nudges—so trials are qualified, activation rises, and payback shortens with board-ready attribution.",
    []
  );

  /* ---------- SEO constants (absolute URLs) ---------- */
  const site = "https://www.godigitalpro.in";
  const path = "/industries/saas-startups";
  const pageUrl = `${site}${path}`;
  const ogImage = `${site}/og-saas-startups.jpg`; // ← place a 1200x630 image at public/og-saas-startups.jpg

  const title = "SaaS & Tech Startups Marketing | Demand Gen & Activation";
  const desc =
    "SaaS growth with product-led content, SEM, LinkedIn, and analytics. Acquire qualified trials, drive activation with in-product nudges, and prove ROI with clear attribution.";
  const keywords =
    "SaaS marketing, PLG, demand generation, ICP messaging, LinkedIn ads, B2B SaaS SEO, product-led growth, PQL, SQL, activation, payback, GoDigitalPro";

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

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />

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
            SaaS demand gen that converts to activation.
          </h1>

          {/* animated line — only colored part changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)" }}
            >
              <span className="text-slate-700">We optimize for </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>
                {WORDS[idx].text}
              </span>
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
              Get Free SaaS Audit
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- PROBLEMS (symptoms) ---------- */}
      <Section id="problems" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What’s going wrong (symptoms)</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Weak ICP & messaging",
                desc: "Low CTR/CVR because pains and proof aren’t clear.",
                icon: Target,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Trials don’t activate",
                desc: "Leaky onboarding and no in-product nudges.",
                icon: MousePointerClick,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Broken analytics",
                desc: "Sparse events, no funnels, unclear payback.",
                icon: BarChart3,
                grad: "from-rose-500 to-orange-400",
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
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Content not mapped to journey",
                desc: "Few comparison pages, buyer roles, or objection handling.",
                icon: FileText,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Channel concentration",
                desc: "Over-reliance on one channel (often only Google).",
                icon: Link2,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Event gaps",
                desc: "No clear trial→PQA→PQL→SQL funnel or payback view.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
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
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "ICP & messaging system",
                points: [
                  "Pain → value → proof; role-based angles (user vs buyer).",
                  "Homepage/LP rewrites with simple outcomes and CTAs.",
                  "Social proof blocks and objection FAQs.",
                ],
                icon: Users,
                color: "bg-blue-600",
              },
              {
                title: "Demand gen engine",
                points: [
                  "SEO pillars + comparison pages that convert.",
                  "LinkedIn (paid + content) to reach committees.",
                  "SEM for high intent with negatives and clean structure.",
                ],
                icon: GitBranch,
                color: "bg-emerald-600",
              },
              {
                title: "PLG & activation",
                points: [
                  "Onboarding emails and in-app nudges to ‘Aha!’ moment.",
                  "Usage-based triggers for PQL routing to sales.",
                  "Pricing/packaging experiments to lift activation.",
                ],
                icon: Boxes,
                color: "bg-rose-500",
              },
              {
                title: "Attribution & payback",
                points: [
                  "Events for trial→PQA→PQL→SQL; cohort dashboards.",
                  "Source/medium hygiene and CRM sync (webhooks).",
                  "Board-ready CAC, LTV, payback, and north-star tracking.",
                ],
                icon: LayoutDashboard,
                color: "bg-amber-500",
              },
            ].map((b) => (
              <BulletCard key={b.title} {...b} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- FUNNEL (plain English) ---------- */}
      <Section id="funnel" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Acquire → Activate → Expand</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <PlainList
              icon={Rocket}
              badge="Acquire"
              color="bg-sky-600"
              items={[
                "SEO pillars & comparisons to win intent searches.",
                "LinkedIn to reach users, buyers, and influencers.",
                "SEM structure with negatives and query mapping.",
              ]}
            />
            <PlainList
              icon={Webhook}
              badge="Activate & Expand"
              color="bg-emerald-600"
              items={[
                "In-app nudges + emails to reach ‘Aha!’ quickly.",
                "Usage scoring → PQL routing → sales sequences.",
                "Account expansion and upsell triggers post-activation.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ---------- MEASUREMENT & GUARDRAILS ---------- */}
      <Section id="measurement" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Measurement, safety, and ops</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Event model",
                desc: "Trials, PQAs, PQLs, SQLs, revenue; cohort views.",
                icon: ClipboardCheck,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Data hygiene",
                desc: "UTM standards, CRM syncs, and consent/compliance.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Dashboards",
                desc: "CAC, LTV, payback, and experiment scorecards.",
                icon: LayoutDashboard,
                grad: "from-emerald-500 to-teal-400",
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
              Let’s build a predictable pipeline.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit ICP, channels, activation, and analytics—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free SaaS Audit
              </Link>
            </div>
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
            name: "SaaS & Tech Startups Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Industry Marketing",
            areaServed: "Global",
            description:
              "Demand gen and activation for SaaS & tech startups with ICP-led messaging, product-led content, SEM, LinkedIn, and in-product nudges. Clear attribution for trials, activation, and payback.",
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
    { label: "Diagnose", desc: "ICP, messaging, content gaps, events, and funnels." },
    { label: "Build", desc: "Pillars, comparisons, LinkedIn, SEM, and LPs." },
    { label: "Launch", desc: "Clean structures, negatives, and role-based angles." },
    { label: "Activate", desc: "Emails, in-app nudges, and PQL scoring/routing." },
    { label: "Measure", desc: "Trials→PQA→PQL→SQL; CAC, LTV, payback." },
    { label: "Scale", desc: "New segments, geos, and expansion triggers." },
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
