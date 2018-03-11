---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [login](/protocol/java340/login)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java340#login.encryption_request)

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
