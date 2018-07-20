---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.PlayerPositionAndLook)

**Id**: 50

**Id** (hex): 32

**Id** (bin): 00110010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | double&lt;xyz&gt;
yaw | float
pitch | float
[flags](#flags) | ubyte
teleport id | varuint

### flags

**Constants**:

Name | Value
---|:---:
x | 1
y | 2
z | 4
y rotation | 8
x rotation | 16
