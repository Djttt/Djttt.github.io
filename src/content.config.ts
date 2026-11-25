import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    role: z.string().default('核心开发'),
    period: z.string(),
    order: z.number().default(99),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    links: z
      .object({
        repo: z.string().url().optional(),
        paper: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const collections = { projects };
