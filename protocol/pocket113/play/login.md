---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  login

# Login

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

First MCPE packet sent after the establishment of the connection through raknet. It contains informations about the player.

## Fields

Name | Type | Default
---|---|:---:
[protocol](#protocol) | uint | 113
[version](#version) | ubyte | 
[body](#body) | [loginBody](/protocol/pocket113/types/login-body) | 

### protocol

Version of the protocol used by the player.

### version

Edition that the player is using to join the server. The different editions may have different features and servers may block the access from unaccepted editions of the game.

**Constants**:

Name | Value
---|:---:
[vanilla](version_vanilla) | 0
[education](version_education) | 1

### body

Payload that contains 2 JWTs (with each length indicated by an unsigned little-endian 32-bits integer) with more informations about the player and its account.
