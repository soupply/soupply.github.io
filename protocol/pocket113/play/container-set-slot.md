---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  container-set-slot

# Container set slot

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#play.container_set_slot)

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
item | [slot](/protocol/pocket113/types/slot)
? | ubyte
