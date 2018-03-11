---
layout: default
---

[home](/)  /  [pocket105](/protocol/pocket105)  /  [play](/protocol/pocket105/play)  /  container-set-content

# Container set content

Encode/decode this packet in [Sandbox](../../../sandbox/pocket105#Play.ContainerSetContent)

**Id**: 53

**Id** (hex): 35

**Id** (bin): 00110101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
slots | [slot](/protocol/pocket105/types/slot)[]
hotbar | varint[]
