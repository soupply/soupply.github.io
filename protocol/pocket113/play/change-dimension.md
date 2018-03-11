---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  change-dimension

# Change dimension

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.change_dimension)

**Id**: 61

**Id** (hex): 3D

**Id** (bin): 00111101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[dimension](#dimension) | varint
position | float&lt;xyz&gt;
? | bool

### dimension

**Constants**:

Name | Value
---|:---:
overworld | 0
nether | 1
end | 2
