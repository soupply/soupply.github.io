---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#Play.ContainerOpen)

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
position | [blockPosition](/protocol/pocket113/types/block-position)
entity id | varlong
