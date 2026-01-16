import React from "react";
import SourceUploader from "./SourceUploader";

const REQUIRED_GROUPS = [
  { label: "Date", canonicalKey: "date", keys: ["date", "day"] },
  { label: "Campaign", canonicalKey: "campaign", keys: ["campaign", "campaign name"] },
  { label: "Spend", canonicalKey: "spend", keys: ["spend", "spent", "cost"] },
  { label: "Budget", canonicalKey: "budget", keys: ["budget", "daily budget"] },
  { label: "Bid strategy", canonicalKey: "bidStrategy", keys: ["bid strategy", "bid stratgy"] },
  { label: "TCPA", canonicalKey: "tcpa", keys: ["tcpa", "t cpa", "target cpa"] },
];

export default function GoogleCsvUploader({ onValid, onInvalid }) {
  return (
    <SourceUploader
      label="Google Ads CSV (optional)"
      requiredGroups={REQUIRED_GROUPS}
      onValid={onValid}
      onInvalid={onInvalid}
    />
  );
}
