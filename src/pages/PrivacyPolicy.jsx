import React, { useMemo } from "react";
import SeoHelmet from "../components/SeoHelmet";
import { buildCanonical, organizationJsonLd } from "../utils/seo";

export default function PrivacyPolicy() {
  const title = "Privacy Policy | GoDigitalPro — Digital Marketing Agency";
  const desc =
    "GoDigitalPro, a full-funnel digital marketing agency, values your privacy. Learn how we collect, use, and protect your data across campaigns, analytics, and web platforms.";

  const url = buildCanonical("/privacy-policy");
  const image = "https://www.godigitalpro.in/public/assets/logo.jpg";

  const webpageJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url,
      description: desc,
      publisher: {
        "@type": "Organization",
        name: "GoDigitalPro",
        url: buildCanonical("/"),
      },
    }),
    [desc, url]
  );

  return (
    <main className="bg-white text-slate-900">
      <SeoHelmet
        title={title}
        description={desc}
        canonical={url}
        image={image}
        robots="index,follow,max-image-preview:large"
        keywords="GoDigitalPro, digital marketing agency, privacy policy, data protection, marketing analytics, advertising privacy"
        schema={[organizationJsonLd(), webpageJsonLd]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Privacy Policy", url },
        ]}
      />

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
              emailing{" "}
              <a className="underline" href="mailto:raj@godigitalpro.in">
                raj@godigitalpro.in
              </a>.
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
