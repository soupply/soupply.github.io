---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  add-hanging-entity

# Add hanging entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.AddHangingEntity)

**Id**: 17

**Id** (hex): 11

**Id** (bin): 00010001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
position | [blockPosition](/protocol/pocket101/types/block-position)
? | varint
