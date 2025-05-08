import { defineCollection, z } from "astro:content";

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    sortOrder: z.number().default(999),
  }),
});

export const collections = { services };
