---
title: Running Commands
weight: 10
menu:
  notes:
    name: Running Commands
    identifier: notes-infrastructure-doppler-secrets-running-commands
    parent: notes-infrastructure-doppler-secrets
    weight: 10
---

{{< note title="Running Commands" >}}

{{< alert type="info" >}}

How to run a command so that it has access to secrets stored in Doppler:

{{< /alert >}}

## Single Command

```bash
doppler run -- <command-to-run>
```

<br />

## Multiple Commands

```bash
doppler run --command="echo 'first part' && echo 'secondary part'; echo 'final part'"
```

<br />

## Using a Secret

{{< alert type="success" >}}

To run one-off commands using a secret in Doppler, please make sure to escape the secret or use single quotes. You will need to do this to guard against shell parsing the variable before the run command executes.

{{< /alert >}}

### Escaped

```bash
doppler run --command="echo \$SECRET_NAME"
```

<br />

### Single Quotes

```bash
doppler run --command='echo $SECRET_NAME'
```

<br />

### Individual

```bash
echo $(doppler secrets get SECRET_NAME --plain)
```

{{< /note >}}
