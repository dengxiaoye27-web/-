# Blog Publishing Workflow

A repeatable process for publishing new articles to the Resources/Blog section of wandtung.com. Follow this whenever you want Claude to draft and ship a new blog post.

## How to trigger it

Each week, start a new message with something like:

> 按 BLOG_WORKFLOW.md 里的流程，帮我写一篇博客。主题是：<主题>。产品要点/参数如下：<口述或列点>

Claude will read this file for the steps below — you don't need to repeat the full process, just the topic and the real product details for that article.

## The 5 steps

### 1. You provide

- One article topic.
- The real product parameters, specs, certifications, or other facts the article needs — as bullet points or spoken/pasted notes.

### 2. Claude drafts

Claude writes an English draft to the spec below, then **stops** (see Step 3 — this is not optional).

- **Length**: 800–1200 words, clear H1/H2 structure.
- **SEO front matter**: an HTML comment block at the top of the draft with:
  - Title tag (≤ 60 characters)
  - Meta description (≤ 155 characters)
  - URL slug
  - Target keyword(s)
- **FAQ section** at the end: 3–4 long-tail questions with answers.
- **CTA links** at the end: internal links to the relevant product page(s) and `/contact`.
- **Factual accuracy**: only the parameters/facts you provided are used. Any spec, rating, certification status, PUE figure, project reference, etc. that you didn't supply is written as `[待填]` (to-fill) rather than invented. No exceptions.

### 3. You review — mandatory stop

Claude hands you the draft and **stops**. It will not publish, create a branch, or touch the repo until you explicitly say the draft is approved (with or without edits). This step cannot be skipped by Claude under any circumstance, including if you ask for the whole workflow to run "end to end" — the pause is a hard gate.

### 4. Claude publishes (after your approval)

Once you confirm:

1. Create (or reuse) a branch named `content-<slug>` off `origin/claude/claude-md-docs-81a9sj` — **not** off `image-cleanup` or any image-work branch.
2. Add the article to `src/data/articles.ts`, following the existing `Article` shape (see `src/data/types.ts`):
   - `slug` — from the SEO front matter
   - `title` — the on-page H1 (can differ slightly from the SEO title tag)
   - `metaTitle` — the SEO title tag, rendered via Next's `title: { absolute }` so it doesn't get the site's global "`%s | Wandtung`" suffix appended twice
   - `excerpt` — the meta description
   - `category`, `publishedAt`, `readingTime`
   - `body` — array of `{ heading, content }` sections (H2 sections as flowing prose paragraphs; the template has no markdown/rich-text renderer, so bold/bullets from the draft get flattened into prose, matching every existing article)
   - `ctaLinks` — `{ label, href }[]`, rendered as buttons between the body and FAQ
   - `faqs` — `{ question, answer }[]`
3. The SEO metadata renders into the page's `<title>`/`<meta description>`/canonical URL via `generateMetadata` in `src/app/[locale]/resources/blog/[slug]/page.tsx` — it does not appear in the visible body copy.
4. **No manual sitemap edit needed.** `src/app/sitemap.ts` builds `/sitemap.xml` dynamically from the `articles` array at build time, so a new entry in `src/data/articles.ts` is enough.
5. Commit with a clear message naming the article title, push the branch, and open a PR against `claude/claude-md-docs-81a9sj` (with a build/lint/tsc check beforehand, per this repo's normal PR process).
6. Claude will **not** merge the PR itself — that step is yours (see Step 5a). This matches how every other change in this repo has shipped: branch → PR → your explicit "合并" → squash merge.

Note: the new article's non-English translations (`src/i18n/content/articles.ts`) are not part of this workflow — it will fall back to English content on `/ar`, `/fr`, `/es`, `/ru`, `/zh` until translated separately, same as any other untranslated article.

### 5. After publishing, Claude reminds you to

- **a)** Merge the PR / branch into `claude/claude-md-docs-81a9sj` on GitHub (this is also what triggers the production server's next `git pull` deploy).
- **b)** Go to Google Search Console → URL Inspection → request indexing for the new article's URL.

## Safety rules (non-negotiable)

- Step 3 (your review) is a hard stop. Claude never publishes a draft you haven't approved, no matter how the request is phrased.
- No invented product parameters, certification status, project case studies, or customer names. Anything not supplied by you is marked `[待填]`.
- No inflated claims — e.g. never turn "target market" into "delivered project," never claim a certification that hasn't been confirmed as held.
