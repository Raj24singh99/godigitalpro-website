import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, serviceJsonLd } from "../../utils/seo";
import {
  GraduationCap,
  MapPin,
  Search,
  Megaphone,
  Globe2,
  LayoutDashboard,
  BarChart3,
  ClipboardCheck,
  FileText,
  BookOpen,
  Users,
  PhoneCall,
  MessageCircle,
  MousePointerClick,
  ShieldCheck,
  Gauge,
  CalendarCheck2,
} from "lucide-react";

/* ---------- Layout helpers ---------- */
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/* ---------- Hero rotating words (only colored part changes) ---------- */
const WORDS = [
  { text: "Online Visibility", color: "text-indigo-600" },
  { text: "Higher Enrollments", color: "text-emerald-600" },
  { text: "Local SEO", color: "text-rose-600" },
  { text: "Paid Ads", color: "text-amber-600" },
  { text: "SEO", color: "text-fuchsia-600" },
  { text: "Website Development", color: "text-sky-600" },
  { text: "Brand Alignment", color: "text-violet-600" },
];

export default function EdTechPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro helps EdTech brands win trusted visibility and increase enrollments with Local SEO, SEO, Paid Ads, and conversion-focused websites—aligned to your programs, locations, and brand narrative. We build funnels, proof, and counselor workflows that turn interest into admissions.",
    []
  );

  /* ---------- SEO constants (absolute URLs) ---------- */
  const path = "/industries/edtech";
  const pageUrl = buildCanonical(path);

  const title = "EdTech Marketing | Local SEO, SEO, Paid Ads & Admissions Funnels";
  const desc =
    "Stronger online visibility and higher enrollments for EdTech. Local SEO, SEO, Paid Ads, conversion-focused websites, and counselor workflows—aligned to your brand.";
  const keywords =
    "EdTech marketing, education marketing agency, local SEO for institutes, admissions funnels, counselor SLAs, education paid ads, EdTech SEO, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "EdTech Marketing",
            description: desc,
            url: pageUrl,
          }),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Industries", url: `${buildCanonical("/")}#industries` },
          { name: "EdTech", url: pageUrl },
        ]}
      />

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 0 0 rgba(59,130,246,0)} 50%{box-shadow:0 0 0 10px rgba(59,130,246,.12)} }
        @keyframes lineFlow { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

      {/* ---------- HERO (text only; animated colored phrase) ---------- */}
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
            EdTech growth that turns searchers into students.
          </h1>

          {/* animated line — only colored part changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)" }}
            >
              <span className="text-slate-700">We fix </span>
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
              Get Free EdTech Audit
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
                title: "Low online discoverability",
                desc: "Programs don’t show for city + course queries; GMB is weak.",
                icon: Search,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "High CPL. Low show-ups",
                desc: "Clicks don’t convert to demo/class bookings or counselor calls.",
                icon: Gauge,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Thin proof",
                desc: "Outcomes, faculty, and curriculum clarity are buried or missing.",
                icon: ClipboardCheck,
                grad: "from-emerald-500 to-teal-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- ROOT CAUSES (diagnosis) ---------- */}
      <Section id="diagnosis" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Why it happens (diagnosis)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Weak Local SEO",
                desc: "No city pages, NAP inconsistency, and unoptimized GMB.",
                icon: MapPin,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Generic ad structure",
                desc: "Broad keywords, no outcomes hooks, and poor remarketing.",
                icon: Megaphone,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Leaky funnel & ops",
                desc: "Form friction, no WhatsApp/call routing, poor counselor SLAs.",
                icon: PhoneCall,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- OUR SOLUTION (mapped to problems) ---------- */}
      <Section id="solution" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">How we solve it</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Local SEO for campuses",
                points: [
                  "Program + city pages with FAQs and outcomes.",
                  "GMB optimization: categories, Q&A, reviews, photos.",
                  "Citations and NAP cleanup.",
                ],
                icon: MapPin,
                color: "bg-emerald-500",
              },
              {
                title: "Paid search & social by intent",
                points: [
                  "Search: program + city; placements and outcomes keywords.",
                  "Meta/YouTube remarketing with proof-first creatives.",
                  "PMax with brand protection where needed.",
                ],
                icon: Megaphone,
                color: "bg-blue-600",
              },
              {
                title: "SEO + Content engine",
                points: [
                  "Topic hubs: syllabus, fees, placements, comparisons.",
                  "Entity/schema, internal links, and fast fixes (CWV).",
                  "Editorial calendar with briefs and review flow.",
                ],
                icon: FileText,
                color: "bg-rose-500",
              },
              {
                title: "Conversion-focused website",
                points: [
                  "Fast pages with clear CTAs and frictionless forms.",
                  "WhatsApp + call tracking + counselor routing.",
                  "Thank-you → nurture: email/SMS/WhatsApp sequences.",
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

      {/* ---------- PLAYBOOK (EdTech-specific) ---------- */}
      <Section id="playbook" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Our EdTech growth playbook</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Proof first",
                desc: "Outcomes, alumni, faculty, and syllabus clarity on page 1.",
                icon: GraduationCap,
                grad: "from-sky-500 to-cyan-400",
              },
              {
                title: "TOFU → BOFU",
                desc: "Blogs & video explainers → demos, trials, open classes.",
                icon: BookOpen,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Nurture ops",
                desc: "CRM + WhatsApp + email with counselor SLAs & scripts.",
                icon: MessageCircle,
                grad: "from-indigo-500 to-violet-400",
              },
            ].map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- FUNNEL DESIGN (plain English) ---------- */}
      <Section id="funnel" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Admissions funnel, end-to-end</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <PlainList
              icon={MousePointerClick}
              badge="Acquisition"
              color="bg-blue-600"
              items={[
                "Search (program + city), YouTube, Meta, and remarketing.",
                "Local intent capture from GMB and city pages.",
                "Offer hooks tied to outcomes and deadlines.",
              ]}
            />
            <PlainList
              icon={Users}
              badge="Conversion & Nurture"
              color="bg-emerald-500"
              items={[
                "Fast forms, OTP, and WhatsApp ‘save my spot’.",
                "Routing to counselors; SLA + scripts for follow-ups.",
                "Email/SMS cadence: demo reminders, syllabus, fees, FAQs.",
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* ---------- MEASUREMENT ---------- */}
      <Section id="measurement" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Measurement that improves weekly</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Offline Conversions",
                desc: "Push CRM outcomes back to Ads to optimize for enrollments, not just leads.",
                icon: BarChart3,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Guardrails",
                desc: "Brand safety, spend pacing, query filters, and disapproved asset monitors.",
                icon: ShieldCheck,
                grad: "from-slate-500 to-slate-400",
              },
              {
                title: "Scorecard",
                desc: "CPC/CPA, demo rate, show-ups, counselor SLAs, and payback by program.",
                icon: Gauge,
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
              Let’s enroll more students—sustainably.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit visibility, funnels, and nurture ops—then share a 90-day plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free EdTech Audit
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
            name: "EdTech Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Industry Marketing",
            areaServed: "Global",
            description:
              "GoDigitalPro helps EdTech brands improve online visibility and increase enrollments with Local SEO, SEO, Paid Ads, and conversion-focused websites aligned to program and city intent.",
            offers: { "@type": "Offer", category: "Service" },
            audience: { "@type": "EducationalOrganization" }
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
    { label: "Diagnose", desc: "Baseline: search, GMB, site, ads, and CRM ops." },
    { label: "Prove", desc: "Surface outcomes, alumni, faculty, syllabus clarity." },
    { label: "Build", desc: "Local SEO, SEO hubs, ad structure, and fast pages." },
    { label: "Launch", desc: "Full-funnel with guardrails and city intent." },
    { label: "Nurture", desc: "WhatsApp/email + counselor SLAs and scripts." },
    { label: "Scale", desc: "Budget pacing, offline conv., and new geos." },
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
