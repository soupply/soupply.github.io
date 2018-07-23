---
layout: default
---

[home](/)  /  [bedrock274](/protocol/bedrock274)  /  [play](/protocol/bedrock274/play)  /  set-score

# Set score

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock274#Play.SetScore)

**Id**: 108

**Id** (hex): 6C

**Id** (bin): 01101100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
[type](#type) | ubyte
scores | [score](/protocol/bedrock274/types/score)[]

### type

**Constants**:

Name | Value
---|:---:
modify | 0
reset | 1
