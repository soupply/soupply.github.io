---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  container-set-slot

# Container set slot

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#play.container_set_slot)

**Id**: 50

**Id** (hex): 32

**Id** (bin): 00110010

**Clientbound**: ✔️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
slot | varint
hotbar slot | varint
item | [slot](/protocol/pocket101/types/slot)
? | ubyte
