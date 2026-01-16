import React, { useEffect, useState } from "react";
import AppShell from "../../../components/app/AppShell";
import { supabase } from "../../../config/supabase";
import { useAuth } from "../../../context/AuthProvider";
import { Database, CalendarClock, FileText } from "lucide-react";

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleString();
}

export default function SavedDatasets() {
  const { user } = useAuth();
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const fetchDatasets = async () => {
      if (!user?.uid) return;
      setLoading(true);
      setError("");
      const { data, error: fetchError } = await supabase
        .from("datasets")
        .select("*")
        .order("created_at", { ascending: false });
      if (!active) return;
      if (fetchError) {
        setError(fetchError.message || "Unable to load datasets.");
      } else {
        setDatasets(data || []);
      }
      setLoading(false);
    };
    fetchDatasets();
    return () => {
      active = false;
    };
  }, [user?.uid]);

  return (
    <AppShell
      title="Saved Datasets"
      subtitle="Review recent budget automation runs and exports."
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {loading && (
          <div className="text-sm text-slate-600">Loading datasets...</div>
        )}
        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700">
            {error}
          </div>
        )}
        {!loading && !error && datasets.length === 0 && (
          <div className="text-sm text-slate-600">
            No datasets saved yet. Run Budget Automation to create one.
          </div>
        )}
        {datasets.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="px-2 py-2 text-left">File</th>
                  <th className="px-2 py-2 text-left">Focus</th>
                  <th className="px-2 py-2 text-left">Timeframe</th>
                  <th className="px-2 py-2 text-left">Logic</th>
                  <th className="px-2 py-2 text-left">Variant</th>
                  <th className="px-2 py-2 text-left">Campaigns</th>
                  <th className="px-2 py-2 text-left">Rows</th>
                  <th className="px-2 py-2 text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                {datasets.map((dataset) => (
                  <tr key={dataset.id} className="border-t border-slate-200">
                    <td className="px-2 py-2 text-slate-800">
                      <span className="inline-flex items-center gap-2">
                        <FileText className="h-4 w-4 text-amber-600" />
                        {dataset.file_name || "Untitled CSV"}
                      </span>
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      <span className="inline-flex items-center gap-2">
                        <Database className="h-4 w-4 text-amber-600" />
                        {dataset.focus}
                      </span>
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      {dataset.timeframe} days
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        {dataset.logic_version || "—"}
                      </span>
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800">
                        {dataset.experiment_variant || "—"}
                      </span>
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      {dataset.campaign_count ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-slate-600">
                      {dataset.row_count ?? "—"}
                    </td>
                    <td className="px-2 py-2 text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarClock className="h-4 w-4 text-amber-600" />
                        {formatDate(dataset.created_at)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppShell>
  );
}
