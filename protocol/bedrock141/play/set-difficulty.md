---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  set-difficulty

# Set difficulty

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.SetDifficulty)

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
