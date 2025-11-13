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
  { text: "Messaging", color: "text-emerald-600" },
  { text: "Ideal Customer Profile", color: "text-indigo-600" },
  { text: "Videos & Brand Films", color: "text-rose-600" },
  { text: "Visual Identity", color: "text-amber-600" },
];

const BRAND_FAQ = [
  { question: "What do you need from us to start?", answer: "A decision-maker, a short briefing call, and quick feedback on drafts." },
  { question: "How long does this take?", answer: "Most projects finish in 4–8 weeks depending on scope and assets." },
  { question: "Do you refresh existing brands?", answer: "Yes. If your logo works, we refine and document; if not, we propose simple options." },
  { question: "Can you work with our internal team?", answer: "Yes. We create guidelines and templates they can adopt right away." },
  { question: "Do you handle video?", answer: "We script, storyboard, and edit. For shoots, we can work with your crew or ours." },
  { question: "How do we keep it consistent later?", answer: "You get a compact brand guide and reusable templates so every asset matches." },
  { question: "What happens after handover?", answer: "We can support roll-out, review new assets, and add formats when needed." },
  { question: "Do you work with global teams?", answer: "Yes. We consider markets, languages, and channels during guidelines." },
];

export default function BrandBuildingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(i);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds clear brands: positioning, messaging, identity, and reusable creative. We define ICP, write a simple story, design an identity system, and create templates and video formats you can use across channels.",
    []
  );

  // ---- SEO constants (absolute URLs) ----
  const path = "/services/branding";
  const pageUrl = buildCanonical(path);
  const title = "Brand Building Services | Positioning, Messaging, Identity";
  const desc =
    "Positioning, messaging, visual identity, and reusable templates. Define your ICP, align your story, and ship consistent creative across channels.";
  const keywords =
    "brand building, brand strategy, positioning, messaging, identity system, brand guidelines, ICP, video formats, templates, GoDigitalPro";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "Brand Building",
            description: desc,
            url: pageUrl,
          }),
          faqJsonLd(BRAND_FAQ),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Brand Building", url: pageUrl },
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
            Brand Building that is{" "}
            <span className="whitespace-nowrap">clear, consistent,</span> and easy to use.
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
              Build Your Brand
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
                title: "Brand Strategy",
                line:
                  "Ownable position, ICP, and a simple message house your team can use.",
                icon: Target,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Identity System",
                line:
                  "Logo, colors, type, and layout rules that stay consistent everywhere.",
                icon: Palette,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Repeatable Creative",
                line:
                  "Templates + video formats (6s/15s/30s) to ship fast across channels.",
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
                title: "Plain language",
                line: "No jargon. Clear docs and assets your team can use on day one.",
                icon: Sparkles,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Cross-channel first",
                line: "One look and voice across web, ads, sales, and support.",
                icon: Megaphone,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Built to scale",
                line: "Governance and templates so every new asset stays on-brand.",
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
              Make your brand simple to use.
            </h2>
            <p className="mt-2 text-slate-700">
              One story. One look. Templates you can ship with today.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Build Your Brand
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
    { label: "Discover", desc: "90-min workshop." },
    { label: "Research", desc: "Category and competitors." },
    { label: "Strategy", desc: "Positioning and message." },
    { label: "Design", desc: "Identity and rules." },
    { label: "Make", desc: "Templates & video." },
    { label: "Launch", desc: "Roll-out and handover." },
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
