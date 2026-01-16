import { getRuntimeEnv } from "./env.ts";

type GraphResult = {
  id?: string;
  error?: { message?: string };
};

async function graphRequest(
  path: string,
  accessToken: string,
  params: Record<string, string>
) {
  const env = getRuntimeEnv();
  const url = new URL(`${env.instagramGraphBaseUrl}${path}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  url.searchParams.set("access_token", accessToken);

  const response = await fetch(url.toString(), { method: "POST" });
  const data = (await response.json()) as GraphResult;
  if (!response.ok || data?.error) {
    const message = data?.error?.message || response.statusText;
    throw new Error(`Instagram API error: ${message}`);
  }
  return data;
}

export async function createMediaContainer({
  instagramBusinessId,
  accessToken,
  caption,
  imageUrl,
}: {
  instagramBusinessId: string;
  accessToken: string;
  caption: string;
  imageUrl: string;
}) {
  const data = await graphRequest(`/${instagramBusinessId}/media`, accessToken, {
    image_url: imageUrl,
    caption,
  });
  if (!data.id) throw new Error("Missing media container id");
  return data.id;
}

export async function publishMedia({
  instagramBusinessId,
  accessToken,
  creationId,
}: {
  instagramBusinessId: string;
  accessToken: string;
  creationId: string;
}) {
  const data = await graphRequest(
    `/${instagramBusinessId}/media_publish`,
    accessToken,
    { creation_id: creationId }
  );
  if (!data.id) throw new Error("Missing instagram post id");
  return data.id;
}
