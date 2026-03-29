import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Chapter = CollectionEntry<'chapters'>;

/**
 * Returns all published chapters sorted by order field.
 * Used by: Sidebar, print page, homepage chapter list.
 */
export async function getOrderedChapters(): Promise<Chapter[]> {
  const all = await getCollection('chapters', ({ data }) => data.published);
  return all.sort((a, b) => a.data.order - b.data.order);
}

/**
 * Returns a single chapter by its URL slug.
 * Strips leading numeric prefix (e.g. "04-" from "04-frontend-frameworks").
 */
export async function getChapterBySlug(slug: string): Promise<Chapter | undefined> {
  const all = await getCollection('chapters');
  return all.find((entry) => {
    const cleanSlug = entry.id.replace(/^\d+-/, '').replace(/\.md$/, '');
    return cleanSlug === slug;
  });
}

/**
 * Returns prev/next chapters relative to a given chapter order.
 */
export async function getAdjacentChapters(order: number): Promise<{
  prev: Chapter | null;
  next: Chapter | null;
}> {
  const chapters = await getOrderedChapters();
  const idx = chapters.findIndex((c) => c.data.order === order);
  return {
    prev: idx > 0 ? chapters[idx - 1] : null,
    next: idx < chapters.length - 1 ? chapters[idx + 1] : null,
  };
}

/**
 * Extracts a clean URL slug from a chapter entry ID.
 * e.g. "04-frontend-frameworks.md" → "frontend-frameworks"
 */
export function getChapterSlug(chapter: Chapter): string {
  return chapter.id.replace(/^\d+-/, '').replace(/\.md$/, '');
}
