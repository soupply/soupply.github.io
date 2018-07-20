---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [serverbound](/protocol/java393/serverbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java393#Serverbound.PlayerPositionAndLook)

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
