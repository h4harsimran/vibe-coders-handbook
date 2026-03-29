---
order: 10
chapterLabel: "Chapter 10"
title: "Data Fetching"
description: "TanStack Query, SWR, tRPC — getting data from server to client efficiently."
tools: ["TanStack Query", "SWR", "tRPC"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

Every web app fetches data from a server. Displaying products, loading user profiles, showing dashboards — all require network requests to your backend API. Without a data fetching library, you must manually handle every aspect of this process for every single request in your app. Let us walk through what that looks like:

First, you need a loading state variable to show a spinner while data is being fetched. Then an error state variable to show an error message if the request fails. Then the data itself once it arrives. You need to write the actual fetch call in a useEffect hook. You need to handle the case where the component unmounts before the request completes \(otherwise you get a memory leak warning\). You need caching logic so you do not re-fetch data you already have when the user navigates back to a page. You need stale data handling to silently refresh data that might be outdated. You need retry logic to automatically retry failed requests. And you need deduplication so that if three different components all need the same user data, only one network request is made.

Doing all of this manually is 30-50 lines of boilerplate code for every single data request. In a medium app with 20 different data requests, that is 600-1000 lines of repetitive, error-prone code. Data fetching libraries automate all of it.

## TanStack Query \(React Query\)

TanStack Query \(formerly React Query, renamed when it added support for Vue, Svelte, and other frameworks\) is the dominant data fetching library in 2026 with roughly 5 million weekly npm downloads. You tell it "fetch this data from this endpoint" and it automatically handles everything described above.

On first visit, TanStack Query makes the fetch, shows loading state, and caches the result. On subsequent visits, it instantly shows the cached data while silently refetching fresh data in the background. If a request fails, it retries three times with exponential backoff. When the user switches tabs and comes back, it refetches stale data. If multiple components request the same data, it makes only one network call and shares the result.

TanStack Query has become so essential that many developers consider it a required dependency for any React project that communicates with a server. It eliminates an entire category of bugs and boilerplate.

## SWR

SWR \(Stale-While-Revalidate\) is an alternative by the Next.js team \(Vercel\). The name refers to a caching strategy: show stale \(old cached\) data immediately to the user, then revalidate \(fetch fresh data\) in the background and seamlessly update the display when fresh data arrives. TanStack Query does this too, but SWR was named after the pattern. SWR is simpler with fewer configuration options, which makes it quicker to learn but less flexible for complex scenarios.

> 🔑 **The Key Distinction**

TanStack Query manages SERVER state \(data from your API\). Zustand manages CLIENT state \(UI data like toggles and form inputs\). They solve completely different problems and are used together, not as alternatives. The standard combination in 2026 is: Zustand for client state \+ TanStack Query for server state.

## Additional Learning Resources

- [TanStack Query Documentation](https://tanstack.com/query/latest): Official docs with guides, examples, and API reference.
- [SWR Documentation](https://swr.vercel.app/): Vercel's SWR documentation with comparison to other approaches.
