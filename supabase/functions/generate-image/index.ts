import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { generateQuoteImage } from "../_shared/image.ts";
import { errorResponse, handleCors, jsonResponse } from "../_shared/responses.ts";

serve(async (req) => {
  const cors = handleCors(req);
  if (cors) return cors;

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  try {
    const { caption, key_quote, filename_prefix } = await req.json();
    const result = await generateQuoteImage({
      caption,
      keyQuote: key_quote,
      filenamePrefix: filename_prefix,
    });

    return jsonResponse({ image_url: result.imageUrl, template: result.template });
  } catch (error) {
    return errorResponse(error);
  }
});
