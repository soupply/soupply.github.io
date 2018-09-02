---
layout: default
---

[home](/)  /  [bedrock282](/protocol/bedrock282)  /  [play](/protocol/bedrock282/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock282#Play.ContainerOpen)

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
position | [blockPosition](/protocol/bedrock282/types/block-position)
entity id | varlong
