---
title: Create Directory if not Found
weight: 10
menu:
  notes:
    name: Create Directory if not Found
    identifier: notes-development-nodejs-snippets-create-dir-if-not-found
    parent: notes-development-nodejs-snippets
    weight: 10
---

{{< note title="Create Directory if not Found">}}

{{< alert type="info" >}}

> Creates a directory, if it does not exist.

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

{{< /alert >}}

```javascript
const fs = require('fs')

const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined)

createDirIfNotExists('test')
// creates the directory 'test', if it doesn't exist
```

```typescript
import { existsSync, mkdirSync } from 'fs'

const createDirIfNotExists = (dir: string) => (!existsSync(dir) ? mkdirSync(dir) : undefined)

createDirIfNotExists('test')
// creates the directory 'test', if it doesn't exist
```

{{< /note >}}
