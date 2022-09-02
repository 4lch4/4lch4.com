---
title: Colors.ts
weight: 10
menu:
  notes:
    name: Colors.ts
    identifier: notes-development-nodejs-snippets-colors.ts
    parent: notes-development-nodejs-snippets
    weight: 10
---

{{< note title="Colors.ts">}}

{{< alert type="info" >}}
A helper file with a few functions to make it easier to color console output.
{{< /alert >}}

```typescript
export enum Colors {
  black = '\x1b[30m',
  red = '\x1b[31m',
  green = '\x1b[32m',
  yellow = '\x1b[33m',
  blue = '\x1b[34m',
  magenta = '\x1b[35m',
  cyan = '\x1b[36m',
  white = '\x1b[37m',
  bgBlack = '\x1b[40m',
  bgRed = '\x1b[41m',
  bgGreen = '\x1b[42m',
  bgYellow = '\x1b[43m',
  bgBlue = '\x1b[44m',
  bgMagenta = '\x1b[45m',
  bgCyan = '\x1b[46m',
  bgWhite = '\x1b[47m'
}

export const fg = {
  black: (...args: string[]) => `${Colors.black}${args.join(' ')}`,
  red: (...args: string[]) => `${Colors.red}${args.join(' ')}`,
  green: (...args: string[]) => `${Colors.green}${args.join(' ')}`,
  yellow: (...args: string[]) => `${Colors.yellow}${args.join(' ')}`,
  blue: (...args: string[]) => `${Colors.blue}${args.join(' ')}`,
  magenta: (...args: string[]) => `${Colors.magenta}${args.join(' ')}`,
  cyan: (...args: string[]) => `${Colors.cyan}${args.join(' ')}`,
  white: (...args: string[]) => `${Colors.white}${args.join(' ')}`
}

export const bg = {
  black: (...args: string[]) => `${Colors.bgBlack}${args.join(' ')}\x1b[0m`,
  red: (...args: string[]) => `${Colors.bgRed}${args.join(' ')}\x1b[0m`,
  green: (...args: string[]) => `${Colors.bgGreen}${args.join(' ')}\x1b[0m`,
  yellow: (...args: string[]) => `${Colors.bgYellow}${args.join(' ')}\x1b[0m`,
  blue: (...args: string[]) => `${Colors.bgBlue}${args.join(' ')}\x1b[0m`,
  magenta: (...args: string[]) => `${Colors.bgMagenta}${args.join(' ')}\x1b[0m`,
  cyan: (...args: string[]) => `${Colors.bgCyan}${args.join(' ')}\x1b[0m`,
  white: (...args: string[]) => `${Colors.bgWhite}${args.join(' ')}\x1b[0m`
}
```

{{< /note >}}
