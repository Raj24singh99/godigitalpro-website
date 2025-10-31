// app/frontend/src/components/ServiceTemplate.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ServiceTemplate({ service }) {
  return (
    <main>
      {/* Hero block (no image, clear focus on title & intro) */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">{service.title}</h1>
          <p className="mt-4 text-slate-700">{service.description}</p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">
            Get Started Today
          </Link>
        </div>
      </section>

      {/* What we offer */}
      <section className="section bg-primary/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">What we offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features?.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
              >
                <div className="font-semibold text-dark">{f.title}</div>
                <p className="text-sm mt-1 text-slate-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Why choose us?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {service.benefits?.map((b, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm"
              >
                {b}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/onboarding" className="btn-primary">
              Start your journey
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
