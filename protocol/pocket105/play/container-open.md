---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#play.container_open)

**Id**: 49

**Id** (hex): 31

**Id** (bin): 00110001

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
type | ubyte
slot count | varint
position | [blockPosition](/protocol/pocket105/types/block-position)
entity id | varlong
