---
layout: default
---

[home](/)  /  [pocket101](/protocol/pocket101)  /  [play](/protocol/pocket101/play)  /  container-set-content

# Container set content

Encode/decode this packet in [Sandbox](../../../sandbox/pocket101#Play.ContainerSetContent)

**Id**: 52

**Id** (hex): 34

**Id** (bin): 00110100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
slots | [slot](/protocol/pocket101/types/slot)[]
hotbar | varint[]
