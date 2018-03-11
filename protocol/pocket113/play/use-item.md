---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  use-item

# Use item

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.use_item)

**Id**: 35

**Id** (hex): 23

**Id** (bin): 00100011

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
block position | [blockPosition](/protocol/pocket113/types/block-position)
hotbar slot | varuint
face | varint
face position | float&lt;xyz&gt;
position | float&lt;xyz&gt;
slot | varint
item | [slot](/protocol/pocket113/types/slot)
