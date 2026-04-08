// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Logo from "./Logo";

const EXTERNAL = {
  linkedin: "https://www.linkedin.com/company/godigitalpro",
  instagram: "https://www.instagram.com/godigitalpro.in/",
  youtube: "https://www.youtube.com/channel/UCIBYP9kKw86NfiO2oteG8Wg",
  facebook: "https://www.facebook.com/profile.php?id=61573650177453",
  email: "raj@godigitalpro.in",
  phoneHuman: "+91-9277338141",
  phoneTel: "919277338141",
  whatsapp:
    "https://wa.me/919277338141?text=Hi%20GoDigitalPro%20team!%20I%27d%20like%20a%20free%20audit.",
};

export default function Footer() {
  return (
    <footer className="mt-16 bg-white">
      {/* top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
          {/* Brand + blurb */}
          <div>
            <Logo />
            <p className="mt-3 text-sm text-slate-600">
              AI-led growth systems for EdTech brands across paid media, SEO,
              social, analytics, and enrollment-focused performance marketing.
            </p>

            {/* Contact chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${EXTERNAL.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-800 ring-1 ring-slate-200 hover:bg-slate-100"
              >
                <Mail size={16} />
                {EXTERNAL.email}
              </a>

              <a
                href={`tel:${EXTERNAL.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-800 ring-1 ring-slate-200 hover:bg-slate-100"
              >
                <Phone size={16} />
                {EXTERNAL.phoneHuman}
              </a>

              <a
                href={EXTERNAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary/90 px-3 py-2 text-sm font-medium text-slate-900 ring-1 ring-black/10 hover:opacity-90"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              <a
                href="https://share.google/cMhg0Uw3dpIxKwEYW"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 underline-offset-2 hover:underline"
              >
                606, DsMax Skycity, Thanisandra Road, Bengaluru 560064, Karnataka, India
              </a>
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={EXTERNAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100"
                title="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
              </a>
              <a
                href={EXTERNAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100"
                title="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
              </a>
              <a
                href={EXTERNAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100"
                title="YouTube"
              >
                <Youtube className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
              </a>
              <a
                href={EXTERNAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:bg-slate-100"
                title="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-700 group-hover:text-slate-900" />
              </a>
            </div>
          </div>

          {/* Column: Company */}
          <nav aria-label="Company" className="text-sm">
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <Link className="hover:text-slate-900" to="/about_us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/onboarding">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Column: Services */}
          <nav aria-label="Services" className="text-sm">
            <h4 className="font-semibold text-slate-900">Services</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <Link
                  className="hover:text-slate-900"
                  to="/services/website-development"
                >
                  Website & Funnel Development
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900"
                  to="/services/paid-marketing"
                >
                  Paid Media
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900"
                  to="/services/seo-content"
                >
                  SEO &amp; Content
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900"
                  to="/services/social-media-marketing"
                >
                  Social Media &amp; Community
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-slate-900"
                  to="/services/brand-building"
                >
                  Brand Positioning
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/video-ad-production">
                  Video &amp; Ad Production
                </Link>
              </li>
            </ul>

            {/* Primary CTA */}
            <Link
              to="/onboarding"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-2 font-medium text-slate-900 ring-1 ring-black/10 hover:opacity-90"
            >
              Get a Free Audit <ArrowUpRight size={16} />
            </Link>
          </nav>

          {/* Column: Focus */}
          <nav aria-label="Focus" className="text-sm">
            <h4 className="font-semibold text-slate-900">Focus</h4>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <Link className="hover:text-slate-900" to="/industries/edtech">
                  EdTech Marketing
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/paid-marketing">
                  Paid Media
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/seo-content">
                  SEO &amp; Content
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/social-media-marketing">
                  Social &amp; Community
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/video-ad-production">
                  Video &amp; Ad Production
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" to="/services/website-development">
                  Funnel Design
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex flex-col items-center justify-between gap-2 text-xs text-slate-600 md:flex-row">
          <div>
            © {new Date().getFullYear()} GoDigitalPro. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-slate-900" to="/privacy-policy">
              Privacy Policy
            </Link>
            <span className="text-slate-400">•</span>
            <a className="hover:text-slate-900" href={`mailto:${EXTERNAL.email}`}>
              {EXTERNAL.email}
            </a>
            <span className="text-slate-400">•</span>
            <a className="hover:text-slate-900" href={`tel:${EXTERNAL.phoneTel}`}>
              {EXTERNAL.phoneHuman}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
