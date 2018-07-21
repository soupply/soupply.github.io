---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  player-block-placement

# Player block placement

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.PlayerBlockPlacement)

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
main hand | 0
off hand | 1
