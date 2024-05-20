---
title: '@4lch4/koa-router-printer'
img: /assets/img/Koa.png
startDate: 2023-09-22 00:00:00
repo: https://github.com/4lch4/Koa-Router-Printer
description: A small library to print the routes added to a Koa App/Router.
tags:
  - Node
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
