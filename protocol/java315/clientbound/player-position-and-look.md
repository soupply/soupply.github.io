---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  player-position-and-look

# Player position and look

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
[x](flags_x) | 1
[y](flags_y) | 2
[z](flags_z) | 4
[y rotation](flags_y-rotation) | 8
[x rotation](flags_x-rotation) | 16
