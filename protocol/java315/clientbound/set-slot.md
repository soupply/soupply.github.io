---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  set-slot

# Set slot

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.SetSlot)

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
item | [slot](/protocol/java315/types/slot)
