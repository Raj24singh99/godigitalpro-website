// src/components/CTA.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable CTA component that works for:
 * - Internal routes (use `to`)
 * - External links / WhatsApp / Phone (use `href`)
 * - Auto analytics via data-gtm (e.g., "cta-onboarding", "cta-hero", etc.)
 *
 * Props:
 *  - to?: string            // internal route, e.g. "/onboarding"
 *  - href?: string          // external link, e.g. "https://wa.me/91..."
 *  - children: ReactNode    // button text / content
 *  - eventKey?: string      // sets data-gtm, e.g. "cta-onboarding"
 *  - variant?: "primary" | "secondary" | "ghost"
 *  - size?: "sm" | "md" | "lg"
 *  - className?: string     // extra classes
 *  - newTab?: boolean       // open external in new tab
 */
export default function CTA({
  to,
  href,
  children,
  eventKey = "",
  variant = "primary",
  size = "md",
  className = "",
  newTab = false,
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary:
      "bg-black text-white hover:bg-black/90 focus:ring-black",
    secondary:
      "bg-white text-black border border-black hover:bg-black/5 focus:ring-black",
    ghost:
      "bg-transparent text-black hover:bg-black/5 focus:ring-black",
  };
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5",
    lg: "px-5 py-3 text-lg",
  };
  const cls = [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");

  const dataProps = eventKey ? { "data-gtm": eventKey } : {};

  // External link (including tel: and wa.me)
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...dataProps}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Internal route
  return (
    <Link to={to || "#"} className={cls} {...dataProps} {...rest}>
      {children}
    </Link>
  );
}
