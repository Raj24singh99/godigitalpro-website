import React, { useState } from "react";
import { Shield, ShieldCheck, WifiOff, Sparkles, Radar, Rocket, Crown, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "NordVPN";
const slug = "nordvpn";
const category = "VPN & Security";
const shortPitch =
  "NordVPN is a fast, privacy-focused VPN that secures browsing, streaming, and remote work with a large global server network, strong encryption, and threat protection extras.";
const pricingSummary = "Plans from the equivalent of ~$3–$13/month depending on term and bundle (VPN, password manager, cloud storage).";
const officialUrl = "https://nordvpn.com/";
const ratingValue = 4.7;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/nordvpn.com",
  gradient: "from-sky-500 via-blue-600 to-slate-900",
  glow: "shadow-[0_20px_80px_rgba(37,99,235,0.25)]",
};

const alternatives = [
  { name: "Surfshark", slug: "surfshark", blurb: "Value-friendly VPN with unlimited devices." },
  { name: "ExpressVPN", slug: "expressvpn", blurb: "Premium speeds and streaming performance." },
];

const faqs = [
  { q: "Is NordVPN safe?", a: "Yes. It uses modern protocols (WireGuard-based NordLynx), AES-256 encryption, RAM-only servers, and has passed multiple independent audits." },
  { q: "Does NordVPN log my data?", a: "No. NordVPN has a strict no-logs policy verified by third-party audits, and its RAM-only servers wipe data on reboot." },
  { q: "Is NordVPN good for streaming?", a: "Yes. It reliably unlocks popular streaming services and maintains strong speeds via NordLynx, making HD and 4K streaming smooth." },
  { q: "How many devices can I use?", a: "Up to 10 devices per account simultaneously—enough for laptops, phones, and tablets across your household." },
  { q: "What is NordLynx?", a: "NordLynx is NordVPN’s WireGuard-based protocol that delivers faster speeds and lower latency while keeping strong encryption." },
  { q: "Does NordVPN block malware and ads?", a: "NordVPN’s Threat Protection helps block trackers, malicious sites, and some ads. It’s not a full antivirus but reduces common risks." },
  { q: "Is NordVPN good for remote work?", a: "Yes. It secures public Wi‑Fi, protects IP addresses, and supports split tunneling so you can keep critical apps routed through the VPN." },
  { q: "What are the downsides?", a: "Some servers can be busier during peak times; double VPN and advanced features require manual enablement; and only 10 devices are allowed versus unlimited with Surfshark." },
];

const featureBlocks = [
  {
    icon: <Shield className="h-5 w-5 text-sky-600" />,
    title: "Strong security + privacy",
    body: "AES-256 encryption, RAM-only servers, audited no-logs policy, and modern protocols keep traffic private.",
  },
  {
    icon: <Radar className="h-5 w-5 text-indigo-500" />,
    title: "NordLynx speed",
    body: "WireGuard-based NordLynx delivers fast downloads and low latency for streaming, calls, and gaming.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
    title: "Threat Protection",
    body: "Blocks trackers, malicious domains, and some ads to reduce risk while browsing and downloading files.",
  },
  {
    icon: <WifiOff className="h-5 w-5 text-amber-500" />,
    title: "Kill switch + split tunneling",
    body: "Kill switch prevents accidental exposure; split tunneling routes selected apps through or around the VPN.",
  },
  {
    icon: <Sparkles className="h-5 w-5 text-rose-500" />,
    title: "Large global network",
    body: "Thousands of servers in 100+ locations help avoid congestion and unlock geo-blocked content reliably.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-600" />,
    title: "Extras for power users",
    body: "Double VPN, Onion over VPN, obfuscated servers, and Meshnet for secure device-to-device connections.",
  },
];

