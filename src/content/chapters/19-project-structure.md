---
order: 19
chapterLabel: "Chapter 19"
title: "Project Structure"
description: "Organizing files and folders in a modern JavaScript project for clarity and scale."
tools: []
published: true
draft: false
lastUpdated: "2026-03-01"
---

When AI generates a project, it creates many files. Here is what the important ones do:

## Root Configuration Files

| File | Purpose |
| --- | --- |
| `package.json` | Project ID card: name, dependencies, scripts \(`npm run dev`, `npm run build`\) |
| `tsconfig.json` | TypeScript settings: strictness, targets, paths |
| `.env` / `.env.local` | Secret environment variables \(database URLs, API keys\). NEVER commit to Git. |
| `.gitignore` | Lists files Git should ignore \(`node_modules`, `.env`, build output\) |
| `tailwind.config.js` | Tailwind CSS customization: colors, fonts, spacing |
| `next.config.js` | Next.js settings \(if using Next.js\) |
| `drizzle.config.ts` | Drizzle ORM settings \(if using Drizzle\) |

## Common Folder Layout \(Next.js\)

| Folder | Contains |
| --- | --- |
| `app/` | Pages and layouts. Each subfolder = a route. `app/about/page.tsx` = `/about` |
| `app/api/` | Backend API routes. `app/api/users/route.ts` handles `/api/users` |
| `components/` | Reusable UI components \(buttons, cards, forms, navigation\) |
| `lib/` | Utility functions, database client, helper code |
| `public/` | Static files \(images, fonts\) served directly to browser |
| `db/` or `drizzle/` | Database schema and migration files |

---

> ⚠️ **The `node_modules` Folder**
>
> This contains all downloaded packages. It can be hundreds of MB. NEVER edit it, NEVER commit it to Git. If it breaks, delete it and run `npm install` to recreate it.

---
