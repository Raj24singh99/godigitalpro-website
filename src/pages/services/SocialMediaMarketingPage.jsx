import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Sparkles,
  Users,
  MessageCircle,
  Megaphone,
  BarChart3,
  Camera,
  Video,
  Palette,
  ThumbsUp,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating phrases for hero (only the colored part changes) */
const WORDS = [
  { text: "Content Calendars", color: "text-emerald-600" },
  { text: "Reels & Shorts", color: "text-rose-600" },
  { text: "Carousels", color: "text-indigo-600" },
  { text: "Creator Collabs", color: "text-amber-600" },
  { text: "Community Building", color: "text-fuchsia-600" },
  { text: "Social SEO", color: "text-sky-600" },
];

export default function SocialMediaMarketingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro runs a consistent social content engine: strategy, content calendars, reels/shorts, carousels, creator collaborations, community management, and analytics—built for reach, saves, and conversations.",
    []
  );

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
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
            Social Media Marketing that builds reach and trust.
          </h1>

          {/* Animated line — only colored text changes */}
          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We run </span>
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
              Get Free Social Audit
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
                title: "Strategy & Voice",
                desc: "Clear POV, content pillars, and hooks that fit your brand.",
                icon: Megaphone,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Content Engine",
                desc: "Monthly calendars across reels, carousels, and stories.",
                icon: Calendar,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Production",
                desc: "Script, design, shoot—clean templates and fast edits.",
                icon: Camera,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Creators & UGC",
                desc: "Briefs, collabs, and approvals with usage rights.",
                icon: HeartHandshake,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Community",
                desc: "Comments, DMs, and prompts that spark replies.",
                icon: MessageCircle,
                grad: "from-fuchsia-500 to-pink-400",
              },
              {
                title: "Analytics",
                desc: "Reach, saves, CTR, and next actions every week.",
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

      {/* ---------- CONTENT SYSTEM (Plain-English) ---------- */}
      <Section id="content-system" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">How the content system works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Content System */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-rose-500/90 p-2 text-white">
                  <Video className="size-5" />
                </span>
                <h3 className="font-semibold">Content System</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Monthly themes with weekly hooks and formats.",
                  "Reels/shorts first; carousels & stories support.",
                  "Template library for fast, on-brand iterations.",
                  "Social SEO with captions, keywords, and tags.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-rose-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Community Ops */}
            <article className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-emerald-500/90 p-2 text-white">
                  <Users className="size-5" />
                </span>
                <h3 className="font-semibold">Community Ops</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Daily comment & DM cycles with response playbooks.",
                  "Prompts and polls to spark replies and saves.",
                  "Crisis guardrails and approval workflows.",
                  "Monthly learnings → next month’s plan.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 rounded-full bg-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      {/* ---------- PLATFORM PLAYBOOKS ---------- */}
      <Section id="playbooks" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Platform playbooks</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Instagram",
                color: "bg-pink-600",
                icon: Camera,
                points: [
                  "Reels + carousels with save-worthy hooks.",
                  "Highlights, story polls, and link stickers.",
                  "Creator collabs and UGC reposts.",
                ],
              },
              {
                title: "LinkedIn",
                color: "bg-sky-700",
                icon: Megaphone,
                points: [
                  "Narrative posts with 1–3 takeaways.",
                  "Carousel explainers and native docs.",
                  "Leadership POV and consistent comments.",
                ],
              },
              {
                title: "YouTube",
                color: "bg-red-600",
                icon: Video,
                points: [
                  "Shorts for discovery, long-form for depth.",
                  "Titles, thumbnails, and chapters.",
                  "Community tab posts and polls.",
                ],
              },
              {
                title: "X (Twitter)",
                color: "bg-black",
                icon: ThumbsUp,
                points: [
                  "Threads with clear structure and hooks.",
                  "Replies to surface in relevant timelines.",
                  "Lists and saved searches for engagement.",
                ],
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex rounded-xl ${b.color} p-2 text-white`}>
                    <b.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full" style={{ backgroundColor: "currentColor" }}>
                        {/* decorative dot */}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              Ready to build a consistent social presence?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit your content, voice, and engagement—then ship a 30-day action plan.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Get Free Social Audit
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
              { q: "Do you create all content?", a: "Yes—scripts, designs, edits, and captions. We can also work with your team or creators." },
              { q: "Will you manage comments and DMs?", a: "Yes. We use response playbooks and escalate when needed." },
              { q: "How soon can we see results?", a: "Expect baseline improvements in 2–4 weeks; compounding reach as formats and hooks iterate." },
              { q: "Do you handle paid boosts?", a: "We can boost key posts and integrate with your paid strategy for reach and testing." },
              { q: "What reports do we get?", a: "Weekly scorecard: posts, reach, saves/CTR, best hooks, action items." },
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

      {/* JSON-LD for SEO crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Social Media Marketing",
            provider: { "@type": "Organization", name: "GoDigitalPro" },
            serviceType: "Social Media Management",
            areaServed: "Global",
            description:
              "Strategy, content calendars, reels/shorts, carousels, creator collaborations, community management, and analytics for reach and trust.",
            offers: { "@type": "Offer", category: "Service" },
          }),
        }}
      />
    </main>
  );
}

/* =========================
   Process Stepper Component
   ========================= */
function ProcessStepper() {
  const steps = [
    { label: "Discover", desc: "Audience, voice, pillars, and goals." },
    { label: "Plan", desc: "Monthly calendar with formats and hooks." },
    { label: "Produce", desc: "Scripts, designs, shoots, and edits." },
    { label: "Publish", desc: "Post, respond, and prompt engagement." },
    { label: "Amplify", desc: "Creator collabs and smart boosts." },
    { label: "Measure", desc: "Scorecard, insights, next month plan." },
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
