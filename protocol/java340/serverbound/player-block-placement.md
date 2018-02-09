---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [serverbound](/protocol/java340/serverbound)  /  player-block-placement

# Player-block-placement

**Id**: 31

**Id** (hex): 1F

**Id** (bin): 00011111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | ulong
face | varuint
[hand](#hand) | varuint
cursor position | float&lt;xyz&gt;

### hand

**Constants**:
Name | Value
---|:---:
[main hand](hand_main-hand) | 0
[off hand](hand_off-hand) | 1

