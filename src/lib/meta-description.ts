// Search results show roughly 150-160 characters of a meta description
// (about half that for Chinese, whose characters are twice as wide), and
// cut the rest mid-word. Pages whose description falls back to a long body
// paragraph — mostly the translated product overviews — are trimmed here
// to a sentence or word boundary instead.
const SENTENCE_END = /[.!?。！？؟](?=\s|$)|[。！？]/g;

export function metaDescription(text: string, locale?: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  const max = locale === "zh" ? 80 : 160;
  if (clean.length <= max) return clean;

  const head = clean.slice(0, max);

  // Prefer ending on a full sentence if one closes past the halfway point.
  let sentenceEnd = -1;
  for (const match of head.matchAll(SENTENCE_END)) sentenceEnd = (match.index ?? 0) + match[0].length;
  if (sentenceEnd >= max * 0.5) return head.slice(0, sentenceEnd).trim();

  // Otherwise cut at the last word or clause break and add an ellipsis.
  const breakAt = Math.max(head.lastIndexOf(" "), head.lastIndexOf("，"), head.lastIndexOf("、"));
  const cut = breakAt >= max * 0.5 ? head.slice(0, breakAt) : head.slice(0, max - 1);
  return `${cut.replace(/[\s,;:，、—–-]+$/, "")}…`;
}