function NordVPNToolPage() {
  const canonical = buildCanonical(`/tools/${slug}`);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: toolName,
    description: shortPitch,
    brand: "Third-party tool",
    url: canonical,
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: "GoDigitalPro" },
      reviewBody:
        "NordVPN is a fast, security-focused VPN with audited no-logs policies, RAM-only servers, and a strong global network. It works well for streaming, travel, and remote work.",
      reviewRating: { "@type": "Rating", ratingValue, bestRating: "5", worstRating: "1" },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Speed, Security, Alternatives`}
        description="Honest NordVPN review for 2025 covering speed, security, pricing, pros & cons, and how it compares to Surfshark and ExpressVPN."
        canonical={canonical}
        image={`https://www.godigitalpro.in/og/tools/${slug}.png`}
        type="article"
        schema={[productSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: buildCanonical("/") },
          { name: "Tools Hub", url: buildCanonical("/tools") },
          { name: toolName, url: canonical },
        ]}
      />

      <main className="tool-page bg-white text-slate-900">
        <section className="section section--hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-sky-300/25 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-amber-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Fast, audited VPN for privacy & streaming
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit official website
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-blue-200 blur-3xl" />
                </div>
                <div className="relative flex items-center gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-white/20 ring-2 ring-white/30">
                    <img src={brandMeta.logo} alt={`${toolName} logo`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/80">Featured Tool</p>
                    <p className="text-xl font-bold">{toolName}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                  NordVPN keeps browsing private with audited no-logs, RAM-only servers, and fast NordLynx performance for streaming and calls.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Recommended by GoDigitalPro
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              NordVPN is a virtual private network service that encrypts your traffic and routes it through secure servers globally. It helps keep browsing private, unlocks geo-blocked content, and protects remote work.
            </p>
            <p className="mt-3 text-slate-700">
              It is known for speed (NordLynx), strong security practices (audited no-logs, RAM-only servers), and extras like Threat Protection to block trackers and malicious sites.
            </p>
            <p className="mt-3 text-slate-700">
              Marketers, travelers, and remote teams use NordVPN to secure public Wi‑Fi, shield IP addresses, and keep client data protected during calls and uploads.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">NordVPN suits anyone who needs privacy, safer travel browsing, or consistent streaming performance.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Remote workers and digital nomads securing public Wi‑Fi.",
                "Marketers and creators accessing geo-blocked research or tools.",
                "Teams running international streaming tests and QA.",
                "Privacy-focused users who want audited no-logs guarantees.",
                "Households needing a fast VPN across laptops and phones.",
                "Users who want extras like Threat Protection and Meshnet.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">NordVPN focuses on privacy, speed, and reliable access to global content.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featureBlocks.map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 text-slate-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--pricing bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{toolName} pricing (2025)</h2>
                <p className="mt-2 text-slate-700">
                  Pricing varies by term (monthly, 1-year, 2-year) and whether you bundle password manager/cloud storage. Longer terms lower the monthly equivalent significantly.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Most users choose 1–2 year VPN-only or Plus for better value; bundles add extras if you need them.</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <table className="w-full text-left text-sm text-slate-800 md:text-base">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Best for</th>
                    <th className="px-4 py-3">Key limits</th>
                    <th className="px-4 py-3">Approx. price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Standard (VPN)</td>
                    <td className="px-4 py-3">Core privacy and streaming</td>
                    <td className="px-4 py-3">10 devices, VPN + Threat Protection</td>
                    <td className="px-4 py-3">~$3–$8/mo (term-dependent)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Plus</td>
                    <td className="px-4 py-3">VPN + password manager</td>
                    <td className="px-4 py-3">Adds NordPass + data breach scanner</td>
                    <td className="px-4 py-3">~$4–$10/mo</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">Complete</td>
                    <td className="px-4 py-3">VPN + storage bundle</td>
                    <td className="px-4 py-3">Adds NordLocker cloud storage</td>
                    <td className="px-4 py-3">~$6–$13/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Best value comes from the 1–2 year term discounts. If you need unlimited devices, check Surfshark; ExpressVPN is pricier but strong for streaming.
            </p>
          </div>
        </section>

        <section className="section section--pros-cons bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} pros &amp; cons</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">Pros</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Audited no-logs policy and RAM-only servers.</li>
                  <li>Fast NordLynx performance for streaming and calls.</li>
                  <li>Threat Protection blocks trackers and malicious domains.</li>
                  <li>Large server network with specialty options (Double VPN, Onion).</li>
                  <li>Solid apps across desktop and mobile with kill switch.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>10-device limit—Surfshark offers unlimited devices.</li>
                  <li>Some specialty servers require manual selection.</li>
                  <li>Peak-time congestion can slow certain locations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">Compare NordVPN to other top VPNs for speed, devices, and streaming reliability.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.blurb}</p>
                  </div>
                  <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href={`/tools/${alt.slug}`}>
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--vs bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} vs other tools</h2>
            <p className="text-slate-700">See how NordVPN compares to two of the most popular alternatives.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs Surfshark vs ExpressVPN</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/surfshark-vs-nordvpn-vs-expressvpn">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                Surfshark wins on unlimited devices and price. ExpressVPN is premium-priced but great for streaming. NordVPN balances speed, security audits, and value with Threat Protection included.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ExpressVPN vs Surfshark</h3>
                <a className="text-sm font-semibold text-sky-700 hover:text-sky-600" href="/tools/compare/nordvpn-vs-expressvpn-vs-surfshark">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ExpressVPN is often the fastest for streaming but costs more. Surfshark is most affordable for many devices. NordVPN offers the strongest security extras (double VPN, Meshnet) at a mid-market price.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              For most users who want a fast, audited VPN with strong security features, NordVPN is worth it. It balances speed, privacy, and value better than most competitors.
            </p>
            <p className="mt-3 text-slate-700">
              If you need unlimited devices on a budget, Surfshark is attractive. If you need the absolute simplest streaming performance and don’t mind the price, ExpressVPN is solid.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> NordVPN is a top pick for privacy-minded users who also want dependable speeds for streaming and remote work.
            </p>
          </div>
        </section>

        <section className="section section--faq bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} FAQs</h2>
            <p className="mt-2 text-slate-700">Tap a question to expand the answer.</p>
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--final bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12 space-y-4 text-slate-800">
            <h2 className="text-2xl font-bold text-slate-900">Final verdict on {toolName}</h2>
            <p>
              Choose NordVPN if you value audited security, fast NordLynx performance, and extras like Threat Protection and Meshnet. It’s great for travel, streaming, and remote work.
            </p>
            <p>
              Pick Surfshark if you need unlimited devices at the lowest price. Pick ExpressVPN if you prioritize premium streaming performance and a very simple app experience.
            </p>
            <p>NordVPN integrates smoothly across devices, keeping browsing, calls, and uploads private wherever you work.</p>
            <p className="font-semibold text-slate-900">
              Ready to try {toolName}? <a className="text-sky-700 hover:text-sky-500" href={officialUrl}>Visit {toolName}</a>.
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-sky-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4" /> Back to Tools Hub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-slate-900"
      >
        <span className="text-sm font-semibold md:text-base">{question}</span>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
}

export default NordVPNToolPage;
