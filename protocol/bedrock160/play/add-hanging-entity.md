---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  add-hanging-entity

# Add hanging entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#Play.AddHangingEntity)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varulong
position | [blockPosition](/protocol/bedrock160/types/block-position)
? | varint
