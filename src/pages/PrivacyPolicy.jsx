import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const title = "Privacy Policy | GoDigitalPro";
  const desc =
    "GoDigitalPro respects your privacy. This page explains what we collect, why we collect it, and how we keep it safe.";

  return (
    <main className="bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href="https://www.godigitalpro.in/privacy-policy" />
      </Helmet>

      <section className="mx-auto max-w-4xl px-6 md:px-10 py-12">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mt-3 text-slate-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-7 text-slate-700">
          <p>
            We collect only the information needed to provide our services:
            name, email, phone, company details, and analytics (GA4, Pixels).
            We do not sell your data.
          </p>

          <div>
            <h2 className="text-lg font-semibold">What we collect</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>Form submissions (e.g., onboarding/contact).</li>
              <li>Usage analytics (cookies or similar technologies).</li>
              <li>Ad platform data for performance measurement.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">How we use it</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>To respond to your requests and deliver services.</li>
              <li>To improve website and campaign performance.</li>
              <li>To send essential updates you opt into.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Data protection</h2>
            <p className="mt-2">
              We use reputable platforms and reasonable safeguards to protect
              your data. Access is limited to authorized personnel.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Your choices</h2>
            <p className="mt-2">
              You can request access, correction, or deletion of your data by
              emailing <a className="underline" href="mailto:raj@godigitalpro.in">raj@godigitalpro.in</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2">
              For any privacy questions, write to{" "}
              <a className="underline" href="mailto:raj@godigitalpro.in">
                raj@godigitalpro.in
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
