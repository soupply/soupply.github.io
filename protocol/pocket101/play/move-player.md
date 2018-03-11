---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  move-player

# Move player

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.move_player)

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
full | 0
none | 1
rotation | 2
