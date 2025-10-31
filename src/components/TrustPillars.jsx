// src/components/TrustPillars.jsx
import React from "react";
import { HeartHandshake, Eye, MessageCircle } from "lucide-react";

const items = [
  {
    icon: MessageCircle,
    title: "We Start With Understanding You",
    desc:
      "Before we talk about ads or budgets, we learn your story — what makes your business different and what success really means for you.",
  },
  {
    icon: Eye,
    title: "You’ll Always Know What’s Happening",
    desc:
      "No confusing reports or hidden numbers. We show where your money goes and the results — clear, simple, honest.",
  },
  {
    icon: HeartHandshake,
    title: "We Grow Together",
    desc:
      "Our best work comes from long-term partnerships. We win when you win — and we stay around to help you keep growing.",
  },
];

export default function TrustPillars() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* heading so the section doesn't get lost */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">Why Teams Pick Us</h2>
          <p className="mt-3 text-slate-700">
            Straight talk, clear numbers, and a partner who actually sticks around.
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
