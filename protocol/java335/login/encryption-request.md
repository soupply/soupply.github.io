---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [login](/protocol/java335/login)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Login.EncryptionRequest)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
server id | string
public key | ubyte[]
verify token | ubyte[]
