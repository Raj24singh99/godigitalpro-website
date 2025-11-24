// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

function useOutsideClose(ref, onClose) {
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose?.();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose]);
}

function Caret({ open }) {
  return (
    <span
      className={`inline-block ml-1 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden
    >
      ▾
    </span>
  );
}

const SERVICES = [
  { label: "Website Development", to: "/services/website-development" },
  { label: "Social Media Marketing", to: "/services/social-media-marketing" },
  { label: "Brand Building", to: "/services/brand-building" },
  { label: "Paid Marketing", to: "/services/paid-marketing" },
  { label: "Marketplaces & Quick Commerce", to: "/services/marketplaces" },
  { label: "SEO & Content", to: "/services/seo-content" },
];

const INDUSTRIES = [
  { label: "D2C Ecommerce", to: "/industries/d2c-ecommerce" },
  { label: "SaaS & Startups", to: "/industries/saas-startups" },
  { label: "Healthcare", to: "/industries/healthcare" },
  { label: "Local Services", to: "/industries/local-services" },
  { label: "EdTech", to: "/industries/edtech" },
  { label: "B2B Services", to: "/industries/b2b-services" },
];

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [openIndustries, setOpenIndustries] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef(null);
  const industriesRef = useRef(null);
  const mobileRef = useRef(null);
  const location = useLocation();

  // close menus on route change
  useEffect(() => {
    setOpenServices(false);
    setOpenIndustries(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useOutsideClose(servicesRef, () => setOpenServices(false));
  useOutsideClose(industriesRef, () => setOpenIndustries(false));
  useOutsideClose(mobileRef, () => setMobileOpen(false));

  const baseLink =
    "px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold";
  const activeClass = "bg-slate-100 text-slate-900";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="h-16 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
          {/* Logo -> Home */}
          <div className="shrink-0">
            <Logo size={40} />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-slate-800">
            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setOpenServices(true)}
              onMouseLeave={() => setOpenServices(false)}
              ref={servicesRef}
            >
              <button
                className={`${baseLink} flex items-center`}
                onClick={() => setOpenServices((v) => !v)}
              >
                Services <Caret open={openServices} />
              </button>
              {openServices && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-[320px] rounded-xl border border-slate-200 bg-white shadow-xl p-2 grid"
                >
                  {SERVICES.map((s) => (
                    <NavLink
                      key={s.to}
                      to={s.to}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100 ${
                          isActive ? activeClass : ""
                        }`
                      }
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Industries */}
            <div
              className="relative"
              onMouseEnter={() => setOpenIndustries(true)}
              onMouseLeave={() => setOpenIndustries(false)}
              ref={industriesRef}
            >
              <button
                className={`${baseLink} flex items-center`}
                onClick={() => setOpenIndustries((v) => !v)}
              >
                Industries <Caret open={openIndustries} />
              </button>
              {openIndustries && (
                <div
                  role="menu"
                  className="absolute left-0 mt-2 w-[300px] rounded-xl border border-slate-200 bg-white shadow-xl p-2 grid"
                >
                  {INDUSTRIES.map((i) => (
                    <NavLink
                      key={i.to}
                      to={i.to}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100 ${
                          isActive ? activeClass : ""
                        }`
                      }
                    >
                      {i.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/onboarding"
              className="hidden md:inline-flex rounded-xl px-4 py-2 font-semibold bg-black text-white hover:bg-slate-800 transition"
            >
              Get Started
            </Link>

            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-slate-800 hover:bg-slate-100"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div ref={mobileRef} className="md:hidden border-t border-slate-200 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
                <span className="font-semibold">Services</span>
                <span className="transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-2 pl-2">
                {SERVICES.map((s) => (
                  <Link key={s.to} to={s.to} className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
                <span className="font-semibold">Industries</span>
                <span className="transition group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-2 pl-2">
                {INDUSTRIES.map((i) => (
                  <Link key={i.to} to={i.to} className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
                    {i.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link to="/about" className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
              About
            </Link>

            <Link to="/onboarding" className="inline-flex mt-2 rounded-xl px-4 py-2 font-semibold bg-black text-white hover:bg-slate-800 transition">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
