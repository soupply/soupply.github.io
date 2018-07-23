---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.AddItemEntity)

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
item | [slot](/protocol/bedrock274/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
metadata | [metadata](/protocol/bedrock274/metadata)
