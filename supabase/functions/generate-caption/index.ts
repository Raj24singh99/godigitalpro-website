import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { generateCaption } from "../_shared/caption.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { brand_id, bucket_id, force_rules } = await req.json();
    if (!brand_id || !bucket_id) {
      return jsonResponse({ error: "brand_id and bucket_id are required" }, 400);
    }

    const result = await generateCaption({
      brandId: brand_id,
      bucketId: bucket_id,
      forceRules: force_rules,
    });

    return jsonResponse(result);
  } catch (error) {
    return errorResponse(error);
  }
});
