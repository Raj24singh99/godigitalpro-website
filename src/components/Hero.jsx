// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------- Simple Icons CDN helper (with safe exceptions) ---------- */
const cdnLogo = (slug, color) =>
  color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`;

/* Clean LinkedIn inline SVG (avoid any 404s) */
function LinkedinInline({ size = 22, color = "#0A66C2" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LinkedIn"
      role="img"
      fill={color}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.853 0-2.136 1.447-2.136 2.943v5.662H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.605 0 4.27 2.374 4.27 5.462v6.279zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.96 20.452H3.708V9H6.96v11.452z" />
    </svg>
  );
}

/* Amazon smile inline (no CDN) */
function AmazonSmile({ size = 22, color = "#FF9900" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Amazon"
      role="img"
    >
      <path
        d="M8 38 C 22 52, 42 52, 56 38"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 36 L58 38 L50 40"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 42 C 24 48, 40 48, 52 42"
        fill="none"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Curated ad/performance ecosystem */
const LOGOS = [
  { label: "Google Ads", slug: "googleads", color: "34A853" },
  { label: "Meta", slug: "meta", color: "0866FF" },
  { label: "Instagram", slug: "instagram", color: "E4405F" },
  { label: "LinkedIn", slug: "linkedin", color: "0A66C2" }, // inline
  { label: "YouTube", slug: "youtube", color: "FF0000" },
  { label: "Snapchat", slug: "snapchat", color: "FFFC00" },
  { label: "Amazon", slug: "amazon", color: "FF9900" }, // inline
  { label: "Flipkart", slug: "flipkart", color: "2874F0" },
  { label: "TikTok", slug: "tiktok", color: "000000" },
];

/* Image with safe fallbacks; LinkedIn + Amazon are always inline */
function LogoImg({ slug, label, color, size }) {
  const [visible, setVisible] = useState(true);

  if (slug === "amazon") return <AmazonSmile size={size} color={`#${(color || "").replace("#", "") || "FF9900"}`} />;
  if (slug === "linkedin") return <LinkedinInline size={size} color={`#${(color || "").replace("#", "") || "0A66C2"}`} />;

  if (!visible) return null;

  return (
    <img
      src={cdnLogo(slug, color)}
      alt={label}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      className="block"
      referrerPolicy="no-referrer"
      onError={() => setVisible(false)}
    />
  );
}

/* ---------- Single marquee band (desktop + mobile) ---------- */
function MarqueeBand({ speed = 18, size = 22 }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {LOGOS.map((b) => (
          <div
            key={`static-${b.slug}`}
            className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm"
          >
            <LogoImg slug={b.slug} label={b.label} color={b.color} size={size} />
            <span className="text-xs text-slate-700">{b.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex gap-4"
        style={{
          width: "200%",
          animation: `marqueeRtl ${speed}s linear infinite`,
          willChange: "transform",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        {[...LOGOS, ...LOGOS].map((b, idx) => (
          <div
            key={`${b.slug}-${idx}`}
            className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm"
          >
            <LogoImg slug={b.slug} label={b.label} color={b.color} size={size} />
            <span className="text-xs text-slate-700">{b.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marqueeRtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ---------- Tiny counter hook ---------- */
function useInView(ref, rootMargin = "0px") {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin,
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);
  return inView;
}
function CountUp({ end = 100, duration = 1200, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ---------- HERO ---------- */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white flex items-center min-h-[72vh] pt-24 md:pt-28 pb-16">
      {/* subtle ambient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(250, 255, 200, .5), rgba(255,255,255,0))",
        }}
        animate={{ x: [0, 10, -10, 0], y: [0, 8, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(240, 255, 170, .35), rgba(255,255,255,0))",
        }}
        animate={{ x: [0, -12, 12, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 w-full text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-primary/15 text-dark px-4 py-2 rounded-full text-sm font-medium ring-1 ring-black/5 mx-auto">
          <Sparkles size={16} className="text-yellow-500" />
          <span>Global Digital Marketing Partner on Speed Dial</span>
        </div>

        {/* Heading */}
        <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.1] sm:text-5xl md:text-6xl font-bold text-dark tracking-tight">
          A digital marketing agency for startups, local businesses, and growth-stage brands
        </h1>

        {/* Description */}
        <p className="mt-4 text-base md:text-lg text-slate-800 max-w-3xl mx-auto">
          Growth leaders plug us in when they need one accountable team across SEO, Google Ads, paid social, CRO, and analytics without hiring six agencies or juggling five dashboards.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link to="/onboarding" className="btn-primary inline-flex items-center gap-2 text-base">
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </div>

        <p className="mt-2 text-sm text-slate-600">
          A clear plan from day one, grounded in research and battle-tested playbooks.
        </p>

        {/* Single marquee band */}
        <div className="mt-6">
          <MarqueeBand speed={18} size={22} />
        </div>

        {/* Metrics */}
        <div className="mt-10 pt-6 border-t border-black/10">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-dark text-center">
            <li>
              <div className="text-2xl font-extrabold">
                <CountUp end={12} suffix="+ Years " />
              </div>
              <div className="text-sm text-slate-700">Digital Experience</div>
            </li>
            <li>
              <div className="text-2xl font-extrabold">
                <CountUp end={342} suffix="+ " />
              </div>
              <div className="text-sm text-slate-700">Clients</div>
            </li>
            <li>
              <div className="text-2xl font-extrabold">
                <CountUp end={1265} suffix=" Cr+" />
              </div>
              <div className="text-sm text-slate-700">Revenue Generated</div>
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-700">
            Trusted by SaaS, D2C, marketplaces, and B2B teams worldwide as their always-on digital marketing pod.
          </p>
        </div>
      </div>
    </section>
  );
}
