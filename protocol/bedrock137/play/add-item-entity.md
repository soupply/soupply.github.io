---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  add-item-entity

# Add item entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.AddItemEntity)

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
item | [slot](/protocol/bedrock137/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
metadata | [metadata](/protocol/bedrock137/metadata)
