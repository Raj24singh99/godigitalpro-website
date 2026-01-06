import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import {
  LayoutGrid,
  Sparkles,
  Database,
  LineChart,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Tools Hub", to: "/app" },
];

const budgetAutomationItems = [
  { label: "Workspace", to: "/app/budget-automation" },
  { label: "Saved Datasets", to: "/app/datasets" },
];

export default function AppShell({ title, subtitle, children }) {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell text-slate-100 relative overflow-hidden">
      <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl app-orb" />
      <div className="absolute top-40 -right-16 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl app-orb" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl app-orb" />

      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="lg:w-64 space-y-6">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-5 shadow-xl shadow-blue-500/10">
              <Link to="/" className="text-lg font-semibold tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-300" />
                Performance Budget Automation Engine
              </Link>
              <p className="mt-2 text-sm text-slate-400">
                Lead-gen budget intelligence for long-cycle funnels.
              </p>
            </div>

            <nav className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-4 space-y-2">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-blue-500/20 text-blue-100"
                          : "text-slate-300 hover:bg-slate-800/80"
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">
                      <LayoutGrid className="h-4 w-4 text-blue-200" />
                      {item.label}
                    </span>
                  </NavLink>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-3">
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
                            ? "bg-emerald-500/20 text-emerald-200"
                            : "text-slate-300 hover:bg-slate-800/80"
                        }`
                      }
                    >
                      <span className="flex items-center gap-2">
                        {item.label === "Workspace" ? (
                          <LineChart className="h-4 w-4 text-emerald-200" />
                        ) : (
                          <Database className="h-4 w-4 text-emerald-200" />
                        )}
                        {item.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/70 p-4 text-sm text-slate-300">
              <div className="font-semibold text-slate-200">Active user</div>
              <div className="mt-1 text-slate-400">{user?.email}</div>
              <button
                onClick={logout}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800/80"
              >
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>
          </aside>

          <main className="flex-1 space-y-6">
            <header className="rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-6 shadow-2xl shadow-blue-500/10">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Automation Suite
              </div>
              <h1 className="mt-2 text-3xl font-semibold text-white app-title">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
              )}
            </header>

            <section className="space-y-6">{children}</section>
          </main>
        </div>
      </div>
    </div>
  );
}
