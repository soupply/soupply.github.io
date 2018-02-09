---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  player-position-and-look

# Player-position-and-look

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
[x](flags_x) | 1
[y](flags_y) | 2
[z](flags_z) | 4
[y rotation](flags_y-rotation) | 8
[x rotation](flags_x-rotation) | 16

