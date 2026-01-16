import React, { useEffect, useMemo, useState } from "react";
import AppShell from "../../../components/app/AppShell";
import { supabase } from "../../../config/supabase";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export default function AutomatedSocialMediaManager() {
  const defaultOutputFormat = useMemo(
    () => JSON.stringify({ caption: "", hashtags: [""], pinned_comment: "" }),
    []
  );
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [oauthBrandId, setOauthBrandId] = useState("");
  const [buckets, setBuckets] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [brandForm, setBrandForm] = useState({
    name: "",
    description: "",
    tone: "",
  });
  const [bucketForm, setBucketForm] = useState({
    name: "",
    description: "",
    postingDay: "",
    isActive: true,
  });
  const [templateForm, setTemplateForm] = useState({
    systemPrompt: "",
    rules: "",
    outputFormat: defaultOutputFormat,
    version: "v1",
  });
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const fetchBrands = async () => {
    setLoadingBrands(true);
    setError("");
    const { data, error: fetchError } = await supabase
      .from("brands")
      .select("id, brand_name, description, default_tone")
      .order("created_at", { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setBrands(data || []);
    }
    setLoadingBrands(false);
  };

  const fetchBrandDetails = async (brandId) => {
    if (!brandId) {
      setBuckets([]);
      setTemplates([]);
      return;
    }
    setLoadingDetails(true);
    const [{ data: bucketsData }, { data: templatesData }] = await Promise.all([
      supabase
        .from("content_buckets")
        .select("id, name, description, posting_day, is_active")
        .eq("brand_id", brandId)
        .order("created_at", { ascending: false }),
      supabase
        .from("prompt_templates")
        .select("id, version, system_prompt, rules, output_format, created_at")
        .eq("brand_id", brandId)
        .order("created_at", { ascending: false }),
    ]);
    setBuckets(bucketsData || []);
    setTemplates(templatesData || []);
    setLoadingDetails(false);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  useEffect(() => {
    fetchBrandDetails(selectedBrandId);
  }, [selectedBrandId]);

  useEffect(() => {
    if (!oauthBrandId && selectedBrandId) {
      setOauthBrandId(selectedBrandId);
    }
  }, [oauthBrandId, selectedBrandId]);

  const handleConnectInstagram = async () => {
    setError("");
    setStatus("");
    setConnecting(true);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData?.session?.access_token;
      if (!accessToken) {
        throw new Error("You must be logged in to connect Instagram.");
      }
      const { error: userError } = await supabase.auth.getUser();
      if (userError) {
        throw new Error("Session expired or invalid. Please log in again.");
      }

      const response = await fetch(`${SUPABASE_URL}/functions/v1/instagram-auth-start`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ brand_id: oauthBrandId || null }),
      });
      const rawText = await response.text();
      let payload = null;
      try {
        payload = rawText ? JSON.parse(rawText) : null;
      } catch {
        payload = null;
      }

      if (!response.ok || !payload?.auth_url) {
        const message =
          payload?.error ||
          rawText ||
          `Failed to start OAuth (status ${response.status}).`;
        if (String(message).toLowerCase().includes("invalid jwt")) {
          await supabase.auth.signOut();
          throw new Error("Session invalid. Please log in again.");
        }
        throw new Error(message);
      }

      window.location.href = payload.auth_url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "OAuth failed");
    } finally {
      setConnecting(false);
    }
  };

  const handleCreateBrand = async () => {
    if (!brandForm.name.trim()) {
      setError("Brand name is required.");
      return;
    }
    setError("");
    setStatus("");
    const { data, error: insertError } = await supabase
      .from("brands")
      .insert({
        brand_name: brandForm.name.trim(),
        description: brandForm.description.trim(),
        default_tone: brandForm.tone.trim(),
      })
      .select("id")
      .single();
    if (insertError || !data) {
      setError(insertError?.message || "Failed to create brand.");
      return;
    }
    setStatus("Brand created.");
    setBrandForm({ name: "", description: "", tone: "" });
    await fetchBrands();
    setSelectedBrandId(data.id);
    setOauthBrandId(data.id);
  };

  const handleCreateBucket = async () => {
    if (!selectedBrandId) {
      setError("Select a brand before adding buckets.");
      return;
    }
    if (!bucketForm.name.trim()) {
      setError("Bucket name is required.");
      return;
    }
    setError("");
    setStatus("");
    const postingDayValue =
      bucketForm.postingDay === "" ? null : Number(bucketForm.postingDay);
    const { error: insertError } = await supabase.from("content_buckets").insert({
      brand_id: selectedBrandId,
      name: bucketForm.name.trim(),
      description: bucketForm.description.trim(),
      posting_day: postingDayValue,
      is_active: bucketForm.isActive,
    });
    if (insertError) {
      setError(insertError.message);
      return;
    }
    setStatus("Bucket added.");
    setBucketForm({ name: "", description: "", postingDay: "", isActive: true });
    fetchBrandDetails(selectedBrandId);
  };

  const handleCreateTemplate = async () => {
    if (!selectedBrandId) {
      setError("Select a brand before adding templates.");
      return;
    }
    if (!templateForm.systemPrompt.trim()) {
      setError("System prompt is required.");
      return;
    }
    setError("");
    setStatus("");
    const { error: insertError } = await supabase.from("prompt_templates").insert({
      brand_id: selectedBrandId,
      system_prompt: templateForm.systemPrompt.trim(),
      rules: templateForm.rules.trim(),
      output_format: templateForm.outputFormat.trim(),
      version: templateForm.version.trim() || "v1",
    });
    if (insertError) {
      setError(insertError.message);
      return;
    }
    setStatus("Prompt template saved.");
    setTemplateForm({
      systemPrompt: "",
      rules: "",
      outputFormat: defaultOutputFormat,
      version: "v1",
    });
    fetchBrandDetails(selectedBrandId);
  };

  return (
    <AppShell
      title="Automated Social Media Manager"
      subtitle="Connect channels, schedule content, and ship posts automatically."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="text-sm text-slate-600">
          Step 1: Connect your Instagram Business account.
        </div>
        <div className="text-xs text-slate-500">
          Note: Instagram personal accounts cannot be connected. Users must have a Business or
          Creator account linked to a Facebook Page.
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={oauthBrandId}
            onChange={(event) => setOauthBrandId(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-72"
          >
            <option value="">Connect without brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.brand_name}
              </option>
            ))}
          </select>
          <button
            onClick={handleConnectInstagram}
            disabled={connecting}
            className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 disabled:opacity-60"
          >
            {connecting ? "Connecting..." : "Connect Instagram"}
          </button>
        </div>
        {error && <div className="text-sm text-rose-600">{error}</div>}
        {status && <div className="text-sm text-emerald-600">{status}</div>}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="text-sm text-slate-600">Step 2: Create or select a brand.</div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={selectedBrandId}
            onChange={(event) => setSelectedBrandId(event.target.value)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-72"
          >
            <option value="">Select brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.brand_name}
              </option>
            ))}
          </select>
          {loadingBrands && (
            <div className="text-xs text-slate-500">Loading brands…</div>
          )}
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <input
            value={brandForm.name}
            onChange={(event) =>
              setBrandForm((prev) => ({ ...prev, name: event.target.value }))
            }
            placeholder="Brand name"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <input
            value={brandForm.tone}
            onChange={(event) =>
              setBrandForm((prev) => ({ ...prev, tone: event.target.value }))
            }
            placeholder="Default tone (e.g., disciplined, direct)"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <input
            value={brandForm.description}
            onChange={(event) =>
              setBrandForm((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
            placeholder="Brand description"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
        </div>
        <button
          onClick={handleCreateBrand}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Save brand
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="text-sm text-slate-600">Step 3: Add content buckets.</div>
        <div className="grid gap-3 md:grid-cols-4">
          <input
            value={bucketForm.name}
            onChange={(event) =>
              setBucketForm((prev) => ({ ...prev, name: event.target.value }))
            }
            placeholder="Bucket name"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <input
            value={bucketForm.description}
            onChange={(event) =>
              setBucketForm((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
            placeholder="Bucket description"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <select
            value={bucketForm.postingDay}
            onChange={(event) =>
              setBucketForm((prev) => ({
                ...prev,
                postingDay: event.target.value,
              }))
            }
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          >
            <option value="">Any day</option>
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
          <select
            value={bucketForm.isActive ? "active" : "inactive"}
            onChange={(event) =>
              setBucketForm((prev) => ({
                ...prev,
                isActive: event.target.value === "active",
              }))
            }
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={handleCreateBucket}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Add bucket
        </button>
        {loadingDetails && (
          <div className="text-xs text-slate-500">Loading buckets…</div>
        )}
        {buckets.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2">
            {buckets.map((bucket) => (
              <div
                key={bucket.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
              >
                <div className="font-semibold">{bucket.name}</div>
                <div className="text-xs text-slate-500">
                  {bucket.description || "No description"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="text-sm text-slate-600">Step 4: Add prompt templates.</div>
        <div className="grid gap-3">
          <textarea
            value={templateForm.systemPrompt}
            onChange={(event) =>
              setTemplateForm((prev) => ({
                ...prev,
                systemPrompt: event.target.value,
              }))
            }
            placeholder="System prompt"
            className="min-h-[120px] rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <textarea
            value={templateForm.rules}
            onChange={(event) =>
              setTemplateForm((prev) => ({ ...prev, rules: event.target.value }))
            }
            placeholder="Rules (e.g., no emojis, no medical claims)"
            className="min-h-[80px] rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <textarea
            value={templateForm.outputFormat}
            onChange={(event) =>
              setTemplateForm((prev) => ({
                ...prev,
                outputFormat: event.target.value,
              }))
            }
            placeholder="Output JSON format"
            className="min-h-[80px] rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
          <input
            value={templateForm.version}
            onChange={(event) =>
              setTemplateForm((prev) => ({
                ...prev,
                version: event.target.value,
              }))
            }
            placeholder="Version (e.g., v1)"
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 shadow-sm"
          />
        </div>
        <button
          onClick={handleCreateTemplate}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Save template
        </button>
        {templates.length > 0 && (
          <div className="grid gap-3 md:grid-cols-2">
            {templates.map((template) => (
              <div
                key={template.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
              >
                <div className="font-semibold">{template.version}</div>
                <div className="text-xs text-slate-500">
                  {template.rules || "No rules"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
