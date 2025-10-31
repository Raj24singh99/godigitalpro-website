// app/frontend/src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <main className="max-w-xl mx-auto px-5 py-16 text-center">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-dark">Thanks! 🎉</h1>
      <p className="mt-2 text-slate-700">
        We’ve received your request. Our team will reach out shortly.
      </p>
      <div className="mt-6">
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </main>
  );
}
