---
title: Secret(s) Management
author: 4lch4
weight: 10
menu:
  notes:
    name: Secret(s) Management
    identifier: notes-infrastructure-secrets-management
    parent: notes-infrastructure
    weight: 10
---

{{< note title="Secret(s) Management" >}}

For the time being, I've decided to use <a href="https://www.doppler.com" target="_blank">Doppler</a> to manage/share/etc. secrets throughout my infrastructure.

I say "for the time being" because my end goal for secret management is to self-host the infrastructure where my secrets are actually stored, as opposed to being stored by a 3rd party. To achieve this, I've been experimenting with other solutions such as <a href="https://www.vaultproject.io" target="_blank">Vault</a> by <a href="https://www.hashicorp.com" target="_blank">HashiCorp</a>.

Until I make the move to a self-hosted solution, I wrote [a note][0] on how to best make use of Doppler.

[0]: /notes/infrastructure/doppler

{{< /note >}}
