---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  move-entity

# Move entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.move_entity)

**Id**: 19

**Id** (hex): 13

**Id** (bin): 00010011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
position | float&lt;xyz&gt;
pitch | ubyte
head yaw | ubyte
yaw | ubyte
