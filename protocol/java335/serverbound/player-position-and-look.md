---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.player_position_and_look)

**Id**: 15

**Id** (hex): 0F

**Id** (bin): 00001111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | double&lt;xyz&gt;
yaw | float
pitch | float
on ground | bool
