---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  add-item-entity

# Add item entity

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
item | [slot](/protocol/pocket102/types/slot)
position | float&lt;xyz&gt;
motion | float&lt;xyz&gt;
