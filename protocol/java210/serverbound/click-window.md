---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [serverbound](/protocol/java210/serverbound)  /  click-window

# Click window

Encode/decode this packet in [Sandbox](../../../sandbox/java210#serverbound.click_window)

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
clicked item | [slot](/protocol/java210/types/slot)
