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
    <div className="app-shell text-slate-900">
      <div className="max-w-md mx-auto px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Recovery
          </p>
          <h1 className="mt-3 text-3xl font-semibold app-title flex items-center gap-2">
            <MailQuestion className="h-6 w-6 text-amber-500" /> Reset password
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            We will send a secure link to your work email.
          </p>

          {sent ? (
            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
              If the email exists, a reset link is on the way.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm">
                <span className="text-slate-700">Work email</span>
                <input
                  type="email"
                  id="forgot-email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-400"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Send reset link
              </button>
            </form>
          )}
          {error && (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
              {error}
            </div>
          )}

          <div className="mt-4 text-xs text-slate-500">
            <Link to="/login" className="hover:text-amber-700">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
