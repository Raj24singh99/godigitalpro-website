import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { Sparkles, LogIn } from "lucide-react";

export default function Login() {
  const { login, loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/app", { replace: true });
    }
  }, [user, navigate]);

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
      const target = location.state?.from?.pathname || "/app";
      navigate(target, { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      setLoading(true);
      await loginWithGoogle();
      const target = location.state?.from?.pathname || "/app";
      navigate(target, { replace: true });
    } catch (err) {
      setError(err?.message || "Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell text-slate-100">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/80 p-8 shadow-2xl shadow-blue-500/20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Platform Access
          </p>
          <h1 className="mt-3 text-3xl font-semibold app-title flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-blue-200" /> Login
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Securely access the Performance Budget Automation Engine.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="text-slate-300">Work email</span>
              <input
                type="email"
                id="login-email"
                name="email"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-300">Password</span>
              <input
                type="password"
                id="login-password"
                name="password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                required
              />
            </label>

            {error && (
              <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                <LogIn className="h-4 w-4" />
                {loading ? "Signing in..." : "Enter workspace"}
              </span>
            </button>
            <button
              type="button"
              onClick={handleGoogle}
              disabled={loading}
              className="w-full rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 disabled:opacity-60"
            >
              Continue with Google
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <Link to="/forgot-password" className="hover:text-emerald-200">
              Forgot password?
            </Link>
            <Link to="/signup" className="hover:text-emerald-200">
              Create account
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Secure auth powered by Firebase.
        </p>
      </div>
    </div>
  );
}
