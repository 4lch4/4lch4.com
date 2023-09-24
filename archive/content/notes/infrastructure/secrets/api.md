---
title: Doppler API
weight: 30
menu:
  notes:
    name: Doppler API
    identifier: notes-infrastructure-doppler-secrets-doppler-api
    parent: notes-infrastructure-doppler-secrets
    weight: 30
---

{{< note title="Doppler API" >}}

{{< alert type="info" >}}

This note provides information on how to fetch Doppler secrets from within your application.

Doppler provides the <a href="https://docs.doppler.com/reference#download" target="_blank">Secrets Download API</a> however, if you're using NodeJS then you can make use of their <a href="https://www.npmjs.com/package/gitops-secrets" target="_blank">gitops-secrets library</a> to do this a bit easier.

{{< /alert >}}

{{< alert type="warning" >}}

_NOTE: Doppler has plans to publish an official SDK for Node, Go, and PHP, but when it will be available has not been shared, so this is the only method for the time being._

{{< /alert >}}

## Preflight Check

The first step is to create a <a href="https://docs.doppler.com/docs/enclave-service-tokens" target="_blank">Service Token</a> to provide read-only access to the project and config you wish to supply secrets for:

![Copy-Service-Token](https://assets.4lch4.cloud/projects/4lch4.com/notes/Copy-Service-Token.png)

Then expose the Service Token value to your environment using the `DOPPLER_TOKEN` environment variable:

```bash
export DOPPLER_TOKEN='dp.st.dev.xxxx'
```

<br />

## Async

Create a `doppler-secrets.js` file and fetch secrets from the API using either the built-in `https` module or a third-party package such as [axios](https://www.npmjs.com/package/axios):

```javascript
// doppler-secrets.js

const https = require('https')

module.exports.getSecrets = async () => {
  return new Promise(function (resolve, reject) {
    https
      .get(
        `https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`,
        res => {
          let secrets = ''
          res.on('data', data => (secrets += data))
          res.on('end', () => resolve(JSON.parse(secrets)))
        }
      )
      .on('error', e => reject(e))
  })
}
```

```javascript
// doppler-secrets.js

const axios = require('axios')

module.exports.getSecrets = async () => {
  const response = await axios.get(
    `https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`
  )
  return response.data
}
```

Then use an async require to fetch the secrets in your application:

```javascript
// app.js

const doppler = require('./doppler-secrets')

;(async () => {
  const secrets = await doppler.getSecrets()
})()
```

## Sync

Using async code to fetch secrets may have the undesirable side effect of making previously synchronous code now async.

A workaround for fetching secrets asynchronously is to provide the additional option for executing `doppler-secrets.js` as a script and parsing the JSON output from `stdout`:

```javascript
// doppler-secrets.js

const https = require('https')

module.exports.getSecrets = async () => {
  return new Promise(function (resolve, reject) {
    https
      .get(
        `https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`,
        res => {
          let secrets = ''
          res.on('data', data => (secrets += data))
          res.on('end', () => resolve(JSON.parse(secrets)))
        }
      )
      .on('error', e => reject(e))
  })
}

// If executed as a script
if (require.main === module) {
  ;(async () => {
    const secrets = await this.getSecrets()
    process.stdout.write(JSON.stringify(secrets))
  })()
}
```

```javascript
// doppler-secrets.js

const axios = require('axios')

module.exports.getSecrets = async () => {
  const response = await axios.get(
    `https://${process.env.DOPPLER_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`
  )
  return response.data
}

// If executed as a script
if (require.main === module) {
  ;(async () => {
    const secrets = await this.getSecrets()
    process.stdout.write(JSON.stringify(secrets))
  })()
}
```

Then execute `doppler-secrets.js` synchronously:

JavaScript

```javascript
// app.js

const secrets = JSON.parse(require('child_process').execSync('node doppler-secrets.js'))
```

{{< /note >}}
