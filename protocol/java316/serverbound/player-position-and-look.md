---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [serverbound](/protocol/java316/serverbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java316#serverbound.player_position_and_look)

**Id**: 13

**Id** (hex): 0D

**Id** (bin): 00001101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | double&lt;xyz&gt;
yaw | float
pitch | float
on ground | bool
