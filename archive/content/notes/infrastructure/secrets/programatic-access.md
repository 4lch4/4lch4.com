---
title: Programatic Access
weight: 15
menu:
  notes:
    name: Programatic Access
    identifier: notes-infrastructure-doppler-secrets-programatic-access
    parent: notes-infrastructure-doppler-secrets
    weight: 15
---

{{< note title="Programatic Access" >}}

{{< alert type="info" >}}

Accessing the secrets injected by <a href="https://www.doppler.com" target="_blank">Doppler</a> within a programming language:

{{< /alert >}}

## Node

```javascript
const secret = process.env['SECRET_NAME']
```

<br />

## Python

```python
secret = os.getenv("SECRET_NAME")
```

<br />

## Go

```go
secret := os.Getenv("SECRET_NAME")
```

<br />

## Java

```java
String secret = System.getenv().get("SECRET_NAME")
```

<br />

## Rust

```rust
secret = env::var("SECRET_NAME")
```

<br />

## Kotlin

```java
var secret: String = System.getenv("SECRET_NAME")
```

{{< /note >}}
