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
  return (
    <Routes>
      <Route path="/tools" element={<ToolsHub />} />
      <Route path="/tools/tag/:tag" element={<TagLegacyRedirect />} />
      <Route path="/tools/compare/:slug" element={<ToolComparison />} />
      <Route path="/tools/:param" element={<ToolParamRouter />} />
      {toolRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {comparisonRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/tools" replace />} />
    </Routes>
  );
}
