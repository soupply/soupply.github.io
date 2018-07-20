---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  set-slot

# Set slot

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.SetSlot)

**Id**: 23

**Id** (hex): 17

**Id** (bin): 00010111

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
slot | ushort
item | [slot](/protocol/java393/types/slot)
