---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.CraftingEvent)

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
uuid | [mcpeUuid](/protocol/bedrock261/types/mcpe-uuid)
input | [slot](/protocol/bedrock261/types/slot)[]
output | [slot](/protocol/bedrock261/types/slot)[]
