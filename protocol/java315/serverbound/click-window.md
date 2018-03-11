---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [serverbound](/protocol/java315/serverbound)  /  click-window

# Click window

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Serverbound.ClickWindow)

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
clicked item | [slot](/protocol/java315/types/slot)
