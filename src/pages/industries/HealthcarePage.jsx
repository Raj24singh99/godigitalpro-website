import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Stethoscope,
  MapPin,
  PhoneCall,
  Search,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  CalendarCheck2,
  MessageSquare,
  Gauge,
  Building2,
  HeartPulse,
  Megaphone,
  MousePointerClick,
  LayoutDashboard,
  Stars,
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
  { text: "Local Visibility", color: "text-indigo-600" },
  { text: "Appointment Bookings", color: "text-emerald-600" },
  { text: "Reputation", color: "text-rose-600" },
  { text: "Compliance", color: "text-amber-600" },
  { text: "Patient Education", color: "text-sky-600" },
  { text: "Call Tracking", color: "text-fuchsia-600" },
];

export default function HealthcarePage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro grows patient volumes for clinics, hospitals, and diagnostics with compliant marketing: Local SEO, PPC, reputation programs, conversion-focused journeys, and appointment analytics.",
    []
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Helmet>
        <title>Healthcare Marketing | Clinics, Hospitals, Diagnostics</title>
        <meta
          name="description"
          content="Compliant patient acquisition and education for healthcare. Local SEO, PPC, reputation, and conversion-focused journeys with appointment tracking."
        />
        <link rel="canonical" href="/industries/healthcare" />
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
            Healthcare marketing that puts patients first.
          </h1>

          {/* animated line — only colored part changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)" }}
            >
              <span className="text-slate-700">We improve </span>
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
              Get Free Healthcare Audit
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
                title: "Low local discoverability",
                desc: "Maps/listings are incomplete; service pages don’t rank.",
                icon: MapPin,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Few bookings & no-shows",
                desc: "Clicks don’t become calls/appointments; reminders missing.",
                icon: CalendarCheck2,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Reputation risks",
                desc: "Sparse reviews, unmanaged feedback, trust gaps.",
                icon: Stars,
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
                title: "Weak Local SEO",
                desc: "NAP inconsistencies, thin clinic/doctor pages, missing schema.",
                icon: Search,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Generic journeys",
                desc: "Symptom → service flow unclear; CTAs and FAQs buried.",
                icon: MousePointerClick,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Compliance gaps",
                desc: "Copy, consent, and tracking not aligned to regulations.",
                icon: ShieldCheck,
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
                title: "Local SEO for healthcare",
                points: [
                  "Locations, specialties, doctors, and services pages.",
                  "GMB optimization, FAQs, photos, and Q&A management.",
                  "Schema for healthcare providers and reviews.",
                ],
                icon: Building2,
                color: "bg-blue-600",
              },
              {
                title: "PPC for calls & appointments",
                points: [
                  "Geo/time controls, call extensions, and ad schedules.",
                  "Search + Performance Max tuned to local intent.",
                  "Remarketing with education-led creatives.",
                ],
                icon: Megaphone,
                color: "bg-emerald-600",
              },
              {
                title: "Reputation & education",
                points: [
                  "Review programs with consent; response playbooks.",
                  "Symptom → service explainers, doctors’ profiles.",
                  "Trust elements: outcomes, accreditations, FAQs.",
                ],
                icon: FileText,
                color: "bg-rose-500",
              },
              {
                title: "Conversion-focused journeys",
                points: [
                  "Clear CTAs (call/WhatsApp/appointment forms).",
                  "Reminders and directions; minimal form friction.",
                  "Analytics: call tracking and booking attribution.",
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
          <h2 className="text-2xl md:text-3xl font-semibold">Discovery → Decision → Appointment</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <PlainList
              icon={Stethoscope}
              badge="Discovery"
              color="bg-sky-600"
              items={[
                "Local SEO: service + city queries and GMB presence.",
                "PPC: search intent with call extensions and schedules.",
                "Education: symptom FAQs, doctor profiles, and outcomes.",
              ]}
            />
            <PlainList
              icon={PhoneCall}
              badge="Decision & Booking"
              color="bg-emerald-600"
              items={[
                "Clear CTAs (call/WhatsApp/online booking) visible on mobile.",
                "Reminders, directions, and follow-ups reduce no-shows.",
                "Call tracking and appointment analytics to improve weekly.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ---------- MEASUREMENT & GUARDRAILS ---------- */}
      <Section id="measurement" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Compliance, safety, and measurement</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Compliance first",
                desc: "Consent, copy checks, and data handling aligned to regulations.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Calls & bookings",
                desc: "Track call outcomes and appointment conversions per channel.",
                icon: ClipboardCheck,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Weekly improvements",
                desc: "Query filters, ad schedules, and journey fixes by device.",
                icon: Gauge,
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
              Make it easy for patients to choose you.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit visibility, journeys, and compliance—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free Healthcare Audit
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
            name: "Healthcare Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Industry Marketing",
            areaServed: "Global",
            description:
              "Compliant patient acquisition and education for clinics, hospitals, and diagnostics. Local SEO, PPC, reputation, and conversion-focused journeys with appointment tracking.",
            offers: { "@type": "Offer", category: "Service" },
            audience: { "@type": "MedicalOrganization" }
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
    { label: "Diagnose", desc: "Local presence, journeys, compliance, and analytics." },
    { label: "Build", desc: "Service pages, GMB, PPC, reviews, and CTAs." },
    { label: "Launch", desc: "Geo/time controls, education-led ads, and FAQs." },
    { label: "Measure", desc: "Call & booking attribution by channel and device." },
    { label: "Improve", desc: "Weekly fixes: queries, schedules, journey friction." },
    { label: "Scale", desc: "New locations, doctors, and specialties." },
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
