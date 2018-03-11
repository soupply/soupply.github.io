---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  change-dimension

# Change dimension

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.ChangeDimension)

**Id**: 62

**Id** (hex): 3E

**Id** (bin): 00111110

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
