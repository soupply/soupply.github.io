---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  update-block

# Update block

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.update_block)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/pocket105/types/block-position)
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
