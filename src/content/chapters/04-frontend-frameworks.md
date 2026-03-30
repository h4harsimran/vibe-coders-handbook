---
order: 4
chapterLabel: "Chapter 4"
title: "Frontend Frameworks"
description: "React, Vue, Angular, Svelte: what they do, how they differ, and how to choose between them."
tools: ["React", "Vue", "Angular", "Svelte"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

A frontend framework is a structured way to build user interfaces. In the early days of the web, building interactive pages meant writing raw HTML, then using JavaScript to manually find elements on the page \("get the element with id=submit-button"\) and manually update them when data changed \("set its text to Loading..."\). For a simple page with a few buttons, this worked fine. For a complex application with hundreds of interactive elements, user inputs, real-time data, and conditional displays, it became an unmaintainable nightmare.

Frontend frameworks solve this by introducing the concept of components: small, self-contained pieces of UI that manage their own data and appearance. A button is a component. A navigation bar is a component. A product card is a component. A login form is a component. You build these small pieces independently, test them in isolation, and then compose them together like LEGO blocks to create entire pages and applications.

The framework handles the hard part: when data changes, it automatically figures out which parts of the screen need to update and makes the minimum necessary changes. You describe what the UI should look like for a given piece of data, and the framework handles the "how" of keeping the screen in sync.

## React

Created by Facebook \(now Meta\) in 2013, React is the most popular frontend framework in the world by every measurable metric: npm downloads, GitHub stars, job postings, Stack Overflow questions, and developer surveys. It introduced JSX, a syntax that lets you write HTML-like code directly inside JavaScript files. This was controversial at first \(mixing HTML and JavaScript in the same file felt wrong to many developers\), but it turned out to be incredibly productive because your UI structure and your logic live together, making it easy to see how a component works at a glance.

React is intentionally minimal. It handles only the UI layer: components, state \(data\), and rendering. For everything else \(routing between pages, fetching data, managing global state, form handling\), you choose additional libraries from its massive ecosystem. This flexibility is both its greatest strength \(you pick exactly the tools you need\) and its biggest source of confusion for beginners \(too many choices\).

- **Best for:** Large applications, teams with many developers, projects that need the largest possible ecosystem of third-party libraries and community support.
- **Used by:** Facebook, Instagram, Netflix, Airbnb, Uber, X \(Twitter\), Discord, Notion, Shopify, and millions of other applications.

## Vue

Created by Evan You in 2014 \(a former Google engineer who worked on Angular\), Vue is often called the "approachable framework." It does the same job as React but with a different philosophy. Vue uses HTML templates \(you write your UI structure in a file that looks like regular HTML with special attributes\), keeps your template, logic, and styles in a single .vue file, and provides built-in solutions for common needs like state management \(Pinia\) and routing \(Vue Router\). Many beginners find Vue easier to learn because the template syntax feels more familiar than JSX.

- **Best for:** Small to medium projects, solo developers, teams that want a gentle learning curve with built-in solutions for common problems.
- **Used by:** Alibaba, GitLab, Nintendo, BMW, Grammarly, Adobe, and a large portion of the Chinese and Asian tech ecosystem.

## Angular

Created by Google in 2016, Angular is the most opinionated and comprehensive framework. While React and Vue let you choose your own tools for routing, forms, and HTTP, Angular includes all of this out of the box. It requires TypeScript \(not optional\), enforces a strict project structure, and follows enterprise software patterns like dependency injection and modules. It has the steepest learning curve of the four but provides the most structure for large teams.

- **Best for:** Large enterprise applications with big teams that need strict conventions and a comprehensive, all-in-one toolkit.

## Svelte

Created by Rich Harris in 2016, Svelte takes a radical approach. React, Vue, and Angular all ship a runtime \(framework code\) to the browser that manages UI updates at runtime. Svelte does not. Instead, Svelte is a compiler: it transforms your components into highly optimized, plain JavaScript at build time. The browser receives lean, fast code with zero framework overhead. Svelte’s syntax is also the simplest of the four, often requiring less code for the same result.

- **Best for:** Performance-critical apps, small to medium projects, developers who want the simplest, most concise syntax.

---

> 🔑 **These Are Either/Or**
>
> You pick ONE frontend framework per project. You do not combine React and Vue, or Angular and Svelte. They solve the same problem differently. In 2026, React holds roughly 40-45% market share, Vue 18-20%, Angular 15-18%, and Svelte 5-8%. If you have no strong preference, React is the safe default because of its enormous ecosystem, job market, and community.

---

## Additional Learning Resources

- [React Official Tutorial](https://react.dev/learn): The official React documentation, completely rewritten in 2023 with interactive examples.
- [Scrimba - Learn React \(Free Interactive Course\)](https://scrimba.com/learn/learnreact): 15\+ hours of interactive, hands-on React training where you edit code inside the video.
- [Vue.js Official Guide](https://vuejs.org/guide/introduction.html): Vue's excellent, beginner-friendly official documentation.
- [Svelte Official Tutorial](https://svelte.dev/tutorial): An interactive, step-by-step tutorial built into the Svelte website.
- [Academind \(YouTube\)](https://www.youtube.com/c/Academind): Maximilian Schwarzmuller's thorough tutorials on React, Vue, Angular, and more.
