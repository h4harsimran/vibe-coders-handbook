---
order: 5
chapterLabel: "Chapter 5"
title: "Styling Your App"
description: "CSS, Tailwind, CSS-in-JS, and component libraries — how modern apps get their look."
tools: ["Tailwind", "CSS Modules", "Styled Components"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

Every web app needs to look good. Styling controls colors, fonts, spacing, borders, shadows, layout, responsiveness \(how the app adapts to different screen sizes\), and animations. The browser understands CSS natively, but writing raw CSS for a large application presents real challenges: naming collisions \(two developers accidentally creating a .button class with different styles\), no reusable variables \(repeating the same hex color code in 47 places\), and difficulty organizing thousands of lines of style rules.

In 2026, several approaches solve these problems. They are largely either/or choices, though technically mixable.

## Tailwind CSS \(Dominant in 2026\)

Tailwind CSS is a "utility-first" CSS framework. Instead of writing CSS rules in separate files, you apply tiny, single-purpose utility classes directly in your HTML or JSX. Each class does exactly one thing: bg-blue-500 sets a blue background. text-white makes text white. p-4 adds padding. rounded makes corners round. You compose these small utilities to build any design.

Tailwind looks strange at first. Your HTML gets cluttered with class names like "flex items-center justify-between bg-white shadow-md rounded-lg p-6 mb-4". Many developers initially react with "this is ugly" or "this is just inline styles." But after using it for a week, most convert. Here is why:

- **Speed:** You never leave your component file. No switching between HTML and CSS files. No inventing class names.
- **Consistency:** Tailwind provides a design system out of the box: consistent spacing scale, color palette, and typography. Your app looks professional without a designer.
- **Optimization:** Tailwind scans your code and strips out every class you did not use. Your production CSS file contains only what you actually need, often under 10 KB.
- **AI-friendly:** AI coding tools love Tailwind because every class name explicitly states its intent. `"bg-blue-500"` is unambiguous. AI generates Tailwind code with high accuracy.

## Other Styling Approaches

CSS Modules scope regular CSS to individual components, solving naming collisions while letting you write standard CSS syntax. They come built into Next.js. styled-components and other "CSS-in-JS" libraries let you write CSS directly inside JavaScript files, attached to specific components. Plain CSS and SCSS \(CSS with variables and nesting\) are the traditional approach, still used in many projects.

| Approach | Where CSS Lives | AI Friendliness | 2026 Popularity |
| --- | --- | --- | --- |
| Tailwind CSS | In your HTML/JSX as utility classes | Excellent | Dominant \(~55% of new projects\) |
| CSS Modules | In `.module.css` files, one per component | Good | Medium \(~20%\) |
| styled-components | Inside JavaScript files | Moderate | Declining \(~10%\) |
| Plain CSS / SCSS | In `.css` or `.scss` files | Good | Medium \(~15%\) |

## Additional Learning Resources

- [Tailwind CSS Official Docs](https://tailwindcss.com/docs): The official documentation with examples for every utility class.
- [Tailwind CSS - Official YouTube Channel](https://www.youtube.com/@TailwindLabs): Screencasts and tips from the Tailwind team.
