// src/pages/SignInPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, getOrCreateRecaptcha } from "../firebase";
import { ArrowLeft, ArrowRight, Mail, Phone } from "lucide-react";
import { useAuth } from "../context/AuthProvider";

const cx = (...c) => c.filter(Boolean).join(" ");

export default function SignInPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const redirectTo = location.state?.from?.pathname || "/dashboard";
  const [mode, setMode] = useState("email"); // 'email' | 'phone'
  const [isSignup, setIsSignup] = useState(false);

  // Email form
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  // Phone form
  const [phone, setPhone] = useState("+91");
  const [otp, setOtp] = useState("");
  const confirmationRef = useRef(null);

  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // If already authed, just go
  useEffect(() => {
    if (user) navigate(redirectTo, { replace: true });
  }, [user]); // eslint-disable-line

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (isSignup) {
        if (!name.trim()) throw new Error("Please enter your name.");
        await createUserWithEmailAndPassword(auth, email, pwd);
      } else {
        await signInWithEmailAndPassword(auth, email, pwd);
      }
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(humanizeFirebaseError(err));
    } finally {
      setBusy(false);
    }
  }

  async function sendOtp(e) {
    e?.preventDefault?.();
    setError("");
    setBusy(true);
    try {
      const verifier = getOrCreateRecaptcha("recaptcha-container");
      confirmationRef.current = await signInWithPhoneNumber(auth, phone, verifier);
    } catch (err) {
      setError(humanizeFirebaseError(err));
    } finally {
      setBusy(false);
    }
  }

  async function verifyOtp(e) {
    e?.preventDefault?.();
    setError("");
    setBusy(true);
    try {
      if (!confirmationRef.current) throw new Error("Please request an OTP first.");
      await confirmationRef.current.confirm(otp);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(humanizeFirebaseError(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-[80vh] bg-gradient-to-b from-primary/40 to-white">
      <div className="max-w-5xl mx-auto px-5 py-10 grid lg:grid-cols-2 gap-8">
        <div>
          <Link to="/" className="inline-flex items-center text-sm text-slate-600 hover:text-dark">
            <ArrowLeft size={16} className="mr-1" /> Back to Home
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark mt-3">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-slate-700">
            {isSignup
              ? "Sign up to access your dashboard and project updates."
              : "Sign in to continue where you left off."}
          </p>

          <div className="mt-6 inline-flex bg-slate-100 rounded-xl p-1" role="tablist" aria-label="Authentication method">
            <button
              role="tab"
              aria-selected={mode === "email"}
              className={cx("px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2", mode === "email" && "bg-white shadow")}
              onClick={() => setMode("email")}
            >
              <Mail size={16} /> Email & Password
            </button>
            <button
              role="tab"
              aria-selected={mode === "phone"}
              className={cx("px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2", mode === "phone" && "bg-white shadow")}
              onClick={() => setMode("phone")}
            >
              <Phone size={16} /> Phone OTP
            </button>
          </div>

          {mode === "email" ? (
            <form className="mt-6 space-y-4 max-w-md" onSubmit={handleEmailSubmit}>
              {isSignup && (
                <div>
                  <label className="text-sm font-medium">Full name</label>
                  <input
                    className="mt-1 w-full p-3 rounded-xl border"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
              )}
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  className="mt-1 w-full p-3 rounded-xl border"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Password</label>
                <input
                  className="mt-1 w-full p-3 rounded-xl border"
                  type="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Min 8 characters"
                  minLength={8}
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div className="pt-2 flex items-center gap-3">
                <button className="btn-primary" disabled={busy} type="submit">
                  {isSignup ? "Create account" : "Sign in"}{" "}
                  <ArrowRight size={16} className="inline -mt-0.5 ml-1" />
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl border"
                  onClick={() => setIsSignup((v) => !v)}
                >
                  {isSignup ? "Have an account? Sign in" : "New here? Create account"}
                </button>
              </div>
            </form>
          ) : (
            <form className="mt-6 space-y-4 max-w-md" onSubmit={verifyOtp}>
              <div>
                <label className="text-sm font-medium">Phone (with country code)</label>
                <input
                  className="mt-1 w-full p-3 rounded-xl border"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91XXXXXXXXXX"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-xl border" onClick={sendOtp} disabled={busy}>
                  Get OTP
                </button>
                <input
                  className="flex-1 p-3 rounded-xl border"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <div id="recaptcha-container" /> {/* invisible reCAPTCHA mounts here */}

              <div className="pt-2">
                <button className="btn-primary" disabled={busy} type="submit">
                  Verify & Continue <ArrowRight size={16} className="inline -mt-0.5 ml-1" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Side card */}
        <aside className="hidden lg:block">
          <div className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-dark">Why secure sign-in?</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>• Save your onboarding progress & preferences</li>
              <li>• Access your dashboard and tasks anytime</li>
              <li>• Get reports and support in one place</li>
            </ul>
            <img src="/signin-aside.jpg" alt="" className="mt-6 rounded-2xl object-cover w-full h-48" />
          </div>
        </aside>
      </div>
    </main>
  );
}

function humanizeFirebaseError(err) {
  const msg = err?.message || String(err);
  if (msg.includes("auth/invalid-email")) return "Please enter a valid email.";
  if (msg.includes("auth/missing-password")) return "Please enter your password.";
  if (msg.includes("auth/weak-password")) return "Password should be at least 6–8 characters.";
  if (msg.includes("auth/email-already-in-use")) return "That email is already registered. Try signing in.";
  if (msg.includes("auth/invalid-verification-code")) return "That OTP looks incorrect. Please try again.";
  if (msg.includes("auth/too-many-requests")) return "Too many attempts. Please wait a bit and try again.";
  return msg.replace("Firebase:", "").trim();
}
