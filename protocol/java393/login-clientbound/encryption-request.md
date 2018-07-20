---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [login-clientbound](/protocol/java393/login-clientbound)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java393#LoginClientbound.EncryptionRequest)

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
