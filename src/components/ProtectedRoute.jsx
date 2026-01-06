// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { user, initializing } = useAuth();
  const location = useLocation();

  // While we don't know, render nothing (or a pretty loader)
  if (initializing) {
    return (
      <div className="min-h-[50vh] grid place-items-center">
        <div className="animate-pulse text-sm text-slate-600">Checking your session…</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
}
