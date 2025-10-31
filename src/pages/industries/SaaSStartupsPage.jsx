// src/pages/industries/SaaSStartupsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function SaaSStartupsPage() {
  return (
    <main>
      <Helmet>
        <title>SaaS & Tech Startups Marketing | Demand Gen & Activation</title>
        <meta
          name="description"
          content="SaaS growth with product-led content, SEM, LinkedIn, and analytics. Acquire trials, drive activation, and prove ROI."
        />
        <link rel="canonical" href="/industries/saas-startups" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">SaaS & Tech Startups</h1>
          <p className="mt-4 text-slate-700">
            Demand gen that converts to activation. We connect ICP, content,
            SEM, and in-product journeys to reduce payback time.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Plan My Pipeline</Link>
            <a href="#playbook" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">See Our Playbook</a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Budgets follow ROI. Startups need measurable acquisition, activation,
            and retention — with clear attribution and dashboards leaders trust.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Unclear ICP and weak messaging → low CTR and CVR",
              "Trials that don’t activate (leaky onboarding)",
              "Fragmented analytics & missing event tracking",
              "Content that doesn’t map to buying stages",
              "Over-reliance on one channel (e.g., only Google)",
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
              "ICP & Messaging: pains, proof, pages that convert.",
              "Demand Gen: SEO pillars, LinkedIn, gated assets.",
              "Performance: SEM on high-intent; negatives & structure.",
              "Activation: onboarding emails, in-app nudges, PQL loops.",
              "Attribution: CAC, LTV, payback, board-ready dashboards.",
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
              "Product-led content & comparison pages",
              "LinkedIn (paid + content programs)",
              "Search Engine Marketing (SEM) for intent",
              "Event tracking & marketing analytics",
              "Email/onboarding sequences to activation",
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
              "Lower CAC & faster payback",
              "Higher trial-to-activation rate",
              "Board-ready attribution clarity",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Let’s build a predictable pipeline.</h3>
          <p className="mt-2 text-slate-700">We’ll map ICP, channels, and activation to your growth targets.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Start Now</Link>
        </div>
      </section>
    </main>
  );
}
