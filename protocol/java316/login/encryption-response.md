---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [login](/protocol/java316/login)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Login.EncryptionResponse)

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
