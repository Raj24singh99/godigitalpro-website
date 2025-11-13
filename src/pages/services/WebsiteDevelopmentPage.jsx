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
  { text: "Landing Pages", color: "text-emerald-600" },
  { text: "Complete Websites", color: "text-indigo-600" },
  { text: "E-commerce Sites", color: "text-rose-600" },
  { text: "Lead-Gen Sites", color: "text-amber-600" },
  { text: "Web Apps", color: "text-fuchsia-600" },
  { text: "Blog/Content Hubs", color: "text-sky-600" },
];

/** Tech chips shown under hero */
const TECH = [
  { label: "React", color: "#61DAFB" },
  { label: "Vite", color: "#646CFF" },
  { label: "Tailwind CSS", color: "#38BDF8" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Node.js", color: "#3C873A" },
  { label: "Express", color: "#111827" },
  { label: "Firebase", color: "#FFCA28" },
  { label: "Headless WordPress", color: "#21759B" },
  { label: "Netlify", color: "#00AD9F" },
  { label: "Vercel", color: "#000000" },
  { label: "Cloudflare", color: "#F38020" },
  { label: "GA4 & Pixels", color: "#FBBC05" },
];

const WEBSITE_FAQ = [
  {
    question: "How fast can we go live?",
    answer: "Simple landing pages ship in days. Full sites usually take 3–6 weeks depending on pages and integrations.",
  },
  {
    question: "Can you work with our content or CMS?",
    answer: "Yes. We can connect to headless WordPress, Firebase, or your existing APIs for content and forms.",
  },
  {
    question: "Will it be SEO-ready?",
    answer: "Yes. We set titles, meta, schema, sitemaps, robots, clean URLs, and fast loading for Core Web Vitals.",
  },
  {
    question: "Do you handle analytics and pixels?",
    answer: "Yes. GA4, Meta, LinkedIn, Google Ads, and event tracking—mapped to your funnel and goals.",
  },
  {
    question: "What about maintenance?",
    answer: "We document deploy steps, keep dependencies healthy, and can support updates and new pages.",
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
      "GoDigitalPro builds fast, SEO-ready websites and web apps: information architecture, UX/UI, React/Vite frontends, API-driven backends, headless CMS, schema, analytics, and CI/CD with secure hosting.",
    []
  );

  const title = "Website Development | Fast, SEO-Ready & Scalable";
  const desc =
    "We design and build fast, SEO-ready websites & web apps with React/Vite, clean UX, secure APIs, headless CMS, schema, analytics, and reliable hosting.";
  const keywords =
    "website development, landing pages, web apps, headless CMS, React agency, Vite, CRO websites, GoDigitalPro";
  const canonical = buildCanonical("/services/website-development");

  const schemaBlocks = useMemo(
    () =>
      [
        serviceJsonLd({
          name: "Website Development",
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
          { name: "Website Development", url: canonical },
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
            Website Development that’s fast, clear, and built to scale.
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
              Let’s Build Your Website
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
                title: "Structure & UX",
                desc: "Sitemap, flows, and wireframes that make navigation obvious.",
                icon: LayoutDashboard,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Design System",
                desc: "Clean UI, components, and spacing rules for consistent pages.",
                icon: Palette,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Frontend (React/Vite)",
                desc: "Fast, modern UI with Tailwind—optimized for Core Web Vitals.",
                icon: MonitorSmartphone,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Backend & APIs",
                desc: "Node/Firebase/Headless WP with secure auth and clean endpoints.",
                icon: ServerCog,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "SEO & Schema",
                desc: "Meta, OpenGraph, sitemap, robots, JSON-LD, and clean HTML.",
                icon: Search,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Analytics & CRO",
                desc: "GA4, pixels, events, funnels, and A/B tests for better CVR.",
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
          <h2 className="text-2xl md:text-3xl font-semibold">How the build works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Frontend */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-emerald-500/90 p-2 text-white">
                  <Layers className="size-5" />
                </span>
                <h3 className="font-semibold">Frontend (what users see)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "React + Vite + Tailwind for speed and clean UI.",
                  "Responsive components that look great on phone and desktop.",
                  "Lazy-loading images, prefetching routes, and accessible markup.",
                  "Core Web Vitals: fast first paint, stable layout, quick interaction.",
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
                <h3 className="font-semibold">Backend (how it runs)</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "API-driven content with Node/Firebase or Headless WordPress.",
                  "Auth, roles, and form submissions with spam protection.",
                  "Integrations: CRM, email, payment, search, and storage.",
                  "Caching and CDNs for quick global delivery.",
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
          <h2 className="text-2xl md:text-3xl font-semibold">Hosting & DevOps</h2>
        </Container>
        <Container>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Deployment",
                desc: "Netlify/Vercel/Firebase with preview links for every change.",
                icon: Rocket,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Security",
                desc: "HTTPS/SSL, headers, backups, and least-privilege access.",
                icon: ShieldCheck,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Monitoring",
                desc: "Uptime checks, error logs, analytics, and alerting.",
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
              Launch a site that loads fast and converts.
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll blueprint the structure, design the UI, wire the backend, and ship with analytics.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Let’s Build Your Website
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
    { label: "Discover", desc: "Goals, users, pages, and success metrics." },
    { label: "Blueprint", desc: "Sitemap, flows, and wireframes." },
    { label: "Design", desc: "UI kit, components, and layouts." },
    { label: "Build", desc: "Frontend + APIs + CMS integration." },
    { label: "Optimize", desc: "SEO, performance, and QA fixes." },
    { label: "Launch", desc: "Deploy, monitor, iterate." },
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
