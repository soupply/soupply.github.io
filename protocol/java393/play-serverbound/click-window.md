---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-serverbound](/protocol/java393/play-serverbound)  /  click-window

# Click window

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayServerbound.ClickWindow)

**Id**: 7

**Id** (hex): 07

**Id** (bin): 00000111

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type
---|---
window | ubyte
slot | ushort
button | ubyte
action | ushort
mode | varuint
clicked item | [slot](/protocol/java393/types/slot)
