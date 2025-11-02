// src/components/GrowthJourney.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Compass, Wrench, Rocket, Repeat, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- content ---------- */
const STEPS = [
  { title: "Discover",    sub: "Define target customers and offers people want.", Icon: Compass },
  { title: "Foundations", sub: "Set up fast site, pixels, and a basic CRM.",      Icon: Wrench   },
  { title: "Launch",      sub: "Start campaigns, go live, collect real results.", Icon: Rocket   },
  { title: "Optimize",    sub: "Improve winners, cut waste, tune budgets.",       Icon: Repeat   },
  { title: "Scale",       sub: "Increase spend and expand to new channels.",      Icon: TrendingUp },
];

const LOOP_SECONDS = 10; // full cycle duration

/* ---------- helpers ---------- */
function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return m;
}

function StepCard({ title, sub, Icon, active, compact = false }) {
  return (
    <motion.div
      className={`relative rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_10px_32px_rgba(0,0,0,0.06)] p-6 ${
        compact ? "min-h-[156px]" : "min-h-[190px]"
      } flex flex-col justify-between`}
      animate={active ? { y: -2, scale: 1.02, boxShadow: "0 22px 60px rgba(37,99,235,.18)" } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-grid place-items-center w-12 h-12 rounded-xl bg-slate-900 text-primary shrink-0">
          <Icon size={20} />
        </span>
        <div className={`font-serif ${compact ? "text-xl" : "text-[22px]"} leading-none text-dark`}>
          {title}
        </div>
      </div>

      <div className={`text-slate-700 ${compact ? "text-[14px]" : "text-[15px]"} mt-2`}>
        {sub}
      </div>

      <motion.div
        className="mt-3 h-1 rounded bg-blue-600/95"
        initial={{ width: 0 }}
        animate={{ width: active ? 72 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

/* ---------- Desktop: horizontal rail ---------- */
function DesktopRail() {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const fillCtl = useAnimationControls();
  const alive = useRef(false);

  useEffect(() => {
    if (reduce) return;

    alive.current = true;

    const raf = () =>
      new Promise((res) => {
        requestAnimationFrame(() => requestAnimationFrame(res));
      });

    const loop = async () => {
      while (alive.current) {
        await fillCtl.set({ scaleX: 0, originX: 0 });
        await fillCtl.start({
          scaleX: 1,
          transition: { duration: LOOP_SECONDS, ease: "easeInOut" },
        });
      }
    };

    const stepMs = (LOOP_SECONDS / STEPS.length) * 1000;

    (async () => {
      await raf(); // ensure the motion.div that uses fillCtl is mounted
      if (!alive.current) return;
      loop();
    })();

    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % STEPS.length);
    }, stepMs);

    return () => {
      alive.current = false;
      clearInterval(t);
      fillCtl.stop();
    };
  }, [reduce, fillCtl]);

  return (
    <div className="relative mt-12 hidden md:block">
      {/* base rail */}
      <div className="pointer-events-none absolute left-6 right-6 top-[58px] h-[4px] bg-slate-200 rounded-full" />

      {/* animated fill rail */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute left-6 top-[58px] h-[4px] rounded-full origin-left"
          style={{
            width: "calc(100% - 3rem)",
            background:
              "linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(59,130,246,0.7) 70%, rgba(59,130,246,0.3) 100%)",
          }}
          animate={fillCtl}
          initial={{ scaleX: 0 }}
        />
      )}

      {/* cards */}
      <div className="relative grid grid-cols-5 gap-6">
        {STEPS.map((s, i) => (
          <StepCard key={s.title} {...s} active={i === activeIdx} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dark text-white hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          aria-label="Create my growth plan"
        >
          Create My Growth Plan
        </Link>
      </div>
    </div>
  );
}

/* ---------- Mobile: vertical rail ---------- */
function MobileVertical() {
  const reduce = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const fillCtl = useAnimationControls();
  const alive = useRef(false);

  useEffect(() => {
    if (reduce) return;

    alive.current = true;

    const raf = () =>
      new Promise((res) => {
        requestAnimationFrame(() => requestAnimationFrame(res));
      });

    const loop = async () => {
      while (alive.current) {
        await fillCtl.set({ scaleY: 0, originY: 0 });
        await fillCtl.start({
          scaleY: 1,
          transition: { duration: LOOP_SECONDS, ease: "easeInOut" },
        });
      }
    };

    const stepMs = (LOOP_SECONDS / STEPS.length) * 1000;

    (async () => {
      await raf(); // ensure the motion.div using fillCtl is mounted
      if (!alive.current) return;
      loop();
    })();

    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % STEPS.length);
    }, stepMs);

    return () => {
      alive.current = false;
      clearInterval(t);
      fillCtl.stop();
    };
  }, [reduce, fillCtl]);

  return (
    <div className="md:hidden mt-8 relative">
      {/* vertical rail */}
      <div className="pointer-events-none absolute left-6 top-2 bottom-2 w-[4px] bg-slate-200 rounded-full" />

      {!reduce && (
        <motion.div
          className="pointer-events-none absolute left-6 top-2 w-[4px] rounded-full origin-top"
          style={{
            height: "calc(100% - 1rem)",
            background:
              "linear-gradient(180deg, rgba(59,130,246,1) 0%, rgba(59,130,246,0.7) 70%, rgba(59,130,246,0.3) 100%)",
          }}
          animate={fillCtl}
          initial={{ scaleY: 0 }}
        />
      )}

      <div className="space-y-4 pl-8">
        {STEPS.map((s, i) => (
          <StepCard key={s.title} {...s} active={i === activeIdx} compact />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/onboarding"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-dark text-white hover:bg-black transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          aria-label="Create my growth plan"
        >
          Create My Growth Plan
        </Link>
      </div>
    </div>
  );
}

/* ---------- wrapper ---------- */
export default function GrowthJourney() {
  const isMobile = useIsMobile();
  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl md:text-5xl font-bold text-dark">
          Growth in Action
        </h2>
        <p className="text-center text-slate-700 mt-3 max-w-3xl mx-auto">
          A clear journey: <span className="font-medium">Discover → Foundations → Launch → Optimize → Scale</span>.
          Continuous improvement, compounding results.
        </p>

        {isMobile ? <MobileVertical /> : <DesktopRail />}
      </div>
    </section>
  );
}
