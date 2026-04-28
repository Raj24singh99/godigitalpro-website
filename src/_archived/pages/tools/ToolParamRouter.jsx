import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ToolTag from "./ToolTag.jsx";
import ToolDetail from "./ToolDetail.jsx";
import { TAGS, TOOLS } from "../../data/tools.js";

const tagSet = new Set(TAGS.map((t) => t.toLowerCase()));
const toolSet = new Set(TOOLS.map((t) => t.slug.toLowerCase()));

export default function ToolParamRouter() {
  const { param } = useParams();
  const raw = decodeURIComponent(param || "");
  const normalized = raw.toLowerCase();

  if (tagSet.has(normalized)) {
    return <ToolTag tagOverride={raw} />;
  }

  if (toolSet.has(normalized)) {
    return <ToolDetail slugOverride={raw} />;
  }

  return <Navigate to="/tools" replace />;
}
