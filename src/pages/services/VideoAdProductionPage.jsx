import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../components/SeoHelmet";
import { buildCanonical, faqJsonLd, serviceJsonLd } from "../../utils/seo";
import {
  Video,
  Camera,
  Megaphone,
  Scissors,
  BarChart3,
  Workflow,
  Sparkles,
  Layers,
} from "lucide-react";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-14 md:py-20 ${className}`}>{children}</section>
);

const Container = ({ className = "", children }) => (
  <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>
);

const WORDS = [
  { text: "performance creatives", color: "text-rose-600" },
  { text: "founder-led explainers", color: "text-indigo-600" },
  { text: "UGC-style ad variants", color: "text-emerald-600" },
  { text: "retargeting cut-downs", color: "text-amber-600" },
  { text: "reels & shorts", color: "text-sky-600" },
];

const VIDEO_FAQ = [
  {
    question: "Do you only edit, or do you also help with concepts?",
    answer: "We handle the whole system: hooks, concepts, scripts, shot lists, edit directions, and performance feedback loops.",
  },
  {
    question: "Can you work with our in-house team or freelance editors?",
    answer: "Yes. We can plug into your current production setup, or run the workflow end to end with our own templates and edit systems.",
  },
  {
    question: "How many variants do you create from one shoot?",
    answer: "We typically build multiple hooks, aspect ratios, lengths, and CTA endings from the same core footage so paid testing moves faster.",
  },
  {
    question: "How does this connect to paid media performance?",
    answer: "Every concept ties back to funnel stage, ICP, objections, and conversion feedback. Winning hooks are scaled, weak angles are retired quickly.",
  },
  {
    question: "Do you help with organic reels and shorts too?",
    answer: "Yes. The same production system can support paid ads, organic reels, founder content, student proof, and remarketing assets.",
  },
];

export default function VideoAdProductionPage() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((n) => (n + 1) % WORDS.length), 1500);
    return () => clearInterval(timer);
  }, []);

  const seoIntro = useMemo(
    () =>
      "GoDigitalPro builds video and ad production systems for EdTech brands that need creative scale: concepts, scripts, hooks, edits, variants, founder videos, student proof assets, and performance feedback loops for paid and organic channels.",
    []
  );

  const path = "/services/video-ad-production";
  const pageUrl = buildCanonical(path);
  const title = "Video & Ad Production | EdTech Creatives, Reels, Hooks & Variants";
  const desc =
    "Creative systems for EdTech brands: ad concepts, scripts, reels, founder videos, student-proof assets, and high-velocity edit variants built for paid and organic scale.";
  const keywords =
    "video production for ads, ad creatives, reels production, edtech creatives, performance video, founder videos, UGC style ads, creative strategy";

  return (
    <main className="bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={pageUrl}
        keywords={keywords}
        schema={[
          serviceJsonLd({
            name: "Video & Ad Production",
            description: desc,
            url: pageUrl,
          }),
          faqJsonLd(VIDEO_FAQ),
        ]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Services", url: `${buildCanonical("/")}#services` },
          { name: "Video & Ad Production", url: pageUrl },
        ]}
      />

      <style>{`
        @keyframes fadeSwap { 0%{opacity:0; transform:translateY(8px) scale(.98)} 20%{opacity:1; transform:translateY(0) scale(1)} 80%{opacity:1} 100%{opacity:0; transform:translateY(-8px) scale(.98)} }
        @media (prefers-reduced-motion: reduce){ *{animation:none !important; transition:none !important} }
      `}</style>

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
            Video & ad production built for creative scale.
          </h1>

          <div className="mt-4 h-[2.8lh] overflow-hidden">
            <div
              key={idx}
              className="inline-block animate-[fadeSwap_1.5s_ease]"
              style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
            >
              <span className="text-slate-700">We turn one concept into </span>
              <span className={`font-semibold ${WORDS[idx].color}`}>{WORDS[idx].text}</span>
            </div>
          </div>

          <p className="sr-only">{seoIntro}</p>

          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
            >
              Plan My Creative System
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="what-we-do" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Creative strategy",
                desc: "Hook banks, angle maps, objection handling, and funnel-stage briefs before a single edit starts.",
                icon: Megaphone,
                grad: "from-indigo-500 to-sky-400",
              },
              {
                title: "Production planning",
                desc: "Scripts, shot lists, founder prompts, testimonial structures, and modular footage planning for reuse.",
                icon: Camera,
                grad: "from-rose-500 to-orange-400",
              },
              {
                title: "Edit systems",
                desc: "Fast-turn variants across lengths, formats, hooks, subtitles, and CTA endings for paid and organic channels.",
                icon: Scissors,
                grad: "from-emerald-500 to-teal-400",
              },
              {
                title: "Reels and shorts",
                desc: "Organic-first cuts that still support performance goals, category trust, and founder visibility.",
                icon: Video,
                grad: "from-violet-500 to-fuchsia-400",
              },
              {
                title: "Performance feedback",
                desc: "Creative review tied to thumb-stop rate, watch time, CTR, CPL, application quality, and revenue outcomes.",
                icon: BarChart3,
                grad: "from-amber-500 to-yellow-400",
              },
              {
                title: "Creative library",
                desc: "A reusable system of proofs, testimonials, campus visuals, and offer assets your team can keep scaling.",
                icon: Layers,
                grad: "from-slate-500 to-slate-400",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm"
                style={{ minHeight: 210 }}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${card.grad} p-2 text-white`}>
                    <card.icon className="size-5" />
                  </span>
                  <h3 className="font-semibold">{card.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{card.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="formats" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">Formats that keep scaling</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Paid media variants",
                points: [
                  "6s, 15s, and 30s ad edits built around one offer.",
                  "Multiple hook families for testing intent, urgency, and proof.",
                  "Retargeting cuts for objections, FAQs, and reminder sequences.",
                ],
              },
              {
                title: "Trust-building content",
                points: [
                  "Founder POV videos and faculty explainers.",
                  "Student or parent proof stories with clear outcomes.",
                  "Campus, classroom, and process visuals that reduce buyer friction.",
                ],
              },
            ].map((block) => (
              <article key={block.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-black" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="workflow" className="bg-white">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">How it plugs into the growth system</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Paid media",
                desc: "Creative is mapped to funnel stages, audiences, and bidding goals so media buying and production improve together.",
              },
              {
                title: "Organic social",
                desc: "Winning angles become reels, founder clips, proof assets, and student storytelling formats that compound brand trust.",
              },
              {
                title: "Sales and CRM feedback",
                desc: "Admissions objections, counselor notes, and lost-lead reasons flow back into scripts, hooks, and creative priorities.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-black/10 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-black p-2 text-white">
                    <Workflow className="size-5" />
                  </span>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="text-center rounded-3xl border border-black/10 bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
              Build a creative engine, not one-off assets.
            </h2>
            <p className="mt-2 text-slate-700">
              We help EdTech teams produce ads and video in a way that gets faster, cleaner, and more effective every month.
            </p>
            <div className="mt-6">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3.5 text-white hover:opacity-90"
              >
                Build My Creative Engine
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq" className="bg-primary/5">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        </Container>
        <Container className="mt-6">
          <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {VIDEO_FAQ.map(({ question, answer }) => (
              <details key={question} className="group p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium">{question}</span>
                  <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
