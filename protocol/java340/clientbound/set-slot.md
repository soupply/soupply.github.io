---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  set-slot

# Set slot

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.SetSlot)

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
item | [slot](/protocol/java340/types/slot)
