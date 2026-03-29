---
order: 16
chapterLabel: "Chapter 16"
title: "The Master Map"
description: "A visual overview of how all the tools connect and where each one fits in the stack."
tools: []
published: true
draft: false
lastUpdated: "2026-03-01"
---

Every job, every tool, every either/or decision, in one definitive table:

| Job | What It Does | Either/Or Options | 2026 Default |
| --- | --- | --- | --- |
| Language | Programming language | JavaScript OR TypeScript | TypeScript |
| Runtime | Runs JS outside browser | Node.js, Deno, or Bun | Node.js |
| Package Manager | Manages dependencies | npm, pnpm, Yarn, Bun | npm |
| Frontend | Builds the UI | React, Vue, Angular, Svelte | React |
| Meta-Framework | Full-stack wrapper | Next.js, Nuxt, SvelteKit, Remix, Astro, or None | Next.js |
| Styling | Visual appearance | Tailwind, CSS Modules, styled-components, CSS | Tailwind CSS |
| Backend | Server logic \+ APIs | Express, Fastify, NestJS, Hono, Next.js Routes | Express or Next.js |
| Database | Data storage | PostgreSQL, MySQL, SQLite, MongoDB | PostgreSQL |
| ORM | DB access in TypeScript | Drizzle OR Prisma | Either |
| Client State | UI state management | Zustand, Redux, Jotai | Zustand |
| Server State | Data fetching \+ cache | TanStack Query OR SWR | TanStack Query |
| Validation | Data shape checking | Zod, Yup, Joi | Zod |
| Build Tool | Code transformation | Vite, Turbopack, Webpack | Vite |
| Deployment | Hosting | Vercel, Netlify, Railway, AWS | Vercel |
