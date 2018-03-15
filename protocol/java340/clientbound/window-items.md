---
layout: default
---

[home](/)  /  [java340](/protocol/java340)  /  [clientbound](/protocol/java340/clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java340#Clientbound.WindowItems)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java340/types/)
slots | [slot](/protocol/java340/types/slot)[] | ushort
