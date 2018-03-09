---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  move-player

# Move player

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
entity id | varlong
position | float&lt;xyz&gt;
pitch | float
head yaw | float
yaw | float
[animation](#animation) | ubyte
on ground | bool

### animation

**Constants**:

Name | Value
---|:---:
[full](animation_full) | 0
[none](animation_none) | 1
[rotation](animation_rotation) | 2
