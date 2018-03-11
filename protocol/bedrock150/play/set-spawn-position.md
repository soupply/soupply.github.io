---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  set-spawn-position

# Set spawn position

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.SetSpawnPosition)

**Id**: 43

**Id** (hex): 2B

**Id** (bin): 00101011

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | varint
position | [blockPosition](/protocol/bedrock150/types/block-position)
forced | bool

### type

**Constants**:

Name | Value
---|:---:
player spawn | 0
world spawn | 1
