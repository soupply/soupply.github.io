---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  login

# Login

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.Login)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

First MCPE packet sent after the establishment of the connection through raknet. It contains informations about the player.

## Fields

Name | Type | Endianness | Default
---|---|:---:|:---:
[protocol](#protocol) | uint | big endian | 282
[body](#body) | [loginBody](/protocol/bedrock282/types/login-body) |  | 

### protocol

Version of the protocol used by the player.

### body

Payload that contains 2 JWTs (with each length indicated by an unsigned little-endian 32-bits integer) with more informations about the player and its account.
