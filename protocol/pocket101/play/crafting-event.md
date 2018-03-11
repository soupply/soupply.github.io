---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  crafting-event

# Crafting event

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.crafting_event)

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
input | [slot](/protocol/pocket101/types/slot)[]
output | [slot](/protocol/pocket101/types/slot)[]
