---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [login](/protocol/java335/login)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Login.EncryptionResponse)

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
