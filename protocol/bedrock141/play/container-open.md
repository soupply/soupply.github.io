---
layout: default
---

[home](/)  /  [bedrock141](/protocol/bedrock141)  /  [play](/protocol/bedrock141/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock141#Play.ContainerOpen)

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
position | [blockPosition](/protocol/bedrock141/types/block-position)
entity id | varlong
