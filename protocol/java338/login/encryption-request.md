---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [login](/protocol/java338/login)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Login.EncryptionRequest)

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
