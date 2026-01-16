import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { qualityGateCaption } from "../_shared/quality_gate.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { caption, required_vocab, allow_regen = true } = await req.json();
    if (!caption) {
      return jsonResponse({ error: "caption is required" }, 400);
    }

    const result = await qualityGateCaption({
      caption,
      requiredVocab: required_vocab || [],
      allowRegenerate: allow_regen,
    });

    const status = result.passed ? 200 : 422;
    return jsonResponse(result, status);
  } catch (error) {
    return errorResponse(error);
  }
});
