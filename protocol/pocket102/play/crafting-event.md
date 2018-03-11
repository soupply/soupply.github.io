---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.CraftingEvent)

**Id**: 54

**Id** (hex): 36

**Id** (bin): 00110110

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
type | varint
uuid | uuid
input | [slot](/protocol/pocket102/types/slot)[]
output | [slot](/protocol/pocket102/types/slot)[]
