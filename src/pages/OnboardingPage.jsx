// app/frontend/src/pages/OnboardingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail, Phone, Building2, CheckCircle2, Rocket, Search,
  Megaphone, ShoppingCart, MapPin
} from "lucide-react";
import { Helmet } from "react-helmet-async"; // ✅ SEO

const SERVICES = [
  { id: "website", label: "Launch Website", icon: Rocket },
  { id: "seo", label: "SEO (Organic)", icon: Search },
  { id: "local_seo", label: "Local SEO (Maps)", icon: MapPin },
  { id: "meta_ads", label: "Meta Ads", icon: Megaphone },
  { id: "google_ads", label: "Google Ads", icon: Rocket },
  { id: "ecommerce", label: "E-commerce Setup", icon: ShoppingCart },
];

const pill =
  "inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm transition";
const input =
  "w-full mt-1 px-3 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10";
const card =
  "rounded-3xl bg-white border border-black/5 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]";

export default function OnboardingPage() {
  const navigate = useNavigate();

  // ---------- SEO ONLY ----------
  const pageSEO = {
    title: "Start Your Growth Plan | Onboarding | GoDigitalPro — Digital Marketing Agency",
    description:
      "Kick off your project with GoDigitalPro — a full-funnel digital marketing agency for SEO, Google & Meta Ads, web development, and e-commerce growth. Share your business goals and get a tailored plan.",
    url: "https://www.godigitalpro.in/onboarding/",
    image: "https://www.godigitalpro.in/public/assets/logo.jpg", // safe generic image
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoDigitalPro",
    url: "https://www.godigitalpro.in/",
    logo: pageSEO.image,
    sameAs: ["https://www.linkedin.com/company/godigitalpro/"],
    description:
      "GoDigitalPro is a growth-focused digital marketing agency offering Paid Ads, SEO, Web Development, and Analytics.",
  };

  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Onboarding — GoDigitalPro",
    url: pageSEO.url,
    description:
      "Onboarding form for brands to start a growth plan with GoDigitalPro — a digital marketing agency.",
    about: {
      "@type": "Organization",
      name: "GoDigitalPro",
      url: "https://www.godigitalpro.in/",
    },
  };
  // ---------- /SEO ONLY ----------

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [details, setDetails] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const [notice, setNotice] = useState("");

  // ✅ Your Apps Script endpoint (kept as-is)
  const APPS_URL =
    import.meta.env.VITE_APPS_SCRIPT_URL?.trim() ||
    "https://script.google.com/macros/s/AKfycbwtgDOD7COD7PALqtcm0pTitSXAV1eT4b_v7HN3yHJSfXvAMLaPv4SDDVJj0STS76e5ZQ/exec";

  function toggle(id) {
    const s = new Set(selected);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelected(s);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setNotice("");

    if (!email || !phone || !business || selected.size === 0) {
      setErr("Please fill email, phone, business and pick at least one service.");
      return;
    }

    const payload = {
      email,
      phone,
      business,
      details,
      services: Array.from(selected),
      source: "godigitalpro.in",
      created_at: new Date().toISOString(),
    };

    try {
      setSending(true);

      // 1) Fire-and-forget to Apps Script (CORS-less, we don't read response)
      fetch(APPS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});

      // 2) Visible POST to Firebase Function → HubSpot
      const hubspotResp = await fetch("/api/hubspot/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone,
          company: business,
          source: "Website",
          message: details,
          serviceInterest: Array.from(selected).join(", "),
        }),
      });

      const text = await hubspotResp.text();
      console.log("HubSpot response:", hubspotResp.status, text);

      if (!hubspotResp.ok) {
        setNotice("We received your form. HubSpot sync will retry on our side if needed.");
      }

      navigate("/thank-you", { replace: true, state: { ok: true } });
    } catch (e) {
      console.error(e);
      setErr("Submit failed. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* ---------- SEO HEAD ---------- */}
      <Helmet>
        <title>{pageSEO.title}</title>
        <meta name="description" content={pageSEO.description} />
        <link rel="canonical" href={pageSEO.url} />
        <meta name="robots" content="index,follow,max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:title" content={pageSEO.title} />
        <meta property="og:description" content={pageSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageSEO.url} />
        <meta property="og:image" content={pageSEO.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageSEO.title} />
        <meta name="twitter:description" content={pageSEO.description} />
        <meta name="twitter:image" content={pageSEO.image} />

        {/* Extra topical tags for relevance */}
        <meta name="author" content="GoDigitalPro — Digital Marketing Agency" />
        <meta
          name="keywords"
          content="GoDigitalPro, digital marketing agency, onboarding, SEO, Google Ads, Meta Ads, website development, growth marketing, India"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(contactPageJsonLd)}</script>
      </Helmet>
      {/* ---------- /SEO HEAD ---------- */}

      <main className="max-w-3xl mx-auto px-5 py-10">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark">
          Tell us what you need
        </h1>
        <p className="text-slate-700 mt-2">
          No login. One simple form—straight to our team.
        </p>

        <form className={`${card} mt-6`} onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <label className="text-sm font-medium">
              Email
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <input
                  type="email"
                  className={input}
                  placeholder="you@business.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="text-sm font-medium">
              Phone
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <input
                  type="tel"
                  className={input}
                  placeholder="+91 98xxxxxx"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="text-sm font-medium">
              Business name
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <input
                  type="text"
                  className={input}
                  placeholder="Your brand / company"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="text-sm font-medium">
              What do you want us to do?
              <div className="mt-2 flex flex-wrap gap-2">
                {SERVICES.map((s) => {
                  const SelIcon = s.icon;
                  const isOn = selected.has(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      className={`${pill} ${
                        isOn
                          ? "bg-dark text-white border-dark"
                          : "bg-white border-slate-300 hover:bg-slate-50"
                      }`}
                      onClick={() => toggle(s.id)}
                      aria-pressed={isOn}
                    >
                      <SelIcon size={16} />
                      {s.label}
                      {isOn && <CheckCircle2 size={16} />}
                    </button>
                  );
                })}
              </div>
            </label>

            <label className="text-sm font-medium">
              Anything else?
              <textarea
                className={`${input} min-h-[110px]`}
                placeholder="Share context, website, deadlines, cities, etc."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </label>

            {err && <p className="text-sm text-red-600">{err}</p>}
            {notice && <p className="text-sm text-amber-700">{notice}</p>}

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2"
                disabled={sending}
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
        </form>

        <p className="text-xs text-slate-500 mt-3">
          By submitting, you agree to be contacted by email/phone. We’ll never spam.
        </p>
      </main>
    </>
  );
}
