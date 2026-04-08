// src/pages/services/BrandBuildingPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import { Target, Palette, Layers, ShieldCheck, Megaphone, Sparkles } from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating hero words (only the colored word changes) */
const WORDS = [
  { text: "Category Positioning", color: "text-emerald-600" },
  { text: "Program Messaging", color: "text-indigo-600" },
  { text: "Parent & Student Trust", color: "text-rose-600" },
  { text: "Creative Systems", color: "text-amber-600" },
];

const BRAND_FAQ = [
  { question: "What do you need from us to start?", answer: "A founder or business lead, access to existing assets, and honest context on your programs, audience, and sales motion." },
  { question: "How long does this take?", answer: "Most positioning and messaging sprints take 3-6 weeks. Broader identity and rollout systems take longer depending on asset count." },
  { question: "Do you work with existing brands?", answer: "Yes. We often sharpen an existing identity instead of replacing it, especially when the visual system already has recognition." },
  { question: "Can you align this with admissions and paid media?", answer: "Yes. Our brand work is built to improve campaign clarity, landing page conversion, counselor conversations, and creative performance." },
  { question: "Do you handle video and creative direction?", answer: "Yes. We script founder videos, student proof formats, ad concepts, and rollout templates that can be used by your internal or external production team." },
  { question: "How do we keep it consistent later?", answer: "You get a practical message house, design rules, reusable templates, and rollout guidance so new pages and ads do not drift." },
  { question: "Can this help a new campus, course, or product launch?", answer: "Yes. We can shape launch messaging, landing page narratives, and creative systems for new offers or geographies." },
  { question: "Do you work with internal teams?", answer: "Yes. We frequently build systems that founders, admissions leaders, designers, and media buyers can all use without confusion." },
];

export default function BrandBuildingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(i);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro helps EdTech brands clarify positioning, sharpen program messaging, and build creative systems that improve trust across websites, ads, social media, and admissions conversations.",
    []
  );

  // ---- SEO constants (absolute URLs) ----
  const path = "/services/brand-building";
  const pageUrl = buildCanonical(path);
  const title = "Brand Positioning for EdTech | Messaging, Identity & Creative Systems";
  const desc =
    "EdTech brand positioning, program messaging, identity systems, and rollout templates that make your offer easier to trust across ads, websites, and admissions journeys.";
  const keywords =
    "edtech brand positioning, education brand strategy, program messaging, visual identity, creative systems, admissions messaging, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "Brand Positioning for EdTech",
            description: desc,
            url: pageUrl,
          }),
          faqJsonLd(BRAND_FAQ),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Brand Positioning", url: pageUrl },
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
          {/* slightly smaller headline */}
          <h1
            className="font-semibold leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Brand positioning that makes your EdTech offer easier to trust and easier to scale.
          </h1>

          {/* bigger animated keyword line — only color word changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We help with </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>
                {WORDS[idx].text}
              </span>
            </div>
          </div>

          <p className="sr-only">{seoIntro}</p>

          {/* single CTA */}
          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Clarify Your Positioning
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
                title: "Category Positioning",
                line:
                  "Clarify who you are for, what makes your offer believable, and why your category story should win.",
                icon: Target,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Message House",
                line:
                  "Program messaging, proof hierarchy, objections, and narrative blocks your team can reuse everywhere.",
                icon: Palette,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Creative Rollout System",
                line:
                  "Identity, templates, and video/ad formats that keep launch assets consistent across web, paid, and social.",
                icon: Layers,
                grad: "from-emerald-500 to-teal-400",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                style={{ minHeight: 210 }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${c.grad} p-2 text-white`}
                  >
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{c.line}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- WHY US ---------- */}
      <Section id="why-us" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Why GoDigitalPro</h2>
        </Container>
        <Container className="mt-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Category fluency",
                line: "We shape the story around student outcomes, trust signals, and admissions objections, not generic branding jargon.",
                icon: Sparkles,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Performance-aware branding",
                line: "The positioning is designed to make landing pages, creatives, and paid media easier to scale, not just prettier.",
                icon: Megaphone,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Built for operating teams",
                line: "Founders, admissions teams, designers, and media buyers all get a system they can actually use in day-to-day execution.",
                icon: ShieldCheck,
                grad: "from-emerald-500 to-lime-400",
              },
            ].map((x) => (
              <article
                key={x.title}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-xl bg-gradient-to-br ${x.grad} p-2 text-white`}>
                    <x.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{x.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{x.line}</p>
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
              Build a brand system your growth team can actually use.
            </h2>
            <p className="mt-2 text-slate-700">
              Sharper positioning, clearer proof, and rollout-ready assets for websites, ads, social, and admissions.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Clarify Your Positioning
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
            {BRAND_FAQ.map(({ question, answer }) => (
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
    { label: "Discover", desc: "Audience, programs, proof, and current narrative." },
    { label: "Research", desc: "Category language, competitors, and objections." },
    { label: "Position", desc: "Ownable story, audience fit, and value promise." },
    { label: "Systemize", desc: "Message house, proof hierarchy, and design rules." },
    { label: "Produce", desc: "Templates, ad concepts, and video directions." },
    { label: "Roll out", desc: "Launch guidance for site, social, ads, and sales." },
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
