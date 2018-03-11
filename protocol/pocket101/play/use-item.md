---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  use-item

# Use item

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.use_item)

**Id**: 35

**Id** (hex): 23

**Id** (bin): 00100011

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
block position | [blockPosition](/protocol/pocket101/types/block-position)
hotbar slot | varuint
face | varint
face position | float&lt;xyz&gt;
position | float&lt;xyz&gt;
slot | varint
item | [slot](/protocol/pocket101/types/slot)
