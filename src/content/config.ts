import { defineCollection, z } from "astro:content";

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    description: z.string(),
    sortOrder: z.number().default(999),
    images: z.array(z.string()).optional(),
    paragraphs: z.array(z.string()).optional(),
    prices: z.array(
      z.object({
        duration: z.string(),
        price: z.number(),
      })
    ).optional(),
  }),
});

export const collections = { services };
