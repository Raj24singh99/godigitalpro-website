import React, { useState } from "react";
import { Sparkles, ShieldCheck, Radar, Globe, Lock, Gauge, Crown, ArrowLeft, ChevronDown, Wifi, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import SeoHelmet from "../../../components/SeoHelmet.jsx";
import { buildCanonical } from "../../../utils/seo.js";

const toolName = "Surfshark";
const slug = "surfshark";
const category = "VPN";
const shortPitch =
  "Surfshark is an affordable VPN with unlimited devices, fast streaming speeds, and strong privacy controls for marketers, agencies, travelers, and remote teams.";
const pricingSummary =
  "Plans often dip below ~$2–$3/month on long-term billing. Monthly plans cost more. All include unlimited devices, CleanWeb ad/malware blocking, and 30-day money-back guarantee.";
const officialUrl = "https://surfshark.com/";
const ratingValue = 4.5;

const brandMeta = {
  name: toolName,
  logo: "https://logo.clearbit.com/surfshark.com",
  gradient: "from-teal-500 via-cyan-500 to-blue-600",
  glow: "shadow-[0_20px_80px_rgba(13,148,136,0.20)]",
};

const alternatives = [
  { name: "NordVPN", slug: "nordvpn" },
  { name: "ExpressVPN", slug: "expressvpn" },
  { name: "pCloud", slug: "pcloud" }, // for secure cloud pairing
  { name: "Sync.com", slug: "sync-com" },
];

const faqs = [
  {
    q: "Is Surfshark good for streaming and travel?",
    a: "Yes. Surfshark offers reliable speeds and plenty of locations to unblock streaming services when traveling. Unlimited devices means your laptop, phone, and TV can connect at once.",
  },
  {
    q: "Is Surfshark secure?",
    a: "Surfshark uses AES-256 encryption, RAM-only servers, WireGuard/OpenVPN/IKEv2, DNS leak protection, and a kill switch. It’s audited and supports MultiHop with rotating IPs.",
  },
  {
    q: "How many devices can I use?",
    a: "Unlimited. This is a key differentiator—agencies and households can cover every device without counting seats.",
  },
  {
    q: "Does Surfshark log my traffic?",
    a: "Surfshark has a no-logs policy and RAM-only servers. Independent audits have reviewed infrastructure and privacy claims.",
  },
  {
    q: "Is Surfshark fast enough for calls?",
    a: "On WireGuard, Surfshark is fast enough for HD video calls and live collaboration. Performance can vary by region, but it’s competitive with leading VPNs.",
  },
  {
    q: "Can Surfshark block ads or malware?",
    a: "Yes. CleanWeb blocks ads, trackers, and malicious sites at the network layer to keep browsing clean across devices.",
  },
  {
    q: "Does Surfshark work with Netflix and YouTube?",
    a: "In most regions, yes. Surfshark prioritizes streaming performance and regularly rotates IPs to maintain access.",
  },
  {
    q: "Is it worth paying yearly?",
    a: "If you plan to use VPN daily, the multi-year plan is much cheaper (often ~$2–$3/month) and includes the same unlimited-device benefits.",
  },
];

function SurfsharkToolPage() {
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
        "Surfshark delivers an affordable VPN with unlimited devices, fast WireGuard speeds, and extras like CleanWeb ad blocking. It’s strong for travel, streaming, and protecting remote teams across laptops and phones.",
      reviewRating: {
        "@type": "Rating",
        ratingValue,
        bestRating: "5",
        worstRating: "1",
      },
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

  const featureBlocks = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Security and privacy by default",
      body: "AES-256 encryption, WireGuard/OpenVPN/IKEv2, kill switch, DNS leak protection, and RAM-only servers protect browsing, calls, and logins.",
    },
    {
      icon: <Radar className="h-5 w-5 text-teal-600" />,
      title: "Unlimited devices on one plan",
      body: "Cover every device in your home or agency stack—no need to pay per device, making Surfshark budget-friendly for remote teams.",
    },
    {
      icon: <Globe className="h-5 w-5 text-blue-600" />,
      title: "Global network for streaming",
      body: "Plenty of countries and rotating IPs to access content while traveling. WireGuard keeps speeds competitive for HD streaming.",
    },
    {
      icon: <Lock className="h-5 w-5 text-slate-700" />,
      title: "CleanWeb ad + tracker blocking",
      body: "Built-in ad/malware blocking reduces noise, speeds up page loads, and protects less technical users across devices.",
    },
    {
      icon: <Gauge className="h-5 w-5 text-amber-600" />,
      title: "MultiHop and static IP options",
      body: "Route traffic through two servers or use static IPs for consistent login experiences when tools flag frequent IP changes.",
    },
    {
      icon: <Rocket className="h-5 w-5 text-rose-500" />,
      title: "Affordable long-term pricing",
      body: "Multi-year deals often drop the effective monthly price to a few dollars with 30-day refunds, making VPN coverage inexpensive at scale.",
    },
  ];

  return (
    <>
      <SeoHelmet
        title={`${toolName} Review 2025: Pricing, Speed, Pros & Cons, Alternatives`}
        description="Detailed Surfshark VPN review for marketers, agencies, and travelers covering pricing, speeds, pros & cons, alternatives, and whether it fits your stack."
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50 to-white" />
          <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:py-16">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Crown className="h-4 w-4 text-teal-500" />
                {category}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                {toolName} Review (2025): Speed, Security, Pricing, Pros & Cons
              </h1>
              <p className="mt-4 text-lg text-slate-600">{shortPitch}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Our rating: {ratingValue}/5</span>
                <span className="rounded-full bg-white px-3 py-1 shadow ring-1 ring-slate-200">Reviewed by GoDigitalPro • Updated May 2025</span>
              </div>
              <p className="mt-4 text-slate-700">{pricingSummary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary bg-slate-900 text-white ring-2 ring-slate-900 hover:bg-slate-700" href={officialUrl}>
                  Visit Surfshark
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${brandMeta.gradient} p-6 text-white shadow-2xl ${brandMeta.glow}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-white blur-3xl" />
                  <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-teal-200 blur-3xl" />
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
                  Surfshark makes it easy to secure every device with fast WireGuard speeds, unlimited connections, and CleanWeb filtering so teams stay protected without extra seat costs.
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                  Trusted for travel and remote work
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--overview bg-white">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">What is {toolName}?</h2>
            <p className="mt-4 text-slate-700">
              Surfshark is a {category.toLowerCase()} built to protect browsing, calls, and app logins with end-to-end encrypted tunnels. It balances fast WireGuard speeds with features like CleanWeb filtering, MultiHop, and static IPs.
            </p>
            <p className="mt-3 text-slate-700">
              Agencies and remote teams use Surfshark to keep client data safe on public Wi-Fi, avoid region restrictions while traveling, and secure every device without paying per seat. Creators and travelers appreciate the streaming
              performance and unlimited-device policy.
            </p>
            <p className="mt-3 text-slate-700">
              If you need a budget-friendly VPN that still delivers privacy, speed, and reliability, Surfshark is a strong pick.
            </p>
          </div>
        </section>

        <section className="section section--who bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-slate-900">Who should use {toolName}?</h2>
            <p className="mt-3 text-slate-700">Surfshark suits privacy-conscious users who don’t want per-device limits.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Remote teams and agencies that need secure Wi-Fi on the road.",
                "Marketers and creators who travel and need reliable streaming access.",
                "Freelancers who want one VPN subscription to cover all devices.",
                "Teams who need a kill switch + ad blocking without configuring each app.",
                "Privacy-focused founders who prefer RAM-only, audited infrastructure.",
                "Households wanting an inexpensive VPN with unlimited connections.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--features bg-white">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} key features</h2>
            <p className="mt-3 text-slate-700">Surfshark focuses on speed, privacy, and ease so every device stays secure with minimal setup.</p>
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
                  Monthly is pricier; multi-year deals often drop below ~$3/month. All plans include unlimited devices, CleanWeb, kill switch, WireGuard, and 30-day money-back guarantee. Add-ons like static IP and Incogni (data removal)
                  cost extra.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-slate-200">
                <p className="font-semibold text-slate-900">Fast pick</p>
                <p className="text-slate-700">Choose the 2-year plan for best value; monthly only if you need short-term coverage.</p>
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
                    <td className="px-4 py-3 font-semibold text-slate-900">Monthly</td>
                    <td className="px-4 py-3">Short-term travel or tests</td>
                    <td className="px-4 py-3">Unlimited devices, CleanWeb, all protocols</td>
                    <td className="px-4 py-3">~$13+/month</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">1-Year</td>
                    <td className="px-4 py-3">Seasonal remote teams</td>
                    <td className="px-4 py-3">Same features, billed annually</td>
                    <td className="px-4 py-3">~$3–$4/month (effective)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-slate-900">2-Year</td>
                    <td className="px-4 py-3">Best value for daily use</td>
                    <td className="px-4 py-3">Adds bonus months often; same features</td>
                    <td className="px-4 py-3">~$2–$3/month (effective)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-slate-700">
              Surfshark’s unlimited devices and CleanWeb make it budget-friendly versus per-device VPNs. Add static IP if your apps or banks dislike rotating IPs.
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
                  <li>Unlimited devices on one subscription.</li>
                  <li>Fast WireGuard speeds suitable for HD calls and streaming.</li>
                  <li>CleanWeb blocks ads, trackers, and malware without plugins.</li>
                  <li>RAM-only servers, audits, and no-logs policy for privacy.</li>
                  <li>Affordable long-term pricing with 30-day money-back guarantee.</li>
                  <li>MultiHop, static IP, and split tunneling options for flexibility.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-rose-600">
                  <ShieldCheck className="h-5 w-5 rotate-180" />
                  <h3 className="text-lg font-semibold text-slate-900">Cons</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-800">
                  <li>Static IP costs extra; some services still might challenge logins.</li>
                  <li>Fewer specialty servers than NordVPN.</li>
                  <li>Parent company is growing—privacy-conscious users may prefer longest-tenured brands.</li>
                  <li>Regional speeds can vary; best performance via WireGuard.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--alternatives bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">{toolName} alternatives and competitors</h2>
            <p className="mt-3 text-slate-700">
              Compare Surfshark with these VPN and privacy tools. Each has a dedicated page so you can review features, pricing, and fit before switching.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <div key={alt.slug} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200">
                  <div>
                    <p className="font-semibold text-slate-900">{alt.name}</p>
                    <p className="text-sm text-slate-600">{alt.isComparison ? "Direct comparison page available." : "Popular alternative in the same space."}</p>
                  </div>
                  <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href={`/tools/${alt.slug}`}>
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
            <p className="text-slate-700">Here’s how Surfshark compares to NordVPN and ExpressVPN.</p>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs NordVPN</h3>
                <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href="/tools/compare/surfshark-vs-nordvpn-vs-expressvpn">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                NordVPN has more specialty servers (Double VPN, Onion over VPN) and a longer track record. Surfshark wins on unlimited devices and price. Performance is similar on WireGuard; Nord can edge ahead on some regions.
              </p>
              <p className="mt-2 text-slate-900">Choose Surfshark for affordability and unlimited devices; choose NordVPN for extras and longer brand tenure.</p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-slate-900">{toolName} vs ExpressVPN</h3>
                <a className="text-sm font-semibold text-teal-700 hover:text-teal-600" href="/tools/compare/surfshark-vs-nordvpn-vs-expressvpn">
                  Open comparison
                </a>
              </div>
              <p className="mt-2 text-slate-700">
                ExpressVPN is known for polished apps and consistent speeds, but it costs more and limits devices. Surfshark is cheaper with unlimited devices and CleanWeb ad blocking, making it great for teams with many endpoints.
              </p>
              <p className="mt-2 text-slate-900">Choose Surfshark if you want value and unlimited connections; choose ExpressVPN if you prioritize UX polish and a long brand history.</p>
            </div>
          </div>
        </section>

        <section className="section section--worth-it bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="text-2xl font-bold text-slate-900">Is {toolName} worth it?</h2>
            <p className="mt-3 text-slate-700">
              Surfshark is worth it if you need a VPN that covers unlimited devices, stays fast on WireGuard, and blocks ads/malware natively. Remote teams, agencies, and frequent travelers get strong value from its pricing and feature set.
            </p>
            <p className="mt-3 text-slate-700">
              If you want the longest-running providers and specialty servers, NordVPN or ExpressVPN might suit you more. For pure price-to-device ratio, Surfshark is hard to beat.
            </p>
            <p className="mt-3 text-slate-900 font-semibold">
              <strong>Verdict:</strong> Surfshark combines speed, privacy, and unlimited devices at a budget-friendly price—ideal for teams and households that want simple, reliable protection.
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
            <p>Choose Surfshark if you need fast, affordable VPN coverage for every device, with ad blocking and privacy-first defaults.</p>
            <p>Consider NordVPN or ExpressVPN if you want the longest-tenured brands or specialty servers; stick with Surfshark for unlimited connections and value.</p>
            <p>Surfshark fits marketers, travelers, remote teams, and households that want straightforward protection and streaming-friendly speeds.</p>
            <p className="font-semibold text-slate-900">
              If {toolName} sounds like the right fit for your stack, you can try it here:{" "}
              <a className="text-teal-700 hover:text-teal-500" href={officialUrl}>
                Visit {toolName}
              </a>
              .
            </p>
            <div className="pt-2">
              <Link to="/tools" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50">
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
      {open && <div className="border-t border-slate-100 px-4 py-3 text-sm text-slate-700">{answer}</div>}
    </div>
  );
}

export default SurfsharkToolPage;
