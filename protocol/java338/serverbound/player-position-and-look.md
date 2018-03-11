---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [serverbound](/protocol/java338/serverbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java338#serverbound.player_position_and_look)

**Id**: 14

**Id** (hex): 0E

**Id** (bin): 00001110

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | double&lt;xyz&gt;
yaw | float
pitch | float
on ground | bool
