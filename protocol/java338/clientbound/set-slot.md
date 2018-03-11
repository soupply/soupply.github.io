---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  set-slot

# Set slot

Encode/decode this packet in [Sandbox](../../../sandbox/java338#clientbound.set_slot)

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
item | [slot](/protocol/java338/types/slot)
