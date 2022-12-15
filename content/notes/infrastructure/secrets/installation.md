---
title: Doppler Installation
author: 4lch4
weight: 5
menu:
  notes:
    name: Doppler Installation
    identifier: notes-infrastructure-doppler-secrets-setup
    parent: notes-infrastructure-doppler-secrets
    weight: 5
---

{{< note title="Doppler Installation" >}}

{{< alert type="info" >}}

This note provides instructions on how to install and initialize an installation of the <a href="https://www.doppler.com" target="_blank">Doppler</a> <a href="https://docs.doppler.com/docs/install-cli" target="_blank">CLI utility</a>:

{{< /alert >}}

{{< alert type="warning" >}}

_NOTE: After you've installed the CLI utility (on any OS), you must login to your account so you have access to your secrets:_

```bash
doppler login
```

{{< /alert >}}

## MacOS

```bash
# Prerequisite. gnupg is required for binary signature verification
brew install gnupg

# Next, install using brew (use `doppler update` for subsequent updates)
brew install dopplerhq/cli/doppler
```

<br />

## Windows

```powershell
# Scoop is the recommended installation method
scoop bucket add doppler https://github.com/DopplerHQ/scoop-doppler.git
scoop install doppler

# Git Bash is also supported
mkdir -p $HOME/bin
curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh | sh -s -- --install-path $HOME/bin
```

<br />

## Linux (Ubuntu)

```bash
sudo apt-get update && sudo apt-get install -y apt-transport-https ca-certificates curl gnupg
curl -sLf --retry 3 --tlsv1.2 --proto "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' | sudo apt-key add -
echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/doppler-cli.list
sudo apt-get update && sudo apt-get install doppler
```

<br />

## Linux (Alpine)

```bash
wget -q -t3 'https://packages.doppler.com/public/cli/rsa.8004D9FF50437357.key' -O /etc/apk/keys/cli@doppler-8004D9FF50437357.rsa.pub
echo 'https://packages.doppler.com/public/cli/alpine/any-version/main' | tee -a /etc/apk/repositories
apk add doppler
```

{{< /note >}}
