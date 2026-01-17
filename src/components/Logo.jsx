// src/components/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ size = 40, variant = "default" }) {
  const isDark = variant === "header-dark";
  const baseTextClass = isDark ? "text-white" : "text-black";
  const digitalClass = isDark ? "text-yellow-300" : "text-yellow-400";

  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-90 transition"
      aria-label="GoDigitalPro Home"
    >
      <img
        src="/assets/godigitalpro-logo.jpg"
        width={size}
        height={size}
        alt="GoDigitalPro Logo"
        className="object-contain"
        loading="lazy"
      />
      <span className={`font-extrabold text-xl tracking-tight ${baseTextClass}`}>
        <span className={baseTextClass}>Go</span>
        <span className={digitalClass}>Digital</span>
        <span className={baseTextClass}>Pro</span>
      </span>
    </Link>
  );
}
