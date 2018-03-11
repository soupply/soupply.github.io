---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  move-entity

# Move entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.MoveEntity)

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
