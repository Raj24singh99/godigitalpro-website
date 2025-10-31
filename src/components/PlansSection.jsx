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
    id: "starter",
    tone: "bg-emerald-50",
    iconBg: "bg-emerald-600",
    badgeBg: "bg-emerald-600",
    icon: Rocket,
    title: "Starter",
    tagline: "Launch your online presence with confidence.",
    who: [
      "New or small businesses getting online",
      "Owners validating an offer or market",
      "Teams needing a clear, simple start",
    ],
    includes: [
      "Brand & message alignment",
      "Conversion-ready landing site recommendations",
      "Starter SEO & local discoverability setup",
      "Social presence foundation & content guide",
      "Analytics & tracking essentials",
    ],
  },
  {
    id: "growth",
    tone: "bg-amber-50",
    iconBg: "bg-amber-600",
    badgeBg: "bg-amber-600",
    icon: Lightbulb,
    title: "Growth Consultancy",
    tagline: "External strategy for in-house execution.",
    who: [
      "Businesses with a small marketing team",
      "Brands that need direction & priorities",
      "Leaders who want clarity, not chaos",
    ],
    includes: [
      "Deep-dive audits & opportunity mapping",
      "SEO, PPC, and content strategy roadmaps",
      "Channel frameworks & playbooks",
      "Campaign planning & measurement models",
      "Quarterly growth themes & priorities",
    ],
  },
  {
    id: "full",
    tone: "bg-rose-50",
    iconBg: "bg-rose-600",
    badgeBg: "bg-rose-600",
    icon: Crown,
    title: "Full Hands-On",
    tagline: "Hands-on execution across channels.",
    who: [
      "Established brands ready to scale",
      "Teams outsourcing SEO, PPC, or Social",
      "Leaders who want one accountable partner",
    ],
    includes: [
      "End-to-end execution across agreed channels",
      "Always-on optimization & experiments",
      "Creative production & content operations",
      "Performance reporting & insights",
      "Roadmaps, governance & stakeholder updates",
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
          <h2 className="h2">Choose a plan that matches your stage</h2>
          <p className="mt-2 text-slate-600">
            Start simple, add strategy, or hand us the keys. We’ll guide you to the right fit during onboarding.
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
          Not sure which plan fits best? Pick any to begin — we’ll fine-tune it during onboarding.
        </p>
      </div>
    </section>
  );
}
