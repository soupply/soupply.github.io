---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  update-block

# Update block

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.update_block)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/pocket101/types/block-position)
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
