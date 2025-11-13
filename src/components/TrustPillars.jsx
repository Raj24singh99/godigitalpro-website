// src/components/TrustPillars.jsx
import React from "react";
import { HeartHandshake, Eye, MessageCircle } from "lucide-react";

const items = [
  {
    icon: MessageCircle,
    title: "Strategy Before Spend",
    desc:
      "We pressure-test audiences, offers, and channels so every marketing rupee or dollar is attached to a documented hypothesis.",
  },
  {
    icon: Eye,
    title: "Transparent Operating System",
    desc:
      "Dashboards, rituals, and docs make it impossible to lose track of experiments, budgets, or owners—no matter how many channels we run.",
  },
  {
    icon: HeartHandshake,
    title: "Compounding Partnerships",
    desc:
      "We plug into your team like an in-house pod, stay accountable to outcomes, and keep levelling up across markets as you scale.",
  },
];

export default function TrustPillars() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* heading so the section doesn't get lost */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">Why teams trust GoDigitalPro as their digital marketing agency</h2>
          <p className="mt-3 text-slate-700">
            Straight talk, measurable outcomes, and a team that knows how every channel ladders up to revenue.
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
