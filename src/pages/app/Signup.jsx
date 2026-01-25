import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { createUserProfile } from "../../utils/supabaseProfiles";
import { Sparkles, UserPlus } from "lucide-react";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!email || !password || !company) {
      setError("Complete all fields to continue.");
      return;
    }
    try {
      setLoading(true);
      const user = await signup(email, password, { company });
      if (user?.id) {
        await createUserProfile({
          userId: user.id,
          email,
          company,
        });
        navigate("/dashboard", { replace: true });
      } else {
        setInfo("Check your email to confirm your account, then log in.");
      }
    } catch (err) {
      setError(err?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-shell text-slate-900">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Start Now
          </p>
          <h1 className="mt-3 text-3xl font-semibold app-title flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-amber-500" /> Create account
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Spin up your automation workspace in minutes.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="text-slate-700">Company</span>
              <input
                type="text"
                id="signup-company"
                name="company"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Acme Education"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="text-slate-700">Work email</span>
              <input
                type="email"
                id="signup-email"
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
                id="signup-password"
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
            {info && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                {info}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300 disabled:opacity-60"
            >
              <span className="flex items-center justify-center gap-2">
                <UserPlus className="h-4 w-4" />
                {loading ? "Creating..." : "Create workspace"}
              </span>
            </button>
          </form>

          <div className="mt-4 text-xs text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-700 hover:text-amber-600">
              Login
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
