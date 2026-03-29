---
order: 8
chapterLabel: "Chapter 8"
title: "Databases and ORMs"
description: "SQL, NoSQL, Prisma, Drizzle — how data is stored, queried, and managed."
tools: ["Prisma", "Drizzle", "PostgreSQL", "MongoDB"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

Every web app stores data persistently. User accounts, posts, products, settings — all live in a database. The dominant database type for web applications is the relational database, which stores data in tables \(like spreadsheets\) with rows and columns. You interact with relational databases using SQL \(Structured Query Language\).

## PostgreSQL and Supabase

PostgreSQL \(Postgres\) is the most recommended database in 2026 for web applications: it is free, open-source, incredibly powerful, and handles everything from a personal blog to a Fortune 500 application. Supabase is a cloud platform that gives you a managed PostgreSQL database with a dashboard, authentication, file storage, and real-time features. It is the easiest way to get a production-ready database without managing servers.

## Drizzle vs. Prisma

An ORM \(Object-Relational Mapping\) sits between your code and the database. Instead of writing raw SQL, you write TypeScript, and the ORM translates it. The two dominant ORMs in 2026 are Drizzle and Prisma. They are either/or.

| Aspect | Drizzle | Prisma |
| --- | --- | --- |
| Philosophy | "If you know SQL, you know Drizzle." Close to SQL. | Abstracts SQL away. Describe what you want, Prisma figures out the query. |
| Schema | Defined in TypeScript. No special language. | Defined in `.prisma` files using Prisma Schema Language. |
| Type Safety | Inferred from TypeScript. Updates instantly. | Generated after running `prisma generate`. |
| Bundle Size | ~7 KB. Ideal for serverless/edge. | ~300\+ KB \(v6\), smaller in v7. |
| SQL Knowledge | Helpful. Queries mirror SQL syntax. | Not required. API is higher-level. |
| Best For | SQL-comfortable devs, edge/serverless. | Teams new to databases, rapid prototyping. |

## Additional Learning Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview): Drizzle's official documentation with guides and API reference.
- [Prisma Documentation](https://www.prisma.io/docs): Prisma's comprehensive docs, tutorials, and guides.
- [Supabase Documentation](https://supabase.com/docs): Supabase's excellent docs covering database, auth, and storage.
