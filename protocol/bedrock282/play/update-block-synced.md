---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  update-block-synced

# Update block synced

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.UpdateBlockSynced)

**Id**: 110

**Id** (hex): 6E

**Id** (bin): 01101110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
position | [blockPosition](/protocol/bedrock282/types/block-position)
block | varuint
[flags and meta](#flags-and-meta) | varuint
entity id | varlong
? | varulong

### flags and meta

**Constants**:

Name | Value
---|:---:
neighbors | 1
network | 2
no graphic | 4
priority | 8
