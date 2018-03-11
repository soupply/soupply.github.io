---
layout: default
---

[home](/)  /  [pocket100](/protocol/pocket100)  /  [play](/protocol/pocket100/play)  /  container-set-content

# Container set content

Encode/decode this packet in [Sandbox](../../../sandbox/pocket100#Play.ContainerSetContent)

**Id**: 52

**Id** (hex): 34

**Id** (bin): 00110100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
slots | [slot](/protocol/pocket100/types/slot)[]
hotbar | varint[]
