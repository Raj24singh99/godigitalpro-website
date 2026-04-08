// src/components/TrustPillars.jsx
import React from "react";
import { HeartHandshake, Eye, MessageCircle } from "lucide-react";

const items = [
  {
    icon: MessageCircle,
    title: "EdTech Depth Before Tactics",
    desc:
      "We start with category nuance: programs, locations, admissions cycles, proof gaps, parent objections, and lead-quality realities before budget recommendations.",
  },
  {
    icon: Eye,
    title: "AI-Led Analysis, Human Decisions",
    desc:
      "AI helps us spot patterns across search terms, creative fatigue, landing-page leaks, and CRM signals faster. Strategy and prioritization still stay accountable and human.",
  },
  {
    icon: HeartHandshake,
    title: "Marketing Connected to Admissions",
    desc:
      "We connect paid, SEO, social, creative, tracking, and counselor feedback loops so your funnel improves as one system instead of six disconnected teams.",
  },
];

export default function TrustPillars() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* heading so the section doesn't get lost */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">Why EdTech teams trust GoDigitalPro</h2>
          <p className="mt-3 text-slate-700">
            Category depth, transparent execution, and growth systems built around real enrollment outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-white border border-black/10 p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] transition group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-dark text-primary mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-dark">{title}</h3>
              <p className="mt-2 text-slate-800 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
