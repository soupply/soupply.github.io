---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#play.set_spawn_position)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | varint
position | [blockPosition](/protocol/bedrock160/types/block-position)
forced | bool

### type

**Constants**:

Name | Value
---|:---:
player spawn | 0
world spawn | 1
