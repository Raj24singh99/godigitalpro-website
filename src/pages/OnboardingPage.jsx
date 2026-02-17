// app/frontend/src/pages/OnboardingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Building2, CheckCircle2, ShoppingCart, TrendingUp, Target, Users2, Rocket, BarChart3, MoreHorizontal } from "lucide-react";
import SeoHelmet from "../components/SeoHelmet"; // ✅ SEO
import { buildCanonical, contactPageJsonLd, organizationJsonLd } from "../utils/seo";

/** ─────────────────────────────────────────────────────────
 * Outcome-first choices (kept same data shape: `services`)
 * ───────────────────────────────────────────────────────── */
const GOALS = [
  { id: "increase_sales", label: "Increase online sales", icon: ShoppingCart },
  { id: "improve_roas", label: "Improve ROAS / reduce CAC", icon: TrendingUp },
  { id: "qualified_leads", label: "Get more qualified leads", icon: Users2 },
  { id: "scale_ads", label: "Scale ads profitably", icon: BarChart3 },
  { id: "new_launch", label: "Launch a new product/campaign", icon: Rocket },
  { id: "bookings", label: "Increase calls/appointments", icon: Target },
  { id: "other", label: "Other", icon: MoreHorizontal }, // ✅ new
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
    title:
      "Get Your Tailored Growth Plan | Onboarding | GoDigitalPro — Digital Marketing Agency",
    description:
      "Tell us your goals (increase sales, better ROAS, more qualified leads). Get a tailored plan and action steps from GoDigitalPro within 24 hours.",
    url: buildCanonical("/onboarding"),
    image: "https://www.godigitalpro.in/assets/godigitalpro-logo.jpg",
  };

  const schemaBlocks = [
    organizationJsonLd(),
    contactPageJsonLd({
      url: pageSEO.url,
      description:
        "Onboarding form for brands to start a growth plan with GoDigitalPro — a digital marketing agency.",
    }),
  ];
  // ---------- /SEO ONLY ----------

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [details, setDetails] = useState("");
  const [selected, setSelected] = useState(new Set());
  const [otherText, setOtherText] = useState(""); // ✅ capture “Other”
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");
  const [notice, setNotice] = useState("");

  // ✅ Your Apps Script endpoint (unchanged)
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
      setErr(
        "Please add email, phone, business name/website and pick at least one goal."
      );
      return;
    }

    // Don’t break existing automations:
    // keep `services` as ids; append Other note into details.
    const mergedDetails =
      selected.has("other") && otherText.trim()
        ? `${details ? `${details}\n\n` : ""}[Other goal]: ${otherText.trim()}`
        : details;

    const payload = {
      email,
      phone,
      business,
      details: mergedDetails,
      services: Array.from(selected), // unchanged
      source: "godigitalpro.in",
      created_at: new Date().toISOString(),
    };

    try {
      setSending(true);

      // 1) Fire-and-forget to Apps Script
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
          message: mergedDetails,
          serviceInterest: Array.from(selected).join(", "),
        }),
      });

      const text = await hubspotResp.text();
      console.log("HubSpot response:", hubspotResp.status, text);

      if (!hubspotResp.ok) {
        setNotice(
          "We received your form. HubSpot sync will retry on our side if needed."
        );
      }

      navigate("/thank-you", { replace: true, state: { ok: true } });
    } catch (e2) {
      console.error(e2);
      setErr("Submit failed. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <SeoHelmet
        title={pageSEO.title}
        description={pageSEO.description}
        canonical={pageSEO.url}
        image={pageSEO.image}
        robots="index,follow,max-image-preview:large"
        keywords="growth plan, ROAS, increase sales, qualified leads, digital marketing onboarding, GoDigitalPro"
        schema={schemaBlocks}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Onboarding", url: pageSEO.url },
        ]}
      />

      <main className="max-w-3xl mx-auto px-5 py-10">
        {/* ✅ New headline & description */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark">
          Every Brand Deserves a Smarter Growth Plan
        </h1>
        <p className="text-slate-700 mt-2">
          Tell us what drives your business — we’ll translate your vision into a
          focused, insight-led marketing strategy that builds visibility, trust,
          and long-term impact.
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
              Business name / website
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <input
                  type="text"
                  className={input}
                  placeholder="Your brand or site (e.g., acmestore.com)"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  required
                />
              </div>
            </label>

            <label className="text-sm font-medium">
              What&apos;s your primary goal?{" "}
              <span className="text-slate-500">(pick 1–3)</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {GOALS.map((g) => {
                  const Icon = g.icon;
                  const isOn = selected.has(g.id);
                  return (
                    <div key={g.id} className="flex items-center gap-2">
                      <button
                        type="button"
                        className={`${pill} ${
                          isOn
                            ? "bg-dark text-white border-dark"
                            : "bg-white border-slate-300 hover:bg-slate-50"
                        }`}
                        onClick={() => toggle(g.id)}
                        aria-pressed={isOn}
                      >
                        <Icon size={16} />
                        {g.label}
                        {isOn && <CheckCircle2 size={16} />}
                      </button>

                      {/* Inline text field only when "Other" is selected */}
                      {g.id === "other" && isOn && (
                        <input
                          type="text"
                          className="ml-1 px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                          placeholder="Describe your goal"
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </label>

            <label className="text-sm font-medium">
              Anything else we should know?
              <textarea
                className={`${input} min-h-[110px]`}
                placeholder="Traffic sources, monthly budget range, target cities, deadlines, competitors, etc."
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
                {sending ? "Sending..." : "Get my plan"}
              </button>
            </div>
          </div>
        </form>

        <p className="text-xs text-slate-500 mt-3">
          By submitting, you agree to be contacted by email/phone. We’ll never
          spam.
        </p>
      </main>
    </>
  );
}
