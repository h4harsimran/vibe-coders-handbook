---
order: 2
chapterLabel: "Chapter 2"
title: "JavaScript and TypeScript"
description: "The language of the web and its typed superset — what they are and how they work together."
tools: ["JavaScript", "TypeScript"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

JavaScript is the programming language of the web. Created in 1995 in just 10 days by Brendan Eich at Netscape, it was originally designed to add simple interactivity to web pages \(things like form validation and image rollovers\). Despite its rushed creation and early quirks, JavaScript became the only programming language that browsers understand natively. No other language has this privilege.

Today, JavaScript is the most widely used programming language in the world. It runs not only in browsers but also on servers \(via Node.js\), on mobile devices \(via React Native\), in desktop apps \(via Electron\), and even on embedded devices. Its ecosystem is the largest in software history. Understanding JavaScript is the foundation of everything in this book.

## What Is TypeScript?

TypeScript is JavaScript with a safety net added on top. Created by Microsoft in 2012 and led by Anders Hejlsberg \(the same person who created C\# and Turbo Pascal\), TypeScript adds one transformative feature: static types.

In regular JavaScript, a variable can hold anything. The language is "dynamically typed," meaning it figures out what type of data a variable holds while the code is running. This sounds flexible and convenient, but in practice it causes bugs that are incredibly hard to find:

---

> ⚠️ **The Problem with Dynamic Typing**
>
> In JavaScript, you might write: `let price = 29.99`, then somewhere else in your code, accidentally assign `price = "free"`. JavaScript will not complain. Your code keeps running. Then, three files later, another function tries to do `price * 1.1` to calculate tax, and gets `NaN` (Not a Number) instead of `32.99`. Finding where price became a string can take hours in a large codebase.

---

TypeScript prevents this entirely. You declare what type each variable should be, and the TypeScript compiler catches mistakes before your code ever runs. If you declare "let price: number = 29.99" and later try to assign price = "free", TypeScript immediately shows a red squiggly line in your editor and refuses to compile. The bug is caught in seconds, not hours.

Here is the most important thing to understand about TypeScript: it does not run in the browser or on the server. TypeScript gets compiled \(translated\) into regular JavaScript before deployment. The types are completely stripped away. They exist only during development to help you write better code. The browser never sees a single TypeScript type declaration.

## Why TypeScript Won

As of 2026, the TypeScript vs. JavaScript debate is effectively settled. TypeScript became the most-used language on GitHub in August 2025, surpassing both JavaScript and Python. Every major framework has first-class TypeScript support. Most new professional projects start with TypeScript by default. The ecosystem has moved so decisively toward TypeScript that Node.js itself added native TypeScript support in 2025, allowing developers to run `.ts` files directly without a separate compilation step.

| Factor | JavaScript | TypeScript |
| --- | --- | --- |
| Learning curve | Easier to start, no type syntax | Slightly harder at first, but types become second nature quickly |
| Bug prevention | Bugs found at runtime \(in production, by users\) | Bugs caught at compile time \(in your editor, before deployment\) |
| Editor support | Basic autocomplete | Rich autocomplete, inline documentation, safe refactoring, jump-to-definition |
| Team collaboration | Hard to know what shape data is without reading all the code | Types serve as living documentation that can never go out of date |
| AI coding tools | AI has less context to generate accurate code | Types give AI much better understanding, leading to fewer errors |
| Codebase size | Fine under ~5,000 lines | Essential above ~10,000 lines; helpful at any size |
| 2026 adoption | ~15% of new projects | ~85% of new professional projects \(Stack Overflow, GitHub data\) |

---

> 🔑 **The Either/Or Decision**
>
> For any given file, it is written in either JavaScript (`.js`) or TypeScript (`.ts`). You can mix them in the same project, but each file picks one. In 2026, use TypeScript for any project you plan to maintain. Use JavaScript only for throwaway scripts, quick experiments, or learning exercises.

---

## Additional Learning Resources

- [TypeScript Official Handbook](https://www.typescriptlang.org/docs/handbook/): The official, comprehensive guide to TypeScript from Microsoft.
- [Traversy Media - TypeScript Crash Course \(YouTube\)](https://www.youtube.com/c/TraversyMedia): Brad Traversy's popular, practical crash courses on web technologies.
- [The Net Ninja - TypeScript Tutorial Series \(YouTube\)](https://www.youtube.com/c/TheNetNinja): Shaun Pelling's well-structured, beginner-friendly TypeScript series.
- [Eloquent JavaScript \(Free Online Book\)](https://eloquentjavascript.net/): A beautifully written, free book covering JavaScript fundamentals in depth.
