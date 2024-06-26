---
title: '@4lch4/koa-oto'
img: /assets/img/Koa.png
img_alt: The Koa logo.
startDate: 2021-09-26 17:32:00
endDate: 2024-05-20 20:06:25
status: Archived
repo: https://github.com/4lch4/Koa-Oto
description: A wrapper for handling responses in Koa.js.
tags:
  - Node
  - TypeScript
  - Libraries
  - Koa.js
---

This library is a responder library for handling responses within the Koa framework.

## Example Usage

It isn't much, but this is the most basic way to use the library within your API:

```typescript
import { ClientErrors, Successful } from '@4lch4/koa-oto'
import Router from '@koa/router'
import Koa from 'koa'

const app = new Koa()
const router = new Router()

router.get('/', async ctx => Successful.ok(ctx, 'Hello World'))
router.get('/error', ctx => ClientErrors.badRequest(ctx, 'Bad Request'))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
```
