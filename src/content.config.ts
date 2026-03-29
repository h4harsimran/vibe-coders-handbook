import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chapters' }),
  // Chapter frontmatter powers navigation, metadata, and the print build, so keep it strict.
  schema: z.object({
    order: z.number().int().min(0),
    chapterLabel: z.string(),
    title: z.string(),
    description: z.string().max(160),
    tools: z.array(z.string()).optional().default([]),
    published: z.boolean().default(true),
    draft: z.boolean().default(false),
    lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  }),
});

export const collections = { chapters };
