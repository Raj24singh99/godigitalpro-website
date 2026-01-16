import { createMediaContainer, publishMedia } from "./instagram.ts";

export async function publishToInstagram({
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
  const containerId = await createMediaContainer({
    instagramBusinessId,
    accessToken,
    caption,
    imageUrl,
  });

  const instagramPostId = await publishMedia({
    instagramBusinessId,
    accessToken,
    creationId: containerId,
  });

  return instagramPostId;
}
