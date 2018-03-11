---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  set-difficulty

# Set difficulty

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.set_difficulty)

**Id**: 60

**Id** (hex): 3C

**Id** (bin): 00111100

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
