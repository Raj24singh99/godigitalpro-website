export function getEnv(key: string, fallback = ""): string {
  const value = Deno.env.get(key);
  if (value && value.length > 0) return value;
  return fallback;
}

export function requireEnv(key: string): string {
  const value = Deno.env.get(key);
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
}

export function getRuntimeEnv() {
  return {
    projectUrl: requireEnv("PROJECT_URL"),
    projectAnonKey: requireEnv("PROJECT_ANON_KEY"),
    serviceRoleKey: requireEnv("SERVICE_ROLE_KEY"),
    openaiApiKey: getEnv("OPENAI_API_KEY"),
    openaiModel: getEnv("OPENAI_MODEL", "gpt-4o-mini"),
    instagramGraphBaseUrl: getEnv(
      "INSTAGRAM_GRAPH_BASE_URL",
      "https://graph.facebook.com/v19.0"
    ),
    instagramRedirectUri: getEnv("INSTAGRAM_REDIRECT_URI"),
    instagramAppId: getEnv("INSTAGRAM_APP_ID"),
    instagramAppSecret: getEnv("INSTAGRAM_APP_SECRET"),
    imageBucket: getEnv("SOCIAL_IMAGE_BUCKET", "social-images"),
  };
}
