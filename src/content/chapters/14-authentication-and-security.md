---
order: 14
chapterLabel: "Chapter 14"
title: "Authentication and Security"
description: "OAuth, JWTs, sessions, and security best practices for web applications."
tools: ["OAuth", "JWT", "NextAuth"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

Authentication verifies who a user is \(login\). Authorization determines what they can do \(permissions\). Both are critical and are where vibe-coded apps most commonly have problems.

## Auth Providers

| Provider | Type | Best For |
| --- | --- | --- |
| Supabase Auth | Built into Supabase | Projects using Supabase for database |
| Clerk | Third-party service | Beautiful pre-built UI, fast setup |
| NextAuth / Auth.js | Open-source library | Full control, self-hosted |
| Firebase Auth | Google service | Mobile apps, Google ecosystem |

## Security Essentials

Security is not optional and not something you can "add later." It must be baked into your application from the start. Here are the most critical rules, explained in plain English:

- **Never trust client-side data:** Anything coming from the browser can be faked. A user can open their browser's developer tools and modify any data before it is sent to your server. Always validate and verify all data on the server, even if you already validated it on the frontend.
- **Never expose secrets in frontend code:** API keys, database passwords, authentication secrets, and encryption keys must NEVER appear in frontend code. Anyone can view your frontend JavaScript by opening developer tools. Store secrets in environment variables \(`.env` files\) that are only accessible on the server.
- **Never store passwords in plain text:** If a hacker gains access to your database, they should not be able to read user passwords. Always "hash" passwords \(scramble them irreversibly using algorithms like bcrypt\) before storing them. Auth providers like Supabase Auth and Clerk handle this for you automatically.
- **Always use HTTPS:** HTTPS encrypts all data traveling between the browser and server. Without it, anyone on the same network can read the data \(including passwords and tokens\). All modern deployment platforms \(Vercel, Netlify, Railway\) provide HTTPS automatically.
- **Validate ALL inputs:** Use Zod on every piece of data that enters your server. Never assume data is the right type, length, or format. Validation prevents entire categories of attacks.
- **Use an ORM for database queries:** ORMs like Drizzle and Prisma automatically prevent SQL injection attacks \(where an attacker puts malicious SQL code in a form field\). If you write raw SQL, you must manually sanitize every input, which is easy to forget.

---

> ⚠️ **Security Warning for Vibe Coders**
>
> A 2025 study found that 45% of AI-generated code contained security vulnerabilities. Another study found 170 critical vulnerabilities in 1,645 analyzed vibe-coded apps. AI tools are excellent at generating functional code but often take shortcuts on security. When your AI builds a login system, payment flow, or anything handling sensitive data, have someone with security experience review it before putting it in front of real users. Functionality is not the same as security.

---
