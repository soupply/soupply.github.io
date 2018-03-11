---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  update-block

# Update block

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#play.update_block)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/pocket102/types/block-position)
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
