---
layout: default
---

[home](/)  /  [pocket102](/protocol/pocket102)  /  [play](/protocol/pocket102/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/pocket102#Play.ContainerOpen)

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
position | [blockPosition](/protocol/pocket102/types/block-position)
entity id | varlong
