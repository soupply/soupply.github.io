---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [login-serverbound](/protocol/java393/login-serverbound)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java393#LoginServerbound.EncryptionResponse)

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
