---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  player-skin

# Player skin

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#play.player_skin)

**Id**: 93

**Id** (hex): 5D

**Id** (bin): 01011101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
uuid | [mcpeUuid](/protocol/bedrock201/types/mcpe-uuid)
skin id | string
skin name | string
? | string
skin data | ubyte[]
cape data | ubyte[]
geometry model | string
geometry data | ubyte[]
