import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { getRuntimeEnv } from "./env.ts";

export function createAuthedClient(authHeader: string) {
  const env = getRuntimeEnv();
  return createClient(env.projectUrl, env.projectAnonKey, {
    global: {
      headers: {
        Authorization: authHeader,
      },
    },
  });
}

export function createServiceClient() {
  const env = getRuntimeEnv();
  return createClient(env.projectUrl, env.serviceRoleKey);
}
