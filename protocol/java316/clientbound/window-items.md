---
layout: default
---

[home](/)  /  [java316](/protocol/java316)  /  [clientbound](/protocol/java316/clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java316#Clientbound.WindowItems)

**Id**: 20

**Id** (hex): 14

**Id** (bin): 00010100

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java316/types/)
slots | [slot](/protocol/java316/types/slot)[] | ushort
