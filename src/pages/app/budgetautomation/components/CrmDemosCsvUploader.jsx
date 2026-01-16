import React from "react";
import SourceUploader from "./SourceUploader";

const REQUIRED_GROUPS = [
  { label: "Date", canonicalKey: "date", keys: ["date", "day", "created at", "created"] },
  { label: "Campaign/Ad set", canonicalKey: "campaign", keys: ["campaign", "campaign name", "ad set", "ad set name"] },
];

export default function CrmDemosCsvUploader({ onValid, onInvalid }) {
  return (
    <SourceUploader
      label="CRM Demo CSV (optional)"
      requiredGroups={REQUIRED_GROUPS}
      onValid={onValid}
      onInvalid={onInvalid}
    />
  );
}
