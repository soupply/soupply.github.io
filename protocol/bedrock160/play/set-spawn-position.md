---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  set-spawn-position

# Set spawn position

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
[player spawn](type_player-spawn) | 0
[world spawn](type_world-spawn) | 1
