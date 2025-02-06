import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "laihzzfy",  // Replace with your actual Sanity project ID
  dataset: "production",
  apiVersion: "2024-01-30",
  useCdn: true,
  token:"sk2FGVhhU1nTO0gBUfFHPzdq8quuQcy0K7N4CY4FAGYwcOYWyvZKHaslDd6CXVLJ9qL5mTMTJ0JaKyojVPFrbtnvcnThM6j7qjJgb7BbjZvTaq0h2X5kb7HHsK6jRyUb5VxAZ4GCgCWwQSzrlNPf9jpki8SZr8SC3x9lhEDwOMh9TFuktbIr"
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
