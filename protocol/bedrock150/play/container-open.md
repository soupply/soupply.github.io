---
layout: default
---

[home](/)  /  [bedrock150](/protocol/bedrock150)  /  [play](/protocol/bedrock150/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock150#Play.ContainerOpen)

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
position | [blockPosition](/protocol/bedrock150/types/block-position)
entity id | varlong
