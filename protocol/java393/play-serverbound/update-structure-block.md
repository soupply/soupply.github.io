---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  update-structure-block

# Update structure block

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.UpdateStructureBlock)

**Id**: 37

**Id** (hex): 25

**Id** (bin): 00100101

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
location | [position](/protocol/java393/types/position)
[action](#action) | varuint
[mode](#mode) | varuint
offset | byte&lt;xyz&gt;
size | ubyte&lt;xyz&gt;
[mirror](#mirror) | varuint
[rotation](#rotation) | varuint
metadata | string
integrity | float
speed | varulong
[flags](#flags) | ubyte

### action

**Constants**:

Name | Value
---|:---:
update data | 0
save structure | 1
load structure | 2
detect size | 3

### mode

**Constants**:

Name | Value
---|:---:
save | 0
load | 1
corner | 2
data | 3

### mirror

**Constants**:

Name | Value
---|:---:
none | 0
left right | 1
front back | 2

### rotation

**Constants**:

Name | Value
---|:---:
clockwise 90 | 1
clockwise 180 | 2
counterclockwise 90 | 3

### flags

**Constants**:

Name | Value
---|:---:
ignore entities | 1
show air | 2
show bounding box | 4
