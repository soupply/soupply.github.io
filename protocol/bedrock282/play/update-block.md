---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  update-block

# Update block

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.UpdateBlock)

**Id**: 21

**Id** (hex): 15

**Id** (bin): 00010101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/bedrock282/types/block-position)
block | varuint
[flags and meta](#flags-and-meta) | varuint
[data layer id](#data-layer-id) | varuint

### flags and meta

**Constants**:

Name | Value
---|:---:
neighbors | 1
network | 2
no graphic | 4
priority | 8

### data layer id

**Constants**:

Name | Value
---|:---:
normal | 0
liquid | 1
