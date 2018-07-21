---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.PlayerPositionAndLook)

**Id**: 17

**Id** (hex): 11

**Id** (bin): 00010001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | double&lt;xyz&gt;
yaw | float
pitch | float
on ground | bool
