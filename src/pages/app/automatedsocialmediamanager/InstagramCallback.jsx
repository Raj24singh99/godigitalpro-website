import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function InstagramCallback() {
  const query = useQuery();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState([]);
  const [stateValue, setStateValue] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const code = query.get("code");
    const state = query.get("state");
    const errorParam = query.get("error");
    const errorDescription = query.get("error_description");

    if (errorParam) {
      setError(`${errorParam}${errorDescription ? `: ${errorDescription}` : ""}`);
      setLoading(false);
      return;
    }

    if (!code || !state) {
      setError("Missing code or state from Instagram.");
      setLoading(false);
      return;
    }

    const run = async () => {
      try {
        const callbackUrl = `${SUPABASE_URL}/functions/v1/instagram-auth-callback?code=${encodeURIComponent(
          code
        )}&state=${encodeURIComponent(state)}`;

        const response = await fetch(callbackUrl, { method: "GET" });
        const data = await response.json();

        if (response.status === 409 && data?.requires_selection) {
          setPages(data.pages || []);
          setStateValue(data.state || state);
          setLoading(false);
          return;
        }

        if (!response.ok) {
          throw new Error(data?.error || "Instagram connection failed");
        }

        setSuccess(true);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Instagram connection failed");
        setLoading(false);
      }
    };

    run();
  }, [query]);

  const handleSelectPage = async (pageId) => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/instagram-auth-complete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ state: stateValue, page_id: pageId }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Failed to complete connection");
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to complete connection");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[70vh] bg-slate-50 text-slate-900 flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-4">
        <div className="text-xs uppercase tracking-[0.3em] text-slate-400">Instagram Connect</div>
        <h1 className="text-2xl font-semibold">Connecting your account</h1>

        {loading && (
          <div className="text-sm text-slate-600">Finalizing your Instagram connection…</div>
        )}

        {!loading && error && (
          <div className="text-sm text-rose-600">{error}</div>
        )}

        {!loading && success && (
          <div className="space-y-3">
            <div className="text-sm text-emerald-600">Instagram account connected.</div>
            <Link
              to="/dashboard/automated-social-media-manager"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Return to workspace
            </Link>
          </div>
        )}

        {!loading && !success && pages.length > 0 && (
          <div className="space-y-3">
            <div className="text-sm text-slate-600">Select the Facebook Page to connect:</div>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleSelectPage(page.id)}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {page.name} {page.instagram_username ? `(@${page.instagram_username})` : ""}
                </button>
              ))}
            </div>
          </div>
        )}

        {!loading && !success && !error && pages.length === 0 && (
          <div className="text-sm text-slate-600">Waiting for Instagram response…</div>
        )}
      </div>
    </main>
  );
}
