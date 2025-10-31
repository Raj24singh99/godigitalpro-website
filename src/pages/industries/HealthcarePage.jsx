// src/pages/industries/HealthcarePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function HealthcarePage() {
  return (
    <main>
      <Helmet>
        <title>Healthcare Marketing | Clinics, Hospitals, Diagnostics</title>
        <meta
          name="description"
          content="Compliant patient acquisition and education. Local SEO, PPC, reputation, and conversion-focused journeys for healthcare."
        />
        <link rel="canonical" href="/industries/healthcare" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">Healthcare</h1>
          <p className="mt-4 text-slate-700">
            Patient-first growth with compliance. We connect local discovery,
            patient education, and appointment conversion.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Plan Patient Growth</Link>
            <a href="#services" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">Key Services</a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Healthcare is shifting to digital. Patients compare providers,
            read reviews, and expect clarity — growth must be compliant and
            trustworthy at every touchpoint.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Low local visibility across maps & listings",
              "Sparse reviews and reputation risks",
              "Generic pages that don’t convert to bookings",
              "Non-compliant copy and tracking gaps",
              "Inefficient ad spend with weak geo/time controls",
            ].map((c) => (
              <div key={c} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="section bg-primary/40" id="playbook">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Our growth playbook</h2>
          <ol className="grid md:grid-cols-2 gap-4 list-decimal list-inside">
            {[
              "Compliance First: consent, copy checks, data handling.",
              "Local Engine: listings, schema, reviews, service pages.",
              "Patient Paths: symptom → service, clear CTAs & FAQs.",
              "Targeted PPC: geo/time controls, call extensions.",
              "Measure: call tracking, appointment conversion analytics.",
            ].map((s, i) => (
              <li key={i} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{s}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Key marketing services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Local SEO & listings for clinics, hospitals, diagnostics",
              "Patient education content & FAQs",
              "Reputation management and review programs",
              "PPC for appointment & call conversions",
              "Conversion-focused landing pages",
            ].map((s) => (
              <div key={s} className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">{s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section bg-primary/40" id="outcomes">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Expected outcomes</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "More qualified calls & bookings",
              "Better local rankings and reviews",
              "Clear compliance and tracking",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Make it easy for patients to choose you.</h3>
          <p className="mt-2 text-slate-700">Visibility, trust, and smooth booking — all aligned.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Start Now</Link>
        </div>
      </section>
    </main>
  );
}
