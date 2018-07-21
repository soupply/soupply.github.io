---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  player-block-placement

# Player block placement

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.PlayerBlockPlacement)

**Id**: 41

**Id** (hex): 29

**Id** (bin): 00101001

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
main hand | 0
off hand | 1
