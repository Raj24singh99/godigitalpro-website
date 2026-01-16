import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import {
  LayoutGrid,
  Sparkles,
  Database,
  LineChart,
  Layers,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Tools Hub", to: "/dashboard" },
];

const budgetAutomationItems = [
  { label: "Workspace", to: "/dashboard/budget-automation" },
  { label: "Saved Datasets", to: "/dashboard/datasets" },
];

const socialManagerItems = [
  { label: "Workspace", to: "/dashboard/automated-social-media-manager" },
];

export default function AppShell({ title, subtitle, children }) {
  const { logout } = useAuth();

  return (
    <div className="app-shell text-slate-900">
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="lg:w-64 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link to="/" className="text-lg font-semibold tracking-tight flex items-center gap-2 text-slate-900">
                <Sparkles className="h-5 w-5 text-amber-500" />
                GoDigitalPro App Suite
              </Link>
              <p className="mt-2 text-sm text-slate-600">
                Modular automation tools for growth, pipeline, and SOPs.
              </p>
            </div>

            <nav className="rounded-3xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-amber-100 text-amber-900"
                          : "text-slate-700 hover:bg-slate-100"
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">
                      <LayoutGrid className="h-4 w-4 text-amber-500" />
                      {item.label}
                    </span>
                  </NavLink>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-3">
                <div className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Budget Automation
                </div>
                <div className="mt-2 space-y-1">
                  {budgetAutomationItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
                          isActive
                            ? "bg-amber-100 text-amber-900"
                            : "text-slate-700 hover:bg-slate-100"
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        {item.label === "Workspace" ? (
                          <LineChart className="h-4 w-4 text-amber-500" />
                        ) : (
                          <Database className="h-4 w-4 text-amber-500" />
                        )}
                        {item.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-200 pt-3">
                <div className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Social Media Manager
                </div>
                <div className="mt-2 space-y-1">
                  {socialManagerItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
                          isActive
                            ? "bg-amber-100 text-amber-900"
                            : "text-slate-700 hover:bg-slate-100"
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-amber-500" />
                        {item.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
              <button
                onClick={logout}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Automation Suite
              </div>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 app-title">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
              )}
            </header>

            <section className="space-y-6">{children}</section>
          </main>
        </div>
      </div>
    </div>
  );
}
