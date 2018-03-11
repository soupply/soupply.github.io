---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  player-position-and-look

# Player position and look

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.PlayerPositionAndLook)

**Id**: 46

**Id** (hex): 2E

**Id** (bin): 00101110

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
