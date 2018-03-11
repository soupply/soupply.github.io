---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  use-item

# Use item

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.use_item)

**Id**: 36

**Id** (hex): 24

**Id** (bin): 00100100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
block position | [blockPosition](/protocol/pocket105/types/block-position)
hotbar slot | varuint
face | varint
face position | float&lt;xyz&gt;
position | float&lt;xyz&gt;
slot | varint
item | [slot](/protocol/pocket105/types/slot)
