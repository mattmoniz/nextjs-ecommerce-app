import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = sanityClient({
  projectId: "wr4tufqo",
  dataset: "production",
  apiVersion: "2023-04-28",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
