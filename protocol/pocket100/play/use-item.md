---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  use-item

# Use item

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#Play.UseItem)

**Id**: 35

**Id** (hex): 23

**Id** (bin): 00100011

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
block position | [blockPosition](/protocol/pocket100/types/block-position)
hotbar slot | varuint
face | varint
face position | float&lt;xyz&gt;
position | float&lt;xyz&gt;
slot | varint
item | [slot](/protocol/pocket100/types/slot)
