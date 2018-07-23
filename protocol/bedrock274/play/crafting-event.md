---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.CraftingEvent)

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
uuid | [mcpeUuid](/protocol/bedrock274/types/mcpe-uuid)
input | [slot](/protocol/bedrock274/types/slot)[]
output | [slot](/protocol/bedrock274/types/slot)[]
