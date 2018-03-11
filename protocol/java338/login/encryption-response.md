---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [login](/protocol/java338/login)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Login.EncryptionResponse)

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
