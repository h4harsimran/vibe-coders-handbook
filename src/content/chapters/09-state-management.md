---
order: 9
chapterLabel: "Chapter 9"
title: "State Management"
description: "Zustand, Redux, Jotai, Signals — managing data flow in your frontend application."
tools: ["Zustand", "Redux", "Jotai"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

"State" is any data your application needs to remember: Is the user logged in? What is in their cart? Which tab is active? What did they search for? In 2026, the ecosystem clearly separates state into two categories:

| Type | Definition | Examples | Primary Tool |
| --- | --- | --- | --- |
| Client State | Data that exists only in the browser: UI toggles, form inputs, user preferences | Is the sidebar open? Which filter is selected? Dark mode on/off? | Zustand |
| Server State | Data from your backend/database that needs fetching, caching, refreshing | User's orders, product listings, notification count | TanStack Query |

## Zustand

Zustand \(“state” in German\) is the most popular client state library in 2026 with ~20 million weekly npm downloads. It is ~1 KB, has near-zero boilerplate, and takes about 5 minutes to learn. You create a store, define data and update functions, and any component can use it. It replaced Redux as the default choice for most React projects.

## TanStack Query

TanStack Query \(formerly React Query\) handles server state: fetching, caching, background refetching, retry logic, loading states, and error handling. Without it, every component that needs data from your API must manually handle all of this. TanStack Query automates it. It is used alongside Zustand, not instead of it.

---

> 🔑 **They Work Together**
>
> Zustand handles client state (UI things). TanStack Query handles server state (data from your API). The most common stack in 2026 is: Zustand + TanStack Query + React Hook Form. Together, they cover virtually every state management need.

---

## Additional Learning Resources

- [Zustand GitHub](https://github.com/pmndrs/zustand): Zustand's official repo with documentation and examples.
- [TanStack Query Documentation](https://tanstack.com/query/latest): Comprehensive TanStack Query docs with guides and API reference.
