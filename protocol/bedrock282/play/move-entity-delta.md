---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  move-entity-delta

# Move entity delta

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.MoveEntityDelta)

**Id**: 111

**Id** (hex): 6F

**Id** (bin): 01101111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | When
---|---|:---:
[flags](#flags) | ubyte | 
x diff | varint | <code>(flags & 1)</code> is not equal to <code>0</code>
y diff | varint | <code>(flags & 2)</code> is not equal to <code>0</code>
z diff | varint | <code>(flags & 4)</code> is not equal to <code>0</code>
x rot | byte | <code>(flags & 8)</code> is not equal to <code>0</code>
y rot | byte | <code>(flags & 16)</code> is not equal to <code>0</code>
z rot | byte | <code>(flags & 32)</code> is not equal to <code>0</code>

### flags

**Constants**:

Name | Value
---|:---:
has diff x | 1
has diff y | 2
has diff z | 4
has rot x | 8
has rot y | 16
has rot z | 32
