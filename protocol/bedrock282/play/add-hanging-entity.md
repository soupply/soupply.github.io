---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  add-hanging-entity

# Add hanging entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.AddHangingEntity)

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
position | [blockPosition](/protocol/bedrock282/types/block-position)
? | varint
