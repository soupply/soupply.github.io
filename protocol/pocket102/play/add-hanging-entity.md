---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  add-hanging-entity

# Add hanging entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.AddHangingEntity)

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
position | [blockPosition](/protocol/pocket102/types/block-position)
? | varint
