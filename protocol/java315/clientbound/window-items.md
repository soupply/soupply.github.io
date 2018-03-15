---
layout: default
---

[home](/)  /  [java315](/protocol/java315)  /  [clientbound](/protocol/java315/clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java315#Clientbound.WindowItems)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java315/types/)
slots | [slot](/protocol/java315/types/slot)[] | ushort
