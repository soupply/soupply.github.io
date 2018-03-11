---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [login](/protocol/java340/login)  /  encryption-response

# Encryption response

Encode/decode this packet in [Sandbox](../../../sandbox/java340#login.encryption_response)

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
