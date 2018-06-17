---
layout: default
---

[home](/)  /  [bedrock261](/protocol/bedrock261)  /  [play](/protocol/bedrock261/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock261#Play.ContainerOpen)

**Id**: 46

**Id** (hex): 2E

**Id** (bin): 00101110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
type | ubyte
position | [blockPosition](/protocol/bedrock261/types/block-position)
entity id | varlong
