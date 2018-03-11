---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  update-block

# Update block

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#play.update_block)

**Id**: 21

**Id** (hex): 15

**Id** (bin): 00010101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/bedrock201/types/block-position)
block | varuint
[flags and meta](#flags-and-meta) | varuint

### flags and meta

**Constants**:

Name | Value
---|:---:
neighbors | 1
network | 2
no graphic | 4
priority | 8
