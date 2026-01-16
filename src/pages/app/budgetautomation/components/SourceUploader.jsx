import React, { useMemo, useState } from "react";
import { parseCsv } from "../utils/csv";

function buildHeaderMap(headers = []) {
  return headers.reduce((acc, header) => {
    acc[String(header).trim().toLowerCase()] = header;
    return acc;
  }, {});
}

function findHeader(headerMap, keys = []) {
  for (const key of keys) {
    if (headerMap[key]) return headerMap[key];
  }
  return "";
}

export default function SourceUploader({
  label,
  requiredGroups = [],
  onValid,
  onInvalid,
}) {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [mapping, setMapping] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  const requiredLabels = useMemo(
    () => requiredGroups.map((group) => group.label),
    [requiredGroups]
  );

  const finalizeSelection = (nextMapping, nextRows) => {
    const missing = nextMapping.filter((item) => !item.match);
    if (missing.length) {
      const missingList = missing.map((item) => item.label).join(", ");
      setError(`Missing required fields: ${missingList}`);
      onInvalid?.();
      return;
    }
    setError("");
    const normalizedRows = nextRows.map((row) => {
      const withCanonical = { ...row };
      nextMapping.forEach((item) => {
        if (item.canonicalKey && item.match) {
          withCanonical[item.canonicalKey] = row[item.match];
        }
      });
      return withCanonical;
    });
    onValid?.(normalizedRows, fileName);
  };

  const handleMappingChange = (index, value) => {
    setMapping((prev) => {
      const next = prev.map((item, idx) =>
        idx === index ? { ...item, match: value } : item
      );
      finalizeSelection(next, rows);
      return next;
    });
  };

  const handleChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const parsed = parseCsv(text);
    const headerMap = buildHeaderMap(parsed.headers || []);
    const derived = requiredGroups.map((group) => ({
      label: group.label,
      canonicalKey: group.canonicalKey,
      match: findHeader(headerMap, group.keys),
    }));
    setMapping(derived);
    setHeaders(parsed.headers || []);
    setRows(parsed.rows || []);
    setFileName(file.name);
    finalizeSelection(derived, parsed.rows || []);
  };

  return (
    <label className="text-sm font-semibold text-slate-800">
      {label}
      <input
        type="file"
        accept=".csv"
        onChange={handleChange}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900"
      />
      {fileName && (
        <div className="mt-1 text-xs text-slate-500">Loaded: {fileName}</div>
      )}
      {error && (
        <div className="mt-1 text-xs text-rose-600">{error}</div>
      )}
      {mapping.length > 0 && (
        <div className="mt-2 space-y-2 text-xs text-slate-600">
          <div className="text-slate-500">Field mapping</div>
          {mapping.map((item, index) => (
            <label key={item.label} className="flex items-center justify-between gap-3">
              <span className="text-slate-700">{item.label}</span>
              <select
                value={item.match || ""}
                onChange={(event) => handleMappingChange(index, event.target.value)}
                className="min-w-[180px] rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs text-slate-900"
              >
                <option value="">Select column</option>
                {headers.map((header) => (
                  <option key={header} value={header}>
                    {header}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      )}
      {requiredLabels.length > 0 && !mapping.length && (
        <div className="mt-2 text-xs text-slate-500">
          Required fields: {requiredLabels.join(", ")}
        </div>
      )}
    </label>
  );
}
