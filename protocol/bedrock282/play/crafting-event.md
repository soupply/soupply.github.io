---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.CraftingEvent)

**Id**: 53

**Id** (hex): 35

**Id** (bin): 00110101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
type | varint
uuid | [mcpeUuid](/protocol/bedrock282/types/mcpe-uuid)
input | [slot](/protocol/bedrock282/types/slot)[]
output | [slot](/protocol/bedrock282/types/slot)[]
