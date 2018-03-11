---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [login](/protocol/java210/login)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Login.EncryptionResponse)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
shared secret | ubyte[]
verify token | ubyte[]
