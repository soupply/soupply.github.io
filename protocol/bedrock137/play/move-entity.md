---
layout: default
---

[home](/)  /  [bedrock137](/protocol/bedrock137)  /  [play](/protocol/bedrock137/play)  /  move-entity

# Move entity

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock137#Play.MoveEntity)

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
