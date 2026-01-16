import { chatCompletion } from "./openai.ts";
import { createServiceClient } from "./supabase.ts";

const DEFAULT_SYSTEM_PROMPT =
  "You are a concise Instagram copywriter. Follow brand rules strictly.";

function parseOutput(content: string) {
  try {
    return JSON.parse(content);
  } catch (_error) {
    throw new Error("Failed to parse OpenAI output as JSON.");
  }
}

async function retry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  let lastError: Error | null = null;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("Unknown error");
      if (attempt >= retries) break;
    }
  }
  throw lastError ?? new Error("OpenAI retry failed");
}

export async function generateCaption({
  brandId,
  bucketId,
  forceRules,
}: {
  brandId: string;
  bucketId: string;
  forceRules?: string;
}) {
  const supabase = createServiceClient();
  const { data: brand, error: brandError } = await supabase
    .from("brands")
    .select("id, brand_name, description, default_tone")
    .eq("id", brandId)
    .single();

  if (brandError || !brand) {
    throw new Error(brandError?.message || "Brand not found");
  }

  const { data: bucket, error: bucketError } = await supabase
    .from("content_buckets")
    .select("id, name, description")
    .eq("id", bucketId)
    .single();

  if (bucketError || !bucket) {
    throw new Error(bucketError?.message || "Bucket not found");
  }

  const { data: promptTemplate } = await supabase
    .from("prompt_templates")
    .select("system_prompt, rules, output_format, version")
    .eq("brand_id", brandId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const systemPrompt = promptTemplate?.system_prompt || DEFAULT_SYSTEM_PROMPT;
  const rules = promptTemplate?.rules || forceRules || "";
  const outputFormat =
    promptTemplate?.output_format ||
    JSON.stringify({
      caption: "",
      hashtags: [""],
      pinned_comment: "",
    });

  const userPrompt = `Brand: ${brand.brand_name}
Description: ${brand.description || ""}
Tone: ${brand.default_tone || ""}
Bucket: ${bucket.name}
Bucket notes: ${bucket.description || ""}
Rules: ${rules}
Output strictly as JSON matching: ${outputFormat}
Constraints: No emojis. Avoid motivational cliches. No medical claims. 1 short paragraph max. Add 5-8 hashtags.`;

  const content = await retry(() =>
    chatCompletion([
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ])
  );

  const parsed = parseOutput(content);

  return {
    caption: parsed.caption || "",
    hashtags: parsed.hashtags || [],
    pinned_comment: parsed.pinned_comment || null,
  };
}
