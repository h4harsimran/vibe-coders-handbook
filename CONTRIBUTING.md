# Contributing Guide — The Vibe Coder's Handbook

> This file also lives in the repo root as `CONTRIBUTING.md`.

---

## Welcome

This handbook exists because learning the JavaScript ecosystem shouldn't be confusing. If you've figured something out that isn't in the book, or spotted something that's wrong or outdated — **we want your contribution**.

You don't need to be a developer. You just need to know Markdown.

---

This handbook is based on the [original Vibe Coder's Handbook repository](https://github.com/nasserDev/vibe-coders-handbook) by **[Nasser AlNasser](https://github.com/nasserDev)**. It was written with the help of Claude by Anthropic.

This community edition is maintained at [h4harsimran/vibe-coders-handbook](https://github.com/h4harsimran/vibe-coders-handbook).

---

## What You Can Contribute

| Type | How |
|---|---|
| Fix a typo or grammar error | Edit the relevant `.md` file |
| Improve an explanation | Edit the relevant `.md` file |
| Add an analogy or example | Edit the relevant `.md` file |
| Correct outdated information | Edit the relevant `.md` file |
| Add a new chapter or section | Create a new `.md` file or add `##` sections |
| Report a problem without fixing it | Open an Issue |

---

## Where the Content Lives

All content is in:
```
src/content/chapters/
```

Each file is one chapter. The filename determines the URL:
- `04-frontend-frameworks.md` → `vibecodershandbook.pages.dev/chapters/frontend-frameworks`

---

## How to Contribute

### Option 1: Edit Directly on GitHub (Easiest — No Setup)

1. Find the chapter file you want to edit in `src/content/chapters/`.
2. Click the **pencil icon** (Edit this file) in the top-right corner.
3. Make your changes in the GitHub editor.
4. Scroll down to "Commit changes".
5. Select **"Create a new branch for this commit and start a pull request"**.
6. Click "Propose changes".
7. Fill in what you changed and why, then click "Create pull request".

That's it. A maintainer will review and merge it. Once merged, your GitHub avatar will automatically appear on the Contributors page!

---

### Option 2: Fork and Edit Locally (For Larger Contributions)

#### Prerequisites
- [Node.js](https://nodejs.org/) v22 or higher
- Git

#### Steps

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/vibe-coders-handbook.git
cd vibe-coders-handbook

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# Open http://localhost:4321 in your browser

# 4. Make your changes in src/content/chapters/

# 5. Validate your changes
npm run check
# This checks Astro, TypeScript, and frontmatter schema.

# 6. If you changed the site shell, search, or print output, run the full release build
npm run build
# This generates the static site, the PDF, and the Pagefind search index.

# 7. Commit and push
git add .
git commit -m "fix: correct description of React hooks in chapter 4"
git push origin my-branch-name

# 8. Open a Pull Request on GitHub
```

---

## Writing Guidelines

### Required Frontmatter

Every chapter file must start with this frontmatter block:

```markdown
---
order: 4
chapterLabel: "Chapter 4"
title: "Your Chapter Title"
description: "One sentence describing what this chapter covers. Max 160 characters."
tools: ["Tool1", "Tool2"]
published: true
draft: false
lastUpdated: "2026-03-01"
---
```

All fields are required except `tools` and `lastUpdated`.

If you're submitting a draft (work in progress), set `draft: true` — it will show a "DRAFT" badge in the sidebar.

### Heading Rules

- **Never use `#`** — the chapter title comes from frontmatter.
- Use `##` for main sections.
- Use `###` for subsections within those sections.
- Don't skip levels (no jumping from `##` to `####`).

```markdown
## The Main Problem

### Why It Matters

### The Common Mistake
```

### Plain Language Rules

This book is for non-developers. Write like you're explaining to a smart friend who isn't a programmer.

✅ **Good**: "React is a JavaScript library that makes it easier to build the visual parts of a website."

❌ **Avoid**: "React is a declarative, component-based UI library leveraging a virtual DOM diffing algorithm."

### Analogies

We love analogies. If you can explain a concept using a restaurant, a car, a building, or everyday life — do it.

Mark analogy sections clearly:
```markdown
---

> 🍳 **The Restaurant Analogy**
>
> Think of React as the dining room...

---
```

### Comparison Tables

Use Markdown tables for head-to-head comparisons:

```markdown
| | Option A | Option B |
|---|---|---|
| Ease of use | ⭐⭐⭐ | ⭐⭐ |
| Performance | Good | Excellent |
| Best for | Beginners | Power users |
```

### Callouts

Use blockquotes with an emoji prefix for special callouts:

```markdown
> 💡 **Tip**: Use this when you need X.

> ⚠️ **Warning**: Don't do this because Y.

> 🔑 **Key Concept**: This is the most important idea in this section.
```

### Linking Between Chapters

```markdown
We covered this in [Chapter 2](/chapters/javascript-and-typescript).
```

Always use root-relative paths starting with `/`.

---

## Adding a New Chapter

1. Check the existing chapter order in `src/content/chapters/` to find the right `order` number.
2. Create your file: `src/content/chapters/{order}-{your-slug}.md`
   - If it's a new chapter between existing ones, you may need to update `order` values in affected files. Open an Issue to discuss first.
   - If it's an appendix/supplement, use the next available number.
3. Add correct frontmatter (see above).
4. Write your content following the Writing Guidelines.
5. Run `npm run check` to validate.
6. If your change touches layouts, search, or the print edition, run `npm run build`.
7. Submit your PR.

**No registration step is needed.** New chapter files in `src/content/chapters/` are picked up automatically.

---

## Pull Request Guidelines

### PR Title Format
```
fix: correct X in chapter Y
feat: add new chapter on Z
update: refresh chapter 4 with 2026 information
typo: fix spelling errors in chapter 12
```

### PR Description
Include:
- What you changed and why.
- Which chapter(s) are affected.
- If fixing incorrect information, a brief note on the source/reason.

### Review Process
- PRs that fix typos or factual errors are usually merged quickly.
- PRs that add new sections or chapters may need a round of feedback.
- PRs that add entirely new chapters will be reviewed for quality, tone, and fit.
- PRs that change layouts or build scripts should leave both `npm run check` and `npm run build` passing.

---

## What We Won't Accept

- Content that requires developer setup to verify (no code-only PRs).
- Chapters on tools that aren't broadly used in the JavaScript ecosystem.
- Content promoting specific companies or paid products.
- Inaccurate information (if you're unsure, open an Issue to discuss first).
- AI-generated content dumped without review or editing.

---

## Code of Conduct

Be kind. This project is for learners. Condescending language, gatekeeping, or elitism has no place here.

---

## Questions?

Open an [Issue](https://github.com/h4harsimran/vibe-coders-handbook/issues) and tag it `question`. We're happy to help you get your contribution over the line.

---

*Thank you for helping make this book better. Every correction, clarification, and contribution makes it more useful for the next person who opens it feeling confused.*
