---
layout: default
---

[home](/)  /  [java210](/protocol/java210)  /  [clientbound](/protocol/java210/clientbound)  /  set-slot

# Set slot

Encode/decode this packet in [Sandbox](../../../sandbox/java210#Clientbound.SetSlot)

**Id**: 22

**Id** (hex): 16

**Id** (bin): 00010110

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type
---|---
window | ubyte
slot | ushort
item | [slot](/protocol/java210/types/slot)
