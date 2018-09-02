---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.AddItemEntity)

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
item | [slot](/protocol/bedrock282/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
metadata | [metadata](/protocol/bedrock282/metadata)
