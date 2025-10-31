// src/components/Logo.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ size = 40, variant = "default" }) {
  const isDark = variant === "header-dark";
  const textClass = isDark ? "text-white" : "text-black";

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
      <span className={`font-extrabold text-xl tracking-tight ${textClass}`}>
        <span className="text-yellow-400">Go</span>
        DigitalPro
      </span>
    </Link>
  );
}
