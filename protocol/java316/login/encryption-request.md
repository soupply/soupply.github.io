---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [login](/protocol/java316/login)  /  encryption-request

# Encryption request

Encode/decode this packet in [Sandbox](../../../sandbox/java316#login.encryption_request)

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
