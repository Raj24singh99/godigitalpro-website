import { getRuntimeEnv } from "./env.ts";
import { createServiceClient } from "./supabase.ts";

export async function uploadSvg({
  filename,
  svgContent,
}: {
  filename: string;
  svgContent: string;
}) {
  const env = getRuntimeEnv();
  const supabase = createServiceClient();
  const encoder = new TextEncoder();
  const fileData = encoder.encode(svgContent);

  const { error } = await supabase.storage
    .from(env.imageBucket)
    .upload(filename, fileData, {
      contentType: "image/svg+xml",
      upsert: true,
    });

  if (error) throw new Error(`Storage upload failed: ${error.message}`);

  const { data } = supabase.storage.from(env.imageBucket).getPublicUrl(filename);
  return data.publicUrl;
}
