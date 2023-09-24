---
title: UUID Generation
weight: 10
menu:
  notes:
    name: UUID Generation
    identifier: notes-development-nodejs-snippets-uuid-generation
    parent: notes-development-nodejs-snippets
    weight: 10
---

{{< note title="UUID Generation">}}

{{< alert type="info" >}}

> Generates a UUID in Node.JS.

- Use `crypto.randomBytes()` to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.
- Use `Number.prototype.toString(16)` to convert it to a proper UUID.

{{< /alert >}}

```javascript
const crypto = require('crypto')

const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  )

UUIDGeneratorNode() // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```

```typescript data-filename="test.ts"
import { randomBytes } from 'crypto'

const UUIDGeneratorNode = (): string =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  )

UUIDGeneratorNode() // '79c7c136-60ee-40a2-beb2-856f1feabefc'
```

{{< /note >}}
