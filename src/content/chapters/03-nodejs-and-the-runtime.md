---
order: 3
chapterLabel: "Chapter 3"
title: "Node.js and the Runtime"
description: "Understanding Node.js, Bun, and Deno — the engines that run JavaScript outside the browser."
tools: ["Node.js", "Bun", "Deno"]
published: true
draft: false
lastUpdated: "2026-03-01"
---

This is the chapter that unlocks everything else. If you understand Node.js, the rest of the ecosystem falls into place. If you do not, every other chapter will feel disconnected.

## What Is Node.js?

Node.js is a program that lets you run JavaScript outside of a browser. Created in 2009 by Ryan Dahl, it took the V8 JavaScript engine \(the same engine that powers Google Chrome’s JavaScript execution\) and packaged it as a standalone application that runs on servers, laptops, and any other computer.

Before Node.js, JavaScript was trapped inside the browser. It could make web pages interactive, but it could not read files from a hard drive, connect to a database, listen for network connections, or do any "backend" work. Those jobs required other languages: PHP, Java, Python, Ruby, or C\#. This meant web developers had to know at least two languages: JavaScript for the browser, and something else for the server.

Node.js changed everything. Suddenly, one language could work everywhere. A developer could write JavaScript for the frontend AND the backend. Teams could share code between client and server. The same person could build the entire application. This "JavaScript everywhere" vision is the reason the Node.js ecosystem exploded into the massive landscape you see today.

> 💡 **Why This Matters**

Node.js is not a framework, not a library, and not a language. It is a runtime: an environment where JavaScript code executes. Think of it as the engine. Everything else in this book \(React, Express, Next.js, Drizzle, etc.\) is built to run on this engine. When you install Node.js on your computer, you are installing the ability to run JavaScript outside of a browser.

## npm: The App Store for Code

When you install Node.js, it comes with npm \(Node Package Manager\). Think of npm as an app store for code. Instead of downloading apps for your phone, you download "packages" \(small, reusable chunks of code\) for your projects.

Need to resize images? There is an npm package for that. Need to send emails? npm package. Need to validate form data? npm package. Need a date formatting library? npm package. There are over 2.5 million packages available, making npm the largest software registry in the world by a wide margin.

When you see a command like "npm install react" in a tutorial, it means: go to the npm registry, download the React package and all of its dependencies, and add them to my project. The downloaded packages land in a folder called node_modules in your project directory. This folder can grow enormous \(hundreds of megabytes for a medium project\) because each package may depend on dozens of other packages, which depend on others, and so on.

## The package.json File

Every Node.js project has a package.json file at its root. This is the project’s ID card. It contains the project’s name, version, description, and most importantly, two lists of dependencies: "dependencies" \(packages the app needs to run in production\) and "devDependencies" \(packages needed only during development, like testing tools or TypeScript itself\).

When someone shares a project with you \(or when you clone one from GitHub\), they do not include the node_modules folder \(it is too large and is listed in .gitignore\). Instead, you run "npm install" and npm reads the package.json to download everything fresh.

## Package Managers: The Four Options

npm is the default package manager, but alternatives exist that trade compatibility for speed or features:

| Manager | Speed | Disk Usage | Key Feature | Best For |
| --- | --- | --- | --- | --- |
| npm | Standard | Standard | Comes with Node.js, universal compatibility | Beginners, max compatibility |
| pnpm | 2x faster | 70% less | Content-addressable store \(each package stored once\) | Professional developers, monorepos |
| Yarn Berry | Fast | No `node_modules` \(PnP mode\) | Plug'n'Play eliminates `node_modules` entirely | Teams wanting zero-install workflows |
| Bun | 3-5x faster | Standard | All-in-one runtime \+ bundler \+ package manager | Speed-obsessed developers |

> ⚠️ **Recommendation**

These are either/or choices per project. If you are starting out, use npm. It comes free with Node.js, every tutorial uses it, and it works reliably. Consider pnpm or Bun later when you have a specific reason \(like saving disk space across many projects or needing faster installs in CI/CD pipelines\).

## Additional Learning Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs): The authoritative guide to Node.js from the official team.
- [Programming with Mosh - Node.js Tutorial \(YouTube\)](https://www.youtube.com/c/programmingwithmosh): Mosh Hamedani's clear, structured Node.js tutorial for beginners.
- [npm Documentation](https://docs.npmjs.com/): Official npm docs explaining packages, commands, and configuration.
