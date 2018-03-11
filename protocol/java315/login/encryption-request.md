---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [login](/protocol/java315/login)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java315#login.encryption_request)

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
