---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  update-command-block

# Update command block

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.UpdateCommandBlock)

**Id**: 34

**Id** (hex): 22

**Id** (bin): 00100010

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
location | [position](/protocol/java393/types/position)
command | string
[mode](#mode) | varuint
[flags](#flags) | ubyte

### mode

**Constants**:

Name | Value
---|:---:
sequence | 0
auto | 1
redstone | 2

### flags

**Constants**:

Name | Value
---|:---:
track output | 1
conditional | 2
automatic | 4
