// src/pages/industries/B2BServicesPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function B2BServicesPage() {
  return (
    <main>
      <Helmet>
        <title>B2B Services Marketing | Pipeline & Attribution</title>
        <meta
          name="description"
          content="B2B growth with content, LinkedIn, SEO and automation. Build qualified pipeline and prove ROI with clear attribution."
        />
        <link rel="canonical" href="/industries/b2b-services" />
      </Helmet>

      {/* Hero */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">B2B Services</h1>
          <p className="mt-4 text-slate-700">
            Pipeline you can measure. We combine content, LinkedIn, and search
            to reach committees and turn interest into SQLs.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/onboarding" className="btn-primary">Build My Pipeline</Link>
            <a href="#playbook" className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition">See Our Playbook</a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-3">Why this category matters</h2>
          <p className="text-slate-800">
            Longer cycles and multiple stakeholders demand credible content,
            precision targeting, and consistent nurturing — not one-shot ads.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="section" id="challenges">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Common challenges we solve</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Thin proof (few case studies, no calculators)",
              "Broad targeting → junk leads & sales friction",
              "No lead scoring or routing discipline",
              "SEO/content not aligned to MoFu/BoFu",
              "Attribution unclear across channels",
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
              "ICP & Offer: pains, value prop, calculators, proof.",
              "Content Engine: MoFu/BoFu assets that convert.",
              "LinkedIn: job-title targeting + retargeting sequences.",
              "Search: problem/solution & comparison intent.",
              "Ops: CRM hygiene, lead scoring & nurturing, dashboards.",
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
              "Content (whitepapers, case studies, RoI sheets)",
              "LinkedIn campaigns & outreach assist",
              "SEO for problem/solution & comparisons",
              "Automation (lead scoring, nurturing)",
              "Attribution & pipeline reporting",
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
              "Higher SQL quality & velocity",
              "Shorter sales cycles with better proof",
              "Clear CAC → LTV attribution",
            ].map((r) => (
              <div key={r} className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm">{r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">Make marketing feed your pipeline.</h3>
          <p className="mt-2 text-slate-700">We’ll align proof, channels, and ops to revenue.</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">Start Now</Link>
        </div>
      </section>
    </main>
  );
}
