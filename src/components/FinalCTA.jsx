// src/components/FinalCTA.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative bg-white">
      {/* soft top glow (very subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,255,200,.35), rgba(255,255,255,0))",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-200/70 px-3 py-1 text-[13px] font-medium text-gray-900 ring-1 ring-black/10">
            Trusted by founders & business leaders
          </div>

          <h2 className="mt-4 font-serif text-[34px] leading-[1.15] md:text-[48px] font-bold text-gray-900">
            Ready to transform how you market, sell, and grow?
          </h2>

          <p className="mt-3 text-[16.5px] md:text-[18px] text-slate-700">
            We design the <b>foundations</b>, launch fast, and iterate with{" "}
            <b>transparent reporting</b> and <b>accountable execution</b>.
            Websites, SEO, Google &amp; Meta ads—clear plans that compound results.
          </p>

          <div className="mt-8">
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 bg-primary text-dark font-semibold ring-1 ring-black/10 shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition"
              aria-label="Get a Free Audit"
            >
              Get a Free Audit <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
