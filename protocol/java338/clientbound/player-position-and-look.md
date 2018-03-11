---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java338#clientbound.player_position_and_look)

**Id**: 47

**Id** (hex): 2F

**Id** (bin): 00101111

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
