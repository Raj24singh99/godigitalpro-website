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
  { label: "Website & Funnel Development", to: "/services/website-development" },
  { label: "Social Media & Community", to: "/services/social-media-marketing" },
  { label: "Brand Positioning", to: "/services/brand-building" },
  { label: "Paid Media", to: "/services/paid-marketing" },
  { label: "Video & Ad Production", to: "/services/video-ad-production" },
  { label: "SEO & Content", to: "/services/seo-content" },
];

export default function Header() {
  const [openServices, setOpenServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const servicesRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();

  // close menus on route change
  useEffect(() => {
    setOpenServices(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useOutsideClose(servicesRef, () => setOpenServices(false));
  useOutsideClose(headerRef, () => setMobileOpen(false));

  const baseLink =
    "px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800 font-semibold";
  const activeClass = "bg-slate-100 text-slate-900";

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
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

            <NavLink
              to="/industries/edtech"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : ""}`
              }
            >
              EdTech
            </NavLink>

            {/* About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : ""}`
              }
              >
                Blog
              </NavLink>

            <NavLink
              to="/onboarding"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/onboarding"
              className="hidden md:inline-flex rounded-xl px-4 py-2 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Book Strategy Call
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
        <>
          <div
            className="fixed inset-0 bg-black/20 md:hidden"
            aria-hidden
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative md:hidden border-t border-slate-200 bg-white shadow-md">
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

            <Link to="/industries/edtech" className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
              EdTech
            </Link>

            <Link to="/about" className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
              About
            </Link>

            <Link to="/blog" className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
              Blog
            </Link>

            <Link to="/onboarding" className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100">
              Contact
            </Link>

            <Link to="/onboarding" className="inline-flex mt-2 rounded-xl px-4 py-2 font-semibold bg-slate-900 text-white hover:bg-slate-800 transition">
              Book Strategy Call
            </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
