---
layout: default
---

[home](/)  /  [bedrock201](/protocol/bedrock201)  /  [play](/protocol/bedrock201/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock201#Play.SetSpawnPosition)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | varint
position | [blockPosition](/protocol/bedrock201/types/block-position)
forced | bool

### type

**Constants**:

Name | Value
---|:---:
player spawn | 0
world spawn | 1
