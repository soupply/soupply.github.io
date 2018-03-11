---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.add_item_entity)

**Id**: 16

**Id** (hex): 10

**Id** (bin): 00010000

**Clientbound**: ✔️

**Serverbound**: ✖️

Spawns a dropped item.

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varlong
item | [slot](/protocol/pocket101/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
