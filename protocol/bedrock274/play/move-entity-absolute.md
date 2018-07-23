---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  move-entity-absolute

# Move entity absolute

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.MoveEntityAbsolute)

**Id**: 18

**Id** (hex): 12

**Id** (bin): 00010010

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
entity id | varlong
[flags](#flags) | ubyte
position | float&lt;xyz&gt;
rotation | byte&lt;xyz&gt;

### flags

**Constants**:

Name | Value
---|:---:
ground | 1
teleport | 2
