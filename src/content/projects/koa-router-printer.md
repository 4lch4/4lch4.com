---
title: '@4lch4/koa-router-printer'
img: /assets/img/Koa.png
img_alt: The Koa logo.
startDate: 2021-07-02 15:14:00
endDate: 2024-04-24 00:00:00
status: Archived
repo: https://github.com/4lch4/Koa-Router-Printer
description: A library to print the routes added to a Koa App/Router.
tags:
  - Node.js
  - TypeScript
  - Libraries
  - Koa.js
---

Koa Router Printer is a lightweight utility for Koa.js applications that utilize `@koa/router`. It outputs a two-column table containing the registered path(s) and method(s) like so:

```bash
┌─────────────────────────┬─────────┐
│ Path                    │ Methods │
├─────────────────────────┼─────────┤
│ /api/v1/health/liveness │   GET   │
├─────────────────────────┼─────────┤
│ /api/v1/health/liveness │   GET   │
└─────────────────────────┴─────────┘
```

I have since archived the repository as I no longer use Koa.js in my projects. Last I checked it was still functional but I will no longer maintain it.
