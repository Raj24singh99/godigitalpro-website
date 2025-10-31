// src/pages/industries/D2CEcommercePage.jsx
import React from "react";
import { Link } from "react-router-dom";
// If you use react-helmet-async:
import { Helmet } from "react-helmet-async";

export default function D2CEcommercePage() {
  return (
    <main>
      <Helmet>
        <title>D2C & E-commerce Marketing | Growth, CRO, Retention</title>
        <meta
          name="description"
          content="Full-funnel D2C & e-commerce growth: SEO, paid ads, CRO, email/SMS, social. From discovery to conversion and retention with measurable ROI."
        />
        <link rel="canonical" href="/industries/d2c-ecommerce" />
      </Helmet>

      {/* 1) Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">D2C & E-commerce</h1>
          <p className="mt-4 text-slate-700">
            Full-funnel growth from awareness to repeat purchases. We align
            discovery, conversion, and retention to grow revenue — not just
            clicks.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Get a Growth Plan</Link>
            <a href="#playbook" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">
              See Our Playbook
            </a>
          </div>
        </div>
      </section>

      {/* 2) Why it matters */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Online shopping is in sustained growth — especially D2C. Brands need
            coordinated marketing across the journey: first touch → add to cart → checkout
            → LTV. Siloed tactics waste budget; a connected system compounds results.
          </p>
        </div>
      </section>

      {/* 3) Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "High CAC and low repeat purchase rate",
              "Poor PDP/checkout conversion (low CR, high drop-off)",
              "Unstructured product taxonomy & weak internal linking",
              "Underutilized email/SMS flows (welcome, win-back, VIP)",
              "Inefficient ad structure & creative testing cadence",
            ].map((c) => (
              <div key={c} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Playbook */}
      <section className="section bg-primary/40" id="playbook">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Our growth playbook</h2>
          <ol className="grid md:grid-cols-2 gap-4 list-decimal list-inside">
            {[
              "Audit & Strategy: catalog, feeds, pixels, analytics, attribution.",
              "Launch: high-intent search + prospecting + remarketing foundations.",
              "Optimize: CRO tests on PDP/checkout, creative sprints, AOV levers.",
              "Scale: lookalikes, new geos, partnerships, incremental channels.",
              "Retention: lifecycle email/SMS (welcome, post-purchase, win-back).",
            ].map((s, i) => (
              <li key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{s}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5) Key services */}
      <section className="section" id="services">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Key marketing services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "E-commerce SEO (collections, PDPs, schema, internal links)",
              "Paid ads: Google, Meta, TikTok (TOFU/MOFU/BOFU)",
              "Email & SMS for repeat (flows + campaigns)",
              "CRO experiments (copy, images, UX, offers, bundles)",
              "Social content & UGC for discovery and trust",
            ].map((s) => (
              <div key={s} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Outcomes */}
      <section className="section bg-primary/40" id="outcomes">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Expected outcomes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Higher add-to-cart and checkout conversion",
              "Reduced CAC with better creative & structure",
              "Improved AOV and LTV via offers & flows",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Final CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Ready to grow your store?</h3>
          <p className="mt-2 text-slate-700">Get a practical 90-day plan tailored to your products, margins, and goals.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Get My Plan</Link>
        </div>
      </section>
    </main>
  );
}
