import React, { lazy } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { toolRoutes, comparisonRoutes } from "./generatedRoutes.jsx";

const ToolsHub = lazy(() => import("./ToolsHub.jsx"));
const ToolParamRouter = lazy(() => import("./ToolParamRouter.jsx"));
const ToolComparison = lazy(() => import("./ToolComparison.jsx"));

function TagLegacyRedirect() {
  const { tag } = useParams();
  const target = `/tools/${encodeURIComponent(tag || "")}`;
  return <Navigate to={target} replace />;
}

export default function ToolsRoutes() {
  const normalizePath = (path = "") => {
    if (path === "/tools") return "";
    if (path.startsWith("/tools/")) return path.replace("/tools/", "");
    return path;
  };

  return (
    <Routes>
      <Route index element={<ToolsHub />} />
      <Route path="tag/:tag" element={<TagLegacyRedirect />} />
      <Route path="compare/:slug" element={<ToolComparison />} />
      <Route path=":param" element={<ToolParamRouter />} />
      {toolRoutes.map((route) => (
        <Route key={route.path} path={normalizePath(route.path)} element={route.element} />
      ))}
      {comparisonRoutes.map((route) => (
        <Route key={route.path} path={normalizePath(route.path)} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/tools" replace />} />
    </Routes>
  );
}
