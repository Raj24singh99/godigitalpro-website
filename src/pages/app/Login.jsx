import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { Sparkles, LogIn } from "lucide-react";

export default function Login() {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getRedirectTarget = () => {
    const from = location.state?.from;
    if (!from) return "/dashboard";
    if (typeof from === "string") return from;
    const pathname = from.pathname || "/dashboard";
    const search = from.search || "";
    return `${pathname}${search}`;
  };

  useEffect(() => {
    if (user) {
      navigate(getRedirectTarget(), { replace: true });
    }
  }, [location.state, navigate, user]);

  useEffect(() => {
    if (window.location.hash?.includes("access_token")) {
      window.history.replaceState({}, document.title, "/login");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Enter your email and password.");
      return;
    }
    try {
      setLoading(true);
      await login(email, password);
      navigate(getRedirectTarget(), { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell text-slate-900">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Platform Access
          </p>
          <h1 className="mt-3 text-3xl font-semibold app-title flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-amber-500" /> Login
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Access your apps and learning workspace in one place.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="text-slate-700">Work email</span>
              <input
                type="email"
                id="login-email"
                name="email"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-700">Password</span>
              <input
                type="password"
                id="login-password"
                name="password"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                required
              />
            </label>

            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300 disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                <LogIn className="h-4 w-4" />
                {loading ? "Signing in..." : "Enter workspace"}
              </span>
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <Link to="/forgot-password" className="hover:text-amber-700">
              Forgot password?
            </Link>
            <Link to="/signup" className="hover:text-amber-700">
              Create account
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Secure auth powered by Supabase.
        </p>
      </div>
    </div>
  );
}
