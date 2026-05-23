import { defineCollection, z } from 'astro:content';

const labs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['Active', 'Archived', 'Productized']),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stage: z.enum(['Idea', 'Incubation', 'Beta', 'Live']),
    summary: z.string(),
    cta: z.string(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { labs, products, pages };
