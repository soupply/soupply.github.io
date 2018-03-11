---
layout: default
---

[home](/)  /  [bedrock160](/protocol/bedrock160)  /  [play](/protocol/bedrock160/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/bedrock160#play.container_open)

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
position | [blockPosition](/protocol/bedrock160/types/block-position)
entity id | varlong
