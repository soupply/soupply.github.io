---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  click-window

# Click-window

**Id**: 8

**Id** (hex): 08

**Id** (bin): 00001000

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
clicked item | [slot](/protocol/java335/types/slot)

