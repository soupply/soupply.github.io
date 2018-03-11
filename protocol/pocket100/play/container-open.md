---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#Play.ContainerOpen)

**Id**: 48

**Id** (hex): 30

**Id** (bin): 00110000

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
type | ubyte
slot count | varint
position | [blockPosition](/protocol/pocket100/types/block-position)
entity id | varlong
