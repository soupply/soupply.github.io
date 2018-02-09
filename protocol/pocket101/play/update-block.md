---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  update-block

# Update-block

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
[neighbors](flags-and-meta_neighbors) | 1
[network](flags-and-meta_network) | 2
[no graphic](flags-and-meta_no-graphic) | 4
[priority](flags-and-meta_priority) | 8

