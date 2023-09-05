import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    stageHeadline: z.string(),
    overline: z.string(),
    headline: z.string(),
    intro: z.string(),
    detail: z.string(),
  }),
});

export const collections = {
  about: aboutCollection,
};
