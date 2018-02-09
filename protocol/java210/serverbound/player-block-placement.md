---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  player-block-placement

# Player block placement

**Id**: 28

**Id** (hex): 1C

**Id** (bin): 00011100

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
position | ulong
face | varuint
[hand](#hand) | varuint
cursor position | ubyte&lt;xyz&gt;

### hand

**Constants**:

Name | Value
---|:---:
[main hand](hand_main-hand) | 0
[off hand](hand_off-hand) | 1

