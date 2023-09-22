---
title: VSCode Node Support
weight: 20
menu:
  notes:
    name: VSCode Node Support
    identifier: notes-infrastructure-doppler-secrets-vscode-node
    parent: notes-infrastructure-doppler-secrets
    weight: 20
---

{{< note title="VSCode Node Support" >}}

{{< alert type="info" >}}

This note is a trimmed copy of <a href="https://docs.doppler.com/docs/vscode-nodejs" target="_blank">a guide</a> provided by <a href="https://www.doppler.com" target="_blank">Doppler</a> that will "show you how to integrate the Doppler CLI into your Node.js application development and debugging workflow inside Visual Studio Code.":

{{< /alert >}}

## Prerequisites

Before beginning, ensure the following prerequisites have been met:

- <a href="https://docs.doppler.com/docs/enclave-installation" target="_blank">Doppler CLI</a> installed locally and authenticated (`doppler login`).
- Created a <a href="https://docs.doppler.com/docs/enclave-project-setup" target="_blank">Doppler Project</a> for your application

## Launch Configuration

Update your existing launch configuration by creating or setting `runtimeExecutable` to `doppler` and `runtimeArgs` to include the command for running your application.

A typical launch configuration object will look like the following:

```javascript
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "node: server",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "doppler",
      "runtimeArgs": ["run", "--", "npm","start"]
    }
  ]
}
```

{{< /note >}}
