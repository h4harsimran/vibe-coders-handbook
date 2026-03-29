---
order: 7
chapterLabel: "Chapter 7"
title: "The Backend"
description: "Express, Fastify, NestJS, Hono — building the server side of your application."
tools: ["Express", "Fastify", "NestJS", "Hono"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

The backend handles everything the user should never see or control: processing payments, authenticating users, enforcing business rules, sending emails, connecting to databases, and managing file uploads. In the Node.js ecosystem, several frameworks help you build backends efficiently.

## Express

Created in 2010, Express is the oldest and most widely used Node.js backend framework, with roughly 18 million weekly npm downloads in 2026. It is minimal: it handles HTTP requests and responses, lets you add middleware \(small functions that process requests in sequence, like checking authentication or parsing JSON\), and stays out of your way for everything else. Express is "unopinionated" — it does not dictate project structure, database choice, or architecture patterns. This flexibility means Express works for everything from a 50-line API to a massive microservices architecture, but it also means you are responsible for making good structural decisions.

When a user clicks a button in your frontend that says "Load my orders," the browser sends an HTTP GET request to something like /api/orders. Express receives that request, runs any middleware \(checking if the user is logged in, for example\), then executes the route handler function you wrote \(which queries the database and returns the orders as JSON\). The response travels back to the frontend, and TanStack Query displays it on screen. This request-response cycle is the core pattern of every Express application.

Express’s middleware system is its most powerful feature. Middleware functions execute in sequence for every request. You might have: a logging middleware that records every request, a CORS middleware that allows cross-origin requests, an authentication middleware that checks for a valid session token, and finally your route handler. This "pipeline" pattern is elegant and composable.

## Fastify

Fastify is the modern alternative to Express, designed from the ground up for speed and developer experience. It is up to 2x faster than Express in benchmarks, has built-in JSON schema validation \(you define what data your API expects using JSON Schema, and Fastify automatically rejects any request that does not match, returning clear error messages\), and offers excellent TypeScript support out of the box. Fastify also has a plugin system that makes it easy to add functionality in a modular way.

For new projects that need a standalone backend in 2026, Fastify is increasingly the recommended choice over Express, particularly when performance matters or when you want built-in validation without adding extra libraries. However, Express’s massive ecosystem of middleware \(thousands of packages\) and its ubiquity in tutorials and documentation mean it remains the most common backend framework.

## NestJS

NestJS is the "Angular of backends": heavily opinionated, TypeScript-first, with a modular architecture using decorators and dependency injection. It enforces patterns like controllers \(handle requests\), services \(business logic\), and modules \(organize code\). NestJS runs Express or Fastify under the hood as its HTTP engine. It is the most structured option, requiring more learning upfront but providing strong conventions that keep large codebases organized. Best for enterprise backends with multiple developers who need consistent patterns.

## Hono

Hono is ultralight and ultrafast, designed to run on edge runtimes \(Cloudflare Workers, Deno Deploy, Bun\) as well as Node.js. At under 14 KB, it has become the go-to choice for serverless functions and edge computing in 2025-2026. Its API is similar to Express but optimized for environments where cold start time and bundle size matter.

| Framework | Speed | Bundle Size | TypeScript | Learning Curve | Best For |
| --- | --- | --- | --- | --- | --- |
| Express | Good | Medium | Optional | Easy | Most projects, learning, prototypes |
| Fastify | Excellent | Medium | Excellent | Easy-Medium | Performance-sensitive APIs |
| NestJS | Good | Large | Required | Steep | Enterprise backends, large teams |
| Hono | Fastest | ~14 KB | Excellent | Easy | Edge computing, serverless |
| Next.js Routes | Good | N/A | Excellent | Easy | Full-stack Next.js projects |

> ⚠️ **Next.js Can Replace Your Backend**

If you use Next.js, its built-in API Routes and Server Actions can handle backend logic. For small to medium projects, this eliminates the need for a separate Express server. You only need a standalone backend when your server logic is complex, when multiple frontends share it, or when you need features like WebSockets or long-running background jobs.

## Additional Learning Resources

- [Express.js Official Guide](https://expressjs.com/en/guide/routing.html): The official Express documentation with routing and middleware guides.
- [Fastify Documentation](https://fastify.dev/docs/latest/): Fastify's comprehensive official documentation.
