---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#play.add_item_entity)

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
item | [slot](/protocol/bedrock141/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
metadata | [metadata](/protocol/bedrock141/metadata)
