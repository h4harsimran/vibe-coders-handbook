export interface TocHeading {
  depth: number;
  slug: string;
  text: string;
}

/**
 * Filters headings to only include h2 and h3 for the Table of Contents.
 * h1 is the chapter title (rendered from frontmatter), so it's excluded.
 */
export function filterTocHeadings(headings: TocHeading[]): TocHeading[] {
  return headings.filter((h) => h.depth === 2 || h.depth === 3);
}
