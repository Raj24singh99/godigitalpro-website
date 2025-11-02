import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ShoppingCart,
  Search,
  Megaphone,
  Gauge,
  BarChart3,
  Package,
  Tags,
  CreditCard,
  MousePointerClick,
  Users,
  Mail,
  Smartphone,
  Truck,
  ShieldCheck,
  Sparkles,
  Gift,
  LineChart,
  ClipboardCheck,
  LayoutDashboard,
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
  { text: "Lower CAC", color: "text-emerald-600" },
  { text: "Higher AOV", color: "text-rose-600" },
  { text: "Checkout Conversion", color: "text-indigo-600" },
  { text: "Retention & LTV", color: "text-amber-600" },
  { text: "Email & SMS Flows", color: "text-fuchsia-600" },
  { text: "Feed & PMax", color: "text-sky-600" },
];

export default function D2CEcommercePage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro drives full-funnel growth for D2C & E-commerce: high-intent SEO, paid ads (Search, Shopping, PMax, Meta), CRO for PDP/checkout, and lifecycle Email/SMS—so CAC drops, AOV/LTV rise, and revenue compounds.",
    []
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Helmet>
        <title>D2C & E-commerce Marketing | Growth, CRO, Retention</title>
        <meta
          name="description"
          content="Full-funnel D2C & E-commerce growth: SEO, paid ads (Search, Shopping, PMax, Meta), CRO for PDP/checkout, Email/SMS retention. Lower CAC, higher AOV/LTV."
        />
        <link rel="canonical" href="/industries/d2c-ecommerce" />
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
            D2C & E-commerce growth that compounds revenue.
          </h1>

          {/* animated line — only colored part changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)" }}
            >
              <span className="text-slate-700">We drive </span>
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
              Get Free Store Audit
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
                title: "High CAC, flat revenue",
                desc: "Prospecting spends grow, but new customer payback lags.",
                icon: Megaphone,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Low PDP/checkout CR",
                desc: "Weak images, copy, and trust; friction in the last mile.",
                icon: CreditCard,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Thin retention",
                desc: "Sparse Email/SMS flows; low repeat and VIP engagement.",
                icon: Mail,
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
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Feed & taxonomy gaps",
                desc: "Titles, attributes, and collections don’t match search intent.",
                icon: Package,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Creative & CRO debt",
                desc: "No testing cadence for hooks, images, bundles, and offers.",
                icon: Sparkles,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Lifecycle underused",
                desc: "Missing welcome/post-purchase/win-back and VIP logic.",
                icon: Smartphone,
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
                title: "E-com SEO & Feeds",
                points: [
                  "Collections & PDPs with strong schema and internal links.",
                  "Feed rules: titles, attributes, custom labels for PMax.",
                  "CWV fixes for speed and mobile UX.",
                ],
                icon: Search,
                color: "bg-blue-600",
              },
              {
                title: "Paid: Search · Shopping · PMax · Meta",
                points: [
                  "Search & Shopping for intent; PMax for scale & discover.",
                  "Prospecting creatives by angle; remarketing by objections.",
                  "Brand protection & query filters to keep CAC in check.",
                ],
                icon: Megaphone,
                color: "bg-rose-500",
              },
              {
                title: "CRO on PDP & Checkout",
                points: [
                  "Hero images, benefit bullets, guarantees, FAQs.",
                  "Bundles, tiered pricing, and free-shipping thresholds.",
                  "Trust marks, reviews, UPI/COD clarity, and speed.",
                ],
                icon: MousePointerClick,
                color: "bg-emerald-500",
              },
              {
                title: "Lifecycle: Email/SMS",
                points: [
                  "Flows: welcome, browse/cart, post-purchase, win-back.",
                  "VIP tiers & offers; LTV cohorts and send-time tuning.",
                  "UGC/review capture and cross-sell logic.",
                ],
                icon: Mail,
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
          <h2 className="text-2xl md:text-3xl font-semibold">Acquisition → Conversion → Repeat</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <PlainList
              icon={ShoppingCart}
              badge="Acquisition"
              color="bg-sky-600"
              items={[
                "Search/Shopping for high intent; PMax & Meta for discovery.",
                "Angles by problem, use-case, and social proof.",
                "UGC and creator-style ads to boost CTR.",
              ]}
            />
            <PlainList
              icon={Users}
              badge="Conversion & Retention"
              color="bg-emerald-600"
              items={[
                "PDP clarity, bundles, tiered carts, and shipping thresholds.",
                "Email/SMS flows for welcome, post-purchase, win-back.",
                "VIP & loyalty offers to raise AOV and repeat rate.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ---------- MEASUREMENT & GUARDRAILS ---------- */}
      <Section id="measurement" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Measurement & guardrails</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Scorecard",
                desc: "CPC/CPA/ROAS with add-to-cart, checkout, and refund visibility.",
                icon: BarChart3,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Ops & Safety",
                desc: "Inventory/price sync, ad disapprovals, and brand protection.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Pacing & Profit",
                desc: "Budget guardrails, margin filters, and payback windows.",
                icon: LineChart,
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
              Ready to grow efficient revenue?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit feeds, ads, PDP/checkout, and lifecycle—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free Store Audit
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
            name: "D2C & E-commerce Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Industry Marketing",
            areaServed: "Global",
            description:
              "Full-funnel growth for D2C & E-commerce: SEO, paid ads (Search, Shopping, PMax, Meta), CRO for PDP/checkout, and lifecycle Email/SMS to lower CAC and raise AOV/LTV.",
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
    { label: "Audit", desc: "Feeds, SEO, ads, PDP/checkout, and lifecycle." },
    { label: "Build", desc: "Fix taxonomy; launch Search/Shopping/PMax & Meta." },
    { label: "Convert", desc: "CRO: images, copy, bundles, thresholds, trust." },
    { label: "Retain", desc: "Email/SMS flows; VIPs, reviews, cross-sell." },
    { label: "Measure", desc: "Scorecards, pacing, margins, payback rules." },
    { label: "Scale", desc: "New geos, partners, and incremental channels." },
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
