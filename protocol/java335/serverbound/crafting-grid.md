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

Name | Type
---|---
window | ubyte
action | ushort
return entry | [entriesArray](/protocol/java335/arrays)
prepare entry | [entriesArray](/protocol/java335/arrays)
