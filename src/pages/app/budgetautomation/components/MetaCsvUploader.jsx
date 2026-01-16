import React from "react";
import SourceUploader from "./SourceUploader";

const REQUIRED_GROUPS = [
  { label: "Date", canonicalKey: "date", keys: ["date", "day"] },
  {
    label: "Campaign/Ad set",
    canonicalKey: "campaign",
    keys: ["campaign/ad set", "ad set", "ad set name", "campaign", "campaign name"],
  },
  { label: "Spend", canonicalKey: "spend", keys: ["spend", "spent", "cost"] },
  { label: "Impressions", canonicalKey: "impressions", keys: ["impressions", "impression", "imp"] },
  { label: "Clicks", canonicalKey: "clicks", keys: ["clicks", "click"] },
];

export default function MetaCsvUploader({ onValid, onInvalid }) {
  return (
    <SourceUploader
      label="Meta Ads CSV (optional)"
      requiredGroups={REQUIRED_GROUPS}
      onValid={onValid}
      onInvalid={onInvalid}
    />
  );
}
