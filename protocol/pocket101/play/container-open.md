---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  container-open

# Container open

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.container_open)

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
position | [blockPosition](/protocol/pocket101/types/block-position)
entity id | varlong
