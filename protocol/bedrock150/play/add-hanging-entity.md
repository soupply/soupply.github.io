---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  add-hanging-entity

# Add hanging entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.AddHangingEntity)

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
position | [blockPosition](/protocol/bedrock150/types/block-position)
? | varint
