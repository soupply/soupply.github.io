---
layout: default
---

[home](/)  /  [pocket113](/protocol/pocket113)  /  [play](/protocol/pocket113/play)  /  container-set-content

# Container set content

Encode/decode this packet in [Sandbox](../../../sandbox/pocket113#Play.ContainerSetContent)

**Id**: 52

**Id** (hex): 34

**Id** (bin): 00110100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | varuint
entity id | varlong
slots | [slot](/protocol/pocket113/types/slot)[]
hotbar | varint[]
