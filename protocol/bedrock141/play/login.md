---
layout: default
---

[home](/) ➡ [bedrock141](/protocol/bedrock141) ➡ [play](/protocol/bedrock141/play) ➡ login

# Login

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

✔️

✔️

First MCPE packet sent after the establishment of the connection through raknet. It contains informations about the player.

## Fields

Name | Type | Endianness | Default
---|---|:---:|:---:
[protocol](#protocol) | uint | big endian | 141
[body](#body) | [loginBody](/protocol/bedrock141/types/login-body) |  | 

### protocol

Version of the protocol used by the player.

### body

Payload that contains 2 JWTs (with each length indicated by an unsigned little-endian 32-bits integer) with more informations about the player and its account.

