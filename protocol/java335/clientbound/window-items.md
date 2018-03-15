---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [clientbound](/protocol/java335/clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Clientbound.WindowItems)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java335/types/)
slots | [slot](/protocol/java335/types/slot)[] | ushort
