---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  set-difficulty

# Set difficulty

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.set_difficulty)

**Id**: 61

**Id** (hex): 3D

**Id** (bin): 00111101

**Clientbound**: ✔️

**Serverbound**: ✖️

Sets the world's difficulty.

## Fields

Name | Type
---|---
[difficulty](#difficulty) | varuint

### difficulty

**Constants**:

Name | Value
---|:---:
peaceful | 0
easy | 1
normal | 2
hard | 3
