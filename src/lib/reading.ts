const WORDS_PER_MINUTE = 220;

export function calculateReadingTime(text?: string): number {
  // Chapters are stored as markdown, so strip syntax that should not count toward reading time.
  const wordCount = (text ?? '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/[#>*_\-|]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
