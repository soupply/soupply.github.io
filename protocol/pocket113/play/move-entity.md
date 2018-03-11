---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  move-entity

# Move entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.move_entity)

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

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
on ground | bool
teleported | bool
