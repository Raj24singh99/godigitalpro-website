// src/pages/industries/LocalServicesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function LocalServicesPage() {
  return (
    <main>
      <Helmet>
        <title>Local Services Marketing | Leads from Nearby Customers</title>
        <meta
          name="description"
          content="Local SEO, GBP optimization, geo-targeted PPC, and review ops for SMBs. Get more calls, bookings, and directions."
        />
        <link rel="canonical" href="/industries/local-services" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">Local Services</h1>
          <p className="mt-4 text-slate-700">
            Be found by people near you. We focus on calls, bookings, and
            directions — not vanity metrics.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Get Local Leads</Link>
            <a href="#services" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">See Services</a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Local intent is high intent. When someone searches nearby, they’re
            ready to act — the right presence turns that into revenue.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Weak Google Business Profile setup",
              "Inconsistent NAP & citations",
              "Slow, unclear websites with weak CTAs",
              "Inefficient geo & schedule targeting",
              "No review strategy or monitoring",
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
              "Local Audit: categories, NAP, services, photos, posts.",
              "Website Refresh: speed, mobile UX, clear CTAs (call/WhatsApp).",
              "Leads Engine: search + maps ads with dayparting and add-ons.",
              "Reputation: ask-for-review flows, responses, monitoring.",
              "Reporting: simple monthly call/lead insights.",
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
              "Google Business Profile & Local SEO",
              "Conversion-focused web design",
              "Geo-targeted PPC & call-only ads",
              "Review & reputation management",
              "Lead tracking & reporting",
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
              "More calls and form fills",
              "Higher map pack visibility",
              "Better reviews and trust",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Own your neighborhood demand.</h3>
          <p className="mt-2 text-slate-700">We’ll set up what matters and keep it simple to run.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Get Started</Link>
        </div>
      </section>
    </main>
  );
}
