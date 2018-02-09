---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  login

# Login

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

First MCPE packet sent after the establishment of the connection through raknet. It contains informations about the player.

## Fields

Name | Type
---|---
[protocol](#protocol) | uint
[edition](#edition) | ubyte
[body](#body) | ubyte[]

### protocol

Version of the protocol used by the player.

### edition

Edition that the player is using to join the server. The different editions may have different features and servers may block the access from unaccepted editions of the game.

**Constants**:

Name | Value
---|:---:
[classic](edition_classic) | 0
[education](edition_education) | 1

### body

Zlib-compressed bytes that contains 2 JWTs with more informations about the player and its account. Once uncompressed the resulting payload will contain 2 JWTs which length is indicated by a little-endian unsigned integer each.

