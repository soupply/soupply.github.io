---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  player-skin

# Player skin

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.PlayerSkin)

**Id**: 93

**Id** (hex): 5D

**Id** (bin): 01011101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
uuid | [mcpeUuid](/protocol/bedrock137/types/mcpe-uuid)
skin id | string
skin name | string
? | string
skin data | ubyte[]
cape data | ubyte[]
geometry model | string
geometry data | ubyte[]
