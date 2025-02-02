import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "laihzzfy",  // Replace with your actual Sanity project ID
  dataset: "production",
  apiVersion: "2024-01-30",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
