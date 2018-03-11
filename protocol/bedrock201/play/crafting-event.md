---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.CraftingEvent)

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
uuid | [mcpeUuid](/protocol/bedrock201/types/mcpe-uuid)
input | [slot](/protocol/bedrock201/types/slot)[]
output | [slot](/protocol/bedrock201/types/slot)[]
