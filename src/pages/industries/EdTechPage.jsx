// src/pages/industries/EdTechPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function EdTechPage() {
  return (
    <main>
      <Helmet>
        <title>EdTech Marketing | Content, Funnels & Admissions</title>
        <meta
          name="description"
          content="EdTech growth with content, social, email nurturing, and search. Build trust with students and parents and drive demo/bookings."
        />
        <link rel="canonical" href="/industries/edtech" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">EdTech</h1>
          <p className="mt-4 text-slate-700">
            Reach students and parents with clear outcomes and proof. We design
            content and funnels that turn interest into enrollment.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Get an EdTech Plan</Link>
            <a href="#playbook" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">See Our Playbook</a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Education choices are trust-heavy. Brands win with clarity on
            outcomes, student/parent value, and consistent proof.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Low trust: unclear outcomes, placements, curriculum fit",
              "Scattered content with no nurturing path",
              "Weak social proof (alumni, case studies)",
              "High CPL from generic ads & broad targeting",
              "Leaky demo/class booking funnels",
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
              "Proof First: outcomes, alumni, faculty, syllabus clarity.",
              "Top-of-Funnel: content + social + remarketing.",
              "Mid-Funnel: webinars, demo sessions, counselor flows.",
              "Bottom-Funnel: search ads by program, location, outcomes.",
              "Nurture: email sequences by stage and intent.",
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
              "Content (e-books, webinars, explainer blogs)",
              "Social media marketing & communities",
              "Email nurturing for students & parents",
              "Lead gen landing pages (demo/class bookings)",
              "Search ads by program/outcome intent",
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
              "Lower CPL with targeted funnels",
              "Higher demo bookings and show-ups",
              "Improved trust via consistent proof",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Let’s enroll more students — the right way.</h3>
          <p className="mt-2 text-slate-700">Clarity, proof, and nurturing that respects the decision.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Start Now</Link>
        </div>
      </section>
    </main>
  );
}
