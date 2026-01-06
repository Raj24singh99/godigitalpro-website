import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../config/supabase";
import { MailQuestion } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        email,
        { redirectTo: `${window.location.origin}/login` }
      );
      if (resetError) throw resetError;
      setSent(true);
    } catch (err) {
      setError(err?.message || "Unable to send reset email.");
    }
  };

  return (
    <div className="app-shell text-slate-100">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/80 p-8 shadow-2xl shadow-blue-500/20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Recovery
          </p>
          <h1 className="mt-3 text-3xl font-semibold app-title flex items-center gap-2">
            <MailQuestion className="h-6 w-6 text-blue-200" /> Reset password
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            We will send a secure link to your work email.
          </p>

          {sent ? (
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-4 text-sm text-emerald-200">
              If the email exists, a reset link is on the way.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm">
                <span className="text-slate-300">Work email</span>
                <input
                  type="email"
                  id="forgot-email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Send reset link
              </button>
            </form>
          )}
          {error && (
            <div className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
              {error}
            </div>
          )}

          <div className="mt-4 text-xs text-slate-400">
            <Link to="/login" className="hover:text-emerald-200">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
