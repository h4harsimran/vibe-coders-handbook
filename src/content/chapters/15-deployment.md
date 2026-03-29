---
order: 15
chapterLabel: "Chapter 15"
title: "Deployment"
description: "Vercel, Cloudflare, AWS, Railway — getting your application live on the internet."
tools: ["Vercel", "Cloudflare", "AWS", "Railway"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

Deployment is the process of putting your application on the internet so real users can access it. During development, your app runs on "localhost" \(your own computer\), accessible only to you. Deployment puts it on a server with a public URL that anyone in the world can visit.

In 2026, deployment has become remarkably easy compared to even five years ago. Most platforms follow the same workflow: connect your GitHub repository, push your code, and the platform automatically builds and deploys your app. Every push to the main branch triggers a new deployment. Every pull request gets a unique preview URL so you can test changes before they go live.

## Vercel

Vercel is the company that created Next.js, and their platform is optimized for deploying frontend and full-stack JavaScript applications. It is the most popular deployment platform for Next.js projects. The workflow is: connect your GitHub repo, push code, Vercel builds and deploys automatically. Every deployment gets a unique URL. Custom domains are supported. The free tier is generous enough for personal projects and small businesses.

- **Best for:** Next.js projects, React SPAs, static sites, any frontend-heavy project.

## Netlify

Netlify is similar to Vercel but is more framework-agnostic \(not tied to a specific framework\). It pioneered many of the features that are now standard: automatic HTTPS, branch previews, form handling, and serverless functions. It has a strong ecosystem for static sites, documentation sites, and Jamstack applications.

- **Best for:** Static sites, Astro/Nuxt/SvelteKit projects, sites with forms and identity needs.

## Railway

Railway fills a different niche: deploying backends, databases, and full-stack applications. Unlike Vercel and Netlify which focus on frontend deployments, Railway gives you full servers where you can run Express, PostgreSQL, Redis, background job workers, and anything else that needs to run continuously. It supports Docker containers, meaning almost any application can be deployed.

- **Best for:** Standalone backends \(Express, Fastify\), database hosting, full-stack apps, background services.

## AWS, Google Cloud, Azure

The major cloud providers offer everything: virtual servers, managed databases, file storage, machine learning services, message queues, and hundreds of other services. They are vastly more powerful and flexible than Vercel or Railway but also vastly more complex. Setting up a basic web application on AWS from scratch involves configuring 5-10 different services. Most startups and individual developers use Vercel or Railway and only move to cloud providers when they outgrow them.

- **Best for:** Enterprise applications, complex infrastructure, teams with DevOps expertise, cost optimization at scale.

| Platform | Type | Difficulty | Free Tier | Best For |
| --- | --- | --- | --- | --- |
| Vercel | Frontend \+ Serverless | Easy | Generous | Next.js, React, static sites |
| Netlify | Frontend \+ Serverless | Easy | Generous | Any framework, documentation sites |
| Railway | Full-stack \+ Databases | Easy-Medium | Trial credits | Backends, databases, Docker apps |
| Render | Full-stack | Medium | Limited | Alternative to Railway |
| AWS / GCP / Azure | Everything | Hard | 12-month trial | Enterprise, complex infrastructure |

## Additional Learning Resources

- [Vercel Documentation](https://vercel.com/docs): Vercel's deployment guides and framework-specific documentation.
- [Railway Documentation](https://docs.railway.app/): Railway's guides for deploying backends, databases, and services.
- [Netlify Documentation](https://docs.netlify.com/): Netlify's comprehensive platform documentation.
