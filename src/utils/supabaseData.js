import { supabase } from "../config/supabase";

export async function uploadCsvFile({ file, userId }) {
  if (!file || !userId) return null;
  const filePath = `${userId}/${Date.now()}-${file.name}`;
  const { error } = await supabase.storage
    .from("datasets")
    .upload(filePath, file, { upsert: false });
  if (error) throw error;

  const { data } = supabase.storage.from("datasets").getPublicUrl(filePath);
  return data?.publicUrl || null;
}

export async function createDatasetDoc({
  userId,
  fileName,
  fileUrl,
  focus,
  timeframe,
  seasonalityMultiplier,
  guardrails,
  campaignCount,
  rowCount,
  dateRange,
}) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("datasets")
    .insert([
      {
        user_id: userId,
        file_name: fileName,
        file_url: fileUrl,
        focus,
        timeframe,
        seasonality_multiplier: seasonalityMultiplier,
        guardrails,
        campaign_count: campaignCount,
        row_count: rowCount,
        date_range: dateRange,
      },
    ])
    .select("id")
    .single();

  if (error) throw error;
  return data;
}

export async function addRecommendations({ datasetId, recommendations }) {
  if (!datasetId || !recommendations?.length) return;
  const payload = recommendations.map((rec) => ({
    dataset_id: datasetId,
    campaign: rec.campaign,
    action: rec.action,
    adjustment_type: rec.adjustmentType,
    confidence_score: rec.confidenceScore,
    current_budget: rec.currentBudget,
    recommended_budget: rec.recommendedBudget,
    budget_delta: rec.budgetDelta,
    reason_summary: rec.reasonSummary,
    guardrails: rec.guardrails,
    bid_strategy: rec.bidStrategy,
    utilization: rec.utilization,
    stop_loss: rec.stopLoss,
  }));

  const { error } = await supabase.from("recommendations").insert(payload);
  if (error) throw error;
}
