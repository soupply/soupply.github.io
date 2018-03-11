---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [serverbound](/protocol/java316/serverbound)  /  player-block-placement

# Player block placement

Encode/decode this packet in [Sandbox](../../../sandbox/java316#serverbound.player_block_placement)

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
cursor position | float&lt;xyz&gt;

### hand

**Constants**:

Name | Value
---|:---:
main hand | 0
off hand | 1
