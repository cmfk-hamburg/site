import { defineCollection, z } from "astro:content";

const heroCollection = defineCollection({
	type: "content",
	schema: z.object({
		title1: z.string(),
        title2: z.string(),
        overline: z.string(),
        detail: z.string(),
        cta: z.string(),
	}),
});

export const collections = {
	hero: heroCollection,
};
