---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#play.add_item_entity)

**Id**: 15

**Id** (hex): 0F

**Id** (bin): 00001111

**Clientbound**: ✔️

**Serverbound**: ✖️

Spawns a dropped item.

## Fields

Name | Type
---|---
entity id | varlong
runtime id | varulong
item | [slot](/protocol/bedrock150/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
metadata | [metadata](/protocol/bedrock150/metadata)
