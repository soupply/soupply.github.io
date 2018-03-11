---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#play.set_spawn_position)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | varint
position | [blockPosition](/protocol/bedrock141/types/block-position)
forced | bool

### type

**Constants**:

Name | Value
---|:---:
player spawn | 0
world spawn | 1
