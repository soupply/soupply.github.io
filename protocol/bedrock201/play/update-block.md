---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  update-block

# Update block

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
[neighbors](flags-and-meta_neighbors) | 1
[network](flags-and-meta_network) | 2
[no graphic](flags-and-meta_no-graphic) | 4
[priority](flags-and-meta_priority) | 8
