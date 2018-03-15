---
layout: default
---

[home](/)  /  [java335](/protocol/java335)  /  [serverbound](/protocol/java335/serverbound)  /  crafting-grid

# Crafting grid

Encode/decode this packet in [Sandbox](../../../sandbox/java335#Serverbound.CraftingGrid)

**Id**: 1

**Id** (hex): 01

**Id** (bin): 00000001

**Clientbound**: ✖️

**Serverbound**: ✔️

## Fields

Name | Type | Length
---|---|:---:
window | ubyte | [](/protocol/java335/types/)
action | ushort | [](/protocol/java335/types/)
return entry | [entry](/protocol/java335/types/entry)[] | ushort
prepare entry | [entry](/protocol/java335/types/entry)[] | ushort
