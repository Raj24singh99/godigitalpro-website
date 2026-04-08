import React from "react";
import { Rocket, Lightbulb, Crown, ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * PlansSection (aligned CTAs + unified CTA label)
 * - Titles: Starter / Growth Consultancy / Full Hands-On
 * - Common CTA label: "Get started"
 * - Equal-height cards via flex column; CTA pinned to bottom
 */

const tiers = [
  {
    id: "audit",
    tone: "bg-emerald-50",
    iconBg: "bg-emerald-600",
    badgeBg: "bg-emerald-600",
    icon: Rocket,
    title: "Audit Sprint",
    tagline: "Diagnose the fastest path to better pipeline quality.",
    who: [
      "EdTech teams with rising CPL or weak lead quality",
      "Operators who need clarity before changing agencies or hiring in-house",
      "Leaders who want a concrete 30-60-90 day plan",
    ],
    includes: [
      "Full-funnel audit across paid, SEO, social, site, and CRM",
      "Admissions and counselor leak diagnosis",
      "Geo/program prioritization recommendations",
      "Creative and landing-page improvement roadmap",
      "Executive-ready action plan",
    ],
  },
  {
    id: "advisory",
    tone: "bg-amber-50",
    iconBg: "bg-amber-600",
    badgeBg: "bg-amber-600",
    icon: Lightbulb,
    title: "Growth Advisory",
    tagline: "Senior strategy input for teams already executing in-house.",
    who: [
      "Marketing teams that need stronger decision quality",
      "Leaders who want category depth without a full external pod",
      "Brands that need AI-led analysis, prioritization, and reviews",
    ],
    includes: [
      "Monthly strategy reviews and performance diagnosis",
      "Channel and creative prioritization frameworks",
      "Measurement, dashboard, and funnel recommendations",
      "Leadership-level planning support",
      "Ongoing advisory on experiments and growth themes",
    ],
  },
  {
    id: "execution",
    tone: "bg-rose-50",
    iconBg: "bg-rose-600",
    badgeBg: "bg-rose-600",
    icon: Crown,
    title: "Execution Pod",
    tagline: "Hands-on delivery across the growth system.",
    who: [
      "EdTech brands ready to scale applications and revenue",
      "Teams outsourcing paid media, SEO, social, website, or creative work",
      "Leaders who want one accountable external growth partner",
    ],
    includes: [
      "End-to-end execution across agreed channels",
      "Video and ad production workflows",
      "Continuous experimentation and optimization",
      "Weekly reporting, insights, and priorities",
      "Roadmaps, governance, and stakeholder communication",
    ],
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[13px] text-slate-700">
      <CheckCircle2 size={16} className="text-slate-800/70" />
      {children}
    </span>
  );
}

export default function PlansSection() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="h2">Choose the engagement model that fits your stage</h2>
          <p className="mt-2 text-slate-600">
            Start with a diagnostic, keep us as an advisory layer, or plug in a full execution pod. We’ll guide you to the right fit during onboarding.
          </p>
        </div>

        {/* equal-height cards; CTA aligned */}
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {tiers.map((t) => {
            const Icon = t.icon;
            return (
              <article
                key={t.id}
                className={`relative overflow-hidden rounded-3xl border border-black/5 ${t.tone} h-full`}
              >
                <div className="flex h-full flex-col p-6 md:p-7">
                  {/* header */}
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${t.iconBg} text-white`}>
                      <Icon size={18} />
                    </div>
                    <div className="text-xs font-semibold tracking-wide text-slate-700">
                      {t.title}
                    </div>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl font-bold text-slate-900">{t.tagline}</h3>

                  {/* best for */}
                  <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
                    <div className="mb-1 text-sm font-semibold text-slate-800">Best for</div>
                    <ul className="list-disc pl-5 text-[14px] leading-relaxed text-slate-700">
                      {t.who.map((w) => (
                        <li key={w}>{w}</li>
                      ))}
                    </ul>
                  </div>

                  {/* what you get */}
                  <div className="mt-4 space-y-2">
                    <div className="text-sm font-semibold text-slate-800">You get</div>
                    <div className="flex flex-wrap gap-2">
                      {t.includes.map((it) => (
                        <Chip key={it}>{it}</Chip>
                      ))}
                    </div>
                  </div>

                  {/* spacer pushes CTA to bottom */}
                  <div className="mt-auto" />

                  {/* unified CTA */}
                  <a
                    href="/onboarding"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    Get started
                    <ArrowRight size={16} className="ml-1 -mt-[2px]" />
                  </a>
                </div>

                {/* small badge */}
                <div className={`pointer-events-none absolute right-4 top-4 rounded-full ${t.iconBg} px-3 py-1 text-xs font-semibold text-white`}>
                  Plan
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Not sure which model fits best? Pick any to begin and we’ll calibrate scope during onboarding.
        </p>
      </div>
    </section>
  );
}
