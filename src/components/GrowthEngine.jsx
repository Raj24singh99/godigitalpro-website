// src/components/GrowthEngine.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Target, Sparkles, BarChart3, Workflow, CheckCircle2 } from "lucide-react";

/* ---------- helpers ---------- */
function useIsMobile() {
  const [isMobile, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setM(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return isMobile;
}

const MicroChip = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white/95 shadow-sm">
    {children}
  </span>
);

function PillarCard({ icon: Icon, title, desc, active }) {
  return (
    <motion.div
      className="relative rounded-3xl bg-white border border-blue-200/70 p-6 shadow-sm"
      animate={
        active
          ? { scale: 1.03, boxShadow: "0 18px 50px rgba(37,99,235,.18)" }
          : { scale: 1, boxShadow: "0 8px 30px rgba(0,0,0,.06)" }
      }
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flex items-center gap-3">
        <div className="inline-grid place-items-center w-11 h-11 rounded-xl bg-slate-900 text-primary">
          <Icon size={20} />
        </div>
        <div className="text-2xl font-serif font-semibold text-dark">{title}</div>
      </div>
      <p className="mt-2 text-slate-700">{desc}</p>
      {/* subtle progress underline when active (desktop anim only) */}
      {typeof active === "boolean" && (
        <motion.div
          className="mt-4 h-1 rounded bg-blue-600/90"
          initial={{ width: 0 }}
          animate={{ width: active ? "64px" : "0px" }}
          transition={{ duration: 0.45 }}
        />
      )}
    </motion.div>
  );
}

/* ---------- Mobile: clean, no connector lines ---------- */
function MobileDiagram() {
  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-xl mx-auto px-5 text-center">
        <h2 className="font-serif text-3xl font-semibold text-dark">
          Ad Platforms Keep Evolving.
        </h2>
        <p className="text-2xl font-semibold text-blue-700 mt-1">
          Do Your Performance Strategies Keep Up?
        </p>
        <p className="mt-4 text-slate-800">
          Our relationships with Google, Meta, Amazon and more give us early
          insights, so we can pre-plan changes instead of reacting late.
        </p>
      </div>

      {/* Cards grid — no SVG, no lines */}
      <div className="relative max-w-xl mx-auto mt-8">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white border border-blue-200/70 p-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 grid place-items-center rounded-xl bg-slate-900 text-primary">
                <Target size={18} />
              </div>
              <div className="font-serif font-semibold text-dark">Strategy</div>
            </div>
            <p className="text-sm text-slate-700 mt-2">
              Cross-channel plan, ICP, offers, budgets.
            </p>
            <div className="mt-2">
              <MicroChip>#MarketingStrategy</MicroChip>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-blue-200/70 p-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 grid place-items-center rounded-xl bg-slate-900 text-primary">
                <BarChart3 size={18} />
              </div>
              <div className="font-serif font-semibold text-dark">Deep Analytics</div>
            </div>
            <p className="text-sm text-slate-700 mt-2">
              Attribution models, dashboards, payback.
            </p>
            <div className="mt-2">
              <MicroChip>#ROI</MicroChip>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-blue-200/70 p-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 grid place-items-center rounded-xl bg-slate-900 text-primary">
                <Sparkles size={18} />
              </div>
              <div className="font-serif font-semibold text-dark">Creatives</div>
            </div>
            <p className="text-sm text-slate-700 mt-2">
              Video-led ads & landing copy that convert.
            </p>
            <div className="mt-2">
              <MicroChip>#HyperGrowth</MicroChip>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-blue-200/70 p-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 grid place-items-center rounded-xl bg-slate-900 text-primary">
                <Workflow size={18} />
              </div>
              <div className="font-serif font-semibold text-dark">Data Flows</div>
            </div>
            <p className="text-sm text-slate-700 mt-2">
              Pixels, CRM & offline conversions synced.
            </p>
            <div className="mt-2">
              <MicroChip>#GrowthMarketing</MicroChip>
            </div>
          </div>
        </div>

        {/* Center card */}
        <div className="relative -mt-1 px-1">
          <div className="mx-auto mt-3 w-full rounded-3xl border border-blue-200 bg-blue-50/70 p-5 text-center shadow-sm">
            <div className="mx-auto mb-2 w-10 h-10 grid place-items-center rounded-xl bg-white shadow">
              <CheckCircle2 size={18} className="text-blue-600" />
            </div>
            <div className="font-serif text-xl font-semibold text-dark">
              Performance at the Core
            </div>
            <p className="text-sm text-slate-700 mt-1">
              Plan → Launch → Learn → Scale. Keep what works. Cut what doesn’t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Desktop: animated version (unchanged) ---------- */
function DesktopAnimated() {
  const dotControls = useAnimationControls();
  const [active, setActive] = useState(-1);
  const [spark, setSpark] = useState(-1);
  const reduceMotion = useReducedMotion();

  const path = useMemo(
    () => [
      { x: "18%", y: "30%", hit: 0, chip: 0 },
      { x: "82%", y: "30%", hit: 1, chip: 1 },
      { x: "82%", y: "77%", hit: 3, chip: 3 },
      { x: "18%", y: "77%", hit: 2, chip: 2 },
    ],
    []
  );

  useEffect(() => {
    if (reduceMotion) return;
    let mounted = true;
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      await dotControls.set({ left: "50%", top: "53%" });
      while (mounted) {
        for (const p of path) {
          if (!mounted) break;
          setActive(p.hit);
          setSpark(p.chip);
          await dotControls.start({
            left: p.x,
            top: p.y,
            transition: { duration: 0.9, ease: "easeInOut" },
          });
          if (!mounted) break;
          await delay(220);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [dotControls, path, reduceMotion]);

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-dark">
            Our Growth Engine
          </h2>
          <p className="mt-2 text-slate-700">
            20+ years of marketing distilled into a simple system:
            <span className="font-semibold"> Plan → Launch → Learn → Scale.</span>
          </p>
        </div>

        {/* proof chips */}
        <div className="mt-6 grid grid-cols-4 gap-3">
          <span className={`rounded-full border border-blue-200/80 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm ${spark===0?'bg-blue-100':''}`}>#ICP & Offers</span>
          <span className={`rounded-full border border-blue-200/80 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm ${spark===1?'bg-blue-100':''}`}>#Attribution & Payback</span>
          <span className={`rounded-full border border-blue-200/80 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm ${spark===2?'bg-blue-100':''}`}>#Creative Testing</span>
          <span className={`rounded-full border border-blue-200/80 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm ${spark===3?'bg-blue-100':''}`}>#CRM & Offline Conversions</span>
        </div>

        <div className="relative mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 space-y-6">
            <PillarCard icon={Target} title="Strategy" desc="ICP, offers, channel mix, budgets." active={active===0} />
            <PillarCard icon={Sparkles} title="Creatives" desc="Scroll-stopping ads & landing copy that converts." active={active===2} />
          </div>

          <div className="lg:col-span-4">
            <div className="relative h-full rounded-3xl border border-blue-200/70 bg-blue-50/60 p-6 text-center shadow-sm flex flex-col items-center justify-center">
              <div className="inline-grid w-12 h-12 rounded-2xl bg-white shadow place-items-center mb-3">
                <CheckCircle2 size={22} className="text-blue-600" />
              </div>
              <div className="font-serif text-2xl md:text-[28px] font-semibold text-dark">Performance at the Core</div>
              <p className="mt-2 text-slate-700 text-sm md:text-base max-w-md">
                Every sprint ships learnings. We keep what works, cut what doesn’t.
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2 text-xs text-slate-700">
                {["Plan","Launch","Learn","Scale"].map((s,i)=>(
                  <motion.div key={s} className="py-1 px-2 rounded-lg bg-white border border-blue-200"
                    animate={active===i%4?{scale:1.06}:{scale:1}}
                    transition={{type:"spring",stiffness:260,damping:16}}
                  >{s}</motion.div>
                ))}
              </div>
              {!reduceMotion && (
                <>
                  <motion.div className="pointer-events-none absolute left-1/2 top-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full bg-blue-600 shadow" animate={dotControls}/>
                  <div className="pointer-events-none absolute inset-2 rounded-[28px] border-2 border-blue-300/60" />
                  <div className="pointer-events-none absolute inset-6 rounded-[28px] border-2 border-dashed border-blue-400/70" />
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <PillarCard icon={BarChart3} title="Deep Analytics" desc="Attribution, dashboards, payback clarity." active={active===1} />
            <PillarCard icon={Workflow} title="Data Flows" desc="Pixels, CRM, offline conversions—synced." active={active===3} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Export wrapper ---------- */
export default function GrowthEngine() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileDiagram /> : <DesktopAnimated />;
}
