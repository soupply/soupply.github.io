---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  player-block-placement

# Player block placement

Encode/decode this packet in [Sandbox](../../../sandbox/java335#serverbound.player_block_placement)

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
