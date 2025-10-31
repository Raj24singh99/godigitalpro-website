import React from "react";
import { Link } from "react-router-dom";

export default function BusinessTypeTemplate({ industry }) {
  // Expected shape of `industry`:
  // {
  //   name: "D2C & E-commerce",
  //   headline: "This is one of the most consistently high-demand ...",
  //   why: "Online shopping is experiencing rapid, sustained growth ...",
  //   keyServices: [
  //     "E-commerce SEO",
  //     "Paid advertising (Google, Meta, TikTok)",
  //     "Email marketing",
  //     "Conversion rate optimization (CRO)",
  //     "Social media marketing"
  //   ],
  //   // (optional) challenges: [...],
  //   // (optional) solutions: [...],
  //   // (optional) results: [...]
  // }

  return (
    <main>
      {/* Intro (no image) */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="h1">{industry?.name}</h1>
          <p className="mt-4 text-slate-700">{industry?.headline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/onboarding" className="btn-primary inline-flex">
              Start Your Journey
            </Link>
            <a
              href="#key-services"
              className="px-5 py-3 rounded-xl border border-dark text-dark hover:bg-dark hover:text-white transition text-base"
            >
              See Key Services
            </a>
          </div>
        </div>
      </section>

      {/* Why this category */}
      <section className="section bg-primary/40" id="why">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-4">Why this category matters</h2>
          <p className="text-slate-800">{industry?.why}</p>
        </div>
      </section>

      {/* Key marketing services */}
      <section className="section" id="key-services">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="h2 mb-6">Key marketing services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {industry?.keyServices?.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional sections if provided */}
      {industry?.challenges?.length ? (
        <section className="section bg-primary/40" id="challenges">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="h2 mb-6">Common challenges we solve</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.challenges.map((c, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {industry?.solutions?.length ? (
        <section className="section" id="how-we-help">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="h2 mb-6">How we help you grow</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {industry.solutions.map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {industry?.results?.length ? (
        <section className="section bg-primary/40" id="results">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="h2 mb-6">Expected results</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {industry.results.map((r, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Final CTA */}
      <section className="section">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-dark">
            Not sure where to start?
          </h3>
          <p className="mt-2 text-slate-700">
            Tell us about your business in 2 minutes. We’ll suggest the right
            plan for your category and budget.
          </p>
          <Link to="/onboarding" className="btn-primary mt-6 inline-flex">
            Get a Quick Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
