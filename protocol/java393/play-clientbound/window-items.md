---
layout: default
---

[home](/)  /  [java393](/protocol/java393)  /  [play-clientbound](/protocol/java393/play-clientbound)  /  window-items

# Window items

Encode/decode this packet in [Sandbox](../../../sandbox/java393#PlayClientbound.WindowItems)

**Id**: 21

**Id** (hex): 15

**Id** (bin): 00010101

**Clientbound**: ✔️

**Serverbound**: ✖️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java393/types/)
slots | [slot](/protocol/java393/types/slot)[] | ushort
