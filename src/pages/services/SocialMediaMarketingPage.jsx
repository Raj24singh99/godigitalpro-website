// src/pages/services/SocialMediaMarketingPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  Calendar,
  Users,
  MessageCircle,
  Megaphone,
  BarChart3,
  Camera,
  Video,
  ThumbsUp,
  HeartHandshake,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);
const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

/** Rotating phrases for hero (only the colored part changes) */
const WORDS = [
  { text: "Admissions Storytelling", color: "text-emerald-600" },
  { text: "Reels & Shorts", color: "text-rose-600" },
  { text: "Parent Trust Content", color: "text-indigo-600" },
  { text: "Founder & Faculty Videos", color: "text-amber-600" },
  { text: "Community Replies", color: "text-fuchsia-600" },
  { text: "Social Search Visibility", color: "text-sky-600" },
];

const SOCIAL_FAQ = [
  { question: "Do you create all content?", answer: "Yes. We can handle scripts, briefs, edits, captions, and design, or plug into your internal content and production teams." },
  { question: "Will you manage comments and DMs?", answer: "Yes. We use response playbooks and escalation rules, especially when comments reveal lead intent, objections, or counselor follow-up opportunities." },
  { question: "How soon can we see traction?", answer: "You can improve consistency quickly, but stronger reach, saves, and trust usually come from a few cycles of testing formats, hooks, and posting rhythms." },
  { question: "Do you connect social with paid and admissions?", answer: "Yes. We use organic learnings to improve ad creative and can connect responses, proof themes, and FAQs back into landing pages and admissions teams." },
  { question: "What reports do we get?", answer: "A weekly scorecard covering content output, reach, saves, watch time, top hooks, community signals, and the next execution actions." },
];

export default function SocialMediaMarketingPage() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(t);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro runs social and community systems for EdTech brands: content strategy, reels and shorts, founder and faculty storytelling, community management, and analytics built to increase trust, reach, and qualified attention.",
    []
  );

  // ---- SEO constants ----
  const path = "/services/social-media-marketing";
  const pageUrl = buildCanonical(path);

  const title = "Social Media & Community for EdTech | Reels, Trust Content & Growth";
  const desc =
    "Social media and community systems for EdTech: strategy, reels and shorts, founder and faculty storytelling, community management, and analytics built for trust, reach, and response.";
  const keywords =
    "edtech social media agency, education social media marketing, reels for education brands, community management, founder content, student trust content";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "Social Media & Community for EdTech",
            description: desc,
            url: pageUrl,
          }),
          faqJsonLd(SOCIAL_FAQ),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Social Media & Community", url: pageUrl },
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
            Social and community systems that turn attention into trust.
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
                title: "Strategy & voice",
                desc: "Clear POV, content pillars, and themes built around student demand, parent trust, and proof.",
                icon: Megaphone,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Content engine",
                desc: "Monthly calendars across reels, shorts, stories, and carousels with a repeatable publishing rhythm.",
                icon: Calendar,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Production",
                desc: "Scripts, edits, templates, and shoot direction for founder, faculty, student, and campus content.",
                icon: Camera,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Proof formats",
                desc: "Student stories, testimonials, FAQs, and learning moments adapted into formats that keep compounding.",
                icon: HeartHandshake,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Community",
                desc: "Comments, DMs, replies, and prompts that convert passive attention into useful conversations.",
                icon: MessageCircle,
                grad: "from-fuchsia-500 to-pink-400",
              },
              {
                title: "Analytics",
                desc: "Watch time, saves, reach, response patterns, and weekly next-step decisions.",
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
                <h3 className="font-semibold">Content system</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Monthly themes built around outcomes, trust, and real student questions.",
                  "Reels and shorts first, with carousels, stories, and static proof formats supporting them.",
                  "Template libraries for founder content, admissions FAQs, student proof, and announcements.",
                  "Social search optimization with caption structure, keywords, and recognizable series formats.",
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
                <h3 className="font-semibold">Community ops</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {[
                  "Daily comment and DM cycles with response playbooks and escalation rules.",
                  "Prompts, polls, and story interactions that surface interest and objections.",
                  "Review, moderation, and crisis guardrails for high-visibility moments.",
                  "Monthly learnings fed back into paid creative, landing pages, and next month’s plan.",
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
                  "Reels and carousels with save-worthy hooks, proof, and admissions clarity.",
                  "Highlights, story polls, campus glimpses, and link stickers that move users forward.",
                  "Student proof, creator collaborations, and repurposed paid-ad winners.",
                ],
              },
              {
                title: "LinkedIn",
                color: "bg-sky-700",
                icon: Megaphone,
                points: [
                  "Founder and leadership posts with category takes and real growth lessons.",
                  "Carousel explainers, reports, and institutional proof for trust and authority.",
                  "Consistent comments and thought leadership around the education space.",
                ],
              },
              {
                title: "YouTube",
                color: "bg-red-600",
                icon: Video,
                points: [
                  "Shorts for discovery and long-form videos for depth, proof, and FAQ handling.",
                  "Titles, thumbnails, chapters, and playlists aligned to search and trust-building.",
                  "Repurposed founder videos, campus walkthroughs, and student stories.",
                ],
              },
              {
                title: "Community & reviews",
                color: "bg-black",
                icon: ThumbsUp,
                points: [
                  "Review harvesting, testimonial reuse, and proof formats adapted for social.",
                  "Comment and DM learnings turned into fresh posts, FAQs, and campaign hooks.",
                  "Social listening around concerns, objections, and category conversations.",
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
                      <span
                        className="mt-1 size-1.5 rounded-full"
                        style={{ backgroundColor: "currentColor" }}
                        aria-hidden
                      />
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
              Ready to turn social into a stronger trust and demand channel?
            </h2>
            <p className="mt-2 text-slate-700">
              We’ll audit your content system, posting rhythm, and proof gaps, then map the next 30 days of execution.
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
            {SOCIAL_FAQ.map(({ question, answer }) => (
              <details key={question} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{question}</span>
                  <span className="text-slate-500 transition group-open:rotate-45" aria-hidden>+</span>
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
    { label: "Audit", desc: "Audience, voice, current formats, and gaps." },
    { label: "Plan", desc: "Monthly calendar with themes, hooks, and series." },
    { label: "Produce", desc: "Scripts, edits, templates, and shoot direction." },
    { label: "Publish", desc: "Consistent posting with community responses." },
    { label: "Learn", desc: "Watch time, saves, replies, and hook learnings." },
    { label: "Scale", desc: "Double down on repeatable winners across channels." },
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
