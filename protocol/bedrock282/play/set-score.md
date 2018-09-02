---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  set-score

# Set score

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.SetScore)

**Id**: 108

**Id** (hex): 6C

**Id** (bin): 01101100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | ubyte
scores | [score](/protocol/bedrock282/types/score)[]

### type

**Constants**:

Name | Value
---|:---:
modify | 0
reset | 1
