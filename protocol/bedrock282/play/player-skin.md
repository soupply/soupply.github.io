---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  player-skin

# Player skin

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.PlayerSkin)

**Id**: 93

**Id** (hex): 5D

**Id** (bin): 01011101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
uuid | [mcpeUuid](/protocol/bedrock282/types/mcpe-uuid)
skin id | string
skin name | string
? | string
skin data | ubyte[]
cape data | ubyte[]
geometry model | string
geometry data | ubyte[]
