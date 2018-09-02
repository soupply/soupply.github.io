---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  update-soft-enum

# Update soft enum

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.UpdateSoftEnum)

**Id**: 114

**Id** (hex): 72

**Id** (bin): 01110010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
name | string
values | string[]
[type](#type) | ubyte

### type

**Constants**:

Name | Value
---|:---:
add | 0
remove | 1
set | 2
