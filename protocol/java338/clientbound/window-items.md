---
layout: default
---

[home](/)  /  [java338](/protocol/java338)  /  [clientbound](/protocol/java338/clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java338#Clientbound.WindowItems)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java338/types/)
slots | [slot](/protocol/java338/types/slot)[] | ushort
