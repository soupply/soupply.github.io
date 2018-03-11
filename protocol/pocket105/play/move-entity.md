---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  move-entity

# Move entity

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.MoveEntity)

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
